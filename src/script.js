window.addEventListener("load", function(){
    let target = document.getElementById("subheading");
    let text = "God restoring all things to His original intentions in Christ."
    let loop = false;
    let speed = 100;
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


function submitForm () {
    let submissionButton = document.getElementById("contact-form-submit");
    submissionButton.innerHTML = 'Envoyé'
    alert(`Merci de nous avoir contacté ! Nous reviendrons prochainement vers vous.`)
}

let contactFormSubmit = document.getElementById("contact-form-submit");
contactFormSubmit.addEventListener("click", submitForm); 
