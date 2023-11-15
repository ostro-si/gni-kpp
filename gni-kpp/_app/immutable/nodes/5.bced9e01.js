import{i as Ee,p as Me,d as Ve}from"../chunks/icon-network.12935068.js";import{p as Le,e as N,u as Z,h as we,t as C,i as X,o as Pe,j as re,k as Ne}from"../chunks/LocalizedLink.a941910e.js";import{s as G,u as Te,h as I,b as j,j as D,k as V,f as p,c as z,l as y,I as Se,d as $,J as M,K as je,n as K,L as F,t as x,p as ee,M as Q,m as J,N as ze,q as te,e as P,O as Be,P as Oe,Q as Ye,R as Ie}from"../chunks/scheduler.44c94a43.js";import{S as le,i as ie,f as He,b as O,d as Y,m as H,g as T,t as g,c as S,a as m,e as q}from"../chunks/index.76cb3056.js";import{S as qe,P as De}from"../chunks/Scrolly.d44c94b8.js";import{l as ne,t as Ae}from"../chunks/translations.4ab89c90.js";import"../chunks/paths.0db48f8c.js";import{m as Ce,a as Fe,P as Ge,T as Re}from"../chunks/Timeline.d0d1a9cc.js";function Je(f,e,l){f=+f,e=+e,l=(o=arguments.length)<2?(e=f,f=0,1):o<3?1:+l;for(var t=-1,o=Math.max(0,Math.ceil((e-f)/l))|0,i=new Array(o);++t<o;)i[t]=f+t*l;return i}async function Ke({params:f}){const{id:e}=f,l=Ee[e],t=l.map(({person_id:i})=>Le.find(a=>a.id===i)),o=Me.find(({id:i})=>e===i);return{affiliations:l,associatedPeople:t,partyData:o}}const dt=Object.freeze(Object.defineProperty({__proto__:null,load:Ke},Symbol.toStringTag,{value:"Module"}));function ae(f,e,l){const t=f.slice();return t[16]=e[l],t}function fe(f,e,l){const t=f.slice();return t[19]=e[l],t[21]=l,t}function ce(f,e,l){const t=f.slice();return t[19]=e[l],t}function ue(f,e){let l,t="",o;return{key:f,first:null,c(){l=I("div"),l.innerHTML=t,this.h()},l(i){l=D(i,"DIV",{class:!0,"data-svelte-h":!0}),Be(l)!=="svelte-1740ud7"&&(l.innerHTML=t),this.h()},h(){y(l,"class","step svelte-18a2al9"),Oe(()=>e[12].call(l)),Q(l,"active",e[19]===e[0]),this.first=l},m(i,a){$(i,l,a),o=Ye(l,e[12].bind(l))},p(i,a){e=i,a&9&&Q(l,"active",e[19]===e[0])},d(i){i&&p(l),o()}}}function Qe(f){let e=[],l=new Map,t,o=N(f[3]);const i=a=>a[19];for(let a=0;a<o.length;a+=1){let s=ce(f,o,a),n=i(s);l.set(n,e[a]=ue(n,s))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=P()},l(a){for(let s=0;s<e.length;s+=1)e[s].l(a);t=P()},m(a,s){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(a,s);$(a,t,s)},p(a,s){s&13&&(o=N(a[3]),e=Z(e,s,i,1,a,o,l,t.parentNode,we,ue,t,ce))},d(a){a&&p(t);for(let s=0;s<e.length;s+=1)e[s].d(a)}}}function _e(f,e){let l,t=e[19]+"",o,i,a,s;function n(){return e[14](e[21])}return{key:f,first:null,c(){l=I("div"),o=x(t),i=j(),this.h()},l(r){l=D(r,"DIV",{class:!0});var c=V(l);o=ee(c,t),i=z(c),c.forEach(p),this.h()},h(){y(l,"class","year svelte-18a2al9"),Q(l,"selected",+e[19]===e[0]),J(l,"top",`${(e[19]-e[0])*10}vh`),J(l,"opacity",1-Math.abs(e[0]-e[19])*.2),this.first=l},m(r,c){$(r,l,c),M(l,o),M(l,i),a||(s=ze(l,"click",n),a=!0)},p(r,c){e=r,c&8&&t!==(t=e[19]+"")&&te(o,t),c&9&&Q(l,"selected",+e[19]===e[0]),c&9&&J(l,"top",`${(e[19]-e[0])*10}vh`),c&9&&J(l,"opacity",1-Math.abs(e[0]-e[19])*.2)},d(r){r&&p(l),a=!1,s()}}}function Ue(f){let e,l=f[5]("None")+"",t;return{c(){e=I("div"),t=x(l),this.h()},l(o){e=D(o,"DIV",{class:!0});var i=V(e);t=ee(i,l),i.forEach(p),this.h()},h(){y(e,"class","placeholder svelte-18a2al9")},m(o,i){$(o,e,i),M(e,t)},p(o,i){i&32&&l!==(l=o[5]("None")+"")&&te(t,l)},i:K,o:K,d(o){o&&p(e)}}}function We(f){let e=[],l=new Map,t,o,i=N(X(f[4],"person_id"));const a=s=>s[16].person_id;for(let s=0;s<i.length;s+=1){let n=ae(f,i,s),r=a(n);l.set(r,e[s]=pe(r,n))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=P()},l(s){for(let n=0;n<e.length;n+=1)e[n].l(s);t=P()},m(s,n){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(s,n);$(s,t,n),o=!0},p(s,n){n&144&&(i=N(X(s[4],"person_id")),T(),e=Z(e,n,a,1,s,i,l,t.parentNode,Pe,pe,t,ae),S())},i(s){if(!o){for(let n=0;n<i.length;n+=1)m(e[n]);o=!0}},o(s){for(let n=0;n<e.length;n+=1)g(e[n]);o=!1},d(s){s&&p(t);for(let n=0;n<e.length;n+=1)e[n].d(s)}}}function pe(f,e){let l,t,o,i;return t=new De({props:{clickable:!0,position:e[16].curr_position,subheading:e[7](e[16]),id:e[16].person_id,name:e[16].person_name,image_link:e[16].image_link,size:"medium",coloredText:!0}}),{key:f,first:null,c(){l=I("div"),O(t.$$.fragment),o=j(),this.h()},l(a){l=D(a,"DIV",{class:!0});var s=V(l);Y(t.$$.fragment,s),o=z(s),s.forEach(p),this.h()},h(){y(l,"class","person_label svelte-18a2al9"),this.first=l},m(a,s){$(a,l,s),H(t,l,null),M(l,o),i=!0},p(a,s){e=a;const n={};s&16&&(n.position=e[16].curr_position),s&16&&(n.subheading=e[7](e[16])),s&16&&(n.id=e[16].person_id),s&16&&(n.name=e[16].person_name),s&16&&(n.image_link=e[16].image_link),t.$set(n)},i(a){i||(m(t.$$.fragment,a),i=!0)},o(a){g(t.$$.fragment,a),i=!1},d(a){a&&p(l),q(t)}}}function me(f){let e,l,t,o;const i=[We,Ue],a=[];function s(n,r){return n[4]?0:1}return l=s(f),t=a[l]=i[l](f),{c(){e=I("div"),t.c(),this.h()},l(n){e=D(n,"DIV",{class:!0});var r=V(e);t.l(r),r.forEach(p),this.h()},h(){y(e,"class","item")},m(n,r){$(n,e,r),a[l].m(e,null),o=!0},p(n,r){let c=l;l=s(n),l===c?a[l].p(n,r):(T(),g(a[c],1,1,()=>{a[c]=null}),S(),t=a[l],t?t.p(n,r):(t=a[l]=i[l](n),t.c()),m(t,1),t.m(e,null))},i(n){o||(m(t),o=!0)},o(n){g(t),o=!1},d(n){n&&p(e),a[l].d()}}}function Xe(f){let e,l,t,o,i,a,s,n,r,c=[],E=new Map,_,h,d=f[0],L;function B(u){f[13](u)}let R={$$slots:{default:[Qe]},$$scope:{ctx:f}};f[1]!==void 0&&(R.value=f[1]),l=new qe({props:R}),Te.push(()=>He(l,"value",B));let A=N(f[3]);const k=u=>u[19];for(let u=0;u<A.length;u+=1){let b=fe(f,A,u),w=k(b);E.set(w,c[u]=_e(w,b))}let v=me(f);return{c(){e=I("div"),O(l.$$.fragment),o=j(),i=I("img"),s=j(),n=I("div"),r=I("div");for(let u=0;u<c.length;u+=1)c[u].c();_=j(),h=I("div"),v.c(),this.h()},l(u){e=D(u,"DIV",{class:!0});var b=V(e);Y(l.$$.fragment,b),b.forEach(p),o=z(u),i=D(u,"IMG",{class:!0,src:!0,alt:!0}),s=z(u),n=D(u,"DIV",{class:!0});var w=V(n);r=D(w,"DIV",{class:!0});var oe=V(r);for(let U=0;U<c.length;U+=1)c[U].l(oe);oe.forEach(p),_=z(w),h=D(w,"DIV",{class:!0});var se=V(h);v.l(se),se.forEach(p),w.forEach(p),this.h()},h(){y(e,"class","scroll-tracker"),y(i,"class","icon svelte-18a2al9"),Se(i.src,a=Ve)||y(i,"src",a),y(i,"alt","down"),y(r,"class","left-scroll svelte-18a2al9"),y(h,"class","right-scroll svelte-18a2al9"),y(n,"class","container svelte-18a2al9")},m(u,b){$(u,e,b),H(l,e,null),$(u,o,b),$(u,i,b),$(u,s,b),$(u,n,b),M(n,r);for(let w=0;w<c.length;w+=1)c[w]&&c[w].m(r,null);M(n,_),M(n,h),v.m(h,null),L=!0},p(u,[b]){const w={};b&16777229&&(w.$$scope={dirty:b,ctx:u}),!t&&b&2&&(t=!0,w.value=u[1],je(()=>t=!1)),l.$set(w),b&73&&(A=N(u[3]),c=Z(c,b,k,1,u,A,E,r,we,_e,null,fe)),b&1&&G(d,d=u[0])?(T(),g(v,1,1,K),S(),v=me(u),v.c(),m(v,1),v.m(h,null)):v.p(u,b)},i(u){L||(m(l.$$.fragment,u),m(v),L=!0)},o(u){g(l.$$.fragment,u),g(v),L=!1},d(u){u&&(p(e),p(o),p(i),p(s),p(n)),q(l);for(let b=0;b<c.length;b+=1)c[b].d();v.d(u)}}}function Ze(f,e,l){let t,o,i;F(f,ne,k=>l(15,o=k)),F(f,Ae,k=>l(5,i=k));let{items:a}=e,s={},n,r,c,E,_,h=[];const d=k=>{window.scrollTo({top:_*k,behavior:"smooth"})},L=k=>{const v=C(k,"position",o),u=C(k,"institution_department",o);return u!=null&&u.length?`${v}, ${u}`:v};function B(){_=this.clientHeight,l(2,_)}function R(k){E=k,l(1,E)}const A=k=>d(k);return f.$$set=k=>{"items"in k&&l(8,a=k.items)},f.$$.update=()=>{f.$$.dirty&3840&&(a.forEach(k=>{for(let v=+k.start_year;v<=+k.end_year;v++)v in s?s[+v].push(k):l(9,s[+v]=[k],s)}),l(10,r=+Ce(Object.keys(s))),l(11,c=+Fe(Object.keys(s))),l(11,c=Math.min(new Date().getFullYear(),c)),l(3,h=Je(r,c))),f.$$.dirty&1026&&l(0,n=r+E),f.$$.dirty&513&&l(4,t=s[n])},[n,E,_,h,t,i,d,L,a,s,r,c,B,R,A]}class xe extends le{constructor(e){super(),ie(this,e,Ze,Xe,G,{items:8})}}function he(f,e,l){const t=f.slice();return t[5]=e[l].type,t[6]=e[l].items,t}function de(f,e,l){const t=f.slice();t[10]=e[l].person_id;const o=t[0].find(function(...a){return f[4](t[10],...a)});return t[11]=o,t}function W(f){const e=f.slice(),l=e[2]!=="si"&&e[6][0].affiliation_type_en?e[6][0].affiliation_type_en:e[5];return e[9]=l,e}function ge(f){let e,l,t=f[9]+"",o,i,a,s,n,r=N(f[6]),c=[];for(let _=0;_<r.length;_+=1)c[_]=ke(de(f,r,_));const E=_=>g(c[_],1,1,()=>{c[_]=null});return{c(){e=I("div"),l=I("div"),o=x(t),i=j(),a=I("div");for(let _=0;_<c.length;_+=1)c[_].c();s=j(),this.h()},l(_){e=D(_,"DIV",{class:!0});var h=V(e);l=D(h,"DIV",{class:!0});var d=V(l);o=ee(d,t),d.forEach(p),i=z(h),a=D(h,"DIV",{class:!0});var L=V(a);for(let B=0;B<c.length;B+=1)c[B].l(L);L.forEach(p),s=z(h),h.forEach(p),this.h()},h(){y(l,"class","left svelte-b2i9to"),y(a,"class","right svelte-b2i9to"),y(e,"class","container svelte-b2i9to")},m(_,h){$(_,e,h),M(e,l),M(l,o),M(e,i),M(e,a);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(a,null);M(e,s),n=!0},p(_,h){if((!n||h&6)&&t!==(t=_[9]+"")&&te(o,t),h&3){r=N(_[6]);let d;for(d=0;d<r.length;d+=1){const L=de(_,r,d);c[d]?(c[d].p(L,h),m(c[d],1)):(c[d]=ke(L),c[d].c(),m(c[d],1),c[d].m(a,null))}for(T(),d=r.length;d<c.length;d+=1)E(d);S()}},i(_){if(!n){for(let h=0;h<r.length;h+=1)m(c[h]);n=!0}},o(_){c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)g(c[h]);n=!1},d(_){_&&p(e),Ie(c,_)}}}function ke(f){let e,l;return e=new De({props:{id:f[10],image_link:f[11].image_link,imagePlaceholder:re(f[11].person_name),position:f[11].position,size:"small",clickable:!0}}),{c(){O(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,o){H(e,t,o),l=!0},p(t,o){const i={};o&2&&(i.id=t[10]),o&3&&(i.image_link=t[11].image_link),o&3&&(i.imagePlaceholder=re(t[11].person_name)),o&3&&(i.position=t[11].position),e.$set(i)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function be(f){let e,l,t=!!f[5]&&ge(W(f));return{c(){t&&t.c(),e=P()},l(o){t&&t.l(o),e=P()},m(o,i){t&&t.m(o,i),$(o,e,i),l=!0},p(o,i){o[5]?t?(t.p(W(o),i),i&2&&m(t,1)):(t=ge(W(o)),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(T(),g(t,1,1,()=>{t=null}),S())},i(o){l||(m(t),l=!0)},o(o){g(t),l=!1},d(o){o&&p(e),t&&t.d(o)}}}function et(f){let e,l,t,o=N(f[1]),i=[];for(let s=0;s<o.length;s+=1)i[s]=be(he(f,o,s));const a=s=>g(i[s],1,1,()=>{i[s]=null});return{c(){e=I("div"),l=I("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=D(s,"DIV",{class:!0});var n=V(e);l=D(n,"DIV",{class:!0});var r=V(l);for(let c=0;c<i.length;c+=1)i[c].l(r);r.forEach(p),n.forEach(p),this.h()},h(){y(l,"class","outer-container svelte-b2i9to"),y(e,"class","institution-breakdown mobile-hide svelte-b2i9to")},m(s,n){$(s,e,n),M(e,l);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(l,null);t=!0},p(s,[n]){if(n&7){o=N(s[1]);let r;for(r=0;r<o.length;r+=1){const c=he(s,o,r);i[r]?(i[r].p(c,n),m(i[r],1)):(i[r]=be(c),i[r].c(),m(i[r],1),i[r].m(l,null))}for(T(),r=o.length;r<i.length;r+=1)a(r);S()}},i(s){if(!t){for(let n=0;n<o.length;n+=1)m(i[n]);t=!0}},o(s){i=i.filter(Boolean);for(let n=0;n<i.length;n+=1)g(i[n]);t=!1},d(s){s&&p(e),Ie(i,s)}}}function tt(f,e,l){let t,o;F(f,ne,n=>l(2,o=n));let{affiliations:i}=e,{peopleLookup:a}=e;console.log(i);const s=(n,{id:r})=>r===n;return f.$$set=n=>{"affiliations"in n&&l(3,i=n.affiliations),"peopleLookup"in n&&l(0,a=n.peopleLookup)},f.$$.update=()=>{f.$$.dirty&8&&l(1,t=Object.entries(i).map(([n,r])=>({type:n,items:X(r,"person_id")})).sort((n,r)=>n.items.length>r.items.length?-1:1))},[a,t,o,i,s]}class lt extends le{constructor(e){super(),ie(this,e,tt,et,G,{affiliations:3,peopleLookup:0})}}function ve(f){let e,l;return e=new lt({props:{affiliations:f[0].partyData.affiliations,peopleLookup:f[0].associatedPeople}}),{c(){O(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,o){H(e,t,o),l=!0},p(t,o){const i={};o&1&&(i.affiliations=t[0].partyData.affiliations),o&1&&(i.peopleLookup=t[0].associatedPeople),e.$set(i)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function $e(f){let e,l,t,o;const i=[nt,it],a=[];function s(n,r){return n[3]==="mobile"?0:1}return e=s(f),l=a[e]=i[e](f),{c(){l.c(),t=P()},l(n){l.l(n),t=P()},m(n,r){a[e].m(n,r),$(n,t,r),o=!0},p(n,r){let c=e;e=s(n),e===c?a[e].p(n,r):(T(),g(a[c],1,1,()=>{a[c]=null}),S(),l=a[e],l?l.p(n,r):(l=a[e]=i[e](n),l.c()),m(l,1),l.m(t.parentNode,t))},i(n){o||(m(l),o=!0)},o(n){g(l),o=!1},d(n){n&&p(t),a[e].d(n)}}}function it(f){let e,l;return e=new Re({props:{items:f[0].affiliations,rowGroupingVar:"person_name",getItemLink:st,getItemLabel:f[4]}}),{c(){O(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,o){H(e,t,o),l=!0},p(t,o){const i={};o&1&&(i.items=t[0].affiliations),o&1&&(i.getItemLabel=t[4]),e.$set(i)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function nt(f){let e,l;return e=new xe({props:{items:f[0].affiliations}}),{c(){O(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,o){H(e,t,o),l=!0},p(t,o){const i={};o&1&&(i.items=t[0].affiliations),e.$set(i)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function ye(f){var n;let e,l,t,o,i;e=new Ge({props:{title:C((n=f[0].affiliations)==null?void 0:n[0],"institution",f[1]),notes:f[2],background:"#E6E6EB"}});let a=f[0].partyData&&ve(f),s=f[3]&&$e(f);return{c(){O(e.$$.fragment),l=j(),a&&a.c(),t=j(),s&&s.c(),o=P()},l(r){Y(e.$$.fragment,r),l=z(r),a&&a.l(r),t=z(r),s&&s.l(r),o=P()},m(r,c){H(e,r,c),$(r,l,c),a&&a.m(r,c),$(r,t,c),s&&s.m(r,c),$(r,o,c),i=!0},p(r,c){var _;const E={};c&3&&(E.title=C((_=r[0].affiliations)==null?void 0:_[0],"institution",r[1])),c&4&&(E.notes=r[2]),e.$set(E),r[0].partyData?a?(a.p(r,c),c&1&&m(a,1)):(a=ve(r),a.c(),m(a,1),a.m(t.parentNode,t)):a&&(T(),g(a,1,1,()=>{a=null}),S()),r[3]?s?(s.p(r,c),c&8&&m(s,1)):(s=$e(r),s.c(),m(s,1),s.m(o.parentNode,o)):s&&(T(),g(s,1,1,()=>{s=null}),S())},i(r){i||(m(e.$$.fragment,r),m(a),m(s),i=!0)},o(r){g(e.$$.fragment,r),g(a),g(s),i=!1},d(r){r&&(p(l),p(t),p(o)),q(e,r),a&&a.d(r),s&&s.d(r)}}}function ot(f){let e=f[0].route,l,t,o=ye(f);return{c(){o.c(),l=P()},l(i){o.l(i),l=P()},m(i,a){o.m(i,a),$(i,l,a),t=!0},p(i,[a]){a&1&&G(e,e=i[0].route)?(T(),g(o,1,1,K),S(),o=ye(i),o.c(),m(o,1),o.m(l.parentNode,l)):o.p(i,a)},i(i){t||(m(o),t=!0)},o(i){g(o),t=!1},d(i){i&&p(l),o.d(i)}}}const st=({person_id:f})=>`/people/${f}`;function rt(f,e,l){let t,o;F(f,ne,n=>l(1,t=n)),F(f,Ne,n=>l(3,o=n));let{data:i}=e,a;const s=({person_id:n})=>i.associatedPeople.find(({id:c})=>c===n);return f.$$set=n=>{"data"in n&&l(0,i=n.data)},f.$$.update=()=>{if(f.$$.dirty&3){const n=i.affiliations.map(r=>C(r,"notes_institution",t)).filter(r=>(r==null?void 0:r.length)>0);l(2,a=[...new Set(n)])}},[i,t,a,o,s]}class gt extends le{constructor(e){super(),ie(this,e,rt,ot,G,{data:0})}}export{gt as component,dt as universal};