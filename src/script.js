window.addEventListener("load", function(){
    let target = document.getElementById("subheading");
    let text = "God restoring all things to His original intentions in Christ."
    let loop = false;
    let speed = 120;
    let pointer = 0;
    let timer = setInterval(function(){
        pointer++;
        if (pointer <= text.length) {
            target.innerHTML = text.substring(0, pointer);
        } else { 
            if (loop) {pointer = 0;} 
            else {clearInterval(timer);}
        }
    }, speed);
});


function contactForm () {
    let submissionButton = document.getElementById("contact-form-submit");
    submissionButton.innerHTML = 'Envoyé'
    submissionButton.style.background = "#bb8b6e";
    submissionButton.style.color = "#fff";
    alert(`Merci de nous avoir contacté ! Nous reviendrons prochainement vers vous.`)
}

let contactFormSubmit = document.getElementById("contact-form-submit");
contactFormSubmit.addEventListener("click", contactForm); 

function susbcribeForm () {
    let subscribeButton = document.getElementById("subscribe-form-submit");
    subscribeButton.innerHTML = "Abonné";
    subscribeButton.style.background = "#000000";
    subscribeButton.style.color = "#fff";
}

let subscribeButton = document.getElementById("subscribe-form-submit");
subscribeButton.addEventListener("click", susbcribeForm); 

function donatePrompt(donateText) {
  return function () {
    alert(donateText);
  };
}
let string = "Cliquez ici";
let linked = string.link("contact_us.html#donate");
let donateText = `J'espère que vous puissez profiter de ses enseignements gratuits. Cela étant un oeuvre de foi, nous serions très connaissant pour votre soutien financier afin de continuer ce mouvement de Dieu. Pour faire un don, rendez-vous dans la rubrique "Contact".`;
setTimeout(donatePrompt(donateText), 50000);

let width= screen.width;
if (width < '750') {
    document.querySelector("col-6").className = "col";
}
