(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={themeSelector:"Toggler_themeSelector__7mjqT",label:"Toggler_label__34-gw",switch:"Toggler_switch__1WsQq",slider:"Toggler_slider__2O3Mp"}},22:function(e,t,n){e.exports={item:"ContactListItem_item__znsD7",btn:"ContactListItem_btn__3R2zT"}},26:function(e,t,n){e.exports={list:"ContactList_list__eIu16"}},28:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,c=n(0),o=n.n(c),r=n(5),l=n.n(r),m=n(1),i=n(2),u=n(4),s=n(27),b=n(3),h=n(8),d=n.n(h),f={addContact:Object(i.b)("contacts/add",(function(e,t){return{payload:{contact:{name:e,number:t,id:d.a.generate()}}}})),deleteContact:Object(i.b)("contacts/delete"),changeFilter:Object(i.b)("contacts/filter")},g=Object(i.c)([],(a={},Object(u.a)(a,f.addContact,(function(e,t){return[].concat(Object(s.a)(e),[t.payload.contact])})),Object(u.a)(a,f.deleteContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),C=Object(i.c)("",Object(u.a)({},f.changeFilter,(function(e,t){return t.payload}))),p=Object(b.c)({contacts:g,filter:C}),j=n(9),O={toggleTheme:Object(i.b)("theme/toggleTheme",(function(e,t){return{payload:{theme:{isChecked:!1,themeConfig:"light"}}}}))},v=Object(i.c)({themeConfig:"light"},Object(u.a)({},O.toggleTheme,(function(e){return Object(j.a)(Object(j.a)({},e),{},{themeConfig:"light"===e.themeConfig?"dark":"light"})}))),E=Object(i.c)({isChecked:!1},Object(u.a)({},O.toggleTheme,(function(e){return Object(j.a)(Object(j.a)({},e),{},{isChecked:!e.isChecked})}))),_=Object(b.c)({themeConfig:v,isChecked:E}),y=Object(i.a)({reducer:{contacts:p,theme:_}}),k=n(13),I=n(14),N=n(16),T=n(15),w=n(23),F={nameInputId:d.a.generate(),numberInputId:d.a.generate()},x=n(7),L=n.n(x),S=(n(18),function(e){Object(N.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.value,c=n.name;e.setState(Object(u.a)({},c,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number;e.props.contacts.some((function(e){return e.name===a}))?(w.a.configure(),w.a.error(a+" is alredy in contacts")):e.props.onAddContact(a,c),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(I.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=F.nameInputId,c=F.numberInputId;return o.a.createElement("form",{onSubmit:this.handleSubmit,className:L.a.form},o.a.createElement("div",null,o.a.createElement("label",{className:L.a.formLabel,htmlFor:a},"Name"),o.a.createElement("input",{className:L.a.formInput,type:"text",value:t,onChange:this.handleChange,name:"name",id:a})),o.a.createElement("div",null,o.a.createElement("label",{className:L.a.formLabel,htmlFor:c},"Number"),o.a.createElement("input",{className:L.a.formInput,type:"tel",value:n,onChange:this.handleChange,name:"number",id:c})),o.a.createElement("button",{type:"submit",disabled:!t.length||!n.length},"Add contact"))}}]),n}(c.Component)),B={onAddContact:f.addContact},D=Object(m.b)((function(e){return{contacts:e.contacts.contacts}}),B)(S),A=n(22);var J=function(e){var t=e.name,n=e.number,a=e.onDeleteContact;return o.a.createElement("div",{className:A.item},o.a.createElement("p",null,t,":",n),o.a.createElement("button",{className:A.btn,type:"button",onClick:a},"Delete"))},q=n(26),z=n.n(q);var M={onDeleteContact:f.deleteContact},G=Object(m.b)((function(e){var t=e.contacts,n=t.contacts,a=t.filter;return{contacts:n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))}}),M)((function(e){var t=e.contacts,n=e.onDeleteContact;return o.a.createElement("ul",{className:z.a.list},t&&t.map((function(e){var t=e.id,a=e.name,c=e.number;return o.a.createElement("li",{key:t},o.a.createElement(J,{name:a,number:c,onDeleteContact:function(){return n(t)}}))})))})),P={onChangeFilter:f.changeFilter},Q=Object(m.b)((function(e){return{value:e.contacts.filter}}),P)((function(e){var t=e.value,n=e.onChangeFilter;return o.a.createElement("div",null,o.a.createElement("p",null,"Find contacts by name"),o.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}))})),R={fontColor:"black",bodyBg:"white"},V={fontColor:"white",bodyBg:"black"},W=(o.a.createContext(R),Object(m.b)((function(e){return{theme:e.theme.themeConfig}}))((function(e){var t=e.children,n=e.theme;return o.a.createElement("div",{style:{background:"light"===n.themeConfig?R.bodyBg:V.bodyBg,color:"light"===n.themeConfig?R.fontColor:V.fontColor}},t)}))),H=n(11),K=n.n(H),U=function(e){Object(N.a)(n,e);var t=Object(T.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){var e=this.props,t=e.theme,n=e.toggleTheme,a=e.isChecked;return o.a.createElement("div",{style:{background:"light"===t.themeConfig?R.bodyBg:V.bodyBg},className:K.a.themeSelector},o.a.createElement("span",{className:K.a.label}),o.a.createElement("label",{className:K.a.switch},o.a.createElement("input",{type:"checkbox",checked:a.isChecked,onChange:n}),o.a.createElement("span",{className:K.a.slider})))}}]),n}(c.Component),X={toggleTheme:O.toggleTheme},Y=Object(m.b)((function(e){return{isChecked:e.theme.isChecked,contacts:e.contacts.contacts,theme:e.theme.themeConfig}}),X)(U),Z=Object(m.b)((function(e){return{contacts:e.contacts.contacts}}))((function(e){var t=e.contacts;return o.a.createElement(W,null,o.a.createElement(Y,null),o.a.createElement("h1",null,"Phonebook"),o.a.createElement(D,null),o.a.createElement("h2",null,"Contacts"),t.length>2&&o.a.createElement(Q,null),o.a.createElement(G,null))}));n(46);l.a.render(o.a.createElement(m.a,{store:y},o.a.createElement(Z,null)),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"ContactForm_form__1tyEJ",formLabel:"ContactForm_formLabel__2sT7M",formInput:"ContactForm_formInput__2VjGf"}}},[[28,1,2]]]);
//# sourceMappingURL=main.003d07ea.chunk.js.map