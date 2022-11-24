/*! For license information please see transfactoringCalculator.bundle.js.LICENSE.txt */
(()=>{var r={66:(t,e)=>{var r;void 0!==(e="function"==typeof(r=function(){"use strict";var lt="14.6.0";function ct(t){t.parentElement.removeChild(t)}function s(t){return null!=t}function ut(t){t.preventDefault()}function o(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function pt(t,e,r){0<r&&(ft(t,e),setTimeout(function(){mt(t,e)},r))}function dt(t){return Math.max(Math.min(t,100),0)}function ht(t){return Array.isArray(t)?t:[t]}function e(t){var e=(t=String(t)).split(".");return 1<e.length?e[1].length:0}function ft(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function mt(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function gt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function u(t,e){return 100/(e-t)}function p(t,e,r){return 100*e/(t[r+1]-t[r])}function d(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var i,n,o=d(r,t),a=t[o-1],s=t[o],l=e[o-1],c=e[o];return l+(n=r,p(i=[a,s],i[0]<0?n+Math.abs(i[0]):n-i[0],0)/u(l,c))}function i(t,e,r,i){if(100===i)return i;var n,o,a=d(i,t),s=t[a-1],l=t[a];return r?(l-s)/2<i-s?l:s:e[a-1]?t[a-1]+(n=i-t[a-1],o=e[a-1],Math.round(n/o)*o):i}function a(t,e,r){var i;if("number"==typeof e&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'range' contains invalid value.");if(!o(i="min"===t?0:"max"===t?100:parseFloat(t))||!o(e[0]))throw new Error("noUiSlider ("+lt+"): 'range' value isn't numeric.");r.xPct.push(i),r.xVal.push(e[0]),i?r.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(r.xSteps[0]=e[1]),r.xHighestCompleteStep.push(0)}function l(t,e,r){if(e)if(r.xVal[t]!==r.xVal[t+1]){r.xSteps[t]=p([r.xVal[t],r.xVal[t+1]],e,0)/u(r.xPct[t],r.xPct[t+1]);var i=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],n=Math.ceil(Number(i.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*n;r.xHighestCompleteStep[t]=o}else r.xSteps[t]=r.xHighestCompleteStep[t]=r.xVal[t]}function n(t,e,r){var i;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var n=[];for(i in t)t.hasOwnProperty(i)&&n.push([t[i],i]);for(n.length&&"object"==typeof n[0][0]?n.sort(function(t,e){return t[0][0]-e[0][0]}):n.sort(function(t,e){return t[0]-e[0]}),i=0;i<n.length;i++)a(n[i][1],n[i][0],this);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)l(i,this.xNumSteps[i],this)}n.prototype.getDistance=function(t){var e,r=[];for(e=0;e<this.xNumSteps.length-1;e++){var i=this.xNumSteps[e];if(i&&t/i%1!=0)throw new Error("noUiSlider ("+lt+"): 'limit', 'margin' and 'padding' of "+this.xPct[e]+"% range must be divisible by step.");r[e]=p(this.xVal,t,e)}return r},n.prototype.getAbsoluteDistance=function(t,e,r){var i,n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++;var o=1,a=e[n],s=0,l=0,c=0,u=0;for(i=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);0<a;)s=this.xPct[n+1+u]-this.xPct[n+u],100<e[n+u]*o+100-100*i?(l=s*i,o=(a-100*i)/e[n+u],i=1):(l=e[n+u]*s/100*o,o=0),r?(c-=l,1<=this.xPct.length+u&&u--):(c+=l,1<=this.xPct.length-u&&u++),a=e[n+u]*o;return t+c},n.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},n.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var i,n=d(r,e),o=t[n-1],a=t[n],s=e[n-1],l=e[n];return i=[o,a],(r-s)*u(s,l)*(i[1]-i[0])/100+i[0]}(this.xVal,this.xPct,t)},n.prototype.getStep=function(t){return t=i(this.xPct,this.xSteps,this.snap,t)},n.prototype.getDefaultStep=function(t,e,r){var i=d(t,this.xPct);return(100===t||e&&t===this.xPct[i-1])&&(i=Math.max(i-1,1)),(this.xVal[i]-this.xVal[i-1])/r},n.prototype.getNearbySteps=function(t){var e=d(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},n.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},n.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var c={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number},h={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"};function f(t){if("object"==typeof(e=t)&&"function"==typeof e.to&&"function"==typeof e.from)return!0;var e;throw new Error("noUiSlider ("+lt+"): 'format' requires 'to' and 'from' methods.")}function m(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'step' is not numeric.");t.singleStep=e}function g(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function x(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function b(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider ("+lt+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+lt+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new n(e,t.snap,t.singleStep)}function v(t,e){if(e=ht(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+lt+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function w(t,e){if("boolean"!=typeof(t.snap=e))throw new Error("noUiSlider ("+lt+"): 'snap' option must be a boolean.")}function y(t,e){if("boolean"!=typeof(t.animate=e))throw new Error("noUiSlider ("+lt+"): 'animate' option must be a boolean.")}function S(t,e){if("number"!=typeof(t.animationDuration=e))throw new Error("noUiSlider ("+lt+"): 'animationDuration' option must be a number.")}function U(t,e){var r,i=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)i.push(e);i.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+lt+"): 'connect' option doesn't match handle count.");i=e}t.connect=i}function k(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+lt+"): 'orientation' option is invalid.")}}function E(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function C(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+lt+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function z(t,e){var r;if(!o(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!o(e[0])&&!o(e[1]))throw new Error("noUiSlider ("+lt+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider ("+lt+"): 'padding' option must be a positive number(s).");var i=e[0]+e[1],n=t.spectrum.xVal[0];if(1<i/(t.spectrum.xVal[t.spectrum.xVal.length-1]-n))throw new Error("noUiSlider ("+lt+"): 'padding' option must not exceed 100% of the range.")}}function P(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+lt+"): 'direction' option was not recognized.")}}function A(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+lt+"): 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),i=0<=e.indexOf("drag"),n=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),a=0<=e.indexOf("hover"),s=0<=e.indexOf("unconstrained");if(n){if(2!==t.handles)throw new Error("noUiSlider ("+lt+"): 'fixed' behaviour must be used with 2 handles");E(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider ("+lt+"): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:i,fixed:n,snap:o,hover:a,unconstrained:s}}function N(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(!0)}else{if(t.tooltips=ht(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+lt+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider ("+lt+"): 'tooltips' must be passed a formatter or 'false'.")})}}function D(t,e){f(t.ariaFormat=e)}function M(t,e){f(t.format=e)}function F(t,e){if("boolean"!=typeof(t.keyboardSupport=e))throw new Error("noUiSlider ("+lt+"): 'keyboardSupport' option must be a boolean.")}function V(t,e){t.documentElement=e}function L(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+lt+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function O(t,e){if("object"!=typeof e)throw new Error("noUiSlider ("+lt+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var r in t.cssClasses={},e)e.hasOwnProperty(r)&&(t.cssClasses[r]=t.cssPrefix+e[r]);else t.cssClasses=e}function xt(e){var r={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:c,format:c},i={step:{r:!1,t:m},keyboardPageMultiplier:{r:!1,t:g},keyboardDefaultStep:{r:!1,t:x},start:{r:!0,t:v},connect:{r:!0,t:U},direction:{r:!0,t:P},snap:{r:!1,t:w},animate:{r:!1,t:y},animationDuration:{r:!1,t:S},range:{r:!0,t:b},orientation:{r:!1,t:k},margin:{r:!1,t:E},limit:{r:!1,t:C},padding:{r:!1,t:z},behaviour:{r:!0,t:A},ariaFormat:{r:!1,t:D},format:{r:!1,t:M},tooltips:{r:!1,t:N},keyboardSupport:{r:!0,t:F},documentElement:{r:!1,t:V},cssPrefix:{r:!0,t:L},cssClasses:{r:!0,t:O}},n={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:h,keyboardPageMultiplier:5,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(i).forEach(function(t){if(!s(e[t])&&void 0===n[t]){if(i[t].r)throw new Error("noUiSlider ("+lt+"): '"+t+"' is required.");return!0}i[t].t(r,s(e[t])?e[t]:n[t])}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,a=void 0!==t.style.transform;r.transformRule=a?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function T(e,b,o){var l,c,a,u,n,s,t,p,d=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},R=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),h=e,S=b.spectrum,v=[],w=[],f=[],m=0,g={},x=e.ownerDocument,y=b.documentElement||x.documentElement,U=x.body,B=-1,k=0,E=1,C=2,j="rtl"===x.dir||1===b.ort?0:100;function z(t,e){var r=x.createElement("div");return e&&ft(r,e),t.appendChild(r),r}function q(t,e){var r=z(t,b.cssClasses.origin),i=z(r,b.cssClasses.handle);return z(i,b.cssClasses.touchArea),i.setAttribute("data-handle",e),b.keyboardSupport&&(i.setAttribute("tabindex","0"),i.addEventListener("keydown",function(t){return function(t,e){if(_()||P(e))return!1;var r=["Left","Right"],i=["Down","Up"],n=["PageDown","PageUp"],o=["Home","End"];b.dir&&!b.ort?r.reverse():b.ort&&!b.dir&&(i.reverse(),n.reverse());var a,s=t.key.replace("Arrow",""),l=s===n[0],c=s===n[1],u=s===i[0]||s===r[0]||l,p=s===i[1]||s===r[1]||c,d=s===o[0],h=s===o[1];if(!(u||p||d||h))return!0;if(t.preventDefault(),p||u){var f=b.keyboardPageMultiplier,m=u?0:1,g=st(e),x=g[m];if(null===x)return!1;!1===x&&(x=S.getDefaultStep(w[e],u,b.keyboardDefaultStep)),(c||l)&&(x*=f),x=Math.max(x,1e-7),x*=u?-1:1,a=v[e]+x}else a=h?b.spectrum.xVal[b.spectrum.xVal.length-1]:b.spectrum.xVal[0];return T(e,S.toStepping(a),!0,!0),L("slide",e),L("update",e),L("change",e),L("set",e),!1}(t,e)})),i.setAttribute("role","slider"),i.setAttribute("aria-orientation",b.ort?"vertical":"horizontal"),0===e?ft(i,b.cssClasses.handleLower):e===b.handles-1&&ft(i,b.cssClasses.handleUpper),r}function $(t,e){return!!e&&z(t,b.cssClasses.connect)}function r(t,e){return!!b.tooltips[e]&&z(t.firstChild,b.cssClasses.tooltip)}function _(){return h.hasAttribute("disabled")}function P(t){return c[t].hasAttribute("disabled")}function A(){n&&(Q("update.tooltips"),n.forEach(function(t){t&&ct(t)}),n=null)}function I(){A(),n=c.map(r),J("update.tooltips",function(t,e,r){if(n[e]){var i=t[e];!0!==b.tooltips[e]&&(i=b.tooltips[e].to(r[e])),n[e].innerHTML=i}})}function X(e,n,o){var a=x.createElement("div"),s=[];s[k]=b.cssClasses.valueNormal,s[E]=b.cssClasses.valueLarge,s[C]=b.cssClasses.valueSub;var l=[];l[k]=b.cssClasses.markerNormal,l[E]=b.cssClasses.markerLarge,l[C]=b.cssClasses.markerSub;var c=[b.cssClasses.valueHorizontal,b.cssClasses.valueVertical],u=[b.cssClasses.markerHorizontal,b.cssClasses.markerVertical];function p(t,e){var r=e===b.cssClasses.value,i=r?s:l;return e+" "+(r?c:u)[b.ort]+" "+i[t]}return ft(a,b.cssClasses.pips),ft(a,0===b.ort?b.cssClasses.pipsHorizontal:b.cssClasses.pipsVertical),Object.keys(e).forEach(function(t){!function(t,e,r){if((r=n?n(e,r):r)!==B){var i=z(a,!1);i.className=p(r,b.cssClasses.marker),i.style[b.style]=t+"%",k<r&&((i=z(a,!1)).className=p(r,b.cssClasses.value),i.setAttribute("data-value",e),i.style[b.style]=t+"%",i.innerHTML=o.to(e))}}(t,e[t][0],e[t][1])}),a}function N(){u&&(ct(u),u=null)}function D(t){N();var m,g,x,b,e,r,v,w,y,i=t.mode,n=t.density||1,o=t.filter||!1,a=function(t,e,r){if("range"===t||"steps"===t)return S.xVal;if("count"===t){if(e<2)throw new Error("noUiSlider ("+lt+"): 'values' (>= 2) required for mode 'count'.");var i=e-1,n=100/i;for(e=[];i--;)e[i]=i*n;e.push(100),t="positions"}return"positions"===t?e.map(function(t){return S.fromStepping(r?S.getStep(t):t)}):"values"===t?r?e.map(function(t){return S.fromStepping(S.getStep(S.toStepping(t)))}):e:void 0}(i,t.values||!1,t.stepped||!1),s=(m=n,g=i,x=a,b={},e=S.xVal[0],r=S.xVal[S.xVal.length-1],w=v=!1,y=0,(x=x.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==e&&(x.unshift(e),v=!0),x[x.length-1]!==r&&(x.push(r),w=!0),x.forEach(function(t,e){var r,i,n,o,a,s,l,c,u,p,d=t,h=x[e+1],f="steps"===g;if(f&&(r=S.xNumSteps[e]),r||(r=h-d),!1!==d&&void 0!==h)for(r=Math.max(r,1e-7),i=d;i<=h;i=(i+r).toFixed(7)/1){for(c=(a=(o=S.toStepping(i))-y)/m,p=a/(u=Math.round(c)),n=1;n<=u;n+=1)b[(s=y+n*p).toFixed(5)]=[S.fromStepping(s),0];l=-1<x.indexOf(i)?E:f?C:k,!e&&v&&i!==h&&(l=0),i===h&&w||(b[o.toFixed(5)]=[i,l]),y=o}}),b),l=t.format||{to:Math.round};return u=h.appendChild(X(s,o,l))}function Y(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][b.ort];return 0===b.ort?t.width||l[e]:t.height||l[e]}function M(i,n,o,a){var e=function(t){return!!(t=function(t,e,r){var i,n,o=0===t.type.indexOf("touch"),a=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");0===t.type.indexOf("MSPointer")&&(s=!0);if(o){var l=function(t){return t.target===r||r.contains(t.target)||t.target.shadowRoot&&t.target.shadowRoot.contains(r)};if("touchstart"===t.type){var c=Array.prototype.filter.call(t.touches,l);if(1<c.length)return!1;i=c[0].pageX,n=c[0].pageY}else{var u=Array.prototype.find.call(t.changedTouches,l);if(!u)return!1;i=u.pageX,n=u.pageY}}e=e||gt(x),(a||s)&&(i=t.clientX+e.x,n=t.clientY+e.y);return t.pageOffset=e,t.points=[i,n],t.cursor=a||s,t}(t,a.pageOffset,a.target||n))&&(!(_()&&!a.doNotReject)&&(e=h,r=b.cssClasses.tap,!((e.classList?e.classList.contains(r):new RegExp("\\b"+r+"\\b").test(e.className))&&!a.doNotReject)&&(!(i===d.start&&void 0!==t.buttons&&1<t.buttons)&&((!a.hover||!t.buttons)&&(R||t.preventDefault(),t.calcPoint=t.points[b.ort],void o(t,a))))));var e,r},r=[];return i.split(" ").forEach(function(t){n.addEventListener(t,e,!!R&&{passive:!0}),r.push([t,e])}),r}function K(t){var e,r,i,n,o,a,s=100*(t-(e=l,r=b.ort,i=e.getBoundingClientRect(),n=e.ownerDocument,o=n.documentElement,a=gt(n),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(a.x=0),r?i.top+a.y-o.clientTop:i.left+a.x-o.clientLeft))/Y();return s=dt(s),b.dir?100-s:s}function Z(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&F(t,e)}function W(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return F(t,e);var r=(b.dir?-1:1)*(t.calcPoint-e.startCalcPoint);et(0<r,100*r/e.baseSize,e.locations,e.handleNumbers)}function F(t,e){e.handle&&(mt(e.handle,b.cssClasses.active),m-=1),e.listeners.forEach(function(t){y.removeEventListener(t[0],t[1])}),0===m&&(mt(h,b.cssClasses.drag),it(),t.cursor&&(U.style.cursor="",U.removeEventListener("selectstart",ut))),e.handleNumbers.forEach(function(t){L("change",t),L("set",t),L("end",t)})}function V(t,e){if(e.handleNumbers.some(P))return!1;var r;1===e.handleNumbers.length&&(r=c[e.handleNumbers[0]].children[0],m+=1,ft(r,b.cssClasses.active));t.stopPropagation();var i=[],n=M(d.move,y,W,{target:t.target,handle:r,listeners:i,startCalcPoint:t.calcPoint,baseSize:Y(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:w.slice()}),o=M(d.end,y,F,{target:t.target,handle:r,listeners:i,doNotReject:!0,handleNumbers:e.handleNumbers}),a=M("mouseout",y,Z,{target:t.target,handle:r,listeners:i,doNotReject:!0,handleNumbers:e.handleNumbers});i.push.apply(i,n.concat(o,a)),t.cursor&&(U.style.cursor=getComputedStyle(t.target).cursor,1<c.length&&ft(h,b.cssClasses.drag),U.addEventListener("selectstart",ut,!1)),e.handleNumbers.forEach(function(t){L("start",t)})}function i(t){if(!t.buttons&&!t.touches)return!1;t.stopPropagation();var n,o,a,e=K(t.calcPoint),r=(n=e,a=!(o=100),c.forEach(function(t,e){if(!P(e)){var r=w[e],i=Math.abs(r-n);(i<o||i<=o&&r<n||100===i&&100===o)&&(a=e,o=i)}}),a);if(!1===r)return!1;b.events.snap||pt(h,b.cssClasses.tap,b.animationDuration),T(r,e,!0,!0),it(),L("slide",r,!0),L("update",r,!0),L("change",r,!0),L("set",r,!0),b.events.snap&&V(t,{handleNumbers:[r]})}function G(t){var e=K(t.calcPoint),r=S.getStep(e),i=S.fromStepping(r);Object.keys(g).forEach(function(t){"hover"===t.split(".")[0]&&g[t].forEach(function(t){t.call(s,i)})})}function J(t,e){g[t]=g[t]||[],g[t].push(e),"update"===t.split(".")[0]&&c.forEach(function(t,e){L("update",e)})}function Q(t){var i=t&&t.split(".")[0],n=i&&t.substring(i.length);Object.keys(g).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);i&&i!==e||n&&n!==r||delete g[t]})}function L(r,i,n){Object.keys(g).forEach(function(t){var e=t.split(".")[0];r===e&&g[t].forEach(function(t){t.call(s,v.map(b.format.to),i,v.slice(),n||!1,w.slice(),s)})})}function O(t,e,r,i,n,o){var a;return 1<c.length&&!b.events.unconstrained&&(i&&0<e&&(a=S.getAbsoluteDistance(t[e-1],b.margin,0),r=Math.max(r,a)),n&&e<c.length-1&&(a=S.getAbsoluteDistance(t[e+1],b.margin,1),r=Math.min(r,a))),1<c.length&&b.limit&&(i&&0<e&&(a=S.getAbsoluteDistance(t[e-1],b.limit,0),r=Math.min(r,a)),n&&e<c.length-1&&(a=S.getAbsoluteDistance(t[e+1],b.limit,1),r=Math.max(r,a))),b.padding&&(0===e&&(a=S.getAbsoluteDistance(0,b.padding[0],0),r=Math.max(r,a)),e===c.length-1&&(a=S.getAbsoluteDistance(100,b.padding[1],1),r=Math.min(r,a))),!((r=dt(r=S.getStep(r)))===t[e]&&!o)&&r}function tt(t,e){var r=b.ort;return(r?e:t)+", "+(r?t:e)}function et(t,i,r,e){var n=r.slice(),o=[!t,t],a=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){var r=O(n,t,n[t]+i,o[e],a[e],!1);!1===r?i=0:(i=r-n[t],n[t]=r)}):o=a=[!0];var s=!1;e.forEach(function(t,e){s=T(t,r[t]+i,o[e],a[e])||s}),s&&e.forEach(function(t){L("update",t),L("slide",t)})}function rt(t,e){return b.dir?100-t-e:t}function it(){f.forEach(function(t){var e=50<w[t]?-1:1,r=3+(c.length+e*t);c[t].style.zIndex=r})}function T(t,e,r,i){return!1!==(e=O(w,t,e,r,i,!1))&&(function(t,e){w[t]=e,v[t]=S.fromStepping(e);var r="translate("+tt(10*(rt(e,0)-j)+"%","0")+")";c[t].style[b.transformRule]=r,nt(t),nt(t+1)}(t,e),!0)}function nt(t){if(a[t]){var e=0,r=100;0!==t&&(e=w[t-1]),t!==a.length-1&&(r=w[t]);var i=r-e,n="translate("+tt(rt(e,i)+"%","0")+")",o="scale("+tt(i/100,"1")+")";a[t].style[b.transformRule]=n+" "+o}}function ot(t,e){return null===t||!1===t||void 0===t?w[e]:("number"==typeof t&&(t=String(t)),t=b.format.from(t),!1===(t=S.toStepping(t))||isNaN(t)?w[e]:t)}function H(t,e){var r=ht(t),i=void 0===w[0];e=void 0===e||!!e,b.animate&&!i&&pt(h,b.cssClasses.tap,b.animationDuration),f.forEach(function(t){T(t,ot(r[t],t),!0,!1)});for(var n=1===f.length?0:1;n<f.length;++n)f.forEach(function(t){T(t,w[t],!0,!0)});it(),f.forEach(function(t){L("update",t),null!==r[t]&&e&&L("set",t)})}function at(){var t=v.map(b.format.to);return 1===t.length?t[0]:t}function st(t){var e=w[t],r=S.getNearbySteps(e),i=v[t],n=r.thisStep.step,o=null;if(b.snap)return[i-r.stepBefore.startValue||null,r.stepAfter.startValue-i||null];!1!==n&&i+n>r.stepAfter.startValue&&(n=r.stepAfter.startValue-i),o=i>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&i-r.stepBefore.highestStep,100===e?n=null:0===e&&(o=null);var a=S.countStepDecimals();return null!==n&&!1!==n&&(n=Number(n.toFixed(a))),null!==o&&!1!==o&&(o=Number(o.toFixed(a))),[o,n]}return ft(t=h,b.cssClasses.target),0===b.dir?ft(t,b.cssClasses.ltr):ft(t,b.cssClasses.rtl),0===b.ort?ft(t,b.cssClasses.horizontal):ft(t,b.cssClasses.vertical),ft(t,"rtl"===getComputedStyle(t).direction?b.cssClasses.textDirectionRtl:b.cssClasses.textDirectionLtr),l=z(t,b.cssClasses.base),function(t,e){var r=z(e,b.cssClasses.connects);c=[],(a=[]).push($(r,t[0]));for(var i=0;i<b.handles;i++)c.push(q(e,i)),f[i]=i,a.push($(r,t[i+1]))}(b.connect,l),(p=b.events).fixed||c.forEach(function(t,e){M(d.start,t.children[0],V,{handleNumbers:[e]})}),p.tap&&M(d.start,l,i,{}),p.hover&&M(d.move,l,G,{hover:!0}),p.drag&&a.forEach(function(t,e){if(!1!==t&&0!==e&&e!==a.length-1){var r=c[e-1],i=c[e],n=[t];ft(t,b.cssClasses.draggable),p.fixed&&(n.push(r.children[0]),n.push(i.children[0])),n.forEach(function(t){M(d.start,t,V,{handles:[r,i],handleNumbers:[e-1,e]})})}}),H(b.start),b.pips&&D(b.pips),b.tooltips&&I(),J("update",function(t,e,a,r,s){f.forEach(function(t){var e=c[t],r=O(w,t,0,!0,!0,!0),i=O(w,t,100,!0,!0,!0),n=s[t],o=b.ariaFormat.to(a[t]);r=S.fromStepping(r).toFixed(1),i=S.fromStepping(i).toFixed(1),n=S.fromStepping(n).toFixed(1),e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",i),e.children[0].setAttribute("aria-valuenow",n),e.children[0].setAttribute("aria-valuetext",o)})}),s={destroy:function(){for(var t in b.cssClasses)b.cssClasses.hasOwnProperty(t)&&mt(h,b.cssClasses[t]);for(;h.firstChild;)h.removeChild(h.firstChild);delete h.noUiSlider},steps:function(){return f.map(st)},on:J,off:Q,get:at,set:H,setHandle:function(t,e,r){if(!(0<=(t=Number(t))&&t<f.length))throw new Error("noUiSlider ("+lt+"): invalid handle number, got: "+t);T(t,ot(e,t),!0,!0),L("update",t),r&&L("set",t)},reset:function(t){H(b.start,t)},__moveHandles:function(t,e,r){et(t,e,w,r)},options:o,updateOptions:function(e,t){var r=at(),i=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];i.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var n=xt(o);i.forEach(function(t){void 0!==e[t]&&(b[t]=n[t])}),S=n.spectrum,b.margin=n.margin,b.limit=n.limit,b.padding=n.padding,b.pips?D(b.pips):N(),b.tooltips?I():A(),w=[],H(e.start||r,t)},target:h,removePips:N,removeTooltips:A,getTooltips:function(){return n},getOrigins:function(){return c},pips:D}}return{__spectrum:n,version:lt,cssClasses:h,create:function(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+lt+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+lt+"): Slider was already initialized.");var r=T(t,xt(e),e);return t.noUiSlider=r}}})?r.apply(e,[]):r)&&(t.exports=e)},526:(t,e)=>{var r;void 0!==(e="function"==typeof(r=function(){"use strict";var o=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function b(t){return t.split("").reverse().join("")}function f(t,e){return t.substring(0,e.length)===e}function a(t,e,r){if((t[e]||t[r])&&t[e]===t[r])throw new Error(e)}function v(t){return"number"==typeof t&&isFinite(t)}function r(t,e,r,i,n,o,a,s,l,c,u,p){var d,h,f,m=p,g="",x="";return o&&(p=o(p)),!!v(p)&&(!1!==t&&0===parseFloat(p.toFixed(t))&&(p=0),p<0&&(d=!0,p=Math.abs(p)),!1!==t&&(p=function(t,e){return t=t.toString().split("e"),(+((t=(t=Math.round(+(t[0]+"e"+(t[1]?+t[1]+e:e)))).toString().split("e"))[0]+"e"+(t[1]?t[1]-e:-e))).toFixed(e)}(p,t)),-1!==(p=p.toString()).indexOf(".")?(f=(h=p.split("."))[0],r&&(g=r+h[1])):f=p,e&&(f=b((f=b(f).match(/.{1,3}/g)).join(b(e)))),d&&s&&(x+=s),i&&(x+=i),d&&l&&(x+=l),x+=f,x+=g,n&&(x+=n),c&&(x=c(x,m)),x)}function i(t,e,r,i,n,o,a,s,l,c,u,p){var d,h="";return u&&(p=u(p)),!(!p||"string"!=typeof p)&&(s&&f(p,s)&&(p=p.replace(s,""),d=!0),i&&f(p,i)&&(p=p.replace(i,"")),l&&f(p,l)&&(p=p.replace(l,""),d=!0),n&&function(t,e){return t.slice(-1*e.length)===e}(p,n)&&(p=p.slice(0,-1*n.length)),e&&(p=p.split(e).join("")),r&&(p=p.replace(r,".")),d&&(h+="-"),""!==(h=(h+=p).replace(/[^0-9\.\-.]/g,""))&&(h=Number(h),a&&(h=a(h)),!!v(h)&&h))}function n(t,e,r){var i,n=[];for(i=0;i<o.length;i+=1)n.push(t[o[i]]);return n.push(r),e.apply("",n)}return function t(e){if(!(this instanceof t))return new t(e);"object"==typeof e&&(e=function(t){var e,r,i,n={};for(void 0===t.suffix&&(t.suffix=t.postfix),e=0;e<o.length;e+=1)if(void 0===(i=t[r=o[e]]))"negative"!==r||n.negativeBefore?"mark"===r&&"."!==n.thousand?n[r]=".":n[r]=!1:n[r]="-";else if("decimals"===r){if(!(0<=i&&i<8))throw new Error(r);n[r]=i}else if("encoder"===r||"decoder"===r||"edit"===r||"undo"===r){if("function"!=typeof i)throw new Error(r);n[r]=i}else{if("string"!=typeof i)throw new Error(r);n[r]=i}return a(n,"mark","thousand"),a(n,"prefix","negative"),a(n,"prefix","negativeBefore"),n}(e),this.to=function(t){return n(e,r,t)},this.from=function(t){return n(e,i,t)})}})?r.apply(e,[]):r)&&(t.exports=e)}},i={};function o(t){var e=i[t];return void 0!==e||(e=i[t]={exports:{}},r[t](e,e.exports,o)),e.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);(()=>{"use strict";var t=o(526),e=o.n(t),t=o(66),n=o.n(t);class r extends HTMLElement{FormatCurrency=null;optionCurrency=null;FormatEUR=e()({prefix:"€&nbsp;",decimals:0,thousand:","});optionEUR={currency:"EUR",start:[100],step:100,format:{thousand:",",prefix:"€&nbsp;",suffix:""},max:2400};option;translationsRaw="";translations=null;dayTranslate="dnů";calculationConstant1=.8;calculationConstant2=.2;calculationConstant3=.0666;currency=" CZK";sliderStart=1e3;sliderStep=1e3;sliderMax=6e4;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.periodicTranslationCheck()}periodicTranslationCheck(){setTimeout(()=>{let t;try{t=this.innerHTML}catch(t){}if(this.translationsRaw!==t){this.translationsRaw=t,this.translations=this.translationsRaw.split(";");try{this.dayTranslate=this.translations[9]??"dnů",this.calculationConstant1=+this.translations[10]??.8,this.calculationConstant2=+this.translations[11]??.2,this.calculationConstant3=+this.translations[12]??.0666,this.currency=this.translations[13]??"CZK",this.sliderStart=+this.translations[14]??1e3,this.sliderStep=+this.translations[15]??1e3,this.sliderMax=+this.translations[16]??6e4}catch(t){console.error(t)}this.FormatCurrency=e()({suffix:this.currency,decimals:0,thousand:"&nbsp;"}),this.optionCurrency={currency:this.currency,start:[this.sliderStart],step:this.sliderStep,format:{thousand:"&nbsp;",prefix:"",suffix:this.currency},max:this.sliderMax},this.option=this.optionCurrency,this.render()}setTimeout(()=>this.periodicTranslationCheck(),1e3)})}get url(){return this.getAttribute("url")??"#"}render(){var t,e=this.innerHTML.trim();"null"===e||null==e||""===e?this.shadow.innerHTML="":(this.shadow.innerHTML=(e=this.translations,t=this.url,`

    <div class="calculator">
      <div class="outer-body">
        <div class="body">
          <div class="header">${e?.[0]??"undefined"}
          <div class="currencies">
            <div id="cur-universal" class="currency active">${e?.[13].trim()}</div>
            <div id="cur-eur" class="currency">EUR</div>
          </div>
          </div>
    
          <div class="title">${e?.[1]??"undefined"}(<span id="cur-span" class="currency">${e?.[13].trim()}</span>)</div>
          <div class="slider-value" id="slider1-value">1000 CZK</div>
          <div id="slider1" class="slider"></div>
          <div class="slider-bottom"></div>
    
          <div class="title">${e?.[2]??"undefined"}</div>
          <div class="slider-value" id="slider2-value">30 undefined</div>
          <div id="slider2" class="slider"></div>
          <div class="slider-bottom"></div>
    
          <table class="table">
            <tr class="row1">
              <td class="left">
                <div class="row-text"><span class="text">${e?.[3]??"undefined"}
                <span>${e?.[4]??"undefined"}</span>
                ${e?.[5]??"undefined"}</span><span class="line"></span></div>
              </td>
              <td id="row1-value" class="right">-</td>
            </tr>
            <tr class="row2">
              <td class="left">
                <div class="row-text"><span class="text">${e?.[6]??"undefined"}</span><span class="line"></span></div>
              </td>
              <td id="row2-value" class="right">-</td>
            </tr>
            <tr class="row3">
              <td class="left">
                <div class="row-text"><span class="text">${e?.[7]??"undefined"}</span><span class="line"></span></div>
              </td>
              <td id="row3-value" class="right">-</td>
            </tr>
          </table>
    
          <div style="text-align: center"><a class="button" href="${t}">${e?.[8]??"undefined"}</a></div>
    
        </div>
      </div>
    </div>

`),this.shadow.innerHTML+=`<style>/*! nouislider - 14.6.0 - 6/27/2020 */
.noUi-target,.noUi-target *{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-ms-touch-action:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-moz-box-sizing:border-box;box-sizing:border-box}.noUi-target{position:relative}.noUi-base,.noUi-connects{width:100%;height:100%;position:relative;z-index:1}.noUi-connects{overflow:hidden;z-index:0}.noUi-connect,.noUi-origin{will-change:transform;position:absolute;z-index:1;top:0;right:0;-ms-transform-origin:0 0;-webkit-transform-origin:0 0;-webkit-transform-style:preserve-3d;transform-origin:0 0;transform-style:flat}.noUi-connect{height:100%;width:100%}.noUi-origin{height:10%;width:10%}.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin{left:0;right:auto}.noUi-vertical .noUi-origin{width:0}.noUi-horizontal .noUi-origin{height:0}.noUi-handle{-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute}.noUi-touch-area{height:100%;width:100%}.noUi-state-tap .noUi-connect,.noUi-state-tap .noUi-origin{-webkit-transition:transform .3s;transition:transform .3s}.noUi-state-drag *{cursor:inherit!important}.noUi-horizontal{height:18px}.noUi-horizontal .noUi-handle{width:34px;height:28px;right:-17px;top:-6px}.noUi-vertical{width:18px}.noUi-vertical .noUi-handle{width:28px;height:34px;right:-6px;top:-17px}.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle{left:-17px;right:auto}.noUi-target{background:#FAFAFA;border-radius:4px;border:1px solid #D3D3D3;box-shadow:inset 0 1px 1px #F0F0F0,0 3px 6px -5px #BBB}.noUi-connects{border-radius:3px}.noUi-connect{background:#3FB8AF}.noUi-draggable{cursor:ew-resize}.noUi-vertical .noUi-draggable{cursor:ns-resize}.noUi-handle{border:1px solid #D9D9D9;border-radius:3px;background:#FFF;cursor:default;box-shadow:inset 0 0 1px #FFF,inset 0 1px 7px #EBEBEB,0 3px 6px -3px #BBB}.noUi-active{box-shadow:inset 0 0 1px #FFF,inset 0 1px 7px #DDD,0 3px 6px -3px #BBB}.noUi-handle:after,.noUi-handle:before{content:"";display:block;position:absolute;height:14px;width:1px;background:#E8E7E6;left:14px;top:6px}.noUi-handle:after{left:17px}.noUi-vertical .noUi-handle:after,.noUi-vertical .noUi-handle:before{width:14px;height:1px;left:6px;top:14px}.noUi-vertical .noUi-handle:after{top:17px}[disabled] .noUi-connect{background:#B8B8B8}[disabled] .noUi-handle,[disabled].noUi-handle,[disabled].noUi-target{cursor:not-allowed}.noUi-pips,.noUi-pips *{-moz-box-sizing:border-box;box-sizing:border-box}.noUi-pips{position:absolute;color:#999}.noUi-value{position:absolute;white-space:nowrap;text-align:center}.noUi-value-sub{color:#ccc;font-size:10px}.noUi-marker{position:absolute;background:#CCC}.noUi-marker-sub{background:#AAA}.noUi-marker-large{background:#AAA}.noUi-pips-horizontal{padding:10px 0;height:80px;top:100%;left:0;width:100%}.noUi-value-horizontal{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.noUi-rtl .noUi-value-horizontal{-webkit-transform:translate(50%,50%);transform:translate(50%,50%)}.noUi-marker-horizontal.noUi-marker{margin-left:-1px;width:2px;height:5px}.noUi-marker-horizontal.noUi-marker-sub{height:10px}.noUi-marker-horizontal.noUi-marker-large{height:15px}.noUi-pips-vertical{padding:0 10px;height:100%;top:0;left:100%}.noUi-value-vertical{-webkit-transform:translate(0,-50%);transform:translate(0,-50%);padding-left:25px}.noUi-rtl .noUi-value-vertical{-webkit-transform:translate(0,50%);transform:translate(0,50%)}.noUi-marker-vertical.noUi-marker{width:5px;height:2px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub{width:10px}.noUi-marker-vertical.noUi-marker-large{width:15px}.noUi-tooltip{display:block;position:absolute;border:1px solid #D9D9D9;border-radius:3px;background:#fff;color:#000;padding:5px;text-align:center;white-space:nowrap}.noUi-horizontal .noUi-tooltip{-webkit-transform:translate(-50%,0);transform:translate(-50%,0);left:50%;bottom:120%}.noUi-vertical .noUi-tooltip{-webkit-transform:translate(0,-50%);transform:translate(0,-50%);top:50%;right:120%}.noUi-horizontal .noUi-origin>.noUi-tooltip{-webkit-transform:translate(50%,0);transform:translate(50%,0);left:auto;bottom:10px}.noUi-vertical .noUi-origin>.noUi-tooltip{-webkit-transform:translate(0,-18px);transform:translate(0,-18px);top:auto;right:28px}
</style>`,this.shadow.innerHTML+=`
<style>

.calculator {
    // width: 617px;
    max-width: 100%;
    z-index: 10;
    position:relative
}

.calculator .outer-body {
    -webkit-box-shadow: 0 0 100px 0 rgba(50, 50, 50, .75);
    box-shadow:0 0 100px 0 rgba(50, 50, 50, .75)
}

.calculator .body, .calculator .outer-body {
    border-right: : 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
}

.calculator .body {
    font-size: 20px;
    line-heihgt: 1.5em;
    -webkit-box-shadow: 0 0 10px 0 rgba(50, 50, 50, .75);
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, .75);
    background-color: #fff;
    padding-left: 35px;
    padding-right:35px
}

.calculator .header {
    background-color: #4b266c;
    position: relative;
    color: #fff;
    font-size: 32px;
    line-height: 40px;
    font-weight: 500;
    padding: 15px 145px 15px 15px;
    margin-bottom:35px
}

.calculator .header .currencies {
    position: absolute;
    top: 0;
    right: 0;
    width: 145px;
    text-align: center;
    background-color: #7ac4af;
    height: 70px;
    line-height: 70px;
    font-size:20px
}

.calculator .header .currencies .currency {
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    padding-left: 10px;
    padding-right:10px
}

.calculator .header .currencies .currency.active {
    text-decoration: underline;
    color:#4b266c
}

.calculator .header .currencies .currency:hover {
    text-decoration:underline
}

.noUi-horizontal .noUi-handle {
    width: 28px;
    height: 28px;
    background-color: #4b266c;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 0;
    top: -10px;
    right: -13px;
    border-radius: 15px;
    outline: 0;
}

.noUi-handle:after, .noUi-handle:before {
    display:none
}

.calculator .title {
    font-size: 25px;
    color: #7ac4af;
    font-weight: 500;
    margin-bottom:5px
}

.calculator .slider-value {
    text-align: right;
    color: #4b266c;
    font-weight: 700;
    margin-bottom:10px
}

.noUi-horizontal {
    height: 7px;
    background-color: #f2f2f7;
    border:0
}

.noUi-connect {
    background-color:#4b266c
}

.slider {
    margin-bottom:80px
}

.noUi-marker-horizontal.noUi-marker {
    display:none
}

.noUi-value {
    font-size: 20px;
    color: #5d5d5d;
    -webkit-transform: translate(0);
    transform:translate(0)
}

.noUi-value:last-child {
    text-align: right;
    left: auto !important;
    right:0
}

table {
    width: 100%;
    margin-bottom:20px
}

table td {
    padding-bottom:20px
}

table .left {
    font-size: 25px;
    line-height: 1.2em;
    font-weight: 500;
    color:#7ac4af
}

table .left .text span {
    color:#4b266c
}

table .left .row-text {
    position:relative
}

table .left .row-text .text {
    display: inline-block;
    background-color: #fff;
    padding-right: 5px;
    position: relative;
    z-index:5
}

table .left .row-text .line {
    position: absolute;
    z-index: 1;
    border-bottom: 1px dashed #7ac4af;
    right: 0;
    bottom: 6px;
    width:100%
}

table .right {
    padding-left: 10px;
    color: #4b266c;
    font-size: 25px;
    line-height: 1.2em;
    font-weight: 700;
    text-align:right
}

.language-de table .left, .language-de table .right {
    font-size:15px
}

.language-en table .left, .language-en table .right {
    font-size:20px
}

.button {
    display: inline-block;
    font-size: 20px;
    line-height: 30px;
    padding: 8px 60px;
    color: #4b266c;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    border: 2px solid #4b266c;
    border-radius:20px;
    margin-bottom: 20px;
}

.button:hover {
    color: #fff;
    background-color:#4b266c
}



@media (max-width: 1540px) {

    .calculator .header {
        font-size:25px
    }

    table .left, table .right {
        font-size:20px
    }
}

@media (max-width: 1240px) {
    

    .calculator {
        // width:470px
    }

    .calculator .header {
        font-size: 20px;
        line-height: 30px;
        padding-top: 10px;
        padding-bottom:10px
    }

    .calculator .header .currencies {
        width: 110px;
        height: 50px;
        line-height: 50px;
        font-size:15px
    }

    .calculator .title {
        font-size:20px
    }

    .noUi-value, table .left, table .right {
        font-size:15px
    }
}

@media (max-width: 768px) {
    .calculator .header {
        padding-right: 15px;
        padding-bottom: 30px;
        padding-top: 0;
        line-height: 30px;
        text-align: center;
        font-size:18px
    }

    .calculator .header .currencies {
        bottom: 0;
        width: 100%;
        top: auto;
        padding-top: 0;
        padding-bottom: 0;
        height: 30px;
        line-height:30px
    }

    .calculator .body {
        padding-left: 15px;
        padding-right:15px
    }

    .calculator .slider-value, .calculator .title {
        font-size:17px
    }

    table .left, table .right {
        font-size:14px
    }
}

</style>
`,this.currencyChangeSubscription(),this.initValueSlider(),this.initDuedateSlider(),this.calculatePrice())}initValueSlider(){var t=this.shadow.querySelectorAll("#slider1")[0];t&&t.noUiSlider&&t.noUiSlider.destroy(),n().create(t,{start:this.option.start,step:this.option.step,connect:[!0,!1],pips:{mode:"range",density:1e5,format:e()({decimals:0,thousand:this.option.format.thousand,prefix:this.option.format.prefix,suffix:this.option.format.suffix})},range:{min:[0],max:[this.option.max]}});const i=this.shadow.querySelectorAll("#slider1-value")[0];t.noUiSlider.on("update",(t,e)=>{let r=this.FormatCurrency.from(t[e]);t=this.option.currency;r=("EUR"===t?this.FormatEUR:this.FormatCurrency).to(r),i.innerHTML=r,this.calculatePrice()})}initDuedateSlider(){var t=this.shadow.querySelectorAll("#slider2")[0];t&&t.noUiSlider&&t.noUiSlider.destroy(),n().create(t,{start:[30],step:1,connect:[!0,!1],pips:{mode:"range",density:1e3,format:e()({decimals:0,thousand:" ",suffix:this.dayTranslate??" undefined"})},range:{min:[0],max:[90]}});const r=this.shadow.querySelectorAll("#slider2-value")[0];t.noUiSlider.on("update",(t,e)=>{t=parseInt(t[e]).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ");r.innerHTML=t+" dnů",this.calculatePrice()})}calculatePrice(){var t=parseInt(this.shadow.querySelectorAll("#slider1-value")[0].textContent.replace(/\s+/g,"").replace(",","").replace("€","")),e=parseInt(this.shadow.querySelectorAll("#slider2-value")[0].textContent.replace(/\s+/g,"").replace(",",""));let r=t*this.calculationConstant1,i=t/100*this.calculationConstant3*e,n=t*this.calculationConstant2-i;i=("EUR"===this.option.currency?(r=this.FormatEUR.to(r),n=this.FormatEUR.to(n),this.FormatEUR):(r=this.FormatCurrency.to(r),n=this.FormatCurrency.to(n),this.FormatCurrency)).to(i),this.shadow.querySelectorAll("#row1-value")[0].innerHTML=r,this.shadow.querySelectorAll("#row2-value")[0].innerHTML=n,this.shadow.querySelectorAll("#row3-value")[0].innerHTML=i}currencyChangeSubscription(){const t=this.shadow.querySelectorAll("#cur-universal")[0],e=this.shadow.querySelectorAll("#cur-eur")[0],r=this.shadow.querySelectorAll("#cur-span")[0];t.addEventListener("click",()=>{this.option!==this.optionCurrency&&(e.classList.remove("active"),t.classList.add("active"),this.option=this.optionCurrency,r.textContent=this.option.currency.trim(),this.initValueSlider())}),e.addEventListener("click",()=>{this.option!==this.optionEUR&&(t.classList.remove("active"),e.classList.add("active"),this.option=this.optionEUR,r.textContent=this.option.currency,this.initValueSlider())})}}customElements.define("transfactoring-calculator",r)})()})();