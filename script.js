$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});

// ScrollMagic
let controller = new ScrollMagic.Controller();

$(".photo").each(function () {
    let photoScene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.5,
        reverse: false,
    })
        .setClassToggle(this, "show")
        .addTo(controller);
});
