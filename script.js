$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});

// ScrollMagic
let controller = new ScrollMagic.Controller();

let photoScene = new ScrollMagic.Scene({
    triggerElement: "#photo-gallery",
    triggerHook: 0.3,
})
    .setClassToggle(".photo", "show")
    .addTo(controller);
