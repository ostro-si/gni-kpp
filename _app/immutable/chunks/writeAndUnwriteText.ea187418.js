import{w as s,t as e}from"./writeEffect.0503ac5e.js";import{u as f}from"./unwriteEffect.89c023ee.js";import{r as l}from"./animationSetup.fc105a58.js";const y=async({currentNode:t,text:r},a)=>{await s({currentNode:t,text:r},a);const n=r.replaceAll("&","&amp;");t.innerHTML===n&&(a.dispatch("done"),await e(a.wordInterval),await f(t,a)),l(t,a.parentElement,i=>{t===i?i.classList.remove("typing"):i.classList.remove("finished-typing")})};export{y as w};
