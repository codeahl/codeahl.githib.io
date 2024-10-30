(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    normal: ["1081px", "1280px"],
    narrow: ["821px", "1080px"],
    narrower: ["737px", "820px"],
    mobile: ["481px", "736px"],
    mobilep: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Dropdowns.
  $("#nav > ul").dropotron({
    mode: "fade",
    speed: 300,
    alignment: "center",
    noOpenerFade: true,
  });

  // Nav.

  // Button.
  $(
    '<div id="navButton">' +
      '<a href="#navPanel" class="toggle"></a>' +
      "</div>"
  ).appendTo($body);

  // Panel.
  $(
    '<div id="navPanel">' +
      "<nav>" +
      '<a href="index.html" class="link depth-0">Home</a>' +
      $("#nav").navList() +
      "</nav>" +
      "</div>"
  )
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      resetScroll: true,
      resetForms: true,
      side: "top",
      target: $body,
      visibleClass: "navPanel-visible",
    });

  document.addEventListener("scroll", (e) => {
    if (window.innerWidth > 1080) {
      const hero_header = document.getElementById("nav");
      const about_section = document.getElementById("about");

      if (
        about_section.getBoundingClientRect().bottom >=
        hero_header.getBoundingClientRect().height
      ) {
        document.getElementById("nav").style.backgroundColor =
          "rgba(255, 255, 255, 0.2)";
      }

      if (
        hero_header.getBoundingClientRect().bottom >
        about_section.getBoundingClientRect().top
      ) {
        document.getElementById("nav").style.backgroundColor =
          "rgba(22, 22, 22, 1)";
        document.getElementById("nav").style.borderBottom = "solid white 3px";
        document.getElementById("nav").style.border = "solid white 2px";
      }
    } else {
      document.getElementById("nav").style.backgroundColor =
        "rgba(22, 22, 22, 1)";
    }
  });
})(jQuery);
