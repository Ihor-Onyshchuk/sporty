(this.webpackJsonpsporty=this.webpackJsonpsporty||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/load-indicator.bd85ac8c.gif"},23:function(e,t,a){e.exports=a(48)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),i=(a(6),a(16)),o=a(17),s=a(22),u=a(21),d=function(){return r.a.createElement("div",{class:"card bg-light mb-5"},r.a.createElement("div",{class:"card-header"},r.a.createElement("h1",null,"\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438 \u043e\u043d\u043b\u0430\u0439\u043d")),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},"\u041d\u0430 \u043d\u0430\u0448\u0435\u043c \u0441\u0430\u0439\u0442\u0435 \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435:"),r.a.createElement("ul",{class:"card-text ml-4"},r.a.createElement("li",null,"\u0423\u0437\u043d\u0430\u0442\u044c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a \u0432 \u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0445 \u043a\u043b\u0443\u0431\u0430\u0445"),r.a.createElement("li",null,"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0443"),r.a.createElement("li",null,"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0430\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442 \u0438 \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0435\u0433\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439"))))},m=a(2),f=a(3),g=a(4),v=a(18),h=a.n(v).a.create({baseURL:"https://instasport.co/dashboard/api/v1"}),p=function(e){return Object.keys(e)},b=function(e,t){return e.map((function(e){return{slug:e,title:t[e]}}))},y=function(e){var t={};return e.forEach((function(e){var a=e.city,n=a.slug,r=a.title;return t[n]=r})),[{slug:"all",title:"\u0412\u0441\u0435"}].concat(Object(g.a)(b(p(t),t)))},E=function(e){var t=function(e){var t={};return e.forEach((function(e){e.activity.forEach((function(e){var a=e.slug,n=e.title;return t[a]=n}))})),t}(e),a=function(e){var t={};return e.forEach((function(e){var a=e.city.slug;t[a]?t[a].push(e):t[a]=[e]})),t}(e),n=p(a).reduce((function(e,n){var r=a[n],c=[];r.forEach((function(e){e.activity.forEach((function(e){var t=e.slug;return c.push(t)}))}));var l=[{slug:"all",title:"\u0412\u0441\u0435"}].concat(Object(g.a)(b(Array.from(new Set(c)),t)));return Object(f.a)(Object(f.a)({},e),{},Object(m.a)({},n,{clubs:r,activities:l}))}),{});return Object(f.a)({all:{clubs:e,activities:[{slug:"all",title:"\u0412\u0441\u0435"}].concat(Object(g.a)(b(p(t),t)))}},n)},C=function(){return h.get("/clubs").then((function(e){var t=e.data;return{citiesOption:y(t),groupedByCity:E(t)}}))},N=(a(45),function(e){var t=e.club,a=t.title,n=t.logo,c=t.title_short,l=t.link;return r.a.createElement("div",{className:"card shadow club-card"},r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer nofollow",className:"stretched-link text-decoration-none outline-none"}),r.a.createElement("div",{className:"logo-wrapper"},r.a.createElement("img",{src:n,className:"card-img-top card-logo",alt:c})),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("p",{className:"card-title"},a)))}),O=function(e){var t=e.clubs;return r.a.createElement("div",{className:"row row-cols-1 row-cols-md-3 my-3"},t.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-6 col-xl-4 mb-4",key:e.title},r.a.createElement(N,{club:e}))})))},j=a(19),k=a.n(j),w=(a(46),function(e){var t=e.options,a=e.active,n=e.onChange,c=e.className;return r.a.createElement("div",{className:"btn-group d-flex flex-wrap my-3",role:"group"},t.map((function(e){var t=a===e.slug;return r.a.createElement("button",{key:e.slug,className:k()("btn-sm category-btn m-1",c,{active:t}),type:"button",onClick:function(){return t?null:n(e.slug)}},e.title)})))}),x=(a(47),a(20)),A=a.n(x),S=function(){return r.a.createElement("div",{className:"d-inline-block load-indicator"},r.a.createElement("img",{className:"load-img",src:A.a,alt:"loading"}),r.a.createElement("div",{className:"load-bg"}))},B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={citiesOption:[],groupedByCity:{},selectedCity:"all",selectedActivity:"all",loading:!0,error:!1},e.getClubs=function(){C().then((function(t){var a=t.citiesOption,n=t.groupedByCity;e.setState({citiesOption:a,groupedByCity:n,loading:!1})})).catch((function(){e.setState({error:!0,loading:!1})}))},e.handleFilterClubs=function(e,t){return"all"===t?e:e.filter((function(e){return e.activity.some((function(e){return e.slug===t}))}))},e.handleCityChange=function(t){e.setState({selectedCity:t,selectedActivity:"all"})},e.handleActivityChange=function(t){e.setState({selectedActivity:t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getClubs()}},{key:"render",value:function(){var e=this.state,t=e.selectedCity,a=e.selectedActivity,n=e.groupedByCity,c=e.citiesOption,l=e.loading,i=e.error,o=!l&&!i,s=!l&&i,u=o?this.handleFilterClubs(n[t].clubs,a):[];return r.a.createElement("div",{className:"container"},l&&r.a.createElement(S,null),s&&r.a.createElement("div",{className:"text-center alert alert-danger mt-3",role:"alert"},"Something occurred wrong, please reload the page"),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(w,{onChange:this.handleCityChange,active:t,options:c,className:"border-primary"}),r.a.createElement("hr",null),r.a.createElement(w,{onChange:this.handleActivityChange,active:a,options:n[t].activities,className:"border-success"}),r.a.createElement("hr",null),r.a.createElement(O,{clubs:u})))}}]),a}(n.PureComponent);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))},6:function(e,t,a){}},[[23,1,2]]]);
//# sourceMappingURL=main.a09a0e32.chunk.js.map