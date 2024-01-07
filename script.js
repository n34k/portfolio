const DOM = (() => {
    const hello = document.querySelector('.top-text');
    const name = document.querySelector('.biggest-text');
    const welcome = document.querySelector('.bigger-text');
    const learn = document.querySelector('.bottom-text');
    const aboutMe = document.querySelector('.about-me');
    const work = document.querySelector('.work');

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

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

    const fadeScroll = () => {
        if (isInViewport(aboutMe)) {
            aboutMe.classList.add('fade');
          }
    
          if (isInViewport(work)) {
            work.classList.add('fade');
          }
    }

    const fadeLoad = () => {
        document.addEventListener("DOMContentLoaded" , fadeEvent);
        window.addEventListener('scroll', fadeScroll);
    }
    return{fadeLoad}
})();

DOM.fadeLoad();