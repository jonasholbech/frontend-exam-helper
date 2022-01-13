var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function a(t){let e;return l(t,(t=>e=t))(),e}function i(t,e,n){t.$$.on_destroy.push(l(e,n))}function c(t,e,n){return t.set(n),e}function u(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t){return function(e){return e.preventDefault(),t.call(this,e)}}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return""===t?null:+t}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e){t.value=null==e?"":e}function _(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}t.selectedIndex=-1}function w(t,e,n){t.classList[n?"add":"remove"](e)}let G;function q(t){G=t}function A(t){(function(){if(!G)throw new Error("Function called outside component initialization");return G})().$$.on_mount.push(t)}const C=[],H=[],N=[],E=[],T=Promise.resolve();let S=!1;function U(t){N.push(t)}const M=new Set;let Q=0;function D(){const t=G;do{for(;Q<C.length;){const t=C[Q];Q++,q(t),O(t.$$)}for(q(null),C.length=0,Q=0;H.length;)H.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];M.has(e)||(M.add(e),e())}N.length=0}while(C.length);for(;E.length;)E.pop()();S=!1,M.clear(),q(t)}function O(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const L=new Set;let X;function j(t,e){t&&t.i&&(L.delete(t),t.i(e))}function F(t,e,n,r){if(t&&t.o){if(L.has(t))return;L.add(t),X.c.push((()=>{L.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function I(t){t&&t.c()}function W(t,n,s,l){const{fragment:a,on_mount:i,on_destroy:c,after_update:u}=t.$$;a&&a.m(n,s),l||U((()=>{const n=i.map(e).filter(o);c?c.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(U)}function B(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&(C.push(t),S||(S=!0,T.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,o,s,l,a,i,c,u=[-1]){const d=G;q(e);const f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:o.target||d.$$.root};c&&c(f.root);let p=!1;if(f.ctx=s?s(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),p&&z(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!l&&l(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();o.intro&&j(e.$$.fragment),W(e,o.target,o.anchor,o.customElement),D()}q(d)}class J{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const P=[];function V(e,n=t){let r;const o=new Set;function l(t){if(s(e,t)&&(e=t,r)){const t=!P.length;for(const t of o)t[1](),P.push(t,e);if(t){for(let t=0;t<P.length;t+=2)P[t][0](P[t+1]);P.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(s,a=t){const i=[s,a];return o.add(i),1===o.size&&(r=n(l)||t),s(e),()=>{o.delete(i),0===o.size&&(r(),r=null)}}}}const Y=function(){const{subscribe:t,set:e,update:n}=V(1);return{subscribe:t,set:e,update:n,next:()=>n((t=>t+1)),prev:()=>n((t=>t-1))}}();const K=function(t){const{subscribe:e,set:n,update:r}=function(t,e){const n=V(e),{subscribe:r,set:o}=n,s=localStorage.getItem(t);return s&&o(JSON.parse(s)),{set(e){localStorage.setItem(t,JSON.stringify(e)),o(e)},update(t){const e=t(a(n));this.set(e)},subscribe:r}}("feh",t);return{subscribe:e,set:n,update:r,setLinks:(t,e,n,o)=>r((r=>{const s={...r};return s.links.form=t,s.links.dashboard=e,s.links.formGH=n,s.links.dashboardGH=o,s})),setMembers:t=>{r((e=>{const n={...e};return n.members=t,n}))}}}({group_number:null,group_name:"",numMembers:2,members:[{name:"",screencast:"",questions:{screencast:""}},{name:"",screencast:"",questions:{screencast:""}}],links:{form:"",dashboard:"",formGH:"",dashboardGH:""},form:{works:{comment:null,grade:null},"looks good":{comment:null,grade:null},UX:{comment:null,grade:null},responsiveness:{comment:null,grade:null},"feel factor":{comment:null,grade:null},"tech stack and code notes":{comment:null,grade:null}},dashboard:{works:{comment:null,grade:null},"looks good":{comment:null,grade:null},UX:{comment:null,grade:null},responsiveness:{comment:null,grade:null},"feel factor":{comment:null,grade:null},"tech stack and code notes":{comment:null,grade:null}},report:{good:"",bad:"",questions:""},generalQuestions:""});function Z(e){let n,o,s,l,a,i,c,f,y,_,w,G,q,A;return{c(){n=p("button"),n.textContent="Clear Storage",o=g(),s=p("form"),l=p("label"),a=h("Group #\n    "),i=p("input"),c=g(),f=p("label"),y=h("Group Name\n    "),_=p("input"),w=g(),G=p("input"),i.required=!0,v(i,"type","number"),v(i,"pattern","[0-9]+"),v(i,"name","group_number"),_.required=!0,v(_,"type","text"),v(_,"name","group_name"),v(G,"type","submit"),G.value="Next"},m(t,r){d(t,n,r),d(t,o,r),d(t,s,r),u(s,l),u(l,a),u(l,i),k(i,e[0].group_number),u(s,c),u(s,f),u(f,y),u(f,_),k(_,e[0].group_name),u(s,w),u(s,G),q||(A=[$(n,"click",e[2]),$(i,"input",e[3]),$(_,"input",e[4]),$(s,"submit",b(e[1]))],q=!0)},p(t,[e]){1&e&&x(i.value)!==t[0].group_number&&k(i,t[0].group_number),1&e&&_.value!==t[0].group_name&&k(_,t[0].group_name)},i:t,o:t,d(t){t&&m(n),t&&m(o),t&&m(s),q=!1,r(A)}}}function tt(t,e,n){let r;i(t,K,(t=>n(0,r=t)));return[r,function(){Y.next()},()=>localStorage.clear(),function(){r.group_number=x(this.value),K.set(r)},function(){r.group_name=this.value,K.set(r)}]}class et extends J{constructor(t){super(),R(this,t,tt,Z,s,{})}}function nt(t){let e,n,r,o,s;return{c(){e=p("label"),n=h("Dashboard GitHub\n        "),r=p("input"),v(r,"type","url"),r.required=!0},m(l,a){d(l,e,a),u(e,n),u(e,r),k(r,t[1].links.dashboardGH),o||(s=$(r,"input",t[7]),o=!0)},p(t,e){2&e&&k(r,t[1].links.dashboardGH)},d(t){t&&m(e),o=!1,s()}}}function rt(e){let n,o,s,l,a,i,c,f,x,y,_,w,G,q,A,C,H,N,E,T,S,U,M,Q,D,O,L,X=!e[0]&&nt(e);return{c(){n=p("form"),o=p("fieldset"),s=p("legend"),s.textContent="Links",l=g(),a=p("label"),i=h("Form link\n      "),c=p("input"),f=g(),x=p("label"),y=h("Dashboard link\n      "),_=p("input"),w=g(),G=p("fieldset"),q=p("legend"),q.textContent="GitHub",A=g(),C=p("label"),H=h("Mono-repo?\n      "),N=p("input"),E=g(),T=p("label"),S=h("Form GitHub\n      "),U=p("input"),M=g(),X&&X.c(),Q=g(),D=p("input"),v(c,"type","url"),c.required=!0,v(_,"type","url"),_.required=!0,v(N,"type","checkbox"),v(U,"type","url"),U.required=!0,v(D,"type","submit"),D.value="Next"},m(t,r){d(t,n,r),u(n,o),u(o,s),u(o,l),u(o,a),u(a,i),u(a,c),k(c,e[1].links.form),u(o,f),u(o,x),u(x,y),u(x,_),k(_,e[1].links.dashboard),u(n,w),u(n,G),u(G,q),u(G,A),u(G,C),u(C,H),u(C,N),N.checked=e[0],u(G,E),u(G,T),u(T,S),u(T,U),k(U,e[1].links.formGH),u(G,M),X&&X.m(G,null),u(n,Q),u(n,D),O||(L=[$(c,"input",e[3]),$(_,"input",e[4]),$(N,"change",e[5]),$(U,"input",e[6]),$(n,"submit",b(e[2]))],O=!0)},p(t,[e]){2&e&&k(c,t[1].links.form),2&e&&k(_,t[1].links.dashboard),1&e&&(N.checked=t[0]),2&e&&k(U,t[1].links.formGH),t[0]?X&&(X.d(1),X=null):X?X.p(t,e):(X=nt(t),X.c(),X.m(G,null))},i:t,o:t,d(t){t&&m(n),X&&X.d(),O=!1,r(L)}}}function ot(t,e,n){let r;i(t,K,(t=>n(1,r=t)));let o=!1;return[o,r,function(){o&&c(K,r.links.dashboardGH=r.links.formGH,r),Y.next()},function(){r.links.form=this.value,K.set(r)},function(){r.links.dashboard=this.value,K.set(r)},function(){o=this.checked,n(0,o)},function(){r.links.formGH=this.value,K.set(r)},function(){r.links.dashboardGH=this.value,K.set(r)}]}class st extends J{constructor(t){super(),R(this,t,ot,rt,s,{})}}function lt(t,e,n){const r=t.slice();return r[6]=e[n],r[7]=e,r[8]=n,r}function at(t,e,n){const r=t.slice();return r[9]=e[n],r}function it(e){let n,r,o,s=e[9]+"";return{c(){n=p("option"),r=h(s),n.__value=o=e[9],n.value=n.__value},m(t,e){d(t,n,e),u(n,r)},p:t,d(t){t&&m(n)}}}function ct(t){let e,n,o,s,l,a,i,c,f,b,x,y,_,w,G=t[8]+1+"";function q(){t[4].call(c,t[7],t[8])}function A(){t[5].call(y,t[7],t[8])}return{c(){e=p("fieldset"),n=p("legend"),o=h("Group member "),s=h(G),l=g(),a=p("label"),i=h("Name:\n        "),c=p("input"),f=g(),b=p("label"),x=h("Screencast:\n        "),y=p("input"),v(c,"type","text"),c.required=!0,v(y,"type","url"),y.required=!0},m(r,m){d(r,e,m),u(e,n),u(n,o),u(n,s),u(e,l),u(e,a),u(a,i),u(a,c),k(c,t[6].name),u(e,f),u(e,b),u(b,x),u(b,y),k(y,t[6].screencast),_||(w=[$(c,"input",q),$(y,"input",A)],_=!0)},p(e,n){t=e,1&n&&c.value!==t[6].name&&k(c,t[6].name),1&n&&k(y,t[6].screencast)},d(t){t&&m(e),_=!1,r(w)}}}function ut(e){let n,o,s,l,a,i,c,h=Array.from(Array(4)).map(dt),x=[];for(let t=0;t<h.length;t+=1)x[t]=it(at(e,h,t));let y=e[0].members,k=[];for(let t=0;t<y.length;t+=1)k[t]=ct(lt(e,y,t));return{c(){n=p("form"),o=p("select");for(let t=0;t<x.length;t+=1)x[t].c();s=g();for(let t=0;t<k.length;t+=1)k[t].c();l=g(),a=p("input"),void 0===e[0].numMembers&&U((()=>e[3].call(o))),v(a,"type","submit"),a.value="Next"},m(t,r){d(t,n,r),u(n,o);for(let t=0;t<x.length;t+=1)x[t].m(o,null);_(o,e[0].numMembers),u(n,s);for(let t=0;t<k.length;t+=1)k[t].m(n,null);u(n,l),u(n,a),i||(c=[$(o,"change",e[3]),$(o,"change",e[1]),$(n,"submit",b(e[2]))],i=!0)},p(t,[e]){if(0&e){let n;for(h=Array.from(Array(4)).map(dt),n=0;n<h.length;n+=1){const r=at(t,h,n);x[n]?x[n].p(r,e):(x[n]=it(r),x[n].c(),x[n].m(o,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=h.length}if(1&e&&_(o,t[0].numMembers),1&e){let r;for(y=t[0].members,r=0;r<y.length;r+=1){const o=lt(t,y,r);k[r]?k[r].p(o,e):(k[r]=ct(o),k[r].c(),k[r].m(n,l))}for(;r<k.length;r+=1)k[r].d(1);k.length=y.length}},i:t,o:t,d(t){t&&m(n),f(x,t),f(k,t),i=!1,r(c)}}}const dt=(t,e)=>e+1;function mt(t,e,n){let r;return i(t,K,(t=>n(0,r=t))),[r,function(t){if(console.log(r.members,r.numMembers),r.numMembers>r.members.length){const t=r.numMembers;for(let e=r.members.length;e<t;e++)c(K,r.members=r.members.concat({name:"",screencast:"",questions:{screencast:""}}),r);console.log(r.members)}else c(K,r.members=r.members.slice(0,r.numMembers),r)},function(){Y.next()},function(){r.numMembers=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),K.set(r)},function(t,e){t[e].name=this.value,K.set(r)},function(t,e){t[e].screencast=this.value,K.set(r)}]}class ft extends J{constructor(t){super(),R(this,t,mt,ut,s,{})}}function pt(e){let n,r,o,s,l,a,i;return{c(){n=p("details"),r=p("summary"),r.textContent="Target Audience",o=g(),s=p("label"),l=p("input"),v(l,"type","text"),w(n,"completed",e[0].targetAudience)},m(t,c){d(t,n,c),u(n,r),u(n,o),u(n,s),u(s,l),k(l,e[0].targetAudience),a||(i=$(l,"input",e[1]),a=!0)},p(t,[e]){1&e&&l.value!==t[0].targetAudience&&k(l,t[0].targetAudience),1&e&&w(n,"completed",t[0].targetAudience)},i:t,o:t,d(t){t&&m(n),a=!1,i()}}}function ht(t,e,n){let r;return i(t,K,(t=>n(0,r=t))),[r,function(){r.targetAudience=this.value,K.set(r)}]}class gt extends J{constructor(t){super(),R(this,t,ht,pt,s,{})}}function $t(t,e,n){const r=t.slice();return r[3]=e[n],r[4]=e,r[5]=n,r}function bt(t){let e,n,r,o,s,l,a,i=t[3].name+"";function c(){t[2].call(o,t[4],t[5])}return{c(){e=p("label"),n=h(i),r=g(),o=p("textarea"),s=g()},m(i,m){d(i,e,m),u(e,n),u(e,r),u(e,o),k(o,t[3].tasks),u(e,s),l||(a=$(o,"input",c),l=!0)},p(e,r){t=e,1&r&&i!==(i=t[3].name+"")&&y(n,i),1&r&&k(o,t[3].tasks)},d(t){t&&m(e),l=!1,a()}}}function vt(e){let n,r,o,s=e[0].members,l=[];for(let t=0;t<s.length;t+=1)l[t]=bt($t(e,s,t));return{c(){n=p("details"),r=p("summary"),r.textContent="Who did what?",o=g();for(let t=0;t<l.length;t+=1)l[t].c();w(n,"completed",e[1])},m(t,e){d(t,n,e),u(n,r),u(n,o);for(let t=0;t<l.length;t+=1)l[t].m(n,null)},p(t,[e]){if(1&e){let r;for(s=t[0].members,r=0;r<s.length;r+=1){const o=$t(t,s,r);l[r]?l[r].p(o,e):(l[r]=bt(o),l[r].c(),l[r].m(n,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=s.length}2&e&&w(n,"completed",t[1])},i:t,o:t,d(t){t&&m(n),f(l,t)}}}function xt(t,e,n){let r,o;return i(t,K,(t=>n(0,o=t))),t.$$.update=()=>{1&t.$$.dirty&&n(1,r=o.members.every((t=>t?.tasks?.length>0||!1)))},[o,r,function(t,e){t[e].tasks=this.value,K.set(o)}]}class yt extends J{constructor(t){super(),R(this,t,xt,vt,s,{})}}function kt(t,e,n){const r=t.slice();return r[4]=e[n],r[5]=e,r[6]=n,r}function _t(t){let e,n,o,s,l,a,i,c,f,b,x,_,w,G,q,A,C,H=t[4].name+"";function N(){t[2].call(b,t[5],t[6])}function E(){t[3].call(G,t[5],t[6])}return{c(){e=p("p"),n=h(H),o=h(" - "),s=p("a"),l=h("Watch"),i=g(),c=p("label"),f=h("Notes\n      "),b=p("textarea"),x=g(),_=p("label"),w=h("Questions\n      "),G=p("textarea"),q=g(),v(s,"href",a=t[4].screencast),v(s,"target","_blank"),v(b,"placeholder","Notes"),v(G,"placeholder","Questions")},m(r,a){d(r,e,a),u(e,n),u(e,o),u(e,s),u(s,l),d(r,i,a),d(r,c,a),u(c,f),u(c,b),k(b,t[4].screencastNotes),d(r,x,a),d(r,_,a),u(_,w),u(_,G),k(G,t[4].questions.screencast),u(_,q),A||(C=[$(b,"input",N),$(G,"input",E)],A=!0)},p(e,r){t=e,1&r&&H!==(H=t[4].name+"")&&y(n,H),1&r&&a!==(a=t[4].screencast)&&v(s,"href",a),1&r&&k(b,t[4].screencastNotes),1&r&&k(G,t[4].questions.screencast)},d(t){t&&m(e),t&&m(i),t&&m(c),t&&m(x),t&&m(_),A=!1,r(C)}}}function wt(e){let n,r,o,s=e[0].members,l=[];for(let t=0;t<s.length;t+=1)l[t]=_t(kt(e,s,t));return{c(){n=p("details"),r=p("summary"),r.textContent="Screencasts",o=g();for(let t=0;t<l.length;t+=1)l[t].c();w(n,"completed",e[1])},m(t,e){d(t,n,e),u(n,r),u(n,o);for(let t=0;t<l.length;t+=1)l[t].m(n,null)},p(t,[e]){if(1&e){let r;for(s=t[0].members,r=0;r<s.length;r+=1){const o=kt(t,s,r);l[r]?l[r].p(o,e):(l[r]=_t(o),l[r].c(),l[r].m(n,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=s.length}2&e&&w(n,"completed",t[1])},i:t,o:t,d(t){t&&m(n),f(l,t)}}}function Gt(t,e,n){let r,o;return i(t,K,(t=>n(0,o=t))),t.$$.update=()=>{1&t.$$.dirty&&n(1,r=o.members.every((t=>t?.screencastNotes?.length>0||t.questions.screencast||!1)))},[o,r,function(t,e){t[e].screencastNotes=this.value,K.set(o)},function(t,e){t[e].questions.screencast=this.value,K.set(o)}]}class qt extends J{constructor(t){super(),R(this,t,Gt,wt,s,{})}}function At(e){let n,r,o,s,l,a;return{c(){n=p("details"),r=p("summary"),r.textContent="Extras",o=g(),s=p("textarea"),w(n,"completed",e[1])},m(t,i){d(t,n,i),u(n,r),u(n,o),u(n,s),k(s,e[0].extras),l||(a=$(s,"input",e[2]),l=!0)},p(t,[e]){1&e&&k(s,t[0].extras),2&e&&w(n,"completed",t[1])},i:t,o:t,d(t){t&&m(n),l=!1,a()}}}function Ct(t,e,n){let r,o;return i(t,K,(t=>n(0,o=t))),t.$$.update=()=>{1&t.$$.dirty&&n(1,r=o.extras&&o.extras.split("\n").filter((t=>""!=t.trim())).length>=o.members.length)},[o,r,function(){o.extras=this.value,K.set(o)}]}class Ht extends J{constructor(t){super(),R(this,t,Ct,At,s,{})}}function Nt(e){let n,o,s,l,a,i,c,f,b,x,_,w,G,q=(e[2][e[1]][e[0]].grade||"??")+"";return{c(){n=p("div"),o=p("label"),s=h(e[0]),l=h(" ("),a=h(q),i=h("/10)\n    "),c=p("input"),f=g(),b=p("textarea"),x=g(),_=p("hr"),v(c,"type","range"),v(c,"min","0"),v(c,"max","10"),v(n,"class","svelte-t6ynls")},m(t,r){d(t,n,r),u(n,o),u(o,s),u(o,l),u(o,a),u(o,i),u(o,c),k(c,e[2][e[1]][e[0]].grade),u(n,f),u(n,b),k(b,e[2][e[1]][e[0]].comment),u(n,x),u(n,_),w||(G=[$(c,"change",e[3]),$(c,"input",e[3]),$(b,"input",e[4])],w=!0)},p(t,[e]){1&e&&y(s,t[0]),7&e&&q!==(q=(t[2][t[1]][t[0]].grade||"??")+"")&&y(a,q),7&e&&k(c,t[2][t[1]][t[0]].grade),7&e&&k(b,t[2][t[1]][t[0]].comment)},i:t,o:t,d(t){t&&m(n),w=!1,r(G)}}}function Et(t,e,n){let r;i(t,K,(t=>n(2,r=t)));let{cat:o}=e,{site:s}=e;return t.$$set=t=>{"cat"in t&&n(0,o=t.cat),"site"in t&&n(1,s=t.site)},[o,s,r,function(){r[s][o].grade=x(this.value),K.set(r)},function(){r[s][o].comment=this.value,K.set(r)}]}class Tt extends J{constructor(t){super(),R(this,t,Et,Nt,s,{cat:0,site:1})}}function St(t){let e,n,r,o,s,l,a,i,c,f,$,b,v,x,k,_,G=t[0].charAt(0).toUpperCase()+t[0].slice(1)+"";return s=new Tt({props:{cat:"works",site:t[0]}}),a=new Tt({props:{cat:"looks good",site:t[0]}}),c=new Tt({props:{cat:"UX",site:t[0]}}),$=new Tt({props:{cat:"responsiveness",site:t[0]}}),v=new Tt({props:{cat:"feel factor",site:t[0]}}),k=new Tt({props:{cat:"tech stack and code notes",site:t[0]}}),{c(){e=p("details"),n=p("summary"),r=h(G),o=g(),I(s.$$.fragment),l=g(),I(a.$$.fragment),i=g(),I(c.$$.fragment),f=g(),I($.$$.fragment),b=g(),I(v.$$.fragment),x=g(),I(k.$$.fragment),w(e,"completed",t[1])},m(t,m){d(t,e,m),u(e,n),u(n,r),u(e,o),W(s,e,null),u(e,l),W(a,e,null),u(e,i),W(c,e,null),u(e,f),W($,e,null),u(e,b),W(v,e,null),u(e,x),W(k,e,null),_=!0},p(t,[n]){(!_||1&n)&&G!==(G=t[0].charAt(0).toUpperCase()+t[0].slice(1)+"")&&y(r,G);const o={};1&n&&(o.site=t[0]),s.$set(o);const l={};1&n&&(l.site=t[0]),a.$set(l);const i={};1&n&&(i.site=t[0]),c.$set(i);const u={};1&n&&(u.site=t[0]),$.$set(u);const d={};1&n&&(d.site=t[0]),v.$set(d);const m={};1&n&&(m.site=t[0]),k.$set(m),2&n&&w(e,"completed",t[1])},i(t){_||(j(s.$$.fragment,t),j(a.$$.fragment,t),j(c.$$.fragment,t),j($.$$.fragment,t),j(v.$$.fragment,t),j(k.$$.fragment,t),_=!0)},o(t){F(s.$$.fragment,t),F(a.$$.fragment,t),F(c.$$.fragment,t),F($.$$.fragment,t),F(v.$$.fragment,t),F(k.$$.fragment,t),_=!1},d(t){t&&m(e),B(s),B(a),B(c),B($),B(v),B(k)}}}function Ut(t,e,n){let r,o;i(t,K,(t=>n(2,o=t)));let{site:s}=e;return t.$$set=t=>{"site"in t&&n(0,s=t.site)},t.$$.update=()=>{var e;5&t.$$.dirty&&n(1,(e=o[s],r=Object.entries(e).some((t=>null!==t[1].grade||null!==t[1].comment))))},[s,r,o]}class Mt extends J{constructor(t){super(),R(this,t,Ut,St,s,{site:0})}}function Qt(e){let n,o,s,l,a,i,c,f,b,v,x,y,_,G,q,A;return{c(){n=p("details"),o=p("summary"),o.textContent="Report",s=g(),l=p("label"),a=h("Good stuff\n    "),i=p("textarea"),c=g(),f=p("label"),b=h("Bad stuff\n    "),v=p("textarea"),x=g(),y=p("label"),_=h("General Questions\n    "),G=p("textarea"),w(n,"completed",e[1])},m(t,r){d(t,n,r),u(n,o),u(n,s),u(n,l),u(l,a),u(l,i),k(i,e[0].report.good),u(n,c),u(n,f),u(f,b),u(f,v),k(v,e[0].report.bad),u(n,x),u(n,y),u(y,_),u(y,G),k(G,e[0].report.questions),q||(A=[$(i,"input",e[2]),$(v,"input",e[3]),$(G,"input",e[4])],q=!0)},p(t,[e]){1&e&&k(i,t[0].report.good),1&e&&k(v,t[0].report.bad),1&e&&k(G,t[0].report.questions),2&e&&w(n,"completed",t[1])},i:t,o:t,d(t){t&&m(n),q=!1,r(A)}}}function Dt(t,e,n){let r,o;return i(t,K,(t=>n(0,o=t))),t.$$.update=()=>{1&t.$$.dirty&&n(1,r=""!==o.report.good||""!==o.report.bad||""!==o.report.questions)},[o,r,function(){o.report.good=this.value,K.set(o)},function(){o.report.bad=this.value,K.set(o)},function(){o.report.questions=this.value,K.set(o)}]}class Ot extends J{constructor(t){super(),R(this,t,Dt,Qt,s,{})}}function Lt(t,e,n){const r=t.slice();return r[4]=e[n],r[5]=e,r[6]=n,r}function Xt(t){let e,n,o,s,l,a,i,c,f,b,x=t[4].name+"";function _(){t[2].call(l,t[5],t[6])}function w(){t[3].call(i,t[5],t[6])}return{c(){e=p("p"),n=h(x),o=g(),s=p("div"),l=p("input"),a=g(),i=p("input"),c=g(),v(l,"type","time"),v(i,"type","date"),v(s,"class","svelte-matjr4")},m(r,m){d(r,e,m),u(e,n),d(r,o,m),d(r,s,m),u(s,l),k(l,t[4].examTime),u(s,a),u(s,i),k(i,t[4].examDate),u(s,c),f||(b=[$(l,"input",_),$(i,"input",w)],f=!0)},p(e,r){t=e,1&r&&x!==(x=t[4].name+"")&&y(n,x),1&r&&k(l,t[4].examTime),1&r&&k(i,t[4].examDate)},d(t){t&&m(e),t&&m(o),t&&m(s),f=!1,r(b)}}}function jt(e){let n,r,o,s,l,a=e[0].members,i=[];for(let t=0;t<a.length;t+=1)i[t]=Xt(Lt(e,a,t));return{c(){n=p("details"),r=p("summary"),r.textContent="Exam Order",o=g(),s=p("p"),s.textContent="Time for each",l=g();for(let t=0;t<i.length;t+=1)i[t].c();w(n,"completed",e[1])},m(t,e){d(t,n,e),u(n,r),u(n,o),u(n,s),u(n,l);for(let t=0;t<i.length;t+=1)i[t].m(n,null)},p(t,[e]){if(1&e){let r;for(a=t[0].members,r=0;r<a.length;r+=1){const o=Lt(t,a,r);i[r]?i[r].p(o,e):(i[r]=Xt(o),i[r].c(),i[r].m(n,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=a.length}2&e&&w(n,"completed",t[1])},i:t,o:t,d(t){t&&m(n),f(i,t)}}}function Ft(t,e,n){let r,o;return i(t,K,(t=>n(0,o=t))),t.$$.update=()=>{1&t.$$.dirty&&n(1,r=o.members.every((t=>t?.examTime||t?.examDate||!1)))},[o,r,function(t,e){t[e].examTime=this.value,K.set(o)},function(t,e){t[e].examDate=this.value,K.set(o)}]}class It extends J{constructor(t){super(),R(this,t,Ft,jt,s,{})}}function Wt(e){let n,r,o,s,l,a;return{c(){n=p("details"),r=p("summary"),r.textContent="Other Questions",o=g(),s=p("textarea"),v(s,"placeholder","One per line"),w(n,"completed",""!==e[0].generalQuestions)},m(t,i){d(t,n,i),u(n,r),u(n,o),u(n,s),k(s,e[0].generalQuestions),l||(a=$(s,"input",e[1]),l=!0)},p(t,[e]){1&e&&k(s,t[0].generalQuestions),1&e&&w(n,"completed",""!==t[0].generalQuestions)},i:t,o:t,d(t){t&&m(n),l=!1,a()}}}function Bt(t,e,n){let r;return i(t,K,(t=>n(0,r=t))),[r,function(){r.generalQuestions=this.value,K.set(r)}]}class zt extends J{constructor(t){super(),R(this,t,Bt,Wt,s,{})}}function Rt(e){let n,r,o,s,l,a,i,c,u,f,h,b,v,x,y,k,_,w,G,q,A,C;return n=new gt({}),o=new yt({}),l=new qt({}),i=new Ht({}),u=new Mt({props:{site:"form"}}),h=new Mt({props:{site:"dashboard"}}),v=new Ot({}),y=new It({}),_=new zt({}),{c(){I(n.$$.fragment),r=g(),I(o.$$.fragment),s=g(),I(l.$$.fragment),a=g(),I(i.$$.fragment),c=g(),I(u.$$.fragment),f=g(),I(h.$$.fragment),b=g(),I(v.$$.fragment),x=g(),I(y.$$.fragment),k=g(),I(_.$$.fragment),w=g(),G=p("button"),G.textContent="Generate Exam Helper"},m(t,m){W(n,t,m),d(t,r,m),W(o,t,m),d(t,s,m),W(l,t,m),d(t,a,m),W(i,t,m),d(t,c,m),W(u,t,m),d(t,f,m),W(h,t,m),d(t,b,m),W(v,t,m),d(t,x,m),W(y,t,m),d(t,k,m),W(_,t,m),d(t,w,m),d(t,G,m),q=!0,A||(C=$(G,"click",e[0]),A=!0)},p:t,i(t){q||(j(n.$$.fragment,t),j(o.$$.fragment,t),j(l.$$.fragment,t),j(i.$$.fragment,t),j(u.$$.fragment,t),j(h.$$.fragment,t),j(v.$$.fragment,t),j(y.$$.fragment,t),j(_.$$.fragment,t),q=!0)},o(t){F(n.$$.fragment,t),F(o.$$.fragment,t),F(l.$$.fragment,t),F(i.$$.fragment,t),F(u.$$.fragment,t),F(h.$$.fragment,t),F(v.$$.fragment,t),F(y.$$.fragment,t),F(_.$$.fragment,t),q=!1},d(t){B(n,t),t&&m(r),B(o,t),t&&m(s),B(l,t),t&&m(a),B(i,t),t&&m(c),B(u,t),t&&m(f),B(h,t),t&&m(b),B(v,t),t&&m(x),B(y,t),t&&m(k),B(_,t),t&&m(w),t&&m(G),A=!1,C()}}}function Jt(t){A((()=>{document.querySelectorAll("textarea").forEach((t=>{t.style.height=t.setAttribute("style","height: "+t.scrollHeight+"px"),t.classList.add("auto"),t.addEventListener("input",(e=>{t.style.height="auto",t.style.height=t.scrollHeight+"px"}))}))}));return[()=>Y.next()]}class Pt extends J{constructor(t){super(),R(this,t,Jt,Rt,s,{})}}function Vt(t){return t?t.replace(/\n/g,"<br />"):t}function Yt(t,e,n){let r;i(t,K,(t=>n(0,r=t)));const o=`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <link\n      rel="stylesheet"\n      href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"\n    />\n  <title>${r.group_number}-${r.group_name}-exam-helper</title>\n</head>\n<body>\n    <main class="container">\n        <h1>${r.group_number}-${r.group_name}</h1>\n        <section>\n            <h2>Links</h2>\n            <div class="grid gap1 col2">\n                <ul>\n                    \n                    <li><a href="${r.links.form}">Form</a></li>\n                    <li><a href="${r.links.formGH}">GitHub</a></li>\n                </ul>\n                <ul>\n                    \n                    <li><a href="${r.links.dashboard}">Dashboard</a></li>\n                    <li><a href="${r.links.dashboardGH}">GitHub</a></li>\n                </ul>\n            </div>\n        </section>\n        <section class="grid col2 gap1">\n            <div>\n                <h2>The form</h2>\n                <table>\n                    <tr>\n                        <th>Name</th><th>Value</th><th>Comments</th>\n                    </tr>\n                    <tr>\n                        <td>Works</td>\n                        <td>${r.form.works.grade}</td>\n                        <td>${Vt(r.form.works.comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>Looks Good</td>\n                        <td>${r.form["looks good"].grade}</td>\n                        <td>${Vt(r.form["looks good"].comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>UX</td>\n                        <td>${r.form.UX.grade}</td>\n                        <td>${Vt(r.form.UX.comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>responsiveness</td>\n                        <td>${r.form.responsiveness.grade}</td>\n                        <td>${Vt(r.form.responsiveness.comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>feel factor</td>\n                        <td>${r.form["feel factor"].grade}</td>\n                        <td>${Vt(r.form["feel factor"].comment)}</td>\n                    </tr>\n                </table>\n            </div>\n            <div>\n                <h2>The Dashboard (${r.targetAudience})</h2>\n                <table>\n                    <tr>\n                        <th>Name</th><th>Value</th><th>Comments</th>\n                    </tr>\n                    <tr>\n                        <td>Works</td>\n                        <td>${r.dashboard.works.grade}</td>\n                        <td>${Vt(r.dashboard.works.comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>Looks Good</td>\n                        <td>${r.dashboard["looks good"].grade}</td>\n                        <td>${Vt(r.dashboard["looks good"].comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>UX</td>\n                        <td>${r.dashboard.UX.grade}</td>\n                        <td>${Vt(r.dashboard.UX.comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>responsiveness</td>\n                        <td>${r.dashboard.responsiveness.grade}</td>\n                        <td>${Vt(r.dashboard.responsiveness.comment)}</td>\n                    </tr>\n                    <tr>\n                        <td>feel factor</td>\n                        <td>${r.dashboard["feel factor"].grade}</td>\n                        <td>${Vt(r.dashboard["feel factor"].comment)}</td>\n                    </tr>\n                </table>\n            </div>\n        </section>\n        <section>\n            <h2>The report</h2>\n            <div class="grid col2 gap1">\n                <div>\n                    <h3>Good</h3>\n                    <p>${Vt(r.report.good)}</p>\n                </div>\n                <div>\n                    <h3>Bad</h3>\n                    <p>${Vt(r.report.bad)}</p>\n                </div>\n            </div>\n        </section>\n        <section>\n            <h2>Extras TODO: inline list (list-style-type:inside?</h2>\n            <ol>\n                ${r.extras.split("\n").map((t=>`<li>${t}</li>`)).join("")}\n            </ol>\n            \n        </section>\n        <section>\n            <h2>Members</h2>\n            <div class="grid col2 gap1">\n                ${[...r.members].sort(((t,e)=>t.examTime>e.examTime)).map((t=>`\n                        <article>\n                            <h3>${t.name}</h3>\n                            <p>${t.examDate} - ${t.examTime}</p>\n                            <dl>\n                                <dt>Screencast</dt>\n                                <dd><a href="${t.screencast}">Watch</a></dd>\n                                <dt>Notes</dt>\n                                <dd>${Vt(t.screencastNotes)}</dd>\n                                <dt>Tasks</dt>\n                                <dd>${Vt(t.tasks)}</dd>\n                                <dt>Questions</dt>\n                                <dd>${Vt(t.questions.screencast)}</dd>\n                            </dl>\n                        </article>\n                    `)).join("")}\n            </div>\n        </section>\n        <section>\n            <h2>Questions</h2>\n            <div class="grid col2 gap1">\n                <div>\n                    <h3>Report</h3>\n                    <ul>\n                        ${r.report.questions.split("\n").map((t=>`<li>${t}</li>`)).join("")}\n                    </ul>\n                </div>\n                <div>\n                    <h3>General</h3>\n                    <ul>\n                        ${r.generalQuestions.split("\n").map((t=>`<li>${t}</li>`)).join("")}\n                    </ul>\n                </div>\n            </div>\n        </section>\n    </main>\n    <style>\n        h1,h2,h3,h4,h5,h6 {\n            --typography-spacing-vertical:1rem;\n        }\n        article {\n            --block-spacing-vertical:1rem;\n        }\n        .col2 {\n            grid-template-columns: 1fr 1fr;\n        }\n        .gap1 {\n            gap:1rem;\n        }\n        .grid {\n            display:grid;\n        }\n        .full {\n            grid-column: 1/-1;\n        }\n    </style>\n</body>\n</html>`;return function(t,e){const n=document.createElement("a");n.setAttribute("href","data:text/html;charset=utf-8,"+encodeURIComponent(e)),n.setAttribute("download",t),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}(`${r.group_number}-${r.group_name}-exam-helper.html`,o),[]}class Kt extends J{constructor(t){super(),R(this,t,Yt,null,s,{})}}function Zt(t){let e,n;return e=new Kt({}),{c(){I(e.$$.fragment)},m(t,r){W(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function te(t){let e,n;return e=new Pt({}),{c(){I(e.$$.fragment)},m(t,r){W(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function ee(t){let e,n;return e=new ft({}),{c(){I(e.$$.fragment)},m(t,r){W(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function ne(t){let e,n;return e=new st({}),{c(){I(e.$$.fragment)},m(t,r){W(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function re(t){let e,n;return e=new et({}),{c(){I(e.$$.fragment)},m(t,r){W(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function oe(t){let e,n,o,s,l,a,i,c,f,b,x,k,_,w,G;const q=[re,ne,ee,te,Zt],A=[];function C(t,e){return 1===t[0]?0:2===t[0]?1:3===t[0]?2:4===t[0]?3:5===t[0]?4:-1}return~(i=C(t))&&(c=A[i]=q[i](t)),{c(){e=p("main"),n=p("h1"),o=h("At step "),s=h(t[0]),l=h("/5"),a=g(),c&&c.c(),f=g(),b=p("button"),x=h("Back"),v(b,"class","secondary outline"),b.disabled=k=1===t[0],v(e,"class","container")},m(r,c){d(r,e,c),u(e,n),u(n,o),u(n,s),u(n,l),u(e,a),~i&&A[i].m(e,null),u(e,f),u(e,b),u(b,x),_=!0,w||(G=$(b,"click",t[1]),w=!0)},p(t,[n]){(!_||1&n)&&y(s,t[0]);let o=i;i=C(t),i!==o&&(c&&(X={r:0,c:[],p:X},F(A[o],1,1,(()=>{A[o]=null})),X.r||r(X.c),X=X.p),~i?(c=A[i],c||(c=A[i]=q[i](t),c.c()),j(c,1),c.m(e,f)):c=null),(!_||1&n&&k!==(k=1===t[0]))&&(b.disabled=k)},i(t){_||(j(c),_=!0)},o(t){F(c),_=!1},d(t){t&&m(e),~i&&A[i].d(),w=!1,G()}}}function se(t,e,n){let r;i(t,Y,(t=>n(0,r=t)));return[r,()=>Y.prev()]}return new class extends J{constructor(t){super(),R(this,t,se,oe,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
