module.exports=function(e){function t(o){if(r[o])return r[o].exports;var i=r[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}var i=r(151),n=o(i);e.exports=n},4:function(e,t){e.exports=require("react")},61:function(e,t){e.exports=require("react-dom")},151:function(e,t,r){e.exports=function(e){function t(o){if(r[o])return r[o].exports;var i=r[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=r(1),n=(o(i),r(3)),a=o(n),s=r(5),l=o(s),p=r(4),u=o(p);e.exports={Area:a["default"],CirclePie:l["default"],BarMetric:u["default"]}},function(e,t){e.exports=r(4)},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=r(1),p=o(l),u=function(e){function t(){return i(this,t),n(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){return p["default"].createElement("svg",{className:"react-chart "+this.props.type,width:this.props.width,style:{overflow:"visible",border:this.props.border},height:this.props.height},this.props.children)}}]),t}(l.Component);u.defaultProps={border:"none",height:400,width:600},t["default"]=u},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),p=r(1),u=o(p),d=r(7),f=(o(d),r(6)),h=o(f),c=r(2),y=o(c),b=function(e){return"number"!=typeof e?e:e>1e9?Math.round(e/1e8)/10+"B":e>1e7?Math.round(e/1e6)+"M":e>1e6?Math.round(e/1e5)/10+"M":e>1e4?Math.round(e/1e3)+"K":e>1e3?Math.round(e/100)/10+"K":Math.round(100*e)/100},m=function(e){function t(){var e,r,o,i;n(this,t);for(var s=arguments.length,l=Array(s),p=0;s>p;p++)l[p]=arguments[p];return r=o=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.tipsData={},o.xAxisLabels=[],i=r,a(o,i)}return s(t,e),l(t,[{key:"describeLine",value:function(e,t,r,o,i,n,a){var s=this,l=0===i&&0===r;return e.map(function(e,o){return Math.max(0,(e.time-t)*n-s.props.strokeWidth)+","+(l?a:(i-(e.value-r))*a)}).join(" ")}},{key:"centerElement",value:function(e,t,r){var o=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];o&&e.setAttribute("width",r);var i=t-r/2;e.setAttribute("x",i)}},{key:"showPointTip",value:function(e,t){var r=this.refs[e.ref],o=r.getElementsByClassName("tip-background")[0],i=r.getElementsByClassName("tip-text-date")[0],n=r.getElementsByClassName("tip-text-value")[0];this.centerElement(i,this.tipsData[e.ref].xBase,i.getBBox().width),this.centerElement(n,this.tipsData[e.ref].xBase,n.getBBox().width),this.centerElement(o,this.tipsData[e.ref].xBase,Math.max(i.getBBox().width,n.getBBox().width)+2*this.props.tipsPadding,!0),r.style.display="block"}},{key:"hidePointTip",value:function(e,t){this.refs[e.ref].style.display="none"}},{key:"renderTipText",value:function(e,t){return e.replace("{{date}}",(0,h["default"])(t.date).format(t.dateFormat||"YYYY-MM-DD")).replace("{{date1}}",(0,h["default"])(t.date1).format(t.dateFormat||"YYYY-MM-DD")).replace("{{date2}}",(0,h["default"])(t.date2).format(t.dateFormat||"YYYY-MM-DD")).replace("{{value}}",b(t.value))}},{key:"renderTips",value:function(e,t,r,o,i,n,a){var s=this,l=void 0,p=void 0,d=void 0,f=void 0,h="{{value}} views",c=864e5,y=0===i&&0===r;return 0!==e.length?(l=1===e.length?0:e[1].time-e[0].time,l>27*c&&32*c>l?(p="MMMM",d="{{date}}"):l>c?(p="MMM Do",d="{{date1}} through {{date2}}"):(p="MMM Do",d="{{date}}"),e.map(function(o,c){if(0!==c&&c!==e.length-1){f=e[c+1]?e[c+1].time:o.time+l,o.label||(o.label=h);var b=(o.time-t)*n,m="point_"+c+"_tooltip",g=p,v=38,x=25,k=(y?a:(i-(o.value-r))*a)-s.props.tipsPadding/2,P=25,T=10,w=[b-s.props.tipStrokeWidth-P/2+","+(k-x+9),b-s.props.tipStrokeWidth+P/2+","+(k-x+9),b-s.props.tipStrokeWidth+","+(k-x+T+9)].join(" "),M=[b-s.props.tipStrokeWidth-P/2+","+(k-x+10),b-s.props.tipStrokeWidth+P/2+","+(k-x+10),b-s.props.tipStrokeWidth+","+(k-x+T+10)].join(" ");return s.tipsData[m]={xBase:b},new Date(o.time).getFullYear()!==(new Date).getFullYear()&&(g+=" YYYY"),u["default"].createElement("g",{key:"point-"+c,ref:m,style:{display:"none"}},u["default"].createElement("rect",{className:"tip-background",x:(o.time-t)*n-s.props.strokeWidth-s.props.tipsWidth/2,y:k-v-x,width:s.props.tipsWidth+s.props.tipsPadding,height:v+s.props.tipsPadding,style:{stroke:s.props.tipStrokeColor,strokeWidth:s.props.tipStrokeWidth,fill:s.props.tipsFill}}),u["default"].createElement("polygon",{points:M,style:{stroke:s.props.tipStrokeColor,opacity:.5,strokeWidth:s.props.tipStrokeWidth}}),u["default"].createElement("polygon",{points:w,style:{fill:s.props.tipsFill}}),u["default"].createElement("text",{className:"tip-text-date",x:b-s.props.tipsWidth/2+2,y:k-s.props.strokeWidth-v-x+s.props.tipsPadding+10,style:{fontSize:14,fontWeight:"light"},dangerouslySetInnerHTML:{__html:s.renderTipText(d,{dateFormat:g,date:o.time,date1:o.time,date2:f,value:o.value})}}),u["default"].createElement("text",{className:"tip-text-value",x:b-s.props.tipsWidth/2+2,y:k-s.props.strokeWidth-v-x+s.props.tipsPadding+30,style:{fontSize:16,fontWeight:"bold"},dangerouslySetInnerHTML:{__html:s.renderTipText(o.label,{value:o.value})}}))}})):void 0}},{key:"renderPoints",value:function(e,t,r,o,i,n,a){var s=this,l=0===i&&0===r;return e.map(function(o,p){return 0!==p&&p!==e.length-1?u["default"].createElement("circle",{key:"point-"+p,cx:(o.time-t)*n-s.props.strokeWidth/2,cy:l?a:(i-(o.value-r))*a,r:s.props.pointsRadius,onMouseOver:s.showPointTip.bind(s,{ref:"point_"+p+"_tooltip"}),onMouseLeave:s.hidePointTip.bind(s,{ref:"point_"+p+"_tooltip"}),style:{stroke:s.props.strokeColor,strokeWidth:s.props.strokeWidth,fill:"white",cursor:"default"}}):void 0})}},{key:"renderLabel",value:function(e,t){return e.x||("right"===this.props.yLabelsPosition?e.x=this.activeWidth+(this.props.yLabelsOutside?5:-1*(20+5*(e.txt.length||1))):e.x=20),e.ref||(e.ref=Math.random()+"."+Math.random()),u["default"].createElement("text",{key:"graph.xAxis.label."+(t||Math.random()),x:e.x,y:e.y,ref:e.ref,fill:this.props.labelColor,style:{fontSize:this.props.labelFontSize,textShadow:this.props.labelTextShadow}},e.txt)}},{key:"renderYGridLine",value:function(e,t){return u["default"].createElement("line",{key:"graph.ygridLine."+t,x1:"0",y1:e.y,x2:this.activeWidth-this.props.strokeWidth,y2:e.y,fill:this.props.labelColor,style:{stroke:this.props.gridColor,strokeWidth:1}})}},{key:"describeYAxis",value:function(e,t,r,o){function i(e,t){return t||(t=100),e>t&&i(e,5*t),Math.ceil(e/t)*t/10}var n=i(t,t/10),a=[1,2,3,4,5,6,7,8,9],s=[0,1,2,3,4],l=0===t&&0===e;return{gridLines:a.map(function(e){return{y:l?r:(t-e*n)*r}}),labels:s.map(function(o){var i=o*n*2;return{y:l?r:(t-o*n*2)*r,txt:b(i+e)}})}}},{key:"describeXAxis",value:function(e,t,r,o){var i=this,n=[1,2,3,4,5,6,7,8,9],a=o.length/n.length,s="ddd",l=[],p=864e5;return 1e4>e?{labels:[]}:(n.length>o.length&&(n=o.map(function(e,t){return t+1}),a=1),t>365*p*7?s="YYYY":t>30*p*9?s="MMM":t>7*p&&(s="MMM Do"),n.forEach(function(o,a){var p=e+o*(t/n.length);a<n.length-1&&l.push({txt:(0,h["default"])(p).format(s),time:p,x:(p-e)*r,y:i.activeHeight+30,ref:"xLabel."+a})}),this.xAxisLabels=l,{labels:l})}},{key:"centerXAxisLabelMarkers",value:function(){var e=this;this.xAxisLabels.forEach(function(t){var r=e.refs[t.ref];e.centerElement(r,t.x,r.getBBox().width)})}},{key:"componentDidMount",value:function(){this.centerXAxisLabelMarkers()}},{key:"componentDidUpdate",value:function(){this.centerXAxisLabelMarkers()}},{key:"render",value:function(){var e=this,t=this.props.data;this.activeWidth=this.props.width,this.activeHeight=this.props.height-50,t.forEach(function(e,r){e.time||(t[r].time=r),t[r].time=parseFloat(t[r].time)});var r=Math.max.apply(Math,i(t.map(function(e,t){return e.time})).concat([t.length])),o=Math.max.apply(Math,i(t.map(function(e){return e.value})))*(1+1/this.props.yPadding),n=Math.min.apply(Math,i(t.map(function(e,t){return e.time}))),a=this.props.useDynamicYMin?Math.min.apply(Math,i(t.map(function(e){return e.value})))-o/5:0,s=r-n,l=o-a,p=this.activeWidth/(s||1),d=this.activeHeight/(l||1),f=o/this.props.yPadding,h=this.describeLine(t,n,a,s,l,p,d),c=this.describeYAxis(a,l,d,f),b=this.describeXAxis(n,s,p,t),m=0===l&&0===a;return u["default"].createElement(y["default"],{width:this.props.width,height:this.props.height,type:"area"},c.gridLines.map(this.renderYGridLine.bind(this)),u["default"].createElement("polygon",{points:"0,"+((m?d:l*d)-this.props.strokeWidth)+" "+h+" "+((r-n)*p-this.props.strokeWidth)+","+((m?d:l*d)-this.props.strokeWidth),style:{fill:this.props.fillColor,strokeWidth:0}}),u["default"].createElement("polyline",{points:h,style:{stroke:this.props.strokeColor,strokeWidth:this.props.strokeWidth,fill:"none"}}),c.labels.map(this.renderLabel.bind(this)),b.labels.map(function(t,r){return u["default"].createElement("line",{key:"graph.xAxis.label."+r,ref:t.ref+".marker",x1:t.x,x2:t.x,y1:e.activeHeight,y2:e.activeHeight+10,stroke:e.props.gridColor,strokeWidth:1})}),b.labels.map(this.renderLabel.bind(this)),this.renderPoints(t,n,a,s,l,p,d,f),this.renderTips(t,n,a,s,l,p,d,f))}}]),t}(p.Component);m.propTypes={width:u["default"].PropTypes.number,height:u["default"].PropTypes.number,border:u["default"].PropTypes.string,strokeWidth:u["default"].PropTypes.number,useDynamicYMin:u["default"].PropTypes.bool,strokeColor:u["default"].PropTypes.string,pointsRadius:u["default"].PropTypes.number,tipsWidth:u["default"].PropTypes.number,tipsHeight:u["default"].PropTypes.number,tipsPadding:u["default"].PropTypes.number,tipStrokeWidth:u["default"].PropTypes.number,tipStrokeColor:u["default"].PropTypes.string,tipsFill:u["default"].PropTypes.string,gridColor:u["default"].PropTypes.string,labelFontSize:u["default"].PropTypes.number,labelTextShadow:u["default"].PropTypes.string,labelColor:u["default"].PropTypes.string,fillColor:u["default"].PropTypes.string,maxOverflow:u["default"].PropTypes.number,yLabelsOutside:u["default"].PropTypes.bool,yLabelsPosition:u["default"].PropTypes.string,yPadding:u["default"].PropTypes.number,data:u["default"].PropTypes.array},m.defaultProps={width:640,height:320,border:"none",strokeWidth:2,useDynamicYMin:!1,strokeColor:"#408AE5",pointsRadius:5,tipsWidth:240,tipsHeight:22,tipsPadding:10,tipStrokeWidth:1,tipStrokeColor:"#BBBBBB",tipsFill:"white",gridColor:"rgba(230,230,230,.5)",labelFontSize:12,labelTextShadow:"1px 1px #fff",labelColor:"#555",fillColor:"rgba(191, 216, 246, 0.3)",maxOverflow:20,yLabelsOutside:!1,yLabelsPosition:"left",yPadding:10,data:[]},t["default"]=m},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=r(1),p=o(l),u=function(e){function t(){return i(this,t),n(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){return p["default"].createElement("div",null,p["default"].createElement("div",{style:{fontSize:13,textTransform:"uppercase"}},this.props.label),p["default"].createElement("div",{className:"bar-row"},p["default"].createElement("div",{style:{backgroundColor:this.props.barRailColor,width:this.props.barWidth+"%",height:this.props.barHeight,marginTop:4,display:"inline-block",position:"relative"}},p["default"].createElement("div",{style:{width:this.props.percent+"%",height:this.props.barHeight,position:"absolute",backgroundColor:this.props.barColor,top:0,left:0,bottom:0,transition:"all .5s"}})),p["default"].createElement("div",{style:{width:100-this.props.barWidth+"%",paddingLeft:this.props.metricPadding,fontSize:13,display:"inline-block",color:this.props.metricColor,textAlign:"right"}},(this.props.value?this.props.value+" ":"")+this.props.metricName)),p["default"].createElement("br",{style:{display:"table",clear:"both"}}))}}]),t}(p["default"].Component);u.defaultProps={metricName:"points",value:0,percent:100,metricPadding:15,metricColor:"#777",barWidth:70,barHeight:7,barRailColor:"#ddd",barColor:"#408AE5",label:"N/A"},u.propTypes={metricName:p["default"].PropTypes.string,value:p["default"].PropTypes.number,percent:p["default"].PropTypes.number,barWidth:p["default"].PropTypes.number,barHeight:p["default"].PropTypes.number,metricPadding:p["default"].PropTypes.number,label:p["default"].PropTypes.string,metricColor:p["default"].PropTypes.string,barColor:p["default"].PropTypes.string,barRailColor:p["default"].PropTypes.string},t["default"]=u},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=r(1),p=o(l),u=r(2),d=o(u),f=function(e){function t(){return i(this,t),n(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),s(t,[{key:"polarToCartesian",value:function(e,t,r,o){var i=(o-90)*Math.PI/180;return{x:e+r*Math.cos(i),y:t+r*Math.sin(i)}}},{key:"describeArc",value:function(e,t,r,o,i){e&&t||console.error("x or y missing to describeArc");var n=this.polarToCartesian(e,t,r,i),a=this.polarToCartesian(e,t,r,o),s=180>=i-o?"0":"1";return["M",n.x,n.y,"A",r,r,0,s,0,a.x,a.y].join(" ")}},{key:"render",value:function(){var e=this.props.width/2-this.props.strokeWidth/2-this.props.padding,t=e+this.props.strokeWidth/2+this.props.padding,r=0,o=3.6*this.props.percent,i=this.describeArc(t,t,e,r,o);return p["default"].createElement(d["default"],{width:this.props.width,height:this.props.height,border:this.props.border},p["default"].createElement("circle",{cx:t,cy:t,r:e,fill:this.props.fillColor,stroke:this.props.railColor,strokeWidth:this.props.strokeWidth}),p["default"].createElement("path",{fill:this.props.fillColor,stroke:this.props.strokeColor,strokeWidth:this.props.strokeWidth,d:i}),p["default"].createElement("text",{x:t,y:t,dx:"-.5em",dy:".4em",fill:this.props.labelColor,fontSize:this.props.labelFontSize},this.props.percent+"%"))}}]),t}(l.Component);f.propTypes={width:p["default"].PropTypes.number,height:p["default"].PropTypes.number,strokeWidth:p["default"].PropTypes.number,strokeColor:p["default"].PropTypes.string,fillColor:p["default"].PropTypes.string,startAngle:p["default"].PropTypes.number,endAngle:p["default"].PropTypes.number,radius:p["default"].PropTypes.number},f.defaultProps={width:150,height:150,border:"none",strokeWidth:10,labelColor:"#111111",labelFontSize:"18px",strokeColor:"#408AE5",railColor:"#f5f5f5",fillColor:"none",percent:70,padding:0},t["default"]=f},function(e,t){e.exports=r(211)},function(e,t){e.exports=r(61)}])},211:function(e,t){e.exports=require("moment")}});
//# sourceMappingURL=salad-ui.chart.js.map