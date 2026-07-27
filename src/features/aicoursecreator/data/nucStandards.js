// NUC CCMAS (Core Curriculum and Minimum Academic Standards)
export const nucStandards = {
  disciplines: {
    engineering: {
      id: 'engineering',
      name: 'Engineering',
      code: 'ENG',
      coreCreditHours: 70,
      electiveCreditHours: 30,
      requiredCourses: [
        'Engineering Mathematics',
        'Engineering Physics',
        'Engineering Chemistry',
        'Engineering Drawing',
        'Computer Programming',
        'Technical Communication'
      ],
      learningOutcomes: [
        'Apply scientific and engineering knowledge to solve problems',
        'Design and conduct experiments',
        'Analyze and interpret data',
        'Design systems, components, or processes',
        'Function effectively on multidisciplinary teams'
      ]
    },
    medicine: {
      id: 'medicine',
      name: 'Medicine and Surgery',
      code: 'MED',
      coreCreditHours: 75,
      electiveCreditHours: 25,
      requiredCourses: [
        'Human Anatomy',
        'Physiology',
        'Biochemistry',
        'Pathology',
        'Pharmacology',
        'Clinical Medicine'
      ],
      learningOutcomes: [
        'Apply medical knowledge to patient care',
        'Perform clinical procedures',
        'Diagnose and manage diseases',
        'Communicate effectively with patients',
        'Practice evidence-based medicine'
      ]
    },
    law: {
      id: 'law',
      name: 'Law',
      code: 'LAW',
      coreCreditHours: 70,
      electiveCreditHours: 30,
      requiredCourses: [
        'Nigerian Legal System',
        'Constitutional Law',
        'Criminal Law',
        'Law of Contract',
        'Tort Law',
        'Legal Methods'
      ],
      learningOutcomes: [
        'Apply legal principles to solve problems',
        'Analyze and interpret legal documents',
        'Develop legal arguments',
        'Understand the Nigerian legal system',
        'Practice ethical legal conduct'
      ]
    },
    socialSciences: {
      id: 'socialSciences',
      name: 'Social Sciences',
      code: 'SOC',
      coreCreditHours: 65,
      electiveCreditHours: 35,
      requiredCourses: [
        'Introduction to Sociology',
        'Social Psychology',
        'Research Methods',
        'Statistics',
        'Social Theory',
        'Nigerian Social Structure'
      ],
      learningOutcomes: [
        'Understand social structures and institutions',
        'Apply sociological theories',
        'Conduct social research',
        'Analyze social data',
        'Address social issues'
      ]
    },
    agriculture: {
      id: 'agriculture',
      name: 'Agriculture',
      code: 'AGR',
      coreCreditHours: 70,
      electiveCreditHours: 30,
      requiredCourses: [
        'Introduction to Agriculture',
        'Soil Science',
        'Crop Production',
        'Animal Science',
        'Agricultural Economics',
        'Farm Management'
      ],
      learningOutcomes: [
        'Apply agricultural principles to production',
        'Manage agricultural enterprises',
        'Understand agricultural economics',
        'Implement sustainable practices',
        'Improve agricultural productivity'
      ]
    },
    education: {
      id: 'education',
      name: 'Education',
      code: 'EDU',
      coreCreditHours: 65,
      electiveCreditHours: 35,
      requiredCourses: [
        'Foundations of Education',
        'Educational Psychology',
        'Curriculum Studies',
        'Educational Technology',
        'Research Methods',
        'Teaching Practice'
      ],
      learningOutcomes: [
        'Understand educational theories and practices',
        'Design effective curriculum',
        'Apply teaching methodologies',
        'Assess student learning',
        'Use educational technology'
      ]
    },
    arts: {
      id: 'arts',
      name: 'Arts and Humanities',
      code: 'ART',
      coreCreditHours: 60,
      electiveCreditHours: 40,
      requiredCourses: [
        'History and Philosophy of Art',
        'Cultural Studies',
        'Critical Thinking',
        'Research Methods',
        'Nigerian Arts and Culture',
        'Creative Writing'
      ],
      learningOutcomes: [
        'Understand artistic traditions',
        'Apply critical analysis',
        'Create original works',
        'Interpret cultural texts',
        'Develop creative expression'
      ]
    }
  },

  // NUC General Studies Requirements
  generalStudies: {
    required: [
      { code: 'GST101', name: 'Use of English I', credits: 2 },
      { code: 'GST102', name: 'Use of English II', credits: 2 },
      { code: 'GST103', name: 'Introduction to Logic', credits: 2 },
      { code: 'GST104', name: 'Nigerian Peoples and Culture', credits: 2 },
      { code: 'GST105', name: 'Introduction to Philosophy', credits: 2 },
      { code: 'GST106', name: 'Peace and Conflict Resolution', credits: 2 }
    ],
    elective: [
      { code: 'GST201', name: 'Entrepreneurship', credits: 2 },
      { code: 'GST202', name: 'Leadership and Ethics', credits: 2 },
      { code: 'GST203', name: 'Science and Technology', credits: 2 },
      { code: 'GST204', name: 'Gender Studies', credits: 2 }
    ]
  }
};

export default nucStandards;