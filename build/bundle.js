var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function a(e){let t;return l(e,(e=>t=e))(),t}function i(e,t,n){e.$$.on_destroy.push(l(t,n))}function c(e,t,n){return e.set(n),t}function u(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function f(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function g(){return h(" ")}function $(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function b(e){return function(t){return t.preventDefault(),e.call(this,t)}}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e){return""===e?null:+e}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function y(e,t){e.value=null==t?"":t}function _(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];if(r.__value===t)return void(r.selected=!0)}e.selectedIndex=-1}function w(e,t,n){e.classList[n?"add":"remove"](t)}let q;function A(e){q=e}function N(e){(function(){if(!q)throw new Error("Function called outside component initialization");return q})().$$.on_mount.push(e)}const G=[],C=[],E=[],H=[],M=Promise.resolve();let T=!1;function S(e){E.push(e)}const O=new Set;let D=0;function Q(){const e=q;do{for(;D<G.length;){const e=G[D];D++,A(e),U(e.$$)}for(A(null),G.length=0,D=0;C.length;)C.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];O.has(t)||(O.add(t),t())}E.length=0}while(G.length);for(;H.length;)H.pop()();T=!1,O.clear(),A(e)}function U(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const R=new Set;let z;function L(e,t){e&&e.i&&(R.delete(e),e.i(t))}function j(e,t,n,r){if(e&&e.o){if(R.has(e))return;R.add(e),z.c.push((()=>{R.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function W(e){e&&e.c()}function F(e,n,s,l){const{fragment:a,on_mount:i,on_destroy:c,after_update:u}=e.$$;a&&a.m(n,s),l||S((()=>{const n=i.map(t).filter(o);c?c.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(S)}function X(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function B(e,t){-1===e.$$.dirty[0]&&(G.push(e),T||(T=!0,M.then(Q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function I(t,o,s,l,a,i,c,u=[-1]){const d=q;A(t);const f=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:o.target||d.$$.root};c&&c(f.root);let p=!1;if(f.ctx=s?s(t,o.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),p&&B(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!l&&l(f.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);f.fragment&&f.fragment.l(e),e.forEach(m)}else f.fragment&&f.fragment.c();o.intro&&L(t.$$.fragment),F(t,o.target,o.anchor,o.customElement),Q()}A(d)}class J{$destroy(){X(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const P=[];function V(t,n=e){let r;const o=new Set;function l(e){if(s(t,e)&&(t=e,r)){const e=!P.length;for(const e of o)e[1](),P.push(e,t);if(e){for(let e=0;e<P.length;e+=2)P[e][0](P[e+1]);P.length=0}}}return{set:l,update:function(e){l(e(t))},subscribe:function(s,a=e){const i=[s,a];return o.add(i),1===o.size&&(r=n(l)||e),s(t),()=>{o.delete(i),0===o.size&&(r(),r=null)}}}}const Y=function(){const{subscribe:e,set:t,update:n}=V(1);return{subscribe:e,set:t,update:n,next:()=>n((e=>e+1)),prev:()=>n((e=>e-1))}}();const K=function(e){const{subscribe:t,set:n,update:r}=function(e,t){const n=V(t),{subscribe:r,set:o}=n,s=localStorage.getItem(e);return s&&o(JSON.parse(s)),{set(t){localStorage.setItem(e,JSON.stringify(t)),o(t)},update(e){const t=e(a(n));this.set(t)},subscribe:r}}("feh",e);return{subscribe:t,set:n,update:r,setLinks:(e,t,n,o)=>r((r=>{const s={...r};return s.links.form=e,s.links.dashboard=t,s.links.formGH=n,s.links.dashboardGH=o,s})),setMembers:e=>{r((t=>{const n={...t};return n.members=e,n}))}}}({group_number:null,group_name:"",numMembers:2,isMonoRepo:!1,members:[{name:"",screencast:"",questions:{screencast:""}},{name:"",screencast:"",questions:{screencast:""}}],links:{form:"",dashboard:"",formGH:"",dashboardGH:"",formNotes:"",dashboardNotes:""},form:{works:{comment:null,grade:null},"looks good":{comment:null,grade:null},UX:{comment:null,grade:null},responsiveness:{comment:null,grade:null},"feel factor":{comment:null,grade:null},"tech stack and code notes":{comment:null,grade:null}},dashboard:{works:{comment:null,grade:null},"looks good":{comment:null,grade:null},UX:{comment:null,grade:null},responsiveness:{comment:null,grade:null},"feel factor":{comment:null,grade:null},"tech stack and code notes":{comment:null,grade:null}},report:{good:"",bad:"",questions:""},generalQuestions:""});function Z(t){let n,o,s,l,a,i,c,f,k,_,w,q,A,N,G,C,E;return{c(){n=p("div"),o=p("button"),o.textContent="Clear Storage",s=g(),l=p("button"),l.textContent="Load data",a=g(),i=p("form"),c=p("label"),f=h("Group #\n    "),k=p("input"),_=g(),w=p("label"),q=h("Group Name\n    "),A=p("input"),N=g(),G=p("input"),v(o,"class","secondary"),v(l,"class","secondary"),v(n,"class","flex svelte-128pjm6"),k.required=!0,v(k,"type","number"),v(k,"pattern","[0-9]+"),v(k,"name","group_number"),A.required=!0,v(A,"type","text"),v(A,"name","group_name"),v(G,"type","submit"),G.value="Next"},m(e,r){d(e,n,r),u(n,o),u(n,s),u(n,l),d(e,a,r),d(e,i,r),u(i,c),u(c,f),u(c,k),y(k,t[0].group_number),u(i,_),u(i,w),u(w,q),u(w,A),y(A,t[0].group_name),u(i,N),u(i,G),C||(E=[$(o,"click",t[2]),$(l,"click",ee),$(k,"input",t[3]),$(A,"input",t[4]),$(i,"submit",b(t[1]))],C=!0)},p(e,[t]){1&t&&x(k.value)!==e[0].group_number&&y(k,e[0].group_number),1&t&&A.value!==e[0].group_name&&y(A,e[0].group_name)},i:e,o:e,d(e){e&&m(n),e&&m(a),e&&m(i),C=!1,r(E)}}}const ee=()=>{};function te(e,t,n){let r;i(e,K,(e=>n(0,r=e)));return[r,function(){Y.next()},()=>{localStorage.clear(),window.location=""},function(){r.group_number=x(this.value),K.set(r)},function(){r.group_name=this.value,K.set(r)}]}class ne extends J{constructor(e){super(),I(this,e,te,Z,s,{})}}function re(){document.querySelectorAll("textarea").forEach((e=>{document.querySelectorAll("details").forEach((e=>{e.addEventListener("toggle",(t=>{e.querySelectorAll("textarea").forEach((e=>{e.style.height=e.scrollHeight+"px"}))}))})),e.classList.add("auto"),e.addEventListener("input",(t=>{e.style.height=e.scrollHeight+"px"}))}))}function oe(e){let t,n,o,s,l,a,i,c,f;return{c(){t=p("label"),n=h("Dashboard/App GitHub\n        "),o=p("input"),s=g(),l=p("label"),a=h("Notes\n        "),i=p("textarea"),v(o,"type","url"),o.required=!0},m(r,m){d(r,t,m),u(t,n),u(t,o),y(o,e[0].links.dashboardGH),d(r,s,m),d(r,l,m),u(l,a),u(l,i),y(i,e[0].links.dashboardNotes),c||(f=[$(o,"input",e[7]),$(i,"input",e[8])],c=!0)},p(e,t){1&t&&y(o,e[0].links.dashboardGH),1&t&&y(i,e[0].links.dashboardNotes)},d(e){e&&m(t),e&&m(s),e&&m(l),c=!1,r(f)}}}function se(t){let n,o,s,l,a,i,c,f,x,k,_,w,q,A,N,G,C,E,H,M,T,S,O,D,Q,U,R,z,L,j,W,F=!t[0].isMonoRepo&&oe(t);return{c(){n=p("form"),o=p("fieldset"),s=p("legend"),s.textContent="Links",l=g(),a=p("label"),i=h("Form/Booking link\n      "),c=p("input"),f=g(),x=p("label"),k=h("Dashboard/App link\n      "),_=p("input"),w=g(),q=p("fieldset"),A=p("legend"),A.textContent="GitHub",N=g(),G=p("label"),C=h("Mono-repo?\n      "),E=p("input"),H=g(),M=p("label"),T=h("Form/Booking GitHub\n      "),S=p("input"),O=g(),D=p("label"),Q=h("Notes\n      "),U=p("textarea"),R=g(),F&&F.c(),z=g(),L=p("input"),v(c,"type","url"),c.required=!0,v(_,"type","url"),_.required=!0,v(E,"type","checkbox"),v(S,"type","url"),S.required=!0,v(L,"type","submit"),L.value="Next"},m(e,r){d(e,n,r),u(n,o),u(o,s),u(o,l),u(o,a),u(a,i),u(a,c),y(c,t[0].links.form),u(o,f),u(o,x),u(x,k),u(x,_),y(_,t[0].links.dashboard),u(n,w),u(n,q),u(q,A),u(q,N),u(q,G),u(G,C),u(G,E),E.checked=t[0].isMonoRepo,u(q,H),u(q,M),u(M,T),u(M,S),y(S,t[0].links.formGH),u(q,O),u(q,D),u(D,Q),u(D,U),y(U,t[0].links.formNotes),u(q,R),F&&F.m(q,null),u(n,z),u(n,L),j||(W=[$(c,"input",t[2]),$(_,"input",t[3]),$(E,"change",t[4]),$(S,"input",t[5]),$(U,"input",t[6]),$(n,"submit",b(t[1]))],j=!0)},p(e,[t]){1&t&&y(c,e[0].links.form),1&t&&y(_,e[0].links.dashboard),1&t&&(E.checked=e[0].isMonoRepo),1&t&&y(S,e[0].links.formGH),1&t&&y(U,e[0].links.formNotes),e[0].isMonoRepo?F&&(F.d(1),F=null):F?F.p(e,t):(F=oe(e),F.c(),F.m(q,null))},i:e,o:e,d(e){e&&m(n),F&&F.d(),j=!1,r(W)}}}function le(e,t,n){let r;return i(e,K,(e=>n(0,r=e))),console.log(r.links),N((()=>{re()})),[r,function(){r.isMonoRepo&&c(K,r.links.dashboardGH=r.links.formGH,r),Y.next()},function(){r.links.form=this.value,K.set(r)},function(){r.links.dashboard=this.value,K.set(r)},function(){r.isMonoRepo=this.checked,K.set(r)},function(){r.links.formGH=this.value,K.set(r)},function(){r.links.formNotes=this.value,K.set(r)},function(){r.links.dashboardGH=this.value,K.set(r)},function(){r.links.dashboardNotes=this.value,K.set(r)}]}class ae extends J{constructor(e){super(),I(this,e,le,se,s,{})}}function ie(e,t,n){const r=e.slice();return r[6]=t[n],r[7]=t,r[8]=n,r}function ce(e,t,n){const r=e.slice();return r[9]=t[n],r}function ue(t){let n,r,o,s=t[9]+"";return{c(){n=p("option"),r=h(s),n.__value=o=t[9],n.value=n.__value},m(e,t){d(e,n,t),u(n,r)},p:e,d(e){e&&m(n)}}}function de(e){let t,n,o,s,l,a,i,c,f,b,x,k,_,w,q=e[8]+1+"";function A(){e[4].call(c,e[7],e[8])}function N(){e[5].call(k,e[7],e[8])}return{c(){t=p("fieldset"),n=p("legend"),o=h("Group member "),s=h(q),l=g(),a=p("label"),i=h("Name:\n        "),c=p("input"),f=g(),b=p("label"),x=h("Screencast:\n        "),k=p("input"),v(c,"type","text"),c.required=!0,v(k,"type","url"),k.required=!0},m(r,m){d(r,t,m),u(t,n),u(n,o),u(n,s),u(t,l),u(t,a),u(a,i),u(a,c),y(c,e[6].name),u(t,f),u(t,b),u(b,x),u(b,k),y(k,e[6].screencast),_||(w=[$(c,"input",A),$(k,"input",N)],_=!0)},p(t,n){e=t,1&n&&c.value!==e[6].name&&y(c,e[6].name),1&n&&y(k,e[6].screencast)},d(e){e&&m(t),_=!1,r(w)}}}function me(t){let n,o,s,l,a,i,c,h=Array.from(Array(4)).map(fe),x=[];for(let e=0;e<h.length;e+=1)x[e]=ue(ce(t,h,e));let k=t[0].members,y=[];for(let e=0;e<k.length;e+=1)y[e]=de(ie(t,k,e));return{c(){n=p("form"),o=p("select");for(let e=0;e<x.length;e+=1)x[e].c();s=g();for(let e=0;e<y.length;e+=1)y[e].c();l=g(),a=p("input"),void 0===t[0].numMembers&&S((()=>t[3].call(o))),v(a,"type","submit"),a.value="Next"},m(e,r){d(e,n,r),u(n,o);for(let e=0;e<x.length;e+=1)x[e].m(o,null);_(o,t[0].numMembers),u(n,s);for(let e=0;e<y.length;e+=1)y[e].m(n,null);u(n,l),u(n,a),i||(c=[$(o,"change",t[3]),$(o,"change",t[1]),$(n,"submit",b(t[2]))],i=!0)},p(e,[t]){if(0&t){let n;for(h=Array.from(Array(4)).map(fe),n=0;n<h.length;n+=1){const r=ce(e,h,n);x[n]?x[n].p(r,t):(x[n]=ue(r),x[n].c(),x[n].m(o,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=h.length}if(1&t&&_(o,e[0].numMembers),1&t){let r;for(k=e[0].members,r=0;r<k.length;r+=1){const o=ie(e,k,r);y[r]?y[r].p(o,t):(y[r]=de(o),y[r].c(),y[r].m(n,l))}for(;r<y.length;r+=1)y[r].d(1);y.length=k.length}},i:e,o:e,d(e){e&&m(n),f(x,e),f(y,e),i=!1,r(c)}}}const fe=(e,t)=>t+1;function pe(e,t,n){let r;return i(e,K,(e=>n(0,r=e))),[r,function(e){if(console.log(r.members,r.numMembers),r.numMembers>r.members.length){const e=r.numMembers;for(let t=r.members.length;t<e;t++)c(K,r.members=r.members.concat({name:"",screencast:"",questions:{screencast:""}}),r);console.log(r.members)}else c(K,r.members=r.members.slice(0,r.numMembers),r)},function(){Y.next()},function(){r.numMembers=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),K.set(r)},function(e,t){e[t].name=this.value,K.set(r)},function(e,t){e[t].screencast=this.value,K.set(r)}]}class he extends J{constructor(e){super(),I(this,e,pe,me,s,{})}}function ge(t){let n,r,o,s,l,a,i;return{c(){n=p("details"),r=p("summary"),r.textContent="Target Audience",o=g(),s=p("label"),l=p("input"),v(l,"type","text"),v(n,"id","TargetAudience"),w(n,"completed",t[0].targetAudience)},m(e,c){d(e,n,c),u(n,r),u(n,o),u(n,s),u(s,l),y(l,t[0].targetAudience),a||(i=$(l,"input",t[1]),a=!0)},p(e,[t]){1&t&&l.value!==e[0].targetAudience&&y(l,e[0].targetAudience),1&t&&w(n,"completed",e[0].targetAudience)},i:e,o:e,d(e){e&&m(n),a=!1,i()}}}function $e(e,t,n){let r;return i(e,K,(e=>n(0,r=e))),[r,function(){r.targetAudience=this.value,K.set(r)}]}class be extends J{constructor(e){super(),I(this,e,$e,ge,s,{})}}function ve(e,t,n){const r=e.slice();return r[3]=t[n],r[4]=t,r[5]=n,r}function xe(e){let t,n,r,o,s,l,a,i=e[3].name+"";function c(){e[2].call(o,e[4],e[5])}return{c(){t=p("label"),n=h(i),r=g(),o=p("textarea"),s=g()},m(i,m){d(i,t,m),u(t,n),u(t,r),u(t,o),y(o,e[3].tasks),u(t,s),l||(a=$(o,"input",c),l=!0)},p(t,r){e=t,1&r&&i!==(i=e[3].name+"")&&k(n,i),1&r&&y(o,e[3].tasks)},d(e){e&&m(t),l=!1,a()}}}function ke(t){let n,r,o,s=t[0].members,l=[];for(let e=0;e<s.length;e+=1)l[e]=xe(ve(t,s,e));return{c(){n=p("details"),r=p("summary"),r.textContent="Who did what?",o=g();for(let e=0;e<l.length;e+=1)l[e].c();v(n,"id","WhoDidWhat"),w(n,"completed",t[1])},m(e,t){d(e,n,t),u(n,r),u(n,o);for(let e=0;e<l.length;e+=1)l[e].m(n,null)},p(e,[t]){if(1&t){let r;for(s=e[0].members,r=0;r<s.length;r+=1){const o=ve(e,s,r);l[r]?l[r].p(o,t):(l[r]=xe(o),l[r].c(),l[r].m(n,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=s.length}2&t&&w(n,"completed",e[1])},i:e,o:e,d(e){e&&m(n),f(l,e)}}}function ye(e,t,n){let r,o;return i(e,K,(e=>n(0,o=e))),e.$$.update=()=>{1&e.$$.dirty&&n(1,r=o.members.every((e=>e?.tasks?.length>0||!1)))},[o,r,function(e,t){e[t].tasks=this.value,K.set(o)}]}class _e extends J{constructor(e){super(),I(this,e,ye,ke,s,{})}}function we(e,t,n){const r=e.slice();return r[4]=t[n],r[5]=t,r[6]=n,r}function qe(e){let t,n,o,s,l,a,i,c,f,b,x,_,w,q,A,N,G,C=e[4].name+"";function E(){e[2].call(b,e[5],e[6])}function H(){e[3].call(q,e[5],e[6])}return{c(){t=p("p"),n=h(C),o=h(" - "),s=p("a"),l=h("Watch"),i=g(),c=p("label"),f=h("Notes\n      "),b=p("textarea"),x=g(),_=p("label"),w=h("Questions\n      "),q=p("textarea"),A=g(),v(s,"href",a=e[4].screencast),v(s,"target","_blank"),v(b,"placeholder","Notes"),v(q,"placeholder","Questions")},m(r,a){d(r,t,a),u(t,n),u(t,o),u(t,s),u(s,l),d(r,i,a),d(r,c,a),u(c,f),u(c,b),y(b,e[4].screencastNotes),d(r,x,a),d(r,_,a),u(_,w),u(_,q),y(q,e[4].questions.screencast),u(_,A),N||(G=[$(b,"input",E),$(q,"input",H)],N=!0)},p(t,r){e=t,1&r&&C!==(C=e[4].name+"")&&k(n,C),1&r&&a!==(a=e[4].screencast)&&v(s,"href",a),1&r&&y(b,e[4].screencastNotes),1&r&&y(q,e[4].questions.screencast)},d(e){e&&m(t),e&&m(i),e&&m(c),e&&m(x),e&&m(_),N=!1,r(G)}}}function Ae(t){let n,r,o,s=t[0].members,l=[];for(let e=0;e<s.length;e+=1)l[e]=qe(we(t,s,e));return{c(){n=p("details"),r=p("summary"),r.textContent="Screencasts",o=g();for(let e=0;e<l.length;e+=1)l[e].c();v(n,"id","Screencasts"),w(n,"completed",t[1])},m(e,t){d(e,n,t),u(n,r),u(n,o);for(let e=0;e<l.length;e+=1)l[e].m(n,null)},p(e,[t]){if(1&t){let r;for(s=e[0].members,r=0;r<s.length;r+=1){const o=we(e,s,r);l[r]?l[r].p(o,t):(l[r]=qe(o),l[r].c(),l[r].m(n,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=s.length}2&t&&w(n,"completed",e[1])},i:e,o:e,d(e){e&&m(n),f(l,e)}}}function Ne(e,t,n){let r,o;return i(e,K,(e=>n(0,o=e))),e.$$.update=()=>{1&e.$$.dirty&&n(1,r=o.members.every((e=>e?.screencastNotes?.length>0||e.questions.screencast||!1)))},[o,r,function(e,t){e[t].screencastNotes=this.value,K.set(o)},function(e,t){e[t].questions.screencast=this.value,K.set(o)}]}class Ge extends J{constructor(e){super(),I(this,e,Ne,Ae,s,{})}}function Ce(t){let n,r,o,s,l,a;return{c(){n=p("details"),r=p("summary"),r.textContent="Extras",o=g(),s=p("textarea"),v(n,"id","Extras"),w(n,"completed",t[1])},m(e,i){d(e,n,i),u(n,r),u(n,o),u(n,s),y(s,t[0].extras),l||(a=$(s,"input",t[2]),l=!0)},p(e,[t]){1&t&&y(s,e[0].extras),2&t&&w(n,"completed",e[1])},i:e,o:e,d(e){e&&m(n),l=!1,a()}}}function Ee(e,t,n){let r,o;return i(e,K,(e=>n(0,o=e))),e.$$.update=()=>{1&e.$$.dirty&&n(1,r=o.extras&&o.extras.split("\n").filter((e=>""!=e.trim())).length>=o.members.length)},[o,r,function(){o.extras=this.value,K.set(o)}]}class He extends J{constructor(e){super(),I(this,e,Ee,Ce,s,{})}}function Me(t){let n,o,s,l,a,i,c,f,b,x,_,w,q,A=(t[2][t[1]][t[0]].grade||"??")+"";return{c(){n=p("div"),o=p("label"),s=h(t[0]),l=h(" ("),a=h(A),i=h("/10)\n    "),c=p("input"),f=g(),b=p("textarea"),x=g(),_=p("hr"),v(c,"type","range"),v(c,"min","0"),v(c,"max","10"),v(n,"class","svelte-t6ynls")},m(e,r){d(e,n,r),u(n,o),u(o,s),u(o,l),u(o,a),u(o,i),u(o,c),y(c,t[2][t[1]][t[0]].grade),u(n,f),u(n,b),y(b,t[2][t[1]][t[0]].comment),u(n,x),u(n,_),w||(q=[$(c,"change",t[3]),$(c,"input",t[3]),$(b,"input",t[4])],w=!0)},p(e,[t]){1&t&&k(s,e[0]),7&t&&A!==(A=(e[2][e[1]][e[0]].grade||"??")+"")&&k(a,A),7&t&&y(c,e[2][e[1]][e[0]].grade),7&t&&y(b,e[2][e[1]][e[0]].comment)},i:e,o:e,d(e){e&&m(n),w=!1,r(q)}}}function Te(e,t,n){let r;i(e,K,(e=>n(2,r=e)));let{cat:o}=t,{site:s}=t;return e.$$set=e=>{"cat"in e&&n(0,o=e.cat),"site"in e&&n(1,s=e.site)},[o,s,r,function(){r[s][o].grade=x(this.value),K.set(r)},function(){r[s][o].comment=this.value,K.set(r)}]}class Se extends J{constructor(e){super(),I(this,e,Te,Me,s,{cat:0,site:1})}}function Oe(e){let t,n,r,o,s,l,a,i,c,f,$,b,x,y,_,q,A,N,G,C,E,H,M=e[0].charAt(0).toUpperCase()+e[0].slice(1)+"",T=e[1].links[e[0]]+"";return f=new Se({props:{cat:"works",site:e[0]}}),b=new Se({props:{cat:"looks good",site:e[0]}}),y=new Se({props:{cat:"UX",site:e[0]}}),q=new Se({props:{cat:"responsiveness",site:e[0]}}),N=new Se({props:{cat:"feel factor",site:e[0]}}),C=new Se({props:{cat:"tech stack and code notes",site:e[0]}}),{c(){t=p("details"),n=p("summary"),r=h(M),o=g(),s=p("p"),l=p("a"),a=h(T),c=g(),W(f.$$.fragment),$=g(),W(b.$$.fragment),x=g(),W(y.$$.fragment),_=g(),W(q.$$.fragment),A=g(),W(N.$$.fragment),G=g(),W(C.$$.fragment),v(l,"href",i=e[1].links[e[0]]),v(l,"target","_blank"),v(t,"id",E=e[0].charAt(0).toUpperCase()+e[0].slice(1)),w(t,"completed",e[2])},m(e,i){d(e,t,i),u(t,n),u(n,r),u(t,o),u(t,s),u(s,l),u(l,a),u(t,c),F(f,t,null),u(t,$),F(b,t,null),u(t,x),F(y,t,null),u(t,_),F(q,t,null),u(t,A),F(N,t,null),u(t,G),F(C,t,null),H=!0},p(e,[n]){(!H||1&n)&&M!==(M=e[0].charAt(0).toUpperCase()+e[0].slice(1)+"")&&k(r,M),(!H||3&n)&&T!==(T=e[1].links[e[0]]+"")&&k(a,T),(!H||3&n&&i!==(i=e[1].links[e[0]]))&&v(l,"href",i);const o={};1&n&&(o.site=e[0]),f.$set(o);const s={};1&n&&(s.site=e[0]),b.$set(s);const c={};1&n&&(c.site=e[0]),y.$set(c);const u={};1&n&&(u.site=e[0]),q.$set(u);const d={};1&n&&(d.site=e[0]),N.$set(d);const m={};1&n&&(m.site=e[0]),C.$set(m),(!H||1&n&&E!==(E=e[0].charAt(0).toUpperCase()+e[0].slice(1)))&&v(t,"id",E),4&n&&w(t,"completed",e[2])},i(e){H||(L(f.$$.fragment,e),L(b.$$.fragment,e),L(y.$$.fragment,e),L(q.$$.fragment,e),L(N.$$.fragment,e),L(C.$$.fragment,e),H=!0)},o(e){j(f.$$.fragment,e),j(b.$$.fragment,e),j(y.$$.fragment,e),j(q.$$.fragment,e),j(N.$$.fragment,e),j(C.$$.fragment,e),H=!1},d(e){e&&m(t),X(f),X(b),X(y),X(q),X(N),X(C)}}}function De(e,t,n){let r,o;i(e,K,(e=>n(1,o=e)));let{site:s}=t;return e.$$set=e=>{"site"in e&&n(0,s=e.site)},e.$$.update=()=>{var t;3&e.$$.dirty&&n(2,(t=o[s],r=Object.entries(t).some((e=>null!==e[1].grade||null!==e[1].comment))))},[s,o,r]}class Qe extends J{constructor(e){super(),I(this,e,De,Oe,s,{site:0})}}function Ue(t){let n,o,s,l,a,i,c,f,b,x,k,_,q,A,N,G;return{c(){n=p("details"),o=p("summary"),o.textContent="Report",s=g(),l=p("label"),a=h("Good stuff\n    "),i=p("textarea"),c=g(),f=p("label"),b=h("Bad stuff\n    "),x=p("textarea"),k=g(),_=p("label"),q=h("General Questions\n    "),A=p("textarea"),v(n,"id","Report"),w(n,"completed",t[1])},m(e,r){d(e,n,r),u(n,o),u(n,s),u(n,l),u(l,a),u(l,i),y(i,t[0].report.good),u(n,c),u(n,f),u(f,b),u(f,x),y(x,t[0].report.bad),u(n,k),u(n,_),u(_,q),u(_,A),y(A,t[0].report.questions),N||(G=[$(i,"input",t[2]),$(x,"input",t[3]),$(A,"input",t[4])],N=!0)},p(e,[t]){1&t&&y(i,e[0].report.good),1&t&&y(x,e[0].report.bad),1&t&&y(A,e[0].report.questions),2&t&&w(n,"completed",e[1])},i:e,o:e,d(e){e&&m(n),N=!1,r(G)}}}function Re(e,t,n){let r,o;return i(e,K,(e=>n(0,o=e))),e.$$.update=()=>{1&e.$$.dirty&&n(1,r=""!==o.report.good||""!==o.report.bad||""!==o.report.questions)},[o,r,function(){o.report.good=this.value,K.set(o)},function(){o.report.bad=this.value,K.set(o)},function(){o.report.questions=this.value,K.set(o)}]}class ze extends J{constructor(e){super(),I(this,e,Re,Ue,s,{})}}function Le(e,t,n){const r=e.slice();return r[4]=t[n],r[5]=t,r[6]=n,r}function je(e){let t,n,o,s,l,a,i,c,f,b,x=e[4].name+"";function _(){e[2].call(l,e[5],e[6])}function w(){e[3].call(i,e[5],e[6])}return{c(){t=p("p"),n=h(x),o=g(),s=p("div"),l=p("input"),a=g(),i=p("input"),c=g(),v(l,"type","time"),v(i,"type","date"),v(s,"class","svelte-matjr4")},m(r,m){d(r,t,m),u(t,n),d(r,o,m),d(r,s,m),u(s,l),y(l,e[4].examTime),u(s,a),u(s,i),y(i,e[4].examDate),u(s,c),f||(b=[$(l,"input",_),$(i,"input",w)],f=!0)},p(t,r){e=t,1&r&&x!==(x=e[4].name+"")&&k(n,x),1&r&&y(l,e[4].examTime),1&r&&y(i,e[4].examDate)},d(e){e&&m(t),e&&m(o),e&&m(s),f=!1,r(b)}}}function We(t){let n,r,o,s,l,a=t[0].members,i=[];for(let e=0;e<a.length;e+=1)i[e]=je(Le(t,a,e));return{c(){n=p("details"),r=p("summary"),r.textContent="Exam Order",o=g(),s=p("p"),s.textContent="Time for each",l=g();for(let e=0;e<i.length;e+=1)i[e].c();v(n,"id","ExamOrder"),w(n,"completed",t[1])},m(e,t){d(e,n,t),u(n,r),u(n,o),u(n,s),u(n,l);for(let e=0;e<i.length;e+=1)i[e].m(n,null)},p(e,[t]){if(1&t){let r;for(a=e[0].members,r=0;r<a.length;r+=1){const o=Le(e,a,r);i[r]?i[r].p(o,t):(i[r]=je(o),i[r].c(),i[r].m(n,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=a.length}2&t&&w(n,"completed",e[1])},i:e,o:e,d(e){e&&m(n),f(i,e)}}}function Fe(e,t,n){let r,o;return i(e,K,(e=>n(0,o=e))),e.$$.update=()=>{1&e.$$.dirty&&n(1,r=o.members.every((e=>e?.examTime||e?.examDate||!1)))},[o,r,function(e,t){e[t].examTime=this.value,K.set(o)},function(e,t){e[t].examDate=this.value,K.set(o)}]}class Xe extends J{constructor(e){super(),I(this,e,Fe,We,s,{})}}function Be(t){let n,r,o,s,l,a;return{c(){n=p("details"),r=p("summary"),r.textContent="Other Questions",o=g(),s=p("textarea"),v(s,"placeholder","One per line"),v(n,"id","OtherQuestions"),w(n,"completed",""!==t[0].generalQuestions)},m(e,i){d(e,n,i),u(n,r),u(n,o),u(n,s),y(s,t[0].generalQuestions),l||(a=$(s,"input",t[1]),l=!0)},p(e,[t]){1&t&&y(s,e[0].generalQuestions),1&t&&w(n,"completed",""!==e[0].generalQuestions)},i:e,o:e,d(e){e&&m(n),l=!1,a()}}}function Ie(e,t,n){let r;return i(e,K,(e=>n(0,r=e))),[r,function(){r.generalQuestions=this.value,K.set(r)}]}class Je extends J{constructor(e){super(),I(this,e,Ie,Be,s,{})}}function Pe(t){let n;return{c(){n=p("nav"),n.innerHTML='<ol><li class="svelte-oql0zh"><a href="#ExamOrder">Exam Order</a></li> \n    <li class="svelte-oql0zh"><a href="#Report">Report</a></li> \n    <li class="svelte-oql0zh"><a href="#TargetAudience">Target Audience</a></li> \n    <li class="svelte-oql0zh"><a href="#WhoDidWhat">Who Did What</a></li> \n    <li class="svelte-oql0zh"><a href="#Extras">Extras</a></li> \n    <li class="svelte-oql0zh"><a href="#Screencasts">Screencasts</a></li> \n    <li class="svelte-oql0zh"><a href="#Form">Form</a></li> \n    <li class="svelte-oql0zh"><a href="#Dashboard">Dashboard</a></li> \n    <li class="svelte-oql0zh"><a href="#OtherQuestions">Other Questions</a></li></ol>',v(n,"class","menu svelte-oql0zh")},m(e,t){d(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}class Ve extends J{constructor(e){super(),I(this,e,null,Pe,s,{})}}function Ye(t){let n,r,o,s,l,a,i,c,u,f,h,b,v,x,k,y,_,w,q,A,N,G,C,E;return n=new Ve({}),o=new Xe({}),l=new ze({}),i=new be({}),u=new _e({}),h=new He({}),v=new Ge({}),k=new Qe({props:{site:"form"}}),_=new Qe({props:{site:"dashboard"}}),q=new Je({}),{c(){W(n.$$.fragment),r=g(),W(o.$$.fragment),s=g(),W(l.$$.fragment),a=g(),W(i.$$.fragment),c=g(),W(u.$$.fragment),f=g(),W(h.$$.fragment),b=g(),W(v.$$.fragment),x=g(),W(k.$$.fragment),y=g(),W(_.$$.fragment),w=g(),W(q.$$.fragment),A=g(),N=p("button"),N.textContent="Generate Exam Helper"},m(e,m){F(n,e,m),d(e,r,m),F(o,e,m),d(e,s,m),F(l,e,m),d(e,a,m),F(i,e,m),d(e,c,m),F(u,e,m),d(e,f,m),F(h,e,m),d(e,b,m),F(v,e,m),d(e,x,m),F(k,e,m),d(e,y,m),F(_,e,m),d(e,w,m),F(q,e,m),d(e,A,m),d(e,N,m),G=!0,C||(E=$(N,"click",t[0]),C=!0)},p:e,i(e){G||(L(n.$$.fragment,e),L(o.$$.fragment,e),L(l.$$.fragment,e),L(i.$$.fragment,e),L(u.$$.fragment,e),L(h.$$.fragment,e),L(v.$$.fragment,e),L(k.$$.fragment,e),L(_.$$.fragment,e),L(q.$$.fragment,e),G=!0)},o(e){j(n.$$.fragment,e),j(o.$$.fragment,e),j(l.$$.fragment,e),j(i.$$.fragment,e),j(u.$$.fragment,e),j(h.$$.fragment,e),j(v.$$.fragment,e),j(k.$$.fragment,e),j(_.$$.fragment,e),j(q.$$.fragment,e),G=!1},d(e){X(n,e),e&&m(r),X(o,e),e&&m(s),X(l,e),e&&m(a),X(i,e),e&&m(c),X(u,e),e&&m(f),X(h,e),e&&m(b),X(v,e),e&&m(x),X(k,e),e&&m(y),X(_,e),e&&m(w),X(q,e),e&&m(A),e&&m(N),C=!1,E()}}}function Ke(e){N((()=>{setTimeout(re,200)}));return[()=>Y.next()]}class Ze extends J{constructor(e){super(),I(this,e,Ke,Ye,s,{})}}function et(e){return e?e.replace(/\n/g,"<br />"):e}function tt(e,t,n){let r;i(e,K,(e=>n(0,r=e)));const o=`<!DOCTYPE html>\n<html lang="en" data-theme="dark">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <link\n      rel="stylesheet"\n      href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"\n    />\n  <title>${r.group_number}-${r.group_name}-exam-helper</title>\n</head>\n<body>\n    <main class="container">\n        <h1>${r.group_number}-${r.group_name}</h1>\n        <section>\n            <h2>Links</h2>\n            <div class="grid gap1 col2">\n                <ul>\n                    \n                    <li><a target="_blank" href="${r.links.form}">Form/Booking</a></li>\n                    <li><a target="_blank" href="${r.links.formGH}">GitHub</a></li>\n                </ul>\n                ${r.isMonoRepo?"":`<ul>\n                    <li><a target="_blank" href="${r.links.dashboard}">Dashboard/App</a></li>\n                    <li><a target="_blank" href="${r.links.dashboardGH}">GitHub</a></li>\n                </ul>`}\n            </div>\n        </section>\n        <section class="grid col2 gap1">\n            <div class="bordered">\n                <h2>The form</h2>\n                <table>\n                    <tr>\n                        <th>Name</th><th>Value</th><th>Comments</th>\n                    </tr>\n                    <tr>\n                        <td>Works</td>\n                        <td>${r.form.works.grade}</td>\n                        <td>${et(r.form.works.comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>Looks Good</td>\n                        <td>${r.form["looks good"].grade}</td>\n                        <td>${et(r.form["looks good"].comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>UX</td>\n                        <td>${r.form.UX.grade}</td>\n                        <td>${et(r.form.UX.comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>responsiveness</td>\n                        <td>${r.form.responsiveness.grade}</td>\n                        <td>${et(r.form.responsiveness.comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>feel factor</td>\n                        <td>${r.form["feel factor"].grade}</td>\n                        <td>${et(r.form["feel factor"].comment)}</td>\n                    </tr>\n                </table>\n                <h3>Github</h3>\n                ${r.links.formNotes.split("\n").map((e=>`<p>${e}</p>`)).join("")}\n            </div>\n            <div  class="bordered">\n                <h2>The Dashboard/App</h2>\n                <p>${r.targetAudience}</p>\n                <table>\n                    <tr>\n                        <th>Name</th><th>Value</th><th>Comments</th>\n                    </tr>\n                    <tr>\n                        <td>Works</td>\n                        <td>${r.dashboard.works.grade}</td>\n                        <td>${et(r.dashboard.works.comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>Looks Good</td>\n                        <td>${r.dashboard["looks good"].grade}</td>\n                        <td>${et(r.dashboard["looks good"].comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>UX</td>\n                        <td>${r.dashboard.UX.grade}</td>\n                        <td>${et(r.dashboard.UX.comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>responsiveness</td>\n                        <td>${r.dashboard.responsiveness.grade}</td>\n                        <td>${et(r.dashboard.responsiveness.comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>feel factor</td>\n                        <td>${r.dashboard["feel factor"].grade}</td>\n                        <td>${et(r.dashboard["feel factor"].comment)}</td>\n                    </tr>\n                </table>\n                <h3>Github</h3>\n                ${r.links.dashboardNotes.split("\n").map((e=>`<p>${e}</p>`)).join("")}\n            </div>\n        </section>\n        <section>\n            <h2>The report</h2>\n            <div class="grid col2 gap1">\n                <div>\n                    <h3>Good</h3>\n                    <p>${et(r.report.good)}</p>\n                </div>\n                <div>\n                    <h3>Bad</h3>\n                    <p>${et(r.report.bad)}</p>\n                </div>\n            </div>\n        </section>\n        <section>\n            <h2>Extras</h2>\n            <ol>\n                ${r.extras.split("\n").map((e=>`<li>${e}</li>`)).join("")}\n            </ol>\n            \n        </section>\n        <section>\n            <h2>Members</h2>\n            <div class="grid col2 gap1">\n                ${[...r.members].sort(((e,t)=>e.examTime>t.examTime)).map((e=>`\n                        <article>\n                            <h3>${e.name}</h3>\n                            <p>${e.examDate} - ${e.examTime}</p>\n                            <dl>\n                                <dt>Screencast</dt>\n                                <dd><a href="${e.screencast}">Watch</a></dd>\n                                <dt>Notes</dt>\n                                <dd>${et(e.screencastNotes)}</dd>\n                                <dt>Tasks</dt>\n                                <dd>${et(e.tasks)}</dd>\n                                <dt>Questions</dt>\n                                <dd>${et(e.questions.screencast)}</dd>\n                            </dl>\n                        </article>\n                    `)).join("")}\n            </div>\n        </section>\n        <section>\n            <h2>Questions</h2>\n            <div class="grid col2 gap1">\n                <div>\n                    <h3>Report</h3>\n                    <ul>\n                        ${r.report.questions.split("\n").map((e=>`<li>${e}</li>`)).join("")}\n                    </ul>\n                </div>\n                <div>\n                    <h3>General</h3>\n                    <ul>\n                        ${r.generalQuestions.split("\n").map((e=>`<li>${e}</li>`)).join("")}\n                    </ul>\n                </div>\n            </div>\n        </section>\n    </main>\n    <style>\n        h1,h2,h3,h4,h5,h6 {\n            --typography-spacing-vertical:1rem;\n        }\n        article {\n            --block-spacing-vertical:1rem;\n        }\n        .col2 {\n            grid-template-columns: 1fr 1fr;\n        }\n        @media only screen and (max-width: 960px) {\n            .col2 {\n                grid-template-columns: 1fr;\n            }\n        }\n        .gap1 {\n            gap:1rem;\n        }\n        .grid {\n            display:grid;\n        }\n        .full {\n            grid-column: 1/-1;\n        }\n        .bordered {\n            border: 1px solid #FFF;\n            padding:1rem;\n        }\n    </style>\n    <details>\n        <summary>data</summary>\n        ${JSON.stringify(r)}\n    </details>\n    \n</body>\n</html>`;return function(e,t){const n=document.createElement("a");n.setAttribute("href","data:text/html;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}(`${r.group_number}-${r.group_name}-exam-helper.html`,o),[]}class nt extends J{constructor(e){super(),I(this,e,tt,null,s,{})}}function rt(e){let t,n;return t=new nt({}),{c(){W(t.$$.fragment)},m(e,r){F(t,e,r),n=!0},i(e){n||(L(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){X(t,e)}}}function ot(e){let t,n;return t=new Ze({}),{c(){W(t.$$.fragment)},m(e,r){F(t,e,r),n=!0},i(e){n||(L(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){X(t,e)}}}function st(e){let t,n;return t=new he({}),{c(){W(t.$$.fragment)},m(e,r){F(t,e,r),n=!0},i(e){n||(L(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){X(t,e)}}}function lt(e){let t,n;return t=new ae({}),{c(){W(t.$$.fragment)},m(e,r){F(t,e,r),n=!0},i(e){n||(L(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){X(t,e)}}}function at(e){let t,n;return t=new ne({}),{c(){W(t.$$.fragment)},m(e,r){F(t,e,r),n=!0},i(e){n||(L(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){X(t,e)}}}function it(e){let t,n,o,s,l,a,i,c,f,b,x,y,_,w,q;const A=[at,lt,st,ot,rt],N=[];function G(e,t){return 1===e[0]?0:2===e[0]?1:3===e[0]?2:4===e[0]?3:5===e[0]?4:-1}return~(i=G(e))&&(c=N[i]=A[i](e)),{c(){t=p("main"),n=p("h1"),o=h("At step "),s=h(e[0]),l=h(" out of 5"),a=g(),c&&c.c(),f=g(),b=p("button"),x=h("Back"),v(b,"class","secondary outline"),b.disabled=y=1===e[0],v(t,"class","container")},m(r,c){d(r,t,c),u(t,n),u(n,o),u(n,s),u(n,l),u(t,a),~i&&N[i].m(t,null),u(t,f),u(t,b),u(b,x),_=!0,w||(q=$(b,"click",e[1]),w=!0)},p(e,[n]){(!_||1&n)&&k(s,e[0]);let o=i;i=G(e),i!==o&&(c&&(z={r:0,c:[],p:z},j(N[o],1,1,(()=>{N[o]=null})),z.r||r(z.c),z=z.p),~i?(c=N[i],c||(c=N[i]=A[i](e),c.c()),L(c,1),c.m(t,f)):c=null),(!_||1&n&&y!==(y=1===e[0]))&&(b.disabled=y)},i(e){_||(L(c),_=!0)},o(e){j(c),_=!1},d(e){e&&m(t),~i&&N[i].d(),w=!1,q()}}}function ct(e,t,n){let r;i(e,Y,(e=>n(0,r=e)));return[r,()=>Y.prev()]}return new class extends J{constructor(e){super(),I(this,e,ct,it,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map