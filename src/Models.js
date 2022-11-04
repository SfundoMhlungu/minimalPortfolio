// {
//     name: "",
//     description_one: "",
//     tools: [],
//     links: [{link: "", type: ""}],
//     description_2: ""

// }


export const projects_model = [
    
    {
        name: "Frame",
        description_one: "Cross platform web app to make Machine Learning, data manipulation and visualization accesible for anyone.",
        tools: ["HTML", "CSS", "JavaScript", "Plotly", "ML5","Astra DB","REST api","MVC", "web threads"],
        links: [{link: "", type: "yt"}],
        project_type: ["Full Stack", "Frontend"],
        description_2: "",
        img: "./projects/frame/1.png"

    },
    {
        name: "Pam",
        description_one: "Mobile app to monitor and predict allergic reactions based on previous data using string algorithms.",
        tools: ["Ionic", "Capacitor", "Next.js","Ionic Storage","Tailwind", "Pullstate"],
        links: [{link: "", type:"yt"}],
        project_type: ["Frontend", "Algorithms"],
        description_2: "",
        img: "./projects/Pam/1.png"

    },
    {
        name: "Gym Suite",
        description_one: "Cross platform web app for creating a perfect workout with predefined and customizable workout templates.",
        tools: ["React", "React Query", "MUI", "Ionic Storage", "Mongodb"],
        links: [{link: "", type: "yt"}],
        project_type: ["Full Stack", "Frontend"],
        description_2: "",
        img: "./projects/t24/1.png"

    },{
         name: "AlgoViz",
         description_one: "A highly efficient concurrent/threaded front-end algorithm visualizer - Sorting and Graph Algorithms",
         tools: ["HTML", "CSS", "JavaScript", 'Atomicus', "comlink", "Web threads"],
         links: [{link: "https://github.com/SfundoMhlungu/AlgoViz", type: "github"}, {link: "https://algo-viz8.vercel.app/", type: "live"}],
          project_type: ['Frontend', "Algorithms"],
          description_2: "",
          img: "./projects/algoviz/1.png"
        
    },

    {
    name: "Petal",
    description_one: "tiny compiled frontend framework to produce stateful HTML elements in form of a virtual DOM",
    tools: ["JavaScript"],
    links: [{link: "https://github.com/SfundoMhlungu/petal-js", type: "github"}],
    project_type: ["Frontend", "DevTool"],
    description_2: "",
    img: "./projects/vanilla/1.png"

    },
    {
        name: "Atomicus",
        description_one: "Frontend library for creating stateful HTML elements, and allows implementation of the MVC pattern easily.",
        tools: ["Typescript"],
        links: [{link: "https://github.com/SfundoMhlungu/atomica", type: "github"}],
        project_type: ["Frontend", "DevTool"],
        description_2: "",
        img: "./projects/vanilla/1.png"
    
    }
   
]



