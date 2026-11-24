(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function f(n,e={},...t){const i=document.createElement(n);for(const[s,r]of Object.entries(e||{}))if(!(r==null||r===!1))if(s==="class"||s==="className")i.className=r;else if(s==="dataset"&&typeof r=="object")for(const[a,l]of Object.entries(r))l!=null&&(i.dataset[a]=String(l));else s.startsWith("on")&&typeof r=="function"?i.addEventListener(s.slice(2).toLowerCase(),r):r===!0?i.setAttribute(s,""):i.setAttribute(s,String(r));for(const s of t.flat())s==null||s===!1||(typeof s=="string"||typeof s=="number"?i.appendChild(document.createTextNode(String(s))):s instanceof Node&&i.appendChild(s));return i}function $e(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function _t(n){return String(n||"").replace(/\D/g,"")}function ho(n){const e=_t(n).slice(0,13),t=[];return e.length>0&&t.push(e.slice(0,1)),e.length>1&&t.push(e.slice(1,5)),e.length>5&&t.push(e.slice(5,10)),e.length>10&&t.push(e.slice(10,12)),e.length>12&&t.push(e.slice(12,13)),t.join("-")}function xt(n){return String(n||"").replace(/\D/g,"")}function ui(n){const e=xt(n).slice(0,10);return e.length===10?`${e.slice(0,2)} ${e.slice(2,6)} ${e.slice(6)}`:n||""}function bi(n){if(!n)return"-";let e;return typeof n?.toDate=="function"?e=n.toDate():e=new Date(n),Number.isNaN(e.getTime())?String(n):new Intl.DateTimeFormat("th-TH",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(e)}async function gs(n){const e=new TextEncoder().encode(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}async function Sf(n,e=900,t=.72){return new Promise((i,s)=>{const r=new FileReader;r.onerror=()=>s(new Error(`ไม่สามารถอ่านไฟล์ ${n.name} ได้`)),r.onload=()=>{const a=new Image;a.onerror=()=>s(new Error(`ไฟล์ ${n.name} ไม่ใช่รูปภาพที่รองรับ`)),a.onload=()=>{let{width:l,height:u}=a;(l>e||u>e)&&(l>=u?(u=Math.round(u*e/l),l=e):(l=Math.round(l*e/u),u=e));const d=document.createElement("canvas");d.width=l,d.height=u;const p=d.getContext("2d");p.fillStyle="#ffffff",p.fillRect(0,0,l,u),p.drawImage(a,0,0,l,u);const m=d.toDataURL("image/jpeg",t);i({name:n.name,dataUrl:m,sizeBytes:Math.round(m.length*3/4),uploadedAt:new Date().toISOString()})},a.src=r.result},r.readAsDataURL(n)})}const Df={nationalId:"เลขบัตรประชาชน",fullName:"ชื่อ-นามสกุล",nickname:"ชื่อเล่น",age:"อายุ",startYearBE:"ปี พ.ศ. ที่เริ่มเป็น",colorGroup:"กลุ่มสี",addressNo:"บ้านเลขที่",moo:"หมู่",subdistrict:"ตำบล",district:"อำเภอ",province:"จังหวัด",note:"หมายเหตุ",diagnosis:"วินิจฉัยโรค",diagnosisCode:"รหัสโรค"};function kf(n,e){const t={},i=[];for(const[u,d]of Object.entries(Df)){const p=String(n?.[u]??"").trim(),m=String(e?.[u]??"").trim();p!==m&&(t[u]={from:p,to:m},i.push(`${d}: "${p||"-"}" → "${m||"-"}"`))}const s=Array.isArray(n?.photos)?n.photos.length:0,r=Array.isArray(e?.photos)?e.photos.length:0;s!==r&&(t.photosCount={from:s,to:r},i.push(`ภาพถ่าย: ${s} → ${r} ภาพ`));const a=n?.gps?`${n.gps.lat.toFixed(5)},${n.gps.lng.toFixed(5)}`:"",l=e?.gps?`${e.gps.lat.toFixed(5)},${e.gps.lng.toFixed(5)}`:"";return a!==l&&(t.gps={from:a,to:l},i.push(l?`อัปเดตพิกัด GPS (${l})`:"ลบพิกัด GPS")),{changes:t,summary:i.length?i.join(", "):"บันทึกข้อมูลซ้ำโดยไม่มีฟิลด์เปลี่ยนแปลง"}}function fo(n){switch(String(n||"").trim()){case"แดง":return{key:"red",label:"แดง (อันตรายสูง)",short:"แดง"};case"ส้ม":return{key:"orange",label:"ส้ม (เฝ้าระวัง)",short:"ส้ม"};case"เหลือง":return{key:"yellow",label:"เหลือง (ติดตาม)",short:"เหลือง"};case"เขียว":return{key:"green",label:"เขียว (ทั่วไป)",short:"เขียว"};case"ทดสอบ":return{key:"test",label:"ทดสอบ",short:"ทดสอบ"};default:return{key:"none",label:"ยังไม่ระบุสี",short:"ไม่ระบุ"}}}const bu=["ต.โคกคราม","ต.บางปลาม้า","ต.ตะค่า","ต.บางใหญ่","ต.สาลี","ต.ไผ่กองดิน","ต.องครักษ์","ต.จรเข้ใหญ่","ต.บ้านแหลม","ต.มะขามล้ม","ต.วังน้ำเย็น","ต.วัดโบสถ์","ต.วัดดาว","ต.กฤษณา"],Vf=()=>{};var Bl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Of=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},Ru={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=r>>2,m=(r&3)<<4|l>>4;let T=(l&15)<<2|d>>6,A=d&63;u||(A=64,a||(T=64)),i.push(t[p],t[m],t[T],t[A])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Au(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Of(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||d==null||m==null)throw new Lf;const T=r<<2|l>>4;if(i.push(T),d!==64){const A=l<<4&240|d>>2;if(i.push(A),m!==64){const C=d<<6&192|m;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Lf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ff=function(n){const e=Au(n);return Ru.encodeByteArray(e,!0)},Ls=function(n){return Ff(n).replace(/\./g,"")},Nu=function(n){try{return Ru.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=()=>Mf().__FIREBASE_DEFAULTS__,Uf=()=>{if(typeof process>"u"||typeof Bl>"u")return;const n=Bl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},qf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Nu(n[1]);return e&&JSON.parse(e)},nr=()=>{try{return Vf()||xf()||Uf()||qf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cu=n=>{var e,t;return(t=(e=nr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Bf=n=>{const e=Cu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Pu=()=>{var n;return(n=nr())===null||n===void 0?void 0:n.config},Su=n=>{var e;return(e=nr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Du(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ls(JSON.stringify(t)),Ls(JSON.stringify(a)),""].join(".")}const yi={};function jf(){const n={prod:[],emulator:[]};for(const e of Object.keys(yi))yi[e]?n.emulator.push(e):n.prod.push(e);return n}function zf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let $l=!1;function ku(n,e){if(typeof window>"u"||typeof document>"u"||!$n(window.location.host)||yi[n]===e||yi[n]||$l)return;yi[n]=e;function t(T){return`__firebase__banner__${T}`}const i="__firebase__banner",r=jf().prod.length>0;function a(){const T=document.getElementById(i);T&&T.remove()}function l(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function u(T,A){T.setAttribute("width","24"),T.setAttribute("id",A),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function d(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{$l=!0,a()},T}function p(T,A){T.setAttribute("id",A),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function m(){const T=zf(i),A=t("text"),C=document.getElementById(A)||document.createElement("span"),k=t("learnmore"),D=document.getElementById(k)||document.createElement("a"),M=t("preprendIcon"),x=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const q=T.element;l(q),p(D,k);const W=d();u(x,M),q.append(x,C,D,W),document.body.appendChild(q)}r?(C.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Wf(){var n;const e=(n=nr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xf(){const n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Jf(){return!Wf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zf(){try{return typeof indexedDB=="object"}catch{return!1}}function ep(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="FirebaseError";class Rt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=tp,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?np(r,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Rt(s,l,i)}}function np(n,e){return n.replace(ip,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ip=/\{\$([^}]+)}/g;function sp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],a=e[s];if(Gl(r)&&Gl(a)){if(!dn(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Gl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function hi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function di(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function rp(n,e){const t=new op(n,e);return t.subscribe.bind(t)}class op{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");ap(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=zr),s.error===void 0&&(s.error=zr),s.complete===void 0&&(s.complete=zr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ap(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n){return n&&n._delegate?n._delegate:n}class fn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new $f;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(up(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&a.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:cp(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cp(n){return n===ln?void 0:n}function up(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const dp={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},fp=Q.INFO,pp={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},gp=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=pp[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bo{constructor(e){this.name=e,this._logLevel=fp,this._logHandler=gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const mp=(n,e)=>e.some(t=>n instanceof t);let jl,zl;function _p(){return jl||(jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yp(){return zl||(zl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vu=new WeakMap,po=new WeakMap,Ou=new WeakMap,Hr=new WeakMap,$o=new WeakMap;function vp(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",a)},r=()=>{t(qt(n.result)),s()},a=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Vu.set(t,n)}).catch(()=>{}),$o.set(e,n),e}function Ip(n){if(po.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",a),n.removeEventListener("abort",a)},r=()=>{t(),s()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",a),n.addEventListener("abort",a)});po.set(n,e)}let go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return po.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ou.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ep(n){go=n(go)}function Tp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Wr(this),e,...t);return Ou.set(i,e.sort?e.sort():[e]),qt(i)}:yp().includes(n)?function(...e){return n.apply(Wr(this),e),qt(Vu.get(this))}:function(...e){return qt(n.apply(Wr(this),e))}}function wp(n){return typeof n=="function"?Tp(n):(n instanceof IDBTransaction&&Ip(n),mp(n,_p())?new Proxy(n,go):n)}function qt(n){if(n instanceof IDBRequest)return vp(n);if(Hr.has(n))return Hr.get(n);const e=wp(n);return e!==n&&(Hr.set(n,e),$o.set(e,n)),e}const Wr=n=>$o.get(n);function bp(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const a=indexedDB.open(n,e),l=qt(a);return i&&a.addEventListener("upgradeneeded",u=>{i(qt(a.result),u.oldVersion,u.newVersion,qt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{r&&u.addEventListener("close",()=>r()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Ap=["get","getKey","getAll","getAllKeys","count"],Rp=["put","add","delete","clear"],Yr=new Map;function Hl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Yr.get(e))return Yr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Rp.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ap.includes(t)))return;const r=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return i&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return Yr.set(e,r),r}Ep(n=>({...n,get:(e,t,i)=>Hl(e,t)||n.get(e,t,i),has:(e,t)=>!!Hl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cp(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Cp(n){const e=n.getComponent();return e?.type==="VERSION"}const mo="@firebase/app",Wl="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Bo("@firebase/app"),Pp="@firebase/app-compat",Sp="@firebase/analytics-compat",Dp="@firebase/analytics",kp="@firebase/app-check-compat",Vp="@firebase/app-check",Op="@firebase/auth",Lp="@firebase/auth-compat",Fp="@firebase/database",Mp="@firebase/data-connect",xp="@firebase/database-compat",Up="@firebase/functions",qp="@firebase/functions-compat",Bp="@firebase/installations",$p="@firebase/installations-compat",Gp="@firebase/messaging",jp="@firebase/messaging-compat",zp="@firebase/performance",Hp="@firebase/performance-compat",Wp="@firebase/remote-config",Yp="@firebase/remote-config-compat",Kp="@firebase/storage",Qp="@firebase/storage-compat",Xp="@firebase/firestore",Jp="@firebase/ai",Zp="@firebase/firestore-compat",eg="firebase",tg="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="[DEFAULT]",ng={[mo]:"fire-core",[Pp]:"fire-core-compat",[Dp]:"fire-analytics",[Sp]:"fire-analytics-compat",[Vp]:"fire-app-check",[kp]:"fire-app-check-compat",[Op]:"fire-auth",[Lp]:"fire-auth-compat",[Fp]:"fire-rtdb",[Mp]:"fire-data-connect",[xp]:"fire-rtdb-compat",[Up]:"fire-fn",[qp]:"fire-fn-compat",[Bp]:"fire-iid",[$p]:"fire-iid-compat",[Gp]:"fire-fcm",[jp]:"fire-fcm-compat",[zp]:"fire-perf",[Hp]:"fire-perf-compat",[Wp]:"fire-rc",[Yp]:"fire-rc-compat",[Kp]:"fire-gcs",[Qp]:"fire-gcs-compat",[Xp]:"fire-fst",[Zp]:"fire-fst-compat",[Jp]:"fire-vertex","fire-js":"fire-js",[eg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new Map,ig=new Map,yo=new Map;function Yl(n,e){try{n.container.addComponent(e)}catch(t){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Fn(n){const e=n.name;if(yo.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;yo.set(e,n);for(const t of Fs.values())Yl(t,n);for(const t of ig.values())Yl(t,n);return!0}function Go(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ke(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bt=new Li("app","Firebase",sg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=tg;function Lu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:_o,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});if(t||(t=Pu()),!t)throw Bt.create("no-options");const r=Fs.get(s);if(r){if(dn(t,r.options)&&dn(i,r.config))return r;throw Bt.create("duplicate-app",{appName:s})}const a=new hp(s);for(const u of yo.values())a.addComponent(u);const l=new rg(t,i,a);return Fs.set(s,l),l}function Fu(n=_o){const e=Fs.get(n);if(!e&&n===_o&&Pu())return Lu();if(!e)throw Bt.create("no-app",{appName:n});return e}function $t(n,e,t){var i;let s=(i=ng[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(l.join(" "));return}Fn(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="firebase-heartbeat-database",ag=1,Ai="firebase-heartbeat-store";let Kr=null;function Mu(){return Kr||(Kr=bp(og,ag,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ai)}catch(t){console.warn(t)}}}}).catch(n=>{throw Bt.create("idb-open",{originalErrorMessage:n.message})})),Kr}async function lg(n){try{const t=(await Mu()).transaction(Ai),i=await t.objectStore(Ai).get(xu(n));return await t.done,i}catch(e){if(e instanceof Rt)Tt.warn(e.message);else{const t=Bt.create("idb-get",{originalErrorMessage:e?.message});Tt.warn(t.message)}}}async function Kl(n,e){try{const i=(await Mu()).transaction(Ai,"readwrite");await i.objectStore(Ai).put(e,xu(n)),await i.done}catch(t){if(t instanceof Rt)Tt.warn(t.message);else{const i=Bt.create("idb-set",{originalErrorMessage:t?.message});Tt.warn(i.message)}}}function xu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=1024,ug=30;class hg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fg(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ql();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>ug){const a=pg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Tt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ql(),{heartbeatsToSend:i,unsentEntries:s}=dg(this._heartbeatsCache.heartbeats),r=Ls(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Tt.warn(t),""}}}function Ql(){return new Date().toISOString().substring(0,10)}function dg(n,e=cg){const t=[];let i=n.slice();for(const s of n){const r=t.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),Xl(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Xl(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class fg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zf()?ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xl(n){return Ls(JSON.stringify({version:2,heartbeats:n})).length}function pg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n){Fn(new fn("platform-logger",e=>new Np(e),"PRIVATE")),Fn(new fn("heartbeat",e=>new hg(e),"PRIVATE")),$t(mo,Wl,n),$t(mo,Wl,"esm2017"),$t("fire-js","")}gg("");var mg="firebase",_g="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(mg,_g,"app");function jo(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Uu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yg=Uu,qu=new Li("auth","Firebase",Uu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=new Bo("@firebase/auth");function vg(n,...e){Ms.logLevel<=Q.WARN&&Ms.warn(`Auth (${Gn}): ${n}`,...e)}function bs(n,...e){Ms.logLevel<=Q.ERROR&&Ms.error(`Auth (${Gn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n,...e){throw zo(n,...e)}function at(n,...e){return zo(n,...e)}function Bu(n,e,t){const i=Object.assign(Object.assign({},yg()),{[e]:t});return new Li("auth","Firebase",i).create(e,{appName:n.name})}function It(n){return Bu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zo(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return qu.create(n,...e)}function $(n,e,...t){if(!n)throw zo(e,...t)}function yt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bs(e),new Error(e)}function wt(n,e){n||yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ig(){return Jl()==="http:"||Jl()==="https:"}function Jl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ig()||Kf()||"connection"in navigator)?navigator.onLine:!0}function Tg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile=Hf()||Qf()}get(){return Eg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(n,e){wt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ag=new Mi(3e4,6e4);function Jt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Zt(n,e,t,i,s={}){return Gu(n,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const l=Fi(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},r);return Yf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&$n(n.emulatorConfig.host)&&(d.credentials="include"),$u.fetch()(await ju(n,n.config.apiHost,t,l),d)})}async function Gu(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},wg),e);try{const s=new Ng(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw ms(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const l=r.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ms(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ms(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ms(n,"user-disabled",a);const p=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Bu(n,p,d);et(n,p)}}catch(s){if(s instanceof Rt)throw s;et(n,"network-request-failed",{message:String(s)})}}async function xi(n,e,t,i,s={}){const r=await Zt(n,e,t,i,s);return"mfaPendingCredential"in r&&et(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function ju(n,e,t,i){const s=`${e}${t}?${i}`,r=n,a=r.config.emulator?Ho(n.config,s):`${n.config.apiScheme}://${s}`;return bg.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}function Rg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ng{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(at(this.auth,"network-request-failed")),Ag.get())})}}function ms(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=at(n,e,i);return s.customData._tokenResponse=t,s}function Zl(n){return n!==void 0&&n.enterprise!==void 0}class Cg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Rg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Pg(n,e){return Zt(n,"GET","/v2/recaptchaConfig",Jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(n,e){return Zt(n,"POST","/v1/accounts:delete",e)}async function xs(n,e){return Zt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dg(n,e=!1){const t=fe(n),i=await t.getIdToken(e),s=Wo(i);$(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r?.sign_in_provider;return{claims:s,token:i,authTime:vi(Qr(s.auth_time)),issuedAtTime:vi(Qr(s.iat)),expirationTime:vi(Qr(s.exp)),signInProvider:a||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Qr(n){return Number(n)*1e3}function Wo(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return bs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nu(t);return s?JSON.parse(s):(bs("Failed to decode base64 JWT payload"),null)}catch(s){return bs("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ec(n){const e=Wo(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Rt&&kg(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function kg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vi(this.lastLoginAt),this.creationTime=vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Ri(n,xs(t,{idToken:i}));$(s?.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?zu(r.providerUserInfo):[],l=Lg(n.providerData,a),u=n.isAnonymous,d=!(n.email&&r.passwordHash)&&!l?.length,p=u?d:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Io(r.createdAt,r.lastLoginAt),isAnonymous:p};Object.assign(n,m)}async function Og(n){const e=fe(n);await Us(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lg(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function zu(n){return n.map(e=>{var{providerId:t}=e,i=jo(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(n,e){const t=await Gu(n,{},async()=>{const i=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,a=await ju(n,s,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:i};return n.emulatorConfig&&$n(n.emulatorConfig.host)&&(u.credentials="include"),$u.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Mg(n,e){return Zt(n,"POST","/v2/accounts:revokeToken",Jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ec(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=ec(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Fg(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,a=new kn;return i&&($(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&($(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&($(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ze{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=jo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Io(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ri(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Dg(this,e)}reload(){return Og(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Us(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await Ri(this,Sg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,a,l,u,d,p;const m=(i=t.displayName)!==null&&i!==void 0?i:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,A=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,D=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,M=(d=t.createdAt)!==null&&d!==void 0?d:void 0,x=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:q,emailVerified:W,isAnonymous:z,providerData:Y,stsTokenManager:w}=t;$(q&&w,e,"internal-error");const _=kn.fromJSON(this.name,w);$(typeof q=="string",e,"internal-error"),kt(m,e.name),kt(T,e.name),$(typeof W=="boolean",e,"internal-error"),$(typeof z=="boolean",e,"internal-error"),kt(A,e.name),kt(C,e.name),kt(k,e.name),kt(D,e.name),kt(M,e.name),kt(x,e.name);const y=new Ze({uid:q,auth:e,email:T,emailVerified:W,displayName:m,isAnonymous:z,photoURL:C,phoneNumber:A,tenantId:k,stsTokenManager:_,createdAt:M,lastLoginAt:x});return Y&&Array.isArray(Y)&&(y.providerData=Y.map(v=>Object.assign({},v))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,t,i=!1){const s=new kn;s.updateFromServerResponse(t);const r=new Ze({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Us(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];$(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?zu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!r?.length,l=new kn;l.updateFromIdToken(i);const u=new Ze({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Io(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!r?.length};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new Map;function vt(n){wt(n instanceof Function,"Expected a class definition");let e=tc.get(n);return e?(wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,tc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hu.type="NONE";const nc=Hu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n,e,t){return`firebase:${n}:${e}:${t}`}class Vn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=As(this.userKey,s.apiKey,r),this.fullPersistenceKey=As("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await xs(this.auth,{idToken:e}).catch(()=>{});return t?Ze._fromGetAccountInfoResponse(this.auth,t,e):null}return Ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Vn(vt(nc),e,i);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=s[0]||vt(nc);const a=As(i,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){let m;if(typeof p=="string"){const T=await xs(e,{idToken:p}).catch(()=>{});if(!T)break;m=await Ze._fromGetAccountInfoResponse(e,T,p)}else m=Ze._fromJSON(e,p);d!==r&&(l=m),r=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new Vn(r,e,i):(r=u[0],l&&await r._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(a)}catch{}})),new Vn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ju(e))return"Blackberry";if(Zu(e))return"Webos";if(Yu(e))return"Safari";if((e.includes("chrome/")||Ku(e))&&!e.includes("edge/"))return"Chrome";if(Xu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function Wu(n=ke()){return/firefox\//i.test(n)}function Yu(n=ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ku(n=ke()){return/crios\//i.test(n)}function Qu(n=ke()){return/iemobile/i.test(n)}function Xu(n=ke()){return/android/i.test(n)}function Ju(n=ke()){return/blackberry/i.test(n)}function Zu(n=ke()){return/webos/i.test(n)}function Yo(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xg(n=ke()){var e;return Yo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ug(){return Xf()&&document.documentMode===10}function eh(n=ke()){return Yo(n)||Xu(n)||Zu(n)||Ju(n)||/windows phone/i.test(n)||Qu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(n,e=[]){let t;switch(n){case"Browser":t=ic(ke());break;case"Worker":t=`${ic(ke())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((a,l)=>{try{const u=e(r);a(u)}catch(u){l(u)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(n,e={}){return Zt(n,"GET","/v2/passwordPolicy",Jt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=6;class Gg{constructor(e){var t,i,s,r;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:$g,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(i=u.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(r=u.containsUppercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sc(this),this.idTokenSubscription=new sc(this),this.beforeStateQueue=new qg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vt(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await Vn.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xs(this,{idToken:e}),i=await Ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ke(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u?.user&&(s=u.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Us(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(It(this));const t=e?fe(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bg(this),t=new Gg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Mg(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await Vn.create(this,[vt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,i,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=th(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&vg(`Error while retrieving App Check token: ${t.error}`),t?.token}}function yn(n){return fe(n)}class sc{constructor(e){this.auth=e,this.observer=null,this.addObserver=rp(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zg(n){ir=n}function nh(n){return ir.loadJS(n)}function Hg(){return ir.recaptchaEnterpriseScript}function Wg(){return ir.gapiScript}function Yg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Kg{constructor(){this.enterprise=new Qg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Qg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Xg="recaptcha-enterprise",ih="NO_RECAPTCHA";class Jg{constructor(e){this.type=Xg,this.auth=yn(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,l)=>{Pg(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Cg(u);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(r,a,l){const u=window.grecaptcha;Zl(u)?u.enterprise.ready(()=>{u.enterprise.execute(r,{action:e}).then(d=>{a(d)}).catch(()=>{a(ih)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Kg().execute("siteKey",{action:"verify"}):new Promise((r,a)=>{i(this.auth).then(l=>{if(!t&&Zl(window.grecaptcha))s(l,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Hg();u.length!==0&&(u+=l),nh(u).then(()=>{s(l,r,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function rc(n,e,t,i=!1,s=!1){const r=new Jg(n);let a;if(s)a=ih;else try{a=await r.verify(t)}catch{a=await r.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Eo(n,e,t,i,s){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await rc(n,e,t,t==="getOobCode");return i(n,a)}else return i(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await rc(n,e,t,t==="getOobCode");return i(n,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(n,e){const t=Go(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(dn(r,e??{}))return s;et(s,"already-initialized")}return t.initialize({options:e})}function em(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(vt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function tm(n,e,t){const i=yn(n);$(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=sh(e),{host:a,port:l}=nm(e),u=l===null?"":`:${l}`,d={url:`${r}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){$(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),$(dn(d,i.config.emulator)&&dn(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,$n(a)?(Du(`${r}//${a}${u}`),ku("Auth",!0)):im()}function sh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function nm(n){const e=sh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:oc(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:oc(a)}}}function oc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function im(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yt("not implemented")}_getIdTokenResponse(e){return yt("not implemented")}_linkToIdToken(e,t){return yt("not implemented")}_getReauthenticationResolver(e){return yt("not implemented")}}async function sm(n,e){return Zt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rm(n,e){return xi(n,"POST","/v1/accounts:signInWithPassword",Jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om(n,e){return xi(n,"POST","/v1/accounts:signInWithEmailLink",Jt(n,e))}async function am(n,e){return xi(n,"POST","/v1/accounts:signInWithEmailLink",Jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Ko{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ni(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ni(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eo(e,t,"signInWithPassword",rm);case"emailLink":return om(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eo(e,i,"signUpPassword",sm);case"emailLink":return am(e,{idToken:t,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(n,e){return xi(n,"POST","/v1/accounts:signInWithIdp",Jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="http://localhost";class pn extends Ko{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=jo(t,["providerId","signInMethod"]);if(!i||!s)return null;const a=new pn(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return On(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,On(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,On(e,t)}buildRequest(){const e={requestUri:lm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function um(n){const e=hi(di(n)).link,t=e?hi(di(e)).deep_link_id:null,i=hi(di(n)).deep_link_id;return(i?hi(di(i)).link:null)||i||t||e||n}class Qo{constructor(e){var t,i,s,r,a,l;const u=hi(di(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(i=u.oobCode)!==null&&i!==void 0?i:null,m=cm((s=u.mode)!==null&&s!==void 0?s:null);$(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(r=u.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=um(e);try{return new Qo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.providerId=jn.PROVIDER_ID}static credential(e,t){return Ni._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Qo.parseLink(t);return $(i,"argument-error"),Ni._fromEmailAndCode(e,i.code,i.tenantId)}}jn.PROVIDER_ID="password";jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends rh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Ui{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Lt.credential(t,i)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Ui{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Ui{constructor(){super("twitter.com")}static credential(e,t){return pn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Mt.credential(t,i)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(n,e){return xi(n,"POST","/v1/accounts:signUp",Jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Ze._fromIdTokenResponse(e,i,s),a=ac(i);return new gn({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=ac(i);return new gn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function ac(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends Rt{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,qs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new qs(e,t,i,s)}}function oh(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?qs._fromErrorAndOperation(n,r,e,i):r})}async function dm(n,e,t=!1){const i=await Ri(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gn._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(n,e,t=!1){const{auth:i}=n;if(Ke(i.app))return Promise.reject(It(i));const s="reauthenticate";try{const r=await Ri(n,oh(i,s,e,n),t);$(r.idToken,i,"internal-error");const a=Wo(r.idToken);$(a,i,"internal-error");const{sub:l}=a;return $(n.uid===l,i,"user-mismatch"),gn._forOperation(n,s,r)}catch(r){throw r?.code==="auth/user-not-found"&&et(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ah(n,e,t=!1){if(Ke(n.app))return Promise.reject(It(n));const i="signIn",s=await oh(n,i,e),r=await gn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function pm(n,e){return ah(yn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(n){const e=yn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lc(n,e,t){if(Ke(n.app))return Promise.reject(It(n));const i=yn(n),a=await Eo(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hm).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&lh(n),u}),l=await gn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function cc(n,e,t){return Ke(n.app)?Promise.reject(It(n)):pm(fe(n),jn.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&lh(n),i})}function gm(n,e,t,i){return fe(n).onIdTokenChanged(e,t,i)}function mm(n,e,t){return fe(n).beforeAuthStateChanged(e,t)}function _m(n,e,t,i){return fe(n).onAuthStateChanged(e,t,i)}function _s(n){return fe(n).signOut()}const Bs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=1e3,vm=10;class uh extends ch{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);Ug()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vm):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ym)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}uh.type="LOCAL";const Im=uh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh extends ch{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hh.type="SESSION";const dh=hh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new sr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,r)),u=await Em(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((l,u)=>{const d=Xo("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(m){const T=m;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(T.data.response);break;default:clearTimeout(p),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function wm(n){lt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function bm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Am(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Rm(){return fh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="firebaseLocalStorageDb",Nm=1,$s="firebaseLocalStorage",gh="fbase_key";class qi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rr(n,e){return n.transaction([$s],e?"readwrite":"readonly").objectStore($s)}function Cm(){const n=indexedDB.deleteDatabase(ph);return new qi(n).toPromise()}function To(){const n=indexedDB.open(ph,Nm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore($s,{keyPath:gh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains($s)?e(i):(i.close(),await Cm(),e(await To()))})})}async function uc(n,e,t){const i=rr(n,!0).put({[gh]:e,value:t});return new qi(i).toPromise()}async function Pm(n,e){const t=rr(n,!1).get(e),i=await new qi(t).toPromise();return i===void 0?null:i.value}function hc(n,e){const t=rr(n,!0).delete(e);return new qi(t).toPromise()}const Sm=800,Dm=3;class mh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await To(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Dm)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sr._getInstance(Rm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bm(),!this.activeServiceWorker)return;this.sender=new Tm(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Am()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await To();return await uc(e,Bs,"1"),await hc(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>uc(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Pm(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=rr(s,!1).getAll();return new qi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mh.type="LOCAL";const km=mh;new Mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(n,e){return e?vt(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Ko{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return On(e,this._buildIdpRequest())}_linkToIdToken(e,t){return On(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return On(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Om(n){return ah(n.auth,new Jo(n),n.bypassAuthState)}function Lm(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),fm(t,new Jo(n),n.bypassAuthState)}async function Fm(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),dm(t,new Jo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Om;case"linkViaPopup":case"linkViaRedirect":return Fm;case"reauthViaPopup":case"reauthViaRedirect":return Lm;default:et(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new Mi(2e3,1e4);class Dn extends _h{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=Xo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mm.get())};e()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="pendingRedirect",Rs=new Map;class Um extends _h{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Rs.get(this.auth._key());if(!e){try{const i=await qm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Rs.set(this.auth._key(),e)}return this.bypassAuthState||Rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qm(n,e){const t=Gm(e),i=$m(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Bm(n,e){Rs.set(n._key(),e)}function $m(n){return vt(n._redirectPersistence)}function Gm(n){return As(xm,n.config.apiKey,n.name)}async function jm(n,e,t=!1){if(Ke(n.app))return Promise.reject(It(n));const i=yn(n),s=Vm(i,e),a=await new Um(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=600*1e3;class Hm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!yh(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(at(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zm&&this.cachedEventUids.clear(),this.cachedEventUids.has(dc(e))}saveEventToCache(e){this.cachedEventUids.add(dc(e)),this.lastProcessedEventTime=Date.now()}}function dc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Wm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(n,e={}){return Zt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qm=/^https?/;async function Xm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ym(n);for(const t of e)try{if(Jm(t))return}catch{}et(n,"unauthorized-domain")}function Jm(n){const e=vo(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!Qm.test(t))return!1;if(Km.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=new Mi(3e4,6e4);function fc(){const n=lt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function e_(n){return new Promise((e,t)=>{var i,s,r;function a(){fc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fc(),t(at(n,"network-request-failed"))},timeout:Zm.get()})}if(!((s=(i=lt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=lt().gapi)===null||r===void 0)&&r.load)a();else{const l=Yg("iframefcb");return lt()[l]=()=>{gapi.load?a():t(at(n,"network-request-failed"))},nh(`${Wg()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Ns=null,e})}let Ns=null;function t_(n){return Ns=Ns||e_(n),Ns}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new Mi(5e3,15e3),i_="__/auth/iframe",s_="emulator/auth/iframe",r_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},o_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function a_(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ho(e,s_):`https://${n.config.authDomain}/${i_}`,i={apiKey:e.apiKey,appName:n.name,v:Gn},s=o_.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Fi(i).slice(1)}`}async function l_(n){const e=await t_(n),t=lt().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:a_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=at(n,"network-request-failed"),l=lt().setTimeout(()=>{r(a)},n_.get());function u(){lt().clearTimeout(l),s(i)}i.ping(u).then(u,()=>{r(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},u_=500,h_=600,d_="_blank",f_="http://localhost";class pc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function p_(n,e,t,i=u_,s=h_){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u=Object.assign(Object.assign({},c_),{width:i.toString(),height:s.toString(),top:r,left:a}),d=ke().toLowerCase();t&&(l=Ku(d)?d_:t),Wu(d)&&(e=e||f_,u.scrollbars="yes");const p=Object.entries(u).reduce((T,[A,C])=>`${T}${A}=${C},`,"");if(xg(d)&&l!=="_self")return g_(e||"",l),new pc(null);const m=window.open(e||"",l,p);$(m,n,"popup-blocked");try{m.focus()}catch{}return new pc(m)}function g_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="__/auth/handler",__="emulator/auth/handler",y_=encodeURIComponent("fac");async function gc(n,e,t,i,s,r){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Gn,eventId:s};if(e instanceof rh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",sp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof Ui){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await n._getAppCheckToken(),d=u?`#${y_}=${encodeURIComponent(u)}`:"";return`${v_(n)}?${Fi(l).slice(1)}${d}`}function v_({config:n}){return n.emulator?Ho(n,__):`https://${n.authDomain}/${m_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="webStorageSupport";class I_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dh,this._completeRedirectFn=jm,this._overrideRedirectResult=Bm}async _openPopup(e,t,i,s){var r;wt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await gc(e,t,i,vo(),s);return p_(e,a,Xo())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await gc(e,t,i,vo(),s);return wm(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(wt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await l_(e),i=new Hm(e);return t.register("authEvent",s=>($(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xr,{type:Xr},s=>{var r;const a=(r=s?.[0])===null||r===void 0?void 0:r[Xr];a!==void 0&&t(!!a),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eh()||Yu()||Yo()}}const E_=I_;var mc="@firebase/auth",_c="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function b_(n){Fn(new fn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:th(n)},d=new jg(i,s,r,u);return em(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Fn(new fn("auth-internal",e=>{const t=yn(e.getProvider("auth").getImmediate());return(i=>new T_(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(mc,_c,w_(n)),$t(mc,_c,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=300,R_=Su("authIdTokenMaxAge")||A_;let yc=null;const N_=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>R_)return;const s=t?.token;yc!==s&&(yc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function C_(n=Fu()){const e=Go(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Zg(n,{popupRedirectResolver:E_,persistence:[km,Im,dh]}),i=Su("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const a=N_(r.toString());mm(t,a,()=>a(t.currentUser)),gm(t,l=>a(l))}}const s=Cu("auth");return s&&tm(t,`http://${s}`),t}function P_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}zg({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=at("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",P_().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});b_("Browser");var vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,vh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function y(){}y.prototype=_.prototype,w.D=_.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(v,I,b){for(var E=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)E[ee-2]=arguments[ee];return _.prototype[I].apply(v,E)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,y){y||(y=0);var v=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)v[I]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(I=0;16>I;++I)v[I]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=w.g[0],y=w.g[1],I=w.g[2];var b=w.g[3],E=_+(b^y&(I^b))+v[0]+3614090360&4294967295;_=y+(E<<7&4294967295|E>>>25),E=b+(I^_&(y^I))+v[1]+3905402710&4294967295,b=_+(E<<12&4294967295|E>>>20),E=I+(y^b&(_^y))+v[2]+606105819&4294967295,I=b+(E<<17&4294967295|E>>>15),E=y+(_^I&(b^_))+v[3]+3250441966&4294967295,y=I+(E<<22&4294967295|E>>>10),E=_+(b^y&(I^b))+v[4]+4118548399&4294967295,_=y+(E<<7&4294967295|E>>>25),E=b+(I^_&(y^I))+v[5]+1200080426&4294967295,b=_+(E<<12&4294967295|E>>>20),E=I+(y^b&(_^y))+v[6]+2821735955&4294967295,I=b+(E<<17&4294967295|E>>>15),E=y+(_^I&(b^_))+v[7]+4249261313&4294967295,y=I+(E<<22&4294967295|E>>>10),E=_+(b^y&(I^b))+v[8]+1770035416&4294967295,_=y+(E<<7&4294967295|E>>>25),E=b+(I^_&(y^I))+v[9]+2336552879&4294967295,b=_+(E<<12&4294967295|E>>>20),E=I+(y^b&(_^y))+v[10]+4294925233&4294967295,I=b+(E<<17&4294967295|E>>>15),E=y+(_^I&(b^_))+v[11]+2304563134&4294967295,y=I+(E<<22&4294967295|E>>>10),E=_+(b^y&(I^b))+v[12]+1804603682&4294967295,_=y+(E<<7&4294967295|E>>>25),E=b+(I^_&(y^I))+v[13]+4254626195&4294967295,b=_+(E<<12&4294967295|E>>>20),E=I+(y^b&(_^y))+v[14]+2792965006&4294967295,I=b+(E<<17&4294967295|E>>>15),E=y+(_^I&(b^_))+v[15]+1236535329&4294967295,y=I+(E<<22&4294967295|E>>>10),E=_+(I^b&(y^I))+v[1]+4129170786&4294967295,_=y+(E<<5&4294967295|E>>>27),E=b+(y^I&(_^y))+v[6]+3225465664&4294967295,b=_+(E<<9&4294967295|E>>>23),E=I+(_^y&(b^_))+v[11]+643717713&4294967295,I=b+(E<<14&4294967295|E>>>18),E=y+(b^_&(I^b))+v[0]+3921069994&4294967295,y=I+(E<<20&4294967295|E>>>12),E=_+(I^b&(y^I))+v[5]+3593408605&4294967295,_=y+(E<<5&4294967295|E>>>27),E=b+(y^I&(_^y))+v[10]+38016083&4294967295,b=_+(E<<9&4294967295|E>>>23),E=I+(_^y&(b^_))+v[15]+3634488961&4294967295,I=b+(E<<14&4294967295|E>>>18),E=y+(b^_&(I^b))+v[4]+3889429448&4294967295,y=I+(E<<20&4294967295|E>>>12),E=_+(I^b&(y^I))+v[9]+568446438&4294967295,_=y+(E<<5&4294967295|E>>>27),E=b+(y^I&(_^y))+v[14]+3275163606&4294967295,b=_+(E<<9&4294967295|E>>>23),E=I+(_^y&(b^_))+v[3]+4107603335&4294967295,I=b+(E<<14&4294967295|E>>>18),E=y+(b^_&(I^b))+v[8]+1163531501&4294967295,y=I+(E<<20&4294967295|E>>>12),E=_+(I^b&(y^I))+v[13]+2850285829&4294967295,_=y+(E<<5&4294967295|E>>>27),E=b+(y^I&(_^y))+v[2]+4243563512&4294967295,b=_+(E<<9&4294967295|E>>>23),E=I+(_^y&(b^_))+v[7]+1735328473&4294967295,I=b+(E<<14&4294967295|E>>>18),E=y+(b^_&(I^b))+v[12]+2368359562&4294967295,y=I+(E<<20&4294967295|E>>>12),E=_+(y^I^b)+v[5]+4294588738&4294967295,_=y+(E<<4&4294967295|E>>>28),E=b+(_^y^I)+v[8]+2272392833&4294967295,b=_+(E<<11&4294967295|E>>>21),E=I+(b^_^y)+v[11]+1839030562&4294967295,I=b+(E<<16&4294967295|E>>>16),E=y+(I^b^_)+v[14]+4259657740&4294967295,y=I+(E<<23&4294967295|E>>>9),E=_+(y^I^b)+v[1]+2763975236&4294967295,_=y+(E<<4&4294967295|E>>>28),E=b+(_^y^I)+v[4]+1272893353&4294967295,b=_+(E<<11&4294967295|E>>>21),E=I+(b^_^y)+v[7]+4139469664&4294967295,I=b+(E<<16&4294967295|E>>>16),E=y+(I^b^_)+v[10]+3200236656&4294967295,y=I+(E<<23&4294967295|E>>>9),E=_+(y^I^b)+v[13]+681279174&4294967295,_=y+(E<<4&4294967295|E>>>28),E=b+(_^y^I)+v[0]+3936430074&4294967295,b=_+(E<<11&4294967295|E>>>21),E=I+(b^_^y)+v[3]+3572445317&4294967295,I=b+(E<<16&4294967295|E>>>16),E=y+(I^b^_)+v[6]+76029189&4294967295,y=I+(E<<23&4294967295|E>>>9),E=_+(y^I^b)+v[9]+3654602809&4294967295,_=y+(E<<4&4294967295|E>>>28),E=b+(_^y^I)+v[12]+3873151461&4294967295,b=_+(E<<11&4294967295|E>>>21),E=I+(b^_^y)+v[15]+530742520&4294967295,I=b+(E<<16&4294967295|E>>>16),E=y+(I^b^_)+v[2]+3299628645&4294967295,y=I+(E<<23&4294967295|E>>>9),E=_+(I^(y|~b))+v[0]+4096336452&4294967295,_=y+(E<<6&4294967295|E>>>26),E=b+(y^(_|~I))+v[7]+1126891415&4294967295,b=_+(E<<10&4294967295|E>>>22),E=I+(_^(b|~y))+v[14]+2878612391&4294967295,I=b+(E<<15&4294967295|E>>>17),E=y+(b^(I|~_))+v[5]+4237533241&4294967295,y=I+(E<<21&4294967295|E>>>11),E=_+(I^(y|~b))+v[12]+1700485571&4294967295,_=y+(E<<6&4294967295|E>>>26),E=b+(y^(_|~I))+v[3]+2399980690&4294967295,b=_+(E<<10&4294967295|E>>>22),E=I+(_^(b|~y))+v[10]+4293915773&4294967295,I=b+(E<<15&4294967295|E>>>17),E=y+(b^(I|~_))+v[1]+2240044497&4294967295,y=I+(E<<21&4294967295|E>>>11),E=_+(I^(y|~b))+v[8]+1873313359&4294967295,_=y+(E<<6&4294967295|E>>>26),E=b+(y^(_|~I))+v[15]+4264355552&4294967295,b=_+(E<<10&4294967295|E>>>22),E=I+(_^(b|~y))+v[6]+2734768916&4294967295,I=b+(E<<15&4294967295|E>>>17),E=y+(b^(I|~_))+v[13]+1309151649&4294967295,y=I+(E<<21&4294967295|E>>>11),E=_+(I^(y|~b))+v[4]+4149444226&4294967295,_=y+(E<<6&4294967295|E>>>26),E=b+(y^(_|~I))+v[11]+3174756917&4294967295,b=_+(E<<10&4294967295|E>>>22),E=I+(_^(b|~y))+v[2]+718787259&4294967295,I=b+(E<<15&4294967295|E>>>17),E=y+(b^(I|~_))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}i.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var y=_-this.blockSize,v=this.B,I=this.h,b=0;b<_;){if(I==0)for(;b<=y;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<_;)if(v[I++]=w.charCodeAt(b++),I==this.blockSize){s(this,v),I=0;break}}else for(;b<_;)if(v[I++]=w[b++],I==this.blockSize){s(this,v),I=0;break}}this.h=I,this.o+=_},i.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var y=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=y&255,y/=256;for(this.u(w),w=Array(16),_=y=0;4>_;++_)for(var v=0;32>v;v+=8)w[y++]=this.g[_]>>>v&255;return w};function r(w,_){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=_(w)}function a(w,_){this.h=_;for(var y=[],v=!0,I=w.length-1;0<=I;I--){var b=w[I]|0;v&&b==_||(y[I]=b,v=!1)}this.g=y}var l={};function u(w){return-128<=w&&128>w?r(w,function(_){return new a([_|0],0>_?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return D(d(-w));for(var _=[],y=1,v=0;w>=y;v++)_[v]=w/y|0,y*=4294967296;return new a(_,0)}function p(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return D(p(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(_,8)),v=m,I=0;I<w.length;I+=8){var b=Math.min(8,w.length-I),E=parseInt(w.substring(I,I+b),_);8>b?(b=d(Math.pow(_,b)),v=v.j(b).add(d(E))):(v=v.j(y),v=v.add(d(E)))}return v}var m=u(0),T=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(k(this))return-D(this).m();for(var w=0,_=1,y=0;y<this.g.length;y++){var v=this.i(y);w+=(0<=v?v:4294967296+v)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(k(this))return"-"+D(this).toString(w);for(var _=d(Math.pow(w,6)),y=this,v="";;){var I=W(y,_).g;y=M(y,I.j(_));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=I,C(y))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function k(w){return w.h==-1}n.l=function(w){return w=M(this,w),k(w)?-1:C(w)?0:1};function D(w){for(var _=w.g.length,y=[],v=0;v<_;v++)y[v]=~w.g[v];return new a(y,~w.h).add(T)}n.abs=function(){return k(this)?D(this):this},n.add=function(w){for(var _=Math.max(this.g.length,w.g.length),y=[],v=0,I=0;I<=_;I++){var b=v+(this.i(I)&65535)+(w.i(I)&65535),E=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);v=E>>>16,b&=65535,E&=65535,y[I]=E<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function M(w,_){return w.add(D(_))}n.j=function(w){if(C(this)||C(w))return m;if(k(this))return k(w)?D(this).j(D(w)):D(D(this).j(w));if(k(w))return D(this.j(D(w)));if(0>this.l(A)&&0>w.l(A))return d(this.m()*w.m());for(var _=this.g.length+w.g.length,y=[],v=0;v<2*_;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<w.g.length;I++){var b=this.i(v)>>>16,E=this.i(v)&65535,ee=w.i(I)>>>16,Ae=w.i(I)&65535;y[2*v+2*I]+=E*Ae,x(y,2*v+2*I),y[2*v+2*I+1]+=b*Ae,x(y,2*v+2*I+1),y[2*v+2*I+1]+=E*ee,x(y,2*v+2*I+1),y[2*v+2*I+2]+=b*ee,x(y,2*v+2*I+2)}for(v=0;v<_;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=_;v<2*_;v++)y[v]=0;return new a(y,0)};function x(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function q(w,_){this.g=w,this.h=_}function W(w,_){if(C(_))throw Error("division by zero");if(C(w))return new q(m,m);if(k(w))return _=W(D(w),_),new q(D(_.g),D(_.h));if(k(_))return _=W(w,D(_)),new q(D(_.g),_.h);if(30<w.g.length){if(k(w)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var y=T,v=_;0>=v.l(w);)y=z(y),v=z(v);var I=Y(y,1),b=Y(v,1);for(v=Y(v,2),y=Y(y,2);!C(v);){var E=b.add(v);0>=E.l(w)&&(I=I.add(y),b=E),v=Y(v,1),y=Y(y,1)}return _=M(w,I.j(_)),new q(I,_)}for(I=m;0<=w.l(_);){for(y=Math.max(1,Math.floor(w.m()/_.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=d(y),E=b.j(_);k(E)||0<E.l(w);)y-=v,b=d(y),E=b.j(_);C(b)&&(b=T),I=I.add(b),w=M(w,E)}return new q(I,w)}n.A=function(w){return W(this,w).h},n.and=function(w){for(var _=Math.max(this.g.length,w.g.length),y=[],v=0;v<_;v++)y[v]=this.i(v)&w.i(v);return new a(y,this.h&w.h)},n.or=function(w){for(var _=Math.max(this.g.length,w.g.length),y=[],v=0;v<_;v++)y[v]=this.i(v)|w.i(v);return new a(y,this.h|w.h)},n.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),y=[],v=0;v<_;v++)y[v]=this.i(v)^w.i(v);return new a(y,this.h^w.h)};function z(w){for(var _=w.g.length+1,y=[],v=0;v<_;v++)y[v]=w.i(v)<<1|w.i(v-1)>>>31;return new a(y,w.h)}function Y(w,_){var y=_>>5;_%=32;for(var v=w.g.length-y,I=[],b=0;b<v;b++)I[b]=0<_?w.i(b+y)>>>_|w.i(b+y+1)<<32-_:w.i(b+y);return new a(I,w.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,vh=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Gt=a}).apply(typeof vc<"u"?vc:typeof self<"u"?self:typeof window<"u"?window:{});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ih,fi,Eh,Cs,wo,Th,wh,bh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=t(this);function s(o,c){if(c)e:{var h=i;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in h))break e;h=h[R]}o=o[o.length-1],g=h[o],c=c(g),c!=g&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function r(o,c){o instanceof String&&(o+="");var h=0,g=!1,R={next:function(){if(!g&&h<o.length){var N=h++;return{value:c(N,o[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return r(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function m(o,c,h){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function T(o,c,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,T.apply(null,arguments)}function A(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(g,R,N){for(var V=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)V[ne-2]=arguments[ne];return c.prototype[R].apply(g,V)}}function k(o){const c=o.length;if(0<c){const h=Array(c);for(let g=0;g<c;g++)h[g]=o[g];return h}return[]}function D(o,c){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(u(g)){const R=o.length||0,N=g.length||0;o.length=R+N;for(let V=0;V<N;V++)o[R+V]=g[V]}else o.push(g)}}class M{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function x(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function W(o){return W[" "](o),o}W[" "]=function(){};var z=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function Y(o,c,h){for(const g in o)c.call(h,o[g],g,o)}function w(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function _(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,c){let h,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(h in g)o[h]=g[h];for(let N=0;N<y.length;N++)h=y[N],Object.prototype.hasOwnProperty.call(g,h)&&(o[h]=g[h])}}function I(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function b(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Qn;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class ee{constructor(){this.h=this.g=null}add(c,h){const g=Ae.get();g.set(c,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Ae=new M(()=>new Ve,o=>o.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,nt=!1,Qn=new ee,Ct=()=>{const o=l.Promise.resolve(void 0);Ge=()=>{o.then(En)}};var En=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(h){b(h)}var c=Ae;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}nt=!1};function Ye(){this.s=this.s,this.C=this.C}Ye.prototype.s=!1,Ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var B=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o})();function ae(o,c){if(he.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(z){e:{try{W(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_e[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ae.aa.h.call(this)}}C(ae,he);var _e={2:"touch",3:"pen",4:"mouse"};ae.prototype.h=function(){ae.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),Jd=0;function Zd(o,c,h,g,R){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!g,this.ha=R,this.key=++Jd,this.da=this.fa=!1}function Xi(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ji(o){this.src=o,this.g={},this.h=0}Ji.prototype.add=function(o,c,h,g,R){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var V=wr(o,c,g,R);return-1<V?(c=o[V],h||(c.fa=!1)):(c=new Zd(c,this.src,N,!!g,R),c.fa=h,o.push(c)),c};function Tr(o,c){var h=c.type;if(h in o.g){var g=o.g[h],R=Array.prototype.indexOf.call(g,c,void 0),N;(N=0<=R)&&Array.prototype.splice.call(g,R,1),N&&(Xi(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function wr(o,c,h,g){for(var R=0;R<o.length;++R){var N=o[R];if(!N.da&&N.listener==c&&N.capture==!!h&&N.ha==g)return R}return-1}var br="closure_lm_"+(1e6*Math.random()|0),Ar={};function $a(o,c,h,g,R){if(Array.isArray(c)){for(var N=0;N<c.length;N++)$a(o,c[N],h,g,R);return null}return h=za(h),o&&o[it]?o.K(c,h,d(g)?!!g.capture:!1,R):ef(o,c,h,!1,g,R)}function ef(o,c,h,g,R,N){if(!c)throw Error("Invalid event type");var V=d(R)?!!R.capture:!!R,ne=Nr(o);if(ne||(o[br]=ne=new Ji(o)),h=ne.add(c,h,g,V,N),h.proxy)return h;if(g=tf(),h.proxy=g,g.src=o,g.listener=h,o.addEventListener)B||(R=V),R===void 0&&(R=!1),o.addEventListener(c.toString(),g,R);else if(o.attachEvent)o.attachEvent(ja(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function tf(){function o(h){return c.call(o.src,o.listener,h)}const c=nf;return o}function Ga(o,c,h,g,R){if(Array.isArray(c))for(var N=0;N<c.length;N++)Ga(o,c[N],h,g,R);else g=d(g)?!!g.capture:!!g,h=za(h),o&&o[it]?(o=o.i,c=String(c).toString(),c in o.g&&(N=o.g[c],h=wr(N,h,g,R),-1<h&&(Xi(N[h]),Array.prototype.splice.call(N,h,1),N.length==0&&(delete o.g[c],o.h--)))):o&&(o=Nr(o))&&(c=o.g[c.toString()],o=-1,c&&(o=wr(c,h,g,R)),(h=-1<o?c[o]:null)&&Rr(h))}function Rr(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[it])Tr(c.i,o);else{var h=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(h,g,o.capture):c.detachEvent?c.detachEvent(ja(h),g):c.addListener&&c.removeListener&&c.removeListener(g),(h=Nr(c))?(Tr(h,o),h.h==0&&(h.src=null,c[br]=null)):Xi(o)}}}function ja(o){return o in Ar?Ar[o]:Ar[o]="on"+o}function nf(o,c){if(o.da)o=!0;else{c=new ae(c,this);var h=o.listener,g=o.ha||o.src;o.fa&&Rr(o),o=h.call(g,c)}return o}function Nr(o){return o=o[br],o instanceof Ji?o:null}var Cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function za(o){return typeof o=="function"?o:(o[Cr]||(o[Cr]=function(c){return o.handleEvent(c)}),o[Cr])}function Re(){Ye.call(this),this.i=new Ji(this),this.M=this,this.F=null}C(Re,Ye),Re.prototype[it]=!0,Re.prototype.removeEventListener=function(o,c,h,g){Ga(this,o,c,h,g)};function Oe(o,c){var h,g=o.F;if(g)for(h=[];g;g=g.F)h.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new he(c,o);else if(c instanceof he)c.target=c.target||o;else{var R=c;c=new he(g,o),v(c,R)}if(R=!0,h)for(var N=h.length-1;0<=N;N--){var V=c.g=h[N];R=Zi(V,g,!0,c)&&R}if(V=c.g=o,R=Zi(V,g,!0,c)&&R,R=Zi(V,g,!1,c)&&R,h)for(N=0;N<h.length;N++)V=c.g=h[N],R=Zi(V,g,!1,c)&&R}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],g=0;g<h.length;g++)Xi(h[g]);delete o.g[c],o.h--}}this.F=null},Re.prototype.K=function(o,c,h,g){return this.i.add(String(o),c,!1,h,g)},Re.prototype.L=function(o,c,h,g){return this.i.add(String(o),c,!0,h,g)};function Zi(o,c,h,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,N=0;N<c.length;++N){var V=c[N];if(V&&!V.da&&V.capture==h){var ne=V.listener,Ee=V.ha||V.src;V.fa&&Tr(o.i,V),R=ne.call(Ee,g)!==!1&&R}}return R&&!g.defaultPrevented}function Ha(o,c,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Wa(o){o.g=Ha(()=>{o.g=null,o.i&&(o.i=!1,Wa(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class sf extends Ye{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Wa(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xn(o){Ye.call(this),this.h=o,this.g={}}C(Xn,Ye);var Ya=[];function Ka(o){Y(o.g,function(c,h){this.g.hasOwnProperty(h)&&Rr(c)},o),o.g={}}Xn.prototype.N=function(){Xn.aa.N.call(this),Ka(this)},Xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pr=l.JSON.stringify,rf=l.JSON.parse,of=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Sr(){}Sr.prototype.h=null;function Qa(o){return o.h||(o.h=o.i())}function Xa(){}var Jn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dr(){he.call(this,"d")}C(Dr,he);function kr(){he.call(this,"c")}C(kr,he);var nn={},Ja=null;function es(){return Ja=Ja||new Re}nn.La="serverreachability";function Za(o){he.call(this,nn.La,o)}C(Za,he);function Zn(o){const c=es();Oe(c,new Za(c))}nn.STAT_EVENT="statevent";function el(o,c){he.call(this,nn.STAT_EVENT,o),this.stat=c}C(el,he);function Le(o){const c=es();Oe(c,new el(c,o))}nn.Ma="timingevent";function tl(o,c){he.call(this,nn.Ma,o),this.size=c}C(tl,he);function ei(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function ti(){this.g=!0}ti.prototype.xa=function(){this.g=!1};function af(o,c,h,g,R,N){o.info(function(){if(o.g)if(N)for(var V="",ne=N.split("&"),Ee=0;Ee<ne.length;Ee++){var Z=ne[Ee].split("=");if(1<Z.length){var Ne=Z[0];Z=Z[1];var Ce=Ne.split("_");V=2<=Ce.length&&Ce[1]=="type"?V+(Ne+"="+Z+"&"):V+(Ne+"=redacted&")}}else V=null;else V=N;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+c+`
`+h+`
`+V})}function lf(o,c,h,g,R,N,V){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+c+`
`+h+`
`+N+" "+V})}function Tn(o,c,h,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+uf(o,h)+(g?" "+g:"")})}function cf(o,c){o.info(function(){return"TIMEOUT: "+c})}ti.prototype.info=function(){};function uf(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var g=h[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var N=R[0];if(N!="noop"&&N!="stop"&&N!="close")for(var V=1;V<R.length;V++)R[V]=""}}}}return Pr(h)}catch{return c}}var ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vr;function ns(){}C(ns,Sr),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},Vr=new ns;function Pt(o,c,h,g){this.j=o,this.i=c,this.l=h,this.R=g||1,this.U=new Xn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new il}function il(){this.i=null,this.g="",this.h=!1}var sl={},Or={};function Lr(o,c,h){o.L=1,o.v=os(gt(c)),o.m=h,o.P=!0,rl(o,null)}function rl(o,c){o.F=Date.now(),is(o),o.A=gt(o.v);var h=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),vl(h.i,"t",g),o.C=0,h=o.j.J,o.h=new il,o.g=Ml(o.j,h?c:null,!o.m),0<o.O&&(o.M=new sf(T(o.Y,o,o.g),o.O)),c=o.U,h=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Ya[0]=R.toString()),R=Ya);for(var N=0;N<R.length;N++){var V=$a(h,R[N],g||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Zn(),af(o.i,o.u,o.A,o.l,o.R,o.m)}Pt.prototype.ca=function(o){o=o.target;const c=this.M;c&&mt(o)==3?c.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{const Ce=mt(this.g);var c=this.g.Ba();const An=this.g.Z();if(!(3>Ce)&&(Ce!=3||this.g&&(this.h.h||this.g.oa()||Rl(this.g)))){this.J||Ce!=4||c==7||(c==8||0>=An?Zn(3):Zn(2)),Fr(this);var h=this.g.Z();this.X=h;t:if(ol(this)){var g=Rl(this.g);o="";var R=g.length,N=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sn(this),ni(this);var V="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(g[c],{stream:!(N&&c==R-1)});g.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,lf(this.i,this.u,this.A,this.l,this.R,Ce,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,Ee=this.g;if((ne=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(ne)){var Z=ne;break t}}Z=null}if(h=Z)Tn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mr(this,h);else{this.o=!1,this.s=3,Le(12),sn(this),ni(this);break e}}if(this.P){h=!0;let Xe;for(;!this.J&&this.C<V.length;)if(Xe=hf(this,V),Xe==Or){Ce==4&&(this.s=4,Le(14),h=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==sl){this.s=4,Le(15),Tn(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else Tn(this.i,this.l,Xe,null),Mr(this,Xe);if(ol(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ce!=4||V.length!=0||this.h.h||(this.s=1,Le(16),h=!1),this.o=this.o&&h,!h)Tn(this.i,this.l,V,"[Invalid Chunked Response]"),sn(this),ni(this);else if(0<V.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Gr(Ne),Ne.M=!0,Le(11))}}else Tn(this.i,this.l,V,null),Mr(this,V);Ce==4&&sn(this),this.o&&!this.J&&(Ce==4?Vl(this.j,this):(this.o=!1,is(this)))}else Cf(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Le(12)):(this.s=0,Le(13)),sn(this),ni(this)}}}catch{}finally{}};function ol(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function hf(o,c){var h=o.C,g=c.indexOf(`
`,h);return g==-1?Or:(h=Number(c.substring(h,g)),isNaN(h)?sl:(g+=1,g+h>c.length?Or:(c=c.slice(g,g+h),o.C=g+h,c)))}Pt.prototype.cancel=function(){this.J=!0,sn(this)};function is(o){o.S=Date.now()+o.I,al(o,o.I)}function al(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ei(T(o.ba,o),c)}function Fr(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Pt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(cf(this.i,this.A),this.L!=2&&(Zn(),Le(17)),sn(this),this.s=2,ni(this)):al(this,this.S-o)};function ni(o){o.j.G==0||o.J||Vl(o.j,o)}function sn(o){Fr(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ka(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Mr(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||xr(h.h,o))){if(!o.K&&xr(h.h,o)&&h.G==3){try{var g=h.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ds(h),us(h);else break e;$r(h),Le(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=ei(T(h.Za,h),6e3));if(1>=ul(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else on(h,11)}else if((o.K||h.g==o)&&ds(h),!x(c))for(R=h.Da.g.parse(c),c=0;c<R.length;c++){let Z=R[c];if(h.T=Z[0],Z=Z[1],h.G==2)if(Z[0]=="c"){h.K=Z[1],h.ia=Z[2];const Ne=Z[3];Ne!=null&&(h.la=Ne,h.j.info("VER="+h.la));const Ce=Z[4];Ce!=null&&(h.Aa=Ce,h.j.info("SVER="+h.Aa));const An=Z[5];An!=null&&typeof An=="number"&&0<An&&(g=1.5*An,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const Xe=o.g;if(Xe){const ps=Xe.g?Xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ps){var N=g.h;N.g||ps.indexOf("spdy")==-1&&ps.indexOf("quic")==-1&&ps.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ur(N,N.h),N.h=null))}if(g.D){const jr=Xe.g?Xe.g.getResponseHeader("X-HTTP-Session-Id"):null;jr&&(g.ya=jr,se(g.I,g.D,jr))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var V=o;if(g.qa=Fl(g,g.J?g.ia:null,g.W),V.K){hl(g.h,V);var ne=V,Ee=g.L;Ee&&(ne.I=Ee),ne.B&&(Fr(ne),is(ne)),g.g=V}else Dl(g);0<h.i.length&&hs(h)}else Z[0]!="stop"&&Z[0]!="close"||on(h,7);else h.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?on(h,7):Br(h):Z[0]!="noop"&&h.l&&h.l.ta(Z),h.v=0)}}Zn(4)}catch{}}var df=class{constructor(o,c){this.g=o,this.map=c}};function ll(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ul(o){return o.h?1:o.g?o.g.size:0}function xr(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ur(o,c){o.g?o.g.add(c):o.h=c}function hl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}ll.prototype.cancel=function(){if(this.i=dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function dl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return k(o.i)}function ff(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,g=0;g<h;g++)c.push(o[g]);return c}c=[],h=0;for(g in o)c[h++]=o[g];return c}function pf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const g in o)c[h++]=g;return c}}}function fl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=pf(o),g=ff(o),R=g.length,N=0;N<R;N++)c.call(void 0,g[N],h&&h[N],o)}var pl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gf(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var g=o[h].indexOf("="),R=null;if(0<=g){var N=o[h].substring(0,g);R=o[h].substring(g+1)}else N=o[h];c(N,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function rn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof rn){this.h=o.h,ss(this,o.j),this.o=o.o,this.g=o.g,rs(this,o.s),this.l=o.l;var c=o.i,h=new ri;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),gl(this,h),this.m=o.m}else o&&(c=String(o).match(pl))?(this.h=!1,ss(this,c[1]||"",!0),this.o=ii(c[2]||""),this.g=ii(c[3]||"",!0),rs(this,c[4]),this.l=ii(c[5]||"",!0),gl(this,c[6]||"",!0),this.m=ii(c[7]||"")):(this.h=!1,this.i=new ri(null,this.h))}rn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(si(c,ml,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(si(c,ml,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(si(h,h.charAt(0)=="/"?yf:_f,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",si(h,If)),o.join("")};function gt(o){return new rn(o)}function ss(o,c,h){o.j=h?ii(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function rs(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function gl(o,c,h){c instanceof ri?(o.i=c,Ef(o.i,o.h)):(h||(c=si(c,vf)),o.i=new ri(c,o.h))}function se(o,c,h){o.i.set(c,h)}function os(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ii(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function si(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,mf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function mf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ml=/[#\/\?@]/g,_f=/[#\?:]/g,yf=/[#\?]/g,vf=/[#\?@]/g,If=/#/g;function ri(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function St(o){o.g||(o.g=new Map,o.h=0,o.i&&gf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=ri.prototype,n.add=function(o,c){St(this),this.i=null,o=wn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function _l(o,c){St(o),c=wn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function yl(o,c){return St(o),c=wn(o,c),o.g.has(c)}n.forEach=function(o,c){St(this),this.g.forEach(function(h,g){h.forEach(function(R){o.call(c,R,g,this)},this)},this)},n.na=function(){St(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let g=0;g<c.length;g++){const R=o[g];for(let N=0;N<R.length;N++)h.push(c[g])}return h},n.V=function(o){St(this);let c=[];if(typeof o=="string")yl(this,o)&&(c=c.concat(this.g.get(wn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return St(this),this.i=null,o=wn(this,o),yl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function vl(o,c,h){_l(o,c),0<h.length&&(o.i=null,o.g.set(wn(o,c),k(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var g=c[h];const N=encodeURIComponent(String(g)),V=this.V(g);for(g=0;g<V.length;g++){var R=N;V[g]!==""&&(R+="="+encodeURIComponent(String(V[g]))),o.push(R)}}return this.i=o.join("&")};function wn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Ef(o,c){c&&!o.j&&(St(o),o.i=null,o.g.forEach(function(h,g){var R=g.toLowerCase();g!=R&&(_l(this,g),vl(this,R,h))},o)),o.j=c}function Tf(o,c){const h=new ti;if(l.Image){const g=new Image;g.onload=A(Dt,h,"TestLoadImage: loaded",!0,c,g),g.onerror=A(Dt,h,"TestLoadImage: error",!1,c,g),g.onabort=A(Dt,h,"TestLoadImage: abort",!1,c,g),g.ontimeout=A(Dt,h,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function wf(o,c){const h=new ti,g=new AbortController,R=setTimeout(()=>{g.abort(),Dt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(N=>{clearTimeout(R),N.ok?Dt(h,"TestPingServer: ok",!0,c):Dt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Dt(h,"TestPingServer: error",!1,c)})}function Dt(o,c,h,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(h)}catch{}}function bf(){this.g=new of}function Af(o,c,h){const g=h||"";try{fl(o,function(R,N){let V=R;d(R)&&(V=Pr(R)),c.push(g+N+"="+encodeURIComponent(V))})}catch(R){throw c.push(g+"type="+encodeURIComponent("_badmap")),R}}function as(o){this.l=o.Ub||null,this.j=o.eb||!1}C(as,Sr),as.prototype.g=function(){return new ls(this.l,this.j)},as.prototype.i=(function(o){return function(){return o}})({});function ls(o,c){Re.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ls,Re),n=ls.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,ai(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oi(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Il(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Il(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?oi(this):ai(this),this.readyState==3&&Il(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,oi(this))},n.Qa=function(o){this.g&&(this.response=o,oi(this))},n.ga=function(){this.g&&oi(this)};function oi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ai(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function ai(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function El(o){let c="";return Y(o,function(h,g){c+=g,c+=":",c+=h,c+=`\r
`}),c}function qr(o,c,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=El(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):se(o,c,h))}function ce(o){Re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ce,Re);var Rf=/^https?$/i,Nf=["POST","PUT"];n=ce.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vr.g(),this.v=this.o?Qa(this.o):Qa(Vr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(N){Tl(this,N);return}if(o=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)h.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())h.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(N=>N.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Nf,c,void 0))||g||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,V]of h)this.g.setRequestHeader(N,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Al(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){Tl(this,N)}};function Tl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,wl(o),cs(o)}function wl(o){o.A||(o.A=!0,Oe(o,"complete"),Oe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Oe(this,"complete"),Oe(this,"abort"),cs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?bl(this):this.bb())},n.bb=function(){bl(this)};function bl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||mt(o)!=4||o.Z()!=2)){if(o.u&&mt(o)==4)Ha(o.Ea,0,o);else if(Oe(o,"readystatechange"),mt(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var g;if(g=V===0){var R=String(o.D).match(pl)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),g=!Rf.test(R?R.toLowerCase():"")}h=g}if(h)Oe(o,"complete"),Oe(o,"success");else{o.m=6;try{var N=2<mt(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",wl(o)}}finally{cs(o)}}}}function cs(o,c){if(o.g){Al(o);const h=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Oe(o,"ready");try{h.onreadystatechange=g}catch{}}}function Al(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function mt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),rf(c)}};function Rl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Cf(o){const c={};o=(o.g&&2<=mt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(x(o[g]))continue;var h=I(o[g]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const N=c[R]||[];c[R]=N,N.push(h)}w(c,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function li(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Nl(o){this.Aa=0,this.i=[],this.j=new ti,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=li("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=li("baseRetryDelayMs",5e3,o),this.cb=li("retryDelaySeedMs",1e4,o),this.Wa=li("forwardChannelMaxRetries",2,o),this.wa=li("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ll(o&&o.concurrentRequestLimit),this.Da=new bf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Nl.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,g){Le(0),this.W=o,this.H=c||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=Fl(this,null,this.W),hs(this)};function Br(o){if(Cl(o),o.G==3){var c=o.U++,h=gt(o.I);if(se(h,"SID",o.K),se(h,"RID",c),se(h,"TYPE","terminate"),ci(o,h),c=new Pt(o,o.j,c),c.L=2,c.v=os(gt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Ml(c.j,null),c.g.ea(c.v)),c.F=Date.now(),is(c)}Ll(o)}function us(o){o.g&&(Gr(o),o.g.cancel(),o.g=null)}function Cl(o){us(o),o.u&&(l.clearTimeout(o.u),o.u=null),ds(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function hs(o){if(!cl(o.h)&&!o.s){o.s=!0;var c=o.Ga;Ge||Ct(),nt||(Ge(),nt=!0),Qn.add(c,o),o.B=0}}function Pf(o,c){return ul(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ei(T(o.Ga,o,c),Ol(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Pt(this,this.j,o);let N=this.o;if(this.S&&(N?(N=_(N),v(N,this.S)):N=this.S),this.m!==null||this.O||(R.H=N,N=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Sl(this,R,c),h=gt(this.I),se(h,"RID",o),se(h,"CVER",22),this.D&&se(h,"X-HTTP-Session-Id",this.D),ci(this,h),N&&(this.O?c="headers="+encodeURIComponent(String(El(N)))+"&"+c:this.m&&qr(h,this.m,N)),Ur(this.h,R),this.Ua&&se(h,"TYPE","init"),this.P?(se(h,"$req",c),se(h,"SID","null"),R.T=!0,Lr(R,h,null)):Lr(R,h,c),this.G=2}}else this.G==3&&(o?Pl(this,o):this.i.length==0||cl(this.h)||Pl(this))};function Pl(o,c){var h;c?h=c.l:h=o.U++;const g=gt(o.I);se(g,"SID",o.K),se(g,"RID",h),se(g,"AID",o.T),ci(o,g),o.m&&o.o&&qr(g,o.m,o.o),h=new Pt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Sl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ur(o.h,h),Lr(h,g,c)}function ci(o,c){o.H&&Y(o.H,function(h,g){se(c,g,h)}),o.l&&fl({},function(h,g){se(c,g,h)})}function Sl(o,c,h){h=Math.min(o.i.length,h);var g=o.l?T(o.l.Na,o.l,o):null;e:{var R=o.i;let N=-1;for(;;){const V=["count="+h];N==-1?0<h?(N=R[0].g,V.push("ofs="+N)):N=0:V.push("ofs="+N);let ne=!0;for(let Ee=0;Ee<h;Ee++){let Z=R[Ee].g;const Ne=R[Ee].map;if(Z-=N,0>Z)N=Math.max(0,R[Ee].g-100),ne=!1;else try{Af(Ne,V,"req"+Z+"_")}catch{g&&g(Ne)}}if(ne){g=V.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,g}function Dl(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Ge||Ct(),nt||(Ge(),nt=!0),Qn.add(c,o),o.v=0}}function $r(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ei(T(o.Fa,o),Ol(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,kl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ei(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Le(10),us(this),kl(this))};function Gr(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function kl(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=gt(o.qa);se(c,"RID","rpc"),se(c,"SID",o.K),se(c,"AID",o.T),se(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(c,"TO",o.ja),se(c,"TYPE","xmlhttp"),ci(o,c),o.m&&o.o&&qr(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=os(gt(c)),h.m=null,h.P=!0,rl(h,o)}n.Za=function(){this.C!=null&&(this.C=null,us(this),$r(this),Le(19))};function ds(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Vl(o,c){var h=null;if(o.g==c){ds(o),Gr(o),o.g=null;var g=2}else if(xr(o.h,c))h=c.D,hl(o.h,c),g=1;else return;if(o.G!=0){if(c.o)if(g==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;g=es(),Oe(g,new tl(g,h)),hs(o)}else Dl(o);else if(R=c.s,R==3||R==0&&0<c.X||!(g==1&&Pf(o,c)||g==2&&$r(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),R){case 1:on(o,5);break;case 4:on(o,10);break;case 3:on(o,6);break;default:on(o,2)}}}function Ol(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function on(o,c){if(o.j.info("Error code "+c),c==2){var h=T(o.fb,o),g=o.Xa;const R=!g;g=new rn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ss(g,"https"),os(g),R?Tf(g.toString(),h):wf(g.toString(),h)}else Le(2);o.G=0,o.l&&o.l.sa(c),Ll(o),Cl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function Ll(o){if(o.G=0,o.ka=[],o.l){const c=dl(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Fl(o,c,h){var g=h instanceof rn?gt(h):new rn(h);if(g.g!="")c&&(g.g=c+"."+g.g),rs(g,g.s);else{var R=l.location;g=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var N=new rn(null);g&&ss(N,g),c&&(N.g=c),R&&rs(N,R),h&&(N.l=h),g=N}return h=o.D,c=o.ya,h&&c&&se(g,h,c),se(g,"VER",o.la),ci(o,g),g}function Ml(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ce(new as({eb:h})):new ce(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xl(){}n=xl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fs(){}fs.prototype.g=function(o,c){return new je(o,c)};function je(o,c){Re.call(this),this.g=new Nl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!x(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!x(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new bn(this)}C(je,Re),je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},je.prototype.close=function(){Br(this.g)},je.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Pr(o),o=h);c.i.push(new df(c.Ya++,o)),c.G==3&&hs(c)},je.prototype.N=function(){this.g.l=null,delete this.j,Br(this.g),delete this.g,je.aa.N.call(this)};function Ul(o){Dr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(Ul,Dr);function ql(){kr.call(this),this.status=1}C(ql,kr);function bn(o){this.g=o}C(bn,xl),bn.prototype.ua=function(){Oe(this.g,"a")},bn.prototype.ta=function(o){Oe(this.g,new Ul(o))},bn.prototype.sa=function(o){Oe(this.g,new ql)},bn.prototype.ra=function(){Oe(this.g,"b")},fs.prototype.createWebChannel=fs.prototype.g,je.prototype.send=je.prototype.o,je.prototype.open=je.prototype.m,je.prototype.close=je.prototype.close,bh=function(){return new fs},wh=function(){return es()},Th=nn,wo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,Cs=ts,nl.COMPLETE="complete",Eh=nl,Xa.EventType=Jn,Jn.OPEN="a",Jn.CLOSE="b",Jn.ERROR="c",Jn.MESSAGE="d",Re.prototype.listen=Re.prototype.K,fi=Xa,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha,Ih=ce}).apply(typeof ys<"u"?ys:typeof self<"u"?self:typeof window<"u"?window:{});const Ic="@firebase/firestore",Ec="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Bo("@firebase/firestore");function Nn(){return mn.logLevel}function L(n,...e){if(mn.logLevel<=Q.DEBUG){const t=e.map(Zo);mn.debug(`Firestore (${zn}): ${n}`,...t)}}function bt(n,...e){if(mn.logLevel<=Q.ERROR){const t=e.map(Zo);mn.error(`Firestore (${zn}): ${n}`,...t)}}function zt(n,...e){if(mn.logLevel<=Q.WARN){const t=e.map(Zo);mn.warn(`Firestore (${zn}): ${n}`,...t)}}function Zo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Ah(n,i,t)}function Ah(n,e,t){let i=`FIRESTORE (${zn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw bt(i),new Error(i)}function te(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||Ah(e,s,i)}function H(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Se.UNAUTHENTICATED)))}shutdown(){}}class D_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class k_{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0,42304);let i=this.i;const s=u=>this.i!==i?(i=this.i,t(u)):Promise.resolve();let r=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Et,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=r;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},l=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Et)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(te(typeof i.accessToken=="string",31837,{l:i}),new Rh(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new Se(e)}}class V_{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class O_{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new V_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Se.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Tc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ke(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){te(this.o===void 0,3512);const i=r=>{r.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.m;return this.m=r.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Tc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Tc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=F_(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function K(n,e){return n<e?-1:n>e?1:0}function bo(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),s=e.codePointAt(t);if(i!==s){if(i<128&&s<128)return K(i,s);{const r=Nh(),a=M_(r.encode(wc(n,t)),r.encode(wc(e,t)));return a!==0?a:K(i,s)}}t+=i>65535?2:1}return K(n.length,e.length)}function wc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function M_(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return K(n[t],e[t]);return K(n.length,e.length)}function Mn(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="__name__";class rt{constructor(e,t,i){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&G(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return rt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rt?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=rt.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return K(e.length,t.length)}static compareSegments(e,t){const i=rt.isNumericId(e),s=rt.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?rt.extractNumericId(e).compare(rt.extractNumericId(t)):bo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gt.fromString(e.substring(4,e.length-2))}}class ie extends rt{construct(e,t,i){return new ie(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new ie(t)}static emptyPath(){return new ie([])}}const x_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends rt{construct(e,t,i){return new we(e,t,i)}static isValidIdentifier(e){return x_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bc}static keyField(){return new we([bc])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(r(),s++)}if(r(),a)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ie.fromString(e))}static fromName(e){return new U(ie.fromString(e).popFirst(5))}static empty(){return new U(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(n,e,t){if(!t)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function U_(n,e,t,i){if(e===!0&&i===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ac(n){if(!U.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Rc(n){if(U.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ph(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function or(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function Me(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=or(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function q_(n,e){if(e<=0)throw new O(P.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,e){const t={typeString:n};return e&&(t.value=e),t}function Bi(n,e){if(!Ph(n))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const a=n[i];if(s&&typeof a!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&a!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new O(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=-62135596800,Cc=1e6;class re{static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Cc);return new re(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Nc)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cc}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Bi(e,re._jsonSchema))return new re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Nc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}re._jsonSchemaVersion="firestore/timestamp/1.0",re._jsonSchema={type:me("string",re._jsonSchemaVersion),seconds:me("number"),nanoseconds:me("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new re(0,0))}static max(){return new j(new re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=-1;function B_(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=j.fromTimestamp(i===1e9?new re(t+1,0):new re(t,i));return new Ht(s,U.empty(),e)}function $_(n){return new Ht(n.readTime,n.key,Ci)}class Ht{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ht(j.min(),U.empty(),Ci)}static max(){return new Ht(j.max(),U.empty(),Ci)}}function G_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class z_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==j_)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):S.reject(t)}static resolve(e){return new S(((t,i)=>{t(e)}))}static reject(e){return new S(((t,i)=>{i(e)}))}static waitFor(e){return new S(((t,i)=>{let s=0,r=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++r,a&&r===s&&t()}),(u=>i(u)))})),a=!0,r===s&&t()}))}static or(e){let t=S.resolve(!1);for(const i of e)t=t.next((s=>s?S.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new S(((i,s)=>{const r=e.length,a=new Array(r);let l=0;for(let u=0;u<r;u++){const d=u;t(e[d]).next((p=>{a[d]=p,++l,l===r&&i(a)}),(p=>s(p)))}}))}static doWhile(e,t){return new S(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function H_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Wn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ar.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=-1;function lr(n){return n==null}function Gs(n){return n===0&&1/n==-1/0}function W_(n){return typeof n=="number"&&Number.isInteger(n)&&!Gs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="";function Y_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Pc(e)),e=K_(n.get(t),e);return Pc(e)}function K_(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case Sh:t+="";break;default:t+=r}}return t}function Pc(n){return n+Sh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function en(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Dh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vs(this.root,e,this.comparator,!1)}getReverseIterator(){return new vs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vs(this.root,e,this.comparator,!0)}}class vs{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Te.RED,this.left=s??Te.EMPTY,this.right=r??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Te(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Te.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dc(this.data.getIterator())}getIteratorFrom(e){return new Dc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class Dc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new We([])}unionWith(e){let t=new ye(we.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new We(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mn(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new kh("Invalid base64 string: "+r):r}})(e);return new be(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let a=0;a<s.length;++a)r+=String.fromCharCode(s[a]);return r})(e);return new be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const Q_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wt(n){if(te(!!n,39018),typeof n=="string"){let e=0;const t=Q_.exec(n);if(te(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:de(n.seconds),nanos:de(n.nanos)}}function de(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?be.fromBase64String(n):be.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="server_timestamp",Oh="__type__",Lh="__previous_value__",Fh="__local_write_time__";function na(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Oh])===null||t===void 0?void 0:t.stringValue)===Vh}function cr(n){const e=n.mapValue.fields[Lh];return na(e)?cr(e):e}function Pi(n){const e=Wt(n.mapValue.fields[Fh].timestampValue);return new re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,i,s,r,a,l,u,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=p}}const js="(default)";class Si{constructor(e,t){this.projectId=e,this.database=t||js}static empty(){return new Si("","")}get isDefaultDatabase(){return this.database===js}isEqual(e){return e instanceof Si&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="__type__",J_="__max__",Is={mapValue:{}},xh="__vector__",zs="value";function Kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?na(n)?4:ey(n)?9007199254740991:Z_(n)?10:11:G(28295,{value:n})}function ft(n,e){if(n===e)return!0;const t=Kt(n);if(t!==Kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pi(n).isEqual(Pi(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const a=Wt(s.timestampValue),l=Wt(r.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return Yt(s.bytesValue).isEqual(Yt(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return de(s.geoPointValue.latitude)===de(r.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return de(s.integerValue)===de(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const a=de(s.doubleValue),l=de(r.doubleValue);return a===l?Gs(a)===Gs(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Mn(n.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:case 11:return(function(s,r){const a=s.mapValue.fields||{},l=r.mapValue.fields||{};if(Sc(a)!==Sc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ft(a[u],l[u])))return!1;return!0})(n,e);default:return G(52216,{left:n})}}function Di(n,e){return(n.values||[]).find((t=>ft(t,e)))!==void 0}function xn(n,e){if(n===e)return 0;const t=Kt(n),i=Kt(e);if(t!==i)return K(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return(function(r,a){const l=de(r.integerValue||r.doubleValue),u=de(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return kc(n.timestampValue,e.timestampValue);case 4:return kc(Pi(n),Pi(e));case 5:return bo(n.stringValue,e.stringValue);case 6:return(function(r,a){const l=Yt(r),u=Yt(a);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(r,a){const l=r.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=K(l[d],u[d]);if(p!==0)return p}return K(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,a){const l=K(de(r.latitude),de(a.latitude));return l!==0?l:K(de(r.longitude),de(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Vc(n.arrayValue,e.arrayValue);case 10:return(function(r,a){var l,u,d,p;const m=r.fields||{},T=a.fields||{},A=(l=m[zs])===null||l===void 0?void 0:l.arrayValue,C=(u=T[zs])===null||u===void 0?void 0:u.arrayValue,k=K(((d=A?.values)===null||d===void 0?void 0:d.length)||0,((p=C?.values)===null||p===void 0?void 0:p.length)||0);return k!==0?k:Vc(A,C)})(n.mapValue,e.mapValue);case 11:return(function(r,a){if(r===Is.mapValue&&a===Is.mapValue)return 0;if(r===Is.mapValue)return 1;if(a===Is.mapValue)return-1;const l=r.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const T=bo(u[m],p[m]);if(T!==0)return T;const A=xn(l[u[m]],d[p[m]]);if(A!==0)return A}return K(u.length,p.length)})(n.mapValue,e.mapValue);default:throw G(23264,{le:t})}}function kc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=Wt(n),i=Wt(e),s=K(t.seconds,i.seconds);return s!==0?s:K(t.nanos,i.nanos)}function Vc(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=xn(t[s],i[s]);if(r)return r}return K(t.length,i.length)}function Un(n){return Ao(n)}function Ao(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Wt(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Yt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return U.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Ao(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const a of i)r?r=!1:s+=",",s+=`${a}:${Ao(t.fields[a])}`;return s+"}"})(n.mapValue):G(61005,{value:n})}function Ps(n){switch(Kt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cr(n);return e?16+Ps(e):16;case 5:return 2*n.stringValue.length;case 6:return Yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Ps(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return en(i.fields,((r,a)=>{s+=r.length+Ps(a)})),s})(n.mapValue);default:throw G(13486,{value:n})}}function Oc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ro(n){return!!n&&"integerValue"in n}function ia(n){return!!n&&"arrayValue"in n}function Lc(n){return!!n&&"nullValue"in n}function Fc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ss(n){return!!n&&"mapValue"in n}function Z_(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mh])===null||t===void 0?void 0:t.stringValue)===xh}function Ii(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return en(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Ii(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ii(n.arrayValue.values[t]);return e}return Object.assign({},n)}function ey(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===J_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ii(t)}setAll(e){let t=we.emptyPath(),i={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,i,s),i={},s=[],t=l.popLast()}a?i[l.lastSegment()]=Ii(a):s.push(l.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());Ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Ss(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){en(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new Be(Ii(this.value))}}function Uh(n){const e=[];return en(n.fields,((t,i)=>{const s=new we([t]);if(Ss(i)){const r=Uh(i.mapValue).fields;if(r.length===0)e.push(s);else for(const a of r)e.push(s.child(a))}else e.push(s)})),new We(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,i,s,r,a,l){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=a,this.documentState=l}static newInvalidDocument(e){return new De(e,0,j.min(),j.min(),j.min(),Be.empty(),0)}static newFoundDocument(e,t,i,s){return new De(e,1,t,j.min(),i,s,0)}static newNoDocument(e,t){return new De(e,2,t,j.min(),j.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new De(e,3,t,j.min(),j.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t){this.position=e,this.inclusive=t}}function Mc(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],a=n.position[s];if(r.field.isKeyField()?i=U.comparator(U.fromName(a.referenceValue),t.key):i=xn(a,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function xc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ft(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t="asc"){this.field=e,this.dir=t}}function ty(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{}class ge extends qh{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new iy(e,t,i):t==="array-contains"?new oy(e,i):t==="in"?new ay(e,i):t==="not-in"?new ly(e,i):t==="array-contains-any"?new cy(e,i):new ge(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new sy(e,i):new ry(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(xn(t,this.value)):t!==null&&Kt(this.value)===Kt(t)&&this.matchesComparison(xn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends qh{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new tt(e,t)}matches(e){return Bh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Bh(n){return n.op==="and"}function $h(n){return ny(n)&&Bh(n)}function ny(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function No(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+Un(n.value);if($h(n))return n.filters.map((e=>No(e))).join(",");{const e=n.filters.map((t=>No(t))).join(",");return`${n.op}(${e})`}}function Gh(n,e){return n instanceof ge?(function(i,s){return s instanceof ge&&i.op===s.op&&i.field.isEqual(s.field)&&ft(i.value,s.value)})(n,e):n instanceof tt?(function(i,s){return s instanceof tt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,a,l)=>r&&Gh(a,s.filters[l])),!0):!1})(n,e):void G(19439)}function jh(n){return n instanceof ge?(function(t){return`${t.field.canonicalString()} ${t.op} ${Un(t.value)}`})(n):n instanceof tt?(function(t){return t.op.toString()+" {"+t.getFilters().map(jh).join(" ,")+"}"})(n):"Filter"}class iy extends ge{constructor(e,t,i){super(e,t,i),this.key=U.fromName(i.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class sy extends ge{constructor(e,t){super(e,"in",t),this.keys=zh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ry extends ge{constructor(e,t){super(e,"not-in",t),this.keys=zh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>U.fromName(i.referenceValue)))}class oy extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ia(t)&&Di(t.arrayValue,this.value)}}class ay extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Di(this.value.arrayValue,t)}}class ly extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(Di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Di(this.value.arrayValue,t)}}class cy extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ia(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Di(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t=null,i=[],s=[],r=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=l,this.Pe=null}}function Uc(n,e=null,t=[],i=[],s=null,r=null,a=null){return new uy(n,e,t,i,s,r,a)}function sa(n){const e=H(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>No(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),lr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Un(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Un(i))).join(",")),e.Pe=t}return e.Pe}function ra(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ty(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Gh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!xc(n.startAt,e.startAt)&&xc(n.endAt,e.endAt)}function Co(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t=null,i=[],s=[],r=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function hy(n,e,t,i,s,r,a,l){return new Yn(n,e,t,i,s,r,a,l)}function ur(n){return new Yn(n)}function qc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hh(n){return n.collectionGroup!==null}function Ei(n){const e=H(n);if(e.Te===null){e.Te=[];const t=new Set;for(const r of e.explicitOrderBy)e.Te.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ye(we.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Te.push(new ki(r,i))})),t.has(we.keyField().canonicalString())||e.Te.push(new ki(we.keyField(),i))}return e.Te}function ct(n){const e=H(n);return e.Ie||(e.Ie=dy(e,Ei(n))),e.Ie}function dy(n,e){if(n.limitType==="F")return Uc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new ki(s.field,r)}));const t=n.endAt?new Hs(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Hs(n.startAt.position,n.startAt.inclusive):null;return Uc(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Po(n,e){const t=n.filters.concat([e]);return new Yn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ws(n,e,t){return new Yn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function hr(n,e){return ra(ct(n),ct(e))&&n.limitType===e.limitType}function Wh(n){return`${sa(ct(n))}|lt:${n.limitType}`}function Cn(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>jh(s))).join(", ")}]`),lr(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>Un(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>Un(s))).join(",")),`Target(${i})`})(ct(n))}; limitType=${n.limitType})`}function dr(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):U.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of Ei(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(a,l,u){const d=Mc(a,l,u);return a.inclusive?d<=0:d<0})(i.startAt,Ei(i),s)||i.endAt&&!(function(a,l,u){const d=Mc(a,l,u);return a.inclusive?d>=0:d>0})(i.endAt,Ei(i),s))})(n,e)}function fy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yh(n){return(e,t)=>{let i=!1;for(const s of Ei(n)){const r=py(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function py(n,e,t){const i=n.field.isKeyField()?U.comparator(e.key,t.key):(function(r,a,l){const u=a.data.field(r),d=l.data.field(r);return u!==null&&d!==null?xn(u,d):G(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return G(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){en(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return Dh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=new le(U.comparator);function At(){return gy}const Kh=new le(U.comparator);function pi(...n){let e=Kh;for(const t of n)e=e.insert(t.key,t);return e}function Qh(n){let e=Kh;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function cn(){return Ti()}function Xh(){return Ti()}function Ti(){return new vn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const my=new le(U.comparator),_y=new ye(U.comparator);function X(...n){let e=_y;for(const t of n)e=e.add(t);return e}const yy=new ye(K);function vy(){return yy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gs(e)?"-0":e}}function Jh(n){return{integerValue:""+n}}function Iy(n,e){return W_(e)?Jh(e):oa(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this._=void 0}}function Ey(n,e,t){return n instanceof Ys?(function(s,r){const a={fields:{[Oh]:{stringValue:Vh},[Fh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&na(r)&&(r=cr(r)),r&&(a.fields[Lh]=r),{mapValue:a}})(t,e):n instanceof Vi?ed(n,e):n instanceof Oi?td(n,e):(function(s,r){const a=Zh(s,r),l=Bc(a)+Bc(s.Ee);return Ro(a)&&Ro(s.Ee)?Jh(l):oa(s.serializer,l)})(n,e)}function Ty(n,e,t){return n instanceof Vi?ed(n,e):n instanceof Oi?td(n,e):t}function Zh(n,e){return n instanceof Ks?(function(i){return Ro(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class Ys extends fr{}class Vi extends fr{constructor(e){super(),this.elements=e}}function ed(n,e){const t=nd(e);for(const i of n.elements)t.some((s=>ft(s,i)))||t.push(i);return{arrayValue:{values:t}}}class Oi extends fr{constructor(e){super(),this.elements=e}}function td(n,e){let t=nd(e);for(const i of n.elements)t=t.filter((s=>!ft(s,i)));return{arrayValue:{values:t}}}class Ks extends fr{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Bc(n){return de(n.integerValue||n.doubleValue)}function nd(n){return ia(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wy(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof Vi&&s instanceof Vi||i instanceof Oi&&s instanceof Oi?Mn(i.elements,s.elements,ft):i instanceof Ks&&s instanceof Ks?ft(i.Ee,s.Ee):i instanceof Ys&&s instanceof Ys})(n.transform,e.transform)}class by{constructor(e,t){this.version=e,this.transformResults=t}}class xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xe}static exists(e){return new xe(void 0,e)}static updateTime(e){return new xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ds(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class pr{}function id(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new gr(n.key,xe.none()):new $i(n.key,n.data,xe.none());{const t=n.data,i=Be.empty();let s=new ye(we.comparator);for(let r of e.fields)if(!s.has(r)){let a=t.field(r);a===null&&r.length>1&&(r=r.popLast(),a=t.field(r)),a===null?i.delete(r):i.set(r,a),s=s.add(r)}return new tn(n.key,i,new We(s.toArray()),xe.none())}}function Ay(n,e,t){n instanceof $i?(function(s,r,a){const l=s.value.clone(),u=Gc(s.fieldTransforms,r,a.transformResults);l.setAll(u),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof tn?(function(s,r,a){if(!Ds(s.precondition,r))return void r.convertToUnknownDocument(a.version);const l=Gc(s.fieldTransforms,r,a.transformResults),u=r.data;u.setAll(sd(s)),u.setAll(l),r.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function wi(n,e,t,i){return n instanceof $i?(function(r,a,l,u){if(!Ds(r.precondition,a))return l;const d=r.value.clone(),p=jc(r.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,i):n instanceof tn?(function(r,a,l,u){if(!Ds(r.precondition,a))return l;const d=jc(r.fieldTransforms,u,a),p=a.data;return p.setAll(sd(r)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((m=>m.field)))})(n,e,t,i):(function(r,a,l){return Ds(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function Ry(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=Zh(i.transform,s||null);r!=null&&(t===null&&(t=Be.empty()),t.set(i.field,r))}return t||null}function $c(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Mn(i,s,((r,a)=>wy(r,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class $i extends pr{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class tn extends pr{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function sd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Gc(n,e,t){const i=new Map;te(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const r=n[s],a=r.transform,l=e.data.field(r.field);i.set(r.field,Ty(a,l,t[s]))}return i}function jc(n,e,t){const i=new Map;for(const s of n){const r=s.transform,a=t.data.field(s.field);i.set(s.field,Ey(r,a,e))}return i}class gr extends pr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ny extends pr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Ay(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=wi(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=wi(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Xh();return this.mutations.forEach((s=>{const r=e.get(s.key),a=r.overlayedDocument;let l=this.applyToLocalView(a,r.mutatedFields);l=t.has(s.key)?null:l;const u=id(a,l);u!==null&&i.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(j.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),X())}isEqual(e){return this.batchId===e.batchId&&Mn(this.mutations,e.mutations,((t,i)=>$c(t,i)))&&Mn(this.baseMutations,e.baseMutations,((t,i)=>$c(t,i)))}}class aa{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){te(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let s=(function(){return my})();const r=e.mutations;for(let a=0;a<r.length;a++)s=s.insert(r[a].key,i[a].version);return new aa(e,t,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,J;function Dy(n){switch(n){case P.OK:return G(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function rd(n){if(n===void 0)return bt("GRPC error has no .code"),P.UNKNOWN;switch(n){case pe.OK:return P.OK;case pe.CANCELLED:return P.CANCELLED;case pe.UNKNOWN:return P.UNKNOWN;case pe.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case pe.INTERNAL:return P.INTERNAL;case pe.UNAVAILABLE:return P.UNAVAILABLE;case pe.UNAUTHENTICATED:return P.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case pe.NOT_FOUND:return P.NOT_FOUND;case pe.ALREADY_EXISTS:return P.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return P.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case pe.ABORTED:return P.ABORTED;case pe.OUT_OF_RANGE:return P.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return P.UNIMPLEMENTED;case pe.DATA_LOSS:return P.DATA_LOSS;default:return G(39323,{code:n})}}(J=pe||(pe={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new Gt([4294967295,4294967295],0);function zc(n){const e=Nh().encode(n),t=new vh;return t.update(e),new Uint8Array(t.digest())}function Hc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Gt([t,i],0),new Gt([s,r],0)]}class la{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new gi(`Invalid padding: ${t}`);if(i<0)throw new gi(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new gi(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new gi(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Gt.fromNumber(this.fe)}pe(e,t,i){let s=e.add(t.multiply(Gt.fromNumber(i)));return s.compare(ky)===1&&(s=new Gt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=zc(e),[i,s]=Hc(t);for(let r=0;r<this.hashCount;r++){const a=this.pe(i,s,r);if(!this.ye(a))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),a=new la(r,s,t);return i.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=zc(e),[i,s]=Hc(t);for(let r=0;r<this.hashCount;r++){const a=this.pe(i,s,r);this.we(a)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Gi.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new mr(j.min(),s,new le(K),At(),X())}}class Gi{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Gi(i,t,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=s}}class od{constructor(e,t){this.targetId=e,this.De=t}}class ad{constructor(e,t,i=be.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Wc{constructor(){this.ve=0,this.Ce=Yc(),this.Fe=be.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=X(),t=X(),i=X();return this.Ce.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:G(38017,{changeType:r})}})),new Gi(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Yc()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,te(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Vy{constructor(e){this.We=e,this.Ge=new Map,this.ze=At(),this.je=Es(),this.Je=Es(),this.He=new le(K)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:G(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,i=e.De.count,s=this.st(t);if(s){const r=s.target;if(Co(r))if(i===0){const a=new U(r.path);this.Xe(t,a,De.newNoDocument(a,j.min()))}else te(i===1,20013,{expectedCount:i});else{const a=this.ot(t);if(a!==i){const l=this._t(e),u=l?this.ut(l,e,a):1;if(u!==0){this.rt(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let a,l;try{a=Yt(i).toUint8Array()}catch(u){if(u instanceof kh)return zt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new la(a,s,r)}catch(u){return zt(u instanceof gi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,r,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((r,a)=>{const l=this.st(a);if(l){if(r.current&&Co(l.target)){const u=new U(l.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,De.newNoDocument(u,e))}r.Ne&&(t.set(a,r.Le()),r.ke())}}));let i=X();this.Je.forEach(((r,a)=>{let l=!0;a.forEachWhile((u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(i=i.add(r))})),this.ze.forEach(((r,a)=>a.setReadTime(e)));const s=new mr(e,t,this.He,this.ze,i);return this.ze=At(),this.je=Es(),this.Je=Es(),this.He=new le(K),s}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Wc,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ye(K),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ye(K),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Wc),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Es(){return new le(U.comparator)}function Yc(){return new le(U.comparator)}const Oy={asc:"ASCENDING",desc:"DESCENDING"},Ly={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fy={and:"AND",or:"OR"};class My{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function So(n,e){return n.useProto3Json||lr(e)?e:{value:e}}function Qs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ld(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xy(n,e){return Qs(n,e.toTimestamp())}function ut(n){return te(!!n,49232),j.fromTimestamp((function(t){const i=Wt(t);return new re(i.seconds,i.nanos)})(n))}function ca(n,e){return Do(n,e).canonicalString()}function Do(n,e){const t=(function(s){return new ie(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function cd(n){const e=ie.fromString(n);return te(pd(e),10190,{key:e.toString()}),e}function ko(n,e){return ca(n.databaseId,e.path)}function Jr(n,e){const t=cd(e);if(t.get(1)!==n.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(hd(t))}function ud(n,e){return ca(n.databaseId,e)}function Uy(n){const e=cd(n);return e.length===4?ie.emptyPath():hd(e)}function Vo(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hd(n){return te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Kc(n,e,t){return{name:ko(n,e),fields:t.value.mapValue.fields}}function qy(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(d,p){return d.useProto3Json?(te(p===void 0||typeof p=="string",58123),be.fromBase64String(p||"")):(te(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),be.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(d){const p=d.code===void 0?P.UNKNOWN:rd(d.code);return new O(p,d.message||"")})(a);t=new ad(i,s,r,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Jr(n,i.document.name),r=ut(i.document.updateTime),a=i.document.createTime?ut(i.document.createTime):j.min(),l=new Be({mapValue:{fields:i.document.fields}}),u=De.newFoundDocument(s,r,a,l),d=i.targetIds||[],p=i.removedTargetIds||[];t=new ks(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Jr(n,i.document),r=i.readTime?ut(i.readTime):j.min(),a=De.newNoDocument(s,r),l=i.removedTargetIds||[];t=new ks([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Jr(n,i.document),r=i.removedTargetIds||[];t=new ks([],r,s,null)}else{if(!("filter"in e))return G(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,a=new Sy(s,r),l=i.targetId;t=new od(l,a)}}return t}function By(n,e){let t;if(e instanceof $i)t={update:Kc(n,e.key,e.value)};else if(e instanceof gr)t={delete:ko(n,e.key)};else if(e instanceof tn)t={update:Kc(n,e.key,e.data),updateMask:Qy(e.fieldMask)};else{if(!(e instanceof Ny))return G(16599,{Rt:e.type});t={verify:ko(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(r,a){const l=a.transform;if(l instanceof Ys)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ks)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw G(20930,{transform:a.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:xy(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G(27497)})(n,e.precondition)),t}function $y(n,e){return n&&n.length>0?(te(e!==void 0,14353),n.map((t=>(function(s,r){let a=s.updateTime?ut(s.updateTime):ut(r);return a.isEqual(j.min())&&(a=ut(r)),new by(a,s.transformResults||[])})(t,e)))):[]}function Gy(n,e){return{documents:[ud(n,e.path)]}}function jy(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=ud(n,s);const r=(function(d){if(d.length!==0)return fd(tt.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const a=(function(d){if(d.length!==0)return d.map((p=>(function(T){return{field:Pn(T.field),direction:Wy(T.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=So(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{Vt:t,parent:s}}function zy(n){let e=Uy(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){te(i===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let r=[];t.where&&(r=(function(m){const T=dd(m);return T instanceof tt&&$h(T)?T.getFilters():[T]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((T=>(function(C){return new ki(Sn(C.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(T)))})(t.orderBy));let l=null;t.limit&&(l=(function(m){let T;return T=typeof m=="object"?m.value:m,lr(T)?null:T})(t.limit));let u=null;t.startAt&&(u=(function(m){const T=!!m.before,A=m.values||[];return new Hs(A,T)})(t.startAt));let d=null;return t.endAt&&(d=(function(m){const T=!m.before,A=m.values||[];return new Hs(A,T)})(t.endAt)),hy(e,s,a,r,l,"F",u,d)}function Hy(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Sn(t.unaryFilter.field);return ge.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Sn(t.unaryFilter.field);return ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Sn(t.unaryFilter.field);return ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Sn(t.unaryFilter.field);return ge.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ge.create(Sn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return tt.create(t.compositeFilter.filters.map((i=>dd(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}})(t.compositeFilter.op))})(n):G(30097,{filter:n})}function Wy(n){return Oy[n]}function Yy(n){return Ly[n]}function Ky(n){return Fy[n]}function Pn(n){return{fieldPath:n.canonicalString()}}function Sn(n){return we.fromServerFormat(n.fieldPath)}function fd(n){return n instanceof ge?(function(t){if(t.op==="=="){if(Fc(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NAN"}};if(Lc(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fc(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NOT_NAN"}};if(Lc(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pn(t.field),op:Yy(t.op),value:t.value}}})(n):n instanceof tt?(function(t){const i=t.getFilters().map((s=>fd(s)));return i.length===1?i[0]:{compositeFilter:{op:Ky(t.op),filters:i}}})(n):G(54877,{filter:n})}function Qy(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function pd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,i,s,r=j.min(),a=j.min(),l=be.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.gt=e}}function Jy(n){const e=zy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ws(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.Dn=new e0}addToCollectionParentIndex(e,t){return this.Dn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(Ht.min())}updateCollectionGroup(e,t,i){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class e0{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new ye(ie.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ye(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gd=41943040;class Ue{static withCacheSize(e){return new Ue(e,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue.DEFAULT_COLLECTION_PERCENTILE=10,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ue.DEFAULT=new Ue(gd,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ue.DISABLED=new Ue(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new qn(0)}static ur(){return new qn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="LruGarbageCollector",t0=1048576;function Jc([n,e],[t,i]){const s=K(n,t);return s===0?K(e,i):s}class n0{constructor(e){this.Tr=e,this.buffer=new ye(Jc),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Jc(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class i0{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){L(Xc,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wn(t)?L(Xc,"Ignoring IndexedDB error during garbage collection: ",t):await Hn(t)}await this.Rr(3e5)}))}}class s0{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return S.resolve(ar.ue);const i=new n0(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Qc)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qc):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,s,r,a,l,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(i=m,l=Date.now(),this.removeTargets(e,i,t)))).next((m=>(r=m,u=Date.now(),this.removeOrphanedDocuments(e,i)))).next((m=>(d=Date.now(),Nn()<=Q.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${r} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:m}))))}}function r0(n,e){return new s0(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.changes=new vn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?S.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&wi(i.mutation,s,We.empty(),re.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,X()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=X()){const s=cn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let a=pi();return r.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const i=cn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,X())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,i,s){let r=At();const a=Ti(),l=(function(){return Ti()})();return t.forEach(((u,d)=>{const p=i.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof tn)?r=r.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),wi(p.mutation,d,p.mutation.getFieldMask(),re.now())):a.set(d.key,We.empty())})),this.recalculateAndSaveOverlays(e,r).next((u=>(u.forEach(((d,p)=>a.set(d,p))),t.forEach(((d,p)=>{var m;return l.set(d,new a0(p,(m=a.get(d))!==null&&m!==void 0?m:null))})),l)))}recalculateAndSaveOverlays(e,t){const i=Ti();let s=new le(((a,l)=>a-l)),r=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let p=i.get(u)||We.empty();p=l.applyToLocalView(d,p),i.set(u,p);const m=(s.get(l.batchId)||X()).add(u);s=s.insert(l.batchId,m)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=Xh();p.forEach((T=>{if(!r.has(T)){const A=id(t.get(T),i.get(T));A!==null&&m.set(T,A),r=r.add(T)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return S.waitFor(a)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return(function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const a=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):S.resolve(cn());let l=Ci,u=r;return a.next((d=>S.forEach(d,((p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),r.get(p)?S.resolve():this.remoteDocumentCache.getEntry(e,p).next((T=>{u=u.insert(p,T)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,u,d,X()))).next((p=>({batchId:l,changes:Qh(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((i=>{let s=pi();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let a=pi();return this.indexManager.getCollectionParents(e,r).next((l=>S.forEach(l,(u=>{const d=(function(m,T){return new Yn(T,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,i,s).next((p=>{p.forEach(((m,T)=>{a=a.insert(m,T)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((a=>{r.forEach(((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,De.newInvalidDocument(p)))}));let l=pi();return a.forEach(((u,d)=>{const p=r.get(u);p!==void 0&&wi(p.mutation,d,We.empty(),re.now()),dr(t,d)&&(l=l.insert(u,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return S.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ut(s.createTime)}})(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:Jy(s.bundledQuery),readTime:ut(s.readTime)}})(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.overlays=new le(U.comparator),this.kr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const i=cn();return S.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.wt(e,t,r)})),S.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.kr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.kr.delete(i)),S.resolve()}getOverlaysForCollection(e,t,i){const s=cn(),r=t.length+1,a=new U(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&u.largestBatchId>i&&s.set(u.getKey(),u)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new le(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>i){let p=r.get(d.largestBatchId);p===null&&(p=cn(),r=r.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=cn(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,p)=>l.set(d,p))),!(l.size()>=s)););return S.resolve(l)}wt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(i.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new Py(t,i));let r=this.kr.get(t);r===void 0&&(r=X(),this.kr.set(t,r)),this.kr.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(){this.sessionToken=be.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this.qr=new ye(ve.Qr),this.$r=new ye(ve.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new ve(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new ve(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new U(new ie([])),i=new ve(t,e),s=new ve(t,e+1),r=[];return this.$r.forEachInRange([i,s],(a=>{this.Wr(a),r.push(a.key)})),r}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new U(new ie([])),i=new ve(t,e),s=new ve(t,e+1);let r=X();return this.$r.forEachInRange([i,s],(a=>{r=r.add(a.key)})),r}containsKey(e){const t=new ve(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class ve{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return U.comparator(e.key,t.key)||K(e.Hr,t.Hr)}static Ur(e,t){return K(e.Hr,t.Hr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ye(ve.Qr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Cy(r,t,i,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new ve(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return S.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?ta:this.er-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new ve(t,0),s=new ve(t,Number.POSITIVE_INFINITY),r=[];return this.Yr.forEachInRange([i,s],(a=>{const l=this.Zr(a.Hr);r.push(l)})),S.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new ye(K);return t.forEach((s=>{const r=new ve(s,0),a=new ve(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([r,a],(l=>{i=i.add(l.Hr)}))})),S.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;U.isDocumentKey(r)||(r=r.child(""));const a=new ve(new U(r),0);let l=new ye(K);return this.Yr.forEachWhile((u=>{const d=u.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Hr)),!0)}),a),S.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){te(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return S.forEach(t.mutations,(s=>{const r=new ve(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new ve(t,0),s=this.Yr.firstAfterOrEqual(i);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.ni=e,this.docs=(function(){return new le(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return S.resolve(i?i.document.mutableCopy():De.newInvalidDocument(t))}getEntries(e,t){let i=At();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():De.newInvalidDocument(s))})),S.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=At();const a=t.path,l=new U(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||G_($_(p),i)<=0||(s.has(p.key)||dr(t,p))&&(r=r.insert(p.key,p.mutableCopy()))}return S.resolve(r)}getAllFromCollectionGroup(e,t,i,s){G(9500)}ri(e,t){return S.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new p0(this)}getSize(e){return S.resolve(this.size)}}class p0 extends o0{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(i)})),S.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.persistence=e,this.ii=new vn((t=>sa(t)),ra),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.si=0,this.oi=new ua,this.targetCount=0,this._i=qn.ar()}forEachTarget(e,t){return this.ii.forEach(((i,s)=>t(s))),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),S.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new qn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.hr(t),S.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&i.get(l.targetId)===null&&(this.ii.delete(a),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),S.waitFor(r).next((()=>s))}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return S.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),S.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((a=>{r.push(s.markPotentiallyOrphaned(e,a))})),S.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return S.resolve(i)}containsKey(e,t){return S.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.ai={},this.overlays={},this.ui=new ar(0),this.ci=!1,this.ci=!0,this.li=new h0,this.referenceDelegate=e(this),this.hi=new g0(this),this.indexManager=new Zy,this.remoteDocumentCache=(function(s){return new f0(s)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new Xy(t),this.Ti=new c0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new u0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new d0(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){L("MemoryPersistence","Starting transaction:",e);const s=new m0(this.ui.next());return this.referenceDelegate.Ii(),i(s).next((r=>this.referenceDelegate.di(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return S.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class m0 extends z_{constructor(e){super(),this.currentSequenceNumber=e}}class ha{constructor(e){this.persistence=e,this.Ai=new ua,this.Ri=null}static Vi(e){return new ha(e)}get mi(){if(this.Ri)return this.Ri;throw G(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),S.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),S.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.mi.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.mi,(i=>{const s=U.fromPath(i);return this.fi(e,s).next((r=>{r||t.removeEntry(s,j.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return S.or([()=>S.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Xs{constructor(e,t){this.persistence=e,this.gi=new vn((i=>Y_(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=r0(this,t)}static Vi(e,t){return new Xs(e,t)}Ii(){}di(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return S.forEach(this.gi,((i,s)=>this.Sr(e,i,s).next((r=>r?S.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(i++,r.removeEntry(a,j.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),S.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),S.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ps(e.data.value)),t}Sr(e,t,i){return S.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return S.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=s}static Es(e,t){let i=X(),s=X();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new da(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Jf()?8:H_(ke())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.ps(e,t).next((a=>{r.result=a})).next((()=>{if(!r.result)return this.ys(e,t,s,i).next((a=>{r.result=a}))})).next((()=>{if(r.result)return;const a=new _0;return this.ws(e,t,a).next((l=>{if(r.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>r.result))}Ss(e,t,i,s){return i.documentReadCount<this.Vs?(Nn()<=Q.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Cn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),S.resolve()):(Nn()<=Q.DEBUG&&L("QueryEngine","Query:",Cn(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.fs*s?(Nn()<=Q.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Cn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ct(t))):S.resolve())}ps(e,t){if(qc(t))return S.resolve(null);let i=ct(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ws(t,null,"F"),i=ct(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const a=X(...r);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,i).next((u=>{const d=this.bs(t,l);return this.Ds(t,d,a,u.readTime)?this.ps(e,Ws(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ys(e,t,i,s){return qc(t)||s.isEqual(j.min())?S.resolve(null):this.gs.getDocuments(e,i).next((r=>{const a=this.bs(t,r);return this.Ds(t,a,i,s)?S.resolve(null):(Nn()<=Q.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cn(t)),this.vs(e,a,t,B_(s,Ci)).next((l=>l)))}))}bs(e,t){let i=new ye(Yh(e));return t.forEach(((s,r)=>{dr(e,r)&&(i=i.add(r))})),i}Ds(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ws(e,t,i){return Nn()<=Q.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Cn(t)),this.gs.getDocumentsMatchingQuery(e,t,Ht.min(),i)}vs(e,t,i,s){return this.gs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((a=>{r=r.insert(a.key,a)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="LocalStore",v0=3e8;class I0{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new le(K),this.Ms=new vn((r=>sa(r)),ra),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new l0(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function E0(n,e,t,i){return new I0(n,e,t,i)}async function _d(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const a=[],l=[];let u=X();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of r){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(i,u).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function T0(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const s=e.batch.keys(),r=t.Os.newChangeBuffer({trackRemovals:!0});return(function(l,u,d,p){const m=d.batch,T=m.keys();let A=S.resolve();return T.forEach((C=>{A=A.next((()=>p.getEntry(u,C))).next((k=>{const D=d.docVersions.get(C);te(D!==null,48541),k.version.compareTo(D)<0&&(m.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),p.addEntry(k)))}))})),A.next((()=>l.mutationQueue.removeMutationBatch(u,m)))})(t,i,e,r).next((()=>r.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(l){let u=X();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(i,s)))}))}function yd(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function w0(n,e){const t=H(n),i=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const l=[];e.targetChanges.forEach(((p,m)=>{const T=s.get(m);if(!T)return;l.push(t.hi.removeMatchingKeys(r,p.removedDocuments,m).next((()=>t.hi.addMatchingKeys(r,p.addedDocuments,m))));let A=T.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(be.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,i)),s=s.insert(m,A),(function(k,D,M){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=v0?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(T,A,p)&&l.push(t.hi.updateTargetData(r,A))}));let u=At(),d=X();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,p))})),l.push(b0(r,a,e.documentUpdates).next((p=>{u=p.Ls,d=p.ks}))),!i.isEqual(j.min())){const p=t.hi.getLastRemoteSnapshotVersion(r).next((m=>t.hi.setTargetsMetadata(r,r.currentSequenceNumber,i)));l.push(p)}return S.waitFor(l).next((()=>a.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,u,d))).next((()=>u))})).then((r=>(t.Fs=s,r)))}function b0(n,e,t){let i=X(),s=X();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let a=At();return t.forEach(((l,u)=>{const d=r.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):L(fa,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)})),{Ls:a,ks:s}}))}function A0(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=ta),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function R0(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.hi.getTargetData(i,e).next((r=>r?(s=r,S.resolve(s)):t.hi.allocateTargetId(i).next((a=>(s=new Ut(e,a,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.Fs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function Oo(n,e,t){const i=H(n),s=i.Fs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(a=>i.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Wn(a))throw a;L(fa,`Failed to update sequence numbers for target ${e}: ${a}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(s.target)}function Zc(n,e,t){const i=H(n);let s=j.min(),r=X();return i.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,p){const m=H(u),T=m.Ms.get(p);return T!==void 0?S.resolve(m.Fs.get(T)):m.hi.getTargetData(d,p)})(i,a,ct(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{r=u}))})).next((()=>i.Cs.getDocumentsMatchingQuery(a,e,t?s:j.min(),t?r:X()))).next((l=>(N0(i,fy(e),l),{documents:l,qs:r})))))}function N0(n,e,t){let i=n.xs.get(e)||j.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.xs.set(e,i)}class eu{constructor(){this.activeTargetIds=vy()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class C0{constructor(){this.Fo=new eu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new eu,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="ConnectivityMonitor";class nu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){L(tu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){L(tu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts=null;function Lo(){return Ts===null?Ts=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ts++,"0x"+Ts.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="RestConnection",S0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class D0{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.Ko=this.databaseId.database===js?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const a=Lo(),l=this.Go(e,t.toUriEncodedString());L(Zr,`Sending RPC '${e}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,r);const{host:d}=new URL(l),p=$n(d);return this.jo(e,l,u,i,p).then((m=>(L(Zr,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw zt(Zr,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",i),m}))}Jo(e,t,i,s,r,a){return this.Wo(e,t,i,s,r)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+zn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Go(e,t){const i=S0[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="WebChannelConnection";class V0 extends D0{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,s,r){const a=Lo();return new Promise(((l,u)=>{const d=new Ih;d.setWithCredentials(!0),d.listenOnce(Eh.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Cs.NO_ERROR:const m=d.getResponseJson();L(Pe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case Cs.TIMEOUT:L(Pe,`RPC '${e}' ${a} timed out`),u(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Cs.HTTP_ERROR:const T=d.getStatus();if(L(Pe,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A?.error;if(C&&C.status&&C.message){const k=(function(M){const x=M.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(x)>=0?x:P.UNKNOWN})(C.status);u(new O(k,C.message))}else u(new O(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new O(P.UNAVAILABLE,"Connection failed."));break;default:G(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{L(Pe,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(s);L(Pe,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,i,15)}))}P_(e,t,i){const s=Lo(),r=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=bh(),l=wh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,i),u.encodeInitMessageHeaders=!0;const p=r.join("");L(Pe,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=a.createWebChannel(p,u);this.T_(m);let T=!1,A=!1;const C=new k0({Ho:D=>{A?L(Pe,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(T||(L(Pe,`Opening RPC '${e}' stream ${s} transport.`),m.open(),T=!0),L(Pe,`RPC '${e}' stream ${s} sending:`,D),m.send(D))},Yo:()=>m.close()}),k=(D,M,x)=>{D.listen(M,(q=>{try{x(q)}catch(W){setTimeout((()=>{throw W}),0)}}))};return k(m,fi.EventType.OPEN,(()=>{A||(L(Pe,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),k(m,fi.EventType.CLOSE,(()=>{A||(A=!0,L(Pe,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(m))})),k(m,fi.EventType.ERROR,(D=>{A||(A=!0,zt(Pe,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),C.__(new O(P.UNAVAILABLE,"The operation could not be completed")))})),k(m,fi.EventType.MESSAGE,(D=>{var M;if(!A){const x=D.data[0];te(!!x,16349);const q=x,W=q?.error||((M=q[0])===null||M===void 0?void 0:M.error);if(W){L(Pe,`RPC '${e}' stream ${s} received error:`,W);const z=W.status;let Y=(function(y){const v=pe[y];if(v!==void 0)return rd(v)})(z),w=W.message;Y===void 0&&(Y=P.INTERNAL,w="Unknown error status: "+z+" with message "+W.message),A=!0,C.__(new O(Y,w)),m.close()}else L(Pe,`RPC '${e}' stream ${s} received:`,x),C.a_(x)}})),k(l,Th.STAT_EVENT,(D=>{D.stat===wo.PROXY?L(Pe,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===wo.NOPROXY&&L(Pe,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function eo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(n){return new My(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=s,this.A_=r,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-i);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="PersistentStream";class Id{constructor(e,t,i,s,r,a,l,u){this.Fi=e,this.w_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new vd(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(bt(t.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.b_===t&&this.W_(i,s)}),(i=>{e((()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(s)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{i((()=>this.G_(s)))})),this.stream.onMessage((s=>{i((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return L(iu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(L(iu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class O0 extends Id{constructor(e,t,i,s,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,a),this.serializer=r}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=qy(this.serializer,e),i=(function(r){if(!("targetChange"in r))return j.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?ut(a.readTime):j.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=Vo(this.serializer),t.addTarget=(function(r,a){let l;const u=a.target;if(l=Co(u)?{documents:Gy(r,u)}:{query:jy(r,u).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ld(r,a.resumeToken);const d=So(r,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(j.min())>0){l.readTime=Qs(r,a.snapshotVersion.toTimestamp());const d=So(r,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const i=Hy(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=Vo(this.serializer),t.removeTarget=e,this.k_(t)}}class L0 extends Id{constructor(e,t,i,s,r,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,a),this.serializer=r}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=$y(e.writeResults,e.commitTime),i=ut(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=Vo(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>By(this.serializer,i)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{}class M0 extends F0{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,a])=>this.connection.Wo(e,Do(t,i),s,r,a))).catch((r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new O(P.UNKNOWN,r.toString())}))}Jo(e,t,i,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,Do(t,i),s,a,l,r))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(P.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class x0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(bt(t),this._a=!1):L("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="RemoteStore";class U0{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=r,this.Ea.xo((a=>{i.enqueueAndForget((async()=>{In(this)&&(L(_n,"Restarting streams for network reachability change."),await(async function(u){const d=H(u);d.Ia.add(4),await ji(d),d.Aa.set("Unknown"),d.Ia.delete(4),await yr(d)})(this))}))})),this.Aa=new x0(i,s)}}async function yr(n){if(In(n))for(const e of n.da)await e(!0)}async function ji(n){for(const e of n.da)await e(!1)}function Ed(n,e){const t=H(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),_a(t)?ma(t):Kn(t).x_()&&ga(t,e))}function pa(n,e){const t=H(n),i=Kn(t);t.Ta.delete(e),i.x_()&&Td(t,e),t.Ta.size===0&&(i.x_()?i.B_():In(t)&&t.Aa.set("Unknown"))}function ga(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Kn(n).H_(e)}function Td(n,e){n.Ra.$e(e),Kn(n).Y_(e)}function ma(n){n.Ra=new Vy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Kn(n).start(),n.Aa.aa()}function _a(n){return In(n)&&!Kn(n).M_()&&n.Ta.size>0}function In(n){return H(n).Ia.size===0}function wd(n){n.Ra=void 0}async function q0(n){n.Aa.set("Online")}async function B0(n){n.Ta.forEach(((e,t)=>{ga(n,e)}))}async function $0(n,e){wd(n),_a(n)?(n.Aa.la(e),ma(n)):n.Aa.set("Unknown")}async function G0(n,e,t){if(n.Aa.set("Online"),e instanceof ad&&e.state===2&&e.cause)try{await(async function(s,r){const a=r.cause;for(const l of r.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))})(n,e)}catch(i){L(_n,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Js(n,i)}else if(e instanceof ks?n.Ra.Ye(e):e instanceof od?n.Ra.it(e):n.Ra.et(e),!t.isEqual(j.min()))try{const i=await yd(n.localStore);t.compareTo(i)>=0&&await(function(r,a){const l=r.Ra.Pt(a);return l.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=r.Ta.get(d);p&&r.Ta.set(d,p.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,d)=>{const p=r.Ta.get(u);if(!p)return;r.Ta.set(u,p.withResumeToken(be.EMPTY_BYTE_STRING,p.snapshotVersion)),Td(r,u);const m=new Ut(p.target,u,d,p.sequenceNumber);ga(r,m)})),r.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(i){L(_n,"Failed to raise snapshot:",i),await Js(n,i)}}async function Js(n,e,t){if(!Wn(e))throw e;n.Ia.add(1),await ji(n),n.Aa.set("Offline"),t||(t=()=>yd(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(_n,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await yr(n)}))}function bd(n,e){return e().catch((t=>Js(n,t,e)))}async function vr(n){const e=H(n),t=Qt(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ta;for(;j0(e);)try{const s=await A0(e.localStore,i);if(s===null){e.Pa.length===0&&t.B_();break}i=s.batchId,z0(e,s)}catch(s){await Js(e,s)}Ad(e)&&Rd(e)}function j0(n){return In(n)&&n.Pa.length<10}function z0(n,e){n.Pa.push(e);const t=Qt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Ad(n){return In(n)&&!Qt(n).M_()&&n.Pa.length>0}function Rd(n){Qt(n).start()}async function H0(n){Qt(n).na()}async function W0(n){const e=Qt(n);for(const t of n.Pa)e.X_(t.mutations)}async function Y0(n,e,t){const i=n.Pa.shift(),s=aa.from(i,e,t);await bd(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await vr(n)}async function K0(n,e){e&&Qt(n).Z_&&await(async function(i,s){if((function(a){return Dy(a)&&a!==P.ABORTED})(s.code)){const r=i.Pa.shift();Qt(i).N_(),await bd(i,(()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s))),await vr(i)}})(n,e),Ad(n)&&Rd(n)}async function su(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),L(_n,"RemoteStore received new credentials");const i=In(t);t.Ia.add(3),await ji(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await yr(t)}async function Q0(n,e){const t=H(n);e?(t.Ia.delete(2),await yr(t)):e||(t.Ia.add(2),await ji(t),t.Aa.set("Unknown"))}function Kn(n){return n.Va||(n.Va=(function(t,i,s){const r=H(t);return r.ia(),new O0(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:q0.bind(null,n),e_:B0.bind(null,n),n_:$0.bind(null,n),J_:G0.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),_a(n)?ma(n):n.Aa.set("Unknown")):(await n.Va.stop(),wd(n))}))),n.Va}function Qt(n){return n.ma||(n.ma=(function(t,i,s){const r=H(t);return r.ia(),new L0(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:H0.bind(null,n),n_:K0.bind(null,n),ea:W0.bind(null,n),ta:Y0.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await vr(n)):(await n.ma.stop(),n.Pa.length>0&&(L(_n,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const a=Date.now()+i,l=new ya(e,t,a,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function va(n,e){if(bt("AsyncQueue",`${e}: ${n}`),Wn(n))return new O(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{static emptySet(e){return new Ln(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||U.comparator(t.key,i.key):(t,i)=>U.comparator(t.key,i.key),this.keyedMap=pi(),this.sortedSet=new le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ln)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ln;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this.fa=new le(U.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):G(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Bn{constructor(e,t,i,s,r,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,i,s,r){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Bn(e,t,Ln.emptySet(t),a,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class J0{constructor(){this.queries=ou(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const s=H(t),r=s.queries;s.queries=ou(),r.forEach(((a,l)=>{for(const u of l.wa)u.onError(i)}))})(this,new O(P.ABORTED,"Firestore shutting down"))}}function ou(){return new vn((n=>Wh(n)),hr)}async function Ia(n,e){const t=H(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.ba()&&(i=2):(r=new X0,i=e.ba()?0:1);try{switch(i){case 0:r.ya=await t.onListen(s,!0);break;case 1:r.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=va(a,`Initialization of query '${Cn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,r),r.wa.push(e),e.va(t.onlineState),r.ya&&e.Ca(r.ya)&&Ta(t)}async function Ea(n,e){const t=H(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const a=r.wa.indexOf(e);a>=0&&(r.wa.splice(a,1),r.wa.length===0?s=e.ba()?0:1:!r.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Z0(n,e){const t=H(n);let i=!1;for(const s of e){const r=s.query,a=t.queries.get(r);if(a){for(const l of a.wa)l.Ca(s)&&(i=!0);a.ya=s}}i&&Ta(t)}function ev(n,e,t){const i=H(n),s=i.queries.get(e);if(s)for(const r of s.wa)r.onError(t);i.queries.delete(e)}function Ta(n){n.Da.forEach((e=>{e.next()}))}var Fo,au;(au=Fo||(Fo={})).Fa="default",au.Cache="cache";class wa{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Bn(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Fo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this.key=e}}class Cd{constructor(e){this.key=e}}class tv{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=X(),this.mutatedKeys=X(),this.Xa=Yh(e),this.eu=new Ln(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new ru,s=t?t.eu:this.eu;let r=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,m)=>{const T=s.get(p),A=dr(this.query,m)?m:null,C=!!T&&this.mutatedKeys.has(T.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let D=!1;T&&A?T.data.isEqual(A.data)?C!==k&&(i.track({type:3,doc:A}),D=!0):this.iu(T,A)||(i.track({type:2,doc:A}),D=!0,(u&&this.Xa(A,u)>0||d&&this.Xa(A,d)<0)&&(l=!0)):!T&&A?(i.track({type:0,doc:A}),D=!0):T&&!A&&(i.track({type:1,doc:T}),D=!0,(u||d)&&(l=!0)),D&&(A?(a=a.add(A),r=k?r.add(p):r.delete(p)):(a=a.delete(p),r=r.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),r=r.delete(p.key),i.track({type:1,doc:p})}return{eu:a,ru:i,Ds:l,mutatedKeys:r}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((p,m)=>(function(A,C){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{At:D})}};return k(A)-k(C)})(p.type,m.type)||this.Xa(p.doc,m.doc))),this.su(i),s=s!=null&&s;const l=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,d=u!==this.Ya;return this.Ya=u,a.length!==0||d?{snapshot:new Bn(this.query,e.eu,r,a,e.mutatedKeys,u===0,d,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ru,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=X(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new Cd(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new Nd(i))})),t}uu(e){this.Ha=e.qs,this.Za=X();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Bn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ba="SyncEngine";class nv{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class iv{constructor(e){this.key=e,this.lu=!1}}class sv{constructor(e,t,i,s,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new vn((l=>Wh(l)),hr),this.Tu=new Map,this.Iu=new Set,this.du=new le(U.comparator),this.Eu=new Map,this.Au=new ua,this.Ru={},this.Vu=new Map,this.mu=qn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function rv(n,e,t=!0){const i=Od(n);let s;const r=i.Pu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.cu()):s=await Pd(i,e,t,!0),s}async function ov(n,e){const t=Od(n);await Pd(t,e,!0,!1)}async function Pd(n,e,t,i){const s=await R0(n.localStore,ct(e)),r=s.targetId,a=n.sharedClientState.addLocalQueryTarget(r,t);let l;return i&&(l=await av(n,e,r,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ed(n.remoteStore,s),l}async function av(n,e,t,i,s){n.gu=(m,T,A)=>(async function(k,D,M,x){let q=D.view.nu(M);q.Ds&&(q=await Zc(k.localStore,D.query,!1).then((({documents:w})=>D.view.nu(w,q))));const W=x&&x.targetChanges.get(D.targetId),z=x&&x.targetMismatches.get(D.targetId)!=null,Y=D.view.applyChanges(q,k.isPrimaryClient,W,z);return cu(k,D.targetId,Y._u),Y.snapshot})(n,m,T,A);const r=await Zc(n.localStore,e,!0),a=new tv(e,r.qs),l=a.nu(r.documents),u=Gi.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);cu(n,t,d._u);const p=new nv(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function lv(n,e,t){const i=H(n),s=i.Pu.get(e),r=i.Tu.get(s.targetId);if(r.length>1)return i.Tu.set(s.targetId,r.filter((a=>!hr(a,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Oo(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&pa(i.remoteStore,s.targetId),Mo(i,s.targetId)})).catch(Hn)):(Mo(i,s.targetId),await Oo(i.localStore,s.targetId,!0))}async function cv(n,e){const t=H(n),i=t.Pu.get(e),s=t.Tu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),pa(t.remoteStore,i.targetId))}async function uv(n,e,t){const i=_v(n);try{const s=await(function(a,l){const u=H(a),d=re.now(),p=l.reduce(((A,C)=>A.add(C.key)),X());let m,T;return u.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let C=At(),k=X();return u.Os.getEntries(A,p).next((D=>{C=D,C.forEach(((M,x)=>{x.isValidDocument()||(k=k.add(M))}))})).next((()=>u.localDocuments.getOverlayedDocuments(A,C))).next((D=>{m=D;const M=[];for(const x of l){const q=Ry(x,m.get(x.key).overlayedDocument);q!=null&&M.push(new tn(x.key,q,Uh(q.value.mapValue),xe.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,M,l)})).next((D=>{T=D;const M=D.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(A,D.batchId,M)}))})).then((()=>({batchId:T.batchId,changes:Qh(m)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),(function(a,l,u){let d=a.Ru[a.currentUser.toKey()];d||(d=new le(K)),d=d.insert(l,u),a.Ru[a.currentUser.toKey()]=d})(i,s.batchId,t),await zi(i,s.changes),await vr(i.remoteStore)}catch(s){const r=va(s,"Failed to persist write");t.reject(r)}}async function Sd(n,e){const t=H(n);try{const i=await w0(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const a=t.Eu.get(r);a&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?te(a.lu,14607):s.removedDocuments.size>0&&(te(a.lu,42227),a.lu=!1))})),await zi(t,i,e)}catch(i){await Hn(i)}}function lu(n,e,t){const i=H(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Pu.forEach(((r,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const u=H(a);u.onlineState=l;let d=!1;u.queries.forEach(((p,m)=>{for(const T of m.wa)T.va(l)&&(d=!0)})),d&&Ta(u)})(i.eventManager,e),s.length&&i.hu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function hv(n,e,t){const i=H(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Eu.get(e),r=s&&s.key;if(r){let a=new le(U.comparator);a=a.insert(r,De.newNoDocument(r,j.min()));const l=X().add(r),u=new mr(j.min(),new Map,new le(K),a,l);await Sd(i,u),i.du=i.du.remove(r),i.Eu.delete(e),Aa(i)}else await Oo(i.localStore,e,!1).then((()=>Mo(i,e,t))).catch(Hn)}async function dv(n,e){const t=H(n),i=e.batch.batchId;try{const s=await T0(t.localStore,e);kd(t,i,null),Dd(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await zi(t,s)}catch(s){await Hn(s)}}async function fv(n,e,t){const i=H(n);try{const s=await(function(a,l){const u=H(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next((m=>(te(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(d,m)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>u.localDocuments.getDocuments(d,p)))}))})(i.localStore,e);kd(i,e,t),Dd(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await zi(i,s)}catch(s){await Hn(s)}}function Dd(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function kd(n,e,t){const i=H(n);let s=i.Ru[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Ru[i.currentUser.toKey()]=s}}function Mo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||Vd(n,i)}))}function Vd(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(pa(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Aa(n))}function cu(n,e,t){for(const i of t)i instanceof Nd?(n.Au.addReference(i.key,e),pv(n,i)):i instanceof Cd?(L(ba,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||Vd(n,i.key)):G(19791,{yu:i})}function pv(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(L(ba,"New document in limbo: "+t),n.Iu.add(i),Aa(n))}function Aa(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new U(ie.fromString(e)),i=n.mu.next();n.Eu.set(i,new iv(t)),n.du=n.du.insert(t,i),Ed(n.remoteStore,new Ut(ct(ur(t.path)),i,"TargetPurposeLimboResolution",ar.ue))}}async function zi(n,e,t){const i=H(n),s=[],r=[],a=[];i.Pu.isEmpty()||(i.Pu.forEach(((l,u)=>{a.push(i.gu(u,e,t).then((d=>{var p;if((d||t)&&i.isPrimaryClient){const m=d?!d.fromCache:(p=t?.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;i.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=da.Es(u.targetId,d);r.push(m)}})))})),await Promise.all(a),i.hu.J_(s),await(async function(u,d){const p=H(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>S.forEach(d,(T=>S.forEach(T.Is,(A=>p.persistence.referenceDelegate.addReference(m,T.targetId,A))).next((()=>S.forEach(T.ds,(A=>p.persistence.referenceDelegate.removeReference(m,T.targetId,A)))))))))}catch(m){if(!Wn(m))throw m;L(fa,"Failed to update sequence numbers: "+m)}for(const m of d){const T=m.targetId;if(!m.fromCache){const A=p.Fs.get(T),C=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(C);p.Fs=p.Fs.insert(T,k)}}})(i.localStore,r))}async function gv(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){L(ba,"User change. New user:",e.toKey());const i=await _d(t.localStore,e);t.currentUser=e,(function(r,a){r.Vu.forEach((l=>{l.forEach((u=>{u.reject(new O(P.CANCELLED,a))}))})),r.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await zi(t,i.Bs)}}function mv(n,e){const t=H(n),i=t.Eu.get(e);if(i&&i.lu)return X().add(i.key);{let s=X();const r=t.Tu.get(e);if(!r)return s;for(const a of r){const l=t.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function Od(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hv.bind(null,e),e.hu.J_=Z0.bind(null,e.eventManager),e.hu.pu=ev.bind(null,e.eventManager),e}function _v(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fv.bind(null,e),e}class Zs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_r(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return E0(this.persistence,new y0,e.initialUser,this.serializer)}Du(e){return new md(ha.Vi,this.serializer)}bu(e){return new C0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zs.provider={build:()=>new Zs};class yv extends Zs{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){te(this.persistence.referenceDelegate instanceof Xs,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new i0(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new md((i=>Xs.Vi(i,t)),this.serializer)}}class xo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>lu(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=gv.bind(null,this.syncEngine),await Q0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new J0})()}createDatastore(e){const t=_r(e.databaseInfo.databaseId),i=(function(r){return new V0(r)})(e.databaseInfo);return(function(r,a,l,u){return new M0(r,a,l,u)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,a,l){return new U0(i,s,r,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>lu(this.syncEngine,t,0)),(function(){return nu.C()?new nu:new P0})())}createSyncEngine(e,t){return(function(s,r,a,l,u,d,p){const m=new sv(s,r,a,l,u,d);return p&&(m.fu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=H(s);L(_n,"RemoteStore shutting down."),r.Ia.add(5),await ji(r),r.Ea.shutdown(),r.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}xo.provider={build:()=>new xo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):bt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="FirestoreClient";class vv{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=Se.UNAUTHENTICATED,this.clientId=ea.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async a=>{L(Xt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(i,(a=>(L(Xt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=va(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function to(n,e){n.asyncQueue.verifyOperationInProgress(),L(Xt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await _d(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>{zt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{L("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{zt("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function uu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Iv(n);L(Xt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>su(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>su(e.remoteStore,s))),n._onlineComponents=e}async function Iv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(Xt,"Using user provided OfflineComponentProvider");try{await to(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;zt("Error using user provided cache. Falling back to memory cache: "+t),await to(n,new Zs)}}else L(Xt,"Using default OfflineComponentProvider"),await to(n,new yv(void 0));return n._offlineComponents}async function Ld(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(Xt,"Using user provided OnlineComponentProvider"),await uu(n,n._uninitializedComponentsProvider._online)):(L(Xt,"Using default OnlineComponentProvider"),await uu(n,new xo))),n._onlineComponents}function Ev(n){return Ld(n).then((e=>e.syncEngine))}async function er(n){const e=await Ld(n),t=e.eventManager;return t.onListen=rv.bind(null,e.syncEngine),t.onUnlisten=lv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ov.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cv.bind(null,e.syncEngine),t}function Tv(n,e,t={}){const i=new Et;return n.asyncQueue.enqueueAndForget((async()=>(function(r,a,l,u,d){const p=new Ra({next:T=>{p.Ou(),a.enqueueAndForget((()=>Ea(r,m)));const A=T.docs.has(l);!A&&T.fromCache?d.reject(new O(P.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&T.fromCache&&u&&u.source==="server"?d.reject(new O(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),m=new wa(ur(l.path),p,{includeMetadataChanges:!0,ka:!0});return Ia(r,m)})(await er(n),n.asyncQueue,e,t,i))),i.promise}function wv(n,e,t={}){const i=new Et;return n.asyncQueue.enqueueAndForget((async()=>(function(r,a,l,u,d){const p=new Ra({next:T=>{p.Ou(),a.enqueueAndForget((()=>Ea(r,m))),T.fromCache&&u.source==="server"?d.reject(new O(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),m=new wa(l,p,{includeMetadataChanges:!0,ka:!0});return Ia(r,m)})(await er(n),n.asyncQueue,e,t,i))),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="firestore.googleapis.com",du=!0;class fu{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Md,this.ssl=du}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:du;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<t0)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}U_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fd((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ir{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new S_;switch(i.type){case"firstParty":return new O_(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=hu.get(t);i&&(L("ComponentProvider","Removing Datastore"),hu.delete(t),i.terminate())})(this),Promise.resolve()}}function bv(n,e,t,i={}){var s;n=Me(n,Ir);const r=$n(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;r&&(Du(`https://${u}`),ku("Firestore",!0)),a.host!==Md&&a.host!==u&&zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:u,ssl:r,emulatorOptions:i});if(!dn(d,l)&&(n._setSettings(d),i.mockUserToken)){let p,m;if(typeof i.mockUserToken=="string")p=i.mockUserToken,m=Se.MOCK_USER;else{p=Gf(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Se(T)}n._authCredentials=new D_(new Rh(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Nt(this.firestore,e,this._query)}}class ue{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Bi(t,ue._jsonSchema))return new ue(e,i||null,new U(ie.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:me("string",ue._jsonSchemaVersion),referencePath:me("string")};class jt extends Nt{constructor(e,t,i){super(e,t,ur(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new U(e))}withConverter(e){return new jt(this.firestore,e,this._path)}}function Vt(n,e,...t){if(n=fe(n),Ch("collection","path",e),n instanceof Ir){const i=ie.fromString(e,...t);return Rc(i),new jt(n,null,i)}{if(!(n instanceof ue||n instanceof jt))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ie.fromString(e,...t));return Rc(i),new jt(n.firestore,null,i)}}function Je(n,e,...t){if(n=fe(n),arguments.length===1&&(e=ea.newId()),Ch("doc","path",e),n instanceof Ir){const i=ie.fromString(e,...t);return Ac(i),new ue(n,null,new U(i))}{if(!(n instanceof ue||n instanceof jt))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ie.fromString(e,...t));return Ac(i),new ue(n.firestore,n instanceof jt?n.converter:null,new U(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="AsyncQueue";class gu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new vd(this,"async_queue_retry"),this.oc=()=>{const i=eo();i&&L(pu,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=eo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=eo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Et;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Wn(e))throw e;L(pu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,bt("INTERNAL UNHANDLED ERROR: ",mu(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=ya.createAndSchedule(this,e,t,i,(r=>this.lc(r)));return this.ec.push(s),s}ac(){this.tc&&G(47125,{hc:mu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function mu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}class pt extends Ir{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new gu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gu(e),this._firestoreClient=void 0,await e}}}function Av(n,e){const t=typeof n=="object"?n:Fu(),i=typeof n=="string"?n:js,s=Go(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Bf("firestore");r&&bv(s,...r)}return s}function Hi(n){if(n._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Rv(n),n._firestoreClient}function Rv(n){var e,t,i;const s=n._freezeSettings(),r=(function(l,u,d,p){return new X_(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Fd(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new vv(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&(function(l){const u=l?._online.build();return{_offline:l?._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qe(be.fromBase64String(e))}catch(t){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qe(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Bi(e,Qe._jsonSchema))return Qe.fromBase64String(e.bytes)}}Qe._jsonSchemaVersion="firestore/bytes/1.0",Qe._jsonSchema={type:me("string",Qe._jsonSchemaVersion),bytes:me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ht._jsonSchemaVersion}}static fromJSON(e){if(Bi(e,ht._jsonSchema))return new ht(e.latitude,e.longitude)}}ht._jsonSchemaVersion="firestore/geoPoint/1.0",ht._jsonSchema={type:me("string",ht._jsonSchemaVersion),latitude:me("number"),longitude:me("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Bi(e,dt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dt(e.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dt._jsonSchemaVersion="firestore/vectorValue/1.0",dt._jsonSchema={type:me("string",dt._jsonSchemaVersion),vectorValues:me("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=/^__.*__$/;class Cv{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new tn(e,this.data,this.fieldMask,t,this.fieldTransforms):new $i(e,this.data,t,this.fieldTransforms)}}class xd{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new tn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ud(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ec:n})}}class Ca{constructor(e,t,i,s,r,a){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ca(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:i,mc:!1});return s.fc(e),s}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:i,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return tr(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ud(this.Ec)&&Nv.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Pv{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||_r(e)}Dc(e,t,i,s=!1){return new Ca({Ec:e,methodName:t,bc:i,path:we.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yi(n){const e=n._freezeSettings(),t=_r(n._databaseId);return new Pv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Pa(n,e,t,i,s,r={}){const a=n.Dc(r.merge||r.mergeFields?2:0,e,t,s);Sa("Data must be an object, but it was:",a,i);const l=$d(i,a);let u,d;if(r.merge)u=new We(a.fieldMask),d=a.fieldTransforms;else if(r.mergeFields){const p=[];for(const m of r.mergeFields){const T=Uo(e,m,t);if(!a.contains(T))throw new O(P.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);jd(p,T)||p.push(T)}u=new We(p),d=a.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,d=a.fieldTransforms;return new Cv(new Be(l),u,d)}class Er extends Na{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Er}}function qd(n,e,t,i){const s=n.Dc(1,e,t);Sa("Data must be an object, but it was:",s,i);const r=[],a=Be.empty();en(i,((u,d)=>{const p=Da(e,u,t);d=fe(d);const m=s.gc(p);if(d instanceof Er)r.push(p);else{const T=Ki(d,m);T!=null&&(r.push(p),a.set(p,T))}}));const l=new We(r);return new xd(a,l,s.fieldTransforms)}function Bd(n,e,t,i,s,r){const a=n.Dc(1,e,t),l=[Uo(e,i,t)],u=[s];if(r.length%2!=0)throw new O(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<r.length;T+=2)l.push(Uo(e,r[T])),u.push(r[T+1]);const d=[],p=Be.empty();for(let T=l.length-1;T>=0;--T)if(!jd(d,l[T])){const A=l[T];let C=u[T];C=fe(C);const k=a.gc(A);if(C instanceof Er)d.push(A);else{const D=Ki(C,k);D!=null&&(d.push(A),p.set(A,D))}}const m=new We(d);return new xd(p,m,a.fieldTransforms)}function Sv(n,e,t,i=!1){return Ki(t,n.Dc(i?4:3,e))}function Ki(n,e){if(Gd(n=fe(n)))return Sa("Unsupported field value:",e,n),$d(n,e);if(n instanceof Na)return(function(i,s){if(!Ud(s.Ec))throw s.wc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,s){const r=[];let a=0;for(const l of i){let u=Ki(l,s.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),r.push(u),a++}return{arrayValue:{values:r}}})(n,e)}return(function(i,s){if((i=fe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Iy(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=re.fromDate(i);return{timestampValue:Qs(s.serializer,r)}}if(i instanceof re){const r=new re(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Qs(s.serializer,r)}}if(i instanceof ht)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Qe)return{bytesValue:ld(s.serializer,i._byteString)};if(i instanceof ue){const r=s.databaseId,a=i.firestore._databaseId;if(!a.isEqual(r))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ca(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof dt)return(function(a,l){return{mapValue:{fields:{[Mh]:{stringValue:xh},[zs]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.wc("VectorValues must only contain numeric values.");return oa(l.serializer,d)}))}}}}}})(i,s);throw s.wc(`Unsupported field value: ${or(i)}`)})(n,e)}function $d(n,e){const t={};return Dh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):en(n,((i,s)=>{const r=Ki(s,e.Vc(i));r!=null&&(t[i]=r)})),{mapValue:{fields:t}}}function Gd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof re||n instanceof ht||n instanceof Qe||n instanceof ue||n instanceof Na||n instanceof dt)}function Sa(n,e,t){if(!Gd(t)||!Ph(t)){const i=or(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function Uo(n,e,t){if((e=fe(e))instanceof Wi)return e._internalPath;if(typeof e=="string")return Da(n,e);throw tr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Dv=new RegExp("[~\\*/\\[\\]]");function Da(n,e,t){if(e.search(Dv)>=0)throw tr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wi(...e.split("."))._internalPath}catch{throw tr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function tr(n,e,t,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(r||a)&&(u+=" (found",r&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new O(P.INVALID_ARGUMENT,l+n+u)}function jd(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ka("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class kv extends zd{data(){return super.data()}}function ka(n,e){return typeof e=="string"?Da(n,e):e instanceof Wi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Va{}class Oa extends Va{}function ws(n,e,...t){let i=[];e instanceof Va&&i.push(e),i=i.concat(t),(function(r){const a=r.filter((u=>u instanceof Fa)).length,l=r.filter((u=>u instanceof La)).length;if(a>1||a>0&&l>0)throw new O(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const s of i)n=s._apply(n);return n}class La extends Oa{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new La(e,t,i)}_apply(e){const t=this._parse(e);return Wd(e._query,t),new Nt(e.firestore,e.converter,Po(e._query,t))}_parse(e){const t=Yi(e.firestore);return(function(r,a,l,u,d,p,m){let T;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){vu(m,p);const C=[];for(const k of m)C.push(yu(u,r,k));T={arrayValue:{values:C}}}else T=yu(u,r,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||vu(m,p),T=Sv(l,a,m,p==="in"||p==="not-in");return ge.create(d,p,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Fa extends Va{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Fa(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,r){let a=s;const l=r.getFlattenedFilters();for(const u of l)Wd(a,u),a=Po(a,u)})(e._query,t),new Nt(e.firestore,e.converter,Po(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ma extends Oa{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ma(e,t)}_apply(e){const t=(function(s,r,a){if(s.startAt!==null)throw new O(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ki(r,a)})(e._query,this._field,this._direction);return new Nt(e.firestore,e.converter,(function(s,r){const a=s.explicitOrderBy.concat([r]);return new Yn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Vv(n,e="asc"){const t=e,i=ka("orderBy",n);return Ma._create(i,t)}class xa extends Oa{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new xa(e,t,i)}_apply(e){return new Nt(e.firestore,e.converter,Ws(e._query,this._limit,this._limitType))}}function no(n){return q_("limit",n),xa._create("limit",n,"F")}function yu(n,e,t){if(typeof(t=fe(t))=="string"){if(t==="")throw new O(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hh(e)&&t.indexOf("/")!==-1)throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(ie.fromString(t));if(!U.isDocumentKey(i))throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Oc(n,new U(i))}if(t instanceof ue)return Oc(n,t._key);throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${or(t)}.`)}function vu(n,e){if(!Array.isArray(n)||n.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wd(n,e){const t=(function(s,r){for(const a of s)for(const l of a.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ov{convertValue(e,t="none"){switch(Kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return en(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var t,i,s;const r=(s=(i=(t=e.fields)===null||t===void 0?void 0:t[zs].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map((a=>de(a.doubleValue)));return new dt(r)}convertGeoPoint(e){return new ht(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=cr(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Pi(e));default:return null}}convertTimestamp(e){const t=Wt(e);return new re(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ie.fromString(e);te(pd(i),9688,{name:e});const s=new Si(i.get(1),i.get(3)),r=new U(i.popFirst(5));return s.isEqual(t)||bt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class mi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class un extends zd{constructor(e,t,i,s,r,a){super(e,t,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(ka("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=un._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}un._jsonSchemaVersion="firestore/documentSnapshot/1.0",un._jsonSchema={type:me("string",un._jsonSchemaVersion),bundleSource:me("string","DocumentSnapshot"),bundleName:me("string"),bundle:me("string")};class Vs extends un{data(e={}){return super.data(e)}}class hn{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new mi(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Vs(this._firestore,this._userDataWriter,i.key,i,new mi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const u=new Vs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new mi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>r||l.type!==3)).map((l=>{const u=new Vs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new mi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Lv(l.type),doc:u,oldIndex:d,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ea.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Lv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n){n=Me(n,ue);const e=Me(n.firestore,pt);return Tv(Hi(e),n._key).then((t=>Yd(e,n,t)))}hn._jsonSchemaVersion="firestore/querySnapshot/1.0",hn._jsonSchema={type:me("string",hn._jsonSchemaVersion),bundleSource:me("string","QuerySnapshot"),bundleName:me("string"),bundle:me("string")};class qa extends Ov{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function so(n){n=Me(n,Nt);const e=Me(n.firestore,pt),t=Hi(e),i=new qa(e);return Hd(n._query),wv(t,n._query).then((s=>new hn(e,i,n,s)))}function Iu(n,e,t){n=Me(n,ue);const i=Me(n.firestore,pt),s=Ua(n.converter,e,t);return Qi(i,[Pa(Yi(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,xe.none())])}function Fv(n,e,t,...i){n=Me(n,ue);const s=Me(n.firestore,pt),r=Yi(s);let a;return a=typeof(e=fe(e))=="string"||e instanceof Wi?Bd(r,"updateDoc",n._key,e,t,i):qd(r,"updateDoc",n._key,e),Qi(s,[a.toMutation(n._key,xe.exists(!0))])}function Mv(n){return Qi(Me(n.firestore,pt),[new gr(n._key,xe.none())])}function Eu(n,e){const t=Me(n.firestore,pt),i=Je(n),s=Ua(n.converter,e);return Qi(t,[Pa(Yi(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,xe.exists(!1))]).then((()=>i))}function ro(n,...e){var t,i,s;n=fe(n);let r={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||_u(e[a])||(r=e[a++]);const l={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(_u(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(i=m.error)===null||i===void 0?void 0:i.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,d,p;if(n instanceof ue)d=Me(n.firestore,pt),p=ur(n._key.path),u={next:m=>{e[a]&&e[a](Yd(d,n,m))},error:e[a+1],complete:e[a+2]};else{const m=Me(n,Nt);d=Me(m.firestore,pt),p=m._query;const T=new qa(d);u={next:A=>{e[a]&&e[a](new hn(d,T,m,A))},error:e[a+1],complete:e[a+2]},Hd(n._query)}return(function(T,A,C,k){const D=new Ra(k),M=new wa(A,D,C);return T.asyncQueue.enqueueAndForget((async()=>Ia(await er(T),M))),()=>{D.Ou(),T.asyncQueue.enqueueAndForget((async()=>Ea(await er(T),M)))}})(Hi(d),p,l,u)}function Qi(n,e){return(function(i,s){const r=new Et;return i.asyncQueue.enqueueAndForget((async()=>uv(await Ev(i),s,r))),r.promise})(Hi(n),e)}function Yd(n,e,t){const i=t.docs.get(e._key),s=new qa(n);return new un(n,s,e._key,i,new mi(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Yi(e)}set(e,t,i){this._verifyNotCommitted();const s=oo(e,this._firestore),r=Ua(s.converter,t,i),a=Pa(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(a.toMutation(s._key,xe.none())),this}update(e,t,i,...s){this._verifyNotCommitted();const r=oo(e,this._firestore);let a;return a=typeof(t=fe(t))=="string"||t instanceof Wi?Bd(this._dataReader,"WriteBatch.update",r._key,t,i,s):qd(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(a.toMutation(r._key,xe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=oo(e,this._firestore);return this._mutations=this._mutations.concat(new gr(t._key,xe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function oo(n,e){if((n=fe(n)).firestore!==e)throw new O(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n){return Hi(n=Me(n,pt)),new xv(n,(e=>Qi(n,e)))}(function(e,t=!0){(function(s){zn=s})(Gn),Fn(new fn("firestore",((i,{instanceIdentifier:s,options:r})=>{const a=i.getProvider("app").getImmediate(),l=new pt(new k_(i.getProvider("auth-internal")),new L_(a,i.getProvider("app-check-internal")),(function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Si(d.options.projectId,p)})(a,s),a);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l}),"PUBLIC").setMultipleInstances(!0)),$t(Ic,Ec,e),$t(Ic,Ec,"esm2017")})();const _i={apiKey:"AIzaSyBBK4mFJd-srMUEqn5U-kHKuNPESBOiNt8",authDomain:"bangplama-insane-person.firebaseapp.com",projectId:"bangplama-insane-person",storageBucket:"bangplama-insane-person.firebasestorage.app",messagingSenderId:"1010588367858",appId:"1:1010588367858:web:52beb86b03efe05640096b"};function Uv(){return!!(_i.apiKey&&_i.projectId&&_i.appId&&!_i.apiKey.startsWith("YOUR_"))}const Os=[{seq:1,fullName:"พ.ต.อ.กิตติพันธ์ เสนาอุดร",position:"ผกก.สภ.บางปลาม้า",phone:"0619165298",phoneDisplay:"06 1916 5298",callsign:"ปลาม้า 1",category:"ชั้นสัญญาบัตร",note:""},{seq:2,fullName:"พ.ต.ท.รังสรร ไทยศรี",position:"รอง ผกก.ป.ฯ",phone:"0827871111",phoneDisplay:"08 2787 1111",callsign:"ปลาม้า 2",category:"ชั้นสัญญาบัตร",note:""},{seq:3,fullName:"พ.ต.ท.ณัฐพงศ์ อินสว่าง",position:"รอง ผกก.(สอบสวน)ฯ",phone:"0999664876",phoneDisplay:"09 9966 4876",callsign:"ปลาม้า 3",category:"ชั้นสัญญาบัตร",note:""},{seq:4,fullName:"พ.ต.ท.พีรพงษ์ ตนะทิพย์",position:"รอง ผกก.สส.ฯ",phone:"0857026167",phoneDisplay:"08 5702 6167",callsign:"ปลาม้า 4",category:"ชั้นสัญญาบัตร",note:""},{seq:5,fullName:"พ.ต.ท.ธวัช แก้วดี",position:"สว.อก.ฯ",phone:"0814593982",phoneDisplay:"08 1459 3982",callsign:"ปลาม้า 51",category:"ชั้นสัญญาบัตร",note:""},{seq:6,fullName:"พ.ต.ท.ณรงค์กรณ์ ปาละกะวงศ์ ณ อยุธยา",position:"สว.(สอบสวน)ฯ",phone:"0839033941",phoneDisplay:"08 3903 3941",callsign:"ปลาม้า 31",category:"ชั้นสัญญาบัตร",note:""},{seq:7,fullName:"พ.ต.ต.หญิง ขวัญข้าว อินาวัง",position:"สว.(สอบสวน)ฯ",phone:"0906269824",phoneDisplay:"09 0626 9824",callsign:"ปลาม้า 32",category:"ชั้นสัญญาบัตร",note:""},{seq:8,fullName:"พ.ต.ต.จาตุรนต์ จารุสิริรักษ์",position:"สว.(สอบสวน)ฯ",phone:"0908902199",phoneDisplay:"09 0890 2199",callsign:"ปลาม้า 33",category:"ชั้นสัญญาบัตร",note:""},{seq:9,fullName:"พ.ต.ท.ณัฐวุฒิ มกรเสน",position:"สวป.ฯ",phone:"0658236519",phoneDisplay:"06 5823 6519",callsign:"ปลาม้า 21",category:"ชั้นสัญญาบัตร",note:""},{seq:10,fullName:"พ.ต.ท.ศุภกร สุดอารมย์",position:"สว.สส.ฯ",phone:"0871713939",phoneDisplay:"08 7171 3939",callsign:"ปลาม้า 41",category:"ชั้นสัญญาบัตร",note:""},{seq:11,fullName:"ร.ต.อ.วัชรากร อินทรีย์วงศ์",position:"รอง สวป.ฯ",phone:"0866880553",phoneDisplay:"08 6688 0553",callsign:"ปลาม้า 211",category:"ชั้นสัญญาบัตร",note:"ร้อยเวร20"},{seq:12,fullName:"ร.ต.อ.องอาจ ไชยสุริยงค์",position:"รอง สว.สส.ฯ",phone:"0633491888",phoneDisplay:"06 3349 1888",callsign:"ปลาม้า 411",category:"ชั้นสัญญาบัตร",note:""},{seq:13,fullName:"ร.ต.อ.ฤทธิพงศ์ มะปะเข",position:"รอง สว.(สอบสวน)ฯ",phone:"0914165622",phoneDisplay:"09 1416 5622",callsign:"ปลาม้า 34",category:"ชั้นสัญญาบัตร",note:""},{seq:14,fullName:"ร.ต.อ.ชัยยงค์ เหล่าภักดี",position:"รอง สว.จร.ฯ",phone:"0813842180",phoneDisplay:"08 1384 2180",callsign:"ปลาม้า 611",category:"ชั้นสัญญาบัตร",note:"งาน จร."},{seq:15,fullName:"ร.ต.อ.สมพร ชูประพันธ์",position:"รอง สวป.ฯ",phone:"0970741685",phoneDisplay:"09 7074 1685",callsign:"ปลาม้า 212",category:"ชั้นสัญญาบัตร",note:"งาน อก."},{seq:16,fullName:"ร.ต.อ.หญิง สมาภรณ์ เหมือนปอง",position:"รอง สว.สส.ฯ",phone:"0639788882",phoneDisplay:"06 3978 8882",callsign:"ปลาม้า 412",category:"ชั้นสัญญาบัตร",note:"ช่วย ภ.จว.สพ."},{seq:17,fullName:"ร.ต.อ.อิทธิพล จิโรปการ",position:"รอง สว.(สอบสวน)ฯ",phone:"0962696055",phoneDisplay:"09 6269 6055",callsign:"ปลาม้า 35",category:"ชั้นสัญญาบัตร",note:""},{seq:18,fullName:"ร.ต.ท.เกียรติศักดิ์ เทพเทียน",position:"รอง สว.(สอบสวน)ฯ",phone:"0836524449",phoneDisplay:"08 3652 4449",callsign:"ปลาม้า 36",category:"ชั้นสัญญาบัตร",note:""},{seq:19,fullName:"ร.ต.อ.ผดุงศักดิ์ ศิลปพงษ์",position:"รอง สว.(ป.)ฯ",phone:"0811935673",phoneDisplay:"08 1193 5673",callsign:"ปลาม้า 221",category:"ชั้นสัญญาบัตร",note:"ร้อยเวร 20"},{seq:20,fullName:"ร.ต.อ.ใจ ไชยสิทธิ์",position:"รอง สว.(ป.)ฯ",phone:"0868078194",phoneDisplay:"08 6807 8194",callsign:"ปลาม้า 222",category:"ชั้นสัญญาบัตร",note:"ต.สาลี"},{seq:21,fullName:"ร.ต.ท.ณคร จันทร์เรือง",position:"รอง สว.(ป.)ฯ",phone:"0831429160",phoneDisplay:"08 3142 9160",callsign:"ปลาม้า 223",category:"ชั้นสัญญาบัตร",note:"ต.วัดโบสถ์"},{seq:22,fullName:"ร.ต.ท.สุทัศน์ ทองเอ็ม",position:"รอง สว.(สส.)ฯ",phone:"0892363091",phoneDisplay:"08 9236 3091",callsign:"ปลาม้า 421",category:"ชั้นสัญญาบัตร",note:"ต.จรเข้ใหญ่"},{seq:23,fullName:"ร.ต.ท.ธนชาติ สุขรักษ์",position:"รอง สว.(จร.)ฯ",phone:"0810146628",phoneDisplay:"08 1014 6628",callsign:"ปลาม้า 612",category:"ชั้นสัญญาบัตร",note:"จราจร"},{seq:24,fullName:"ร.ต.ท.ไพทูล ขุมทอง",position:"รอง สว.(ป.)ฯ",phone:"0812935423",phoneDisplay:"08 1293 5423",callsign:"ปลาม้า 224",category:"ชั้นสัญญาบัตร",note:"ต.วังน้ำเย็น"},{seq:25,fullName:"ร.ต.ท.โกวิทย์ สินทรโก",position:"รอง สว.(สส.)ฯ",phone:"0863382388",phoneDisplay:"08 6338 2388",callsign:"ปลาม้า 225",category:"ชั้นสัญญาบัตร",note:"ต.วัดดาว"},{seq:26,fullName:"ร.ต.ท.กำพล งามแพง",position:"รอง สว.(ป.)ฯ",phone:"0871563183",phoneDisplay:"08 7156 3183",callsign:"ปลาม้า 226",category:"ชั้นสัญญาบัตร",note:"ต.ไผ่กองดิน/องครักษ์"},{seq:27,fullName:"ร.ต.ท.ไพรัตน์ แสนพงษ์",position:"รอง สว.(สส.)ฯ",phone:"0817058488",phoneDisplay:"08 1705 8488",callsign:"ปลาม้า 422",category:"ชั้นสัญญาบัตร",note:"สืบสวน"},{seq:28,fullName:"ร.ต.ท.วิลาศ สุมงคล",position:"รอง สว.(ป.)ฯ",phone:"0833171862",phoneDisplay:"08 3317 1862",callsign:"ปลาม้า 310",category:"ชั้นสัญญาบัตร",note:"เดินรายงาน"},{seq:29,fullName:"ร.ต.ท.เสมอ จรันรัก",position:"รอง สว.(ป.)ฯ",phone:"0813985307",phoneDisplay:"08 1398 5307",callsign:"ปลาม้า 01",category:"ชั้นสัญญาบัตร",note:"จนท.วิทยุ"},{seq:30,fullName:"ร.ต.ท.สุชาติ เพ็งรุ่ง",position:"รอง สว.(ป.)ฯ",phone:"0944822123",phoneDisplay:"09 4482 2123",callsign:"ปลาม้า 311",category:"ชั้นสัญญาบัตร",note:"ปจว."},{seq:31,fullName:"ร.ต.ต.สมชาย เชิดโกทา",position:"รอง สว.(ป.)ฯ",phone:"0812673545",phoneDisplay:"08 1267 3545",callsign:"ปลาม้า 227",category:"ชั้นสัญญาบัตร",note:"สิบเวร"},{seq:32,fullName:"ร.ต.ต.พยอม สำเนียงดี",position:"รอง สว.(ป.)ฯ",phone:"0861700165",phoneDisplay:"08 6170 0165",callsign:"ปลาม้า 02",category:"ชั้นสัญญาบัตร",note:"จนท.วิทยุ"},{seq:33,fullName:"ร.ต.ต.สุชาติ อร่ามชัย",position:"รอง สว.(สส.)ฯ",phone:"0918505575",phoneDisplay:"09 1850 5575",callsign:"ปลาม้า 423",category:"ชั้นสัญญาบัตร",note:"สืบสวน"},{seq:34,fullName:"ร.ต.ต.นพพิพัฒน์ พันธุ์เจริญ",position:"รอง สว.(จร.)ฯ",phone:"0867600216",phoneDisplay:"08 6760 0216",callsign:"ปลาม้า 613",category:"ชั้นสัญญาบัตร",note:"จราจร"},{seq:35,fullName:"ว่าที่ ร.ต.ต.บุญโชติ สังข์ทอง",position:"รอง สว.(ป.)ฯ",phone:"0890843264",phoneDisplay:"08 9084 3264",callsign:"ปลาม้า 228",category:"ชั้นสัญญาบัตร",note:"ต.บางใหญ่"},{seq:36,fullName:"ว่าที่ ร.ต.ต.เกียรติศักดิ์ พงษ์เหล็ง",position:"รอง สว.(ป.)ฯ",phone:"0898286017",phoneDisplay:"08 9828 6017",callsign:"ปลาม้า 03",category:"ชั้นสัญญาบัตร",note:"จนท.วิทยุ"},{seq:37,fullName:"ด.ต.ณัฐพล เพชรแอ",position:"ผบ.หมู่(ป.)ฯ",phone:"0852110795",phoneDisplay:"08 5211 0795",callsign:"ปลาม้า 2101",category:"ชั้นประทวน",note:"ต.ตะข่า"},{seq:38,fullName:"ด.ต.อนุรักษ์ เฉยบำรุง",position:"ผบ.หมู่(จร.)ฯ",phone:"0801123447",phoneDisplay:"08 0112 3447",callsign:"ปลาม้า 6101",category:"ชั้นประทวน",note:"จราจร"},{seq:39,fullName:"ด.ต.วิทยา สร้อยทอง",position:"ผบ.หมู่(จร.)ฯ",phone:"0901397997",phoneDisplay:"09 0139 7997",callsign:"ปลาม้า 6102",category:"ชั้นประทวน",note:"จราจร"},{seq:40,fullName:"ด.ต.กิตติ์อธิศ อมรชยานันท์",position:"ผบ.หมู่(สส.)ฯ",phone:"0822491838",phoneDisplay:"08 2249 1838",callsign:"ปลาม้า 4101",category:"ชั้นประทวน",note:"สืบสวน"},{seq:41,fullName:"ด.ต.คณิต งิ้วไธสง",position:"ผบ.หมู่(ป.)ฯ",phone:"0899188928",phoneDisplay:"08 9918 8928",callsign:"ปลาม้า 3101",category:"ชั้นประทวน",note:"เสมียนคดี"},{seq:42,fullName:"ด.ต.สุวิม โฉมงาม",position:"ผบ.หมู่(ป.)ฯ",phone:"0890901261",phoneDisplay:"08 9090 1261",callsign:"ปลาม้า 2102",category:"ชั้นประทวน",note:"ขับรถ ปม.1"},{seq:43,fullName:"ด.ต.ธีรศักดิ์ เพ็ชรสมัย",position:"ผบ.หมู่(ป.)ฯ",phone:"0929155497",phoneDisplay:"09 2915 5497",callsign:"ปลาม้า 2103",category:"ชั้นประทวน",note:"ต.บางปลาม้า"},{seq:44,fullName:"ด.ต.วิทยา ประเสริฐศรี",position:"ผบ.หมู่(สส.)ฯ",phone:"0634454191",phoneDisplay:"06 3445 4191",callsign:"ปลาม้า 4102",category:"ชั้นประทวน",note:"สืบสวน"},{seq:45,fullName:"ด.ต.ธนากร คุณกมุต",position:"ผบ.หมู่(ป.)ฯ",phone:"0877672865",phoneDisplay:"08 7767 2865",callsign:"ปลาม้า 2104",category:"ชั้นประทวน",note:"ต.มะขามล้ม"},{seq:46,fullName:"จ.ส.ต.ศิราวุฒิ ประณิธานวิทยา",position:"ผบ.หมู่(จร.)ฯ",phone:"0997182718",phoneDisplay:"09 9718 2718",callsign:"ปลาม้า 5101",category:"ชั้นประทวน",note:"จนท.การเงิน"},{seq:47,fullName:"จ.ส.ต.สุรศักดิ์ เมิ่งกระโทก",position:"ผบ.หมู่(ป.)ฯ",phone:"0855374036",phoneDisplay:"08 5537 4036",callsign:"ปลาม้า 2105",category:"ชั้นประทวน",note:"ธุรการ ป."},{seq:48,fullName:"จ.ส.ต.ฤทธิเดช คำไพเราะ",position:"ผบ.หมู่(ป.)ฯ",phone:"0875432490",phoneDisplay:"08 7543 2490",callsign:"ปลาม้า 2106",category:"ชั้นประทวน",note:"ช่วย ภ.จว.ฯ"},{seq:49,fullName:"จ.ส.ต.จีระพงศ์ ธรรมศร",position:"ผบ.หมู่(ป.)ฯ",phone:"0626260707",phoneDisplay:"06 2626 0707",callsign:"ปลาม้า 2107",category:"ชั้นประทวน",note:"ต.กฤษณา"},{seq:50,fullName:"จ.ส.ต.ธนภัทร กฤษณชาญดี",position:"ผบ.หมู่(ป.)ฯ",phone:"0970590666",phoneDisplay:"09 7059 0666",callsign:"ปลาม้า 4103",category:"ชั้นประทวน",note:"สืบสวน"},{seq:51,fullName:"จ.ส.ต.เดชาธร ปิยะศรี",position:"ผบ.หมู่(สส.)ฯ",phone:"0941322221",phoneDisplay:"09 4132 2221",callsign:"ปลาม้า 4104",category:"ชั้นประทวน",note:"ธุรการสืบสวน"},{seq:52,fullName:"ส.ต.อ.พชร รุ่งโรจน์",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0830709577",phoneDisplay:"08 3070 9577",callsign:"ปลาม้า 3102",category:"ชั้นประทวน",note:"เสมียนคดี"},{seq:53,fullName:"ส.ต.อ.กฤตพจน์ ภูอาศัย",position:"ผบ.หมู่(ป.)ฯ",phone:"0931859299",phoneDisplay:"09 3185 9299",callsign:"ปลาม้า 2108",category:"ชั้นประทวน",note:"จยย."},{seq:54,fullName:"ส.ต.ท.ศุภกร ศรีสุวรรณ์",position:"ผบ.หมู่(ป.)ฯ",phone:"0621547289",phoneDisplay:"06 2154 7289",callsign:"ปลาม้า 2110",category:"ชั้นประทวน",note:"รถยนต์"},{seq:55,fullName:"ส.ต.ท.สุทธิภัทร ปากวิเศษ",position:"ผบ.หมู่(ป.)ฯ",phone:"0644875062",phoneDisplay:"06 4487 5062",callsign:"ปลาม้า 2111",category:"ชั้นประทวน",note:"ธุรการ ป."},{seq:56,fullName:"ส.ต.ท.ณัฐพงษ์ ผ่องพูน",position:"ผบ.หมู่(ป.)ฯ",phone:"0913364123",phoneDisplay:"09 1336 4123",callsign:"ปลาม้า 2112",category:"ชั้นประทวน",note:"ธุรการจราจร"},{seq:57,fullName:"ส.ต.ท.สุทธิพร เดชบุญ",position:"ผบ.หมู่(ป.)ฯ",phone:"0803838990",phoneDisplay:"08 0383 8990",callsign:"ปลาม้า 2113",category:"ชั้นประทวน",note:"ประชาสัมพันธ์"},{seq:58,fullName:"ส.ต.ท.ปฏิภาณ อ้นขาว",position:"ผบ.หมู่(ป.)ฯ",phone:"0924530299",phoneDisplay:"09 2453 0299",callsign:"ปลาม้า 2114",category:"ชั้นประทวน",note:"สืบสวน"},{seq:59,fullName:"ส.ต.ท.วงศธร แสงเพชร",position:"ผบ.หมู่(ป.)ฯ",phone:"0814239420",phoneDisplay:"08 1423 9420",callsign:"ปลาม้า 2115",category:"ชั้นประทวน",note:"ช่วย ภ.จว.สพ."},{seq:60,fullName:"ส.ต.ท.จักรพงศ์ บริสุทธิ์สุนทร",position:"ผบ.หมู่(ป.)ฯ",phone:"0959365234",phoneDisplay:"09 5936 5234",callsign:"ปลาม้า 6104",category:"ชั้นประทวน",note:"จราจร"},{seq:61,fullName:"ส.ต.ท.ภมรศักดิ์ ขาวแก้ว",position:"ผบ.หมู่(ป.)ฯ",phone:"0936304443",phoneDisplay:"09 3630 4443",callsign:"ปลาม้า 2116",category:"ชั้นประทวน",note:"รถยนต์"},{seq:62,fullName:"ส.ต.ท.วงศ์ปรเมศวร์ วิริยะพงศ์เมธาวี",position:"ผบ.หมู่(ป.)ฯ",phone:"0990102320",phoneDisplay:"09 9010 2320",callsign:"ปลาม้า 2117",category:"ชั้นประทวน",note:"จยย."},{seq:63,fullName:"ส.ต.ท.ทศพล ศรีงาม",position:"ผบ.หมู่(ป.)ฯ",phone:"0929088327",phoneDisplay:"09 2908 8327",callsign:"ปลาม้า 6103",category:"ชั้นประทวน",note:"จราจร"},{seq:64,fullName:"ส.ต.ท.เมฆา หมายงาม",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0876559022",phoneDisplay:"08 7655 9022",callsign:"ปลาม้า 3103",category:"ชั้นประทวน",note:"ปจว."},{seq:65,fullName:"ส.ต.ท.กิตติภูมิ อบทม",position:"ผบ.หมู่(ป.)ฯ",phone:"0641452559",phoneDisplay:"06 4145 2559",callsign:"ปลาม้า 2118",category:"ชั้นประทวน",note:"จยย."},{seq:66,fullName:"ส.ต.ท.รณชัย จันทร์มณี",position:"ผบ.หมู่(ป.)ฯ",phone:"0657091880",phoneDisplay:"06 5709 1880",callsign:"ปลาม้า 2120",category:"ชั้นประทวน",note:"จยย."},{seq:67,fullName:"ส.ต.ท.พัทพล จันทน์เทศ",position:"ผบ.หมู่(ป.)ฯ",phone:"0875592371",phoneDisplay:"08 7559 2371",callsign:"ปลาม้า 2121",category:"ชั้นประทวน",note:"รถยนต์"},{seq:68,fullName:"ส.ต.ท.ศรายุทธ กมุดชาติ",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0958454439",phoneDisplay:"09 5845 4439",callsign:"ปลาม้า 3104",category:"ชั้นประทวน",note:"พลขับ 301"},{seq:69,fullName:"ส.ต.ท.วิชญ์พล พงษ์แขก",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0933509623",phoneDisplay:"09 3350 9623",callsign:"ปลาม้า 3105",category:"ชั้นประทวน",note:"งาน อก."},{seq:70,fullName:"ส.ต.ต.ณัฐวุธ ศรีสุข",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0639399183",phoneDisplay:"06 3939 9183",callsign:"ปลาม้า 6105",category:"ชั้นประทวน",note:"จราจร"},{seq:71,fullName:"ส.ต.ต.อรรถพล บุตรดา",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0631525102",phoneDisplay:"06 3152 5102",callsign:"ปลาม้า 3106",category:"ชั้นประทวน",note:"จนท.พัสดุ"},{seq:72,fullName:"ส.ต.ต.อภิตะวัน พวงพั่วเพชร",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0634164120",phoneDisplay:"06 3416 4120",callsign:"ปลาม้า 3107",category:"ชั้นประทวน",note:"ผช.การเงิน"},{seq:73,fullName:"ส.ต.ต.นุตประวีณ์ ใจกว้าง",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0637153090",phoneDisplay:"06 3715 3090",callsign:"ปลาม้า 3108",category:"ชั้นประทวน",note:""},{seq:74,fullName:"ส.ต.ต.ตติยวัฒน์ คุ้มพันธุ์แย้ม",position:"ผบ.หมู่(ป.)ฯ",phone:"0969644068",phoneDisplay:"09 6964 4068",callsign:"ปลาม้า 2127",category:"ชั้นประทวน",note:""},{seq:75,fullName:"ส.ต.ต.ภาณุเดช พุทธบัวงาม",position:"ผบ.หมู่(ป.)ฯ",phone:"0826716780",phoneDisplay:"08 2671 6780",callsign:"ปลาม้า 2128",category:"ชั้นประทวน",note:""},{seq:76,fullName:"ส.ต.ต.เขมณัฏฐ์ หอมสุวรรณ์",position:"ผบ.หมู่(ป.)ฯ",phone:"0952471588",phoneDisplay:"09 5247 1588",callsign:"ปลาม้า 2130",category:"ชั้นประทวน",note:""},{seq:77,fullName:"ส.ต.ต.ชวัลดนย์ ชาติชัย",position:"ผบ.หมู่(ป.)ฯ",phone:"0842529295",phoneDisplay:"08 4252 9295",callsign:"ปลาม้า 2131",category:"ชั้นประทวน",note:""},{seq:78,fullName:"ส.ต.ต.พิริยพงษ์ กลิ่นหอม",position:"ผบ.หมู่(ป.)ฯ",phone:"0970148395",phoneDisplay:"09 7014 8395",callsign:"ปลาม้า 2132",category:"ชั้นประทวน",note:""},{seq:79,fullName:"ส.ต.ต.วรากร มาลัย",position:"ผบ.หมู่(ป.)ฯ",phone:"0803682268",phoneDisplay:"08 0368 2268",callsign:"ปลาม้า 2133",category:"ชั้นประทวน",note:""},{seq:80,fullName:"ส.ต.ต.พงศ์ภรณ์ ไชยมงคล",position:"ผบ.หมู่(ป.)ฯ",phone:"0994745164",phoneDisplay:"09 9474 5164",callsign:"ปลาม้า 2134",category:"ชั้นประทวน",note:""},{seq:81,fullName:"ส.ต.ต.กิตติพงษ์ มลิวัลย์",position:"ผบ.หมู่ (คฝ.กก.สส.)ฯ",phone:"0951553889",phoneDisplay:"09 5155 3889",callsign:"ปลาม้า 2122",category:"ช่วยราชการ คฝ.",note:"พลขับ 301"},{seq:82,fullName:"ส.ต.ต.ไตรมาศ ครุฑวิลัย",position:"ผบ.หมู่ (คฝ.กก.สส.)ฯ",phone:"0960099287",phoneDisplay:"09 6009 9287",callsign:"ปลาม้า 2123",category:"ช่วยราชการ คฝ.",note:"จยย."},{seq:83,fullName:"ส.ต.ต.ปริญญา เย็นใจ",position:"ผบ.หมู่ (คฝ.กก.สส.)ฯ",phone:"0840489502",phoneDisplay:"08 4048 9502",callsign:"ปลาม้า 2124",category:"ช่วยราชการ คฝ.",note:"สืบสวน"},{seq:84,fullName:"ส.ต.ต.ศิริวัฒน์ คมขำ",position:"ผบ.หมู่ (คฝ.กก.สส.)ฯ",phone:"0957410485",phoneDisplay:"09 5741 0485",callsign:"ปลาม้า 2125",category:"ช่วยราชการ คฝ.",note:"สืบสวน"},{seq:85,fullName:"ส.ต.ต.สรวิชญ์ หิรัญรัตน์",position:"ผบ.หมู่ (คฝ.กก.สส.)ฯ",phone:"0616124269",phoneDisplay:"06 1612 4269",callsign:"ปลาม้า 2126",category:"ช่วยราชการ คฝ.",note:"จยย."}],qo=[{seqNo:1,fullName:"นายเฉลิมชัย อบเชย",nickname:"ทดสอบ",age:"45",diagnosis:"F 1525",diagnosisCode:"F15",nationalId:"3-7204-00063-85-7",nationalIdDigits:"3720400063857",startYearBE:"2564",addressNo:"237/2",moo:"ม.5",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:"นางแสวง มาตรวิจิตร.jpg"},{seqNo:2,fullName:"นายวสันต์ ศรีขาวผ่อง",nickname:"ทดสอบ",age:"21",diagnosis:"F 1528",diagnosisCode:"F15",nationalId:"1-7298-00309-31-6",nationalIdDigits:"1729800309316",startYearBE:"2560",addressNo:"75",moo:"ม.3",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:"นางบังอร หวนบุตตา.jpg"},{seqNo:3,fullName:"น.ส.ชโลธร แซ่ซิ้ม",nickname:"มิ้น",age:"23",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-1037-03237-56-0",nationalIdDigits:"1103703237560",startYearBE:"2568",addressNo:"75",moo:"ม.8",subdistrict:"ต.จรเข้ใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:"ชโลธรแซ่ซิ้ม"},{seqNo:4,fullName:"นายกนก แก้ววิชิต",nickname:"",age:"31",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"1-7299-00272-90-2",nationalIdDigits:"1729900272902",startYearBE:"2557",addressNo:"38",moo:"ม.5",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:5,fullName:"นายอดิเรก วงศา",nickname:"",age:"31",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-00137-11-1",nationalIdDigits:"1720400137111",startYearBE:"2568",addressNo:"143/3",moo:"ม.4",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:6,fullName:"นายกฤษณะ โพธิ์เจริญ",nickname:"",age:"36",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7207-00105-90-7",nationalIdDigits:"1720700105907",startYearBE:"2566",addressNo:"120/1",moo:"ม.5",subdistrict:"ต.บ้านช้าง",district:"อ.สองพี่น้อง",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:7,fullName:"นายฐิติวัฒน์ ศรีสังข์งาม",nickname:"",age:"41",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-00025-67-3",nationalIdDigits:"1720400025673",startYearBE:"",addressNo:"158/1",moo:"ม.2",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:8,fullName:"นายขวัญฯชัย ปานสุวรรณ",nickname:"",age:"43",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"3-7208-00543-83-0",nationalIdDigits:"3720800543830",startYearBE:"2568",addressNo:"120/1",moo:"ม.6",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:9,fullName:"นายถาวร ภู่ระหงษ์",nickname:"",age:"47",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"3-7204-00401-76-1",nationalIdDigits:"3720400401761",startYearBE:"2566",addressNo:"173/2",moo:"ม.1",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:10,fullName:"นายสมชาย ศรีราปราณ",nickname:"",age:"52",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"3-7204-00476-57-4",nationalIdDigits:"3720400476574",startYearBE:"2564",addressNo:"219/10",moo:"ม.6",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:11,fullName:"นายชนวีร์ โผพ่วงพันธุ์",nickname:"",age:"24",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-01196-90-1",nationalIdDigits:"1720401196901",startYearBE:"2564",addressNo:"21/2",moo:"ม.7",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:12,fullName:"นายศราวุฒิ เจริญทรัพย์",nickname:"",age:"26",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-00154-82-1",nationalIdDigits:"1720400154821",startYearBE:"2568",addressNo:"198/3",moo:"ม.7",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:13,fullName:"นายณรงค์ฤทธิ์ สุภาบุตตรี",nickname:"",age:"31.8",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-00132-51-8",nationalIdDigits:"1720400132518",startYearBE:"2565",addressNo:"48/2",moo:"ม.2",subdistrict:"ต.ตะค่า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:14,fullName:"นายวันเฉลิม เขียววิราช",nickname:"",age:"38.8",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"2-7207-00021-21-3",nationalIdDigits:"2720700021213",startYearBE:"2567",addressNo:"59/1",moo:"ม.3",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"ถูกจับกุมเสพ",legacyPhotoRef:""},{seqNo:15,fullName:"นายกิตติพงศ์ สารศรี",nickname:"",age:"38",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-00095-15-9",nationalIdDigits:"1720400095159",startYearBE:"2567",addressNo:"80",moo:"ม.8",subdistrict:"ต.วัดโบสถ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:16,fullName:"นายสุธี ช้างเผือก",nickname:"",age:"42.11",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"3-7204-00491-27-1",nationalIdDigits:"3720400491271",startYearBE:"2565",addressNo:"140",moo:"ม.6",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:17,fullName:"นายเพชรสมบูรณื พันธุ์ศรี",nickname:"",age:"42",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"3-7208-00543-83-0",nationalIdDigits:"3720800543830",startYearBE:"2568",addressNo:"181",moo:"ม.4",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:18,fullName:"นายจีรศักดิ์ สุตตานนท์",nickname:"",age:"45.6",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"3-7204-00401-29-9",nationalIdDigits:"3720400401299",startYearBE:"2564",addressNo:"78/2",moo:"ม.5",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:19,fullName:"นายประสิทธิ์ มณีศรีสันโดด",nickname:"",age:"45",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"3-7204-00790-52-0",nationalIdDigits:"3720400790520",startYearBE:"2567",addressNo:"6",moo:"ม.8",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:20,fullName:"นายราชันย์ พันธ์จันทร์ดี",nickname:"",age:"25.2",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7299-00521-66-0",nationalIdDigits:"1729900521660",startYearBE:"2568",addressNo:"78",moo:"ม.4",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"",legacyPhotoRef:""},{seqNo:21,fullName:"นายชาตรี หมอยาดี",nickname:"",age:"27.6",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"1-6706-00178-13-0",nationalIdDigits:"1670600178130",startYearBE:"2565",addressNo:"35/1",moo:"ม.3",subdistrict:"ต.ตะค่า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:22,fullName:"นายกลย์ภัทร์ จันทร์แท้",nickname:"",age:"33.1",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"1-7299-00234-19-9",nationalIdDigits:"1729900234199",startYearBE:"2564",addressNo:"28/1",moo:"ม.6",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:23,fullName:"นายเพทาย เขียวอรุณ",nickname:"",age:"33.4",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"1-7204-00124-06-0",nationalIdDigits:"1720400124060",startYearBE:"2562",addressNo:"72/1",moo:"ม.6",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:24,fullName:"นายสนทยา กล่อมดี",nickname:"",age:"35.7",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-00110-23-9",nationalIdDigits:"1720400110239",startYearBE:"2565",addressNo:"94/1",moo:"ม.6",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:25,fullName:"นายครรชิต วงศ์ขวัญเมือง",nickname:"",age:"39.8",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"1-7204-00022-01-1",nationalIdDigits:"1720400022011",startYearBE:"2565",addressNo:"37/1",moo:"ม.4",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:26,fullName:"นายถาวร ภู่ระหงษ์",nickname:"",age:"47.6",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"3-7204-00401-76-1",nationalIdDigits:"3720400401761",startYearBE:"2567",addressNo:"1173/2",moo:"ม.1",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:27,fullName:"นายวันชัย เนตรสว่าง",nickname:"",age:"58.3",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"3-7204-00068-52-2",nationalIdDigits:"3720400068522",startYearBE:"2567",addressNo:"1/1",moo:"ม.2",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:28,fullName:"นายศราวุธ โพธิกุล",nickname:"",age:"42",diagnosis:"F 1550/ F 10",diagnosisCode:"F15",nationalId:"3-7204-00388-24-1",nationalIdDigits:"3720400388241",startYearBE:"2565",addressNo:"127",moo:"ม.1",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:29,fullName:"นายศุภากร เกิดรัตน์",nickname:"",age:"21.4",diagnosis:"F 1550/ F 1220",diagnosisCode:"F15",nationalId:"1-1002-01711-37-8",nationalIdDigits:"1100201711378",startYearBE:"2568",addressNo:"102/2",moo:"ม.3",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:30,fullName:"พระศักดิ์ชาย หวานจริง",nickname:"",age:"54.4",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"3-7110-00237-31-0",nationalIdDigits:"3711000237310",startYearBE:"2563",addressNo:"8/1",moo:"ม.4",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:31,fullName:"นายเอกชัย พงษ์เทศ",nickname:"",age:"27.2",diagnosis:"F 1550/F 10",diagnosisCode:"F15",nationalId:"1-7299-00460-98-9",nationalIdDigits:"1729900460989",startYearBE:"2565",addressNo:"29/1",moo:"ม.2",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:32,fullName:"นายชัยมงคล พุทธศรี",nickname:"",age:"38",diagnosis:"F15",diagnosisCode:"F15",nationalId:"1-7204-00093-88-1",nationalIdDigits:"1720400093881",startYearBE:"2567",addressNo:"94/1",moo:"ม.7",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:33,fullName:"นายปัญญา ตาลน้อย",nickname:"",age:"45.1",diagnosis:"F15 F 10",diagnosisCode:"F15",nationalId:"3-7204-00421-92-3",nationalIdDigits:"3720400421923",startYearBE:"2560",addressNo:"83",moo:"ม.2",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:34,fullName:"นายอนันท์ ปานอุทัย",nickname:"",age:"40",diagnosis:"F1520",diagnosisCode:"F15",nationalId:"1-7204-00031-97-5",nationalIdDigits:"1720400031975",startYearBE:"2566",addressNo:"207/3",moo:"ม.9",subdistrict:"ต.ตะค่า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:35,fullName:"นายสำรวย แก้ววิชิต",nickname:"",age:"51.9",diagnosis:"F1520",diagnosisCode:"F15",nationalId:"3-7204-00379-57-9",nationalIdDigits:"3720400379579",startYearBE:"2565",addressNo:"110",moo:"ม.6",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:36,fullName:"นายเริงชัย เมืองนก",nickname:"",age:"34.8",diagnosis:"f1520",diagnosisCode:"F15",nationalId:"1-7299-00180-71-4",nationalIdDigits:"1729900180714",startYearBE:"2563",addressNo:"59",moo:"ม.5",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"",legacyPhotoRef:""},{seqNo:37,fullName:"นายวิชาญ เนียมหอม",nickname:"",age:"45.11",diagnosis:"f1520",diagnosisCode:"F15",nationalId:"3-7204-00713-68-1",nationalIdDigits:"3720400713681",startYearBE:"2560",addressNo:"262",moo:"ม.2",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:38,fullName:"นายเทอดศักดิ์ พลายยงค์",nickname:"",age:"51.5",diagnosis:"F1520",diagnosisCode:"F15",nationalId:"3-7204-00313-69-1",nationalIdDigits:"3720400313691",startYearBE:"2567",addressNo:"98",moo:"ม.3",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"เสียชีวิต",legacyPhotoRef:""},{seqNo:39,fullName:"นายสุทธิชัย นุ่มพันธุ์",nickname:"",age:"54.09",diagnosis:"f1520",diagnosisCode:"F15",nationalId:"3-7204-00611-41-2",nationalIdDigits:"3720400611412",startYearBE:"",addressNo:"64",moo:"ม.10",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"",legacyPhotoRef:""},{seqNo:40,fullName:"นายสุธิเดช แตงกํ่า",nickname:"",age:"22.4",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7299-00611-31-6",nationalIdDigits:"1729900611316",startYearBE:"2565",addressNo:"194",moo:"ม.1",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:41,fullName:"นายเอื้ออังกูร ธนาศักดิ์สิงห์",nickname:"",age:"29.6",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7299-00365-43-9",nationalIdDigits:"1729900365439",startYearBE:"2564",addressNo:"109",moo:"ม.2",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:42,fullName:"นายจงเจตต์ พันธ์ศรี",nickname:"",age:"31",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-1031-00235-35-2",nationalIdDigits:"1103100235352",startYearBE:"2565",addressNo:"61",moo:"ม.2",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:43,fullName:"น.ส.ชุดามาส อุตมะสอน",nickname:"",age:"33.7",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7299-00214-59-7",nationalIdDigits:"1729900214597",startYearBE:"2564",addressNo:"130",moo:"ม.5",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:44,fullName:"นายชาญณรงค์ ศรีจันทร์",nickname:"",age:"36",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00089-51-5",nationalIdDigits:"1720400089515",startYearBE:"2563",addressNo:"212/2",moo:"ม.6",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:45,fullName:"นายไกรสร ทองบุดดี",nickname:"",age:"37.7",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7299-00093-34-0",nationalIdDigits:"1729900093340",startYearBE:"2565",addressNo:"65",moo:"ม.10",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:46,fullName:"นายศักดิ์สิทธิ์ ปั้นเหน่งเพชร",nickname:"",age:"37.7",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00096-16-3",nationalIdDigits:"1720400096163",startYearBE:"2565",addressNo:"47",moo:"ม.4",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:47,fullName:"นายสุพัตรา เงินเรืองโรจน์",nickname:"",age:"38.5",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00089-79-5",nationalIdDigits:"1720400089795",startYearBE:"2565",addressNo:"149",moo:"ม.3",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:48,fullName:"นายธานินทร์ ทองบุดดี",nickname:"",age:"41.11",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00603-19-3",nationalIdDigits:"3720400603193",startYearBE:"2567",addressNo:"65",moo:"ม.10",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:49,fullName:"กรพัส สาลีผล",nickname:"",age:"42.8",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"3-7204-00824-25-4",nationalIdDigits:"3720400824254",startYearBE:"2568",addressNo:"22",moo:"ม.7",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:50,fullName:"นายสมัย พันสุข",nickname:"",age:"43.1",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7109-00405-77-3",nationalIdDigits:"3710900405773",startYearBE:"",addressNo:"78/2",moo:"ม.5",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:51,fullName:"นายปรีชา เกิดศิริ",nickname:"",age:"47.4",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"3-7204-00123-61-2",nationalIdDigits:"3720400123612",startYearBE:"2567",addressNo:"93/1",moo:"ม.",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:52,fullName:"นายคสูต โพธิ์มณี",nickname:"เน๊ะ",age:"48",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"3-7209-00963-86-5",nationalIdDigits:"3720900963865",startYearBE:"2566",addressNo:"12",moo:"ม.5",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:53,fullName:"นายบรรหาร พิญญกิจ",nickname:"",age:"23.4",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-01201-89-1",nationalIdDigits:"1720401201891",startYearBE:"2565",addressNo:"148",moo:"ม.6",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:54,fullName:"นายจิรายุส บุญรีย์",nickname:"",age:"26.10",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-1020-02987-02-2",nationalIdDigits:"1102002987022",startYearBE:"2561",addressNo:"96/3",moo:"ม.2",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:55,fullName:"นายสถาพร พึ่งผลิ",nickname:"",age:"28.6",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00146-04-7",nationalIdDigits:"1720400146047",startYearBE:"2563",addressNo:"333",moo:"ม.3",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:56,fullName:"นายธนวัฒน์ ดวงสังข์",nickname:"",age:"28",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7205-00115-40-2",nationalIdDigits:"1720500115402",startYearBE:"2565",addressNo:"115",moo:"ม.3",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:57,fullName:"นายภมร โพธิ์ศรี",nickname:"",age:"30",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00137-96-0",nationalIdDigits:"1720400137960",startYearBE:"2565",addressNo:"149/2",moo:"ม.4",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:58,fullName:"นายจิรนันต์ ครุฑทอง",nickname:"",age:"31.11",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00086-58-3",nationalIdDigits:"1720400086583",startYearBE:"2565",addressNo:"115",moo:"ม.3",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:59,fullName:"นายยงยุทธ โพธิ์ไพจิตร",nickname:"",age:"31.3",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7399-00476-69-9",nationalIdDigits:"1739900476699",startYearBE:"2563",addressNo:"18/2",moo:"ม.2",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:60,fullName:"นายมานพ ศรีภักดี",nickname:"",age:"31.4",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7299-00297-51-4",nationalIdDigits:"1729900297514",startYearBE:"2563",addressNo:"215/2",moo:"ม.4",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:61,fullName:"นายพัชราภา พงษ์สวัสดิ์",nickname:"",age:"32.10",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-8101-00185-43-7",nationalIdDigits:"1810100185437",startYearBE:"2564",addressNo:"101/1",moo:"ม.6",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:62,fullName:"นายธเนศ พันธุ์ชัย",nickname:"",age:"32.9",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7299-00246-54-5",nationalIdDigits:"1729900246545",startYearBE:"",addressNo:"10",moo:"ม.2",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"",legacyPhotoRef:""},{seqNo:63,fullName:"นางสาวจารุวรรณ ตรีรัตน์",nickname:"",age:"32",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00122-70-9",nationalIdDigits:"1720400122709",startYearBE:"2567",addressNo:"92/3",moo:"ม.2",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:64,fullName:"นายมารุต นิลเผือก",nickname:"",age:"33.1",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00124-38-8",nationalIdDigits:"1720400124388",startYearBE:"2568",addressNo:"2",moo:"ม.3",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"",legacyPhotoRef:""},{seqNo:65,fullName:"น.ส.กนกวรรณ นามมาแสง",nickname:"",age:"33.3",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00124-62-1",nationalIdDigits:"1720400124621",startYearBE:"2565",addressNo:"210",moo:"ม.5",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:66,fullName:"นายสราวุฒิ บุญศรี",nickname:"",age:"39",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00089-42-6",nationalIdDigits:"1720400089426",startYearBE:"2569",addressNo:"171/1",moo:"ม.1",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:67,fullName:"นายพิเชฐ ชัยสุวรรณดุสิต",nickname:"",age:"34.5",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7302-00166-23-1",nationalIdDigits:"1730200166231",startYearBE:"2563",addressNo:"116/2",moo:"ม.1",subdistrict:"ต.วัดโบสถ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"",legacyPhotoRef:""},{seqNo:68,fullName:"นายพิศิษฎ์ แก้วจินดา",nickname:"",age:"34.5",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7209-00149-48-7",nationalIdDigits:"1720900149487",startYearBE:"2567",addressNo:"46/1",moo:"ม.7",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:69,fullName:"น.ส.พรสวรรค์ คงคาหลวง",nickname:"",age:"34.8",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00116-05-9",nationalIdDigits:"1720400116059",startYearBE:"2563",addressNo:"172/3",moo:"ม.6",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:70,fullName:"นายพิภัทรพงษ์ คำเสียงใส",nickname:"",age:"35.2",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00112-91-6",nationalIdDigits:"1720400112916",startYearBE:"2563",addressNo:"116",moo:"ม.1",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:71,fullName:"นายฉัตรชัย วงษ์ประเสริฐ",nickname:"",age:"35.4",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7302-00144-88-1",nationalIdDigits:"1730200144881",startYearBE:"2566",addressNo:"16",moo:"ม.2",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:72,fullName:"นายธนวัฒน์ จันทร์มา",nickname:"",age:"36.3",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00105-76-6",nationalIdDigits:"1720400105766",startYearBE:"2560",addressNo:"123/1",moo:"ม.3",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:73,fullName:"นายเอกรินทร์ เหมือนทิพย์",nickname:"",age:"36.4",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00105-05-7",nationalIdDigits:"1720400105057",startYearBE:"2560",addressNo:"68/4",moo:"ม.8",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:74,fullName:"นายอลงกรณ์ รูปสวยดี",nickname:"กาน",age:"36",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-6098-00076-88-6",nationalIdDigits:"1609800076886",startYearBE:"2564",addressNo:"33",moo:"ม.1",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:"อลงกรณ์ รูปสวยดี"},{seqNo:75,fullName:"นายสรณรงค์ คุ้มเขตต์",nickname:"",age:"39.3",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00082-88-0",nationalIdDigits:"1720400082880",startYearBE:"2560",addressNo:"90",moo:"ม.5",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:76,fullName:"นายสราวุฒิ ดำขำ",nickname:"",age:"39.8",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7209-00044-85-5",nationalIdDigits:"1720900044855",startYearBE:"2563",addressNo:"20/1",moo:"ม.3",subdistrict:"ต.จรเข้ใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:77,fullName:"นายนเรนทร์ฤทธิ์ แก้วเจริญ",nickname:"",age:"39.9",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7299-00034-72-6",nationalIdDigits:"1729900034726",startYearBE:"2565",addressNo:"62/4",moo:"ม.2",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:78,fullName:"นายหทัยกิจ แซ่ตั้ง",nickname:"",age:"41.8",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-1020-00074-90-9",nationalIdDigits:"1102000074909",startYearBE:"2561",addressNo:"18/1",moo:"ม.4",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:79,fullName:"นายธนกร เพ็ชรว่าว",nickname:"",age:"43",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"3-7205-00209-25-0",nationalIdDigits:"3720500209250",startYearBE:"2563",addressNo:"180/3",moo:"ม.1",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:80,fullName:"นายชัยรัตน์ วงศ์พันธุ์",nickname:"",age:"45.8",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00610-74-2",nationalIdDigits:"3720400610742",startYearBE:"2561",addressNo:"48",moo:"ม.10",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:81,fullName:"นายเฉลิม อารีชม",nickname:"",age:"46.10",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7207-00229-79-3",nationalIdDigits:"3720700229793",startYearBE:"2566",addressNo:"42",moo:"ม.4",subdistrict:"ต.บ้านช้าง",district:"อ.สองพี่น้อง",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:82,fullName:"นายธวัชชัย แก้วกระจ่าง",nickname:"",age:"46",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00784-32-5",nationalIdDigits:"3720400784325",startYearBE:"2564",addressNo:"115",moo:"ม.6",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:83,fullName:"นายยงยุทธ นาคจังหวัด",nickname:"",age:"46.8",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00393-66-1",nationalIdDigits:"3720400393661",startYearBE:"2566",addressNo:"241",moo:"ม.1",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:84,fullName:"นายไกรศร งามขำ",nickname:"",age:"48.4",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"5-7207-00088-64-9",nationalIdDigits:"5720700088649",startYearBE:"2560",addressNo:"1/2",moo:"ม.2",subdistrict:"ต.วัดโบสถ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:85,fullName:"นายมนตรี บุญเขตต์",nickname:"ตรี",age:"48.5",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00584-21-1",nationalIdDigits:"3720400584211",startYearBE:"2562",addressNo:"46",moo:"ม.5",subdistrict:"ต.จรเข้ใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:"มนตรี บุญเขตต์"},{seqNo:86,fullName:"นายกิตตินันท์ วันทะนัง",nickname:"ก๊อฟ",age:"49",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00069-39-1",nationalIdDigits:"3720400069391",startYearBE:"2560",addressNo:"14/1",moo:"ม.2",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:87,fullName:"นายพีระกานต์ แจ่มจันทร์หาญ",nickname:"",age:"49.4",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00533-81-1",nationalIdDigits:"3720400533811",startYearBE:"2565",addressNo:"162/1",moo:"ม.2",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:88,fullName:"นายเกรียงศักดิ์ วัฒนชัยนันท์",nickname:"",age:"56",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-1006-00974-63-8",nationalIdDigits:"3100600974638",startYearBE:"2560",addressNo:"106",moo:"ม.6",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"ออกนอกพื้นที่",legacyPhotoRef:""},{seqNo:89,fullName:"นายธีรวัฒน์ โพธิ์ไพจิตร",nickname:"",age:"",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-1020-00969-05-1",nationalIdDigits:"1102000969051",startYearBE:"2565",addressNo:"179/1",moo:"ม.4",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:90,fullName:"นายรัตนาพร เอี่ยมสอาด",nickname:"เบียร์",age:"",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00139-97-1",nationalIdDigits:"1720400139971",startYearBE:"2560",addressNo:"176/4",moo:"ม.1",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:91,fullName:"นายสมชาย เกิดแก้ว",nickname:"เหยิน",age:"34.1",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-1599-00158-90-1",nationalIdDigits:"1159900158901",startYearBE:"2560",addressNo:"48/2",moo:"ม.5",subdistrict:"ต.จรเข้ใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:"สมชายเกิดแก้ว"},{seqNo:92,fullName:"นายสุรชัย บุญช่วย",nickname:"ชัย",age:"28",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00143-33-1",nationalIdDigits:"1720400143331",startYearBE:"2568",addressNo:"32/1",moo:"ม.4",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:"สุรชัย บุญช่วย"},{seqNo:93,fullName:"น.ส.สมนึก พรบำรุง",nickname:"",age:"42.6",diagnosis:"F1550/...",diagnosisCode:"F15",nationalId:"3-1412-00176-22-1",nationalIdDigits:"3141200176221",startYearBE:"2563",addressNo:"60/1",moo:"ม.2",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:94,fullName:"นายณรหรรถ พันธุ์ขะวงศ์",nickname:"",age:"28",diagnosis:"f1550/F 20",diagnosisCode:"F15",nationalId:"1-7299-00414-62-6",nationalIdDigits:"1729900414626",startYearBE:"2561",addressNo:"66/1",moo:"ม.6",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:95,fullName:"นายพรศักดิ์ กิจเทวี",nickname:"",age:"36.6",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7299-00121-73-4",nationalIdDigits:"1729900121734",startYearBE:"2560",addressNo:"178",moo:"ม.2",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:96,fullName:"นายสงกรานต์ เจริญผล",nickname:"",age:"45.6",diagnosis:"F1550/F10",diagnosisCode:"F15",nationalId:"3-7204-00789-00-9",nationalIdDigits:"3720400789009",startYearBE:"2560",addressNo:"147",moo:"ม.8",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:97,fullName:"นายชินรัตน์ โพธิ์ไพจิตร",nickname:"",age:"33",diagnosis:"F15",diagnosisCode:"F15",nationalId:"2-8401-00025-35-7",nationalIdDigits:"2840100025357",startYearBE:"2560",addressNo:"189",moo:"ม.5",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:98,fullName:"นายมารุต สมบูรณ์พูลสวัสดิ์",nickname:"",age:"",diagnosis:"F15",diagnosisCode:"F15",nationalId:"1-7204-00085-55-2",nationalIdDigits:"1720400085552",startYearBE:"",addressNo:"84",moo:"ม.1",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:99,fullName:"นายนเรศ มั่งบุญชัง",nickname:"ต๋อม",age:"33",diagnosis:"F15",diagnosisCode:"F15",nationalId:"3-7204-00467-48-6",nationalIdDigits:"3720400467486",startYearBE:"",addressNo:"294",moo:"ม.5",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"โดนจำคุก",legacyPhotoRef:"นเรศ มั่งบุญชัง"},{seqNo:100,fullName:"นายสุวรรณ นะกองดี",nickname:"",age:"35",diagnosis:"F15",diagnosisCode:"F15",nationalId:"1-7204-00118-83-3",nationalIdDigits:"1720400118833",startYearBE:"",addressNo:"139/1",moo:"ม.6",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:101,fullName:"นายสุวภัทร วัชโรสุริโย",nickname:"",age:"46",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00234-59-7",nationalIdDigits:"3720400234597",startYearBE:"",addressNo:"68",moo:"ม.1",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:102,fullName:"นายถาวร ภู่ระหงษ์",nickname:"",age:"47",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00401-76-1",nationalIdDigits:"3720400401761",startYearBE:"2568",addressNo:"173/2",moo:"ม.1",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:103,fullName:"นายอาณัติ อุ่นเมือง",nickname:"",age:"38",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00079-26-6",nationalIdDigits:"1729900079266",startYearBE:"2568",addressNo:"69/1",moo:"ม.4",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:104,fullName:"นายชลอ อักกุลดี",nickname:"",age:"78",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00194-69-2",nationalIdDigits:"3720400194692",startYearBE:"2568",addressNo:"7",moo:"ม.8",subdistrict:"ต.ตะค่า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:105,fullName:"นายสมศักดิ์ กลิ่นสาตร์",nickname:"",age:"41",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00007-38-9",nationalIdDigits:"1729900007389",startYearBE:"2568",addressNo:"292",moo:"ม.4",subdistrict:"ต.สระแก้ว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:106,fullName:"น.ส.สุกัญญา เสียงดัง",nickname:"",age:"28",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00382-40-6",nationalIdDigits:"1729900382406",startYearBE:"2568",addressNo:"162",moo:"ม.10",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:107,fullName:"น.ส.ศิริวรรณ อิสสอาด",nickname:"",age:"36",diagnosis:"",diagnosisCode:"",nationalId:"1-1022-00065-22-9",nationalIdDigits:"1102200065229",startYearBE:"2568",addressNo:"62",moo:"ม.4",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:108,fullName:"นายธนพัฒน์ คล้ายสุบรรณ",nickname:"",age:"24",diagnosis:"",diagnosisCode:"",nationalId:"1-1015-01100-10-3",nationalIdDigits:"1101501100103",startYearBE:"2568",addressNo:"94",moo:"ม.5",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:109,fullName:"นายธีรพงศ์ พรหม",nickname:"",age:"50",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00059-73-7",nationalIdDigits:"1729900059737",startYearBE:"2568",addressNo:"189/1",moo:"ม.3",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:110,fullName:"นายภูมิศิลป์ อินทรขันตี",nickname:"ภูมิ",age:"22",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00652-97-7",nationalIdDigits:"1729900652977",startYearBE:"2568",addressNo:"172",moo:"ม.3",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"ออทิสติก, สมาธิสั้น",legacyPhotoRef:"ภูมิศิลป์ อินทรขันตี"},{seqNo:111,fullName:"นายอาธิป พวงแก้ว",nickname:"หนึ่ง",age:"45",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00335-50-4",nationalIdDigits:"3720400335504",startYearBE:"2567",addressNo:"278/10",moo:"ม.5",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"ผู้ป่วย รักษา เรื่องสุรา",legacyPhotoRef:"อาธิป พวงแก้ว"},{seqNo:112,fullName:"นายบรรเจิด แก้วปานกัน",nickname:"เจิด",age:"44",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00563-93-1",nationalIdDigits:"3720400563931",startYearBE:"2567",addressNo:"95/1",moo:"ม.11",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"รับการบำบัดรักษาอยู่ ที่ จ.นครศรีฯ",legacyPhotoRef:"บรรเจิด แก้วปานดี"},{seqNo:113,fullName:"นายนิรันดร์ หนูใจหาญ",nickname:"",age:"25",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00196-49-8",nationalIdDigits:"1720400196498",startYearBE:"2569",addressNo:"187",moo:"ม.4",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:114,fullName:"นายธีระวิทย์ ทองอยู่",nickname:"",age:"33",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00219-54-8",nationalIdDigits:"1729900219548",startYearBE:"2568",addressNo:"60/2",moo:"ม.8",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:115,fullName:"นายนิรุจน์ ขำโสภา",nickname:"",age:"37",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00088-48-9",nationalIdDigits:"1720400088489",startYearBE:"2567",addressNo:"285/3",moo:"ม.5",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:116,fullName:"นางจันทร์เพ็ญ จอมคำสิงห์",nickname:"",age:"55",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00329-31-8",nationalIdDigits:"3720400329318",startYearBE:"2568",addressNo:"10",moo:"ม.6",subdistrict:"ต.ตะค่า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:117,fullName:"นายศักดิ์วุฒิ อาภรณ์รัตน์",nickname:"",age:"49",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00780-41-9",nationalIdDigits:"3720400780419",startYearBE:"2568",addressNo:"171",moo:"ม.3",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:118,fullName:"นายอดิศร ทุมทา",nickname:"",age:"37",diagnosis:"",diagnosisCode:"",nationalId:"1-6703-00147-30-1",nationalIdDigits:"1670300147301",startYearBE:"2568",addressNo:"139",moo:"ม.5",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:119,fullName:"นายสำเริง พรมปัจจะเวก",nickname:"",age:"53",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00821-23-9",nationalIdDigits:"3720400821239",startYearBE:"2568",addressNo:"90",moo:"ม.4",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:120,fullName:"นายวินัย ธัญญาผล",nickname:"",age:"48",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00068-02-6",nationalIdDigits:"3720400068026",startYearBE:"2568",addressNo:"20/1",moo:"ม.2",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:121,fullName:"นายนพดล ติรณพันธ์",nickname:"",age:"33",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00121-21-4",nationalIdDigits:"1720400121214",startYearBE:"2568",addressNo:"81",moo:"ม.7",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:122,fullName:"นายสถาพล กรัดกระยาง",nickname:"",age:"34",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00151-45-5",nationalIdDigits:"1729900151455",startYearBE:"2567",addressNo:"274/4",moo:"ม.2",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:123,fullName:"นายพะเยาว์ กุมภัณฑ์",nickname:"",age:"53",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00715-28-5",nationalIdDigits:"3720400715285",startYearBE:"2567",addressNo:"293/1",moo:"ม.8",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:124,fullName:"นายวศิน ใจพราหมณ์",nickname:"",age:"25",diagnosis:"",diagnosisCode:"",nationalId:"2-7299-00029-43-7",nationalIdDigits:"2729900029437",startYearBE:"2569",addressNo:"191",moo:"ม.4",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:125,fullName:"นายกฤษฎา ดนตรีพงษ์",nickname:"",age:"29",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00148-98-8",nationalIdDigits:"1720400148988",startYearBE:"2569",addressNo:"162/2",moo:"ม.2",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:126,fullName:"นายชัยพล สุภานิชิ",nickname:"",age:"31",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00130-40-0",nationalIdDigits:"1720400130400",startYearBE:"2567",addressNo:"94",moo:"ม.4",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:127,fullName:"นายศิรชัย อภิเดช",nickname:"",age:"43",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00207-40-9",nationalIdDigits:"3720400207409",startYearBE:"2567",addressNo:"87",moo:"ม.1",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:128,fullName:"นายประสิทธิ์ จานสิบสี",nickname:"",age:"47",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00219-05-9",nationalIdDigits:"1720400219059",startYearBE:"2567",addressNo:"28",moo:"ม.7",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:129,fullName:"นายเอกพงษ์ เจริญผล",nickname:"",age:"38",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00082-57-1",nationalIdDigits:"1720400082571",startYearBE:"2567",addressNo:"65/1",moo:"ม.1",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:130,fullName:"นายประณต เหง้าพรมมินทร์",nickname:"นต",age:"26",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00153-81-7",nationalIdDigits:"1720400153817",startYearBE:"2568",addressNo:"75/1",moo:"ม.7",subdistrict:"ต.จรเข้ใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:"ประนตเหง้าพรมมินทร์.JPG"},{seqNo:131,fullName:"นายสิทธิพล โกมลธร",nickname:"",age:"31",diagnosis:"",diagnosisCode:"",nationalId:"1-1037-01575-02-6",nationalIdDigits:"1103701575026",startYearBE:"2567",addressNo:"144/1",moo:"ม.2",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:132,fullName:"นายประสิทธิ์ ฤกษ์โหรา",nickname:"",age:"38",diagnosis:"",diagnosisCode:"",nationalId:"1-1014-00704-86-1",nationalIdDigits:"1101400704861",startYearBE:"2567",addressNo:"83",moo:"ม.4",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:133,fullName:"นายประพันธ์ ปิ่นทอง",nickname:"",age:"44",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00661-62-2",nationalIdDigits:"3720400661622",startYearBE:"2567",addressNo:"133",moo:"ม.5",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:134,fullName:"นายสุนทร แจ่มจันทร์",nickname:"",age:"52",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00533-80-2",nationalIdDigits:"3720400533802",startYearBE:"2567",addressNo:"162/1",moo:"ม.2",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:135,fullName:"นายมานพ กรรไกร",nickname:"",age:"27",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00410-71-0",nationalIdDigits:"1729900410710",startYearBE:"2567",addressNo:"11",moo:"ม.9",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:136,fullName:"นายสมชาย ทองนวล",nickname:"",age:"66",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00615-92-2",nationalIdDigits:"3720400615922",startYearBE:"2567",addressNo:"1",moo:"ม.2",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:137,fullName:"นายธนัดชัย ขันทอง",nickname:"",age:"39",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00082-98-7",nationalIdDigits:"1720400082987",startYearBE:"2568",addressNo:"69",moo:"ม.3",subdistrict:"ต.วังน้ำเย็น",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:138,fullName:"นายสัญญา ชัยวิเชียร",nickname:"",age:"37",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00103-24-1",nationalIdDigits:"1720400103241",startYearBE:"2569",addressNo:"295",moo:"ม.2",subdistrict:"ต.วังน้ำเย็น",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:139,fullName:"นายธวัช บัวน้อย",nickname:"",age:"59",diagnosis:"",diagnosisCode:"",nationalId:"3-6005-00248-21-3",nationalIdDigits:"3600500248213",startYearBE:"2567",addressNo:"67/3",moo:"ม.3",subdistrict:"ต.หนองกรด",district:"อ.บรรพตพิสัย",province:"จ.นครสวรรค์",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:140,fullName:"นายสุรพล บาเปี ย",nickname:"",age:"50",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00261-75-6",nationalIdDigits:"3720400261756",startYearBE:"2567",addressNo:"157",moo:"ม.1",subdistrict:"ต.วังน้ำเย็น",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:141,fullName:"นายอาทร บุญเสม",nickname:"",age:"36",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00112-74-3",nationalIdDigits:"1729900112743",startYearBE:"2567",addressNo:"45/1",moo:"ม.3",subdistrict:"ต.วังน้ำเย็น",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:142,fullName:"นายณัฐพล ปัตเวก",nickname:"",age:"28",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00472-36-7",nationalIdDigits:"1729900472367",startYearBE:"2569",addressNo:"51/5",moo:"ม.5",subdistrict:"ต.วัดโบสถ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:143,fullName:"นายไพรัช ศรีดี",nickname:"",age:"43",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00134-18-5",nationalIdDigits:"3720400134185",startYearBE:"2569",addressNo:"18",moo:"ม.3",subdistrict:"ต.ตะค่า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:144,fullName:"นายชัยวัฒน์ เพิ่มพูล",nickname:"",age:"19",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00735-75-9",nationalIdDigits:"1729900735759",startYearBE:"2568",addressNo:"72",moo:"ม.2",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:145,fullName:"น.ส.จารุวรรณ ตรีรัตน์",nickname:"",age:"33",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00122-70-9",nationalIdDigits:"1720400122709",startYearBE:"2568",addressNo:"92/3",moo:"ม.2",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:146,fullName:"นายเฉลิมชัย คงชาตรี",nickname:"",age:"35",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00102-53-8",nationalIdDigits:"1720400102538",startYearBE:"2568",addressNo:"65/3",moo:"ม.6",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:147,fullName:"นายมรกต ฉิมวัย",nickname:"",age:"43",diagnosis:"",diagnosisCode:"",nationalId:"3-1303-00236-45-3",nationalIdDigits:"3130300236453",startYearBE:"2568",addressNo:"4",moo:"ม.3",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:148,fullName:"น.ส.สุชาดา เที่ยงตรง",nickname:"",age:"",diagnosis:"",diagnosisCode:"",nationalId:"",nationalIdDigits:"",startYearBE:"2569",addressNo:"150/2",moo:"ม.2",subdistrict:"ต.วังน้ำเย็น",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:"https://drive.google.com/file/d/1uDxW0q_hrISZjXk0ukxbWF-ldFNKzlf7/view?usp=drive_link"}],ao="bangplama001",lo="bangplama001@bangplama.local",qv="49073c81ad561de4ba604af5bd155c97216d1c0828fc14dac2e2bad08b6827a2",co="1234";function Bv(n){return`p_${xt(n)}@bangplama.local`}function $v(n){return`BPM#${n}#Station2026`}const oe={patients:"bpm_demo_patients_v1",officers:"bpm_demo_officers_v1",logs:"bpm_demo_logs_v1",session:"bpm_demo_session_v1"};function He(n,e){try{const t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}}function ot(n,e){localStorage.setItem(n,JSON.stringify(e))}function Gv(){const n=He(oe.patients,null);if(!n||!n.length){const i=new Date().toISOString(),s=qo.map(r=>({id:`seed_${String(r.seqNo).padStart(4,"0")}`,...r,photos:[],gps:null,createdBy:{username:"system",fullName:"นำเข้าจากไฟล์โรงพัก (บุคคลวิกลจริต)",callsign:"ระบบ",position:"ข้อมูลตั้งต้น",role:"system"},createdAt:i,updatedBy:{username:"system",fullName:"นำเข้าจากไฟล์โรงพัก (บุคคลวิกลจริต)",callsign:"ระบบ",position:"ข้อมูลตั้งต้น",role:"system"},updatedAt:i}));ot(oe.patients,s)}const e=He(oe.officers,null);if(!e||!e.length){const i=Os.map(s=>({...s,active:!0}));ot(oe.officers,i)}He(oe.logs,null)||ot(oe.logs,[])}class jv{constructor(){this.useFirebase=Uv(),this.app=null,this.auth=null,this.db=null,this.currentUser=null,this.localListeners={patients:new Set,officers:new Set,logs:new Set},this.useFirebase?(this.app=Lu(_i),this.auth=C_(this.app),this.db=Av(this.app)):Gv()}getMode(){return this.useFirebase?"firebase":"demo"}initAuthListener(e){if(!this.useFirebase){const t=He(oe.session,null);return this.currentUser=t,e(t),()=>{}}return _m(this.auth,async t=>{if(!t){this.currentUser=null,e(null);return}try{const i=(t.email||"").toLowerCase();if(i===lo){this.currentUser={uid:t.uid,username:ao,role:"admin",fullName:"ผู้ดูแลระบบ สภ.บางปลาม้า",callsign:"ADMIN",position:"ผู้ดูแลระบบ",phone:"-"},e(this.currentUser);return}const s=i.match(/^p_(\d{9,10})@bangplama\.local$/);if(!s){await _s(this.auth),this.currentUser=null,e(null);return}const r=s[1],a=await io(Je(this.db,"officers",r));let l=a.exists()?a.data():Os.find(u=>u.phone===r);if(!l||l.active===!1){await _s(this.auth),this.currentUser=null,e(null);return}this.currentUser={uid:t.uid,username:r,role:"officer",fullName:l.fullName,callsign:l.callsign||"-",position:l.position||"-",phone:l.phone||r,phoneDisplay:l.phoneDisplay||ui(r)},e(this.currentUser)}catch(i){console.error("Auth state resolution error:",i),this.currentUser=null,e(null)}})}async login(e,t){const i=String(e||"").trim(),s=String(t||"");if(!i||!s)throw new Error("กรุณากรอกชื่อผู้ใช้และรหัสผ่านให้ครบถ้วน");if(i.toLowerCase()===ao){if(await gs(s)!==qv)throw new Error("รหัสผ่านผู้ดูแลระบบไม่ถูกต้อง");const A={username:ao,role:"admin",fullName:"ผู้ดูแลระบบ สภ.บางปลาม้า",callsign:"ADMIN",position:"ผู้ดูแลระบบ",phone:"-"};if(!this.useFirebase)return this.currentUser=A,ot(oe.session,A),A;let C;try{C=await cc(this.auth,lo,s)}catch(k){if(k.code==="auth/user-not-found"||k.code==="auth/invalid-credential")try{C=await lc(this.auth,lo,s)}catch(D){throw D.code==="auth/email-already-in-use"?new Error("รหัสผ่านผู้ดูแลระบบไม่ถูกต้อง"):D.code==="auth/operation-not-allowed"?new Error("กรุณาเปิดใช้งาน Email/Password ใน Firebase Authentication Console ก่อนใช้งาน"):D}else throw k}return this.currentUser={...A,uid:C.user.uid},await this.ensureFirebaseSeededIfEmpty(),this.currentUser}const r=xt(i);if(r.length<9||r.length>10)throw new Error("ไม่พบบัญชีผู้ใช้ กรุณากรอกเบอร์โทรศัพท์ตำรวจ 10 หลักให้ถูกต้อง");if(s!==co)throw new Error("รหัสผ่านโรงพักไม่ถูกต้อง");if(!this.useFirebase){const A=He(oe.officers,[]).find(k=>xt(k.phone)===r&&k.active!==!1);if(!A)throw new Error("ไม่พบเบอร์โทรศัพท์นี้ในรายชื่อข้าราชการตำรวจ สภ.บางปลาม้า");const C={username:r,role:"officer",fullName:A.fullName,callsign:A.callsign||"-",position:A.position||"-",phone:A.phone,phoneDisplay:A.phoneDisplay||ui(r)};return this.currentUser=C,ot(oe.session,C),C}const a=Os.find(T=>T.phone===r);if(!a){const T=await gs(`${r}:${s}`),A=await io(Je(this.db,"officer_auth",T));if(!A.exists()||A.data().active===!1)throw new Error("ไม่พบเบอร์โทรศัพท์นี้ในรายชื่อข้าราชการตำรวจ สภ.บางปลาม้า")}const l=Bv(r),u=$v(s);let d;try{d=await cc(this.auth,l,u)}catch(T){if(T.code==="auth/user-not-found"||T.code==="auth/invalid-credential")try{d=await lc(this.auth,l,u)}catch(A){throw A.code==="auth/email-already-in-use"?new Error("รหัสผ่านไม่ถูกต้อง กรุณาติดต่อผู้ดูแลระบบ"):A.code==="auth/operation-not-allowed"?new Error("กรุณาเปิดใช้งาน Email/Password ใน Firebase Authentication Console ก่อนใช้งาน"):A}else throw T}let p=await io(Je(this.db,"officers",r));!p.exists()&&a&&(p=null);const m=p?.exists()?p.data():a;if(!m||m.active===!1)throw await _s(this.auth),new Error("บัญชีตำรวจนี้ถูกระงับการใช้งานหรือไม่พบในระบบ");return this.currentUser={uid:d.user.uid,username:r,role:"officer",fullName:m.fullName,callsign:m.callsign||"-",position:m.position||"-",phone:r,phoneDisplay:m.phoneDisplay||ui(r)},this.currentUser}async logout(){if(this.currentUser=null,!this.useFirebase){localStorage.removeItem(oe.session);return}await _s(this.auth)}async ensureFirebaseSeededIfEmpty(e=!1){if(!this.useFirebase)return{officersSeeded:0,patientsSeeded:0};if(this.currentUser?.role!=="admin")return{officersSeeded:0,patientsSeeded:0};let t=0,i=0;const s=await so(ws(Vt(this.db,"officers"),no(1)));if(e||s.empty){const a=Tu(this.db),l=new Date().toISOString();for(const u of Os){const d=Je(this.db,"officers",u.phone);a.set(d,{...u,active:!0,updatedAt:l},{merge:!0});const p=await gs(`${u.phone}:${co}`);a.set(Je(this.db,"officer_auth",p),{active:!0},{merge:!0}),t+=1}await a.commit()}const r=await so(ws(Vt(this.db,"patients"),no(1)));if(e||r.empty){const a=new Date().toISOString(),l={username:"system",fullName:"นำเข้าจากไฟล์โรงพัก (บุคคลวิกลจริต)",callsign:"ระบบ",position:"ข้อมูลตั้งต้น",role:"system"};for(let u=0;u<qo.length;u+=100){const d=qo.slice(u,u+100),p=Tu(this.db);for(const m of d){const T=`seed_${String(m.seqNo).padStart(4,"0")}`;p.set(Je(this.db,"patients",T),{...m,photos:[],gps:null,createdBy:l,createdAt:a,updatedBy:l,updatedAt:a},{merge:!0}),i+=1}await p.commit()}i>0&&await this.writeAuditLog({action:"SEED_IMPORT",targetType:"patient",targetId:"initial_seed",targetName:`นำเข้าข้อมูลตั้งต้น ${i} รายการ และตำรวจ ${t} นาย`,targetNationalId:"-",summary:`นำเข้าข้อมูลตั้งต้นจากไฟล์ สภ.บางปลาม้า (${i} รายชื่อ)`,changes:{}})}return{officersSeeded:t,patientsSeeded:i}}subscribePatients(e,t){if(!this.useFirebase){const s=()=>{const r=He(oe.patients,[]);e([...r].sort((a,l)=>(a.seqNo||99999)-(l.seqNo||99999)))};return this.localListeners.patients.add(s),s(),()=>this.localListeners.patients.delete(s)}const i=ws(Vt(this.db,"patients"));return ro(i,s=>{const r=s.docs.map(a=>({id:a.id,...a.data()}));r.sort((a,l)=>{const u=Number(a.seqNo||999999),d=Number(l.seqNo||999999);return u!==d?u-d:String(l.updatedAt||"").localeCompare(String(a.updatedAt||""))}),e(r)},s=>{console.error("Firestore patients listener error:",s),t?.(s)})}_notifyLocal(e){for(const t of this.localListeners[e])try{t()}catch(i){console.error(i)}}_getActor(){const e=this.currentUser;if(!e)throw new Error("กรุณาเข้าสู่ระบบก่อนทำรายการ");return{username:e.username,fullName:e.fullName,callsign:e.callsign||"-",position:e.position||"-",role:e.role}}async savePatient(e,t=null){const i=this._getActor(),s=new Date().toISOString(),r=_t(e.nationalId),a=r?ho(r):"";if(new Blob([JSON.stringify(e.photos||[])]).size>820*1024)throw new Error("ขนาดรูปภาพรวมใหญ่เกินขีดจำกัดฐานข้อมูล (สูงสุดประมาณ 800 KB ต่อรายการ) กรุณาลดจำนวนภาพ");const u={nationalId:a,nationalIdDigits:r,fullName:String(e.fullName||"").trim(),nickname:String(e.nickname||"").trim(),age:String(e.age||"").trim(),startYearBE:String(e.startYearBE||"").trim(),colorGroup:String(e.colorGroup||"").trim(),addressNo:String(e.addressNo||"").trim(),moo:String(e.moo||"").trim(),subdistrict:String(e.subdistrict||"").trim(),district:String(e.district||"").trim(),province:String(e.province||"").trim(),note:String(e.note||"").trim(),diagnosis:t?.diagnosis||e.diagnosis||"",diagnosisCode:t?.diagnosisCode||e.diagnosisCode||"",legacyPhotoRef:t?.legacyPhotoRef||e.legacyPhotoRef||"",photos:Array.isArray(e.photos)?e.photos:[],gps:e.gps||null,updatedBy:i,updatedAt:s};if(t?.id){const{changes:d,summary:p}=kf(t,u),m={...t,...u};if(this.useFirebase){const{id:T,...A}=m;await Fv(Je(this.db,"patients",t.id),A)}else{const T=He(oe.patients,[]),A=T.findIndex(C=>C.id===t.id);A>=0&&(T[A]=m,ot(oe.patients,T),this._notifyLocal("patients"))}return await this.writeAuditLog({action:"UPDATE",targetType:"patient",targetId:t.id,targetName:u.fullName,targetNationalId:a||"-",summary:p,changes:d}),{mode:"update",patient:m}}else{let d=1;if(this.useFirebase){(await so(Vt(this.db,"patients"))).forEach(C=>{const k=Number(C.data().seqNo||0);k>=d&&(d=k+1)});const m={seqNo:d,...u,createdBy:i,createdAt:s},T=await Eu(Vt(this.db,"patients"),m),A={id:T.id,...m};return await this.writeAuditLog({action:"CREATE",targetType:"patient",targetId:T.id,targetName:u.fullName,targetNationalId:a||"-",summary:`เพิ่มรายชื่อบุคคลวิกลจริตใหม่ (กลุ่มสี: ${u.colorGroup||"ไม่ระบุ"})`,changes:{}}),{mode:"create",patient:A}}else{const p=He(oe.patients,[]);d=p.reduce((T,A)=>Math.max(T,Number(A.seqNo||0)),0)+1;const m={id:`p_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,seqNo:d,...u,createdBy:i,createdAt:s};return p.push(m),ot(oe.patients,p),this._notifyLocal("patients"),await this.writeAuditLog({action:"CREATE",targetType:"patient",targetId:m.id,targetName:u.fullName,targetNationalId:a||"-",summary:`เพิ่มรายชื่อบุคคลวิกลจริตใหม่ (กลุ่มสี: ${u.colorGroup||"ไม่ระบุ"})`,changes:{}}),{mode:"create",patient:m}}}}async deletePatient(e){if(this._getActor(),!e?.id)throw new Error("ไม่พบรหัสเอกสารที่ต้องการลบ");if(this.useFirebase)await Mv(Je(this.db,"patients",e.id));else{const t=He(oe.patients,[]);ot(oe.patients,t.filter(i=>i.id!==e.id)),this._notifyLocal("patients")}await this.writeAuditLog({action:"DELETE",targetType:"patient",targetId:e.id,targetName:e.fullName||"(ไม่ระบุชื่อ)",targetNationalId:e.nationalId||"-",summary:`ลบรายชื่อออกจากระบบ (ลำดับที่ ${e.seqNo||"-"})`,changes:{}})}async writeAuditLog({action:e,targetType:t,targetId:i,targetName:s,targetNationalId:r,summary:a,changes:l}){const u=this._getActor(),d={action:e,targetType:t,targetId:String(i||""),targetName:String(s||""),targetNationalId:String(r||"-"),actor:u,summary:String(a||""),changes:l||{},timestamp:new Date().toISOString()};if(!this.useFirebase){const p=He(oe.logs,[]);p.unshift({id:`log_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,...d}),ot(oe.logs,p.slice(0,1e3)),this._notifyLocal("logs");return}await Eu(Vt(this.db,"audit_logs"),d)}subscribeAuditLogs(e,t){if(this.currentUser?.role!=="admin")return e([]),()=>{};if(!this.useFirebase){const s=()=>{const r=He(oe.logs,[]);e([...r])};return this.localListeners.logs.add(s),s(),()=>this.localListeners.logs.delete(s)}const i=ws(Vt(this.db,"audit_logs"),Vv("timestamp","desc"),no(300));return ro(i,s=>{e(s.docs.map(r=>({id:r.id,...r.data()})))},s=>{console.error("Audit logs listener error:",s),t?.(s)})}subscribeOfficers(e,t){if(this.currentUser?.role!=="admin")return e([]),()=>{};if(!this.useFirebase){const i=()=>{const s=He(oe.officers,[]);e([...s].sort((r,a)=>(r.seq||999)-(a.seq||999)))};return this.localListeners.officers.add(i),i(),()=>this.localListeners.officers.delete(i)}return ro(Vt(this.db,"officers"),i=>{const s=i.docs.map(r=>({id:r.id,...r.data()}));s.sort((r,a)=>(r.seq||999)-(a.seq||999)),e(s)},i=>t?.(i))}async saveOfficer(e){if(this.currentUser?.role!=="admin")throw new Error("เฉพาะผู้ดูแลระบบเท่านั้นที่สามารถจัดการรายชื่อตำรวจได้");const t=xt(e.phone);if(t.length<9||t.length>10)throw new Error("กรุณากรอกเบอร์โทรศัพท์ 9-10 หลักให้ถูกต้อง");const i={phone:t,phoneDisplay:ui(t),fullName:String(e.fullName||"").trim(),position:String(e.position||"").trim(),callsign:String(e.callsign||"").trim(),category:String(e.category||"ชั้นประทวน").trim(),note:String(e.note||"").trim(),active:e.active!==!1,updatedAt:new Date().toISOString()};if(!i.fullName)throw new Error("กรุณากรอกยศ ชื่อ-สกุล");if(this.useFirebase){await Iu(Je(this.db,"officers",t),i,{merge:!0});const s=await gs(`${t}:${co}`);await Iu(Je(this.db,"officer_auth",s),{active:i.active},{merge:!0})}else{const s=He(oe.officers,[]),r=s.findIndex(a=>xt(a.phone)===t);if(r>=0)s[r]={...s[r],...i};else{const a=s.reduce((l,u)=>Math.max(l,Number(u.seq||0)),0);s.push({seq:a+1,...i})}ot(oe.officers,s),this._notifyLocal("officers")}await this.writeAuditLog({action:"OFFICER_UPDATE",targetType:"officer",targetId:t,targetName:i.fullName,targetNationalId:i.phoneDisplay,summary:`${i.active?"บันทึก/เปิดใช้งาน":"ระงับสิทธิ์"} บัญชีตำรวจ (${i.callsign||"-"})`,changes:{}})}}const Fe=new jv;function zv({onLoginSuccess:n}){const e=f("div",{class:"alert-banner error",role:"alert",hidden:!0}),t=f("input",{type:"text",id:"login-username",name:"username",required:!0,autocomplete:"username",autocorrect:"off",autocapitalize:"none",spellcheck:"false",enterkeyhint:"next",placeholder:"เช่น 0812345678","aria-describedby":"login-username-hint","data-error":"login-username-error"}),i=f("input",{type:"password",id:"login-password",name:"password",required:!0,autocomplete:"current-password",enterkeyhint:"done",placeholder:"กรอกรหัสผ่าน","data-error":"login-password-error"}),s=f("button",{type:"button",class:"password-toggle","aria-pressed":"false","aria-label":"แสดงรหัสผ่าน"},"👁️");s.addEventListener("click",()=>{const u=i.type==="password";i.type=u?"text":"password",s.setAttribute("aria-pressed",u?"true":"false"),s.setAttribute("aria-label",u?"ซ่อนรหัสผ่าน":"แสดงรหัสผ่าน"),s.textContent=u?"🙈":"👁️"});const r=f("button",{type:"submit",class:"btn btn-maroon btn-full"},"🔐 เข้าสู่ระบบ"),a=f("form",{class:"login-body",method:"post","aria-labelledby":"login-heading"},e,f("div",{class:"field"},f("label",{for:"login-username"},"ชื่อผู้ใช้ (เบอร์โทรศัพท์ตำรวจ / แอดมิน)",f("span",{class:"req-star","aria-hidden":"true"},"*")),f("span",{id:"login-username-hint",class:"field-hint"},"ข้าราชการตำรวจ สภ.บางปลาม้า กรอกเบอร์โทรศัพท์ 10 หลัก (ใส่หรือไม่ใส่เว้นวรรคก็ได้)"),t,f("div",{id:"login-username-error",class:"error-msg"},f("span",{role:"img","aria-label":"ข้อผิดพลาด"},"⚠")," กรุณากรอกเบอร์โทรศัพท์หรือชื่อผู้ใช้")),f("div",{class:"field"},f("label",{for:"login-password"},"รหัสผ่าน",f("span",{class:"req-star","aria-hidden":"true"},"*")),f("div",{class:"password-wrap"},i,s),f("div",{id:"login-password-error",class:"error-msg"},f("span",{role:"img","aria-label":"ข้อผิดพลาด"},"⚠")," กรุณากรอกรหัสผ่าน")),r);a.addEventListener("submit",async u=>{if(u.preventDefault(),e.hidden=!0,e.textContent="",!a.reportValidity()){a.querySelector(":invalid")?.focus();return}r.disabled=!0,r.textContent="กำลังตรวจสอบสิทธิ์...";try{const d=await Fe.login(t.value,i.value);n(d)}catch(d){e.textContent=d?.message||"ไม่สามารถเข้าสู่ระบบได้ กรุณาลองใหม่อีกครั้ง",e.hidden=!1,r.disabled=!1,r.textContent="🔐 เข้าสู่ระบบ"}});const l=Fe.getMode()==="firebase"?"เชื่อมต่อฐานข้อมูล Firebase Cloud Firestore แล้ว":"โหมดทดสอบในเครื่อง (ข้อมูลตั้งต้นตำรวจ 85 นาย + รายชื่อ 148 รายการพร้อมใช้งาน)";return f("main",{class:"login-page"},f("section",{class:"login-card"},f("header",{class:"login-header"},f("div",{class:"police-crest","aria-hidden":"true"},"🛡️"),f("h1",{id:"login-heading"},"สถานีตำรวจภูธรบางปลาม้า"),f("p",{},"ระบบตรวจสอบและจัดการข้อมูลบุคคลวิกลจริต")),a,f("footer",{class:"login-footer"},l)))}function Hv({patients:n,isAdmin:e,onSelectDetail:t,onEditPatient:i,onDeletePatient:s,onQuickAdd:r}){let a="",l="ALL",u="ALL";const d=f("div",{}),p=f("div",{class:"stats-grid"}),m=f("div",{}),T=f("h2",{id:"patients-table-caption"},"ทะเบียนรายชื่อบุคคลวิกลจริตทั้งหมด"),A=f("tbody",{}),C=f("input",{type:"search",id:"patient-search-input",name:"q",placeholder:"พิมพ์เลขบัตรประชาชน 13 หลัก หรือ ชื่อ-นามสกุล / ชื่อเล่น เพื่อตรวจสอบ...",autocorrect:"off",autocapitalize:"none",spellcheck:"false",enterkeyhint:"search"}),k=f("select",{id:"filter-color","aria-label":"กรองตามกลุ่มสี"},f("option",{value:"ALL"},"ทุกกลุ่มสี"),f("option",{value:"แดง"},"🔴 แดง (อันตรายสูง)"),f("option",{value:"ส้ม"},"🟠 ส้ม (เฝ้าระวัง)"),f("option",{value:"เหลือง"},"🟡 เหลือง (ติดตาม)"),f("option",{value:"เขียว"},"🟢 เขียว (ทั่วไป)"),f("option",{value:"NONE"},"⚪ ยังไม่ระบุสี")),D=f("select",{id:"filter-subdistrict","aria-label":"กรองตามตำบล"},f("option",{value:"ALL"},"ทุกตำบล"),...bu.map(y=>f("option",{value:y},y))),M=f("button",{type:"button",class:"btn btn-outline btn-sm",onClick:()=>{a="",l="ALL",u="ALL",C.value="",k.value="ALL",D.value="ALL",Y()}},"ล้างตัวกรอง"),x=f("search",{},f("form",{class:"search-panel",onSubmit:y=>{y.preventDefault(),a=C.value.trim(),Y()}},f("h2",{},"🔍 ตรวจสอบรายชื่อบุคคลวิกลจริต สภ.บางปลาม้า"),f("div",{class:"search-row"},f("div",{class:"field"},f("label",{for:"patient-search-input"},"เลขบัตรประจำตัวประชาชน หรือ ชื่อ-นามสกุล / ชื่อเล่น"),C),f("button",{type:"submit",class:"btn btn-maroon"},"🔍 ตรวจสอบ")),f("div",{class:"filter-row"},k,D,M,f("button",{type:"button",class:"btn btn-navy btn-sm",style:"margin-inline-start: auto;",onClick:()=>r("")},"➕ เพิ่มข้อมูลบุคคลใหม่")),m));C.addEventListener("input",()=>{a=C.value.trim(),Y()}),k.addEventListener("change",()=>{l=k.value,Y()}),D.addEventListener("change",()=>{u=D.value,Y()});function q(){$e(p);const y=n.length,v=n.filter(ee=>ee.colorGroup==="แดง").length,I=n.filter(ee=>ee.colorGroup==="ส้ม").length,b=n.filter(ee=>ee.colorGroup==="เขียว").length,E=[{key:"ALL",label:"รายชื่อทั้งหมด",val:y,cls:""},{key:"แดง",label:"🔴 กลุ่มสีแดง (อันตราย)",val:v,cls:"red"},{key:"ส้ม",label:"🟠 กลุ่มสีส้ม (เฝ้าระวัง)",val:I,cls:"orange"},{key:"เขียว",label:"🟢 กลุ่มสีเขียว (ทั่วไป)",val:b,cls:"green"}];for(const ee of E)p.appendChild(f("button",{type:"button",class:`stat-card ${ee.cls} ${l===ee.key?"active":""}`,onClick:()=>{l=ee.key,k.value=ee.key,Y()}},f("span",{class:"stat-label"},ee.label),f("span",{class:"stat-value"},`${ee.val} ราย`)))}function W(){const y=a.trim().toLowerCase(),v=_t(a);return n.filter(I=>{if(l==="NONE"){if(I.colorGroup&&I.colorGroup.trim())return!1}else if(l!=="ALL"&&(I.colorGroup||"").trim()!==l)return!1;if(u!=="ALL"&&!(I.subdistrict||"").includes(u.replace(/^ต\./,"")))return!1;if(!y)return!0;const b=(I.fullName||"").toLowerCase().includes(y),E=(I.nickname||"").toLowerCase().includes(y),ee=[I.addressNo,I.moo,I.subdistrict,I.note].filter(Boolean).join(" ").toLowerCase().includes(y),Ae=v.length>=3&&(I.nationalIdDigits||_t(I.nationalId)).includes(v);return b||E||Ae||ee})}function z(y){if($e(m),!(!a||a.length<2))if(y.length>0){const v=f("div",{class:"verify-box found",role:"status"},f("h3",{},`⚠️ พบข้อมูลในรายชื่อบุคคลวิกลจริต สภ.บางปลาม้า จำนวน ${y.length} รายการ`),f("div",{class:"verify-cards"},y.slice(0,5).map(I=>{const b=fo(I.colorGroup),E=[I.addressNo,I.moo,I.subdistrict,I.district].filter(Boolean).join(" ");return f("div",{class:"verify-hit-card"},f("div",{},f("strong",{},I.fullName||"-"),I.nickname?f("span",{class:"muted-sub",style:"display:inline;margin-inline-start:6px;"},`(${I.nickname})`):null," ",f("span",{class:`color-badge ${b.key}`},b.label),f("div",{class:"muted-sub"},`เลขบัตร ปชช.: ${I.nationalId||"-"} | อายุ: ${I.age?`${I.age} ปี`:"-"} | ที่อยู่: ${E||"-"}`),I.note?f("div",{style:"font-size:0.84rem;color:#b91c1c;margin-top:2px;"},`หมายเหตุ: ${I.note}`):null,e&&I.updatedBy?f("div",{style:"font-size:0.8rem;color:#1e40af;margin-top:2px;"},`ผู้บันทึก/แก้ไขล่าสุด: ${I.updatedBy.fullName} (${I.updatedBy.callsign||"-"}) • ${bi(I.updatedAt)}`):null),f("div",{class:"table-actions"},f("button",{type:"button",class:"btn btn-outline btn-sm",onClick:()=>t(I)},"ดูข้อมูล"),f("button",{type:"button",class:"btn btn-navy btn-sm",onClick:()=>i(I)},"แก้ไข")))})));m.appendChild(v)}else m.appendChild(f("div",{class:"verify-box not-found",role:"status"},f("h3",{},`✅ ไม่พบ "${a}" ในรายชื่อบุคคลวิกลจริต สภ.บางปลาม้า`),f("div",{style:"display:flex;flex-wrap:wrap;gap:0.65rem;align-items:center;"},f("span",{style:"font-size:0.9rem;"},"หากต้องการบันทึกบุคคลนี้เข้าสู่ระบบฐานข้อมูลโรงพัก สามารถกดปุ่มด้านข้างได้ทันที"),f("button",{type:"button",class:"btn btn-maroon btn-sm",onClick:()=>r(a)},"➕ เพิ่มบุคคลนี้เข้าระบบ"))))}function Y(){q();const y=W();if(z(y),T.textContent=`ทะเบียนรายชื่อบุคคลวิกลจริต (แสดง ${y.length} จาก ${n.length} รายการ)`,$e(A),!y.length){A.appendChild(f("tr",{},f("td",{colspan:e?"8":"7",style:"text-align:center;padding:2rem;color:#64748b;"},"ไม่พบข้อมูลตามเงื่อนไขที่ค้นหา")));return}for(const v of y){const I=fo(v.colorGroup),b=[v.addressNo,v.moo,v.subdistrict].filter(Boolean).join(" "),E=I.key==="red"?"row-red":I.key==="orange"?"row-orange":I.key==="green"?"row-green":"",ee=(v.photos?.length||0)+(v.legacyPhotoRef?1:0),Ae=[f("td",{"data-label":"ลำดับ"},v.seqNo?String(v.seqNo):"-"),f("th",{scope:"row"},v.fullName||"-",v.nickname?f("span",{class:"muted-sub"},`ชื่อเล่น: ${v.nickname}`):null,ee>0||v.gps?f("span",{class:"muted-sub"},`${ee>0?`📷 ${ee} `:""}${v.gps?"📍 มีพิกัด GPS":""}`):null),f("td",{"data-label":"เลขบัตร ปชช."},v.nationalId||"-"),f("td",{"data-label":"อายุ"},v.age?`${v.age} ปี`:"-"),f("td",{"data-label":"ที่อยู่"},b||"-"),f("td",{"data-label":"กลุ่มสี"},f("span",{class:`color-badge ${I.key}`},I.short)),f("td",{"data-label":"หมายเหตุ"},v.note||"-")];if(e){const Ve=v.updatedBy||v.createdBy;Ae.push(f("td",{"data-label":"ผู้บันทึกล่าสุด"},Ve?.fullName||"-",Ve?.callsign?f("span",{class:"muted-sub"},`${Ve.callsign} (${Ve.username})`):null))}Ae.push(f("td",{"data-label":"จัดการ"},f("div",{class:"table-actions"},f("button",{type:"button",class:"btn btn-outline btn-sm",onClick:()=>t(v)},"ดู"),f("button",{type:"button",class:"btn btn-navy btn-sm",onClick:()=>i(v)},"แก้ไข"),f("button",{type:"button",class:"btn btn-danger-outline btn-sm",onClick:()=>s(v)},"ลบ")))),A.appendChild(f("tr",{class:E},...Ae))}}const w=[f("th",{scope:"col"},"ลำดับ"),f("th",{scope:"col"},"ชื่อ-นามสกุล ผู้ป่วย"),f("th",{scope:"col"},"เลขบัตรประจำตัวประชาชน"),f("th",{scope:"col"},"อายุ"),f("th",{scope:"col"},"ที่อยู่"),f("th",{scope:"col"},"กลุ่มสี"),f("th",{scope:"col"},"หมายเหตุ")];e&&w.push(f("th",{scope:"col"},"ผู้บันทึกล่าสุด")),w.push(f("th",{scope:"col"},"จัดการ"));const _=f("section",{class:"table-card"},f("div",{class:"table-toolbar"},T),f("div",{class:"table-wrapper",tabindex:"0",role:"region","aria-labelledby":"patients-table-caption"},f("table",{class:"data-table"},f("caption",{},"รายชื่อบุคคลวิกลจริต สภ.บางปลาม้า"),f("thead",{},f("tr",{},...w)),A)));return d.appendChild(p),d.appendChild(x),d.appendChild(_),Y(),d}let Wv=0;function wu(n){if(typeof document.ariaNotify=="function")try{document.ariaNotify(n);return}catch{}const e=document.getElementById("sr-announcer");e&&(e.textContent="",setTimeout(()=>{e.textContent=n},30))}function Ie(n,e="info",t=4500){if(document.querySelector("dialog:modal")){wu(n);return}const i=document.getElementById("toast-region");if(!i)return;const s=`toast-${++Wv}`,r=f("button",{type:"button",class:"toast-close","aria-label":"ปิดการแจ้งเตือน",popovertarget:s,popovertargetaction:"hide"},"✕"),a=f("div",{id:s,class:`toast-item ${e}`},f("span",{class:"toast-text"},n),r);a.setAttribute("popover","manual"),i.appendChild(a);const l=Object.hasOwn(HTMLElement.prototype,"popover")&&typeof a.showPopover=="function";l?a.showPopover():(a.classList.add(":popover-open"),r.addEventListener("click",()=>{a.remove()})),wu(n);let u=null;const d=()=>{if(a.matches(":focus-within")){u=setTimeout(d,2e3);return}if(l&&a.isConnected)try{a.hidePopover()}catch{}a.remove()};a.addEventListener("toggle",p=>{p.newState==="closed"&&(clearTimeout(u),a.remove())}),t>0&&(u=setTimeout(d,t))}function Kd(n){if("closedBy"in HTMLDialogElement.prototype)return;const e=i=>{const s=n.getBoundingClientRect();return i.clientX<s.left||i.clientX>s.right||i.clientY<s.top||i.clientY>s.bottom};let t=!1;n.addEventListener("pointerdown",i=>{t=e(i)}),n.addEventListener("pointerup",i=>{t&&e(i)&&n.close("")})}function Yv(n){try{const e=new URL(n);return e.protocol==="https:"||e.protocol==="http:"}catch{return!1}}let ze=null,st=null,Rn=null;function Kv(){return Rn||(Rn=f("dialog",{class:"lightbox-dialog",closedby:"any","aria-label":"ดูภาพถ่ายขนาดเต็ม"}),Kd(Rn),document.body.appendChild(Rn),Rn)}function Qd(n,e="ภาพถ่าย"){const t=Kv();$e(t),t.appendChild(f("div",{class:"dialog-header"},f("h1",{},e),f("button",{type:"button",class:"dialog-close-btn","aria-label":"ปิดหน้าต่างภาพถ่าย",onClick:()=>t.close()},"✕"))),t.appendChild(f("img",{src:n,alt:e,class:"lightbox-img"})),t.showModal()}function Qv(n,{isAdmin:e,onEdit:t,onDelete:i}){ze||(ze=f("dialog",{id:"patient-detail-dialog",closedby:"any","aria-labelledby":"patient-detail-title"}),Kd(ze),document.body.appendChild(ze)),$e(ze);const s=fo(n.colorGroup),r=[n.addressNo?`บ้านเลขที่ ${n.addressNo}`:"",n.moo||"",n.subdistrict||"",n.district||"",n.province||""].filter(Boolean),a=[["ลำดับในทะเบียน",n.seqNo?`#${n.seqNo}`:"-"],["เลขบัตรประจำตัวประชาชน",n.nationalId||"-"],["ชื่อ - นามสกุล ผู้ป่วย",n.fullName||"-"],["ชื่อเล่น",n.nickname||"-"],["อายุ (ปี)",n.age?`${n.age} ปี`:"-"],["ปี พ.ศ. ที่เริ่มเป็น",n.startYearBE||"-"],["กลุ่มสีความรุนแรง",s.label],["วินิจฉัยโรค / รหัส (จากไฟล์เดิม)",[n.diagnosis,n.diagnosisCode].filter(Boolean).join(" / ")||"-"],["ที่อยู่ปัจจุบัน",r.join(" ")||"-"],["หมายเหตุ",n.note||"-"]],l=[f("div",{class:"detail-grid"},a.map(([d,p])=>f("div",{class:"detail-item"},f("div",{class:"detail-label"},d),d==="กลุ่มสีความรุนแรง"?f("div",{class:"detail-value"},f("span",{class:`color-badge ${s.key}`},p)):f("div",{class:"detail-value"},p))))];if(n.gps?.lat&&n.gps?.lng){const d=`https://www.google.com/maps?q=${encodeURIComponent(`${n.gps.lat},${n.gps.lng}`)}`;l.push(f("div",{class:"detail-item"},f("div",{class:"detail-label"},"พิกัดสถานที่ (GPS)"),f("div",{class:"detail-value"},`${Number(n.gps.lat).toFixed(6)}, ${Number(n.gps.lng).toFixed(6)} `,f("a",{href:d,target:"_blank",rel:"noopener noreferrer",class:"btn btn-outline btn-sm",style:"margin-inline-start: 0.5rem;"},"🗺️ เปิดใน Google Maps"))))}const u=Array.isArray(n.photos)?n.photos:[];if(u.length||n.legacyPhotoRef){const d=[];if(u.length&&d.push(f("div",{class:"photo-preview-grid"},u.map((p,m)=>f("div",{class:"photo-thumb"},f("img",{src:p.dataUrl||p.url,alt:p.name||`ภาพถ่าย ${m+1}`,onClick:()=>Qd(p.dataUrl||p.url,p.name||`ภาพถ่าย ${m+1}`)}))))),n.legacyPhotoRef){const p=n.legacyPhotoRef.trim();d.push(f("div",{style:"margin-top: 0.45rem; font-size: 0.85rem;"},"อ้างอิงภาพเดิมจากไฟล์โรงพัก: ",Yv(p)?f("a",{href:p,target:"_blank",rel:"noopener noreferrer"},p):f("strong",{},p)))}l.push(f("div",{class:"detail-item"},f("div",{class:"detail-label"},`ภาพถ่าย (${u.length} ภาพ)`),...d))}if(e){const d=n.createdBy||{},p=n.updatedBy||{};l.push(f("div",{class:"audit-box"},f("h2",{},"🛡️ ข้อมูลการลงรายการ (สำหรับแอดมินตรวจสอบ)"),f("div",{},f("strong",{},"ผู้บันทึกตั้งต้น: "),`${d.fullName||"-"} (${d.callsign||"-"} | บัญชี: ${d.username||"-"})`),f("div",{},f("strong",{},"เวลาบันทึกตั้งต้น: "),bi(n.createdAt)),f("div",{style:"margin-top: 0.35rem;"},f("strong",{},"ผู้แก้ไขล่าสุด: "),`${p.fullName||"-"} (${p.callsign||"-"} | บัญชี: ${p.username||"-"})`),f("div",{},f("strong",{},"เวลาแก้ไขล่าสุด: "),bi(n.updatedAt))))}ze.appendChild(f("div",{class:"dialog-header"},f("h1",{id:"patient-detail-title"},`ข้อมูลบุคคล: ${n.fullName||"ไม่ระบุชื่อ"}`),f("button",{type:"button",class:"dialog-close-btn","aria-label":"ปิดหน้าต่าง",onClick:()=>ze.close()},"✕"))),ze.appendChild(f("div",{class:"dialog-body"},...l)),ze.appendChild(f("div",{class:"dialog-footer"},f("button",{type:"button",class:"btn btn-danger-outline",onClick:()=>{ze.close(),i?.(n)}},"🗑️ ลบข้อมูล"),f("button",{type:"button",class:"btn btn-navy",onClick:()=>{ze.close(),t?.(n)}},"✏️ แก้ไขข้อมูล"),f("button",{type:"button",class:"btn btn-outline",onClick:()=>ze.close()},"ปิด"))),ze.showModal()}function Xv({title:n,message:e,confirmLabel:t="ยืนยันลบข้อมูล",danger:i=!0}){return new Promise(s=>{st||(st=f("dialog",{id:"confirm-action-dialog",class:"confirm-dialog","aria-labelledby":"confirm-dialog-title"}),document.body.appendChild(st)),$e(st);const r=f("button",{type:"submit",value:"cancel",class:"btn btn-outline",autofocus:!0},"ยกเลิก"),a=f("button",{type:"submit",value:"confirm",class:i?"btn btn-danger":"btn btn-navy"},t),l=f("form",{method:"dialog"},f("div",{class:"dialog-header"},f("h1",{id:"confirm-dialog-title"},n)),f("div",{class:"dialog-body"},f("p",{style:"margin:0;"},e)),f("div",{class:"dialog-footer"},r,a));st.appendChild(l);const u=()=>{const d=st.returnValue==="confirm";st.returnValue="",st.removeEventListener("close",u),s(d)};st.addEventListener("close",u),st.showModal()})}function Jv({patients:n,initialPatient:e=null,prefillQuery:t="",onSaved:i,onDeletePatient:s,onResetToNew:r}){let a=e,l=Array.isArray(e?.photos)?[...e.photos]:[],u=e?.gps?{...e.gps}:null;const d=f("div",{class:"alert-banner info",hidden:!0,role:"status"}),p=f("p",{class:"form-sheet-mode"},a?`โหมดแก้ไขข้อมูล: ${a.fullName} (ลำดับที่ ${a.seqNo||"-"})`:"เพิ่มข้อมูลใหม่ หรือค้นหาด้วยเลขบัตรประชาชนเพื่อแก้ไขข้อมูลเดิม"),m=a?"":_t(t),T=a?a.nationalId||"":m.length>=5?ho(m):"",A=f("input",{type:"text",id:"pf-national-id",name:"nationalId",required:!0,inputmode:"numeric",autocorrect:"off",autocapitalize:"none",spellcheck:"false",maxlength:"17",placeholder:"X-XXXX-XXXXX-XX-X",value:T,"data-error":"pf-national-id-error"});A.addEventListener("input",()=>{const B=ho(A.value);A.value!==B&&(A.value=B),A.setCustomValidity("")});const C=f("button",{type:"button",class:"btn btn-slate"},"🔍 ค้นหา"),k=!a&&m.length<5?t:"",D=f("input",{type:"text",id:"pf-fullname",name:"fullName",required:!0,autocomplete:"name",placeholder:"เช่น นายสมชาย ใจดี",value:a?.fullName||k||"","data-error":"pf-fullname-error"}),M=f("input",{type:"text",id:"pf-nickname",name:"nickname",placeholder:"ชื่อเล่น (ถ้ามี)",value:a?.nickname||""}),x=f("input",{type:"text",id:"pf-age",name:"age",inputmode:"decimal",placeholder:"เช่น 35",value:a?.age||""}),q=f("input",{type:"text",id:"pf-start-year",name:"startYearBE",inputmode:"numeric",maxlength:"4",placeholder:"เช่น 2568",value:a?.startYearBE||""}),W=f("select",{id:"pf-color",name:"colorGroup"},f("option",{value:""},"- เลือกระดับความรุนแรง -"),f("option",{value:"แดง"},"🔴 แดง — อันตรายสูง / คลุ่มคลั่ง / เคยก่อเหตุรุนแรง"),f("option",{value:"ส้ม"},"🟠 ส้ม — เฝ้าระวัง / มีความเสี่ยงสูง"),f("option",{value:"เหลือง"},"🟡 เหลือง — ติดตามอาการ"),f("option",{value:"เขียว"},"🟢 เขียว — อาการคงที่ / ทั่วไป"),f("option",{value:"ทดสอบ"},"ทดสอบ"));W.value=a?.colorGroup||"";const z=f("input",{type:"text",id:"pf-address-no",name:"addressNo",placeholder:"เช่น 123/4",value:a?.addressNo||""}),Y=f("input",{type:"text",id:"pf-moo",name:"moo",placeholder:"เช่น ม.5",value:a?.moo||""}),w=f("datalist",{id:"bpm-subdistricts-list"},...bu.map(B=>f("option",{value:B}))),_=f("input",{type:"text",id:"pf-subdistrict",name:"subdistrict",list:"bpm-subdistricts-list",placeholder:"เช่น ต.โคกคราม",value:a?.subdistrict||""}),y=f("input",{type:"text",id:"pf-district",name:"district",placeholder:"เช่น อ.บางปลาม้า",value:a?.district||(a?"":"อ.บางปลาม้า")}),v=f("input",{type:"text",id:"pf-province",name:"province",placeholder:"เช่น จ.สุพรรณบุรี",value:a?.province||(a?"":"จ.สุพรรณบุรี")}),I=f("textarea",{id:"pf-note",name:"note",placeholder:"ระบุข้อมูลเพิ่มเติม (ถ้ามี)"});I.value=a?.note||"";const b=f("input",{type:"file",id:"pf-photos",name:"photos",accept:"image/*",multiple:!0}),E=f("div",{class:"photo-preview-grid"}),ee=f("span",{class:"field-hint"},"ระบบจะย่อขนาดภาพอัตโนมัติเพื่อจัดเก็บใน Firestore (แนะนำไม่เกิน 4-5 ภาพต่อรายการ)");function Ae(){$e(E),l.forEach((B,ae)=>{E.appendChild(f("div",{class:"photo-thumb"},f("img",{src:B.dataUrl||B.url,alt:B.name||`ภาพที่ ${ae+1}`,onClick:()=>Qd(B.dataUrl||B.url,B.name||`ภาพที่ ${ae+1}`)}),f("button",{type:"button",class:"photo-remove-btn","aria-label":`ลบภาพ ${B.name||ae+1}`,onClick:()=>{l.splice(ae,1),Ae()}},"✕")))})}b.addEventListener("change",async()=>{const B=Array.from(b.files||[]);if(B.length){for(const ae of B){if(l.length>=6){Ie("แนบภาพได้สูงสุด 6 ภาพต่อรายการ","error");break}try{const _e=await Sf(ae);l.push(_e)}catch(_e){Ie(_e.message,"error")}}b.value="",Ae()}});const Ve=f("button",{type:"button",class:"btn btn-maroon btn-full"},"📌 ดึงพิกัด GPS ปัจจุบัน"),Ge=f("div",{class:"gps-status-box",role:"status"});function nt(){if($e(Ge),u&&typeof u.lat=="number"&&typeof u.lng=="number"){Ge.className="gps-status-box captured";const B=`https://www.google.com/maps?q=${encodeURIComponent(`${u.lat},${u.lng}`)}`;Ge.appendChild(f("span",{},`📍 พิกัด: ${u.lat.toFixed(6)}, ${u.lng.toFixed(6)}`)),Ge.appendChild(f("div",{style:"display:flex;gap:0.4rem;"},f("a",{href:B,target:"_blank",rel:"noopener noreferrer",class:"btn btn-outline btn-sm"},"เปิดแผนที่"),f("button",{type:"button",class:"btn btn-danger-outline btn-sm",onClick:()=>{u=null,nt()}},"ล้างพิกัด")))}else Ge.className="gps-status-box",Ge.textContent="ยังไม่ได้ดึงพิกัดตำแหน่ง"}Ve.addEventListener("click",()=>{if(!navigator.geolocation){Ie("อุปกรณ์หรือเบราว์เซอร์นี้ไม่รองรับการดึงพิกัด GPS","error");return}Ve.disabled=!0,Ve.textContent="⏳ กำลังดึงพิกัด GPS...",navigator.geolocation.getCurrentPosition(B=>{u={lat:B.coords.latitude,lng:B.coords.longitude,accuracy:Math.round(B.coords.accuracy||0),capturedAt:new Date().toISOString()},Ve.disabled=!1,Ve.textContent="📌 ดึงพิกัด GPS ปัจจุบัน",nt(),Ie("ดึงพิกัด GPS สำเร็จแล้ว","success")},B=>{Ve.disabled=!1,Ve.textContent="📌 ดึงพิกัด GPS ปัจจุบัน";const ae=B.code===1?"กรุณาอนุญาตการเข้าถึงตำแหน่ง (Location) ในเบราว์เซอร์":"ไม่สามารถรับสัญญาณ GPS ได้ในขณะนี้";Ie(ae,"error")},{enableHighAccuracy:!0,timeout:12e3,maximumAge:0})});function Qn(B){a=B,A.value=B.nationalId||"",D.value=B.fullName||"",M.value=B.nickname||"",x.value=B.age||"",q.value=B.startYearBE||"",W.value=B.colorGroup||"",z.value=B.addressNo||"",Y.value=B.moo||"",_.value=B.subdistrict||"",y.value=B.district||"",v.value=B.province||"",I.value=B.note||"",l=Array.isArray(B.photos)?[...B.photos]:[],u=B.gps?{...B.gps}:null,p.textContent=`โหมดแก้ไขข้อมูล: ${B.fullName} (ลำดับที่ ${B.seqNo||"-"})`,Ae(),nt(),Ye()}C.addEventListener("click",()=>{const B=_t(A.value);if(B.length<5){d.className="alert-banner warning",d.textContent="กรุณากรอกเลขบัตรประจำตัวประชาชนอย่างน้อย 5 หลักเพื่อค้นหา",d.hidden=!1,A.focus();return}const ae=n.find(_e=>{const it=_e.nationalIdDigits||_t(_e.nationalId);return it===B||B.length>=8&&it.includes(B)});ae?(Qn(ae),d.className="alert-banner warning",d.textContent=`⚠️ พบข้อมูลเดิมในระบบแล้ว: "${ae.fullName}" — โหลดข้อมูลเข้าสู่โหมดแก้ไขเรียบร้อย`,d.hidden=!1):(a=null,p.textContent="ไม่พบเลขบัตรนี้ในระบบ — พร้อมเพิ่มข้อมูลบุคคลใหม่",d.className="alert-banner success",d.textContent="✅ ไม่พบเลขบัตรประชาชนนี้ในระบบเดิม สามารถกรอกข้อมูลเพื่อเพิ่มรายชื่อใหม่ได้ทันที",d.hidden=!1,Ye(),D.focus())});const Ct=f("button",{type:"submit",class:"btn btn-navy btn-full"},"💾 บันทึกข้อมูล"),En=f("div",{class:"form-secondary-actions"});function Ye(){$e(En),En.appendChild(f("button",{type:"button",class:"btn btn-outline btn-sm",onClick:()=>r?.()},"🔄 ล้างฟอร์ม (เพิ่มรายใหม่)")),a&&En.appendChild(f("button",{type:"button",class:"btn btn-danger-outline btn-sm",onClick:()=>s?.(a)},"🗑️ ลบข้อมูลผู้ป่วยรายนี้"))}const he=f("form",{class:"form-sheet-body",method:"post","aria-labelledby":"patient-form-heading"},d,f("div",{class:"field"},f("label",{for:"pf-national-id"},"เลขบัตรประจำตัวประชาชน",f("span",{class:"req-star","aria-hidden":"true"},"*")),f("div",{class:"input-with-action"},A,C),f("div",{id:"pf-national-id-error",class:"error-msg"},f("span",{role:"img","aria-label":"ข้อผิดพลาด"},"⚠")," กรุณากรอกเลขบัตรประจำตัวประชาชน 13 หลักให้ครบถ้วน")),f("div",{class:"form-grid-2"},f("div",{class:"field"},f("label",{for:"pf-fullname"},"ชื่อ - นามสกุล ผู้ป่วย",f("span",{class:"req-star","aria-hidden":"true"},"*")),D,f("div",{id:"pf-fullname-error",class:"error-msg"},f("span",{role:"img","aria-label":"ข้อผิดพลาด"},"⚠")," กรุณากรอกชื่อ - นามสกุล ผู้ป่วย")),f("div",{class:"field"},f("label",{for:"pf-nickname"},"ชื่อเล่น"),M)),f("div",{class:"form-grid-2"},f("div",{class:"field"},f("label",{for:"pf-age"},"อายุ (ปี)"),x),f("div",{class:"field"},f("label",{for:"pf-start-year"},"ปี พ.ศ. ที่เริ่มเป็น"),q)),f("div",{class:"field"},f("label",{for:"pf-color"},"กลุ่มสี"),W),f("div",{class:"form-grid-2"},f("div",{class:"field"},f("label",{for:"pf-address-no"},"ที่อยู่ (บ้านเลขที่)"),z),f("div",{class:"field"},f("label",{for:"pf-moo"},"หมู่"),Y)),f("div",{class:"form-grid-3"},f("div",{class:"field"},f("label",{for:"pf-subdistrict"},"ตำบล"),_,w),f("div",{class:"field"},f("label",{for:"pf-district"},"อำเภอ"),y),f("div",{class:"field"},f("label",{for:"pf-province"},"จังหวัด"),v)),f("div",{class:"field"},f("label",{for:"pf-note"},"หมายเหตุ"),I),f("div",{class:"field"},f("label",{for:"pf-photos"},"ภาพถ่าย (เลือกได้หลายภาพ)"),ee,f("div",{class:"file-picker-box"},b),E),f("div",{class:"field gps-section"},f("label",{},"พิกัดสถานที่"),Ve,Ge),Ct,En);return he.addEventListener("submit",async B=>{B.preventDefault();const ae=_t(A.value);if(ae.length>0&&ae.length!==13?A.setCustomValidity("กรุณากรอกเลขบัตรประจำตัวประชาชนให้ครบ 13 หลัก"):A.setCustomValidity(""),!he.reportValidity()){he.querySelector(":invalid")?.focus();return}if(!a&&ae.length===13){const _e=n.find(it=>(it.nationalIdDigits||_t(it.nationalId))===ae);if(_e){d.className="alert-banner error",d.textContent=`พบเลขบัตรประชาชนนี้ซ้ำกับ "${_e.fullName}" ในระบบแล้ว กรุณากดปุ่ม "🔍 ค้นหา" เพื่อโหลดข้อมูลเดิมมาแก้ไข`,d.hidden=!1,A.focus();return}}Ct.disabled=!0,Ct.textContent="⏳ กำลังบันทึกข้อมูล...";try{const _e=await Fe.savePatient({nationalId:A.value,fullName:D.value,nickname:M.value,age:x.value,startYearBE:q.value,colorGroup:W.value,addressNo:z.value,moo:Y.value,subdistrict:_.value,district:y.value,province:v.value,note:I.value,photos:l,gps:u},a);Ie(_e.mode==="update"?`อัปเดตข้อมูล "${_e.patient.fullName}" เรียบร้อยแล้ว`:`เพิ่มข้อมูล "${_e.patient.fullName}" เข้าสู่ระบบเรียบร้อยแล้ว`,"success"),i?.(_e)}catch(_e){d.className="alert-banner error",d.textContent=_e?.message||"เกิดข้อผิดพลาดในการบันทึกข้อมูล",d.hidden=!1,Ct.disabled=!1,Ct.textContent="💾 บันทึกข้อมูล"}}),Ae(),nt(),Ye(),f("div",{class:"form-sheet-wrap"},f("section",{class:"form-sheet"},f("header",{class:"form-sheet-header"},f("h1",{id:"patient-form-heading"},"ระบบจัดการข้อมูลบุคคลวิกลจริต"),p),he))}const Zv={CREATE:"เพิ่มข้อมูล",UPDATE:"แก้ไขข้อมูล",DELETE:"ลบข้อมูล",SEED_IMPORT:"นำเข้าตั้งต้น",OFFICER_UPDATE:"จัดการตำรวจ"};function eI({logs:n,officers:e,patients:t}){let i="logs",s="ALL",r="",a="";const l=f("div",{}),u=f("div",{});function d(){return f("div",{class:"admin-subtabs"},f("button",{type:"button",class:`btn ${i==="logs"?"btn-maroon":"btn-outline"}`,onClick:()=>{i="logs",A()}},`📋 ประวัติการลงข้อมูลตำรวจ (${n.length})`),f("button",{type:"button",class:`btn ${i==="officers"?"btn-maroon":"btn-outline"}`,onClick:()=>{i="officers",A()}},`👮 รายชื่อตำรวจที่มีสิทธิ์เข้าใช้ (${e.length} นาย)`),f("button",{type:"button",class:`btn ${i==="byOfficer"?"btn-maroon":"btn-outline"}`,onClick:()=>{i="byOfficer",A()}},"📊 สรุปผู้ลงข้อมูลแต่ละรายชื่อ"))}function p(){const C=f("input",{type:"search",placeholder:"ค้นหาชื่อตำรวจ, นามเรียกขาน, เบอร์โทร, หรือชื่อผู้ป่วย...",value:r}),k=f("select",{"aria-label":"กรองตามประเภทการกระทำ"},f("option",{value:"ALL"},"ทุกการกระทำ"),f("option",{value:"CREATE"},"เพิ่มข้อมูล"),f("option",{value:"UPDATE"},"แก้ไขข้อมูล"),f("option",{value:"DELETE"},"ลบข้อมูล"),f("option",{value:"OFFICER_UPDATE"},"จัดการรายชื่อตำรวจ"));k.value=s;const D=f("tbody",{});function M(){$e(D);const q=r.trim().toLowerCase(),W=n.filter(z=>s!=="ALL"&&z.action!==s?!1:q?[z.actor?.fullName,z.actor?.callsign,z.actor?.username,z.targetName,z.targetNationalId,z.summary].filter(Boolean).join(" ").toLowerCase().includes(q):!0);if(!W.length){D.appendChild(f("tr",{},f("td",{colspan:"5",style:"text-align:center;padding:2rem;color:#64748b;"},"ยังไม่มีประวัติการเพิ่ม/แก้ไข/ลบข้อมูลในระบบ")));return}for(const z of W){const Y=z.actor||{};D.appendChild(f("tr",{},f("td",{"data-label":"วัน-เวลา"},bi(z.timestamp)),f("th",{scope:"row"},Y.fullName||"-",f("span",{class:"muted-sub"},`${Y.callsign||"-"} | บัญชี: ${Y.username||"-"}`)),f("td",{"data-label":"การดำเนินการ"},f("span",{class:`action-badge ${z.action}`},Zv[z.action]||z.action)),f("td",{"data-label":"บุคคลที่ถูกจัดการ"},f("strong",{},z.targetName||"-"),f("span",{class:"muted-sub"},`เลขบัตร/อ้างอิง: ${z.targetNationalId||"-"}`)),f("td",{"data-label":"รายละเอียด"},z.summary||"-")))}}C.addEventListener("input",()=>{r=C.value,M()}),k.addEventListener("change",()=>{s=k.value,M()}),M();const x=Fe.getMode()==="firebase"?f("button",{type:"button",class:"btn btn-outline btn-sm",onClick:async q=>{const W=q.currentTarget;W.disabled=!0,W.textContent="⏳ กำลังซิงค์ข้อมูลตั้งต้น...";try{const z=await Fe.ensureFirebaseSeededIfEmpty(!0);Ie(`ซิงค์ข้อมูลตั้งต้นสำเร็จ (ตำรวจ ${z.officersSeeded} นาย, รายชื่อ ${z.patientsSeeded} รายการ)`,"success")}catch(z){Ie(z?.message||"ซิงค์ข้อมูลไม่สำเร็จ","error")}finally{W.disabled=!1,W.textContent="☁️ ซิงค์ข้อมูลตั้งต้นขึ้น Firebase"}}},"☁️ ซิงค์ข้อมูลตั้งต้นขึ้น Firebase"):null;return f("div",{},f("div",{class:"search-panel"},f("div",{style:"display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.75rem;"},f("h2",{style:"margin:0;"},"🛡️ ตรวจสอบประวัติการลงข้อมูลของเจ้าหน้าที่ตำรวจ"),x),f("div",{class:"search-row"},C,k)),f("section",{class:"table-card"},f("div",{class:"table-toolbar"},f("h2",{id:"audit-table-caption"},"บันทึกกิจกรรมล่าสุด (Audit Log)")),f("div",{class:"table-wrapper",tabindex:"0",role:"region","aria-labelledby":"audit-table-caption"},f("table",{class:"data-table"},f("caption",{},"ประวัติการบันทึก แก้ไข และลบข้อมูลบุคคลวิกลจริต"),f("thead",{},f("tr",{},f("th",{scope:"col"},"วัน-เวลา"),f("th",{scope:"col"},"เจ้าหน้าที่ตำรวจผู้ดำเนินการ"),f("th",{scope:"col"},"การกระทำ"),f("th",{scope:"col"},"ข้อมูลบุคคล"),f("th",{scope:"col"},"รายละเอียดการเปลี่ยนแปลง"))),D))))}function m(){const C=t.filter(M=>M.updatedBy?.role&&M.updatedBy.role!=="system"),k=f("tbody",{}),D=C.length?C:t.slice(0,30);for(const M of D){const x=M.createdBy||{},q=M.updatedBy||{};k.appendChild(f("tr",{},f("th",{scope:"row"},M.fullName||"-",f("span",{class:"muted-sub"},M.nationalId||"-")),f("td",{"data-label":"ผู้สร้างรายการ"},x.fullName||"-",f("span",{class:"muted-sub"},`${x.callsign||"-"} (${x.username||"-"})`)),f("td",{"data-label":"ผู้แก้ไขล่าสุด"},q.fullName||"-",f("span",{class:"muted-sub"},`${q.callsign||"-"} (${q.username||"-"})`)),f("td",{"data-label":"อัปเดตล่าสุดเมื่อ"},bi(M.updatedAt))))}return f("section",{class:"table-card"},f("div",{class:"table-toolbar"},f("h2",{id:"by-officer-caption"},C.length?`รายการที่เจ้าหน้าที่ตำรวจเพิ่ม/ปรับปรุงข้อมูล (${C.length} รายการ)`:"ยังไม่มีรายการที่แก้ไขเพิ่มเติมจากไฟล์ตั้งต้น (แสดงตัวอย่าง 30 รายการแรก)")),f("div",{class:"table-wrapper",tabindex:"0",role:"region","aria-labelledby":"by-officer-caption"},f("table",{class:"data-table"},f("caption",{},"สรุปผู้ลงข้อมูลและผู้แก้ไขล่าสุดของบุคคลวิกลจริต"),f("thead",{},f("tr",{},f("th",{scope:"col"},"ผู้ป่วย"),f("th",{scope:"col"},"ผู้บันทึกตั้งต้น"),f("th",{scope:"col"},"ผู้แก้ไขล่าสุด"),f("th",{scope:"col"},"เวลาล่าสุด"))),k)))}function T(){const C=f("input",{type:"text",required:!0,placeholder:"เช่น ส.ต.ท.สมชาย ใจดี"}),k=f("input",{type:"text",required:!0,inputmode:"numeric",placeholder:"0812345678"}),D=f("input",{type:"text",placeholder:"เช่น ผบ.หมู่(ป.)ฯ"}),M=f("input",{type:"text",placeholder:"เช่น ปลาม้า 2135"}),x=f("select",{},f("option",{value:"ชั้นสัญญาบัตร"},"ชั้นสัญญาบัตร"),f("option",{value:"ชั้นประทวน"},"ชั้นประทวน"),f("option",{value:"ช่วยราชการ คฝ."},"ช่วยราชการ คฝ."));x.value="ชั้นประทวน";const q=f("form",{class:"officer-form-card",onSubmit:async w=>{w.preventDefault();try{await Fe.saveOfficer({fullName:C.value,phone:k.value,position:D.value,callsign:M.value,category:x.value,active:!0}),Ie(`บันทึกบัญชีตำรวจ "${C.value}" เรียบร้อยแล้ว`,"success"),C.value="",k.value="",D.value="",M.value=""}catch(_){Ie(_?.message||"บันทึกไม่สำเร็จ","error")}}},f("h2",{style:"margin:0 0 0.75rem;font-size:1rem;"},"➕ เพิ่ม / อัปเดตข้าราชการตำรวจที่มีสิทธิ์เข้าสู่ระบบ"),f("div",{class:"form-grid-3",style:"margin-bottom:0.75rem;"},f("div",{class:"field"},f("label",{},"ยศ ชื่อ-สกุล *"),C),f("div",{class:"field"},f("label",{},"เบอร์โทรศัพท์ (Username) *"),k),f("div",{class:"field"},f("label",{},"นามเรียกขาน"),M)),f("div",{class:"form-grid-3",style:"align-items:end;"},f("div",{class:"field"},f("label",{},"ตำแหน่ง"),D),f("div",{class:"field"},f("label",{},"สังกัด/ระดับ"),x),f("button",{type:"submit",class:"btn btn-navy"},"💾 บันทึกรายชื่อตำรวจ"))),W=f("input",{type:"search",placeholder:"ค้นหาชื่อตำรวจ นามเรียกขาน หรือเบอร์โทรศัพท์...",value:a,style:"max-width:360px;"}),z=f("tbody",{});function Y(){$e(z);const w=a.trim().toLowerCase(),_=xt(a),y=e.filter(v=>w?(v.fullName||"").toLowerCase().includes(w)||(v.callsign||"").toLowerCase().includes(w)||(v.position||"").toLowerCase().includes(w)||_&&xt(v.phone).includes(_):!0);for(const v of y){const I=v.active!==!1;z.appendChild(f("tr",{},f("th",{scope:"row"},v.fullName,f("span",{class:"muted-sub"},`${v.position||"-"} (${v.category||"-"})`)),f("td",{"data-label":"เบอร์โทร (Username)"},v.phoneDisplay||ui(v.phone)),f("td",{"data-label":"นามเรียกขาน"},v.callsign||"-"),f("td",{"data-label":"หมายเหตุ"},v.note||"-"),f("td",{"data-label":"สถานะ"},f("span",{class:`color-badge ${I?"green":"red"}`},I?"ใช้งานได้":"ระงับสิทธิ์")),f("td",{"data-label":"จัดการ"},f("button",{type:"button",class:`btn btn-sm ${I?"btn-danger-outline":"btn-outline"}`,onClick:async()=>{try{await Fe.saveOfficer({...v,active:!I}),Ie(`${I?"ระงับสิทธิ์":"เปิดสิทธิ์"} ${v.fullName} แล้ว`,"success")}catch(b){Ie(b?.message||"ดำเนินการไม่สำเร็จ","error")}}},I?"ระงับสิทธิ์":"เปิดสิทธิ์"))))}}return W.addEventListener("input",()=>{a=W.value,Y()}),Y(),f("div",{},q,f("section",{class:"table-card"},f("div",{class:"table-toolbar"},f("h2",{id:"officers-table-caption"},`บัญชีรายชื่อตำรวจ สภ.บางปลาม้า (${e.length} นาย)`),W),f("div",{class:"table-wrapper",tabindex:"0",role:"region","aria-labelledby":"officers-table-caption"},f("table",{class:"data-table"},f("caption",{},"รายชื่อข้าราชการตำรวจ สภ.บางปลาม้า"),f("thead",{},f("tr",{},f("th",{scope:"col"},"ยศ ชื่อ-สกุล"),f("th",{scope:"col"},"เบอร์โทรศัพท์"),f("th",{scope:"col"},"นามเรียกขาน"),f("th",{scope:"col"},"หมายเหตุ"),f("th",{scope:"col"},"สถานะ"),f("th",{scope:"col"},"จัดการ"))),z))))}function A(){$e(l),l.appendChild(d()),$e(u),i==="logs"?u.appendChild(p()):i==="officers"?u.appendChild(T()):u.appendChild(m()),l.appendChild(u)}return A(),l}function tI(){const n=CSS.supports("selector(:user-invalid)"),e=new WeakMap,t=(r,a)=>{const l=r.dataset?.error;if(!l)return;const u=(r.getAttribute("aria-describedby")||"").split(/\s+/).filter(d=>d&&d!==l);a&&u.push(l),u.length?r.setAttribute("aria-describedby",u.join(" ")):r.removeAttribute("aria-describedby")},i=r=>{if(!r?.matches?.("input, select, textarea"))return;const a=n?r.matches(":user-invalid"):r.classList.contains("user-invalid-fallback");r.setAttribute("aria-invalid",a?"true":"false"),t(r,a)},s=r=>{if(n||!r?.validity)return;const a=r.validity.valid;r.classList.toggle("user-invalid-fallback",!a),r.classList.toggle("user-valid-fallback",a),i(r)};document.addEventListener("blur",r=>{const a=r.target;if(a?.matches?.("input, select, textarea"))if(n)i(a);else{const l=e.get(a)||{interacted:!1,blurred:!1};l.blurred=!0,e.set(a,l),l.interacted&&s(a)}},!0),document.addEventListener("input",r=>{const a=r.target;if(a?.matches?.("input, select, textarea"))if(n)a.hasAttribute("aria-invalid")&&i(a);else{const l=e.get(a)||{interacted:!1,blurred:!1};l.interacted=!0,e.set(a,l),l.blurred&&s(a)}}),document.addEventListener("invalid",r=>{const a=r.target;n?i(a):(e.set(a,{interacted:!0,blurred:!0}),s(a))},!0)}const an=document.getElementById("app"),F={user:null,authReady:!1,activeTab:"search",patients:[],officers:[],logs:[],editingPatient:null,prefillQuery:"",unsubscribers:[]};function Ba(){for(const n of F.unsubscribers)try{n?.()}catch{}F.unsubscribers=[]}function Xd(){if(Ba(),!F.user)return;const n=Fe.subscribePatients(e=>{F.patients=e,F.activeTab!=="form"&&qe()},()=>{Ie("ไม่สามารถโหลดข้อมูลจาก Firestore ได้ กรุณาตรวจสอบสิทธิ์การเชื่อมต่อ","error")});if(F.unsubscribers.push(n),F.user.role==="admin"){Fe.ensureFirebaseSeededIfEmpty().catch(i=>{Ie(`นำเข้าข้อมูลตั้งต้นไม่สำเร็จ: ${i?.message||i}`,"error")});const e=Fe.subscribeAuditLogs(i=>{F.logs=i,F.activeTab==="admin"&&qe()}),t=Fe.subscribeOfficers(i=>{F.officers=i,F.activeTab==="admin"&&qe()});F.unsubscribers.push(e,t)}}async function uo(n){if(await Xv({title:"ยืนยันการลบข้อมูลบุคคลวิกลจริต",message:`ต้องการลบข้อมูลของ "${n.fullName||"ไม่ระบุชื่อ"}" (เลขบัตร: ${n.nationalId||"-"}) ออกจากระบบใช่หรือไม่? การลบจะถูกบันทึกไว้ในประวัติผู้ดูแลระบบ`,confirmLabel:"ยืนยันลบข้อมูล",danger:!0}))try{await Fe.deletePatient(n),F.editingPatient?.id===n.id&&(F.editingPatient=null,F.activeTab="search"),Ie(`ลบข้อมูล "${n.fullName}" เรียบร้อยแล้ว`,"success"),qe()}catch(t){Ie(t?.message||"ลบข้อมูลไม่สำเร็จ","error")}}function qe(){if($e(an),!F.authReady){an.appendChild(f("main",{class:"login-page"},f("div",{style:"text-align:center;color:#475569;font-weight:600;"},"⏳ กำลังโหลดระบบ สภ.บางปลาม้า...")));return}if(!F.user){an.appendChild(zv({onLoginSuccess:l=>{F.user=l,F.activeTab="search",Xd(),qe(),Ie(`ยินดีต้อนรับ ${l.fullName}`,"success")}}));return}const n=F.user.role==="admin",e=Fe.getMode(),t=f("header",{class:"app-header"},f("div",{class:"app-header-inner"},f("div",{class:"brand-block"},f("div",{class:"brand-icon","aria-hidden":"true"},"🛡️"),f("div",{},f("h1",{class:"brand-title"},"ระบบข้อมูลบุคคลวิกลจริต สภ.บางปลาม้า"),f("p",{class:"brand-subtitle"},"สถานีตำรวจภูธรบางปลาม้า จังหวัดสุพรรณบุรี"))),f("div",{class:"user-panel"},f("span",{class:`mode-pill ${e}`},e==="firebase"?"🔥 Firebase Cloud":"🧪 โหมดทดสอบในเครื่อง"),f("div",{class:"user-chip"},n?f("span",{class:"role-tag"},"ADMIN"):null,f("span",{},n?`${F.user.fullName} (${F.user.username})`:`${F.user.fullName} (${F.user.callsign})`)),f("button",{type:"button",class:"btn btn-logout",onClick:async()=>{Ba(),await Fe.logout(),F.user=null,F.patients=[],F.logs=[],F.officers=[],F.editingPatient=null,qe(),Ie("ออกจากระบบเรียบร้อยแล้ว","info")}},"ออกจากระบบ")))),i=[{id:"search",label:`🔍 ตรวจสอบรายชื่อ (${F.patients.length})`},{id:"form",label:F.editingPatient?"✏️ แก้ไขข้อมูลบุคคล":"➕ เพิ่ม / แก้ไขข้อมูล"}];n&&i.push({id:"admin",label:"🛡️ แผงควบคุมแอดมิน & ประวัติการลงข้อมูล"});const s=f("nav",{class:"app-nav","aria-label":"เมนูหลัก"},f("div",{class:"app-nav-inner"},i.map(l=>f("button",{type:"button",class:"nav-tab","aria-current":F.activeTab===l.id?"page":null,onClick:()=>{l.id==="form"&&F.activeTab!=="form"||l.id!=="form"&&(F.editingPatient=null,F.prefillQuery=""),F.activeTab=l.id,qe()}},l.label)))),r=e==="demo"?f("div",{class:"demo-strip"},f("div",{class:"alert-banner warning"},"⚠️ ขณะนี้ระบบทำงานในโหมดทดสอบในเครื่อง (Local Storage) — เมื่อเชื่อมต่อ Firebase Project ในไฟล์ .env และ Deploy แล้ว ข้อมูลทั้งหมดจะซิงค์ออนไลน์ผ่าน Cloud Firestore อัตโนมัติ")):null;let a;F.activeTab==="search"?a=Hv({patients:F.patients,isAdmin:n,onSelectDetail:l=>{Qv(l,{isAdmin:n,onEdit:u=>{F.editingPatient=u,F.prefillQuery="",F.activeTab="form",qe()},onDelete:uo})},onEditPatient:l=>{F.editingPatient=l,F.prefillQuery="",F.activeTab="form",qe()},onDeletePatient:uo,onQuickAdd:l=>{F.editingPatient=null,F.prefillQuery=l||"",F.activeTab="form",qe()}}):F.activeTab==="form"?a=Jv({patients:F.patients,initialPatient:F.editingPatient,prefillQuery:F.prefillQuery,onSaved:()=>{F.editingPatient=null,F.prefillQuery="",F.activeTab="search",qe()},onDeletePatient:uo,onResetToNew:()=>{F.editingPatient=null,F.prefillQuery="",qe()}}):F.activeTab==="admin"&&n&&(a=eI({logs:F.logs,officers:F.officers,patients:F.patients})),an.appendChild(t),an.appendChild(s),r&&an.appendChild(r),an.appendChild(f("main",{class:"app-main"},a))}tI();qe();Fe.initAuthListener(n=>{F.user=n,F.authReady=!0,n?Xd():Ba(),qe()});
