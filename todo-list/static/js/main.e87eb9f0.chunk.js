(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),c=n.n(r),d=n(5),i=n(1),s=n(2),u=n(4),l=n(3),m=(n(13),n(14),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this)).state={value:""},o.handleClick=function(e){o.state.value?(o.props.addTodo(o.state.value),o.setState({value:""})):alert("\u041f\u0443\u0441\u0442\u043e\u0435 \u043d\u0435\u043b\u044c\u0437\u044f")},o.handleKeyPress=function(e){"Enter"===e.key&&o.handleClick(e)},o.handleInput=function(e){o.setState({value:e.target.value})},o}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"TodoAdd"},a.a.createElement("input",{className:"TodoAdd__input",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438 \u0437\u0430\u0434\u0430\u0447\u0443",type:"text",value:this.state.value,onChange:this.handleInput,onKeyPress:this.handleKeyPress}),a.a.createElement("button",{className:"TodoAdd__button",onClick:this.handleClick},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),n}(o.Component)),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this)).state={value:""},o.setFocus=function(){o.textInput.focus()},o.handleEdit=function(e){o.setState({value:e.target.value})},o.handleKeyPress=function(e){"Enter"===e.key&&o.handleDone(e)},o.handleDone=function(e){var t=o.props.props,n=t.id,a=t.done,r=t.important;o.state.value?(o.props.changeMode("VIEW"),o.props.props.editTodo(n,o.state.value,a,r)):alert("\u041f\u0443\u0441\u0442\u043e\u0435 \u043d\u0435\u043b\u044c\u0437\u044f")},o.state.value=e.props.value,o.textInput=a.a.createRef(),o}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(o.Fragment,null,a.a.createElement("input",{className:"TodoItem__input TodoItem__input--edit",ref:function(t){e.textInput=t},type:"text",value:this.state.value,onKeyPress:this.handleKeyPress,onChange:this.handleEdit,onBlur:function(t){e.handleDone(t)}}),a.a.createElement("button",{className:"TodoItem__button TodoItem__button--edit",onClick:function(t){e.handleDone(t)}},a.a.createElement("img",{className:"TodoItem__icon",src:"svg/done.svg",alt:"icon"})))}},{key:"componentDidMount",value:function(){this.setFocus()}}]),n}(o.Component);var h=function(e){var t=e.img,n=e.buttonType,o=e.handleClick;return a.a.createElement("button",{className:"TodoItem__button ".concat(n),onClick:function(e){o()}},a.a.createElement("img",{className:"TodoItem__icon",src:t,alt:"button"}))};var v=function(e){var t=e.id,n=e.value,o=e.done,r=e.deleteTodo,c=e.editTodo,d=e.important,i=e.changeImportant;return a.a.createElement("div",{className:"TodoItem__controls"},a.a.createElement(h,{img:"svg/edit.svg",buttonType:"TodoItem__button--edit",handleClick:c}),a.a.createElement(h,{img:"svg/important.svg",buttonType:"TodoItem__button--important",handleClick:function(){i(t,n,o,!d)}}),a.a.createElement(h,{img:"svg/trash.svg",buttonType:"TodoItem__button--trash",handleClick:function(){r(t)}}))},f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.changeMode,n=e.changeImportant,r=this.props.props,c=r.id,d=r.value,i=r.done,s=r.important,u=r.deleteTodo,l=r.editTodo;return a.a.createElement(o.Fragment,null,a.a.createElement("div",{className:"TodoItem__value",onClick:function(e){l(c,d,!i,s)}},d),a.a.createElement(v,{value:d,important:s,done:i,deleteTodo:u,changeImportant:n,editTodo:function(){t("EDIT")},id:c}))}}]),n}(o.Component),T=(n(15),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this)).state={mode:"VIEW"},o.changeMode=function(e){o.setState({mode:e})},o.state.value=e.value,o}return Object(s.a)(n,[{key:"render",value:function(){var e,t="TodoItem ".concat(this.props.done?"TodoItem--done":" "," ").concat(this.props.important?"TodoItem--important":"");return"VIEW"===this.state.mode?e=a.a.createElement(f,{props:this.props,changeImportant:this.props.editTodo,changeMode:this.changeMode}):"EDIT"===this.state.mode&&(e=a.a.createElement(p,{props:this.props,changeMode:this.changeMode})),a.a.createElement("li",{className:t},e)}}]),n}(o.Component));n(16);var b=function(e){var t=e.todos,n=e.deleteTodo,o=e.editTodo,r=t.map((function(e){return a.a.createElement(T,{key:e.id,id:e.id,value:e.value,done:e.done,important:e.important,deleteTodo:n,editTodo:o})}));return a.a.createElement("ul",{className:"TodoList"},t.length>0?r:a.a.createElement("span",{className:"TodoList__empty"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442"))},E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this)).state={todos:[o.createTodo("React TodoList",!0,!1,Math.random()),o.createTodo("\u041d\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u0443",!1,!1,Math.random()),o.createTodo("\u0421\u0434\u043e\u0445\u043d\u0443\u0442\u044c",!1,!0,Math.random())]},o.addTodo=function(e){o.setState((function(t){var n=Object(d.a)(t.todos);return n.push(o.createTodo(e,!1,!1,Math.random())),{todos:n}}))},o.editTodo=function(e,t,n,a){o.setState((function(r){return{todos:Object(d.a)(r.todos).map((function(r){return r.id===e?o.createTodo(t,n,a,e):r}))}}))},o.deleteTodo=function(e){o.setState((function(t){var n=Object(d.a)(t.todos),o=0;return n.forEach((function(t,n){t.id===e&&(o=n)})),n.splice(o,1),{todos:n}}))},o}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,{addTodo:this.addTodo}),a.a.createElement(b,{todos:this.state.todos,deleteTodo:this.deleteTodo,editTodo:this.editTodo}))}},{key:"createTodo",value:function(e,t,n,o){return{value:e,done:t,important:n,id:o}}}]),n}(o.Component);c.a.render(a.a.createElement(E,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.e87eb9f0.chunk.js.map