(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(5),s=c.n(n),r=c(2),a=c(1),l=(c(11),c(12),c(13),c(0)),o=function(e){var t=e.todos,c=e.selectedUserId,n=Object(a.useState)(""),s=Object(r.a)(n,2),o=s[0],i=s[1],u=Object(a.useState)("All"),d=Object(r.a)(u,2),j=d[0],b=d[1],h=Object(a.useState)([]),p=Object(r.a)(h,2),O=p[0],m=p[1];Object(a.useEffect)((function(){m(t.filter((function(e){switch(j){case"All":default:return e;case"Active":return!e.completed;case"Completed":return e.completed}})))}),[j,t,o]);var f=O.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())}));return Object(l.jsxs)("div",{className:"TodoList",children:[Object(l.jsx)("h2",{children:"Todos:"}),Object(l.jsxs)("div",{className:"App__search",children:[Object(l.jsx)("label",{htmlFor:"search-todo",className:"App__search-label",children:"Search movie:"}),Object(l.jsx)("input",{type:"text",id:"search-todo",className:"App__search-input",placeholder:"Search",value:o,onChange:function(e){i(e.target.value)}})]}),Object(l.jsxs)("label",{htmlFor:"selectFilterByOption",children:["Select:\xa0",Object(l.jsxs)("select",{name:"select",id:"selectFilterByOption",defaultValue:"All",onChange:function(e){b(e.target.value)},children:[Object(l.jsx)("option",{value:"All",children:"All"}),Object(l.jsx)("option",{value:"Active",children:"Active"}),Object(l.jsx)("option",{value:"Completed",children:"Completed"})]})]}),Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){m(f.sort((function(){return Math.random()-.5})))},children:"Randomize"}),Object(l.jsx)("div",{className:"TodoList__list-container",children:Object(l.jsx)("ul",{className:"TodoList__list",children:f.map((function(e){return Object(l.jsxs)("li",{className:"TodoList__item\n                  ".concat(e.completed?"TodoList__item--checked":"TodoList__item--unchecked"),children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(l.jsx)("p",{children:e.title})]}),Object(l.jsxs)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){c(e.userId)},children:["User\xa0",e.userId]})]},e.id)}))})})]})},i=(c(15),c(6)),u=c(4),d=c.n(u),j=function(){var e=Object(i.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://mate.academy/students-api").concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();var b=function(e){var t=e.selectedUserId,c=e.getClear,n=Object(a.useState)(),s=Object(r.a)(n,2),o=s[0],i=s[1];return Object(a.useEffect)((function(){var e;(e=t,j("/users/".concat(e))).then((function(e){return i(e)}))}),[t]),Object(l.jsx)("div",{className:"CurrentUser",children:o?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"CurrentUser__title",children:Object(l.jsxs)("span",{children:["Selected user:",t]})}),Object(l.jsx)("h3",{className:"CurrentUser__name",children:null===o||void 0===o?void 0:o.name}),Object(l.jsx)("p",{className:"CurrentUser__email",children:null===o||void 0===o?void 0:o.email}),Object(l.jsx)("p",{className:"CurrentUser__phone",children:null===o||void 0===o?void 0:o.phone}),Object(l.jsx)("button",{className:"button",type:"button",onClick:c,children:"Clear"})]}):"Not found user"})},h=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),i=Object(r.a)(s,2),u=i[0],d=i[1];Object(a.useEffect)((function(){j("/todos").then((function(e){return d(e)}))}),[]);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(o,{todos:u,selectedUserId:n})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)("div",{className:"App__content-container",children:c?Object(l.jsx)(b,{selectedUserId:c,getClear:function(){n(0)}}):"No user selected"})})]})};s.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.b52e6291.chunk.js.map