(function () {
    const header = document.querySelector('.page-header');
    const button = document.querySelector('.page-header__toggle');

    button.addEventListener('click', () => {
        header.classList.toggle('page-header--toggled');
    });
})();


(function () {
    const controller = document.querySelector('.slider__controller');
    const img = document.querySelectorAll('.slider__item');
    const afterImg = img[1].querySelector('img');
    const beforeButton = document.querySelector('.slider__button--after');
    const afterButton = document.querySelector('.slider__button--before');

    let globalValue = 50;

    controller.addEventListener('input', (e) => {
        setTransition('none');
        globalValue = e.target.value;
        setValue(globalValue);
    });

    beforeButton.addEventListener('click', () => {
        setTransition('all 0.3s');
        controller.value = 0;
        setValue(0);
    });

    afterButton.addEventListener('click', () => {
        setTransition('all 0.3s');
        controller.value = 100;
        setValue(100);
    });

    function setTransition(tr) {
        img[0].style.transition = tr;
        img[1].style.transition = tr;
        afterImg.style.transition = tr;
    }

    function setValue(value) {
        setWidth(img[0], value);
        setWidth(img[1], 100-value);
        setMargin(img[1], 100-value);
        setTranslate(afterImg, 100-value);
    }

    function setWidth(el, width) {
        el.style.width = `${width}%`;
    }

    function setMargin(el, x) {
        el.style.marginLeft = `${100 - x}%`;
    }

    function setTranslate(el, x) {
        el.style.transform = `translateX(${-(100 - x)}%)`;
    }
})();