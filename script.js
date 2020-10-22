var toggle = true;

$("#toggleKey").on("click", function () {
  if (toggle) {
    $("#toggleCircle").css({
      transform: "translateX(1.5rem)",
    });
    $("#toggleKey").css(
      "background",
      "linear-gradient(135deg,hsl(146, 68%, 55%) 35%,  hsl(210, 78%, 56%) 100%); "
    );

    // Changing styling for light mode
    $("body").addClass("whiteBody");
    $("body").css({ background: "hsl(0, 0%, 100%)" });
    $("main").addClass("whiteColor");
    $(".dashboardCards").css({ background: "hsl(227, 47%, 96%)" });
    $(".overviewCards").css({ background: "hsl(227, 47%, 96%)" });
    toggle = !toggle; 
  } else {
    $("#toggleCircle").css({ transform: "translateX(0)" });
    $("#toggleKey").css(
      "background",
      "linear-gradient(135deg, hsl(210, 78%, 56%) 35%, hsl(146, 68%, 55%) 100%);"
    );

    // Back to normal styling
    $("body").removeClass("whiteBody");
    $("body").css({ background: "#1e202a" });
    $("main").removeClass("whiteColor");
    $(".dashboardCards").css({ background: "hsl(228, 28%, 20%)" });
    $(".overviewCards").css({ background: "hsl(228, 28%, 20%)" });

    toggle = !toggle;
  }
});
