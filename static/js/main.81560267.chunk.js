(this["webpackJsonpnew-austin-spurs-sg"]=this["webpackJsonpnew-austin-spurs-sg"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(29),c=n.n(r),i=(n(77),n(53)),o=n(13),l=n(14),d=n(20),u=n(19),h=n(9),j=n(110),m=n(2),b=n(3),g=n(1),p=["user","component","render"],O=function(e){var t=e.user,n=e.component,a=e.render,s=Object(b.a)(e,p);return t&&a?Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:a})):Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:function(e){return t?Object(g.jsx)(n,Object(m.a)({},e)):Object(g.jsx)(h.a,{to:"/"})}}))},w=n(59),f=(n(86),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,s=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){s(r)}),300),Object(g.jsx)(w.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(w.a.Heading,{children:n}),Object(g.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(s.a.Component)),v=n(72),x=n(44),C=n(16),y=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(C.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(g.jsx)(C.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),S=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(C.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(g.jsx)(C.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),P=Object(g.jsx)(a.Fragment,{children:Object(g.jsx)(C.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),A=function(e){var t=e.user;return Object(g.jsxs)(x.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(g.jsx)(x.a.Brand,{children:Object(g.jsx)(C.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"react-auth-template"})}),Object(g.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(x.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(g.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),P,t?y:S]})})]})},k=n(6),N="https://aqueous-atoll-85096.herokuapp.com",U="http://localhost:4741",I="localhost"===window.location.hostname?U:N,F=n(43),E=n.n(F),q=function(e){return E()({url:I+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},L=n(8),T=n(36),D=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,s=n.msgAlert,r=n.history,c=n.setUser;(t=a.state,E()({method:"POST",url:I+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return q(a.state)})).then((function(e){return c(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),s({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign Up"}),Object(g.jsxs)(L.a,{onSubmit:this.onSignUp,children:[Object(g.jsxs)(L.a.Group,{controlId:"email",children:[Object(g.jsx)(L.a.Label,{children:"Email address"}),Object(g.jsx)(L.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(L.a.Group,{controlId:"password",children:[Object(g.jsx)(L.a.Label,{children:"Password"}),Object(g.jsx)(L.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsxs)(L.a.Group,{controlId:"passwordConfirmation",children:[Object(g.jsx)(L.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(L.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(g.jsx)(T.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),G=Object(h.f)(D),B=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.setUser;q(a.state).then((function(e){return r(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign In"}),Object(g.jsxs)(L.a,{onSubmit:this.onSignIn,children:[Object(g.jsxs)(L.a.Group,{controlId:"email",children:[Object(g.jsx)(L.a.Label,{children:"Email address"}),Object(g.jsx)(L.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(L.a.Group,{controlId:"password",children:[Object(g.jsx)(L.a.Label,{children:"Password"}),Object(g.jsx)(L.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsx)(T.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),H=Object(h.f)(B),W=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return E()({url:I+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(a.Component),z=Object(h.f)(W),J=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.user;(function(e,t){return E()({url:I+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,r).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(L.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(L.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(L.a.Label,{children:"Old password"}),Object(g.jsx)(L.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(L.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(L.a.Label,{children:"New Password"}),Object(g.jsx)(L.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(T.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),M=Object(h.f)(J),R=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,s=e.variant,r=Object(j.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:n,variant:s,id:r}])}}))},a.state={user:null,msgAlerts:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,s=t.user;return Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(A,{user:s}),n.map((function(t){return Object(g.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(h.b,{path:"/sign-up",render:function(){return Object(g.jsx)(G,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(h.b,{path:"/sign-in",render:function(){return Object(g.jsx)(H,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(O,{user:s,path:"/sign-out",render:function(){return Object(g.jsx)(z,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:s})}}),Object(g.jsx)(O,{user:s,path:"/change-password",render:function(){return Object(g.jsx)(M,{msgAlert:e.msgAlert,user:s})}})]})]})}}]),n}(a.Component),Y=Object(g.jsx)(C.a,{basename:"/austin-spurs-sg",children:Object(g.jsx)(R,{})});c.a.render(Y,document.getElementById("root"))},77:function(e,t,n){},86:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.81560267.chunk.js.map