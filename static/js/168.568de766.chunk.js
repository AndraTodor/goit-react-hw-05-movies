"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(439),c=e(791),a=e(689),u=e(818),s="Reviews_reviewsList__hDAQA",i="Reviews_noReviews__TJWdg",o=e(184),f=function(){var t=(0,a.UO)().movieId,n=(0,c.useState)([]),e=(0,r.Z)(n,2),f=e[0],p=e[1];return(0,c.useEffect)((function(){(0,u.tx)(t).then(p)}),[t]),(0,o.jsx)("div",{className:s,children:f.length?(0,o.jsx)("ul",{children:f.map((function(t){return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{children:(0,o.jsx)("strong",{children:t.author})}),(0,o.jsx)("p",{children:t.content})]},t.id)}))}):(0,o.jsx)("p",{className:i,children:"No reviews found"})})}},818:function(t,n,e){e.d(n,{Df:function(){return o},M1:function(){return v},TP:function(){return p},tx:function(){return d},z1:function(){return f}});var r=e(861),c=e(757),a=e.n(c),u=e(759),s="e1796b07bf1840be8714f1cc473f123c",i="https://api.themoviedb.org/3",o=function(){var t=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.568de766.chunk.js.map