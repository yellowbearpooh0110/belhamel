console.log("start");
$(window).on("load", function () {
  console.log("success");
  $("body").addClass("loaded");
  // $(".loader").css("opacity", "0");
});

$(document).ready(function () {
  //SVG
  svg4everybody();

  // Floater
  $(window).on(
    "load resize scroll",
    $.debounce(20, function () {
      if ($(document).scrollTop() > 0) {
        $("body").addClass("scrolled");
        $(".floater").addClass("show");
      } else {
        $("body").removeClass("scrolled");
        $(".floater").removeClass("show");
      }

      if ($("body > .footer, .js-floater-disable").is(":in-viewport")) {
        $(".floater").removeClass("show");
      } else {
        $(".floater").addClass("show");
      }
    })
  );
});
