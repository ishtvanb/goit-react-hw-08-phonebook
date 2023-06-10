"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[776],{5271:function(n,e,r){var t=r(9959),o=r(184);e.Z=function(n){var e=n.children;return(0,o.jsxs)(t.ZC,{children:[" ",e]})}},9959:function(n,e,r){r.d(e,{ZC:function(){return u},ae:function(){return s},xj:function(){return c}});var t,o,a,i=r(168),l=r(6088),u=l.Z.div(t||(t=(0,i.Z)(["\n  width: 360px;\n  margin: 0 auto;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),c=l.Z.h1(o||(o=(0,i.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n  color: darkblue;\n"]))),s=l.Z.h2(a||(a=(0,i.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n  color: darkblue;\n"])))},6776:function(n,e,r){r.r(e),r.d(e,{ContactsPage:function(){return P},default:function(){return q}});var t,o=r(5271),a=r(1413),i=r(5705),l=r(5218),u=r(6727),c=(r(6933),r(9434)),s=r(5162),d=function(n){return n.contacts.items},m=function(n){return n.contacts.isLoading},x=function(n){return n.contacts.error},f=function(n){return n.filter.value},p=function(n){var e=d(n),r=f(n);return null===e||void 0===e?void 0:e.filter((function(n){var e;return null===n||void 0===n||null===(e=n.name)||void 0===e?void 0:e.toLowerCase().includes(r.toLowerCase())}))},h=r(4909),b=r(6151),v=r(184),g=u.Ry({name:u.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Name is required!"),phone:u.Z_().phone("UA").required("Phone number is required!")}),j=function(){var n=(0,c.I0)(),e=(0,c.v9)(d);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.x7,{}),(0,v.jsx)(i.J9,{initialValues:{name:"",number:""},validationSchema:g,onSubmit:function(r,t){var o=Object.assign({},r),i=e.find((function(n){return n.name.toLowerCase()===o.name.toLowerCase()}));i?(l.ZP.error("You already have ".concat(i.name," in your contacts!")),t.resetForm()):(n((0,s.uK)((0,a.Z)({},o))),t.resetForm())},children:function(n){var e=n.handleSubmit;return(0,v.jsxs)("form",{onSubmit:e,children:[(0,v.jsx)(i.gN,{name:"name",children:function(n){var e=n.field,r=n.form,t=r.touched,o=r.errors;return(0,v.jsx)(h.Z,(0,a.Z)((0,a.Z)({},e),{},{label:"Name",variant:"outlined",error:t.name&&Boolean(o.name),helperText:t.name&&o.name,fullWidth:!0,margin:"normal",autoComplete:"off",size:"small"}))}}),(0,v.jsx)(i.gN,{name:"number",children:function(n){var e=n.field,r=n.form,t=r.touched,o=r.errors;return(0,v.jsx)(h.Z,(0,a.Z)((0,a.Z)({},e),{},{label:"Number",variant:"outlined",error:t.number&&Boolean(o.number),helperText:t.number&&o.number,fullWidth:!0,margin:"normal",autoComplete:"off",size:"small",sx:{mb:2}}))}}),(0,v.jsx)(b.Z,{type:"submit",variant:"contained",color:"primary",sx:{mb:4},fullWidth:!0,children:"Add contact"})]})}})]})},Z=r(8185),k=r(168),y=r(6088).Z.li(t||(t=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  border-radius: 10px;\n  padding: 10px;\n  background-color: lightblue;\n  \n  &:not(:last-of-type) {\n    margin-bottom: 10px;\n  }\n\n&:hover {\n  background-color: darkgrey;\n  }\n"]))),w=r(2007),C=function(){var n=(0,c.v9)(p),e=(0,c.I0)();return(0,v.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(n){var r=n.name,t=(n.phone,n.id);return(0,v.jsxs)(y,{children:[(0,v.jsx)("span",{style:{flexGrow:"2"},children:r}),(0,v.jsx)("span",{style:{marginRight:"10px"},children:w.number}),(0,v.jsx)(Z.yvY,{"aria-label":"delete-icon",style:{cursor:"pointer",color:"crimson"},onClick:function(){!function(n){e((0,s.GK)(n))}(t)}})]},t)}))})},L=r(7574),F=function(){var n=(0,c.v9)(f),e=(0,c.I0)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(h.Z,{label:"Find contacts by name",variant:"outlined",onChange:function(n){return e((0,L.a)(n.target.value))},id:"Find contacts by name",value:n,size:"small",sx:{mb:2,ml:4},InputLabelProps:{shrink:!0}})})},N=r(6286),S=function(){return(0,v.jsx)(N.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})},_=r(9959),I=r(2791),P=function(){var n=(0,c.I0)(),e=(0,c.v9)(m),r=(0,c.v9)(x);return(0,I.useEffect)((function(){n((0,s.yF)())}),[n]),(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(_.xj,{children:"Phonebook"}),(0,v.jsx)(j,{}),(0,v.jsx)(_.ae,{children:"Contacts"}),(0,v.jsx)(F,{}),e&&!r&&(0,v.jsx)(S,{}),(0,v.jsx)(C,{})]})},q=P}}]);
//# sourceMappingURL=776.c6b190d0.chunk.js.map