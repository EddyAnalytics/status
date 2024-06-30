import{S as t,i as e,s as a,r as n,a as r,e as i,m as s,K as l,f as c,c as o,b as d,d as m,n as u,g as h,h as f,p,j as $,t as g,k as D,l as v,o as E,L as w,I as T,A as b,q as A,u as L,v as S,w as _,x as O,y,z as M}from"./client.b2ab2d2e.js";import{c as x,a as C,h as H,L as I}from"./createOctokit.8376916f.js";function R(t,e,a){const n=t.slice();return n[9]=e[a],n}function N(t){let e,a,l,$,g,D=t[4].title+"",v=("closed"===t[4].state?t[4].metadata.start?n.i18n.incidentCompleted:n.i18n.incidentFixed:t[4].metadata.start?n.i18n.incidentScheduled:n.i18n.incidentOngoing)+"";return{c(){e=s(D),a=r(),l=i("span"),$=s(v),this.h()},l(t){e=u(t,D),a=o(t),l=d(t,"SPAN",{class:!0});var n=m(l);$=u(n,v),n.forEach(c),this.h()},h(){h(l,"class",g=T(`tag ${t[4].state}`)+" svelte-4o16l6")},m(t,n){f(t,e,n),f(t,a,n),f(t,l,n),p(l,$)},p(t,a){16&a&&D!==(D=t[4].title+"")&&b(e,D),16&a&&v!==(v=("closed"===t[4].state?t[4].metadata.start?n.i18n.incidentCompleted:n.i18n.incidentFixed:t[4].metadata.start?n.i18n.incidentScheduled:n.i18n.incidentOngoing)+"")&&b($,v),16&a&&g!==(g=T(`tag ${t[4].state}`)+" svelte-4o16l6")&&h(l,"class",g)},d(t){t&&c(e),t&&c(a),t&&c(l)}}}function U(t){let e,a=n.i18n.incidentDetails+"";return{c(){e=s(a)},l(t){e=u(t,a)},m(t,a){f(t,e,a)},p:A,d(t){t&&c(e)}}}function V(t){let e,a,l,$,g,D,v,E,w,T,b,_=n.i18n.incidentViewOnGitHub+"";function O(t,e){return t[4].metadata.start?B:k}let y=O(t),M=y(t);function x(t,e){return t[4].metadata.start&&t[4].metadata.end?P:t[4].closed_at?F:void 0}let C=x(t),H=C&&C(t),I=t[3],N=[];for(let e=0;e<I.length;e+=1)N[e]=q(R(t,I,e));return{c(){e=i("div"),a=i("dl"),M.c(),l=L(),H&&H.c(),$=r(),g=i("div"),D=i("p"),v=i("a"),E=s(_),T=r();for(let t=0;t<N.length;t+=1)N[t].c();b=L(),this.h()},l(t){e=d(t,"DIV",{class:!0});var n=m(e);a=d(n,"DL",{});var r=m(a);M.l(r),l=L(),H&&H.l(r),r.forEach(c),$=o(n),g=d(n,"DIV",{class:!0});var i=m(g);D=d(i,"P",{class:!0});var s=m(D);v=d(s,"A",{href:!0});var h=m(v);E=u(h,_),h.forEach(c),s.forEach(c),i.forEach(c),n.forEach(c),T=o(t);for(let e=0;e<N.length;e+=1)N[e].l(t);b=L(),this.h()},h(){h(v,"href",w=`https://github.com/${n.owner}/${n.repo}/issues/${t[0]}`),h(D,"class","svelte-4o16l6"),h(g,"class","r svelte-4o16l6"),h(e,"class","f")},m(t,n){f(t,e,n),p(e,a),M.m(a,null),p(a,l),H&&H.m(a,null),p(e,$),p(e,g),p(g,D),p(D,v),p(v,E),f(t,T,n);for(let e=0;e<N.length;e+=1)N[e]&&N[e].m(t,n);f(t,b,n)},p(t,e){if(y===(y=O(t))&&M?M.p(t,e):(M.d(1),M=y(t),M&&(M.c(),M.m(a,l))),C===(C=x(t))&&H?H.p(t,e):(H&&H.d(1),H=C&&C(t),H&&(H.c(),H.m(a,null))),1&e&&w!==(w=`https://github.com/${n.owner}/${n.repo}/issues/${t[0]}`)&&h(v,"href",w),40&e){let a;for(I=t[3],a=0;a<I.length;a+=1){const n=R(t,I,a);N[a]?N[a].p(n,e):(N[a]=q(n),N[a].c(),N[a].m(b.parentNode,b))}for(;a<N.length;a+=1)N[a].d(1);N.length=I.length}},i:A,o:A,d(t){t&&c(e),M.d(),H&&H.d(),t&&c(T),S(N,t),t&&c(b)}}}function j(t){let e,a;return e=new I({}),{c(){_(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){y(e,t,n),a=!0},p:A,i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){M(e,t)}}}function k(t){let e,a,r,l,o=n.i18n.incidentOpenedAt+"",h=new Date(t[4].created_at).toLocaleString(n.i18n.locale)+"";return{c(){e=i("dt"),a=s(o),r=i("dd"),l=s(h)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,o),n.forEach(c),r=d(t,"DD",{});var i=m(r);l=u(i,h),i.forEach(c)},m(t,n){f(t,e,n),p(e,a),f(t,r,n),p(r,l)},p(t,e){16&e&&h!==(h=new Date(t[4].created_at).toLocaleString(n.i18n.locale)+"")&&b(l,h)},d(t){t&&c(e),t&&c(r)}}}function B(t){let e,a,l,h,$,g=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?n.i18n.startedAt:n.i18n.startsAt)+"",D=new Date(t[4].metadata.start).toLocaleString(n.i18n.locale)+"";return{c(){e=i("dt"),a=s(g),l=r(),h=i("dd"),$=s(D)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,g),l=o(n),n.forEach(c),h=d(t,"DD",{});var r=m(h);$=u(r,D),r.forEach(c)},m(t,n){f(t,e,n),p(e,a),p(e,l),f(t,h,n),p(h,$)},p(t,e){16&e&&g!==(g=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?n.i18n.startedAt:n.i18n.startsAt)+"")&&b(a,g),16&e&&D!==(D=new Date(t[4].metadata.start).toLocaleString(n.i18n.locale)+"")&&b($,D)},d(t){t&&c(e),t&&c(h)}}}function F(t){let e,a,r,l,o=n.i18n.incidentClosedAt+"",h=new Date(t[4].closed_at).toLocaleString(n.i18n.locale)+"";return{c(){e=i("dt"),a=s(o),r=i("dd"),l=s(h)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,o),n.forEach(c),r=d(t,"DD",{});var i=m(r);l=u(i,h),i.forEach(c)},m(t,n){f(t,e,n),p(e,a),f(t,r,n),p(r,l)},p(t,e){16&e&&h!==(h=new Date(t[4].closed_at).toLocaleString(n.i18n.locale)+"")&&b(l,h)},d(t){t&&c(e),t&&c(r)}}}function P(t){let e,a,r,l,o=n.i18n.duration+"",h=n.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"";return{c(){e=i("dt"),a=s(o),r=i("dd"),l=s(h)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,o),n.forEach(c),r=d(t,"DD",{});var i=m(r);l=u(i,h),i.forEach(c)},m(t,n){f(t,e,n),p(e,a),f(t,r,n),p(r,l)},p(t,e){16&e&&h!==(h=n.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"")&&b(l,h)},d(t){t&&c(e),t&&c(r)}}}function q(t){let e,a,s,l,u,$=t[5](t[9].body)+"",g=n.i18n.incidentCommentSummary.replace(/\$DATE/g,`<a href=${t[9].html_url}>${new Date(t[9].created_at).toLocaleString(n.i18n.locale)}</a>`).replace(/\$AUTHOR/g,`<a href=${t[9].user.html_url}>@${t[9].user.login}</a>`)+"";return{c(){e=i("article"),a=i("p"),s=r(),l=i("div"),u=r(),this.h()},l(t){e=d(t,"ARTICLE",{});var n=m(e);a=d(n,"P",{class:!0}),m(a).forEach(c),s=o(n),l=d(n,"DIV",{}),m(l).forEach(c),u=o(n),n.forEach(c),this.h()},h(){h(a,"class","svelte-4o16l6")},m(t,n){f(t,e,n),p(e,a),a.innerHTML=$,p(e,s),p(e,l),l.innerHTML=g,p(e,u)},p(t,e){8&e&&$!==($=t[5](t[9].body)+"")&&(a.innerHTML=$),8&e&&g!==(g=n.i18n.incidentCommentSummary.replace(/\$DATE/g,`<a href=${t[9].html_url}>${new Date(t[9].created_at).toLocaleString(n.i18n.locale)}</a>`).replace(/\$AUTHOR/g,`<a href=${t[9].user.html_url}>@${t[9].user.login}</a>`)+"")&&(l.innerHTML=g)},d(t){t&&c(e)}}}function z(t){let e,a,E,w,T,b,A,L,S,_,O,y,M=n.i18n.incidentBack+"";function x(t,e){return t[2]?U:N}document.title=e=n.i18n.incidentTitle.replace("$NUMBER",t[0]);let C=x(t),H=C(t);const I=[j,V],R=[];function k(t,e){return t[1]?0:1}return b=k(t),A=R[b]=I[b](t),{c(){a=r(),E=i("h2"),H.c(),w=r(),T=i("section"),A.c(),L=r(),S=i("footer"),_=i("a"),O=s(M),this.h()},l(t){l("svelte-slinv8",document.head).forEach(c),a=o(t),E=d(t,"H2",{class:!0});var e=m(E);H.l(e),e.forEach(c),w=o(t),T=d(t,"SECTION",{});var n=m(T);A.l(n),n.forEach(c),L=o(t),S=d(t,"FOOTER",{class:!0});var r=m(S);_=d(r,"A",{href:!0});var i=m(_);O=u(i,M),i.forEach(c),r.forEach(c),this.h()},h(){h(E,"class","svelte-4o16l6"),h(_,"href",n.path),h(S,"class","svelte-4o16l6")},m(t,e){f(t,a,e),f(t,E,e),H.m(E,null),f(t,w,e),f(t,T,e),R[b].m(T,null),f(t,L,e),f(t,S,e),p(S,_),p(_,O),y=!0},p(t,a){let[r]=a;(!y||1&r)&&e!==(e=n.i18n.incidentTitle.replace("$NUMBER",t[0]))&&(document.title=e),C===(C=x(t))&&H?H.p(t,r):(H.d(1),H=C(t),H&&(H.c(),H.m(E,null)));let i=b;b=k(t),b===i?R[b].p(t,r):($(),g(R[i],1,1,(()=>{R[i]=null})),D(),A=R[b],A?A.p(t,r):(A=R[b]=I[b](t),A.c()),v(A,1),A.m(T,null))},i(t){y||(v(A),y=!0)},o(t){g(A),y=!1},d(t){t&&c(a),t&&c(E),H.d(),t&&c(w),t&&c(T),R[b].d(),t&&c(L),t&&c(S)}}}function G(t,e,a){let{number:r}=e,i=w,s=!0,l=!0;const c=x(),o=n.owner,d=n.repo;let m=[],u={};return E((async()=>{try{if(a(4,u=(await C(`issue-${o}-${d}-${r}`,(()=>c.issues.get({owner:o,repo:d,issue_number:r,sort:"created",direction:"desc"})))).data),a(4,u.metadata={},u),u.body.includes("\x3c!--")){const t=u.body.split("\x3c!--")[1].split("--\x3e")[0];t.split("\n").filter((t=>t.trim())).filter((t=>t.includes(":"))).forEach((t=>{a(4,u.metadata[t.split(/:(.+)/)[0].trim()]=t.split(/:(.+)/)[1].trim(),u)}))}}catch(t){H(t)}a(2,l=!1);try{a(3,m=(await C(`issue-comments-${o}-${d}-${r}`,(()=>c.issues.listComments({owner:o,repo:d,issue_number:r})))).data.reverse())}catch(t){H(t)}a(1,s=!1)})),t.$$set=t=>{"number"in t&&a(0,r=t.number)},[r,s,l,m,u,i]}class K extends t{constructor(t){super(),e(this,t,G,z,a,{number:0})}}function J(t){let e,a;return e=new K({props:{number:t[0]}}),{c(){_(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){y(e,t,n),a=!0},p(t,a){let[n]=a;const r={};1&n&&(r.number=t[0]),e.$set(r)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){M(e,t)}}}async function Q(t){const{number:e}=t.params;return{number:e}}function W(t,e,a){let{number:n}=e;return t.$$set=t=>{"number"in t&&a(0,n=t.number)},[n]}class X extends t{constructor(t){super(),e(this,t,W,J,a,{number:0})}}export{X as default,Q as preload};
