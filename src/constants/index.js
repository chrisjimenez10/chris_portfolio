import {
    github,
    gitlab,
    instagram,
    linkedin,

} from "../assets/index.js";

const navTitles = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",

    },
    {
        id: 3,
        title: "Projects",
        url: "/projects",

    },
    {
        id: 4,
        title: "Community",
        url: "/community",
    },
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
        title: "LinkedIn",
        image: linkedin,
        url: "https://www.linkedin.com/in/christopherjimenez10/",
    },
    {
        id: 3,
        title: "Instagram",
        image: instagram,
        url: "https://www.instagram.com/chris10_jq/",
    },
    {
        id: 4,
        title: "GitLab",
        image: gitlab,
        url: "https://gitlab.com/chrisjimenez10",
    },
];

export {
    navTitles,
    navIcons,
    
};