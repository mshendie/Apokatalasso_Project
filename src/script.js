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
