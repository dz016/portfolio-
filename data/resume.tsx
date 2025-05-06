import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import { Icons } from "../components/icons";

export const DATA = {
  name: "Dawood Zargar",
  initials: "DZ",
  url: "",
  location: "India, Kashmir",
  locationLink: "https://www.google.com/maps/place/srinagar",
  description:
    '"Driving end-to-end excellence with seamless user experiences through masterfully crafted code."',
  summary:
    "Hi, I’m Dawood Aziz Zargar, a Data Scientist and AI enthusiast passionate about leveraging technology to solve real-world problems. I combine academic excellence with hands-on experience in cutting-edge research and development.  \n\n" +
    "Currently, I’m focusing on data science, AI, and their applications.\n\n" +
    "Some key areas of focus for me include:\n" +
    "- Advancing expertise in Machine Learning, Deep Learning (ANNs, CNNs, Transformers), and data analysis.\n" +
    "- Exploring emerging AI models and their impact on data transfer and optimization.\n" +
    "- Exploring new development tools and frameworks\n\n" +
    "If you’re interested in working on collaborative projects that push boundaries or mentoring me in my journey, I’d love to connect.\n\n",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "JavaScript",
    "Git",
    "GitHub",
    "Jupyter Notebook",
    "Google Colab",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "Keras",
    "TensorFlow",
    "Matplotlib",
    "React",
    "Express.js",
    "Flask",
    "SQL",
    "Postgres",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blogs" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#contact", icon: PencilLine, label: "Contact" },
  ],
  contact: {
    email: "dawoodzargar08@gmail.com",
    tel: "+91 7006326061",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dz016/",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dawood-aziz-zargar-84700b18b/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/zargar_dawood",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "IIT delhi",
      href: "",
      badges: ["intern"],
      location: "ON-SITE",
      title: "Research-intern",
      logoUrl: "/iitd.png",
      start: "dec 2023",
      end: "march 2024",
      description:
        "During my internship, I used a semantic-aided image generation model, prioritizing meaning over data. Weoptimized 6G communication by integrating CNNs, Transformers, and Stable Diffusion, enhancing transfer speed.",
    },
  ],
  education: [
    {
      school: "National institute of srinagar",
      href: "https://nitsri.ac.in/",
      degree: "btech",
      start: "2021",
      logoUrl: "/nits.png",
      end: "2025",
    },
  ],
  projects: [],
} as const;
