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
	window.onload=function(){
		var oUl=document.getElementsByClassName('subNav')[0];
		var aLi=oUl.children;
		var oCon=document.getElementsByClassName('wholeCon')[0];
		var aCon=oCon.children;
		
		var time=500;
		var timer=null;
		
		var aPos=[];
		
		for(var i=0; i<aLi.length; i++){
			aPos.push(getPos(aCon[i]).top);
			(function(index){
				aLi[i].onclick=function(){
					for(var i=0; i<aLi.length; i++){
						aLi[i].className='';
					}
					this.className='on';
					scrollTo(getPos(aCon[index]).top);
				};
			})(i);
		}
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
		window.onscroll=function(){
			var scrollT=document.documentElement.scrollTop || document.body.scrollTop;
			var clientHeight=document.documentElement.clientHeight;
			if(scrollT>clientHeight){
				oUl.style.display="block";
			}
			else{
				oUl.style.display="none";
			}
			/*if(scrollT==getPos(aCon[1]).top){
				alert('ok了');	
			}*/
			if(arr_indexOf(aPos,scrollT)!=-1){
				var n=arr_indexOf(aPos,scrollT);
				for(var i=0; i<aLi.length; i++){
					aLi[i].className='';
				}
				aLi[n].className='on';	
			}
			document.title=scrollT;
		};
	};