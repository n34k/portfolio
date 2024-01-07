const DOM = (() => {
    const hello = document.querySelector('.top-text');
    const name = document.querySelector('.biggest-text');
    const welcome = document.querySelector('.bigger-text');
    const learn = document.querySelector('.bottom-text');
    const aboutMe = document.querySelector('.about-me');
    const work = document.querySelector('.work');
    const menu = document.querySelector('.menu-img');
    const dropDown = document.querySelector('.dropdown');

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
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right >= 0
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

    const dropDownEvent = () => {
        menu.addEventListener('click', () => {
            if(dropDown.style.display === "flex")  {
                dropDown.style.display = "none";
            }
            else {
                dropDown.style.display = "flex";
            }
        })
    }

    const Events = () => {
        document.addEventListener("DOMContentLoaded" , fadeEvent);
        window.addEventListener('scroll', fadeScroll);
        dropDownEvent();
    }
    return{Events}
})();

DOM.Events();