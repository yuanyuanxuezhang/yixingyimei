    function clock(){
        $(".flashview ul").animate({marginTop:"-108px"},500,function(){
            $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);                                                         
        })
    	}
    $(function(){
        var myvar=setInterval("clock()",2000);
        $(".flashview").hover(function(){
            clearInterval(myvar);                          
        },function(){
            myvar = setInterval("clock()",2000);
            })
    })

 
$(function() {
			$('#header').load('header.html');
			$('#footer').load('footer.html');
		})
	/*获取头部 尾部*/
	
/*广告无缝轮播  行业资讯*/
	$(function(){
	$('.In_run').liMarquee({
		direction: 'up',
		scrollamount: 20,
		drag: false
		});
	});
/*人才招聘轮播图*/	
$(document).ready(function(){
		  var oDiv=$(".box")
		  var banner=$(".job_banner")
		  oUl=oDiv.find("ul") 
		  jobNumber=banner.find(".show_nav span"),
		  oneWidth=oDiv.find("ul li").eq(0).width();
		  
		  var timer=null; 
		  var iNum=0;  
		  
		  jobNumber.on("click",function(){
		   $(this).addClass("active").siblings().removeClass("active");
		   var index=$(this).index(); 
		   iNum=index;
		   oUl.animate({
		    "left":-oneWidth*iNum,
		   })
		  });
		  
		function AUtoba(){
		   timer=setInterval(function(){  
		   iNum++;  
		   if(iNum>jobNumber.length-1){ 
		    iNum=0;
		   }
		   jobNumber.eq(iNum).trigger("click"); 
		   },2000)
		  }
		  AUtoba();
		  banner.hover(
		   function(){
		    clearInterval(timer);
		   },AUtoba
		  );
})
/*人才招聘 轮播图结束*/
/*详细页*/
$(document).ready(function(){
	var number=$(".detail_list li").length;
	$(".detail_list").width(number*239)
	var count = $(".detail_list li").length -4; /* 显示 4 个 li标签内容 */
	var num=$(".detail_list li").length;
	var curIndex = 0;
	
	$('.scolbtn').click(function(){
		if( $(this).hasClass('disabled') ) return false;
		
		if ($(this).hasClass('btn_l')) --curIndex;
		else ++curIndex;
		
		if (num<=4) return false;
		
		$('.scolbtn').removeClass('disabled');
		if (curIndex == 0) $('.btn_l').addClass('disabled');
		if (curIndex == count-1) $('.btn_r').addClass('disabled');
		
		$(".detail_list").stop(false, true).animate({"marginLeft" : -curIndex*239 + "px"}, 600);
	});
})