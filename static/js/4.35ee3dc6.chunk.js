(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{298:function(e,s,a){e.exports={dialogModule:"Dialogs_dialogModule__16imf",dialogsItem:"Dialogs_dialogsItem__1v4VV",dialog:"Dialogs_dialog__cwf6g",dialogsImg:"Dialogs_dialogsImg__1BztC",dialogsName:"Dialogs_dialogsName__11W0r",messages:"Dialogs_messages__1dzFA",message:"Dialogs_message__2y9Q7",addMessage:"Dialogs_addMessage__2fn7x"}},301:function(e,s,a){"use strict";a.r(s);var n=a(28),i=a(29),t=a(31),c=a(30),o=a(1),d=a.n(o),l=a(130),g=a(40),r=a(298),m=a.n(r),j=a(15),b=a(131),u=a(132),O=a(43),h=a(42),p=a(0),_=Object(h.a)(50),x=d.a.memo((function(e){var s=Object(g.a)(e.dialogsArray).map((function(e){return Object(p.jsx)(M,{name:e.name,id:e.id},e.id)})),a=Object(g.a)(e.messagesElement).map((function(e){return Object(p.jsx)(v,{message:e.message},e.id)}));e.newMessageBody;return Object(p.jsxs)("div",{className:m.a.dialogModule,children:[Object(p.jsx)("div",{className:m.a.dialogsItem,children:s}),Object(p.jsxs)("div",{className:m.a.messages,children:[Object(p.jsx)("div",{children:a}),Object(p.jsx)("div",{className:m.a.addMessage,children:Object(p.jsx)(f,{onSubmit:function(s){e.onSendMessageClick(s.message)}})})]})]})})),f=Object(u.a)({form:"message"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(b.a,{placeholder:"Text",name:"message",component:O.b,validate:[h.b,_]})}),Object(p.jsx)("button",{children:"Send Message"})]})})),M=function(e){return Object(p.jsxs)("div",{className:m.a.dialog,children:[Object(p.jsx)("div",{className:m.a.dialogsImg,children:Object(p.jsx)("img",{src:"https://img1.badfon.ru/original/960x800/3/dc/enn-heteuey-anne-hathaway-7419.jpg"})}),Object(p.jsx)("div",{className:m.a.dialogsName,children:Object(p.jsxs)(j.b,{to:"/dialogs/d"+e.id,children:[e.name," "]})})]})},v=function(e){return Object(p.jsx)("div",{className:m.a.message,children:e.message})},y=x,N=a(12),w=a(91),D=a(9),S=function(e){Object(t.a)(a,e);var s=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,t=new Array(i),c=0;c<i;c++)t[c]=arguments[c];return(e=s.call.apply(s,[this].concat(t))).onSendMessageClick=function(s){e.props.sendMessage(s)},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)(y,{onSendMessageClick:this.onSendMessageClick,newMessageBody:this.props.ollMess.newMessageBody,dialogsArray:this.props.ollMess.dialogsArray,messagesElement:this.props.ollMess.messagesArray})}}]),a}(d.a.Component),k=function(e){return{ollMess:e.messagesPage}},A={sendMessage:l.b};Object(D.d)(Object(N.b)(k,A),w.a)(S);s.default=Object(D.d)(Object(N.b)(k,A),w.a)(S)}}]);
//# sourceMappingURL=4.35ee3dc6.chunk.js.map