console.log("test");
$(document).ready(function () {
  //SVG
  svg4everybody();

  //Click Copy
  $(".js-copy").on("click", function () {
    var temp = $("<input>");
    var btn = $(this);

    $("body").append(temp);
    temp.val(btn.text()).select();
    document.execCommand("copy");
    temp.remove();

    btn.addClass("done");
  });

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
