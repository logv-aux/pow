// pow.sections: pow sections per slide
// source code: http://github.com/logv/pow
pow.bundle({
 "data": "document.addEventListener(\"keydown\",function(a){var d={13:function(){pow.slide.sections.next()},32:function(){pow.slide.sections.next()},37:function(){pow.slide.sections.prev()},39:function(){pow.slide.sections.next()},33:function(){pow.slides.go.prev()},34:function(){pow.slides.go.next()}}[a.keyCode];d&&(d(),a.stopPropagation())},!0);\nfunction load_sections(a){var d=$(a.el),b=d.find(\".section\"),c=d.find(\".slider\");b.hide();c.hide();0==c.length&&(c=$(\"<div class='slider'>\"),c.css({position:\"absolute\",left:0,top:0,width:\"25px\",backgroundColor:\"#3B5998\"}),d.append(c),c.click(function(b){var d=c.height();b.offsetY>d/2?a.sections.next():a.sections.prev()}));a.sections={index:-1,next:function(){b.hide();this.index<b.length-1?(c.show(),this.index+=1,$(b[this.index]).stop().fadeIn(),this.refresh()):(this.index=-1,pow.slides.go.next())},\nprev:function(){b.hide();0<this.index?(c.show(),this.index-=1,$(b[this.index]).fadeIn(),this.refresh()):(this.index=-1,this.refresh(),pow.slides.go.prev())},refresh:function(){var a=d.outerHeight()/b.length,e=parseInt(a*this.index,10);if(!b.length||1==b.length)a=\"100%\";c.css({height:a});c.stop().animate({top:parseInt(e,10)})}};1<=b.length&&a.sections.next()}pow.slides.on.show(load_sections);\n", 
 "versions": {
  "sections": 1477678984
 }, 
 "wrap": "// pow.sections: pow sections per slide\n// source code: http://github.com/logv/pow\npow.bundle(~b~)"
})