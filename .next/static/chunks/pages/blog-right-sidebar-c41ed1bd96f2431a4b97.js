(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7782],{3298:function(a,e,l){"use strict";l.r(e);var s=l(8805),i=l(1288),g=l(4261),t=l(6918),o=l(1664),n=l(1805),c=l(9669),m=l.n(c),r=l(7294),h=(l(3935),r.createElement);e.default=function(){var a=(0,r.useState)({}),e=a[0],l=a[1];(0,r.useEffect)((function(){m().get("http://148.72.214.135:5000/api/blog_list").then((function(a){l(a.data.msg);var e=a.data.msg;localStorage.setItem("blog_id",e._id),console.log(a.data.data,"yhgyhguyhghghghghghghgh")})).catch((function(a){console.log("error me aa gi hu me"),console.log(a)}))}),[]);var c=e;console.log(c,"kjkjkhh"),console.log("one hjghhghgvghvghvghvgvblog",c),console.log(typeof detal);var d=e.blog_img;return console.log(d,"list"),h(r.Fragment,null,h(s.Z,null),h(i.Z,{pageTitle:"Blog Right Sidebar",homePageUrl:"/",homePageText:"Home",activePageText:"Blog Right Sidebar",imgClass:"bg-1"}),h(r.Fragment,null,h("div",{className:"blog-details-area ptb-100"},h("div",{className:"container"},h("div",{className:"row"},h("div",{className:"col-lg-8 col-md-12"},h("div",{className:"blog-details-desc"},h("div",{className:"row"},h("div",{className:"col-lg-6 col-md-6"},h("div",{className:"single-blog"},h(o.default,{href:"/blog-details"},h("a",null,h("img",{src:"http://res.cloudinary.com/sveltose/image/upload/v1614780355/medial/1614780354544.jpg",alt:"Image"}))),h("span",null,c.createdAt),h("div",{className:"blog-content"},h("ul",null,h("li",null)),h(o.default,{href:"/blog-details"},h("a",null,h("h3",null,c.name))),h(o.default,{href:"/blog-details"},h("a",{className:"read-more"},"Read More ",h("i",{className:"bx bx-plus"})))))),h("div",{className:"col-lg-12"},h("div",{className:"page-navigation-area"},h("nav",{"aria-label":"Page navigation example text-center"},h("ul",{className:"pagination"},h("li",{className:"page-item"},h("a",{className:"page-link page-links",href:"#"},h("i",{className:"bx bx-chevrons-left"}))),h("li",{className:"page-item active"},h("a",{className:"page-link",href:"#"},"1")),h("li",{className:"page-item"},h("a",{className:"page-link",href:"#"},"2")),h("li",{className:"page-item"},h("a",{className:"page-link",href:"#"},"3")),h("li",{className:"page-item"},h("a",{className:"page-link",href:"#"},h("i",{className:"bx bx-chevrons-right"})))))))))),h("div",{className:"col-lg-4 col-md-12"},h("div",{className:"blog-right-sidebar"},h(n.Z,null))))))),h(g.Z,null),h(t.Z,null))}},3137:function(a,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-right-sidebar",function(){return l(3298)}])}},function(a){a.O(0,[6428,1354,2888,9774,179],(function(){return e=3137,a(a.s=e);var e}));var e=a.O();_N_E=e}]);