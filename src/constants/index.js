import {
    github,
    gitlab,
    instagram,
    linkedin,

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

export {
    navTitles,
    navIcons,
    
};