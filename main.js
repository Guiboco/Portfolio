document.addEventListener("DOMContentLoaded", () => {
    let refran = document.querySelector('#refran');
    document.addEventListener('scroll', () => {
        if (window.pageYOffset > 250) {
            refran.className = "slideIn";
            refran.style.display = "inline-block";
        }
    });
    // window.onscroll = function () {
    //     console.log(
    //         'top: ' + (window.pageYOffset || document.documentElement.scrollTop) + ' ' +
    //         'left: ' + (window.pageXOffset || document.documentElement.scrollLeft)
    //     );
    // }
})