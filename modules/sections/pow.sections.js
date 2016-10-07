document.addEventListener('keydown', function(e) {
  var action = {
    '38' : function () { pow.slide.sections.prev(); },
    '40' : function () { pow.slide.sections.next(); }
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
      if (this.index < sections.length-1) {
        sections.hide();
        this.index += 1;
        $(sections[this.index])
          .stop()
          .fadeIn();
        this.refresh();
      }
    },
    prev: function() {
      if (this.index > 0) {
        sections.hide();
        this.index -= 1;
        $(sections[this.index])
          .fadeIn();
        this.refresh();
      }
    },
    refresh: function() {
      var slider_height = parseInt(slideEl.height() / sections.length, 10)+30;
      var slider_offset = slider_height * this.index;
      if (sections.length == 1) {
        slider_height = "100%";
      }

      slider.css({
        "height" : slider_height
      });
      slider.stop().animate({
        "top" : slider_offset
      });
    }
  };
  slide.sections.next();
};
pow.slides.on.show(load_sections);
