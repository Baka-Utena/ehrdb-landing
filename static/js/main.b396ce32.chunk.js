(this["webpackJsonpehrdb-landing"]=this["webpackJsonpehrdb-landing"]||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s(1),c=s.n(a),n=s(9),l=s.n(n),o=(s(16),s(2)),r=s(3),d=s(5),h=s(4),m=(s(17),s(10)),j=s(6),u=s(7),b=s.n(u),p=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this)).handleClickOnInput=i.handleClickOnInput.bind(Object(j.a)(i)),i.handleBlurOnInput=i.handleBlurOnInput.bind(Object(j.a)(i)),i.state={placeholder:""},i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.setState({placeholder:this.props.placeholder})}},{key:"handleClickOnInput",value:function(e){this.setState({placeholder:""})}},{key:"handleBlurOnInput",value:function(e){this.setState({placeholder:this.props.placeholder})}},{key:"render",value:function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:b()("textfield",{"is-required":this.props.required}),children:[Object(i.jsx)("input",{type:"text",className:"textfield__input",name:this.props.name,placeholder:this.state.placeholder,onChange:this.props.onChange,onClick:this.handleClickOnInput,onBlur:this.handleBlurOnInput}),Object(i.jsx)("div",{className:"textfield__error",children:this.props.error})]})})}}]),s}(a.Component),v=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).onClose=function(e){i.props.onClose&&i.props.onClose(e)},i.onSubmit=function(e,t){i.props.onSubmit&&i.props.onSubmit(e,t)},i.state={fields:{name:"",eMail:"",phone:"",message:"",type:i.props.type},fields_test:{name:"",eMail:"",phone:"",message:"",type:i.props.type},errors:{},wasSubmitted:!1},i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.props.type,1}},{key:"handleChange",value:function(e,t){console.log(this.state.fields);var s=Object(m.a)({},this.state.fields);s[e]=t.target.value,this.setState({fields:s}),console.log(this.state.fields),console.log(s),console.log("}"),this.state.wasSubmitted&&this.fieldValidation(t)}},{key:"fieldValidation",value:function(e){var t=this.state.fields,s=this.state.errors;if("name"===e.target.name&&(t.name?"undefined"!==typeof t.name&&(t.name.length>100?s.name="Name is too long":s.name=""):s.name="Cannot be empty"),"eMail"===e.target.name)if(t.eMail){if("undefined"!==typeof t.eMail){var i=t.eMail.lastIndexOf("@"),a=t.eMail.lastIndexOf(".");i<a&&i>0&&-1===t.eMail.indexOf("@@")&&a>2&&t.eMail.length-a>2?s.eMail="":s.eMail="Email is not valid"}}else s.eMail="Cannot be empty";this.setState({errors:s})}},{key:"handleValidation",value:function(){var e=this.state.fields,t={},s=!0;if(e.name?"undefined"!==typeof e.name&&e.name.length>100&&(s=!1,t.name="Name is too long"):(s=!1,t.name="Cannot be empty",this.setState({errors:t})),e.eMail||(s=!1,t.eMail="Cannot be empty"),"undefined"!==typeof e.eMail){var i=e.eMail.lastIndexOf("@"),a=e.eMail.lastIndexOf(".");i<a&&i>0&&-1===e.eMail.indexOf("@@")&&a>2&&e.eMail.length-a>2||(s=!1,t.eMail="Email is not valid11")}return this.setState({errors:t}),this.setState({wasSubmitted:!0}),s}},{key:"contactSubmit",value:function(e){var t=this;(e.preventDefault(),this.handleValidation())?fetch("/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state.fields)}).then((function(s){429===s.status?(t.onSubmit(e,["We have already recieved your request!",Object(i.jsx)("br",{}),"We will get back to you as soon as possible"]),t.onClose(e)):(console.log("Form submitted",s),t.onSubmit(e,["Thank you for your request!",Object(i.jsx)("br",{}),"We will get back to you as soon as possible"]),t.onClose(e))}),(function(s){console.log("Error in request ",s),t.onSubmit(e,["Oops! Something went wrong.",Object(i.jsx)("br",{}),"Please feel free to send us an email to eleonov@solit-clouds.ru. We will get back to you as soon as possible"]),t.onClose(e)})):console.log("Form has errors.")}},{key:"render",value:function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{name:"contactform",className:b()("form",this.props.classes),onSubmit:this.contactSubmit.bind(this),children:[Object(i.jsx)("h3",{className:"form__header",children:"Have a question about EHR DB?"}),Object(i.jsx)("div",{className:"form__caption",children:"Ask it here and we will get back to you as soon as we can"}),Object(i.jsx)("div",{className:"form__row",children:Object(i.jsx)("div",{className:"form__col form__col-2",children:Object(i.jsx)(p,{name:"name",placeholder:"Name",required:!0,onChange:this.handleChange.bind(this,"name"),error:this.state.errors.name})})}),Object(i.jsxs)("div",{className:"form__row",children:[Object(i.jsx)("div",{className:"form__col form__col-2 is-nessesary",children:Object(i.jsx)(p,{name:"eMail",placeholder:"E-mail",required:!0,onChange:this.handleChange.bind(this,"eMail"),error:this.state.errors.eMail})}),Object(i.jsx)("div",{className:"form__col form__col-2",children:Object(i.jsx)(p,{name:"phone",placeholder:"Phone",onChange:this.handleChange.bind(this,"phone")})})]}),Object(i.jsx)("div",{className:"form__row",children:Object(i.jsx)("div",{className:"form__col",children:Object(i.jsx)("textarea",{name:"message",className:"textarea",placeholder:"Message",onChange:this.handleChange.bind(this,"message")})})}),Object(i.jsx)("div",{className:"form__row",children:Object(i.jsxs)("div",{className:"form__col form__col_flex",children:[Object(i.jsx)("button",{className:"btn btn_primary",children:"Submit"}),Object(i.jsx)("div",{className:"form__legend",children:"* - Fields are required"})]})})]})})}}]),s}(a.Component),_=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onClose=function(t){e.props.onClose&&e.props.onClose(t)},e}return Object(r.a)(s,[{key:"render",value:function(){var e=this;return this.props.show?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"modal",onClose:function(t){e.onClose(t)},children:[Object(i.jsx)("div",{className:"modal__background",onClick:this.onClose}),Object(i.jsxs)("div",{className:"modal__wrapper",children:[Object(i.jsx)("div",{className:"modal__close",onClick:this.onClose,children:Object(i.jsx)("i",{className:"material-icons md-36",children:"close"})}),this.props.children]})]})}):null}}]),s}(a.Component),O=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this)).anchorTarget=null,i.handleClick=i.handleClick.bind(Object(j.a)(i)),i}return Object(r.a)(s,[{key:"handleClick",value:function(e){e.preventDefault(),window.scrollTo({top:this.props.itemPosition,left:0,behavior:"smooth",block:"start"})}},{key:"componentDidMount",value:function(){this.anchorTarget=document.getElementById(this.props.itemName)}},{key:"componentWillUnmount",value:function(){this.anchorTarget=null}},{key:"render",value:function(){return Object(i.jsx)("li",{className:b()("menu__item",this.props.active),children:Object(i.jsx)("a",{href:"#"+this.props.itemName,onClick:this.handleClick,"aria-label":"Scroll to"+this.props.itemName,children:this.props.itemTitle})})}}]),s}(a.Component);var x=function(e){var t=e.onClick,s=e.visible;return Object(i.jsx)("div",{className:b()("header__btn-wrap",{"is-visible":s}),children:Object(i.jsx)("button",{className:"btn btn_white header__btn",onClick:t,children:"Request a demo"})})},f=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).handleResize=i.handleResize.bind(Object(j.a)(i)),i.handleScroll=i.handleScroll.bind(Object(j.a)(i)),i.menuToggle=i.menuToggle.bind(Object(j.a)(i)),i.sections={cases:"Cases",architecture:"Architecture",contact:"Contact"},i.state={activeMenuItem:{top:null,cases:null,architecture:null,contact:null},positions:{cases:"",architecture:"",contact:""},windowWidth:"",menuVisible:!1},i}return Object(r.a)(s,[{key:"handleResize",value:function(){this.setState({windowWidth:window.innerWidth}),this.getAnchorPoints()}},{key:"getAnchorPoints",value:function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.querySelector(".header").offsetHeight,s={};for(var i in this.state.positions)s[i]=this.state.positions[i];for(var a in s)s[a]=document.getElementById(a).getBoundingClientRect().top+e-t;this.setState({positions:s})}},{key:"handleScroll",value:function(){var e=window.scrollY,t=null;if(t=e>this.state.positions.contact-2?"contact":e>this.state.positions.architecture-2?"architecture":e>this.state.positions.cases-2?"cases":e>this.state.positions.product-2?"product":"top","active"!==this.state.activeMenuItem[t]){var s={top:"",product:"",cases:"",architecture:"",contact:""};s[t]="active",this.setState({activeMenuItem:s})}}},{key:"handleClickOnLogo",value:function(e){e.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth",block:"start"})}},{key:"menuToggle",value:function(){this.setState({menuVisible:!this.state.menuVisible})}},{key:"componentDidMount",value:function(){this.getAnchorPoints(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=[];for(var t in this.sections)e.push(Object(i.jsx)(O,{itemName:t,itemTitle:this.sections[t],itemPosition:this.state.positions[t],active:this.state.activeMenuItem[t]}));return Object(i.jsx)("div",{className:"header",children:Object(i.jsxs)("div",{className:"header__container",children:[Object(i.jsxs)("div",{className:"logo",onClick:"active"!==this.state.activeMenuItem.top?this.handleClickOnLogo:null,children:[Object(i.jsx)("div",{className:"logo__main"}),Object(i.jsx)("div",{className:"logo__product"}),Object(i.jsx)("div",{children:"DB"})]}),Object(i.jsx)("ul",{className:b()("menu",{"is-visible":this.state.menuVisible}),children:e}),Object(i.jsx)("div",{className:"login",children:"Log In"}),Object(i.jsxs)("div",{className:"lang",children:[Object(i.jsxs)("label",{className:"lang__item",children:[Object(i.jsx)("input",{type:"radio",name:"language",value:"rus"}),Object(i.jsx)("div",{className:"lang__switch",children:"Rus"})]}),Object(i.jsxs)("label",{className:"lang__item",children:[Object(i.jsx)("input",{type:"radio",name:"language",value:"eng",checked:!0}),Object(i.jsx)("div",{className:"lang__switch",children:"Eng"})]})]}),Object(i.jsx)(x,{onClick:this.props.closeModal,visible:null!==this.state.activeMenuItem.top&&"active"!==this.state.activeMenuItem.top}),Object(i.jsx)("i",{className:"material-icons header__hamb",onClick:this.menuToggle,children:"menu"})]})})}}]),s}(a.Component),g=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).showModal=function(e){i.setState({modalIsVisible:!i.state.modalIsVisible})},i.showModalMessage=function(e,t){i.setState({modalMessageText:t}),i.setState({modalMessageIsVisible:!i.state.modalMessageIsVisible})},i.state={modalIsVisible:!1,modalMessageIsVisible:!1,modalMessageText:"",scrollFirstScreen:!1},i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollFirstScreenDetection=this.scrollFirstScreenDetection.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollFirstScreenDetection=this.scrollFirstScreenDetection.bind(this))}},{key:"scrollFirstScreenDetection",value:function(){this.setState({scrollFirstScreen:window.pageYOffset>760})}},{key:"render",value:function(){var e=this;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(f,{closeModal:function(t){e.showModal()}}),Object(i.jsx)("div",{className:"section section1",children:Object(i.jsxs)("div",{className:"container section1__container",children:[Object(i.jsxs)("h1",{className:"section-header section1__header",children:["A platform for building",Object(i.jsx)("br",{}),"healthcare solutions using",Object(i.jsx)("br",{}),Object(i.jsx)("span",{className:"bold",children:"openEHR standards"})]}),Object(i.jsx)("div",{className:"section1__infogr"}),Object(i.jsxs)("div",{className:"section1__buttons",children:[Object(i.jsxs)("div",{className:"section1__button-item",children:[Object(i.jsx)("button",{className:"btn btn_contour-white",children:"Try in cloud"}),Object(i.jsx)("div",{className:"section1__button-caption",children:"* Coming soon"})]}),Object(i.jsx)("div",{className:"section1__button-item",children:Object(i.jsx)("button",{className:"btn btn_white",onClick:function(t){e.showModal()},children:"Request a demo"})})]})]})}),Object(i.jsx)("span",{id:"cases"}),Object(i.jsx)("div",{className:"section section2",children:Object(i.jsxs)("div",{className:"container section2__container",children:[Object(i.jsx)("h2",{className:"section-header section2__header",children:"EHR DB Use Cases"}),Object(i.jsxs)("div",{className:"blocks",children:[Object(i.jsxs)("div",{className:"blocks__item",children:[Object(i.jsx)("div",{className:"blocks__image"}),Object(i.jsx)("div",{className:"blocks__title",children:"EHR DB for storage"}),Object(i.jsx)("div",{className:"blocks__text",children:"EHR DB allows to create a long-term CDR (Clinical Data Repository) storage for patient records using openEHR standard. It can be scaled from a single medical organisation to a regional level."})]}),Object(i.jsxs)("div",{className:"blocks__item",children:[Object(i.jsx)("div",{className:"blocks__image"}),Object(i.jsx)("div",{className:"blocks__title",children:"EHR DB for applications"}),Object(i.jsx)("div",{className:"blocks__text",children:"EHR DB provides a set of services (SDK) allowing to create business healthcare applications like doctor's user interface, mobile applications, backend application with specific domain logic involved in healthcare process."})]}),Object(i.jsxs)("div",{className:"blocks__item",children:[Object(i.jsx)("div",{className:"blocks__image"}),Object(i.jsx)("div",{className:"blocks__title",children:"EHR DB for analytics"}),Object(i.jsx)("div",{className:"blocks__text",children:"EHR DB provide a set of tools allowing to analyse clinical data at population level."})]})]}),Object(i.jsx)("div",{className:"example"})]})}),Object(i.jsx)("span",{id:"architecture"}),Object(i.jsx)("div",{className:"section section3",children:Object(i.jsxs)("div",{className:"container section3__container",children:[Object(i.jsx)("h2",{className:"section-header section3__header",children:"EHR DB Architecture"}),Object(i.jsxs)("p",{className:"section3__text",children:["EHR DB is a backend application build with Java on top of ",Object(i.jsx)("span",{className:"emphasis",children:"PostgreSQL, ElasticSearch, Apache Cassandra"})," for maximum performance speed and unlimited scalability."]}),Object(i.jsxs)("div",{className:"architecture",children:[Object(i.jsxs)("div",{className:"architecture__column",children:[Object(i.jsx)("div",{className:"architecture__header",children:Object(i.jsx)("div",{className:"architecture__header-text",children:"Storage"})}),Object(i.jsxs)("div",{className:"architecture__body",children:[Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"Multitenant"}),"EHR DB is build using multitenant archetecture allowing to run service on a single hardware for multiple tenants or projects. The feature allows to deploy a cloud solution."]}),Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"Security & Access Control"}),"OAuth2 and flexible security management to access data or administrator features."]}),Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"openEHR Templates"}),"Allows to manage openEHR template versions and convert to application readable formats like XML, TDD or JSON representation."]}),Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"openEHR Clinical storage"}),"Allows to store and retrieve openEHR clinical data like EHR, Composition, Folders. openEHR Reference Model 1.0.4 supported, support for BMM coming soon. Support"]}),Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"AQL queries"}),"Allows to run ad-hoc and streaming AQL queries against single or multiple EHR."]}),Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"Audit and logging"}),"Allows to log and audit all the events."]}),Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"System management and UI dashboard"}),"Provides REST API and User interface for system management."]})]})]}),Object(i.jsxs)("div",{className:"architecture__column",children:[Object(i.jsx)("div",{className:"architecture__header",children:Object(i.jsx)("div",{className:"architecture__header-text",children:"Tools"})}),Object(i.jsxs)("div",{className:"architecture__body",children:[Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"Views"}),"Allow to create a stored procedures using AQL and JavaScript."]}),Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"Storage"}),"Allows to move clinical data based on AQL query to external RDBMS storage and keep it realtime synchronised allowing business application to use it."]}),Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"Application resources"}),"Allows to store forms resources or tags from external applications."]}),Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"Drafts"}),"Allows to store a temporal application data before sending it to the server."]}),Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"Triggers"}),"Allows to subscribe with AQL or JavaScript for clinical events and notify external service with formatted object."]}),Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"Clinical Data Migration"}),"Allows to import data from external openEHR CDR storages. Multiple drivers supported."]}),Object(i.jsxs)("div",{className:"architecture__item",children:[Object(i.jsx)("div",{className:"architecture__item-icon"}),Object(i.jsx)("div",{className:"architecture__item-title",children:"API Client libraries"}),"Allows easy integration with native Java Client library and OpenAPI."]})]})]})]})]})}),Object(i.jsx)("span",{id:"contact",name:"contact"}),Object(i.jsx)("div",{className:"footer",children:Object(i.jsxs)("div",{className:"container footer__container",children:[Object(i.jsxs)("div",{className:"copyright",children:[Object(i.jsxs)("div",{className:"copyright__picture",children:[Object(i.jsx)("div",{className:"copyright__text1",children:"Solutions"}),Object(i.jsx)("div",{className:"copyright__text2",children:"Electronic Health Record"})]}),Object(i.jsxs)("div",{className:"copyright__caption",children:[Object(i.jsx)("span",{children:"Copyright 2020"}),Object(i.jsx)("div",{className:"logo-small"})]})]}),Object(i.jsx)(v,{onSubmit:this.showModalMessage,type:"QUESTION"})]})}),Object(i.jsx)(_,{onClose:this.showModal,show:this.state.modalIsVisible,children:Object(i.jsx)(v,{classes:"light",onClose:this.showModal,onSubmit:this.showModalMessage,type:"DEMO"})}),Object(i.jsx)(_,{onClose:this.showModalMessage,show:this.state.modalMessageIsVisible,children:Object(i.jsx)("div",{className:"modal__message",children:this.state.modalMessageText})})]})}}]),s}(c.a.Component),N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),i(e),a(e),c(e),n(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),N()}},[[18,1,2]]]);
//# sourceMappingURL=main.b396ce32.chunk.js.map