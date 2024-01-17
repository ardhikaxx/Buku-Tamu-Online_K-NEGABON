document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.animate');

    function addAnimationClass() {
        elementsToAnimate.forEach(element => {
            element.classList.add('show');
        });
    }

    addAnimationClass();
});