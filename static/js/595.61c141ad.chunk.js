"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[595],{595:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(439),r=n(791),s=n(87),c=n(689),o="Movies_searchContainer__Y+Eq0",i="Movies_searchInput__IDNTA",u="Movies_searchButton__I-A1L",l="Movies_searchResults__gnGNF",h=n(184),f=function(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),n=t[0],f=t[1],_=(0,s.lr)(),d=(0,a.Z)(_,2),v=d[0],m=d[1],p=(0,c.TH)(),k=v.get("q")||"",g=(0,r.useState)(k),j=(0,a.Z)(g,2),x=j[0],C=j[1],w=function(){var e=x.toLowerCase();C(e),x?fetch("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=".concat("c429ede71f951b2a44589856f708180e","&query=").concat(x)).then((function(e){return e.json()})).then((function(e){e.results&&f(e.results)})).catch((function(e){return console.error(e)})):f([])};return(0,h.jsxs)("div",{className:o,children:[(0,h.jsxs)("form",{onClick:function(e){e.preventDefault(),w()},children:[(0,h.jsx)("input",{type:"text",placeholder:"Search movies",value:x,onChange:function(e){var t=e.target.value.toLowerCase();C(t),m({q:t})},className:i}),(0,h.jsx)("button",{onClick:w,className:u,children:"Search"})]}),(0,h.jsx)("ul",{className:l,children:n.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:p},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=595.61c141ad.chunk.js.map