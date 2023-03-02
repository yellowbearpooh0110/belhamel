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
});
