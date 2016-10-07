// pow.sections: pow sections per slide
// source code: http://github.com/logv/pow
pow.bundle({
 "data": "document.addEventListener(\"keydown\",function(a){var b={38:function(){pow.slide.sections.prev()},40:function(){pow.slide.sections.next()}}[a.keyCode];b&&(b(),a.stopPropagation())},!0);\nfunction load_sections(a){var b=$(a.el),c=b.find(\".section\"),d=b.find(\".slider\");0==d.length&&(d=$(\"<div class='slider'>\"),d.css({position:\"absolute\",left:0,top:0,width:\"25px\",backgroundColor:\"#3B5998\"}),b.append(d),d.click(function(b){var c=d.height();b.offsetY>c/2?a.sections.next():a.sections.prev()}));a.sections={index:-1,next:function(){this.index<c.length-1&&(c.hide(),this.index+=1,$(c[this.index]).stop().fadeIn(),this.refresh())},prev:function(){0<this.index&&(c.hide(),this.index-=1,$(c[this.index]).fadeIn(),\nthis.refresh())},refresh:function(){var a=parseInt(b.height()/c.length,10)+30,e=a*this.index;1==c.length&&(a=\"100%\");d.css({height:a});d.stop().animate({top:e})}};a.sections.next()}pow.slides.on.show(load_sections);\n", 
 "versions": {
  "sections": 0
 }, 
 "wrap": "// pow.sections: pow sections per slide\n// source code: http://github.com/logv/pow\npow.bundle(~b~)"
})