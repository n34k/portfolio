const DOM = (() => {
    const hello = document.querySelector('.top-text');
    const name = document.querySelector('.biggest-text');
    const welcome = document.querySelector('.bigger-text');
    const learn = document.querySelector('.bottom-text');

    const fadeEvent = () => {
        hello.classList.add("fade");
        setTimeout(() => {
            name.classList.add("fade");
        }, 1000);
        setTimeout(() => {
            welcome.classList.add("fade");
        },2000);
        setTimeout(() => {
            learn.classList.add("fade");
        }, 3000);
    }

    const fadeLoad = () => {
        document.addEventListener("DOMContentLoaded" , fadeEvent);
    }
    return{fadeLoad}
})();

DOM.fadeLoad();