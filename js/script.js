$(window).scroll(function() {
  let o = $(window),
      i = $(".oformlenie"),
      t = $(".oformlenie__section"),
      s = o.scrollTop() + o.height() / 3;

  t.each(function() {
      $(this).position().top <= s && $(this).position().top + $(this).height() > s && (i.removeClass(function(o,i) {
          return i.match(/(^\s)color-\s+/g)||[].join(" ")
      }),$(".oformlenie__section").removeClass("active"),$(this).addClass("active"))
  })
}).scroll();
