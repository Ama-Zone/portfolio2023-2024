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