export const projectDetail = {
    Frame: {
        longer_description: "Frame is actually a combination of a dataframe inspired by the Python pandas library, written in pure Typescript and Machine Learning using ML5, the sole purpose of frame is to iteratively manipulate, clean and fit Machine Learning models to tabular data without touching or seeing code, making ML accessible and quick for anyone and it's all on the client side thanks to web workers.",
        project_implementation: ["Frame has 3 major components, the first component is responsible for creating self contained, self aware stateful HTML elements, the second is responsible for communication between elements created by component 1 and the lower level dataframe code or thread and fitting neaural networks, while the last is only responsible for user feedback, downloading files, ML models, connecting to a database and user authentication.", "Frame is way more than a CRUD app, for example each session can have multiple elements of the same type e.g 3 scatter charts, the afore mentioned components make sure these elements are independent, manage their own state, don't intermingle and confuse each other even thou they are similar."],
        stack_explanation: {
             stack:  [{icon:"./svg/next-js.svg", name: "next.js"}, {name: "Ionic",icon:"./svg/file-type-ionic.svg"}, {icon:"./svg/typescript-icon.svg", name: "Typescript"}],
             explanations: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa inventore in, tempore iure cum a obcaecati, sint quos dolorum ipsam harum qui! Suscipit minus nobis commodi labore necessitatibus aspernatur.", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa inventore in, tempore iure cum a obcaecati, sint quos dolorum ipsam harum qui! Suscipit minus nobis commodi labore necessitatibus aspernatur."],
            
        },
        visuals: [ "./projects/frame/2.png",  "./projects/frame/3.png",  "./projects/frame/4.png" ],
        problems: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa inventore in, tempore iure cum a obcaecati, sint quos dolorum ipsam harum qui! Suscipit minus nobis commodi labore necessitatibus aspernatur.", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa inventore in, tempore iure cum a obcaecati, sint quos dolorum ipsam harum qui! Suscipit minus nobis commodi labore necessitatibus aspernatur."],
        featured_code: [
            {
                name: "",
                code: ""
            }
        ],
        lessons: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa inventore in, tempore iure cum a obcaecati, sint quos dolorum ipsam harum qui! Suscipit minus nobis commodi labore necessitatibus aspernatur."],
        lesson_vis: [],
        isWhite: true
    },
    "Gym Suite": {
        longer_description: "",
        project_implementation: ["", ""],
        stack_explanation: {
             stack:  [{icon:"./svg/next-js.svg", name: "next.js"}, {name: "Ionic",icon:"./svg/file-type-ionic.svg"}, {icon:"./svg/typescript-icon.svg", name: "Typescript"}],
             explanations: ["", ""],
            
        },
        visuals: [],
        problems: ["", ""],
        featured_code: [
            {
                name: "", 
                code: ""
            }
        ],
        lessons: [""],
        lesson_vis: [],
        isWhite: true
    },
    "AlgoViz": {
        longer_description: "",
        project_implementation: ["", ""],
        stack_explanation: {
             stack:  [{icon:"./svg/next-js.svg", name: "next.js"}, {name: "Ionic",icon:"./svg/file-type-ionic.svg"}, {icon:"./svg/typescript-icon.svg", name: "Typescript"}],
             explanations: ["", ""],
            
        },
        visuals: [],
        problems: ["", ""],
        featured_code: [
            {
                name: "", 
                code: ""
            }
        ],
        lessons: [""],
        lesson_vis: [],
        isWhite: true
    },
    Pam: {
        longer_description: "",
        project_implementation: ["", ""],
        stack_explanation: {
             stack: [{icon:"./svg/next-js.svg", name: "next.js"}, {name: "Ionic",icon:"./svg/file-type-ionic.svg"}, {icon:"./svg/typescript-icon.svg", name: "Typescript"}],
             explanations: ["", ""],
            
        },
        visuals: ["./projects/Pam/2.png",  "./projects/Pam/3.png", "./projects/Pam/4.png"],
        problems: ["", ""],
        featured_code: [
            {
                name: "", 
                code: ""
            }
        ],
        lessons: [""],
        lesson_vis: [],
        isWhite: false
    },
    Petal: {
        longer_description: "",
        project_implementation: ["", ""],
        stack_explanation: {
             stack:  [{icon:"./svg/next-js.svg", name: "next.js"}, {name: "Ionic",icon:"./svg/file-type-ionic.svg"}, {icon:"./svg/typescript-icon.svg", name: "Typescript"}],
             explanations: ["", ""],
            
        },
        visuals: [],
        problems: ["", ""],
        featured_code: [
            {
                name: "", 
                code: ""
            }
        ],
        lessons: [""],
        lesson_vis: [],
        isWhite: false
    },
    Atomicus: {
        longer_description: "",
        project_implementation: ["", ""],
        stack_explanation: {
             stack:  [{icon:"./svg/next-js.svg", name: "next.js"}, {name: "Ionic",icon:"./svg/file-type-ionic.svg"}, {icon:"./svg/typescript-icon.svg", name: "Typescript"}],
             explanations: ["", ""],
            
        },
        visuals: [],
        problems: ["", ""],
        featured_code: [
            {
                name: "", 
                code: ""
            }
        ],
        lessons: [""],
        lesson_vis: [],
        isWhite: false
    }
}