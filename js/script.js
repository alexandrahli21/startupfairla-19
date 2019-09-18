titleSponsor.forEach(function(company) { eachFun(company, "title"); });
goldSponsors.forEach(function(company) { eachFun(company, "gold"); });
for (var i = 0; i < 2; i++) {
  document.querySelector('#gold-sponsors').innerHTML += "<div class='spacer'></div>";
}
bronzeSponsors.forEach(function(company) { eachFun(company, "bronze"); });
for (var i = 0; i < 3; i++) {
  document.querySelector('#bronze-sponsors').innerHTML += "<div class='spacer'></div>";
}

$(document).ready(function(){

  $(window).scroll(function() {
    if ($(window).scrollTop() > $(window).height()) {
      $("#top-link").fadeIn(300);
    }
    else {
      $("#top-link").fadeOut(300);
    }
  });

  $("#top-link").click(function() {
    $('html, body').animate({
      scrollTop: 0

    }, 1000, 'easeInOutCubic');
  });

  $("#about-link").click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top

    }, 1000, 'easeInOutCubic');
  });

  $("#faqs-link").click(function() {
    $('html, body').animate({
      scrollTop: $("#faqs").offset().top
    }, 1000, 'easeInOutCubic');
  });

  $("#sponsors-link").click(function() {
    var scrollHeight = $("#sponsors").offset().top;
    if (scrollHeight >= $(document).height() - $(window).height()) {
      scrollHeight = $(document).height() - $(window).height();
    }
    $('html, body').animate({
      scrollTop: scrollHeight
    }, 1000, 'easeInOutCubic');
  });
});
