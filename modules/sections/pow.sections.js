document.addEventListener('keydown', function(e) {
  var action = {
    '13' : function () { pow.slide.sections.next(); },
    '32' : function () { pow.slide.sections.next(); },
    '37' : function () { pow.slide.sections.prev(); },
    '39' : function () { pow.slide.sections.next(); },
    '33' : function () { pow.slides.go.prev(); },
    '34' : function () { pow.slides.go.next(); }
  };

  var f = action[e.keyCode];
  if (f) {
    f();
    e.stopPropagation();
  }
}, true);

function load_sections(slide) {
  var slideEl = $(slide.el),
      sections = slideEl.find(".section"),
      slider = slideEl.find(".slider");

  sections.hide();
  slider.hide();

  if (slider.length == 0) {
    slider = $("<div class='slider'>");
    slider.css({
      position: "absolute",
      left: 0,
      top: 0,
      width: "25px",
      backgroundColor: "#3B5998"
    });
    slideEl.append(slider);

    slider.click(function(e) {
      var h = slider.height();
      if (e.offsetY > h / 2) {
        slide.sections.next()
      } else {
        slide.sections.prev();

      }
    });
  }

  slide.sections = {
    index: -1,
    next: function() {
      sections.hide();
      if (this.index < sections.length-1) {
        slider.show();
        this.index += 1;
        $(sections[this.index])
          .stop()
          .fadeIn();
        this.refresh();
      } else {
        this.index = -1;
        pow.slides.go.next();
      }
    },
    prev: function() {
      sections.hide();
      if (this.index > 0) {
        slider.show();
        this.index -= 1;
        $(sections[this.index])
          .fadeIn();
        this.refresh();
      } else {
        this.index = -1;
        this.refresh();

        pow.slides.go.prev();
      }
    },
    refresh: function() {
      var slider_height = slideEl.outerHeight() / (sections.length);
      var slider_offset = parseInt(slider_height * this.index, 10);
      if (!sections.length || sections.length == 1) { slider_height = "100%"; }

      slider.css({
        "height" : slider_height
      });

      slider.stop().animate({
        "top" : parseInt(slider_offset, 10)
      });
    }
  };

  if (sections.length >= 1) {
    slide.sections.next();
  }
}
pow.slides.on.show(load_sections);
