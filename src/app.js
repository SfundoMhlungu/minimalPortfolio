import {Projects, ProjectDetailed} from "./Views"
import Bus from "./Octopus"

const projects_con = document.querySelector(".projects")
const btn_con = document.querySelector("#btnCon")
const long = document.querySelector("#long")
const short = document.querySelector("#short")

let current = document.querySelector(`[role=short]`);
// const mode = document.querySelector("#mode")


// mode.addEventListener("click", ()=> {
//     document.body.classList.toggle("dark")
// })
btn_con.addEventListener("click", (e)=> {
    console.log(e.target.outerText)
    console.log(e, e.target)
    // `[role=${element}]`
    if(e.target.outerText ===  "Short"){
       long.classList.add("hidden");
       short.classList.remove("hidden")
       e.target.classList.toggle("selected")
        if(current){
            current.classList.remove("selected")
        }
        current = e.target;

    }else if(e.target.outerText === "Long"){
        long.classList.remove("hidden");
        short.classList.add("hidden")
        e.target.classList.toggle("selected")
        if(current){
            current.classList.remove("selected")
        }
        current = e.target;
    }else{
        return;
    }
})


Projects(projects_con)
let sub; 

Bus.subscribe("details", (project)=> {
    
    document.documentElement.classList.add("noscroll")
 const el = ProjectDetailed(project)
 document.body.appendChild(el)
  if(sub){
      sub()
  }
   sub = Bus.subscribe("removeDetails", ()=> {
       document.body.removeChild(el);
       document.documentElement.classList.remove("noscroll")
   })
})


