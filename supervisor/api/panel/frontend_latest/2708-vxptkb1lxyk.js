/*! For license information please see 2708-vxptkb1lxyk.js.LICENSE.txt */
export const id=2708;export const ids=[2708];export const modules={52708:(e,t,i)=>{i.r(t);var o=i(17463),a=(i(44577),i(68144)),n=i(79932),s=i(14516),r=i(47181),l=(i(76870),i(65189),i(86630),i(41682)),d=i(35460),c=i(26765),u=i(11654);const h=(0,s.Z)((e=>{const t=""!==e.host.disk_life_time?30:10,i=1e3*e.host.disk_used/60/t,o=4*e.host.startup_time/60;return 10*Math.ceil((i+o)/10)}));(0,o.Z)([(0,n.Mo)("dialog-hassio-datadisk")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"dialogParams",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"selectedDevice",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"devices",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"moving",value:()=>!1},{kind:"method",key:"showDialog",value:function(e){this.dialogParams=e,(0,d.ou)(this.hass).then((e=>{this.devices=e.devices}))}},{kind:"method",key:"closeDialog",value:function(){this.dialogParams=void 0,this.selectedDevice=void 0,this.devices=void 0,this.moving=!1,(0,r.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e;return this.dialogParams?a.dy` <ha-dialog open scrimClickAction escapeKeyAction .heading="${this.moving?this.dialogParams.supervisor.localize("dialog.datadisk_move.moving"):this.dialogParams.supervisor.localize("dialog.datadisk_move.title")}" @closed="${this.closeDialog}" ?hideActions="${this.moving}"> ${this.moving?a.dy` <ha-circular-progress alt="Moving" size="large" active> </ha-circular-progress> <p class="progress-text"> ${this.dialogParams.supervisor.localize("dialog.datadisk_move.moving_desc")} </p>`:a.dy` ${null!==(e=this.devices)&&void 0!==e&&e.length?a.dy` ${this.dialogParams.supervisor.localize("dialog.datadisk_move.description",{current_path:this.dialogParams.supervisor.os.data_disk,time:h(this.dialogParams.supervisor)})} <br><br> <ha-select .label="${this.dialogParams.supervisor.localize("dialog.datadisk_move.select_device")}" @selected="${this._select_device}" dialogInitialFocus> ${this.devices.map((e=>a.dy`<mwc-list-item .value="${e}">${e}</mwc-list-item>`))} </ha-select> `:void 0===this.devices?this.dialogParams.supervisor.localize("dialog.datadisk_move.loading_devices"):this.dialogParams.supervisor.localize("dialog.datadisk_move.no_devices")} <mwc-button slot="secondaryAction" @click="${this.closeDialog}" dialogInitialFocus> ${this.dialogParams.supervisor.localize("dialog.datadisk_move.cancel")} </mwc-button> <mwc-button .disabled="${!this.selectedDevice}" slot="primaryAction" @click="${this._moveDatadisk}"> ${this.dialogParams.supervisor.localize("dialog.datadisk_move.move")} </mwc-button>`} </ha-dialog> `:a.Ld}},{kind:"method",key:"_select_device",value:function(e){this.selectedDevice=e.target.value}},{kind:"method",key:"_moveDatadisk",value:async function(){this.moving=!0;try{await(0,d.Sx)(this.hass,this.selectedDevice)}catch(e){this.hass.connection.connected&&!(0,l.yz)(e)&&((0,c.Ys)(this,{title:this.dialogParams.supervisor.localize("system.host.failed_to_move"),text:(0,l.js)(e)}),this.closeDialog())}}},{kind:"get",static:!0,key:"styles",value:function(){return[u.Qx,u.yu,a.iv`ha-select{width:100%}ha-circular-progress{display:block;margin:32px;text-align:center}.progress-text{text-align:center}`]}}]}}),a.oi)},65189:(e,t,i)=>{var o=i(17463),a=i(68144),n=i(79932),s=i(34541),r=i(47838),l=i(47181),d=i(93217);let c;const u={Note:"info",Warning:"warning"};(0,o.Z)([(0,n.Mo)("ha-markdown-element")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,n.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"allowSvg",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"breaks",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:()=>!1},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(e){(0,s.Z)((0,r.Z)(o.prototype),"update",this).call(this,e),void 0!==this.content&&this._render()}},{kind:"method",key:"_render",value:async function(){this.innerHTML=await(async(e,t,o)=>(c||(c=(0,d.Ud)(new Worker(new URL(i.p+i.u(1402),i.b),{type:"module"}))),c.renderMarkdown(e,t,o)))(String(this.content),{breaks:this.breaks,gfm:!0},{allowSvg:this.allowSvg}),this._resize();const e=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT,null);for(;e.nextNode();){const i=e.currentNode;if(i instanceof HTMLAnchorElement&&i.host!==document.location.host)i.target="_blank",i.rel="noreferrer noopener";else if(i instanceof HTMLImageElement)this.lazyImages&&(i.loading="lazy"),i.addEventListener("load",this._resize);else if(i instanceof HTMLQuoteElement){const e=i.firstElementChild,o=null==e?void 0:e.firstElementChild,a=(null==o?void 0:o.textContent)&&u[o.textContent];if("STRONG"===(null==o?void 0:o.nodeName)&&a){var t;const o=document.createElement("ha-alert");o.alertType=a,o.title="#text"===e.childNodes[1].nodeName&&(null===(t=e.childNodes[1].textContent)||void 0===t?void 0:t.trimStart())||"";const n=Array.from(e.childNodes);for(const e of n.slice(n.findIndex((e=>e instanceof HTMLBRElement))+1))o.appendChild(e);i.firstElementChild.replaceWith(o)}}}}},{kind:"field",key:"_resize",value(){return()=>(0,l.B)(this,"iron-resize")}}]}}),a.fl);i(9381),i(52039);(0,o.Z)([(0,n.Mo)("ha-markdown")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"allowSvg",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"breaks",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:()=>!1},{kind:"method",key:"render",value:function(){return this.content?a.dy`<ha-markdown-element .content="${this.content}" .allowSvg="${this.allowSvg}" .breaks="${this.breaks}" .lazyImages="${this.lazyImages}"></ha-markdown-element>`:a.Ld}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:block}ha-markdown-element{-ms-user-select:text;-webkit-user-select:text;-moz-user-select:text}ha-markdown-element>:first-child{margin-top:0}ha-markdown-element>:last-child{margin-bottom:0}a{color:var(--primary-color)}img{max-width:100%}code,pre{background-color:var(--markdown-code-background-color,none);border-radius:3px}svg{background-color:var(--markdown-svg-background-color,none);color:var(--markdown-svg-color,none)}code{font-size:85%;padding:.2em .4em}pre code{padding:0}pre{padding:16px;overflow:auto;line-height:1.45;font-family:var(--code-font-family,monospace)}h1,h2,h3,h4,h5,h6{line-height:initial}h2{font-size:1.5em;font-weight:700}`}}]}}),a.oi)},93217:(e,t,i)=>{i.d(t,{Ud:()=>h});const o=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),n=Symbol("Comlink.releaseProxy"),s=Symbol("Comlink.finalizer"),r=Symbol("Comlink.thrown"),l=e=>"object"==typeof e&&null!==e||"function"==typeof e,d=new Map([["proxy",{canHandle:e=>l(e)&&e[o],serialize(e){const{port1:t,port2:i}=new MessageChannel;return c(e,t),[i,[i]]},deserialize:e=>(e.start(),h(e))}],["throw",{canHandle:e=>l(e)&&r in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function c(e,t=globalThis,i=["*"]){t.addEventListener("message",(function a(n){if(!n||!n.data)return;if(!function(e,t){for(const i of e){if(t===i||"*"===i)return!0;if(i instanceof RegExp&&i.test(t))return!0}return!1}(i,n.origin))return void console.warn(`Invalid origin '${n.origin}' for comlink proxy`);const{id:l,type:d,path:h}=Object.assign({path:[]},n.data),m=(n.data.argumentList||[]).map(w);let v;try{const t=h.slice(0,-1).reduce(((e,t)=>e[t]),e),i=h.reduce(((e,t)=>e[t]),e);switch(d){case"GET":v=i;break;case"SET":t[h.slice(-1)[0]]=w(n.data.value),v=!0;break;case"APPLY":v=i.apply(t,m);break;case"CONSTRUCT":v=function(e){return Object.assign(e,{[o]:!0})}(new i(...m));break;case"ENDPOINT":{const{port1:t,port2:i}=new MessageChannel;c(e,i),v=function(e,t){return y.set(e,t),e}(t,[t])}break;case"RELEASE":v=void 0;break;default:return}}catch(e){v={value:e,[r]:0}}Promise.resolve(v).catch((e=>({value:e,[r]:0}))).then((i=>{const[o,n]=b(i);t.postMessage(Object.assign(Object.assign({},o),{id:l}),n),"RELEASE"===d&&(t.removeEventListener("message",a),u(t),s in e&&"function"==typeof e[s]&&e[s]())})).catch((e=>{const[i,o]=b({value:new TypeError("Unserializable return value"),[r]:0});t.postMessage(Object.assign(Object.assign({},i),{id:l}),o)}))})),t.start&&t.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function h(e,t){return k(e,[],t)}function m(e){if(e)throw new Error("Proxy has been released and is not useable")}function v(e){return E(e,{type:"RELEASE"}).then((()=>{u(e)}))}const g=new WeakMap,p="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(g.get(e)||0)-1;g.set(e,t),0===t&&v(e)}));function k(e,t=[],i=function(){}){let o=!1;const s=new Proxy(i,{get(i,a){if(m(o),a===n)return()=>{!function(e){p&&p.unregister(e)}(s),v(e),o=!0};if("then"===a){if(0===t.length)return{then:()=>s};const i=E(e,{type:"GET",path:t.map((e=>e.toString()))}).then(w);return i.then.bind(i)}return k(e,[...t,a])},set(i,a,n){m(o);const[s,r]=b(n);return E(e,{type:"SET",path:[...t,a].map((e=>e.toString())),value:s},r).then(w)},apply(i,n,s){m(o);const r=t[t.length-1];if(r===a)return E(e,{type:"ENDPOINT"}).then(w);if("bind"===r)return k(e,t.slice(0,-1));const[l,d]=f(s);return E(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:l},d).then(w)},construct(i,a){m(o);const[n,s]=f(a);return E(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:n},s).then(w)}});return function(e,t){const i=(g.get(t)||0)+1;g.set(t,i),p&&p.register(e,t,e)}(s,e),s}function f(e){const t=e.map(b);return[t.map((e=>e[0])),(i=t.map((e=>e[1])),Array.prototype.concat.apply([],i))];var i}const y=new WeakMap;function b(e){for(const[t,i]of d)if(i.canHandle(e)){const[o,a]=i.serialize(e);return[{type:"HANDLER",name:t,value:o},a]}return[{type:"RAW",value:e},y.get(e)||[]]}function w(e){switch(e.type){case"HANDLER":return d.get(e.name).deserialize(e.value);case"RAW":return e.value}}function E(e,t,i){return new Promise((o=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(i){i.data&&i.data.id&&i.data.id===a&&(e.removeEventListener("message",t),o(i.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),i)}))}}};
//# sourceMappingURL=2708-vxptkb1lxyk.js.map