(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"11OE":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return u}));var r=n("dI71"),i=n("q1tI"),c=n.n(i),a=n("Wbzz"),o=function(e){return function(t){return e<t?"hidden":"visible"}},s=function(e){return function(t){return e!==t?"hidden":"visible"}},u=function(e){return function(t){return e>t?"hidden":"visible"}};t.a=function(e,t,n,i){return void 0===i&&(i=1),function(o){function s(e){var t;return(t=o.call(this,e)||this).state={currentStep:1},t.handleOnKeyDown=t.onKeyDown.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(r.a)(s,o);var u=s.prototype;return u.render=function(){return c.a.createElement(e,Object.assign({},this.props,{currentStep:this.state.currentStep}))},u.componentDidMount=function(){document.addEventListener("keydown",this.handleOnKeyDown,!1)},u.componentWillUnmount=function(){document.removeEventListener("keydown",this.handleOnKeyDown,!1)},u.onKeyDown=function(e){switch(e.key){case"Left":case"ArrowLeft":this.state.currentStep>1?this.setState({currentStep:this.state.currentStep-1}):Object(a.b)(t);break;case"Right":case"ArrowRight":this.state.currentStep<i?this.setState({currentStep:this.state.currentStep+1}):Object(a.b)(n);break;case"Esc":case"Escape":Object(a.b)("/")}},s}(c.a.Component)}},Kbho:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),c=n("qhky"),a=n("11OE"),o=(n("XObf"),"MockMVC in Action!");t.default=Object(a.a)((function(){return i.a.createElement("div",{className:"mock-mvc-in-action"},i.a.createElement(c.a,null,i.a.createElement("title",null,o)),i.a.createElement("div",null,i.a.createElement("h1",{className:"title"},o),i.a.createElement("h2",{className:"subtitle"},"Marc Nuri")))}),"/","/presentations/mock-mvc-in-action/slide1")},XObf:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-presentations-mock-mvc-in-action-index-jsx-4410487b86113d89807a.js.map