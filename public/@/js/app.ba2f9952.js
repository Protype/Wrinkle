(function(t){function a(a){for(var i,s,r=a[0],c=a[1],l=a[2],d=0,m=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(a);while(m.length)m.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],i=!0,s=1;s<e.length;s++){var c=e[s];0!==n[c]&&(i=!1)}i&&(o.splice(a--,1),t=r(r.s=e[0]))}return t}var i={},n={app:0},o=[];function s(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-66720182":"d349c1ca"}[t]+".js"}function r(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var a=[],e=n[t];if(0!==e)if(e)a.push(e[2]);else{var i=new Promise((function(a,i){e=n[t]=[a,i]}));a.push(e[2]=i);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=s(t);var l=new Error;o=function(a){c.onerror=c.onload=null,clearTimeout(d);var e=n[t];if(0!==e){if(e){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,e[1](l)}n[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(a)},r.m=t,r.c=i,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(e,i,function(a){return t[a]}.bind(null,i));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var u=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"103d":function(t,a,e){"use strict";(function(t){e("20d6"),e("7f7f"),e("ac6a"),e("7514");var i=e("2ef0"),n=e.n(i),o=e("b311"),s=e.n(o);a["a"]={components:{},data:function(){return{action:{id:0,domain_id:0,domain:null,long:{value:"",invalid:!1},code:{value:"",invalid:!1},original:{value:"",invalid:!1},custom:{value:!1,invalid:!1},title:{value:"",invalid:!1},description:{value:"",invalid:!1},image:{name:null,data:null,value:"",cache:"",invalid:!1}},domains:[],urls:[],messages:[]}},computed:{activeDomain:function(){return n.a.find(this.domains,{id:this.action.domain_id})||{host:"",path:""}},actionDomainUrl:function(){return this.action.domain?this.action.domain.scheme+"://"+this.action.domain.host+this.action.domain.path+"/":""},dzImageSrc:function(){return""==this.action.image.value?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":this.action.image.value},dzImageIsEmpty:function(){return""==this.action.image.value},dzImageIsUpdated:function(){return this.action.image.value!=this.action.image.cache}},filters:{domainUrl:function(t){return t&&t.host?t.scheme+"://"+t.host+t.path+"/":""},urlLink:function(t){var a="http://";return t.domain&&t.domain.scheme&&(a=t.domain.scheme),"".concat(a,"://").concat(t.short_url)}},created:function(){var a=this,e=this;this.$api.get("/domain").then((function(t){a.domains=t.data,a.action.domain_id=t.data[0].id})),this.latest().then((function(t){return a.urls=t.data})),this.$nextTick((function(){var i=new s.a(".clipboard");i.on("success",(function(t){a.toast("success","Copy Success","Shortened URL has been copied."),t.clearSelection()})),t("body").on("hidden.bs.toast",".toast",(function(){var a=t(this),i=a.data("time"),n=0;e.messages.forEach((function(t){t.time==i&&(t.show=!1),t.show&&n++})),0==n&&e.messages.splice(0,e.messages.length)}))}))},methods:{latest:function(){var t="";return this.urls.length>0&&(t="&after=".concat(this.urls[0].id)),this.$api.get("/url?cursour=id".concat(t,"&order=desc"))},previous:function(){var t,a="";return this.urls.length>0&&(t=this.urls[this.urls.length-1],a="&before=".concat(t.id)),this.$api.get("/url?cursour=id&".concat(a,"&order=desc"))},shorten:function(){var a=this;this.action.long.invalid=!1,""!=this.action.long.value?this.$api.post("/url",{domain_id:this.action.domain_id,original_url:this.action.long.value}).then((function(e){a.action.id=e.data.id,a.action.domain=e.data.domain,a.action.domain_id=e.data.domain_id,a.action.code.value=e.data.url_code,a.action.original.value=e.data.original_url,a.action.custom.value=e.data.enable_custom,a.action.title.value=e.data.custom_title,a.action.description.value=e.data.custom_description,a.action.image.value=e.data.custom_image,a.action.image.cache=e.data.custom_image,t("#options-panel").collapse("show"),a.toast("success","Shorten Success","Target URL shortened successfully."),a.latest().then((function(t){return a.urls=t.data.concat(a.urls)}))})).catch((function(t){return console.log("catch",t)})):this.action.long.invalid=!0},update:function(){var t=this,a=["code","original","title","description"],e=this.action,i=0;if(a.forEach((function(t){return e[t].invalid=!1})),""==e.code.value&&(e.code.invalid=!0)&&i++,""==e.original.value&&(e.original.invalid=!0)&&i++,!(i>0)){var o={domain_id:this.action.domain_id,url_code:this.action.code.value,original_url:this.action.original.value,enable_custom:1==this.action.custom.value?1:0,custom_title:this.action.title.value,custom_description:this.action.description.value,custom_image:{file_name:this.action.image.name,file_data:this.action.image.data}};this.$api.put("/url/".concat(e.id),o).then((function(a){t.action.id=a.data.id,t.action.domain=a.data.domain,t.action.domain_id=a.data.domain_id,t.action.code.value=a.data.url_code,t.action.original.value=a.data.original_url,t.action.custom.value=a.data.enable_custom,t.action.title.value=a.data.custom_title,t.action.description.value=a.data.custom_description,t.action.image.value=a.data.custom_image,t.action.image.cache=a.data.custom_image;var e=n.a.findIndex(t.urls,{id:a.data.id});e>=0&&t.urls.splice(e,1,a.data),t.toast("success","Update Success","Shortened link updated successfully.")})).catch((function(t){return console.log("catch",t)}))}},toast:function(a,e,i){var n="";switch(a){case"success":n="fa fa-check-circle toast-icon toast-success";break;case"warning":n="fa fa-warning toast-icon toast-warning";break}this.messages.push({show:!0,time:(new Date).getTime(),icon:n,title:e,message:i}),this.$nextTick((function(){return t(".toast").toast({delay:6e3}).toast("show")}))},dzClick:function(t){this.$refs.dzFile.click()},dzTipHandler:function(a){switch(a.type||""){case"mouseover":t("#dropzone").addClass("mouseover");break;case"mouseleave":t("#dropzone").removeClass("mouseover");break;case"dragover":t("#dropzone").addClass("dragover");break;case"dragleave":t("#dropzone").removeClass("dragover");break}},dzReset:function(){confirm("Reset cover image ?")&&(this.action.image.value=this.action.image.cache,this.action.image.name=null,this.action.image.data=null)},dzAttachFile:function(a){var e;if("drop"==a.type&&a.dataTransfer&&a.dataTransfer.files.length>0?e=a.dataTransfer.files:"change"==a.type&&a.target.files&&a.target.files.length>0&&(e=a.target.files),e){var i=this,n=e[0],o=new FileReader,s=t("#dropzone"),r=s.find(".preview");o.onload=function(t){var a=t.target.result;i.action.image.name=n.name,i.action.image.data=a.substr(a.indexOf("base64")+7),i.action.image.value=a,r.hasClass("d-none")&&r.addClass("d-block"),s.removeClass("mouseover"),s.removeClass("dragover")},o.readAsDataURL(n)}}}}}).call(this,e("1157"))},"1ae4":function(t,a,e){t.exports=e.p+"img/logo.6e6a4086.svg"},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),n=e("9483");Object(n["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});e("1157"),e("f9e3"),e("4989"),e("7f10");var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t._m(0),e("main",{attrs:{role:"main"}},[e("section",{staticClass:"jumbotron text-center"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-12 col-md-10"},[e("h1",{staticClass:"jumbotron-heading"},[t._v("Wrinkle")]),e("p",{staticClass:"lead text-muted"},[t._v("Simplify your links")]),e("div",{staticClass:"input-group input-group-lg mt-5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.action.long.value,expression:"action.long.value"}],staticClass:"form-control splice-input",class:{"is-invalid":t.action.long.invalid},attrs:{type:"text",placeholder:"Paste long URL"},domProps:{value:t.action.long.value},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.shorten(a)},input:function(a){a.target.composing||t.$set(t.action.long,"value",a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn-lg btn-wrinkle ml-3",attrs:{type:"button"},on:{click:t.shorten}},[t._v("Shorten")])])])])]),e("div",{staticClass:"collapse row justify-content-center mt-5",attrs:{id:"options-panel"}},[e("div",{staticClass:"col-11 text-left shadow-sm p-5 bg-light rounded position-relative"},[t._m(1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5 col-xl-6"},[e("h4",{staticClass:"mb-4"},[t._v("Shortened Link Option")]),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"lastName"}},[t._v("Short URL")]),e("div",{staticClass:"input-group"},[e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[t._v(t._s(t._f("domainUrl")(t.activeDomain)))])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.action.code.value,expression:"action.code.value"}],staticClass:"form-control",class:{"is-invalid":t.action.code.invalid},attrs:{type:"text",placeholder:"Custom URL"},domProps:{value:t.action.code.value},on:{input:function(a){a.target.composing||t.$set(t.action.code,"value",a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"clipboard btn btn-info",attrs:{"data-clipboard-text":t.actionDomainUrl+t.action.code.value,type:"button"}},[e("i",{staticClass:"fa fa-copy"})])])])]),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"firstName"}},[t._v("Domain")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.action.domain_id,expression:"action.domain_id"}],staticClass:"custom-select d-block w-100",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.action,"domain_id",a.target.multiple?e:e[0])}}},t._l(t.domains,(function(a){return e("option",{domProps:{value:a.id}},[t._v(t._s(t._f("domainUrl")(a)))])})),0)]),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"lastName"}},[t._v("Original URL")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.action.original.value,expression:"action.original.value"}],staticClass:"form-control",class:{"is-invalid":t.action.original.invalid},attrs:{type:"text",placeholder:"Original URL"},domProps:{value:t.action.original.value},on:{input:function(a){a.target.composing||t.$set(t.action.original,"value",a.target.value)}}})])]),e("div",{staticClass:"col-lg-7 col-xl-6 mt-5 mt-lg-0"},[e("h4",{staticClass:"mb-4"},[t._v("\n                  Advenced Option\n                  "),e("span",{staticClass:"enable-custom float-right"},[e("label",{staticClass:"mr-2",attrs:{for:"enable-custom"}},[t._v("Enable customize")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.action.custom.value,expression:"action.custom.value"}],attrs:{id:"enable-custom",type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.action.custom.value)?t._i(t.action.custom.value,"1")>-1:t.action.custom.value},on:{change:function(a){var e=t.action.custom.value,i=a.target,n=!!i.checked;if(Array.isArray(e)){var o="1",s=t._i(e,o);i.checked?s<0&&t.$set(t.action.custom,"value",e.concat([o])):s>-1&&t.$set(t.action.custom,"value",e.slice(0,s).concat(e.slice(s+1)))}else t.$set(t.action.custom,"value",n)}}})])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 order-md-2 mb-3"},[e("label",{attrs:{for:"lastName"}},[t._v("Cover "),e("small",{staticClass:"dz-reset text-danger",class:{"d-none":!t.dzImageIsUpdated},on:{click:t.dzReset}},[e("i",{staticClass:"fa fa-undo ml-2 font-small"})])]),e("div",{staticClass:"position-relative w-100",class:{"empty-image":t.dzImageIsEmpty,shadow:!t.dzImageIsEmpty},attrs:{id:"dropzone"},on:{click:function(a){return a.preventDefault(),t.dzClick(a)},drop:function(a){return a.preventDefault(),t.dzAttachFile(a)},mouseover:function(a){return a.preventDefault(),t.dzTipHandler(a)},mouseleave:function(a){return a.preventDefault(),t.dzTipHandler(a)},dragover:function(a){return a.preventDefault(),t.dzTipHandler(a)},dragleave:function(a){return a.preventDefault(),t.dzTipHandler(a)}}},[t._m(2),e("img",{staticClass:"preview img-fluid general-cover",attrs:{src:t.dzImageSrc}}),e("input",{ref:"dzFile",staticClass:"d-none",attrs:{type:"file"},on:{click:function(t){t.stopPropagation()},change:t.dzAttachFile}})])]),e("div",{staticClass:"col-md-6 order-md-1"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-3"},[e("label",{attrs:{for:"firstName"}},[t._v("Title")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.action.title.value,expression:"action.title.value"}],staticClass:"form-control",class:{"is-invalid":t.action.title.invalid},attrs:{type:"text",placeholder:"Title"},domProps:{value:t.action.title.value},on:{input:function(a){a.target.composing||t.$set(t.action.title,"value",a.target.value)}}})]),e("div",{staticClass:"col-12 mb-3"},[e("label",{attrs:{for:"lastName"}},[t._v("Description")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.action.description.value,expression:"action.description.value"}],staticClass:"form-control description-text",class:{"is-invalid":t.action.description.invalid},attrs:{type:"text",placeholder:"Description"},domProps:{value:t.action.description.value},on:{input:function(a){a.target.composing||t.$set(t.action.description,"value",a.target.value)}}})])])])])])]),e("hr",{staticClass:"mb-4"}),e("button",{staticClass:"btn btn-wrinkle btn-lg btn-block mt-4",attrs:{disabled:0==t.action.id},on:{click:t.update}},[t._v("Save")])])])])]),e("div",{staticClass:"album py-5 bg-light"},[e("div",{staticClass:"container"},[e("h2",[t._v("Links")]),e("div",{staticClass:"mt-5 table-responsive"},[e("table",{staticClass:"table table-striped"},[t._m(3),e("tbody",t._l(t.urls,(function(a){return e("tr",[e("td",[t._v(t._s(a.id))]),e("td",[e("a",{staticClass:"text-dark",attrs:{href:t._f("urlLink")(a),target:"_blank"}},[t._v(t._s(t._f("urlLink")(a)))])]),e("td",[e("a",{staticClass:"text-dark",attrs:{href:a.original_url,target:"_blank"}},[t._v(t._s(a.original_url))])])])})),0)])])])]),e("div",{staticClass:"fixed-bottom w-100",attrs:{"aria-live":"polite","aria-atomic":"true"}},[e("div",{staticStyle:{position:"absolute",bottom:"20px",right:"20px"}},t._l(t.messages,(function(a){return a.show?e("div",{staticClass:"toast",staticStyle:{bottom:"300px"},attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true","data-time":a.time}},[e("div",{staticClass:"toast-header"},[e("i",{staticClass:"mr-2",class:a.icon,attrs:{width:"20",height:"20"}}),e("strong",{staticClass:"mr-auto"},[t._v(t._s(a.title||"Wrinkle"))]),e("small",{staticClass:"text-muted"},[t._v("just now")]),t._m(4,!0)]),e("div",{staticClass:"toast-body"},[t._v("\n            "+t._s(a.message)+"\n          ")])]):t._e()})),0)])]),t._m(5)])},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("header",[i("div",{staticClass:"navbar navbar-dark bg-wrinkle shadow-sm"},[i("div",{staticClass:"container d-flex justify-content-between"},[i("a",{staticClass:"navbar-brand d-flex align-items-center",attrs:{href:"#"}},[i("img",{staticClass:"mr-2",attrs:{src:e("1ae4"),width:"20",height:"20"}}),i("strong",[t._v("Wrinkle")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"position-absolute option-close-button"},[e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close","data-toggle":"collapse","data-target":"#options-panel","aria-controls":"options-panel","aria-expanded":"false"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tip-layer position-absolute w-100 h-100",staticStyle:{top:"0",left:"0"}},[e("p",[t._v("Drop file or click to upload")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"10%"}},[t._v("#")]),e("th",{attrs:{width:"25%"}},[t._v("Short"),e("span",{staticClass:"d-none d-sm-none d-md-none d-lg-inline"},[t._v(" URL")])]),e("th",[t._v("Original"),e("span",{staticClass:"d-none d-sm-none d-md-none d-lg-inline"},[t._v(" URL")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"my-4 pt-4 text-muted text-center text-small"},[e("p",{staticClass:"mb-1"},[t._v("Made with "),e("span",{staticClass:"text-danger"},[t._v("❤")]),t._v(" in Taiwan ． Power by Protype")])])}],r=e("103d"),c=r["a"],l=(e("fffb"),e("2877")),d=Object(l["a"])(c,o,s,!1,null,null,null),u=d.exports,m=e("8c4f");i["a"].use(m["a"]);var v=new m["a"]({mode:"history",base:"",routes:[{path:"/",name:"index",component:function(){return e.e("chunk-66720182").then(e.bind(null,"1e4b"))}}]}),p=e("bc3a"),f=e.n(p),h=f.a.create({baseURL:"api/v1",headers:{"Content-Type":"application/json",Authorization:""}}),g=e("2f62");i["a"].use(g["a"]);var b=new g["a"].Store({state:{},mutations:{},actions:{}});e("6672");window.$api=h,i["a"].config.productionTip=!1,i["a"].prototype.$api=h,new i["a"]({router:v,store:b,render:function(t){return t(u)},created:function(){}}).$mount("#app")},6672:function(t,a,e){},ea89:function(t,a,e){},fffb:function(t,a,e){"use strict";var i=e("ea89"),n=e.n(i);n.a}});
//# sourceMappingURL=app.ba2f9952.js.map