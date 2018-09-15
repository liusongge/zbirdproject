

function  fn(){
		var  olist=$id("down").children;
		 var  ulist=$id("up").children;
		 var index=0;//通过该下标 控制文字和图片的对应关系
		 
		 var  timer=setInterval(autoplay,2500);
		 
		 var zindex=1;//调 空间定位
		 function autoplay(){
		 	index++;
		 	//当前index对应的文字 高亮显示 排他
		 	for(var i=0;i<olist.length;i++){
		 		olist[i].className="";
		 	}
		 	if(index>=olist.length){
		 		index=0;
		 	}
		 	//设置index对应的图片li元素的 空间zindex的值 一直不停的变大 会覆盖前面的那张
		 	ulist[index].style.zIndex=++zindex;
		 	olist[index].className="on1";
		 }
	 function $id(id){
		 	return document.getElementById(id);
		 }
	
	
}
module.exports = fn;
console.log("change");
