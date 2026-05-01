document.querySelectorAll(".carousel").forEach(carousel => {

    const track = carousel.querySelector(".carousel-track");
    const images = carousel.querySelectorAll("img");
    const btnLeft = carousel.querySelector(".left");
    const btnRight = carousel.querySelector(".right");

    let index = 0;

    function update(){
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    btnRight.addEventListener("click", () => {
        if(index < images.length - 1){
            index++;
            update();
        }
    });

    btnLeft.addEventListener("click", () => {
        if(index > 0){
            index--;
            update();
        }
    });

    /* ----- DRAG / SWIPE ----- */
    let startX = 0;

    track.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;

        if(startX - endX > 50 && index < images.length - 1){
            index++;
        }

        if(endX - startX > 50 && index > 0){
            index--;
        }

        update();
    });

});