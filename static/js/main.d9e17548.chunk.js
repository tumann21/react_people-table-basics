(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(9),s=c.n(n),j=c(5),a=(c(14),c(2)),r=c(0),i=c.n(r),l=(c(15),c(1)),o=i.a.memo((function(){return Object(l.jsx)("div",{className:"home",children:Object(l.jsx)("h2",{className:"home__title",children:"Home page"})})})),b=c(8),d=c(4),h=i.a.memo((function(e){var t=e.person;return Object(l.jsxs)("tr",{className:"Person",children:[Object(l.jsx)("td",{children:t.name}),Object(l.jsx)("td",{children:t.sex}),Object(l.jsx)("td",{children:t.born}),Object(l.jsx)("td",{children:t.died}),Object(l.jsx)("td",{children:t.fatherName}),Object(l.jsx)("td",{children:t.motherName})]})})),m=(c(17),i.a.memo((function(e){var t=e.people;return Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"PeopleTable",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Sex"}),Object(l.jsx)("td",{children:"Born"}),Object(l.jsx)("td",{children:"Died"}),Object(l.jsx)("td",{children:"Father"}),Object(l.jsx)("td",{children:"Mother"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(h,{person:e},e.slug)}))})]})})}))),O=(c(18),i.a.memo((function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return e})).then((function(e){return n(e)}))}),[]);var s=Object(r.useMemo)((function(){return c.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{father:c.find((function(t){return t.name===e.fatherName})),mother:c.find((function(t){return t.name===e.motherName}))})}))}),[c]);return Object(l.jsxs)("div",{className:"peoplePage",children:[Object(l.jsx)("h2",{className:"peoplePage__title",children:"People page"}),Object(l.jsx)(m,{people:s})]})}))),u=(c(19),i.a.memo((function(){return Object(l.jsx)("div",{className:"notFound",children:Object(l.jsx)("h2",{className:"notFound__title",children:"Page not found"})})}))),p=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("nav",{children:Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(j.b,{className:"nav__link",to:"/",children:"Home page"}),Object(l.jsx)(j.b,{className:"nav__link",to:"/people",children:"People page"})]})}),Object(l.jsxs)(a.d,{children:[Object(l.jsx)(a.b,{path:"/",element:Object(l.jsx)(o,{})}),Object(l.jsx)(a.b,{path:"/people",element:Object(l.jsx)(O,{})}),Object(l.jsx)(a.b,{path:"/home",element:Object(l.jsx)(a.a,{replace:!0,to:"/"})}),Object(l.jsx)(a.b,{path:"*",element:Object(l.jsx)(u,{})})]})]})};s.a.render(Object(l.jsx)(j.a,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.d9e17548.chunk.js.map