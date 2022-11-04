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
    img: "./projects/1.png"

    },
    {
        name: "Atomicus",
        description_one: "Frontend library for creating stateful HTML elements, and allows implementation of the MVC pattern easily.",
        tools: ["Typescript"],
        links: [{link: "https://github.com/SfundoMhlungu/atomica", type: "github"}],
        project_type: ["Frontend", "DevTool"],
        description_2: "",
        img: "./projects/8.png"
    
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
        longer_description: "I created this application as part of my fitness journey, after noticing that the actual demotivating part in this journey is planning and finding a suitable workout, on top of that track everything manually, it becomes tideous and boring very quickly. Gym Suite solves exactly that, allows the user to string together a perfect workout from predefined templates, which are also customizable to create shorter or longer workouts, intense or normal quickly to one's heart desire, On top of that the application pulls new templates and challenges from a database if they are added, as a bonus during a workout multiple components track other stuff like calories burnt, time worked out etc, to fill the dashboard.",
        project_implementation: ["Gym suite is quite large than other applications I've created so far with many moving pieces and complex components, at the core is the session component which is super complex and responsible for managing/playing a selected session or workout, switching from a session to a break, whilst tracking the current and next workout and if the workout is complete, if not how much time is left and how many calories have been burnt so far, on top of it all the component also manages speech syntesis to communicate to the user the state of the session, current workout and time, when all this is done, the component also consolidates all the data gathered and stores it in a database in a meaningful way", "The dashboard component feeds from the data gathered by the session component and visualize the data in a meaningful and intepretive way "],
        stack_explanation: {
             stack:  [{icon:"./svg/react.svg", name: "react.js"}, {name: "xstate",icon:"./svg/xstate.svg"}, {icon:"./svg/material-ui.svg", name: "MUI"}],
             explanations: ["I used React.js and Material for iterative development and awasome looking reusable components which came in handy in such a project", "To manage complex state I used a the Xstate state machine, which is super efficient and powerful enough to coordinate complex state changes such as the ones happening in the state component.", "The most powerful tool I probably used here also is React query which is magical for state management, database query and update asynchornously"],
            
        },
        visuals: [],
        problems: ["The only hurdle I faced here is managing multiple chnaging states manually which actually broke the application as there were many moving pieces, changing constantly because of timers etc, that is when I turned to xstate and React query"],
        featured_code: [
            {
                name: "", 
                code: ""
            }
        ],
        lessons: ["Inveting the wheel is a bad idea especially if there's a well tested tool out there for the task at hand, this is how I actually discovered React query and instantly fell in love", "Before gym suite I didn't like Test Driven Development, after trying it out I can say I am a huge fan and now see testing as a very useful technique and can actually increase development speed a lot as I was able to develop the core of the application in about 4 hours with TDD which normally takes me about 2 days without TDD"],
        lesson_vis: [],
        isWhite: true
    },
    "AlgoViz": {
        longer_description: "Many algorithm visualizers exist on the interwebs and have been greatly in the JS world, but I wanted to do something different, an actual parallel/concurrent algorithm visualizer with each algorithm running on it's own seperate web thread.",
        project_implementation: ["The entire application depends on the communication between threads/web workers and the main thread", "The main thread in this is only responsible for updating the UI, whilst workers do all the heavy lifting and calculations and just communicate the results when ready to the main thread for update using comlink developed by under Google to make web workers enjoyable."],
        stack_explanation: {
             stack:  [{icon:"./svg/web.svg", name: "workers"}, {name: "Atomicus",icon:"./man-technologist-medium-skin-tone.09a6d491.svg"}],
             explanations: ["As alluded before AlgoViz uses web workers to achieve threaded programming with each algorithm, both sorting and graph algorithms running on their own threads and using comlink to communicate with the main thread", "Whilst for the frontend I used a tiny library I created Atomicus to create stateful, self contained HTML element"],
            
        },
        visuals: [],
        problems: ["The main problem I faced was debugging web workers as it was my first time I was using comlink with web workers as I usually implement a pattern from scratch, but with a little research and looking at the codebase a little I was able to figure out a few details"],
        featured_code: [
            {
                name: "", 
                code: ""
            }
        ],
        lessons: ["As Surma puts on his talk 'The main thread is overworked' sometimes slower does not mean bad for the user but a janky UI does - as he was refering to the passing of data between threads which can be slow a times depending on the size of data while this might be slow which is rare does not cause the browser to freeze as it frees the main thread to handle the UI, so no this page is slowing down your browser, I learned that web workers can probably make it possible to bring computive intensive apps entirely to the client side"],
        lesson_vis: [],
        isWhite: true
    },
    Pam: {
        longer_description: "I created this application for a very close friend of mine, who suffers from unpredictable allergic reactions, which affected work and daily life, because they were hard to track and even predict. This mobile app is built around that concept track, learn the patterns and use the learned patterns to predict an allergic reaction and it's severity given a potential trigger.",
        project_implementation: ["The app has multiple dependent components, with the central component being the Track component which allows inserting new potential triggers and tracking them throughout the day, updating reaction and pain level status with these categories: 'Mild, Moderate and Severe'.", "The second main Component uses the data inserted in track to predict reactions for similar potential triggers using bigram, trigrams and string similarity algorithms.", "The last component deals with visualization as it is the best way to communicate data and findings easily."],
        stack_explanation: {
             stack: [{icon:"./svg/next-js.svg", name: "next.js"}, {name: "Ionic",icon:"./svg/file-type-ionic.svg"}, {icon:"./svg/chartjs.svg", name: "Chart.js"}],
             explanations: ["I used next.js with tailwind css for this app, to create reusable components which actually allowed iterative development and mantaining a solid design system.", "Ionic was primarly used for bundling the web app into an android installable APK, using capacitor js.", "I needed beautiful ,efficient and performant charts since this was running on  mobile, chart.js came in handy for such a task."],
            
        },
        visuals: ["./projects/Pam/2.png",  "./projects/Pam/3.png", "./projects/Pam/4.png"],
        problems: ["A huge problem I ran into was definitely creating charts solely for mobile, because you can only have so much control for charts, they are like images very unruly in terms of size, aspect ratio etc.", "Because of this I bacame well versed in different chart types, and their uses and effectiveness in conveying findings and visual message.", "Another problem I cam across was domain knowledge, I did not really know anything about allergies and my friend had no knowledge of programming so I had to find a way to converge the two world's so we were able to communicate and create something together, while understanding each other"],
        featured_code: [
            {
                name: "", 
                code: ""
            }
        ],
        lessons: ["One of the most important lessons I came out with here is communicating programming solutions to non programmers, and vice versa, getting enough and useful domain knowledge from a 'client' to be able to create something useful and userable"],
        lesson_vis: [],
        isWhite: false
    },
    Petal: {
        longer_description: "I built petal as an experiment to understand how frameworks and libraries work, it's just a tiny compiler that takes python looking code and create stateful HTML elements",
        project_implementation: ["Albeit small the entire framework is actually complex, I first had to create a lexer to read in a petal file and convert it to a parsable structure.", "After creating this parsable structure I created a parser to inteprete this structure into JavaScript code that can be translated to HTML elements, what the parser spits out is an object commonly known as a virtual dom which is intepreted by petal-js the actual frontend library responsible for state management, routing etc", "To bind all these elements together to create a useful coherent tool I created a CLI tool, that coordinates and automates most of the actions mentioned above from lexing to generating a file with a virtual DOM structure which is read by petal-js"],
        stack_explanation: {
             stack:  [ {icon:"./svg/javascript-js.svg", name: "JavaScript"}],
             explanations: ["The entire framework is created in JavaScript, which was actually faster to develop with."],
            
        },
        visuals: ["./projects/2.png", "./projects/3.png", "./projects/4.png"],
        problems: ["The most complex problem I faced was parsing a petal function which basically looks like a python function to a JavaScript function, turns out parsing functions is actually very complex, I got stuck for about two days as there was no documentation or stack overflow as it was new and from my mind, which I finally figured out through trial and error using the new Function JS feature, which I must admit felt really good."],
        featured_code: [
            {
                name: "", 
                code: ""
            }
        ],
        lessons: ["immediately after finishing this framework I noticed an increase in my coding and problem solving skills, even frontend, from then till now I learnt the importance of learning and implementing lower level concepts as a self taught developer, since then I learned a few lower level languages like Zig and C"],
        lesson_vis: [],
        isWhite: false
    },
    Atomicus: {
        longer_description: "Atomicus was born out of larger project: Frame which is a cross platform web app to make Machine Learning, data manipulation and visualization accesible for anyone, atomicus provides atomic methods to create stateful HTML elements, and a method to clear those elements, and lastly a PubSub class to create a pubsub pattern allowing the implementation of the MVC pattern as the global PubSub acts as the octopus/controller",
        project_implementation: ["The library is implemented entirely in Typescript, and uses the React virtual DOM presentation to create elements, the createElement method takes a vdom like structure and produces HTML elements."],
        stack_explanation: {
             stack:  [{icon:"./svg/typescript-icon.svg", name: "Typescript"}],
             explanations: ["I almost always use Typescript for libraries that I intend to use in the long as I find TS very robust and highly mantainable"],
            
        },
        visuals: ["./projects/6.png", "./projects/5.png", "./projects/7.png"],
        problems: ["I really did not encounter that much of a problem here as I was implementing stuff I already know and implemented, a little problem maybe was dealing with different types of HTML elements and registering relevant events while converting from vdom to actual HTML."],
        featured_code: [
            {
                name: "", 
                code: ""
            }
        ],
        lessons: ["Investement in developer tools will definetley payout in the long run, since the inception of Atomicus I have been able to develop vanilla apps 200x faster and iteratively as it enforces a pattern already(MVC) and I don't have to switch between HTML and JS, I can stay in JS and create a single page application from there using atomicus"],
        lesson_vis: [],
        isWhite: false
    }
}