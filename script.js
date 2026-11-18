const revealElements = document.querySelectorAll(
".card,.class-card,.pricing-card,.feature"
);

function revealOnScroll(){

revealElements.forEach((element)=>{

const windowHeight = window.innerHeight;

const revealTop =
element.getBoundingClientRect().top;

const revealPoint = 100;

if(revealTop < windowHeight - revealPoint){

element.style.opacity = "1";

element.style.transform =
"translateY(0px)";

}

});

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealElements.forEach((element)=>{

element.style.opacity = "0";

element.style.transform =
"translateY(40px)";

element.style.transition =
"all 0.8s ease";

});

const whatsapp =
document.querySelector(".whatsapp");

setInterval(()=>{

whatsapp.classList.toggle("bounce");

},2000);