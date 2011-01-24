window.LinkIt=SC.Object.create({ROUND:"round",FORWARD:"forward",REVERSE:"reverse",OUTPUT_TERMINAL:"LinkIt.TerminalOutput",INPUT_TERMINAL:"LinkIt.TerminalInput",NEVER:"never",DIRECTIONAL:"dir",INVERSE_DIRECTIONAL:"idir",ALWAYS:"always",INVITE:"invite",ACCEPT:"accept",HORIZONTAL_CURVED:"hcurved",VERTICAL_CURVED:"vcurved",STRAIGHT:"straight",PIPES:"pipes",logToConsole:YES,getLayer:function(a){if(a.kindOf(LinkIt.CanvasView)){return a
}else{var b=a.get("parentView");if(b){return this.getLayer(b)}else{LinkIt.log("Error: No layer to be found!")
}}return null},getContainer:function(a){if(a.kindOf(LinkIt.NodeContainerView)){return a
}else{var b=a.get("parentView");if(b){return this.getContainer(b)}else{LinkIt.log("Error: No Container To Be Found!")
}}return null},genLinkID:function(d){if(d){var c=d.get("startNode");var b=d.get("startTerminal");
var a=d.get("endNode");var f=d.get("endTerminal");var g=[SC.guidFor(c),b].join("_");
var e=[SC.guidFor(a),f].join("_");return(g<e)?[g,e].join("_"):[e,g].join("_")}return""
},log:function(a){if(this.logToConsole){console.log(a)}}});if(!document.createElement("canvas").getContext){(function(){var v=Math;
var w=v.round;var s=v.sin;var E=v.cos;var n=v.abs;var D=v.sqrt;var a=10;var o=a/2;
function h(){return this.context_||(this.context_=new q(this))}var u=Array.prototype.slice;
function F(j,m,G){var i=u.call(arguments,2);return function(){return j.apply(m,i.concat(u.call(arguments)))
}}var k={init:function(i){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var j=i||document;
j.createElement("canvas");j.attachEvent("onreadystatechange",F(this.init_,this,j))
}},init_:function(H){if(!H.namespaces.g_vml_){H.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML")
}if(!H.namespaces.g_o_){H.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML")
}if(!H.styleSheets.ex_canvas_){var G=H.createStyleSheet();G.owningElement.id="ex_canvas_";
G.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"
}var m=H.getElementsByTagName("canvas");for(var j=0;j<m.length;j++){this.initElement(m[j])
}},initElement:function(j){if(!j.getContext){j.getContext=h;j.innerHTML="";j.attachEvent("onpropertychange",C);
j.attachEvent("onresize",b);var i=j.attributes;if(i.width&&i.width.specified){j.style.width=i.width.nodeValue+"px"
}else{j.width=j.clientWidth}if(i.height&&i.height.specified){j.style.height=i.height.nodeValue+"px"
}else{j.height=j.clientHeight}}return j}};function C(j){var i=j.srcElement;switch(j.propertyName){case"width":i.style.width=i.attributes.width.nodeValue+"px";
i.getContext().clearRect();break;case"height":i.style.height=i.attributes.height.nodeValue+"px";
i.getContext().clearRect();break}}function b(j){var i=j.srcElement;if(i.firstChild){i.firstChild.style.width=i.clientWidth+"px";
i.firstChild.style.height=i.clientHeight+"px"}}k.init();var e=[];for(var z=0;z<16;
z++){for(var y=0;y<16;y++){e[z*16+y]=z.toString(16)+y.toString(16)}}function r(){return[[1,0,0],[0,1,0],[0,0,1]]
}function d(G,m){var j=r();for(var i=0;i<3;i++){for(var J=0;J<3;J++){var H=0;for(var I=0;
I<3;I++){H+=G[i][I]*m[I][J]}j[i][J]=H}}return j}function x(j,i){i.fillStyle=j.fillStyle;
i.lineCap=j.lineCap;i.lineJoin=j.lineJoin;i.lineWidth=j.lineWidth;i.miterLimit=j.miterLimit;
i.shadowBlur=j.shadowBlur;i.shadowColor=j.shadowColor;i.shadowOffsetX=j.shadowOffsetX;
i.shadowOffsetY=j.shadowOffsetY;i.strokeStyle=j.strokeStyle;i.globalAlpha=j.globalAlpha;
i.arcScaleX_=j.arcScaleX_;i.arcScaleY_=j.arcScaleY_;i.lineScale_=j.lineScale_}function c(m){var I,H=1;
m=String(m);if(m.substring(0,3)=="rgb"){var K=m.indexOf("(",3);var j=m.indexOf(")",K+1);
var J=m.substring(K+1,j).split(",");I="#";for(var G=0;G<3;G++){I+=e[Number(J[G])]
}if(J.length==4&&m.substr(3,1)=="a"){H=J[3]}}else{I=m}return{color:I,alpha:H}}function t(i){switch(i){case"butt":return"flat";
case"round":return"round";case"square":default:return"square"}}function q(j){this.m_=r();
this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle="#000";this.fillStyle="#000";
this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=a*1;this.globalAlpha=1;
this.canvas=j;var i=j.ownerDocument.createElement("div");i.style.width=j.clientWidth+"px";
i.style.height=j.clientHeight+"px";i.style.overflow="hidden";i.style.position="absolute";
j.appendChild(i);this.element_=i;this.arcScaleX_=1;this.arcScaleY_=1;this.lineScale_=1
}var l=q.prototype;l.clearRect=function(){this.element_.innerHTML=""};l.beginPath=function(){this.currentPath_=[]
};l.moveTo=function(j,i){var m=this.getCoords_(j,i);this.currentPath_.push({type:"moveTo",x:m.x,y:m.y});
this.currentX_=m.x;this.currentY_=m.y};l.lineTo=function(j,i){var m=this.getCoords_(j,i);
this.currentPath_.push({type:"lineTo",x:m.x,y:m.y});this.currentX_=m.x;this.currentY_=m.y
};l.bezierCurveTo=function(m,j,L,K,J,H){var i=this.getCoords_(J,H);var I=this.getCoords_(m,j);
var G=this.getCoords_(L,K);p(this,I,G,i)};function p(i,G,m,j){i.currentPath_.push({type:"bezierCurveTo",cp1x:G.x,cp1y:G.y,cp2x:m.x,cp2y:m.y,x:j.x,y:j.y});
i.currentX_=j.x;i.currentY_=j.y}l.quadraticCurveTo=function(J,m,j,i){var I=this.getCoords_(J,m);
var H=this.getCoords_(j,i);var K={x:this.currentX_+2/3*(I.x-this.currentX_),y:this.currentY_+2/3*(I.y-this.currentY_)};
var G={x:K.x+(H.x-this.currentX_)/3,y:K.y+(H.y-this.currentY_)/3};p(this,K,G,H)};
l.arc=function(M,K,L,H,j,m){L*=a;var Q=m?"at":"wa";var N=M+E(H)*L-o;var P=K+s(H)*L-o;
var i=M+E(j)*L-o;var O=K+s(j)*L-o;if(N==i&&!m){N+=0.125}var G=this.getCoords_(M,K);
var J=this.getCoords_(N,P);var I=this.getCoords_(i,O);this.currentPath_.push({type:Q,x:G.x,y:G.y,radius:L,xStart:J.x,yStart:J.y,xEnd:I.x,yEnd:I.y})
};l.rect=function(m,j,i,G){this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+G);
this.lineTo(m,j+G);this.closePath()};l.strokeRect=function(m,j,i,G){var H=this.currentPath_;
this.beginPath();this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+G);this.lineTo(m,j+G);
this.closePath();this.stroke();this.currentPath_=H};l.fillRect=function(m,j,i,G){var H=this.currentPath_;
this.beginPath();this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+G);this.lineTo(m,j+G);
this.closePath();this.fill();this.currentPath_=H};l.createLinearGradient=function(j,G,i,m){var H=new A("gradient");
H.x0_=j;H.y0_=G;H.x1_=i;H.y1_=m;return H};l.createRadialGradient=function(G,I,m,j,H,i){var J=new A("gradientradial");
J.x0_=G;J.y0_=I;J.r0_=m;J.x1_=j;J.y1_=H;J.r1_=i;return J};l.drawImage=function(T,m){var M,K,O,ab,R,P,V,ad;
var N=T.runtimeStyle.width;var S=T.runtimeStyle.height;T.runtimeStyle.width="auto";
T.runtimeStyle.height="auto";var L=T.width;var Z=T.height;T.runtimeStyle.width=N;
T.runtimeStyle.height=S;if(arguments.length==3){M=arguments[1];K=arguments[2];R=P=0;
V=O=L;ad=ab=Z}else{if(arguments.length==5){M=arguments[1];K=arguments[2];O=arguments[3];
ab=arguments[4];R=P=0;V=L;ad=Z}else{if(arguments.length==9){R=arguments[1];P=arguments[2];
V=arguments[3];ad=arguments[4];M=arguments[5];K=arguments[6];O=arguments[7];ab=arguments[8]
}else{throw Error("Invalid number of arguments")}}}var ac=this.getCoords_(M,K);var G=V/2;
var j=ad/2;var aa=[];var i=10;var J=10;aa.push(" <g_vml_:group",' coordsize="',a*i,",",a*J,'"',' coordorigin="0,0"',' style="width:',i,"px;height:",J,"px;position:absolute;");
if(this.m_[0][0]!=1||this.m_[0][1]){var I=[];I.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",w(ac.x/a),",","Dy=",w(ac.y/a),"");
var Y=ac;var X=this.getCoords_(M+O,K);var U=this.getCoords_(M,K+ab);var Q=this.getCoords_(M+O,K+ab);
Y.x=v.max(Y.x,X.x,U.x,Q.x);Y.y=v.max(Y.y,X.y,U.y,Q.y);aa.push("padding:0 ",w(Y.x/a),"px ",w(Y.y/a),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",I.join(""),", sizingmethod='clip');")
}else{aa.push("top:",w(ac.y/a),"px;left:",w(ac.x/a),"px;")}aa.push(' ">','<g_vml_:image src="',T.src,'"',' style="width:',a*O,"px;"," height:",a*ab,'px;"',' cropleft="',R/L,'"',' croptop="',P/Z,'"',' cropright="',(L-R-V)/L,'"',' cropbottom="',(Z-P-ad)/Z,'"'," />","</g_vml_:group>");
this.element_.insertAdjacentHTML("BeforeEnd",aa.join(""))};l.stroke=function(ag){var L=[];
var M=false;var ar=c(ag?this.fillStyle:this.strokeStyle);var ac=ar.color;var am=ar.alpha*this.globalAlpha;
var I=10;var O=10;L.push("<g_vml_:shape",' filled="',!!ag,'"',' style="position:absolute;width:',I,"px;height:",O,'px;"',' coordorigin="0 0" coordsize="',a*I," ",a*O,'"',' stroked="',!ag,'"',' path="');
var N=false;var aq={x:null,y:null};var Y={x:null,y:null};for(var al=0;al<this.currentPath_.length;
al++){var ak=this.currentPath_[al];var ap;switch(ak.type){case"moveTo":ap=ak;L.push(" m ",w(ak.x),",",w(ak.y));
break;case"lineTo":L.push(" l ",w(ak.x),",",w(ak.y));break;case"close":L.push(" x ");
ak=null;break;case"bezierCurveTo":L.push(" c ",w(ak.cp1x),",",w(ak.cp1y),",",w(ak.cp2x),",",w(ak.cp2y),",",w(ak.x),",",w(ak.y));
break;case"at":case"wa":L.push(" ",ak.type," ",w(ak.x-this.arcScaleX_*ak.radius),",",w(ak.y-this.arcScaleY_*ak.radius)," ",w(ak.x+this.arcScaleX_*ak.radius),",",w(ak.y+this.arcScaleY_*ak.radius)," ",w(ak.xStart),",",w(ak.yStart)," ",w(ak.xEnd),",",w(ak.yEnd));
break}if(ak){if(aq.x==null||ak.x<aq.x){aq.x=ak.x}if(Y.x==null||ak.x>Y.x){Y.x=ak.x
}if(aq.y==null||ak.y<aq.y){aq.y=ak.y}if(Y.y==null||ak.y>Y.y){Y.y=ak.y}}}L.push(' ">');
if(!ag){var X=this.lineScale_*this.lineWidth;if(X<1){am*=X}L.push("<g_vml_:stroke",' opacity="',am,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',t(this.lineCap),'"',' weight="',X,'px"',' color="',ac,'" />')
}else{if(typeof this.fillStyle=="object"){var P=this.fillStyle;var U=0;var aj={x:0,y:0};
var ad=0;var S=1;if(P.type_=="gradient"){var R=P.x0_/this.arcScaleX_;var m=P.y0_/this.arcScaleY_;
var Q=P.x1_/this.arcScaleX_;var at=P.y1_/this.arcScaleY_;var ao=this.getCoords_(R,m);
var an=this.getCoords_(Q,at);var K=an.x-ao.x;var J=an.y-ao.y;U=Math.atan2(K,J)*180/Math.PI;
if(U<0){U+=360}if(U<0.000001){U=0}}else{var ao=this.getCoords_(P.x0_,P.y0_);var j=Y.x-aq.x;
var G=Y.y-aq.y;aj={x:(ao.x-aq.x)/j,y:(ao.y-aq.y)/G};j/=this.arcScaleX_*a;G/=this.arcScaleY_*a;
var ai=v.max(j,G);ad=2*P.r0_/ai;S=2*P.r1_/ai-ad}var ab=P.colors_;ab.sort(function(H,i){return H.offset-i.offset
});var V=ab.length;var aa=ab[0].color;var Z=ab[V-1].color;var af=ab[0].alpha*this.globalAlpha;
var ae=ab[V-1].alpha*this.globalAlpha;var ah=[];for(var al=0;al<V;al++){var T=ab[al];
ah.push(T.offset*S+ad+" "+T.color)}L.push('<g_vml_:fill type="',P.type_,'"',' method="none" focus="100%"',' color="',aa,'"',' color2="',Z,'"',' colors="',ah.join(","),'"',' opacity="',ae,'"',' g_o_:opacity2="',af,'"',' angle="',U,'"',' focusposition="',aj.x,",",aj.y,'" />')
}else{L.push('<g_vml_:fill color="',ac,'" opacity="',am,'" />')}}L.push("</g_vml_:shape>");
this.element_.insertAdjacentHTML("beforeEnd",L.join(""))};l.fill=function(){this.stroke(true)
};l.closePath=function(){this.currentPath_.push({type:"close"})};l.getCoords_=function(G,j){var i=this.m_;
return{x:a*(G*i[0][0]+j*i[1][0]+i[2][0])-o,y:a*(G*i[0][1]+j*i[1][1]+i[2][1])-o}};
l.save=function(){var i={};x(this,i);this.aStack_.push(i);this.mStack_.push(this.m_);
this.m_=d(r(),this.m_)};l.restore=function(){x(this.aStack_.pop(),this);this.m_=this.mStack_.pop()
};function g(i){for(var H=0;H<3;H++){for(var G=0;G<2;G++){if(!isFinite(i[H][G])||isNaN(i[H][G])){return false
}}}return true}function B(j,i,G){if(!g(i)){return}j.m_=i;if(G){var H=i[0][0]*i[1][1]-i[0][1]*i[1][0];
j.lineScale_=D(n(H))}}l.translate=function(m,j){var i=[[1,0,0],[0,1,0],[m,j,1]];B(this,d(i,this.m_),false)
};l.rotate=function(j){var G=E(j);var m=s(j);var i=[[G,m,0],[-m,G,0],[0,0,1]];B(this,d(i,this.m_),false)
};l.scale=function(m,j){this.arcScaleX_*=m;this.arcScaleY_*=j;var i=[[m,0,0],[0,j,0],[0,0,1]];
B(this,d(i,this.m_),true)};l.transform=function(H,G,J,I,j,i){var m=[[H,G,0],[J,I,0],[j,i,1]];
B(this,d(m,this.m_),true)};l.setTransform=function(I,H,K,J,G,j){var i=[[I,H,0],[K,J,0],[G,j,1]];
B(this,i,true)};l.clip=function(){};l.arcTo=function(){};l.createPattern=function(){return new f
};function A(i){this.type_=i;this.x0_=0;this.y0_=0;this.r0_=0;this.x1_=0;this.y1_=0;
this.r1_=0;this.colors_=[]}A.prototype.addColorStop=function(j,i){i=c(i);this.colors_.push({offset:j,color:i.color,alpha:i.alpha})
};function f(){}G_vmlCanvasManager=k;CanvasRenderingContext2D=q;CanvasGradient=A;
CanvasPattern=f})()}LinkIt.Link={isSelected:NO,linkStyle:{cap:LinkIt.ROUND,width:3,color:"#ADD8E6",lineStyle:LinkIt.VERTICAL_CURVED,directionIndicator:NO},directionIndicator:NO,selectionColor:"#FFFF64",selectionWidth:7,startNode:null,startTerminal:null,endNode:null,endTerminal:null,startPt:null,endPt:null,drawLink:function(c){var d=this.get("linkStyle")||{};
var a=(d?d.lineStyle:LinkIt.STRAIGHT)||LinkIt.STRAIGHT;var e=d.color;var f=d.width;
var b=this.get("isSelected");switch(a){case LinkIt.HORIZONTAL_CURVED:if(b){d.color=this.get("selectionColor");
d.width=this.get("selectionWidth");this.drawHorizontalCurvedLine(c,d);d.color=e;d.width=f
}this.drawHorizontalCurvedLine(c,d);break;case LinkIt.VERTICAL_CURVED:if(b){d.color=this.get("selectionColor");
d.width=this.get("selectionWidth");this.drawVerticalCurvedLine(c,d);d.color=e;d.width=f
}this.drawVerticalCurvedLine(c,d);break;default:if(b){d.color=this.get("selectionColor");
d.width=this.get("selectionWidth");this.drawStraightLine(c,d);d.color=e;d.width=f
}this.drawStraightLine(c,d);break}},drawStraightLine:function(a,b){var d=this.get("startPt");
var c=this.get("endPt");if(d&&c){a=this._initLineProperties(a,b);a.beginPath();a.moveTo(d.x,d.y);
a.lineTo(c.x,c.y);a.closePath();a.stroke()}},drawHorizontalCurvedLine:function(d,y){var t=this.get("startPt");
var w=this.get("endPt");if(t&&w){d=this._initLineProperties(d,y);var r=(t.x+w.x)/2;
var q=(t.y+w.y)/2;this._midPt={x:r,y:q};var f=(t.x-w.x);var e=(t.y-w.y);var z=Math.pow(f,2);
var c=Math.pow(e,2);var l=Math.sqrt(z+c);var x=Math.abs(t.x-w.x);var p=Math.abs(t.y-w.y);
var k=0,s;if(l>0){s=(x<p)?x:p;k=(s<50)?s/l:50/l}var j=(t.x+r)/2;var h=(t.y+q)/2;var v=(w.x+r)/2;
var u=(w.y+q)/2;var g,i;if(t.y<w.y){g=f*k;i=-(e*k)}else{g=-(f*k);i=e*k}var b=j+i;
var a=h+g;this._startControlPt={x:b,y:a};var o=v-i;var n=u-g;this._endControlPt={x:o,y:n};
d.beginPath();d.moveTo(t.x,t.y);d.quadraticCurveTo(b,a,r,q);d.quadraticCurveTo(o,n,w.x,w.y);
d.stroke();var m=this.get("directionIndicator");if(m===LinkIt.FORWARD){this.drawDirectionIndicator(d,r,q,b-r,a-q)
}else{if(m===LinkIt.REVERSE){this.drawDirectionIndicator(d,r,q,r-b,q-a)}}}},drawVerticalCurvedLine:function(d,y){var t=this.get("startPt");
var w=this.get("endPt");if(t&&w){d=this._initLineProperties(d,y);var r=(t.x+w.x)/2;
var q=(t.y+w.y)/2;this._midPt={x:r,y:q};var f=(t.x-w.x);var e=(t.y-w.y);var z=Math.pow(f,2);
var c=Math.pow(e,2);var l=Math.sqrt(z+c);var x=Math.abs(t.x-w.x);var p=Math.abs(t.y-w.y);
var k=0,s;if(l>0){s=(x<p)?x:p;k=(s<50)?s/l:50/l}var j=(t.x+r)/2;var h=(t.y+q)/2;var v=(w.x+r)/2;
var u=(w.y+q)/2;var g,i;if(t.x<w.x){g=-(f*k);i=e*k}else{g=f*k;i=-(e*k)}var b=j+i;
var a=h+g;this._startControlPt={x:b,y:a};var o=v-i;var n=u-g;this._endControlPt={x:o,y:n};
d.beginPath();d.moveTo(t.x,t.y);d.quadraticCurveTo(b,a,r,q);d.quadraticCurveTo(o,n,w.x,w.y);
d.stroke();var m=this.get("directionIndicator");if(m===LinkIt.FORWARD){this.drawDirectionIndicator(d,r,q,b-r,a-q)
}else{if(m===LinkIt.REVERSE){this.drawDirectionIndicator(d,r,q,r-b,q-a)}}}},drawDirectionIndicator:function(c,e,d,b,a){c.save();
c.translate(e,d);c.rotate(Math.atan2(a,b)-Math.atan2(1,0));c.scale(2.5,2.5);c.beginPath();
c.moveTo(0,-3);c.lineTo(2,3);c.lineTo(-2,3);c.lineTo(0,-3);c.fill();c.restore()},distanceSquaredFromLine:function(f){var h=this.get("startPt");
var e=this.get("endPt");var b=this.get("linkStyle");var a=b?(b.lineStyle||LinkIt.STRAIGHT):LinkIt.STRAIGHT;
if(a===LinkIt.STRAIGHT){return this._distanceSquaredFromLineSegment(h,e,f)}else{var d=this._distanceSquaredFromCurve(h,this._midPt,this._startControlPt,f);
var c=this._distanceSquaredFromCurve(this._midPt,e,this._endControlPt,f);var g=Math.min(d,c);
return g}},_distanceSquaredFromLineSegment:function(j,i,f){var d;if(j.x!==i.x||j.y!==i.y){var m={x:(i.x-j.x),y:(i.y-j.y)};
var c=(m.x*(f.x-j.x))+((f.y-j.y)*m.y);var l=c/((m.x*m.x)+(m.y*m.y));if(l<=0){d={x:j.x,y:j.y}
}else{if(l>=1){d={x:i.x,y:i.y}}else{var k=j.x+(l*m.x);var h=j.y+(l*m.y);d={x:k,y:h}
}}}else{d={x:j.x,y:j.y}}var e={x:(d.x-f.x),y:(d.y-f.y)};var g=(e.x*e.x)+(e.y*e.y);
return g},_distanceSquaredFromCurve:function(l,k,j,d){var r,s,o;var i={x:l.x,y:l.y};
var h={x:k.x,y:k.y};var q=0.5,f=0.5;do{s={x:(i.x+h.x)/2,y:(i.y+h.y)/2};r=this._pointOnBezierCurve(l,j,k,q);
o=this._distanceSquared(s,r);if(o>16){var g=this._distanceSquared(i,d);var e=this._distanceSquared(h,d);
f=0.5*f;if(g<e){h=r;q=q-f}else{i=r;q=q+f}}else{break}}while(true);return this._distanceSquaredFromLineSegment(i,h,d)
},_pointOnBezierCurve:function(f,d,c,b){var a=((1-b)*(1-b)*f.x)+(2*(1-b)*b*d.x)+(b*b*c.x);
var e=((1-b)*(1-b)*f.y)+(2*(1-b)*b*d.y)+(b*b*c.y);return{x:a,y:e}},_distanceSquared:function(d,c){return((c.x-d.x)*(c.x-d.x))+((c.y-d.y)*(c.y-d.y))
},_initLineProperties:function(c,e){this.set("directionIndicator",e?e.directionIndicator:this.get("directionIndicator"));
if(c){var b=e?(e.cap||LinkIt.ROUND):LinkIt.ROUND;var a=e?(e.color||"#ADD8E6"):"#ADD8E6";
var d=e?(e.width||3):3;c.lineCap=b;c.strokeStyle=a;c.fillStyle=a;c.lineWidth=d}return c
},_midPt:null,_startControlPt:null,_endControlPt:null};LinkIt.Node={isNode:YES,terminals:null,linksKey:"links",positionKey:"position",_invalidationDelegate:null,_invalidationAction:null,initMixin:function(){var b,a;
b=this.get("terminals");if(SC.typeOf(b)===SC.T_ARRAY){this.set("terminals",SC.clone(b))
}a=this.get("linksKey");if(a){this.addObserver(a,this,"_linksDidChange")}},canLink:function(a){return YES
},canDeleteLink:function(a){return YES},registerInvalidationDelegate:function(a,b){this._invalidationDelegate=a;
this._invalidationAction=b},didCreateLink:function(a){},willDeleteLink:function(a){},createLink:function(a){if(this.didCreateLink){this.didCreateLink(a)
}},deleteLink:function(a){if(this.willDeleteLink){this.willDeleteLink(a)}},_linksDidChange:function(){if(this._invalidationDelegate){var a=this._invalidationDelegate[this._invalidationAction];
if(a){a.apply(this._invalidationDelegate)}}}};LinkIt.NodeView={isNodeView:YES,isDropTarget:YES,displayProperties:["dropState"],proxiedTerminalView:null,terminalViewFor:function(a){return null
},shouldProxyTerminalFor:function(a){return NO},willDestroyLayerMixin:function(){SC.Drag.removeDropTarget(this)
},renderMixin:function(a,c){var b=this.get("dropState");a.setClass("invite",b===LinkIt.INVITE);
a.setClass("accept",b===LinkIt.ACCEPT)},dragStarted:function(c,a){var b=this.shouldProxyTerminalFor(c);
b=b?this.terminalViewFor(b):null;this.set("proxiedTerminalView",b);if(b&&b._nodeAllowsLink(c.source)){this.set("dropState",LinkIt.INVITE)
}},dragEntered:function(b,a){this.set("dropState",LinkIt.ACCEPT)},dragExited:function(b,a){this.set("dropState",LinkIt.INVITE)
},dragEnded:function(b,a){this.set("dropState",null)},computeDragOperations:function(b,a){return SC.DRAG_LINK
},acceptDragOperation:function(b,c){var a=this.get("proxiedTerminalView");return(a&&c===SC.DRAG_LINK)?a._nodeAllowsLink(b.source):NO
},performDragOperation:function(b,c){var a=this.get("proxiedTerminalView");return a?a.performDragOperation(b,c):c
}};LinkIt.Terminal={isTerminal:YES,isLinked:NO,direction:null,terminal:null,linkStyle:null,dropState:null,displayProperties:["dropState","isLinked","linkStyle","direction"],node:null,_linkCache:null,isDropTarget:YES,terminalKey:function(){var b=this.get("node");
var a=this.get("terminal");return"%@:%@".fmt(SC.guidFor(b),a)}.property("node","terminal").cacheable(),initMixin:function(){this.isLinked=NO
},willDestroyLayerMixin:function(){SC.Drag.removeDropTarget(this)},renderMixin:function(b,d){var a=this.get("links");
b.setClass("connected",this.get("isLinked"));var c=this.get("dropState");b.setClass("invite",c===LinkIt.INVITE);
b.setClass("accept",c===LinkIt.ACCEPT)},canDragLink:function(){return YES},canDropLink:function(){return YES
},linkDragStarted:function(){},linkDragEnded:function(){},linkDragEntered:function(){},linkDragExited:function(){},mouseDown:function(a){this._mouseDownEvent=a;
this._mouseDownAt=Date.now();return YES},mouseDragged:function(j){if(this.canDragLink()&&this._mouseDownEvent){var f=LinkIt.getLayer(this);
if(f&&f.get("isEditable")){var i=this.get("parentView");var g=i.convertFrameFromView(i.get("frame"),this);
var a=this.get("frame");var e=g.x+(a.width/2);var c=g.y+(a.height/2);var b=this.get("linkDragColor");
var h=LinkIt.DragLink.create({layout:{left:0,top:0,right:0,bottom:0},startPt:{x:e,y:c},endPt:{x:e,y:c},linkStyle:this.get("linkStyle")});
f.appendChild(h);var d=SC.Drag.start({event:this._mouseDownEvent,dragLink:h,source:this,dragView:SC.View.create({layout:{left:0,top:0,width:0,height:0}}),ghost:NO,slideBack:YES,dataSource:this,anchorView:f})
}this._cleanupMouseDown()}return YES},mouseUp:function(a){this._cleanupMouseDown();
return YES},dragSourceOperationMaskFor:function(b,c){var a=c.get("isNodeView")?c.get("proxiedTerminalView"):c;
return this._nodeAllowsLink(a)?SC.DRAG_LINK:SC.DRAG_NONE},dragDidBegin:function(a,b){},dragDidMove:function(b,h){var f=b.dragLink;
var e,a;if(f){var d=f.get("parentView");var g=f.get("frame");var c=d?d.convertFrameToView(g,null):g;
if(c){e=h.x-c.x;a=h.y-c.y;f.set("endPt",{x:e,y:a})}}},dragDidEnd:function(a,c,d){var b=a.dragLink;
if(b){b.destroy()}},dragStarted:function(b,a){if(this._nodeAllowsLink(b.source)){this.set("dropState",LinkIt.INVITE);
this.linkDragStarted()}},dragEntered:function(b,a){this.set("dropState",LinkIt.ACCEPT);
this.linkDragEntered()},dragExited:function(b,a){this.set("dropState",LinkIt.INVITE);
this.linkDragExited()},dragEnded:function(b,a){this.set("dropState",null);this.linkDragEnded()
},computeDragOperations:function(b,a){return SC.DRAG_LINK},acceptDragOperation:function(b,c){var a=(c===SC.DRAG_LINK)?this._nodeAllowsLink(b.source):NO;
return a},performDragOperation:function(b,g){var d=this.get("node");var f=b.source;
if(d&&f){var a=f.get("node");if(a){var e=this._createLinkObject(this,d,f,a);d.createLink(SC.Object.create(e));
var c=this._createLinkObject(f,a,this,d);a.createLink(SC.Object.create(c))}}return g
},_getLinkObjects:function(e,c,f,a){var d,b;this._linkCache=this._linkCache||{};d="%@ %@".fmt(e.get("terminalKey"),f.get("terminalKey"));
b=this._linkCache[d]||this._createLinkObject(e,c,f,a);this._linkCache[d]=b;return b
},_nodeAllowsLink:function(h){var e,c,g,a;if(h&&h.get("isTerminal")){var f=this.get("node");
var d=h.get("node");var b=this._getLinkObjects(h,d,this,f);c=(f&&b[0])?f.canLink(b[0]):NO;
a=(d&&c&&b[1])?d.canLink(b[1]):NO}return(c&&a)},_createLinkObject:function(f,a,b,g){var e={};
var d,h;if(a&&g){var c=f.get("direction");var i=b.get("direction");if(!SC.none(c)&&c===i){return[null,null]
}if((c===LinkIt.OUTPUT_TERMINAL&&(i===LinkIt.INPUT_TERMINAL||SC.none(i)))||(i===LinkIt.INPUT_TERMINAL&&SC.none(c))){e.direction=c;
e.startNode=a;e.startTerminal=f.get("terminal");e.startTerminalView=f;e.endNode=g;
e.endTerminal=b.get("terminal");e.endTerminalView=b;d=SC.Object.create(LinkIt.Link,e);
return[d,d]}else{if((c===LinkIt.INPUT_TERMINAL&&(i===LinkIt.OUTPUT_TERMINAL||SC.none(i)))||(i===LinkIt.OUTPUT_TERMINAL&&SC.none(c))){e.direction=i;
e.startNode=g;e.startTerminal=b.get("terminal");e.startTerminalView=b;e.endNode=a;
e.endTerminal=f.get("terminal");e.endTerminalView=f;d=SC.Object.create(LinkIt.Link,e);
return[d,d]}else{e.direction=c;e.startNode=a;e.startTerminal=f.get("terminal");e.startTerminalView=f;
e.endNode=g;e.endTerminal=b.get("terminal");e.endTerminalView=b;d=SC.Object.create(LinkIt.Link,e);
e.direction=i;e.startNode=g;e.startTerminal=b.get("terminal");e.startTerminalView=b;
e.endNode=a;e.endTerminal=f.get("terminal");e.endTerminalView=f;h=SC.Object.create(LinkIt.Link,e);
return[d,h]}}}},_cleanupMouseDown:function(){this._mouseDownEvent=this._mouseDownAt=null
}};sc_require("libs/excanvas");LinkIt.CanvasView=SC.CollectionView.extend({classNames:["linkit-canvas"],isEmpty:YES,acceptsFirstResponder:YES,canDeleteContent:YES,allowDeselectAll:YES,contextMenuTarget:null,contextMenuAction:null,LINK_SELECTION_FREEDOM:6,linkSelection:null,displayProperties:["frame","links.[]"],linksDidChange:function(){this.invokeOnce(this._updateLinks)
},render:function(b,e){var a,c,d=this.get("frame");if(e&&!SC.browser.msie){b.push('<canvas class="base-layer" width="%@" height="%@">You can\'t use canvas tags</canvas>'.fmt(d.width,d.height));
this._canvasContext=null}this.invokeOnce("updateCanvas");arguments.callee.base.apply(this,arguments)
},updateCanvas:function(){var b,a=this._canvasContext,c=this.get("clippingFrame");
if(!a){b=this.$("canvas.base-layer");a=(b&&b.length>0)?b[0].getContext("2d"):null
}if(a){a.clearRect(c.x,c.y,c.width+4,c.height+4);this._drawLinks(a)}else{this.set("layerNeedsUpdate",YES)
}},didCreateLayer:function(){arguments.callee.base.apply(this,arguments);if(SC.browser.msie){var b=this.get("frame");
var a=document.createElement("CANVAS");a.className="base-layer";a.width=b.width;a.height=b.height;
this.$().append(a);a=G_vmlCanvasManager.initElement(a);this._canvasie=a}},didReload:function(g){var c={};
var f=this.get("content")||[];var a=f.get("length");var e,h,b;for(var d=0;d<a;d++){e=f.objectAt(d);
h=SC.guidFor(e);b=this.itemViewForContentIndex(d);c[h]=b}this._nodeViewIndex=c},createItemView:function(g,b,d){var c,h;
var f,a;var e=d.content;if(g){c=g.create(d)}else{c=SC.LabelView.create(d,{layout:{left:0,top:0,width:150,height:50},value:"Missing NodeView"})
}h=c.get("frame");a=this._getItemPosition(e);if(!a){a=this._genRandomPosition();this._setItemPosition(e,a)
}f={top:a.y,left:a.x,width:h.width,height:h.height};c.set("layout",f);return c},deleteSelection:function(){if(this.get("isEditable")){arguments.callee.base.apply(this,arguments);
this.deleteLinkSelection()}return YES},deleteLinkSelection:function(){var c=this.get("linkSelection");
if(c&&this.get("isEditable")){var b=c.get("startNode");var a=c.get("endNode");if(b&&a){if(b.canDeleteLink(c)&&a.canDeleteLink(c)){b.deleteLink(c);
a.deleteLink(c);this.set("linkSelection",null);this.displayDidChange()}}}},mouseDown:function(i){var j,a,f,e,d,g,c,b;
var h;arguments.callee.base.apply(this,arguments);this._dragData=null;if(i&&(i.which===3)||(i.ctrlKey&&i.which===1)){if(this.get("isEditable")){h=this.get("linkSelection");
if(h&&!this.getPath("selection.length")){b=[{title:"Delete Selected Link".loc(),target:this,action:"deleteLinkSelection",isEnabled:YES}];
c=SCUI.ContextMenuPane.create({contentView:SC.View.design({}),layout:{width:194,height:0},itemTitleKey:"title",itemTargetKey:"target",itemActionKey:"action",itemSeparatorKey:"isSeparator",itemIsEnabledKey:"isEnabled",items:b});
c.popup(this,i)}}}else{j=this.get("parentView");a=this.get("frame");f=j?j.convertFrameToView(a,null):a;
e=i.pageX-f.x;d=i.pageY-f.y;this._selectLink({x:e,y:d});if(this.get("isEditable")){g=this.itemViewForEvent(i);
if(g){this._dragData=SC.clone(g.get("layout"));this._dragData.startPageX=i.pageX;
this._dragData.startPageY=i.pageY;this._dragData.view=g;this._dragData.didMove=NO
}}}return YES},mouseDragged:function(c){var b,a;if(this._dragData){this._dragData.didMove=YES;
b=c.pageX-this._dragData.startPageX;a=c.pageY-this._dragData.startPageY;this._dragData.view.adjust({left:this._dragData.left+b,top:this._dragData.top+a});
this.invokeOnce("updateCanvas")}return YES},mouseUp:function(a){var b=arguments.callee.base.apply(this,arguments);
var e,d,c,f;if(this._dragData&&this._dragData.didMove){e=this._dragData.view.get("layout");
d=this._dragData.view.get("content");if(d&&d.get("isNode")){c={x:e.left,y:e.top};
this._setItemPosition(d,c)}}this._dragData=null;if(a&&(a.which===3)||(a.ctrlKey&&a.which===1)){f=this.get("contextMenuAction");
if(f){this.getPath("pane.rootResponder").sendAction(f,this.get("contextMenuTarget"),this,this.get("pane"),a)
}}return b},_layoutForNodeView:function(d,c){var b=null,a,e;if(d&&c){e=d.get("frame");
a=this._getItemPosition(c);if(!a){a=this._genRandomPosition();this._setItemPosition(c,a)
}b={top:a.x,left:a.y,width:e.width,height:e.height}}return b},_updateLinks:function(){var p=[];
var a=this.get("content");if(a){var b=a.get("length");var d,f,e,k,o,h,n;var c,g;for(f=0;
f<b;f++){d=a.objectAt(f);if(d&&(o=d.get("linksKey"))){k=d.get(o)||[];p=p.concat(k)
}}var m=this.get("linkSelection");this.set("linkSelection",null);if(m){var l=LinkIt.genLinkID(m);
h=p.get("length");for(f=0;f<h;f++){n=p.objectAt(f);if(LinkIt.genLinkID(n)===l){this.set("linkSelection",n);
n.set("isSelected",YES);break}}}}this.set("links",p)},_drawLinks:function(d){var a=this.get("links");
var c=a.get("length");var f,e,b,g;for(b=0;b<c;b++){f=a.objectAt(b);if(!SC.none(f)){e=this._endpointsFor(f);
if(e){f.drawLink(d)}}}},_endpointsFor:function(c){var g=this._terminalViewFor(c.get("startNode"),c.get("startTerminal"));
var h=this._terminalViewFor(c.get("endNode"),c.get("endTerminal"));var f=null,d=null,b,e;
if(g&&h){b=g.get("parentView");if(b){e=b.convertFrameToView(g.get("frame"),this);
f={};f.x=SC.midX(e);f.y=SC.midY(e);c.set("startPt",f)}b=h.get("parentView");if(b){e=b.convertFrameToView(h.get("frame"),this);
d={};d.x=SC.midX(e);d.y=SC.midY(e);c.set("endPt",d)}var a=g.get("linkStyle");if(a){c.set("linkStyle",a)
}}return f&&d?{startPt:f,endPt:d}:null},_selectLink:function(f){var b=this.get("links")||[];
var a=b.get("length");var e,g,d;var c=(this.LINE_SELECTION_FREEDOM*this.LINE_SELECTION_FREEDOM)||25;
this.set("linkSelection",null);for(d=0;d<a;d++){e=b.objectAt(d);g=e.distanceSquaredFromLine(f);
if((SC.typeOf(g)===SC.T_NUMBER)&&(g<=c)){e.set("isSelected",YES);this.set("linkSelection",e);
break}else{e.set("isSelected",NO)}}for(d=d+1;d<a;d++){e=b.objectAt(d);e.set("isSelected",NO)
}this.invokeOnce("updateCanvas")},_terminalViewFor:function(b,a){var c=this._nodeViewIndex[SC.guidFor(b)];
if(c&&c.terminalViewFor){return c.terminalViewFor(a)}return null},_handleContentDidChange:function(){this._nodeSetup();
this.linksDidChange()},_contentDidChange:function(){this.invokeOnce("_handleContentDidChange")
}.observes("*content.[]"),_nodeSetup:function(){var a=this.get("content");var c=0;
var d,e;this.set("_nodeIndex",{});if(a){c=a.get("length");for(var b=0;b<c;b++){d=a.objectAt(b);
d.registerInvalidationDelegate(this,"linksDidChange");e=SC.guidFor(d);this._nodeIndex[e]={node:d}
}}this.set("isEmpty",c<=0)},_getItemPosition:function(b){var a=b?b.get("positionKey"):null;
var c=a?b.get(a):null;if(a&&c){c={x:(parseFloat(c.x)||0),y:(parseFloat(c.y)||0)}}return c
},_setItemPosition:function(b,c){var a=b?b.get("positionKey"):null;if(a){b.set(a,c)
}},_genRandomPosition:function(){return{x:Math.floor(10+Math.random()*590),y:Math.floor(10+Math.random()*390)}
},links:[],_nodeIndex:{},_nodeViewIndex:{},_dragData:null,_canvasContext:null});sc_require("mixins/link");
LinkIt.DragLink=SC.View.extend(LinkIt.Link,{classNames:["linkIt-draglink"],displayProperties:["startPt","endPt"],render:function(c,a){if(a){if(!SC.browser.msie){c.push("<canvas>test</canvas>")
}}else{var e=this.$("canvas");var d=this.get("frame");if(e&&d){var b=d.width;var k=d.height;
e.attr("width",b);e.attr("height",k);if(e.length>0){var h=this._canvasie?this._canvasie.getContext("2d"):e[0].getContext("2d");
if(h){h.clearRect(0,0,b,k);var f=this.get("startPt");var g=this.get("endPt");var j=Math.abs(f.x-g.x);
var i=Math.abs(f.y-g.y);if(j>5||i>5){if(this.drawLink){this.drawLink(h)}}}else{LinkIt.log("LinkIt.DragLink.render(): Canvas object context is not accessible.")
}}else{LinkIt.log("LinkIt.DragLink.render(): Canvas element has length zero.")}}else{LinkIt.log("LinkIt.DragLink.render(): Canvas element or frame unaccessible.")
}}arguments.callee.base.apply(this,arguments)},didCreateLayer:function(){if(SC.browser.msie){var b=this.get("frame");
var a=document.createElement("CANVAS");a.width=b.width;a.height=b.height;this.$().append(a);
a=G_vmlCanvasManager.initElement(a);this._canvasie=a}this.set("layoutNeedsUpdate",YES)
}});if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("scui/linkit")
};