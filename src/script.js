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

function displayVideo() {
            let video = document.querySelector(".player");
            if (video.style.display === "none") {
                video.style.display = "block";
            } else {
                video.style.display = "none"
            }
}
        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        let videoId = [
          "KPYshqL1LSw",
          "hd13_6YgYAk",
        ];
        var player;
        function onYouTubeIframeAPIReady() {
        player = new YT.Player("player", {
            height: '430',
            width: '620',
            videoId: 'KPYshqL1LSw',
            playerVars: {
            playsinline: 1,
            },
            // If you want video to play auto. 
            events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
            }
        });
        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
        event.target.playVideo();
        }
        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 10000);
            done = true;
        }
        }
        function stopVideo() {
        player.stopVideo();
        };
    }
////

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

