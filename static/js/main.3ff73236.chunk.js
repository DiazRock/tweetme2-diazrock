(this["webpackJsonptweetme2-web"]=this["webpackJsonptweetme2-web"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),r=n.n(s),o=(n(15),n.p+"static/media/logo.6ce24c58.svg");n(16);function i(e,t,n,c){var a;c&&(a=JSON.stringify(c)),console.log(c),console.log(a);var s=new XMLHttpRequest,r="//tweetme2-diazrock.herokuapp.com:8000/api".concat(t);s.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");s.open(e,r),s.setRequestHeader("Content-Type","application/json"),o&&(s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",o)),console.log(s),s.onload=function(){403===s.status&&("Authentication credentials were not provided."===s.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));console.log("xhr.onload"),console.log(s.response,s.status),n(s.response,s.status)},s.onerror=function(e){console.log(e),n({message:"The request was an error"},400)},console.log("Fuera del xhr"),s.send(a)}function l(e,t){var n="/tweets/feed/";null!==t&&void 0!==t&&(n=t.replace("//tweetme2-diazrock.herokuapp.com:8000/api","")),i("GET",n,e)}function u(e,t,n){var c="/tweets/";e&&(c="/tweets/?username=".concat(e)),null!==n&&void 0!==n&&(c=n.replace("//tweetme2-diazrock.herokuapp.com:8000/api","")),i("GET",c,t)}var d=n(0);function j(e){var t=e.tweet,n=e.action,c=e.didPerformAction,a=t.likes?t.likes:0,s=e.className?e.className:"btn btn-primary btn-sm",r=n.display?n.display:"Action",o=function(e,t){console.log(e,t),200!==t&&201!==t||!c||c(e,t)},l="like"===n.type?"".concat(a," ").concat(r):r;return Object(d.jsx)("button",{className:s,onClick:function(e){e.preventDefault(),function(e,t,n){i("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,o)},children:l})}var b=n(8),f=n(3),m=n(2);function O(e){var t=a.a.createRef(),n=e.didTweet,c=function(e,t){201===t?n(e):(console.log(e),alert("An error occured please try again"))};return Object(d.jsx)("div",{className:e.className,children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;i("POST","/tweets/create/",c,{content:n}),t.current.value=""},children:[Object(d.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Tweet"})]})})}var w=n(10);function h(e){var t=e.username;return Object(d.jsx)("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)},children:e.children})}function p(e){var t=e.user,n=e.includeFullName,c=e.hideLink,s=!0===n?"".concat(t.first_name," ").concat(t.last_name," "):null;return Object(d.jsxs)(a.a.Fragment,{children:[s,!0===c?"@".concat(t.username):Object(d.jsxs)(h,{username:t.username,children:["@",t.username]})]})}function x(e){var t=e.user,n=e.hideLink,c=Object(d.jsx)("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white",children:t.username[0]});return!0===n?c:Object(d.jsx)(h,{username:t.username,children:c})}var v=n(9),g=n.n(v);function N(e){return Object(d.jsx)("span",{className:e.className,children:g()(e.children).format("0a")})}function k(e){var t=e.user,n=e.didFollowToggle,c=e.profileLoading,a=t&&t.is_following?"Unfollow":"Follow";a=c?"Loading...":a;return t?Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{user:t,hideLink:!0}),Object(d.jsx)("p",{children:Object(d.jsx)(p,{user:t,includeFullName:!0,hideLink:!0})}),Object(d.jsxs)("p",{children:[Object(d.jsx)(N,{children:t.follower_count})," ",1===t.follower_count?"follower":"followers"," "]}),Object(d.jsxs)("p",{children:[Object(d.jsx)(N,{children:t.following_count})," following"]}),Object(d.jsx)("p",{children:t.location}),Object(d.jsx)("p",{children:t.bio}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n&&!c&&n(a)},children:a})]}):null}function y(e){var t=e.username,n=Object(c.useState)(!1),a=Object(m.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(null),l=Object(m.a)(o,2),u=l[0],j=l[1],b=Object(c.useState)(!1),f=Object(m.a)(b,2),O=f[0],w=f[1],h=function(e,t){200===t&&j(e)};Object(c.useEffect)((function(){!1===s&&(!function(e,t){i("GET","/profiles/".concat(e,"/"),t)}(t,h),r(!0))}),[t,s,r]);return!1===s?"Loading...":u?Object(d.jsx)(k,{user:u,didFollowToggle:function(e){!function(e,t,n){var c={action:"".concat(t&&t).toLowerCase()};i("POST","/profiles/".concat(e,"/follow"),n,c)}(t,e,(function(e,t){200===t&&j(e),w(!1)})),w(!0)},profileLoading:O}):null}function T(e){var t=e.tweet;return t.parent?Object(d.jsx)(S,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function S(e){var t=e.tweet,n=e.didRetweet,s=e.hideActions,r=e.isRetweet,o=e.retweeter,i=Object(c.useState)(e.tweet?e.tweet:null),l=Object(m.a)(i,2),u=l[0],b=l[1],f=e.className?e.className:"col-10 mx-auto col-md-6";f=!0===r?"".concat(f," p-2 border rounded"):f;var O=window.location.pathname.match(Object(w.a)(/([0-9]+)/,{tweetid:1})),h=O?O.groups.tweetid:-1,v="".concat(t.id)==="".concat(h),g=function(e,t){200===t?b(e):201===t&&n&&n(e)};return Object(d.jsxs)("div",{className:f,children:[!0===r&&Object(d.jsx)("div",{className:"mb-2",children:Object(d.jsxs)("span",{className:"small text-muted",children:["Retweet via ",Object(d.jsx)(p,{user:o})]})}),Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)(x,{user:t.user})}),Object(d.jsxs)("div",{className:"col-11",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:Object(d.jsx)(p,{includeFullName:!0,user:t.user})}),Object(d.jsx)("p",{children:t.content}),Object(d.jsx)(T,{tweet:t,retweeter:t.user})]}),Object(d.jsxs)("div",{className:"btn btn-group px-0",children:[u&&!0!==s&&Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(j,{tweet:u,didPerformAction:g,action:{type:"like",display:"Likes"}}),Object(d.jsx)(j,{tweet:u,didPerformAction:g,action:{type:"unlike",display:"Unlike"}}),Object(d.jsx)(j,{tweet:u,didPerformAction:g,action:{type:"retweet",display:"Retweet"}})]}),!0===v?null:Object(d.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})]})]})}function E(e){var t=Object(c.useState)([]),n=Object(m.a)(t,2),s=n[0],r=n[1],o=Object(c.useState)([]),i=Object(m.a)(o,2),u=i[0],j=i[1],b=Object(c.useState)(null),O=Object(m.a)(b,2),w=O[0],h=O[1],p=Object(c.useState)(!1),x=Object(m.a)(p,2),v=x[0],g=x[1];Object(c.useEffect)((function(){var t=Object(f.a)(e.newTweets).concat(s);t.length!==u.length&&j(t)}),[e.newTweets,u,s]),Object(c.useEffect)((function(){if(!1===v){l((function(e,t){200===t&&(h(e.next),r(e.results),g(!0))}))}}),[s,v,g,e.username]);var N=function(e){var t=Object(f.a)(s);t.unshift(e),r(t);var n=Object(f.a)(u);n.unshift(u),j(n)};return Object(d.jsxs)(a.a.Fragment,{children:[u.map((function(e,t){return Object(d.jsx)(S,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==w&&Object(d.jsx)("button",{onClick:function(e){if(e.preventDefault(),null!==w){l((function(e,t){if(200===t){h(e.next);var n=Object(f.a)(u).concat(e.results);r(n),j(n)}}),w)}},className:"btn btn-outline-primary",children:"Load next"})]})}function R(e){var t=Object(c.useState)([]),n=Object(m.a)(t,2),s=n[0],r=n[1],o=Object(c.useState)([]),i=Object(m.a)(o,2),l=i[0],j=i[1],b=Object(c.useState)(null),O=Object(m.a)(b,2),w=O[0],h=O[1],p=Object(c.useState)(!1),x=Object(m.a)(p,2),v=x[0],g=x[1];Object(c.useEffect)((function(){var t=Object(f.a)(e.newTweets).concat(s);t.length!==l.length&&j(t)}),[e.newTweets,l,s]),Object(c.useEffect)((function(){if(!1===v){u(e.username,(function(e,t){200===t?(h(e.next),r(e.results),g(!0)):alert("There was an error")}))}}),[s,v,g,e.username]);var N=function(e){var t=Object(f.a)(s);t.unshift(e),r(t);var n=Object(f.a)(l);n.unshift(l),j(n)};return console.log("Aqu\xed tamo"),Object(d.jsxs)(a.a.Fragment,{children:[l.map((function(e,t){return Object(d.jsx)(S,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==w&&Object(d.jsx)("button",{onClick:function(t){if(t.preventDefault(),null!==w){u(e.username,(function(e,t){if(200===t){h(e.next);var n=Object(f.a)(l).concat(e.results);r(n),j(n)}else alert("There was an error")}),w)}},className:"btn btn-outline-primary",children:"Load next"})]})}function A(e){var t=Object(c.useState)([]),n=Object(m.a)(t,2),a=n[0],s=n[1],r="false"!==e.canTweet;return Object(d.jsxs)("div",{className:e.className,children:[!0===r&&Object(d.jsx)(O,{didTweet:function(e){var t=Object(f.a)(a);t.unshift(e),s(t)},className:"col-12 mb-3"}),Object(d.jsx)(R,Object(b.a)({newTweets:a},e))]})}function L(e){var t=e.tweetId,n=Object(c.useState)(!1),a=Object(m.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(null),l=Object(m.a)(o,2),u=l[0],j=l[1],b=function(e,t){200===t?j(e):alert("There was an error finding your tweet.")};return Object(c.useEffect)((function(){!1===s&&(!function(e,t){i("GET","/tweets/".concat(e,"/"),t)}(t,b),r(!0))}),[t,s,r]),null===u?null:Object(d.jsx)(S,{tweet:u,className:e.className})}var q=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(d.jsxs)("p",{children:["Edit ",Object(d.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(d.jsx)(A,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=document.getElementById("root");F&&r.a.render(Object(d.jsx)(q,{}),F);var C=a.a.createElement,P=document.getElementById("tweetme-2");P&&r.a.render(C(A,P.dataset),P);var D=document.getElementById("tweetme-2-feed");D&&r.a.render(C((function(e){var t=Object(c.useState)([]),n=Object(m.a)(t,2),a=n[0],s=n[1],r="false"!==e.canTweet;return Object(d.jsxs)("div",{className:e.className,children:[!0===r&&Object(d.jsx)(O,{didTweet:function(e){var t=Object(f.a)(a);t.unshift(e),s(t)},className:"col-12 mb-3"}),Object(d.jsx)(E,Object(b.a)({newTweets:a},e))]})}),D.dataset),D),document.querySelectorAll(".tweetme-2-detail").forEach((function(e){r.a.render(C(L,e.dataset),e)})),document.querySelectorAll(".tweetme-2-profile-badge").forEach((function(e){r.a.render(C(y,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3ff73236.chunk.js.map