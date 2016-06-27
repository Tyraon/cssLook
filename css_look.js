var tag = (function(){
	return {
		head : function(input,area){
			var output = '<h2 id="tag-head">' + input + '</h2>';
			return output;
		},
		ref : function(addr,input){
			var output = '<a href="' + addr + '">' + input + '</a>';
			return output;
		}
	};
})();

var look = (function(){
	return {
		tShadow : function(input,color,posX,posY,cou){
			color = setColor(color);
			$(input).css({"text-shadow" : setPos(posX) + " " + setPos(posY) + " " + setCou(cou) + " " + color});
		},
		bShadow : function(input,color,posX,posY,cou,dis,direct){
			color = setColor(color);
			$(input).css({"box-shadow" : setDirect(direct) + " " + setPos(posX) + " " + setPos(posY) +  " "  + setCou(cou) + " " + setDis(dis) + " " + color});
		},
		gradBg : function(input,color1,color2){
			color1 = !color1 ? "#ffffff" : color1;
			color2 = setColor(color2);
			var cHex1 = color1;
			var cHex2 = color2;
			color1 = toDez(color1);
			color2 = toDez(color2);
//			alert(color1);
			var browser = browserDetect();
			var gradient = gradBrowser(browser,color1,color2,cHex1,cHex2);
			$(input).css({"background" : gradient});
		},
		boRad : function(input,radius){
			radius = !radius ? "10" : radius;
			$(input).css({"border-radius" : radius + "px"});
		},
		rota2d : function(input,deg){
			deg = setDeg(deg);
			var browser = browserDetect();
			var rotate = rotaBrowser(browser);
//			console.log(rotate);
			$(input).css({"transform" : "rotate(" + deg + "deg)"});
		},
		zoom : function(input,sizeX,sizeY){
			var size = setSize(input,sizeX,sizeY);
			sizeX = size[0];
			sizeY = size[1];
			$(input).css({"width" : sizeX, "height" : sizeY});
			$(input).on('mouseover', function(){
				var newX = (parseInt(sizeX)*2).toString();
				var newY = (parseInt(sizeY)*2).toString();
				console.log(sizeX);
				$(input).css({"width" : newX, "height" : newY, "-webkit-transition" : "all 0.5s ease-in-out"});
			});
			$(input).on('mouseout', function(){
				$(input).css({"width" : sizeX, "height" : sizeY});				
			});
		},
		persX : function(input,rota){
			persp = setDeg(rota);
			rota = persp;
			$(input).css({"transform" : "perspective(" + persp + "em) rotateX(" + rota + "deg)"});
		},
		persY : function(input,rota){
			persp = setDeg(rota);
			rota = persp;
			$(input).css({"transform" : "perspective(" + persp + "em) rotateY(" + rota + "deg)"});
		},
		skew : function(input,rotaX,rotaY){
			rotaX = setDeg(rotaX);
			rotaY = setDeg(rotaY);
			$(input).css({"transform" : "skew(" + rotaX + "deg," + rotaY + "deg)"});
		},
		trans : function(input,posX,posY){
			posX = setPos(posX);
			posY = setPos(posY);
			$(input).css({"transform" : "translate(" + posX + "," + posY + ")"});
		}
	};
})();

//Funktionen
function setSize(ele,width,height){
	var size = !width || !height ? [$(ele).width(),$(ele).height()] : [width,height];
	return size;
}

function setDeg(deg){
	deg = !deg ? "0" : deg;
	return deg;
}

function rotaBrowser(browser){
	var rota = browser == "moz" ? "-moz-transform" :
			browser == "ms" ? "-ms-transform" :
			browser == "webkit" ? "-webkit-transform":
			browser == "o" ? "-o-transform" : "transform";
	return rota;
}

function setPos(pos){
	var pos = !pos ? "5px" : pos + "px";
	return pos;
}

function setDis(pos){
	var pos = !pos ? "0px" : pos + "px";
	return pos;
}

function setCou(pos){
	var pos = !pos ? "10px" : pos + "px";
	return pos;
}

function setDirect(direct){
	var direct = direct == 1 ? "inset" : "";
	return direct;
}

function setColor(color){
	color = !color ? "#000000" : color;
	return color;
}

function toDez(color){
	color = color.substr(1,6);
	var red = parseInt(color.substr(0,2),16).toString();
	var green = parseInt(color.substr(2,2),16).toString();
	var blue = parseInt(color.substr(4,2),16).toString();
	color = red + "," + green + "," + blue;
	return color;
}

function browserDetect() {
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
    // At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
		var browser = isOpera ? "o" :
					isFirefox ? "moz":
					isSafari || isChrome ? "webkit":
					isIE || isEdge ? "ms": "other";
	return browser;
}

function gradBrowser(browser,color1,color2,cHex1,cHex2){
	var gradient1 = "-webkit-linear-gradient(top, rgba(" + color1 + ",1) 0%, rgba(" + color2 + ",1) 100%)";
	var gradient2 = "-moz-linear-gradient(top, rgba(" + color1 + ",1) 0%, rgba(" + color2 + ",1) 100%)";
	var gradient3 = "linear-gradient(top, rgba(" + color1 + ",1) 0%, rgba(" + color2 + ",1) 100%)";
	var gradient4 = "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + cHex1 + "', endColorstr='#" + cHex2 + "',GradientType=0 )";
	var gradient = browser == "moz" ? gradient2 : 
				browser == "webkit" ? gradient1 :
				browser == "ms" ? gradient4 : gradient3;
	return gradient;
}