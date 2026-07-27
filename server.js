const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('<Icon name="CheckCircle" size={20} color="#16a34a" /> Uploads directory created');
}

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// File filter - accept only specific file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/plain',
    'image/jpeg',
    'image/png',
    'image/gif',
    'video/mp4',
    'audio/mp3'
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('File type not allowed. Please upload PDF, DOC, PPT, XLS, TXT, JPG, PNG, or MP4 files.'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
  fileFilter: fileFilter
});

// ==============================================
// API Routes
// ==============================================

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileData = {
      id: Date.now(),
      name: req.file.originalname,
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`,
      size: req.file.size,
      type: req.file.mimetype,
      uploadedAt: new Date().toISOString()
    };

    // Save file metadata to a JSON file
    const metadataPath = path.join(__dirname, 'uploads-metadata.json');
    let metadata = [];
    if (fs.existsSync(metadataPath)) {
      metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    }
    metadata.push(fileData);
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

    res.json({
      message: 'File uploaded successfully!',
      file: fileData
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed. Please try again.' });
  }
});

// Get list of uploaded files
app.get('/api/files', (req, res) => {
  try {
    const metadataPath = path.join(__dirname, 'uploads-metadata.json');
    if (!fs.existsSync(metadataPath)) {
      return res.json([]);
    }
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    res.json(metadata);
  } catch (error) {
    console.error('Error reading files:', error);
    res.status(500).json({ error: 'Failed to get file list' });
  }
});

// Download file
app.get('/api/download/:filename', (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(uploadsDir, filename);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }
    
    res.download(filePath);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Failed to download file' });
  }
});

// Delete file
app.delete('/api/files/:id', (req, res) => {
  try {
    const fileId = parseInt(req.params.id);
    const metadataPath = path.join(__dirname, 'uploads-metadata.json');
    
    if (!fs.existsSync(metadataPath)) {
      return res.status(404).json({ error: 'File not found' });
    }
    
    let metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    const fileIndex = metadata.findIndex(f => f.id === fileId);
    
    if (fileIndex === -1) {
      return res.status(404).json({ error: 'File not found' });
    }
    
    // Delete physical file
    const filePath = path.join(uploadsDir, metadata[fileIndex].filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    
    // Remove from metadata
    metadata.splice(fileIndex, 1);
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
    
    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete file' });
  }
});

// Serve static files from uploads directory
app.use('/uploads', express.static(uploadsDir));

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'FILE_TOO_LARGE') {
      return res.status(413).json({ error: 'File too large. Maximum size is 50MB.' });
    }
    return res.status(400).json({ error: err.message });
  }
  res.status(500).json({ error: err.message || 'Something went wrong' });
});

// Start server
app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`<Icon name="Rocket" size={20} /> Server is running on port ${PORT}`);
  console.log(`?? Upload endpoint: http://localhost:${PORT}/api/upload`);
  console.log(`<Icon name="Folder" size={20} /> File list: http://localhost:${PORT}/api/files`);
  console.log(`========================================`);
});
