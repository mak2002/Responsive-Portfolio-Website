const data = {
  name: "Mayank Bondre",
  title: "Web Developer",

  navbar: ["about", "skills", "projects", "contact"],

  about: {
    description:
      "Junior Web Developer 👨, Currently a Student Pursuing B.Tech Degree in Computer Science, Interested in Contributing to Open Source 🎯, Always Learning new things 📝",
  },
  frontendSkills: [
    "React",
    "JavaScript",
    "Git",
    "Material-UI",
    "CSS",
    "Tailwind",
  ],
  backendSkills: [
    "NodeJs",
    // "MySQL",
    "PostgresSQL",
    "ExpressJS",
    // "Node JS, Express",
  ],

  projects: [
    {
      projectName: "Student Result Management app",
      imgPath: "addresult",
      description:
        "A Full Stack App used to manage Students Results by storing it to PostgreSQL. It also has ability to dynamically import Students List and Result from CSV file to database as well as show stored data in tabular format",
      projectLink: "https://github.com/mak2002/students-results-management-app",
      frontEnd: "ReactJS, Material-UI",
      backEnd: "PostgresSQL, Express JS",
    },
    {
      projectName: " Note Taking App",
      imgPath: "noteapp",
      description:
        "This is just a Simple Note Taking App used to store and delete notes and todos.",
      projectLink: "https://github.com/mak2002/Note-Taking-App",
      frontEnd: "ReactJS, Material-UI",
      backEnd: "JSON Server",
    },
    {
      projectName: "Color Storage App",
      imgPath: "colorapp",
      description:
        "Users can store colors by entering the color in input field and by clicking on box it gets copied to clipboard .",
      projectLink: "https://github.com/mak2002/Color-Theme-Storage-App",
      frontEnd: "ReactJS",
      backEnd: "No backend",
    },
    {
      projectName: " Github Stats App",
      imgPath: "githubstats",
      description:
        "A ReactJS app where you can put GitHub Repository URL and get information like Last Commit, Weekly Commit and Repo Creation Date",
      projectLink: "https://github.com/mak2002/Github-repo-stats",
      frontEnd: "ReactJS",
      backEnd: "Used GitHub API",
    },
  ],
};

export default data;
