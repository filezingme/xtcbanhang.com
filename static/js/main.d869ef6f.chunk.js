(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(73),c=n.n(o),i=(n(84),n(74)),l=n(7),u=(n(86),n(44)),s=n.n(u),m=n(2),f=n(61),h=(n(124),function(e){var t=e.image,n=e.thumb,r=e.title,o=e.group;return a.a.createElement(f.LightgalleryItem,{group:o,src:t,thumb:n},a.a.createElement("img",{src:n,style:{width:"100%"},loading:"lazy",alt:r,title:r}))});var p=function(e){var t=e.data,n=e.showContactForm,o=Object(r.useState)([]),c=Object(l.a)(o,2),i=c[0],u=c[1],s=Object(r.useState)({}),p=Object(l.a)(s,2),d=p[0],g=p[1],v=Object(m.g)().categoryName;function y(e){return e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}return Object(r.useEffect)(function(){if(t.products)if(v){var e=t.products.filter(function(e){return e.category.toLowerCase()===v.toLowerCase()});u(e)}else u(t.products),g(t.siteInfo)},[v,t]),a.a.createElement(a.a.Fragment,null,i&&i.map(function(e){return a.a.createElement("section",{key:e.id},a.a.createElement("header",null,a.a.createElement("h1",null,e.title)),a.a.createElement("div",{className:"content"},a.a.createElement("section",null,a.a.createElement("header",null,a.a.createElement("h2",null,"Gi\xe1: ",a.a.createElement("span",{className:"price"},function(e,t){var n=e.priceInfo;return null!==e.priceInfo.percentagePriceIncrease&&void 0!==e.priceInfo.percentagePriceIncrease?y(n.price+n.percentagePriceIncrease/100*n.price):null!==t.percentagePriceIncreaseAppliesToAllProducts&&void 0!==t.percentagePriceIncreaseAppliesToAllProducts?y(n.price+t.percentagePriceIncreaseAppliesToAllProducts/100*n.price):y(n.price)}(e,d)),a.a.createElement("input",{type:"hidden",id:"price",value:y(e.priceInfo.price)}),a.a.createElement("input",{type:"hidden",id:"percentagePriceIncrease",value:e.priceInfo.percentagePriceIncrease}),a.a.createElement("input",{type:"hidden",id:"percentagePriceIncreaseAppliesToAllProducts",value:d.percentagePriceIncreaseAppliesToAllProducts})),a.a.createElement("h3",null,"M\xe3 sp: ",a.a.createElement("strong",null,e.id),a.a.createElement("br",null),"Nh\xf3m: ",a.a.createElement("a",{href:"/xtcbanhang.com"+"/category/".concat(e.category.toLowerCase())},e.category),a.a.createElement("br",null),a.a.createElement("br",null)),e.description&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("i",{className:"fas fa-quote-left fa-2x fa-pull-left"}),a.a.createElement("i",null,e.description))),a.a.createElement("h2",{className:"h2buy"},a.a.createElement("a",{href:"/#",className:"buy",onClick:function(r){return n(r,e,t.contactFormConfig)}},t.siteInfo.buyBtnText))),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"gallery"},a.a.createElement(f.LightgalleryProvider,null,e.images.map(function(t,n){return a.a.createElement(h,{key:n,image:"/xtcbanhang.com"+"/assets/images/product/".concat(t),thumb:"/xtcbanhang.com"+"/assets/images/product/thumbnail/".concat(t),title:e.title,group:e.id.toString()})})))))))}))},d=n(38),g=n(57);var v=function(e){var t=e.categoryList,n=e.handleClose,r=e.isShow;return t&&a.a.createElement(d.a,{show:r,onHide:n},a.a.createElement(d.a.Header,{closeButton:!0},a.a.createElement(d.a.Title,null,"NH\xd3M S\u1ea2N PH\u1ea8M")),a.a.createElement(d.a.Body,null,a.a.createElement(g.a,{className:"flex-column"},a.a.createElement(g.a.Link,{href:"/xtcbanhang.com"},a.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"})," ",a.a.createElement("b",null,"Trang ch\u1ee7")),t.map(function(e,t){return a.a.createElement(a.a.Fragment,{key:t},a.a.createElement(g.a.Link,{href:"/xtcbanhang.com"+"/category/".concat(e.name.toLowerCase())},a.a.createElement("i",{className:"fas fa-angle-right"})," ",e.name," (",e.count,")"))}))))},y=n(60),E=n(15),b=n.n(E),w=n(62),x=n(24),O=n(31),j=n(76),L=n(34);n(129);var C=function(e){var t=e.siteInfo,n=e.handleClose,o=e.isShow,c=e.product,i=e.contactFormConfig,u=Object(r.useState)(!1),m=Object(l.a)(u,2),f=m[0],h=m[1],p=Object(r.useState)(""),d=Object(l.a)(p,2),g=d[0],v=d[1],y=Object(r.useState)(""),E=Object(l.a)(y,2),b=E[0],C=E[1],N=Object(r.useState)(""),I=Object(l.a)(N,2),S=I[0],T=I[1],P=Object(r.useState)(!1),F=Object(l.a)(P,2),k=F[0],A=F[1],_=Object(r.useState)(!1),G=Object(l.a)(_,2),B=G[0],D=G[1];return Object(r.useEffect)(function(){D(!1),h(!1)},[o]),t&&c&&i&&a.a.createElement(a.a.Fragment,null,a.a.createElement(O.a,{size:"lg",show:o,onHide:n,backdrop:"static",keyboard:!1},a.a.createElement(x.a,{noValidate:!0,validated:f,onSubmit:function(e){if(!1===e.currentTarget.checkValidity())e.preventDefault(),e.stopPropagation();else{e.preventDefault();var t={title:'[xtcbanhang.com] - Li\xean h\u1ec7 mua "'.concat(c.title," (").concat(c.id,')"'),name:g,email:b,content:S,contactFormConfig:{receiverEmail:i.receiverEmail,receiverName:i.receiverName,cc:i.cc,bcc:i.bcc}};A(!0),s()({url:"https://script.google.com/macros/s/AKfycbws3IRyhVC5QjuWWkDYzN4zy3-K3U4udXB3rvckZwJb8ZomgXMtJJD_plSUYqVdZZx8tw/exec",method:"post",headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"},data:t}).then(function(e){A(!1),D(!0),v(""),C(""),T(""),h(!1)}).catch(function(e){console.log(e)})}h(!0)}.bind(this)},a.a.createElement(O.a.Header,{closeButton:!0},a.a.createElement(O.a.Title,null,'Li\xean h\u1ec7 mua "',c.title," (",c.id,')"'),k&&a.a.createElement("img",{id:"imgloading",src:"/xtcbanhang.com/assets/images/loading.gif",title:"loading",alt:"loading"}),B&&a.a.createElement("p",{id:"ploading"},"\u2714 \u0110\xe3 g\u1eedi.")),a.a.createElement(O.a.Body,null,a.a.createElement(x.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1"},a.a.createElement(j.a,null,a.a.createElement(L.a,{xs:6,md:6},a.a.createElement(x.a.Control,{type:"text",placeholder:"T\xean",required:!0,value:g,onChange:function(e){return v(e.target.value)}})),a.a.createElement(L.a,{xs:6,md:6},a.a.createElement(x.a.Control,{type:"email",placeholder:"Email",required:!0,value:b,onChange:function(e){return C(e.target.value)}})))),a.a.createElement(x.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},a.a.createElement(x.a.Control,{as:"textarea",rows:6,placeholder:"Th\xf4ng tin li\xean h\u1ec7",required:!0,value:S,onChange:function(e){return T(e.target.value)}}))),a.a.createElement(O.a.Footer,null,a.a.createElement(w.a,{variant:"secondary",onClick:n},"\u0110\xf3ng"),a.a.createElement(w.a,{variant:"primary",type:"submit"},"G\u1eedi")))))};var N=function(e){var t=e.showCopyright;return Object(r.useEffect)(function(){return console.log("PageNotFound useEffect"),t(!1),function(e){console.log("PageNotFound unmounts")}},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("h1",null,":("),a.a.createElement("h1",null,"There's nothing here!")))};function I(){I=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(C){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new O(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=b(c,n);if(i){if(i===s)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=l;var s={};function m(){}function f(){}function h(){}var p={};i(p,a,function(){return this});var d=Object.getPrototypeOf,g=d&&d(d(j([])));g&&g!==t&&n.call(g,a)&&(p=g);var v=h.prototype=m.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,i){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){s.value=e,c(s)},function(e){return r("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=h,i(v,"constructor",h),i(h,"constructor",f),f.displayName=i(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(E.prototype),i(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},y(v),i(v,c,"Generator"),i(v,a,function(){return this}),i(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var S=function(){var e=Object(r.useState)({}),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)([]),u=Object(l.a)(c,2),f=u[0],h=u[1];Object(r.useEffect)(function(){function e(){return(e=Object(i.a)(I().mark(function e(){var t,n,r,a;return I().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/xtcbanhang.com/data.json");case 2:t=e.sent,n=t.data,document.title=n.siteInfo.pageTitle,o(n),n.products&&(r=Array.from(new Set(n.products.map(function(e){return e.category}))))&&(a=[],r.forEach(function(e){var t={name:e,count:n.products.filter(function(t){return t.category===e}).length};a.push(t)}),h(a));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),b()(window).on("scroll",function(){b()(this).scrollTop()>100?b()("#toTop").fadeIn():b()("#toTop").fadeOut(),b()(window).scrollTop()+b()(window).height()===b()(document).height()?b()("#toBottom").fadeOut():b()("#toBottom").fadeIn()});var d=Object(r.useState)(!1),g=Object(l.a)(d,2),E=g[0],w=g[1],x=Object(r.useState)({}),O=Object(l.a)(x,2),j=O[0],L=O[1],S=Object(r.useState)({}),T=Object(l.a)(S,2),P=T[0],F=T[1],k=function(e,t,n){e.preventDefault(),w(!0),L(t),F(n)},A=Object(r.useState)(!1),_=Object(l.a)(A,2),G=_[0],B=_[1],D=Object(r.useState)(!0),H=Object(l.a)(D,2),q=H[0],J=H[1];return a.a.createElement(y.a,{basename:"/xtcbanhang.com"},a.a.createElement("div",{id:"wrapper"},a.a.createElement(m.c,null,a.a.createElement(m.a,{path:"/",element:a.a.createElement(p,{data:n,showContactForm:k}),exact:!0}),a.a.createElement(m.a,{path:"/category/:categoryName",element:a.a.createElement(p,{data:n,showContactForm:k})}),a.a.createElement(m.a,{path:"*",element:a.a.createElement(N,{showCopyright:function(e){J(e)}})})),a.a.createElement(v,{categoryList:f,handleClose:function(){B(!1)},isShow:G}),a.a.createElement(C,{siteInfo:n.siteInfo,handleClose:function(){w(!1)},isShow:E,product:j,contactFormConfig:P}),q&&a.a.createElement("div",{className:"copyright"},"\xa9 All rights reserved."),a.a.createElement("a",{href:"/#",className:"menu-toggle menu-ontop",onClick:function(e){return function(e){e.preventDefault(),B(!0)}(e)}},a.a.createElement("span",null)),a.a.createElement("i",{className:"fa fa-arrow-up",id:"toTop",onClick:function(){return b()("html, body").animate({scrollTop:0},100),!1}}),a.a.createElement("i",{className:"fa fa-arrow-down",id:"toBottom",onClick:function(){return b()("html, body").animate({scrollTop:b()(document).height()},100),!1}})))},T=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,133)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(S,null))),T()},77:function(e,t,n){e.exports=n(131)},84:function(e,t,n){},86:function(e,t,n){}},[[77,3,2]]]);
//# sourceMappingURL=main.d869ef6f.chunk.js.map