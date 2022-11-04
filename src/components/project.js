

import Bus from "../Octopus"


// returns vdom
export default function project(p){
    return {
        tag: "div", 
        attrs: {
            class: "shadow-md project dark:border-black border-grey-800",
            // 00612C
            //9BD8B0
            //23B361
            //C9BBE2
            style: "border: 1px solid",
           
        },
        children: [
        {
            tag: "div",
            attrs: {
                style: "height: 300px;  width: 100%; display: flex; justify-content: center; align-items: center; background: #f1f8ff",
                class: ""


            }, 
            children: [
                {
                    tag: "img", 
                    attrs: {
                        src: p.img,
                        class: "img"

                    }
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
                            class: "m-2 text-3xl text-gray-900 py-1 dark:text-white font-medium font-Roboto"
                        },
                        children: [
                            {
                                tag: "h3", 
                                children: [p.name]
                            }
                        ]
                    },
                    // {
                    //     tag: "div",
                    //     attrs: {
                    //         class: "tools"
                    //     },
                    //     children: p.tools.map((tool)=> {
                    //         return {
                    //             tag: "div",
                    //             attrs: {class: "tool bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-Roboto py-"},
                    //             children: [{
                    //                 tag: "p",
                    //                 children: [tool]
                    //             }]
                    //         }
                    //     })
                    // },
                    // description
                    {
                        tag: "div",
                        attrs: {
                            class: "description text-gray-900 dark:text-white",
                            style: "opacity: .7;"
                        },
                        children: [
                            {
                                tag: "p", 
                                children: [p.description_one]
                            }
                        ]

                    },

                    // {
                    //    tag: "div", 
                    //    attrs: {
                    //     class: "links",
                    //    },
                       
                    //    children: p.links.map((link)=> {
                    //        return {
                    //            tag: "div",
                    //            children: [
                    //                {
                    //                    tag: "span",
                    //                    attrs: {
                    //                        style: "height: 30px;",
                    //                        src: link.type === "github" ? "./github.svg" : link.type === "yt"? "./youtube-fill.svg" : "./alternate-external-link.svg"
                    //                    }
                    //                }
                    //            ]
                    //        }
                    //    })
                    // }
            ]
        },
        {
            tag: "div",
            attrs: {
                class: "detailed"
            },
            children: [
                {
                    tag: "a",
                    attrs: {
                      onclick: () => Bus.notify("details", p),
                    //   class: "btn-gumroad dark:text-teal-400 text-white dark:bg-gray-900  bg-gray-900 px-4 py-2 ml-8"
                    class:"social-links dark:text-orange-200 text-orange-900 py-5", style:"cursor: pointer; text-decoration: underline;"
                    },
                    children: ["view project"]
                }
            ]
        }
        ]
    }
}