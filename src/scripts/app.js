"use strict";
import { gsap } from "gsap";
console.log(gsap.version);

//date

let date = new Date().getFullYear();
document.getElementById('annee').innerHTML = date;

//page chaussure

let chaussu = document.querySelector('.illu__chaussure');

if ((window.matchMedia('(min-width:1000px)').matches) && (chaussu)){

    const chaussPc = gsap.timeline({defaults: {duration: 2}});

    chaussPc.fromTo(".text__paragraf--un", 
    { y: 100, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 },"+=1")

    chaussPc.fromTo("#etiquette02", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 },"+=2")

    chaussPc.fromTo("#etiquette01", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussPc.fromTo("#haut", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussPc.fromTo("#trou", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussPc.fromTo("#dur01", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussPc.fromTo("#nike", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussPc.fromTo("#bleue", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussPc.fromTo("#semelleB", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussPc.fromTo("#semelle", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })


    chaussPc.fromTo(".text__paragraf--dx", 
    { y: 100, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 })

    chaussPc.fromTo("#etiquette03", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 },"+=2")

    chaussPc.fromTo("#dur02", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussPc.fromTo("#airrouge", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussPc.fromTo("#bulle01", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussPc.fromTo("#trait", 
    { opacity: 1 },
    { duration: 2, opacity: 0 })


    chaussPc.fromTo(".text__paragraf--tr", 
    { y: 100, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 })

    chaussPc.fromTo("#detail", 
    { opacity: 0, },
    { duration: 1, opacity: 1 },"+=2")

    chaussPc.fromTo("#ombre", 
    { opacity: 0, },
    { duration: 1, opacity: 1 })

}



if  ((window.matchMedia('(max-width: 999px)').matches) && (chaussu)) {

    const chaussMob = gsap.timeline({repeat:-1, repeatDelay: 5});

    chaussMob.fromTo("#etiquette02", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 },"+=2")

    chaussMob.fromTo("#etiquette01", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussMob.fromTo("#haut", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussMob.fromTo("#trou", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussMob.fromTo("#dur01", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussMob.fromTo("#nike", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussMob.fromTo("#bleue", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussMob.fromTo("#semelleB", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussMob.fromTo("#semelle", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussMob.fromTo("#etiquette03", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 },"+=2")

    chaussMob.fromTo("#dur02", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussMob.fromTo("#airrouge", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussMob.fromTo("#bulle01", 
    { opacity: 0, },
    { duration: 0.7, opacity: 1 })

    chaussMob.fromTo("#trait", 
    { opacity: 1 },
    { duration: 2, opacity: 0 })

    chaussMob.fromTo("#detail", 
    { opacity: 0, },
    { duration: 1, opacity: 1 },"+=2")

    chaussMob.fromTo("#ombre", 
    { opacity: 0, },
    { duration: 1, opacity: 1 })

}


// page fiche {repeat:-1}

let fiche = document.querySelector('.illu__fiche');

if  ((window.matchMedia('(max-width: 999px)').matches) && (fiche)) {


}

if  ((window.matchMedia('(max-width: 999px)').matches) && (fiche)) {


    const TelFiche = gsap.timeline({repeat:-1,duration: 2 });

    TelFiche.from(".img__fiche--logo", {
        opacity:0,
        duration:1,
        y: 70,
    });
    TelFiche.to(".img__fiche--logo", {
        opacity:0,
        duration:1,
    },"+=5");
    
    TelFiche.from(".img__fiche--gabarit", {
        opacity:0,
        duration:1,
        y: 70,
    });
    TelFiche.to(".img__fiche--gabarit", {
        opacity:0,
        duration:1,
    },"+=5");   

    TelFiche.from(".img__fiche--txt", {
        opacity:0,
        duration:1,
        y: 70
    });
    TelFiche.to(".img__fiche--txt", {
        opacity:0,
        duration:1,
    },"+=5");

    TelFiche.from(".img__fiche--style", {
        opacity:0,
        duration:1,
        y: 70
    });
    TelFiche.to(".img__fiche--style", {
        opacity:0,
        duration:1,
    },"+=5");

    TelFiche.from(".img__fiche--final", {
        opacity:0,
        duration:1,
        y: 70
    });
    TelFiche.to(".img__fiche--final", {
        opacity:0,
        duration:1,
     },"+=5");


}