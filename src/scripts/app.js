"use strict";
import { gsap } from "gsap";
console.log(gsap.version);

//page projets

/* Slider slider*/


        //slider btn 

        let buttons = document.querySelectorAll(".slider__js");
        for(let button of buttons){
            button.addEventListener("click", (e)=>{
                let tabs = document.querySelectorAll(".slider__switch");
                for(let tab of tabs){
                    tab.classList.add("slider--hidden");

                    let tabId = e.currentTarget.getAttribute("data-tab");
                    let currentTab = document.getElementById(tabId);
                    currentTab.classList.remove("slider--hidden");
		        }
            });
        }

        let chauss  = document.querySelector(".livre__clic--chauss");
        let arbre = document.querySelector(".lien__arbre");
        let illuArbre = document.querySelector(".livre__clic--arbre");
        let illuhidden = document.querySelector(".slider--hidden");


       