document.querySelectorAll(".carousel").forEach(carousel => {

    const track = carousel.querySelector(".carousel-track");
    const images = carousel.querySelectorAll("img, video");
    const btnLeft = carousel.querySelector(".left");
    const btnRight = carousel.querySelector(".right");

    let index = 0;
    let autoplay = true;

    function stopautoplay(){
        autoplay = false;
    }

    function update(){
        track.style.transform = `translateX(-${index * 100}%)`;

        carousel.querySelectorAll("video").forEach(video => {
            video.pause();
        });
    
        const current = images[index];
    
        if(current.tagName === "VIDEO"){
            current.play();
        }
    }

    btnRight.addEventListener("click", () => {
        stopautoplay();
        if(index < images.length - 1){
            index++;
            update();
        }
    });

    btnLeft.addEventListener("click", () => {
        stopautoplay();
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
        stopautoplay();
        let endX = e.changedTouches[0].clientX;

        if(startX - endX > 50 && index < images.length - 1){
            index++;
        }

        if(endX - startX > 50 && index > 0){
            index--;
        }

        update();
    });

    setInterval(() => {

        if(!autoplay) return;

        if(index < images.length - 1){
            index++;
        } else {
            index = 0;
        }

        update();

    }, 5000);

});