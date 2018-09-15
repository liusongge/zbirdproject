//obj 代表运动对象
// target 代表运动元素的目标值
// attr  运动的样式
// 支持 缓冲和多物体    支持透明度
function startMove(obj,target,attr){
	clearInterval( obj.timer );
	obj.timer = setInterval( function(){
		var current = 0;
		//获取元素的实际宽度
		if( attr == "opacity" ){
			current = getStyle( obj, attr )*100;
		}else{
			current = parseInt( getStyle(obj,attr) ) ;
		}
		
		var speed = (target-current)/10;
		speed = speed>0?Math.ceil(speed) : Math.floor(speed);
		if( current == target ){
			clearInterval( obj.timer );
		}else{
			if( attr == "opacity" ){
				obj.style["opacity"] = (current+speed)/100;
			}else{
				obj.style[attr] = current+speed + "px";
			}
		}
	},30 )
}
//console.log("sports");
function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle( obj )[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
module.exports = startMove;