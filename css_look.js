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
		tShadow : function(input,color){
			color = setColor(color);
			$(input).css({"text-shadow":"1px 1px 2px " + color});
		},
		bShadow : function(input,color,posX,posY,cou,dis,direct){
			color = setColor(color);
			$(input).css({"box-shadow": setDirect(direct) + " " + setPos(posX) + " " + setPos(posY) +  " "  + setCou(cou) + " " + setDis(dis) + " " + color});
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
		}
	};
})();

//Funktionen
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
	var direct = !direct ? "" : "inset";
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