(function($){
	$.fn.jtextsizer = function(){
		var options = {
    	'sizedefault': '16px',
    	'inc': 20,
    	's': "<li class=\"minus\">A</li>",
    	'd': "<li class=\"default\">A</li>",
    	'l': "<li class=\"plus\">A</li>",
    	'cr': "\r\n"
		};

		var temp = [
   		"<ul class=\"textsizer clearfix round\">",
   		options.s,
   		options.d,
   		options.l,
   		"</ul>"
		];

		var sizer = function() {
    	var output = temp.join(options.cr);
    	return output;
		};

		var newsize = function(operator) {
    	var size = $("p").css("font-size");
			var start = parseInt(size.replace(/px/, ""),10);	
			return operator==="plus" ? start+options.inc : start-options.inc;
		};
		
		return this.each(function(){
			$(this).after(sizer);
			$(".textsizer li").click(function() {
				console.log("test");
				var currentli = $(this).attr("class");
				currentli!=="default" ? $("p").css("font-size", newsize(currentli) + "px") : $("p").css({'font-size': options.sizedefault});
			});
		});
	};
})(jQuery);
