



var  startMove = require("./sport2");
var  fn = require("./imgchange");
window.onload=function(){
     	
   
     var olist=$id("uu").children;
	 var ulist=$id("img-box").children;
	 var oul=$id("img-box");
	 var timer=null;
	 var index=0;
	 fn();
	 timer=setInterval(move,2500);
	  $id("big-img").onmouseenter=function(){
	  	clearInterval(timer);
     	$id("left").style.display="block";
     	$id("right").style.display="block";
     }
	  
     $id("big-img").onmouseleave=function(){
     	timer=setInterval(move,2500);
     	$id("left").style.display="none";
     	$id("right").style.display="none";
     }
     $id("right").onclick=function(){
   			autoplay(function(){
   				index++;
   			});
     }
     
    $id("left").onclick=function(){  	
    	autoplay(function(){
	     	 index--;	  		
    	})
    }
     function move(){
     	autoplay(function(){
     		index++;
     	})
     }
	 function autoplay(fn){
	 	fn();
	 	if(index==olist.length){
	 			index=0;
	 	}
	 	if(index==-1){
		 		index=olist.length-1;
		 }  
	 	for(var i=0;i<olist.length;i++){
	 		olist[i].className="";
	 		startMove(ulist[i],0,"opacity");
	 	}
	 	olist[index].className="on";
	 	startMove(ulist[index],100,"opacity");
	 }
	 
	 for(let i=0;i<olist.length;i++){
	 	olist[i].onmouseenter=function(){
		 	clearInterval(timer);	 	
		 	autoplay(function(){
		 		index=i;
		 	});
	 	}
	 	olist[i].onmouseleaver=function(){
		 	timer=setInterval(move,2500);
	 	}
 }
	 function $id(id){
	 	return document.getElementById(id);
	 }
	 console.log("aaaaaaaaaaaaa")
	 }
		