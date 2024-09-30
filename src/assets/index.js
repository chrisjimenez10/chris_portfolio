import svgDataUri from "mini-svg-data-uri";

import github from "./svgs/github.svg";
import gitlab from "./svgs/gitlab.svg";
import instagram from "./svgs/instagram.svg";
import linkedin from "./svgs/linkedin.svg";

const githubUri = svgDataUri(github);
const gitlabUri = svgDataUri(gitlab);
const instagramUri = svgDataUri(instagram);
const linkedinUri = svgDataUri(linkedin);

export {
    githubUri,
    gitlabUri,
    instagramUri,
    linkedinUri,
    
};