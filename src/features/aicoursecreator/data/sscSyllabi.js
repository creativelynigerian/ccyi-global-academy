// WAEC/NECO SSCE Syllabi
export const sscSyllabi = {
  government: {
    id: 'government',
    name: 'Government',
    examBody: 'WAEC/NECO',
    objectives: [
      'Understand the basic concepts in government',
      'Analyze the constitutional development of Nigeria',
      'Evaluate political institutions and processes',
      'Understand the role of government in society'
    ],
    topics: [
      { topic: 'Basic Concepts', subtopics: ['State', 'Nation', 'Government', 'Democracy'] },
      { topic: 'Constitutional Development', subtopics: ['Colonial Period', 'Independence', 'Republican Constitutions'] },
      { topic: 'Political Institutions', subtopics: ['Executive', 'Legislature', 'Judiciary'] },
      { topic: 'Nigerian Federalism', subtopics: ['Federal Structure', 'Revenue Allocation', 'Local Government'] }
    ]
  },

  economics: {
    id: 'economics',
    name: 'Economics',
    examBody: 'WAEC/NECO',
    objectives: [
      'Understand basic economic concepts and principles',
      'Analyze economic problems and policies',
      'Evaluate economic systems and institutions'
    ],
    topics: [
      { topic: 'Basic Concepts', subtopics: ['Scarcity', 'Choice', 'Opportunity Cost'] },
      { topic: 'Microeconomics', subtopics: ['Demand', 'Supply', 'Market Structures'] },
      { topic: 'Macroeconomics', subtopics: ['National Income', 'Inflation', 'Unemployment'] }
    ]
  },

  mathematics: {
    id: 'mathematics',
    name: 'Mathematics',
    examBody: 'WAEC/NECO',
    objectives: [
      'Apply mathematical concepts to solve problems',
      'Use mathematical reasoning and logic',
      'Understand mathematical relationships and patterns'
    ],
    topics: [
      { topic: 'Number and Numeration', subtopics: ['Number Systems', 'Indices', 'Logarithms'] },
      { topic: 'Algebra', subtopics: ['Polynomials', 'Equations', 'Inequalities'] },
      { topic: 'Geometry', subtopics: ['Plane Geometry', 'Coordinate Geometry'] }
    ]
  },

  english: {
    id: 'english',
    name: 'English Language',
    examBody: 'WAEC/NECO',
    objectives: [
      'Demonstrate proficiency in English language skills',
      'Understand and apply English grammar rules',
      'Comprehend and analyze written texts',
      'Write effectively and coherently'
    ],
    topics: [
      { topic: 'Comprehension', subtopics: ['Reading for Understanding', 'Critical Reading'] },
      { topic: 'Grammar', subtopics: ['Parts of Speech', 'Sentence Structure', 'Tenses'] },
      { topic: 'Essay Writing', subtopics: ['Structure', 'Coherence', 'Argumentation'] }
    ]
  },

  physics: {
    id: 'physics',
    name: 'Physics',
    examBody: 'WAEC/NECO',
    objectives: [
      'Understand physical laws and principles',
      'Apply physics to solve real-world problems',
      'Conduct experiments and analyze data'
    ],
    topics: [
      { topic: 'Mechanics', subtopics: ['Motion', 'Force', 'Energy', 'Work'] },
      { topic: 'Thermodynamics', subtopics: ['Heat', 'Temperature', 'Gas Laws'] },
      { topic: 'Waves and Optics', subtopics: ['Wave Properties', 'Light'] }
    ]
  },

  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    examBody: 'WAEC/NECO',
    objectives: [
      'Understand chemical principles and laws',
      'Apply chemistry to solve real-world problems',
      'Conduct experiments and analyze chemical data'
    ],
    topics: [
      { topic: 'Atomic Structure', subtopics: ['Atomic Theory', 'Electron Configuration'] },
      { topic: 'Chemical Bonding', subtopics: ['Ionic Bonding', 'Covalent Bonding'] },
      { topic: 'Organic Chemistry', subtopics: ['Hydrocarbons', 'Functional Groups'] }
    ]
  },

  biology: {
    id: 'biology',
    name: 'Biology',
    examBody: 'WAEC/NECO',
    objectives: [
      'Understand biological principles and theories',
      'Apply biology to solve real-world problems',
      'Conduct experiments and analyze biological data'
    ],
    topics: [
      { topic: 'Cell Biology', subtopics: ['Cell Structure', 'Cell Division', 'Genetics'] },
      { topic: 'Human Biology', subtopics: ['Anatomy', 'Physiology', 'Health'] },
      { topic: 'Plant Biology', subtopics: ['Plant Structure', 'Photosynthesis'] }
    ]
  }
};

export default sscSyllabi;