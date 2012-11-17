(function($){
	$.fn.jtextsizer = function(){
		var options = {
    	sizedefault: "21px",
    	inc: 20,
    	cr: "\r\n"
		};

		var temp = [
   		"<ul class=\"textsizer clearfix round\">",
   		"<li class=\"minus\">A</li>",
    	"<li class=\"default\">A</li>",
    	"<li class=\"plus\">A</li>",
   		"</ul>"
		];

		var newsize = function(operator) {
			var start = parseInt($("p").css("font-size").replace(/px/, ""),10);	
			return operator==="plus" ? start+options.inc : start-options.inc;
		};
		
		return this.each(function(){
			$(this).after(temp.join(options.cr));
			$(".textsizer li").click(function() {
				var currentli = $(this).attr("class");
				currentli!=="default" ? $("p").css("font-size", newsize(currentli) + "px") : $("p").css({'font-size': options.sizedefault});
			});
		});
	};
})(jQuery);
