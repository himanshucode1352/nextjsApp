(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9939],{6071:function(l,e,s){"use strict";var i=s(3848),n=s(9448);e.default=void 0;var a=n(s(7294)),c=s(1689),t=s(2441),u=s(5749),r={};function o(l,e,s,i){if(l&&(0,c.isLocalURL)(e)){l.prefetch(e,s,i).catch((function(l){0}));var n=i&&"undefined"!==typeof i.locale?i.locale:l&&l.locale;r[e+"%"+s+(n?"%"+n:"")]=!0}}var f=function(l){var e=!1!==l.prefetch,s=(0,t.useRouter)(),n=s&&s.asPath||"/",f=a.default.useMemo((function(){var e=(0,c.resolveHref)(n,l.href,!0),s=i(e,2),a=s[0],t=s[1];return{href:a,as:l.as?(0,c.resolveHref)(n,l.as):t||a}}),[n,l.href,l.as]),d=f.href,b=f.as,p=l.children,m=l.replace,x=l.shallow,h=l.scroll,v=l.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var N=a.Children.only(p),g=N&&"object"===typeof N&&N.ref,_=(0,u.useIntersection)({rootMargin:"200px"}),k=i(_,2),y=k[0],M=k[1],w=a.default.useCallback((function(l){y(l),g&&("function"===typeof g?g(l):"object"===typeof g&&(g.current=l))}),[g,y]);(0,a.useEffect)((function(){var l=M&&e&&(0,c.isLocalURL)(d),i="undefined"!==typeof v?v:s&&s.locale,n=r[d+"%"+b+(i?"%"+i:"")];l&&!n&&o(s,d,b,{locale:i})}),[b,d,M,v,e,s]);var E={ref:w,onClick:function(l){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(l),l.defaultPrevented||function(l,e,s,i,n,a,t,u){("A"!==l.currentTarget.nodeName||!function(l){var e=l.currentTarget.target;return e&&"_self"!==e||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.nativeEvent&&2===l.nativeEvent.which}(l)&&(0,c.isLocalURL)(s))&&(l.preventDefault(),null==t&&(t=i.indexOf("#")<0),e[n?"replace":"push"](s,i,{shallow:a,locale:u,scroll:t}))}(l,s,d,b,m,x,h,v)},onMouseEnter:function(l){(0,c.isLocalURL)(d)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(l),o(s,d,b,{priority:!0}))}};if(l.passHref||"a"===N.type&&!("href"in N.props)){var S="undefined"!==typeof v?v:s&&s.locale,C=s&&s.isLocaleDomain&&(0,c.getDomainLocale)(b,S,s&&s.locales,s&&s.domainLocales);E.href=C||(0,c.addBasePath)((0,c.addLocale)(b,S,s&&s.defaultLocale))}return a.default.cloneElement(N,E)};e.default=f},5749:function(l,e,s){"use strict";var i=s(3848);e.__esModule=!0,e.useIntersection=function(l){var e=l.rootMargin,s=l.disabled||!c,u=(0,n.useRef)(),r=(0,n.useState)(!1),o=i(r,2),f=o[0],d=o[1],b=(0,n.useCallback)((function(l){u.current&&(u.current(),u.current=void 0),s||f||l&&l.tagName&&(u.current=function(l,e,s){var i=function(l){var e=l.rootMargin||"",s=t.get(e);if(s)return s;var i=new Map,n=new IntersectionObserver((function(l){l.forEach((function(l){var e=i.get(l.target),s=l.isIntersecting||l.intersectionRatio>0;e&&s&&e(s)}))}),l);return t.set(e,s={id:e,observer:n,elements:i}),s}(s),n=i.id,a=i.observer,c=i.elements;return c.set(l,e),a.observe(l),function(){c.delete(l),a.unobserve(l),0===c.size&&(a.disconnect(),t.delete(n))}}(l,(function(l){return l&&d(l)}),{rootMargin:e}))}),[s,e,f]);return(0,n.useEffect)((function(){if(!c&&!f){var l=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(l)}}}),[f]),[b,f]};var n=s(7294),a=s(8391),c="undefined"!==typeof IntersectionObserver;var t=new Map},8783:function(l,e,s){"use strict";s.r(e);var i=s(7294),n=s(1664),a=s(1876),c=i.createElement;e.default=function(){return c(i.Fragment,null,c("div",{className:"pricing-area pt-100 pb-70 pd-subs"},c("div",{className:"container"},c("div",{className:"section-title"},c("span",{className:"top-title"},"What We Offer"),c("h2",null,"Our Subscription Plan"),c("p",null,'"India\u2019s largest patient outreach program is starting soon. Join Us today and serve millions." ')),c("div",{className:"row"},c("div",{className:"col-lg-3 col-sm-6 dr-sub"},c("div",{className:"single-pricing"},c("h3",null,"Benefits"),c("ul",null,c("li",{className:"txt_lef"},"Subscription Price"),c("li",{className:"txt_lef"},"Covid-19 Offer"),c("li",{className:"txt_lef"},"License Validity"),c("li",{className:"txt_lef"},"Our Offering per Patients"),c("li",{className:"txt_lef"},"General Physician ( MBBS Doctor)")),c(n.default,{href:"#"},c("a",{className:"default-btn hid_btn"},"Subscribe Now")))),c("div",{className:"col-lg-3 col-sm-6 dr-sub"},c("div",{className:"single-pricing"},c("h3",null,"XpressGo "),c("h1",null,c("del",{className:"dis_yr"},"Rs. 9, 999/-")),c("h1",null,"Free",c("p",null,"First 100 Doctor Only")),c("ul",null,c("li",null,"6 Months",c("del",{className:"dis_yr"},"3 Months")),c("li",null,c("i",{class:"bx bx-minus"})),c("li",null,"Upto 50%")),c(n.default,{href:"#"},c("a",{className:"default-btn"},"Subscribe Now")))),c("div",{className:"col-lg-3 col-sm-6 dr-sub"},c("div",{className:"single-pricing"},c("h3",null,"XpressPlus"),c("h1",null,c("del",{className:"dis_yr"},"Rs. 23, 999/-")),c("h1",null,"Rs. 21, 600/-",c("p",null,"10% Off")),c("ul",null,c("li",null,"12 Months",c("del",{className:"dis_yr"},"6 Months")),c("li",null,c("i",{class:"bx bx-minus"})),c("li",null,"Upto 50%")),c(n.default,{href:"#"},c("a",{className:"default-btn"},"Subscribe Now")))),c("div",{className:"col-lg-3 col-sm-6 dr-sub"},c("div",{className:"single-pricing"},c("h3",null,"XpressPro "),c("h1",null,c("del",{className:"dis_yr"},"Rs. 57,600/-")),c("h1",null,"Rs. 48, 960/-",c("p",null,"15% Off")),c("ul",null,c("li",null,"24 Months",c("del",{className:"dis_yr"},"1 Year")),c("li",null,c("i",{class:"bx bx-minus"})),c("li",null,"Upto 50%")),c(n.default,{href:"#"},c("a",{className:"default-btn"},"Subscribe Now")))),c(a.UQ,{allowZeroExpanded:!0},c(a.Qd,{uuid:"a"},c(a.Mt,{className:"pd_none"},c("div",{className:"row"},c("div",{className:"col-lg-3 col-sm-6 dr-sub"},c("div",{className:"single-pricing"},c("ul",null,c("li",{className:"txt_lef"},"Specialist Doctor"),c("li",{className:"txt_lef"},"Super Specilaist Doctor"),c("li",{className:"txt_lef"},"Patient - Super Specialist Cases"),c("li",{className:"txt_lef"},"General Case Fee"),c("li",{className:"txt_lef"},"Specialist Doctor Fee"),c("li",{className:"txt_lef"},"Total Social Media Post"),c("li",{className:"txt_lef"},"X-Post Subscription"),c("li",{className:"txt_lef"},"Content of Social Media"),c("li",{className:"txt_lef"},"Starter Kit- For Clinic/Hospital"),c("li",{className:"txt_lef"},"Author- The Cure Blog"),c("li",{className:"txt_lef"},"Eligibility For Webinar Guide")))),c("div",{className:"col-lg-3 col-sm-6 dr-sub"},c("div",{className:"single-pricing"},c("ul",null,c("li",null,"Upto 55%"),c("li",null,"Upto 60%"),c("li",null,c("i",{class:"bx bx-minus"})),c("li",null,c("i",{class:"bx bx-minus"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-minus"})),c("li",null,c("i",{class:"bx bx-minus"})),c("li",null,c("i",{class:"bx bx-minus"})),c("li",null,c("i",{class:"bx bx-minus"})),c("li",null,c("i",{class:"bx bx-minus"})),c("li",null,c("i",{class:"bx bx-minus"}))))),c("div",{className:"col-lg-3 col-sm-6 dr-sub"},c("div",{className:"single-pricing"},c("ul",null,c("li",null,"Upto 55%"),c("li",null,"Upto 60%"),c("li",null,"100"),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"}))))),c("div",{className:"col-lg-3 col-sm-6 dr-sub"},c("div",{className:"single-pricing"},c("ul",null,c("li",null,"Upto 55%"),c("li",null,"Upto 60%"),c("li",null,"250"),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"})),c("li",null,c("i",{class:"bx bx-check"}))))))),c(a.Ol,null,c(a.on,{className:"ud_btn"},c("span",null,c("img",{src:"/img/upd.png",className:"udb"}))))))))))}},9650:function(l,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return s(8783)}])},1664:function(l,e,s){l.exports=s(6071)}},function(l){l.O(0,[1876,2888,9774,179],(function(){return e=9650,l(l.s=e);var e}));var e=l.O();_N_E=e}]);