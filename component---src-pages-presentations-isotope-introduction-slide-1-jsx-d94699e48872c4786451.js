(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"11OE":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u}));var r=n("dI71"),i=n("q1tI"),a=n.n(i),c=n("Wbzz"),s=function(e){return function(t){return e<t?"hidden":"visible"}},o=function(e){return function(t){return e!==t?"hidden":"visible"}},u=function(e){return function(t){return e>t?"hidden":"visible"}};t.a=function(e,t,n,i){return void 0===i&&(i=1),function(s){function o(e){var t;return(t=s.call(this,e)||this).state={currentStep:1},t.handleOnKeyDown=t.onKeyDown.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(r.a)(o,s);var u=o.prototype;return u.render=function(){return a.a.createElement(e,Object.assign({},this.props,{currentStep:this.state.currentStep}))},u.componentDidMount=function(){document.addEventListener("keydown",this.handleOnKeyDown,!1)},u.componentWillUnmount=function(){document.removeEventListener("keydown",this.handleOnKeyDown,!1)},u.onKeyDown=function(e){switch(e.key){case"Left":case"ArrowLeft":this.state.currentStep>1?this.setState({currentStep:this.state.currentStep-1}):Object(c.b)(t);break;case"Right":case"ArrowRight":this.state.currentStep<i?this.setState({currentStep:this.state.currentStep+1}):Object(c.b)(n);break;case"Esc":case"Escape":Object(c.b)("/")}},o}(a.a.Component)}},"9Rt4":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("11OE"),c=n("xD1z"),s=n.n(c);n("DdrD");t.default=Object(a.a)((function(e){var t=e.currentStep,n=Object(a.b)(t);return i.a.createElement("div",{className:"slide slide1"},i.a.createElement("div",{className:"title"},"Why?"),i.a.createElement("div",{className:"webmail-trend"},i.a.createElement("img",{src:s.a})),i.a.createElement("ul",{className:"content"},i.a.createElement("li",{className:n(2)},"Big Brother",i.a.createElement("ul",null,i.a.createElement("li",null,"Privacy"),i.a.createElement("li",{className:n(3)},"Missing features"))),i.a.createElement("li",{className:n(4)},"Alternatives lack features"),i.a.createElement("li",{className:n(5)},"Personal interest")))}),"/presentations/isotope-introduction","/presentations/isotope-introduction/slide2",5)},DdrD:function(e,t,n){},xD1z:function(e,t,n){e.exports=n.p+"static/webmail-trend-66fc6f19ae49dd47b77c2ad78cc55d57.png"}}]);
//# sourceMappingURL=component---src-pages-presentations-isotope-introduction-slide-1-jsx-d94699e48872c4786451.js.map