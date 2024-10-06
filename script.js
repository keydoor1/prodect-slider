var loaderText = document.getElementById("loaderText");
var content = document.getElementById("content");
var leftSlide = document.querySelector(".left");
var rightSlide = document.querySelector(".right");

var percentage = 0;

var interval = setInterval(function() {
    percentage += 1;
    loaderText.textContent = percentage + "%";

    if (percentage === 100) {
        clearInterval(interval);

        
        document.getElementById("loader").style.display = "none";
        content.classList.remove("hidden");

       
        leftSlide.classList.add("split-left");
        rightSlide.classList.add("split-right");
    }
}, 25); 


var videos = document.querySelectorAll(".myVideo");

videos.forEach(function (video) {
    var rewindInterval; 

    video.addEventListener("mouseenter", function () {
        clearInterval(rewindInterval);
        video.play(); 
    });

   
    video.addEventListener("mouseleave", function () {
        video.pause(); 

        rewindInterval = setInterval(function () {
            if (video.currentTime > 0) {
                video.currentTime -= 0.2;
            } else {
                clearInterval(rewindInterval);
            }
        }, 50); 
    });

    video.addEventListener("ended", function () {
        video.currentTime = 0; 
        video.play(); 
    });
});

