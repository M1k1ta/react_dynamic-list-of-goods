(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e.n(r),c=e(3),a=e(6),u=e(2),s=e.n(u),i=e(1),d=e.n(i),f=(e(12),e(0)),l=d.a.memo((function(t){var n=t.goods;return Object(f.jsx)("ul",{children:n.map((function(t){return Object(f.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})}));function p(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()}))}var b=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],o=function(){var t=Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,p();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,p().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}));case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,p().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=Object(i.useMemo)((function(){return e}),[JSON.stringify(e)]);return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Dynamic list of Goods"}),Object(f.jsx)("button",{type:"button","data-cy":"all-button",onClick:o,children:"Load all goods"}),Object(f.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:u,children:"Load 5 first goods"}),Object(f.jsx)("button",{type:"button","data-cy":"red-button",onClick:d,children:"Load red goods"}),Object(f.jsx)(l,{goods:b})]})};o.a.render(Object(f.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.eadd853e.chunk.js.map