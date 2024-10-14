import {
    github,
    gitlab,
    instagram,
    linkedin,
    gitIcon,
    linuxIcon,
    mongoDbIcon,
    nodeJsIcon,
    postgreSqlIcon,
    pythonIcon,
    awsIcon,
    dockerIcon,
    terraformIcon,
    cssIcon,
    htmlIcon,
    javascriptIcon,
    reactIcon,
    tailwindIcon,
    framermotionIcon,
    wordpressIcon,
    figmaIcon,
    canvaIcon,


} from "../assets/index.js";

//IMPORTANT: To be able to attach components from libraries/npm packages in a JS file, we MUST import "React" and the components themselves -->NOTE: Then, we use the React.createElement() sytnax like described below
import React from "react";
import { FaHome, FaUsers, FaUser } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosMail } from "react-icons/io";

export const developerName = "Christopher Jimenez";

const navTitles = [
    //NOTE: If we want to attach a component and render it in our custom component in a JSX file, we MUST use the "React.createElement()" syntax with the props passed as an object with properties representing the individual props --> Example in this array (JSX syntax is not valid in a JS file)
    {
        id: 1,
        title: "Home",
        url: "/",
        icon: React.createElement(FaHome, {size: 30, color: "white"}),
        desktop: true,
    },
    {
        id: 2,
        title: "About",
        url: "/about",
        icon: React.createElement(FaUser, {size: 30, color: "white"}),
        desktop: true,
    },
    {
        id: 3,
        title: "Projects",
        url: "/projects",
        icon: React.createElement(GoProjectRoadmap, {size: 30, color: "white"}),
        desktop: true,
    },
    {
        id: 4,
        title: "Community",
        url: "/community",
        icon: React.createElement(FaUsers, {size: 30, color: "white"}),
        desktop: true,
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
        icon: React.createElement(IoIosMail, {size: 30, color: "white"}),
        desktop: false,
    }
];

const navIcons = [
    {
        id: 1,
        title: "GitHub",
        image: github,
        url: "https://github.com/chrisjimenez10",
    },
    {
        id: 2,
        title: "GitLab",
        image: gitlab,
        url: "https://gitlab.com/chrisjimenez10",
    },
    {
        id: 3,
        title: "LinkedIn",
        image: linkedin,
        url: "https://www.linkedin.com/in/christopherjimenez10/",
    },
    {
        id: 4,
        title: "Instagram",
        image: instagram,
        url: "https://www.instagram.com/chris10_jq/",
    },

];

export const homeHeading = "Transforming Ideas into Reality, One Line of Code at a Time.";
export const homeDescription = "With a passion for delivering high-quality solutions, I leverage my full-stack expertise to bring projects to life. From backend design to intuitive user interfaces, I ensure seamless integration and exceptional user experiences.";

export const aboutHeading = "Solving real-world problems, one commit at a time.";
export const aboutDescription = "I'm Christopher Jimenez, a curious and creative full-stack software engineer fueled by a desire to make a meaningful impact. With a passion for driving innovative solutions and a relentless pursuit of excellence, I'm committed to solving real-world problems through thoughtful design, meticulous coding, and collaborative teamwork. Whether it's streamlining processes, enhancing user experiences, or driving business growth, I'm passionate about harnessing technology to create positive change.";

// Tech Stack
const backendDevelopment = [
    {
        id: 1,
        title: "Python",
        image: pythonIcon,
    },
    {
        id: 2,
        title: "NodeJS",
        image: nodeJsIcon,
        bg: true,
    },
    {
        id: 3,
        title: "PostgreSQL",
        image: postgreSqlIcon,
    },
    {
        id: 4,
        title: "MongoDB",
        image: mongoDbIcon,
    },
    {
        id: 5,
        title: "Linux",
        image: linuxIcon,
    },
    {
        id: 5,
        title: "Git",
        image: gitIcon,
    },

];

const devOps = [
    {
        id: 1,
        title: "GitLab CI/CD",
        image: gitlab,
    },
    {
        id: 2,
        title: "Docker",
        image: dockerIcon,
        bg: true,
    },
    {
        id: 3,
        title: "Terraform",
        image: terraformIcon,
    },
    {
        id: 4,
        title: "AWS",
        image: awsIcon,
        bg: true,
    },
];

const webDevelopment = [
    {
        id: 1,
        title: "HTML",
        image: htmlIcon,
    },
    {
        id: 2,
        title: "CSS",
        image: cssIcon,
    },
    {
        id: 3,
        title: "JavaScript",
        image: javascriptIcon,
    },
    {
        id: 4,
        title: "ReactJS",
        image: reactIcon,
    },
    {
        id: 5,
        title: "TailwindCSS",
        image: tailwindIcon,
    },
    {
        id: 6,
        title: "FramerMotion",
        image: framermotionIcon,
    },
    {
        id: 7,
        title: "WordPress",
        image: wordpressIcon,
    },
];

const uiuxDesign = [
    {
        id: 1,
        title: "Figma",
        image: figmaIcon,
    },
    {
        id: 2,
        title: "Canva",
        image: canvaIcon,
    },
];

const experience = [
    {
        id: 1,
        title: "Software Engineer - Freelance",
        date: "2024",
    },
    {
        id: 2,
        title: "Software Engineering Fellow - General Assembly",
        date: "2024",
    },
];

const credentials = [
    {
        id: 1,
        title: "Software Engineering Bootcamp",
        institution: "General Assembly | New York, NY",
        date: "2024"
    },
    {
        id: 2,
        title: "Certified Tester Foundation Level",
        institution: "ASTQB/ISTQB | US",
        date: "2023",
    },
    {
        id: 3,
        title: "Bachelor of Science in Health Sciences",
        institution: "Rush University | Chicago, IL",
        date: "2019",
    },
]

export {
    navTitles,
    navIcons,
    backendDevelopment,
    devOps,
    webDevelopment,
    uiuxDesign,
    experience,
    credentials,

};