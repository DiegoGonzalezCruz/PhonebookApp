(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{46:function(e,n,t){"use strict";t.r(n);var r=t(20),a=t.n(r),c=t(4),u=t(2),s=t(0),o=function(e){var n=e.setFilterValue,t=e.filterValue;return Object(s.jsxs)("form",{children:[Object(s.jsx)("h1",{children:"Search"}),Object(s.jsx)("input",{value:t,onChange:function(e){n(e.target.value)}})]})},i=t(21),l=t(3),d=t.n(l),j=t(10),f=t(6),h=t.n(f),b="/api/persons",p=function(){var e=Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get(b);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("There is an error in getAll");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(b,n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("".concat(b,"/").concat(n));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),console.log("There is an error in delete phoneService");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),m={getAll:p,create:v,update:function(e,n){try{return h.a.put("".concat(b,"/").concat(e),n)}catch(t){console.log("There is an error in update")}},deleteId:O};function x(e){var n=e.setNewName,t=e.setNewPhone,r=e.newName,a=e.newPhone,c=e.persons,u=e.setPersons,o=e.handleMessage,l=function(e){return c.filter((function(n){return n.name===e})).length>0},d=function(e){var a=c.find((function(e){return e.name===r})).id;m.update(a,e).then((function(e){o("User updated ".concat(e.data.name));var r=Object(i.a)(c);r.find((function(n){return n.name===e.data.name})).number=e.data.number,u(r),n(""),t("")}))},j=function(e,n){return e?n?void 0:(o("There is no number"),!1):(o("There is no name"),!1)};return Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Add new entry"}),Object(s.jsx)("p",{children:"name:"}),Object(s.jsx)("input",{value:r,onChange:function(e){n(e.target.value)}}),Object(s.jsx)("p",{children:"telephone:"}),Object(s.jsx)("input",{value:a,onChange:function(e){t(e.target.value)}})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var s={name:r,number:a};if(!1!==j(r,a))return l(r)?d(s):void m.create(s).then((function(e){u(c.concat(e)),n(""),t(""),o("User created ".concat(e.name))})).catch((function(e){console.log(e.response),o("There is an error.")}))},children:"Add"})})]})}function g(e){var n=e.persons,t=e.filterValue,r=e.handleDelete,a=t?n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):n;return Object(s.jsx)("ul",{children:a.map((function(e){return Object(s.jsxs)("li",{children:[e.name," - ",e.number,Object(s.jsx)("button",{value:e.id,onClick:r,children:"Delete"})]},e.name+e.id+e.number)}))})}var w={color:"green",fontSize:20};function N(e){var n=e.message,t=e.userAdded;return""===n?"":Object(s.jsxs)("div",{className:w,children:[n," ",t]})}var k=function(){var e=Object(u.useState)([]),n=Object(c.a)(e,2),t=n[0],r=n[1],a=Object(u.useState)(""),i=Object(c.a)(a,2),l=i[0],d=i[1],j=Object(u.useState)(""),f=Object(c.a)(j,2),h=f[0],b=f[1],p=Object(u.useState)(""),v=Object(c.a)(p,2),O=v[0],w=v[1],k=Object(u.useState)(""),y=Object(c.a)(k,2),S=y[0],A=y[1];Object(u.useEffect)((function(){m.getAll().then((function(e){r(e)}))}),[]);var C=function(e){A(Object(s.jsx)("h1",{children:e})),setTimeout((function(){A("")}),3e3)};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(o,{setFilterValue:w}),Object(s.jsx)(x,{setNewName:d,setNewPhone:b,newName:l,newPhone:h,persons:t,setPersons:r,setMessage:A,handleMessage:C}),Object(s.jsx)(N,{message:S}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(g,{persons:t,filterValue:O,handleDelete:function(e){if(window.confirm("Are you sure?")){m.deleteId(e.target.value),r(t.filter((function(n){return n.id!==e.target.value})));var n=t.filter((function(n){return n.id===e.target.value}))[0].name;C("usuario ".concat(n," borrado"))}}})]})};a.a.render(Object(s.jsx)(k,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.694e520b.chunk.js.map