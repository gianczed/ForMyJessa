/* ==========================================
   ELEMENTS
========================================== */

const openLetter = document.getElementById("openLetter");

const intro = document.getElementById("intro");

const scrollSection = document.getElementById("scrollSection");

const scrollContainer = document.querySelector(".scrollContainer");

const loveButton = document.getElementById("loveButton");

const loveCard = document.querySelector(".loveCard");


/* ==========================================
   OPEN WAX SEAL / SCROLL
========================================== */

openLetter.addEventListener("click",()=>{

    // animate wax seal
    openLetter.classList.add("open");


    setTimeout(()=>{

        // hide intro

        intro.style.display="none";


        // show letter section

        scrollSection.classList.add("show");


    },800);


    setTimeout(()=>{


        // open parchment

        scrollContainer.classList.add("open");


    },1200);


    // scroll smoothly to letter

    setTimeout(()=>{

        scrollSection.scrollIntoView({

            behavior:"smooth"

        });

    },1800);


    heartExplosion();

});


/* ==========================================
   LOVE CARD BUTTON
========================================== */


loveButton.addEventListener("click",()=>{


    if(loveCard.style.display==="block"){


        loveCard.style.display="none";


        loveButton.innerHTML="Open ❤️";


    }

    else{


        loveCard.style.display="block";


        loveButton.innerHTML="Close ❤️";


        loveCard.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });


    }


});


/* ==========================================
   HEART EXPLOSION
========================================== */


function heartExplosion(){


    for(let i=0;i<35;i++){


        const heart=document.createElement("span");


        heart.innerHTML="❤️";


        heart.style.position="fixed";


        heart.style.left="50%";


        heart.style.top="50%";


        heart.style.fontSize=

        (15+Math.random()*25)+"px";


        heart.style.pointerEvents="none";


        heart.style.zIndex="999";


        heart.style.transition=

        "1.5s ease-out";


        document.body.appendChild(heart);



        let x=(Math.random()-0.5)*600;

        let y=(Math.random()-0.5)*600;



        setTimeout(()=>{


            heart.style.transform=

            `translate(${x}px,${y}px)
            rotate(${Math.random()*720}deg)`;


            heart.style.opacity="0";


        },50);



        setTimeout(()=>{


            heart.remove();


        },1600);



    }


}


/* ==========================================
   NIGHT MODE
========================================== */


const hour=new Date().getHours();


if(hour>=18 || hour<=5){


    document.body.classList.add("night");


}
/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});


revealElements.forEach((el)=>{

    observer.observe(el);

});


/* ==========================================
   RANDOM FLOATING HEARTS BACKGROUND
========================================== */

function createFloatingHeart(){

    const heart = document.createElement("div");

    heart.className="floatingHeart";

    heart.innerHTML="♡";


    heart.style.left=Math.random()*100+"vw";


    heart.style.animationDuration=

    (5+Math.random()*5)+"s";


    heart.style.fontSize=

    (15+Math.random()*20)+"px";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },10000);


}



setInterval(()=>{

    createFloatingHeart();

},900);



/* ==========================================
   SONG BUTTON PLAYER EFFECT
========================================== */

const songButtons=document.querySelectorAll(".songBtn");


songButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        songButtons.forEach(btn=>{

            btn.classList.remove("playing");

        });


        button.classList.add("playing");


    });


});



/* ==========================================
   MEMORY IMAGE POPUP
========================================== */


const memories=document.querySelectorAll(".memory");


memories.forEach(memory=>{


    memory.addEventListener("click",()=>{


        memory.classList.toggle("zoom");


    });


});



/* ==========================================
   PASSWORD SCREEN
========================================== */


const passwordBox=document.getElementById("passwordBox");

const unlockBtn=document.getElementById("unlockBtn");

const passwordInput=document.getElementById("passwordInput");


if(unlockBtn){


unlockBtn.addEventListener("click",()=>{


    if(passwordInput.value==="0414"){


        passwordBox.classList.add("hide");


        heartExplosion();



    }

    else{


        passwordInput.value="";


        passwordInput.placeholder="Wrong password ❤️";


    }


});


}



/* ==========================================
   TYPEWRITER EFFECT FOR LETTER
========================================== */


const typingText=document.querySelector(".typing");


if(typingText){


let text=typingText.innerHTML;

typingText.innerHTML="";


let index=0;



function typeWriter(){


    if(index<text.length){


        typingText.innerHTML+=text.charAt(index);


        index++;


        setTimeout(typeWriter,40);


    }


}



setTimeout(typeWriter,2000);


}