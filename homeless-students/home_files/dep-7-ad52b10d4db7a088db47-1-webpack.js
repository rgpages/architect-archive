(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/dep-7"],{"8UoR":function(t,e,n){"use strict";n.r(e),n.d(e,"Trendline",function(){return s});var a=n("30U6"),i=n("ziQ1"),r=n("/TIM"),o=n("8d86"),l=n("xuOt"),c=".igc-graph-trendline";function s(){var t,e,n,s,u,h=Object(i.scaleLinear)(),g=Object(i.scaleLinear)(),f=[],d=o.curveLinear,p=l.schemeCategory10[0],m=Object(a.dispatch)("animationEnd"),y=!0,b={enabled:!1},v=0;function x(t){t.each(function(){var t=Object(r.select)(this);t.selectAll(c).remove();var e=t.selectAll(c).data([0]);if((e=e.enter().append("g").attr("class","igc-graph ".concat(c.slice(1))).merge(e)).attr("clip-path",u?"url(#".concat(u,")"):null),f.length){var n=e.append("path"),a=this.__chart__=h.copy(),i=this.__chart__=g.copy();a.bandwidth&&(v=a.bandwidth()/2);var o=function(){var t=b,e=t.numericCategories,n=t.type,a=[],i=0,r=0;if("Scatter"===n)f.forEach(function(t){a=a.concat(t.data)}),a=a.sort(function(t,e){return e.x-t.x});else for(var o=function(){var t=0,n=0,a=0;return f.forEach(function(e){var i=e.data[r];i&&(a=i.x,t+=null===i.y?0:i.y,n++)}),r++,0!==n&&{x:e?a:i++,y:t/n}},l=o();l;)a.push(l),l=o();return function(t){for(var e=b.numericCategories,n=t.length,a=e?0:1,i=0,r=0,o=0;o<n;o++){var l=t[o],c=l.x+a;i+=c,r+=l.y}for(var s=i/n,u=r/n,h=0,g=0,f=0;f<n;f++){var d=t[f],p=d.x-s,m=d.y-u;h+=p*m,g+=p*p}var y=h/g,v=u-y*s;function x(e){var n=t[e];n.yhat=v+n.x*y}return x(0),x(n-1),[t[0],t[n-1]]}(a)}();n.attr("stroke",p).attr("fill","none").attr("d","M".concat(a(o[0].x)+v,",").concat(i(o[0].yhat),"L").concat(a(o[1].x)+v,",").concat(i(o[1].yhat)))}})}var O={scaleX:function(t){return arguments.length?(h=t,x):h},scaleY:function(t){return arguments.length?(g=t,x):g},data:function(t){return arguments.length?(f=t,x):f},interpolate:function(t){return arguments.length?(d=t,x):d},color:function(t){return arguments.length?(p=t,x):p},groupId:function(t){return arguments.length?(e=t,x):e},chartId:function(e){return arguments.length?(t=e,x):t},dispatch:function(){return m},legend:function(t){return arguments.length?(n=t,x):n},filterFn:function(t){return arguments.length?(s=t,x):s},animate:function(t){return arguments.length?(y=t,x):y},clipPathUrl:function(t){return arguments.length?(u=t,x):u},dataPointOptions:function(t){return arguments.length?(b=t,x):b},cleanup:function(t){return t.selectAll(c).remove()}};return Object.assign(x,O),x}},Ajrq:function(t,e,n){"use strict";n.r(e),n.d(e,"Line",function(){return X}),n.d(e,"getDomain",function(){return W});var a=n("LvDl"),i=n.n(a),r=n("30U6"),o=n("vBe5"),l=n("ziQ1"),c=n("/TIM"),s=n("+3eq"),u=n("8d86"),h=n("xLbz"),g=n("2LMz"),f=n("Io7g"),d=n("CKDJ"),p=n("xuOt"),m=n("W3QS"),y=n("tb4o"),b=n("GBhQ"),v=n("LM2t"),x=n("PJ6x"),O=n("FNBR"),k=n("pKNx"),j=n("FVwI"),L=n("paAN"),w=n("XlgC"),S=n("7S+G"),C=n("Z8Kf"),A=n("AF4e"),T=n("t9/8"),I=n("JgWh"),P=n("fsSQ"),D=n("ZNXJ"),E=n("8UoR"),R=n("ICvE");function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function N(t,e){return!e||"object"!==B(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t,e,n){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var a=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=F(t)););return t}(t,e);if(a){var i=Object.getOwnPropertyDescriptor(a,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object(P.putGraph)("line",D.Line),Object(P.putGraph)("area",R.Area);var G={curveLinear:u.curveLinear,curveMonotoneX:u.curveMonotoneX,monotone:u.curveMonotoneX},X=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),N(this,F(e).apply(this,arguments))}var n,a,P;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(e,h["default"]),n=e,P=[{key:"getClassName",value:function(){return"Line"}}],(a=[{key:"render",value:function(){var t=this,e=this.options,n=this.root;this.detectDimensions();var a=new S.Renderer({instance:this}),r=this.getSheetData(),l=Object(f.default)(r),c=this.runtime={width:e.width,height:e.height,layout:{},components:{},inanimate:Object(g.inanimated)(e),sheet:r,formatter:l,margin:{top:0,right:1,bottom:0,left:0},spacing:{maxBeforeXAxisTick:50,beforeBottomCategories:5,afterTopCategories:5,afterYAxisTick:5}},u=c.layout,d=c.spacing,x=c.layout.marginTitle={top:0,right:0,bottom:0,left:0},k=c.marginAxis={top:0,right:0,bottom:0,left:0};if(!h.default.prototype.sheetsNotFound.call(this)){var L=c.graphs=this.prepareSheetData(r,this.sheetIndex);this.createTickIntervals();var w=r.graphOptions.dataPointRadius;Object(v.SheetSwitcher)(this,{width:e.width}),Object(T.DownloadButton)(this,e.style.legend);var C=Object(b.legendHelper)({instance:this});if(!this.sheetsNotFound(L)){var A=e.animation.duration,P=this.createAnimationCounter(L.length+3),D=c.reverseAxis=!(!r.grid||!r.grid.reverse),R=c.numericCategories=!!r.categories.numeric;c.categoryLayout=r.categories.layout;var B,M,N=c.xAxisOptions=r.axis[0],_=c.yAxisOptions=r.axis[1],F=this.showDataPoints(),V=!!N.ticks,G=null,X=!!_.ticks,W=null,H=this.showAsPercent(),U=c.xRangeLimits=Object(j.hasLimits)(N),z=c.yRangeLimits=Object(j.hasLimits)(_),Y=e.style.axis.x,Z=e.style.axis.y,J=i.a.get(_,"title"),Q=i.a.get(N,"title"),q=Object(y.default)();if(this.titleLayout(["x","y"]),R)M=Object(p.getTextDimensions)(["0123456789.,"],n,Y.tick);else{var K=[Object(p.firstNonEmpty)(r.categories.data)];M=Object(p.getTextDimensions)(K,n,Y.tick)}c.margin.right+=Math.ceil(.5*M.height),U&&(c.margin.right+=5,_.ticks||J||(c.margin.left+=5)),z&&(_.ticks||D||(c.margin.top+=5),N.ticks||Q||(c.margin.bottom+=Math.max(0,w-d.beforeBottomCategories)),D&&!N.ticks&&(c.margin.top+=Math.max(0,w-d.afterTopCategories)));var $={width:0,height:0};if(X&&($=Object(p.getTextDimensions)(l.axis.y.tickSample(),n,Z.tick),D?Q||(c.margin.bottom+=$.height+($.height-$.baseLineOffset)):c.margin.top+=$.height),i.a.get(r,"graphOptions.line.showValues")){var tt=Object(p.getTextDimensions)("BXMW",n,e.style.graph.item.value);if(D){if(!Q){var et=Math.max(0,tt.height-($.height+($.height-$.baseLineOffset)));c.margin.bottom+=et}}else{var nt=Math.max(0,tt.height-$.height);c.margin.top+=nt}}var at=c.width-c.margin.left-x.left-c.margin.right-x.right,it=c.height-c.margin.top-x.top-c.margin.bottom-x.bottom,rt=c.limits={maxCategoryHeight:Math.max(0,Math.floor(.28*it)),categoryHeight:0},ot=D?[0,it]:[it,0],lt=this.createYScale();lt.range(ot);var ct=this.getDomain(L,["y","y0","y1"]);if(ct=this.adjustYDomain(ct,it),lt.domain(ct),this.domainInvalid())return this.events.call("startAnimation"),this.events.call("endAnimation"),this.resetRootElement();if(W=this.yTicks(lt),X){var st;if("BubblePlot"===this.getClassName())st=lt.domain().map(function(t){var e=r.series[t];return e&&Object(p.replaceBlank)(e.title)||""}),q.tickFormat(function(t){return st[t]||""});else{var ut=l.axis.y.createTickFormatter(W);st=W.map(function(t){return ut(t)}),q.tickFormat(ut)}$.width=Object(p.getTextDimensions)(st,n,Z.tick).width,k.left=$.width+d.afterYAxisTick}c.graphWidth=at-k.left-1,c.igcLeftOffset=c.margin.left+k.left+x.left,this.createXScale();var ht=this.createCategoryLabels();if(G=ht.ticks,!X&&R&&V&&"regular"===ht.layout){var gt=i.a.get(ht,"renderData[0]");if(null===i.a.get(gt,"transform")){if(gt.x<0&&x.left<Math.abs(gt.x)){var ft=Math.floor(Math.abs(gt.x)-x.left);c.graphWidth-=ft,c.igcLeftOffset+=ft}}else{var dt=gt.h/2;if(dt>0&&x.left<dt){var pt=Math.floor(dt-x.left);c.graphWidth-=pt,c.igcLeftOffset+=pt}}c.hiddenLines=[],this.createXScale(),ht=this.createCategoryLabels()}V&&(c.limits.categoryHeight=ht.height),D?k.top=c.limits.categoryHeight+d.afterTopCategories:k.bottom=c.limits.categoryHeight+d.beforeBottomCategories;var mt=c.margin.top+k.top+x.top;it=it-k.top-k.bottom,c.graphHeight=it,ot=D?[0,it]:[it,0],lt.range(ot),B={enabled:F,showOnlyClosest:!1,numericCategories:R,radius:w,pointStrokeColor:i.a.get(r,"style.pointStrokeColor"),showValues:i.a.get(r,"graphOptions.line.showValues",{}),svgContainer:n.node(),x:c.xScale,y:lt.fn,offset:{left:c.igcLeftOffset,top:mt},graphs:L,bounds:{height:Object(o.max)(ot),width:c.graphWidth},animationEnd:P,type:this.getClassName(),legend:C};var yt=Object(o.max)(L,function(t){return t.data.length});c.graphWidth<2*w*yt&&(B.showOnlyClosest=!0);var bt=Object(O.GridLines)().scale(lt.fn).orient(O.GridLines.ORIENTS.horizontal).tickSize(-(c.graphWidth+k.left+k.right)).highlightZero(r.grid.horizontalZeroHighlight).style(e.style.grid).tickValues(W).animationDuration(A).offset({left:-k.left});if(!r.grid.horizontal){var vt=i.a.get(r,"grid.horizontalZero",!1)&&-1!==W.indexOf(0);bt.tickValues(vt?[0]:[])}var xt=Object(O.GridLines)().scale(c.xScale).orient(O.GridLines.ORIENTS.vertical).tickSize(it+1).highlightZero(r.grid.verticalZeroHighlight).style(e.style.grid).animationDuration(A).tickValues(G).offset({top:0});if(c.hiddenLines&&c.hiddenLines.length&&xt.hideLinesByIndex(c.hiddenLines),r.grid.vertical)R||xt.tickValues(i.a.get(ht,"filterMetrics.domainIndex"));else{var Ot=i.a.get(r,"grid.verticalZero",!1)&&G&&-1!==G.indexOf(0);xt.tickValues(Ot?[0]:[])}"Candlestick"===this.getClassName()&&r.grid.vertical&&(xt.tickValues(null),xt.ticks(c.xTickInterval)),q.scale(lt.fn).orient("left").style(Z.tick).textOffset(D?$.height:$.baseLineOffset-$.height).tickValues(W),H&&q.tickFormat(Object(I.percentFormat)(l.axis.y)),X||q.tickValues([]),this.titleComponents(["x","y"]);var kt=c.components,jt=kt.bottomTitle,Lt=kt.leftTitle;jt.orientBounds({y1:0,y2:c.height-c.margin.bottom-5,x1:c.margin.left+x.left,x2:c.width}),Lt.orientBounds({x1:c.margin.left+4,x2:c.width,y1:mt,y2:mt+it}),jt.dispatch().on("animationEnd",P);var wt=Object(m.Bottom)().data(V?ht.renderData:[]).bounds({height:rt.maxCategoryHeight,y:D?-k.top:it+d.beforeBottomCategories}).textAlign(V?ht.renderData.textAlign:null).style(Y.tick);if(this.sheetSeriesDataEmpty(r))return this.events.call("startAnimation"),this.events.call("endAnimation"),this.resetRootElement();u.igc={x:c.igcLeftOffset,y:mt},c.inanimate&&Object(g.removeAnimation)([Lt,jt,wt,q]),this.containerSetup();var St=n.select(".igc"),Ct=n.select("defs"),At=s[e.animation.ease],Tt=e.animation.duration;a.add(function(){n.attr("width",c.width).attr("height",c.height).transition().ease(At).duration(Tt).on("start",function(){t.events.call("startAnimation")}).on("end",function(){P()}),St.attr("transform","translate(".concat(u.igc.x,", ").concat(u.igc.y,")"))}),a.addGrid(bt,"igc-ygrid"),a.addGrid(xt,"igc-xgrid"),a.addGraph([{graphs:L,x:c.xScale,y:lt.fn,legend:C,bounds:{width:c.graphWidth,height:it},offset:{x:c.igcLeftOffset,y:mt},animationEnd:P,pointStrokeColor:i.a.get(r,"style.pointStrokeColor")}]),a.add(function(){var e=Object(E.Trendline)(),n="igc-cp-".concat(t.chartId,"-trendline");t.createRectClipPath(Ct,{clipPathId:n,x:0,y:0,width:c.graphWidth,height:it}),i.a.get(r,"categories.trendline.enabled")?(e.data(L).scaleX(c.xScale).scaleY(lt.fn).clipPathUrl(n).dataPointOptions(B).filterFn(function(t){return null!==t.y}),i.a.has(r,"categories.trendline.color")&&e.color(i.a.get(r,"categories.trendline.color")),St.call(e)):St.call(e.cleanup)}),"BubblePlot"===this.getClassName()&&this.renderCategorySeparator(a),a.add(function(){if(U||z){var n={x:-6,y:-6,width:c.graphWidth+12,height:it+12,clipPathId:"igc-cp-".concat(t.chartId)};t.graphsSetupClipPath(St,Ct,n)}else St.selectAll(".igc-graph-group").attr("clip-path",null);St.selectAll(".igc-crosshair-circle").remove(),St.selectAll(".igc-crosshair-overlay").remove(),St.selectAll(".igc-labels").remove();var a={x:-c.igcLeftOffset,y:-mt,width:e.width,height:c.height,clipPathId:"igc-cp-curtain-".concat(t.chartId)};t.curtainAnimation(St,Ct,a,B)}),a.addGrid(q,"igc-y0-axis-text"),a.add(function(){X&&St.select(".igc-grid").select(".igc-y0-axis-text").selectAll(".tick").select("text").attr("transform","translate(".concat(-k.left,", 0)"))}),a.addGrid(wt,"igc-x-axis-text"),a.addTitle(Lt,"igc-title-left"),a.addTitle(jt,"igc-title-bottom"),a.start()}}}},{key:"renderGraphs",value:function(t){t.selectAll(".igc-graph-group").remove(),_(F(e.prototype),"renderGraphs",this).apply(this,arguments)}},{key:"graphInstanceSetup",value:function(t,e,n,a){t.scaleX(a.x).scaleY(a.y).data(e.data).colors(e.colors).groupId(n).animate(!1).legend(a.legend).tooltip(Object(A.createStyledTooltip)(this)).interpolate(e.interpolation).filterFn(function(t){return null!==t.y}).dispatch().on("animationEnd",a.animationEnd),"line"===e.type&&t.groupId(e.groupId),"area"===e.type&&"Line"===this.getClassName()&&(t.filterFn(void 0),t.defined(function(t){return null!==t.y0||null!==t.y1}),t.highlightEndColor(function(t){return w.Colors.rgbStrToRgbaStr(t,.2)}),t.highlightStartColor(function(t){return w.Colors.rgbStrToRgbaStr(t,.2)}),t.y1(function(t){return function(e){return t(e.y1)}}))}},{key:"renderGraphInstances",value:function(){this.graphInstances.forEach(function(t){var e=t.selection,n=t.graphObj&&t.graphObj.type;n&&e.classed("igc-graph-"+n,!0),e.call(t.instance)})}},{key:"curtainAnimation",value:function(t,e,n,a){var i=this,r=.625*this.options.animation.duration;t.selectAll(".igc-graph").attr("clip-path","url(#".concat(n.clipPathId,")")),this.createRectClipPath(e,n),e.select("#".concat(n.clipPathId)).selectAll("path").attr("transform","translate(".concat(-(n.width-n.x),", 0)")).transition().on("end",function(){i.renderDataPoints(t,a)}).duration(r).ease(s.easeLinear).attr("transform","translate(0, 0)")}},{key:"adjustYDomain",value:function(t,e){var n=this.runtime,a=this.showAsPercent(),i=n.sheet.graphOptions.dataPointRadius,r=n.yTickInterval,o=n.yAxisOptions,c=this.getClassName();return t=a?[0,1]:this.showDataPoints()?m.ScaleHelper.linearScaleTicksDomainAdjust(t,i,[0,e]):Object(l.scaleLinear)().domain(t).nice(r).domain(),-1!==["AreaStacked","Area","StreamGraph"].indexOf(c)&&(t[0]=Math.min(t[0],0),"AreaStacked"===c&&(t[1]=Math.max(t[1],0))),a||Object(j.limit)(o,t),t}},{key:"sheetsNotFound",value:function(){return d.default.prototype.sheetsNotFound.apply(this,arguments)}},{key:"gatherDataFromGroups",value:function(t){var e=this,n=[];return t.forEach(function(t){"area"===t.type&&"Line"===e.getClassName()||(n=n.concat(t.data.map(function(e){return e.colors=t.colors,e})))}),n}},{key:"renderDataPoints",value:function(t,e){var n=this.chartId,a=this.runtime,o=this.interaction,l=this.options,u=a.formatter,h=a.errorMargin,g=i.a.get(this,"runtime.sheet.graphOptions.line.showValues",!1),f=Object(A.createStyledTooltip)(this),d=g&&!e.showOnlyClosest,m=this.tooltipEnabled(),y=function(t){return t.groupLabel},v=function(t){var n=e.numericCategories?u.tooltip.x.format(t.xLabel):t.xLabel,a=u.tooltip.y.format(t.yLabel);return"".concat(n,": ").concat(a)};h&&(v=function(t){var n=e.numericCategories?u.tooltip.x.format(t.xLabel):t.xLabel,a=function(t){return t?"".concat(t,": "):""},i=function(t){return u.tooltip.y.format(t)};return"".concat(n,"                \n").concat(a(t.y1Label)).concat(i(t.y1Raw),"                \n").concat(a(t.yLabel)).concat(i(t.yRaw),"                \n").concat(a(t.y0Label)).concat(i(t.y0Raw))});var j=function(){e.animationEnd()},L=d||m?this.gatherDataFromGroups(e.graphs):[],w=t.selectAll(".igc-crosshair-overlay").data([0]);if(w.enter().append("rect").attr("class","igc-crosshair-overlay"),(w=t.selectAll(".igc-crosshair-overlay")).attr("x",0).attr("y",0).attr("width",e.bounds.width).attr("height",e.bounds.height).styles({"stroke-width":"0px","fill-opacity":0}),m){var S=Object(x.default)().data(L).scaleX(e.x).scaleY(e.y).offset(e.offset).bounds(e.bounds).svgContainer(e.svgContainer).targetParent(t).chartId(n).pointStrokeColor(e.pointStrokeColor).tooltip(f).scaleFactor(i.a.get(this,"options.scale")).tooltipText(y).tooltipValue(v);S.dispatch().on("openUrl",function(t){return Object(p.openUrl)(t,o)}),S.target(w),w.call(S)}if(d){var C=t.selectAll(".igc-labels").data([0]);C=C.merge(C.enter().insert("g",".igc-crosshair-overlay").attr("class","igc-labels"));var T=Object(r.dispatch)("highlightStart","highlightEnd"),I=Object(k.createLineLabelRenderer)({textStyle:l.style.graph.item.value,showValues:g,textFormat:function(t){return u.labels.format(t.text)},xScale:e.x,yScale:e.y,transitionTiming:{duration:{text:50}},listenToLegendText:Object(b.createListenToLegend)({easing:s.easeLinear,ns:"text",dispatch:T}),dataPointRadius:e.radius,valueProperty:h?"yRaw":"yLabel"});e.legend&&e.legend.addListener({id:n,dispatch:T}),j=function(){I(C,L).then(function(){e.animationEnd()})}}!e.showOnlyClosest&&e.enabled?(t.selectAll(".igc-graph-group").each(function(t){Object(c.select)(this).selectAll(".igc-graph-line").each(function(a,r){var l=Object(O.Circle)().scaleX(t.x).scaleY(t.y).data(a.data).colors(a.colors).groupId(i.a.get(a,"groupId",r)).chartId(n).filterFn(function(t){return null!==t.y}).className("igc-data-point-line").legend(t.legend).pointStrokeColor(e.pointStrokeColor).tooltip(f).tooltipText(y).tooltipValue(v).animate(!1);l.dispatch().on("openUrl",function(t){return Object(p.openUrl)(t,o)}),Object(c.select)(this).call(l)})}),j()):j()}},{key:"getDomain",value:function(){return W.apply(null,arguments)}},{key:"createYScale",value:function(){var t=this.runtime.yScale=Object(l.scaleLinear)();return Object(C.scaleProxy)({fn:t,range:"rangeRound",domain:"domain",ticks:"ticks"})}},{key:"yTicks",value:function(t){var e=this.runtime,n=e.yRangeLimits,a=e.yTickInterval,i=t.domain().slice(0),r=m.ScaleHelper.ticks(t,a);return n?this.forceTicksToDomain(i,r):t.ticks?r:i}},{key:"createXScale",value:function(){var t=this.runtime,e=t.sheet;return t.numericCategories?t.xScale=this.numericCategoriesScale():t.xScale=Object(l.scaleBand)().domain(Object(o.range)(0,e.categories.data.length)).range([0,t.graphWidth],0),t.xScale}},{key:"createCategoryLabels",value:function(){var t=this.runtime,e=t.categoryLayout,n=t.numericCategories,a=m.Bottom.createLabels(this,e);return n&&this.afterNumericCategories(a),a}},{key:"numericCategoriesScale",value:function(){var t=this.runtime,e=t.xAxisOptions,n=t.sheet,a=t.graphWidth,i=Object(m.ScaleHelper)();return i.type("numeric").data(n.categories.data).domainLimit([e.minLimit,e.maxLimit]).range([0,a]).rangePointRadius(n.graphOptions.dataPointRadius),i()}},{key:"afterNumericCategories",value:function(t){var e=this.runtime,n=t.renderData.length,a=t.ticks.length,i=a-1;a>n&&(e.hiddenLines=[i])}},{key:"showDataPoints",value:function(){return!0===this.options.series.dataPoints}},{key:"showAsPercent",value:function(){return i.a.get(this,"options.series.percent")}},{key:"lastOrdinalTickExceeds",value:function(t,e,n,a){var i=e.length-1,r=e[i];if(-1!==i)return a.bandwidth()/2+r+n.width/2>t}},{key:"emptySheetData",value:function(){return i.a.merge({},_(F(e.prototype),"emptySheetData",this).call(this),{series:[{title:"",type:"line",axisIndex:0}],axis:[{title:"",ticks:!0,tickInterval:10},{title:"",ticks:!0,tickInterval:10}],graphOptions:{line:{showValues:!1},dataPointRadius:5}})}},{key:"defaults",value:function(){return i.a.merge({},_(F(e.prototype),"defaults",this).call(this),{series:{dataPoints:!0},animation:{duration:800}})}},{key:"seriesDataValueParser",value:function(t){var e=new L.default;return"line-area"===t.type?function(n,a){t.data[a]=[Number(e(n[0])),Number(e(n[1])),Number(e(n[2]))]}:function(n,a){t.data[a]=Number(e(n))}}},{key:"prepareSheetData",value:function(t,e){var n,a=this.emptySheetData().series[0].type,r=t.categories,o=r.data,l=r.colors,c=!!r.numeric,s=t.series,h=[],g=0,f=e===this.sheetIndex;return f&&(n=Object(b.createLegendData)(this)),this.runtime.errorMargin=s.some(function(t){return"line-area"===t.type}),s.forEach(function(t,e){var r=t.type||a,s=i.a.get(t,"index",e),d="line-area"===r;if(f&&!n({color:Object(p.getColor)(s,l),title:Object(p.replaceBlank)(t.title),groupId:e}).active)return;var m={type:r,data:o.map(function(n,a){var i=a;c&&(i=Object(p.replaceBlank)(Number(n),0));var r={x:i,y:null,yLabel:Object(p.replaceBlank)(t.rawData[a]),xLabel:Object(p.replaceBlank)(n),groupLabel:Object(p.replaceBlank)(t.title),link:t.links?t.links[a]:null,titleLink:t.titleLink,seriesIdx:e};return t.data&&(r.y=Object(p.replaceBlank)(t.data[a],null)),d&&function(t,e,n){var a=e.rawData&&e.rawData[n],i=e.data&&e.data[n];t.y=Object(p.replaceBlank)(i&&i[0],null),t.y0=Object(p.replaceBlank)(i&&i[1],null),t.y1=Object(p.replaceBlank)(i&&i[2],null),t.yRaw=Object(p.replaceBlank)(a&&a[0]),t.y0Raw=Object(p.replaceBlank)(a&&a[1]),t.y1Raw=Object(p.replaceBlank)(a&&a[2]),t.yLabel=Object(p.replaceBlank)(e.dataLabels&&e.dataLabels[0]),t.y0Label=Object(p.replaceBlank)(e.dataLabels&&e.dataLabels[1]),t.y1Label=Object(p.replaceBlank)(e.dataLabels&&e.dataLabels[2])}(r,t,a),r}),colors:[Object(p.getColor)(s,l)],interpolation:G[t.interpolation]||u.curveLinear,groupId:e};d&&(m.type="line",h.splice(g,0,i.a.extend({},m,{type:"area"})),g++),h.push(m)}),h}},{key:"applySheetOptions",value:function(t){function e(e){return t[e]||t[0]}t&&this.options.sheets.forEach(function(t,n){var a=e(n+1);a.categories&&i.a.merge(t.categories,a.categories),a.grid&&i.a.merge(t.grid,a.grid),a.legend&&i.a.merge(t.legend,a.legend),a.axis&&a.axis.length&&i.a.merge(t.axis,a.axis),a.tooltip&&(t.tooltip=t.tooltip||{},i.a.merge(t.tooltip,a.tooltip)),a.labels&&(t.labels=t.labels||{},i.a.merge(t.labels,a.labels)),i.a.merge(t.graphOptions,a.graphOptions),t.series.forEach(function(t){i.a.merge(t,a.series&&a.series[0]||{})}),a.style&&(t.style=a.style)})}},{key:"domainInvalid",value:function(){var t=this.runtime.yScale.domain();return t[0]===t[1]}}])&&M(n.prototype,a),P&&M(n,P),e}();function W(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",n=[].concat(e),a=[Object(o.min)(t,function(t){return Object(o.min)(t.data,function(t){return Object(o.min)(n.map(function(e){return t[e]}))})}),Object(o.max)(t,function(t){return Object(o.max)(t.data,function(t){return Object(o.max)(n.map(function(e){return t[e]}))})})];return Object(j.ensureZeroEqual)(a),a}},ICvE:function(t,e,n){"use strict";n.r(e),n.d(e,"Area",function(){return h});var a=n("/TIM"),i=n("30U6"),r=n("ziQ1"),o=n("+3eq"),l=n("8d86"),c=n("AF4e"),s=n("xuOt"),u=n("zVrf");function h(){var t,e,n,h,g=u.Colors.rgbStrToRgbaStr,f=Object(r.scaleLinear)(),d=Object(r.scaleLinear)(),p=[],m=l.curveLinear,y=s.schemeCategory10,b=Object(i.dispatch)("highlightStart","highlightEnd","animationEnd","openUrl"),v={x:0,y:0},x={width:0,height:0},O=!0,k=function(t){return t.groupLabel},j=function(){return""},L=c.getTooltip,w=function(t){return function(e){return t(e.y0+e.y)}},S=function(t){return g(t,1)},C=function(t){return g(t,.7)},A=function(t){return null!==t.y};function T(i){i.each(function(){if(p.length){var i=Object(a.select)(this),r=this.__chart__=f.copy(),c=this.__chart__=d.copy(),u=0;r.bandwidth&&(u=r.bandwidth()/2),h&&(p=p.filter(h));var g=i.selectAll("path").data([p[0]]);g=g.enter().append("path").merge(g);var v=Object(l.area)().defined(A).x(function(t){return r(t.x)+u}).y0(function(t){return c(t.y0)}).y1(w(c)).curve(m);g.attr("d",v(p)).style("fill",C(y[0])),function(n){b.on("highlightStart",function(a,i){e===a&&t===i&&n.transition().duration(150).ease(o.easeLinear).style("fill",S(y[0]))}),b.on("highlightEnd",function(a,i){e===a&&t===i&&n.transition().duration(150).ease(o.easeLinear).style("fill",C(y[0]))})}(g),function(t){t.classed("igc-chart-link",function(t){return!(!t||!t.link&&!t.titleLink)}).on("mouseover",function(){L().interaction("show")}).on("mousemove",function(t){Object(a.select)(this).transition().duration(150).ease(o.easeLinear).style("fill",S(y[0])),function(t,e){var n,a,i=Object(s.getMousePosition)(e),r=y[0];n=k(t),a=j(t),L().setText(n).setValue(a).setPosition(i,r)}(t,a.event)}).on("mouseout",function(){Object(a.select)(this).transition().duration(150).ease(o.easeLinear).style("fill",C(y[0])),L().hide()}).on("click",function(t){var e=t.link||t.titleLink;b.call("openUrl",null,e)})}(g),b.call("animationEnd"),n&&n.addListener({id:t,dispatch:b})}})}var I={scaleX:function(t){return arguments.length?(f=t,T):f},scaleY:function(t){return arguments.length?(d=t,T):d},data:function(t){return arguments.length?(p=t,T):p},interpolate:function(t){return arguments.length?(m=t,T):m},colors:function(t){return arguments.length?(y=t,T):y},groupId:function(t){return arguments.length?(e=t,T):e},chartId:function(e){return arguments.length?(t=e,T):t},dispatch:function(){return b},legend:function(t){return arguments.length?(n=t,T):n},filterFn:function(t){return arguments.length?(h=t,T):h},defined:function(t){return arguments.length?(A=t,T):A},bounds:function(t){return arguments.length?(x.width="number"==typeof t.width?t.width:x.width,x.height="number"==typeof t.height?t.height:x.height,T):x},offset:function(t){return arguments.length?(v.left="number"==typeof t.left?t.left:v.left,v.top="number"==typeof t.top?t.top:v.top,T):v},animate:function(t){return arguments.length?(O=t,T):O},tooltip:function(t){return arguments.length?(L=t,T):L},tooltipText:function(t){return arguments.length?(k=t,T):k},tooltipValue:function(t){return arguments.length?(j=t,T):j},y1:function(t){return arguments.length?(w=t,T):w},highlightStartColor:function(t){return arguments.length?(S=t,T):S},highlightEndColor:function(t){return arguments.length?(C=t,T):C}};return Object.assign(T,I),T}}}]);