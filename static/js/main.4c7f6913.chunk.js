(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),r=a.n(l),s=(a(14),a(6)),i=a(1),o=a(2),u=a(4),d=a(3),m=a(5),h=(a(15),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",checked:!1,date:a.minDate},a.handleText=function(e){a.setState({text:e.target.value})},a.handleCheckbox=function(e){a.setState({checked:e.target.checked})},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleClick=function(){var e=a.state,t=e.text,n=e.checked,c=e.date;t.length>2&&(a.props.add(t,c,n)&&a.setState({text:"",checked:!1,date:a.minDate}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=1*this.minDate.slice(0,4)+1;return e+="-12-31",c.a.createElement("div",{className:"form"},c.a.createElement("input",{className:"inputText",type:"text",placeholder:"write task...",value:this.state.text,onChange:this.handleText}),c.a.createElement("label",{htmlFor:"important",className:"container"},"Important",c.a.createElement("input",{className:"checkbox",type:"checkbox",checked:this.state.checked,id:"important",onChange:this.handleCheckbox}),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("input",{className:"inputText",type:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.handleDate}),c.a.createElement("button",{onClick:this.handleClick},"Add"))}}]),t}(n.Component)),k=(a(16),function(e){var t=e.task,a=t.text,n=t.date,l=t.id,r=t.active,s=t.important,i=t.endDate;if(r)return c.a.createElement("div",{className:"taskActive"},c.a.createElement("p",null,c.a.createElement("strong",{style:s?{color:"#ff7675"}:null},a)," (till"," ",c.a.createElement("span",null,n,") "),c.a.createElement("button",{className:"done",onClick:function(){return e.change(l)}},"Done"),c.a.createElement("button",{className:"delete",onClick:function(){return e.delete(l)}},"x")));var o=new Date(i).toLocaleString();return c.a.createElement("div",{className:"taskDone"},c.a.createElement("p",null,c.a.createElement("strong",null,a),c.a.createElement("em",null," (till ",n,") "),c.a.createElement("button",{className:"delete",onClick:function(){return e.delete(l)}},"x"),c.a.createElement("span",{className:"taskComplete"},"task complete ",c.a.createElement("span",null,o," "))))}),p=(a(17),function(e){var t=e.tasks.filter((function(e){return e.active})),a=e.tasks.filter((function(e){return!e.active}));a.length>=2&&a.sort((function(e,t){return e.endDate>t.endDate?-1:e.endDate<t.endDate?1:0})),t.length>=2&&t.sort((function(e,t){return(e=e.text.toLowerCase())<(t=t.text.toLowerCase())?-1:e>t?1:0}));var n=t.map((function(t){return c.a.createElement(k,{key:t.id,task:t,delete:e.delete,change:e.change})})),l=a.map((function(t){return c.a.createElement(k,{key:t.id,task:t,delete:e.delete,change:e.change})}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"activeTask"},c.a.createElement("h3",null,"Todo"),n.length>0?n:"- nothinig to do -"),c.a.createElement("div",{className:"doneTask"},c.a.createElement("h4",null,"Done (",l.length,")"),a.length>5&&c.a.createElement("span",{className:"doneTaskText"},"Your last 5 tasks:"),l.slice(0,5)))}),f=(a(18),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).counter=6,a.state={tasks:[{id:0,text:"clean house",date:"2019-12-20",important:!0,active:!0,endDate:null},{id:1,text:"walk with dog",date:"2019-12-10",important:!0,active:!0,endDate:null},{id:2,text:"cook dinner",date:"2019-12-22",important:!1,active:!0,endDate:null},{id:3,text:"buy new shoes",date:"2019-12-30",important:!1,active:!0,endDate:null},{id:4,text:"go to work",date:"2020-01-02",important:!0,active:!0,endDate:null},{id:5,text:"pay bills",date:"2019-12-23",important:!1,active:!0,endDate:null}]},a.deleteTask=function(e){var t=Object(s.a)(a.state.tasks);t=t.filter((function(t){return t.id!==e})),a.setState({tasks:t})},a.statusTask=function(e){var t=Object(s.a)(a.state.tasks);t.forEach((function(t){t.id===e&&(t.active=!1,t.endDate=(new Date).getTime())})),a.setState({tasks:t})},a.addTask=function(e,t,n){var c={id:a.counter,text:e,date:t,important:n,active:!0,endDate:null};return a.counter++,a.setState((function(e){return{tasks:[].concat(Object(s.a)(e.tasks),[c])}})),!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Add task"),c.a.createElement(h,{add:this.addTask}),c.a.createElement(p,{tasks:this.state.tasks,delete:this.deleteTask,change:this.statusTask}))}}]),t}(n.Component));r.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.4c7f6913.chunk.js.map