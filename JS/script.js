
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