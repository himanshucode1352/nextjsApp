(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1816],{6071:function(e,t,n){"use strict";var o=n(3848),r=n(9448);t.default=void 0;var i=r(n(7294)),a=n(1689),s=n(2441),u=n(5749),l={};function c(e,t,n,o){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.asPath||"/",f=i.default.useMemo((function(){var t=(0,a.resolveHref)(r,e.href,!0),n=o(t,2),i=n[0],s=n[1];return{href:i,as:e.as?(0,a.resolveHref)(r,e.as):s||i}}),[r,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var g=i.Children.only(v),w=g&&"object"===typeof g&&g.ref,E=(0,u.useIntersection)({rootMargin:"200px"}),O=o(E,2),_=O[0],N=O[1],M=i.default.useCallback((function(e){_(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,_]);(0,i.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(d),o="undefined"!==typeof b?b:n&&n.locale,r=l[d+"%"+p+(o?"%"+o:"")];e&&!r&&c(n,d,p,{locale:o})}),[p,d,N,b,t,n]);var C={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,i,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:i,locale:u,scroll:s}))}(e,n,d,p,h,m,y,b)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),c(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof b?b:n&&n.locale,P=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,k,n&&n.locales,n&&n.domainLocales);C.href=P||(0,a.addBasePath)((0,a.addLocale)(p,k,n&&n.defaultLocale))}return i.default.cloneElement(g,C)};t.default=f},5749:function(e,t,n){"use strict";var o=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=(0,r.useRef)(),l=(0,r.useState)(!1),c=o(l,2),f=c[0],d=c[1],p=(0,r.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:o}),n}(n),r=o.id,i=o.observer,a=o.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,r.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var r=n(7294),i=n(8391),a="undefined"!==typeof IntersectionObserver;var s=new Map},7070:function(e,t,n){"use strict";n.r(t);var o=n(9227),r=n(7294),i=(n(1664),n(3336)),a=n(1239),s=r.createElement;t.default=function(){var e=r.useState(!0),t=(0,o.Z)(e,2),n=t[0],u=t[1];return s(r.Fragment,null,s("div",{className:"container-fluid"},s("div",{className:"row"},s("div",{className:"col-lg-6"},s("div",{className:"banner-text"},s(i.Z,{animation:"fadeInUp",delay:"1s"},s("div",{className:"banner-btn"},s("div",{onClick:function(e){e.preventDefault(),u(!n)},className:"default-btn active popup-youtube"},"Play Now"))))))),s(a.Z,{channel:"youtube",isOpen:!n,videoId:"kTMMrAP6DNI",onClose:function(){return u(!n)}}))}},5441:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/video",function(){return n(7070)}])},1664:function(e,t,n){e.exports=n(6071)},3336:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=d(n(7294)),a=d(n(3935)),s=n(5697),u=n(9400),l=d(n(344)),c=d(n(326)),f=d(n(6575));function d(e){return e&&e.__esModule?e:{default:e}}var p="data-react-wow",v=0,h=0,m={listeners:[],pending:[]},y=!1;try{var b=Object.defineProperty({},"passive",{get:function(){y=!0}});window.addEventListener("test",null,b)}catch(_){}var g=!!y&&{capture:!1,passive:!0},w=function(e){var t=a.default.findDOMNode(e);if(t){var n=(0,f.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=a.default.findDOMNode(e),o=void 0,r=void 0;try{var i=t.getBoundingClientRect();o=i.top,r=i.height}catch(_){o=v,r=h}var s=window.innerHeight||document.documentElement.clientHeight,u=Math.max(o,0),l=Math.min(s,o+r)-u,c=void 0,f=void 0;try{var d=n.getBoundingClientRect();c=d.top,f=d.height}catch(_){c=v,f=h}var p=c-u,m=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return p-m[0]<=l&&p+f+m[1]>=0}(e,n):function(e){var t=a.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(_){n=v,o=h}var i=window.innerHeight||document.documentElement.clientHeight,s=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-s[0]<=i&&n+o+s[1]>=0}(e))&&(e.visible||(m.pending.push(e),e.visible=!0,e.setState({stopped:!1}),e.forceUpdate()))}},E=function(){m.listeners.forEach((function(e){return w(e)})),m.pending.forEach((function(e){return(0,l.default)(m.listeners,e)})),m.pending=[]},O=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.customStyle=function(e){var t=n.props,o=t.duration,r=t.delay,i=t.iteration,a=t.animation,s=t.disabled,u={animationName:e?"none":a,visibility:e&&!s?"hidden":"visible"};return o&&(u.animationDuration=o),r&&(u.animationDelay=r),i&&(u.animationIterationCount=i),u},n.resetAnimation=function(e){-1!==e.type.toLowerCase().indexOf("animationend")&&n.setState({stopped:!0},(function(){var e=n.props.callback;"function"===typeof e&&e.call(n,a.default.findDOMNode(n))}))},n.visible=!1,n.state={stopped:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){if(this.props.disabled)return!1;if(this.props.overflow){var e=(0,f.default)(a.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(p)+1;1===t&&(0,u.on)(e,"scroll",E,g),e.setAttribute(p,t)}}else if(!m.listeners.length){var n=this.props,o=n.scroll,r=n.resize;o&&(0,u.on)(window,"scroll",E,g),r&&(0,u.on)(window,"resize",E,g)}m.listeners.push(this),w(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.disabled)return!1;if(this.props.overflow){var e=(0,f.default)(a.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(p)-1;0===t?((0,u.off)(e,"scroll",E,g),e.removeAttribute(p)):e.setAttribute(p,t)}}(0,l.default)(m.listeners,this),m.listeners.length||((0,u.off)(window,"scroll",E,g),(0,u.off)(window,"resize",E,g))}},{key:"mergeProps",value:function(e){var t=this.props,n=t.animation,r=t.animateClass,i=this.customStyle(!this.visible),a=this.visible?n+" "+(this.state.stopped?"":r):n;return o({},e,{style:o({},e.style,i),className:(0,c.default)((e.className?e.className:"")+" "+a),onAnimationEnd:this.resetAnimation})}},{key:"render",value:function(){var e=this,t=this.props,n=t.children;return t.disabled?n:n?i.default.Children.map(n,(function(t){return i.default.cloneElement(t,e.mergeProps(t.props))})):null}}]),t}(i.default.Component);O.propTypes={duration:s.string,delay:s.string,iteration:s.string,animation:s.string,children:s.node,scroll:s.bool,resize:s.bool,animateClass:s.string,offset:(0,s.oneOfType)([s.number,(0,s.arrayOf)(s.number)]),overflow:s.bool,callback:s.func},O.defaultProps={duration:"",delay:"",iteration:"",animation:"",scroll:!0,resize:!0,animateClass:"animated",offset:0,overflow:!1,disabled:!1,callback:function(){}},t.Z=O},9400:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.on=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},6575:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),i=r.position,a=r.overflow,s=r["overflow-x"],u=r["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(a)&&n.test(s)&&n.test(u))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},344:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=e.indexOf(t);-1!==n&&e.splice(n,1)}},326:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.trim().split(" ");return t.filter((function(e,n){return!!e&&t.indexOf(e)===n})).join(" ")}}},function(e){e.O(0,[9774,1239,2888,179],(function(){return t=5441,e(e.s=t);var t}));var t=e.O();_N_E=t}]);