var bubble_anim = function () {
    const burstContainer = document.getElementById('burst-animation');
    const sizes = ['biggest', 'bigger', 'big', 'medium', 'small', 'smaller', 'smallest'];
    for (let i = 0; i < 110; i += 1) {
        const ang = Math.floor(i / 110 * 720);
        $('<div />').addClass('burst-wrapper').append($('<div/>').addClass('red-circle').addClass(sizes[Math.floor(Math.random() * sizes.length)])).css({transform: 'rotate(' + ang + 'deg)'}).append($('<div/>').addClass('maroon-circle').addClass(sizes[Math.floor(Math.random() * sizes.length)])).css({transform: 'rotate(' + ang + 'deg)'}).append($('<div/>').addClass('dark-gray-circle').addClass(sizes[Math.floor(Math.random() * sizes.length)])).css({transform: 'rotate(' + ang + 'deg)'}).append($('<div/>').addClass('dark-orange-circle').addClass(sizes[Math.floor(Math.random() * sizes.length)])).css({transform: 'rotate(' + ang + 'deg)'}).append($('<div/>').addClass('yellow-circle').addClass(sizes[Math.floor(Math.random() * sizes.length)])).css({transform: 'rotate(' + ang + 'deg)'}).append($('<div/>').addClass('dark-blue-circle').addClass(sizes[Math.floor(Math.random() * sizes.length)])).css({transform: 'rotate(' + ang + 'deg)'}).append($('<div/>').addClass('dark-green-circle').addClass(sizes[Math.floor(Math.random() * sizes.length)])).css({transform: 'rotate(' + ang + 'deg)'}).append($('<div/>').addClass('gray-circle').addClass(sizes[Math.floor(Math.random() * sizes.length)])).css({transform: 'rotate(' + ang + 'deg)'}).append($('<div/>').addClass('green-circle').addClass(sizes[Math.floor(Math.random() * sizes.length)])).css({transform: 'rotate(' + ang + 'deg)'}).appendTo($('.carousel-burst'))
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const animation = (() => {
        let executed = !1;
        return () => {
            if (!executed) {
                executed = !0;
                Array.from(document.getElementsByClassName('burst-wrapper')).forEach((wrapper => {
                    Array.from(wrapper.getElementsByTagName('div')).forEach((circle => {
                        $(window).width() < 471 ? circle.animate([{transform: 'translate3d(0px,0px,0px)'}, {transform: `translateX(${randomNumber(160, 600)}px)`}], {
                            duration: randomNumber(100, 3e3),
                            iterations: 1,
                            fill: 'forwards',
                            easing: 'ease-in'
                        }) : circle.animate([{transform: 'translate3d(0px,0px,0px)'}, {transform: `translateX(${randomNumber(200, 600)}px)`}], {
                            duration: randomNumber(100, 3e3),
                            iterations: 1,
                            fill: 'forwards',
                            easing: 'ease-in'
                        })
                    }))
                }))
            }
        }
    })();
    var bounding = burstContainer.getBoundingClientRect();

    function burst() {
        const hT = $('#burst-animation').offset().top - 150, hH = $('#burst-animation').outerHeight(),
            wH = $(window).height();
        $(this).scrollTop() > hT + hH - wH && animation()
    }

    $(window).scroll((() => {
        burst()
    })), bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && burst()
}();
