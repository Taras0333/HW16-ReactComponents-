(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),o=a.n(r),c=(a(12),a(13),a(14),a(3)),l=a(4),i=a(6),m=a(5),p=function(e){return s.a.createElement("div",{className:"wrap"},s.a.createElement("span",{className:"item"},e.firstName),s.a.createElement("span",{className:"item"},e.lastName),s.a.createElement("span",{className:"item phone"},e.phone))},u=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={contacts:[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}],person:"Default",st:"false",search:""},e.changeTitle=function(t){var a=t.target.value;e.setState({person:a})},e.find=function(){var t=e.state.person;console.log(t),e.state.contacts.filter((function(a){a.lastName.includes(t)&&e.setState({search:a.firstName+" "+a.lastName+" "+a.phone,st:"true"})}))},e}return Object(l.a)(a,[{key:"render",value:function(){return"false"===this.state.st?s.a.createElement("div",{className:"wrapper"},s.a.createElement("input",{className:"input",placeholder:"find person",velue:this.state.title,onChange:this.changeTitle}),s.a.createElement("button",{className:"btn",onClick:this.find},"submit"),this.state.contacts.map((function(e){return s.a.createElement(p,{firstName:e.firstName,lastName:e.lastName,phone:e.phone})}))):s.a.createElement("div",{className:"response"},s.a.createElement("p",{className:"finded"},this.state.search))}}]),a}(n.Component);var f=function(){return s.a.createElement("div",{className:"container"},s.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f8313706.chunk.js.map