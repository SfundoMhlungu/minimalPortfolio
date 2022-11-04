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
        longer_description: "Frame is actually a combination of a dataframe inspired by the Python pandas library, written in pure Typescript and Machine Learning using ML5, the sole purpose of frame is to iteratively manipulate, clean and fit Machine Learning models to tabular data without touching or seeing code, making ML accessible and quick for anyone and it's all on the client side thanks to web workers and entirely written in JavaScript, HTML and CSS.",
        project_implementation: ["Frame has 3 major components, the first component is responsible for creating self contained, self aware stateful HTML elements, the second is responsible for communication between elements created by component 1 and the lower level dataframe code or thread and fitting neaural networks, while the last is only responsible for user feedback, downloading files, ML models, connecting to a database and user authentication.", "Frame is way more than a CRUD app, for example each session can have multiple elements of the same type e.g 3 scatter charts, the afore mentioned components make sure these elements are independent, manage their own state, don't intermingle and confuse each other even thou they are similar."],
        stack_explanation: {
             stack:  [{icon:"./man-technologist-medium-skin-tone.09a6d491.svg", name: "bokke.js"}, {icon:"./ml5.png", name: "ML5"}, {icon:"./man-technologist-medium-skin-tone.09a6d491.svg", name: "Atomicus"}, {icon: "./svg/express-original.svg", name: "Express"}],
             explanations: ["bokke.js is at the core of Frame, functionality wise, as it is responsible for turning csv to tabular data, visualization, manipulation and data cleaning, the coolest part propably is bokke.js run's on a seperate thread isolating large data and heavy calculations from the main thread, which only handles UI updates, I built bokke.js entirely with Typescript which makes it robust and easily mantainable.", "Ml5 is responsible for everything Machine Learning, from fitting models, to downloading them to be used in the browser, as ML5 is built on top of tensorflow.js", "Atomicus another frontend tool I built is probably the heavy lifter of this web app in terms of frontend, which is responsible for creating self contained, self aware stateful HTML elements, and establishing communication between them using the MVC pattern, and facilitating communication also between elements and ML5, elements and bokke.js", "Express is responsible for everything server side, authentication, signup, saving models to a remote database with an account"],
            
        },
        visuals: [ "./projects/frame/2.png",  "./projects/frame/3.png",  "./projects/frame/4.png" ],
        problems: ["The biggest hurdle I came across was creating dynamic elements and handling their states, while libraries and frameworks can handle that easily, I was working in pure JavaScript so I had to be creative and started researching how these frameworks achieve this internally, which led to the implementation of Atomicus, inspired by React's virtual DOM, on top of the V DOM, I added the MVC pattern naturally in Atomicus using reactive patterns, which overcame efficiently the problem of creating dynamic and stateful HTML elements."],
        featured_code: [
            {
                name: "",
                code: ""
            }
        ],
        lessons: ["Amongst many the most valuable lesson I learned here is the power of design patterns, and how they foster efficient and iterative development, for example I had a working MVP of frame in about 11 days because of the MVC pattern and it's efficiency for iterative development.", "Frame is compute intensive and heavy, by using web workers I had an opportunity to learn and experience how to bring compute intensive applications to the client side."],
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
        longer_description: "I created this application for a very close friend of mine, who suffers from unpredictable allergic reactions, which affected work and daily life, because they were hard to track and even predict. This mobile app is built around that concept track, learn the patterns and use the learned patterns to predict an allergic reaction and it's severity given a potential trigger.",
        project_implementation: ["The app has multiple dependent components, with the central component being the Track component which allows inserting new potential triggers and tracking them throughout the day, updating reaction and pain level status with these categories: 'Mild, Moderate and Severe'.", "The second main Component uses the data inserted in track to predict reactions for similar potential triggers using bigram, trigrams and string similarity algorithms.", "The last component deals with visualization as it is the best way to communicate data and findings easily."],
        stack_explanation: {
             stack: [{icon:"./svg/next-js.svg", name: "next.js"}, {name: "Ionic",icon:"./svg/file-type-ionic.svg"}, {icon:"./svg/chartjs.svg", name: "Chart.js"}],
             explanations: ["I used next.js with tailwind css for this app, to create reusable components which actually allowed iterative development and mantaining a solid design system.", "Ionic was primarly used for bundling the web app into an android installable APK, using capacitor js.", "I needed beautiful ,efficient and performant charts since this was running on  mobile, chart.js came in handy for such task"],
            
        },
        visuals: ["./projects/Pam/2.png",  "./projects/Pam/3.png", "./projects/Pam/4.png"],
        problems: ["A huge problem I ran into was definitely creating charts solely for mobile, because you can only have so much control for chart's, they are like images very unruly in terms of size, aspect ratio etc.", "Because of this I bacame well versed in different chart types, and their uses and effectiveness in conveying findings and visual message", "Another problem I cam across was domain knowledge, I did not really know anything about allergies and my friend had no knowledge of programming so I had to find a way to converge the two world's so we were able to communicate and create something together, while understanding each other"],
        featured_code: [
            {
                name: "", 
                code: ""
            }
        ],
        lessons: ["One of the most important lesson's I came out with here is communicating programming solutions to non programmers, and vice versa, getting enough and useful domain knowledge from a 'client' to be able to create something useful and userable"],
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