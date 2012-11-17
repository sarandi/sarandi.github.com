(function ($) {
	"use strict";
	$.fn.jtextsizer = function () {
		var options = {
				sizedefault: "21px",
				inc: 20,
				cr: "\r\n"
			},
			temp = [
				'<ul class=\"textsizer clearfix round\">',
				'<li class=\"minus\">A</li>',
				'<li class=\"default\">A</li>',
				'<li class=\"plus\">A</li>',
				'</ul>'
			];

		return this.each(function () {
			$(this).after(temp.join(options.cr));
			$(".textsizer li").click(function () {
				var currentli = $(this).attr("class"),
					startsize = parseInt($("p").css("font-size").replace(/px/, ""), 10);
				switch (currentli) {
				case 'plus':
					$("p").css({fontSize: startsize + options.inc + "px"});
					break;
				case 'minus':
					$("p").css({fontSize: startsize - options.inc + "px"});
					break;
				case 'default':
					$("p").css({fontSize: options.sizedefault});
					break;
				}
			});
		});
	};
}(jQuery));