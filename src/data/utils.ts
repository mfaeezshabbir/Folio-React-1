export const name = "Muhammad Faeez";
export const role = "Software Engineer - Graphic Designer";
export const heroImage = "/assets/Profile-Pic.png";

export const locationTitleMap: { [key: string]: string } = {
  "/": "My Base",
  "/journey": "Journey",
  "/sorcery": "Sorcery",
  "/braindumps": "Brain Dumps",
  "/pingme": "Ping Me",
};

import { RiCodeBoxLine, RiComputerLine, RiPaletteLine } from "react-icons/ri";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaBehance,
  FaLinkedin,
  FaReact,
  FaPython,
  FaRegHandshake,
} from "react-icons/fa";
import { GiJourney, GiFilmProjector } from "react-icons/gi";

import { SiMinutemailer } from "react-icons/si";
import { IoIosLocate } from "react-icons/io";
import { HiRocketLaunch } from "react-icons/hi2";
import {
  BsFillCalendarEventFill,
  BsFillGrid1X2Fill,
  // BsFillPhoneFill,
} from "react-icons/bs";

export const navLinks = [
  { name: "Inside Scoop", path: "/", icon: HiRocketLaunch },
  { name: "Tech Journey", path: "/journey", icon: GiJourney },
  { name: "Code Sorcery", path: "/sorcery", icon: GiFilmProjector },
  // { name: "Brain Dump", path: "/braindumps", icon: GiScrollQuill },
  { name: "Ping Me", path: "/pingme", icon: FaRegHandshake },
];
export const personalInfoData = [
  // { label: "Phone", value: "+1 123-456-7890", icon: BsFillPhoneFill },
  { label: "Location", value: "Bahawalpur, Pak", icon: IoIosLocate },
  { label: "Email", value: "mfaeezshabbir@gmail.com", icon: SiMinutemailer },
  { label: "Birthday", value: "April 08, 2003", icon: BsFillCalendarEventFill },
];

export const socialMediaLinks = [
  { icon: FaFacebook, link: "https://www.facebook.com/mfaeezshabbir" },
  { icon: FaInstagram, link: "https://www.instagram.com/mfaeezshabbir" },
  { icon: FaTwitter, link: "https://twitter.com/mfaeezshabbir" },
  { icon: FaGithub, link: "https://github.com/mfaeezshabbir" },
  { icon: FaBehance, link: "https://www.behance.net/mfaeezshabbir" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/mfaeezshabbir" },
];

export const servicesData = [
  {
    title: "Web Development",
    description: "Creating responsive and interactive web applications",
    icon: RiCodeBoxLine,
  },
  {
    title: "Software Engineering",
    description: "Building scalable and robust software solutions",
    icon: RiComputerLine,
  },
  {
    title: "Graphic Design",
    description: "Designing visually appealing graphics and illustrations",
    icon: RiPaletteLine,
  },
  {
    title: "React Development",
    description: "Developing user interfaces using React framework",
    icon: FaReact,
  },
  {
    title: "Python Programming",
    description: "Writing efficient and clean Python code",
    icon: FaPython,
  },
  {
    title: "UI Design",
    description:
      "Designing user interfaces that are intuitive, user-friendly, and visually appealing.",
    icon: BsFillGrid1X2Fill,
  },
];

// export const clientImages = [
//   { name: "Client 1", image: "https://via.placeholder.com/300x200" },
//   { name: "Client 2", image: "https://via.placeholder.com/300x200" },
//   { name: "Client 3", image: "https://via.placeholder.com/300x200" },
//   { name: "Client 3", image: "https://via.placeholder.com/300x200" },
//   { name: "Client 3", image: "https://via.placeholder.com/300x200" },
// ];

export const AboutMe =
  "I am Muhammad Faeez Shabbir, a graduating software engineer and graphic designer specializing in web development using ReactJS. With a keen eye for detail and a passion for creating exceptional user experiences, I am dedicated to delivering high-quality projects that seamlessly blend functionality and aesthetics. My academic background, combined with my hands-on experience in web development and design, has equipped me with a strong foundation in problem-solving, collaboration, and innovation. As an adaptable and enthusiastic individual, I thrive in dynamic environments and continuously seek opportunities to learn and grow. With a drive to make a positive impact through technology, I am excited to embark on new challenges and contribute to the ever-evolving world of software development.";

export const events = [
  {
    id: 1,
    title: "BS Software Engineering, Islamia University of Bahawalpur",
    date: "2020 - 2024",
    description:
      "Studied software engineering with a focus on web development and related technologies.",
  },
  {
    id: 2,
    title: "Core Team Member - Google DSC, IUB-Chapter",
    date: "2021-2022",
    description:
      "Organized tech events and workshops for students. Mentored students and provided guidance on software development projects.",
  },
  {
    id: 3,
    title: "Volunteer - Solution Fest",
    date: "2022",
    description:
      "Worked with a national-level student-run event aimed at solving challenges related to Google products. Assisted in organizing the event and provided technical assistance to participants.",
  },
  {
    id: 4,
    title: "DevHack Club Lead - IUB",
    date: "2022 - Present",
    description:
      "Managed the club and organized events and workshops for students. Mentored students and provided guidance on software development projects.",
  },
  {
    id: 5,
    title: "Student Ambassador - Intel's oneAPI",
    date: "April 2023 - Present",
    description:
      "Promoted oneAPI and provided technical assistance to students and developers. Organized hackathons and other technical events.",
  },
];

import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNextdotjs,
  SiOracle,
  SiGit,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";

export const techStackData = [
  { name: "ReactJS", icon: SiReact },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Tailwindcss", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "Oracle", icon: SiOracle },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "Illustrator", icon: SiAdobeillustrator },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Mysql", icon: SiMysql },
  { name: "Express.js", icon: SiExpress },
];

