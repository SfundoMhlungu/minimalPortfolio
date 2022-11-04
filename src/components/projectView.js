import Bus from "../Octopus"

 


const m = (state) => [
         {
             tag: "div", 
             attrs: {
                 class: "longer_description"
             },
             children: [
                 {
                     tag: "h1",
                     attrs: {
                        class: "text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl",
                     },
                     children: [state.project.name]
                 },
                 {
                    tag: "div",
                    attrs: {
                        class: "tools"
                    },
                    children: []
                    // state.project.tools.map((tool)=> {
                    //     return {
                    //         tag: "div",
                    //         attrs: {class: "tool bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-Roboto ml-0"},
                    //         children: [{
                    //             tag: "p",
                    //             children: [tool]
                    //         }]
                    //     }
                    // })
                },
                 {
                     tag: "p", 
                     attrs: {
                        class: "description text-gray-900 dark:text-white py-2 text-lg dark:text-white dark:opacity-70 opacity-100",
                                           
                        // style: "opacity: .7;"
                     },
                     children: [state.detailed.longer_description]
                 },
                 {
                     tag: "div", 
                     attrs: {

                     },
                     children: [
                         {
                             tag: "h3",
                             attrs: {
                               class: "text-2xl py-2 dark:text-white md:text-3xl"
                             },
                             children: ["Links"]
                         },
                         {
                             tag: "div",
                             attrs: {
                                 class: "flex py-2 text-orange-800",
                                 style: "gap: 2em;"
                             },
                             children: state.project.links.map((link)=> {
                               
                                if (link.type === "github") {
                                  return {
                                    tag: "a",
                                    attrs: {
                                        href: link.link,
                                        target: "_blank",
                                        style: "text-decoration: underline;"
                                    },
                                    children: ["Source Code"]

                                    
                                 }
                                }else if(link.type === "yt"){
                                      return  {
                                        tag: "a",
                                        attrs: {
                                            href: link.link,
                                            target: "_blank",
                                            style: "text-decoration: underline;"
                                        },
                                        children: ["Video Demo"]
    
                                        
                                     }
                                } else{
                               return  {
                                tag: "a",
                                attrs: {
                                    href: link.link,
                                    target: "_blank",
                                    style: "text-decoration: underline;"
                                },
                                children: ["Live Demo"]

                                
                             }
                                }
                                
                                 
                             })
                         }
                     ]
                 },
                 {
                    tag: "div", 
                    attrs: {
                        style: "height: 400px; overflow: hidden;",
                        
                         class: "imgCon border-grey-800"
                        }
                    ,
                    children: [
                        {
                            tag: "img",
                            attrs: {
                                class: "img2",
                                style: "margin: auto",
                                src: state.project.img
                            },
                            children: []
                        }
                    ]
                },

                {
                    tag: "div", 
                    attrs: {
                        class: ""
                    },
                    children: [
                        {
                            tag: "h2",
                            attrs: {
                               class: "text-2xl py-2 dark:text-white md:text-3xl"
                            },
                            children: ["Project Implementation"]
                        },
                        {
                            tag: "div",
                            attrs: {

                            },
                            children: state.detailed.project_implementation.map((d)=> {
                                return {
                                    tag: "p",
                                    attrs: {
                                        class: "description text-gray-900 dark:text-white py-2 text-lg dark:text-white dark:opacity-70 opacity-100",
                                           
                                                    // style: "opacity: .7;"
                                    },
                                    children: [d]
                                }
                            })
                        },

                        {
                            tag: "div",
                            attrs: {
                                class: "stack py-6"
                            },
                            children: [
                                {
                                    tag: "div",
                                    attrs: {
                                     class: "stackImgs"
                                    },
                                    children: state.detailed.stack_explanation.stack.map((s)=> {
                                              return {
                                                  tag: "div",
                                                
                                                  attrs: {
                                                    
                                                      style: "height: 40px; width: 250px; margin: .2em 0; padding: 0 2em; display:flex; align-text: center;",
                                                      class: "shadow-md dark:bg-gray-200 bg-white"
                                                  },
                                                  children: [
                                                      {
                                                          tag: "img",
                                                          attrs: {
                                                            style: "height: 100%; object-fit: cover",
                                                              src: s.icon
                                                          }
                                                      },
                                                      {
                                                          tag: "p",
                                                          style: "",
                                                          children: [s.name]
                                                      }
                                                  ]
                                              }
                                    })
                                },
                                {
                                    tag: "div",
                                    attrs: {
                                      class: "y-6",
                                      style: "margin: 2em 0;"

                                    },
                                    children: [
                                        {
                                            tag: "h2",
                                            attrs: {
                                                class: "text-2xl py-2 dark:text-white md:text-3xl"
                                            },
                                            children: ["Web Stack and Explanation"]
                                        }
                                        ,
                                        ...state.detailed.stack_explanation.explanations.map((x)=> {
                                            return {
                                                tag: "p",
                                                attrs: {
                                                    class: "description text-gray-900 dark:text-white py-2 text-lg dark:text-white dark:opacity-70 opacity-100",
                                           
                                                    // style: "opacity: .7;"
                                                },
                                                children: [x]
                                            }
                                        })
                                    ]
                                },
                              
                            ]
                        }
                    ]
                },

                {
                    tag: "div",
                    attrs: {

                    },
                    children: [
                        {
                            tag: "div", 
                            attrs: {
                                class: "gallery py-6"
                            },

                            children: state.detailed.visuals.map((img, i)=> {
                                return {
                                    tag: "img", 
                                    attrs: {
                                        class: `${state.detailed.isWhite ? "generalImgWborder" : "generalImg"}` ,
                                         style: i === 0 ? "grid-area: one; margin: auto" : "",
                                        src: img
                                    }
                                }
                            })
                        },
                        {
                            tag: "div",
                            attrs: {

                            },
                            children: [
                                {
                                    tag: "h2",
                                    attrs: {
                                        class: "text-2xl py-2 dark:text-white md:text-3xl"
                                    } ,
                                    children: ["Problems and Thought Process"]
                                },
                                {
                                    tag: "div", 
                                    children: state.detailed.problems.map((p)=> {
                                        return {
                                            tag: "p",
                                            attrs: {
                                                class: "description text-gray-900 dark:text-white py-2 text-lg dark:text-white dark:opacity-70 opacity-100",
                                           
                                                // style: "opacity: .7;"
                                            },
                                            children: [p]
                                        }
                                    })
                                }
                            ]
                        },
                        {
                            tag: "div", 
                            attrs: {

                            },
                            children: [
                                {
                                    tag: "h2", 
                                    attrs: {
                                        class: "text-2xl py-2 dark:text-white md:text-3xl"
                                    } ,
                                    children: ["Lesson's learned"]
                                },
                                {
                                    tag: "div", 
                                    children: state.detailed.lessons.map((p)=> {
                                        return {
                                            tag: "p",
                                            attrs: {
                                                class: "description text-gray-900 dark:text-white py-2 text-lg dark:text-white dark:opacity-70 opacity-100",
                                           
                                                // style: "opacity: .7;"
                                            },
                                            children: [p]
                                        }
                                    })
                                }
                            ]
                        }
                    ]
                }

             ]
         }
]




export default function projectView(state){
      console.log(window.scrollY, state)
     return {
         tag: "div", 
         attrs: {
             style: `position:absolute; width: 100vw; overflow-y: auto; height: 100vh; top:0;  transform: translateY(${window.scrollY}px);`,
             class: "bg-white px-10 dark:bg-black md:px-20 lg:px-40"

         },
         children: [
             {
                 tag: "a",
                 attrs: {
                     onclick: () => Bus.notify('removeDetails'),
                    
                      class:"w-full h-12 text-bold text-2xl social-links dark:text-orange-200 text-orange-900 my-12", style:"cursor: pointer; text-decoration: underline;" 
                 },
                 children: [" back"]

             },
             {
                tag: "div",
                attrs: {
                    class: "my-6 detailParent"
                },
                children: m(state)

             }
            ]
     }



}

