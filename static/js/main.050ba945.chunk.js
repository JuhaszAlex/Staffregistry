(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e){e.exports=[{name:"Giacomo Guilizzoni",job:"Founder & CEO",age:"34",nick:"Peldi",employee:!0},{name:"Guido Jach Guilizzoni",job:"",age:"4",nick:"The Guids",employee:!1},{name:"Marco Botton",job:"Tuttofare",age:"31",nick:"",employee:!0},{name:"Mariah Maclachlan",job:"Better Half",age:"35",nick:"Patata",employee:!0},{name:"Julianne Liss",job:"Concrete Engineering Technician",age:"51",nick:"Jul",employee:!0},{name:"Venus Drey",job:"Construction Ironworker Helper",age:"28",nick:"Venus",employee:!0},{name:"Elin Kalman",job:"Sensor Operator",age:"43",nick:"Elin",employee:!0},{name:"Tyler Zeledon",job:"Airport Manager",age:"31",nick:"Ty",employee:!0},{name:"Nydia Mothershed",job:"Regional Planner",age:"49",nick:"Mom",employee:!0},{name:"Margrett Miguez",job:"University Librarian",age:"42",nick:"Margie",employee:!0},{name:"Del Henriquez",job:"Cargo Agent",age:"40",nick:"Del :)",employee:!0},{name:"Jannette Acres",job:"Public Health Social Worker",age:"50",nick:"Janie",employee:!1},{name:"Un Hance",job:"Deboner",age:"28",nick:"UNHCR",employee:!0},{name:"Erich Krogh",job:"Low Altitude Air Defense Officer",age:"25",nick:"Erik",employee:!0},{name:"Devora Wight",job:"Commercial Credit Reviewer",age:"38",nick:"Debbie",employee:!0},{name:"Alphonse Burbidge",job:"Geographer",age:"31",nick:"Alphie",employee:!0},{name:"Naomi Mcquaig",job:"Traffic Line Painter",age:"49",nick:"Naomi",employee:!1},{name:"Benton Cora",job:"Interior Surface Insulation Worker",age:"44",nick:"Bent",employee:!0},{name:"Mark Stringer",job:"Aoc Director Combat Plans Officer",age:"55",nick:"Stingie",employee:!0},{name:"Giacomo Guilizzoni",job:"COO, WOW! Division",age:":)",nick:"Val",employee:!0}]},17:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),i=a.n(r),o=(a(23),a(1)),c=a(2),s=a(5),m=a(3),u=a(4),p=(a(25),function(e){var t=e.toggleModal;return l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-start"}},l.a.createElement("p",{onClick:function(){return t("Form")},className:"f3 link dim black underline pa3 pointer"},"Add"),l.a.createElement("p",{onClick:function(){return t("Chart")},className:"f3 link dim black underline pa3 pointer"},"Line Chart"))}),b=a(14),d=a(6),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).change=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.onEmployeeChange=function(e){a.setState({employee:!a.state.employee})},a.onSubmit=function(){if(a.state.name.length>=2){var e={name:a.state.name,job:a.state.job,age:a.state.age,nick:a.state.nick,employee:a.state.employee};a.props.addNewRow(e),a.props.toggleModal("Form")}else a.setState({errorMsg:!0}),setTimeout(function(){this.setState({errorMsg:!1})}.bind(Object(d.a)(Object(d.a)(a))),3e3)},a.state={name:"",job:"",age:"",nick:"",employee:!1,errorMsg:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("article",null,l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"add_new",className:"ba b--transparent ph0 mh0"},this.state.errorMsg?l.a.createElement("p",{className:"tc red"},"You have to specify a name."):null,l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),l.a.createElement("input",{className:"b pa2 input-reset ba hover-bg-light-gray hover-black w-100",type:"text",name:"name",id:"name",onChange:function(t){return e.change(t)}})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"job"},"Job title"),l.a.createElement("input",{className:"b pa2 input-reset ba hover-bg-light-gray hover-black w-100",type:"text",name:"job",id:"job",onChange:function(t){return e.change(t)}})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"age"},"Age"),l.a.createElement("input",{className:"b pa2 input-reset ba hover-bg-light-gray hover-black w-100",type:"number",name:"age",id:"age",onChange:function(t){return e.change(t)}})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"nick"},"Nickname"),l.a.createElement("input",{className:"b pa2 input-reset ba hover-bg-light-gray hover-black w-100",type:"text",name:"nick",id:"nick",onChange:function(t){return e.change(t)}})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"b mr1 fw6 lh-copy f6"},"Employee"),l.a.createElement("input",{type:"checkbox",onClick:this.onEmployeeChange}))),l.a.createElement("div",{className:""},l.a.createElement("nav",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("p",{onClick:function(){return e.onSubmit()},className:"f3 link dim black underline pa3 pointer"},"Ok"),l.a.createElement("p",{onClick:function(){return e.props.toggleModal("Form")},className:"f3 link dim black underline pa3 pointer"},"Cancel"))))))}}]),t}(l.a.Component),g=(a(27),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.removeRow;return l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Nickname"),l.a.createElement("th",null,"Employee"),l.a.createElement("th",null))),l.a.createElement("tbody",null,this.props.data.map(function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t.name," ",l.a.createElement("br",null),t.job),l.a.createElement("td",null,t.age),l.a.createElement("td",null,t.nick),l.a.createElement("td",null,l.a.createElement("input",{type:"checkbox",disabled:!0,defaultChecked:t.employee})),l.a.createElement("td",{onClick:function(){return e(a,"Deleted: "+t.name)},className:"link dim blue db pointer"},"Delete"))})))}}]),t}(l.a.Component)),f=function(e){var t=e.onNewData;return l.a.createElement("article",{className:"b--transparent mv4 w-100 w-50-m w-25-l mw6 center"},l.a.createElement("fieldset",{id:"data_dump",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f4 fw6 tl ph0 mh0"},"Data dump:"),l.a.createElement("div",{className:"br3 ba b--black-10  mw6 shadow-2 center"},t?l.a.createElement("p",{className:""},JSON.stringify(t,null,2)):null)))},E=a(15),k=a(7),y=a.n(k),v=a(16),w=a.n(v),N=(a(39),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=[{color:"steelblue",points:this.props.data}];return l.a.createElement("div",{className:"tc"},l.a.createElement(w.a,{width:450,height:280,data:e,xLabel:"Place",yLabel:"Age"}),l.a.createElement("p",{className:"tc pb2"},"Click somewhere out of the modal to close."))}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggleModal=function(e){"Form"===e?a.setState({isActive:!a.state.isActive}):"Chart"===e&&a.setState({isChartActive:!a.state.isChartActive})},a.addNewRow=function(e){a.setState({fields:e}),a.state.details.push(e),a.setState({details:a.state.details})},a.removeRow=function(e,t){a.setState({fields:t}),a.state.details.splice(e,1),a.setState({details:a.state.details})},a.createCoordinates=function(){for(var e=a.state.details.map(function(e){return parseInt(e.age)}).filter(function(e){return!Number.isNaN(e)}),t=[],n=1;n<=e.length;n++)t.push(n);for(var l=[],r=0;r<e.length;r++){var i=t[r],o=e[r];l.push({x:i,y:o})}return l},a.state={details:E,isActive:!1,isChartActive:!1,fields:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){y.a.setAppElement("body")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p,{toggleModal:this.toggleModal}),l.a.createElement(g,{data:this.state.details,removeRow:this.removeRow}),l.a.createElement(y.a,Object.assign({},this.props,{isOpen:this.state.isActive,onRequestClose:function(){return e.toggleModal("Form")},className:"Modal br3 bg-white b--black-10 mt2 w-100 w-50-m mw6 shadow-2 center"}),l.a.createElement(h,{toggleModal:this.toggleModal,addNewRow:this.addNewRow})),l.a.createElement(y.a,Object.assign({},this.props,{isOpen:this.state.isChartActive,onRequestClose:function(){return e.toggleModal("Chart")},className:"Modal br3 bg-white b--black-10 mt2  w-100 w-75-m mw6 shadow-2 center"}),this.state.details.length>=2?l.a.createElement(N,{data:this.createCoordinates()}):l.a.createElement("h3",{className:"tc red pt2 pb2"}," There must be at least 2 members in the table with age defined.")),l.a.createElement(f,{onNewData:this.state.fields}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);i.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.050ba945.chunk.js.map