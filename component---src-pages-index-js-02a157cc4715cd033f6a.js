/*! For license information please see component---src-pages-index-js-02a157cc4715cd033f6a.js.LICENSE.txt */
(self.webpackChunkquran_memorization_quizzes=self.webpackChunkquran_memorization_quizzes||[]).push([[678],{425:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return g},default:function(){return E}});var o=n(7294),a=n(6870),i=n(4037),r=n(4160),s=n(5697),l=n.n(s),c=n(3967),u=n.n(c);function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}var d="undefined"!=typeof window&&window.navigator.userAgent.toLowerCase(),f=d&&d.indexOf("msie 9.0")>0,h=function(e){var t="rodal-dialog rodal-"+(("enter"===e.animationType?e.enterAnimation:e.leaveAnimation)||e.animation)+"-"+e.animationType,n=e.showCloseButton?o.createElement("span",{className:"rodal-close",onClick:e.onClose,onKeyPress:function(t){e.onClose&&13===t.which&&e.onClose(t)},tabIndex:0}):null,a=e.width,i=e.height,r=e.measure,s=e.duration,l=e.customStyles,c=e.id,u=p({},{width:a+r,height:i+r,animationDuration:s+"ms",WebkitAnimationDuration:s+"ms"},l);return o.createElement("div",{style:u,className:t,id:c},e.children,n)},v=function(e){var t,n;function a(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).state={isShow:!1,animationType:"leave"},t.onKeyUp=function(e){t.props.closeOnEsc&&27===e.keyCode&&t.props.onClose(e)},t.animationEnd=function(e){var n=t.state.animationType,o=t.props,a=o.closeOnEsc,i=o.onAnimationEnd;"leave"===n?t.setState({isShow:!1}):a&&t.el.focus(),e.target===t.el&&i&&i()},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,m(t,n);var i=a.prototype;return i.componentDidMount=function(){this.props.visible&&this.enter()},i.componentDidUpdate=function(e){this.props.visible&&!e.visible&&this.enter(),!this.props.visible&&e.visible&&this.leave()},i.enter=function(){this.setState({isShow:!0,animationType:"enter"})},i.leave=function(){this.setState(f?{isShow:!1}:{animationType:"leave"})},i.render=function(){var e=this,t=this.props,n=t.closeMaskOnClick,a=t.onClose,i=t.customMaskStyles,r=t.showMask,s=t.duration,l=t.className,c=t.children,m=this.state,d=m.isShow,f=m.animationType,v=r?o.createElement("div",{className:"rodal-mask",style:i,onClick:n?a:void 0}):null,y={display:d?"":"none",animationDuration:s+"ms",WebkitAnimationDuration:s+"ms"};return o.createElement("div",{style:y,className:u()("rodal","rodal-fade-"+f,l),onAnimationEnd:this.animationEnd,tabIndex:"-1",ref:function(t){e.el=t},onKeyUp:this.onKeyUp},v,o.createElement(h,p({},this.props,{animationType:f}),c))},a}(o.Component);v.propTypes={width:l().number,height:l().number,measure:l().string,visible:l().bool,showMask:l().bool,closeOnEsc:l().bool,closeMaskOnClick:l().bool,showCloseButton:l().bool,animation:l().string,enterAnimation:l().string,leaveAnimation:l().string,duration:l().number,className:l().string,customStyles:l().object,customMaskStyles:l().object,onClose:l().func.isRequired,onAnimationEnd:l().func,id:l().string},v.defaultProps={width:400,height:240,measure:"px",visible:!1,showMask:!0,closeOnEsc:!1,closeMaskOnClick:!0,showCloseButton:!0,animation:"zoom",enterAnimation:"",leaveAnimation:"",duration:300,className:"",customStyles:{},customMaskStyles:{}};var y=v;const b=[];for(let w=0;w<30;w++)b.push(w+1);var E=()=>{const e=o.useRef((()=>{const e=(0,i.lv)(0,a.Z.length-1);return a.Z[e]})()),[t,n]=function(e){void 0===e&&(e=!1);const[t,n]=o.useState(e);return[t,()=>{n(!t)},n]}(!0),[s,l]=o.useState("1"),c=e=>{e.preventDefault(),(0,r.c4)("/quiz?juz="+s)};return o.createElement("main",{className:"Index"},o.createElement("div",null,o.createElement("h1",null,"آزمون‌های حفظ قرآن"),o.createElement("p",{className:"hadith"},o.createElement("span",{className:"hadith__from"},"قال ",e.current.from,":"),o.createElement("span",null," "+e.current.text)),o.createElement("p",{className:"hadith-translation"},o.createElement("span",null,e.current.from," فرمودند:"),o.createElement("span",null," "+e.current.translation))),o.createElement("button",{onClick:n},"آزمون"),o.createElement(y,{visible:t,enterAnimation:"slideUp",leaveAnimation:"fade",onClose:n},o.createElement("div",{className:"modal"},o.createElement("h1",null,"تنظیمات آزمون"),o.createElement("form",{onSubmit:c,className:"form"},o.createElement("div",{className:"form__rangeWrapper"},o.createElement("select",{id:"range",value:s,onChange:e=>{let{target:t}=e;l(t.value)}},o.createElement("option",{value:"total"},"کل قرآن"),b.map((e=>o.createElement("option",{value:e},"جزء ",e))))),o.createElement("button",{type:"submit",onClick:c},"شروع آزمون")))))};const g=()=>o.createElement("title",null,"آزمون‌های حفظ قرآن")},3967:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=r(e,i(n)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=r(t,n));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=component---src-pages-index-js-02a157cc4715cd033f6a.js.map