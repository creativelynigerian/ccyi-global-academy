// JAMB Syllabi for various subjects
export const jambSyllabi = {
  government: {
    id: 'government',
    name: 'Government',
    objectives: [
      'Demonstrate knowledge of basic concepts in government',
      'Understand constitutional development in Nigeria',
      'Analyze political institutions and processes',
      'Evaluate political systems and ideologies',
      'Apply government principles to real-world situations'
    ],
    topics: [
      {
        topic: 'Basic Concepts in Government',
        subtopics: ['Power', 'Authority', 'Legitimacy', 'Sovereignty', 'Democracy', 'Dictatorship']
      },
      {
        topic: 'Constitutional Development in Nigeria',
        subtopics: ['Colonial Era', 'Independence', 'Constitutional Conferences', 'Republican Constitutions']
      },
      {
        topic: 'Political Institutions',
        subtopics: ['The Executive', 'The Legislature', 'The Judiciary', 'Civil Service', 'Political Parties']
      },
      {
        topic: 'Nigerian Federalism',
        subtopics: ['Federal Structure', 'Revenue Allocation', 'State Creation', 'Local Government']
      }
    ],
    recommendedTextbooks: [
      'Government for Senior Secondary Schools by A.B. Adebayo',
      'Nigerian Government and Politics by C.O. Olaniyi',
      'Essential Government by O. D. Amucheazi'
    ]
  },

  economics: {
    id: 'economics',
    name: 'Economics',
    objectives: [
      'Understand basic economic concepts and principles',
      'Apply economic theories to real-world situations',
      'Analyze economic problems and policies',
      'Evaluate economic systems and institutions',
      'Interpret economic data and statistics'
    ],
    topics: [
      {
        topic: 'Basic Economic Concepts',
        subtopics: ['Scarcity', 'Choice', 'Opportunity Cost', 'Production', 'Consumption']
      },
      {
        topic: 'Microeconomics',
        subtopics: ['Demand and Supply', 'Market Structures', 'Elasticity', 'Theory of Production']
      },
      {
        topic: 'Macroeconomics',
        subtopics: ['National Income', 'Inflation', 'Unemployment', 'Economic Growth']
      },
      {
        topic: 'Nigerian Economy',
        subtopics: ['Structure', 'Development', 'Agriculture', 'Industry', 'Oil and Gas']
      }
    ],
    recommendedTextbooks: [
      'Economics for Senior Secondary Schools by A. A. Akinwande',
      'Fundamentals of Economics by E. A. Ogunlade',
      'Nigerian Economy by R. A. Adebayo'
    ]
  },

  mathematics: {
    id: 'mathematics',
    name: 'Mathematics',
    objectives: [
      'Apply mathematical concepts to solve problems',
      'Demonstrate computational skills',
      'Use mathematical reasoning and logic',
      'Understand mathematical relationships',
      'Apply mathematical knowledge to other disciplines'
    ],
    topics: [
      {
        topic: 'Number and Numeration',
        subtopics: ['Number Systems', 'Indices', 'Logarithms', 'Surds']
      },
      {
        topic: 'Algebra',
        subtopics: ['Polynomials', 'Equations', 'Inequalities', 'Matrices']
      },
      {
        topic: 'Geometry',
        subtopics: ['Plane Geometry', 'Coordinate Geometry', 'Trigonometry', 'Solid Geometry']
      },
      {
        topic: 'Calculus',
        subtopics: ['Differentiation', 'Integration', 'Applications']
      }
    ],
    recommendedTextbooks: [
      'New General Mathematics by M. F. Macrae',
      'Comprehensive Mathematics by C. O. A. Okafor',
      'Mathematics for Senior Secondary Schools by J. O. Ogunlade'
    ]
  },

  english: {
    id: 'english',
    name: 'English Language',
    objectives: [
      'Demonstrate proficiency in English language skills',
      'Understand and apply English grammar rules',
      'Comprehend and analyze written texts',
      'Write effectively and coherently',
      'Develop critical reading and thinking skills'
    ],
    topics: [
      {
        topic: 'Comprehension',
        subtopics: ['Reading for Understanding', 'Inferential Analysis', 'Critical Reading']
      },
      {
        topic: 'Grammar',
        subtopics: ['Parts of Speech', 'Sentence Structure', 'Tenses', 'Punctuation']
      },
      {
        topic: 'Vocabulary',
        subtopics: ['Word Formation', 'Idioms', 'Phrases', 'Synonyms and Antonyms']
      },
      {
        topic: 'Essay Writing',
        subtopics: ['Structure', 'Coherence', 'Argumentation', 'Descriptive and Narrative']
      }
    ],
    recommendedTextbooks: [
      'English for Senior Secondary Schools by A. O. Ogunlade',
      'The Use of English by C. O. A. Okafor',
      'Comprehensive English by M. O. Adebayo'
    ]
  },

  physics: {
    id: 'physics',
    name: 'Physics',
    objectives: [
      'Understand physical laws and principles',
      'Apply physics to solve real-world problems',
      'Conduct experiments and analyze data',
      'Develop scientific reasoning skills',
      'Understand the relationship between physics and technology'
    ],
    topics: [
      {
        topic: 'Mechanics',
        subtopics: ['Motion', 'Force', 'Energy', 'Work', 'Power', 'Momentum']
      },
      {
        topic: 'Thermodynamics',
        subtopics: ['Heat', 'Temperature', 'Gas Laws', 'Thermal Expansion']
      },
      {
        topic: 'Waves and Optics',
        subtopics: ['Wave Properties', 'Light', 'Reflection', 'Refraction']
      },
      {
        topic: 'Electricity and Magnetism',
        subtopics: ['Current Electricity', 'Magnetic Fields', 'Electromagnetic Induction']
      },
      {
        topic: 'Modern Physics',
        subtopics: ['Atomic Structure', 'Nuclear Physics', 'Electronics']
      }
    ],
    recommendedTextbooks: [
      'Physics for Senior Secondary Schools by J. O. Ogunlade',
      'Principles of Physics by A. A. Adebayo',
      'Comprehensive Physics by C. O. A. Okafor'
    ]
  },

  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    objectives: [
      'Understand chemical principles and laws',
      'Apply chemistry to solve real-world problems',
      'Conduct experiments and analyze chemical data',
      'Develop scientific reasoning skills',
      'Understand the relationship between chemistry and other sciences'
    ],
    topics: [
      {
        topic: 'Atomic Structure',
        subtopics: ['Atomic Theory', 'Electron Configuration', 'Periodic Table']
      },
      {
        topic: 'Chemical Bonding',
        subtopics: ['Ionic Bonding', 'Covalent Bonding', 'Metallic Bonding']
      },
      {
        topic: 'Organic Chemistry',
        subtopics: ['Hydrocarbons', 'Functional Groups', 'Polymers']
      },
      {
        topic: 'Inorganic Chemistry',
        subtopics: ['Acids, Bases and Salts', 'Transition Metals', 'Non-metals']
      },
      {
        topic: 'Physical Chemistry',
        subtopics: ['Thermodynamics', 'Kinetics', 'Equilibrium']
      }
    ],
    recommendedTextbooks: [
      'Chemistry for Senior Secondary Schools by A. O. Ogunlade',
      'Principles of Chemistry by M. O. Adebayo',
      'Comprehensive Chemistry by C. O. A. Okafor'
    ]
  },

  biology: {
    id: 'biology',
    name: 'Biology',
    objectives: [
      'Understand biological principles and theories',
      'Apply biology to solve real-world problems',
      'Conduct experiments and analyze biological data',
      'Develop scientific reasoning skills',
      'Understand the relationship between biology and other sciences'
    ],
    topics: [
      {
        topic: 'Cell Biology',
        subtopics: ['Cell Structure', 'Cell Function', 'Cell Division', 'Genetics']
      },
      {
        topic: 'Human Biology',
        subtopics: ['Anatomy', 'Physiology', 'Health and Disease']
      },
      {
        topic: 'Plant Biology',
        subtopics: ['Plant Structure', 'Plant Function', 'Photosynthesis']
      },
      {
        topic: 'Ecology',
        subtopics: ['Ecosystems', 'Food Chains', 'Environmental Conservation']
      },
      {
        topic: 'Evolution',
        subtopics: ['Theories of Evolution', 'Natural Selection', 'Speciation']
      }
    ],
    recommendedTextbooks: [
      'Biology for Senior Secondary Schools by J. O. Ogunlade',
      'Principles of Biology by A. A. Adebayo',
      'Comprehensive Biology by C. O. A. Okafor'
    ]
  }
};

export default jambSyllabi;