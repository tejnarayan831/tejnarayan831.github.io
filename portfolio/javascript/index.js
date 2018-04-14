$(window).on("load",function() {
  	$("#home-content").addClass("top_to_middle");
  	$("#hireme a").addClass("opacityAnim");
});
$(window).on("resize scroll",function(){
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	var elems = $('.scrollspy');
	elems.each(function(index){
		var elem 	= $(this)
		var elemTop = elem.offset().top;
		var elemBottom 	= elemTop + elem.outerHeight();
		if(viewportBottom > elemTop && viewportTop < elemBottom){
			elemId = elem.attr("id");
			if(elem.hasClass("heading")){
				$("#"+elemId).addClass("bottom_to_top");
				$("#"+elemId).css("cssText", "opacity: 1.0 !important;");
			}else{
				if(elemId === "aboutme-details"){
					$("#"+elemId).addClass("left_to_right");
				}else{
					$("#"+elemId).addClass("right_to_left");
				}
			}
		}
	});
	if($(document).scrollTop() > 300){
		$(".navbar").removeClass("navbar-static-top").addClass("navbar-fixed-top").css({"padding":"10px 0px","background-color":"#0078d7", "min-height": "60px"});
		$(".navbar-toggle .icon-bar").css("background-color","rgba(255,255,255,1.0)");
		$(".navbar-fixed-top .navbar-collapse").css("max-height","100%");
		$('.navbar').fadeIn();
		$("#menu-navbar-collapse").css("background-color","#0078d7");
	}else{
		$(".navbar").removeClass("navbar-fixed-top").addClass("navbar-static-top").css({"padding":"20px 0px","background-color":"rgba(255,255,255,0)"});
		$(".navbar-toggle .icon-bar").css("background-color","rgba(255,255,255,1.0)");
		$(".navbar").css({"box-shadow":"none"});
		$("#menu-navbar-collapse").css("background-color","#404343")
	}
});
