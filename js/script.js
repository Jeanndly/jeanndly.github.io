document.addEventListener("DOMContentLoaded", function() {
    let rotatingImage = document.getElementById("rotatingImage");

    rotatingImage.addEventListener("mouseover", function() {
        rotatingImage.style.animationPlayState = "paused";
    });

    rotatingImage.addEventListener("mouseleave", function() {
        rotatingImage.style.animationPlayState = "running";
    });
});
