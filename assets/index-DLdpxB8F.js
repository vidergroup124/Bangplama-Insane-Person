(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const jo=""+new URL("logo-bangplama-DRAUGwP9.jpg",import.meta.url).href;function f(n,e={},...t){const i=document.createElement(n);for(const[s,r]of Object.entries(e||{}))if(!(r==null||r===!1))if(s==="class"||s==="className")i.className=r;else if(s==="dataset"&&typeof r=="object")for(const[a,l]of Object.entries(r))l!=null&&(i.dataset[a]=String(l));else s.startsWith("on")&&typeof r=="function"?i.addEventListener(s.slice(2).toLowerCase(),r):r===!0?i.setAttribute(s,""):i.setAttribute(s,String(r));for(const s of t.flat())s==null||s===!1||(typeof s=="string"||typeof s=="number"?i.appendChild(document.createTextNode(String(s))):s instanceof Node&&i.appendChild(s));return i}function De(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function ut(n){return String(n||"").replace(/\D/g,"")}function mo(n){const e=ut(n).slice(0,13),t=[];return e.length>0&&t.push(e.slice(0,1)),e.length>1&&t.push(e.slice(1,5)),e.length>5&&t.push(e.slice(5,10)),e.length>10&&t.push(e.slice(10,12)),e.length>12&&t.push(e.slice(12,13)),t.join("-")}function Ht(n){return String(n||"").replace(/\D/g,"")}function _i(n){const e=Ht(n).slice(0,10);return e.length===10?`${e.slice(0,2)} ${e.slice(2,6)} ${e.slice(6)}`:n||""}function Yt(n){if(!n)return"-";let e;return typeof n?.toDate=="function"?e=n.toDate():e=new Date(n),Number.isNaN(e.getTime())?String(n):new Intl.DateTimeFormat("th-TH",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(e)}async function Is(n){const e=new TextEncoder().encode(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}async function Vf(n,e=900,t=.72){return new Promise((i,s)=>{const r=new FileReader;r.onerror=()=>s(new Error(`ไม่สามารถอ่านไฟล์ ${n.name} ได้`)),r.onload=()=>{const a=new Image;a.onerror=()=>s(new Error(`ไฟล์ ${n.name} ไม่ใช่รูปภาพที่รองรับ`)),a.onload=()=>{let{width:l,height:u}=a;(l>e||u>e)&&(l>=u?(u=Math.round(u*e/l),l=e):(l=Math.round(l*e/u),u=e));const h=document.createElement("canvas");h.width=l,h.height=u;const p=h.getContext("2d");p.fillStyle="#ffffff",p.fillRect(0,0,l,u),p.drawImage(a,0,0,l,u);const m=h.toDataURL("image/jpeg",t);i({name:n.name,dataUrl:m,sizeBytes:Math.round(m.length*3/4),uploadedAt:new Date().toISOString()})},a.src=r.result},r.readAsDataURL(n)})}const Of={nationalId:"เลขบัตรประชาชน",fullName:"ชื่อ-นามสกุล",nickname:"ชื่อเล่น",age:"อายุ",startYearBE:"ปี พ.ศ. ที่เริ่มเป็น",colorGroup:"กลุ่มสี",addressNo:"บ้านเลขที่",moo:"หมู่",subdistrict:"ตำบล",district:"อำเภอ",province:"จังหวัด",note:"หมายเหตุ",diagnosis:"วินิจฉัยโรค",diagnosisCode:"รหัสโรค"};function Lf(n,e){const t={},i=[];for(const[u,h]of Object.entries(Of)){const p=String(n?.[u]??"").trim(),m=String(e?.[u]??"").trim();p!==m&&(t[u]={from:p,to:m},i.push(`${h}: "${p||"-"}" → "${m||"-"}"`))}const s=Array.isArray(n?.photos)?n.photos.length:0,r=Array.isArray(e?.photos)?e.photos.length:0;s!==r&&(t.photosCount={from:s,to:r},i.push(`ภาพถ่าย: ${s} → ${r} ภาพ`));const a=n?.gps?`${n.gps.lat.toFixed(5)},${n.gps.lng.toFixed(5)}`:"",l=e?.gps?`${e.gps.lat.toFixed(5)},${e.gps.lng.toFixed(5)}`:"";return a!==l&&(t.gps={from:a,to:l},i.push(l?`อัปเดตพิกัด GPS (${l})`:"ลบพิกัด GPS")),{changes:t,summary:i.length?i.join(", "):"บันทึกข้อมูลซ้ำโดยไม่มีฟิลด์เปลี่ยนแปลง"}}function Ps(n){switch(String(n||"").trim()){case"แดง":return{key:"red",label:"แดง (อันตรายสูง)",short:"แดง"};case"ส้ม":return{key:"orange",label:"ส้ม (เฝ้าระวัง)",short:"ส้ม"};case"เหลือง":return{key:"yellow",label:"เหลือง (ติดตาม)",short:"เหลือง"};case"เขียว":return{key:"green",label:"เขียว (ทั่วไป)",short:"เขียว"};case"ทดสอบ":return{key:"test",label:"ทดสอบ",short:"ทดสอบ"};default:return{key:"none",label:"ยังไม่ระบุสี",short:"ไม่ระบุ"}}}const Cu=["ต.โคกคราม","ต.บางปลาม้า","ต.ตะค่า","ต.บางใหญ่","ต.สาลี","ต.ไผ่กองดิน","ต.องครักษ์","ต.จรเข้ใหญ่","ต.บ้านแหลม","ต.มะขามล้ม","ต.วังน้ำเย็น","ต.วัดโบสถ์","ต.วัดดาว","ต.กฤษณา"],Ff=()=>{};var zl={};/**
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
 */const Pu=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},xf=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},Su={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,p=r>>2,m=(r&3)<<4|l>>4;let _=(l&15)<<2|h>>6,b=h&63;u||(b=64,a||(_=64)),i.push(t[p],t[m],t[_],t[b])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||h==null||m==null)throw new Mf;const _=r<<2|l>>4;if(i.push(_),h!==64){const b=l<<4&240|h>>2;if(i.push(b),m!==64){const C=h<<6&192|m;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Mf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uf=function(n){const e=Pu(n);return Su.encodeByteArray(e,!0)},qs=function(n){return Uf(n).replace(/\./g,"")},ku=function(n){try{return Su.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qf=()=>Bf().__FIREBASE_DEFAULTS__,$f=()=>{if(typeof process>"u"||typeof zl>"u")return;const n=zl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ku(n[1]);return e&&JSON.parse(e)},lr=()=>{try{return Ff()||qf()||$f()||Gf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Du=n=>{var e,t;return(t=(e=lr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},jf=n=>{const e=Du(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Vu=()=>{var n;return(n=lr())===null||n===void 0?void 0:n.config},Ou=n=>{var e;return(e=lr())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class zf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Xn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Hf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[qs(JSON.stringify(t)),qs(JSON.stringify(a)),""].join(".")}const Ni={};function Wf(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ni))Ni[e]?n.emulator.push(e):n.prod.push(e);return n}function Yf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Hl=!1;function Fu(n,e){if(typeof window>"u"||typeof document>"u"||!Xn(window.location.host)||Ni[n]===e||Ni[n]||Hl)return;Ni[n]=e;function t(_){return`__firebase__banner__${_}`}const i="__firebase__banner",r=Wf().prod.length>0;function a(){const _=document.getElementById(i);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Hl=!0,a()},_}function p(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){const _=Yf(i),b=t("text"),C=document.getElementById(b)||document.createElement("span"),D=t("learnmore"),S=document.getElementById(D)||document.createElement("a"),B=t("preprendIcon"),q=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const $=_.element;l($),p(S,D);const Q=h();u(q,B),$.append(q,C,S,Q),document.body.appendChild($)}r?(C.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Qf(){var n;const e=(n=lr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ep(){const n=$e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function tp(){return!Qf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function np(){try{return typeof indexedDB=="object"}catch{return!1}}function ip(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const sp="FirebaseError";class Lt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=sp,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?rp(r,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Lt(s,l,i)}}function rp(n,e){return n.replace(op,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const op=/\{\$([^}]+)}/g;function ap(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],a=e[s];if(Wl(r)&&Wl(a)){if(!wn(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Wl(n){return n!==null&&typeof n=="object"}/**
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
 */function Gi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function vi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Ii(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function lp(n,e){const t=new cp(n,e);return t.subscribe.bind(t)}class cp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");up(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Yr),s.error===void 0&&(s.error=Yr),s.complete===void 0&&(s.complete=Yr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function up(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yr(){}/**
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
 */function Ee(n){return n&&n._delegate?n._delegate:n}class Tn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _n="[DEFAULT]";/**
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
 */class hp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new zf;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fp(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&a.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:dp(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dp(n){return n===_n?void 0:n}function fp(n){return n.instantiationMode==="EAGER"}/**
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
 */class pp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const gp={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},mp=te.INFO,yp={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},_p=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=yp[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zo{constructor(e){this.name=e,this._logLevel=mp,this._logHandler=_p,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const vp=(n,e)=>e.some(t=>n instanceof t);let Yl,Kl;function Ip(){return Yl||(Yl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ep(){return Kl||(Kl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xu=new WeakMap,yo=new WeakMap,Mu=new WeakMap,Kr=new WeakMap,Ho=new WeakMap;function wp(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",a)},r=()=>{t(Kt(n.result)),s()},a=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&xu.set(t,n)}).catch(()=>{}),Ho.set(e,n),e}function Tp(n){if(yo.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",a),n.removeEventListener("abort",a)},r=()=>{t(),s()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",a),n.addEventListener("abort",a)});yo.set(n,e)}let _o={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return yo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Mu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bp(n){_o=n(_o)}function Ap(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Qr(this),e,...t);return Mu.set(i,e.sort?e.sort():[e]),Kt(i)}:Ep().includes(n)?function(...e){return n.apply(Qr(this),e),Kt(xu.get(this))}:function(...e){return Kt(n.apply(Qr(this),e))}}function Np(n){return typeof n=="function"?Ap(n):(n instanceof IDBTransaction&&Tp(n),vp(n,Ip())?new Proxy(n,_o):n)}function Kt(n){if(n instanceof IDBRequest)return wp(n);if(Kr.has(n))return Kr.get(n);const e=Np(n);return e!==n&&(Kr.set(n,e),Ho.set(e,n)),e}const Qr=n=>Ho.get(n);function Rp(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const a=indexedDB.open(n,e),l=Kt(a);return i&&a.addEventListener("upgradeneeded",u=>{i(Kt(a.result),u.oldVersion,u.newVersion,Kt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{r&&u.addEventListener("close",()=>r()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Cp=["get","getKey","getAll","getAllKeys","count"],Pp=["put","add","delete","clear"],Xr=new Map;function Ql(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xr.get(e))return Xr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Pp.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Cp.includes(t)))return;const r=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&u.done]))[0]};return Xr.set(e,r),r}bp(n=>({...n,get:(e,t,i)=>Ql(e,t)||n.get(e,t,i),has:(e,t)=>!!Ql(e,t)||n.has(e,t)}));/**
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
 */class Sp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(kp(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function kp(n){const e=n.getComponent();return e?.type==="VERSION"}const vo="@firebase/app",Xl="0.13.2";/**
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
 */const kt=new zo("@firebase/app"),Dp="@firebase/app-compat",Vp="@firebase/analytics-compat",Op="@firebase/analytics",Lp="@firebase/app-check-compat",Fp="@firebase/app-check",xp="@firebase/auth",Mp="@firebase/auth-compat",Up="@firebase/database",Bp="@firebase/data-connect",qp="@firebase/database-compat",$p="@firebase/functions",Gp="@firebase/functions-compat",jp="@firebase/installations",zp="@firebase/installations-compat",Hp="@firebase/messaging",Wp="@firebase/messaging-compat",Yp="@firebase/performance",Kp="@firebase/performance-compat",Qp="@firebase/remote-config",Xp="@firebase/remote-config-compat",Jp="@firebase/storage",Zp="@firebase/storage-compat",eg="@firebase/firestore",tg="@firebase/ai",ng="@firebase/firestore-compat",ig="firebase",sg="11.10.0";/**
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
 */const Io="[DEFAULT]",rg={[vo]:"fire-core",[Dp]:"fire-core-compat",[Op]:"fire-analytics",[Vp]:"fire-analytics-compat",[Fp]:"fire-app-check",[Lp]:"fire-app-check-compat",[xp]:"fire-auth",[Mp]:"fire-auth-compat",[Up]:"fire-rtdb",[Bp]:"fire-data-connect",[qp]:"fire-rtdb-compat",[$p]:"fire-fn",[Gp]:"fire-fn-compat",[jp]:"fire-iid",[zp]:"fire-iid-compat",[Hp]:"fire-fcm",[Wp]:"fire-fcm-compat",[Yp]:"fire-perf",[Kp]:"fire-perf-compat",[Qp]:"fire-rc",[Xp]:"fire-rc-compat",[Jp]:"fire-gcs",[Zp]:"fire-gcs-compat",[eg]:"fire-fst",[ng]:"fire-fst-compat",[tg]:"fire-vertex","fire-js":"fire-js",[ig]:"fire-js-all"};/**
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
 */const $s=new Map,og=new Map,Eo=new Map;function Jl(n,e){try{n.container.addComponent(e)}catch(t){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zn(n){const e=n.name;if(Eo.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,n);for(const t of $s.values())Jl(t,n);for(const t of og.values())Jl(t,n);return!0}function Wo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function st(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ag={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qt=new $i("app","Firebase",ag);/**
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
 */class lg{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const Jn=sg;function Uu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Io,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw Qt.create("bad-app-name",{appName:String(s)});if(t||(t=Vu()),!t)throw Qt.create("no-options");const r=$s.get(s);if(r){if(wn(t,r.options)&&wn(i,r.config))return r;throw Qt.create("duplicate-app",{appName:s})}const a=new pp(s);for(const u of Eo.values())a.addComponent(u);const l=new lg(t,i,a);return $s.set(s,l),l}function Bu(n=Io){const e=$s.get(n);if(!e&&n===Io&&Vu())return Uu();if(!e)throw Qt.create("no-app",{appName:n});return e}function Xt(n,e,t){var i;let s=(i=rg[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(l.join(" "));return}zn(new Tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const cg="firebase-heartbeat-database",ug=1,Di="firebase-heartbeat-store";let Jr=null;function qu(){return Jr||(Jr=Rp(cg,ug,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Di)}catch(t){console.warn(t)}}}}).catch(n=>{throw Qt.create("idb-open",{originalErrorMessage:n.message})})),Jr}async function hg(n){try{const t=(await qu()).transaction(Di),i=await t.objectStore(Di).get($u(n));return await t.done,i}catch(e){if(e instanceof Lt)kt.warn(e.message);else{const t=Qt.create("idb-get",{originalErrorMessage:e?.message});kt.warn(t.message)}}}async function Zl(n,e){try{const i=(await qu()).transaction(Di,"readwrite");await i.objectStore(Di).put(e,$u(n)),await i.done}catch(t){if(t instanceof Lt)kt.warn(t.message);else{const i=Qt.create("idb-set",{originalErrorMessage:t?.message});kt.warn(i.message)}}}function $u(n){return`${n.name}!${n.options.appId}`}/**
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
 */const dg=1024,fg=30;class pg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mg(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ec();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>fg){const a=yg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){kt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ec(),{heartbeatsToSend:i,unsentEntries:s}=gg(this._heartbeatsCache.heartbeats),r=qs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return kt.warn(t),""}}}function ec(){return new Date().toISOString().substring(0,10)}function gg(n,e=dg){const t=[];let i=n.slice();for(const s of n){const r=t.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),tc(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),tc(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class mg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return np()?ip().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tc(n){return qs(JSON.stringify({version:2,heartbeats:n})).length}function yg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function _g(n){zn(new Tn("platform-logger",e=>new Sp(e),"PRIVATE")),zn(new Tn("heartbeat",e=>new pg(e),"PRIVATE")),Xt(vo,Xl,n),Xt(vo,Xl,"esm2017"),Xt("fire-js","")}_g("");var vg="firebase",Ig="11.10.0";/**
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
 */Xt(vg,Ig,"app");function Yo(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Gu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Eg=Gu,ju=new $i("auth","Firebase",Gu());/**
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
 */const Gs=new zo("@firebase/auth");function wg(n,...e){Gs.logLevel<=te.WARN&&Gs.warn(`Auth (${Jn}): ${n}`,...e)}function Ss(n,...e){Gs.logLevel<=te.ERROR&&Gs.error(`Auth (${Jn}): ${n}`,...e)}/**
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
 */function dt(n,...e){throw Ko(n,...e)}function mt(n,...e){return Ko(n,...e)}function zu(n,e,t){const i=Object.assign(Object.assign({},Eg()),{[e]:t});return new $i("auth","Firebase",i).create(e,{appName:n.name})}function Pt(n){return zu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ko(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ju.create(n,...e)}function H(n,e,...t){if(!n)throw Ko(e,...t)}function Rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ss(e),new Error(e)}function Dt(n,e){n||Rt(e)}/**
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
 */function wo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Tg(){return nc()==="http:"||nc()==="https:"}function nc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function bg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tg()||Jf()||"connection"in navigator)?navigator.onLine:!0}function Ag(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ji{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dt(t>e,"Short delay should be less than long delay!"),this.isMobile=Kf()||Zf()}get(){return bg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qo(n,e){Dt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Hu{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ng={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Rg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cg=new ji(3e4,6e4);function ln(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function cn(n,e,t,i,s={}){return Wu(n,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const l=Gi(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},r);return Xf()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Xn(n.emulatorConfig.host)&&(h.credentials="include"),Hu.fetch()(await Yu(n,n.config.apiHost,t,l),h)})}async function Wu(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ng),e);try{const s=new Sg(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Es(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const l=r.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Es(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Es(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Es(n,"user-disabled",a);const p=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zu(n,p,h);dt(n,p)}}catch(s){if(s instanceof Lt)throw s;dt(n,"network-request-failed",{message:String(s)})}}async function zi(n,e,t,i,s={}){const r=await cn(n,e,t,i,s);return"mfaPendingCredential"in r&&dt(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Yu(n,e,t,i){const s=`${e}${t}?${i}`,r=n,a=r.config.emulator?Qo(n.config,s):`${n.config.apiScheme}://${s}`;return Rg.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}function Pg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(mt(this.auth,"network-request-failed")),Cg.get())})}}function Es(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=mt(n,e,i);return s.customData._tokenResponse=t,s}function ic(n){return n!==void 0&&n.enterprise!==void 0}class kg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Pg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Dg(n,e){return cn(n,"GET","/v2/recaptchaConfig",ln(n,e))}/**
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
 */async function Vg(n,e){return cn(n,"POST","/v1/accounts:delete",e)}async function js(n,e){return cn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ri(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Og(n,e=!1){const t=Ee(n),i=await t.getIdToken(e),s=Xo(i);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r?.sign_in_provider;return{claims:s,token:i,authTime:Ri(Zr(s.auth_time)),issuedAtTime:Ri(Zr(s.iat)),expirationTime:Ri(Zr(s.exp)),signInProvider:a||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Zr(n){return Number(n)*1e3}function Xo(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ss("JWT malformed, contained fewer than 3 sections"),null;try{const s=ku(t);return s?JSON.parse(s):(Ss("Failed to decode base64 JWT payload"),null)}catch(s){return Ss("Caught error parsing JWT payload as JSON",s?.toString()),null}}function sc(n){const e=Xo(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Lt&&Lg(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Lg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Fg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class To{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zs(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Vi(n,js(t,{idToken:i}));H(s?.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ku(r.providerUserInfo):[],l=Mg(n.providerData,a),u=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!l?.length,p=u?h:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new To(r.createdAt,r.lastLoginAt),isAnonymous:p};Object.assign(n,m)}async function xg(n){const e=Ee(n);await zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mg(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ku(n){return n.map(e=>{var{providerId:t}=e,i=Yo(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Ug(n,e){const t=await Wu(n,{},async()=>{const i=Gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,a=await Yu(n,s,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:i};return n.emulatorConfig&&Xn(n.emulatorConfig.host)&&(u.credentials="include"),Hu.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Bg(n,e){return cn(n,"POST","/v2/accounts:revokeToken",ln(n,e))}/**
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
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=sc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Ug(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,a=new qn;return i&&(H(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(H(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(H(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Bt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ht{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Yo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new To(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Vi(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Og(this,e)}reload(){return xg(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await zs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(Pt(this.auth));const e=await this.getIdToken();return await Vi(this,Vg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,a,l,u,h,p;const m=(i=t.displayName)!==null&&i!==void 0?i:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,b=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,S=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,B=(h=t.createdAt)!==null&&h!==void 0?h:void 0,q=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:$,emailVerified:Q,isAnonymous:z,providerData:Z,stsTokenManager:T}=t;H($&&T,e,"internal-error");const y=qn.fromJSON(this.name,T);H(typeof $=="string",e,"internal-error"),Bt(m,e.name),Bt(_,e.name),H(typeof Q=="boolean",e,"internal-error"),H(typeof z=="boolean",e,"internal-error"),Bt(b,e.name),Bt(C,e.name),Bt(D,e.name),Bt(S,e.name),Bt(B,e.name),Bt(q,e.name);const v=new ht({uid:$,auth:e,email:_,emailVerified:Q,displayName:m,isAnonymous:z,photoURL:C,phoneNumber:b,tenantId:D,stsTokenManager:y,createdAt:B,lastLoginAt:q});return Z&&Array.isArray(Z)&&(v.providerData=Z.map(E=>Object.assign({},E))),S&&(v._redirectEventId=S),v}static async _fromIdTokenResponse(e,t,i=!1){const s=new qn;s.updateFromServerResponse(t);const r=new ht({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await zs(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];H(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Ku(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!r?.length,l=new qn;l.updateFromIdToken(i);const u=new ht({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new To(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!r?.length};return Object.assign(u,h),u}}/**
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
 */const rc=new Map;function Ct(n){Dt(n instanceof Function,"Expected a class definition");let e=rc.get(n);return e?(Dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,rc.set(n,e),e)}/**
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
 */class Qu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qu.type="NONE";const oc=Qu;/**
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
 */function ks(n,e,t){return`firebase:${n}:${e}:${t}`}class $n{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ks(this.userKey,s.apiKey,r),this.fullPersistenceKey=ks("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await js(this.auth,{idToken:e}).catch(()=>{});return t?ht._fromGetAccountInfoResponse(this.auth,t,e):null}return ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new $n(Ct(oc),e,i);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||Ct(oc);const a=ks(i,e.config.apiKey,e.name);let l=null;for(const h of t)try{const p=await h._get(a);if(p){let m;if(typeof p=="string"){const _=await js(e,{idToken:p}).catch(()=>{});if(!_)break;m=await ht._fromGetAccountInfoResponse(e,_,p)}else m=ht._fromJSON(e,p);h!==r&&(l=m),r=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new $n(r,e,i):(r=u[0],l&&await r._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==r)try{await h._remove(a)}catch{}})),new $n(r,e,i))}}/**
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
 */function ac(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nh(e))return"Blackberry";if(ih(e))return"Webos";if(Ju(e))return"Safari";if((e.includes("chrome/")||Zu(e))&&!e.includes("edge/"))return"Chrome";if(th(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function Xu(n=$e()){return/firefox\//i.test(n)}function Ju(n=$e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zu(n=$e()){return/crios\//i.test(n)}function eh(n=$e()){return/iemobile/i.test(n)}function th(n=$e()){return/android/i.test(n)}function nh(n=$e()){return/blackberry/i.test(n)}function ih(n=$e()){return/webos/i.test(n)}function Jo(n=$e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qg(n=$e()){var e;return Jo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $g(){return ep()&&document.documentMode===10}function sh(n=$e()){return Jo(n)||th(n)||ih(n)||nh(n)||/windows phone/i.test(n)||eh(n)}/**
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
 */function rh(n,e=[]){let t;switch(n){case"Browser":t=ac($e());break;case"Worker":t=`${ac($e())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jn}/${i}`}/**
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
 */class Gg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((a,l)=>{try{const u=e(r);a(u)}catch(u){l(u)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function jg(n,e={}){return cn(n,"GET","/v2/passwordPolicy",ln(n,e))}/**
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
 */const zg=6;class Hg{constructor(e){var t,i,s,r;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:zg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(i=u.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(r=u.containsUppercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Wg{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lc(this),this.idTokenSubscription=new lc(this),this.beforeStateQueue=new Gg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ju,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ct(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await $n.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await js(this,{idToken:e}),i=await ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(st(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u?.user&&(s=u.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zs(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ag()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject(Pt(this));const t=e?Ee(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(Pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject(Pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jg(this),t=new Hg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Bg(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ct(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[Ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,i,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(st(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&wg(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Cn(n){return Ee(n)}class lc{constructor(e){this.auth=e,this.observer=null,this.addObserver=lp(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let cr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yg(n){cr=n}function oh(n){return cr.loadJS(n)}function Kg(){return cr.recaptchaEnterpriseScript}function Qg(){return cr.gapiScript}function Xg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Jg{constructor(){this.enterprise=new Zg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Zg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const em="recaptcha-enterprise",ah="NO_RECAPTCHA";class tm{constructor(e){this.type=em,this.auth=Cn(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,l)=>{Dg(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new kg(u);return r.tenantId==null?r._agentRecaptchaConfig=h:r._tenantRecaptchaConfigs[r.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function s(r,a,l){const u=window.grecaptcha;ic(u)?u.enterprise.ready(()=>{u.enterprise.execute(r,{action:e}).then(h=>{a(h)}).catch(()=>{a(ah)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Jg().execute("siteKey",{action:"verify"}):new Promise((r,a)=>{i(this.auth).then(l=>{if(!t&&ic(window.grecaptcha))s(l,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Kg();u.length!==0&&(u+=l),oh(u).then(()=>{s(l,r,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function cc(n,e,t,i=!1,s=!1){const r=new tm(n);let a;if(s)a=ah;else try{a=await r.verify(t)}catch{a=await r.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function bo(n,e,t,i,s){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await cc(n,e,t,t==="getOobCode");return i(n,a)}else return i(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await cc(n,e,t,t==="getOobCode");return i(n,l)}else return Promise.reject(a)})}/**
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
 */function nm(n,e){const t=Wo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(wn(r,e??{}))return s;dt(s,"already-initialized")}return t.initialize({options:e})}function im(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Ct);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function sm(n,e,t){const i=Cn(n);H(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=lh(e),{host:a,port:l}=rm(e),u=l===null?"":`:${l}`,h={url:`${r}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){H(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),H(wn(h,i.config.emulator)&&wn(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,Xn(a)?(Lu(`${r}//${a}${u}`),Fu("Auth",!0)):om()}function lh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function rm(n){const e=lh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:uc(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:uc(a)}}}function uc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function om(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Zo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function am(n,e){return cn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lm(n,e){return zi(n,"POST","/v1/accounts:signInWithPassword",ln(n,e))}/**
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
 */async function cm(n,e){return zi(n,"POST","/v1/accounts:signInWithEmailLink",ln(n,e))}async function um(n,e){return zi(n,"POST","/v1/accounts:signInWithEmailLink",ln(n,e))}/**
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
 */class Oi extends Zo{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Oi(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Oi(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bo(e,t,"signInWithPassword",lm);case"emailLink":return cm(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bo(e,i,"signUpPassword",am);case"emailLink":return um(e,{idToken:t,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gn(n,e){return zi(n,"POST","/v1/accounts:signInWithIdp",ln(n,e))}/**
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
 */const hm="http://localhost";class bn extends Zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Yo(t,["providerId","signInMethod"]);if(!i||!s)return null;const a=new bn(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Gn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Gn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gn(e,t)}buildRequest(){const e={requestUri:hm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Gi(t)}return e}}/**
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
 */function dm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fm(n){const e=vi(Ii(n)).link,t=e?vi(Ii(e)).deep_link_id:null,i=vi(Ii(n)).deep_link_id;return(i?vi(Ii(i)).link:null)||i||t||e||n}class ea{constructor(e){var t,i,s,r,a,l;const u=vi(Ii(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(i=u.oobCode)!==null&&i!==void 0?i:null,m=dm((s=u.mode)!==null&&s!==void 0?s:null);H(h&&p&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=p,this.continueUrl=(r=u.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=fm(e);try{return new ea(t)}catch{return null}}}/**
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
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(e,t){return Oi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ea.parseLink(t);return H(i,"argument-error"),Oi._fromEmailAndCode(e,i.code,i.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ch{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hi extends ch{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $t extends Hi{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return bn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Gt.credential(t,i)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class jt extends Hi{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
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
 */class zt extends Hi{constructor(){super("twitter.com")}static credential(e,t){return bn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return zt.credential(t,i)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
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
 */async function pm(n,e){return zi(n,"POST","/v1/accounts:signUp",ln(n,e))}/**
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
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ht._fromIdTokenResponse(e,i,s),a=hc(i);return new An({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=hc(i);return new An({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function hc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Hs extends Lt{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Hs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Hs(e,t,i,s)}}function uh(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Hs._fromErrorAndOperation(n,r,e,i):r})}async function gm(n,e,t=!1){const i=await Vi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return An._forOperation(n,"link",i)}/**
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
 */async function mm(n,e,t=!1){const{auth:i}=n;if(st(i.app))return Promise.reject(Pt(i));const s="reauthenticate";try{const r=await Vi(n,uh(i,s,e,n),t);H(r.idToken,i,"internal-error");const a=Xo(r.idToken);H(a,i,"internal-error");const{sub:l}=a;return H(n.uid===l,i,"user-mismatch"),An._forOperation(n,s,r)}catch(r){throw r?.code==="auth/user-not-found"&&dt(i,"user-mismatch"),r}}/**
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
 */async function hh(n,e,t=!1){if(st(n.app))return Promise.reject(Pt(n));const i="signIn",s=await uh(n,i,e),r=await An._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function ym(n,e){return hh(Cn(n),e)}/**
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
 */async function dh(n){const e=Cn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dc(n,e,t){if(st(n.app))return Promise.reject(Pt(n));const i=Cn(n),a=await bo(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pm).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&dh(n),u}),l=await An._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function fc(n,e,t){return st(n.app)?Promise.reject(Pt(n)):ym(Ee(n),Zn.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&dh(n),i})}function _m(n,e,t,i){return Ee(n).onIdTokenChanged(e,t,i)}function vm(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function Im(n,e,t,i){return Ee(n).onAuthStateChanged(e,t,i)}function ws(n){return Ee(n).signOut()}const Ws="__sak";/**
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
 */class fh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ws,"1"),this.storage.removeItem(Ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Em=1e3,wm=10;class ph extends fh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);$g()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wm):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Em)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ph.type="LOCAL";const Tm=ph;/**
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
 */class gh extends fh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gh.type="SESSION";const mh=gh;/**
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
 */function bm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ur{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new ur(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,r)),u=await bm(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ur.receivers=[];/**
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
 */function ta(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Am{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((l,u)=>{const h=ta("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(p),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(_.data.response);break;default:clearTimeout(p),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function yt(){return window}function Nm(n){yt().location.href=n}/**
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
 */function yh(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function Rm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cm(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Pm(){return yh()?self:null}/**
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
 */const _h="firebaseLocalStorageDb",Sm=1,Ys="firebaseLocalStorage",vh="fbase_key";class Wi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function hr(n,e){return n.transaction([Ys],e?"readwrite":"readonly").objectStore(Ys)}function km(){const n=indexedDB.deleteDatabase(_h);return new Wi(n).toPromise()}function Ao(){const n=indexedDB.open(_h,Sm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ys,{keyPath:vh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ys)?e(i):(i.close(),await km(),e(await Ao()))})})}async function pc(n,e,t){const i=hr(n,!0).put({[vh]:e,value:t});return new Wi(i).toPromise()}async function Dm(n,e){const t=hr(n,!1).get(e),i=await new Wi(t).toPromise();return i===void 0?null:i.value}function gc(n,e){const t=hr(n,!0).delete(e);return new Wi(t).toPromise()}const Vm=800,Om=3;class Ih{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ao(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Om)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ur._getInstance(Pm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Rm(),!this.activeServiceWorker)return;this.sender=new Am(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ao();return await pc(e,Ws,"1"),await gc(e,Ws),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>pc(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Dm(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>gc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=hr(s,!1).getAll();return new Wi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ih.type="LOCAL";const Lm=Ih;new ji(3e4,6e4);/**
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
 */function Fm(n,e){return e?Ct(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class na extends Zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xm(n){return hh(n.auth,new na(n),n.bypassAuthState)}function Mm(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),mm(t,new na(n),n.bypassAuthState)}async function Um(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),gm(t,new na(n),n.bypassAuthState)}/**
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
 */class Eh{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xm;case"linkViaPopup":case"linkViaRedirect":return Um;case"reauthViaPopup":case"reauthViaRedirect":return Mm;default:dt(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bm=new ji(2e3,1e4);class Bn extends Eh{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bm.get())};e()}}Bn.currentPopupAction=null;/**
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
 */const qm="pendingRedirect",Ds=new Map;class $m extends Eh{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ds.get(this.auth._key());if(!e){try{const i=await Gm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ds.set(this.auth._key(),e)}return this.bypassAuthState||Ds.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gm(n,e){const t=Hm(e),i=zm(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function jm(n,e){Ds.set(n._key(),e)}function zm(n){return Ct(n._redirectPersistence)}function Hm(n){return ks(qm,n.config.apiKey,n.name)}async function Wm(n,e,t=!1){if(st(n.app))return Promise.reject(Pt(n));const i=Cn(n),s=Fm(i,e),a=await new $m(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
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
 */const Ym=600*1e3;class Km{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!wh(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(mt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ym&&this.cachedEventUids.clear(),this.cachedEventUids.has(mc(e))}saveEventToCache(e){this.cachedEventUids.add(mc(e)),this.lastProcessedEventTime=Date.now()}}function mc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Qm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wh(n);default:return!1}}/**
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
 */async function Xm(n,e={}){return cn(n,"GET","/v1/projects",e)}/**
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
 */const Jm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zm=/^https?/;async function ey(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Xm(n);for(const t of e)try{if(ty(t))return}catch{}dt(n,"unauthorized-domain")}function ty(n){const e=wo(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!Zm.test(t))return!1;if(Jm.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const ny=new ji(3e4,6e4);function yc(){const n=yt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function iy(n){return new Promise((e,t)=>{var i,s,r;function a(){yc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yc(),t(mt(n,"network-request-failed"))},timeout:ny.get()})}if(!((s=(i=yt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=yt().gapi)===null||r===void 0)&&r.load)a();else{const l=Xg("iframefcb");return yt()[l]=()=>{gapi.load?a():t(mt(n,"network-request-failed"))},oh(`${Qg()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Vs=null,e})}let Vs=null;function sy(n){return Vs=Vs||iy(n),Vs}/**
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
 */const ry=new ji(5e3,15e3),oy="__/auth/iframe",ay="emulator/auth/iframe",ly={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uy(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qo(e,ay):`https://${n.config.authDomain}/${oy}`,i={apiKey:e.apiKey,appName:n.name,v:Jn},s=cy.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Gi(i).slice(1)}`}async function hy(n){const e=await sy(n),t=yt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:uy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ly,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=mt(n,"network-request-failed"),l=yt().setTimeout(()=>{r(a)},ry.get());function u(){yt().clearTimeout(l),s(i)}i.ping(u).then(u,()=>{r(a)})}))}/**
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
 */const dy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fy=500,py=600,gy="_blank",my="http://localhost";class _c{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yy(n,e,t,i=fy,s=py){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u=Object.assign(Object.assign({},dy),{width:i.toString(),height:s.toString(),top:r,left:a}),h=$e().toLowerCase();t&&(l=Zu(h)?gy:t),Xu(h)&&(e=e||my,u.scrollbars="yes");const p=Object.entries(u).reduce((_,[b,C])=>`${_}${b}=${C},`,"");if(qg(h)&&l!=="_self")return _y(e||"",l),new _c(null);const m=window.open(e||"",l,p);H(m,n,"popup-blocked");try{m.focus()}catch{}return new _c(m)}function _y(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const vy="__/auth/handler",Iy="emulator/auth/handler",Ey=encodeURIComponent("fac");async function vc(n,e,t,i,s,r){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Jn,eventId:s};if(e instanceof ch){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ap(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof Hi){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await n._getAppCheckToken(),h=u?`#${Ey}=${encodeURIComponent(u)}`:"";return`${wy(n)}?${Gi(l).slice(1)}${h}`}function wy({config:n}){return n.emulator?Qo(n,Iy):`https://${n.authDomain}/${vy}`}/**
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
 */const eo="webStorageSupport";class Ty{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mh,this._completeRedirectFn=Wm,this._overrideRedirectResult=jm}async _openPopup(e,t,i,s){var r;Dt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await vc(e,t,i,wo(),s);return yy(e,a,ta())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await vc(e,t,i,wo(),s);return Nm(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Dt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await hy(e),i=new Km(e);return t.register("authEvent",s=>(H(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(eo,{type:eo},s=>{var r;const a=(r=s?.[0])===null||r===void 0?void 0:r[eo];a!==void 0&&t(!!a),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ey(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sh()||Ju()||Jo()}}const by=Ty;var Ic="@firebase/auth",Ec="1.10.8";/**
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
 */class Ay{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ny(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ry(n){zn(new Tn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rh(n)},h=new Wg(i,s,r,u);return im(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),zn(new Tn("auth-internal",e=>{const t=Cn(e.getProvider("auth").getImmediate());return(i=>new Ay(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Ic,Ec,Ny(n)),Xt(Ic,Ec,"esm2017")}/**
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
 */const Cy=300,Py=Ou("authIdTokenMaxAge")||Cy;let wc=null;const Sy=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Py)return;const s=t?.token;wc!==s&&(wc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ky(n=Bu()){const e=Wo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=nm(n,{popupRedirectResolver:by,persistence:[Lm,Tm,mh]}),i=Ou("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const a=Sy(r.toString());vm(t,a,()=>a(t.currentUser)),_m(t,l=>a(l))}}const s=Du("auth");return s&&sm(t,`http://${s}`),t}function Dy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Yg({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=mt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Dy().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ry("Browser");var Tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jt,Th;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function v(){}v.prototype=y.prototype,T.D=y.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(E,w,A){for(var I=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)I[Pe-2]=arguments[Pe];return y.prototype[w].apply(E,I)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,v){v||(v=0);var E=Array(16);if(typeof y=="string")for(var w=0;16>w;++w)E[w]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(w=0;16>w;++w)E[w]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=T.g[0],v=T.g[1],w=T.g[2];var A=T.g[3],I=y+(A^v&(w^A))+E[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=A+(w^y&(v^w))+E[1]+3905402710&4294967295,A=y+(I<<12&4294967295|I>>>20),I=w+(v^A&(y^v))+E[2]+606105819&4294967295,w=A+(I<<17&4294967295|I>>>15),I=v+(y^w&(A^y))+E[3]+3250441966&4294967295,v=w+(I<<22&4294967295|I>>>10),I=y+(A^v&(w^A))+E[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=A+(w^y&(v^w))+E[5]+1200080426&4294967295,A=y+(I<<12&4294967295|I>>>20),I=w+(v^A&(y^v))+E[6]+2821735955&4294967295,w=A+(I<<17&4294967295|I>>>15),I=v+(y^w&(A^y))+E[7]+4249261313&4294967295,v=w+(I<<22&4294967295|I>>>10),I=y+(A^v&(w^A))+E[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=A+(w^y&(v^w))+E[9]+2336552879&4294967295,A=y+(I<<12&4294967295|I>>>20),I=w+(v^A&(y^v))+E[10]+4294925233&4294967295,w=A+(I<<17&4294967295|I>>>15),I=v+(y^w&(A^y))+E[11]+2304563134&4294967295,v=w+(I<<22&4294967295|I>>>10),I=y+(A^v&(w^A))+E[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=A+(w^y&(v^w))+E[13]+4254626195&4294967295,A=y+(I<<12&4294967295|I>>>20),I=w+(v^A&(y^v))+E[14]+2792965006&4294967295,w=A+(I<<17&4294967295|I>>>15),I=v+(y^w&(A^y))+E[15]+1236535329&4294967295,v=w+(I<<22&4294967295|I>>>10),I=y+(w^A&(v^w))+E[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=A+(v^w&(y^v))+E[6]+3225465664&4294967295,A=y+(I<<9&4294967295|I>>>23),I=w+(y^v&(A^y))+E[11]+643717713&4294967295,w=A+(I<<14&4294967295|I>>>18),I=v+(A^y&(w^A))+E[0]+3921069994&4294967295,v=w+(I<<20&4294967295|I>>>12),I=y+(w^A&(v^w))+E[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=A+(v^w&(y^v))+E[10]+38016083&4294967295,A=y+(I<<9&4294967295|I>>>23),I=w+(y^v&(A^y))+E[15]+3634488961&4294967295,w=A+(I<<14&4294967295|I>>>18),I=v+(A^y&(w^A))+E[4]+3889429448&4294967295,v=w+(I<<20&4294967295|I>>>12),I=y+(w^A&(v^w))+E[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=A+(v^w&(y^v))+E[14]+3275163606&4294967295,A=y+(I<<9&4294967295|I>>>23),I=w+(y^v&(A^y))+E[3]+4107603335&4294967295,w=A+(I<<14&4294967295|I>>>18),I=v+(A^y&(w^A))+E[8]+1163531501&4294967295,v=w+(I<<20&4294967295|I>>>12),I=y+(w^A&(v^w))+E[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=A+(v^w&(y^v))+E[2]+4243563512&4294967295,A=y+(I<<9&4294967295|I>>>23),I=w+(y^v&(A^y))+E[7]+1735328473&4294967295,w=A+(I<<14&4294967295|I>>>18),I=v+(A^y&(w^A))+E[12]+2368359562&4294967295,v=w+(I<<20&4294967295|I>>>12),I=y+(v^w^A)+E[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=A+(y^v^w)+E[8]+2272392833&4294967295,A=y+(I<<11&4294967295|I>>>21),I=w+(A^y^v)+E[11]+1839030562&4294967295,w=A+(I<<16&4294967295|I>>>16),I=v+(w^A^y)+E[14]+4259657740&4294967295,v=w+(I<<23&4294967295|I>>>9),I=y+(v^w^A)+E[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=A+(y^v^w)+E[4]+1272893353&4294967295,A=y+(I<<11&4294967295|I>>>21),I=w+(A^y^v)+E[7]+4139469664&4294967295,w=A+(I<<16&4294967295|I>>>16),I=v+(w^A^y)+E[10]+3200236656&4294967295,v=w+(I<<23&4294967295|I>>>9),I=y+(v^w^A)+E[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=A+(y^v^w)+E[0]+3936430074&4294967295,A=y+(I<<11&4294967295|I>>>21),I=w+(A^y^v)+E[3]+3572445317&4294967295,w=A+(I<<16&4294967295|I>>>16),I=v+(w^A^y)+E[6]+76029189&4294967295,v=w+(I<<23&4294967295|I>>>9),I=y+(v^w^A)+E[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=A+(y^v^w)+E[12]+3873151461&4294967295,A=y+(I<<11&4294967295|I>>>21),I=w+(A^y^v)+E[15]+530742520&4294967295,w=A+(I<<16&4294967295|I>>>16),I=v+(w^A^y)+E[2]+3299628645&4294967295,v=w+(I<<23&4294967295|I>>>9),I=y+(w^(v|~A))+E[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=A+(v^(y|~w))+E[7]+1126891415&4294967295,A=y+(I<<10&4294967295|I>>>22),I=w+(y^(A|~v))+E[14]+2878612391&4294967295,w=A+(I<<15&4294967295|I>>>17),I=v+(A^(w|~y))+E[5]+4237533241&4294967295,v=w+(I<<21&4294967295|I>>>11),I=y+(w^(v|~A))+E[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=A+(v^(y|~w))+E[3]+2399980690&4294967295,A=y+(I<<10&4294967295|I>>>22),I=w+(y^(A|~v))+E[10]+4293915773&4294967295,w=A+(I<<15&4294967295|I>>>17),I=v+(A^(w|~y))+E[1]+2240044497&4294967295,v=w+(I<<21&4294967295|I>>>11),I=y+(w^(v|~A))+E[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=A+(v^(y|~w))+E[15]+4264355552&4294967295,A=y+(I<<10&4294967295|I>>>22),I=w+(y^(A|~v))+E[6]+2734768916&4294967295,w=A+(I<<15&4294967295|I>>>17),I=v+(A^(w|~y))+E[13]+1309151649&4294967295,v=w+(I<<21&4294967295|I>>>11),I=y+(w^(v|~A))+E[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=A+(v^(y|~w))+E[11]+3174756917&4294967295,A=y+(I<<10&4294967295|I>>>22),I=w+(y^(A|~v))+E[2]+718787259&4294967295,w=A+(I<<15&4294967295|I>>>17),I=v+(A^(w|~y))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+A&4294967295}i.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var v=y-this.blockSize,E=this.B,w=this.h,A=0;A<y;){if(w==0)for(;A<=v;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<y;)if(E[w++]=T.charCodeAt(A++),w==this.blockSize){s(this,E),w=0;break}}else for(;A<y;)if(E[w++]=T[A++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=y},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var v=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=v&255,v/=256;for(this.u(T),T=Array(16),y=v=0;4>y;++y)for(var E=0;32>E;E+=8)T[v++]=this.g[y]>>>E&255;return T};function r(T,y){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=y(T)}function a(T,y){this.h=y;for(var v=[],E=!0,w=T.length-1;0<=w;w--){var A=T[w]|0;E&&A==y||(v[w]=A,E=!1)}this.g=v}var l={};function u(T){return-128<=T&&128>T?r(T,function(y){return new a([y|0],0>y?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return S(h(-T));for(var y=[],v=1,E=0;T>=v;E++)y[E]=T/v|0,v*=4294967296;return new a(y,0)}function p(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return S(p(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),E=m,w=0;w<T.length;w+=8){var A=Math.min(8,T.length-w),I=parseInt(T.substring(w,w+A),y);8>A?(A=h(Math.pow(y,A)),E=E.j(A).add(h(I))):(E=E.j(v),E=E.add(h(I)))}return E}var m=u(0),_=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-S(this).m();for(var T=0,y=1,v=0;v<this.g.length;v++){var E=this.i(v);T+=(0<=E?E:4294967296+E)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(D(this))return"-"+S(this).toString(T);for(var y=h(Math.pow(T,6)),v=this,E="";;){var w=Q(v,y).g;v=B(v,w.j(y));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=w,C(v))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function D(T){return T.h==-1}n.l=function(T){return T=B(this,T),D(T)?-1:C(T)?0:1};function S(T){for(var y=T.g.length,v=[],E=0;E<y;E++)v[E]=~T.g[E];return new a(v,~T.h).add(_)}n.abs=function(){return D(this)?S(this):this},n.add=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],E=0,w=0;w<=y;w++){var A=E+(this.i(w)&65535)+(T.i(w)&65535),I=(A>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);E=I>>>16,A&=65535,I&=65535,v[w]=I<<16|A}return new a(v,v[v.length-1]&-2147483648?-1:0)};function B(T,y){return T.add(S(y))}n.j=function(T){if(C(this)||C(T))return m;if(D(this))return D(T)?S(this).j(S(T)):S(S(this).j(T));if(D(T))return S(this.j(S(T)));if(0>this.l(b)&&0>T.l(b))return h(this.m()*T.m());for(var y=this.g.length+T.g.length,v=[],E=0;E<2*y;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<T.g.length;w++){var A=this.i(E)>>>16,I=this.i(E)&65535,Pe=T.i(w)>>>16,nt=T.i(w)&65535;v[2*E+2*w]+=I*nt,q(v,2*E+2*w),v[2*E+2*w+1]+=A*nt,q(v,2*E+2*w+1),v[2*E+2*w+1]+=I*Pe,q(v,2*E+2*w+1),v[2*E+2*w+2]+=A*Pe,q(v,2*E+2*w+2)}for(E=0;E<y;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=y;E<2*y;E++)v[E]=0;return new a(v,0)};function q(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function $(T,y){this.g=T,this.h=y}function Q(T,y){if(C(y))throw Error("division by zero");if(C(T))return new $(m,m);if(D(T))return y=Q(S(T),y),new $(S(y.g),S(y.h));if(D(y))return y=Q(T,S(y)),new $(S(y.g),y.h);if(30<T.g.length){if(D(T)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var v=_,E=y;0>=E.l(T);)v=z(v),E=z(E);var w=Z(v,1),A=Z(E,1);for(E=Z(E,2),v=Z(v,2);!C(E);){var I=A.add(E);0>=I.l(T)&&(w=w.add(v),A=I),E=Z(E,1),v=Z(v,1)}return y=B(T,w.j(y)),new $(w,y)}for(w=m;0<=T.l(y);){for(v=Math.max(1,Math.floor(T.m()/y.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=h(v),I=A.j(y);D(I)||0<I.l(T);)v-=E,A=h(v),I=A.j(y);C(A)&&(A=_),w=w.add(A),T=B(T,I)}return new $(w,T)}n.A=function(T){return Q(this,T).h},n.and=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)&T.i(E);return new a(v,this.h&T.h)},n.or=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)|T.i(E);return new a(v,this.h|T.h)},n.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)^T.i(E);return new a(v,this.h^T.h)};function z(T){for(var y=T.g.length+1,v=[],E=0;E<y;E++)v[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(v,T.h)}function Z(T,y){var v=y>>5;y%=32;for(var E=T.g.length-v,w=[],A=0;A<E;A++)w[A]=0<y?T.i(A+v)>>>y|T.i(A+v+1)<<32-y:T.i(A+v);return new a(w,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Th=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,Jt=a}).apply(typeof Tc<"u"?Tc:typeof self<"u"?self:typeof window<"u"?window:{});var Ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bh,Ei,Ah,Os,No,Nh,Rh,Ch;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ts=="object"&&Ts];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=t(this);function s(o,c){if(c)e:{var d=i;o=o.split(".");for(var g=0;g<o.length-1;g++){var N=o[g];if(!(N in d))break e;d=d[N]}o=o[o.length-1],g=d[o],c=c(g),c!=g&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function r(o,c){o instanceof String&&(o+="");var d=0,g=!1,N={next:function(){if(!g&&d<o.length){var R=d++;return{value:c(R,o[R]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(o){return o||function(){return r(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,d){return o.call.apply(o.bind,arguments)}function m(o,c,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),o.apply(c,N)}}return function(){return o.apply(c,arguments)}}function _(o,c,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,_.apply(null,arguments)}function b(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function C(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,N,R){for(var O=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)O[ce-2]=arguments[ce];return c.prototype[N].apply(g,O)}}function D(o){const c=o.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=o[g];return d}return[]}function S(o,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const N=o.length||0,R=g.length||0;o.length=N+R;for(let O=0;O<R;O++)o[N+O]=g[O]}else o.push(g)}}class B{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function q(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var z=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Z(o,c,d){for(const g in o)c.call(d,o[g],g,o)}function T(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function y(o){const c={};for(const d in o)c[d]=o[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)o[d]=g[d];for(let R=0;R<v.length;R++)d=v[R],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function w(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function I(){var o=V;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Pe{constructor(){this.h=this.g=null}add(c,d){const g=nt.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var nt=new B(()=>new Ge,o=>o.reset());class Ge{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let bt,Y=!1,V=new Pe,M=()=>{const o=l.Promise.resolve(void 0);bt=()=>{o.then(le)}};var le=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(d){A(d)}var c=nt;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Y=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var G=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o})();function we(o,c){if(ae.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(z){e:{try{Q(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ye[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&we.aa.h.call(this)}}C(we,ae);var Ye={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ee="closure_listenable_"+(1e6*Math.random()|0),dn=0;function ot(o,c,d,g,N){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=N,this.key=++dn,this.da=this.fa=!1}function x(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ue(o){this.src=o,this.g={},this.h=0}ue.prototype.add=function(o,c,d,g,N){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var O=ge(o,c,g,N);return-1<O?(c=o[O],d||(c.fa=!1)):(c=new ot(c,this.src,R,!!g,N),c.fa=d,o.push(c)),c};function Ne(o,c){var d=c.type;if(d in o.g){var g=o.g[d],N=Array.prototype.indexOf.call(g,c,void 0),R;(R=0<=N)&&Array.prototype.splice.call(g,N,1),R&&(x(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function ge(o,c,d,g){for(var N=0;N<o.length;++N){var R=o[N];if(!R.da&&R.listener==c&&R.capture==!!d&&R.ha==g)return N}return-1}var at="closure_lm_"+(1e6*Math.random()|0),Cr={};function Ha(o,c,d,g,N){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Ha(o,c[R],d,g,N);return null}return d=Ka(d),o&&o[ee]?o.K(c,d,h(g)?!!g.capture:!1,N):sf(o,c,d,!1,g,N)}function sf(o,c,d,g,N,R){if(!c)throw Error("Invalid event type");var O=h(N)?!!N.capture:!!N,ce=Sr(o);if(ce||(o[at]=ce=new ue(o)),d=ce.add(c,d,g,O,R),d.proxy)return d;if(g=rf(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)G||(N=O),N===void 0&&(N=!1),o.addEventListener(c.toString(),g,N);else if(o.attachEvent)o.attachEvent(Ya(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function rf(){function o(d){return c.call(o.src,o.listener,d)}const c=of;return o}function Wa(o,c,d,g,N){if(Array.isArray(c))for(var R=0;R<c.length;R++)Wa(o,c[R],d,g,N);else g=h(g)?!!g.capture:!!g,d=Ka(d),o&&o[ee]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],d=ge(R,d,g,N),-1<d&&(x(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=Sr(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ge(c,d,g,N)),(d=-1<o?c[o]:null)&&Pr(d))}function Pr(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[ee])Ne(c.i,o);else{var d=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(d,g,o.capture):c.detachEvent?c.detachEvent(Ya(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Sr(c))?(Ne(d,o),d.h==0&&(d.src=null,c[at]=null)):x(o)}}}function Ya(o){return o in Cr?Cr[o]:Cr[o]="on"+o}function of(o,c){if(o.da)o=!0;else{c=new we(c,this);var d=o.listener,g=o.ha||o.src;o.fa&&Pr(o),o=d.call(g,c)}return o}function Sr(o){return o=o[at],o instanceof ue?o:null}var kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ka(o){return typeof o=="function"?o:(o[kr]||(o[kr]=function(c){return o.handleEvent(c)}),o[kr])}function Le(){re.call(this),this.i=new ue(this),this.M=this,this.F=null}C(Le,re),Le.prototype[ee]=!0,Le.prototype.removeEventListener=function(o,c,d,g){Wa(this,o,c,d,g)};function je(o,c){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new ae(c,o);else if(c instanceof ae)c.target=c.target||o;else{var N=c;c=new ae(g,o),E(c,N)}if(N=!0,d)for(var R=d.length-1;0<=R;R--){var O=c.g=d[R];N=ss(O,g,!0,c)&&N}if(O=c.g=o,N=ss(O,g,!0,c)&&N,N=ss(O,g,!1,c)&&N,d)for(R=0;R<d.length;R++)O=c.g=d[R],N=ss(O,g,!1,c)&&N}Le.prototype.N=function(){if(Le.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],g=0;g<d.length;g++)x(d[g]);delete o.g[c],o.h--}}this.F=null},Le.prototype.K=function(o,c,d,g){return this.i.add(String(o),c,!1,d,g)},Le.prototype.L=function(o,c,d,g){return this.i.add(String(o),c,!0,d,g)};function ss(o,c,d,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,R=0;R<c.length;++R){var O=c[R];if(O&&!O.da&&O.capture==d){var ce=O.listener,Se=O.ha||O.src;O.fa&&Ne(o.i,O),N=ce.call(Se,g)!==!1&&N}}return N&&!g.defaultPrevented}function Qa(o,c,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Xa(o){o.g=Qa(()=>{o.g=null,o.i&&(o.i=!1,Xa(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class af extends re{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Xa(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ri(o){re.call(this),this.h=o,this.g={}}C(ri,re);var Ja=[];function Za(o){Z(o.g,function(c,d){this.g.hasOwnProperty(d)&&Pr(c)},o),o.g={}}ri.prototype.N=function(){ri.aa.N.call(this),Za(this)},ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dr=l.JSON.stringify,lf=l.JSON.parse,cf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Vr(){}Vr.prototype.h=null;function el(o){return o.h||(o.h=o.i())}function tl(){}var oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Or(){ae.call(this,"d")}C(Or,ae);function Lr(){ae.call(this,"c")}C(Lr,ae);var fn={},nl=null;function rs(){return nl=nl||new Le}fn.La="serverreachability";function il(o){ae.call(this,fn.La,o)}C(il,ae);function ai(o){const c=rs();je(c,new il(c))}fn.STAT_EVENT="statevent";function sl(o,c){ae.call(this,fn.STAT_EVENT,o),this.stat=c}C(sl,ae);function ze(o){const c=rs();je(c,new sl(c,o))}fn.Ma="timingevent";function rl(o,c){ae.call(this,fn.Ma,o),this.size=c}C(rl,ae);function li(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function ci(){this.g=!0}ci.prototype.xa=function(){this.g=!1};function uf(o,c,d,g,N,R){o.info(function(){if(o.g)if(R)for(var O="",ce=R.split("&"),Se=0;Se<ce.length;Se++){var se=ce[Se].split("=");if(1<se.length){var Fe=se[0];se=se[1];var xe=Fe.split("_");O=2<=xe.length&&xe[1]=="type"?O+(Fe+"="+se+"&"):O+(Fe+"=redacted&")}}else O=null;else O=R;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+c+`
`+d+`
`+O})}function hf(o,c,d,g,N,R,O){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+c+`
`+d+`
`+R+" "+O})}function kn(o,c,d,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+ff(o,d)+(g?" "+g:"")})}function df(o,c){o.info(function(){return"TIMEOUT: "+c})}ci.prototype.info=function(){};function ff(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var R=N[0];if(R!="noop"&&R!="stop"&&R!="close")for(var O=1;O<N.length;O++)N[O]=""}}}}return Dr(d)}catch{return c}}var os={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ol={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fr;function as(){}C(as,Vr),as.prototype.g=function(){return new XMLHttpRequest},as.prototype.i=function(){return{}},Fr=new as;function xt(o,c,d,g){this.j=o,this.i=c,this.l=d,this.R=g||1,this.U=new ri(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new al}function al(){this.i=null,this.g="",this.h=!1}var ll={},xr={};function Mr(o,c,d){o.L=1,o.v=hs(At(c)),o.m=d,o.P=!0,cl(o,null)}function cl(o,c){o.F=Date.now(),ls(o),o.A=At(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Tl(d.i,"t",g),o.C=0,d=o.j.J,o.h=new al,o.g=ql(o.j,d?c:null,!o.m),0<o.O&&(o.M=new af(_(o.Y,o,o.g),o.O)),c=o.U,d=o.g,g=o.ca;var N="readystatechange";Array.isArray(N)||(N&&(Ja[0]=N.toString()),N=Ja);for(var R=0;R<N.length;R++){var O=Ha(d,N[R],g||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),ai(),uf(o.i,o.u,o.A,o.l,o.R,o.m)}xt.prototype.ca=function(o){o=o.target;const c=this.M;c&&Nt(o)==3?c.j():this.Y(o)},xt.prototype.Y=function(o){try{if(o==this.g)e:{const xe=Nt(this.g);var c=this.g.Ba();const On=this.g.Z();if(!(3>xe)&&(xe!=3||this.g&&(this.h.h||this.g.oa()||Sl(this.g)))){this.J||xe!=4||c==7||(c==8||0>=On?ai(3):ai(2)),Ur(this);var d=this.g.Z();this.X=d;t:if(ul(this)){var g=Sl(this.g);o="";var N=g.length,R=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),ui(this);var O="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,o+=this.h.i.decode(g[c],{stream:!(R&&c==N-1)});g.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,hf(this.i,this.u,this.A,this.l,this.R,xe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Se=this.g;if((ce=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(ce)){var se=ce;break t}}se=null}if(d=se)kn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Br(this,d);else{this.o=!1,this.s=3,ze(12),pn(this),ui(this);break e}}if(this.P){d=!0;let lt;for(;!this.J&&this.C<O.length;)if(lt=pf(this,O),lt==xr){xe==4&&(this.s=4,ze(14),d=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==ll){this.s=4,ze(15),kn(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else kn(this.i,this.l,lt,null),Br(this,lt);if(ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xe!=4||O.length!=0||this.h.h||(this.s=1,ze(16),d=!1),this.o=this.o&&d,!d)kn(this.i,this.l,O,"[Invalid Chunked Response]"),pn(this),ui(this);else if(0<O.length&&!this.W){this.W=!0;var Fe=this.j;Fe.g==this&&Fe.ba&&!Fe.M&&(Fe.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Hr(Fe),Fe.M=!0,ze(11))}}else kn(this.i,this.l,O,null),Br(this,O);xe==4&&pn(this),this.o&&!this.J&&(xe==4?xl(this.j,this):(this.o=!1,ls(this)))}else kf(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),pn(this),ui(this)}}}catch{}finally{}};function ul(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function pf(o,c){var d=o.C,g=c.indexOf(`
`,d);return g==-1?xr:(d=Number(c.substring(d,g)),isNaN(d)?ll:(g+=1,g+d>c.length?xr:(c=c.slice(g,g+d),o.C=g+d,c)))}xt.prototype.cancel=function(){this.J=!0,pn(this)};function ls(o){o.S=Date.now()+o.I,hl(o,o.I)}function hl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=li(_(o.ba,o),c)}function Ur(o){o.B&&(l.clearTimeout(o.B),o.B=null)}xt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(df(this.i,this.A),this.L!=2&&(ai(),ze(17)),pn(this),this.s=2,ui(this)):hl(this,this.S-o)};function ui(o){o.j.G==0||o.J||xl(o.j,o)}function pn(o){Ur(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Za(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Br(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||qr(d.h,o))){if(!o.K&&qr(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ys(d),gs(d);else break e;zr(d),ze(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=li(_(d.Za,d),6e3));if(1>=pl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else mn(d,11)}else if((o.K||d.g==o)&&ys(d),!q(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let se=N[c];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const Fe=se[3];Fe!=null&&(d.la=Fe,d.j.info("VER="+d.la));const xe=se[4];xe!=null&&(d.Aa=xe,d.j.info("SVER="+d.Aa));const On=se[5];On!=null&&typeof On=="number"&&0<On&&(g=1.5*On,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const lt=o.g;if(lt){const vs=lt.g?lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vs){var R=g.h;R.g||vs.indexOf("spdy")==-1&&vs.indexOf("quic")==-1&&vs.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&($r(R,R.h),R.h=null))}if(g.D){const Wr=lt.g?lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Wr&&(g.ya=Wr,fe(g.I,g.D,Wr))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var O=o;if(g.qa=Bl(g,g.J?g.ia:null,g.W),O.K){gl(g.h,O);var ce=O,Se=g.L;Se&&(ce.I=Se),ce.B&&(Ur(ce),ls(ce)),g.g=O}else Ll(g);0<d.i.length&&ms(d)}else se[0]!="stop"&&se[0]!="close"||mn(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?mn(d,7):jr(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}ai(4)}catch{}}var gf=class{constructor(o,c){this.g=o,this.map=c}};function dl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function pl(o){return o.h?1:o.g?o.g.size:0}function qr(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function $r(o,c){o.g?o.g.add(c):o.h=c}function gl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}dl.prototype.cancel=function(){if(this.i=ml(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ml(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return D(o.i)}function mf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,g=0;g<d;g++)c.push(o[g]);return c}c=[],d=0;for(g in o)c[d++]=o[g];return c}function yf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const g in o)c[d++]=g;return c}}}function yl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=yf(o),g=mf(o),N=g.length,R=0;R<N;R++)c.call(void 0,g[R],d&&d[R],o)}var _l=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _f(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),N=null;if(0<=g){var R=o[d].substring(0,g);N=o[d].substring(g+1)}else R=o[d];c(R,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function gn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof gn){this.h=o.h,cs(this,o.j),this.o=o.o,this.g=o.g,us(this,o.s),this.l=o.l;var c=o.i,d=new fi;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),vl(this,d),this.m=o.m}else o&&(c=String(o).match(_l))?(this.h=!1,cs(this,c[1]||"",!0),this.o=hi(c[2]||""),this.g=hi(c[3]||"",!0),us(this,c[4]),this.l=hi(c[5]||"",!0),vl(this,c[6]||"",!0),this.m=hi(c[7]||"")):(this.h=!1,this.i=new fi(null,this.h))}gn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(di(c,Il,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(di(c,Il,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(di(d,d.charAt(0)=="/"?Ef:If,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",di(d,Tf)),o.join("")};function At(o){return new gn(o)}function cs(o,c,d){o.j=d?hi(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function us(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function vl(o,c,d){c instanceof fi?(o.i=c,bf(o.i,o.h)):(d||(c=di(c,wf)),o.i=new fi(c,o.h))}function fe(o,c,d){o.i.set(c,d)}function hs(o){return fe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function hi(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function di(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,vf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function vf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Il=/[#\/\?@]/g,If=/[#\?:]/g,Ef=/[#\?]/g,wf=/[#\?@]/g,Tf=/#/g;function fi(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Mt(o){o.g||(o.g=new Map,o.h=0,o.i&&_f(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=fi.prototype,n.add=function(o,c){Mt(this),this.i=null,o=Dn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function El(o,c){Mt(o),c=Dn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function wl(o,c){return Mt(o),c=Dn(o,c),o.g.has(c)}n.forEach=function(o,c){Mt(this),this.g.forEach(function(d,g){d.forEach(function(N){o.call(c,N,g,this)},this)},this)},n.na=function(){Mt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const N=o[g];for(let R=0;R<N.length;R++)d.push(c[g])}return d},n.V=function(o){Mt(this);let c=[];if(typeof o=="string")wl(this,o)&&(c=c.concat(this.g.get(Dn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return Mt(this),this.i=null,o=Dn(this,o),wl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Tl(o,c,d){El(o,c),0<d.length&&(o.i=null,o.g.set(Dn(o,c),D(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const R=encodeURIComponent(String(g)),O=this.V(g);for(g=0;g<O.length;g++){var N=R;O[g]!==""&&(N+="="+encodeURIComponent(String(O[g]))),o.push(N)}}return this.i=o.join("&")};function Dn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function bf(o,c){c&&!o.j&&(Mt(o),o.i=null,o.g.forEach(function(d,g){var N=g.toLowerCase();g!=N&&(El(this,g),Tl(this,N,d))},o)),o.j=c}function Af(o,c){const d=new ci;if(l.Image){const g=new Image;g.onload=b(Ut,d,"TestLoadImage: loaded",!0,c,g),g.onerror=b(Ut,d,"TestLoadImage: error",!1,c,g),g.onabort=b(Ut,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=b(Ut,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function Nf(o,c){const d=new ci,g=new AbortController,N=setTimeout(()=>{g.abort(),Ut(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(R=>{clearTimeout(N),R.ok?Ut(d,"TestPingServer: ok",!0,c):Ut(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Ut(d,"TestPingServer: error",!1,c)})}function Ut(o,c,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function Rf(){this.g=new cf}function Cf(o,c,d){const g=d||"";try{yl(o,function(N,R){let O=N;h(N)&&(O=Dr(N)),c.push(g+R+"="+encodeURIComponent(O))})}catch(N){throw c.push(g+"type="+encodeURIComponent("_badmap")),N}}function ds(o){this.l=o.Ub||null,this.j=o.eb||!1}C(ds,Vr),ds.prototype.g=function(){return new fs(this.l,this.j)},ds.prototype.i=(function(o){return function(){return o}})({});function fs(o,c){Le.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(fs,Le),n=fs.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,gi(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function bl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?pi(this):gi(this),this.readyState==3&&bl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,pi(this))},n.Qa=function(o){this.g&&(this.response=o,pi(this))},n.ga=function(){this.g&&pi(this)};function pi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,gi(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function gi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Al(o){let c="";return Z(o,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Gr(o,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Al(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):fe(o,c,d))}function _e(o){Le.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(_e,Le);var Pf=/^https?$/i,Sf=["POST","PUT"];n=_e.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fr.g(),this.v=this.o?el(this.o):el(Fr),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){Nl(this,R);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())d.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),N=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Sf,c,void 0))||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,O]of d)this.g.setRequestHeader(R,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pl(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Nl(this,R)}};function Nl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Rl(o),ps(o)}function Rl(o){o.A||(o.A=!0,je(o,"complete"),je(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,je(this,"complete"),je(this,"abort"),ps(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ps(this,!0)),_e.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Cl(this):this.bb())},n.bb=function(){Cl(this)};function Cl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Nt(o)!=4||o.Z()!=2)){if(o.u&&Nt(o)==4)Qa(o.Ea,0,o);else if(je(o,"readystatechange"),Nt(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=O===0){var N=String(o.D).match(_l)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),g=!Pf.test(N?N.toLowerCase():"")}d=g}if(d)je(o,"complete"),je(o,"success");else{o.m=6;try{var R=2<Nt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Rl(o)}}finally{ps(o)}}}}function ps(o,c){if(o.g){Pl(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||je(o,"ready");try{d.onreadystatechange=g}catch{}}}function Pl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Nt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),lf(c)}};function Sl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function kf(o){const c={};o=(o.g&&2<=Nt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(q(o[g]))continue;var d=w(o[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=c[N]||[];c[N]=R,R.push(d)}T(c,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function kl(o){this.Aa=0,this.i=[],this.j=new ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mi("baseRetryDelayMs",5e3,o),this.cb=mi("retryDelaySeedMs",1e4,o),this.Wa=mi("forwardChannelMaxRetries",2,o),this.wa=mi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new dl(o&&o.concurrentRequestLimit),this.Da=new Rf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=kl.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,g){ze(0),this.W=o,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Bl(this,null,this.W),ms(this)};function jr(o){if(Dl(o),o.G==3){var c=o.U++,d=At(o.I);if(fe(d,"SID",o.K),fe(d,"RID",c),fe(d,"TYPE","terminate"),yi(o,d),c=new xt(o,o.j,c),c.L=2,c.v=hs(At(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=ql(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ls(c)}Ul(o)}function gs(o){o.g&&(Hr(o),o.g.cancel(),o.g=null)}function Dl(o){gs(o),o.u&&(l.clearTimeout(o.u),o.u=null),ys(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ms(o){if(!fl(o.h)&&!o.s){o.s=!0;var c=o.Ga;bt||M(),Y||(bt(),Y=!0),V.add(c,o),o.B=0}}function Df(o,c){return pl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=li(_(o.Ga,o,c),Ml(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const N=new xt(this,this.j,o);let R=this.o;if(this.S&&(R?(R=y(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(N.H=R,R=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Ol(this,N,c),d=At(this.I),fe(d,"RID",o),fe(d,"CVER",22),this.D&&fe(d,"X-HTTP-Session-Id",this.D),yi(this,d),R&&(this.O?c="headers="+encodeURIComponent(String(Al(R)))+"&"+c:this.m&&Gr(d,this.m,R)),$r(this.h,N),this.Ua&&fe(d,"TYPE","init"),this.P?(fe(d,"$req",c),fe(d,"SID","null"),N.T=!0,Mr(N,d,null)):Mr(N,d,c),this.G=2}}else this.G==3&&(o?Vl(this,o):this.i.length==0||fl(this.h)||Vl(this))};function Vl(o,c){var d;c?d=c.l:d=o.U++;const g=At(o.I);fe(g,"SID",o.K),fe(g,"RID",d),fe(g,"AID",o.T),yi(o,g),o.m&&o.o&&Gr(g,o.m,o.o),d=new xt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ol(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),$r(o.h,d),Mr(d,g,c)}function yi(o,c){o.H&&Z(o.H,function(d,g){fe(c,g,d)}),o.l&&yl({},function(d,g){fe(c,g,d)})}function Ol(o,c,d){d=Math.min(o.i.length,d);var g=o.l?_(o.l.Na,o.l,o):null;e:{var N=o.i;let R=-1;for(;;){const O=["count="+d];R==-1?0<d?(R=N[0].g,O.push("ofs="+R)):R=0:O.push("ofs="+R);let ce=!0;for(let Se=0;Se<d;Se++){let se=N[Se].g;const Fe=N[Se].map;if(se-=R,0>se)R=Math.max(0,N[Se].g-100),ce=!1;else try{Cf(Fe,O,"req"+se+"_")}catch{g&&g(Fe)}}if(ce){g=O.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,g}function Ll(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;bt||M(),Y||(bt(),Y=!0),V.add(c,o),o.v=0}}function zr(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=li(_(o.Fa,o),Ml(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Fl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=li(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),gs(this),Fl(this))};function Hr(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Fl(o){o.g=new xt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=At(o.qa);fe(c,"RID","rpc"),fe(c,"SID",o.K),fe(c,"AID",o.T),fe(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&fe(c,"TO",o.ja),fe(c,"TYPE","xmlhttp"),yi(o,c),o.m&&o.o&&Gr(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=hs(At(c)),d.m=null,d.P=!0,cl(d,o)}n.Za=function(){this.C!=null&&(this.C=null,gs(this),zr(this),ze(19))};function ys(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function xl(o,c){var d=null;if(o.g==c){ys(o),Hr(o),o.g=null;var g=2}else if(qr(o.h,c))d=c.D,gl(o.h,c),g=1;else return;if(o.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=o.B;g=rs(),je(g,new rl(g,d)),ms(o)}else Ll(o);else if(N=c.s,N==3||N==0&&0<c.X||!(g==1&&Df(o,c)||g==2&&zr(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),N){case 1:mn(o,5);break;case 4:mn(o,10);break;case 3:mn(o,6);break;default:mn(o,2)}}}function Ml(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function mn(o,c){if(o.j.info("Error code "+c),c==2){var d=_(o.fb,o),g=o.Xa;const N=!g;g=new gn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||cs(g,"https"),hs(g),N?Af(g.toString(),d):Nf(g.toString(),d)}else ze(2);o.G=0,o.l&&o.l.sa(c),Ul(o),Dl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function Ul(o){if(o.G=0,o.ka=[],o.l){const c=ml(o.h);(c.length!=0||o.i.length!=0)&&(S(o.ka,c),S(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Bl(o,c,d){var g=d instanceof gn?At(d):new gn(d);if(g.g!="")c&&(g.g=c+"."+g.g),us(g,g.s);else{var N=l.location;g=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var R=new gn(null);g&&cs(R,g),c&&(R.g=c),N&&us(R,N),d&&(R.l=d),g=R}return d=o.D,c=o.ya,d&&c&&fe(g,d,c),fe(g,"VER",o.la),yi(o,g),g}function ql(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new _e(new ds({eb:d})):new _e(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $l(){}n=$l.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _s(){}_s.prototype.g=function(o,c){return new Ze(o,c)};function Ze(o,c){Le.call(this),this.g=new kl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!q(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!q(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Vn(this)}C(Ze,Le),Ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){jr(this.g)},Ze.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Dr(o),o=d);c.i.push(new gf(c.Ya++,o)),c.G==3&&ms(c)},Ze.prototype.N=function(){this.g.l=null,delete this.j,jr(this.g),delete this.g,Ze.aa.N.call(this)};function Gl(o){Or.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(Gl,Or);function jl(){Lr.call(this),this.status=1}C(jl,Lr);function Vn(o){this.g=o}C(Vn,$l),Vn.prototype.ua=function(){je(this.g,"a")},Vn.prototype.ta=function(o){je(this.g,new Gl(o))},Vn.prototype.sa=function(o){je(this.g,new jl)},Vn.prototype.ra=function(){je(this.g,"b")},_s.prototype.createWebChannel=_s.prototype.g,Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,Ch=function(){return new _s},Rh=function(){return rs()},Nh=fn,No={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},os.NO_ERROR=0,os.TIMEOUT=8,os.HTTP_ERROR=6,Os=os,ol.COMPLETE="complete",Ah=ol,tl.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Le.prototype.listen=Le.prototype.K,Ei=tl,_e.prototype.listenOnce=_e.prototype.L,_e.prototype.getLastError=_e.prototype.Ka,_e.prototype.getLastErrorCode=_e.prototype.Ba,_e.prototype.getStatus=_e.prototype.Z,_e.prototype.getResponseJson=_e.prototype.Oa,_e.prototype.getResponseText=_e.prototype.oa,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Ha,bh=_e}).apply(typeof Ts<"u"?Ts:typeof self<"u"?self:typeof window<"u"?window:{});const bc="@firebase/firestore",Ac="4.8.0";/**
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
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
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
 */let ei="11.10.0";/**
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
 */const Nn=new zo("@firebase/firestore");function Fn(){return Nn.logLevel}function F(n,...e){if(Nn.logLevel<=te.DEBUG){const t=e.map(ia);Nn.debug(`Firestore (${ei}): ${n}`,...t)}}function Vt(n,...e){if(Nn.logLevel<=te.ERROR){const t=e.map(ia);Nn.error(`Firestore (${ei}): ${n}`,...t)}}function en(n,...e){if(Nn.logLevel<=te.WARN){const t=e.map(ia);Nn.warn(`Firestore (${ei}): ${n}`,...t)}}function ia(n){if(typeof n=="string")return n;try{/**
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
 */function W(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Ph(n,i,t)}function Ph(n,e,t){let i=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Vt(i),new Error(i)}function oe(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||Ph(e,s,i)}function X(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class St{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Sh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ue.UNAUTHENTICATED)))}shutdown(){}}class Oy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ly{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){oe(this.o===void 0,42304);let i=this.i;const s=u=>this.i!==i?(i=this.i,t(u)):Promise.resolve();let r=new St;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new St,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=r;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},l=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new St)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(oe(typeof i.accessToken=="string",31837,{l:i}),new Sh(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Ue(e)}}class Fy{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xy{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Fy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ue.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Nc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class My{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,st(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){oe(this.o===void 0,3512);const i=r=>{r.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.m;return this.m=r.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Nc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(oe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Nc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Uy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function kh(){return new TextEncoder}/**
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
 */class sa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Uy(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function J(n,e){return n<e?-1:n>e?1:0}function Ro(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),s=e.codePointAt(t);if(i!==s){if(i<128&&s<128)return J(i,s);{const r=kh(),a=By(r.encode(Rc(n,t)),r.encode(Rc(e,t)));return a!==0?a:J(i,s)}}t+=i>65535?2:1}return J(n.length,e.length)}function Rc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function By(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return J(n[t],e[t]);return J(n.length,e.length)}function Hn(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
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
 */const Cc="__name__";class gt{constructor(e,t,i){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&W(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return gt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gt?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=gt.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return J(e.length,t.length)}static compareSegments(e,t){const i=gt.isNumericId(e),s=gt.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?gt.extractNumericId(e).compare(gt.extractNumericId(t)):Ro(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jt.fromString(e.substring(4,e.length-2))}}class de extends gt{construct(e,t,i){return new de(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new de(t)}static emptyPath(){return new de([])}}const qy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends gt{construct(e,t,i){return new Ve(e,t,i)}static isValidIdentifier(e){return qy.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cc}static keyField(){return new Ve([Cc])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(r(),s++)}if(r(),a)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(de.fromString(e))}static fromName(e){return new j(de.fromString(e).popFirst(5))}static empty(){return new j(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return de.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new de(e.slice()))}}/**
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
 */function Dh(n,e,t){if(!t)throw new L(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function $y(n,e,t,i){if(e===!0&&i===!0)throw new L(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Pc(n){if(!j.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sc(n){if(j.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Vh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function dr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function He(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=dr(n);throw new L(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Gy(n,e){if(e<=0)throw new L(P.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ae(n,e){const t={typeString:n};return e&&(t.value=e),t}function Yi(n,e){if(!Vh(n))throw new L(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const a=n[i];if(s&&typeof a!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&a!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new L(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const kc=-62135596800,Dc=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Dc);return new pe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<kc)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dc}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Yi(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-kc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:Ae("string",pe._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
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
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new pe(0,0))}static max(){return new K(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Li=-1;function jy(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(i===1e9?new pe(t+1,0):new pe(t,i));return new tn(s,j.empty(),e)}function zy(n){return new tn(n.readTime,n.key,Li)}class tn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new tn(K.min(),j.empty(),Li)}static max(){return new tn(K.max(),j.empty(),Li)}}function Hy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
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
 */const Wy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ti(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Wy)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,i)=>{t(e)}))}static reject(e){return new k(((t,i)=>{i(e)}))}static waitFor(e){return new k(((t,i)=>{let s=0,r=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++r,a&&r===s&&t()}),(u=>i(u)))})),a=!0,r===s&&t()}))}static or(e){let t=k.resolve(!1);for(const i of e)t=t.next((s=>s?k.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new k(((i,s)=>{const r=e.length,a=new Array(r);let l=0;for(let u=0;u<r;u++){const h=u;t(e[h]).next((p=>{a[h]=p,++l,l===r&&i(a)}),(p=>s(p)))}}))}static doWhile(e,t){return new k(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function Ky(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ni(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}fr.ue=-1;/**
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
 */const ra=-1;function pr(n){return n==null}function Ks(n){return n===0&&1/n==-1/0}function Qy(n){return typeof n=="number"&&Number.isInteger(n)&&!Ks(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Oh="";function Xy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Vc(e)),e=Jy(n.get(t),e);return Vc(e)}function Jy(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case Oh:t+="";break;default:t+=r}}return t}function Vc(n){return n+Oh+""}/**
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
 */function Oc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Lh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ye{constructor(e,t){this.comparator=e,this.root=t||ke.EMPTY}insert(e,t){return new ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bs(this.root,e,this.comparator,!1)}getReverseIterator(){return new bs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bs(this.root,e,this.comparator,!0)}}class bs{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??ke.RED,this.left=s??ke.EMPTY,this.right=r??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new ke(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ke.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Re{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lc(this.data.getIterator())}getIteratorFrom(e){return new Lc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Re(this.comparator);return t.data=e,t}}class Lc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new tt([])}unionWith(e){let t=new Re(Ve.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new tt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hn(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Fh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Fh("Invalid base64 string: "+r):r}})(e);return new Oe(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let a=0;a<s.length;++a)r+=String.fromCharCode(s[a]);return r})(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const Zy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(n){if(oe(!!n,39018),typeof n=="string"){let e=0;const t=Zy.exec(n);if(oe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ie(n.seconds),nanos:Ie(n.nanos)}}function Ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sn(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
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
 */const xh="server_timestamp",Mh="__type__",Uh="__previous_value__",Bh="__local_write_time__";function oa(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mh])===null||t===void 0?void 0:t.stringValue)===xh}function gr(n){const e=n.mapValue.fields[Uh];return oa(e)?gr(e):e}function Fi(n){const e=nn(n.mapValue.fields[Bh].timestampValue);return new pe(e.seconds,e.nanos)}/**
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
 */class e_{constructor(e,t,i,s,r,a,l,u,h,p){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=p}}const Qs="(default)";class xi{constructor(e,t){this.projectId=e,this.database=t||Qs}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database===Qs}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qh="__type__",t_="__max__",As={mapValue:{}},$h="__vector__",Xs="value";function rn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oa(n)?4:i_(n)?9007199254740991:n_(n)?10:11:W(28295,{value:n})}function wt(n,e){if(n===e)return!0;const t=rn(n);if(t!==rn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fi(n).isEqual(Fi(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const a=nn(s.timestampValue),l=nn(r.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return sn(s.bytesValue).isEqual(sn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return Ie(s.geoPointValue.latitude)===Ie(r.geoPointValue.latitude)&&Ie(s.geoPointValue.longitude)===Ie(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return Ie(s.integerValue)===Ie(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const a=Ie(s.doubleValue),l=Ie(r.doubleValue);return a===l?Ks(a)===Ks(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Hn(n.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:case 11:return(function(s,r){const a=s.mapValue.fields||{},l=r.mapValue.fields||{};if(Oc(a)!==Oc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!wt(a[u],l[u])))return!1;return!0})(n,e);default:return W(52216,{left:n})}}function Mi(n,e){return(n.values||[]).find((t=>wt(t,e)))!==void 0}function Wn(n,e){if(n===e)return 0;const t=rn(n),i=rn(e);if(t!==i)return J(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return(function(r,a){const l=Ie(r.integerValue||r.doubleValue),u=Ie(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return Fc(n.timestampValue,e.timestampValue);case 4:return Fc(Fi(n),Fi(e));case 5:return Ro(n.stringValue,e.stringValue);case 6:return(function(r,a){const l=sn(r),u=sn(a);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(r,a){const l=r.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=J(l[h],u[h]);if(p!==0)return p}return J(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,a){const l=J(Ie(r.latitude),Ie(a.latitude));return l!==0?l:J(Ie(r.longitude),Ie(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return xc(n.arrayValue,e.arrayValue);case 10:return(function(r,a){var l,u,h,p;const m=r.fields||{},_=a.fields||{},b=(l=m[Xs])===null||l===void 0?void 0:l.arrayValue,C=(u=_[Xs])===null||u===void 0?void 0:u.arrayValue,D=J(((h=b?.values)===null||h===void 0?void 0:h.length)||0,((p=C?.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:xc(b,C)})(n.mapValue,e.mapValue);case 11:return(function(r,a){if(r===As.mapValue&&a===As.mapValue)return 0;if(r===As.mapValue)return 1;if(a===As.mapValue)return-1;const l=r.fields||{},u=Object.keys(l),h=a.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const _=Ro(u[m],p[m]);if(_!==0)return _;const b=Wn(l[u[m]],h[p[m]]);if(b!==0)return b}return J(u.length,p.length)})(n.mapValue,e.mapValue);default:throw W(23264,{le:t})}}function Fc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=nn(n),i=nn(e),s=J(t.seconds,i.seconds);return s!==0?s:J(t.nanos,i.nanos)}function xc(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=Wn(t[s],i[s]);if(r)return r}return J(t.length,i.length)}function Yn(n){return Co(n)}function Co(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=nn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return sn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return j.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Co(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const a of i)r?r=!1:s+=",",s+=`${a}:${Co(t.fields[a])}`;return s+"}"})(n.mapValue):W(61005,{value:n})}function Ls(n){switch(rn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gr(n);return e?16+Ls(e):16;case 5:return 2*n.stringValue.length;case 6:return sn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Ls(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return un(i.fields,((r,a)=>{s+=r.length+Ls(a)})),s})(n.mapValue);default:throw W(13486,{value:n})}}function Mc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Po(n){return!!n&&"integerValue"in n}function aa(n){return!!n&&"arrayValue"in n}function Uc(n){return!!n&&"nullValue"in n}function Bc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fs(n){return!!n&&"mapValue"in n}function n_(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[qh])===null||t===void 0?void 0:t.stringValue)===$h}function Ci(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return un(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Ci(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ci(n.arrayValue.values[t]);return e}return Object.assign({},n)}function i_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===t_}/**
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
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Fs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(t)}setAll(e){let t=Ve.emptyPath(),i={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,i,s),i={},s=[],t=l.popLast()}a?i[l.lastSegment()]=Ci(a):s.push(l.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());Fs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Fs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){un(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new Je(Ci(this.value))}}function Gh(n){const e=[];return un(n.fields,((t,i)=>{const s=new Ve([t]);if(Fs(i)){const r=Gh(i.mapValue).fields;if(r.length===0)e.push(s);else for(const a of r)e.push(s.child(a))}else e.push(s)})),new tt(e)}/**
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
 */class Be{constructor(e,t,i,s,r,a,l){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Be(e,0,K.min(),K.min(),K.min(),Je.empty(),0)}static newFoundDocument(e,t,i,s){return new Be(e,1,t,K.min(),i,s,0)}static newNoDocument(e,t){return new Be(e,2,t,K.min(),K.min(),Je.empty(),0)}static newUnknownDocument(e,t){return new Be(e,3,t,K.min(),K.min(),Je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Js{constructor(e,t){this.position=e,this.inclusive=t}}function qc(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],a=n.position[s];if(r.field.isKeyField()?i=j.comparator(j.fromName(a.referenceValue),t.key):i=Wn(a,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function $c(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!wt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ui{constructor(e,t="asc"){this.field=e,this.dir=t}}function s_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class jh{}class be extends jh{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new o_(e,t,i):t==="array-contains"?new c_(e,i):t==="in"?new u_(e,i):t==="not-in"?new h_(e,i):t==="array-contains-any"?new d_(e,i):new be(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new a_(e,i):new l_(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Wn(t,this.value)):t!==null&&rn(this.value)===rn(t)&&this.matchesComparison(Wn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ft extends jh{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new ft(e,t)}matches(e){return zh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function zh(n){return n.op==="and"}function Hh(n){return r_(n)&&zh(n)}function r_(n){for(const e of n.filters)if(e instanceof ft)return!1;return!0}function So(n){if(n instanceof be)return n.field.canonicalString()+n.op.toString()+Yn(n.value);if(Hh(n))return n.filters.map((e=>So(e))).join(",");{const e=n.filters.map((t=>So(t))).join(",");return`${n.op}(${e})`}}function Wh(n,e){return n instanceof be?(function(i,s){return s instanceof be&&i.op===s.op&&i.field.isEqual(s.field)&&wt(i.value,s.value)})(n,e):n instanceof ft?(function(i,s){return s instanceof ft&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,a,l)=>r&&Wh(a,s.filters[l])),!0):!1})(n,e):void W(19439)}function Yh(n){return n instanceof be?(function(t){return`${t.field.canonicalString()} ${t.op} ${Yn(t.value)}`})(n):n instanceof ft?(function(t){return t.op.toString()+" {"+t.getFilters().map(Yh).join(" ,")+"}"})(n):"Filter"}class o_ extends be{constructor(e,t,i){super(e,t,i),this.key=j.fromName(i.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class a_ extends be{constructor(e,t){super(e,"in",t),this.keys=Kh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class l_ extends be{constructor(e,t){super(e,"not-in",t),this.keys=Kh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Kh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>j.fromName(i.referenceValue)))}class c_ extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return aa(t)&&Mi(t.arrayValue,this.value)}}class u_ extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Mi(this.value.arrayValue,t)}}class h_ extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Mi(this.value.arrayValue,t)}}class d_ extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!aa(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Mi(this.value.arrayValue,i)))}}/**
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
 */class f_{constructor(e,t=null,i=[],s=[],r=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=l,this.Pe=null}}function Gc(n,e=null,t=[],i=[],s=null,r=null,a=null){return new f_(n,e,t,i,s,r,a)}function la(n){const e=X(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>So(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),pr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Yn(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Yn(i))).join(",")),e.Pe=t}return e.Pe}function ca(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!s_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$c(n.startAt,e.startAt)&&$c(n.endAt,e.endAt)}function ko(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ii{constructor(e,t=null,i=[],s=[],r=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function p_(n,e,t,i,s,r,a,l){return new ii(n,e,t,i,s,r,a,l)}function mr(n){return new ii(n)}function jc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qh(n){return n.collectionGroup!==null}function Pi(n){const e=X(n);if(e.Te===null){e.Te=[];const t=new Set;for(const r of e.explicitOrderBy)e.Te.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Re(Ve.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Te.push(new Ui(r,i))})),t.has(Ve.keyField().canonicalString())||e.Te.push(new Ui(Ve.keyField(),i))}return e.Te}function _t(n){const e=X(n);return e.Ie||(e.Ie=g_(e,Pi(n))),e.Ie}function g_(n,e){if(n.limitType==="F")return Gc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new Ui(s.field,r)}));const t=n.endAt?new Js(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Js(n.startAt.position,n.startAt.inclusive):null;return Gc(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Do(n,e){const t=n.filters.concat([e]);return new ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Zs(n,e,t){return new ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yr(n,e){return ca(_t(n),_t(e))&&n.limitType===e.limitType}function Xh(n){return`${la(_t(n))}|lt:${n.limitType}`}function xn(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>Yh(s))).join(", ")}]`),pr(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>Yn(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>Yn(s))).join(",")),`Target(${i})`})(_t(n))}; limitType=${n.limitType})`}function _r(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):j.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of Pi(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(a,l,u){const h=qc(a,l,u);return a.inclusive?h<=0:h<0})(i.startAt,Pi(i),s)||i.endAt&&!(function(a,l,u){const h=qc(a,l,u);return a.inclusive?h>=0:h>0})(i.endAt,Pi(i),s))})(n,e)}function m_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jh(n){return(e,t)=>{let i=!1;for(const s of Pi(n)){const r=y_(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function y_(n,e,t){const i=n.field.isKeyField()?j.comparator(e.key,t.key):(function(r,a,l){const u=a.data.field(r),h=l.data.field(r);return u!==null&&h!==null?Wn(u,h):W(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return W(19790,{direction:n.dir})}}/**
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
 */class Pn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){un(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return Lh(this.inner)}size(){return this.innerSize}}/**
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
 */const __=new ye(j.comparator);function Ot(){return __}const Zh=new ye(j.comparator);function wi(...n){let e=Zh;for(const t of n)e=e.insert(t.key,t);return e}function ed(n){let e=Zh;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function vn(){return Si()}function td(){return Si()}function Si(){return new Pn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const v_=new ye(j.comparator),I_=new Re(j.comparator);function ne(...n){let e=I_;for(const t of n)e=e.add(t);return e}const E_=new Re(J);function w_(){return E_}/**
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
 */function ua(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ks(e)?"-0":e}}function nd(n){return{integerValue:""+n}}function T_(n,e){return Qy(e)?nd(e):ua(n,e)}/**
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
 */class vr{constructor(){this._=void 0}}function b_(n,e,t){return n instanceof er?(function(s,r){const a={fields:{[Mh]:{stringValue:xh},[Bh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&oa(r)&&(r=gr(r)),r&&(a.fields[Uh]=r),{mapValue:a}})(t,e):n instanceof Bi?sd(n,e):n instanceof qi?rd(n,e):(function(s,r){const a=id(s,r),l=zc(a)+zc(s.Ee);return Po(a)&&Po(s.Ee)?nd(l):ua(s.serializer,l)})(n,e)}function A_(n,e,t){return n instanceof Bi?sd(n,e):n instanceof qi?rd(n,e):t}function id(n,e){return n instanceof tr?(function(i){return Po(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class er extends vr{}class Bi extends vr{constructor(e){super(),this.elements=e}}function sd(n,e){const t=od(e);for(const i of n.elements)t.some((s=>wt(s,i)))||t.push(i);return{arrayValue:{values:t}}}class qi extends vr{constructor(e){super(),this.elements=e}}function rd(n,e){let t=od(e);for(const i of n.elements)t=t.filter((s=>!wt(s,i)));return{arrayValue:{values:t}}}class tr extends vr{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function zc(n){return Ie(n.integerValue||n.doubleValue)}function od(n){return aa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function N_(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof Bi&&s instanceof Bi||i instanceof qi&&s instanceof qi?Hn(i.elements,s.elements,wt):i instanceof tr&&s instanceof tr?wt(i.Ee,s.Ee):i instanceof er&&s instanceof er})(n.transform,e.transform)}class R_{constructor(e,t){this.version=e,this.transformResults=t}}class We{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new We}static exists(e){return new We(void 0,e)}static updateTime(e){return new We(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ir{}function ad(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Er(n.key,We.none()):new Ki(n.key,n.data,We.none());{const t=n.data,i=Je.empty();let s=new Re(Ve.comparator);for(let r of e.fields)if(!s.has(r)){let a=t.field(r);a===null&&r.length>1&&(r=r.popLast(),a=t.field(r)),a===null?i.delete(r):i.set(r,a),s=s.add(r)}return new hn(n.key,i,new tt(s.toArray()),We.none())}}function C_(n,e,t){n instanceof Ki?(function(s,r,a){const l=s.value.clone(),u=Wc(s.fieldTransforms,r,a.transformResults);l.setAll(u),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof hn?(function(s,r,a){if(!xs(s.precondition,r))return void r.convertToUnknownDocument(a.version);const l=Wc(s.fieldTransforms,r,a.transformResults),u=r.data;u.setAll(ld(s)),u.setAll(l),r.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function ki(n,e,t,i){return n instanceof Ki?(function(r,a,l,u){if(!xs(r.precondition,a))return l;const h=r.value.clone(),p=Yc(r.fieldTransforms,u,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,i):n instanceof hn?(function(r,a,l,u){if(!xs(r.precondition,a))return l;const h=Yc(r.fieldTransforms,u,a),p=a.data;return p.setAll(ld(r)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((m=>m.field)))})(n,e,t,i):(function(r,a,l){return xs(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function P_(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=id(i.transform,s||null);r!=null&&(t===null&&(t=Je.empty()),t.set(i.field,r))}return t||null}function Hc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Hn(i,s,((r,a)=>N_(r,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ki extends Ir{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hn extends Ir{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ld(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Wc(n,e,t){const i=new Map;oe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const r=n[s],a=r.transform,l=e.data.field(r.field);i.set(r.field,A_(a,l,t[s]))}return i}function Yc(n,e,t){const i=new Map;for(const s of n){const r=s.transform,a=t.data.field(s.field);i.set(s.field,b_(r,a,e))}return i}class Er extends Ir{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class S_ extends Ir{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class k_{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&C_(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ki(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ki(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=td();return this.mutations.forEach((s=>{const r=e.get(s.key),a=r.overlayedDocument;let l=this.applyToLocalView(a,r.mutatedFields);l=t.has(s.key)?null:l;const u=ad(a,l);u!==null&&i.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(K.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ne())}isEqual(e){return this.batchId===e.batchId&&Hn(this.mutations,e.mutations,((t,i)=>Hc(t,i)))&&Hn(this.baseMutations,e.baseMutations,((t,i)=>Hc(t,i)))}}class ha{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){oe(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let s=(function(){return v_})();const r=e.mutations;for(let a=0;a<r.length;a++)s=s.insert(r[a].key,i[a].version);return new ha(e,t,i,s)}}/**
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
 */class D_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class V_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Te,ie;function O_(n){switch(n){case P.OK:return W(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function cd(n){if(n===void 0)return Vt("GRPC error has no .code"),P.UNKNOWN;switch(n){case Te.OK:return P.OK;case Te.CANCELLED:return P.CANCELLED;case Te.UNKNOWN:return P.UNKNOWN;case Te.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Te.INTERNAL:return P.INTERNAL;case Te.UNAVAILABLE:return P.UNAVAILABLE;case Te.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Te.NOT_FOUND:return P.NOT_FOUND;case Te.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Te.ABORTED:return P.ABORTED;case Te.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Te.DATA_LOSS:return P.DATA_LOSS;default:return W(39323,{code:n})}}(ie=Te||(Te={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const L_=new Jt([4294967295,4294967295],0);function Kc(n){const e=kh().encode(n),t=new Th;return t.update(e),new Uint8Array(t.digest())}function Qc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Jt([t,i],0),new Jt([s,r],0)]}class da{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ti(`Invalid padding: ${t}`);if(i<0)throw new Ti(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ti(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ti(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Jt.fromNumber(this.fe)}pe(e,t,i){let s=e.add(t.multiply(Jt.fromNumber(i)));return s.compare(L_)===1&&(s=new Jt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Kc(e),[i,s]=Qc(t);for(let r=0;r<this.hashCount;r++){const a=this.pe(i,s,r);if(!this.ye(a))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),a=new da(r,s,t);return i.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=Kc(e),[i,s]=Qc(t);for(let r=0;r<this.hashCount;r++){const a=this.pe(i,s,r);this.we(a)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wr{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new wr(K.min(),s,new ye(J),Ot(),ne())}}class Qi{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Qi(i,t,ne(),ne(),ne())}}/**
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
 */class Ms{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=s}}class ud{constructor(e,t){this.targetId=e,this.De=t}}class hd{constructor(e,t,i=Oe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Xc{constructor(){this.ve=0,this.Ce=Jc(),this.Fe=Oe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ne(),t=ne(),i=ne();return this.Ce.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:W(38017,{changeType:r})}})),new Qi(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Jc()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class F_{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ot(),this.je=Ns(),this.Je=Ns(),this.He=new ye(J)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:W(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,i=e.De.count,s=this.st(t);if(s){const r=s.target;if(ko(r))if(i===0){const a=new j(r.path);this.Xe(t,a,Be.newNoDocument(a,K.min()))}else oe(i===1,20013,{expectedCount:i});else{const a=this.ot(t);if(a!==i){const l=this._t(e),u=l?this.ut(l,e,a):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let a,l;try{a=sn(i).toUint8Array()}catch(u){if(u instanceof Fh)return en("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new da(a,s,r)}catch(u){return en(u instanceof Ti?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,r,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((r,a)=>{const l=this.st(a);if(l){if(r.current&&ko(l.target)){const u=new j(l.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Be.newNoDocument(u,e))}r.Ne&&(t.set(a,r.Le()),r.ke())}}));let i=ne();this.Je.forEach(((r,a)=>{let l=!0;a.forEachWhile((u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(i=i.add(r))})),this.ze.forEach(((r,a)=>a.setReadTime(e)));const s=new wr(e,t,this.He,this.ze,i);return this.ze=Ot(),this.je=Ns(),this.Je=Ns(),this.He=new ye(J),s}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Xc,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Re(J),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Re(J),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Xc),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ns(){return new ye(j.comparator)}function Jc(){return new ye(j.comparator)}const x_={asc:"ASCENDING",desc:"DESCENDING"},M_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},U_={and:"AND",or:"OR"};class B_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vo(n,e){return n.useProto3Json||pr(e)?e:{value:e}}function nr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function q_(n,e){return nr(n,e.toTimestamp())}function vt(n){return oe(!!n,49232),K.fromTimestamp((function(t){const i=nn(t);return new pe(i.seconds,i.nanos)})(n))}function fa(n,e){return Oo(n,e).canonicalString()}function Oo(n,e){const t=(function(s){return new de(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function fd(n){const e=de.fromString(n);return oe(_d(e),10190,{key:e.toString()}),e}function Lo(n,e){return fa(n.databaseId,e.path)}function to(n,e){const t=fd(e);if(t.get(1)!==n.databaseId.projectId)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(gd(t))}function pd(n,e){return fa(n.databaseId,e)}function $_(n){const e=fd(n);return e.length===4?de.emptyPath():gd(e)}function Fo(n){return new de(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function gd(n){return oe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Zc(n,e,t){return{name:Lo(n,e),fields:t.value.mapValue.fields}}function G_(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:W(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(h,p){return h.useProto3Json?(oe(p===void 0||typeof p=="string",58123),Oe.fromBase64String(p||"")):(oe(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Oe.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const p=h.code===void 0?P.UNKNOWN:cd(h.code);return new L(p,h.message||"")})(a);t=new hd(i,s,r,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=to(n,i.document.name),r=vt(i.document.updateTime),a=i.document.createTime?vt(i.document.createTime):K.min(),l=new Je({mapValue:{fields:i.document.fields}}),u=Be.newFoundDocument(s,r,a,l),h=i.targetIds||[],p=i.removedTargetIds||[];t=new Ms(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=to(n,i.document),r=i.readTime?vt(i.readTime):K.min(),a=Be.newNoDocument(s,r),l=i.removedTargetIds||[];t=new Ms([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=to(n,i.document),r=i.removedTargetIds||[];t=new Ms([],r,s,null)}else{if(!("filter"in e))return W(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,a=new V_(s,r),l=i.targetId;t=new ud(l,a)}}return t}function j_(n,e){let t;if(e instanceof Ki)t={update:Zc(n,e.key,e.value)};else if(e instanceof Er)t={delete:Lo(n,e.key)};else if(e instanceof hn)t={update:Zc(n,e.key,e.data),updateMask:Z_(e.fieldMask)};else{if(!(e instanceof S_))return W(16599,{Rt:e.type});t={verify:Lo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(r,a){const l=a.transform;if(l instanceof er)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Bi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof qi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tr)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw W(20930,{transform:a.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:q_(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W(27497)})(n,e.precondition)),t}function z_(n,e){return n&&n.length>0?(oe(e!==void 0,14353),n.map((t=>(function(s,r){let a=s.updateTime?vt(s.updateTime):vt(r);return a.isEqual(K.min())&&(a=vt(r)),new R_(a,s.transformResults||[])})(t,e)))):[]}function H_(n,e){return{documents:[pd(n,e.path)]}}function W_(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=pd(n,s);const r=(function(h){if(h.length!==0)return yd(ft.create(h,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const a=(function(h){if(h.length!==0)return h.map((p=>(function(_){return{field:Mn(_.field),direction:Q_(_.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Vo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function Y_(n){let e=$_(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){oe(i===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let r=[];t.where&&(r=(function(m){const _=md(m);return _ instanceof ft&&Hh(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((_=>(function(C){return new Ui(Un(C.field),(function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(_)))})(t.orderBy));let l=null;t.limit&&(l=(function(m){let _;return _=typeof m=="object"?m.value:m,pr(_)?null:_})(t.limit));let u=null;t.startAt&&(u=(function(m){const _=!!m.before,b=m.values||[];return new Js(b,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(m){const _=!m.before,b=m.values||[];return new Js(b,_)})(t.endAt)),p_(e,s,a,r,l,"F",u,h)}function K_(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function md(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Un(t.unaryFilter.field);return be.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Un(t.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Un(t.unaryFilter.field);return be.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Un(t.unaryFilter.field);return be.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}})(n):n.fieldFilter!==void 0?(function(t){return be.create(Un(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ft.create(t.compositeFilter.filters.map((i=>md(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W(1026)}})(t.compositeFilter.op))})(n):W(30097,{filter:n})}function Q_(n){return x_[n]}function X_(n){return M_[n]}function J_(n){return U_[n]}function Mn(n){return{fieldPath:n.canonicalString()}}function Un(n){return Ve.fromServerFormat(n.fieldPath)}function yd(n){return n instanceof be?(function(t){if(t.op==="=="){if(Bc(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NAN"}};if(Uc(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bc(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NOT_NAN"}};if(Uc(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mn(t.field),op:X_(t.op),value:t.value}}})(n):n instanceof ft?(function(t){const i=t.getFilters().map((s=>yd(s)));return i.length===1?i[0]:{compositeFilter:{op:J_(t.op),filters:i}}})(n):W(54877,{filter:n})}function Z_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function _d(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Wt{constructor(e,t,i,s,r=K.min(),a=K.min(),l=Oe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class e0{constructor(e){this.gt=e}}function t0(n){const e=Y_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zs(e,e.limit,"L"):e}/**
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
 */class n0{constructor(){this.Dn=new i0}addToCollectionParentIndex(e,t){return this.Dn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(tn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(tn.min())}updateCollectionGroup(e,t,i){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class i0{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Re(de.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Re(de.comparator)).toArray()}}/**
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
 */const eu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vd=41943040;class Qe{static withCacheSize(e){return new Qe(e,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Qe.DEFAULT_COLLECTION_PERCENTILE=10,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qe.DEFAULT=new Qe(vd,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qe.DISABLED=new Qe(-1,0,0);/**
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
 */class Kn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Kn(0)}static ur(){return new Kn(-1)}}/**
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
 */const tu="LruGarbageCollector",s0=1048576;function nu([n,e],[t,i]){const s=J(n,t);return s===0?J(e,i):s}class r0{constructor(e){this.Tr=e,this.buffer=new Re(nu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();nu(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class o0{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){F(tu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ni(t)?F(tu,"Ignoring IndexedDB error during garbage collection: ",t):await ti(t)}await this.Rr(3e5)}))}}class a0{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(fr.ue);const i=new r0(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(eu)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eu):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,s,r,a,l,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(i=m,l=Date.now(),this.removeTargets(e,i,t)))).next((m=>(r=m,u=Date.now(),this.removeOrphanedDocuments(e,i)))).next((m=>(h=Date.now(),Fn()<=te.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${r} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:m}))))}}function l0(n,e){return new a0(n,e)}/**
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
 */class c0{constructor(){this.changes=new Pn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?k.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class u0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class h0{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&ki(i.mutation,s,tt.empty(),pe.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=ne()){const s=vn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let a=wi();return r.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const i=vn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,ne())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,i,s){let r=Ot();const a=Si(),l=(function(){return Si()})();return t.forEach(((u,h)=>{const p=i.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof hn)?r=r.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),ki(p.mutation,h,p.mutation.getFieldMask(),pe.now())):a.set(h.key,tt.empty())})),this.recalculateAndSaveOverlays(e,r).next((u=>(u.forEach(((h,p)=>a.set(h,p))),t.forEach(((h,p)=>{var m;return l.set(h,new u0(p,(m=a.get(h))!==null&&m!==void 0?m:null))})),l)))}recalculateAndSaveOverlays(e,t){const i=Si();let s=new ye(((a,l)=>a-l)),r=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let p=i.get(u)||tt.empty();p=l.applyToLocalView(h,p),i.set(u,p);const m=(s.get(l.batchId)||ne()).add(u);s=s.insert(l.batchId,m)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=td();p.forEach((_=>{if(!r.has(_)){const b=ad(t.get(_),i.get(_));b!==null&&m.set(_,b),r=r.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return k.waitFor(a)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return(function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Qh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const a=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):k.resolve(vn());let l=Li,u=r;return a.next((h=>k.forEach(h,((p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),r.get(p)?k.resolve():this.remoteDocumentCache.getEntry(e,p).next((_=>{u=u.insert(p,_)}))))).next((()=>this.populateOverlays(e,h,r))).next((()=>this.computeViews(e,u,h,ne()))).next((p=>({batchId:l,changes:ed(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next((i=>{let s=wi();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let a=wi();return this.indexManager.getCollectionParents(e,r).next((l=>k.forEach(l,(u=>{const h=(function(m,_){return new ii(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next((p=>{p.forEach(((m,_)=>{a=a.insert(m,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((a=>{r.forEach(((u,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,Be.newInvalidDocument(p)))}));let l=wi();return a.forEach(((u,h)=>{const p=r.get(u);p!==void 0&&ki(p.mutation,h,tt.empty(),pe.now()),_r(t,h)&&(l=l.insert(u,h))})),l}))}}/**
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
 */class d0{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return k.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:vt(s.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:t0(s.bundledQuery),readTime:vt(s.readTime)}})(t)),k.resolve()}}/**
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
 */class f0{constructor(){this.overlays=new ye(j.comparator),this.kr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const i=vn();return k.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.wt(e,t,r)})),k.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.kr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.kr.delete(i)),k.resolve()}getOverlaysForCollection(e,t,i){const s=vn(),r=t.length+1,a=new j(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>i&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new ye(((h,p)=>h-p));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>i){let p=r.get(h.largestBatchId);p===null&&(p=vn(),r=r.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=vn(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,p)=>l.set(h,p))),!(l.size()>=s)););return k.resolve(l)}wt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(i.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new D_(t,i));let r=this.kr.get(t);r===void 0&&(r=ne(),this.kr.set(t,r)),this.kr.set(t,r.add(i.key))}}/**
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
 */class p0{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class pa{constructor(){this.qr=new Re(Ce.Qr),this.$r=new Re(Ce.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Ce(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ce(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new j(new de([])),i=new Ce(t,e),s=new Ce(t,e+1),r=[];return this.$r.forEachInRange([i,s],(a=>{this.Wr(a),r.push(a.key)})),r}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new j(new de([])),i=new Ce(t,e),s=new Ce(t,e+1);let r=ne();return this.$r.forEachInRange([i,s],(a=>{r=r.add(a.key)})),r}containsKey(e){const t=new Ce(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ce{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return j.comparator(e.key,t.key)||J(e.Hr,t.Hr)}static Ur(e,t){return J(e.Hr,t.Hr)||j.comparator(e.key,t.key)}}/**
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
 */class g0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Re(Ce.Qr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new k_(r,t,i,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new Ce(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return k.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?ra:this.er-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),r=[];return this.Yr.forEachInRange([i,s],(a=>{const l=this.Zr(a.Hr);r.push(l)})),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Re(J);return t.forEach((s=>{const r=new Ce(s,0),a=new Ce(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([r,a],(l=>{i=i.add(l.Hr)}))})),k.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;j.isDocumentKey(r)||(r=r.child(""));const a=new Ce(new j(r),0);let l=new Re(J);return this.Yr.forEachWhile((u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Hr)),!0)}),a),k.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){oe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return k.forEach(t.mutations,(s=>{const r=new Ce(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Ce(t,0),s=this.Yr.firstAfterOrEqual(i);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class m0{constructor(e){this.ni=e,this.docs=(function(){return new ye(j.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return k.resolve(i?i.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let i=Ot();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Be.newInvalidDocument(s))})),k.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=Ot();const a=t.path,l=new j(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Hy(zy(p),i)<=0||(s.has(p.key)||_r(t,p))&&(r=r.insert(p.key,p.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,t,i,s){W(9500)}ri(e,t){return k.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new y0(this)}getSize(e){return k.resolve(this.size)}}class y0 extends c0{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(i)})),k.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class _0{constructor(e){this.persistence=e,this.ii=new Pn((t=>la(t)),ca),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.si=0,this.oi=new pa,this.targetCount=0,this._i=Kn.ar()}forEachTarget(e,t){return this.ii.forEach(((i,s)=>t(s))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),k.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Kn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.hr(t),k.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&i.get(l.targetId)===null&&(this.ii.delete(a),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),k.waitFor(r).next((()=>s))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return k.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),k.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((a=>{r.push(s.markPotentiallyOrphaned(e,a))})),k.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return k.resolve(i)}containsKey(e,t){return k.resolve(this.oi.containsKey(t))}}/**
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
 */class Id{constructor(e,t){this.ai={},this.overlays={},this.ui=new fr(0),this.ci=!1,this.ci=!0,this.li=new p0,this.referenceDelegate=e(this),this.hi=new _0(this),this.indexManager=new n0,this.remoteDocumentCache=(function(s){return new m0(s)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new e0(t),this.Ti=new d0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new f0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new g0(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){F("MemoryPersistence","Starting transaction:",e);const s=new v0(this.ui.next());return this.referenceDelegate.Ii(),i(s).next((r=>this.referenceDelegate.di(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return k.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class v0 extends Yy{constructor(e){super(),this.currentSequenceNumber=e}}class ga{constructor(e){this.persistence=e,this.Ai=new pa,this.Ri=null}static Vi(e){return new ga(e)}get mi(){if(this.Ri)return this.Ri;throw W(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),k.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.mi.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,(i=>{const s=j.fromPath(i);return this.fi(e,s).next((r=>{r||t.removeEntry(s,K.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return k.or([()=>k.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ir{constructor(e,t){this.persistence=e,this.gi=new Pn((i=>Xy(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=l0(this,t)}static Vi(e,t){return new ir(e,t)}Ii(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return k.forEach(this.gi,((i,s)=>this.Sr(e,i,s).next((r=>r?k.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(i++,r.removeEntry(a,K.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),k.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ls(e.data.value)),t}Sr(e,t,i){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return k.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ma{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=s}static Es(e,t){let i=ne(),s=ne();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new ma(e,t.fromCache,i,s)}}/**
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
 */class I0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class E0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return tp()?8:Ky($e())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.ps(e,t).next((a=>{r.result=a})).next((()=>{if(!r.result)return this.ys(e,t,s,i).next((a=>{r.result=a}))})).next((()=>{if(r.result)return;const a=new I0;return this.ws(e,t,a).next((l=>{if(r.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>r.result))}Ss(e,t,i,s){return i.documentReadCount<this.Vs?(Fn()<=te.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",xn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(Fn()<=te.DEBUG&&F("QueryEngine","Query:",xn(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.fs*s?(Fn()<=te.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",xn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_t(t))):k.resolve())}ps(e,t){if(jc(t))return k.resolve(null);let i=_t(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Zs(t,null,"F"),i=_t(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const a=ne(...r);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,i).next((u=>{const h=this.bs(t,l);return this.Ds(t,h,a,u.readTime)?this.ps(e,Zs(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ys(e,t,i,s){return jc(t)||s.isEqual(K.min())?k.resolve(null):this.gs.getDocuments(e,i).next((r=>{const a=this.bs(t,r);return this.Ds(t,a,i,s)?k.resolve(null):(Fn()<=te.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xn(t)),this.vs(e,a,t,jy(s,Li)).next((l=>l)))}))}bs(e,t){let i=new Re(Jh(e));return t.forEach(((s,r)=>{_r(e,r)&&(i=i.add(r))})),i}Ds(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ws(e,t,i){return Fn()<=te.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",xn(t)),this.gs.getDocumentsMatchingQuery(e,t,tn.min(),i)}vs(e,t,i,s){return this.gs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((a=>{r=r.insert(a.key,a)})),r)))}}/**
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
 */const ya="LocalStore",w0=3e8;class T0{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new ye(J),this.Ms=new Pn((r=>la(r)),ca),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new h0(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function b0(n,e,t,i){return new T0(n,e,t,i)}async function Ed(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const a=[],l=[];let u=ne();for(const h of s){a.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of r){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(i,u).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function A0(n,e){const t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const s=e.batch.keys(),r=t.Os.newChangeBuffer({trackRemovals:!0});return(function(l,u,h,p){const m=h.batch,_=m.keys();let b=k.resolve();return _.forEach((C=>{b=b.next((()=>p.getEntry(u,C))).next((D=>{const S=h.docVersions.get(C);oe(S!==null,48541),D.version.compareTo(S)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),p.addEntry(D)))}))})),b.next((()=>l.mutationQueue.removeMutationBatch(u,m)))})(t,i,e,r).next((()=>r.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(i,s)))}))}function wd(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function N0(n,e){const t=X(n),i=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const l=[];e.targetChanges.forEach(((p,m)=>{const _=s.get(m);if(!_)return;l.push(t.hi.removeMatchingKeys(r,p.removedDocuments,m).next((()=>t.hi.addMatchingKeys(r,p.addedDocuments,m))));let b=_.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken(Oe.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,i)),s=s.insert(m,b),(function(D,S,B){return D.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=w0?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(_,b,p)&&l.push(t.hi.updateTargetData(r,b))}));let u=Ot(),h=ne();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,p))})),l.push(R0(r,a,e.documentUpdates).next((p=>{u=p.Ls,h=p.ks}))),!i.isEqual(K.min())){const p=t.hi.getLastRemoteSnapshotVersion(r).next((m=>t.hi.setTargetsMetadata(r,r.currentSequenceNumber,i)));l.push(p)}return k.waitFor(l).next((()=>a.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,u,h))).next((()=>u))})).then((r=>(t.Fs=s,r)))}function R0(n,e,t){let i=ne(),s=ne();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let a=Ot();return t.forEach(((l,u)=>{const h=r.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):F(ya,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)})),{Ls:a,ks:s}}))}function C0(n,e){const t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=ra),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function P0(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.hi.getTargetData(i,e).next((r=>r?(s=r,k.resolve(s)):t.hi.allocateTargetId(i).next((a=>(s=new Wt(e,a,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.Fs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function xo(n,e,t){const i=X(n),s=i.Fs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(a=>i.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ni(a))throw a;F(ya,`Failed to update sequence numbers for target ${e}: ${a}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(s.target)}function iu(n,e,t){const i=X(n);let s=K.min(),r=ne();return i.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,h,p){const m=X(u),_=m.Ms.get(p);return _!==void 0?k.resolve(m.Fs.get(_)):m.hi.getTargetData(h,p)})(i,a,_t(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{r=u}))})).next((()=>i.Cs.getDocumentsMatchingQuery(a,e,t?s:K.min(),t?r:ne()))).next((l=>(S0(i,m_(e),l),{documents:l,qs:r})))))}function S0(n,e,t){let i=n.xs.get(e)||K.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.xs.set(e,i)}class su{constructor(){this.activeTargetIds=w_()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class k0{constructor(){this.Fo=new su,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new su,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class D0{xo(e){}shutdown(){}}/**
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
 */const ru="ConnectivityMonitor";class ou{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){F(ru,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){F(ru,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rs=null;function Mo(){return Rs===null?Rs=(function(){return 268435456+Math.round(2147483648*Math.random())})():Rs++,"0x"+Rs.toString(16)}/**
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
 */const no="RestConnection",V0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class O0{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.Ko=this.databaseId.database===Qs?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const a=Mo(),l=this.Go(e,t.toUriEncodedString());F(no,`Sending RPC '${e}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,r);const{host:h}=new URL(l),p=Xn(h);return this.jo(e,l,u,i,p).then((m=>(F(no,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw en(no,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",i),m}))}Jo(e,t,i,s,r,a){return this.Wo(e,t,i,s,r)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ei})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Go(e,t){const i=V0[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
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
 */class L0{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Me="WebChannelConnection";class F0 extends O0{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,s,r){const a=Mo();return new Promise(((l,u)=>{const h=new bh;h.setWithCredentials(!0),h.listenOnce(Ah.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Os.NO_ERROR:const m=h.getResponseJson();F(Me,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case Os.TIMEOUT:F(Me,`RPC '${e}' ${a} timed out`),u(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case Os.HTTP_ERROR:const _=h.getStatus();if(F(Me,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const C=b?.error;if(C&&C.status&&C.message){const D=(function(B){const q=B.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(q)>=0?q:P.UNKNOWN})(C.status);u(new L(D,C.message))}else u(new L(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new L(P.UNAVAILABLE,"Connection failed."));break;default:W(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{F(Me,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(s);F(Me,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",p,i,15)}))}P_(e,t,i){const s=Mo(),r=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ch(),l=Rh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,i),u.encodeInitMessageHeaders=!0;const p=r.join("");F(Me,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=a.createWebChannel(p,u);this.T_(m);let _=!1,b=!1;const C=new L0({Ho:S=>{b?F(Me,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(_||(F(Me,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),F(Me,`RPC '${e}' stream ${s} sending:`,S),m.send(S))},Yo:()=>m.close()}),D=(S,B,q)=>{S.listen(B,($=>{try{q($)}catch(Q){setTimeout((()=>{throw Q}),0)}}))};return D(m,Ei.EventType.OPEN,(()=>{b||(F(Me,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),D(m,Ei.EventType.CLOSE,(()=>{b||(b=!0,F(Me,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(m))})),D(m,Ei.EventType.ERROR,(S=>{b||(b=!0,en(Me,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),C.__(new L(P.UNAVAILABLE,"The operation could not be completed")))})),D(m,Ei.EventType.MESSAGE,(S=>{var B;if(!b){const q=S.data[0];oe(!!q,16349);const $=q,Q=$?.error||((B=$[0])===null||B===void 0?void 0:B.error);if(Q){F(Me,`RPC '${e}' stream ${s} received error:`,Q);const z=Q.status;let Z=(function(v){const E=Te[v];if(E!==void 0)return cd(E)})(z),T=Q.message;Z===void 0&&(Z=P.INTERNAL,T="Unknown error status: "+z+" with message "+Q.message),b=!0,C.__(new L(Z,T)),m.close()}else F(Me,`RPC '${e}' stream ${s} received:`,q),C.a_(q)}})),D(l,Nh.STAT_EVENT,(S=>{S.stat===No.PROXY?F(Me,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===No.NOPROXY&&F(Me,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function io(){return typeof document<"u"?document:null}/**
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
 */function Tr(n){return new B_(n,!0)}/**
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
 */class Td{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=s,this.A_=r,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-i);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const au="PersistentStream";class bd{constructor(e,t,i,s,r,a,l,u){this.Fi=e,this.w_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Td(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.b_===t&&this.W_(i,s)}),(i=>{e((()=>{const s=new L(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(s)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{i((()=>this.G_(s)))})),this.stream.onMessage((s=>{i((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return F(au,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(F(au,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class x0 extends bd{constructor(e,t,i,s,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,a),this.serializer=r}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=G_(this.serializer,e),i=(function(r){if(!("targetChange"in r))return K.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?vt(a.readTime):K.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=Fo(this.serializer),t.addTarget=(function(r,a){let l;const u=a.target;if(l=ko(u)?{documents:H_(r,u)}:{query:W_(r,u).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=dd(r,a.resumeToken);const h=Vo(r,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=nr(r,a.snapshotVersion.toTimestamp());const h=Vo(r,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const i=K_(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=Fo(this.serializer),t.removeTarget=e,this.k_(t)}}class M0 extends bd{constructor(e,t,i,s,r,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,a),this.serializer=r}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=z_(e.writeResults,e.commitTime),i=vt(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=Fo(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>j_(this.serializer,i)))};this.k_(t)}}/**
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
 */class U0{}class B0 extends U0{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,a])=>this.connection.Wo(e,Oo(t,i),s,r,a))).catch((r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(P.UNKNOWN,r.toString())}))}Jo(e,t,i,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,Oo(t,i),s,a,l,r))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(P.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class q0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Vt(t),this._a=!1):F("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Rn="RemoteStore";class $0{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=r,this.Ea.xo((a=>{i.enqueueAndForget((async()=>{Sn(this)&&(F(Rn,"Restarting streams for network reachability change."),await(async function(u){const h=X(u);h.Ia.add(4),await Xi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await br(h)})(this))}))})),this.Aa=new q0(i,s)}}async function br(n){if(Sn(n))for(const e of n.da)await e(!0)}async function Xi(n){for(const e of n.da)await e(!1)}function Ad(n,e){const t=X(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ea(t)?Ia(t):si(t).x_()&&va(t,e))}function _a(n,e){const t=X(n),i=si(t);t.Ta.delete(e),i.x_()&&Nd(t,e),t.Ta.size===0&&(i.x_()?i.B_():Sn(t)&&t.Aa.set("Unknown"))}function va(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}si(n).H_(e)}function Nd(n,e){n.Ra.$e(e),si(n).Y_(e)}function Ia(n){n.Ra=new F_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),si(n).start(),n.Aa.aa()}function Ea(n){return Sn(n)&&!si(n).M_()&&n.Ta.size>0}function Sn(n){return X(n).Ia.size===0}function Rd(n){n.Ra=void 0}async function G0(n){n.Aa.set("Online")}async function j0(n){n.Ta.forEach(((e,t)=>{va(n,e)}))}async function z0(n,e){Rd(n),Ea(n)?(n.Aa.la(e),Ia(n)):n.Aa.set("Unknown")}async function H0(n,e,t){if(n.Aa.set("Online"),e instanceof hd&&e.state===2&&e.cause)try{await(async function(s,r){const a=r.cause;for(const l of r.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))})(n,e)}catch(i){F(Rn,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await sr(n,i)}else if(e instanceof Ms?n.Ra.Ye(e):e instanceof ud?n.Ra.it(e):n.Ra.et(e),!t.isEqual(K.min()))try{const i=await wd(n.localStore);t.compareTo(i)>=0&&await(function(r,a){const l=r.Ra.Pt(a);return l.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=r.Ta.get(h);p&&r.Ta.set(h,p.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,h)=>{const p=r.Ta.get(u);if(!p)return;r.Ta.set(u,p.withResumeToken(Oe.EMPTY_BYTE_STRING,p.snapshotVersion)),Nd(r,u);const m=new Wt(p.target,u,h,p.sequenceNumber);va(r,m)})),r.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(i){F(Rn,"Failed to raise snapshot:",i),await sr(n,i)}}async function sr(n,e,t){if(!ni(e))throw e;n.Ia.add(1),await Xi(n),n.Aa.set("Offline"),t||(t=()=>wd(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{F(Rn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await br(n)}))}function Cd(n,e){return e().catch((t=>sr(n,t,e)))}async function Ar(n){const e=X(n),t=on(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ra;for(;W0(e);)try{const s=await C0(e.localStore,i);if(s===null){e.Pa.length===0&&t.B_();break}i=s.batchId,Y0(e,s)}catch(s){await sr(e,s)}Pd(e)&&Sd(e)}function W0(n){return Sn(n)&&n.Pa.length<10}function Y0(n,e){n.Pa.push(e);const t=on(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Pd(n){return Sn(n)&&!on(n).M_()&&n.Pa.length>0}function Sd(n){on(n).start()}async function K0(n){on(n).na()}async function Q0(n){const e=on(n);for(const t of n.Pa)e.X_(t.mutations)}async function X0(n,e,t){const i=n.Pa.shift(),s=ha.from(i,e,t);await Cd(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Ar(n)}async function J0(n,e){e&&on(n).Z_&&await(async function(i,s){if((function(a){return O_(a)&&a!==P.ABORTED})(s.code)){const r=i.Pa.shift();on(i).N_(),await Cd(i,(()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s))),await Ar(i)}})(n,e),Pd(n)&&Sd(n)}async function lu(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),F(Rn,"RemoteStore received new credentials");const i=Sn(t);t.Ia.add(3),await Xi(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await br(t)}async function Z0(n,e){const t=X(n);e?(t.Ia.delete(2),await br(t)):e||(t.Ia.add(2),await Xi(t),t.Aa.set("Unknown"))}function si(n){return n.Va||(n.Va=(function(t,i,s){const r=X(t);return r.ia(),new x0(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:G0.bind(null,n),e_:j0.bind(null,n),n_:z0.bind(null,n),J_:H0.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Ea(n)?Ia(n):n.Aa.set("Unknown")):(await n.Va.stop(),Rd(n))}))),n.Va}function on(n){return n.ma||(n.ma=(function(t,i,s){const r=X(t);return r.ia(),new M0(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:K0.bind(null,n),n_:J0.bind(null,n),ea:Q0.bind(null,n),ta:X0.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Ar(n)):(await n.ma.stop(),n.Pa.length>0&&(F(Rn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class wa{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new St,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const a=Date.now()+i,l=new wa(e,t,a,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),ni(n))return new L(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class jn{static emptySet(e){return new jn(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||j.comparator(t.key,i.key):(t,i)=>j.comparator(t.key,i.key),this.keyedMap=wi(),this.sortedSet=new ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new jn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class cu{constructor(){this.fa=new ye(j.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):W(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Qn{constructor(e,t,i,s,r,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,i,s,r){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Qn(e,t,jn.emptySet(t),a,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class ev{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class tv{constructor(){this.queries=uu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const s=X(t),r=s.queries;s.queries=uu(),r.forEach(((a,l)=>{for(const u of l.wa)u.onError(i)}))})(this,new L(P.ABORTED,"Firestore shutting down"))}}function uu(){return new Pn((n=>Xh(n)),yr)}async function ba(n,e){const t=X(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.ba()&&(i=2):(r=new ev,i=e.ba()?0:1);try{switch(i){case 0:r.ya=await t.onListen(s,!0);break;case 1:r.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Ta(a,`Initialization of query '${xn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,r),r.wa.push(e),e.va(t.onlineState),r.ya&&e.Ca(r.ya)&&Na(t)}async function Aa(n,e){const t=X(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const a=r.wa.indexOf(e);a>=0&&(r.wa.splice(a,1),r.wa.length===0?s=e.ba()?0:1:!r.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function nv(n,e){const t=X(n);let i=!1;for(const s of e){const r=s.query,a=t.queries.get(r);if(a){for(const l of a.wa)l.Ca(s)&&(i=!0);a.ya=s}}i&&Na(t)}function iv(n,e,t){const i=X(n),s=i.queries.get(e);if(s)for(const r of s.wa)r.onError(t);i.queries.delete(e)}function Na(n){n.Da.forEach((e=>{e.next()}))}var Uo,hu;(hu=Uo||(Uo={})).Fa="default",hu.Cache="cache";class Ra{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Qn(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Qn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Uo.Cache}}/**
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
 */class kd{constructor(e){this.key=e}}class Dd{constructor(e){this.key=e}}class sv{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ne(),this.mutatedKeys=ne(),this.Xa=Jh(e),this.eu=new jn(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new cu,s=t?t.eu:this.eu;let r=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,m)=>{const _=s.get(p),b=_r(this.query,m)?m:null,C=!!_&&this.mutatedKeys.has(_.key),D=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let S=!1;_&&b?_.data.isEqual(b.data)?C!==D&&(i.track({type:3,doc:b}),S=!0):this.iu(_,b)||(i.track({type:2,doc:b}),S=!0,(u&&this.Xa(b,u)>0||h&&this.Xa(b,h)<0)&&(l=!0)):!_&&b?(i.track({type:0,doc:b}),S=!0):_&&!b&&(i.track({type:1,doc:_}),S=!0,(u||h)&&(l=!0)),S&&(b?(a=a.add(b),r=D?r.add(p):r.delete(p)):(a=a.delete(p),r=r.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),r=r.delete(p.key),i.track({type:1,doc:p})}return{eu:a,ru:i,Ds:l,mutatedKeys:r}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((p,m)=>(function(b,C){const D=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{At:S})}};return D(b)-D(C)})(p.type,m.type)||this.Xa(p.doc,m.doc))),this.su(i),s=s!=null&&s;const l=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,h=u!==this.Ya;return this.Ya=u,a.length!==0||h?{snapshot:new Qn(this.query,e.eu,r,a,e.mutatedKeys,u===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new cu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ne(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new Dd(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new kd(i))})),t}uu(e){this.Ha=e.qs,this.Za=ne();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Qn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ca="SyncEngine";class rv{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class ov{constructor(e){this.key=e,this.lu=!1}}class av{constructor(e,t,i,s,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Pn((l=>Xh(l)),yr),this.Tu=new Map,this.Iu=new Set,this.du=new ye(j.comparator),this.Eu=new Map,this.Au=new pa,this.Ru={},this.Vu=new Map,this.mu=Kn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function lv(n,e,t=!0){const i=Md(n);let s;const r=i.Pu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.cu()):s=await Vd(i,e,t,!0),s}async function cv(n,e){const t=Md(n);await Vd(t,e,!0,!1)}async function Vd(n,e,t,i){const s=await P0(n.localStore,_t(e)),r=s.targetId,a=n.sharedClientState.addLocalQueryTarget(r,t);let l;return i&&(l=await uv(n,e,r,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ad(n.remoteStore,s),l}async function uv(n,e,t,i,s){n.gu=(m,_,b)=>(async function(D,S,B,q){let $=S.view.nu(B);$.Ds&&($=await iu(D.localStore,S.query,!1).then((({documents:T})=>S.view.nu(T,$))));const Q=q&&q.targetChanges.get(S.targetId),z=q&&q.targetMismatches.get(S.targetId)!=null,Z=S.view.applyChanges($,D.isPrimaryClient,Q,z);return fu(D,S.targetId,Z._u),Z.snapshot})(n,m,_,b);const r=await iu(n.localStore,e,!0),a=new sv(e,r.qs),l=a.nu(r.documents),u=Qi.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,u);fu(n,t,h._u);const p=new rv(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function hv(n,e,t){const i=X(n),s=i.Pu.get(e),r=i.Tu.get(s.targetId);if(r.length>1)return i.Tu.set(s.targetId,r.filter((a=>!yr(a,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await xo(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&_a(i.remoteStore,s.targetId),Bo(i,s.targetId)})).catch(ti)):(Bo(i,s.targetId),await xo(i.localStore,s.targetId,!0))}async function dv(n,e){const t=X(n),i=t.Pu.get(e),s=t.Tu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),_a(t.remoteStore,i.targetId))}async function fv(n,e,t){const i=Iv(n);try{const s=await(function(a,l){const u=X(a),h=pe.now(),p=l.reduce(((b,C)=>b.add(C.key)),ne());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let C=Ot(),D=ne();return u.Os.getEntries(b,p).next((S=>{C=S,C.forEach(((B,q)=>{q.isValidDocument()||(D=D.add(B))}))})).next((()=>u.localDocuments.getOverlayedDocuments(b,C))).next((S=>{m=S;const B=[];for(const q of l){const $=P_(q,m.get(q.key).overlayedDocument);$!=null&&B.push(new hn(q.key,$,Gh($.value.mapValue),We.exists(!0)))}return u.mutationQueue.addMutationBatch(b,h,B,l)})).next((S=>{_=S;const B=S.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(b,S.batchId,B)}))})).then((()=>({batchId:_.batchId,changes:ed(m)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),(function(a,l,u){let h=a.Ru[a.currentUser.toKey()];h||(h=new ye(J)),h=h.insert(l,u),a.Ru[a.currentUser.toKey()]=h})(i,s.batchId,t),await Ji(i,s.changes),await Ar(i.remoteStore)}catch(s){const r=Ta(s,"Failed to persist write");t.reject(r)}}async function Od(n,e){const t=X(n);try{const i=await N0(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const a=t.Eu.get(r);a&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?oe(a.lu,14607):s.removedDocuments.size>0&&(oe(a.lu,42227),a.lu=!1))})),await Ji(t,i,e)}catch(i){await ti(i)}}function du(n,e,t){const i=X(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Pu.forEach(((r,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const u=X(a);u.onlineState=l;let h=!1;u.queries.forEach(((p,m)=>{for(const _ of m.wa)_.va(l)&&(h=!0)})),h&&Na(u)})(i.eventManager,e),s.length&&i.hu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function pv(n,e,t){const i=X(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Eu.get(e),r=s&&s.key;if(r){let a=new ye(j.comparator);a=a.insert(r,Be.newNoDocument(r,K.min()));const l=ne().add(r),u=new wr(K.min(),new Map,new ye(J),a,l);await Od(i,u),i.du=i.du.remove(r),i.Eu.delete(e),Pa(i)}else await xo(i.localStore,e,!1).then((()=>Bo(i,e,t))).catch(ti)}async function gv(n,e){const t=X(n),i=e.batch.batchId;try{const s=await A0(t.localStore,e);Fd(t,i,null),Ld(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Ji(t,s)}catch(s){await ti(s)}}async function mv(n,e,t){const i=X(n);try{const s=await(function(a,l){const u=X(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next((m=>(oe(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p))).next((()=>u.localDocuments.getDocuments(h,p)))}))})(i.localStore,e);Fd(i,e,t),Ld(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Ji(i,s)}catch(s){await ti(s)}}function Ld(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Fd(n,e,t){const i=X(n);let s=i.Ru[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Ru[i.currentUser.toKey()]=s}}function Bo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||xd(n,i)}))}function xd(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(_a(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Pa(n))}function fu(n,e,t){for(const i of t)i instanceof kd?(n.Au.addReference(i.key,e),yv(n,i)):i instanceof Dd?(F(Ca,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||xd(n,i.key)):W(19791,{yu:i})}function yv(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(F(Ca,"New document in limbo: "+t),n.Iu.add(i),Pa(n))}function Pa(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new j(de.fromString(e)),i=n.mu.next();n.Eu.set(i,new ov(t)),n.du=n.du.insert(t,i),Ad(n.remoteStore,new Wt(_t(mr(t.path)),i,"TargetPurposeLimboResolution",fr.ue))}}async function Ji(n,e,t){const i=X(n),s=[],r=[],a=[];i.Pu.isEmpty()||(i.Pu.forEach(((l,u)=>{a.push(i.gu(u,e,t).then((h=>{var p;if((h||t)&&i.isPrimaryClient){const m=h?!h.fromCache:(p=t?.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;i.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=ma.Es(u.targetId,h);r.push(m)}})))})),await Promise.all(a),i.hu.J_(s),await(async function(u,h){const p=X(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>k.forEach(h,(_=>k.forEach(_.Is,(b=>p.persistence.referenceDelegate.addReference(m,_.targetId,b))).next((()=>k.forEach(_.ds,(b=>p.persistence.referenceDelegate.removeReference(m,_.targetId,b)))))))))}catch(m){if(!ni(m))throw m;F(ya,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const b=p.Fs.get(_),C=b.snapshotVersion,D=b.withLastLimboFreeSnapshotVersion(C);p.Fs=p.Fs.insert(_,D)}}})(i.localStore,r))}async function _v(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){F(Ca,"User change. New user:",e.toKey());const i=await Ed(t.localStore,e);t.currentUser=e,(function(r,a){r.Vu.forEach((l=>{l.forEach((u=>{u.reject(new L(P.CANCELLED,a))}))})),r.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ji(t,i.Bs)}}function vv(n,e){const t=X(n),i=t.Eu.get(e);if(i&&i.lu)return ne().add(i.key);{let s=ne();const r=t.Tu.get(e);if(!r)return s;for(const a of r){const l=t.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function Md(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Od.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pv.bind(null,e),e.hu.J_=nv.bind(null,e.eventManager),e.hu.pu=iv.bind(null,e.eventManager),e}function Iv(n){const e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mv.bind(null,e),e}class rr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tr(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return b0(this.persistence,new E0,e.initialUser,this.serializer)}Du(e){return new Id(ga.Vi,this.serializer)}bu(e){return new k0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rr.provider={build:()=>new rr};class Ev extends rr{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){oe(this.persistence.referenceDelegate instanceof ir,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new o0(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Qe.withCacheSize(this.cacheSizeBytes):Qe.DEFAULT;return new Id((i=>ir.Vi(i,t)),this.serializer)}}class qo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>du(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=_v.bind(null,this.syncEngine),await Z0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new tv})()}createDatastore(e){const t=Tr(e.databaseInfo.databaseId),i=(function(r){return new F0(r)})(e.databaseInfo);return(function(r,a,l,u){return new B0(r,a,l,u)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,a,l){return new $0(i,s,r,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>du(this.syncEngine,t,0)),(function(){return ou.C()?new ou:new D0})())}createSyncEngine(e,t){return(function(s,r,a,l,u,h,p){const m=new av(s,r,a,l,u,h);return p&&(m.fu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=X(s);F(Rn,"RemoteStore shutting down."),r.Ia.add(5),await Xi(r),r.Ea.shutdown(),r.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}qo.provider={build:()=>new qo};/**
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
 */class Sa{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const an="FirestoreClient";class wv{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=sa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async a=>{F(an,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(i,(a=>(F(an,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new St;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Ta(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function so(n,e){n.asyncQueue.verifyOperationInProgress(),F(an,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Ed(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>{en("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{F("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{en("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function pu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Tv(n);F(an,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>lu(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>lu(e.remoteStore,s))),n._onlineComponents=e}async function Tv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(an,"Using user provided OfflineComponentProvider");try{await so(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;en("Error using user provided cache. Falling back to memory cache: "+t),await so(n,new rr)}}else F(an,"Using default OfflineComponentProvider"),await so(n,new Ev(void 0));return n._offlineComponents}async function Ud(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(an,"Using user provided OnlineComponentProvider"),await pu(n,n._uninitializedComponentsProvider._online)):(F(an,"Using default OnlineComponentProvider"),await pu(n,new qo))),n._onlineComponents}function bv(n){return Ud(n).then((e=>e.syncEngine))}async function or(n){const e=await Ud(n),t=e.eventManager;return t.onListen=lv.bind(null,e.syncEngine),t.onUnlisten=hv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dv.bind(null,e.syncEngine),t}function Av(n,e,t={}){const i=new St;return n.asyncQueue.enqueueAndForget((async()=>(function(r,a,l,u,h){const p=new Sa({next:_=>{p.Ou(),a.enqueueAndForget((()=>Aa(r,m)));const b=_.docs.has(l);!b&&_.fromCache?h.reject(new L(P.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&_.fromCache&&u&&u.source==="server"?h.reject(new L(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Ra(mr(l.path),p,{includeMetadataChanges:!0,ka:!0});return ba(r,m)})(await or(n),n.asyncQueue,e,t,i))),i.promise}function Nv(n,e,t={}){const i=new St;return n.asyncQueue.enqueueAndForget((async()=>(function(r,a,l,u,h){const p=new Sa({next:_=>{p.Ou(),a.enqueueAndForget((()=>Aa(r,m))),_.fromCache&&u.source==="server"?h.reject(new L(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Ra(l,p,{includeMetadataChanges:!0,ka:!0});return ba(r,m)})(await or(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function Bd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const gu=new Map;/**
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
 */const qd="firestore.googleapis.com",mu=!0;class yu{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qd,this.ssl=mu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:mu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<s0)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$y("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bd((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nr{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Vy;switch(i.type){case"firstParty":return new xy(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=gu.get(t);i&&(F("ComponentProvider","Removing Datastore"),gu.delete(t),i.terminate())})(this),Promise.resolve()}}function Rv(n,e,t,i={}){var s;n=He(n,Nr);const r=Xn(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;r&&(Lu(`https://${u}`),Fu("Firestore",!0)),a.host!==qd&&a.host!==u&&en("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:u,ssl:r,emulatorOptions:i});if(!wn(h,l)&&(n._setSettings(h),i.mockUserToken)){let p,m;if(typeof i.mockUserToken=="string")p=i.mockUserToken,m=Ue.MOCK_USER;else{p=Hf(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const _=i.mockUserToken.sub||i.mockUserToken.user_id;if(!_)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ue(_)}n._authCredentials=new Oy(new Sh(p,m))}}/**
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
 */class Ft{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ft(this.firestore,e,this._query)}}class ve{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ve(this.firestore,e,this._key)}toJSON(){return{type:ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Yi(t,ve._jsonSchema))return new ve(e,i||null,new j(de.fromString(t.referencePath)))}}ve._jsonSchemaVersion="firestore/documentReference/1.0",ve._jsonSchema={type:Ae("string",ve._jsonSchemaVersion),referencePath:Ae("string")};class Zt extends Ft{constructor(e,t,i){super(e,t,mr(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new j(e))}withConverter(e){return new Zt(this.firestore,e,this._path)}}function qt(n,e,...t){if(n=Ee(n),Dh("collection","path",e),n instanceof Nr){const i=de.fromString(e,...t);return Sc(i),new Zt(n,null,i)}{if(!(n instanceof ve||n instanceof Zt))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(de.fromString(e,...t));return Sc(i),new Zt(n.firestore,null,i)}}function it(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=sa.newId()),Dh("doc","path",e),n instanceof Nr){const i=de.fromString(e,...t);return Pc(i),new ve(n,null,new j(i))}{if(!(n instanceof ve||n instanceof Zt))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(de.fromString(e,...t));return Pc(i),new ve(n.firestore,n instanceof Zt?n.converter:null,new j(i))}}/**
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
 */const _u="AsyncQueue";class vu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Td(this,"async_queue_retry"),this.oc=()=>{const i=io();i&&F(_u,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new St;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ni(e))throw e;F(_u,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Vt("INTERNAL UNHANDLED ERROR: ",Iu(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=wa.createAndSchedule(this,e,t,i,(r=>this.lc(r)));return this.ec.push(s),s}ac(){this.tc&&W(47125,{hc:Iu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Iu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Eu(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}class Tt extends Nr{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new vu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vu(e),this._firestoreClient=void 0,await e}}}function Cv(n,e){const t=typeof n=="object"?n:Bu(),i=typeof n=="string"?n:Qs,s=Wo(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=jf("firestore");r&&Rv(s,...r)}return s}function Zi(n){if(n._terminated)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Pv(n),n._firestoreClient}function Pv(n){var e,t,i;const s=n._freezeSettings(),r=(function(l,u,h,p){return new e_(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Bd(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new wv(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&(function(l){const u=l?._online.build();return{_offline:l?._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rt(Oe.fromBase64String(e))}catch(t){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new rt(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Yi(e,rt._jsonSchema))return rt.fromBase64String(e.bytes)}}rt._jsonSchemaVersion="firestore/bytes/1.0",rt._jsonSchema={type:Ae("string",rt._jsonSchemaVersion),bytes:Ae("string")};/**
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
 */class es{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ka{constructor(e){this._methodName=e}}/**
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
 */class It{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:It._jsonSchemaVersion}}static fromJSON(e){if(Yi(e,It._jsonSchema))return new It(e.latitude,e.longitude)}}It._jsonSchemaVersion="firestore/geoPoint/1.0",It._jsonSchema={type:Ae("string",It._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
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
 */class Et{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Et._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Yi(e,Et._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Et(e.vectorValues);throw new L(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Et._jsonSchemaVersion="firestore/vectorValue/1.0",Et._jsonSchema={type:Ae("string",Et._jsonSchemaVersion),vectorValues:Ae("object")};/**
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
 */const Sv=/^__.*__$/;class kv{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new hn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ki(e,this.data,t,this.fieldTransforms)}}class $d{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new hn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ec:n})}}class Da{constructor(e,t,i,s,r,a){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Da(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:i,mc:!1});return s.fc(e),s}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:i,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ar(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Gd(this.Ec)&&Sv.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Dv{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Tr(e)}Dc(e,t,i,s=!1){return new Da({Ec:e,methodName:t,bc:i,path:Ve.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ts(n){const e=n._freezeSettings(),t=Tr(n._databaseId);return new Dv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Va(n,e,t,i,s,r={}){const a=n.Dc(r.merge||r.mergeFields?2:0,e,t,s);Oa("Data must be an object, but it was:",a,i);const l=Hd(i,a);let u,h;if(r.merge)u=new tt(a.fieldMask),h=a.fieldTransforms;else if(r.mergeFields){const p=[];for(const m of r.mergeFields){const _=$o(e,m,t);if(!a.contains(_))throw new L(P.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Yd(p,_)||p.push(_)}u=new tt(p),h=a.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,h=a.fieldTransforms;return new kv(new Je(l),u,h)}class Rr extends ka{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rr}}function jd(n,e,t,i){const s=n.Dc(1,e,t);Oa("Data must be an object, but it was:",s,i);const r=[],a=Je.empty();un(i,((u,h)=>{const p=La(e,u,t);h=Ee(h);const m=s.gc(p);if(h instanceof Rr)r.push(p);else{const _=ns(h,m);_!=null&&(r.push(p),a.set(p,_))}}));const l=new tt(r);return new $d(a,l,s.fieldTransforms)}function zd(n,e,t,i,s,r){const a=n.Dc(1,e,t),l=[$o(e,i,t)],u=[s];if(r.length%2!=0)throw new L(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<r.length;_+=2)l.push($o(e,r[_])),u.push(r[_+1]);const h=[],p=Je.empty();for(let _=l.length-1;_>=0;--_)if(!Yd(h,l[_])){const b=l[_];let C=u[_];C=Ee(C);const D=a.gc(b);if(C instanceof Rr)h.push(b);else{const S=ns(C,D);S!=null&&(h.push(b),p.set(b,S))}}const m=new tt(h);return new $d(p,m,a.fieldTransforms)}function Vv(n,e,t,i=!1){return ns(t,n.Dc(i?4:3,e))}function ns(n,e){if(Wd(n=Ee(n)))return Oa("Unsupported field value:",e,n),Hd(n,e);if(n instanceof ka)return(function(i,s){if(!Gd(s.Ec))throw s.wc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,s){const r=[];let a=0;for(const l of i){let u=ns(l,s.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),r.push(u),a++}return{arrayValue:{values:r}}})(n,e)}return(function(i,s){if((i=Ee(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return T_(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=pe.fromDate(i);return{timestampValue:nr(s.serializer,r)}}if(i instanceof pe){const r=new pe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:nr(s.serializer,r)}}if(i instanceof It)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof rt)return{bytesValue:dd(s.serializer,i._byteString)};if(i instanceof ve){const r=s.databaseId,a=i.firestore._databaseId;if(!a.isEqual(r))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:fa(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Et)return(function(a,l){return{mapValue:{fields:{[qh]:{stringValue:$h},[Xs]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return ua(l.serializer,h)}))}}}}}})(i,s);throw s.wc(`Unsupported field value: ${dr(i)}`)})(n,e)}function Hd(n,e){const t={};return Lh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):un(n,((i,s)=>{const r=ns(s,e.Vc(i));r!=null&&(t[i]=r)})),{mapValue:{fields:t}}}function Wd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pe||n instanceof It||n instanceof rt||n instanceof ve||n instanceof ka||n instanceof Et)}function Oa(n,e,t){if(!Wd(t)||!Vh(t)){const i=dr(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function $o(n,e,t){if((e=Ee(e))instanceof es)return e._internalPath;if(typeof e=="string")return La(n,e);throw ar("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ov=new RegExp("[~\\*/\\[\\]]");function La(n,e,t){if(e.search(Ov)>=0)throw ar(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new es(...e.split("."))._internalPath}catch{throw ar(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ar(n,e,t,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(r||a)&&(u+=" (found",r&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new L(P.INVALID_ARGUMENT,l+n+u)}function Yd(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Kd{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Lv extends Kd{data(){return super.data()}}function Fa(n,e){return typeof e=="string"?La(n,e):e instanceof es?e._internalPath:e._delegate._internalPath}/**
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
 */function Qd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xa{}class Ma extends xa{}function Cs(n,e,...t){let i=[];e instanceof xa&&i.push(e),i=i.concat(t),(function(r){const a=r.filter((u=>u instanceof Ba)).length,l=r.filter((u=>u instanceof Ua)).length;if(a>1||a>0&&l>0)throw new L(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const s of i)n=s._apply(n);return n}class Ua extends Ma{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Ua(e,t,i)}_apply(e){const t=this._parse(e);return Xd(e._query,t),new Ft(e.firestore,e.converter,Do(e._query,t))}_parse(e){const t=ts(e.firestore);return(function(r,a,l,u,h,p,m){let _;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new L(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Tu(m,p);const C=[];for(const D of m)C.push(wu(u,r,D));_={arrayValue:{values:C}}}else _=wu(u,r,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Tu(m,p),_=Vv(l,a,m,p==="in"||p==="not-in");return be.create(h,p,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ba extends xa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ba(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:ft.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,r){let a=s;const l=r.getFlattenedFilters();for(const u of l)Xd(a,u),a=Do(a,u)})(e._query,t),new Ft(e.firestore,e.converter,Do(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qa extends Ma{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new qa(e,t)}_apply(e){const t=(function(s,r,a){if(s.startAt!==null)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ui(r,a)})(e._query,this._field,this._direction);return new Ft(e.firestore,e.converter,(function(s,r){const a=s.explicitOrderBy.concat([r]);return new ii(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Fv(n,e="asc"){const t=e,i=Fa("orderBy",n);return qa._create(i,t)}class $a extends Ma{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new $a(e,t,i)}_apply(e){return new Ft(e.firestore,e.converter,Zs(e._query,this._limit,this._limitType))}}function ro(n){return Gy("limit",n),$a._create("limit",n,"F")}function wu(n,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new L(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qh(e)&&t.indexOf("/")!==-1)throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(de.fromString(t));if(!j.isDocumentKey(i))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Mc(n,new j(i))}if(t instanceof ve)return Mc(n,t._key);throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dr(t)}.`)}function Tu(n,e){if(!Array.isArray(n)||n.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xd(n,e){const t=(function(s,r){for(const a of s)for(const l of a.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class xv{convertValue(e,t="none"){switch(rn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return un(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var t,i,s;const r=(s=(i=(t=e.fields)===null||t===void 0?void 0:t[Xs].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map((a=>Ie(a.doubleValue)));return new Et(r)}convertGeoPoint(e){return new It(Ie(e.latitude),Ie(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=gr(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Fi(e));default:return null}}convertTimestamp(e){const t=nn(e);return new pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=de.fromString(e);oe(_d(i),9688,{name:e});const s=new xi(i.get(1),i.get(3)),r=new j(i.popFirst(5));return s.isEqual(t)||Vt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function Ga(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class bi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class In extends Kd{constructor(e,t,i,s,r,a){super(e,t,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Fa("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=In._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}In._jsonSchemaVersion="firestore/documentSnapshot/1.0",In._jsonSchema={type:Ae("string",In._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Us extends In{data(e={}){return super.data(e)}}class En{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new bi(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Us(this._firestore,this._userDataWriter,i.key,i,new bi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const u=new Us(s._firestore,s._userDataWriter,l.doc.key,l.doc,new bi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>r||l.type!==3)).map((l=>{const u=new Us(s._firestore,s._userDataWriter,l.doc.key,l.doc,new bi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Mv(l.type),doc:u,oldIndex:h,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=En._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=sa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Mv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}/**
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
 */function oo(n){n=He(n,ve);const e=He(n.firestore,Tt);return Av(Zi(e),n._key).then((t=>Jd(e,n,t)))}En._jsonSchemaVersion="firestore/querySnapshot/1.0",En._jsonSchema={type:Ae("string",En._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class ja extends xv{constructor(e){super(),this.firestore=e}convertBytes(e){return new rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,t)}}function ao(n){n=He(n,Ft);const e=He(n.firestore,Tt),t=Zi(e),i=new ja(e);return Qd(n._query),Nv(t,n._query).then((s=>new En(e,i,n,s)))}function lo(n,e,t){n=He(n,ve);const i=He(n.firestore,Tt),s=Ga(n.converter,e,t);return is(i,[Va(ts(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,We.none())])}function Uv(n,e,t,...i){n=He(n,ve);const s=He(n.firestore,Tt),r=ts(s);let a;return a=typeof(e=Ee(e))=="string"||e instanceof es?zd(r,"updateDoc",n._key,e,t,i):jd(r,"updateDoc",n._key,e),is(s,[a.toMutation(n._key,We.exists(!0))])}function Bv(n){return is(He(n.firestore,Tt),[new Er(n._key,We.none())])}function bu(n,e){const t=He(n.firestore,Tt),i=it(n),s=Ga(n.converter,e);return is(t,[Va(ts(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,We.exists(!1))]).then((()=>i))}function co(n,...e){var t,i,s;n=Ee(n);let r={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Eu(e[a])||(r=e[a++]);const l={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(Eu(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(i=m.error)===null||i===void 0?void 0:i.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,h,p;if(n instanceof ve)h=He(n.firestore,Tt),p=mr(n._key.path),u={next:m=>{e[a]&&e[a](Jd(h,n,m))},error:e[a+1],complete:e[a+2]};else{const m=He(n,Ft);h=He(m.firestore,Tt),p=m._query;const _=new ja(h);u={next:b=>{e[a]&&e[a](new En(h,_,m,b))},error:e[a+1],complete:e[a+2]},Qd(n._query)}return(function(_,b,C,D){const S=new Sa(D),B=new Ra(b,S,C);return _.asyncQueue.enqueueAndForget((async()=>ba(await or(_),B))),()=>{S.Ou(),_.asyncQueue.enqueueAndForget((async()=>Aa(await or(_),B)))}})(Zi(h),p,l,u)}function is(n,e){return(function(i,s){const r=new St;return i.asyncQueue.enqueueAndForget((async()=>fv(await bv(i),s,r))),r.promise})(Zi(n),e)}function Jd(n,e,t){const i=t.docs.get(e._key),s=new ja(n);return new In(n,s,e._key,i,new bi(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class qv{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ts(e)}set(e,t,i){this._verifyNotCommitted();const s=uo(e,this._firestore),r=Ga(s.converter,t,i),a=Va(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(a.toMutation(s._key,We.none())),this}update(e,t,i,...s){this._verifyNotCommitted();const r=uo(e,this._firestore);let a;return a=typeof(t=Ee(t))=="string"||t instanceof es?zd(this._dataReader,"WriteBatch.update",r._key,t,i,s):jd(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(a.toMutation(r._key,We.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=uo(e,this._firestore);return this._mutations=this._mutations.concat(new Er(t._key,We.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function uo(n,e){if((n=Ee(n)).firestore!==e)throw new L(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function Au(n){return Zi(n=He(n,Tt)),new qv(n,(e=>is(n,e)))}(function(e,t=!0){(function(s){ei=s})(Jn),zn(new Tn("firestore",((i,{instanceIdentifier:s,options:r})=>{const a=i.getProvider("app").getImmediate(),l=new Tt(new Ly(i.getProvider("auth-internal")),new My(a,i.getProvider("app-check-internal")),(function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(h.options.projectId,p)})(a,s),a);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l}),"PUBLIC").setMultipleInstances(!0)),Xt(bc,Ac,e),Xt(bc,Ac,"esm2017")})();const Ai={apiKey:"AIzaSyBBK4mFJd-srMUEqn5U-kHKuNPESBOiNt8",authDomain:"bangplama-insane-person.firebaseapp.com",projectId:"bangplama-insane-person",storageBucket:"bangplama-insane-person.firebasestorage.app",messagingSenderId:"1010588367858",appId:"1:1010588367858:web:52beb86b03efe05640096b"};function $v(){return!!(Ai.apiKey&&Ai.projectId&&Ai.appId&&!Ai.apiKey.startsWith("YOUR_"))}const Bs=[{seq:1,fullName:"พ.ต.อ.กิตติพันธ์ เสนาอุดร",position:"ผกก.สภ.บางปลาม้า",phone:"0619165298",phoneDisplay:"06 1916 5298",callsign:"ปลาม้า 1",category:"ชั้นสัญญาบัตร",note:""},{seq:2,fullName:"พ.ต.ท.รังสรร ไทยศรี",position:"รอง ผกก.ป.ฯ",phone:"0827871111",phoneDisplay:"08 2787 1111",callsign:"ปลาม้า 2",category:"ชั้นสัญญาบัตร",note:""},{seq:3,fullName:"พ.ต.ท.ณัฐพงศ์ อินสว่าง",position:"รอง ผกก.(สอบสวน)ฯ",phone:"0999664876",phoneDisplay:"09 9966 4876",callsign:"ปลาม้า 3",category:"ชั้นสัญญาบัตร",note:""},{seq:4,fullName:"พ.ต.ท.พีรพงษ์ ตนะทิพย์",position:"รอง ผกก.สส.ฯ",phone:"0857026167",phoneDisplay:"08 5702 6167",callsign:"ปลาม้า 4",category:"ชั้นสัญญาบัตร",note:""},{seq:5,fullName:"พ.ต.ท.ธวัช แก้วดี",position:"สว.อก.ฯ",phone:"0814593982",phoneDisplay:"08 1459 3982",callsign:"ปลาม้า 51",category:"ชั้นสัญญาบัตร",note:""},{seq:6,fullName:"พ.ต.ท.ณรงค์กรณ์ ปาละกะวงศ์ ณ อยุธยา",position:"สว.(สอบสวน)ฯ",phone:"0839033941",phoneDisplay:"08 3903 3941",callsign:"ปลาม้า 31",category:"ชั้นสัญญาบัตร",note:""},{seq:7,fullName:"พ.ต.ต.หญิง ขวัญข้าว อินาวัง",position:"สว.(สอบสวน)ฯ",phone:"0906269824",phoneDisplay:"09 0626 9824",callsign:"ปลาม้า 32",category:"ชั้นสัญญาบัตร",note:""},{seq:8,fullName:"พ.ต.ต.จาตุรนต์ จารุสิริรักษ์",position:"สว.(สอบสวน)ฯ",phone:"0908902199",phoneDisplay:"09 0890 2199",callsign:"ปลาม้า 33",category:"ชั้นสัญญาบัตร",note:""},{seq:9,fullName:"พ.ต.ท.ณัฐวุฒิ มกรเสน",position:"สวป.ฯ",phone:"0658236519",phoneDisplay:"06 5823 6519",callsign:"ปลาม้า 21",category:"ชั้นสัญญาบัตร",note:""},{seq:10,fullName:"พ.ต.ท.ศุภกร สุดอารมย์",position:"สว.สส.ฯ",phone:"0871713939",phoneDisplay:"08 7171 3939",callsign:"ปลาม้า 41",category:"ชั้นสัญญาบัตร",note:""},{seq:11,fullName:"ร.ต.อ.วัชรากร อินทรีย์วงศ์",position:"รอง สวป.ฯ",phone:"0866880553",phoneDisplay:"08 6688 0553",callsign:"ปลาม้า 211",category:"ชั้นสัญญาบัตร",note:"ร้อยเวร20"},{seq:12,fullName:"ร.ต.อ.องอาจ ไชยสุริยงค์",position:"รอง สว.สส.ฯ",phone:"0633491888",phoneDisplay:"06 3349 1888",callsign:"ปลาม้า 411",category:"ชั้นสัญญาบัตร",note:""},{seq:13,fullName:"ร.ต.อ.ฤทธิพงศ์ มะปะเข",position:"รอง สว.(สอบสวน)ฯ",phone:"0914165622",phoneDisplay:"09 1416 5622",callsign:"ปลาม้า 34",category:"ชั้นสัญญาบัตร",note:""},{seq:14,fullName:"ร.ต.อ.ชัยยงค์ เหล่าภักดี",position:"รอง สว.จร.ฯ",phone:"0813842180",phoneDisplay:"08 1384 2180",callsign:"ปลาม้า 611",category:"ชั้นสัญญาบัตร",note:"งาน จร."},{seq:15,fullName:"ร.ต.อ.สมพร ชูประพันธ์",position:"รอง สวป.ฯ",phone:"0970741685",phoneDisplay:"09 7074 1685",callsign:"ปลาม้า 212",category:"ชั้นสัญญาบัตร",note:"งาน อก."},{seq:16,fullName:"ร.ต.อ.หญิง สมาภรณ์ เหมือนปอง",position:"รอง สว.สส.ฯ",phone:"0639788882",phoneDisplay:"06 3978 8882",callsign:"ปลาม้า 412",category:"ชั้นสัญญาบัตร",note:"ช่วย ภ.จว.สพ."},{seq:17,fullName:"ร.ต.อ.อิทธิพล จิโรปการ",position:"รอง สว.(สอบสวน)ฯ",phone:"0962696055",phoneDisplay:"09 6269 6055",callsign:"ปลาม้า 35",category:"ชั้นสัญญาบัตร",note:""},{seq:18,fullName:"ร.ต.ท.เกียรติศักดิ์ เทพเทียน",position:"รอง สว.(สอบสวน)ฯ",phone:"0836524449",phoneDisplay:"08 3652 4449",callsign:"ปลาม้า 36",category:"ชั้นสัญญาบัตร",note:""},{seq:19,fullName:"ร.ต.อ.ผดุงศักดิ์ ศิลปพงษ์",position:"รอง สว.(ป.)ฯ",phone:"0811935673",phoneDisplay:"08 1193 5673",callsign:"ปลาม้า 221",category:"ชั้นสัญญาบัตร",note:"ร้อยเวร 20"},{seq:20,fullName:"ร.ต.อ.ใจ ไชยสิทธิ์",position:"รอง สว.(ป.)ฯ",phone:"0868078194",phoneDisplay:"08 6807 8194",callsign:"ปลาม้า 222",category:"ชั้นสัญญาบัตร",note:"ต.สาลี"},{seq:21,fullName:"ร.ต.ท.ณคร จันทร์เรือง",position:"รอง สว.(ป.)ฯ",phone:"0831429160",phoneDisplay:"08 3142 9160",callsign:"ปลาม้า 223",category:"ชั้นสัญญาบัตร",note:"ต.วัดโบสถ์"},{seq:22,fullName:"ร.ต.ท.สุทัศน์ ทองเอ็ม",position:"รอง สว.(สส.)ฯ",phone:"0892363091",phoneDisplay:"08 9236 3091",callsign:"ปลาม้า 421",category:"ชั้นสัญญาบัตร",note:"ต.จรเข้ใหญ่"},{seq:23,fullName:"ร.ต.ท.ธนชาติ สุขรักษ์",position:"รอง สว.(จร.)ฯ",phone:"0810146628",phoneDisplay:"08 1014 6628",callsign:"ปลาม้า 612",category:"ชั้นสัญญาบัตร",note:"จราจร"},{seq:24,fullName:"ร.ต.ท.ไพทูล ขุมทอง",position:"รอง สว.(ป.)ฯ",phone:"0812935423",phoneDisplay:"08 1293 5423",callsign:"ปลาม้า 224",category:"ชั้นสัญญาบัตร",note:"ต.วังน้ำเย็น"},{seq:25,fullName:"ร.ต.ท.โกวิทย์ สินทรโก",position:"รอง สว.(สส.)ฯ",phone:"0863382388",phoneDisplay:"08 6338 2388",callsign:"ปลาม้า 225",category:"ชั้นสัญญาบัตร",note:"ต.วัดดาว"},{seq:26,fullName:"ร.ต.ท.กำพล งามแพง",position:"รอง สว.(ป.)ฯ",phone:"0871563183",phoneDisplay:"08 7156 3183",callsign:"ปลาม้า 226",category:"ชั้นสัญญาบัตร",note:"ต.ไผ่กองดิน/องครักษ์"},{seq:27,fullName:"ร.ต.ท.ไพรัตน์ แสนพงษ์",position:"รอง สว.(สส.)ฯ",phone:"0817058488",phoneDisplay:"08 1705 8488",callsign:"ปลาม้า 422",category:"ชั้นสัญญาบัตร",note:"สืบสวน"},{seq:28,fullName:"ร.ต.ท.วิลาศ สุมงคล",position:"รอง สว.(ป.)ฯ",phone:"0833171862",phoneDisplay:"08 3317 1862",callsign:"ปลาม้า 310",category:"ชั้นสัญญาบัตร",note:"เดินรายงาน"},{seq:29,fullName:"ร.ต.ท.เสมอ จรันรัก",position:"รอง สว.(ป.)ฯ",phone:"0813985307",phoneDisplay:"08 1398 5307",callsign:"ปลาม้า 01",category:"ชั้นสัญญาบัตร",note:"จนท.วิทยุ"},{seq:30,fullName:"ร.ต.ท.สุชาติ เพ็งรุ่ง",position:"รอง สว.(ป.)ฯ",phone:"0944822123",phoneDisplay:"09 4482 2123",callsign:"ปลาม้า 311",category:"ชั้นสัญญาบัตร",note:"ปจว."},{seq:31,fullName:"ร.ต.ต.สมชาย เชิดโกทา",position:"รอง สว.(ป.)ฯ",phone:"0812673545",phoneDisplay:"08 1267 3545",callsign:"ปลาม้า 227",category:"ชั้นสัญญาบัตร",note:"สิบเวร"},{seq:32,fullName:"ร.ต.ต.พยอม สำเนียงดี",position:"รอง สว.(ป.)ฯ",phone:"0861700165",phoneDisplay:"08 6170 0165",callsign:"ปลาม้า 02",category:"ชั้นสัญญาบัตร",note:"จนท.วิทยุ"},{seq:33,fullName:"ร.ต.ต.สุชาติ อร่ามชัย",position:"รอง สว.(สส.)ฯ",phone:"0918505575",phoneDisplay:"09 1850 5575",callsign:"ปลาม้า 423",category:"ชั้นสัญญาบัตร",note:"สืบสวน"},{seq:34,fullName:"ร.ต.ต.นพพิพัฒน์ พันธุ์เจริญ",position:"รอง สว.(จร.)ฯ",phone:"0867600216",phoneDisplay:"08 6760 0216",callsign:"ปลาม้า 613",category:"ชั้นสัญญาบัตร",note:"จราจร"},{seq:35,fullName:"ว่าที่ ร.ต.ต.บุญโชติ สังข์ทอง",position:"รอง สว.(ป.)ฯ",phone:"0890843264",phoneDisplay:"08 9084 3264",callsign:"ปลาม้า 228",category:"ชั้นสัญญาบัตร",note:"ต.บางใหญ่"},{seq:36,fullName:"ว่าที่ ร.ต.ต.เกียรติศักดิ์ พงษ์เหล็ง",position:"รอง สว.(ป.)ฯ",phone:"0898286017",phoneDisplay:"08 9828 6017",callsign:"ปลาม้า 03",category:"ชั้นสัญญาบัตร",note:"จนท.วิทยุ"},{seq:37,fullName:"ด.ต.ณัฐพล เพชรแอ",position:"ผบ.หมู่(ป.)ฯ",phone:"0852110795",phoneDisplay:"08 5211 0795",callsign:"ปลาม้า 2101",category:"ชั้นประทวน",note:"ต.ตะข่า"},{seq:38,fullName:"ด.ต.อนุรักษ์ เฉยบำรุง",position:"ผบ.หมู่(จร.)ฯ",phone:"0801123447",phoneDisplay:"08 0112 3447",callsign:"ปลาม้า 6101",category:"ชั้นประทวน",note:"จราจร"},{seq:39,fullName:"ด.ต.วิทยา สร้อยทอง",position:"ผบ.หมู่(จร.)ฯ",phone:"0901397997",phoneDisplay:"09 0139 7997",callsign:"ปลาม้า 6102",category:"ชั้นประทวน",note:"จราจร"},{seq:40,fullName:"ด.ต.กิตติ์อธิศ อมรชยานันท์",position:"ผบ.หมู่(สส.)ฯ",phone:"0822491838",phoneDisplay:"08 2249 1838",callsign:"ปลาม้า 4101",category:"ชั้นประทวน",note:"สืบสวน"},{seq:41,fullName:"ด.ต.คณิต งิ้วไธสง",position:"ผบ.หมู่(ป.)ฯ",phone:"0899188928",phoneDisplay:"08 9918 8928",callsign:"ปลาม้า 3101",category:"ชั้นประทวน",note:"เสมียนคดี"},{seq:42,fullName:"ด.ต.สุวิม โฉมงาม",position:"ผบ.หมู่(ป.)ฯ",phone:"0890901261",phoneDisplay:"08 9090 1261",callsign:"ปลาม้า 2102",category:"ชั้นประทวน",note:"ขับรถ ปม.1"},{seq:43,fullName:"ด.ต.ธีรศักดิ์ เพ็ชรสมัย",position:"ผบ.หมู่(ป.)ฯ",phone:"0929155497",phoneDisplay:"09 2915 5497",callsign:"ปลาม้า 2103",category:"ชั้นประทวน",note:"ต.บางปลาม้า"},{seq:44,fullName:"ด.ต.วิทยา ประเสริฐศรี",position:"ผบ.หมู่(สส.)ฯ",phone:"0634454191",phoneDisplay:"06 3445 4191",callsign:"ปลาม้า 4102",category:"ชั้นประทวน",note:"สืบสวน"},{seq:45,fullName:"ด.ต.ธนากร คุณกมุต",position:"ผบ.หมู่(ป.)ฯ",phone:"0877672865",phoneDisplay:"08 7767 2865",callsign:"ปลาม้า 2104",category:"ชั้นประทวน",note:"ต.มะขามล้ม"},{seq:46,fullName:"จ.ส.ต.ศิราวุฒิ ประณิธานวิทยา",position:"ผบ.หมู่(จร.)ฯ",phone:"0997182718",phoneDisplay:"09 9718 2718",callsign:"ปลาม้า 5101",category:"ชั้นประทวน",note:"จนท.การเงิน"},{seq:47,fullName:"จ.ส.ต.สุรศักดิ์ เมิ่งกระโทก",position:"ผบ.หมู่(ป.)ฯ",phone:"0855374036",phoneDisplay:"08 5537 4036",callsign:"ปลาม้า 2105",category:"ชั้นประทวน",note:"ธุรการ ป."},{seq:48,fullName:"จ.ส.ต.ฤทธิเดช คำไพเราะ",position:"ผบ.หมู่(ป.)ฯ",phone:"0875432490",phoneDisplay:"08 7543 2490",callsign:"ปลาม้า 2106",category:"ชั้นประทวน",note:"ช่วย ภ.จว.ฯ"},{seq:49,fullName:"จ.ส.ต.จีระพงศ์ ธรรมศร",position:"ผบ.หมู่(ป.)ฯ",phone:"0626260707",phoneDisplay:"06 2626 0707",callsign:"ปลาม้า 2107",category:"ชั้นประทวน",note:"ต.กฤษณา"},{seq:50,fullName:"จ.ส.ต.ธนภัทร กฤษณชาญดี",position:"ผบ.หมู่(ป.)ฯ",phone:"0970590666",phoneDisplay:"09 7059 0666",callsign:"ปลาม้า 4103",category:"ชั้นประทวน",note:"สืบสวน"},{seq:51,fullName:"จ.ส.ต.เดชาธร ปิยะศรี",position:"ผบ.หมู่(สส.)ฯ",phone:"0941322221",phoneDisplay:"09 4132 2221",callsign:"ปลาม้า 4104",category:"ชั้นประทวน",note:"ธุรการสืบสวน"},{seq:52,fullName:"ส.ต.อ.พชร รุ่งโรจน์",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0830709577",phoneDisplay:"08 3070 9577",callsign:"ปลาม้า 3102",category:"ชั้นประทวน",note:"เสมียนคดี"},{seq:53,fullName:"ส.ต.อ.กฤตพจน์ ภูอาศัย",position:"ผบ.หมู่(ป.)ฯ",phone:"0931859299",phoneDisplay:"09 3185 9299",callsign:"ปลาม้า 2108",category:"ชั้นประทวน",note:"จยย."},{seq:54,fullName:"ส.ต.ท.ศุภกร ศรีสุวรรณ์",position:"ผบ.หมู่(ป.)ฯ",phone:"0621547289",phoneDisplay:"06 2154 7289",callsign:"ปลาม้า 2110",category:"ชั้นประทวน",note:"รถยนต์"},{seq:55,fullName:"ส.ต.ท.สุทธิภัทร ปากวิเศษ",position:"ผบ.หมู่(ป.)ฯ",phone:"0644875062",phoneDisplay:"06 4487 5062",callsign:"ปลาม้า 2111",category:"ชั้นประทวน",note:"ธุรการ ป."},{seq:56,fullName:"ส.ต.ท.ณัฐพงษ์ ผ่องพูน",position:"ผบ.หมู่(ป.)ฯ",phone:"0913364123",phoneDisplay:"09 1336 4123",callsign:"ปลาม้า 2112",category:"ชั้นประทวน",note:"ธุรการจราจร"},{seq:57,fullName:"ส.ต.ท.สุทธิพร เดชบุญ",position:"ผบ.หมู่(ป.)ฯ",phone:"0803838990",phoneDisplay:"08 0383 8990",callsign:"ปลาม้า 2113",category:"ชั้นประทวน",note:"ประชาสัมพันธ์"},{seq:58,fullName:"ส.ต.ท.ปฏิภาณ อ้นขาว",position:"ผบ.หมู่(ป.)ฯ",phone:"0924530299",phoneDisplay:"09 2453 0299",callsign:"ปลาม้า 2114",category:"ชั้นประทวน",note:"สืบสวน"},{seq:59,fullName:"ส.ต.ท.วงศธร แสงเพชร",position:"ผบ.หมู่(ป.)ฯ",phone:"0814239420",phoneDisplay:"08 1423 9420",callsign:"ปลาม้า 2115",category:"ชั้นประทวน",note:"ช่วย ภ.จว.สพ."},{seq:60,fullName:"ส.ต.ท.จักรพงศ์ บริสุทธิ์สุนทร",position:"ผบ.หมู่(ป.)ฯ",phone:"0959365234",phoneDisplay:"09 5936 5234",callsign:"ปลาม้า 6104",category:"ชั้นประทวน",note:"จราจร"},{seq:61,fullName:"ส.ต.ท.ภมรศักดิ์ ขาวแก้ว",position:"ผบ.หมู่(ป.)ฯ",phone:"0936304443",phoneDisplay:"09 3630 4443",callsign:"ปลาม้า 2116",category:"ชั้นประทวน",note:"รถยนต์"},{seq:62,fullName:"ส.ต.ท.วงศ์ปรเมศวร์ วิริยะพงศ์เมธาวี",position:"ผบ.หมู่(ป.)ฯ",phone:"0990102320",phoneDisplay:"09 9010 2320",callsign:"ปลาม้า 2117",category:"ชั้นประทวน",note:"จยย."},{seq:63,fullName:"ส.ต.ท.ทศพล ศรีงาม",position:"ผบ.หมู่(ป.)ฯ",phone:"0929088327",phoneDisplay:"09 2908 8327",callsign:"ปลาม้า 6103",category:"ชั้นประทวน",note:"จราจร"},{seq:64,fullName:"ส.ต.ท.เมฆา หมายงาม",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0876559022",phoneDisplay:"08 7655 9022",callsign:"ปลาม้า 3103",category:"ชั้นประทวน",note:"ปจว."},{seq:65,fullName:"ส.ต.ท.กิตติภูมิ อบทม",position:"ผบ.หมู่(ป.)ฯ",phone:"0641452559",phoneDisplay:"06 4145 2559",callsign:"ปลาม้า 2118",category:"ชั้นประทวน",note:"จยย."},{seq:66,fullName:"ส.ต.ท.รณชัย จันทร์มณี",position:"ผบ.หมู่(ป.)ฯ",phone:"0657091880",phoneDisplay:"06 5709 1880",callsign:"ปลาม้า 2120",category:"ชั้นประทวน",note:"จยย."},{seq:67,fullName:"ส.ต.ท.พัทพล จันทน์เทศ",position:"ผบ.หมู่(ป.)ฯ",phone:"0875592371",phoneDisplay:"08 7559 2371",callsign:"ปลาม้า 2121",category:"ชั้นประทวน",note:"รถยนต์"},{seq:68,fullName:"ส.ต.ท.ศรายุทธ กมุดชาติ",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0958454439",phoneDisplay:"09 5845 4439",callsign:"ปลาม้า 3104",category:"ชั้นประทวน",note:"พลขับ 301"},{seq:69,fullName:"ส.ต.ท.วิชญ์พล พงษ์แขก",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0933509623",phoneDisplay:"09 3350 9623",callsign:"ปลาม้า 3105",category:"ชั้นประทวน",note:"งาน อก."},{seq:70,fullName:"ส.ต.ต.ณัฐวุธ ศรีสุข",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0639399183",phoneDisplay:"06 3939 9183",callsign:"ปลาม้า 6105",category:"ชั้นประทวน",note:"จราจร"},{seq:71,fullName:"ส.ต.ต.อรรถพล บุตรดา",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0631525102",phoneDisplay:"06 3152 5102",callsign:"ปลาม้า 3106",category:"ชั้นประทวน",note:"จนท.พัสดุ"},{seq:72,fullName:"ส.ต.ต.อภิตะวัน พวงพั่วเพชร",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0634164120",phoneDisplay:"06 3416 4120",callsign:"ปลาม้า 3107",category:"ชั้นประทวน",note:"ผช.การเงิน"},{seq:73,fullName:"ส.ต.ต.นุตประวีณ์ ใจกว้าง",position:"ผบ.หมู่(ผช.พงส.)ฯ",phone:"0637153090",phoneDisplay:"06 3715 3090",callsign:"ปลาม้า 3108",category:"ชั้นประทวน",note:""},{seq:74,fullName:"ส.ต.ต.ตติยวัฒน์ คุ้มพันธุ์แย้ม",position:"ผบ.หมู่(ป.)ฯ",phone:"0969644068",phoneDisplay:"09 6964 4068",callsign:"ปลาม้า 2127",category:"ชั้นประทวน",note:""},{seq:75,fullName:"ส.ต.ต.ภาณุเดช พุทธบัวงาม",position:"ผบ.หมู่(ป.)ฯ",phone:"0826716780",phoneDisplay:"08 2671 6780",callsign:"ปลาม้า 2128",category:"ชั้นประทวน",note:""},{seq:76,fullName:"ส.ต.ต.เขมณัฏฐ์ หอมสุวรรณ์",position:"ผบ.หมู่(ป.)ฯ",phone:"0952471588",phoneDisplay:"09 5247 1588",callsign:"ปลาม้า 2130",category:"ชั้นประทวน",note:""},{seq:77,fullName:"ส.ต.ต.ชวัลดนย์ ชาติชัย",position:"ผบ.หมู่(ป.)ฯ",phone:"0842529295",phoneDisplay:"08 4252 9295",callsign:"ปลาม้า 2131",category:"ชั้นประทวน",note:""},{seq:78,fullName:"ส.ต.ต.พิริยพงษ์ กลิ่นหอม",position:"ผบ.หมู่(ป.)ฯ",phone:"0970148395",phoneDisplay:"09 7014 8395",callsign:"ปลาม้า 2132",category:"ชั้นประทวน",note:""},{seq:79,fullName:"ส.ต.ต.วรากร มาลัย",position:"ผบ.หมู่(ป.)ฯ",phone:"0803682268",phoneDisplay:"08 0368 2268",callsign:"ปลาม้า 2133",category:"ชั้นประทวน",note:""},{seq:80,fullName:"ส.ต.ต.พงศ์ภรณ์ ไชยมงคล",position:"ผบ.หมู่(ป.)ฯ",phone:"0994745164",phoneDisplay:"09 9474 5164",callsign:"ปลาม้า 2134",category:"ชั้นประทวน",note:""},{seq:81,fullName:"ส.ต.ต.กิตติพงษ์ มลิวัลย์",position:"ผบ.หมู่ (คฝ.กก.สส.)ฯ",phone:"0951553889",phoneDisplay:"09 5155 3889",callsign:"ปลาม้า 2122",category:"ช่วยราชการ คฝ.",note:"พลขับ 301"},{seq:82,fullName:"ส.ต.ต.ไตรมาศ ครุฑวิลัย",position:"ผบ.หมู่ (คฝ.กก.สส.)ฯ",phone:"0960099287",phoneDisplay:"09 6009 9287",callsign:"ปลาม้า 2123",category:"ช่วยราชการ คฝ.",note:"จยย."},{seq:83,fullName:"ส.ต.ต.ปริญญา เย็นใจ",position:"ผบ.หมู่ (คฝ.กก.สส.)ฯ",phone:"0840489502",phoneDisplay:"08 4048 9502",callsign:"ปลาม้า 2124",category:"ช่วยราชการ คฝ.",note:"สืบสวน"},{seq:84,fullName:"ส.ต.ต.ศิริวัฒน์ คมขำ",position:"ผบ.หมู่ (คฝ.กก.สส.)ฯ",phone:"0957410485",phoneDisplay:"09 5741 0485",callsign:"ปลาม้า 2125",category:"ช่วยราชการ คฝ.",note:"สืบสวน"},{seq:85,fullName:"ส.ต.ต.สรวิชญ์ หิรัญรัตน์",position:"ผบ.หมู่ (คฝ.กก.สส.)ฯ",phone:"0616124269",phoneDisplay:"06 1612 4269",callsign:"ปลาม้า 2126",category:"ช่วยราชการ คฝ.",note:"จยย."}],Go=[{seqNo:1,fullName:"นายเฉลิมชัย อบเชย",nickname:"ทดสอบ",age:"45",diagnosis:"F 1525",diagnosisCode:"F15",nationalId:"3-7204-00063-85-7",nationalIdDigits:"3720400063857",startYearBE:"2564",addressNo:"237/2",moo:"ม.5",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:2,fullName:"นายวสันต์ ศรีขาวผ่อง",nickname:"ทดสอบ",age:"21",diagnosis:"F 1528",diagnosisCode:"F15",nationalId:"1-7298-00309-31-6",nationalIdDigits:"1729800309316",startYearBE:"2560",addressNo:"75",moo:"ม.3",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:3,fullName:"น.ส.ชโลธร แซ่ซิ้ม",nickname:"มิ้น",age:"23",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-1037-03237-56-0",nationalIdDigits:"1103703237560",startYearBE:"2568",addressNo:"75",moo:"ม.8",subdistrict:"ต.จรเข้ใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:""},{seqNo:4,fullName:"นายกนก แก้ววิชิต",nickname:"",age:"31",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"1-7299-00272-90-2",nationalIdDigits:"1729900272902",startYearBE:"2557",addressNo:"38",moo:"ม.5",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:5,fullName:"นายอดิเรก วงศา",nickname:"",age:"31",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-00137-11-1",nationalIdDigits:"1720400137111",startYearBE:"2568",addressNo:"143/3",moo:"ม.4",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:6,fullName:"นายกฤษณะ โพธิ์เจริญ",nickname:"",age:"36",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7207-00105-90-7",nationalIdDigits:"1720700105907",startYearBE:"2566",addressNo:"120/1",moo:"ม.5",subdistrict:"ต.บ้านช้าง",district:"อ.สองพี่น้อง",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:7,fullName:"นายฐิติวัฒน์ ศรีสังข์งาม",nickname:"",age:"41",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-00025-67-3",nationalIdDigits:"1720400025673",startYearBE:"",addressNo:"158/1",moo:"ม.2",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:8,fullName:"นายขวัญฯชัย ปานสุวรรณ",nickname:"",age:"43",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"3-7208-00543-83-0",nationalIdDigits:"3720800543830",startYearBE:"2568",addressNo:"120/1",moo:"ม.6",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:9,fullName:"นายถาวร ภู่ระหงษ์",nickname:"",age:"47",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"3-7204-00401-76-1",nationalIdDigits:"3720400401761",startYearBE:"2566",addressNo:"173/2",moo:"ม.1",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:10,fullName:"นายสมชาย ศรีราปราณ",nickname:"",age:"52",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"3-7204-00476-57-4",nationalIdDigits:"3720400476574",startYearBE:"2564",addressNo:"219/10",moo:"ม.6",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:11,fullName:"นายชนวีร์ โผพ่วงพันธุ์",nickname:"",age:"24",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-01196-90-1",nationalIdDigits:"1720401196901",startYearBE:"2564",addressNo:"21/2",moo:"ม.7",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:12,fullName:"นายศราวุฒิ เจริญทรัพย์",nickname:"",age:"26",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-00154-82-1",nationalIdDigits:"1720400154821",startYearBE:"2568",addressNo:"198/3",moo:"ม.7",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:13,fullName:"นายณรงค์ฤทธิ์ สุภาบุตตรี",nickname:"",age:"31.8",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-00132-51-8",nationalIdDigits:"1720400132518",startYearBE:"2565",addressNo:"48/2",moo:"ม.2",subdistrict:"ต.ตะค่า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:14,fullName:"นายวันเฉลิม เขียววิราช",nickname:"",age:"38.8",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"2-7207-00021-21-3",nationalIdDigits:"2720700021213",startYearBE:"2567",addressNo:"59/1",moo:"ม.3",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"ถูกจับกุมเสพ",legacyPhotoRef:""},{seqNo:15,fullName:"นายกิตติพงศ์ สารศรี",nickname:"",age:"38",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-00095-15-9",nationalIdDigits:"1720400095159",startYearBE:"2567",addressNo:"80",moo:"ม.8",subdistrict:"ต.วัดโบสถ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:16,fullName:"นายสุธี ช้างเผือก",nickname:"",age:"42.11",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"3-7204-00491-27-1",nationalIdDigits:"3720400491271",startYearBE:"2565",addressNo:"140",moo:"ม.6",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:17,fullName:"นายเพชรสมบูรณื พันธุ์ศรี",nickname:"",age:"42",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"3-7208-00543-83-0",nationalIdDigits:"3720800543830",startYearBE:"2568",addressNo:"181",moo:"ม.4",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:18,fullName:"นายจีรศักดิ์ สุตตานนท์",nickname:"",age:"45.6",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"3-7204-00401-29-9",nationalIdDigits:"3720400401299",startYearBE:"2564",addressNo:"78/2",moo:"ม.5",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:19,fullName:"นายประสิทธิ์ มณีศรีสันโดด",nickname:"",age:"45",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"3-7204-00790-52-0",nationalIdDigits:"3720400790520",startYearBE:"2567",addressNo:"6",moo:"ม.8",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:20,fullName:"นายราชันย์ พันธ์จันทร์ดี",nickname:"",age:"25.2",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7299-00521-66-0",nationalIdDigits:"1729900521660",startYearBE:"2568",addressNo:"78",moo:"ม.4",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"",legacyPhotoRef:""},{seqNo:21,fullName:"นายชาตรี หมอยาดี",nickname:"",age:"27.6",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"1-6706-00178-13-0",nationalIdDigits:"1670600178130",startYearBE:"2565",addressNo:"35/1",moo:"ม.3",subdistrict:"ต.ตะค่า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:22,fullName:"นายกลย์ภัทร์ จันทร์แท้",nickname:"",age:"33.1",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"1-7299-00234-19-9",nationalIdDigits:"1729900234199",startYearBE:"2564",addressNo:"28/1",moo:"ม.6",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:23,fullName:"นายเพทาย เขียวอรุณ",nickname:"",age:"33.4",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"1-7204-00124-06-0",nationalIdDigits:"1720400124060",startYearBE:"2562",addressNo:"72/1",moo:"ม.6",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:24,fullName:"นายสนทยา กล่อมดี",nickname:"",age:"35.7",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"1-7204-00110-23-9",nationalIdDigits:"1720400110239",startYearBE:"2565",addressNo:"94/1",moo:"ม.6",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:25,fullName:"นายครรชิต วงศ์ขวัญเมือง",nickname:"",age:"39.8",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"1-7204-00022-01-1",nationalIdDigits:"1720400022011",startYearBE:"2565",addressNo:"37/1",moo:"ม.4",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:26,fullName:"นายถาวร ภู่ระหงษ์",nickname:"",age:"47.6",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"3-7204-00401-76-1",nationalIdDigits:"3720400401761",startYearBE:"2567",addressNo:"1173/2",moo:"ม.1",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:27,fullName:"นายวันชัย เนตรสว่าง",nickname:"",age:"58.3",diagnosis:"f 1550",diagnosisCode:"F15",nationalId:"3-7204-00068-52-2",nationalIdDigits:"3720400068522",startYearBE:"2567",addressNo:"1/1",moo:"ม.2",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:28,fullName:"นายศราวุธ โพธิกุล",nickname:"",age:"42",diagnosis:"F 1550/ F 10",diagnosisCode:"F15",nationalId:"3-7204-00388-24-1",nationalIdDigits:"3720400388241",startYearBE:"2565",addressNo:"127",moo:"ม.1",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:29,fullName:"นายศุภากร เกิดรัตน์",nickname:"",age:"21.4",diagnosis:"F 1550/ F 1220",diagnosisCode:"F15",nationalId:"1-1002-01711-37-8",nationalIdDigits:"1100201711378",startYearBE:"2568",addressNo:"102/2",moo:"ม.3",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:30,fullName:"พระศักดิ์ชาย หวานจริง",nickname:"",age:"54.4",diagnosis:"F 1550",diagnosisCode:"F15",nationalId:"3-7110-00237-31-0",nationalIdDigits:"3711000237310",startYearBE:"2563",addressNo:"8/1",moo:"ม.4",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:31,fullName:"นายเอกชัย พงษ์เทศ",nickname:"",age:"27.2",diagnosis:"F 1550/F 10",diagnosisCode:"F15",nationalId:"1-7299-00460-98-9",nationalIdDigits:"1729900460989",startYearBE:"2565",addressNo:"29/1",moo:"ม.2",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:32,fullName:"นายชัยมงคล พุทธศรี",nickname:"",age:"38",diagnosis:"F15",diagnosisCode:"F15",nationalId:"1-7204-00093-88-1",nationalIdDigits:"1720400093881",startYearBE:"2567",addressNo:"94/1",moo:"ม.7",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:33,fullName:"นายปัญญา ตาลน้อย",nickname:"",age:"45.1",diagnosis:"F15 F 10",diagnosisCode:"F15",nationalId:"3-7204-00421-92-3",nationalIdDigits:"3720400421923",startYearBE:"2560",addressNo:"83",moo:"ม.2",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:34,fullName:"นายอนันท์ ปานอุทัย",nickname:"",age:"40",diagnosis:"F1520",diagnosisCode:"F15",nationalId:"1-7204-00031-97-5",nationalIdDigits:"1720400031975",startYearBE:"2566",addressNo:"207/3",moo:"ม.9",subdistrict:"ต.ตะค่า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:35,fullName:"นายสำรวย แก้ววิชิต",nickname:"",age:"51.9",diagnosis:"F1520",diagnosisCode:"F15",nationalId:"3-7204-00379-57-9",nationalIdDigits:"3720400379579",startYearBE:"2565",addressNo:"110",moo:"ม.6",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:36,fullName:"นายเริงชัย เมืองนก",nickname:"",age:"34.8",diagnosis:"f1520",diagnosisCode:"F15",nationalId:"1-7299-00180-71-4",nationalIdDigits:"1729900180714",startYearBE:"2563",addressNo:"59",moo:"ม.5",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"",legacyPhotoRef:""},{seqNo:37,fullName:"นายวิชาญ เนียมหอม",nickname:"",age:"45.11",diagnosis:"f1520",diagnosisCode:"F15",nationalId:"3-7204-00713-68-1",nationalIdDigits:"3720400713681",startYearBE:"2560",addressNo:"262",moo:"ม.2",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:38,fullName:"นายเทอดศักดิ์ พลายยงค์",nickname:"",age:"51.5",diagnosis:"F1520",diagnosisCode:"F15",nationalId:"3-7204-00313-69-1",nationalIdDigits:"3720400313691",startYearBE:"2567",addressNo:"98",moo:"ม.3",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"เสียชีวิต",legacyPhotoRef:""},{seqNo:39,fullName:"นายสุทธิชัย นุ่มพันธุ์",nickname:"",age:"54.09",diagnosis:"f1520",diagnosisCode:"F15",nationalId:"3-7204-00611-41-2",nationalIdDigits:"3720400611412",startYearBE:"",addressNo:"64",moo:"ม.10",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"",legacyPhotoRef:""},{seqNo:40,fullName:"นายสุธิเดช แตงกํ่า",nickname:"",age:"22.4",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7299-00611-31-6",nationalIdDigits:"1729900611316",startYearBE:"2565",addressNo:"194",moo:"ม.1",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:41,fullName:"นายเอื้ออังกูร ธนาศักดิ์สิงห์",nickname:"",age:"29.6",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7299-00365-43-9",nationalIdDigits:"1729900365439",startYearBE:"2564",addressNo:"109",moo:"ม.2",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:42,fullName:"นายจงเจตต์ พันธ์ศรี",nickname:"",age:"31",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-1031-00235-35-2",nationalIdDigits:"1103100235352",startYearBE:"2565",addressNo:"61",moo:"ม.2",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:43,fullName:"น.ส.ชุดามาส อุตมะสอน",nickname:"",age:"33.7",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7299-00214-59-7",nationalIdDigits:"1729900214597",startYearBE:"2564",addressNo:"130",moo:"ม.5",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:44,fullName:"นายชาญณรงค์ ศรีจันทร์",nickname:"",age:"36",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00089-51-5",nationalIdDigits:"1720400089515",startYearBE:"2563",addressNo:"212/2",moo:"ม.6",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:45,fullName:"นายไกรสร ทองบุดดี",nickname:"",age:"37.7",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7299-00093-34-0",nationalIdDigits:"1729900093340",startYearBE:"2565",addressNo:"65",moo:"ม.10",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:46,fullName:"นายศักดิ์สิทธิ์ ปั้นเหน่งเพชร",nickname:"",age:"37.7",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00096-16-3",nationalIdDigits:"1720400096163",startYearBE:"2565",addressNo:"47",moo:"ม.4",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:47,fullName:"นายสุพัตรา เงินเรืองโรจน์",nickname:"",age:"38.5",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00089-79-5",nationalIdDigits:"1720400089795",startYearBE:"2565",addressNo:"149",moo:"ม.3",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:48,fullName:"นายธานินทร์ ทองบุดดี",nickname:"",age:"41.11",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00603-19-3",nationalIdDigits:"3720400603193",startYearBE:"2567",addressNo:"65",moo:"ม.10",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:49,fullName:"กรพัส สาลีผล",nickname:"",age:"42.8",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"3-7204-00824-25-4",nationalIdDigits:"3720400824254",startYearBE:"2568",addressNo:"22",moo:"ม.7",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:50,fullName:"นายสมัย พันสุข",nickname:"",age:"43.1",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7109-00405-77-3",nationalIdDigits:"3710900405773",startYearBE:"",addressNo:"78/2",moo:"ม.5",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:51,fullName:"นายปรีชา เกิดศิริ",nickname:"",age:"47.4",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"3-7204-00123-61-2",nationalIdDigits:"3720400123612",startYearBE:"2567",addressNo:"93/1",moo:"ม.",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:52,fullName:"นายคสูต โพธิ์มณี",nickname:"เน๊ะ",age:"48",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"3-7209-00963-86-5",nationalIdDigits:"3720900963865",startYearBE:"2566",addressNo:"12",moo:"ม.5",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:53,fullName:"นายบรรหาร พิญญกิจ",nickname:"",age:"23.4",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-01201-89-1",nationalIdDigits:"1720401201891",startYearBE:"2565",addressNo:"148",moo:"ม.6",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:54,fullName:"นายจิรายุส บุญรีย์",nickname:"",age:"26.10",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-1020-02987-02-2",nationalIdDigits:"1102002987022",startYearBE:"2561",addressNo:"96/3",moo:"ม.2",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:55,fullName:"นายสถาพร พึ่งผลิ",nickname:"",age:"28.6",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00146-04-7",nationalIdDigits:"1720400146047",startYearBE:"2563",addressNo:"333",moo:"ม.3",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:56,fullName:"นายธนวัฒน์ ดวงสังข์",nickname:"",age:"28",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7205-00115-40-2",nationalIdDigits:"1720500115402",startYearBE:"2565",addressNo:"115",moo:"ม.3",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:57,fullName:"นายภมร โพธิ์ศรี",nickname:"",age:"30",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00137-96-0",nationalIdDigits:"1720400137960",startYearBE:"2565",addressNo:"149/2",moo:"ม.4",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:58,fullName:"นายจิรนันต์ ครุฑทอง",nickname:"",age:"31.11",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00086-58-3",nationalIdDigits:"1720400086583",startYearBE:"2565",addressNo:"115",moo:"ม.3",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:59,fullName:"นายยงยุทธ โพธิ์ไพจิตร",nickname:"",age:"31.3",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7399-00476-69-9",nationalIdDigits:"1739900476699",startYearBE:"2563",addressNo:"18/2",moo:"ม.2",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:60,fullName:"นายมานพ ศรีภักดี",nickname:"",age:"31.4",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7299-00297-51-4",nationalIdDigits:"1729900297514",startYearBE:"2563",addressNo:"215/2",moo:"ม.4",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:61,fullName:"นายพัชราภา พงษ์สวัสดิ์",nickname:"",age:"32.10",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-8101-00185-43-7",nationalIdDigits:"1810100185437",startYearBE:"2564",addressNo:"101/1",moo:"ม.6",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:62,fullName:"นายธเนศ พันธุ์ชัย",nickname:"",age:"32.9",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7299-00246-54-5",nationalIdDigits:"1729900246545",startYearBE:"",addressNo:"10",moo:"ม.2",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"",legacyPhotoRef:""},{seqNo:63,fullName:"นางสาวจารุวรรณ ตรีรัตน์",nickname:"",age:"32",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00122-70-9",nationalIdDigits:"1720400122709",startYearBE:"2567",addressNo:"92/3",moo:"ม.2",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:64,fullName:"นายมารุต นิลเผือก",nickname:"",age:"33.1",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00124-38-8",nationalIdDigits:"1720400124388",startYearBE:"2568",addressNo:"2",moo:"ม.3",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"",legacyPhotoRef:""},{seqNo:65,fullName:"น.ส.กนกวรรณ นามมาแสง",nickname:"",age:"33.3",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00124-62-1",nationalIdDigits:"1720400124621",startYearBE:"2565",addressNo:"210",moo:"ม.5",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:66,fullName:"นายสราวุฒิ บุญศรี",nickname:"",age:"39",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00089-42-6",nationalIdDigits:"1720400089426",startYearBE:"2569",addressNo:"171/1",moo:"ม.1",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:67,fullName:"นายพิเชฐ ชัยสุวรรณดุสิต",nickname:"",age:"34.5",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7302-00166-23-1",nationalIdDigits:"1730200166231",startYearBE:"2563",addressNo:"116/2",moo:"ม.1",subdistrict:"ต.วัดโบสถ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"",legacyPhotoRef:""},{seqNo:68,fullName:"นายพิศิษฎ์ แก้วจินดา",nickname:"",age:"34.5",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7209-00149-48-7",nationalIdDigits:"1720900149487",startYearBE:"2567",addressNo:"46/1",moo:"ม.7",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:69,fullName:"น.ส.พรสวรรค์ คงคาหลวง",nickname:"",age:"34.8",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00116-05-9",nationalIdDigits:"1720400116059",startYearBE:"2563",addressNo:"172/3",moo:"ม.6",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:70,fullName:"นายพิภัทรพงษ์ คำเสียงใส",nickname:"",age:"35.2",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00112-91-6",nationalIdDigits:"1720400112916",startYearBE:"2563",addressNo:"116",moo:"ม.1",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:71,fullName:"นายฉัตรชัย วงษ์ประเสริฐ",nickname:"",age:"35.4",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7302-00144-88-1",nationalIdDigits:"1730200144881",startYearBE:"2566",addressNo:"16",moo:"ม.2",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:72,fullName:"นายธนวัฒน์ จันทร์มา",nickname:"",age:"36.3",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00105-76-6",nationalIdDigits:"1720400105766",startYearBE:"2560",addressNo:"123/1",moo:"ม.3",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:73,fullName:"นายเอกรินทร์ เหมือนทิพย์",nickname:"",age:"36.4",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00105-05-7",nationalIdDigits:"1720400105057",startYearBE:"2560",addressNo:"68/4",moo:"ม.8",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:74,fullName:"นายอลงกรณ์ รูปสวยดี",nickname:"กาน",age:"36",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-6098-00076-88-6",nationalIdDigits:"1609800076886",startYearBE:"2564",addressNo:"33",moo:"ม.1",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:""},{seqNo:75,fullName:"นายสรณรงค์ คุ้มเขตต์",nickname:"",age:"39.3",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00082-88-0",nationalIdDigits:"1720400082880",startYearBE:"2560",addressNo:"90",moo:"ม.5",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:76,fullName:"นายสราวุฒิ ดำขำ",nickname:"",age:"39.8",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7209-00044-85-5",nationalIdDigits:"1720900044855",startYearBE:"2563",addressNo:"20/1",moo:"ม.3",subdistrict:"ต.จรเข้ใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:77,fullName:"นายนเรนทร์ฤทธิ์ แก้วเจริญ",nickname:"",age:"39.9",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7299-00034-72-6",nationalIdDigits:"1729900034726",startYearBE:"2565",addressNo:"62/4",moo:"ม.2",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:78,fullName:"นายหทัยกิจ แซ่ตั้ง",nickname:"",age:"41.8",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-1020-00074-90-9",nationalIdDigits:"1102000074909",startYearBE:"2561",addressNo:"18/1",moo:"ม.4",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:79,fullName:"นายธนกร เพ็ชรว่าว",nickname:"",age:"43",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"3-7205-00209-25-0",nationalIdDigits:"3720500209250",startYearBE:"2563",addressNo:"180/3",moo:"ม.1",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:80,fullName:"นายชัยรัตน์ วงศ์พันธุ์",nickname:"",age:"45.8",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00610-74-2",nationalIdDigits:"3720400610742",startYearBE:"2561",addressNo:"48",moo:"ม.10",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:81,fullName:"นายเฉลิม อารีชม",nickname:"",age:"46.10",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7207-00229-79-3",nationalIdDigits:"3720700229793",startYearBE:"2566",addressNo:"42",moo:"ม.4",subdistrict:"ต.บ้านช้าง",district:"อ.สองพี่น้อง",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:82,fullName:"นายธวัชชัย แก้วกระจ่าง",nickname:"",age:"46",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00784-32-5",nationalIdDigits:"3720400784325",startYearBE:"2564",addressNo:"115",moo:"ม.6",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:83,fullName:"นายยงยุทธ นาคจังหวัด",nickname:"",age:"46.8",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00393-66-1",nationalIdDigits:"3720400393661",startYearBE:"2566",addressNo:"241",moo:"ม.1",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:84,fullName:"นายไกรศร งามขำ",nickname:"",age:"48.4",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"5-7207-00088-64-9",nationalIdDigits:"5720700088649",startYearBE:"2560",addressNo:"1/2",moo:"ม.2",subdistrict:"ต.วัดโบสถ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:85,fullName:"นายมนตรี บุญเขตต์",nickname:"ตรี",age:"48.5",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00584-21-1",nationalIdDigits:"3720400584211",startYearBE:"2562",addressNo:"46",moo:"ม.5",subdistrict:"ต.จรเข้ใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:""},{seqNo:86,fullName:"นายกิตตินันท์ วันทะนัง",nickname:"ก๊อฟ",age:"49",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00069-39-1",nationalIdDigits:"3720400069391",startYearBE:"2560",addressNo:"14/1",moo:"ม.2",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:87,fullName:"นายพีระกานต์ แจ่มจันทร์หาญ",nickname:"",age:"49.4",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-7204-00533-81-1",nationalIdDigits:"3720400533811",startYearBE:"2565",addressNo:"162/1",moo:"ม.2",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:88,fullName:"นายเกรียงศักดิ์ วัฒนชัยนันท์",nickname:"",age:"56",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"3-1006-00974-63-8",nationalIdDigits:"3100600974638",startYearBE:"2560",addressNo:"106",moo:"ม.6",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"ออกนอกพื้นที่",legacyPhotoRef:""},{seqNo:89,fullName:"นายธีรวัฒน์ โพธิ์ไพจิตร",nickname:"",age:"",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-1020-00969-05-1",nationalIdDigits:"1102000969051",startYearBE:"2565",addressNo:"179/1",moo:"ม.4",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:90,fullName:"นายรัตนาพร เอี่ยมสอาด",nickname:"เบียร์",age:"",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7204-00139-97-1",nationalIdDigits:"1720400139971",startYearBE:"2560",addressNo:"176/4",moo:"ม.1",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:91,fullName:"นายสมชาย เกิดแก้ว",nickname:"เหยิน",age:"34.1",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-1599-00158-90-1",nationalIdDigits:"1159900158901",startYearBE:"2560",addressNo:"48/2",moo:"ม.5",subdistrict:"ต.จรเข้ใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:""},{seqNo:92,fullName:"นายสุรชัย บุญช่วย",nickname:"ชัย",age:"28",diagnosis:"F1550",diagnosisCode:"F15",nationalId:"1-7204-00143-33-1",nationalIdDigits:"1720400143331",startYearBE:"2568",addressNo:"32/1",moo:"ม.4",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:""},{seqNo:93,fullName:"น.ส.สมนึก พรบำรุง",nickname:"",age:"42.6",diagnosis:"F1550/...",diagnosisCode:"F15",nationalId:"3-1412-00176-22-1",nationalIdDigits:"3141200176221",startYearBE:"2563",addressNo:"60/1",moo:"ม.2",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:94,fullName:"นายณรหรรถ พันธุ์ขะวงศ์",nickname:"",age:"28",diagnosis:"f1550/F 20",diagnosisCode:"F15",nationalId:"1-7299-00414-62-6",nationalIdDigits:"1729900414626",startYearBE:"2561",addressNo:"66/1",moo:"ม.6",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:95,fullName:"นายพรศักดิ์ กิจเทวี",nickname:"",age:"36.6",diagnosis:"f1550",diagnosisCode:"F15",nationalId:"1-7299-00121-73-4",nationalIdDigits:"1729900121734",startYearBE:"2560",addressNo:"178",moo:"ม.2",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:96,fullName:"นายสงกรานต์ เจริญผล",nickname:"",age:"45.6",diagnosis:"F1550/F10",diagnosisCode:"F15",nationalId:"3-7204-00789-00-9",nationalIdDigits:"3720400789009",startYearBE:"2560",addressNo:"147",moo:"ม.8",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:97,fullName:"นายชินรัตน์ โพธิ์ไพจิตร",nickname:"",age:"33",diagnosis:"F15",diagnosisCode:"F15",nationalId:"2-8401-00025-35-7",nationalIdDigits:"2840100025357",startYearBE:"2560",addressNo:"189",moo:"ม.5",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:98,fullName:"นายมารุต สมบูรณ์พูลสวัสดิ์",nickname:"",age:"",diagnosis:"F15",diagnosisCode:"F15",nationalId:"1-7204-00085-55-2",nationalIdDigits:"1720400085552",startYearBE:"",addressNo:"84",moo:"ม.1",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:99,fullName:"นายนเรศ มั่งบุญชัง",nickname:"ต๋อม",age:"33",diagnosis:"F15",diagnosisCode:"F15",nationalId:"3-7204-00467-48-6",nationalIdDigits:"3720400467486",startYearBE:"",addressNo:"294",moo:"ม.5",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"โดนจำคุก",legacyPhotoRef:""},{seqNo:100,fullName:"นายสุวรรณ นะกองดี",nickname:"",age:"35",diagnosis:"F15",diagnosisCode:"F15",nationalId:"1-7204-00118-83-3",nationalIdDigits:"1720400118833",startYearBE:"",addressNo:"139/1",moo:"ม.6",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"แดง",note:"",legacyPhotoRef:""},{seqNo:101,fullName:"นายสุวภัทร วัชโรสุริโย",nickname:"",age:"46",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00234-59-7",nationalIdDigits:"3720400234597",startYearBE:"",addressNo:"68",moo:"ม.1",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:102,fullName:"นายถาวร ภู่ระหงษ์",nickname:"",age:"47",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00401-76-1",nationalIdDigits:"3720400401761",startYearBE:"2568",addressNo:"173/2",moo:"ม.1",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:103,fullName:"นายอาณัติ อุ่นเมือง",nickname:"",age:"38",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00079-26-6",nationalIdDigits:"1729900079266",startYearBE:"2568",addressNo:"69/1",moo:"ม.4",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:104,fullName:"นายชลอ อักกุลดี",nickname:"",age:"78",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00194-69-2",nationalIdDigits:"3720400194692",startYearBE:"2568",addressNo:"7",moo:"ม.8",subdistrict:"ต.ตะค่า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:105,fullName:"นายสมศักดิ์ กลิ่นสาตร์",nickname:"",age:"41",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00007-38-9",nationalIdDigits:"1729900007389",startYearBE:"2568",addressNo:"292",moo:"ม.4",subdistrict:"ต.สระแก้ว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:106,fullName:"น.ส.สุกัญญา เสียงดัง",nickname:"",age:"28",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00382-40-6",nationalIdDigits:"1729900382406",startYearBE:"2568",addressNo:"162",moo:"ม.10",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:107,fullName:"น.ส.ศิริวรรณ อิสสอาด",nickname:"",age:"36",diagnosis:"",diagnosisCode:"",nationalId:"1-1022-00065-22-9",nationalIdDigits:"1102200065229",startYearBE:"2568",addressNo:"62",moo:"ม.4",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:108,fullName:"นายธนพัฒน์ คล้ายสุบรรณ",nickname:"",age:"24",diagnosis:"",diagnosisCode:"",nationalId:"1-1015-01100-10-3",nationalIdDigits:"1101501100103",startYearBE:"2568",addressNo:"94",moo:"ม.5",subdistrict:"ต.กฤษณา",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:109,fullName:"นายธีรพงศ์ พรหม",nickname:"",age:"50",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00059-73-7",nationalIdDigits:"1729900059737",startYearBE:"2568",addressNo:"189/1",moo:"ม.3",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:110,fullName:"นายภูมิศิลป์ อินทรขันตี",nickname:"ภูมิ",age:"22",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00652-97-7",nationalIdDigits:"1729900652977",startYearBE:"2568",addressNo:"172",moo:"ม.3",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"ออทิสติก, สมาธิสั้น",legacyPhotoRef:""},{seqNo:111,fullName:"นายอาธิป พวงแก้ว",nickname:"หนึ่ง",age:"45",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00335-50-4",nationalIdDigits:"3720400335504",startYearBE:"2567",addressNo:"278/10",moo:"ม.5",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"ผู้ป่วย รักษา เรื่องสุรา",legacyPhotoRef:""},{seqNo:112,fullName:"นายบรรเจิด แก้วปานกัน",nickname:"เจิด",age:"44",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00563-93-1",nationalIdDigits:"3720400563931",startYearBE:"2567",addressNo:"95/1",moo:"ม.11",subdistrict:"ต.โคกคราม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"ส้ม",note:"รับการบำบัดรักษาอยู่ ที่ จ.นครศรีฯ",legacyPhotoRef:""},{seqNo:113,fullName:"นายนิรันดร์ หนูใจหาญ",nickname:"",age:"25",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00196-49-8",nationalIdDigits:"1720400196498",startYearBE:"2569",addressNo:"187",moo:"ม.4",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:114,fullName:"นายธีระวิทย์ ทองอยู่",nickname:"",age:"33",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00219-54-8",nationalIdDigits:"1729900219548",startYearBE:"2568",addressNo:"60/2",moo:"ม.8",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:115,fullName:"นายนิรุจน์ ขำโสภา",nickname:"",age:"37",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00088-48-9",nationalIdDigits:"1720400088489",startYearBE:"2567",addressNo:"285/3",moo:"ม.5",subdistrict:"ต.บางปลาม้า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:116,fullName:"นางจันทร์เพ็ญ จอมคำสิงห์",nickname:"",age:"55",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00329-31-8",nationalIdDigits:"3720400329318",startYearBE:"2568",addressNo:"10",moo:"ม.6",subdistrict:"ต.ตะค่า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:117,fullName:"นายศักดิ์วุฒิ อาภรณ์รัตน์",nickname:"",age:"49",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00780-41-9",nationalIdDigits:"3720400780419",startYearBE:"2568",addressNo:"171",moo:"ม.3",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:118,fullName:"นายอดิศร ทุมทา",nickname:"",age:"37",diagnosis:"",diagnosisCode:"",nationalId:"1-6703-00147-30-1",nationalIdDigits:"1670300147301",startYearBE:"2568",addressNo:"139",moo:"ม.5",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:119,fullName:"นายสำเริง พรมปัจจะเวก",nickname:"",age:"53",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00821-23-9",nationalIdDigits:"3720400821239",startYearBE:"2568",addressNo:"90",moo:"ม.4",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:120,fullName:"นายวินัย ธัญญาผล",nickname:"",age:"48",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00068-02-6",nationalIdDigits:"3720400068026",startYearBE:"2568",addressNo:"20/1",moo:"ม.2",subdistrict:"ต.บางใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:121,fullName:"นายนพดล ติรณพันธ์",nickname:"",age:"33",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00121-21-4",nationalIdDigits:"1720400121214",startYearBE:"2568",addressNo:"81",moo:"ม.7",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:122,fullName:"นายสถาพล กรัดกระยาง",nickname:"",age:"34",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00151-45-5",nationalIdDigits:"1729900151455",startYearBE:"2567",addressNo:"274/4",moo:"ม.2",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:123,fullName:"นายพะเยาว์ กุมภัณฑ์",nickname:"",age:"53",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00715-28-5",nationalIdDigits:"3720400715285",startYearBE:"2567",addressNo:"293/1",moo:"ม.8",subdistrict:"ต.สาลี",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:124,fullName:"นายวศิน ใจพราหมณ์",nickname:"",age:"25",diagnosis:"",diagnosisCode:"",nationalId:"2-7299-00029-43-7",nationalIdDigits:"2729900029437",startYearBE:"2569",addressNo:"191",moo:"ม.4",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:125,fullName:"นายกฤษฎา ดนตรีพงษ์",nickname:"",age:"29",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00148-98-8",nationalIdDigits:"1720400148988",startYearBE:"2569",addressNo:"162/2",moo:"ม.2",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:126,fullName:"นายชัยพล สุภานิชิ",nickname:"",age:"31",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00130-40-0",nationalIdDigits:"1720400130400",startYearBE:"2567",addressNo:"94",moo:"ม.4",subdistrict:"ต.ไผ่กองดิน",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:127,fullName:"นายศิรชัย อภิเดช",nickname:"",age:"43",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00207-40-9",nationalIdDigits:"3720400207409",startYearBE:"2567",addressNo:"87",moo:"ม.1",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:128,fullName:"นายประสิทธิ์ จานสิบสี",nickname:"",age:"47",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00219-05-9",nationalIdDigits:"1720400219059",startYearBE:"2567",addressNo:"28",moo:"ม.7",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:129,fullName:"นายเอกพงษ์ เจริญผล",nickname:"",age:"38",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00082-57-1",nationalIdDigits:"1720400082571",startYearBE:"2567",addressNo:"65/1",moo:"ม.1",subdistrict:"ต.องครักษ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:130,fullName:"นายประณต เหง้าพรมมินทร์",nickname:"นต",age:"26",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00153-81-7",nationalIdDigits:"1720400153817",startYearBE:"2568",addressNo:"75/1",moo:"ม.7",subdistrict:"ต.จรเข้ใหญ่",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:""},{seqNo:131,fullName:"นายสิทธิพล โกมลธร",nickname:"",age:"31",diagnosis:"",diagnosisCode:"",nationalId:"1-1037-01575-02-6",nationalIdDigits:"1103701575026",startYearBE:"2567",addressNo:"144/1",moo:"ม.2",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:132,fullName:"นายประสิทธิ์ ฤกษ์โหรา",nickname:"",age:"38",diagnosis:"",diagnosisCode:"",nationalId:"1-1014-00704-86-1",nationalIdDigits:"1101400704861",startYearBE:"2567",addressNo:"83",moo:"ม.4",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:133,fullName:"นายประพันธ์ ปิ่นทอง",nickname:"",age:"44",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00661-62-2",nationalIdDigits:"3720400661622",startYearBE:"2567",addressNo:"133",moo:"ม.5",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:134,fullName:"นายสุนทร แจ่มจันทร์",nickname:"",age:"52",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00533-80-2",nationalIdDigits:"3720400533802",startYearBE:"2567",addressNo:"162/1",moo:"ม.2",subdistrict:"ต.บ้านแหลม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:135,fullName:"นายมานพ กรรไกร",nickname:"",age:"27",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00410-71-0",nationalIdDigits:"1729900410710",startYearBE:"2567",addressNo:"11",moo:"ม.9",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:136,fullName:"นายสมชาย ทองนวล",nickname:"",age:"66",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00615-92-2",nationalIdDigits:"3720400615922",startYearBE:"2567",addressNo:"1",moo:"ม.2",subdistrict:"ต.มะขามล้ม",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:137,fullName:"นายธนัดชัย ขันทอง",nickname:"",age:"39",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00082-98-7",nationalIdDigits:"1720400082987",startYearBE:"2568",addressNo:"69",moo:"ม.3",subdistrict:"ต.วังน้ำเย็น",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:138,fullName:"นายสัญญา ชัยวิเชียร",nickname:"",age:"37",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00103-24-1",nationalIdDigits:"1720400103241",startYearBE:"2569",addressNo:"295",moo:"ม.2",subdistrict:"ต.วังน้ำเย็น",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:139,fullName:"นายธวัช บัวน้อย",nickname:"",age:"59",diagnosis:"",diagnosisCode:"",nationalId:"3-6005-00248-21-3",nationalIdDigits:"3600500248213",startYearBE:"2567",addressNo:"67/3",moo:"ม.3",subdistrict:"ต.หนองกรด",district:"อ.บรรพตพิสัย",province:"จ.นครสวรรค์",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:140,fullName:"นายสุรพล บาเปี ย",nickname:"",age:"50",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00261-75-6",nationalIdDigits:"3720400261756",startYearBE:"2567",addressNo:"157",moo:"ม.1",subdistrict:"ต.วังน้ำเย็น",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:141,fullName:"นายอาทร บุญเสม",nickname:"",age:"36",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00112-74-3",nationalIdDigits:"1729900112743",startYearBE:"2567",addressNo:"45/1",moo:"ม.3",subdistrict:"ต.วังน้ำเย็น",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:142,fullName:"นายณัฐพล ปัตเวก",nickname:"",age:"28",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00472-36-7",nationalIdDigits:"1729900472367",startYearBE:"2569",addressNo:"51/5",moo:"ม.5",subdistrict:"ต.วัดโบสถ์",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:143,fullName:"นายไพรัช ศรีดี",nickname:"",age:"43",diagnosis:"",diagnosisCode:"",nationalId:"3-7204-00134-18-5",nationalIdDigits:"3720400134185",startYearBE:"2569",addressNo:"18",moo:"ม.3",subdistrict:"ต.ตะค่า",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:144,fullName:"นายชัยวัฒน์ เพิ่มพูล",nickname:"",age:"19",diagnosis:"",diagnosisCode:"",nationalId:"1-7299-00735-75-9",nationalIdDigits:"1729900735759",startYearBE:"2568",addressNo:"72",moo:"ม.2",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:145,fullName:"น.ส.จารุวรรณ ตรีรัตน์",nickname:"",age:"33",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00122-70-9",nationalIdDigits:"1720400122709",startYearBE:"2568",addressNo:"92/3",moo:"ม.2",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:146,fullName:"นายเฉลิมชัย คงชาตรี",nickname:"",age:"35",diagnosis:"",diagnosisCode:"",nationalId:"1-7204-00102-53-8",nationalIdDigits:"1720400102538",startYearBE:"2568",addressNo:"65/3",moo:"ม.6",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:147,fullName:"นายมรกต ฉิมวัย",nickname:"",age:"43",diagnosis:"",diagnosisCode:"",nationalId:"3-1303-00236-45-3",nationalIdDigits:"3130300236453",startYearBE:"2568",addressNo:"4",moo:"ม.3",subdistrict:"ต.วัดดาว",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"",note:"",legacyPhotoRef:""},{seqNo:148,fullName:"น.ส.สุชาดา เที่ยงตรง",nickname:"",age:"",diagnosis:"",diagnosisCode:"",nationalId:"",nationalIdDigits:"",startYearBE:"2569",addressNo:"150/2",moo:"ม.2",subdistrict:"ต.วังน้ำเย็น",district:"อ.บางปลาม้า",province:"จ.สุพรรณบุรี",colorGroup:"เขียว",note:"",legacyPhotoRef:""}],ho="bangplama001",fo="bangplama001@bangplama.local",Gv="49073c81ad561de4ba604af5bd155c97216d1c0828fc14dac2e2bad08b6827a2",po="1234";function jv(n){return`p_${Ht(n)}@bangplama.local`}function zv(n){return`BPM#${n}#Station2026`}const he={patients:"bpm_demo_patients_v1",officers:"bpm_demo_officers_v1",logs:"bpm_demo_logs_v1",session:"bpm_demo_session_v1"};function Ke(n,e){try{const t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}}function ct(n,e){localStorage.setItem(n,JSON.stringify(e))}function Hv(){const n=Ke(he.patients,null);if(!n||!n.length){const i=new Date().toISOString(),s=Go.map(r=>({id:`seed_${String(r.seqNo).padStart(4,"0")}`,...r,photos:[],gps:null,createdBy:{username:"system",fullName:"นำเข้าจากไฟล์โรงพัก (บุคคลวิกลจริต)",callsign:"ระบบ",position:"ข้อมูลตั้งต้น",role:"system"},createdAt:i,updatedBy:{username:"system",fullName:"นำเข้าจากไฟล์โรงพัก (บุคคลวิกลจริต)",callsign:"ระบบ",position:"ข้อมูลตั้งต้น",role:"system"},updatedAt:i}));ct(he.patients,s)}const e=Ke(he.officers,null);if(!e||!e.length){const i=Bs.map(s=>({...s,active:!0}));ct(he.officers,i)}Ke(he.logs,null)||ct(he.logs,[])}class Wv{constructor(){this.useFirebase=$v(),this.app=null,this.auth=null,this.db=null,this.currentUser=null,this.localListeners={patients:new Set,officers:new Set,logs:new Set},this.useFirebase?(this.app=Uu(Ai),this.auth=ky(this.app),this.db=Cv(this.app)):Hv()}getMode(){return this.useFirebase?"firebase":"demo"}initAuthListener(e){if(!this.useFirebase){const t=Ke(he.session,null);return this.currentUser=t,e(t),()=>{}}return Im(this.auth,async t=>{if(!t){this.currentUser=null,e(null);return}try{const i=(t.email||"").toLowerCase();if(i===fo){this.currentUser={uid:t.uid,username:ho,role:"admin",fullName:"ผู้ดูแลระบบ สภ.บางปลาม้า",callsign:"ADMIN",position:"ผู้ดูแลระบบ",phone:"-"},e(this.currentUser);return}const s=i.match(/^p_(\d{9,10})@bangplama\.local$/);if(!s){await ws(this.auth),this.currentUser=null,e(null);return}const r=s[1],a=await oo(it(this.db,"officers",r));let l=a.exists()?a.data():Bs.find(u=>u.phone===r);if(!l||l.active===!1){await ws(this.auth),this.currentUser=null,e(null);return}this.currentUser={uid:t.uid,username:r,role:"officer",fullName:l.fullName,callsign:l.callsign||"-",position:l.position||"-",phone:l.phone||r,phoneDisplay:l.phoneDisplay||_i(r)},e(this.currentUser)}catch(i){console.error("Auth state resolution error:",i),this.currentUser=null,e(null)}})}async login(e,t){const i=String(e||"").trim(),s=String(t||"");if(!i||!s)throw new Error("กรุณากรอกชื่อผู้ใช้และรหัสผ่านให้ครบถ้วน");if(i.toLowerCase()===ho){if(await Is(s)!==Gv)throw new Error("รหัสผ่านผู้ดูแลระบบไม่ถูกต้อง");const b={username:ho,role:"admin",fullName:"ผู้ดูแลระบบ สภ.บางปลาม้า",callsign:"ADMIN",position:"ผู้ดูแลระบบ",phone:"-"};if(!this.useFirebase)return this.currentUser=b,ct(he.session,b),b;let C;try{C=await fc(this.auth,fo,s)}catch(D){if(D.code==="auth/user-not-found"||D.code==="auth/invalid-credential")try{C=await dc(this.auth,fo,s)}catch(S){throw S.code==="auth/email-already-in-use"?new Error("รหัสผ่านผู้ดูแลระบบไม่ถูกต้อง"):S.code==="auth/operation-not-allowed"?new Error("กรุณาเปิดใช้งาน Email/Password ใน Firebase Authentication Console ก่อนใช้งาน"):S}else throw D}return this.currentUser={...b,uid:C.user.uid},await this.ensureFirebaseSeededIfEmpty(),this.currentUser}const r=Ht(i);if(r.length<9||r.length>10)throw new Error("ไม่พบบัญชีผู้ใช้ กรุณากรอกเบอร์โทรศัพท์ตำรวจ 10 หลักให้ถูกต้อง");if(s!==po)throw new Error("รหัสผ่านโรงพักไม่ถูกต้อง");if(!this.useFirebase){const b=Ke(he.officers,[]).find(D=>Ht(D.phone)===r&&D.active!==!1);if(!b)throw new Error("ไม่พบเบอร์โทรศัพท์นี้ในรายชื่อข้าราชการตำรวจ สภ.บางปลาม้า");const C={username:r,role:"officer",fullName:b.fullName,callsign:b.callsign||"-",position:b.position||"-",phone:b.phone,phoneDisplay:b.phoneDisplay||_i(r)};return this.currentUser=C,ct(he.session,C),C}const a=Bs.find(_=>_.phone===r);if(!a){const _=await Is(`${r}:${s}`),b=await oo(it(this.db,"officer_auth",_));if(!b.exists()||b.data().active===!1)throw new Error("ไม่พบเบอร์โทรศัพท์นี้ในรายชื่อข้าราชการตำรวจ สภ.บางปลาม้า")}const l=jv(r),u=zv(s);let h;try{h=await fc(this.auth,l,u)}catch(_){if(_.code==="auth/user-not-found"||_.code==="auth/invalid-credential")try{h=await dc(this.auth,l,u)}catch(b){throw b.code==="auth/email-already-in-use"?new Error("รหัสผ่านไม่ถูกต้อง กรุณาติดต่อผู้ดูแลระบบ"):b.code==="auth/operation-not-allowed"?new Error("กรุณาเปิดใช้งาน Email/Password ใน Firebase Authentication Console ก่อนใช้งาน"):b}else throw _}let p=await oo(it(this.db,"officers",r));!p.exists()&&a&&(p=null);const m=p?.exists()?p.data():a;if(!m||m.active===!1)throw await ws(this.auth),new Error("บัญชีตำรวจนี้ถูกระงับการใช้งานหรือไม่พบในระบบ");return this.currentUser={uid:h.user.uid,username:r,role:"officer",fullName:m.fullName,callsign:m.callsign||"-",position:m.position||"-",phone:r,phoneDisplay:m.phoneDisplay||_i(r)},this.currentUser}async logout(){if(this.currentUser=null,!this.useFirebase){localStorage.removeItem(he.session);return}await ws(this.auth)}async ensureFirebaseSeededIfEmpty(e=!1){if(!this.useFirebase)return{officersSeeded:0,patientsSeeded:0};if(this.currentUser?.role!=="admin")return{officersSeeded:0,patientsSeeded:0};let t=0,i=0;const s=await ao(Cs(qt(this.db,"officers"),ro(1)));if(e||s.empty){const a=Au(this.db),l=new Date().toISOString();for(const u of Bs){const h=it(this.db,"officers",u.phone);a.set(h,{...u,active:!0,updatedAt:l},{merge:!0});const p=await Is(`${u.phone}:${po}`);a.set(it(this.db,"officer_auth",p),{active:!0},{merge:!0}),t+=1}await a.commit()}const r=await ao(Cs(qt(this.db,"patients"),ro(1)));if(e||r.empty){const a=new Date().toISOString(),l={username:"system",fullName:"นำเข้าจากไฟล์โรงพัก (บุคคลวิกลจริต)",callsign:"ระบบ",position:"ข้อมูลตั้งต้น",role:"system"};for(let u=0;u<Go.length;u+=100){const h=Go.slice(u,u+100),p=Au(this.db);for(const m of h){const _=`seed_${String(m.seqNo).padStart(4,"0")}`;p.set(it(this.db,"patients",_),{...m,photos:[],gps:null,createdBy:l,createdAt:a,updatedBy:l,updatedAt:a},{merge:!0}),i+=1}await p.commit()}i>0&&await this.writeAuditLog({action:"SEED_IMPORT",targetType:"patient",targetId:"initial_seed",targetName:`นำเข้าข้อมูลตั้งต้น ${i} รายการ และตำรวจ ${t} นาย`,targetNationalId:"-",summary:`นำเข้าข้อมูลตั้งต้นจากไฟล์ สภ.บางปลาม้า (${i} รายชื่อ)`,changes:{}})}return{officersSeeded:t,patientsSeeded:i}}subscribePatients(e,t){if(!this.useFirebase){const s=()=>{const r=Ke(he.patients,[]);e([...r].sort((a,l)=>(a.seqNo||99999)-(l.seqNo||99999)))};return this.localListeners.patients.add(s),s(),()=>this.localListeners.patients.delete(s)}const i=Cs(qt(this.db,"patients"));return co(i,s=>{const r=s.docs.map(a=>({id:a.id,...a.data()}));r.sort((a,l)=>{const u=Number(a.seqNo||999999),h=Number(l.seqNo||999999);return u!==h?u-h:String(l.updatedAt||"").localeCompare(String(a.updatedAt||""))}),e(r)},s=>{console.error("Firestore patients listener error:",s),t?.(s)})}_notifyLocal(e){for(const t of this.localListeners[e])try{t()}catch(i){console.error(i)}}_getActor(){const e=this.currentUser;if(!e)throw new Error("กรุณาเข้าสู่ระบบก่อนทำรายการ");return{username:e.username,fullName:e.fullName,callsign:e.callsign||"-",position:e.position||"-",role:e.role}}async savePatient(e,t=null){const i=this._getActor(),s=new Date().toISOString(),r=ut(e.nationalId),a=r?mo(r):"";if(new Blob([JSON.stringify(e.photos||[])]).size>820*1024)throw new Error("ขนาดรูปภาพรวมใหญ่เกินขีดจำกัดฐานข้อมูล (สูงสุดประมาณ 800 KB ต่อรายการ) กรุณาลดจำนวนภาพ");const u={nationalId:a,nationalIdDigits:r,fullName:String(e.fullName||"").trim(),nickname:String(e.nickname||"").trim(),age:String(e.age||"").trim(),startYearBE:String(e.startYearBE||"").trim(),colorGroup:String(e.colorGroup||"").trim(),addressNo:String(e.addressNo||"").trim(),moo:String(e.moo||"").trim(),subdistrict:String(e.subdistrict||"").trim(),district:String(e.district||"").trim(),province:String(e.province||"").trim(),note:String(e.note||"").trim(),diagnosis:t?.diagnosis||e.diagnosis||"",diagnosisCode:t?.diagnosisCode||e.diagnosisCode||"",legacyPhotoRef:"",photos:Array.isArray(e.photos)?e.photos:[],gps:e.gps||null,updatedBy:i,updatedAt:s};if(t?.id){const{changes:h,summary:p}=Lf(t,u),m={...t,...u};if(this.useFirebase){const{id:C,...D}=m;await Uv(it(this.db,"patients",t.id),D)}else{const C=Ke(he.patients,[]),D=C.findIndex(S=>S.id===t.id);D>=0&&(C[D]=m,ct(he.patients,C),this._notifyLocal("patients"))}const{id:_,...b}=t;return await this.writeAuditLog({action:"UPDATE",targetType:"patient",targetId:t.id,targetName:u.fullName,targetNationalId:a||"-",summary:p,changes:h,previousSnapshot:b}),{mode:"update",patient:m}}else{let h=1;if(this.useFirebase){(await ao(qt(this.db,"patients"))).forEach(C=>{const D=Number(C.data().seqNo||0);D>=h&&(h=D+1)});const m={seqNo:h,...u,createdBy:i,createdAt:s},_=await bu(qt(this.db,"patients"),m),b={id:_.id,...m};return await this.writeAuditLog({action:"CREATE",targetType:"patient",targetId:_.id,targetName:u.fullName,targetNationalId:a||"-",summary:`เพิ่มรายชื่อบุคคลวิกลจริตใหม่ (กลุ่มสี: ${u.colorGroup||"ไม่ระบุ"})`,changes:{}}),{mode:"create",patient:b}}else{const p=Ke(he.patients,[]);h=p.reduce((_,b)=>Math.max(_,Number(b.seqNo||0)),0)+1;const m={id:`p_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,seqNo:h,...u,createdBy:i,createdAt:s};return p.push(m),ct(he.patients,p),this._notifyLocal("patients"),await this.writeAuditLog({action:"CREATE",targetType:"patient",targetId:m.id,targetName:u.fullName,targetNationalId:a||"-",summary:`เพิ่มรายชื่อบุคคลวิกลจริตใหม่ (กลุ่มสี: ${u.colorGroup||"ไม่ระบุ"})`,changes:{}}),{mode:"create",patient:m}}}}async deletePatient(e){if(this._getActor(),!e?.id)throw new Error("ไม่พบรหัสเอกสารที่ต้องการลบ");if(this.useFirebase)await Bv(it(this.db,"patients",e.id));else{const s=Ke(he.patients,[]);ct(he.patients,s.filter(r=>r.id!==e.id)),this._notifyLocal("patients")}const{id:t,...i}=e;await this.writeAuditLog({action:"DELETE",targetType:"patient",targetId:e.id,targetName:e.fullName||"(ไม่ระบุชื่อ)",targetNationalId:e.nationalId||"-",summary:`ลบรายชื่อออกจากระบบ (ลำดับที่ ${e.seqNo||"-"})`,changes:{},previousSnapshot:i})}async restoreFromAuditLog(e){if(this.currentUser?.role!=="admin")throw new Error("เฉพาะผู้ดูแลระบบเท่านั้นที่สามารถกู้คืนข้อมูลได้");const t=e?.previousSnapshot;if(!t||!e?.targetId)throw new Error("ไม่มีสำเนาข้อมูลเดิมสำหรับกู้คืนในรายการนี้");const i=this._getActor(),s=new Date().toISOString(),{id:r,...a}=t,l={...a,createdBy:a.createdBy||i,createdAt:a.createdAt||s,updatedBy:i,updatedAt:s};if(this.useFirebase)await lo(it(this.db,"patients",e.targetId),l);else{const h=Ke(he.patients,[]),p=h.findIndex(_=>_.id===e.targetId),m={id:e.targetId,...l};p>=0?h[p]=m:h.push(m),ct(he.patients,h),this._notifyLocal("patients")}const u=e.action==="DELETE"?"ลบ":"แก้ไข";return await this.writeAuditLog({action:"RESTORE",targetType:"patient",targetId:e.targetId,targetName:l.fullName||e.targetName||"(ไม่ระบุชื่อ)",targetNationalId:l.nationalId||e.targetNationalId||"-",summary:`กู้คืนข้อมูลกลับเป็นสภาพก่อน${u}โดย ${e.actor?.fullName||"-"}`,changes:{}}),l}async writeAuditLog({action:e,targetType:t,targetId:i,targetName:s,targetNationalId:r,summary:a,changes:l,previousSnapshot:u}){const h=this._getActor(),p={action:e,targetType:t,targetId:String(i||""),targetName:String(s||""),targetNationalId:String(r||"-"),actor:h,summary:String(a||""),changes:l||{},timestamp:new Date().toISOString()};if(u&&typeof u=="object"&&(p.previousSnapshot=u),!this.useFirebase){const m=Ke(he.logs,[]);m.unshift({id:`log_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,...p}),ct(he.logs,m.slice(0,1e3)),this._notifyLocal("logs");return}await bu(qt(this.db,"audit_logs"),p)}subscribeAuditLogs(e,t){if(this.currentUser?.role!=="admin")return e([]),()=>{};if(!this.useFirebase){const s=()=>{const r=Ke(he.logs,[]);e([...r])};return this.localListeners.logs.add(s),s(),()=>this.localListeners.logs.delete(s)}const i=Cs(qt(this.db,"audit_logs"),Fv("timestamp","desc"),ro(300));return co(i,s=>{e(s.docs.map(r=>({id:r.id,...r.data()})))},s=>{console.error("Audit logs listener error:",s),t?.(s)})}subscribeOfficers(e,t){if(this.currentUser?.role!=="admin")return e([]),()=>{};if(!this.useFirebase){const i=()=>{const s=Ke(he.officers,[]);e([...s].sort((r,a)=>(r.seq||999)-(a.seq||999)))};return this.localListeners.officers.add(i),i(),()=>this.localListeners.officers.delete(i)}return co(qt(this.db,"officers"),i=>{const s=i.docs.map(r=>({id:r.id,...r.data()}));s.sort((r,a)=>(r.seq||999)-(a.seq||999)),e(s)},i=>t?.(i))}async saveOfficer(e){if(this.currentUser?.role!=="admin")throw new Error("เฉพาะผู้ดูแลระบบเท่านั้นที่สามารถจัดการรายชื่อตำรวจได้");const t=Ht(e.phone);if(t.length<9||t.length>10)throw new Error("กรุณากรอกเบอร์โทรศัพท์ 9-10 หลักให้ถูกต้อง");const i={phone:t,phoneDisplay:_i(t),fullName:String(e.fullName||"").trim(),position:String(e.position||"").trim(),callsign:String(e.callsign||"").trim(),category:String(e.category||"ชั้นประทวน").trim(),note:String(e.note||"").trim(),active:e.active!==!1,updatedAt:new Date().toISOString()};if(!i.fullName)throw new Error("กรุณากรอกยศ ชื่อ-สกุล");if(this.useFirebase){await lo(it(this.db,"officers",t),i,{merge:!0});const s=await Is(`${t}:${po}`);await lo(it(this.db,"officer_auth",s),{active:i.active},{merge:!0})}else{const s=Ke(he.officers,[]),r=s.findIndex(a=>Ht(a.phone)===t);if(r>=0)s[r]={...s[r],...i};else{const a=s.reduce((l,u)=>Math.max(l,Number(u.seq||0)),0);s.push({seq:a+1,...i})}ct(he.officers,s),this._notifyLocal("officers")}await this.writeAuditLog({action:"OFFICER_UPDATE",targetType:"officer",targetId:t,targetName:i.fullName,targetNationalId:i.phoneDisplay,summary:`${i.active?"บันทึก/เปิดใช้งาน":"ระงับสิทธิ์"} บัญชีตำรวจ (${i.callsign||"-"})`,changes:{}})}}const qe=new Wv;function Yv({onLoginSuccess:n}){const e=f("div",{class:"alert-banner error",role:"alert",hidden:!0}),t=f("input",{type:"text",id:"login-username",name:"username",required:!0,autocomplete:"username",autocorrect:"off",autocapitalize:"none",spellcheck:"false",enterkeyhint:"next",placeholder:"เช่น 0812345678","aria-describedby":"login-username-hint","data-error":"login-username-error"}),i=f("input",{type:"password",id:"login-password",name:"password",required:!0,autocomplete:"current-password",enterkeyhint:"done",placeholder:"กรอกรหัสผ่าน","data-error":"login-password-error"}),s=f("button",{type:"button",class:"password-toggle","aria-pressed":"false","aria-label":"แสดงรหัสผ่าน"},"👁️");s.addEventListener("click",()=>{const u=i.type==="password";i.type=u?"text":"password",s.setAttribute("aria-pressed",u?"true":"false"),s.setAttribute("aria-label",u?"ซ่อนรหัสผ่าน":"แสดงรหัสผ่าน"),s.textContent=u?"🙈":"👁️"});const r=f("button",{type:"submit",class:"btn btn-maroon btn-full"},"🔐 เข้าสู่ระบบ"),a=f("form",{class:"login-body",method:"post","aria-labelledby":"login-heading"},e,f("div",{class:"field"},f("label",{for:"login-username"},"ชื่อผู้ใช้ (เบอร์โทรศัพท์ตำรวจ / แอดมิน)",f("span",{class:"req-star","aria-hidden":"true"},"*")),f("span",{id:"login-username-hint",class:"field-hint"},"ข้าราชการตำรวจ สภ.บางปลาม้า กรอกเบอร์โทรศัพท์ 10 หลัก (ใส่หรือไม่ใส่เว้นวรรคก็ได้)"),t,f("div",{id:"login-username-error",class:"error-msg"},f("span",{role:"img","aria-label":"ข้อผิดพลาด"},"⚠")," กรุณากรอกเบอร์โทรศัพท์หรือชื่อผู้ใช้")),f("div",{class:"field"},f("label",{for:"login-password"},"รหัสผ่าน",f("span",{class:"req-star","aria-hidden":"true"},"*")),f("div",{class:"password-wrap"},i,s),f("div",{id:"login-password-error",class:"error-msg"},f("span",{role:"img","aria-label":"ข้อผิดพลาด"},"⚠")," กรุณากรอกรหัสผ่าน")),r);a.addEventListener("submit",async u=>{if(u.preventDefault(),e.hidden=!0,e.textContent="",!a.reportValidity()){a.querySelector(":invalid")?.focus();return}r.disabled=!0,r.textContent="กำลังตรวจสอบสิทธิ์...";try{const h=await qe.login(t.value,i.value);n(h)}catch(h){e.textContent=h?.message||"ไม่สามารถเข้าสู่ระบบได้ กรุณาลองใหม่อีกครั้ง",e.hidden=!1,r.disabled=!1,r.textContent="🔐 เข้าสู่ระบบ"}});const l=qe.getMode()==="firebase"?"เชื่อมต่อฐานข้อมูล Firebase Cloud Firestore แล้ว":"โหมดทดสอบในเครื่อง (ข้อมูลตั้งต้นตำรวจ 85 นาย + รายชื่อ 148 รายการพร้อมใช้งาน)";return f("main",{class:"login-page"},f("section",{class:"login-card"},f("header",{class:"login-header"},f("div",{class:"police-crest"},f("img",{src:jo,alt:"ตรา สภ.บางปลาม้า",class:"crest-img"})),f("h1",{id:"login-heading"},"สถานีตำรวจภูธรบางปลาม้า"),f("p",{},"ระบบตรวจสอบและจัดการข้อมูลบุคคลวิกลจริต")),a,f("footer",{class:"login-footer"},l)))}const Kv="modulepreload",Qv=function(n,e){return new URL(n,e).href},Nu={},Xv=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let a=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const l=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),h=u?.nonce||u?.getAttribute("nonce");s=a(t.map(p=>{if(p=Qv(p,i),p in Nu)return;Nu[p]=!0;const m=p.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(!!i)for(let D=l.length-1;D>=0;D--){const S=l[D];if(S.href===p&&(!m||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${_}`))return;const C=document.createElement("link");if(C.rel=m?"stylesheet":Kv,m||(C.as="script"),C.crossOrigin="",C.href=p,h&&C.setAttribute("nonce",h),document.head.appendChild(C),m)return new Promise((D,S)=>{C.addEventListener("load",D),C.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${p}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};let Jv=0;function Ru(n){if(typeof document.ariaNotify=="function")try{document.ariaNotify(n);return}catch{}const e=document.getElementById("sr-announcer");e&&(e.textContent="",setTimeout(()=>{e.textContent=n},30))}function me(n,e="info",t=4500){if(document.querySelector("dialog:modal")){Ru(n);return}const i=document.getElementById("toast-region");if(!i)return;const s=`toast-${++Jv}`,r=f("button",{type:"button",class:"toast-close","aria-label":"ปิดการแจ้งเตือน",popovertarget:s,popovertargetaction:"hide"},"✕"),a=f("div",{id:s,class:`toast-item ${e}`},f("span",{class:"toast-text"},n),r);a.setAttribute("popover","manual"),i.appendChild(a);const l=Object.hasOwn(HTMLElement.prototype,"popover")&&typeof a.showPopover=="function";l?a.showPopover():(a.classList.add(":popover-open"),r.addEventListener("click",()=>{a.remove()})),Ru(n);let u=null;const h=()=>{if(a.matches(":focus-within")){u=setTimeout(h,2e3);return}if(l&&a.isConnected)try{a.hidePopover()}catch{}a.remove()};a.addEventListener("toggle",p=>{p.newState==="closed"&&(clearTimeout(u),a.remove())}),t>0&&(u=setTimeout(h,t))}function Zv({patients:n,isAdmin:e,onSelectDetail:t,onEditPatient:i,onDeletePatient:s,onQuickAdd:r}){let a="",l="ALL",u="ALL",h="standard";const p=f("div",{}),m=f("div",{class:"stats-grid"}),_=f("div",{}),b=f("h2",{id:"patients-table-caption"},"ทะเบียนรายชื่อบุคคลวิกลจริตทั้งหมด"),C=f("div",{class:"table-wrapper",tabindex:"0",role:"region","aria-labelledby":"patients-table-caption"}),D=f("thead",{}),S=f("tbody",{}),B=f("table",{class:"data-table"},f("caption",{},"รายชื่อบุคคลวิกลจริต สภ.บางปลาม้า"),D,S),q=f("input",{type:"search",id:"patient-search-input",name:"q",placeholder:"พิมพ์เลขบัตรประชาชน 13 หลัก หรือ ชื่อ-นามสกุล / ชื่อเล่น เพื่อตรวจสอบ...",autocorrect:"off",autocapitalize:"none",spellcheck:"false",enterkeyhint:"search"}),$=f("select",{id:"filter-color","aria-label":"กรองตามกลุ่มสี"},f("option",{value:"ALL"},"ทุกกลุ่มสี"),f("option",{value:"แดง"},"🔴 แดง (อันตรายสูง)"),f("option",{value:"ส้ม"},"🟠 ส้ม (เฝ้าระวัง)"),f("option",{value:"เหลือง"},"🟡 เหลือง (ติดตาม)"),f("option",{value:"เขียว"},"🟢 เขียว (ทั่วไป)"),f("option",{value:"NONE"},"⚪ ยังไม่ระบุสี")),Q=f("select",{id:"filter-subdistrict","aria-label":"กรองตามตำบล"},f("option",{value:"ALL"},"ทุกตำบล"),...Cu.map(Y=>f("option",{value:Y},Y))),z=f("button",{type:"button",class:"btn btn-outline btn-sm",onClick:()=>{a="",l="ALL",u="ALL",q.value="",$.value="ALL",Q.value="ALL",Ge()}},"ล้างตัวกรอง"),Z=f("search",{},f("form",{class:"search-panel",onSubmit:Y=>{Y.preventDefault(),a=q.value.trim(),Ge()}},f("h2",{},"🔍 ตรวจสอบรายชื่อบุคคลวิกลจริต สภ.บางปลาม้า"),f("div",{class:"search-row"},f("div",{class:"field"},f("label",{for:"patient-search-input"},"เลขบัตรประจำตัวประชาชน หรือ ชื่อ-นามสกุล / ชื่อเล่น"),q),f("button",{type:"submit",class:"btn btn-maroon"},"🔍 ตรวจสอบ")),f("div",{class:"filter-row"},$,Q,z,f("button",{type:"button",class:"btn btn-navy btn-sm",style:"margin-inline-start: auto;",onClick:()=>r("")},"➕ เพิ่มข้อมูลบุคคลใหม่")),_));q.addEventListener("input",()=>{a=q.value.trim(),Ge()}),$.addEventListener("change",()=>{l=$.value,Ge()}),Q.addEventListener("change",()=>{u=Q.value,Ge()});function T(){De(m);const Y=n.length,V=n.filter(G=>G.colorGroup==="แดง").length,M=n.filter(G=>G.colorGroup==="ส้ม").length,le=n.filter(G=>G.colorGroup==="เหลือง").length,re=n.filter(G=>G.colorGroup==="เขียว").length,ae=[{key:"ALL",label:"รายชื่อทั้งหมด",val:Y,cls:""},{key:"แดง",label:"🔴 กลุ่มสีแดง (อันตราย)",val:V,cls:"red"},{key:"ส้ม",label:"🟠 กลุ่มสีส้ม (เฝ้าระวัง)",val:M,cls:"orange"},{key:"เหลือง",label:"🟡 กลุ่มสีเหลือง (ติดตาม)",val:le,cls:"yellow"},{key:"เขียว",label:"🟢 กลุ่มสีเขียว (ทั่วไป)",val:re,cls:"green"}];for(const G of ae)m.appendChild(f("button",{type:"button",class:`stat-card ${G.cls} ${l===G.key?"active":""}`,onClick:()=>{l=G.key,$.value=G.key,Ge()}},f("span",{class:"stat-label"},G.label),f("span",{class:"stat-value"},`${G.val} ราย`)))}function y(){const Y=a.trim().toLowerCase(),V=ut(a);return n.filter(M=>{if(l==="NONE"){if(M.colorGroup&&M.colorGroup.trim())return!1}else if(l!=="ALL"&&(M.colorGroup||"").trim()!==l)return!1;if(u!=="ALL"&&!(M.subdistrict||"").includes(u.replace(/^ต\./,"")))return!1;if(!Y)return!0;const le=(M.fullName||"").toLowerCase().includes(Y),re=(M.nickname||"").toLowerCase().includes(Y),ae=[M.addressNo,M.moo,M.subdistrict,M.note].filter(Boolean).join(" ").toLowerCase().includes(Y),G=V.length>=3&&(M.nationalIdDigits||ut(M.nationalId)).includes(V);return le||re||G||ae})}function v(Y){if(De(_),!(!a||a.length<2))if(Y.length>0){const V=f("div",{class:"verify-box found",role:"status"},f("h3",{},`⚠️ พบข้อมูลในรายชื่อบุคคลวิกลจริต สภ.บางปลาม้า จำนวน ${Y.length} รายการ`),f("div",{class:"verify-cards"},Y.slice(0,5).map(M=>{const le=Ps(M.colorGroup),re=[M.addressNo,M.moo,M.subdistrict,M.district].filter(Boolean).join(" ");return f("div",{class:"verify-hit-card"},f("div",{},f("strong",{},M.fullName||"-"),M.nickname?f("span",{class:"muted-sub",style:"display:inline;margin-inline-start:6px;"},`(${M.nickname})`):null," ",f("span",{class:`color-badge ${le.key}`},le.label),f("div",{class:"muted-sub"},`เลขบัตร ปชช.: ${M.nationalId||"-"} | อายุ: ${M.age?`${M.age} ปี`:"-"} | ที่อยู่: ${re||"-"}`),M.note?f("div",{style:"font-size:0.84rem;color:#b91c1c;margin-top:2px;"},`หมายเหตุ: ${M.note}`):null,e&&M.updatedBy?f("div",{style:"font-size:0.8rem;color:#1e40af;margin-top:2px;"},`ผู้บันทึก/แก้ไขล่าสุด: ${M.updatedBy.fullName} (${M.updatedBy.callsign||"-"}) • ${Yt(M.updatedAt)}`):null),f("div",{class:"table-actions"},f("button",{type:"button",class:"btn btn-outline btn-sm",onClick:()=>t(M)},"ดูข้อมูล"),f("button",{type:"button",class:"btn btn-navy btn-sm",onClick:()=>i(M)},"แก้ไข")))})));_.appendChild(V)}else _.appendChild(f("div",{class:"verify-box not-found",role:"status"},f("h3",{},`✅ ไม่พบ "${a}" ในรายชื่อบุคคลวิกลจริต สภ.บางปลาม้า`),f("div",{style:"display:flex;flex-wrap:wrap;gap:0.65rem;align-items:center;"},f("span",{style:"font-size:0.9rem;"},"หากต้องการบันทึกบุคคลนี้เข้าสู่ระบบฐานข้อมูลโรงพัก สามารถกดปุ่มด้านข้างได้ทันที"),f("button",{type:"button",class:"btn btn-maroon btn-sm",onClick:()=>r(a)},"➕ เพิ่มบุคคลนี้เข้าระบบ"))))}const E=f("button",{type:"button",class:"btn btn-maroon btn-sm",onClick:()=>{h="standard",Pe(),Ge()}},"📋 มุมมองปกติ"),w=f("button",{type:"button",class:"btn btn-outline btn-sm",onClick:()=>{h="excel",Pe(),Ge()}},"📊 มุมมองแบบ Excel"),A=f("button",{type:"button",class:"btn btn-excel btn-sm",onClick:async()=>{const Y=y();if(!Y.length){me("ไม่มีข้อมูลสำหรับส่งออก","error");return}A.disabled=!0,A.textContent="⏳ กำลังสร้างไฟล์ Excel...";try{const V=await Xv(()=>import("./xlsx-DmfUrazE.js"),[],import.meta.url),M=Y.map((G,we)=>{const Ye={"จำนวน/ลำดับ":G.seqNo||we+1,"ชื่อ-นามสกุล ผู้ป่วย":G.fullName||"","อายุ (ปี)":G.age||"",วินิจฉัยโรค:G.diagnosis||"",รหัส:G.diagnosisCode||"",เลขบัตรประจำตัวประชาชน:G.nationalId||"","ปี พ.ศ. ที่เริ่มเป็น":G.startYearBE||"","ที่อยู่ (บ้านเลขที่)":G.addressNo||"",หมู่:G.moo||"",ตำบล:G.subdistrict||"",อำเภอ:G.district||"",จังหวัด:G.province||"",กลุ่มสี:G.colorGroup||"",ชื่อเล่น:G.nickname||"",หมายเหตุ:G.note||"","พิกัด GPS":G.gps?`${Number(G.gps.lat).toFixed(6)}, ${Number(G.gps.lng).toFixed(6)}`:"",จำนวนภาพถ่าย:G.photos?.length||0};if(e){const ee=G.updatedBy||G.createdBy;Ye["ผู้บันทึก/แก้ไขล่าสุด"]=ee?.fullName?`${ee.fullName} (${ee.callsign||"-"})`:"",Ye.เวลาอัปเดตล่าสุด=G.updatedAt?Yt(G.updatedAt):""}return Ye}),le=V.utils.json_to_sheet(M);le["!cols"]=[{wch:12},{wch:28},{wch:10},{wch:14},{wch:8},{wch:20},{wch:16},{wch:16},{wch:8},{wch:16},{wch:14},{wch:14},{wch:10},{wch:12},{wch:28},{wch:22},{wch:14},...e?[{wch:28},{wch:20}]:[]];const re=V.utils.book_new();V.utils.book_append_sheet(re,le,"บุคคลวิกลจริต สภ.บางปลาม้า");const ae=new Date().toISOString().slice(0,10);V.writeFile(re,`ทะเบียนบุคคลวิกลจริต_สภ_บางปลาม้า_${ae}.xlsx`),me(`ดาวน์โหลดไฟล์ Excel (${Y.length} รายการ) สำเร็จแล้ว`,"success")}catch(V){me(`ไม่สามารถสร้างไฟล์ Excel ได้: ${V?.message||V}`,"error")}finally{A.disabled=!1,A.textContent="📥 ดาวน์โหลด Excel (.xlsx)"}}},"📥 ดาวน์โหลด Excel (.xlsx)"),I=f("button",{type:"button",class:"btn btn-pdf btn-sm",onClick:()=>{const Y=y();if(!Y.length){me("ไม่มีข้อมูลสำหรับสร้างไฟล์ PDF","error");return}const V=document.getElementById("print-sheet");if(!V)return;De(V);const M=Yt(new Date().toISOString()),le=[l!=="ALL"?`กลุ่มสี: ${l==="NONE"?"ไม่ระบุ":l}`:null,u!=="ALL"?`พื้นที่: ${u}`:null,a?`คำค้น: "${a}"`:null].filter(Boolean).join(" | "),re=f("div",{class:"print-header"},f("img",{src:jo,alt:"ตรา สภ.บางปลาม้า",class:"print-logo"}),f("div",{class:"print-title-block"},f("h1",{},"ทะเบียนข้อมูลบุคคลวิกลจริต — สถานีตำรวจภูธรบางปลาม้า จังหวัดสุพรรณบุรี"),f("p",{},`จำนวน ${Y.length} รายการ | พิมพ์เมื่อ: ${M}${le?` | ตัวกรอง: ${le}`:""}`))),G=f("thead",{},f("tr",{},["ลำดับ","ชื่อ-นามสกุล ผู้ป่วย","อายุ","วินิจฉัย/รหัส","เลขบัตรประชาชน","ปี พ.ศ.","ที่อยู่","กลุ่มสี","ชื่อเล่น","หมายเหตุ","GPS"].map(ee=>f("th",{},ee)))),we=f("tbody",{},Y.map((ee,dn)=>{const ot=Ps(ee.colorGroup),x=ot.key==="red"?"row-red":ot.key==="orange"?"row-orange":ot.key==="yellow"?"row-yellow":ot.key==="green"?"row-green":"",ue=[ee.addressNo,ee.moo,ee.subdistrict,ee.district,ee.province].filter(Boolean).join(" "),Ne=[ee.diagnosis,ee.diagnosisCode].filter(Boolean).join(" / "),ge=ee.gps?`${Number(ee.gps.lat).toFixed(5)}, ${Number(ee.gps.lng).toFixed(5)}`:"-";return f("tr",{class:x},f("td",{style:"text-align:center;"},String(ee.seqNo||dn+1)),f("td",{style:"font-weight:600;"},ee.fullName||"-"),f("td",{},ee.age?`${ee.age} ปี`:"-"),f("td",{},Ne||"-"),f("td",{},ee.nationalId||"-"),f("td",{},ee.startYearBE||"-"),f("td",{},ue||"-"),f("td",{style:"font-weight:700;"},ee.colorGroup||"-"),f("td",{},ee.nickname||"-"),f("td",{},ee.note||"-"),f("td",{},ge))}));V.appendChild(re),V.appendChild(f("table",{class:"print-table"},G,we));const Ye=()=>{De(V),window.removeEventListener("afterprint",Ye)};window.addEventListener("afterprint",Ye),window.print()}},"📄 ดาวน์โหลด PDF");function Pe(){E.className=`btn btn-sm ${h==="standard"?"btn-maroon":"btn-outline"}`,w.className=`btn btn-sm ${h==="excel"?"btn-maroon":"btn-outline"}`}function nt(){if(De(D),h==="excel"){const Y=["ลำดับ","ชื่อ-นามสกุล ผู้ป่วย","อายุ","วินิจฉัยโรค","รหัส","เลขบัตรประจำตัวประชาชน","ปี พ.ศ. ที่เริ่มเป็น","บ้านเลขที่","หมู่","ตำบล","อำเภอ","จังหวัด","กลุ่มสี","ชื่อเล่น","หมายเหตุ","พิกัด GPS","ภาพถ่าย"];e&&Y.push("ผู้บันทึกล่าสุด"),Y.push("จัดการ");const V=f("tr",{class:"excel-col-letters"},Y.map((le,re)=>f("th",{scope:"col"},String.fromCharCode(65+re)))),M=f("tr",{},Y.map(le=>f("th",{scope:"col"},le)));D.appendChild(V),D.appendChild(M)}else{const Y=[f("th",{scope:"col"},"ลำดับ"),f("th",{scope:"col"},"ชื่อ-นามสกุล ผู้ป่วย"),f("th",{scope:"col"},"เลขบัตรประจำตัวประชาชน"),f("th",{scope:"col"},"อายุ"),f("th",{scope:"col"},"ที่อยู่"),f("th",{scope:"col"},"กลุ่มสี"),f("th",{scope:"col"},"หมายเหตุ")];e&&Y.push(f("th",{scope:"col"},"ผู้บันทึกล่าสุด")),Y.push(f("th",{scope:"col"},"จัดการ")),D.appendChild(f("tr",{},...Y))}}function Ge(){T();const Y=y();if(v(Y),b.textContent=`ทะเบียนรายชื่อบุคคลวิกลจริต (แสดง ${Y.length} จาก ${n.length} รายการ)`,B.className=h==="excel"?"data-table excel-mode":"data-table",C.className=h==="excel"?"table-wrapper excel-wrapper":"table-wrapper",nt(),De(S),!Y.length){const V=h==="excel"?e?19:18:e?8:7;S.appendChild(f("tr",{},f("td",{colspan:String(V),style:"text-align:center;padding:2rem;color:#64748b;"},"ไม่พบข้อมูลตามเงื่อนไขที่ค้นหา")));return}for(const V of Y){const M=Ps(V.colorGroup),le=M.key==="red"?"row-red":M.key==="orange"?"row-orange":M.key==="yellow"?"row-yellow":M.key==="green"?"row-green":"",re=V.photos?.length||0;if(h==="excel"){const ae=V.gps?`${Number(V.gps.lat).toFixed(5)}, ${Number(V.gps.lng).toFixed(5)}`:"",G=[f("td",{class:"excel-num"},V.seqNo?String(V.seqNo):"-"),f("th",{scope:"row"},V.fullName||"-"),f("td",{},V.age||"-"),f("td",{},V.diagnosis||"-"),f("td",{},V.diagnosisCode||"-"),f("td",{class:"excel-mono"},V.nationalId||"-"),f("td",{},V.startYearBE||"-"),f("td",{},V.addressNo||"-"),f("td",{},V.moo||"-"),f("td",{},V.subdistrict||"-"),f("td",{},V.district||"-"),f("td",{},V.province||"-"),f("td",{},V.colorGroup?f("span",{class:`color-badge ${M.key}`},M.short):"-"),f("td",{},V.nickname||"-"),f("td",{},V.note||"-"),f("td",{class:"excel-mono"},ae||"-"),f("td",{},re>0?`${re} ภาพ`:"-")];if(e){const we=V.updatedBy||V.createdBy;G.push(f("td",{},we?.fullName?`${we.fullName} (${we.callsign||"-"})`:"-"))}G.push(f("td",{},f("div",{class:"table-actions"},f("button",{type:"button",class:"btn btn-outline btn-sm",onClick:()=>t(V)},"ดู"),f("button",{type:"button",class:"btn btn-navy btn-sm",onClick:()=>i(V)},"แก้ไข")))),S.appendChild(f("tr",{class:le},...G))}else{const ae=[V.addressNo,V.moo,V.subdistrict].filter(Boolean).join(" "),G=[f("td",{"data-label":"ลำดับ"},V.seqNo?String(V.seqNo):"-"),f("th",{scope:"row"},V.fullName||"-",V.nickname?f("span",{class:"muted-sub"},`ชื่อเล่น: ${V.nickname}`):null,re>0||V.gps?f("span",{class:"muted-sub"},`${re>0?`📷 ${re} `:""}${V.gps?"📍 มีพิกัด GPS":""}`):null),f("td",{"data-label":"เลขบัตร ปชช."},V.nationalId||"-"),f("td",{"data-label":"อายุ"},V.age?`${V.age} ปี`:"-"),f("td",{"data-label":"ที่อยู่"},ae||"-"),f("td",{"data-label":"กลุ่มสี"},f("span",{class:`color-badge ${M.key}`},M.short)),f("td",{"data-label":"หมายเหตุ"},V.note||"-")];if(e){const we=V.updatedBy||V.createdBy;G.push(f("td",{"data-label":"ผู้บันทึกล่าสุด"},we?.fullName||"-",we?.callsign?f("span",{class:"muted-sub"},`${we.callsign} (${we.username})`):null))}G.push(f("td",{"data-label":"จัดการ"},f("div",{class:"table-actions"},f("button",{type:"button",class:"btn btn-outline btn-sm",onClick:()=>t(V)},"ดู"),f("button",{type:"button",class:"btn btn-navy btn-sm",onClick:()=>i(V)},"แก้ไข"),f("button",{type:"button",class:"btn btn-danger-outline btn-sm",onClick:()=>s(V)},"ลบ")))),S.appendChild(f("tr",{class:le},...G))}}}C.appendChild(B);const bt=f("section",{class:"table-card"},f("div",{class:"table-toolbar"},b,f("div",{class:"toolbar-actions"},E,w,A,I)),C);return p.appendChild(m),p.appendChild(Z),p.appendChild(bt),Ge(),p}function Zd(n){if("closedBy"in HTMLDialogElement.prototype)return;const e=i=>{const s=n.getBoundingClientRect();return i.clientX<s.left||i.clientX>s.right||i.clientY<s.top||i.clientY>s.bottom};let t=!1;n.addEventListener("pointerdown",i=>{t=e(i)}),n.addEventListener("pointerup",i=>{t&&e(i)&&n.close("")})}let et=null,pt=null,Ln=null;function eI(){return Ln||(Ln=f("dialog",{class:"lightbox-dialog",closedby:"any","aria-label":"ดูภาพถ่ายขนาดเต็ม"}),Zd(Ln),document.body.appendChild(Ln),Ln)}function ef(n,e="ภาพถ่าย"){const t=eI();De(t),t.appendChild(f("div",{class:"dialog-header"},f("h1",{},e),f("button",{type:"button",class:"dialog-close-btn","aria-label":"ปิดหน้าต่างภาพถ่าย",onClick:()=>t.close()},"✕"))),t.appendChild(f("img",{src:n,alt:e,class:"lightbox-img"})),t.showModal()}function tI(n,{isAdmin:e,onEdit:t,onDelete:i}){et||(et=f("dialog",{id:"patient-detail-dialog",closedby:"any","aria-labelledby":"patient-detail-title"}),Zd(et),document.body.appendChild(et)),De(et);const s=Ps(n.colorGroup),r=[n.addressNo?`บ้านเลขที่ ${n.addressNo}`:"",n.moo||"",n.subdistrict||"",n.district||"",n.province||""].filter(Boolean),a=[["ลำดับในทะเบียน",n.seqNo?`#${n.seqNo}`:"-"],["เลขบัตรประจำตัวประชาชน",n.nationalId||"-"],["ชื่อ - นามสกุล ผู้ป่วย",n.fullName||"-"],["ชื่อเล่น",n.nickname||"-"],["อายุ (ปี)",n.age?`${n.age} ปี`:"-"],["ปี พ.ศ. ที่เริ่มเป็น",n.startYearBE||"-"],["กลุ่มสีความรุนแรง",s.label],["วินิจฉัยโรค / รหัส (จากไฟล์เดิม)",[n.diagnosis,n.diagnosisCode].filter(Boolean).join(" / ")||"-"],["ที่อยู่ปัจจุบัน",r.join(" ")||"-"],["หมายเหตุ",n.note||"-"]],l=[f("div",{class:"detail-grid"},a.map(([h,p])=>f("div",{class:"detail-item"},f("div",{class:"detail-label"},h),h==="กลุ่มสีความรุนแรง"?f("div",{class:"detail-value"},f("span",{class:`color-badge ${s.key}`},p)):f("div",{class:"detail-value"},p))))];if(n.gps?.lat&&n.gps?.lng){const h=`https://www.google.com/maps?q=${encodeURIComponent(`${n.gps.lat},${n.gps.lng}`)}`;l.push(f("div",{class:"detail-item"},f("div",{class:"detail-label"},"พิกัดสถานที่ (GPS)"),f("div",{class:"detail-value"},`${Number(n.gps.lat).toFixed(6)}, ${Number(n.gps.lng).toFixed(6)} `,f("a",{href:h,target:"_blank",rel:"noopener noreferrer",class:"btn btn-outline btn-sm",style:"margin-inline-start: 0.5rem;"},"🗺️ เปิดใน Google Maps"))))}const u=Array.isArray(n.photos)?n.photos:[];if(u.length&&l.push(f("div",{class:"detail-item"},f("div",{class:"detail-label"},`ภาพถ่าย (${u.length} ภาพ)`),f("div",{class:"photo-preview-grid"},u.map((h,p)=>f("div",{class:"photo-thumb"},f("img",{src:h.dataUrl||h.url,alt:h.name||`ภาพถ่าย ${p+1}`,onClick:()=>ef(h.dataUrl||h.url,h.name||`ภาพถ่าย ${p+1}`)})))))),e){const h=n.createdBy||{},p=n.updatedBy||{};l.push(f("div",{class:"audit-box"},f("h2",{},"🛡️ ข้อมูลการลงรายการ (สำหรับแอดมินตรวจสอบ)"),f("div",{},f("strong",{},"ผู้บันทึกตั้งต้น: "),`${h.fullName||"-"} (${h.callsign||"-"} | บัญชี: ${h.username||"-"})`),f("div",{},f("strong",{},"เวลาบันทึกตั้งต้น: "),Yt(n.createdAt)),f("div",{style:"margin-top: 0.35rem;"},f("strong",{},"ผู้แก้ไขล่าสุด: "),`${p.fullName||"-"} (${p.callsign||"-"} | บัญชี: ${p.username||"-"})`),f("div",{},f("strong",{},"เวลาแก้ไขล่าสุด: "),Yt(n.updatedAt))))}et.appendChild(f("div",{class:"dialog-header"},f("h1",{id:"patient-detail-title"},`ข้อมูลบุคคล: ${n.fullName||"ไม่ระบุชื่อ"}`),f("button",{type:"button",class:"dialog-close-btn","aria-label":"ปิดหน้าต่าง",onClick:()=>et.close()},"✕"))),et.appendChild(f("div",{class:"dialog-body"},...l)),et.appendChild(f("div",{class:"dialog-footer"},f("button",{type:"button",class:"btn btn-danger-outline",onClick:()=>{et.close(),i?.(n)}},"🗑️ ลบข้อมูล"),f("button",{type:"button",class:"btn btn-navy",onClick:()=>{et.close(),t?.(n)}},"✏️ แก้ไขข้อมูล"),f("button",{type:"button",class:"btn btn-outline",onClick:()=>et.close()},"ปิด"))),et.showModal()}function tf({title:n,message:e,confirmLabel:t="ยืนยันลบข้อมูล",danger:i=!0}){return new Promise(s=>{pt||(pt=f("dialog",{id:"confirm-action-dialog",class:"confirm-dialog","aria-labelledby":"confirm-dialog-title"}),document.body.appendChild(pt)),De(pt);const r=f("button",{type:"submit",value:"cancel",class:"btn btn-outline",autofocus:!0},"ยกเลิก"),a=f("button",{type:"submit",value:"confirm",class:i?"btn btn-danger":"btn btn-navy"},t),l=f("form",{method:"dialog"},f("div",{class:"dialog-header"},f("h1",{id:"confirm-dialog-title"},n)),f("div",{class:"dialog-body"},f("p",{style:"margin:0;"},e)),f("div",{class:"dialog-footer"},r,a));pt.appendChild(l);const u=()=>{const h=pt.returnValue==="confirm";pt.returnValue="",pt.removeEventListener("close",u),s(h)};pt.addEventListener("close",u),pt.showModal()})}function nI({patients:n,initialPatient:e=null,prefillQuery:t="",onSaved:i,onDeletePatient:s,onResetToNew:r}){let a=e,l=Array.isArray(e?.photos)?[...e.photos]:[],u=e?.gps?{...e.gps}:null;const h=f("div",{class:"alert-banner info",hidden:!0,role:"status"}),p=f("p",{class:"form-sheet-mode"},a?`โหมดแก้ไขข้อมูล: ${a.fullName} (ลำดับที่ ${a.seqNo||"-"})`:"เพิ่มข้อมูลใหม่ หรือค้นหาด้วยเลขบัตรประชาชนเพื่อแก้ไขข้อมูลเดิม"),m=a?"":ut(t),_=a?a.nationalId||"":m.length>=5?mo(m):"",b=f("input",{type:"text",id:"pf-national-id",name:"nationalId",required:!0,inputmode:"numeric",autocorrect:"off",autocapitalize:"none",spellcheck:"false",maxlength:"17",placeholder:"X-XXXX-XXXXX-XX-X",value:_,"data-error":"pf-national-id-error"});b.addEventListener("input",()=>{const x=mo(b.value);b.value!==x&&(b.value=x),b.setCustomValidity("")});const C=f("button",{type:"button",class:"btn btn-slate"},"🔍 ค้นหา"),D=!!(a&&!ut(a.nationalId)),S=f("input",{type:"checkbox",id:"pf-no-national-id",name:"noNationalId",checked:D});function B(){const x=S.checked;b.required=!x,b.disabled=x,C.disabled=x,x?(b.value="",b.placeholder="ไม่มีข้อมูลเลขบัตรประชาชน",b.setCustomValidity(""),b.classList.remove("user-invalid-fallback"),b.setAttribute("aria-invalid","false")):b.placeholder="X-XXXX-XXXXX-XX-X"}S.addEventListener("change",B),B();const q=!a&&m.length<5?t:"",$=f("input",{type:"text",id:"pf-fullname",name:"fullName",required:!0,autocomplete:"name",placeholder:"เช่น นายสมชาย ใจดี",value:a?.fullName||q||"","data-error":"pf-fullname-error"}),Q=f("input",{type:"text",id:"pf-nickname",name:"nickname",placeholder:"ชื่อเล่น (ถ้ามี)",value:a?.nickname||""}),z=f("input",{type:"text",id:"pf-age",name:"age",inputmode:"decimal",placeholder:"เช่น 35",value:a?.age||""}),Z=f("input",{type:"text",id:"pf-start-year",name:"startYearBE",inputmode:"numeric",maxlength:"4",placeholder:"เช่น 2568",value:a?.startYearBE||""}),T=f("select",{id:"pf-color",name:"colorGroup"},f("option",{value:""},"- เลือกระดับความรุนแรง -"),f("option",{value:"แดง"},"🔴 แดง — อันตรายสูง / คลุ่มคลั่ง / เคยก่อเหตุรุนแรง"),f("option",{value:"ส้ม"},"🟠 ส้ม — เฝ้าระวัง / มีความเสี่ยงสูง"),f("option",{value:"เหลือง"},"🟡 เหลือง — ติดตามอาการ"),f("option",{value:"เขียว"},"🟢 เขียว — อาการคงที่ / ทั่วไป"),f("option",{value:"ทดสอบ"},"ทดสอบ"));T.value=a?.colorGroup||"";const y=f("input",{type:"text",id:"pf-address-no",name:"addressNo",placeholder:"เช่น 123/4",value:a?.addressNo||""}),v=f("input",{type:"text",id:"pf-moo",name:"moo",placeholder:"เช่น ม.5",value:a?.moo||""}),E=f("datalist",{id:"bpm-subdistricts-list"},...Cu.map(x=>f("option",{value:x}))),w=f("input",{type:"text",id:"pf-subdistrict",name:"subdistrict",list:"bpm-subdistricts-list",placeholder:"เช่น ต.โคกคราม",value:a?.subdistrict||""}),A=f("input",{type:"text",id:"pf-district",name:"district",placeholder:"เช่น อ.บางปลาม้า",value:a?.district||(a?"":"อ.บางปลาม้า")}),I=f("input",{type:"text",id:"pf-province",name:"province",placeholder:"เช่น จ.สุพรรณบุรี",value:a?.province||(a?"":"จ.สุพรรณบุรี")}),Pe=f("textarea",{id:"pf-note",name:"note",placeholder:"ระบุข้อมูลเพิ่มเติม (ถ้ามี)"});Pe.value=a?.note||"";const nt=f("input",{type:"file",id:"pf-photos",name:"photos",accept:"image/*",multiple:!0}),Ge=f("div",{class:"photo-preview-grid"}),bt=f("span",{class:"field-hint"},"ระบบจะย่อขนาดภาพอัตโนมัติเพื่อจัดเก็บใน Firestore (แนะนำไม่เกิน 4-5 ภาพต่อรายการ)");function Y(){De(Ge),l.forEach((x,ue)=>{Ge.appendChild(f("div",{class:"photo-thumb"},f("img",{src:x.dataUrl||x.url,alt:x.name||`ภาพที่ ${ue+1}`,onClick:()=>ef(x.dataUrl||x.url,x.name||`ภาพที่ ${ue+1}`)}),f("button",{type:"button",class:"photo-remove-btn","aria-label":`ลบภาพ ${x.name||ue+1}`,onClick:()=>{l.splice(ue,1),Y()}},"✕")))})}nt.addEventListener("change",async()=>{const x=Array.from(nt.files||[]);if(x.length){for(const ue of x){if(l.length>=6){me("แนบภาพได้สูงสุด 6 ภาพต่อรายการ","error");break}try{const Ne=await Vf(ue);l.push(Ne)}catch(Ne){me(Ne.message,"error")}}nt.value="",Y()}});const V=f("button",{type:"button",class:"btn btn-maroon btn-full"},"📌 ดึงพิกัด GPS ปัจจุบัน"),M=f("input",{type:"text",id:"pf-coords",name:"coords",autocorrect:"off",autocapitalize:"none",spellcheck:"false",placeholder:"ละติจูด, ลองจิจูด (ไม่บังคับ)",value:u&&typeof u.lat=="number"&&typeof u.lng=="number"?`${u.lat}, ${u.lng}`:""}),le=f("div",{class:"gps-status-box",role:"status"});function re(x){const ue=String(x||"").trim();if(!ue)return{empty:!0,valid:!0,gps:null};const Ne=ue.split(/[,\s]+/).filter(Boolean);if(Ne.length!==2)return{empty:!1,valid:!1,gps:null};const ge=Number(Ne[0]),at=Number(Ne[1]);return!Number.isFinite(ge)||!Number.isFinite(at)||ge<-90||ge>90||at<-180||at>180?{empty:!1,valid:!1,gps:null}:{empty:!1,valid:!0,gps:{lat:ge,lng:at,capturedAt:u?.capturedAt||new Date().toISOString()}}}function ae(){M.setCustomValidity("");const x=re(M.value);u=x.valid?x.gps:null,G()}M.addEventListener("input",ae);function G(){if(De(le),u&&typeof u.lat=="number"&&typeof u.lng=="number"){le.className="gps-status-box captured";const x=`https://www.google.com/maps?q=${encodeURIComponent(`${u.lat},${u.lng}`)}`;le.appendChild(f("span",{},`📍 พิกัด: ${u.lat.toFixed(6)}, ${u.lng.toFixed(6)}`)),le.appendChild(f("div",{style:"display:flex;gap:0.4rem;"},f("a",{href:x,target:"_blank",rel:"noopener noreferrer",class:"btn btn-outline btn-sm"},"เปิดแผนที่"),f("button",{type:"button",class:"btn btn-danger-outline btn-sm",onClick:()=>{u=null,M.value="",M.setCustomValidity(""),G()}},"ล้างพิกัด")))}else le.className="gps-status-box",le.textContent="ยังไม่ได้ระบุพิกัดตำแหน่ง (ไม่บังคับใส่)"}V.addEventListener("click",()=>{if(!navigator.geolocation){me("อุปกรณ์หรือเบราว์เซอร์นี้ไม่รองรับการดึงพิกัด GPS","error");return}V.disabled=!0,V.textContent="⏳ กำลังดึงพิกัด GPS...",navigator.geolocation.getCurrentPosition(x=>{u={lat:x.coords.latitude,lng:x.coords.longitude,accuracy:Math.round(x.coords.accuracy||0),capturedAt:new Date().toISOString()},M.value=`${u.lat.toFixed(6)}, ${u.lng.toFixed(6)}`,M.setCustomValidity(""),V.disabled=!1,V.textContent="📌 ดึงพิกัด GPS ปัจจุบัน",G(),me("ดึงพิกัด GPS สำเร็จแล้ว","success")},x=>{V.disabled=!1,V.textContent="📌 ดึงพิกัด GPS ปัจจุบัน";const ue=x.code===1?"กรุณาอนุญาตการเข้าถึงตำแหน่ง (Location) ในเบราว์เซอร์":"ไม่สามารถรับสัญญาณ GPS ได้ในขณะนี้";me(ue,"error")},{enableHighAccuracy:!0,timeout:12e3,maximumAge:0})});function we(x){a=x,S.checked=!ut(x.nationalId),B(),b.value=x.nationalId||"",$.value=x.fullName||"",Q.value=x.nickname||"",z.value=x.age||"",Z.value=x.startYearBE||"",T.value=x.colorGroup||"",y.value=x.addressNo||"",v.value=x.moo||"",w.value=x.subdistrict||"",A.value=x.district||"",I.value=x.province||"",Pe.value=x.note||"",l=Array.isArray(x.photos)?[...x.photos]:[],u=x.gps?{...x.gps}:null,M.value=u&&typeof u.lat=="number"&&typeof u.lng=="number"?`${u.lat}, ${u.lng}`:"",M.setCustomValidity(""),p.textContent=`โหมดแก้ไขข้อมูล: ${x.fullName} (ลำดับที่ ${x.seqNo||"-"})`,Y(),G(),dn()}C.addEventListener("click",()=>{const x=ut(b.value);if(x.length<5){h.className="alert-banner warning",h.textContent="กรุณากรอกเลขบัตรประจำตัวประชาชนอย่างน้อย 5 หลักเพื่อค้นหา",h.hidden=!1,b.focus();return}const ue=n.find(Ne=>{const ge=Ne.nationalIdDigits||ut(Ne.nationalId);return ge===x||x.length>=8&&ge.includes(x)});ue?(we(ue),h.className="alert-banner warning",h.textContent=`⚠️ พบข้อมูลเดิมในระบบแล้ว: "${ue.fullName}" — โหลดข้อมูลเข้าสู่โหมดแก้ไขเรียบร้อย`,h.hidden=!1):(a=null,p.textContent="ไม่พบเลขบัตรนี้ในระบบ — พร้อมเพิ่มข้อมูลบุคคลใหม่",h.className="alert-banner success",h.textContent="✅ ไม่พบเลขบัตรประชาชนนี้ในระบบเดิม สามารถกรอกข้อมูลเพื่อเพิ่มรายชื่อใหม่ได้ทันที",h.hidden=!1,dn(),$.focus())});const Ye=f("button",{type:"submit",class:"btn btn-navy btn-full"},"💾 บันทึกข้อมูล"),ee=f("div",{class:"form-secondary-actions"});function dn(){De(ee),ee.appendChild(f("button",{type:"button",class:"btn btn-outline btn-sm",onClick:()=>r?.()},"🔄 ล้างฟอร์ม (เพิ่มรายใหม่)")),a&&ee.appendChild(f("button",{type:"button",class:"btn btn-danger-outline btn-sm",onClick:()=>s?.(a)},"🗑️ ลบข้อมูลผู้ป่วยรายนี้"))}const ot=f("form",{class:"form-sheet-body",method:"post","aria-labelledby":"patient-form-heading"},h,f("div",{class:"field"},f("label",{for:"pf-national-id"},"เลขบัตรประจำตัวประชาชน",f("span",{class:"req-star","aria-hidden":"true"},"*")),f("div",{class:"input-with-action"},b,C),f("div",{id:"pf-national-id-error",class:"error-msg"},f("span",{role:"img","aria-label":"ข้อผิดพลาด"},"⚠"),' กรุณากรอกเลขบัตรประจำตัวประชาชน 13 หลัก หรือติ๊ก "ไม่มีข้อมูล"'),f("label",{for:"pf-no-national-id",class:"inline-checkbox-row"},S,f("span",{},"ไม่มีข้อมูลเลขบัตรประชาชน (ไม่ได้ขอมา / ไม่ทราบเลขบัตร)"))),f("div",{class:"form-grid-2"},f("div",{class:"field"},f("label",{for:"pf-fullname"},"ชื่อ - นามสกุล ผู้ป่วย",f("span",{class:"req-star","aria-hidden":"true"},"*")),$,f("div",{id:"pf-fullname-error",class:"error-msg"},f("span",{role:"img","aria-label":"ข้อผิดพลาด"},"⚠")," กรุณากรอกชื่อ - นามสกุล ผู้ป่วย")),f("div",{class:"field"},f("label",{for:"pf-nickname"},"ชื่อเล่น"),Q)),f("div",{class:"form-grid-2"},f("div",{class:"field"},f("label",{for:"pf-age"},"อายุ (ปี)"),z),f("div",{class:"field"},f("label",{for:"pf-start-year"},"ปี พ.ศ. ที่เริ่มเป็น"),Z)),f("div",{class:"field"},f("label",{for:"pf-color"},"กลุ่มสี"),T),f("div",{class:"form-grid-2"},f("div",{class:"field"},f("label",{for:"pf-address-no"},"ที่อยู่ (บ้านเลขที่)"),y),f("div",{class:"field"},f("label",{for:"pf-moo"},"หมู่"),v)),f("div",{class:"form-grid-3"},f("div",{class:"field"},f("label",{for:"pf-subdistrict"},"ตำบล"),w,E),f("div",{class:"field"},f("label",{for:"pf-district"},"อำเภอ"),A),f("div",{class:"field"},f("label",{for:"pf-province"},"จังหวัด"),I)),f("div",{class:"field"},f("label",{for:"pf-note"},"หมายเหตุ"),Pe),f("div",{class:"field"},f("label",{for:"pf-photos"},"ภาพถ่าย (เลือกได้หลายภาพ)"),bt,f("div",{class:"file-picker-box"},nt),Ge),f("div",{class:"field gps-section"},f("label",{for:"pf-coords"},"พิกัดสถานที่ (ไม่บังคับ)"),V,M,le),Ye,ee);return ot.addEventListener("submit",async x=>{x.preventDefault();const ue=S.checked?"":ut(b.value);!S.checked&&ue.length!==13?b.setCustomValidity("กรุณากรอกเลขบัตรประจำตัวประชาชนให้ครบ 13 หลัก หรือติ๊กไม่มีข้อมูล"):b.setCustomValidity("");const Ne=re(M.value);if(Ne.valid?(M.setCustomValidity(""),u=Ne.gps):M.setCustomValidity('กรุณากรอกพิกัดในรูปแบบ "ละติจูด, ลองจิจูด" เช่น 14.403215, 100.145678'),!ot.reportValidity()){ot.querySelector(":invalid")?.focus();return}if(!a&&ue.length===13){const ge=n.find(at=>(at.nationalIdDigits||ut(at.nationalId))===ue);if(ge){h.className="alert-banner error",h.textContent=`พบเลขบัตรประชาชนนี้ซ้ำกับ "${ge.fullName}" ในระบบแล้ว กรุณากดปุ่ม "🔍 ค้นหา" เพื่อโหลดข้อมูลเดิมมาแก้ไข`,h.hidden=!1,b.focus();return}}Ye.disabled=!0,Ye.textContent="⏳ กำลังบันทึกข้อมูล...";try{const ge=await qe.savePatient({nationalId:b.value,fullName:$.value,nickname:Q.value,age:z.value,startYearBE:Z.value,colorGroup:T.value,addressNo:y.value,moo:v.value,subdistrict:w.value,district:A.value,province:I.value,note:Pe.value,photos:l,gps:u},a);me(ge.mode==="update"?`อัปเดตข้อมูล "${ge.patient.fullName}" เรียบร้อยแล้ว`:`เพิ่มข้อมูล "${ge.patient.fullName}" เข้าสู่ระบบเรียบร้อยแล้ว`,"success"),i?.(ge)}catch(ge){h.className="alert-banner error",h.textContent=ge?.message||"เกิดข้อผิดพลาดในการบันทึกข้อมูล",h.hidden=!1,Ye.disabled=!1,Ye.textContent="💾 บันทึกข้อมูล"}}),Y(),G(),dn(),f("div",{class:"form-sheet-wrap"},f("section",{class:"form-sheet"},f("header",{class:"form-sheet-header"},f("h1",{id:"patient-form-heading"},"ระบบจัดการข้อมูลบุคคลวิกลจริต"),p),ot))}const iI={CREATE:"เพิ่มข้อมูล",UPDATE:"แก้ไขข้อมูล",DELETE:"ลบข้อมูล",RESTORE:"กู้คืนข้อมูล",SEED_IMPORT:"นำเข้าตั้งต้น",OFFICER_UPDATE:"จัดการตำรวจ"};function sI({logs:n,officers:e,patients:t}){let i="logs",s="ALL",r="",a="";const l=f("div",{}),u=f("div",{});function h(){return f("div",{class:"admin-subtabs"},f("button",{type:"button",class:`btn ${i==="logs"?"btn-maroon":"btn-outline"}`,onClick:()=>{i="logs",b()}},`📋 ประวัติการลงข้อมูลตำรวจ (${n.length})`),f("button",{type:"button",class:`btn ${i==="officers"?"btn-maroon":"btn-outline"}`,onClick:()=>{i="officers",b()}},`👮 รายชื่อตำรวจที่มีสิทธิ์เข้าใช้ (${e.length} นาย)`),f("button",{type:"button",class:`btn ${i==="byOfficer"?"btn-maroon":"btn-outline"}`,onClick:()=>{i="byOfficer",b()}},"📊 สรุปผู้ลงข้อมูลแต่ละรายชื่อ"))}function p(){const C=f("input",{type:"search",placeholder:"ค้นหาชื่อตำรวจ, นามเรียกขาน, เบอร์โทร, หรือชื่อผู้ป่วย...",value:r}),D=f("select",{"aria-label":"กรองตามประเภทการกระทำ"},f("option",{value:"ALL"},"ทุกการกระทำ"),f("option",{value:"CREATE"},"เพิ่มข้อมูล"),f("option",{value:"UPDATE"},"แก้ไขข้อมูล"),f("option",{value:"DELETE"},"ลบข้อมูล"),f("option",{value:"RESTORE"},"กู้คืนข้อมูล"),f("option",{value:"OFFICER_UPDATE"},"จัดการรายชื่อตำรวจ"));D.value=s;const S=f("tbody",{});function B(){De(S);const $=r.trim().toLowerCase(),Q=n.filter(z=>s!=="ALL"&&z.action!==s?!1:$?[z.actor?.fullName,z.actor?.callsign,z.actor?.username,z.targetName,z.targetNationalId,z.summary].filter(Boolean).join(" ").toLowerCase().includes($):!0);if(!Q.length){S.appendChild(f("tr",{},f("td",{colspan:"6",style:"text-align:center;padding:2rem;color:#64748b;"},"ยังไม่มีประวัติการเพิ่ม/แก้ไข/ลบข้อมูลในระบบ")));return}for(const z of Q){const Z=z.actor||{},y=!!(z.previousSnapshot&&(z.action==="DELETE"||z.action==="UPDATE"))?f("button",{type:"button",class:"btn btn-navy btn-sm",onClick:async()=>{const v=z.action==="DELETE"?"ลบ":"แก้ไข";if(await tf({title:"ยืนยันการกู้คืนข้อมูลเดิม",message:`ต้องการกู้คืนข้อมูลของ "${z.targetName||"-"}" กลับเป็นสภาพก่อนที่ ${Z.fullName||"-"} จะ${v} เมื่อ ${Yt(z.timestamp)} ใช่หรือไม่?`,confirmLabel:"↩️ ยืนยันกู้คืนข้อมูล",danger:!1}))try{await qe.restoreFromAuditLog(z),me(`กู้คืนข้อมูล "${z.targetName}" สำเร็จแล้ว`,"success")}catch(w){me(w?.message||"กู้คืนข้อมูลไม่สำเร็จ","error")}}},z.action==="DELETE"?"↩️ กู้คืนข้อมูลเดิม":"↩️ ย้อนกลับค่าเดิม"):f("span",{style:"color:#94a3b8;font-size:0.82rem;"},"-");S.appendChild(f("tr",{},f("td",{"data-label":"วัน-เวลา"},Yt(z.timestamp)),f("th",{scope:"row"},Z.fullName||"-",f("span",{class:"muted-sub"},`${Z.callsign||"-"} | บัญชี: ${Z.username||"-"}`)),f("td",{"data-label":"การดำเนินการ"},f("span",{class:`action-badge ${z.action}`},iI[z.action]||z.action)),f("td",{"data-label":"บุคคลที่ถูกจัดการ"},f("strong",{},z.targetName||"-"),f("span",{class:"muted-sub"},`เลขบัตร/อ้างอิง: ${z.targetNationalId||"-"}`)),f("td",{"data-label":"รายละเอียด"},z.summary||"-"),f("td",{"data-label":"กู้คืน"},y)))}}C.addEventListener("input",()=>{r=C.value,B()}),D.addEventListener("change",()=>{s=D.value,B()}),B();const q=qe.getMode()==="firebase"?f("button",{type:"button",class:"btn btn-outline btn-sm",onClick:async $=>{const Q=$.currentTarget;Q.disabled=!0,Q.textContent="⏳ กำลังซิงค์ข้อมูลตั้งต้น...";try{const z=await qe.ensureFirebaseSeededIfEmpty(!0);me(`ซิงค์ข้อมูลตั้งต้นสำเร็จ (ตำรวจ ${z.officersSeeded} นาย, รายชื่อ ${z.patientsSeeded} รายการ)`,"success")}catch(z){me(z?.message||"ซิงค์ข้อมูลไม่สำเร็จ","error")}finally{Q.disabled=!1,Q.textContent="☁️ ซิงค์ข้อมูลตั้งต้นขึ้น Firebase"}}},"☁️ ซิงค์ข้อมูลตั้งต้นขึ้น Firebase"):null;return f("div",{},f("div",{class:"search-panel"},f("div",{style:"display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.75rem;"},f("h2",{style:"margin:0;"},"🛡️ ตรวจสอบประวัติการลงข้อมูลของเจ้าหน้าที่ตำรวจ"),q),f("div",{class:"search-row"},C,D)),f("section",{class:"table-card"},f("div",{class:"table-toolbar"},f("h2",{id:"audit-table-caption"},"บันทึกกิจกรรมล่าสุด (Audit Log)")),f("div",{class:"table-wrapper",tabindex:"0",role:"region","aria-labelledby":"audit-table-caption"},f("table",{class:"data-table"},f("caption",{},"ประวัติการบันทึก แก้ไข และลบข้อมูลบุคคลวิกลจริต"),f("thead",{},f("tr",{},f("th",{scope:"col"},"วัน-เวลา"),f("th",{scope:"col"},"เจ้าหน้าที่ตำรวจผู้ดำเนินการ"),f("th",{scope:"col"},"การกระทำ"),f("th",{scope:"col"},"ข้อมูลบุคคล"),f("th",{scope:"col"},"รายละเอียดการเปลี่ยนแปลง"),f("th",{scope:"col"},"กู้คืน"))),S))))}function m(){const C=t.filter(B=>B.updatedBy?.role&&B.updatedBy.role!=="system"),D=f("tbody",{}),S=C.length?C:t.slice(0,30);for(const B of S){const q=B.createdBy||{},$=B.updatedBy||{};D.appendChild(f("tr",{},f("th",{scope:"row"},B.fullName||"-",f("span",{class:"muted-sub"},B.nationalId||"-")),f("td",{"data-label":"ผู้สร้างรายการ"},q.fullName||"-",f("span",{class:"muted-sub"},`${q.callsign||"-"} (${q.username||"-"})`)),f("td",{"data-label":"ผู้แก้ไขล่าสุด"},$.fullName||"-",f("span",{class:"muted-sub"},`${$.callsign||"-"} (${$.username||"-"})`)),f("td",{"data-label":"อัปเดตล่าสุดเมื่อ"},Yt(B.updatedAt))))}return f("section",{class:"table-card"},f("div",{class:"table-toolbar"},f("h2",{id:"by-officer-caption"},C.length?`รายการที่เจ้าหน้าที่ตำรวจเพิ่ม/ปรับปรุงข้อมูล (${C.length} รายการ)`:"ยังไม่มีรายการที่แก้ไขเพิ่มเติมจากไฟล์ตั้งต้น (แสดงตัวอย่าง 30 รายการแรก)")),f("div",{class:"table-wrapper",tabindex:"0",role:"region","aria-labelledby":"by-officer-caption"},f("table",{class:"data-table"},f("caption",{},"สรุปผู้ลงข้อมูลและผู้แก้ไขล่าสุดของบุคคลวิกลจริต"),f("thead",{},f("tr",{},f("th",{scope:"col"},"ผู้ป่วย"),f("th",{scope:"col"},"ผู้บันทึกตั้งต้น"),f("th",{scope:"col"},"ผู้แก้ไขล่าสุด"),f("th",{scope:"col"},"เวลาล่าสุด"))),D)))}function _(){const C=f("input",{type:"text",required:!0,placeholder:"เช่น ส.ต.ท.สมชาย ใจดี"}),D=f("input",{type:"text",required:!0,inputmode:"numeric",placeholder:"0812345678"}),S=f("input",{type:"text",placeholder:"เช่น ผบ.หมู่(ป.)ฯ"}),B=f("input",{type:"text",placeholder:"เช่น ปลาม้า 2135"}),q=f("select",{},f("option",{value:"ชั้นสัญญาบัตร"},"ชั้นสัญญาบัตร"),f("option",{value:"ชั้นประทวน"},"ชั้นประทวน"),f("option",{value:"ช่วยราชการ คฝ."},"ช่วยราชการ คฝ."));q.value="ชั้นประทวน";const $=f("form",{class:"officer-form-card",onSubmit:async T=>{T.preventDefault();try{await qe.saveOfficer({fullName:C.value,phone:D.value,position:S.value,callsign:B.value,category:q.value,active:!0}),me(`บันทึกบัญชีตำรวจ "${C.value}" เรียบร้อยแล้ว`,"success"),C.value="",D.value="",S.value="",B.value=""}catch(y){me(y?.message||"บันทึกไม่สำเร็จ","error")}}},f("h2",{style:"margin:0 0 0.75rem;font-size:1rem;"},"➕ เพิ่ม / อัปเดตข้าราชการตำรวจที่มีสิทธิ์เข้าสู่ระบบ"),f("div",{class:"form-grid-3",style:"margin-bottom:0.75rem;"},f("div",{class:"field"},f("label",{},"ยศ ชื่อ-สกุล *"),C),f("div",{class:"field"},f("label",{},"เบอร์โทรศัพท์ (Username) *"),D),f("div",{class:"field"},f("label",{},"นามเรียกขาน"),B)),f("div",{class:"form-grid-3",style:"align-items:end;"},f("div",{class:"field"},f("label",{},"ตำแหน่ง"),S),f("div",{class:"field"},f("label",{},"สังกัด/ระดับ"),q),f("button",{type:"submit",class:"btn btn-navy"},"💾 บันทึกรายชื่อตำรวจ"))),Q=f("input",{type:"search",placeholder:"ค้นหาชื่อตำรวจ นามเรียกขาน หรือเบอร์โทรศัพท์...",value:a,style:"max-width:360px;"}),z=f("tbody",{});function Z(){De(z);const T=a.trim().toLowerCase(),y=Ht(a),v=e.filter(E=>T?(E.fullName||"").toLowerCase().includes(T)||(E.callsign||"").toLowerCase().includes(T)||(E.position||"").toLowerCase().includes(T)||y&&Ht(E.phone).includes(y):!0);for(const E of v){const w=E.active!==!1;z.appendChild(f("tr",{},f("th",{scope:"row"},E.fullName,f("span",{class:"muted-sub"},`${E.position||"-"} (${E.category||"-"})`)),f("td",{"data-label":"เบอร์โทร (Username)"},E.phoneDisplay||_i(E.phone)),f("td",{"data-label":"นามเรียกขาน"},E.callsign||"-"),f("td",{"data-label":"หมายเหตุ"},E.note||"-"),f("td",{"data-label":"สถานะ"},f("span",{class:`color-badge ${w?"green":"red"}`},w?"ใช้งานได้":"ระงับสิทธิ์")),f("td",{"data-label":"จัดการ"},f("button",{type:"button",class:`btn btn-sm ${w?"btn-danger-outline":"btn-outline"}`,onClick:async()=>{try{await qe.saveOfficer({...E,active:!w}),me(`${w?"ระงับสิทธิ์":"เปิดสิทธิ์"} ${E.fullName} แล้ว`,"success")}catch(A){me(A?.message||"ดำเนินการไม่สำเร็จ","error")}}},w?"ระงับสิทธิ์":"เปิดสิทธิ์"))))}}return Q.addEventListener("input",()=>{a=Q.value,Z()}),Z(),f("div",{},$,f("section",{class:"table-card"},f("div",{class:"table-toolbar"},f("h2",{id:"officers-table-caption"},`บัญชีรายชื่อตำรวจ สภ.บางปลาม้า (${e.length} นาย)`),Q),f("div",{class:"table-wrapper",tabindex:"0",role:"region","aria-labelledby":"officers-table-caption"},f("table",{class:"data-table"},f("caption",{},"รายชื่อข้าราชการตำรวจ สภ.บางปลาม้า"),f("thead",{},f("tr",{},f("th",{scope:"col"},"ยศ ชื่อ-สกุล"),f("th",{scope:"col"},"เบอร์โทรศัพท์"),f("th",{scope:"col"},"นามเรียกขาน"),f("th",{scope:"col"},"หมายเหตุ"),f("th",{scope:"col"},"สถานะ"),f("th",{scope:"col"},"จัดการ"))),z))))}function b(){De(l),l.appendChild(h()),De(u),i==="logs"?u.appendChild(p()):i==="officers"?u.appendChild(_()):u.appendChild(m()),l.appendChild(u)}return b(),l}function rI(){const n=CSS.supports("selector(:user-invalid)"),e=new WeakMap,t=(r,a)=>{const l=r.dataset?.error;if(!l)return;const u=(r.getAttribute("aria-describedby")||"").split(/\s+/).filter(h=>h&&h!==l);a&&u.push(l),u.length?r.setAttribute("aria-describedby",u.join(" ")):r.removeAttribute("aria-describedby")},i=r=>{if(!r?.matches?.("input, select, textarea"))return;const a=n?r.matches(":user-invalid"):r.classList.contains("user-invalid-fallback");r.setAttribute("aria-invalid",a?"true":"false"),t(r,a)},s=r=>{if(n||!r?.validity)return;const a=r.validity.valid;r.classList.toggle("user-invalid-fallback",!a),r.classList.toggle("user-valid-fallback",a),i(r)};document.addEventListener("blur",r=>{const a=r.target;if(a?.matches?.("input, select, textarea"))if(n)i(a);else{const l=e.get(a)||{interacted:!1,blurred:!1};l.blurred=!0,e.set(a,l),l.interacted&&s(a)}},!0),document.addEventListener("input",r=>{const a=r.target;if(a?.matches?.("input, select, textarea"))if(n)a.hasAttribute("aria-invalid")&&i(a);else{const l=e.get(a)||{interacted:!1,blurred:!1};l.interacted=!0,e.set(a,l),l.blurred&&s(a)}}),document.addEventListener("invalid",r=>{const a=r.target;n?i(a):(e.set(a,{interacted:!0,blurred:!0}),s(a))},!0)}const yn=document.getElementById("app"),U={user:null,authReady:!1,activeTab:"search",patients:[],officers:[],logs:[],editingPatient:null,prefillQuery:"",unsubscribers:[]};function za(){for(const n of U.unsubscribers)try{n?.()}catch{}U.unsubscribers=[]}function nf(){if(za(),!U.user)return;const n=qe.subscribePatients(e=>{U.patients=e,U.activeTab!=="form"&&Xe()},()=>{me("ไม่สามารถโหลดข้อมูลจาก Firestore ได้ กรุณาตรวจสอบสิทธิ์การเชื่อมต่อ","error")});if(U.unsubscribers.push(n),U.user.role==="admin"){qe.ensureFirebaseSeededIfEmpty().catch(i=>{me(`นำเข้าข้อมูลตั้งต้นไม่สำเร็จ: ${i?.message||i}`,"error")});const e=qe.subscribeAuditLogs(i=>{U.logs=i,U.activeTab==="admin"&&Xe()}),t=qe.subscribeOfficers(i=>{U.officers=i,U.activeTab==="admin"&&Xe()});U.unsubscribers.push(e,t)}}async function go(n){if(await tf({title:"ยืนยันการลบข้อมูลบุคคลวิกลจริต",message:`ต้องการลบข้อมูลของ "${n.fullName||"ไม่ระบุชื่อ"}" (เลขบัตร: ${n.nationalId||"-"}) ออกจากระบบใช่หรือไม่? การลบจะถูกบันทึกไว้ในประวัติผู้ดูแลระบบ`,confirmLabel:"ยืนยันลบข้อมูล",danger:!0}))try{await qe.deletePatient(n),U.editingPatient?.id===n.id&&(U.editingPatient=null,U.activeTab="search"),me(`ลบข้อมูล "${n.fullName}" เรียบร้อยแล้ว`,"success"),Xe()}catch(t){me(t?.message||"ลบข้อมูลไม่สำเร็จ","error")}}function Xe(){if(De(yn),!U.authReady){yn.appendChild(f("main",{class:"login-page"},f("div",{style:"text-align:center;color:#475569;font-weight:600;"},"⏳ กำลังโหลดระบบ สภ.บางปลาม้า...")));return}if(!U.user){yn.appendChild(Yv({onLoginSuccess:l=>{U.user=l,U.activeTab="search",nf(),Xe(),me(`ยินดีต้อนรับ ${l.fullName}`,"success")}}));return}const n=U.user.role==="admin",e=qe.getMode(),t=f("header",{class:"app-header"},f("div",{class:"app-header-inner"},f("div",{class:"brand-block"},f("div",{class:"brand-icon"},f("img",{src:jo,alt:"ตรา สภ.บางปลาม้า",class:"brand-logo-img"})),f("div",{},f("h1",{class:"brand-title"},"ระบบข้อมูลบุคคลวิกลจริต สภ.บางปลาม้า"),f("p",{class:"brand-subtitle"},"สถานีตำรวจภูธรบางปลาม้า จังหวัดสุพรรณบุรี"))),f("div",{class:"user-panel"},f("span",{class:`mode-pill ${e}`},e==="firebase"?"🔥 Firebase Cloud":"🧪 โหมดทดสอบในเครื่อง"),f("div",{class:"user-chip"},n?f("span",{class:"role-tag"},"ADMIN"):null,f("span",{},n?`${U.user.fullName} (${U.user.username})`:`${U.user.fullName} (${U.user.callsign})`)),f("button",{type:"button",class:"btn btn-logout",onClick:async()=>{za(),await qe.logout(),U.user=null,U.patients=[],U.logs=[],U.officers=[],U.editingPatient=null,Xe(),me("ออกจากระบบเรียบร้อยแล้ว","info")}},"ออกจากระบบ")))),i=[{id:"search",label:`🔍 ตรวจสอบรายชื่อ (${U.patients.length})`},{id:"form",label:U.editingPatient?"✏️ แก้ไขข้อมูลบุคคล":"➕ เพิ่ม / แก้ไขข้อมูล"}];n&&i.push({id:"admin",label:"🛡️ แผงควบคุมแอดมิน & ประวัติการลงข้อมูล"});const s=f("nav",{class:"app-nav","aria-label":"เมนูหลัก"},f("div",{class:"app-nav-inner"},i.map(l=>f("button",{type:"button",class:"nav-tab","aria-current":U.activeTab===l.id?"page":null,onClick:()=>{l.id==="form"&&U.activeTab!=="form"||l.id!=="form"&&(U.editingPatient=null,U.prefillQuery=""),U.activeTab=l.id,Xe()}},l.label)))),r=e==="demo"?f("div",{class:"demo-strip"},f("div",{class:"alert-banner warning"},"⚠️ ขณะนี้ระบบทำงานในโหมดทดสอบในเครื่อง (Local Storage) — เมื่อเชื่อมต่อ Firebase Project ในไฟล์ .env และ Deploy แล้ว ข้อมูลทั้งหมดจะซิงค์ออนไลน์ผ่าน Cloud Firestore อัตโนมัติ")):null;let a;U.activeTab==="search"?a=Zv({patients:U.patients,isAdmin:n,onSelectDetail:l=>{tI(l,{isAdmin:n,onEdit:u=>{U.editingPatient=u,U.prefillQuery="",U.activeTab="form",Xe()},onDelete:go})},onEditPatient:l=>{U.editingPatient=l,U.prefillQuery="",U.activeTab="form",Xe()},onDeletePatient:go,onQuickAdd:l=>{U.editingPatient=null,U.prefillQuery=l||"",U.activeTab="form",Xe()}}):U.activeTab==="form"?a=nI({patients:U.patients,initialPatient:U.editingPatient,prefillQuery:U.prefillQuery,onSaved:()=>{U.editingPatient=null,U.prefillQuery="",U.activeTab="search",Xe()},onDeletePatient:go,onResetToNew:()=>{U.editingPatient=null,U.prefillQuery="",Xe()}}):U.activeTab==="admin"&&n&&(a=sI({logs:U.logs,officers:U.officers,patients:U.patients})),yn.appendChild(t),yn.appendChild(s),r&&yn.appendChild(r),yn.appendChild(f("main",{class:"app-main"},a))}rI();Xe();qe.initAuthListener(n=>{U.user=n,U.authReady=!0,n?nf():za(),Xe()});
