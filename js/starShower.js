/*jquery.meteorShowers-0.0.0.1.js
 * 依赖：jquery
 * 作者weibo:折腾笔记
 * 日期2015-8-30
 * meteorShowers.option(imgs);//配置流星雨传入流星图片数组
 *meteorShowers.start();//开始流星雨
 *meteorShowers.stop();//停止流星雨
 *meteorShowers.end();//结束流星雨
 * */
$(function(){
	if(!$('#_meteorShowersStyle').length){
		$('head').append('<style id="_meteorShowersStyle" type="text/css">div.meteorShowers{position:absolute;width:0;height:0;-webkit-animation:meteorShowers 2s linear forwards}div.meteorShowers>img{-webkit-transform:translate(100%,-100%)}@-webkit-keyframes meteorShowers{0%{-webkit-transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(-640px,640px,0);opacity:0}}</style>');
	}
	var imgs=[];//图片路径数组
	function draw(){
		var img=imgs[(imgs.length*Math.random())|0];//图片路径
		var xy=Math.random();
		var x,//x坐标
			y;//y坐标
		if(xy<0.6666){//流星出生点在上边框占比
			x=Math.random()*101;//x坐标为百分比
			y=0;//y坐标为0
		}else{//流星出生点在左边框
			x=100;
			y=Math.random()*30;//分布最多不到y轴30%
		}
		var time=1.8+Math.random()*0.4;//流星生命时间1.8~2.2-秒
		$('body').append('<div style="left:'+x+'%;top:'+y+'%;-webkit-animation-duration:'+time+'s;" class="meteorShowers"><img src="'+img+'" /></div>');
		var d=$('.meteorShowers');
		setTimeout(function(){
			d.remove();
		},2200);
	}
	window.drawStart='';
	window.meteorShowers={
		option:function(i){
			imgs=i;
		},
		start:function(){
			drawStart=setInterval(draw,200);
		},
		stop:function(){
			clearInterval(drawStart);
		},
		end:function(){			
			clearInterval(drawStart);
			$('.meteorShowers').remove();
		}
	}
})
