import{c as I,s as J}from"./singletons.4ea93a2b.js";import{s as K,v,e as O,d as L,f as Q,w as S,x as R,y as T,z as V,A as W,B as d,C as X,u as Y,D as Z,E as y,F as x,G as $}from"./scheduler.44c94a43.js";import{S as ss,i as es,b as w,d as ts,m as M,t as h,c as ns,a as E,e as A,g as os}from"./index.76cb3056.js";import{S as D,c as B,g as as,a as P,f as cs}from"./LocalizedLink.cb3625fd.js";const ps=I("goto"),N=()=>{const e=J;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},bs={subscribe(e){return N().page.subscribe(e)}},ds={subscribe(e){return N().navigating.subscribe(e)}};function rs(e){let s;const n=e[11].default,a=Z(n,e,e[13],null);return{c(){a&&a.c()},l(c){a&&a.l(c)},m(c,i){a&&a.m(c,i),s=!0},p(c,i){a&&a.p&&(!s||i&8192)&&y(a,n,c,c[13],s?$(n,c[13],i,null):x(c[13]),null)},i(c){s||(E(a,c),s=!0)},o(c){h(a,c),s=!1},d(c){a&&a.d(c)}}}function is(e){let s,n,a;const c=[{tag:e[3]},{use:[e[8],...e[0]]},{class:B({[e[1]]:!0,[e[6]]:!0,...e[5]})},e[7],e[9]];var i=e[2];function f(t){let r={$$slots:{default:[rs]},$$scope:{ctx:t}};for(let u=0;u<c.length;u+=1)r=d(r,c[u]);return{props:r}}return i&&(s=v(i,f(e)),e[12](s)),{c(){s&&w(s.$$.fragment),n=O()},l(t){s&&ts(s.$$.fragment,t),n=O()},m(t,r){s&&M(s,t,r),L(t,n,r),a=!0},p(t,[r]){const u=r&1003?as(c,[r&8&&{tag:t[3]},r&257&&{use:[t[8],...t[0]]},r&98&&{class:B({[t[1]]:!0,[t[6]]:!0,...t[5]})},r&128&&P(t[7]),r&512&&P(t[9])]):{};if(r&8192&&(u.$$scope={dirty:r,ctx:t}),r&4&&i!==(i=t[2])){if(s){os();const g=s;h(g.$$.fragment,1,0,()=>{A(g,1)}),ns()}i?(s=v(i,f(t)),t[12](s),w(s.$$.fragment),E(s.$$.fragment,1),M(s,n.parentNode,n)):s=null}else i&&s.$set(u)},i(t){a||(s&&E(s.$$.fragment,t),a=!0)},o(t){s&&h(s.$$.fragment,t),a=!1},d(t){t&&Q(n),e[12](null),s&&A(s,t)}}}const l={component:D,tag:"div",class:"",classMap:{},contexts:{},props:{}};function us(e,s,n){const a=["use","class","component","tag","getElement"];let c=S(s,a),{$$slots:i={},$$scope:f}=s,{use:t=[]}=s,{class:r=""}=s,u;const g=l.class,m={},C=[],_=l.contexts,q=l.props;let{component:p=l.component}=s,{tag:j=p===D?l.tag:void 0}=s;Object.entries(l.classMap).forEach(([o,U])=>{const b=R(U);b&&"subscribe"in b&&C.push(b.subscribe(H=>{n(5,m[o]=H,m)}))});const z=cs(T());for(let o in _)_.hasOwnProperty(o)&&V(o,_[o]);W(()=>{for(const o of C)o()});function F(){return u.getElement()}function G(o){Y[o?"unshift":"push"](()=>{u=o,n(4,u)})}return e.$$set=o=>{s=d(d({},s),X(o)),n(9,c=S(s,a)),"use"in o&&n(0,t=o.use),"class"in o&&n(1,r=o.class),"component"in o&&n(2,p=o.component),"tag"in o&&n(3,j=o.tag),"$$scope"in o&&n(13,f=o.$$scope)},[t,r,p,j,u,m,g,q,z,c,F,i,G,f]}class ls extends ss{constructor(s){super(),es(this,s,us,is,K,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const k=Object.assign({},l);function hs(e){return new Proxy(ls,{construct:function(s,n){return Object.assign(l,k,e),new s(...n)},get:function(s,n){return Object.assign(l,k,e),s[n]}})}export{hs as c,ps as g,ds as n,bs as p};
