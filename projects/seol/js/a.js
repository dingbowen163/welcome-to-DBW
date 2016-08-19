// JavaScript Document
window.onload=function(){
	var oNews = document.getElementById('news_nav');
	var oShow = document.getElementById('showbox');
	var oBtn = oNews.getElementsByTagName('a');	
	var oDiv = oShow.getElementsByTagName('div');
	for(var i=0;i<oBtn.length;i++){
		oBtn[i].index=i;
		oBtn[i].onmouseover=function(){
			for(var i=0;i<oBtn.length;i++){
				oBtn[i].className='';
				oDiv[i].style.display='none';	
			}
			this.className='active'+this.index;	
			oDiv[this.index].style.display='block';	
		}	
	}
	
	var aArea1 = document.getElementById('Area_menu');
	var aShow1 = document.getElementById('showbox2');
	abc(aArea1,aShow1);
	var aArea2 = document.getElementById('Area_menu2');
	var aShow2 = document.getElementById('showbox3');
	abc(aArea2,aShow2);
	var aArea3 = document.getElementById('Area_menu3');
	var aShow3 = document.getElementById('showbox4');
	abc(aArea3,aShow3);
	
	function abc(obj1,obj2){
	var aBtn = obj1.getElementsByTagName('li');
	var aDiv = obj2.getElementsByTagName('div');
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='fl';
				aDiv[i].style.display='none';
			}
			this.className='active fl';
			aDiv[this.index].style.display='block';
		}
	}
	}
	
	var aList = document.getElementById('mission');
	var aLi = aList.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
				}
			this.className='active';
			}	
	}	
}