import { Code, Database, BrainCircuit, Users } from 'lucide-react';

export const personalInfo = {
  name: "Harish S S",
  role: "AI & Data Science Engineering Student",
  tagline: "AI/ML | Data Analysis | Data Science",
  location: "Coimbatore, Tamil Nadu, India",
  email: "harishayysamy@gmail.com",
  phone: "6369333308",
  linkedin: "https://linkedin.com/in/harish-ss-946b1133",
  github: "https://github.com/Harish-121-ss",
  summary: "Artificial Intelligence & Data Science engineering student with a strong foundation in Python, SQL, AI/ML, data analysis, and problem-solving. Experienced through internships in data analysis, Java programming, and AI/ML training, with academic projects focused on crop disease prediction and radar-based data analysis. Seeking opportunities to apply technical skills to real-world AI, machine learning, and data-driven problems."
};

export const skills = [
  {
    category: "Programming",
    icon: Code,
    items: ["Python", "Java", "C", "C++", "SQL"]
  },
  {
    category: "AI & Data",
    icon: BrainCircuit,
    items: ["Artificial Intelligence", "Machine Learning", "Data Science", "Data Analysis"]
  },
  {
    category: "Tools & Platforms",
    icon: Database,
    items: ["Power BI", "Infosys Springboard"]
  },
  {
    category: "Core Strengths",
    icon: Users,
    items: ["Problem-solving", "Communication", "Teamwork", "Leadership", "Adaptive Learning"]
  }
];

export const experience = [
  {
    role: "Data Analysis Intern",
    company: "Cognifyz IT Solutions Pvt. Ltd.",
    date: "05/07/2026 - 05/08/2026",
    description: [
      "Participated in professional data-analysis work and completed assigned analytical tasks with attention to detail.",
      "Demonstrated effective coordination, communication, and willingness to learn in a professional environment."
    ],
    tags: ["Data Analysis", "Professional Coordination"]
  },
  {
    role: "Virtual Intern - Java Programming",
    company: "CodeAlpha",
    date: "01/01/2026 - 30/01/2026",
    description: [
      "Completed a virtual internship focused on Java programming and strengthened programming-based problem-solving skills.",
      "Applied analytical thinking and consistency while completing assigned programming tasks."
    ],
    tags: ["Java", "Problem-solving"]
  },
  {
    role: "AI & Machine Learning Intern",
    company: "Profenaa Technologies",
    date: "16/06/2025 - 25/07/2025",
    description: [
      "Completed a 40-day intensive AI/ML internship program with 100% attendance.",
      "Developed practical understanding of AI/ML concepts and contributed to team projects.",
      "Applied problem-solving and analytical thinking while working collaboratively on technical tasks."
    ],
    tags: ["AI", "Machine Learning", "Team Projects"]
  }
];

export const projects = [
  {
    title: "AI-Driven Crop Disease Prediction",
    description: "Applied artificial intelligence and machine learning techniques to detect and predict crop diseases using environmental datasets.",
    tags: ["Artificial Intelligence", "Machine Learning", "Data Analysis"],
    link: "/projects/crop-disease-prediction.md",
    modalDetails: {
      type: "Academic Project",
      objective: "To explore and apply artificial intelligence and machine learning techniques to detect and predict crop diseases based on environmental datasets.",
      approach: "Focused on processing environmental data (temperature, humidity, etc.) associated with crop health to model relationships and predict outcomes.",
      workflow: ["Data Collection", "Data Preprocessing", "Model Exploration", "Evaluation"],
      learning: "Gained hands-on experience in ML algorithms, Python data analysis, and domain-specific dataset interpretation."
    }
  },
  {
    title: "Radar-Based Air Defence Data Analysis",
    description: "Processed and analyzed radar-related datasets to identify patterns and generate insights from complex data.",
    tags: ["Data Analysis", "Data Processing", "Data Insights"],
    link: "/projects/radar-air-defence-analysis.md",
    modalDetails: {
      type: "Academic Project",
      objective: "To process and analyze radar-related datasets to identify inherent patterns, anomalies, and generate analytical insights from complex structures.",
      approach: "Applied data analysis techniques to complex datasets to transform raw numerical data into understandable insights using Python methodologies.",
      workflow: ["Data Acquisition", "Data Preprocessing", "Exploratory Data Analysis", "Pattern Identification", "Insight Generation"],
      learning: "Enhanced skills in handling multi-dimensional datasets and strengthened problem-solving through unstructured data challenges."
    }
  }
];

export const education = [
  {
    degree: "B.Tech. in AI & Data Science",
    institution: "V.S.B. Engineering College",
    duration: "2023 - 2028",
    score: "8.38 / 10",
    scoreLabel: "Current CGPA",
    status: "2nd Year"
  },
  {
    degree: "Grade XII",
    institution: "Presentation Convent Matriculation Higher Secondary",
    duration: "July 2024",
    score: "75%",
    scoreLabel: "Percentage"
  },
  {
    degree: "Grade X",
    institution: "Orison Academy",
    duration: "July 2021",
    score: "70%",
    scoreLabel: "Percentage"
  }
];

export const certifications = [
  {
    name: "Big Data Computing",
    organization: "8-week NPTEL / IIT Kanpur course",
    date: "August - October 2025",
    score: "61%"
  },
  {
    name: "Free Data Analyst Course",
    organization: "Simplilearn",
    date: "July 7, 2025",
    score: null
  },
  {
    name: "Infosys Springboard",
    organization: "Infosys",
    date: "Training",
    score: null,
    details: "Training areas: Artificial Intelligence, Power BI, Data Structures and Algorithms"
  }
];

export const interests = [
  "Technology",
  "Continuous learning",
  "Listening to music"
];
