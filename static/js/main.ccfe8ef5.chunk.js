(this["webpackJsonpnew-austin-spurs-sg"]=this["webpackJsonpnew-austin-spurs-sg"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(29),o=a.n(r),i=(a(77),a(53)),c=a(13),l=a(14),d=a(19),u=a(18),h=a(9),j=a(110),m=a(2),b=a(3),p=a(1),g=["user","component","render"],O=function(e){var t=e.user,a=e.component,n=e.render,s=Object(b.a)(e,g);return t&&n?Object(p.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:n})):Object(p.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:function(e){return t?Object(p.jsx)(a,Object(m.a)({},e)):Object(p.jsx)(h.a,{to:"/"})}}))},w=a(59),f=(a(86),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClose=function(){return n.setState({show:!1})},n.state={show:!0},n.timeoutId=null,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,a=e.heading,n=e.message,s=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){s(r)}),300),Object(p.jsx)(w.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(w.a.Heading,{children:a}),Object(p.jsx)("p",{className:"alert-body",children:n})]})})}}]),a}(s.a.Component)),v=a(72),x=a(44),C=a(24),y=Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(C.b,{exact:!0,to:"/",className:"nav-link",children:"Events"}),Object(p.jsx)(C.b,{exact:!0,to:"/about",className:"nav-link",children:"About"}),Object(p.jsx)(C.b,{exact:!0,to:"/community",className:"nav-link",children:"Community"})]}),S=function(e){var t=e.user;return Object(p.jsxs)(x.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(p.jsxs)(x.a.Brand,{children:[Object(p.jsx)("a",{className:"logo_image",children:Object(p.jsx)("img",{src:"tottenham_hotspurs_cockerel_white_logo.svg",width:"30",height:"30",background:"white",alt:""})}),Object(p.jsx)("h",{className:"logo",children:"Austin Spurs Supporters Group"})]}),Object(p.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(x.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(p.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),y]})})]})},P=a(6),A="https://aqueous-atoll-85096.herokuapp.com",k="http://localhost:4741",N="localhost"===window.location.hostname?k:A,U=a(43),I=a.n(U),E=function(e){return I()({url:N+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},q=a(8),G=a(36),L=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(P.a)({},e.target.name,e.target.value))},n.onSignUp=function(e){e.preventDefault();var t,a=n.props,s=a.msgAlert,r=a.history,o=a.setUser;(t=n.state,I()({method:"POST",url:N+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return E(n.state)})).then((function(e){return o(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){n.setState({email:"",password:"",passwordConfirmation:""}),s({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},n.state={email:"",password:"",passwordConfirmation:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.passwordConfirmation;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Sign Up"}),Object(p.jsxs)(q.a,{onSubmit:this.onSignUp,children:[Object(p.jsxs)(q.a.Group,{controlId:"email",children:[Object(p.jsx)(q.a.Label,{children:"Email address"}),Object(p.jsx)(q.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"password",children:[Object(p.jsx)(q.a.Label,{children:"Password"}),Object(p.jsx)(q.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"passwordConfirmation",children:[Object(p.jsx)(q.a.Label,{children:"Password Confirmation"}),Object(p.jsx)(q.a.Control,{required:!0,name:"passwordConfirmation",value:n,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(p.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component),T=Object(h.f)(L),F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(P.a)({},e.target.name,e.target.value))},n.onSignIn=function(e){e.preventDefault();var t=n.props,a=t.msgAlert,s=t.history,r=t.setUser;E(n.state).then((function(e){return r(e.data.user)})).then((function(){return a({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){n.setState({email:"",password:""}),a({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},n.state={email:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Sign In"}),Object(p.jsxs)(q.a,{onSubmit:this.onSignIn,children:[Object(p.jsxs)(q.a.Group,{controlId:"email",children:[Object(p.jsx)(q.a.Label,{children:"Email address"}),Object(p.jsx)(q.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"password",children:[Object(p.jsx)(q.a.Label,{children:"Password"}),Object(p.jsx)(q.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component),D=Object(h.f)(F),_=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,a=e.history,n=e.clearUser;(function(e){return I()({url:N+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return a.push("/")})).finally((function(){return n()}))}},{key:"render",value:function(){return""}}]),a}(n.Component),B=Object(h.f)(_),W=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(P.a)({},e.target.name,e.target.value))},n.onChangePassword=function(e){e.preventDefault();var t=n.props,a=t.msgAlert,s=t.history,r=t.user;(function(e,t){return I()({url:N+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(n.state,r).then((function(){return a({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){n.setState({oldPassword:"",newPassword:""}),a({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},n.state={oldPassword:"",newPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,a=e.newPassword;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Change Password"}),Object(p.jsxs)(q.a,{onSubmit:this.onChangePassword,children:[Object(p.jsxs)(q.a.Group,{controlId:"oldPassword",children:[Object(p.jsx)(q.a.Label,{children:"Old password"}),Object(p.jsx)(q.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"newPassword",children:[Object(p.jsx)(q.a.Label,{children:"New Password"}),Object(p.jsx)(q.a.Control,{required:!0,name:"newPassword",value:a,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(p.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component),z=Object(h.f)(W),H=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).setUser=function(e){return n.setState({user:e})},n.clearUser=function(){return n.setState({user:null})},n.deleteAlert=function(e){n.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},n.msgAlert=function(e){var t=e.heading,a=e.message,s=e.variant,r=Object(j.a)();n.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:a,variant:s,id:r}])}}))},n.state={user:null,msgAlerts:[]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.msgAlerts,s=t.user;return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(S,{user:s}),a.map((function(t){return Object(p.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(p.jsxs)("main",{className:"container",children:[Object(p.jsx)(h.b,{path:"/sign-up",render:function(){return Object(p.jsx)(T,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(h.b,{path:"/sign-in",render:function(){return Object(p.jsx)(D,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(O,{user:s,path:"/sign-out",render:function(){return Object(p.jsx)(B,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:s})}}),Object(p.jsx)(O,{user:s,path:"/change-password",render:function(){return Object(p.jsx)(z,{msgAlert:e.msgAlert,user:s})}})]})]})}}]),a}(n.Component),J=Object(p.jsx)(C.a,{basename:"/austin-spurs-sg",children:Object(p.jsx)(H,{})});o.a.render(J,document.getElementById("root"))},77:function(e,t,a){},86:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.ccfe8ef5.chunk.js.map