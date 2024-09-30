import {
    githubUri,
    gitlabUri,
    instagramUri,
    linkedinUri,

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
        image: githubUri,
    },
    {
        id: 2,
        title: "LinkedIn",
        image: linkedinUri,
    },
    {
        id: 3,
        title: "Instagram",
        image: instagramUri,
    },
    {
        id: 4,
        title: "GitLab",
        image: gitlabUri,
    },
];

export {
    navTitles,
    navIcons,
    
};