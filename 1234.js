!function(t){function n(t){return new n.fn.init(t)}function e(t){var n,e=[],i=document.createElement("div");for(i.innerHTML=t,n=0;n<i.childNodes.length;n++)e.push(i.childNodes[n]);return e}var i=[],r=i.push,o=i.slice;n.fn=n.prototype={constructor:n,type:"Itcast",length:0,init:function(t){return t?"string"==typeof t?"<"==t.charAt(0)&&">"==t.charAt(t.length-1)?(r.apply(this,n.parseHTML(t)),this):(r.apply(this,n.select(t)),this):(t.nodeType&&(this[0]=t,this.length=1),void("Itcast"==t.type&&r.apply(this,t))):this},each:function(t){return n.each(this,t)},map:function(t){return n.map(this,t)},toArray:function(){return o.call(this)},get:function(t){return void 0===t?this.toArray():t>=0?this[t]:t<0?this[this.length+t]:this}},n.fn.init.prototype=n.fn,n.isArrayLike=function(t){var n=t&&t.length;return"number"==typeof n&&n>=0},n.each=function(t,e){var i,r;if(n.isArrayLike(t))for(i=0;i<t.length&&!1!==e.call(t[i],i,t[i]);i++);else for(r in t)if(!1===e.call(t[i],r,t[r]))break;return t},n.map=function(t,e){var i,r,o,s=[];if(n.isArrayLike(t))for(i=0;i<t.length;i++)void 0!==(o=e(t[i],i))&&s.push(o);else for(r in t)void 0!==(o=e(t[r],r))&&s.push(o);return s},n.select=function(t){return document.querySelectorAll(t)},n.extend=n.fn.extend=function(t){for(var n in t)this[n]=t[n]},n.parseHTML=e,t.Itcast=t.I=n}(window);











var n  =1 ;