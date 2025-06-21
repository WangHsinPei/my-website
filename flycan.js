$(document).ready(function(){
	$(".MASK,#goTop").css("display","none");	

	$("#BTN").click(function(){
	 $(".MASK").fadeIn();
	 });

	 $("#XX").click(function(){
	 $(".MASK").fadeOut(500);
	 });
});


$(function(){

	$("#BTN").on("click", doOPEN );
	
	$("#XX").on("click", doCLOSE );
	
	function doOPEN(){	
		$("#NAV").removeClass("goOUT").addClass("goIN");
	}
	
	function doCLOSE(){
		$("#NAV").removeClass("goIN").addClass("goOUT");
	}

	//==當視窗大於 736 變成桌面版，就同時移除 goIN goOUT 樣式====
	
	$(window).on("resize",clearALL);
	
	function clearALL(){
		if($(window).innerWidth()>736){
			$("#NAV").removeClass("goIN goOUT");
		}
	}
	
});


$(function(){
	
	$("#goTop").click(function(){

		$("html,body").animate({scrollTop:0},900);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

	/* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 450){
            $('#goTop').fadeIn();
        } else {
            $('#goTop').fadeOut();
        }
    });

});




