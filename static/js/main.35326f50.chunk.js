(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),i=(a(66),a(9)),s=a(10),l=a(12),u=a(11),m=a(13),d=a(153),p=a(154),h=a(155),b=(a(67),function(){return r.a.createElement("section",null,r.a.createElement("section",{class:"titleContainer"},r.a.createElement("span",null,r.a.createElement("div",{class:"mainTitle"},"Hi!"),r.a.createElement("div",{class:"subTitle"}," Nice to meet you! ",r.a.createElement("br",null),"I am Roshan and I like telling my computer to do things for me. ",r.a.createElement("br",null),"Currently developing for UBC Launchpad! \ud83d\ude80 ",r.a.createElement("br",null),"Check out my lab to see some projects I have worked on!"))))}),f=a(152),g=a(14),E=a.n(g),v=function(){return r.a.createElement("section",{class:"buttonSection"},r.a.createElement("div",{class:"buttons"},r.a.createElement(E.a,{href:"http://www.github.com/r614"},"Github"),r.a.createElement(E.a,{href:"https://drive.google.com/open?id=1U8Z55E2bX1hhpHmxjPAfZA-IjWTY3Osp3-AtyjI-33w"},"Resume"),r.a.createElement(E.a,{component:f.a,to:"/lab"},"Lab"),r.a.createElement(E.a,{href:"mailto:roshan.pawar@alumni.ubc.ca"},"Contact")))},y=function(){return r.a.createElement("section",{class:"splash"},r.a.createElement("div",{class:"wrapper"},r.a.createElement(b,null),r.a.createElement(v,null)))},k=a(58),j=a(33),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){a.props.onClick(a.props.label)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.isOpen,n=t.label;return r.a.createElement("div",{style:{background:"transparent",padding:"5px 10px"}},r.a.createElement("div",{onClick:e,style:{cursor:"pointer"}},r.a.createElement("div",{class:"AccordionTitle"},n),r.a.createElement("div",{style:{float:"right"}})),a&&r.a.createElement("div",{style:{background:"transparent",marginTop:10,padding:"10px 20px",width:"100%"}},this.props.children))}}]),t}(n.Component),C=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClick=function(e){var t=!!Object(j.a)(a).state.openSections[e];a.setState({openSections:Object(k.a)({},e,!t)})};return a.state={openSections:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props.children,a=this.state.openSections;return r.a.createElement("div",{style:{border:"transparent"}},t.map(function(t){return r.a.createElement(w,{isOpen:!!a[t.props.label],label:t.props.label,onClick:e},t.props.children)}))}}]),t}(n.Component),x=a(59);var O=function(){return r.a.createElement("div",{class:"ListContainer"},r.a.createElement(C,null,x.map(function(e,t){return r.a.createElement("div",{label:e.Name},r.a.createElement("div",{class:"listText"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"left-column"},"Date: ",r.a.createElement("br",null),"About: ",r.a.createElement("br",null))),r.a.createElement("div",{class:"doublecolumn"},r.a.createElement("div",{class:"right-column"},e.Date," ",r.a.createElement("br",null),e.About," ",r.a.createElement("br",null),r.a.createElement("div",{class:"gitButtons"},""!==e.Link&&r.a.createElement(E.a,{variant:"outlined",color:"inherit",href:e.Link},"Github")))))))})))},A=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("section",{class:"projectBackground"},r.a.createElement("div",{class:"projCardContainer"},r.a.createElement(O,null))))}}]),t}(n.Component),_=function(){return r.a.createElement("section",{class:"splash"},r.a.createElement(A,null))},D=function(){return r.a.createElement("section",{class:"splash"},r.a.createElement("div",{class:"HelpText"},"Woah, you took a wrong turn. ",r.a.createElement("br",null),"Let's get you back on track!"))},L="pushState"in window.history,S=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{forceRefresh:!L},r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/",exact:!0,component:y}),r.a.createElement(h.a,{path:"/lab",exact:!0,component:_}),r.a.createElement(h.a,{component:D}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e){e.exports=[{Name:"Personal Website",Date:"February 2019",About:"The website you are on! This page is dynamically generated by the server. Projects and other info can be added by simply editing a JSON file for easy maintainability. Written in Javascript using React and React Router, deployed on Github Pages.",media:"https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png",Link:"https://github.com/r614/r614.github.io"},{Name:"Lazy",Date:"January 2019",About:"Imports assignment data from the user and uses an algorthm to generate a study-schedule for the user which is exported to Google Calendar using the Google API. Built in Python using Django and SQLite for NWHacks 2019.",media:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PPRmXjOaNTFYGxjjZfB0swVTPv46h9ot7Rr8SszfTDHv9Sbu",Link:""},{Name:"AccessibleMouse",Date:"December 2018",About:"An affordable mouth-controlled input device for patients with impaired upper body movement. The device uses a joystick, pressure sensor and an Arduino, allowing users to 'puff' or 'sip' in different sequences to trigger input like scrolling, left click, right click and voice input. The user moves the straw to move the cursor.",media:"https://scontent-sea1-1.xx.fbcdn.net/v/t1.15752-9/47297210_265356687493336_6333243003838136320_n.jpg?_nc_cat=105&_nc_ht=scontent-sea1-1.xx&oh=d1ff9f7130f81e19fb9a2673ca6da116&oe=5CDF91BD",Link:"https://github.com/r614/AccessibleMouse"},{Name:"ELO Rating System",Date:"August 2018",About:"A Python library that uses Selenium Chromedriver to scrape the ESEA Website for Leaderboard Data and ranks teams using the Glicko-2 Algorithm.",media:"https://i1.sndcdn.com/artworks-000243047490-3rqqj4-t500x500.jpg",Link:"https://github.com/r614/Glicko-Rating-System-ESEA"},{Name:"CredibleClients",Date:"December 2018",About:"Exploration of Credit Card default data from the UCI Machine Learning repository using SciKit Learn's GradientBoosting and Yandex Catboost",media:"https://scontent-sea1-1.xx.fbcdn.net/v/t1.15752-9/47297210_265356687493336_6333243003838136320_n.jpg?_nc_cat=105&_nc_ht=scontent-sea1-1.xx&oh=d1ff9f7130f81e19fb9a2673ca6da116&oe=5CDF91BD",Link:"https://github.com/r614/credible-clients"},{Name:"Mechanical Claw Project",Date:"January 2017",About:"An Arduino powered mechanical claw project for APSC 101. The arduino processes sonar sensor data to gauge height and closes/opens the claw to pick up objects.",media:"https://scontent-sea1-1.xx.fbcdn.net/v/t1.15752-9/47297210_265356687493336_6333243003838136320_n.jpg?_nc_cat=105&_nc_ht=scontent-sea1-1.xx&oh=d1ff9f7130f81e19fb9a2673ca6da116&oe=5CDF91BD",Link:""}]},61:function(e,t,a){e.exports=a(151)},66:function(e,t,a){},67:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.35326f50.chunk.js.map