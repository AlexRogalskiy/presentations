"use strict";(self.webpackChunk_marcnuri_presentations=self.webpackChunk_marcnuri_presentations||[]).push([[6079,584],{5963:function(e,t,n){n.d(t,{ZP:function(){return o},Z5:function(){return s},y$:function(){return a},g6:function(){return u}});var r=n(1721),i=n(7294),c=n(5444),s=function(e){return function(t){return e<t?"hidden":"visible"}},a=function(e){return function(t){return e!==t?"hidden":"visible"}},u=function(e){return function(t){return e>t?"hidden":"visible"}};var o=function(e,t,n,s){return void 0===s&&(s=1),function(a){function u(e){var t;return(t=a.call(this,e)||this).state={currentStep:1},t.handleOnKeyDown=t.onKeyDown.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}(0,r.Z)(u,a);var o=u.prototype;return o.render=function(){return i.createElement(e,Object.assign({},this.props,{currentStep:this.state.currentStep}))},o.componentDidMount=function(){document.addEventListener("keydown",this.handleOnKeyDown,!1)},o.componentWillUnmount=function(){document.removeEventListener("keydown",this.handleOnKeyDown,!1)},o.onKeyDown=function(e){switch(e.key){case"Left":case"ArrowLeft":this.state.currentStep>1?this.setState({currentStep:this.state.currentStep-1}):(0,c.c4)(t);break;case"Right":case"ArrowRight":this.state.currentStep<s?this.setState({currentStep:this.state.currentStep+1}):(0,c.c4)(n);break;case"Esc":case"Escape":(0,c.c4)("/")}},u}(i.Component)}},8562:function(e,t,n){n.r(t);var r=n(7294),i=n(2178),c=function(e){return void 0===e&&(e=""),"eclipse-jkube-introduction-title"+(e?"__"+e:"")};t.default=function(e){var t=e.className,n=e.title,s=e.subtitle,a=void 0===s?"":s,u=e.children;return r.createElement("div",{className:c()+" "+t},r.createElement("div",{className:""+c("content")},r.createElement("div",{className:"logo"},r.createElement("img",{src:i.Z})),r.createElement("div",{className:"title-band"},r.createElement("h1",{className:"title"},n),r.createElement("h2",{className:"subtitle"},a)),u))}},1942:function(e,t,n){n.r(t);var r=n(7294),i=n(5963),c=n(8562);t.default=(0,i.ZP)((function(){return r.createElement(c.default,{title:"From zero to cloud with Maven and Eclipse JKube",subtitle:"Demo"})}),"/presentations/eclipse-jkube-introduction/slide6","/presentations/eclipse-jkube-introduction/slide8")},2178:function(e,t,n){t.Z=n.p+"static/eclipsecon-a8b1718bdce63d2c65ae12fea8e89afa.png"}}]);
//# sourceMappingURL=component---src-pages-presentations-eclipse-jkube-introduction-slide-7-jsx-23af1c06ab1f42e96ae1.js.map