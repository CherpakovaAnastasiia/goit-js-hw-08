!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e},i=function(t){var n=void 0===t?"undefined":e(o)(t);return null!=t&&("object"==n||"function"==n)};var a,u={},f={};a="object"==typeof n&&n&&n.Object===Object&&n;var l="object"==typeof self&&self&&self.Object===Object&&self,c=a||l||Function("return this")();u=function(){return f.Date.now()};var v={},d={},s={},m=/\s/;s=function(e){for(var t=e.length;t--&&m.test(e.charAt(t)););return t};var b=/^\s+/;d=function(e){return e?e.slice(0,s(e)+1).replace(b,""):e};var g,p={},y={};g=(f=c).Symbol;var j={},S=Object.prototype,h=S.hasOwnProperty,O=S.toString,w=g?g.toStringTag:void 0;j=function(e){var t=h.call(e,w),n=e[w];try{e[w]=void 0;var r=!0}catch(e){}var i=O.call(e);return r&&(t?e[w]=n:delete e[w]),i};var T={},x=Object.prototype.toString;T=function(e){return x.call(e)};var E=g?g.toStringTag:void 0;y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?j(e):T(e)};var N={};N=function(e){return null!=e&&"object"==typeof e};p=function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||N(t)&&"[object Symbol]"==y(t)};var k=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,L=/^0o[0-7]+$/i,M=parseInt;v=function(e){if("number"==typeof e)return e;if(p(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=d(e);var n=I.test(e);return n||L.test(e)?M(e.slice(2),n?2:8):k.test(e)?NaN:+e};var _=Math.max,q=Math.min;r=function(e,t,n){var r,o,a,f,l,c,d=0,s=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,i=o;return r=o=void 0,d=t,f=e.apply(i,n)}function p(e){return d=e,l=setTimeout(j,t),s?g(e):f}function y(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-d>=a}function j(){var e=u();if(y(e))return S(e);l=setTimeout(j,function(e){var n=t-(e-c);return m?q(n,a-(e-d)):n}(e))}function S(e){return l=void 0,b&&r?g(e):(r=o=void 0,f)}function h(){var e=u(),n=y(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return p(c);if(m)return clearTimeout(l),l=setTimeout(j,t),g(c)}return void 0===l&&(l=setTimeout(j,t)),f}return t=v(t)||0,i(n)&&(s=!!n.leading,a=(m="maxWait"in n)?_(v(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==l&&clearTimeout(l),d=0,r=c=o=l=void 0},h.flush=function(){return void 0===l?f:S(u())},h};t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:o,maxWait:t,trailing:a})};var P=document.querySelector(".feedback-form"),W=P.querySelector('input[name="email"]'),$=P.querySelector('textarea[name="message"]'),D=e(t)((function(){var e={email:W.value,message:$.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);W.value=t.email,$.value=t.message}})),W.addEventListener("input",D),$.addEventListener("input",D),P.addEventListener("submit",(function(e){e.preventDefault();var t=W.value.trim(),n=$.value.trim();if(t&&n){var r={email:t,message:n};console.log(r),localStorage.removeItem("feedback-form-state"),W.value="",$.value=""}else alert("Please fill in both email and message fields.")}))}();
//# sourceMappingURL=03-feedback.c91e7eb5.js.map
