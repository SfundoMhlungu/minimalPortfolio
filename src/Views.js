import { createElement } from "atomicus/lib/esm"
import project from "./components/project"
import {projects_model, projectDetail} from "./Models"
import projectView from "./components/projectView"


export function Projects(container){
    projects_model.forEach((p)=> {
        container.appendChild(createElement(project(p)))
    })
}


export function ProjectDetailed(project){
    // console.log(projectView({project: project, detailed: projectDetail[project.name]}))
     return createElement(projectView({project: project, detailed: projectDetail[project.name]}))
}
