SCUI.LINE="line";SCUI.RECT="rect";SCUI.CIRCLE="circle";SCUI.POLY="poly";SCUI.FILL="fill";
SCUI.STROKE="stroke";SCUI.DrawingView=SC.View.extend({classNames:"scui-drawing-view",shapes:[],_drawingManager:{},shapesDidChange:function(){this.set("layerNeedsUpdate",YES);
this.updateLayerIfNeeded()}.observes("*shapes.[]"),init:function(){arguments.callee.base.apply(this,arguments);
this.registerShapeDrawing(SCUI.LINE,function(a,b){if(b.style){if(b.style.width){a.lineWidth=b.style.width
}if(b.style.color){a.strokeStyle=b.style.color}if(b.style.transparency){a.globalAlpha=b.style.transparency
}}a.beginPath();a.moveTo(b.start.x,b.start.y);a.lineTo(b.end.x,b.end.y);a.stroke()
});this.registerShapeDrawing(SCUI.RECT,function(a,b){if(b.style){if(b.style.width){a.lineWidth=b.style.width
}if(b.style.color){a.fillStyle=a.strokeStyle=b.style.color}if(b.style.transparency){a.globalAlpha=b.style.transparency
}}switch(b.type){case SCUI.FILL:a.fillRect(b.start.x,b.start.y,b.size.width,b.size.height);
break;case SCUI.STROKE:a.strokeRect(b.start.x,b.start.y,b.size.width,b.size.height);
break;default:a.clearRect(b.start.x,b.start.y,b.size.width,b.size.height);break}});
this.registerShapeDrawing(SCUI.CIRCLE,function(a,b){if(b.style){if(b.style.width){a.lineWidth=b.style.width
}if(b.style.color){a.fillStyle=a.strokeStyle=b.style.color}if(b.style.transparency){a.globalAlpha=b.style.transparency
}}a.beginPath();a.arc(b.center.x,b.center.y,b.radius,0,Math.PI*2,true);if(b.type===SCUI.FILL){a.fill()
}else{a.stroke()}});this.registerShapeDrawing(SCUI.POLY,function(b,f){if(f.style){if(f.style.width){b.lineWidth=f.style.width
}if(f.style.color){b.fillStyle=b.strokeStyle=f.style.color}if(f.style.transparency){b.globalAlpha=f.style.transparency
}}b.beginPath();var a=f.path?f.path.length:0;if(a<2){return}var e=f.path,d;b.moveTo(e[0].x,e[0].y);
for(var c=1;c<a;c++){d=e[c];b.lineTo(d.x,d.y)}b.lineTo(e[0].x,e[0].y);if(f.type===SCUI.FILL){b.fill()
}else{b.stroke()}})},render:function(c,e){var d=this.get("frame");if(e){if(!SC.browser.msie){c.push('<canvas class="base-layer" width="%@" height="%@">You can\'t use canvas tags</canvas>'.fmt(d.width,d.height))
}}else{var b=this.$("canvas.base-layer");if(b){b.attr("width",d.width);b.attr("height",d.height);
if(b.length>0){var a=b[0].getContext("2d");if(a){a.clearRect(0,0,d.width,d.height);
this._drawShapes(a)}else{console.error("SCUI.DrawingView.render(): Canvas object context is not accessible.")
}}else{console.error("SCUI.DrawingView.render(): Canvas element array length is zero.")
}}else{console.error("SCUI.DrawingView.render(): Canvas element is not accessible.")
}}return arguments.callee.base.apply(this,arguments)},registerShapeDrawing:function(b,a){if(!b){console.error("Can't register this drawing paradigm because name is null");
return NO}this._drawingManager[b]=a;this.set("layerNeedsUpdate",YES);this.updateLayerIfNeeded();
return YES},_drawShapes:function(c){var f;var b=this.get("shapes")||[];var d;for(var e=0,a=b.length;
e<a;e++){f=b[e];d=this._drawingManager[f.shape];if(d){d(c,f)}}},didCreateLayer:function(){if(SC.browser.msie){var b=this.get("frame");
var a=document.createElement("CANVAS");a.className="base-layer";a.width=b.width;a.height=b.height;
this.$().append(a);a=G_vmlCanvasManager.initElement(a);this._canvasie=a}}});sc_require("views/drawing");
SCUI.SNAP_ZONE=2;SCUI.SNAP_LINE={shape:SCUI.LINE,start:{x:0,y:0},end:{x:0,y:0},style:{width:0.5,color:"#00c6ff"}};
SCUI.SnapLines={hasSnapLines:YES,setupData:function(o){if(!o){o=[]}this.removeLines();
this._xPositions={};this._yPositions={};var n=this._xPositions,g=this._yPositions,d=this.get("childViews"),h=this,p,c,f,k,b,e,j,a,i=(SCUI.SNAP_ZONE*2);
var m=function(u,t,q,x,r){var w=u,v=t,s=q;u=Math.floor(u/i);t=Math.floor(t/i);q=Math.floor(q/i);
if(r[u]){r[u].push({value:w,child:x})}else{r[u]=[{value:w,child:x}]}if(r[t]){r[t].push({value:v,child:x})
}else{r[t]=[{value:v,child:x}]}if(r[q]){r[q].push({value:s,child:x})}else{r[q]=[{value:s,child:x}]
}};var l=this;d.forEach(function(q){if(o.indexOf(q)<0){c=l?l.convertFrameToView(q.get("frame"),null):q.get("frame");
f=c.x;k=SC.midX(c);b=c.x+c.width;m(f,k,b,q,n);e=c.y;j=SC.midY(c);a=c.y+c.height;m(e,j,a,q,g)
}});l=this.get("parentView");c=l?l.convertFrameToView(this.get("frame"),null):this.get("frame");
this._globalFrame=c;f=c.x;k=SC.midX(c);b=c.x+c.width;m(f,k,b,this,n);e=c.y;j=SC.midY(c);
a=c.y+c.height;m(e,j,a,this,g)},drawLines:function(s,y,x,A,z,j){if(!this._xPositions||!this._yPositions){return
}if(!this._drawingView){this._drawingView=this.createChildView(SCUI.DrawingView.design({shapes:[],mouseDown:function(H){this.removeFromParent();
return YES}}));this.appendChild(this._drawingView)}if(!j){j={x:0,y:0}}var v=(SCUI.SNAP_ZONE*2),w=[],t,f,u,n,q,d,p,o,b,m,c,D,i,h,a,l,F,e,B=this._dragDirection(y,x,A,z),C,g,k=this,G,r,E;
n=s.get("parentView");u=n?n.convertFrameToView(s.get("frame"),null):s.get("frame");
u.x=u.x-j.x;u.y=u.y-j.y;q=SC.minX(u);d=SC.midX(u);p=SC.maxX(u);o=SC.minY(u);b=SC.midY(u);
m=SC.maxY(u);c=Math.floor(q/v);D=Math.floor(d/v);i=Math.floor(p/v);h=Math.floor(o/v);
a=Math.floor(b/v);l=Math.floor(m/v);C=B.UP?[{mod:c,val:0},{mod:D,val:u.width/2},{mod:i,val:u.width}]:[{mod:i,val:u.width},{mod:D,val:u.width/2},{mod:c,val:0}];
C.forEach(function(H){if(k._xPositions[H.mod]){G=H;F=k._xPositions[H.mod][0].value-k._globalFrame.x;
return}});if(!SC.none(F)){t=SC.copy(SCUI.SNAP_LINE);t.start={x:F,y:0};t.end={x:F,y:this._globalFrame.height};
w.push(t)}g=B.LEFT?[{mod:h,val:0},{mod:a,val:u.height/2},{mod:l,val:u.height}]:[{mod:l,val:u.height},{mod:a,val:u.height/2},{mod:h,val:0}];
g.forEach(function(H){if(k._yPositions[H.mod]){r=H;e=k._yPositions[H.mod][0].value-k._globalFrame.y;
return}});if(!SC.none(e)){f=SC.copy(SCUI.SNAP_LINE);f.start={y:e,x:0};f.end={y:e,x:this._globalFrame.width};
w.push(f)}this._drawingView.set("shapes",w);E={pageX:F+this._globalFrame.x,pageY:e+this._globalFrame.y,frameX:F,frameY:e};
if(G){E.pageX-=G.val;E.frameX-=G.val}if(r){E.pageY-=r.val;E.frameY-=r.val}return E
},removeLines:function(){this._xPositions=null;this._yPositions=null;this._globalFrame=null;
if(this._drawingView){this._drawingView.destroy();this._drawingView=null}},_dragDirection:function(g,f,d,c){var b=g-d,a=f-c,e={};
e.UP=b>0?NO:YES;e.DOWN=b>0?YES:NO;e.LEFT=a>0?NO:YES;e.RIGHT=a>0?YES:NO;return e}};
SCUI.DrawingPane=SC.Pane.extend({classNames:"scui-drawing-pane",layout:{top:0,left:0,bottom:0,right:0}});
sc_require("views/drawing");SCUI.DragLinkView=SCUI.DrawingView.extend({classNames:["scui-draglink"],startPoint:null,endPoint:null,linkParams:{shape:SCUI.LINE,style:{color:"black",width:2}},_pointsDidChange:function(){var d=this.get("startPoint"),a=this.get("endPoint"),e,c,b;
e=Math.abs(d.x-a.x);c=Math.abs(d.y-a.y);if(e>5||c>5){b=this.createLinkShape();this.setIfChanged("shapes",[b])
}}.observes("startPoint","endPoint","linkParams"),createLinkShape:function(b,a){var c=this.get("linkParams");
c.shape=c.shape||SCUI.LINE;c.start={x:b.x,y:b.y};c.end={x:a.x,y:a.y};c.style=c.style||{color:"black",width:2};
return c}});if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("scui/drawing")
};