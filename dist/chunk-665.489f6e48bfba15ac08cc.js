(self.webpackChunkpreact_starter=self.webpackChunkpreact_starter||[]).push([[665,369],{7665:(e,n,t)=>{t.r(n),t.d(n,{resetPropWarnings:()=>a});var o=t(6400),r=(t(4369),{});function a(){r={}}function i(e){return e.type===o.Fragment?"Fragment":"function"==typeof e.type?e.type.displayName||e.type.name:"string"==typeof e.type?e.type:"#text"}var p=[],s=[];function c(){return p.length>0?p[p.length-1]:null}var l=!1;function f(e){return"function"==typeof e.type&&e.type!=o.Fragment}function u(e){for(var n=[e],t=e;null!=t.__o;)n.push(t.__o),t=t.__o;return n.reduce((function(e,n){e+="  in "+i(n);var t=n.__source;return t?e+=" (at "+t.fileName+":"+t.lineNumber+")":l||(l=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),e+"\n"}),"")}var d="function"==typeof WeakMap,_=o.Component.prototype.setState;o.Component.prototype.setState=function(e,n){return null==this.__v&&null==this.state&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n'+u(c())),_.call(this,e,n)};var y=o.Component.prototype.forceUpdate;function h(e){var n=e.props,t=i(e),o="";for(var r in n)if(n.hasOwnProperty(r)&&"children"!==r){var a=n[r];"function"==typeof a&&(a="function "+(a.displayName||a.name)+"() {}"),a=Object(a)!==a||a.toString?a+"":Object.prototype.toString.call(a),o+=" "+r+"="+JSON.stringify(a)}var p=n.children;return"<"+t+o+(p&&p.length?">..</"+t+">":" />")}o.Component.prototype.forceUpdate=function(e){return null==this.__v?console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n'+u(c())):null==this.__P&&console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+u(this.__v)),y.call(this,e)},function(){!function(){var e=o.options.__b,n=o.options.diffed,t=o.options.__,r=o.options.vnode,a=o.options.__r;o.options.diffed=function(e){f(e)&&s.pop(),p.pop(),n&&n(e)},o.options.__b=function(n){f(n)&&p.push(n),e&&e(n)},o.options.__=function(e,n){s=[],t&&t(e,n)},o.options.vnode=function(e){e.__o=s.length>0?s[s.length-1]:null,r&&r(e)},o.options.__r=function(e){f(e)&&s.push(e),a&&a(e)}}();var e=!1,n=o.options.__b,t=o.options.diffed,a=o.options.vnode,c=o.options.__e,l=o.options.__,_=o.options.__h,y=d?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,m=[];o.options.__e=function(e,n,t,o){if(n&&n.__c&&"function"==typeof e.then){var r=e;e=new Error("Missing Suspense. The throwing component was: "+i(n));for(var a=n;a;a=a.__)if(a.__c&&a.__c.__c){e=r;break}if(e instanceof Error)throw e}try{(o=o||{}).componentStack=u(n),c(e,n,t,o),"function"!=typeof e.then&&setTimeout((function(){throw e}))}catch(e){throw e}},o.options.__=function(e,n){if(!n)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var t;switch(n.nodeType){case 1:case 11:case 9:t=!0;break;default:t=!1}if(!t){var o=i(e);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived "+n+" instead: render(<"+o+" />, "+n+");")}l&&l(e,n)},o.options.__b=function(t){var o=t.type,a=function e(n){return n?"function"==typeof n.type?e(n.__):n:{}}(t.__);if(e=!0,void 0===o)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+h(t)+"\n\n"+u(t));if(null!=o&&"object"==typeof o){if(void 0!==o.__k&&void 0!==o.__e)throw new Error("Invalid type passed to createElement(): "+o+"\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My"+i(t)+" = "+h(o)+";\n  let vnode = <My"+i(t)+" />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n"+u(t));throw new Error("Invalid type passed to createElement(): "+(Array.isArray(o)?"array":o))}if("thead"!==o&&"tfoot"!==o&&"tbody"!==o||"table"===a.type?"tr"===o&&"thead"!==a.type&&"tfoot"!==a.type&&"tbody"!==a.type&&"table"!==a.type?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+h(t)+"\n\n"+u(t)):"td"===o&&"tr"!==a.type?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+h(t)+"\n\n"+u(t)):"th"===o&&"tr"!==a.type&&console.error("Improper nesting of table. Your <th> should have a <tr>."+h(t)+"\n\n"+u(t)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+h(t)+"\n\n"+u(t)),void 0!==t.ref&&"function"!=typeof t.ref&&"object"!=typeof t.ref&&!("$$typeof"in t))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+typeof t.ref+"] instead\n"+h(t)+"\n\n"+u(t));if("string"==typeof t.type)for(var p in t.props)if("o"===p[0]&&"n"===p[1]&&"function"!=typeof t.props[p]&&null!=t.props[p])throw new Error("Component's \""+p+'" property should be a function, but got ['+typeof t.props[p]+"] instead\n"+h(t)+"\n\n"+u(t));if("function"==typeof t.type&&t.type.propTypes){if("Lazy"===t.type.displayName&&y&&!y.lazyPropTypes.has(t.type)){var s="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var c=t.type();y.lazyPropTypes.set(t.type,!0),console.warn(s+"Component wrapped in lazy() is "+i(c))}catch(t){console.warn(s+"We will log the wrapped component's name once it is loaded.")}}var l=t.props;t.type.__f&&delete(l=function(e,n){for(var t in n)e[t]=n[t];return e}({},l)).ref,function(e,n,t,o,a){Object.keys(e).forEach((function(t){var i;try{i=e[t](n,t,o,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i.message in r||(r[i.message]=!0,console.error("Failed prop type: "+i.message+(a&&"\n"+a()||"")))}))}(t.type.propTypes,l,0,i(t),(function(){return u(t)}))}n&&n(t)},o.options.__h=function(n,t,o){if(!n||!e)throw new Error("Hook can only be invoked from render methods.");_&&_(n,t,o)};var v=function(e,n){return{get:function(){var t="get"+e+n;m&&m.indexOf(t)<0&&(m.push(t),console.warn("getting vnode."+e+" is deprecated, "+n))},set:function(){var t="set"+e+n;m&&m.indexOf(t)<0&&(m.push(t),console.warn("setting vnode."+e+" is not allowed, "+n))}}},w={nodeName:v("nodeName","use vnode.type"),attributes:v("attributes","use vnode.props"),children:v("children","use vnode.props.children")},b=Object.create({},w);o.options.vnode=function(e){var n=e.props;if(null!==e.type&&null!=n&&("__source"in n||"__self"in n)){var t=e.props={};for(var o in n){var r=n[o];"__source"===o?e.__source=r:"__self"===o?e.__self=r:t[o]=r}}e.__proto__=b,a&&a(e)},o.options.diffed=function(n){if(n.__k&&n.__k.forEach((function(e){if(e&&void 0===e.type){delete e.__,delete e.__b;var t=Object.keys(e).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+t+"}.\n\n"+u(n))}})),e=!1,t&&t(n),null!=n.__k)for(var o=[],r=0;r<n.__k.length;r++){var a=n.__k[r];if(a&&null!=a.key){var i=a.key;if(-1!==o.indexOf(i)){console.error('Following component has two or more children with the same key attribute: "'+i+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+h(n)+"\n\n"+u(n));break}o.push(i)}}}}()},4369:(e,n,t)=>{t.r(n),t.d(n,{addHookName:()=>r});var o=t(6400);function r(e,n){return o.options.__a&&o.options.__a(n),e}"undefined"!=typeof window&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.10.6",o.options,{Fragment:o.Fragment,Component:o.Component})}}]);
//# sourceMappingURL=chunk-665.489f6e48bfba15ac08cc.js.map