import React, { useState } from "react";
import {
  Search,
  BookOpen,
  FileText,
  Video,
  Download,
  Star,
  FolderOpen,
} from "lucide-react";

const resources = [
  {
    id: 1,
    title: "GST111 Lecture Notes",
    category: "Lecture Notes",
    type: "PDF",
    downloads: 245,
  },
  {
    id: 2,
    title: "Python Programming Guide",
    category: "E-Book",
    type: "PDF",
    downloads: 180,
  },
  {
    id: 3,
    title: "HTML & CSS Tutorial",
    category: "Video",
    type: "MP4",
    downloads: 132,
  },
  {
    id: 4,
    title: "Microsoft Office Handbook",
    category: "Manual",
    type: "PDF",
    downloads: 96,
  },
];

export default function Resources() {
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 rounded-2xl bg-[#002147] p-8 text-white shadow-lg">
          <h1 className="text-4xl font-bold">
            Digital Learning Resources
          </h1>

          <p className="mt-2 text-blue-200">
            Access lecture notes, videos, e-books, manuals, and learning materials.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow">
          <div className="flex items-center rounded-lg border px-4">
            <Search className="text-gray-500" />
            <input
              type="text"
              placeholder="Search learning resources..."
              className="w-full p-4 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">

          <div className="rounded-xl bg-white p-6 shadow">
            <FolderOpen className="mb-3 text-blue-700" size={36} />
            <h2 className="text-3xl font-bold">
              {resources.length}
            </h2>
            <p className="text-gray-600">Resources</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <BookOpen className="mb-3 text-green-600" size={36} />
            <h2 className="text-3xl font-bold">12</h2>
            <p className="text-gray-600">Courses</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Download className="mb-3 text-orange-600" size={36} />
            <h2 className="text-3xl font-bold">653</h2>
            <p className="text-gray-600">Downloads</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Star className="mb-3 text-yellow-500" size={36} />
            <h2 className="text-3xl font-bold">Featured</h2>
            <p className="text-gray-600">Study Materials</p>
          </div>

        </div>

        {/* Categories */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">

          <button className="rounded-xl bg-blue-700 p-6 text-white shadow hover:bg-blue-800">
            <FileText className="mx-auto mb-2" size={32} />
            Lecture Notes
          </button>

          <button className="rounded-xl bg-green-700 p-6 text-white shadow hover:bg-green-800">
            <Video className="mx-auto mb-2" size={32} />
            Video Lessons
          </button>

          <button className="rounded-xl bg-purple-700 p-6 text-white shadow hover:bg-purple-800">
            <BookOpen className="mx-auto mb-2" size={32} />
            E-Books
          </button>

          <button className="rounded-xl bg-orange-700 p-6 text-white shadow hover:bg-orange-800">
            <Download className="mx-auto mb-2" size={32} />
            Downloads
          </button>

        </div>

        {/* Resource Table */}
        <div className="rounded-xl bg-white p-8 shadow">

          <h2 className="mb-6 text-2xl font-bold">
            Available Resources
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Downloads</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredResources.map((resource) => (
                <tr key={resource.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">{resource.title}</td>
                  <td className="p-4">{resource.category}</td>
                  <td className="p-4">{resource.type}</td>
                  <td className="p-4">{resource.downloads}</td>
                  <td className="p-4">
                    <button className="rounded-lg bg-[#002147] px-4 py-2 text-white hover:bg-blue-900">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}