export const knowledgeList = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "ReactJS" },
  { id: 3, name: "HTML" },
  { id: 4, name: "CSS" },
  { id: 5, name: "JavaScript" },
  { id: 6, name: "Frontend Development" },
  { id: 7, name: "UI/UX Design" },
  { id: 8, name: "Graphic Design" },
  { id: 9, name: "Problem Solving" },
  { id: 10, name: "Teamwork" },
  { id: 11, name: "Communication" },
  { id: 12, name: "Leadership" },
  { id: 13, name: "Project Management" },
  { id: 14, name: "Time Management" },
  { id: 15, name: "Creativity" },
];

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  project: string;
  techUsed: string;
  repoLink: [string, string];
  liveLink?: string;
}

export const projectList:Project[] = [
  {
    id: 1,
    title: "Event Branding",
    project: "Graphic Design",
    category: "Graphics",
    description: `<li>As a volunteer graphic designer for SolutionFest, I had the opportunity to create various designs including logos, covers, banners for social media, and posts. My designs were aimed at promoting the event and creating a strong brand identity for SolutionFest.</li>
<li>I created several logo options that captured the essence of the event and reflected its mission. These logos were used in promotional materials such as flyers, brochures, and banners. In addition to this, I also designed covers and banners for social media channels like Facebook, Instagram, and Twitter. These designs were used to create a cohesive online presence and increase engagement.</li>
<li>My designs for social media posts were aimed at promoting the event, sharing updates, and creating excitement among the target audience. I ensured that the designs were visually appealing, easy to understand, and in line with the brand identity of SolutionFest.</li>
<li>Overall, my role as a volunteer graphic designer for SolutionFest allowed me to contribute to the success of the event by creating high-quality designs that effectively communicated its message and captured the attention of the target audience.</li>
`,
    image: "/assets/solutionFest.webp",
    techUsed: "Adobe Illustrator",
    // liveLink: "https://example.com/project1",
    repoLink: [
      "Behance",
      "https://www.behance.net/gallery/165384823/SolutionFest-2k22",
    ],
  },
  {
    id: 2,
    title: "Rush Super Market",
    project: "Desktop App",
    category: "Desktop",
    description: `<p>The <strong>Rush Super Market Inventory Management App</strong> is a desktop application designed and developed by me using C# and the .NET Framework. This application is designed to help supermarket managers manage inventory, users, and orders in real-time.</p>
<strong>Features:</strong>
    <li>Inventory Management: Add and manage items in the supermarket inventory, view stock levels, and receive alerts when items are running low.</li>
    <li>User Management: Add, edit, and remove users with different access levels. The app also has an admin panel for managing multiple users at once.</li>
    <li>Order Management: View, track, and manage orders placed by customers in real-time.</li>
    <li>Real-time Data Storage: The app stores all data in a SQL Server database, ensuring that data is secure and easily accessible.</li>
    <li>Secure Login: The app has a secure login system, ensuring that only authorized personnel can access the system.</li>
  <strong>Tech Stack:</strong>
    <li>Programming Language: C#</li>
    <li>Framework: .NET Framework</li>
    <li>Database: SQL Server</li>
  <strong>Benefits:</strong>
    <li>Real-time Inventory Management: Managers can view inventory stock levels and receive alerts when stock levels are running low, enabling them to reorder items in time.</li>
    <li>User Access Management: Managers can add, edit, and remove users with different access levels, ensuring that only authorized personnel have access to sensitive data.</li>
    <li>Real-time Order Tracking: Managers can view and track orders placed by customers in real-time, enabling them to manage orders more efficiently.</li>
    <li>Easy to Use: The app has a user-friendly interface that makes it easy to manage inventory, users, and orders.</li>
    <li>Secure Data Storage: The app stores all data in a SQL Server database, ensuring that data is secure and easily accessible.</li>
    `,
    image: "/assets/RushSM.webp",
    techUsed: "C#, .Net, SQL Database",
    // liveLink: "https://example.com/project2",
    repoLink: [
      "GitHub",
      "https://github.com/mfaeezshabbir/Rush_Super_Market.git",
    ],
  },
  {
    id: 3,
    title: "GitFi",
    project: "Web App",
    category: "Web",
    description:`<strong>GitHub User Finder</strong>
      The GbitHub User Finder is a web-based application designed and developed by Muhammad Faeez Shabbir. This application is a powerful tool for discovering GitHub users and exploring their profiles and repositories.
      
      With the GitHub User Finder, you can quickly and easily search for GitHub users and explore their profiles and repositories. From discovering new developers to finding potential collaborators, the GitHub User Finder has everything you need to take your GitHub game to the next level.
      
      Thanks to its user-friendly interface and powerful search capabilities, the GitHub User Finder is the ultimate tool for exploring the vast world of GitHub. So why wait? Try it out today and discover your next favorite developer!
      
      <b>Tech Stack</b>
      HTML
      CSS
      JavaScript
      GitHub API

      Whether you’re a seasoned GitHub user or just getting started, the GitHub User Finder has something for everyone. So why wait? Try it out today and discover your next favorite developer!
      `,
    image:
      "/assets/GitFi.webp",
    techUsed: "HTML, CSS, JS, GitHub API",
    liveLink: "https://mfaeezshabbir.github.io/GitFi/",
    repoLink: ["GitHub", "https://github.com/mfaeezshabbir/GitFi"],
  },
  {
    id: 4,
    title: "Todo App",
    project: "Web App",
    category: "Web",
    description: `The Todo-App is a web-based application designed and developed by Muhammad Faeez Shabbir. This application is a simple yet powerful tool for managing your to-do list and staying organized.

With its intuitive interface and user-friendly features, the Todo-App allows users to easily:
    <i>
    Create, edit, and delete tasks
    Set due dates and priorities
    </i>
      Whether you’re a busy professional or a student with a lot on your plate, the Todo-App can help you stay on track and get things done. Plus, it’s fully customizable, so you can tailor it to your specific needs and preferences.
      `,
    image:
      "/assets/todoApp.webp",
    techUsed: "HTML , CSS, JS",
    liveLink: "https://mfaeezshabbir.github.io/Todo-App/",
    repoLink: ["GitHub", "https://github.com/mfaeezshabbir/Todo-App"],
  },
];
