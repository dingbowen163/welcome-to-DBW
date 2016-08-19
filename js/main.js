$(function(){
	//导航选项卡
	$('.homeList li').hover(function(){
		$(this).addClass('active');	
	},function(){
		$(this).removeClass('active');		
	});
	$('.homeList li').click(function(){
		$(this).addClass('active');	
	});
	//头像样式
	$(function(){
		var selfile=$('.selfile');
		selfile.stop().animate({
			top:300,opacity:1
		},{
			duration:800
		});
		selfile.hover(function(){
			$(this).css('border-color','#948484');
		},function(){
			$(this).css('border-color','rgb(113, 91, 91)');	
		});
	});
	
	
	//作品展示移入块
	(function(){
		$(function(){
			var aLi=$('.worksList li');
			aLi.each(function(){
				enter($(this));
				leave($(this));
			});
			function enter(obj)
			{
				obj.mouseenter(function (ev){
					var n=getN(obj,ev);
					var oSpan=obj.children('span');
					switch (n){
						case 0: // right
							oSpan.css({
								left:250,top:0
							});
							break;
						case 1: // bottom
							oSpan.css({
								left:0,top:250
							});
							break;
						case 2: // left
							oSpan.css({
								left:-250,top:0
							});
							break;
						case 3: // top
							oSpan.css({
								left:0,top:-250
							});
							break;
					}
					oSpan.stop().animate({
						left:0, top:0
					});
				});
			}
			function leave(obj){
				obj.mouseleave(function(ev){
					var n=getN(obj,ev);
					var oSpan=obj.children('span');
					switch (n){
						case 0: // right
							oSpan.stop().animate({
								left:250, top:0
							});
							break;
						case 1: // bottom
							oSpan.stop().animate({
								left:0, top:250
							});
							break;
						case 2: // left
							oSpan.stop().animate({
								left:-250, top:0
							});
							break;
						case 3: // top
							oSpan.stop().animate({
								left:0, top:-250
							});
							break;
					}
				});
			}
			function getN(obj, ev){
				var x=obj.position().left+obj.width()/2-ev.clientX;
				var y=obj.position().top+obj.height()/2-ev.clientY;
				var n=Math.round((d2a(Math.atan2(y, x))+180)/90)%4;
				return n;

			}
			function d2a(d){
				return d*180/Math.PI;
			}
		});
		$('.divcssCon').click(function(){
			window.open('works/index/div+css.index.html');
		});
		$('.jsCon').click(function(){
			window.open('works/index/js.index.html');
		});
		$('.h5Con').click(function(){
			window.open('works/index/html5css3.index.html');
		});
	})();
	

	// projects
		/*$(function(){
			$('.projectsList li').hover(function(){
				$(this).addClass('on');
			},function(){
				$(this).removeClass('on');
			});
			$('.projectsList li').click(function(){
				$(this).addClass('on');
			},function(){
				$(this).removeClass('on');
			});
		});*/
	
	//跳转楼层
	function getPos(obj){
		var l=0;
		var t=0;
		while(obj){
			l+=obj.offsetLeft;
			t+=obj.offsetTop;
			obj=obj.offsetParent;
		}
		return {left:l, top:t};
	}
	$(function(){
		var oUl=$('.subNav');
		var aLi=$('.subNav li');
		var oCon=$('.wholeCon');
		var aCon=$('.wholeCon>li');
		var time=500;
		var timer=null;
		
		var aPos=[];
		aLi.each(function(index){
			aPos.push(getPos(aCon[index]).top);
			(function(i){
				aLi.eq(i).click(function(){
					aLi.removeClass('active');
					$(this).addClass='active';
					scrollTo(getPos(aCon[i]).top);
				});
			})(index);
		});
		function scrollTo(iTarget){
		var count=Math.floor(time/30);
		var start=document.documentElement.scrollTop || document.body.scrollTop;
		var dis=iTarget-start;
		var n=0;
		timer=setInterval(function(){
			n++;
			var a=n/count;
			var cur=start+dis*a;
			document.documentElement.scrollTop=document.body.scrollTop=cur;
			if(n==count){
				clearInterval(timer);	
			}
		},30);
	}
		
		function arr_indexOf(arr,item){
			for(var i=0; i<arr.length; i++){
				if(arr[i]-50<item && item<arr[i]+50)return i;
			}
			return -1;
		}
		
		console.log(aPos);
		//系统滚动
		$(window).scroll(function(){
			var scrollT=$(window).scrollTop();
			var clientHeight=$(window).height();
			if(scrollT>clientHeight){
				oUl.show();
			}
			else{
				oUl.hide();
			}
			/*if(scrollT==getPos(aCon[1]).top){
				alert('ok了');	
			}*/
			if(arr_indexOf(aPos,scrollT)!=-1){
				var n=arr_indexOf(aPos,scrollT);
				for(var i=0; i<aLi.length; i++){
					aLi[i].className='';
				}
				aLi[n].className='active';	
			}
		});
	});
});