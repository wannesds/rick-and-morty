(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=(a(11),a(2)),u=a.n(c),l=a(5),m=a(1),s=(a(13),function(e){var t=e.id,a=e.name,n=e.status,o=e.species,i=e.type,c=e.gender,u=(e.origin,e.location);return r.a.createElement("div",{className:"Card"},r.a.createElement("img",{alt:"Character",src:"https://rickandmortyapi.com/api/character/avatar/".concat(t,".jpeg")}),r.a.createElement("div",null,r.a.createElement("h3",null,a," ",r.a.createElement("i",null,"(",c,")")),r.a.createElement("h4",null,o,i&&r.a.createElement("i",null,"*",i,"*")),r.a.createElement("p",null,"Last seen:",r.a.createElement("br",null),r.a.createElement("i",null,u.name)),"Alive"===n?null:r.a.createElement("div",{className:"DeadSign"})))});var h=function(e){var t=e.chars;return r.a.createElement("div",{className:"CardList"},t.map((function(e,a){return r.a.createElement(s,{key:a,id:t[a].id,name:t[a].name,status:t[a].status,species:t[a].species,type:t[a].type,gender:t[a].gender,origin:t[a].origin,location:t[a].location,episode:t[a].episode})})))},d=function(e){var t=e.prevPage,a=e.nextPage,n=e.info,o=e.url.match(/(\d+)/);return r.a.createElement("div",{className:"ChangePageBox"},r.a.createElement("button",{onClick:t,disabled:!n.prev},"Prev"),r.a.createElement("p",null,null===o?"1":o[0]," / ",n.pages),r.a.createElement("button",{onClick:a,disabled:!n.next},"Next"))};var f=function(e){var t=e.getQuery,a=Object(n.useState)(""),o=Object(m.a)(a,2),i=o[0],c=o[1],u=Object(n.useState)(""),l=Object(m.a)(u,2),s=l[0],h=l[1],d=Object(n.useState)(""),f=Object(m.a)(d,2),p=f[0],g=f[1];return r.a.createElement("form",null,r.a.createElement("input",{name:"name",type:"search",onChange:function(e){return c(e.target.value)},placeholder:"search by name",autocomplete:"off"}),r.a.createElement("select",{name:"gender",onChange:function(e){return g(e.target.value)}},r.a.createElement("option",{value:""},"-"),r.a.createElement("option",{value:"male"},"male"),r.a.createElement("option",{value:"female"},"female")),r.a.createElement("select",{name:"status",onChange:function(e){return h(e.target.value)}},r.a.createElement("option",{value:""},"-"),r.a.createElement("option",{value:"alive"},"alive"),r.a.createElement("option",{value:"dead"},"dead")),r.a.createElement("button",{onClick:function(e){e.preventDefault(),t("?name="+i+"&status="+s+"&gender="+p)},type:"submit"}))},p=[{id:1,name:"Rick Sanchez",quote:"\u201cYour parents are a bag of dicks.\u201d"},{id:2,name:"Summer Smith",quote:"\u201cIf I die, don't eat my ass that'd be weird.\u201d"},{id:3,name:"Summer Smith",quote:"\u201cCamping is just being homeless without the change.\u201d"},{id:4,name:"Rick Sanchez",quote:"\u201cIsn't it obvious Morty? I fucked a planet.\u201d"},{id:5,name:"Rick Sanchez",quote:"\u201cStealing stuff is about the stuff, not the stealing.\u201d"},{id:6,name:"Summer Smith",quote:"\u201cI going to daughter your brains out, bitch.\u201d"},{id:7,name:"Morty Smith",quote:"\u201cMust... continue... moving... in... ways... that... lead... to... dying... with... you.\u201d"},{id:8,name:"Rick Sanchez",quote:"\u201cThere's a lesson here and I'm not going to be the one to figure it out.\u201d"},{id:9,name:"Rick Sanchez",quote:"\u201cI've got an emo streak. It's part of what makes me so rad.\u201d"},{id:10,name:"Rick Sanchez",quote:"\u201cWait for the ramp, Morty. They love the slow ramp. It really gets their dicks hard\u201d"},{id:11,name:"Rick Sanchez",quote:"\u201cI can't wait to watch your adventure lay a huge fart.\u201d"},{id:12,name:"Morty Smith",quote:"\u201cI masturbated to an extra curvy piece of driftwood the other day!\u201d"},{id:13,name:"Rick Sanchez",quote:"\u201cMorty, you gotta flip 'em off. I told them it means 'peace among worlds.' How hilarious is that!\u201d"},{id:14,name:"Summer Smith",quote:"\u201cYou're the little brother. You're not the cause of your parents' misery, you're just a symptom of it.\u201d"},{id:15,name:"Rick Sanchez",quote:"\u201cPut a saddle on your universe. Let it kick itself out.\u201d"},{id:16,name:"Rick Sanchez",quote:"\u201cYou got some of that mermaid puss.\u201d"},{id:17,name:"Pickle Rick",quote:"\u201cI'M A PICKLE! I'm pickle Riiiiiick!\u201d"},{id:18,name:"Rick Sanchez",quote:"\u201cYeah, well, tough titties.\u201d"},{id:19,name:"Rick Sanchez",quote:"\u201cDon't break an arm jerking yourself off, Morty.\u201d"},{id:20,name:"Rick Sanchez",quote:"\u201cTo live is to risk it all, otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.\u201d"},{id:21,name:"Rick Sanchez",quote:"\u201cGet off the high road, Summer! We all got pinkeye because you won't stop texting on the toilet.\u201d"},{id:22,name:"Wannes Dieltiens",quote:"\u201cThe future of blockchain has never looked so bright, HODL!\u201d"},{id:23,name:"Rick Sanchez",quote:"\u201cWell, I don't like your unemployed genes in my grandchildren, Jerry, but life is made of little concessions.\u201d"},{id:24,name:"Morty Jr.",quote:"\u201cThe government's lame! Thanksgiving is about killing Indians! Jesus wasn't born on Christmas! They moved the date, it was a pagan holiday!\u201d"},{id:25,name:"Rick Sanchez",quote:"\u201cGet Schwifty.\u201d"},{id:26,name:"Morty Smith",quote:"\u201cGet Schwifty.\u201d"}];var g=function(e){var t=e.url,a=Object(n.useState)(1),o=Object(m.a)(a,2),i=o[0],c=o[1];return Object(n.useEffect)((function(){c(Math.trunc(Math.random()*p.length))}),[t]),r.a.createElement("div",{className:"QuoteBox"},r.a.createElement("p",{className:"f3 i"},p[i].quote),r.a.createElement("p",{className:"f5"},"- ",p[i].name))},v=function(){return r.a.createElement("div",{className:"FooterBox"},r.a.createElement("p",null,"by ",r.a.createElement("a",{href:"https://github.com/wannesds"},"Wannes Dieltiens")," 2020"),r.a.createElement("p",null,"Thanks to ",r.a.createElement("a",{href:"https://rickandmortyapi.com"},"rickandmortyapi.com")))};var y=function(){var e=Object(n.useState)({results:[],info:[]}),t=Object(m.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)("https://rickandmortyapi.com/api/character/"),c=Object(m.a)(i,2),s=c[0],p=c[1],y=Object(n.useState)(!1),k=Object(m.a)(y,2),E=k[0],b=k[1],S=Object(n.useState)(!1),w=Object(m.a)(S,2),q=w[0],j=w[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(!0),j(!1);try{fetch(s).then((function(e){return e.json()})).then((function(e){return o(e)}))}catch(t){j(!0)}b(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"HeaderBox"},r.a.createElement(g,{url:s}),r.a.createElement(f,{getQuery:function(e){return p("https://rickandmortyapi.com/api/character/".concat(e))}})),E?r.a.createElement("div",{className:"ErrorBox"},"Loading ..."):a.error||q?r.a.createElement("div",{className:"ErrorBox"},"You fucked up Morty!"):r.a.createElement("content",null,r.a.createElement(d,{prevPage:function(){return p(a.info.prev)},nextPage:function(){return p(a.info.next)},info:a.info,url:s}),r.a.createElement(h,{chars:a.results}),r.a.createElement(d,{prevPage:function(){return p(a.info.prev)},nextPage:function(){return p(a.info.next)},info:a.info,url:s})),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.fd41fab6.chunk.js.map