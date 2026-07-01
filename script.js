(function(){

    emailjs.init({
        publicKey: "0o3_DHIR9u06LlZsW"
    });

})();
/* ===========================================
   ELEMENTS
=========================================== */


const pages = [

    document.getElementById("page1"),
    document.getElementById("page2"),
    document.getElementById("page3"),
    document.getElementById("page4"),
    document.getElementById("page5"),
    document.getElementById("yesPage"),
    document.getElementById("endingPage")

];


const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");


const yesBtn = document.getElementById("yesBtn");
const timeBtn = document.getElementById("timeBtn");


const typing1 = document.getElementById("typing1");
const typing2 = document.getElementById("typing2");
const typing3 = document.getElementById("typing3");


const finalMessage = document.getElementById("finalMessage");

const yesMessage = document.getElementById("yesMessage");

/* ===========================================
   PAGE CHANGE FUNCTION
=========================================== */


function showPage(index){

    pages.forEach(page=>{

        if(page){
            page.classList.add("hidden");
        }

    });


    if(pages[index]){

        pages[index].classList.remove("hidden");

    }

}



/* ===========================================
   TYPE WRITER EFFECT
=========================================== */


function typeWriter(element,text,speed){


    if(!element) return;


    element.innerHTML="";


    let i = 0;



    function typing(){


        if(i < text.length){


            element.innerHTML += text.charAt(i);


            i++;


            setTimeout(typing,speed);


        }


    }


    typing();


}
/* ===========================================
   PAGE 1
=========================================== */


if(next1){

next1.onclick = function(){


    showPage(1);



    typeWriter(

        typing1,

`Sometimes...

Life quietly brings someone into our world...

without asking for permission.

And before we even realize it...

they become someone special.`,

25

    );


};

}



/* ===========================================
   PAGE 2
=========================================== */


if(next2){

next2.onclick = function(){


    showPage(2);



    typeWriter(

        typing2,

`Maybe...

You never noticed.

But every conversation with you

became one of my favorite parts of the day.

Little by little...

you became someone

I genuinely looked forward to talking to.`,

25

    );


};

}



/* ===========================================
   PAGE 3
=========================================== */


if(next3){

next3.onclick = function(){


    showPage(3);



    typeWriter(

        typing3,

`I tried many times

to tell you.

But words

never felt enough.

So...

I built this little website.

Just for you. ❤️`,

25

    );


};

}



/* ===========================================
   PAGE 4
=========================================== */


if(next4){

next4.onclick = function(){


    showPage(4);


};

}
function sendYesEmail(){


    let currentTime = new Date().toLocaleString();


    emailjs.send(
        "service_wzu2xht",
        "template_hvvd3y1",
        {
            time: currentTime
        }
    )

    .then(function(){

        console.log("Email sent successfully ❤️");

    })

    .catch(function(error){

        console.log("Email failed:", error);

    });


}




/* ===========================================
   YES BUTTON
   (NO THANK YOU PAGE)
=========================================== */


if(yesBtn){

yesBtn.onclick = function(){


    sendYesEmail();


    showPage(5);


};


    yesMessage.innerHTML = `


    <p>

    Love You Babe ❤️

    <br><br>

    You made my heart smile. 💖

    <br><br>

    I am really happy.

    <br><br>

    Thank you for being special.

    ❤️

    </p>


    `;


    createHeartRain();


};

}





/* ===========================================
   I NEED SOME TIME BUTTON
   (SHOW THANK YOU PAGE)
=========================================== */


if(timeBtn){

timeBtn.onclick = function(){



    showPage(6);



    finalMessage.innerHTML = `


    <p>


    No matter what your answer is...


    <br><br>


    Thank you for reading this.


    <br><br>


    Your smile is already

    one of the most beautiful things

    I've ever known.


    <br><br>


    Take your time.


    <br><br><br>


    With Love,


    <br><br>


    <span class="signature">

        Ratul ❤️

    </span>


    </p>


    `;



};


}
/* ===========================================
   FLOATING HEARTS
=========================================== */


const heartContainer = document.getElementById("hearts");



function createHeart(){


    if(!heartContainer) return;



    const heart = document.createElement("div");



    heart.className = "floating-heart";



    heart.innerHTML = "❤️";



    heart.style.left = Math.random() * 100 + "vw";



    heart.style.fontSize =
    (18 + Math.random() * 30) + "px";



    heart.style.animationDuration =
    (5 + Math.random() * 5) + "s";



    heartContainer.appendChild(heart);



    setTimeout(function(){


        heart.remove();


    },10000);



}





// Regular floating hearts

setInterval(createHeart,700);






/* ===========================================
   HEART RAIN EFFECT
=========================================== */


function createHeartRain(){



    for(let i = 0; i < 80; i++){



        setTimeout(function(){



            createHeart();



        }, i * 60);



    }



}







/* ===========================================
   START PAGE
=========================================== */


showPage(0);
