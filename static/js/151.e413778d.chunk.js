"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[151],{151:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var i=t(439),c=t(791),o=t(87),r=t(806),a=t(632),s="Home_homeText__tkIi1",h="Home_homeListItem__mazVQ",u="Home_icon__weEpO",l=t(184),m=function(){var e=(0,c.useState)([]),n=(0,i.Z)(e,2),t=n[0],m=n[1],d=(0,c.useMemo)((function(){return{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDI5ZWRlNzFmOTUxYjJhNDQ1ODk4NTZmNzA4MTgwZSIsInN1YiI6IjY0ZWNhNDUzYzNjODkxMDEzYWIzNjlkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQWCKvaWhnfo33nlqLxHjJ-bsZwjantxUmAW2OYqnv0"}}}),[]);return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",d).then((function(e){return e.json()})).then((function(e){return m(e.results)})).catch((function(e){return console.error(e)}))}),[d]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Trending today"}),(0,l.jsx)("ul",{children:t.map((function(e){return e.title&&(0,l.jsxs)("li",{className:h,children:[(0,l.jsx)(r.G,{icon:a.Tab,className:u}),(0,l.jsx)(o.OL,{to:"/movies/".concat(e.id),className:s,children:e.title})]},e.id)}))})]})}}}]);
//# sourceMappingURL=151.e413778d.chunk.js.map