"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(e,t,n){n.r(t);var r=n(439),c=n(791),a=n(87),o=n(689),u=n(41),i=n(184);t.default=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],f=(0,c.useState)([]),p=(0,r.Z)(f,2),h=p[0],v=p[1],l=(0,a.lr)(),m=(0,r.Z)(l,2),d=m[0],x=m[1],w=(0,o.TH)();(0,c.useEffect)((function(){var e=d.get("query")||"";e&&(s(e),(0,u.z1)(e).then((function(e){return v(e.results)})))}),[d]);return(0,i.jsxs)("div",{className:"p-4",children:[(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x({query:n})},children:[(0,i.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)},className:"border p-2"}),(0,i.jsx)("button",{type:"submit",className:"ml-4 bg-blue-500 text-white p-2",children:"Search"})]}),(0,i.jsx)("ul",{className:"grid grid-cols-4 gap-4 mt-4",children:h.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsxs)(a.rU,{to:"/movies/".concat(e.id),state:{from:w.pathname,query:n},children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:e.title}),(0,i.jsx)("p",{children:e.title})]})},e.id)}))})]})}},41:function(e,t,n){function r(e,t,n,r,c,a,o){try{var u=e[a](o),i=u.value}catch(s){return void n(s)}u.done?t(i):Promise.resolve(i).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var o=e.apply(t,n);function u(e){r(o,c,a,u,i,"next",e)}function i(e){r(o,c,a,u,i,"throw",e)}u(void 0)}))}}n.d(t,{zv:function(){return h},TP:function(){return p},tx:function(){return v},Df:function(){return s},z1:function(){return f}});var a=n(757),o=n.n(a),u="e1796b07bf1840be8714f1cc473f123c",i="https://api.themoviedb.org/3",s=function(){var e=c(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/trending/movie/day?api_key=").concat(u));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Failed to fetch trending movies");case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=c(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Failed to search movies");case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=c(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(t,"?api_key=").concat(u));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Failed to fetch movie details");case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=c(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Failed to fetch movie credits");case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=c(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Failed to fetch movie reviews");case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.e36d664c.chunk.js.map