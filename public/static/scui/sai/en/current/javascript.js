/*
 * Raphael 1.5.2 - JavaScript Vector Library
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://raphaeljs.com/license.html) license.
 */
(function(){function aJ(){if(aJ.is(arguments[0],a8)){var b=arguments[0],e=G[bC](aJ,b.splice(0,3+aJ.is(b[0],aG))),S=e.set();
for(var R=0,bI=b[t];R<bI;R++){var E=b[R]||{};bq[ah](E.type)&&S[k](e[E.type]().attr(E))
}return S}return G[bC](aJ,arguments)}aJ.version="1.5.2";var a=/[, ]+/,bq={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},bo=/\{(\d+)\}/g,bF="prototype",ah="hasOwnProperty",ab=document,aR=window,s={was:Object[bF][ah].call(aR,"Raphael"),is:aR.Raphael},bA=function(){this.customAttributes={}
},a0,bl="appendChild",bC="apply",bx="concat",X="createTouch" in ab,aQ="",aI=" ",bD=String,J="split",T="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend"[J](aI),br={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},aX="join",t="length",bH=bD[bF].toLowerCase,ap=Math,m=ap.max,bj=ap.min,ar=ap.abs,bm=ap.pow,aN=ap.PI,aG="number",ag="string",a8="array",a1="toString",a5="fill",aU=Object[bF][a1],bu={},k="push",h=/^url\(['"]?([^\)]+?)['"]?\)$/i,H=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,aq={"NaN":1,"Infinity":1,"-Infinity":1},c=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,ae=ap.round,F="setAttribute",ak=parseFloat,U=parseInt,a6=" progid:DXImageTransform.Microsoft",bp=bD[bF].toUpperCase,q={blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/",opacity:1,path:"M0,0",r:0,rotation:0,rx:0,ry:0,scale:"1 1",src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",translation:"0 0",width:0,x:0,y:0},an={along:"along",blur:aG,"clip-rect":"csv",cx:aG,cy:aG,fill:"colour","fill-opacity":aG,"font-size":aG,height:aG,opacity:aG,path:"path",r:aG,rotation:"csv",rx:aG,ry:aG,scale:"csv",stroke:"colour","stroke-opacity":aG,"stroke-width":aG,translation:"csv",width:aG,x:aG,y:aG},bt="replace",bg=/^(from|to|\d+%?)$/,be=/\s*,\s*/,n={hs:1,rg:1},bb=/,?([achlmqrstvxz]),?/gi,aS=/([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,aH=/(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig,aP=/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,bn=function(i,e){return i.key-e.key
};aJ.type=(aR.SVGAngle||ab.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML");
if(aJ.type=="VML"){var ay=ab.createElement("div"),aC;ay.innerHTML='<v:shape adj="1"/>';
aC=ay.firstChild;aC.style.behavior="url(#default#VML)";if(!(aC&&typeof aC.adj=="object")){return aJ.type=null
}ay=null}aJ.svg=!(aJ.vml=aJ.type=="VML");bA[bF]=aJ[bF];a0=bA[bF];aJ._id=0;aJ._oid=0;
aJ.fn={};aJ.is=function(e,b){b=bH.call(b);if(b=="finite"){return !aq[ah](+e)}return(b=="null"&&e===null)||(b==typeof e)||(b=="object"&&e===Object(e))||(b=="array"&&Array.isArray&&Array.isArray(e))||aU.call(e).slice(8,-1).toLowerCase()==b
};aJ.angle=function(R,bI,i,S,e,E){if(e==null){var b=R-i,bJ=bI-S;if(!b&&!bJ){return 0
}return((b<0)*180+ap.atan(-bJ/-b)*180/aN+360)%360}else{return aJ.angle(R,bI,e,E)-aJ.angle(i,S,e,E)
}};aJ.rad=function(b){return b%360*aN/180};aJ.deg=function(b){return b*180/aN%360
};aJ.snapTo=function(e,R,b){b=aJ.is(b,"finite")?b:10;if(aJ.is(e,a8)){var E=e.length;
while(E--){if(ar(e[E]-R)<=b){return e[E]}}}else{e=+e;var S=R%e;if(S<b){return R-S
}if(S>e-b){return R-S+e}}return R};function j(){var e=[],b=0;for(;b<32;b++){e[b]=(~~(ap.random()*16))[a1](16)
}e[12]=4;e[16]=((e[16]&3)|8)[a1](16);return"r-"+e[aX]("")}aJ.setWindow=function(b){aR=b;
ab=aR.document};var ba=function(R){if(aJ.vml){var b=/^\s+|\s+$/g;var bI;try{var bJ=new ActiveXObject("htmlfile");
bJ.write("<body>");bJ.close();bI=bJ.body}catch(bK){bI=createPopup().document.body
}var E=bI.createTextRange();ba=aB(function(i){try{bI.style.color=bD(i)[bt](b,aQ);
var bL=E.queryCommandValue("ForeColor");bL=((bL&255)<<16)|(bL&65280)|((bL&16711680)>>>16);
return"#"+("000000"+bL[a1](16)).slice(-6)}catch(bM){return"none"}})}else{var S=ab.createElement("i");
S.title="Rapha\xebl Colour Picker";S.style.display="none";ab.body[bl](S);ba=aB(function(e){S.style.color=e;
return ab.defaultView.getComputedStyle(S,aQ).getPropertyValue("color")})}return ba(R)
},aD=function(){return"hsb("+[this.h,this.s,this.b]+")"},N=function(){return"hsl("+[this.h,this.s,this.l]+")"
},C=function(){return this.hex};aJ.hsb2rgb=function(E,i,e,R){if(aJ.is(E,"object")&&"h" in E&&"s" in E&&"b" in E){e=E.b;
i=E.s;E=E.h;R=E.o}return aJ.hsl2rgb(E,i,e/2,R)};aJ.hsl2rgb=function(bJ,bQ,R,E){if(aJ.is(bJ,"object")&&"h" in bJ&&"s" in bJ&&"l" in bJ){R=bJ.l;
bQ=bJ.s;bJ=bJ.h}if(bJ>1||bQ>1||R>1){bJ/=360;bQ/=100;R/=100}var bO={},bL=["r","g","b"],bK,bN,bI,e,bM,bP;
if(!bQ){bO={r:R,g:R,b:R}}else{if(R<0.5){bK=R*(1+bQ)}else{bK=R+bQ-R*bQ}bN=2*R-bK;for(var S=0;
S<3;S++){bI=bJ+1/3*-(S-1);bI<0&&bI++;bI>1&&bI--;if(bI*6<1){bO[bL[S]]=bN+(bK-bN)*6*bI
}else{if(bI*2<1){bO[bL[S]]=bK}else{if(bI*3<2){bO[bL[S]]=bN+(bK-bN)*(2/3-bI)*6}else{bO[bL[S]]=bN
}}}}}bO.r*=255;bO.g*=255;bO.b*=255;bO.hex="#"+(16777216|bO.b|(bO.g<<8)|(bO.r<<16)).toString(16).slice(1);
aJ.is(E,"finite")&&(bO.opacity=E);bO.toString=C;return bO};aJ.rgb2hsb=function(b,e,bJ){if(e==null&&aJ.is(b,"object")&&"r" in b&&"g" in b&&"b" in b){bJ=b.b;
e=b.g;b=b.r}if(e==null&&aJ.is(b,ag)){var bL=aJ.getRGB(b);b=bL.r;e=bL.g;bJ=bL.b}if(b>1||e>1||bJ>1){b/=255;
e/=255;bJ/=255}var bI=m(b,e,bJ),i=bj(b,e,bJ),R,E,S=bI;if(i==bI){return{h:0,s:0,b:bI,toString:aD}
}else{var bK=(bI-i);E=bK/bI;if(b==bI){R=(e-bJ)/bK}else{if(e==bI){R=2+((bJ-b)/bK)}else{R=4+((b-e)/bK)
}}R/=6;R<0&&R++;R>1&&R--}return{h:R,s:E,b:S,toString:aD}};aJ.rgb2hsl=function(e,i,bI){if(i==null&&aJ.is(e,"object")&&"r" in e&&"g" in e&&"b" in e){bI=e.b;
i=e.g;e=e.r}if(i==null&&aJ.is(e,ag)){var bM=aJ.getRGB(e);e=bM.r;i=bM.g;bI=bM.b}if(e>1||i>1||bI>1){e/=255;
i/=255;bI/=255}var S=m(e,i,bI),E=bj(e,i,bI),R,bL,b=(S+E)/2,bK;if(E==S){bK={h:0,s:0,l:b}
}else{var bJ=S-E;bL=b<0.5?bJ/(S+E):bJ/(2-S-E);if(e==S){R=(i-bI)/bJ}else{if(i==S){R=2+(bI-e)/bJ
}else{R=4+(e-i)/bJ}}R/=6;R<0&&R++;R>1&&R--;bK={h:R,s:bL,l:b}}bK.toString=N;return bK
};aJ._path2string=function(){return this.join(",")[bt](bb,"$1")};function aB(E,e,b){function i(){var R=Array[bF].slice.call(arguments,0),bI=R[aX]("\u25ba"),S=i.cache=i.cache||{},bJ=i.count=i.count||[];
if(S[ah](bI)){return b?b(S[bI]):S[bI]}bJ[t]>=1000&&delete S[bJ.shift()];bJ[k](bI);
S[bI]=E[bC](e,R);return b?b(S[bI]):S[bI]}return i}aJ.getRGB=aB(function(b){if(!b||!!((b=bD(b)).indexOf("-")+1)){return{r:-1,g:-1,b:-1,hex:"none",error:1}
}if(b=="none"){return{r:-1,g:-1,b:-1,hex:"none"}}!(n[ah](b.toLowerCase().substring(0,2))||b.charAt()=="#")&&(b=ba(b));
var R,e,i,bI,E,bK,bJ,S=b.match(H);if(S){if(S[2]){bI=U(S[2].substring(5),16);i=U(S[2].substring(3,5),16);
e=U(S[2].substring(1,3),16)}if(S[3]){bI=U((bK=S[3].charAt(3))+bK,16);i=U((bK=S[3].charAt(2))+bK,16);
e=U((bK=S[3].charAt(1))+bK,16)}if(S[4]){bJ=S[4][J](be);e=ak(bJ[0]);bJ[0].slice(-1)=="%"&&(e*=2.55);
i=ak(bJ[1]);bJ[1].slice(-1)=="%"&&(i*=2.55);bI=ak(bJ[2]);bJ[2].slice(-1)=="%"&&(bI*=2.55);
S[1].toLowerCase().slice(0,4)=="rgba"&&(E=ak(bJ[3]));bJ[3]&&bJ[3].slice(-1)=="%"&&(E/=100)
}if(S[5]){bJ=S[5][J](be);e=ak(bJ[0]);bJ[0].slice(-1)=="%"&&(e*=2.55);i=ak(bJ[1]);
bJ[1].slice(-1)=="%"&&(i*=2.55);bI=ak(bJ[2]);bJ[2].slice(-1)=="%"&&(bI*=2.55);(bJ[0].slice(-3)=="deg"||bJ[0].slice(-1)=="\xb0")&&(e/=360);
S[1].toLowerCase().slice(0,4)=="hsba"&&(E=ak(bJ[3]));bJ[3]&&bJ[3].slice(-1)=="%"&&(E/=100);
return aJ.hsb2rgb(e,i,bI,E)}if(S[6]){bJ=S[6][J](be);e=ak(bJ[0]);bJ[0].slice(-1)=="%"&&(e*=2.55);
i=ak(bJ[1]);bJ[1].slice(-1)=="%"&&(i*=2.55);bI=ak(bJ[2]);bJ[2].slice(-1)=="%"&&(bI*=2.55);
(bJ[0].slice(-3)=="deg"||bJ[0].slice(-1)=="\xb0")&&(e/=360);S[1].toLowerCase().slice(0,4)=="hsla"&&(E=ak(bJ[3]));
bJ[3]&&bJ[3].slice(-1)=="%"&&(E/=100);return aJ.hsl2rgb(e,i,bI,E)}S={r:e,g:i,b:bI};
S.hex="#"+(16777216|bI|(i<<8)|(e<<16)).toString(16).slice(1);aJ.is(E,"finite")&&(S.opacity=E);
return S}return{r:-1,g:-1,b:-1,hex:"none",error:1}},aJ);aJ.getColor=function(e){var i=this.getColor.start=this.getColor.start||{h:0,s:1,b:e||0.75},b=this.hsb2rgb(i.h,i.s,i.b);
i.h+=0.075;if(i.h>1){i.h=0;i.s-=0.2;i.s<=0&&(this.getColor.start={h:0,s:1,b:i.b})
}return b.hex};aJ.getColor.reset=function(){delete this.start};aJ.parsePathString=aB(function(b){if(!b){return null
}var i={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},e=[];if(aJ.is(b,a8)&&aJ.is(b[0],a8)){e=aT(b)
}if(!e[t]){bD(b)[bt](aS,function(R,E,bJ){var bI=[],S=bH.call(E);bJ[bt](aH,function(bL,bK){bK&&bI[k](+bK)
});if(S=="m"&&bI[t]>2){e[k]([E][bx](bI.splice(0,2)));S="l";E=E=="m"?"l":"L"}while(bI[t]>=i[S]){e[k]([E][bx](bI.splice(0,i[S])));
if(!i[S]){break}}})}e[a1]=aJ._path2string;return e});aJ.findDotsAtSegment=function(e,b,bW,bU,bI,R,bK,bJ,bQ){var bO=1-bQ,bN=bm(bO,3)*e+bm(bO,2)*3*bQ*bW+bO*3*bQ*bQ*bI+bm(bQ,3)*bK,bL=bm(bO,3)*b+bm(bO,2)*3*bQ*bU+bO*3*bQ*bQ*R+bm(bQ,3)*bJ,bS=e+2*bQ*(bW-e)+bQ*bQ*(bI-2*bW+e),bR=b+2*bQ*(bU-b)+bQ*bQ*(R-2*bU+b),bV=bW+2*bQ*(bI-bW)+bQ*bQ*(bK-2*bI+bW),bT=bU+2*bQ*(R-bU)+bQ*bQ*(bJ-2*R+bU),bP=(1-bQ)*e+bQ*bW,bM=(1-bQ)*b+bQ*bU,E=(1-bQ)*bI+bQ*bK,i=(1-bQ)*R+bQ*bJ,S=(90-ap.atan((bS-bV)/(bR-bT))*180/aN);
(bS>bV||bR<bT)&&(S+=180);return{x:bN,y:bL,m:{x:bS,y:bR},n:{x:bV,y:bT},start:{x:bP,y:bM},end:{x:E,y:i},alpha:S}
};var aj=aB(function(bN){if(!bN){return{x:0,y:0,width:0,height:0}}bN=W(bN);var bK=0,bJ=0,R=[],e=[],E;
for(var S=0,bM=bN[t];S<bM;S++){E=bN[S];if(E[0]=="M"){bK=E[1];bJ=E[2];R[k](bK);e[k](bJ)
}else{var bI=a7(bK,bJ,E[1],E[2],E[3],E[4],E[5],E[6]);R=R[bx](bI.min.x,bI.max.x);e=e[bx](bI.min.y,bI.max.y);
bK=E[5];bJ=E[6]}}var b=bj[bC](0,R),bL=bj[bC](0,e);return{x:b,y:bL,width:m[bC](0,R)-b,height:m[bC](0,e)-bL}
}),aT=function(bI){var E=[];if(!aJ.is(bI,a8)||!aJ.is(bI&&bI[0],a8)){bI=aJ.parsePathString(bI)
}for(var e=0,R=bI[t];e<R;e++){E[e]=[];for(var b=0,S=bI[e][t];b<S;b++){E[e][b]=bI[e][b]
}}E[a1]=aJ._path2string;return E},av=aB(function(R){if(!aJ.is(R,a8)||!aJ.is(R&&R[0],a8)){R=aJ.parsePathString(R)
}var bM=[],bO=0,bN=0,bR=0,bQ=0,E=0;if(R[0][0]=="M"){bO=R[0][1];bN=R[0][2];bR=bO;bQ=bN;
E++;bM[k](["M",bO,bN])}for(var bJ=E,bS=R[t];bJ<bS;bJ++){var b=bM[bJ]=[],bP=R[bJ];
if(bP[0]!=bH.call(bP[0])){b[0]=bH.call(bP[0]);switch(b[0]){case"a":b[1]=bP[1];b[2]=bP[2];
b[3]=bP[3];b[4]=bP[4];b[5]=bP[5];b[6]=+(bP[6]-bO).toFixed(3);b[7]=+(bP[7]-bN).toFixed(3);
break;case"v":b[1]=+(bP[1]-bN).toFixed(3);break;case"m":bR=bP[1];bQ=bP[2];default:for(var bI=1,bK=bP[t];
bI<bK;bI++){b[bI]=+(bP[bI]-((bI%2)?bO:bN)).toFixed(3)}}}else{b=bM[bJ]=[];if(bP[0]=="m"){bR=bP[1]+bO;
bQ=bP[2]+bN}for(var S=0,e=bP[t];S<e;S++){bM[bJ][S]=bP[S]}}var bL=bM[bJ][t];switch(bM[bJ][0]){case"z":bO=bR;
bN=bQ;break;case"h":bO+=+bM[bJ][bL-1];break;case"v":bN+=+bM[bJ][bL-1];break;default:bO+=+bM[bJ][bL-2];
bN+=+bM[bJ][bL-1]}}bM[a1]=aJ._path2string;return bM},0,aT),z=aB(function(R){if(!aJ.is(R,a8)||!aJ.is(R&&R[0],a8)){R=aJ.parsePathString(R)
}var bL=[],bN=0,bM=0,bQ=0,bP=0,E=0;if(R[0][0]=="M"){bN=+R[0][1];bM=+R[0][2];bQ=bN;
bP=bM;E++;bL[0]=["M",bN,bM]}for(var bJ=E,bR=R[t];bJ<bR;bJ++){var b=bL[bJ]=[],bO=R[bJ];
if(bO[0]!=bp.call(bO[0])){b[0]=bp.call(bO[0]);switch(b[0]){case"A":b[1]=bO[1];b[2]=bO[2];
b[3]=bO[3];b[4]=bO[4];b[5]=bO[5];b[6]=+(bO[6]+bN);b[7]=+(bO[7]+bM);break;case"V":b[1]=+bO[1]+bM;
break;case"H":b[1]=+bO[1]+bN;break;case"M":bQ=+bO[1]+bN;bP=+bO[2]+bM;default:for(var bI=1,bK=bO[t];
bI<bK;bI++){b[bI]=+bO[bI]+((bI%2)?bN:bM)}}}else{for(var S=0,e=bO[t];S<e;S++){bL[bJ][S]=bO[S]
}}switch(b[0]){case"Z":bN=bQ;bM=bP;break;case"H":bN=b[1];break;case"V":bM=b[1];break;
case"M":bQ=bL[bJ][bL[bJ][t]-2];bP=bL[bJ][bL[bJ][t]-1];default:bN=bL[bJ][bL[bJ][t]-2];
bM=bL[bJ][bL[bJ][t]-1]}}bL[a1]=aJ._path2string;return bL},null,aT),bE=function(e,E,b,i){return[e,E,b,i,b,i]
},bk=function(e,E,bI,R,b,i){var S=1/3,bJ=2/3;return[S*e+bJ*bI,S*E+bJ*R,S*b+bJ*bI,S*i+bJ*R,b,i]
},aa=function(bQ,cl,bZ,bX,bR,bL,R,bP,ck,bS){var bW=aN*120/180,b=aN/180*(+bR||0),b3=[],b0,ch=aB(function(cm,cp,i){var co=cm*ap.cos(i)-cp*ap.sin(i),cn=cm*ap.sin(i)+cp*ap.cos(i);
return{x:co,y:cn}});if(!bS){b0=ch(bQ,cl,-b);bQ=b0.x;cl=b0.y;b0=ch(bP,ck,-b);bP=b0.x;
ck=b0.y;var e=ap.cos(aN/180*bR),bN=ap.sin(aN/180*bR),b5=(bQ-bP)/2,b4=(cl-ck)/2;var cf=(b5*b5)/(bZ*bZ)+(b4*b4)/(bX*bX);
if(cf>1){cf=ap.sqrt(cf);bZ=cf*bZ;bX=cf*bX}var E=bZ*bZ,b8=bX*bX,ca=(bL==R?-1:1)*ap.sqrt(ar((E*b8-E*b4*b4-b8*b5*b5)/(E*b4*b4+b8*b5*b5))),bU=ca*bZ*b4/bX+(bQ+bP)/2,bT=ca*-bX*b5/bZ+(cl+ck)/2,bK=ap.asin(((cl-bT)/bX).toFixed(9)),bJ=ap.asin(((ck-bT)/bX).toFixed(9));
bK=bQ<bU?aN-bK:bK;bJ=bP<bU?aN-bJ:bJ;bK<0&&(bK=aN*2+bK);bJ<0&&(bJ=aN*2+bJ);if(R&&bK>bJ){bK=bK-aN*2
}if(!R&&bJ>bK){bJ=bJ-aN*2}}else{bK=bS[0];bJ=bS[1];bU=bS[2];bT=bS[3]}var bO=bJ-bK;
if(ar(bO)>bW){var bV=bJ,bY=bP,bM=ck;bJ=bK+bW*(R&&bJ>bK?1:-1);bP=bU+bZ*ap.cos(bJ);
ck=bT+bX*ap.sin(bJ);b3=aa(bP,ck,bZ,bX,bR,0,R,bY,bM,[bJ,bV,bU,bT])}bO=bJ-bK;var bI=ap.cos(bK),cj=ap.sin(bK),S=ap.cos(bJ),ci=ap.sin(bJ),b6=ap.tan(bO/4),b9=4/3*bZ*b6,b7=4/3*bX*b6,cg=[bQ,cl],ce=[bQ+b9*cj,cl-b7*bI],cd=[bP+b9*ci,ck-b7*S],cb=[bP,ck];
ce[0]=2*cg[0]-ce[0];ce[1]=2*cg[1]-ce[1];if(bS){return[ce,cd,cb][bx](b3)}else{b3=[ce,cd,cb][bx](b3)[aX]()[J](",");
var b1=[];for(var cc=0,b2=b3[t];cc<b2;cc++){b1[cc]=cc%2?ch(b3[cc-1],b3[cc],b).y:ch(b3[cc],b3[cc+1],b).x
}return b1}},ad=function(e,b,E,i,bK,bJ,bI,S,bL){var R=1-bL;return{x:bm(R,3)*e+bm(R,2)*3*bL*E+R*3*bL*bL*bK+bm(bL,3)*bI,y:bm(R,3)*b+bm(R,2)*3*bL*i+R*3*bL*bL*bJ+bm(bL,3)*S}
},a7=aB(function(E,e,S,R,bS,bR,bO,bL){var bQ=(bS-2*S+E)-(bO-2*bS+S),bN=2*(S-E)-2*(bS-S),bK=E-S,bJ=(-bN+ap.sqrt(bN*bN-4*bQ*bK))/2/bQ,bI=(-bN-ap.sqrt(bN*bN-4*bQ*bK))/2/bQ,bM=[e,bL],bP=[E,bO],i;
ar(bJ)>"1e12"&&(bJ=0.5);ar(bI)>"1e12"&&(bI=0.5);if(bJ>0&&bJ<1){i=ad(E,e,S,R,bS,bR,bO,bL,bJ);
bP[k](i.x);bM[k](i.y)}if(bI>0&&bI<1){i=ad(E,e,S,R,bS,bR,bO,bL,bI);bP[k](i.x);bM[k](i.y)
}bQ=(bR-2*R+e)-(bL-2*bR+R);bN=2*(R-e)-2*(bR-R);bK=e-R;bJ=(-bN+ap.sqrt(bN*bN-4*bQ*bK))/2/bQ;
bI=(-bN-ap.sqrt(bN*bN-4*bQ*bK))/2/bQ;ar(bJ)>"1e12"&&(bJ=0.5);ar(bI)>"1e12"&&(bI=0.5);
if(bJ>0&&bJ<1){i=ad(E,e,S,R,bS,bR,bO,bL,bJ);bP[k](i.x);bM[k](i.y)}if(bI>0&&bI<1){i=ad(E,e,S,R,bS,bR,bO,bL,bI);
bP[k](i.x);bM[k](i.y)}return{min:{x:bj[bC](0,bP),y:bj[bC](0,bM)},max:{x:m[bC](0,bP),y:m[bC](0,bM)}}
}),W=aB(function(bR,bM){var R=z(bR),bN=bM&&z(bM),bO={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},b={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},bI=function(bS,bT){var i,bU;
if(!bS){return["C",bT.x,bT.y,bT.x,bT.y,bT.x,bT.y]}!(bS[0] in {T:1,Q:1})&&(bT.qx=bT.qy=null);
switch(bS[0]){case"M":bT.X=bS[1];bT.Y=bS[2];break;case"A":bS=["C"][bx](aa[bC](0,[bT.x,bT.y][bx](bS.slice(1))));
break;case"S":i=bT.x+(bT.x-(bT.bx||bT.x));bU=bT.y+(bT.y-(bT.by||bT.y));bS=["C",i,bU][bx](bS.slice(1));
break;case"T":bT.qx=bT.x+(bT.x-(bT.qx||bT.x));bT.qy=bT.y+(bT.y-(bT.qy||bT.y));bS=["C"][bx](bk(bT.x,bT.y,bT.qx,bT.qy,bS[1],bS[2]));
break;case"Q":bT.qx=bS[1];bT.qy=bS[2];bS=["C"][bx](bk(bT.x,bT.y,bS[1],bS[2],bS[3],bS[4]));
break;case"L":bS=["C"][bx](bE(bT.x,bT.y,bS[1],bS[2]));break;case"H":bS=["C"][bx](bE(bT.x,bT.y,bS[1],bT.y));
break;case"V":bS=["C"][bx](bE(bT.x,bT.y,bT.x,bS[1]));break;case"Z":bS=["C"][bx](bE(bT.x,bT.y,bT.X,bT.Y));
break}return bS},e=function(bS,bT){if(bS[bT][t]>7){bS[bT].shift();var bU=bS[bT];while(bU[t]){bS.splice(bT++,0,["C"][bx](bU.splice(0,6)))
}bS.splice(bT,1);bP=m(R[t],bN&&bN[t]||0)}},E=function(bW,bV,bT,bS,bU){if(bW&&bV&&bW[bU][0]=="M"&&bV[bU][0]!="M"){bV.splice(bU,0,["M",bS.x,bS.y]);
bT.bx=0;bT.by=0;bT.x=bW[bU][1];bT.y=bW[bU][2];bP=m(R[t],bN&&bN[t]||0)}};for(var bK=0,bP=m(R[t],bN&&bN[t]||0);
bK<bP;bK++){R[bK]=bI(R[bK],bO);e(R,bK);bN&&(bN[bK]=bI(bN[bK],b));bN&&e(bN,bK);E(R,bN,bO,b,bK);
E(bN,R,b,bO,bK);var bJ=R[bK],bQ=bN&&bN[bK],S=bJ[t],bL=bN&&bQ[t];bO.x=bJ[S-2];bO.y=bJ[S-1];
bO.bx=ak(bJ[S-4])||bO.x;bO.by=ak(bJ[S-3])||bO.y;b.bx=bN&&(ak(bQ[bL-4])||b.x);b.by=bN&&(ak(bQ[bL-3])||b.y);
b.x=bN&&bQ[bL-2];b.y=bN&&bQ[bL-1]}return bN?[R,bN]:R},null,aT),x=aB(function(bL){var bK=[];
for(var S=0,bM=bL[t];S<bM;S++){var b={},bJ=bL[S].match(/^([^:]*):?([\d\.]*)/);b.color=aJ.getRGB(bJ[1]);
if(b.color.error){return null}b.color=b.color.hex;bJ[2]&&(b.offset=bJ[2]+"%");bK[k](b)
}for(S=1,bM=bK[t]-1;S<bM;S++){if(!bK[S].offset){var e=ak(bK[S-1].offset||0),E=0;for(var R=S+1;
R<bM;R++){if(bK[R].offset){E=bK[R].offset;break}}if(!E){E=100;R=bM}E=ak(E);var bI=(E-e)/(R-S+1);
for(;S<R;S++){e+=bI;bK[S].offset=e+"%"}}}return bK}),aK=function(b,R,i,E){var e;if(aJ.is(b,ag)||aJ.is(b,"object")){e=aJ.is(b,ag)?ab.getElementById(b):b;
if(e.tagName){if(R==null){return{container:e,width:e.style.pixelWidth||e.offsetWidth,height:e.style.pixelHeight||e.offsetHeight}
}else{return{container:e,width:R,height:i}}}}else{return{container:1,x:b,y:R,width:i,height:E}
}},bf=function(b,i){var e=this;for(var E in i){if(i[ah](E)&&!(E in b)){switch(typeof i[E]){case"function":(function(R){b[E]=b===e?R:function(){return R[bC](e,arguments)
}})(i[E]);break;case"object":b[E]=b[E]||{};bf.call(this,b[E],i[E]);break;default:b[E]=i[E];
break}}}},aF=function(b,e){b==e.top&&(e.top=b.prev);b==e.bottom&&(e.bottom=b.next);
b.next&&(b.next.prev=b.prev);b.prev&&(b.prev.next=b.next)},am=function(b,e){if(e.top===b){return
}aF(b,e);b.next=null;b.prev=e.top;e.top.next=b;e.top=b},p=function(b,e){if(e.bottom===b){return
}aF(b,e);b.next=e.bottom;b.prev=null;e.bottom.prev=b;e.bottom=b},K=function(e,b,i){aF(e,i);
b==i.top&&(i.top=e);b.next&&(b.next.prev=e);e.next=b.next;e.prev=b;b.next=e},aM=function(e,b,i){aF(e,i);
b==i.bottom&&(i.bottom=e);b.prev&&(b.prev.next=e);e.prev=b.prev;b.prev=e;e.next=b
},A=function(b){return function(){throw new Error("Rapha\xebl: you are calling to method \u201c"+b+"\u201d of removed object")
}};aJ.pathToRelative=av;if(aJ.svg){a0.svgns="http://www.w3.org/2000/svg";a0.xlink="http://www.w3.org/1999/xlink";
ae=function(b){return +b+(~~b===b)*0.5};var bi=function(i,b){if(b){for(var e in b){if(b[ah](e)){i[F](e,bD(b[e]))
}}}else{i=ab.createElementNS(a0.svgns,i);i.style.webkitTapHighlightColor="rgba(0,0,0,0)";
return i}};aJ[a1]=function(){return"Your browser supports SVG.\nYou are running Rapha\xebl "+this.version
};var y=function(b,E){var e=bi("path");E.canvas&&E.canvas[bl](e);var i=new aV(e,E);
i.type="path";ao(i,{fill:"none",stroke:"#000",path:b});return i};var g=function(R,bQ,b){var bN="linear",bK=0.5,bI=0.5,bS=R.style;
bQ=bD(bQ)[bt](aP,function(bU,i,bV){bN="radial";if(i&&bV){bK=ak(i);bI=ak(bV);var bT=((bI>0.5)*2-1);
bm(bK-0.5,2)+bm(bI-0.5,2)>0.25&&(bI=ap.sqrt(0.25-bm(bK-0.5,2))*bT+0.5)&&bI!=0.5&&(bI=bI.toFixed(5)-0.00001*bT)
}return aQ});bQ=bQ[J](/\s*\-\s*/);if(bN=="linear"){var bJ=bQ.shift();bJ=-ak(bJ);if(isNaN(bJ)){return null
}var S=[0,0,ap.cos(bJ*aN/180),ap.sin(bJ*aN/180)],bP=1/(m(ar(S[2]),ar(S[3]))||1);S[2]*=bP;
S[3]*=bP;if(S[2]<0){S[0]=-S[2];S[2]=0}if(S[3]<0){S[1]=-S[3];S[3]=0}}var bM=x(bQ);
if(!bM){return null}var e=R.getAttribute(a5);e=e.match(/^url\(#(.*)\)$/);e&&b.defs.removeChild(ab.getElementById(e[1]));
var E=bi(bN+"Gradient");E.id=j();bi(E,bN=="radial"?{fx:bK,fy:bI}:{x1:S[0],y1:S[1],x2:S[2],y2:S[3]});
b.defs[bl](E);for(var bL=0,bR=bM[t];bL<bR;bL++){var bO=bi("stop");bi(bO,{offset:bM[bL].offset?bM[bL].offset:!bL?"0%":"100%","stop-color":bM[bL].color||"#fff"});
E[bl](bO)}bi(R,{fill:"url(#"+E.id+")",opacity:1,"fill-opacity":1});bS.fill=aQ;bS.opacity=1;
bS.fillOpacity=1;return 1};var ac=function(e){var b=e.getBBox();bi(e.pattern,{patternTransform:aJ.format("translate({0},{1})",b.x,b.y)})
};var ao=function(bP,bY){var bS={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},bU=bP.node,bQ=bP.attrs,bM=bP.rotate(),bI=function(b5,b4){b4=bS[bH.call(b4)];
if(b4){var b2=b5.attrs["stroke-width"]||"1",b0={round:b2,square:b2,butt:0}[b5.attrs["stroke-linecap"]||bY["stroke-linecap"]]||0,b3=[];
var b1=b4[t];while(b1--){b3[b1]=b4[b1]*b2+((b1%2)?1:-1)*b0}bi(bU,{"stroke-dasharray":b3[aX](",")})
}};bY[ah]("rotation")&&(bM=bY.rotation);var bL=bD(bM)[J](a);if(!(bL.length-1)){bL=null
}else{bL[1]=+bL[1];bL[2]=+bL[2]}ak(bM)&&bP.rotate(0,true);for(var bT in bY){if(bY[ah](bT)){if(!q[ah](bT)){continue
}var bR=bY[bT];bQ[bT]=bR;switch(bT){case"blur":bP.blur(bR);break;case"rotation":bP.rotate(bR,true);
break;case"href":case"title":case"target":var bW=bU.parentNode;if(bH.call(bW.tagName)!="a"){var R=bi("a");
bW.insertBefore(R,bU);R[bl](bU);bW=R}if(bT=="target"&&bR=="blank"){bW.setAttributeNS(bP.paper.xlink,"show","new")
}else{bW.setAttributeNS(bP.paper.xlink,bT,bR)}break;case"cursor":bU.style.cursor=bR;
break;case"clip-rect":var e=bD(bR)[J](a);if(e[t]==4){bP.clip&&bP.clip.parentNode.parentNode.removeChild(bP.clip.parentNode);
var i=bi("clipPath"),bV=bi("rect");i.id=j();bi(bV,{x:e[0],y:e[1],width:e[2],height:e[3]});
i[bl](bV);bP.paper.defs[bl](i);bi(bU,{"clip-path":"url(#"+i.id+")"});bP.clip=bV}if(!bR){var bX=ab.getElementById(bU.getAttribute("clip-path")[bt](/(^url\(#|\)$)/g,aQ));
bX&&bX.parentNode.removeChild(bX);bi(bU,{"clip-path":aQ});delete bP.clip}break;case"path":if(bP.type=="path"){bi(bU,{d:bR?bQ.path=z(bR):"M0,0"})
}break;case"width":bU[F](bT,bR);if(bQ.fx){bT="x";bR=bQ.x}else{break}case"x":if(bQ.fx){bR=-bQ.x-(bQ.width||0)
}case"rx":if(bT=="rx"&&bP.type=="rect"){break}case"cx":bL&&(bT=="x"||bT=="cx")&&(bL[1]+=bR-bQ[bT]);
bU[F](bT,bR);bP.pattern&&ac(bP);break;case"height":bU[F](bT,bR);if(bQ.fy){bT="y";
bR=bQ.y}else{break}case"y":if(bQ.fy){bR=-bQ.y-(bQ.height||0)}case"ry":if(bT=="ry"&&bP.type=="rect"){break
}case"cy":bL&&(bT=="y"||bT=="cy")&&(bL[2]+=bR-bQ[bT]);bU[F](bT,bR);bP.pattern&&ac(bP);
break;case"r":if(bP.type=="rect"){bi(bU,{rx:bR,ry:bR})}else{bU[F](bT,bR)}break;case"src":if(bP.type=="image"){bU.setAttributeNS(bP.paper.xlink,"href",bR)
}break;case"stroke-width":bU.style.strokeWidth=bR;bU[F](bT,bR);if(bQ["stroke-dasharray"]){bI(bP,bQ["stroke-dasharray"])
}break;case"stroke-dasharray":bI(bP,bR);break;case"translation":var bJ=bD(bR)[J](a);
bJ[0]=+bJ[0]||0;bJ[1]=+bJ[1]||0;if(bL){bL[1]+=bJ[0];bL[2]+=bJ[1]}B.call(bP,bJ[0],bJ[1]);
break;case"scale":bJ=bD(bR)[J](a);bP.scale(+bJ[0]||1,+bJ[1]||+bJ[0]||1,isNaN(ak(bJ[2]))?null:+bJ[2],isNaN(ak(bJ[3]))?null:+bJ[3]);
break;case a5:var S=bD(bR).match(h);if(S){i=bi("pattern");var bO=bi("image");i.id=j();
bi(i,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1});bi(bO,{x:0,y:0});bO.setAttributeNS(bP.paper.xlink,"href",S[1]);
i[bl](bO);var bZ=ab.createElement("img");bZ.style.cssText="position:absolute;left:-9999em;top-9999em";
bZ.onload=function(){bi(i,{width:this.offsetWidth,height:this.offsetHeight});bi(bO,{width:this.offsetWidth,height:this.offsetHeight});
ab.body.removeChild(this);bP.paper.safari()};ab.body[bl](bZ);bZ.src=S[1];bP.paper.defs[bl](i);
bU.style.fill="url(#"+i.id+")";bi(bU,{fill:"url(#"+i.id+")"});bP.pattern=i;bP.pattern&&ac(bP);
break}var E=aJ.getRGB(bR);if(!E.error){delete bY.gradient;delete bQ.gradient;!aJ.is(bQ.opacity,"undefined")&&aJ.is(bY.opacity,"undefined")&&bi(bU,{opacity:bQ.opacity});
!aJ.is(bQ["fill-opacity"],"undefined")&&aJ.is(bY["fill-opacity"],"undefined")&&bi(bU,{"fill-opacity":bQ["fill-opacity"]})
}else{if((({circle:1,ellipse:1})[ah](bP.type)||bD(bR).charAt()!="r")&&g(bU,bR,bP.paper)){bQ.gradient=bR;
bQ.fill="none";break}}E[ah]("opacity")&&bi(bU,{"fill-opacity":E.opacity>1?E.opacity/100:E.opacity});
case"stroke":E=aJ.getRGB(bR);bU[F](bT,E.hex);bT=="stroke"&&E[ah]("opacity")&&bi(bU,{"stroke-opacity":E.opacity>1?E.opacity/100:E.opacity});
break;case"gradient":(({circle:1,ellipse:1})[ah](bP.type)||bD(bR).charAt()!="r")&&g(bU,bR,bP.paper);
break;case"opacity":if(bQ.gradient&&!bQ[ah]("stroke-opacity")){bi(bU,{"stroke-opacity":bR>1?bR/100:bR})
}case"fill-opacity":if(bQ.gradient){var b=ab.getElementById(bU.getAttribute(a5)[bt](/^url\(#|\)$/g,aQ));
if(b){var bK=b.getElementsByTagName("stop");bK[bK[t]-1][F]("stop-opacity",bR)}break
}default:bT=="font-size"&&(bR=U(bR,10)+"px");var bN=bT[bt](/(\-.)/g,function(b0){return bp.call(b0.substring(1))
});bU.style[bN]=bR;bU[F](bT,bR);break}}}Q(bP,bY);if(bL){bP.rotate(bL.join(aI))}else{ak(bM)&&bP.rotate(bM,true)
}};var o=1.2,Q=function(b,R){if(b.type!="text"||!(R[ah]("text")||R[ah]("font")||R[ah]("font-size")||R[ah]("x")||R[ah]("y"))){return
}var bL=b.attrs,e=b.node,bN=e.firstChild?U(ab.defaultView.getComputedStyle(e.firstChild,aQ).getPropertyValue("font-size"),10):10;
if(R[ah]("text")){bL.text=R.text;while(e.firstChild){e.removeChild(e.firstChild)}var E=bD(R.text)[J]("\n");
for(var S=0,bM=E[t];S<bM;S++){if(E[S]){var bJ=bi("tspan");S&&bi(bJ,{dy:bN*o,x:bL.x});
bJ[bl](ab.createTextNode(E[S]));e[bl](bJ)}}}else{E=e.getElementsByTagName("tspan");
for(S=0,bM=E[t];S<bM;S++){S&&bi(E[S],{dy:bN*o,x:bL.x})}}bi(e,{y:bL.y});var bI=b.getBBox(),bK=bL.y-(bI.y+bI.height/2);
bK&&aJ.is(bK,"finite")&&bi(e,{y:bL.y+bK})},aV=function(e,b){var E=0,i=0;this[0]=e;
this.id=aJ._oid++;this.node=e;e.raphael=this;this.paper=b;this.attrs=this.attrs||{};
this.transformations=[];this._={tx:0,ty:0,rt:{deg:0,cx:0,cy:0},sx:1,sy:1};!b.bottom&&(b.bottom=this);
this.prev=b.top;b.top&&(b.top.next=this);b.top=this;this.next=null};var bd=aV[bF];
aV[bF].rotate=function(e,b,E){if(this.removed){return this}if(e==null){if(this._.rt.cx){return[this._.rt.deg,this._.rt.cx,this._.rt.cy][aX](aI)
}return this._.rt.deg}var i=this.getBBox();e=bD(e)[J](a);if(e[t]-1){b=ak(e[1]);E=ak(e[2])
}e=ak(e[0]);if(b!=null&&b!==false){this._.rt.deg=e}else{this._.rt.deg+=e}(E==null)&&(b=null);
this._.rt.cx=b;this._.rt.cy=E;b=b==null?i.x+i.width/2:b;E=E==null?i.y+i.height/2:E;
if(this._.rt.deg){this.transformations[0]=aJ.format("rotate({0} {1} {2})",this._.rt.deg,b,E);
this.clip&&bi(this.clip,{transform:aJ.format("rotate({0} {1} {2})",-this._.rt.deg,b,E)})
}else{this.transformations[0]=aQ;this.clip&&bi(this.clip,{transform:aQ})}bi(this.node,{transform:this.transformations[aX](aI)});
return this};aV[bF].hide=function(){!this.removed&&(this.node.style.display="none");
return this};aV[bF].show=function(){!this.removed&&(this.node.style.display="");return this
};aV[bF].remove=function(){if(this.removed){return}aF(this,this.paper);this.node.parentNode.removeChild(this.node);
for(var b in this){delete this[b]}this.removed=true};aV[bF].getBBox=function(){if(this.removed){return this
}if(this.type=="path"){return aj(this.attrs.path)}if(this.node.style.display=="none"){this.show();
var E=true}var bJ={};try{bJ=this.node.getBBox()}catch(S){}finally{bJ=bJ||{}}if(this.type=="text"){bJ={x:bJ.x,y:Infinity,width:0,height:0};
for(var b=0,R=this.node.getNumberOfChars();b<R;b++){var bI=this.node.getExtentOfChar(b);
(bI.y<bJ.y)&&(bJ.y=bI.y);(bI.y+bI.height-bJ.y>bJ.height)&&(bJ.height=bI.y+bI.height-bJ.y);
(bI.x+bI.width-bJ.x>bJ.width)&&(bJ.width=bI.x+bI.width-bJ.x)}}E&&this.hide();return bJ
};aV[bF].attr=function(b,bL){if(this.removed){return this}if(b==null){var bK={};for(var S in this.attrs){if(this.attrs[ah](S)){bK[S]=this.attrs[S]
}}this._.rt.deg&&(bK.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(bK.scale=this.scale());
bK.gradient&&bK.fill=="none"&&(bK.fill=bK.gradient)&&delete bK.gradient;return bK
}if(bL==null&&aJ.is(b,ag)){if(b=="translation"){return B.call(this)}if(b=="rotation"){return this.rotate()
}if(b=="scale"){return this.scale()}if(b==a5&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient
}return this.attrs[b]}if(bL==null&&aJ.is(b,a8)){var bN={};for(var R=0,bI=b.length;
R<bI;R++){bN[b[R]]=this.attr(b[R])}return bN}if(bL!=null){var e={};e[b]=bL}else{if(b!=null&&aJ.is(b,"object")){e=b
}}for(var bM in this.paper.customAttributes){if(this.paper.customAttributes[ah](bM)&&e[ah](bM)&&aJ.is(this.paper.customAttributes[bM],"function")){var bJ=this.paper.customAttributes[bM].apply(this,[][bx](e[bM]));
this.attrs[bM]=e[bM];for(var E in bJ){if(bJ[ah](E)){e[E]=bJ[E]}}}}ao(this,e);return this
};aV[bF].toFront=function(){if(this.removed){return this}this.node.parentNode[bl](this.node);
var b=this.paper;b.top!=this&&am(this,b);return this};aV[bF].toBack=function(){if(this.removed){return this
}if(this.node.parentNode.firstChild!=this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild);
p(this,this.paper);var b=this.paper}return this};aV[bF].insertAfter=function(b){if(this.removed){return this
}var e=b.node||b[b.length-1].node;if(e.nextSibling){e.parentNode.insertBefore(this.node,e.nextSibling)
}else{e.parentNode[bl](this.node)}K(this,b,this.paper);return this};aV[bF].insertBefore=function(b){if(this.removed){return this
}var e=b.node||b[0].node;e.parentNode.insertBefore(this.node,e);aM(this,b,this.paper);
return this};aV[bF].blur=function(e){var b=this;if(+e!==0){var i=bi("filter"),E=bi("feGaussianBlur");
b.attrs.blur=e;i.id=j();bi(E,{stdDeviation:+e||1.5});i.appendChild(E);b.paper.defs.appendChild(i);
b._blur=i;bi(b.node,{filter:"url(#"+i.id+")"})}else{if(b._blur){b._blur.parentNode.removeChild(b._blur);
delete b._blur;delete b.attrs.blur}b.node.removeAttribute("filter")}};var af=function(e,b,S,R){var E=bi("circle");
e.canvas&&e.canvas[bl](E);var i=new aV(E,e);i.attrs={cx:b,cy:S,r:R,fill:"none",stroke:"#000"};
i.type="circle";bi(E,i.attrs);return i},bc=function(i,b,bJ,e,S,bI){var R=bi("rect");
i.canvas&&i.canvas[bl](R);var E=new aV(R,i);E.attrs={x:b,y:bJ,width:e,height:S,r:bI||0,rx:bI||0,ry:bI||0,fill:"none",stroke:"#000"};
E.type="rect";bi(R,E.attrs);return E},aA=function(e,b,bI,S,R){var E=bi("ellipse");
e.canvas&&e.canvas[bl](E);var i=new aV(E,e);i.attrs={cx:b,cy:bI,rx:S,ry:R,fill:"none",stroke:"#000"};
i.type="ellipse";bi(E,i.attrs);return i},w=function(i,bI,b,bJ,e,S){var R=bi("image");
bi(R,{x:b,y:bJ,width:e,height:S,preserveAspectRatio:"none"});R.setAttributeNS(i.xlink,"href",bI);
i.canvas&&i.canvas[bl](R);var E=new aV(R,i);E.attrs={x:b,y:bJ,width:e,height:S,src:bI};
E.type="image";return E},al=function(e,b,S,R){var E=bi("text");bi(E,{x:b,y:S,"text-anchor":"middle"});
e.canvas&&e.canvas[bl](E);var i=new aV(E,e);i.attrs={x:b,y:S,"text-anchor":"middle",text:R,font:q.font,stroke:"none",fill:"#000"};
i.type="text";ao(i,i.attrs);return i},bB=function(e,b){this.width=e||this.width;this.height=b||this.height;
this.canvas[F]("width",this.width);this.canvas[F]("height",this.height);return this
},G=function(){var E=aK[bC](0,arguments),i=E&&E.container,e=E.x,bI=E.y,R=E.width,b=E.height;
if(!i){throw new Error("SVG container not found.")}var S=bi("svg");e=e||0;bI=bI||0;
R=R||512;b=b||342;bi(S,{xmlns:"http://www.w3.org/2000/svg",version:1.1,width:R,height:b});
if(i==1){S.style.cssText="position:absolute;left:"+e+"px;top:"+bI+"px";ab.body[bl](S)
}else{if(i.firstChild){i.insertBefore(S,i.firstChild)}else{i[bl](S)}}i=new bA;i.width=R;
i.height=b;i.canvas=S;bf.call(i,i,aJ.fn);i.clear();return i};a0.clear=function(){var b=this.canvas;
while(b.firstChild){b.removeChild(b.firstChild)}this.bottom=this.top=null;(this.desc=bi("desc"))[bl](ab.createTextNode("Created with Rapha\xebl"));
b[bl](this.desc);b[bl](this.defs=bi("defs"))};a0.remove=function(){this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);
for(var b in this){this[b]=A(b)}}}if(aJ.vml){var O={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},aO=/([clmz]),?([^clmz]*)/gi,by=/ progid:\S+Blur\([^\)]+\)/g,bG=/-?[^,\s-]+/g,aY=1000+aI+1000,v=10,u={path:1,rect:1},bh=function(bN){var bK=/[ahqstv]/ig,E=z;
bD(bN).match(bK)&&(E=W);bK=/[clmz]/g;if(E==z&&!bD(bN).match(bK)){var bJ=bD(bN)[bt](aO,function(bQ,bS,bO){var bR=[],i=bH.call(bS)=="m",bP=O[bS];
bO[bt](bG,function(bT){if(i&&bR[t]==2){bP+=bR+O[bS=="m"?"l":"L"];bR=[]}bR[k](ae(bT*v))
});return bP+bR});return bJ}var bL=E(bN),e,b;bJ=[];for(var S=0,bM=bL[t];S<bM;S++){e=bL[S];
b=bH.call(bL[S][0]);b=="z"&&(b="x");for(var R=1,bI=e[t];R<bI;R++){b+=ae(e[R]*v)+(R!=bI-1?",":aQ)
}bJ[k](b)}return bJ[aX](aI)};aJ[a1]=function(){return"Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl "+this.version
};y=function(i,e){var S=az("group");S.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";
S.coordsize=e.coordsize;S.coordorigin=e.coordorigin;var R=az("shape"),E=R.style;E.width=e.width+"px";
E.height=e.height+"px";R.coordsize=aY;R.coordorigin=e.coordorigin;S[bl](R);var bI=new aV(R,S,e),b={fill:"none",stroke:"#000"};
i&&(b.path=i);bI.type="path";bI.path=[];bI.Path=aQ;ao(bI,b);e.canvas[bl](S);return bI
};ao=function(bL,bS){bL.attrs=bL.attrs||{};var bP=bL.node,bT=bL.attrs,bI=bP.style,E,bR=(bS.x!=bT.x||bS.y!=bT.y||bS.width!=bT.width||bS.height!=bT.height||bS.r!=bT.r)&&bL.type=="rect",bX=bL;
for(var bJ in bS){if(bS[ah](bJ)){bT[bJ]=bS[bJ]}}if(bR){bT.path=au(bT.x,bT.y,bT.width,bT.height,bT.r);
bL.X=bT.x;bL.Y=bT.y;bL.W=bT.width;bL.H=bT.height}bS.href&&(bP.href=bS.href);bS.title&&(bP.title=bS.title);
bS.target&&(bP.target=bS.target);bS.cursor&&(bI.cursor=bS.cursor);"blur" in bS&&bL.blur(bS.blur);
if(bS.path&&bL.type=="path"||bR){bP.path=bh(bT.path)}if(bS.rotation!=null){bL.rotate(bS.rotation,true)
}if(bS.translation){E=bD(bS.translation)[J](a);B.call(bL,E[0],E[1]);if(bL._.rt.cx!=null){bL._.rt.cx+=+E[0];
bL._.rt.cy+=+E[1];bL.setBox(bL.attrs,E[0],E[1])}}if(bS.scale){E=bD(bS.scale)[J](a);
bL.scale(+E[0]||1,+E[1]||+E[0]||1,+E[2]||null,+E[3]||null)}if("clip-rect" in bS){var b=bD(bS["clip-rect"])[J](a);
if(b[t]==4){b[2]=+b[2]+(+b[0]);b[3]=+b[3]+(+b[1]);var bK=bP.clipRect||ab.createElement("div"),bW=bK.style,S=bP.parentNode;
bW.clip=aJ.format("rect({1}px {2}px {3}px {0}px)",b);if(!bP.clipRect){bW.position="absolute";
bW.top=0;bW.left=0;bW.width=bL.paper.width+"px";bW.height=bL.paper.height+"px";S.parentNode.insertBefore(bK,S);
bK[bl](S);bP.clipRect=bK}}if(!bS["clip-rect"]){bP.clipRect&&(bP.clipRect.style.clip=aQ)
}}if(bL.type=="image"&&bS.src){bP.src=bS.src}if(bL.type=="image"&&bS.opacity){bP.filterOpacity=a6+".Alpha(opacity="+(bS.opacity*100)+")";
bI.filter=(bP.filterMatrix||aQ)+(bP.filterOpacity||aQ)}bS.font&&(bI.font=bS.font);
bS["font-family"]&&(bI.fontFamily='"'+bS["font-family"][J](",")[0][bt](/^['"]+|['"]+$/g,aQ)+'"');
bS["font-size"]&&(bI.fontSize=bS["font-size"]);bS["font-weight"]&&(bI.fontWeight=bS["font-weight"]);
bS["font-style"]&&(bI.fontStyle=bS["font-style"]);if(bS.opacity!=null||bS["stroke-width"]!=null||bS.fill!=null||bS.stroke!=null||bS["stroke-width"]!=null||bS["stroke-opacity"]!=null||bS["fill-opacity"]!=null||bS["stroke-dasharray"]!=null||bS["stroke-miterlimit"]!=null||bS["stroke-linejoin"]!=null||bS["stroke-linecap"]!=null){bP=bL.shape||bP;
var bQ=(bP.getElementsByTagName(a5)&&bP.getElementsByTagName(a5)[0]),bU=false;!bQ&&(bU=bQ=az(a5));
if("fill-opacity" in bS||"opacity" in bS){var e=((+bT["fill-opacity"]+1||2)-1)*((+bT.opacity+1||2)-1)*((+aJ.getRGB(bS.fill).o+1||2)-1);
e=bj(m(e,0),1);bQ.opacity=e}bS.fill&&(bQ.on=true);if(bQ.on==null||bS.fill=="none"){bQ.on=false
}if(bQ.on&&bS.fill){var i=bS.fill.match(h);if(i){bQ.src=i[1];bQ.type="tile"}else{bQ.color=aJ.getRGB(bS.fill).hex;
bQ.src=aQ;bQ.type="solid";if(aJ.getRGB(bS.fill).error&&(bX.type in {circle:1,ellipse:1}||bD(bS.fill).charAt()!="r")&&g(bX,bS.fill)){bT.fill="none";
bT.gradient=bS.fill}}}bU&&bP[bl](bQ);var R=(bP.getElementsByTagName("stroke")&&bP.getElementsByTagName("stroke")[0]),bV=false;
!R&&(bV=R=az("stroke"));if((bS.stroke&&bS.stroke!="none")||bS["stroke-width"]||bS["stroke-opacity"]!=null||bS["stroke-dasharray"]||bS["stroke-miterlimit"]||bS["stroke-linejoin"]||bS["stroke-linecap"]){R.on=true
}(bS.stroke=="none"||R.on==null||bS.stroke==0||bS["stroke-width"]==0)&&(R.on=false);
var bO=aJ.getRGB(bS.stroke);R.on&&bS.stroke&&(R.color=bO.hex);e=((+bT["stroke-opacity"]+1||2)-1)*((+bT.opacity+1||2)-1)*((+bO.o+1||2)-1);
var bM=(ak(bS["stroke-width"])||1)*0.75;e=bj(m(e,0),1);bS["stroke-width"]==null&&(bM=bT["stroke-width"]);
bS["stroke-width"]&&(R.weight=bM);bM&&bM<1&&(e*=bM)&&(R.weight=1);R.opacity=e;bS["stroke-linejoin"]&&(R.joinstyle=bS["stroke-linejoin"]||"miter");
R.miterlimit=bS["stroke-miterlimit"]||8;bS["stroke-linecap"]&&(R.endcap=bS["stroke-linecap"]=="butt"?"flat":bS["stroke-linecap"]=="square"?"square":"round");
if(bS["stroke-dasharray"]){var bN={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};
R.dashstyle=bN[ah](bS["stroke-dasharray"])?bN[bS["stroke-dasharray"]]:aQ}bV&&bP[bl](R)
}if(bX.type=="text"){bI=bX.paper.span.style;bT.font&&(bI.font=bT.font);bT["font-family"]&&(bI.fontFamily=bT["font-family"]);
bT["font-size"]&&(bI.fontSize=bT["font-size"]);bT["font-weight"]&&(bI.fontWeight=bT["font-weight"]);
bT["font-style"]&&(bI.fontStyle=bT["font-style"]);bX.node.string&&(bX.paper.span.innerHTML=bD(bX.node.string)[bt](/</g,"&#60;")[bt](/&/g,"&#38;")[bt](/\n/g,"<br>"));
bX.W=bT.w=bX.paper.span.offsetWidth;bX.H=bT.h=bX.paper.span.offsetHeight;bX.X=bT.x;
bX.Y=bT.y+ae(bX.H/2);switch(bT["text-anchor"]){case"start":bX.node.style["v-text-align"]="left";
bX.bbx=ae(bX.W/2);break;case"end":bX.node.style["v-text-align"]="right";bX.bbx=-ae(bX.W/2);
break;default:bX.node.style["v-text-align"]="center";break}}};g=function(b,bJ){b.attrs=b.attrs||{};
var bK=b.attrs,bM,S="linear",bI=".5 .5";b.attrs.gradient=bJ;bJ=bD(bJ)[bt](aP,function(bO,bP,i){S="radial";
if(bP&&i){bP=ak(bP);i=ak(i);bm(bP-0.5,2)+bm(i-0.5,2)>0.25&&(i=ap.sqrt(0.25-bm(bP-0.5,2))*((i>0.5)*2-1)+0.5);
bI=bP+aI+i}return aQ});bJ=bJ[J](/\s*\-\s*/);if(S=="linear"){var e=bJ.shift();e=-ak(e);
if(isNaN(e)){return null}}var R=x(bJ);if(!R){return null}b=b.shape||b.node;bM=b.getElementsByTagName(a5)[0]||az(a5);
!bM.parentNode&&b.appendChild(bM);if(R[t]){bM.on=true;bM.method="none";bM.color=R[0].color;
bM.color2=R[R[t]-1].color;var bN=[];for(var E=0,bL=R[t];E<bL;E++){R[E].offset&&bN[k](R[E].offset+aI+R[E].color)
}bM.colors&&(bM.colors.value=bN[t]?bN[aX]():"0% "+bM.color);if(S=="radial"){bM.type="gradientradial";
bM.focus="100%";bM.focussize=bI;bM.focusposition=bI}else{bM.type="gradient";bM.angle=(270-e)%360
}}return 1};aV=function(R,bI,b){var S=0,i=0,e=0,E=1;this[0]=R;this.id=aJ._oid++;this.node=R;
R.raphael=this;this.X=0;this.Y=0;this.attrs={};this.Group=bI;this.paper=b;this._={tx:0,ty:0,rt:{deg:0},sx:1,sy:1};
!b.bottom&&(b.bottom=this);this.prev=b.top;b.top&&(b.top.next=this);b.top=this;this.next=null
};bd=aV[bF];bd.rotate=function(e,b,i){if(this.removed){return this}if(e==null){if(this._.rt.cx){return[this._.rt.deg,this._.rt.cx,this._.rt.cy][aX](aI)
}return this._.rt.deg}e=bD(e)[J](a);if(e[t]-1){b=ak(e[1]);i=ak(e[2])}e=ak(e[0]);if(b!=null){this._.rt.deg=e
}else{this._.rt.deg+=e}i==null&&(b=null);this._.rt.cx=b;this._.rt.cy=i;this.setBox(this.attrs,b,i);
this.Group.style.rotation=this._.rt.deg;return this};bd.setBox=function(R,S,E){if(this.removed){return this
}var b=this.Group.style,bI=(this.shape&&this.shape.style)||this.node.style;R=R||{};
for(var bJ in R){if(R[ah](bJ)){this.attrs[bJ]=R[bJ]}}S=S||this._.rt.cx;E=E||this._.rt.cy;
var bM=this.attrs,bP,bO,bQ,bL;switch(this.type){case"circle":bP=bM.cx-bM.r;bO=bM.cy-bM.r;
bQ=bL=bM.r*2;break;case"ellipse":bP=bM.cx-bM.rx;bO=bM.cy-bM.ry;bQ=bM.rx*2;bL=bM.ry*2;
break;case"image":bP=+bM.x;bO=+bM.y;bQ=bM.width||0;bL=bM.height||0;break;case"text":this.textpath.v=["m",ae(bM.x),", ",ae(bM.y-2),"l",ae(bM.x)+1,", ",ae(bM.y-2)][aX](aQ);
bP=bM.x-ae(this.W/2);bO=bM.y-this.H/2;bQ=this.W;bL=this.H;break;case"rect":case"path":if(!this.attrs.path){bP=0;
bO=0;bQ=this.paper.width;bL=this.paper.height}else{var bK=aj(this.attrs.path);bP=bK.x;
bO=bK.y;bQ=bK.width;bL=bK.height}break;default:bP=0;bO=0;bQ=this.paper.width;bL=this.paper.height;
break}S=(S==null)?bP+bQ/2:S;E=(E==null)?bO+bL/2:E;var e=S-this.paper.width/2,bN=E-this.paper.height/2,bR;
b.left!=(bR=e+"px")&&(b.left=bR);b.top!=(bR=bN+"px")&&(b.top=bR);this.X=u[ah](this.type)?-e:bP;
this.Y=u[ah](this.type)?-bN:bO;this.W=bQ;this.H=bL;if(u[ah](this.type)){bI.left!=(bR=-e*v+"px")&&(bI.left=bR);
bI.top!=(bR=-bN*v+"px")&&(bI.top=bR)}else{if(this.type=="text"){bI.left!=(bR=-e+"px")&&(bI.left=bR);
bI.top!=(bR=-bN+"px")&&(bI.top=bR)}else{b.width!=(bR=this.paper.width+"px")&&(b.width=bR);
b.height!=(bR=this.paper.height+"px")&&(b.height=bR);bI.left!=(bR=bP-e+"px")&&(bI.left=bR);
bI.top!=(bR=bO-bN+"px")&&(bI.top=bR);bI.width!=(bR=bQ+"px")&&(bI.width=bR);bI.height!=(bR=bL+"px")&&(bI.height=bR)
}}};bd.hide=function(){!this.removed&&(this.Group.style.display="none");return this
};bd.show=function(){!this.removed&&(this.Group.style.display="block");return this
};bd.getBBox=function(){if(this.removed){return this}if(u[ah](this.type)){return aj(this.attrs.path)
}return{x:this.X+(this.bbx||0),y:this.Y,width:this.W,height:this.H}};bd.remove=function(){if(this.removed){return
}aF(this,this.paper);this.node.parentNode.removeChild(this.node);this.Group.parentNode.removeChild(this.Group);
this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this){delete this[b]
}this.removed=true};bd.attr=function(b,bJ){if(this.removed){return this}if(b==null){var bI={};
for(var R in this.attrs){if(this.attrs[ah](R)){bI[R]=this.attrs[R]}}this._.rt.deg&&(bI.rotation=this.rotate());
(this._.sx!=1||this._.sy!=1)&&(bI.scale=this.scale());bI.gradient&&bI.fill=="none"&&(bI.fill=bI.gradient)&&delete bI.gradient;
return bI}if(bJ==null&&aJ.is(b,"string")){if(b=="translation"){return B.call(this)
}if(b=="rotation"){return this.rotate()}if(b=="scale"){return this.scale()}if(b==a5&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient
}return this.attrs[b]}if(this.attrs&&bJ==null&&aJ.is(b,a8)){var bM,bL={};for(R=0,bM=b[t];
R<bM;R++){bL[b[R]]=this.attr(b[R])}return bL}var e;if(bJ!=null){e={};e[b]=bJ}bJ==null&&aJ.is(b,"object")&&(e=b);
if(e){for(var bK in this.paper.customAttributes){if(this.paper.customAttributes[ah](bK)&&e[ah](bK)&&aJ.is(this.paper.customAttributes[bK],"function")){var S=this.paper.customAttributes[bK].apply(this,[][bx](e[bK]));
this.attrs[bK]=e[bK];for(var E in S){if(S[ah](E)){e[E]=S[E]}}}}if(e.text&&this.type=="text"){this.node.string=e.text
}ao(this,e);if(e.gradient&&(({circle:1,ellipse:1})[ah](this.type)||bD(e.gradient).charAt()!="r")){g(this,e.gradient)
}(!u[ah](this.type)||this._.rt.deg)&&this.setBox(this.attrs)}return this};bd.toFront=function(){!this.removed&&this.Group.parentNode[bl](this.Group);
this.paper.top!=this&&am(this,this.paper);return this};bd.toBack=function(){if(this.removed){return this
}if(this.Group.parentNode.firstChild!=this.Group){this.Group.parentNode.insertBefore(this.Group,this.Group.parentNode.firstChild);
p(this,this.paper)}return this};bd.insertAfter=function(b){if(this.removed){return this
}if(b.constructor==ai){b=b[b.length-1]}if(b.Group.nextSibling){b.Group.parentNode.insertBefore(this.Group,b.Group.nextSibling)
}else{b.Group.parentNode[bl](this.Group)}K(this,b,this.paper);return this};bd.insertBefore=function(b){if(this.removed){return this
}if(b.constructor==ai){b=b[0]}b.Group.parentNode.insertBefore(this.Group,b.Group);
aM(this,b,this.paper);return this};bd.blur=function(b){var e=this.node.runtimeStyle,i=e.filter;
i=i.replace(by,aQ);if(+b!==0){this.attrs.blur=b;e.filter=i+aI+a6+".Blur(pixelradius="+(+b||1.5)+")";
e.margin=aJ.format("-{0}px 0 0 -{0}px",ae(+b||1.5))}else{e.filter=i;e.margin=0;delete this.attrs.blur
}};af=function(e,b,bJ,S){var R=az("group"),bI=az("oval"),i=bI.style;R.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";
R.coordsize=aY;R.coordorigin=e.coordorigin;R[bl](bI);var E=new aV(bI,R,e);E.type="circle";
ao(E,{stroke:"#000",fill:"none"});E.attrs.cx=b;E.attrs.cy=bJ;E.attrs.r=S;E.setBox({x:b-S,y:bJ-S,width:S*2,height:S*2});
e.canvas[bl](R);return E};function au(b,R,e,i,E){if(E){return aJ.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z",b+E,R,e-E*2,E,-E,i-E*2,E*2-e,E*2-i)
}else{return aJ.format("M{0},{1}l{2},0,0,{3},{4},0z",b,R,e,i,-e)}}bc=function(e,bI,R,bJ,i,b){var bK=au(bI,R,bJ,i,b),E=e.path(bK),S=E.attrs;
E.X=S.x=bI;E.Y=S.y=R;E.W=S.width=bJ;E.H=S.height=i;S.r=b;S.path=bK;E.type="rect";
return E};aA=function(b,bK,bJ,i,e){var R=az("group"),E=az("oval"),bI=E.style;R.style.cssText="position:absolute;left:0;top:0;width:"+b.width+"px;height:"+b.height+"px";
R.coordsize=aY;R.coordorigin=b.coordorigin;R[bl](E);var S=new aV(E,R,b);S.type="ellipse";
ao(S,{stroke:"#000"});S.attrs.cx=bK;S.attrs.cy=bJ;S.attrs.rx=i;S.attrs.ry=e;S.setBox({x:bK-i,y:bJ-e,width:i*2,height:e*2});
b.canvas[bl](R);return S};w=function(e,b,bJ,bI,bK,E){var R=az("group"),i=az("image");
R.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";
R.coordsize=aY;R.coordorigin=e.coordorigin;i.src=b;R[bl](i);var S=new aV(i,R,e);S.type="image";
S.attrs.src=b;S.attrs.x=bJ;S.attrs.y=bI;S.attrs.w=bK;S.attrs.h=E;S.setBox({x:bJ,y:bI,width:bK,height:E});
e.canvas[bl](R);return S};al=function(e,bK,bJ,bL){var R=az("group"),E=az("shape"),bI=E.style,bM=az("path"),b=bM.style,i=az("textpath");
R.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";
R.coordsize=aY;R.coordorigin=e.coordorigin;bM.v=aJ.format("m{0},{1}l{2},{1}",ae(bK*10),ae(bJ*10),ae(bK*10)+1);
bM.textpathok=true;bI.width=e.width;bI.height=e.height;i.string=bD(bL);i.on=true;
E[bl](i);E[bl](bM);R[bl](E);var S=new aV(i,R,e);S.shape=E;S.textpath=bM;S.type="text";
S.attrs.text=bL;S.attrs.x=bK;S.attrs.y=bJ;S.attrs.w=1;S.attrs.h=1;ao(S,{font:q.font,stroke:"none",fill:"#000"});
S.setBox();e.canvas[bl](R);return S};bB=function(i,b){var e=this.canvas.style;i==+i&&(i+="px");
b==+b&&(b+="px");e.width=i;e.height=b;e.clip="rect(0 "+i+" "+b+" 0)";return this};
var az;ab.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!ab.namespaces.rvml&&ab.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
az=function(b){return ab.createElement("<rvml:"+b+' class="rvml">')}}catch(ax){az=function(b){return ab.createElement("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
}}G=function(){var i=aK[bC](0,arguments),b=i.container,bK=i.height,bL,e=i.width,bJ=i.x,bI=i.y;
if(!b){throw new Error("VML container not found.")}var R=new bA,S=R.canvas=ab.createElement("div"),E=S.style;
bJ=bJ||0;bI=bI||0;e=e||512;bK=bK||342;e==+e&&(e+="px");bK==+bK&&(bK+="px");R.width=1000;
R.height=1000;R.coordsize=v*1000+aI+v*1000;R.coordorigin="0 0";R.span=ab.createElement("span");
R.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
S[bl](R.span);E.cssText=aJ.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,bK);
if(b==1){ab.body[bl](S);E.left=bJ+"px";E.top=bI+"px";E.position="absolute"}else{if(b.firstChild){b.insertBefore(S,b.firstChild)
}else{b[bl](S)}}bf.call(R,R,aJ.fn);return R};a0.clear=function(){this.canvas.innerHTML=aQ;
this.span=ab.createElement("span");this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
this.canvas[bl](this.span);this.bottom=this.top=null};a0.remove=function(){this.canvas.parentNode.removeChild(this.canvas);
for(var b in this){this[b]=A(b)}return true}}var V=navigator.userAgent.match(/Version\/(.*?)\s/);
if((navigator.vendor=="Apple Computer, Inc.")&&(V&&V[1]<4||navigator.platform.slice(0,2)=="iP")){a0.safari=function(){var b=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});
aR.setTimeout(function(){b.remove()})}}else{a0.safari=function(){}}var P=function(){this.returnValue=false
},bw=function(){return this.originalEvent.preventDefault()},a4=function(){this.cancelBubble=true
},aE=function(){return this.originalEvent.stopPropagation()},aw=(function(){if(ab.addEventListener){return function(S,E,i,e){var b=X&&br[E]?br[E]:E;
var R=function(bL){if(X&&br[ah](E)){for(var bJ=0,bK=bL.targetTouches&&bL.targetTouches.length;
bJ<bK;bJ++){if(bL.targetTouches[bJ].target==S){var bI=bL;bL=bL.targetTouches[bJ];
bL.originalEvent=bI;bL.preventDefault=bw;bL.stopPropagation=aE;break}}}return i.call(e,bL)
};S.addEventListener(b,R,false);return function(){S.removeEventListener(b,R,false);
return true}}}else{if(ab.attachEvent){return function(S,E,i,e){var R=function(bI){bI=bI||aR.event;
bI.preventDefault=bI.preventDefault||P;bI.stopPropagation=bI.stopPropagation||a4;
return i.call(e,bI)};S.attachEvent("on"+E,R);var b=function(){S.detachEvent("on"+E,R);
return true};return b}}}})(),a9=[],bs=function(bI){var bK=bI.clientX,bJ=bI.clientY,bL=ab.documentElement.scrollTop||ab.body.scrollTop,bM=ab.documentElement.scrollLeft||ab.body.scrollLeft,b,E=a9.length;
while(E--){b=a9[E];if(X){var S=bI.touches.length,R;while(S--){R=bI.touches[S];if(R.identifier==b.el._drag.id){bK=R.clientX;
bJ=R.clientY;(bI.originalEvent?bI.originalEvent:bI).preventDefault();break}}}else{bI.preventDefault()
}bK+=bM;bJ+=bL;b.move&&b.move.call(b.move_scope||b.el,bK-b.el._drag.x,bJ-b.el._drag.y,bK,bJ,bI)
}},f=function(R){aJ.unmousemove(bs).unmouseup(f);var E=a9.length,b;while(E--){b=a9[E];
b.el._drag={};b.end&&b.end.call(b.end_scope||b.start_scope||b.move_scope||b.el,R)
}a9=[]};for(var at=T[t];at--;){(function(b){aJ[b]=aV[bF][b]=function(i,e){if(aJ.is(i,"function")){this.events=this.events||[];
this.events.push({name:b,f:i,unbind:aw(this.shape||this.node||ab,b,i,e||this)})}return this
};aJ["un"+b]=aV[bF]["un"+b]=function(E){var i=this.events,e=i[t];while(e--){if(i[e].name==b&&i[e].f==E){i[e].unbind();
i.splice(e,1);!i.length&&delete this.events;return this}}return this}})(T[at])}bd.hover=function(E,b,i,e){return this.mouseover(E,i).mouseout(b,e||i)
};bd.unhover=function(e,b){return this.unmouseover(e).unmouseout(b)};bd.drag=function(e,S,R,b,i,E){this._drag={};
this.mousedown(function(bJ){(bJ.originalEvent||bJ).preventDefault();var bI=ab.documentElement.scrollTop||ab.body.scrollTop,bK=ab.documentElement.scrollLeft||ab.body.scrollLeft;
this._drag.x=bJ.clientX+bK;this._drag.y=bJ.clientY+bI;this._drag.id=bJ.identifier;
S&&S.call(i||b||this,bJ.clientX+bK,bJ.clientY+bI,bJ);!a9.length&&aJ.mousemove(bs).mouseup(f);
a9.push({el:this,move:e,end:R,move_scope:b,start_scope:i,end_scope:E})});return this
};bd.undrag=function(b,R,E){var e=a9.length;while(e--){a9[e].el==this&&(a9[e].move==b&&a9[e].end==E)&&a9.splice(e++,1)
}!a9.length&&aJ.unmousemove(bs).unmouseup(f)};a0.circle=function(b,i,e){return af(this,b||0,i||0,e||0)
};a0.rect=function(b,R,e,i,E){return bc(this,b||0,R||0,e||0,i||0,E||0)};a0.ellipse=function(b,E,i,e){return aA(this,b||0,E||0,i||0,e||0)
};a0.path=function(b){b&&!aJ.is(b,ag)&&!aJ.is(b[0],a8)&&(b+=aQ);return y(aJ.format[bC](aJ,arguments),this)
};a0.image=function(E,b,R,e,i){return w(this,E||"about:blank",b||0,R||0,e||0,i||0)
};a0.text=function(b,i,e){return al(this,b||0,i||0,bD(e))};a0.set=function(b){arguments[t]>1&&(b=Array[bF].splice.call(arguments,0,arguments[t]));
return new ai(b)};a0.setSize=bB;a0.top=a0.bottom=null;a0.raphael=aJ;function D(){return this.x+aI+this.y
}bd.resetScale=function(){if(this.removed){return this}this._.sx=1;this._.sy=1;this.attrs.scale="1 1"
};bd.scale=function(b1,b0,bS,bQ){if(this.removed){return this}if(b1==null&&b0==null){return{x:this._.sx,y:this._.sy,toString:D}
}b0=b0||b1;!+b0&&(b0=b1);var e,b,b9,b8,cc=this.attrs;if(b1!=0){var cd=this.getBBox(),R=cd.x+cd.width/2,E=cd.y+cd.height/2,b6=ar(b1/this._.sx),b5=ar(b0/this._.sy);
bS=(+bS||bS==0)?bS:R;bQ=(+bQ||bQ==0)?bQ:E;var bL=this._.sx>0,bK=this._.sy>0,bR=~~(b1/ar(b1)),bP=~~(b0/ar(b0)),bI=b6*bR,S=b5*bP,b2=this.node.style,bZ=bS+ar(R-bS)*bI*(R>bS==bL?1:-1),bY=bQ+ar(E-bQ)*S*(E>bQ==bK?1:-1),bV=(b1*bR>b0*bP?b5:b6);
switch(this.type){case"rect":case"image":var bN=cc.width*b6,bW=cc.height*b5;this.attr({height:bW,r:cc.r*bV,width:bN,x:bZ-bN/2,y:bY-bW/2});
break;case"circle":case"ellipse":this.attr({rx:cc.rx*b6,ry:cc.ry*b5,r:cc.r*bV,cx:bZ,cy:bY});
break;case"text":this.attr({x:bZ,y:bY});break;case"path":var b4=av(cc.path),bM=true,bU=bL?bI:b6,bT=bK?S:b5;
for(var cb=0,bX=b4[t];cb<bX;cb++){var b7=b4[cb],bO=bp.call(b7[0]);if(bO=="M"&&bM){continue
}else{bM=false}if(bO=="A"){b7[b4[cb][t]-2]*=bU;b7[b4[cb][t]-1]*=bT;b7[1]*=b6;b7[2]*=b5;
b7[5]=+(bR+bP?!!+b7[5]:!+b7[5])}else{if(bO=="H"){for(var ca=1,bJ=b7[t];ca<bJ;ca++){b7[ca]*=bU
}}else{if(bO=="V"){for(ca=1,bJ=b7[t];ca<bJ;ca++){b7[ca]*=bT}}else{for(ca=1,bJ=b7[t];
ca<bJ;ca++){b7[ca]*=(ca%2)?bU:bT}}}}}var b3=aj(b4);e=bZ-b3.x-b3.width/2;b=bY-b3.y-b3.height/2;
b4[0][1]+=e;b4[0][2]+=b;this.attr({path:b4});break}if(this.type in {text:1,image:1}&&(bR!=1||bP!=1)){if(this.transformations){this.transformations[2]="scale("[bx](bR,",",bP,")");
this.node[F]("transform",this.transformations[aX](aI));e=(bR==-1)?-cc.x-(bN||0):cc.x;
b=(bP==-1)?-cc.y-(bW||0):cc.y;this.attr({x:e,y:b});cc.fx=bR-1;cc.fy=bP-1}else{this.node.filterMatrix=a6+".Matrix(M11="[bx](bR,", M12=0, M21=0, M22=",bP,", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");
b2.filter=(this.node.filterMatrix||aQ)+(this.node.filterOpacity||aQ)}}else{if(this.transformations){this.transformations[2]=aQ;
this.node[F]("transform",this.transformations[aX](aI));cc.fx=0;cc.fy=0}else{this.node.filterMatrix=aQ;
b2.filter=(this.node.filterMatrix||aQ)+(this.node.filterOpacity||aQ)}}cc.scale=[b1,b0,bS,bQ][aX](aI);
this._.sx=b1;this._.sy=b0}return this};bd.clone=function(){if(this.removed){return null
}var b=this.attr();delete b.scale;delete b.translation;return this.paper[this.type]().attr(b)
};var a3={},l=function(S,e,bL,bK,bT,bS,bR,bP,bI){var bO=0,bN=100,R=[S,e,bL,bK,bT,bS,bR,bP].join(),b=a3[R],bJ,E;
!b&&(a3[R]=b={data:[]});b.timer&&clearTimeout(b.timer);b.timer=setTimeout(function(){delete a3[R]
},2000);if(bI!=null){var bQ=l(S,e,bL,bK,bT,bS,bR,bP);bN=~~bQ*10}for(var bM=0;bM<bN+1;
bM++){if(b.data[bI]>bM){E=b.data[bM*bN]}else{E=aJ.findDotsAtSegment(S,e,bL,bK,bT,bS,bR,bP,bM/bN);
b.data[bM]=E}bM&&(bO+=bm(bm(bJ.x-E.x,2)+bm(bJ.y-E.y,2),0.5));if(bI!=null&&bO>=bI){return E
}bJ=E}if(bI==null){return bO}},a2=function(b,e){return function(bR,S,bI){bR=W(bR);
var bN,bM,E,bJ,R="",bQ={},bO,bL=0;for(var bK=0,bP=bR.length;bK<bP;bK++){E=bR[bK];
if(E[0]=="M"){bN=+E[1];bM=+E[2]}else{bJ=l(bN,bM,E[1],E[2],E[3],E[4],E[5],E[6]);if(bL+bJ>S){if(e&&!bQ.start){bO=l(bN,bM,E[1],E[2],E[3],E[4],E[5],E[6],S-bL);
R+=["C",bO.start.x,bO.start.y,bO.m.x,bO.m.y,bO.x,bO.y];if(bI){return R}bQ.start=R;
R=["M",bO.x,bO.y+"C",bO.n.x,bO.n.y,bO.end.x,bO.end.y,E[5],E[6]][aX]();bL+=bJ;bN=+E[5];
bM=+E[6];continue}if(!b&&!e){bO=l(bN,bM,E[1],E[2],E[3],E[4],E[5],E[6],S-bL);return{x:bO.x,y:bO.y,alpha:bO.alpha}
}}bL+=bJ;bN=+E[5];bM=+E[6]}R+=E}bQ.end=R;bO=b?bL:e?bQ:aJ.findDotsAtSegment(bN,bM,E[1],E[2],E[3],E[4],E[5],E[6],1);
bO.alpha&&(bO={x:bO.x,y:bO.y,alpha:bO.alpha});return bO}};var aL=a2(1),M=a2(),Z=a2(0,1);
bd.getTotalLength=function(){if(this.type!="path"){return}if(this.node.getTotalLength){return this.node.getTotalLength()
}return aL(this.attrs.path)};bd.getPointAtLength=function(b){if(this.type!="path"){return
}return M(this.attrs.path,b)};bd.getSubpath=function(i,e){if(this.type!="path"){return
}if(ar(this.getTotalLength()-e)<"1e-6"){return Z(this.attrs.path,i).end}var b=Z(this.attrs.path,e,1);
return i?Z(b,i).end:b};aJ.easing_formulas={linear:function(b){return b},"<":function(b){return bm(b,3)
},">":function(b){return bm(b-1,3)+1},"<>":function(b){b=b*2;if(b<1){return bm(b,3)/2
}b-=2;return(bm(b,3)+2)/2},backIn:function(e){var b=1.70158;return e*e*((b+1)*e-b)
},backOut:function(e){e=e-1;var b=1.70158;return e*e*((b+1)*e+b)+1},elastic:function(i){if(i==0||i==1){return i
}var e=0.3,b=e/4;return bm(2,-10*i)*ap.sin((i-b)*(2*aN)/e)+1},bounce:function(E){var e=7.5625,i=2.75,b;
if(E<(1/i)){b=e*E*E}else{if(E<(2/i)){E-=(1.5/i);b=e*E*E+0.75}else{if(E<(2.5/i)){E-=(2.25/i);
b=e*E*E+0.9375}else{E-=(2.625/i);b=e*E*E+0.984375}}}return b}};var Y=[],bv=function(){var bK=+new Date;
for(var bV=0;bV<Y[t];bV++){var b0=Y[bV];if(b0.stop||b0.el.removed){continue}var S=bK-b0.start,bS=b0.ms,bR=b0.easing,bW=b0.from,bP=b0.diff,E=b0.to,bO=b0.t,bJ=b0.el,bQ={},b;
if(S<bS){var R=bR(S/bS);for(var bT in bW){if(bW[ah](bT)){switch(an[bT]){case"along":b=R*bS*bP[bT];
E.back&&(b=E.len-b);var bU=M(E[bT],b);bJ.translate(bP.sx-bP.x||0,bP.sy-bP.y||0);bP.x=bU.x;
bP.y=bU.y;bJ.translate(bU.x-bP.sx,bU.y-bP.sy);E.rot&&bJ.rotate(bP.r+bU.alpha,bU.x,bU.y);
break;case aG:b=+bW[bT]+R*bS*bP[bT];break;case"colour":b="rgb("+[L(ae(bW[bT].r+R*bS*bP[bT].r)),L(ae(bW[bT].g+R*bS*bP[bT].g)),L(ae(bW[bT].b+R*bS*bP[bT].b))][aX](",")+")";
break;case"path":b=[];for(var bY=0,bN=bW[bT][t];bY<bN;bY++){b[bY]=[bW[bT][bY][0]];
for(var bX=1,bZ=bW[bT][bY][t];bX<bZ;bX++){b[bY][bX]=+bW[bT][bY][bX]+R*bS*bP[bT][bY][bX]
}b[bY]=b[bY][aX](aI)}b=b[aX](aI);break;case"csv":switch(bT){case"translation":var bM=R*bS*bP[bT][0]-bO.x,bL=R*bS*bP[bT][1]-bO.y;
bO.x+=bM;bO.y+=bL;b=bM+aI+bL;break;case"rotation":b=+bW[bT][0]+R*bS*bP[bT][0];bW[bT][1]&&(b+=","+bW[bT][1]+","+bW[bT][2]);
break;case"scale":b=[+bW[bT][0]+R*bS*bP[bT][0],+bW[bT][1]+R*bS*bP[bT][1],(2 in E[bT]?E[bT][2]:aQ),(3 in E[bT]?E[bT][3]:aQ)][aX](aI);
break;case"clip-rect":b=[];bY=4;while(bY--){b[bY]=+bW[bT][bY]+R*bS*bP[bT][bY]}break
}break;default:var bI=[].concat(bW[bT]);b=[];bY=bJ.paper.customAttributes[bT].length;
while(bY--){b[bY]=+bI[bY]+R*bS*bP[bT][bY]}break}bQ[bT]=b}}bJ.attr(bQ);bJ._run&&bJ._run.call(bJ)
}else{if(E.along){bU=M(E.along,E.len*!E.back);bJ.translate(bP.sx-(bP.x||0)+bU.x-bP.sx,bP.sy-(bP.y||0)+bU.y-bP.sy);
E.rot&&bJ.rotate(bP.r+bU.alpha,bU.x,bU.y)}(bO.x||bO.y)&&bJ.translate(-bO.x,-bO.y);
E.scale&&(E.scale+=aQ);bJ.attr(E);Y.splice(bV--,1)}}aJ.svg&&bJ&&bJ.paper&&bJ.paper.safari();
Y[t]&&setTimeout(bv)},bz=function(b,i,S,R,E){var e=S-R;i.timeouts.push(setTimeout(function(){aJ.is(E,"function")&&E.call(i);
i.animate(b,e,b.easing)},R))},L=function(b){return m(bj(b,255),0)},B=function(b,i){if(b==null){return{x:this._.tx,y:this._.ty,toString:D}
}this._.tx+=+b;this._.ty+=+i;switch(this.type){case"circle":case"ellipse":this.attr({cx:+b+this.attrs.cx,cy:+i+this.attrs.cy});
break;case"rect":case"image":case"text":this.attr({x:+b+this.attrs.x,y:+i+this.attrs.y});
break;case"path":var e=av(this.attrs.path);e[0][1]+=+b;e[0][2]+=+i;this.attr({path:e});
break}return this};bd.animateWith=function(E,S,b,bJ,bI){for(var e=0,R=Y.length;e<R;
e++){if(Y[e].el.id==E.id){S.start=Y[e].start}}return this.animate(S,b,bJ,bI)};bd.animateAlong=aW();
bd.animateAlongBack=aW(1);function aW(b){return function(E,i,e,S){var R={back:b};
aJ.is(e,"function")?(S=e):(R.rot=e);E&&E.constructor==aV&&(E=E.attrs.path);E&&(R.along=E);
return this.animate(R,i,S)}}function aZ(bP,E,e,bO,bN,bJ){var bK=3*E,bM=3*(bO-E)-bK,b=1-bK-bM,bI=3*e,bL=3*(bN-e)-bI,bQ=1-bI-bL;
function S(bR){return((b*bR+bM)*bR+bK)*bR}function i(bR,bT){var bS=R(bR,bT);return((bQ*bS+bL)*bS+bI)*bS
}function R(bR,bY){var bX,bW,bU,bS,bV,bT;for(bU=bR,bT=0;bT<8;bT++){bS=S(bU)-bR;if(ar(bS)<bY){return bU
}bV=(3*b*bU+2*bM)*bU+bK;if(ar(bV)<0.000001){break}bU=bU-bS/bV}bX=0;bW=1;bU=bR;if(bU<bX){return bX
}if(bU>bW){return bW}while(bX<bW){bS=S(bU);if(ar(bS-bR)<bY){return bU}if(bR>bS){bX=bU
}else{bW=bU}bU=(bW-bX)/2+bX}return bU}return i(bP,1/(200*bJ))}bd.onAnimation=function(b){this._run=b||0;
return this};bd.animate=function(b2,bS,bR,S){var e=this;e.timeouts=e.timeouts||[];
if(aJ.is(bR,"function")||!bR){S=bR||null}if(e.removed){S&&S.call(e);return e}var bW={},E={},bI=false,bN={};
for(var bT in b2){if(b2[ah](bT)){if(an[ah](bT)||e.paper.customAttributes[ah](bT)){bI=true;
bW[bT]=e.attr(bT);(bW[bT]==null)&&(bW[bT]=q[bT]);E[bT]=b2[bT];switch(an[bT]){case"along":var b0=aL(b2[bT]);
var bU=M(b2[bT],b0*!!b2.back);var bJ=e.getBBox();bN[bT]=b0/bS;bN.tx=bJ.x;bN.ty=bJ.y;
bN.sx=bU.x;bN.sy=bU.y;E.rot=b2.rot;E.back=b2.back;E.len=b0;b2.rot&&(bN.r=ak(e.rotate())||0);
break;case aG:bN[bT]=(E[bT]-bW[bT])/bS;break;case"colour":bW[bT]=aJ.getRGB(bW[bT]);
var bV=aJ.getRGB(E[bT]);bN[bT]={r:(bV.r-bW[bT].r)/bS,g:(bV.g-bW[bT].g)/bS,b:(bV.b-bW[bT].b)/bS};
break;case"path":var bK=W(bW[bT],E[bT]);bW[bT]=bK[0];var bP=bK[1];bN[bT]=[];for(var bZ=0,bM=bW[bT][t];
bZ<bM;bZ++){bN[bT][bZ]=[0];for(var bY=1,b1=bW[bT][bZ][t];bY<b1;bY++){bN[bT][bZ][bY]=(bP[bZ][bY]-bW[bT][bZ][bY])/bS
}}break;case"csv":var b=bD(b2[bT])[J](a),bL=bD(bW[bT])[J](a);switch(bT){case"translation":bW[bT]=[0,0];
bN[bT]=[b[0]/bS,b[1]/bS];break;case"rotation":bW[bT]=(bL[1]==b[1]&&bL[2]==b[2])?bL:[0,b[1],b[2]];
bN[bT]=[(b[0]-bW[bT][0])/bS,0,0];break;case"scale":b2[bT]=b;bW[bT]=bD(bW[bT])[J](a);
bN[bT]=[(b[0]-bW[bT][0])/bS,(b[1]-bW[bT][1])/bS,0,0];break;case"clip-rect":bW[bT]=bD(bW[bT])[J](a);
bN[bT]=[];bZ=4;while(bZ--){bN[bT][bZ]=(b[bZ]-bW[bT][bZ])/bS}break}E[bT]=b;break;default:b=[].concat(b2[bT]);
bL=[].concat(bW[bT]);bN[bT]=[];bZ=e.paper.customAttributes[bT][t];while(bZ--){bN[bT][bZ]=((b[bZ]||0)-(bL[bZ]||0))/bS
}break}}}}if(!bI){var bQ=[],R;for(var b3 in b2){if(b2[ah](b3)&&bg.test(b3)){bT={value:b2[b3]};
b3=="from"&&(b3=0);b3=="to"&&(b3=100);bT.key=U(b3,10);bQ.push(bT)}}bQ.sort(bn);if(bQ[0].key){bQ.unshift({key:0,value:e.attrs})
}for(bZ=0,bM=bQ[t];bZ<bM;bZ++){bz(bQ[bZ].value,e,bS/100*bQ[bZ].key,bS/100*(bQ[bZ-1]&&bQ[bZ-1].key||0),bQ[bZ-1]&&bQ[bZ-1].value.callback)
}R=bQ[bQ[t]-1].value.callback;if(R){e.timeouts.push(setTimeout(function(){R.call(e)
},bS))}}else{var bX=aJ.easing_formulas[bR];if(!bX){bX=bD(bR).match(c);if(bX&&bX[t]==5){var bO=bX;
bX=function(i){return aZ(i,+bO[1],+bO[2],+bO[3],+bO[4],bS)}}else{bX=function(i){return i
}}}Y.push({start:b2.start||+new Date,ms:bS,easing:bX,from:bW,diff:bN,to:E,el:e,t:{x:0,y:0}});
aJ.is(S,"function")&&(e._ac=setTimeout(function(){S.call(e)},bS));Y[t]==1&&setTimeout(bv)
}return this};bd.stop=function(){for(var b=0;b<Y.length;b++){Y[b].el.id==this.id&&Y.splice(b--,1)
}for(b=0,ii=this.timeouts&&this.timeouts.length;b<ii;b++){clearTimeout(this.timeouts[b])
}this.timeouts=[];clearTimeout(this._ac);delete this._ac;return this};bd.translate=function(b,e){return this.attr({translation:b+" "+e})
};bd[a1]=function(){return"Rapha\xebl\u2019s object"};aJ.ae=Y;var ai=function(b){this.items=[];
this[t]=0;this.type="set";if(b){for(var e=0,E=b[t];e<E;e++){if(b[e]&&(b[e].constructor==aV||b[e].constructor==ai)){this[this.items[t]]=this.items[this.items[t]]=b[e];
this[t]++}}}};ai[bF][k]=function(){var R,b;for(var e=0,E=arguments[t];e<E;e++){R=arguments[e];
if(R&&(R.constructor==aV||R.constructor==ai)){b=this.items[t];this[b]=this.items[b]=R;
this[t]++}}return this};ai[bF].pop=function(){delete this[this[t]--];return this.items.pop()
};for(var I in bd){if(bd[ah](I)){ai[bF][I]=(function(b){return function(){for(var e=0,E=this.items[t];
e<E;e++){this.items[e][b][bC](this.items[e],arguments)}return this}})(I)}}ai[bF].attr=function(e,bI){if(e&&aJ.is(e,a8)&&aJ.is(e[0],"object")){for(var b=0,S=e[t];
b<S;b++){this.items[b].attr(e[b])}}else{for(var E=0,R=this.items[t];E<R;E++){this.items[E].attr(e,bI)
}}return this};ai[bF].animate=function(e,b,bI,bK){(aJ.is(bI,"function")||!bI)&&(bK=bI||null);
var S=this.items[t],E=S,bL,bJ=this,R;bK&&(R=function(){!--S&&bK.call(bJ)});bI=aJ.is(bI,ag)?bI:R;
bL=this.items[--E].animate(e,b,bI,R);while(E--){this.items[E]&&!this.items[E].removed&&this.items[E].animateWith(bL,e,b,bI,R)
}return this};ai[bF].insertAfter=function(e){var b=this.items[t];while(b--){this.items[b].insertAfter(e)
}return this};ai[bF].getBBox=function(){var b=[],bI=[],e=[],R=[];for(var E=this.items[t];
E--;){var S=this.items[E].getBBox();b[k](S.x);bI[k](S.y);e[k](S.x+S.width);R[k](S.y+S.height)
}b=bj[bC](0,b);bI=bj[bC](0,bI);return{x:b,y:bI,width:m[bC](0,e)-b,height:m[bC](0,R)-bI}
};ai[bF].clone=function(E){E=new ai;for(var b=0,e=this.items[t];b<e;b++){E[k](this.items[b].clone())
}return E};aJ.registerFont=function(e){if(!e.face){return e}this.fonts=this.fonts||{};
var E={w:e.w,face:{},glyphs:{}},i=e.face["font-family"];for(var bI in e.face){if(e.face[ah](bI)){E.face[bI]=e.face[bI]
}}if(this.fonts[i]){this.fonts[i][k](E)}else{this.fonts[i]=[E]}if(!e.svg){E.face["units-per-em"]=U(e.face["units-per-em"],10);
for(var R in e.glyphs){if(e.glyphs[ah](R)){var S=e.glyphs[R];E.glyphs[R]={w:S.w,k:{},d:S.d&&"M"+S.d[bt](/[mlcxtrv]/g,function(bJ){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[bJ]||"M"
})+"z"};if(S.k){for(var b in S.k){if(S[ah](b)){E.glyphs[R].k[b]=S.k[b]}}}}}}return e
};a0.getFont=function(bK,bL,e,R){R=R||"normal";e=e||"normal";bL=+bL||{normal:400,bold:700,lighter:300,bolder:800}[bL]||400;
if(!aJ.fonts){return}var S=aJ.fonts[bK];if(!S){var E=new RegExp("(^|\\s)"+bK[bt](/[^\w\d\s+!~.:_-]/g,aQ)+"(\\s|$)","i");
for(var b in aJ.fonts){if(aJ.fonts[ah](b)){if(E.test(b)){S=aJ.fonts[b];break}}}}var bI;
if(S){for(var bJ=0,bM=S[t];bJ<bM;bJ++){bI=S[bJ];if(bI.face["font-weight"]==bL&&(bI.face["font-style"]==e||!bI.face["font-style"])&&bI.face["font-stretch"]==R){break
}}}return bI};a0.print=function(S,R,b,bK,bL,bU,e){bU=bU||"middle";e=m(bj(e||0,1),-1);
var bQ=this.set(),bT=bD(b)[J](aQ),bR=0,bO=aQ,bV;aJ.is(bK,b)&&(bK=this.getFont(bK));
if(bK){bV=(bL||16)/bK.face["units-per-em"];var E=bK.face.bbox.split(a),bJ=+E[0],bM=+E[1]+(bU=="baseline"?E[3]-E[1]+(+bK.face.descent):(E[3]-E[1])/2);
for(var bP=0,bI=bT[t];bP<bI;bP++){var bN=bP&&bK.glyphs[bT[bP-1]]||{},bS=bK.glyphs[bT[bP]];
bR+=bP?(bN.w||bK.w)+(bN.k&&bN.k[bT[bP]]||0)+(bK.w*e):0;bS&&bS.d&&bQ[k](this.path(bS.d).attr({fill:"#000",stroke:"none",translation:[bR,0]}))
}bQ.scale(bV,bV,bJ,bM).translate(S-bJ,R-bM)}return bQ};aJ.format=function(e,i){var b=aJ.is(i,a8)?[0][bx](i):arguments;
e&&aJ.is(e,ag)&&b[t]-1&&(e=e[bt](bo,function(R,E){return b[++E]==null?aQ:b[E]}));
return e||aQ};aJ.ninja=function(){s.was?(aR.Raphael=s.is):delete Raphael;return aJ
};aJ.el=bd;aJ.st=ai[bF];s.was?(aR.Raphael=aJ):(Raphael=aJ)})();
/*
 * Color Picker 0.1.0 - Raphael plugin
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Based on Color Wheel (http://jweir.github.com/colorwheel) by John Weir (http://famedriver.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
sc_require("raphael");
(function(a){a.colorpicker=function(h,l,j,k,i){return new b(h,l,j,k,i)};a.fn.colorPickerIcon=function(h,o,m){var k=f*m*2/Math.min(m/8,4);
var j=f/2-f*2/k*1.5,n=["M",h,o-m,"A",m,m,0,0,1,m*Math.cos(j)+h,o-m*Math.sin(j),"L",h,o,"z"].join();
for(var l=0;l<k;l++){this.path(n).attr({stroke:"none",fill:"hsb("+(k-l)*(360/k)+", 100, 100)",rotation:[90+(360/k)*l,h,o]})
}return this.circle(h,o,m).attr({fill:"r#fff-#fff","fill-opacity":0,"stroke-width":Math.round(m*0.03),stroke:"#fff"})
};var f=Math.PI;function g(h,i){return(h<0)*180+Math.atan(-i/-h)*180/f}var e=document,c=window,b=function(q,o,E,j,i){E=E||200;
var p=3*E/200,v=E/200,w=1.6180339887,K=E/20,n=E/2,C=2*E/200,F=E+K*2+C*3,z=this,u=1,k=1,G=1,A=E-(K*4),D=i?a(i,E,F):a(q,o,E,F),l=A/6+K*2+C,m=A*2/3-C*2;
v<1&&(v=1);p<1&&(p=1);D.colorPickerIcon(n,n,n-C);z.cursor=D.set();z.cursor.push(D.circle(n,n,K/2).attr({stroke:"#000",opacity:0.5,"stroke-width":p}));
z.cursor.push(z.cursor[0].clone().attr({stroke:"#fff",opacity:1,"stroke-width":v}));
z.disc=D.circle(n,n,n-C).attr({fill:"#000","fill-opacity":0,stroke:"none",cursor:"crosshair"});
var J=z.disc.node.style;J.unselectable="on";J.MozUserSelect="none";J.WebkitUserSelect="none";
var I=K*2+2;z.brect=D.rect(C+I/w/2,E+C*2,E-C*2-I/w,I-C*2).attr({stroke:"#fff",fill:"180-#fff-#000"});
z.cursorb=D.set();z.cursorb.push(D.rect(E-C-I/w,E+C,~~(I/w),I,p).attr({stroke:"#000",opacity:0.5,"stroke-width":p}));
z.cursorb.push(z.cursorb[0].clone().attr({stroke:"#fff",opacity:1,"stroke-width":v}));
z.btop=z.brect.clone().attr({stroke:"#000",fill:"#000",opacity:0});J=z.btop.node.style;
J.unselectable="on";J.MozUserSelect="none";J.WebkitUserSelect="none";z.bwidth=~~(I/w)/2;
z.minx=C+z.bwidth;z.maxx=E-I/w-C+z.bwidth;z.H=z.S=z.B=1;z.padding=C;z.raphael=D;z.size2=n;
z.size20=K;z.x=q;z.y=o;z.disc.drag(function(t,s,h,B){z.docOnMove(t,s,h,B)},function(h,B){var s=e.documentElement.scrollTop||e.body.scrollTop,t=e.documentElement.scrollLeft||e.body.scrollLeft;
z.hsOnTheMove=true;z.setHS(h+t-z.x,B+s-z.y)},function(){z.hsOnTheMove=false});z.btop.drag(function(t,s,h,B){z.docOnMove(t,s,h,B)
},function(h,t){var s=e.documentElement.scrollLeft||e.body.scrollLeft;z.bOnTheMove=true;
z.setB(h+s-z.x)},function(){z.bOnTheMove=false});z.color(j||"#fff");this.onchanged&&this.onchanged(this.color())
};b.prototype.setB=function(h){h<this.minx&&(h=this.minx);h>this.maxx&&(h=this.maxx);
this.cursorb.attr({x:h-this.bwidth});this.B=(h-this.minx)/(this.maxx-this.minx);this.onchange&&this.onchange(this.color())
};b.prototype.setHS=function(h,n){var m=h-this.size2,l=n-this.size2,i=this.size2-this.size20/2-this.padding,k=g(m,l),j=k*f/180;
isNaN(k)&&(k=0);if(m*m+l*l>i*i){h=i*Math.cos(j)+this.size2;n=i*Math.sin(j)+this.size2
}this.cursor.attr({cx:h,cy:n});this.H=(1-k/360)%1;this.S=Math.min((m*m+l*l)/i/i,1);
this.brect.attr({fill:"180-hsl("+[this.H,this.S]+",1)-#000"});this.onchange&&this.onchange(this.color())
};b.prototype.docOnMove=function(j,i,h,m){var k=e.documentElement.scrollTop||e.body.scrollTop,l=e.documentElement.scrollLeft||e.body.scrollLeft;
if(this.hsOnTheMove){this.setHS(h+l-this.x,m+k-this.y)}if(this.bOnTheMove){this.setB(h+l-this.x)
}};b.prototype.remove=function(){this.raphael.remove();this.color=function(){return false
}};b.prototype.color=function(i){if(i){i=a.getRGB(i);var l=i.hex;i=a.rgb2hsb(i.r,i.g,i.b);
m=i.h*360;this.H=i.h;this.S=i.s;this.B=i.b;this.cursorb.attr({x:this.B*(this.maxx-this.minx)+this.minx-this.bwidth});
this.brect.attr({fill:"180-hsl("+[this.H,this.S]+",1)-#000"});var m=(1-this.H)*360,k=m*f/180,j=(this.size2-this.size20/2-this.padding)*this.S,h=Math.cos(k)*j+this.size2,n=Math.sin(k)*j+this.size2;
this.cursor.attr({cx:h,cy:n});return this}else{return a.hsb2rgb(this.H,this.S,this.B).hex
}}})(window.Raphael);sc_require("color_picker/colorwheel");(function(a){a.colorwheel=function(i,m,k,l,j){return new b(i,m,k,l,j)
};var g=Math.PI;function h(i,j){return(i<0)*180+Math.atan(-j/-i)*180/g}var f=document,e=window;
var c=(function(){if(f.addEventListener){return function(m,k,j,i){var l=function(n){return j.call(i,n)
};m.addEventListener(k,l,false);return function(){m.removeEventListener(k,l,false);
return true}}}else{if(f.attachEvent){return function(n,l,k,j){var m=function(o){return k.call(j,o||e.event)
};n.attachEvent("on"+l,m);var i=function(){n.detachEvent("on"+l,m);return true};return i
}}}})();var b=function(v,q,G,k,j){G=G||200;var u=3*G/200,z=G/200,A=1.6180339887,K=g*G/5,P=G/20,p=G/2,E=2*G/200,C=this;
var w=1,l=1,I=1,D=G-(P*4);var F=j?a(j,G,G):a(v,q,G,G),n=D/6+P*2+E,o=D*2/3-E*2;z<1&&(z=1);
u<1&&(u=1);var O=g/2-g*2/K*1.3,m=p-E,N=p-E-P*2,J=["M",p,E,"A",m,m,0,0,1,m*Math.cos(O)+m+E,m-m*Math.sin(O)+E,"L",N*Math.cos(O)+m+E,m-N*Math.sin(O)+E,"A",N,N,0,0,0,p,E+P*2,"z"].join();
for(var L=0;L<K;L++){F.path(J).attr({stroke:"none",fill:"hsb("+L*(255/K)+", 255, 200)",rotation:[(360/K)*L,p,p]})
}F.path(["M",p,E,"A",m,m,0,1,1,p-1,E,"l1,0","M",p,E+P*2,"A",N,N,0,1,1,p-1,E+P*2,"l1,0"]).attr({"stroke-width":u,stroke:"#fff"});
C.cursorhsb=F.set();var M=P*2+2;C.cursorhsb.push(F.rect(p-M/A/2,E-1,M/A,M,3*G/200).attr({stroke:"#000",opacity:0.5,"stroke-width":u}));
C.cursorhsb.push(C.cursorhsb[0].clone().attr({stroke:"#fff",opacity:1,"stroke-width":z}));
C.ring=F.path(["M",p,E,"A",m,m,0,1,1,p-1,E,"l1,0M",p,E+P*2,"A",N,N,0,1,1,p-1,E+P*2,"l1,0"]).attr({fill:"#000",opacity:0,stroke:"none"});
C.main=F.rect(n,n,o,o).attr({stroke:"none",fill:"#f00",opacity:1});C.main.clone().attr({stroke:"none",fill:"0-#fff-#fff",opacity:0});
C.square=F.rect(n-1,n-1,o+2,o+2).attr({r:2,stroke:"#fff","stroke-width":u,fill:"90-#000-#000",opacity:0,cursor:"crosshair"});
C.cursor=F.set();C.cursor.push(F.circle(p,p,P/2).attr({stroke:"#000",opacity:0.5,"stroke-width":u}));
C.cursor.push(C.cursor[0].clone().attr({stroke:"#fff",opacity:1,"stroke-width":z}));
C.H=C.S=C.B=1;C.raphael=F;C.size2=p;C.wh=o;C.x=v;C.xy=n;C.y=q;C.hsbon=c(C.ring.node,"mousedown",function(i){this.hsbOnTheMove=true;
this.setH(i.clientX-this.x-this.size2,i.clientY-this.y-this.size2);this.docmove=c(f,"mousemove",this.docOnMove,this);
this.docup=c(f,"mouseup",this.docOnUp,this)},C);C.clron=c(C.square.node,"mousedown",function(i){this.clrOnTheMove=true;
this.setSB(i.clientX-this.x,i.clientY-this.y);this.docmove=c(f,"mousemove",this.docOnMove,this);
this.docup=c(f,"mouseup",this.docOnUp,this)},C);C.winunload=c(e,"unload",function(){this.hsbon();
this.clron();this.docmove&&this.docmove();this.docup&&this.docup();this.winunload()
},C);C.color(k||"#f00");this.onchanged&&this.onchanged(this.color())};b.prototype.setH=function(i,l){var k=h(i,l),j=k*g/180;
this.cursorhsb.rotate(k+90,this.size2,this.size2);this.H=(k+90)/360;this.main.attr({fill:"hsb("+this.H+",1,1)"});
this.onchange&&this.onchange(this.color())};b.prototype.setSB=function(i,j){i<this.size2-this.wh/2&&(i=this.size2-this.wh/2);
i>this.size2+this.wh/2&&(i=this.size2+this.wh/2);j<this.size2-this.wh/2&&(j=this.size2-this.wh/2);
j>this.size2+this.wh/2&&(j=this.size2+this.wh/2);this.cursor.attr({cx:i,cy:j});this.B=1-(j-this.xy)/this.wh;
this.S=(i-this.xy)/this.wh;this.onchange&&this.onchange(this.color())};b.prototype.docOnMove=function(i){if(this.hsbOnTheMove){this.setH(i.clientX-this.x-this.size2,i.clientY-this.y-this.size2)
}if(this.clrOnTheMove){this.setSB(i.clientX-this.x,i.clientY-this.y)}i.preventDefault&&i.preventDefault();
i.returnValue=false;return false};b.prototype.docOnUp=function(i){this.hsbOnTheMove=this.clrOnTheMove=false;
if(this.docmove){this.docmove()}delete this.docmove;if(this.docup){this.docup()}delete this.docup;
this.onchanged&&this.onchanged(this.color())};b.prototype.remove=function(){this.raphael.remove();
this.color=function(){return false}};b.prototype.color=function(j){if(j){j=a.getRGB(j);
j=a.rgb2hsb(j.r,j.g,j.b);var k=j.h*360;this.H=j.h;this.S=j.s;this.B=j.b;this.cursorhsb.rotate(k,this.size2,this.size2);
this.main.attr({fill:"hsb("+this.H+",1,1)"});var i=this.S*this.wh+this.xy,l=(1-this.B)*this.wh+this.xy;
this.cursor.attr({cx:i,cy:l});return this}else{return a.hsb2rgb(this.H,this.S,this.B).hex
}}})(window.Raphael);sc_require("raphael");(function(){Raphael.fn.g=Raphael.fn.g||{};
Raphael.fn.g.markers={disc:"disc",o:"disc",flower:"flower",f:"flower",diamond:"diamond",d:"diamond",square:"square",s:"square",triangle:"triangle",t:"triangle",star:"star","*":"star",cross:"cross",x:"cross",plus:"plus","+":"plus",arrow:"arrow","->":"arrow"};
Raphael.fn.g.shim={stroke:"none",fill:"#000","fill-opacity":0};Raphael.fn.g.txtattr={font:"12px Arial, sans-serif"};
Raphael.fn.g.colors=[];var b=[0.6,0.2,0.05,0.1333,0.75,0];for(var a=0;a<10;a++){if(a<b.length){Raphael.fn.g.colors.push("hsb("+b[a]+", .75, .75)")
}else{Raphael.fn.g.colors.push("hsb("+b[a-b.length]+", 1, .5)")}}Raphael.fn.g.text=function(c,f,e){return this.text(c,f,e).attr(this.g.txtattr)
};Raphael.fn.g.labelise=function(c,f,e){if(c){return(c+"").replace(/(##+(?:\.#+)?)|(%%+(?:\.%+)?)/g,function(g,i,h){if(i){return(+f).toFixed(i.replace(/^#+\.?/g,"").length)
}if(h){return(f*100/e).toFixed(h.replace(/^%+\.?/g,"").length)+"%"}})}else{return(+f).toFixed(0)
}};Raphael.fn.g.finger=function(j,i,e,k,f,g,h){if((f&&!k)||(!f&&!e)){return h?"":this.path()
}g={square:"square",sharp:"sharp",soft:"soft"}[g]||"round";var m;k=Math.round(k);
e=Math.round(e);j=Math.round(j);i=Math.round(i);switch(g){case"round":if(!f){var c=Math.floor(k/2);
if(e<c){c=e;m=["M",j+0.5,i+0.5-Math.floor(k/2),"l",0,0,"a",c,Math.floor(k/2),0,0,1,0,k,"l",0,0,"z"]
}else{m=["M",j+0.5,i+0.5-c,"l",e-c,0,"a",c,c,0,1,1,0,k,"l",c-e,0,"z"]}}else{var c=Math.floor(e/2);
if(k<c){c=k;m=["M",j-Math.floor(e/2),i,"l",0,0,"a",Math.floor(e/2),c,0,0,1,e,0,"l",0,0,"z"]
}else{m=["M",j-c,i,"l",0,c-k,"a",c,c,0,1,1,e,0,"l",0,k-c,"z"]}}break;case"sharp":if(!f){var l=Math.floor(k/2);
m=["M",j,i+l,"l",0,-k,Math.max(e-l,0),0,Math.min(l,e),l,-Math.min(l,e),l+(l*2<k),"z"]
}else{var l=Math.floor(e/2);m=["M",j+l,i,"l",-e,0,0,-Math.max(k-l,0),l,-Math.min(l,k),l,Math.min(l,k),l,"z"]
}break;case"square":if(!f){m=["M",j,i+Math.floor(k/2),"l",0,-k,e,0,0,k,"z"]}else{m=["M",j+Math.floor(e/2),i,"l",1-e,0,0,-k,e-1,0,"z"]
}break;case"soft":var c;if(!f){c=Math.min(e,Math.round(k/5));m=["M",j+0.5,i+0.5-Math.floor(k/2),"l",e-c,0,"a",c,c,0,0,1,c,c,"l",0,k-c*2,"a",c,c,0,0,1,-c,c,"l",c-e,0,"z"]
}else{c=Math.min(Math.round(e/5),k);m=["M",j-Math.floor(e/2),i,"l",0,c-k,"a",c,c,0,0,1,c,-c,"l",e-2*c,0,"a",c,c,0,0,1,c,c,"l",0,k-c,"z"]
}}if(h){return m.join(",")}else{return this.path(m)}};Raphael.fn.g.disc=function(c,f,e){return this.circle(c,f,e)
};Raphael.fn.g.line=function(c,f,e){return this.rect(c-e,f-e/5,2*e,2*e/5)};Raphael.fn.g.square=function(c,f,e){e=e*0.7;
return this.rect(c-e,f-e,2*e,2*e)};Raphael.fn.g.triangle=function(c,f,e){e*=1.75;
return this.path("M".concat(c,",",f,"m0-",e*0.58,"l",e*0.5,",",e*0.87,"-",e,",0z"))
};Raphael.fn.g.diamond=function(c,f,e){return this.path(["M",c,f-e,"l",e,e,-e,e,-e,-e,e,-e,"z"])
};Raphael.fn.g.flower=function(g,f,c,e){c=c*1.25;var l=c,k=l*0.5;e=+e<3||!e?5:e;var m=["M",g,f+k,"Q"],j;
for(var h=1;h<e*2+1;h++){j=h%2?l:k;m=m.concat([+(g+j*Math.sin(h*Math.PI/e)).toFixed(3),+(f+j*Math.cos(h*Math.PI/e)).toFixed(3)])
}m.push("z");return this.path(m.join(","))};Raphael.fn.g.star=function(c,k,j,e){e=e||j*0.5;
var h=["M",c,k+e,"L"],g;for(var f=1;f<10;f++){g=f%2?j:e;h=h.concat([(c+g*Math.sin(f*Math.PI*0.2)).toFixed(3),(k+g*Math.cos(f*Math.PI*0.2)).toFixed(3)])
}h.push("z");return this.path(h.join(","))};Raphael.fn.g.cross=function(c,f,e){e=e/2.5;
return this.path("M".concat(c-e,",",f,"l",[-e,-e,e,-e,e,e,e,-e,e,e,-e,e,e,e,-e,e,-e,-e,-e,e,-e,-e,"z"]))
};Raphael.fn.g.plus=function(c,f,e){e=e/2;return this.path("M".concat(c-e/2,",",f-e/2,"l",[0,-e,e,0,0,e,e,0,0,e,-e,0,0,e,-e,0,0,-e,-e,0,0,-e,"z"]))
};Raphael.fn.g.arrow=function(c,f,e){return this.path("M".concat(c-e*0.7,",",f-e*0.4,"l",[e*0.6,0,0,-e*0.4,e,e*0.8,-e,e*0.8,0,-e*0.4,-e*0.6,0],"z"))
};Raphael.fn.g.tag=function(c,k,j,i,g){i=i||0;g=g==null?5:g;j=j==null?"$9.99":j;var f=0.5522*g,e=this.set(),h=3;
e.push(this.path().attr({fill:"#000",stroke:"none"}));e.push(this.text(c,k,j).attr(this.g.txtattr).attr({fill:"#fff"}));
e.update=function(){this.rotate(0,c,k);var m=this[1].getBBox();if(m.height>=g*2){this[0].attr({path:["M",c,k+g,"a",g,g,0,1,1,0,-g*2,g,g,0,1,1,0,g*2,"m",0,-g*2-h,"a",g+h,g+h,0,1,0,0,(g+h)*2,"L",c+g+h,k+m.height/2+h,"l",m.width+2*h,0,0,-m.height-2*h,-m.width-2*h,0,"L",c,k-g-h].join(",")})
}else{var l=Math.sqrt(Math.pow(g+h,2)-Math.pow(m.height/2+h,2));this[0].attr({path:["M",c,k+g,"c",-f,0,-g,f-g,-g,-g,0,-f,g-f,-g,g,-g,f,0,g,g-f,g,g,0,f,f-g,g,-g,g,"M",c+l,k-m.height/2-h,"a",g+h,g+h,0,1,0,0,m.height+2*h,"l",g+h-l+m.width+2*h,0,0,-m.height-2*h,"L",c+l,k-m.height/2-h].join(",")})
}this[1].attr({x:c+g+h+m.width/2,y:k});i=(360-i)%360;this.rotate(i,c,k);i>90&&i<270&&this[1].attr({x:c-g-h-m.width/2,y:k,rotation:[180+i,c,k]});
return this};e.update();return e};Raphael.fn.g.popupit=function(j,i,k,e,q){e=e==null?2:e;
q=q||5;j=Math.round(j)+0.5;i=Math.round(i)+0.5;var g=k.getBBox(),l=Math.round(g.width/2),f=Math.round(g.height/2),o=[0,l+q*2,0,-l-q*2],m=[-f*2-q*3,-f-q,0,-f-q],c=["M",j-o[e],i-m[e],"l",-q,(e==2)*-q,-Math.max(l-q,0),0,"a",q,q,0,0,1,-q,-q,"l",0,-Math.max(f-q,0),(e==3)*-q,-q,(e==3)*q,-q,0,-Math.max(f-q,0),"a",q,q,0,0,1,q,-q,"l",Math.max(l-q,0),0,q,!e*-q,q,!e*q,Math.max(l-q,0),0,"a",q,q,0,0,1,q,q,"l",0,Math.max(f-q,0),(e==1)*q,q,(e==1)*-q,q,0,Math.max(f-q,0),"a",q,q,0,0,1,-q,q,"l",-Math.max(l-q,0),0,"z"].join(","),n=[{x:j,y:i+q*2+f},{x:j-q*2-l,y:i},{x:j,y:i-q*2-f},{x:j+q*2+l,y:i}][e];
k.translate(n.x-l-g.x,n.y-f-g.y);return this.path(c).attr({fill:"#000",stroke:"none"}).insertBefore(k.node?k:k[0])
};Raphael.fn.g.popup=function(c,j,i,e,g){e=e==null?2:e;g=g||5;i=i||"$9.99";var f=this.set(),h=3;
f.push(this.path().attr({fill:"#000",stroke:"none"}));f.push(this.text(c,j,i).attr(this.g.txtattr).attr({fill:"#fff"}));
f.update=function(m,l,n){m=m||c;l=l||j;var q=this[1].getBBox(),s=q.width/2,o=q.height/2,v=[0,s+g*2,0,-s-g*2],t=[-o*2-g*3,-o-g,0,-o-g],k=["M",m-v[e],l-t[e],"l",-g,(e==2)*-g,-Math.max(s-g,0),0,"a",g,g,0,0,1,-g,-g,"l",0,-Math.max(o-g,0),(e==3)*-g,-g,(e==3)*g,-g,0,-Math.max(o-g,0),"a",g,g,0,0,1,g,-g,"l",Math.max(s-g,0),0,g,!e*-g,g,!e*g,Math.max(s-g,0),0,"a",g,g,0,0,1,g,g,"l",0,Math.max(o-g,0),(e==1)*g,g,(e==1)*-g,g,0,Math.max(o-g,0),"a",g,g,0,0,1,-g,g,"l",-Math.max(s-g,0),0,"z"].join(","),u=[{x:m,y:l+g*2+o},{x:m-g*2-s,y:l},{x:m,y:l-g*2-o},{x:m+g*2+s,y:l}][e];
if(n){this[0].animate({path:k},500,">");this[1].animate(u,500,">")}else{this[0].attr({path:k});
this[1].attr(u)}return this};return f.update(c,j)};Raphael.fn.g.flag=function(c,i,h,g){g=g||0;
h=h||"$9.99";var e=this.set(),f=3;e.push(this.path().attr({fill:"#000",stroke:"none"}));
e.push(this.text(c,i,h).attr(this.g.txtattr).attr({fill:"#fff"}));e.update=function(j,m){this.rotate(0,j,m);
var l=this[1].getBBox(),k=l.height/2;this[0].attr({path:["M",j,m,"l",k+f,-k-f,l.width+2*f,0,0,l.height+2*f,-l.width-2*f,0,"z"].join(",")});
this[1].attr({x:j+k+f+l.width/2,y:m});g=360-g;this.rotate(g,j,m);g>90&&g<270&&this[1].attr({x:j-r-f-l.width/2,y:m,rotation:[180+g,j,m]});
return this};return e.update(c,i)};Raphael.fn.g.label=function(c,g,f){var e=this.set();
e.push(this.rect(c,g,10,10).attr({stroke:"none",fill:"#000"}));e.push(this.text(c,g,f).attr(this.g.txtattr).attr({fill:"#fff"}));
e.update=function(){var i=this[1].getBBox(),h=Math.min(i.width+10,i.height+10)/2;
this[0].attr({x:i.x-h/2,y:i.y-h/2,width:i.width+h,height:i.height+h,r:h})};e.update();
return e};Raphael.fn.g.labelit=function(f){var e=f.getBBox(),c=Math.min(20,e.width+10,e.height+10)/2;
return this.rect(e.x-c/2,e.y-c/2,e.width+c,e.height+c,c).attr({stroke:"none",fill:"#000"}).insertBefore(f[0])
};Raphael.fn.g.drop=function(c,i,h,f,g){f=f||30;g=g||0;var e=this.set();e.push(this.path(["M",c,i,"l",f,0,"A",f*0.4,f*0.4,0,1,0,c+f*0.7,i-f*0.7,"z"]).attr({fill:"#000",stroke:"none",rotation:[22.5-g,c,i]}));
g=(g+90)*Math.PI/180;e.push(this.text(c+f*Math.sin(g),i+f*Math.cos(g),h).attr(this.g.txtattr).attr({"font-size":f*12/30,fill:"#fff"}));
e.drop=e[0];e.text=e[1];return e};Raphael.fn.g.blob=function(e,k,j,i,g){i=(+i+1?i:45)+90;
g=g||12;var c=Math.PI/180,h=g*12/12;var f=this.set();f.push(this.path().attr({fill:"#000",stroke:"none"}));
f.push(this.text(e+g*Math.sin((i)*c),k+g*Math.cos((i)*c)-h/2,j).attr(this.g.txtattr).attr({"font-size":h,fill:"#fff"}));
f.update=function(q,p,v){q=q||e;p=p||k;var y=this[1].getBBox(),B=Math.max(y.width+h,g*25/12),x=Math.max(y.height+h,g*25/12),m=q+g*Math.sin((i-22.5)*c),z=p+g*Math.cos((i-22.5)*c),o=q+g*Math.sin((i+22.5)*c),A=p+g*Math.cos((i+22.5)*c),D=(o-m)/2,C=(A-z)/2,n=B/2,l=x/2,u=-Math.sqrt(Math.abs(n*n*l*l-n*n*C*C-l*l*D*D)/(n*n*C*C+l*l*D*D)),t=u*n*C/l+(o+m)/2,s=u*-l*D/n+(A+z)/2;
if(v){this.animate({x:t,y:s,path:["M",e,k,"L",o,A,"A",n,l,0,1,1,m,z,"z"].join(",")},500,">")
}else{this.attr({x:t,y:s,path:["M",e,k,"L",o,A,"A",n,l,0,1,1,m,z,"z"].join(",")})
}return this};f.update(e,k);return f};Raphael.fn.g.colorValue=function(g,f,e,c){return"hsb("+[Math.min((1-g/f)*0.4,1),e||0.75,c||0.75]+")"
};Raphael.fn.g.snapEnds=function(l,m,k){var h=l,n=m;if(h==n){return{from:h,to:n,power:0}
}function o(f){return Math.abs(f-0.5)<0.25?Math.floor(f)+0.5:Math.round(f)}var j=(n-h)/k,c=Math.floor(j),g=c,e=0;
if(c){while(g){e--;g=Math.floor(j*Math.pow(10,e))/Math.pow(10,e)}e++}else{while(!c){e=e||1;
c=Math.floor(j*Math.pow(10,e))/Math.pow(10,e);e++}e&&e--}var n=o(m*Math.pow(10,e))/Math.pow(10,e);
if(n<m){n=o((m+0.5)*Math.pow(10,e))/Math.pow(10,e)}var h=o((l-(e>0?0:0.5))*Math.pow(10,e))/Math.pow(10,e);
return{from:h,to:n,power:e}};Raphael.fn.g.axis=function(s,q,m,E,h,H,k,J,l,c){c=c==null?2:c;
l=l||"t";H=H||10;var D=l=="|"||l==" "?["M",s+0.5,q,"l",0,0.001]:k==1||k==3?["M",s+0.5,q,"l",0,-m]:["M",s,q+0.5,"l",m,0],v=this.g.snapEnds(E,h,H),I=v.from,z=v.to,G=v.power,F=0,A=this.set();
d=(z-I)/H;var p=I,o=G>0?G:0;u=m/H;if(+k==1||+k==3){var e=q,w=(k-1?1:-1)*(c+3+!!(k-1));
while(e>=q-m){l!="-"&&l!=" "&&(D=D.concat(["M",s-(l=="+"||l=="|"?c:!(k-1)*c*2),e+0.5,"l",c*2+1,0]));
A.push(this.text(s+w,e,(J&&J[F++])||(Math.round(p)==p?p:+p.toFixed(o))).attr(this.g.txtattr).attr({"text-anchor":k-1?"start":"end"}));
p+=d;e-=u}if(Math.round(e+u-(q-m))){l!="-"&&l!=" "&&(D=D.concat(["M",s-(l=="+"||l=="|"?c:!(k-1)*c*2),q-m+0.5,"l",c*2+1,0]));
A.push(this.text(s+w,q-m,(J&&J[F])||(Math.round(p)==p?p:+p.toFixed(o))).attr(this.g.txtattr).attr({"text-anchor":k-1?"start":"end"}))
}}else{var g=s,p=I,o=G>0?G:0,w=(k?-1:1)*(c+9+!k),u=m/H,B=0,C=0;while(g<=s+m){l!="-"&&l!=" "&&(D=D.concat(["M",g+0.5,q-(l=="+"?c:!!k*c*2),"l",0,c*2+1]));
A.push(B=this.text(g,q+w,(J&&J[F++])||(Math.round(p)==p?p:+p.toFixed(o))).attr(this.g.txtattr));
var n=B.getBBox();if(C>=n.x-5){A.pop(A.length-1).remove()}else{C=n.x+n.width}p+=d;
g+=u}if(Math.round(g-u-s-m)){l!="-"&&l!=" "&&(D=D.concat(["M",s+m+0.5,q-(l=="+"?c:!!k*c*2),"l",0,c*2+1]));
A.push(this.text(s+m,q+w,(J&&J[F])||(Math.round(p)==p?p:+p.toFixed(o))).attr(this.g.txtattr))
}}var K=this.path(D);K.text=A;K.all=this.set([K,A]);K.remove=function(){this.text.remove();
this.constructor.prototype.remove.call(this)};return K};Raphael.el.lighter=function(e){e=e||2;
var c=[this.attrs.fill,this.attrs.stroke];this.fs=this.fs||[c[0],c[1]];c[0]=Raphael.rgb2hsb(Raphael.getRGB(c[0]).hex);
c[1]=Raphael.rgb2hsb(Raphael.getRGB(c[1]).hex);c[0].b=Math.min(c[0].b*e,1);c[0].s=c[0].s/e;
c[1].b=Math.min(c[1].b*e,1);c[1].s=c[1].s/e;this.attr({fill:"hsb("+[c[0].h,c[0].s,c[0].b]+")",stroke:"hsb("+[c[1].h,c[1].s,c[1].b]+")"})
};Raphael.el.darker=function(e){e=e||2;var c=[this.attrs.fill,this.attrs.stroke];
this.fs=this.fs||[c[0],c[1]];c[0]=Raphael.rgb2hsb(Raphael.getRGB(c[0]).hex);c[1]=Raphael.rgb2hsb(Raphael.getRGB(c[1]).hex);
c[0].s=Math.min(c[0].s*e,1);c[0].b=c[0].b/e;c[1].s=Math.min(c[1].s*e,1);c[1].b=c[1].b/e;
this.attr({fill:"hsb("+[c[0].h,c[0].s,c[0].b]+")",stroke:"hsb("+[c[1].h,c[1].s,c[1].b]+")"})
};Raphael.el.original=function(){if(this.fs){this.attr({fill:this.fs[0],stroke:this.fs[1]});
delete this.fs}}})();sc_require("graphing/graphael");Raphael.fn.g.barchart=function(E,C,a,e,Q,w){w=w||{};
var R={round:"round",sharp:"sharp",soft:"soft"}[w.type]||"square",o=parseFloat(w.gutter||"20%"),O=this.set(),z=this.set(),f=this.set(),u=this.set(),A=Math.max.apply(Math,Q),P=[],c=this,D=0,H=w.colors||this.g.colors,t=Q.length;
if(this.raphael.is(Q[0],"array")){A=[];D=t;t=0;for(var M=Q.length;M--;){z.push(this.set());
A.push(Math.max.apply(Math,Q[M]));t=Math.max(t,Q[M].length)}if(w.stacked){for(var M=t;
M--;){var m=0;for(var L=Q.length;L--;){m+=+Q[L][M]||0}P.push(m)}}for(var M=Q.length;
M--;){if(Q[M].length<t){for(var L=t;L--;){Q[M].push(0)}}}A=Math.max.apply(Math,w.stacked?P:A)
}A=(w.to)||A;var F=a/(t*(100+o)+o)*100,b=F*o/100,k=w.vgutter==null?20:w.vgutter,v=[],l=E+b,g=(e-2*k)/A;
if(!w.stretch){b=Math.round(b);F=Math.floor(F)}!w.stacked&&(F/=D||1);for(var M=0;
M<t;M++){v=[];for(var L=0;L<(D||1);L++){var N=Math.round((D?Q[L][M]:Q[M])*g),n=C+e-k-N,J=this.g.finger(Math.round(l+F/2),n+N,F,N,true,R).attr({stroke:H[D?L:M],fill:H[D?L:M]});
if(D){z[L].push(J)}else{z.push(J)}J.y=n;J.x=Math.round(l+F/2);J.w=F;J.h=N;J.value=D?Q[L][M]:Q[M];
if(!w.stacked){l+=F}else{v.push(J)}}if(w.stacked){var K;u.push(K=this.rect(v[0].x-v[0].w/2,C,F,e).attr(this.g.shim));
K.bars=this.set();var p=0;for(var G=v.length;G--;){v[G].toFront()}for(var G=0,q=v.length;
G<q;G++){var J=v[G],B,N=(p+J.value)*g,I=this.g.finger(J.x,C+e-k-!!p*0.5,F,N,true,R,1);
K.bars.push(J);p&&J.attr({path:I});J.h=N;J.y=C+e-k-!!p*0.5-N;f.push(B=this.rect(J.x-J.w/2,J.y,F,J.value*g).attr(this.g.shim));
B.bar=J;B.value=J.value;p+=J.value}l+=F}l+=b}u.toFront();l=E+b;if(!w.stacked){for(var M=0;
M<t;M++){for(var L=0;L<(D||1);L++){var B;f.push(B=this.rect(Math.round(l),C+k,F,e-k).attr(this.g.shim));
B.bar=D?z[L][M]:z[M];B.value=B.bar.value;l+=F}l+=b}}O.label=function(y,U){y=y||[];
this.labels=c.set();var V,h=-Infinity;if(w.stacked){for(var x=0;x<t;x++){var S=0;
for(var s=0;s<(D||1);s++){S+=D?Q[s][x]:Q[x];if(s==D-1){var W=c.g.labelise(y[x],S,A);
V=c.g.text(z[x*(D||1)+s].x,C+e-k/2,W).insertBefore(f[x*(D||1)+s]);var T=V.getBBox();
if(T.x-7<h){V.remove()}else{this.labels.push(V);h=T.x+T.width}}}}}else{for(var x=0;
x<t;x++){for(var s=0;s<(D||1);s++){var W=c.g.labelise(D?y[s]&&y[s][x]:y[x],D?Q[s][x]:Q[x],A);
V=c.g.text(z[x*(D||1)+s].x,U?C+e-k/2:z[x*(D||1)+s].y-10,W).insertBefore(f[x*(D||1)+s]);
var T=V.getBBox();if(T.x-7<h){V.remove()}else{this.labels.push(V);h=T.x+T.width}}}}return this
};O.hover=function(i,h){u.hide();f.show();f.mouseover(i).mouseout(h);return this};
O.hoverColumn=function(i,h){f.hide();u.show();h=h||function(){};u.mouseover(i).mouseout(h);
return this};O.click=function(h){u.hide();f.show();f.click(h);return this};O.each=function(j){if(!Raphael.is(j,"function")){return this
}for(var h=f.length;h--;){j.call(f[h])}return this};O.eachColumn=function(j){if(!Raphael.is(j,"function")){return this
}for(var h=u.length;h--;){j.call(u[h])}return this};O.clickColumn=function(h){f.hide();
u.show();u.click(h);return this};O.push(z,f,u);O.bars=z;O.covers=f;return O};Raphael.fn.g.hbarchart=function(o,m,D,A,c,u){u=u||{};
var f={round:"round",sharp:"sharp",soft:"soft"}[u.type]||"square",g=parseFloat(u.gutter||"20%"),w=this.set(),C=this.set(),k=this.set(),G=this.set(),O=Math.max.apply(Math,c),a=[],p=this,E=0,n=u.colors||this.g.colors,J=c.length;
if(this.raphael.is(c[0],"array")){O=[];E=J;J=0;for(var I=c.length;I--;){C.push(this.set());
O.push(Math.max.apply(Math,c[I]));J=Math.max(J,c[I].length)}if(u.stacked){for(var I=J;
I--;){var q=0;for(var H=c.length;H--;){q+=+c[H][I]||0}a.push(q)}}for(var I=c.length;
I--;){if(c[I].length<J){for(var H=J;H--;){c[I].push(0)}}}O=Math.max.apply(Math,u.stacked?a:O)
}O=(u.to)||O;var L=Math.floor(A/(J*(100+g)+g)*100),l=Math.floor(L*g/100),h=[],b=m+l,e=(D-1)/O;
!u.stacked&&(L/=E||1);for(var I=0;I<J;I++){h=[];for(var H=0;H<(E||1);H++){var N=E?c[H][I]:c[I],K=this.g.finger(o,b+L/2,Math.round(N*e),L-1,false,f).attr({stroke:n[E?H:I],fill:n[E?H:I]});
if(E){C[H].push(K)}else{C.push(K)}K.x=o+Math.round(N*e);K.y=b+L/2;K.w=Math.round(N*e);
K.h=L;K.value=+N;if(!u.stacked){b+=L}else{h.push(K)}}if(u.stacked){var t=this.rect(o,h[0].y-h[0].h/2,D,L).attr(this.g.shim);
G.push(t);t.bars=this.set();var z=0;for(var v=h.length;v--;){h[v].toFront()}for(var v=0,F=h.length;
v<F;v++){var K=h[v],M,N=Math.round((z+K.value)*e),B=this.g.finger(o,K.y,N,L-1,false,f,1);
t.bars.push(K);z&&K.attr({path:B});K.w=N;K.x=o+N;k.push(M=this.rect(o+z*e,K.y-K.h/2,K.value*e,L).attr(this.g.shim));
M.bar=K;z+=K.value}b+=L}b+=l}G.toFront();b=m+l;if(!u.stacked){for(var I=0;I<J;I++){for(var H=0;
H<E;H++){var M=this.rect(o,b,D,L).attr(this.g.shim);k.push(M);M.bar=C[H][I];b+=L}b+=l
}}w.label=function(T,R){T=T||[];this.labels=p.set();for(var Q=0;Q<J;Q++){for(var P=0;
P<E;P++){var y=p.g.labelise(E?T[P]&&T[P][Q]:T[Q],E?c[P][Q]:c[Q],O);var S=R?C[Q*(E||1)+P].x-L/2+3:o+5,x=R?"end":"start",s;
this.labels.push(s=p.g.text(S,C[Q*(E||1)+P].y,y).attr({"text-anchor":x}).insertBefore(k[0]));
if(s.getBBox().x<o+5){s.attr({x:o+5,"text-anchor":"start"})}else{C[Q*(E||1)+P].label=s
}}}return this};w.hover=function(j,i){G.hide();k.show();i=i||function(){};k.mouseover(j).mouseout(i);
return this};w.hoverColumn=function(j,i){k.hide();G.show();i=i||function(){};G.mouseover(j).mouseout(i);
return this};w.each=function(s){if(!Raphael.is(s,"function")){return this}for(var j=k.length;
j--;){s.call(k[j])}return this};w.eachColumn=function(s){if(!Raphael.is(s,"function")){return this
}for(var j=G.length;j--;){s.call(G[j])}return this};w.click=function(i){G.hide();
k.show();k.click(i);return this};w.clickColumn=function(i){k.hide();G.show();G.click(i);
return this};w.push(C,k,G);w.bars=C;w.covers=k;return w};sc_require("graphing/graphael");
Raphael.fn.g.dotchart=function(M,L,a,h,A,z,t,H){function T(b){+b[0]&&(b[0]=c.g.axis(M+s,L+s,a-2*s,D,o,H.axisxstep||Math.floor((a-2*s)/20),2,H.axisxlabels||null,H.axisxtype||"t"));
+b[1]&&(b[1]=c.g.axis(M+a-s,L+h-s,h-2*s,C,n,H.axisystep||Math.floor((h-2*s)/20),3,H.axisylabels||null,H.axisytype||"t"));
+b[2]&&(b[2]=c.g.axis(M+s,L+h-s+G,a-2*s,D,o,H.axisxstep||Math.floor((a-2*s)/20),0,H.axisxlabels||null,H.axisxtype||"t"));
+b[3]&&(b[3]=c.g.axis(M+s-G,L+h-s,h-2*s,C,n,H.axisystep||Math.floor((h-2*s)/20),1,H.axisylabels||null,H.axisytype||"t"))
}H=H||{};var w=this.g.snapEnds(Math.min.apply(Math,A),Math.max.apply(Math,A),A.length-1),D=w.from,o=w.to,s=H.gutter||10,K=this.g.snapEnds(Math.min.apply(Math,z),Math.max.apply(Math,z),z.length-1),C=K.from,n=K.to,B=Math.max(A.length,z.length,t.length),v=this.g.markers[H.symbol]||"disc",I=this.set(),u=this.set(),F=H.max||100,q=Math.max.apply(Math,t),p=[],c=this,P=Math.sqrt(q/Math.PI)*2/F;
for(var Q=0;Q<B;Q++){p[Q]=Math.min(Math.sqrt(t[Q]/Math.PI)*2/P,F)}s=Math.max.apply(Math,p.concat(s));
var E=this.set(),G=Math.max.apply(Math,p);if(H.axis){var m=(H.axis+"").split(/[,\s]+/);
T(m);var S=[],U=[];for(var Q=0,J=m.length;Q<J;Q++){var V=m[Q].all?m[Q].all.getBBox()[["height","width"][Q%2]]:0;
S[Q]=V+s;U[Q]=V}s=Math.max.apply(Math,S.concat(s));for(var Q=0,J=m.length;Q<J;Q++){if(m[Q].all){m[Q].remove();
m[Q]=1}}T(m);for(var Q=0,J=m.length;Q<J;Q++){if(m[Q].all){E.push(m[Q].all)}}I.axis=E
}var O=(a-s*2)/((o-D)||1),N=(h-s*2)/((n-C)||1);for(var Q=0,J=z.length;Q<J;Q++){var f=this.raphael.is(v,"array")?v[Q]:v,l=M+s+(A[Q]-D)*O,j=L+h-s-(z[Q]-C)*N;
f&&p[Q]&&u.push(this.g[f](l,j,p[Q]).attr({fill:H.heat?this.g.colorValue(p[Q],G):Raphael.fn.g.colors[0],"fill-opacity":H.opacity?p[Q]/F:1,stroke:"none"}))
}var e=this.set();for(var Q=0,J=z.length;Q<J;Q++){var l=M+s+(A[Q]-D)*O,j=L+h-s-(z[Q]-C)*N;
e.push(this.circle(l,j,G).attr(this.g.shim));H.href&&H.href[Q]&&e[Q].attr({href:H.href[Q]});
e[Q].r=+p[Q].toFixed(3);e[Q].x=+l.toFixed(3);e[Q].y=+j.toFixed(3);e[Q].X=A[Q];e[Q].Y=z[Q];
e[Q].value=t[Q]||0;e[Q].dot=u[Q]}I.covers=e;I.series=u;I.push(u,E,e);I.hover=function(g,b){e.mouseover(g).mouseout(b);
return this};I.click=function(b){e.click(b);return this};I.each=function(g){if(!Raphael.is(g,"function")){return this
}for(var b=e.length;b--;){g.call(e[b])}return this};I.href=function(k){var g;for(var b=e.length;
b--;){g=e[b];if(g.X==k.x&&g.Y==k.y&&g.value==k.value){g.attr({href:k.href})}}};return I
};sc_require("graphing/graphael");Raphael.fn.g.linechart=function(L,K,a,c,u,t,E){function D(y,aa){var x=y.length/aa,X=0,i=x,Z=0,Y=[];
while(X<y.length){i--;if(i<0){Z+=y[X]*(1+i);Y.push(Z/x);Z=y[X++]*-i;i+=x}else{Z+=y[X++]
}}return Y}E=E||{};if(!this.raphael.is(u[0],"array")){u=[u]}if(!this.raphael.is(t[0],"array")){t=[t]
}var Q=Array.prototype.concat.apply([],u),O=Array.prototype.concat.apply([],t),p=this.g.snapEnds(Math.min.apply(Math,Q),Math.max.apply(Math,Q),u[0].length-1),z=p.from,k=p.to,m=E.gutter||10,R=(a-m*2)/(k-z),I=this.g.snapEnds(Math.min.apply(Math,O),Math.max.apply(Math,O),t[0].length-1),w=I.from,h=I.to,P=(c-m*2)/(h-w),v=Math.max(u[0].length,t[0].length),o=E.symbol||"",M=E.colors||Raphael.fn.g.colors,J=this,q=null,l=null,V=this.set(),N=[];
for(var U=0,G=t.length;U<G;U++){v=Math.max(v,t[U].length)}var W=this.set();for(var U=0,G=t.length;
U<G;U++){if(E.shade){W.push(this.path().attr({stroke:"none",fill:M[U],opacity:E.nostroke?1:0.3}))
}if(t[U].length>a-2*m){t[U]=D(t[U],a-2*m);v=a-2*m}if(u[U]&&u[U].length>a-2*m){u[U]=D(u[U],a-2*m)
}}var A=this.set();if(E.axis){var g=(E.axis+"").split(/[,\s]+/);+g[0]&&A.push(this.g.axis(L+m,K+m,a-2*m,z,k,E.axisxstep||Math.floor((a-2*m)/20),2));
+g[1]&&A.push(this.g.axis(L+a-m,K+c-m,c-2*m,w,h,E.axisystep||Math.floor((c-2*m)/20),3));
+g[2]&&A.push(this.g.axis(L+m,K+c-m,a-2*m,z,k,E.axisxstep||Math.floor((a-2*m)/20),0));
+g[3]&&A.push(this.g.axis(L+m,K+c-m,c-2*m,w,h,E.axisystep||Math.floor((c-2*m)/20),1))
}var H=this.set(),S=this.set(),n;for(var U=0,G=t.length;U<G;U++){if(!E.nostroke){H.push(n=this.path().attr({stroke:M[U],"stroke-width":E.width||2,"stroke-linejoin":"round","stroke-linecap":"round","stroke-dasharray":E.dash||""}))
}var b=this.raphael.is(o,"array")?o[U]:o,B=this.set();N=[];for(var T=0,s=t[U].length;
T<s;T++){var f=L+m+((u[U]||u[0])[T]-z)*R;var e=K+c-m-(t[U][T]-w)*P;(Raphael.is(b,"array")?b[T]:b)&&B.push(this.g[Raphael.fn.g.markers[this.raphael.is(b,"array")?b[T]:b]](f,e,(E.width||2)*3).attr({fill:M[U],stroke:"none"}));
N=N.concat([T?"L":"M",f,e])}S.push(B);if(E.shade){W[U].attr({path:N.concat(["L",f,K+c-m,"L",L+m+((u[U]||u[0])[0]-z)*R,K+c-m,"z"]).join(",")})
}!E.nostroke&&n.attr({path:N.join(",")})}function F(ag){var ad=[];for(var ae=0,ai=u.length;
ae<ai;ae++){ad=ad.concat(u[ae])}ad.sort();var aj=[],aa=[];for(var ae=0,ai=ad.length;
ae<ai;ae++){ad[ae]!=ad[ae-1]&&aj.push(ad[ae])&&aa.push(L+m+(ad[ae]-z)*R)}ad=aj;ai=ad.length;
var Z=ag||J.set();for(var ae=0;ae<ai;ae++){var Y=aa[ae]-(aa[ae]-(aa[ae-1]||L))/2,ah=((aa[ae+1]||L+a)-aa[ae])/2+(aa[ae]-(aa[ae-1]||L))/2,x;
ag?(x={}):Z.push(x=J.rect(Y-1,K,Math.max(ah+1,1),c).attr({stroke:"none",fill:"#000",opacity:0}));
x.values=[];x.symbols=J.set();x.y=[];x.x=aa[ae];x.axis=ad[ae];for(var ac=0,af=t.length;
ac<af;ac++){aj=u[ac]||u[0];for(var ab=0,y=aj.length;ab<y;ab++){if(aj[ab]==ad[ae]){x.values.push(t[ac][ab]);
x.y.push(K+c-m-(t[ac][ab]-w)*P);x.symbols.push(V.symbols[ac][ab])}}}ag&&ag.call(x)
}!ag&&(q=Z)}function C(ae){var aa=ae||J.set(),x;for(var ac=0,ag=t.length;ac<ag;ac++){for(var ab=0,ad=t[ac].length;
ab<ad;ab++){var Z=L+m+((u[ac]||u[0])[ab]-z)*R,af=L+m+((u[ac]||u[0])[ab?ab-1:1]-z)*R,y=K+c-m-(t[ac][ab]-w)*P;
ae?(x={}):aa.push(x=J.circle(Z,y,Math.abs(af-Z)/2).attr({stroke:"none",fill:"#000",opacity:0}));
x.x=Z;x.y=y;x.value=t[ac][ab];x.line=V.lines[ac];x.shade=V.shades[ac];x.symbol=V.symbols[ac][ab];
x.symbols=V.symbols[ac];x.axis=(u[ac]||u[0])[ab];ae&&ae.call(x)}}!ae&&(l=aa)}V.push(H,W,S,A,q,l);
V.lines=H;V.shades=W;V.symbols=S;V.axis=A;V.hoverColumn=function(j,i){!q&&F();q.mouseover(j).mouseout(i);
return this};V.clickColumn=function(i){!q&&F();q.click(i);return this};V.hrefColumn=function(Y){var Z=J.raphael.is(arguments[0],"array")?arguments[0]:arguments;
if(!(arguments.length-1)&&typeof Y=="object"){for(var j in Y){for(var y=0,X=q.length;
y<X;y++){if(q[y].axis==j){q[y].attr("href",Y[j])}}}}!q&&F();for(var y=0,X=Z.length;
y<X;y++){q[y]&&q[y].attr("href",Z[y])}return this};V.hover=function(j,i){!l&&C();
l.mouseover(j).mouseout(i);return this};V.click=function(i){!l&&C();l.click(i);return this
};V.each=function(i){C(i);return this};V.eachColumn=function(i){F(i);return this};
return V};sc_require("graphing/graphael");Raphael.fn.g.piechart=function(f,e,q,b,m){m=m||{};
var l=this,n=[],h=this.set(),o=this.set(),k=this.set(),v=[],x=b.length,y=0,B=0,A=0,c=9,z=true;
o.covers=h;if(x==1){k.push(this.circle(f,e,q).attr({fill:this.g.colors[0],stroke:opt.stroke||"#fff","stroke-width":m.strokewidth==null?1:m.strokewidth}));
h.push(this.circle(f,e,q).attr(this.g.shim));B=b[0];b[0]={value:b[0],order:0,valueOf:function(){return this.value
}};k[0].middle={x:f,y:e};k[0].mangle=180}else{function u(G,F,i,I,E,N){var K=Math.PI/180,C=G+i*Math.cos(-I*K),p=G+i*Math.cos(-E*K),H=G+i/2*Math.cos(-(I+(E-I)/2)*K),M=F+i*Math.sin(-I*K),L=F+i*Math.sin(-E*K),D=F+i/2*Math.sin(-(I+(E-I)/2)*K),J=["M",G,F,"L",C,M,"A",i,i,0,+(Math.abs(E-I)>180),1,p,L,"z"];
J.middle={x:H,y:D};return J}for(var w=0;w<x;w++){B+=b[w];b[w]={value:b[w],order:w,valueOf:function(){return this.value
}}}b.sort(function(p,i){return i.value-p.value});for(var w=0;w<x;w++){if(z&&b[w]*360/B<=1.5){c=w;
z=false}if(w>c){z=false;b[c].value+=b[w];b[c].others=true;A=b[c].value}}x=Math.min(c+1,b.length);
A&&b.splice(x)&&(b[c].others=true);for(var w=0;w<x;w++){var g=y-360*b[w]/B/2;if(!w){y=90-g;
g=y-360*b[w]/B/2}if(m.init){var j=u(f,e,1,y,y-360*b[w]/B).join(",")}var t=u(f,e,q,y,y-=360*b[w]/B);
var s=this.path(m.init?j:t).attr({fill:m.colors&&m.colors[w]||this.g.colors[w]||"#666",stroke:m.stroke||"#fff","stroke-width":(m.strokewidth==null?1:m.strokewidth),"stroke-linejoin":"round"});
s.value=b[w];s.middle=t.middle;s.mangle=g;n.push(s);k.push(s);m.init&&s.animate({path:t.join(",")},(+m.init-1)||1000,">")
}for(var w=0;w<x;w++){var s=l.path(n[w].attr("path")).attr(this.g.shim);m.href&&m.href[w]&&s.attr({href:m.href[w]});
s.attr=function(){};h.push(s);k.push(s)}}o.hover=function(E,C){C=C||function(){};
var D=this;for(var p=0;p<x;p++){(function(F,G,i){var H={sector:F,cover:G,cx:f,cy:e,mx:F.middle.x,my:F.middle.y,mangle:F.mangle,r:q,value:b[i],total:B,label:D.labels&&D.labels[i]};
G.mouseover(function(){E.call(H)}).mouseout(function(){C.call(H)})})(k[p],h[p],p)
}return this};o.each=function(D){var C=this;for(var p=0;p<x;p++){(function(E,F,i){var G={sector:E,cover:F,cx:f,cy:e,x:E.middle.x,y:E.middle.y,mangle:E.mangle,r:q,value:b[i],total:B,label:C.labels&&C.labels[i]};
D.call(G)})(k[p],h[p],p)}return this};o.click=function(D){var C=this;for(var p=0;
p<x;p++){(function(E,F,i){var G={sector:E,cover:F,cx:f,cy:e,mx:E.middle.x,my:E.middle.y,mangle:E.mangle,r:q,value:b[i],total:B,label:C.labels&&C.labels[i]};
F.click(function(){D.call(G)})})(k[p],h[p],p)}return this};o.inject=function(i){i.insertBefore(h[0])
};var a=function(I,D,C,p){var M=f+q+q/5,L=e,H=L+10;I=I||[];p=(p&&p.toLowerCase&&p.toLowerCase())||"east";
C=l.g.markers[C&&C.toLowerCase()]||"disc";o.labels=l.set();for(var G=0;G<x;G++){var N=k[G].attr("fill"),E=b[G].order,F;
b[G].others&&(I[E]=D||"Others");I[E]=l.g.labelise(I[E],b[G],B);o.labels.push(l.set());
o.labels[G].push(l.g[C](M+5,H,5).attr({fill:N,stroke:"none"}));o.labels[G].push(F=l.text(M+20,H,I[E]||b[E]).attr(l.g.txtattr).attr({fill:m.legendcolor||"#000","text-anchor":"start"}));
h[G].label=o.labels[G];H+=F.getBBox().height*1.2}var J=o.labels.getBBox(),K={east:[0,-J.height/2],west:[-J.width-2*q-20,-J.height/2],north:[-q-J.width/2,-q-J.height-10],south:[-q-J.width/2,q+10]}[p];
o.labels.translate.apply(o.labels,K);o.push(o.labels)};if(m.legend){a(m.legend,m.legendothers,m.legendmark,m.legendpos)
}o.push(k,h);o.series=k;o.covers=h;return o};require("graphing/graphael");require("graphing/gbar");
SCUI.BarGraph=SC.View.extend({content:null,color:"red",_content_changed:function(){if(this.get("content")&&this.get("isVisible")){console.log(this.get("content"));
if(this._raphael){this._raphael.remove()}this._render_view()}},didAppendToDocument:function(){var a=this;
this.invokeLater(function(){a._render_view()})},willDestroyLayer:function(){if(this._raphael){this._raphael.remove()
}},_render_view:function(){if(!this._raphael&&this.$().get(0)){var c=this.$().get(0);
var f=Raphael(c),g=function(){this.flag=f.g.popup(this.bar.x,this.bar.y,this.bar.value||"0").insertBefore(this)
},e=function(){this.flag.animate({opacity:0},200,function(){this.remove()})},b=function(){var k=[],j=[];
for(var h=this.bars.length;h--;){k.push(this.bars[h].y);j.push(this.bars[h].value||"0")
}this.flag=f.g.popup(this.bars[0].x,Math.min.apply(Math,k),j.join(", ")).insertBefore(this)
},a=function(){this.flag.animate({opacity:0},300,function(){this.remove()})};f.g.hbarchart(0,0,300,220,this.get("content"),{stacked:true}).hover(g,e);
this._raphael=f}}});require("color_picker/colorpicker");require("color_picker/colorwheel");
SCUI.ColorPicker=SC.View.extend({value:"#eee",size:160,displayProperties:"value".w(),render:function(a,c){var b=this.get("value");
if(this._cp){if(this._cp.color()!==b){this._cp.color(b)}}},didAppendToDocument:function(){var c=this.get("parentView"),f=this.get("frame");
var g=c?c.convertFrameToView(f,null):f;if(!this._cp||SC.browser.msie){if(this._cp&&SC.browser.msie){this._cp.remove()
}var a=this.$().get(0),b=this,e;this._cp=e=Raphael.colorpicker(g.x,g.y,this.get("size"),this.get("value"),a);
this._cp.onchange=function(h){b.setIfChanged("value",h)}}else{this._cp.x=g.x;this._cp.y=g.y
}},willDestroyLayer:function(){if(this._cp){this._cp.remove()}}});SCUI.ColorWell=SC.View.extend({classNames:["color-well"],backgroundColor:"#656565",value:"",activeClass:"active",displayProperties:"value".w(),render:function(a,b){a.begin("div").addStyle({width:"100%",height:"100%"}).addStyle({backgroundColor:this.get("value")}).setClass(this.get("activeClass"),this._isMouseDown).end()
},mouseDown:function(a){if(!this.get("isEnabledInPane")){return NO}this.set("isActive",YES);
this.displayDidChange();return YES},mouseUp:function(a){if(!this.get("isEnabledInPane")){return NO
}this._isMouseDown=false;this.displayDidChange();this._popupColorPicker();return YES
},_popupColorPicker:function(){var a=this;if(!this._pickerPane){this._pickerPane=SC.PickerPane.create({layout:{width:180,height:240},classNames:["color-picker","picker"],contentView:SC.View.design({childViews:"picker textBox".w(),picker:SCUI.ColorPicker.design({layout:{centerX:0,top:10,width:160,height:185},valueBinding:SC.binding("value",a)}),textBox:SC.TextFieldView.design({layout:{width:160,height:24,bottom:10,left:10},valueBinding:SC.binding("value",a)})})})
}this._pickerPane.popup(this,SC.PICKER_POINTER)}});if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("scui/sai")
};