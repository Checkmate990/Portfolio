/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Amin's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Amin Samani's Portfolio",
    type: "website",
    url: "http://aminsamani.com/",
  },
};

//Home Page
const greeting = {
  title: "Amin Samani",
  logo_name: "AminSamani",
  nickname: "Checkmate990",
  subTitle:
    "A devoted software engineer with a flair for front-end development and a unique problem-solving approach hoping to develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  githubProfile: "https://github.com/Checkmate990",
};

const socialMediaLinks = [


  {
    name: "Github",
    link: "https://github.com/Checkmate990",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amin-s-7044bb117/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:aminsamani99@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
      {
        title: "Data Analytics",
        fileName: "DataScienceImg",
        skills: [
          "⚡ Experience of working with Computer Vision and NLP projects throughout my Economics degree and internship experience",
          "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis"
        ],
        softwareSkills: [
          {
            skillName: "Tensorflow",
            fontAwesomeClassname: "logos-tensorflow",
            style: {
              backgroundColor: "transparent",
            },
          },
          {
            skillName: "Keras",
            fontAwesomeClassname: "simple-icons:keras",
            style: {
              backgroundColor: "white",
              color: "#D00000",
            },
          },
          {
            skillName: "PyTorch",
            fontAwesomeClassname: "logos-pytorch",
            style: {
              backgroundColor: "transparent",
            },
          },
          {
            skillName: "Python",
            fontAwesomeClassname: "ion-logo-python",
            style: {
              backgroundColor: "transparent",
              color: "#3776AB",
            },
          },
        ],
      },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page


const degrees = {
  degrees: [
    {
      title: "University of Utah, UT",
      subtitle: "B.S in Economics",
      logo_path: "iiitk_logo.png",
      alt_name: "University of Utah",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I  studied basic software engineering subjects like DS, Algorithmsetc.",
        "⚡ Apart from this, I completed courses on Micro and Macro Economic theory, Data Science and MySQL.",
        "⚡ I was selected for Deans list and Bright Utah Scholarship which is given to top 5% of students in the University. I also lead University of Utah's Chess Team as Captain and President.",
      ],
      website_link: "https://www.utah.edu/",
    },
    {
      title: "Harvard University, MA",
      subtitle: "A.L.M in Software Engineering",
      logo_path: "iu_logo.png",
      alt_name: " Harvard University ",
      duration: " 2022 - 2024(Expected)",
      descriptions: [
        "⚡ I have taken varity of courses and completed projects in Python, React, Angular and Cloud Computing.",
        "⚡ During my time at Harvard, I've also been a member of Harvard's collegiate Chess Team."
      ],
      website_link: "https://www.harvard.edu/",
    },
    {
      title: "Flatiron School, NY",
      subtitle: "Full-Time Software Engineering Bootcamp",
      logo_path: "FS_wiki.png",
      alt_name: " Flatiron School ",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Full-time Software engineering bootcamp that covered everything related to Full-Stack development. I graduated with 100% pass rate on all the 5 code challenges.",
        "Javascript, React, Python, Flask, SQLAlchemy"
      ],
      website_link: "https://flatironschool.com/courses/coding-bootcamp/",
    }
    
  ]
};



// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. Since starting my journey I have foucused on learning new technologies and building useful applications. I have worked on many projects, some of which are listed below.",
  avatar_image_path: "projects_image.svg",
};



// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Amin.jpg",
    description:
      "I'm currently seeking opportunities to apply my skills in a professional setting and make meaningful contributions to a team. If you have any job openings that you think would be a good fit for me or would like to learn more about my experience, please don't hesitate to reach out to me via email or through the contact form on this page. I would be happy to discuss how I can contribute to your team and help you achieve your goals. Thank you for your time and consideration, and I look forward to hearing from you soon.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "On my personal blog, I've been sharing my journey through the world of software engineering. Now, I'm thinking about branching out a bit and starting to write about other aspects of life as well.",
    link: "https://medium.com/@aminsamani",
    avatar_image_path: "blogs_image.svg",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  projectsHeader,
  contactPageData,
};
