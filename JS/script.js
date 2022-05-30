$(".home").click(function () {
    $(".cart-nav").removeClass("active-nav", 'fast');
    $(".profile").removeClass("active-nav", 'fast');
    $(".fit").removeClass("active-nav", 'fast');
    $(".home").addClass("active-nav", 'fast');
});

$(".profile").click(function () {
    $(".cart-nav").removeClass("active-nav", 'fast');
    $(".profile").addClass("active-nav", 'fast');
    $(".fit").removeClass("active-nav", 'fast');
    $(".home").removeClass("active-nav", 'fast');
});

$(".fit").click(function () {
    $(".cart-nav").removeClass("active-nav", 'fast');
    $(".profile").removeClass("active-nav", 'fast');
    $(".fit").addClass("active-nav", 'fast');
    $(".home").removeClass("active-nav", 'fast');
});

$(".cart-nav").click(function () {
    $(".cart-nav").addClass("active-nav", 'fast');
    $(".profile").removeClass("active-nav", 'fast');
    $(".fit").removeClass("active-nav", 'fast');
    $(".home").removeClass("active-nav", 'fast');
});


document.querySelector(".camera-open").addEventListener("click", function () {
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({
            video: true
        })

        const constraints = {
            video: {
                width: {
                    min: 1280,
                    ideal: 1920,
                    max: 2560,
                },
                height: {
                    min: 720,
                    ideal: 1080,
                    max: 1440
                },
            }
        };

        async function getDevices() {
            const devices = await navigator.mediaDevices.enumerateDevices();
        }

    }
});