/*! For license information please see 7210-4r0mI7AoRZ8.js.LICENSE.txt */
export const id=7210;export const ids=[7210];export const modules={33829:(t,i,e)=>{var n=e(68144);class o extends n.oi{static get styles(){return[n.iv`:host{display:block;position:absolute;outline:0;z-index:1002;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:default;pointer-events:none}#tooltip{display:block;outline:0;font-size:var(--simple-tooltip-font-size,10px);line-height:1;background-color:var(--simple-tooltip-background,#616161);color:var(--simple-tooltip-text-color,#fff);padding:8px;border-radius:var(--simple-tooltip-border-radius,2px);width:var(--simple-tooltip-width)}@keyframes keyFrameScaleUp{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes keyFrameScaleDown{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes keyFrameFadeInOpacity{0%{opacity:0}100%{opacity:var(--simple-tooltip-opacity,.9)}}@keyframes keyFrameFadeOutOpacity{0%{opacity:var(--simple-tooltip-opacity,.9)}100%{opacity:0}}@keyframes keyFrameSlideDownIn{0%{transform:translateY(-2000px);opacity:0}10%{opacity:.2}100%{transform:translateY(0);opacity:var(--simple-tooltip-opacity,.9)}}@keyframes keyFrameSlideDownOut{0%{transform:translateY(0);opacity:var(--simple-tooltip-opacity,.9)}10%{opacity:.2}100%{transform:translateY(-2000px);opacity:0}}.fade-in-animation{opacity:0;animation-delay:var(--simple-tooltip-delay-in,500ms);animation-name:keyFrameFadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in,500ms);animation-fill-mode:forwards}.fade-out-animation{opacity:var(--simple-tooltip-opacity,.9);animation-delay:var(--simple-tooltip-delay-out,0ms);animation-name:keyFrameFadeOutOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out,500ms);animation-fill-mode:forwards}.scale-up-animation{transform:scale(0);opacity:var(--simple-tooltip-opacity,.9);animation-delay:var(--simple-tooltip-delay-in,500ms);animation-name:keyFrameScaleUp;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in,500ms);animation-fill-mode:forwards}.scale-down-animation{transform:scale(1);opacity:var(--simple-tooltip-opacity,.9);animation-delay:var(--simple-tooltip-delay-out,500ms);animation-name:keyFrameScaleDown;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out,500ms);animation-fill-mode:forwards}.slide-down-animation{transform:translateY(-2000px);opacity:0;animation-delay:var(--simple-tooltip-delay-out,500ms);animation-name:keyFrameSlideDownIn;animation-iteration-count:1;animation-timing-function:cubic-bezier(0,0,.2,1);animation-duration:var(--simple-tooltip-duration-out,500ms);animation-fill-mode:forwards}.slide-down-animation-out{transform:translateY(0);opacity:var(--simple-tooltip-opacity,.9);animation-delay:var(--simple-tooltip-delay-out,500ms);animation-name:keyFrameSlideDownOut;animation-iteration-count:1;animation-timing-function:cubic-bezier(.4,0,1,1);animation-duration:var(--simple-tooltip-duration-out,500ms);animation-fill-mode:forwards}.cancel-animation{animation-delay:-30s!important}.hidden{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}`]}render(){return n.dy` <div id="tooltip" class="hidden" @animationend="${this._onAnimationEnd}"> <slot></slot> </div>`}static get properties(){return{...super.properties,for:{type:String},manualMode:{type:Boolean,attribute:"manual-mode"},position:{type:String},fitToVisibleBounds:{type:Boolean,attribute:"fit-to-visible-bounds"},offset:{type:Number},marginTop:{type:Number,attribute:"margin-top"},animationDelay:{type:Number,attribute:"animation-delay"},animationEntry:{type:String,attribute:"animation-entry"},animationExit:{type:String,attribute:"animation-exit"},_showing:{type:Boolean}}}static get tag(){return"simple-tooltip"}constructor(){super(),this.manualMode=!1,this.position="bottom",this.fitToVisibleBounds=!1,this.offset=14,this.marginTop=14,this.animationEntry="",this.animationExit="",this.animationConfig={entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]},setTimeout((()=>{this.addEventListener("webkitAnimationEnd",this._onAnimationEnd.bind(this)),this.addEventListener("mouseenter",this.hide.bind(this))}),0)}get target(){var t=this.parentNode,i=this.getRootNode();return this.for?i.querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?i.host:t}disconnectedCallback(){this.manualMode||this._removeListeners(),super.disconnectedCallback()}playAnimation(t){"entry"===t?this.show():"exit"===t&&this.hide()}cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.add("cancel-animation")}show(){if(!this._showing){if(""===this.textContent.trim()){for(var t=!0,i=this.children,e=0;e<i.length;e++)if(""!==i[e].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.shadowRoot.querySelector("#tooltip").classList.remove("hidden"),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("entry"))}}hide(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0,clearTimeout(this.__debounceCancel),this.__debounceCancel=setTimeout((()=>{this._cancelAnimation()}),5e3)}}updatePosition(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var i,e,n=this.offsetParent.getBoundingClientRect(),o=this._target.getBoundingClientRect(),a=this.getBoundingClientRect(),s=(o.width-a.width)/2,r=(o.height-a.height)/2,l=o.left-n.left,m=o.top-n.top;switch(this.position){case"top":i=l+s,e=m-a.height-t;break;case"bottom":i=l+s,e=m+o.height+t;break;case"left":i=l-a.width-t,e=m+r;break;case"right":i=l+o.width+t,e=m+r}this.fitToVisibleBounds?(n.left+i+a.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,i)+"px",this.style.right="auto"),n.top+e+a.height>window.innerHeight?(this.style.bottom=n.height-m+t+"px",this.style.top="auto"):(this.style.top=Math.max(-n.top,e)+"px",this.style.bottom="auto")):(this.style.left=i+"px",this.style.top=e+"px")}}_addListeners(){this._target&&(this._target.addEventListener("mouseenter",this.show.bind(this)),this._target.addEventListener("focus",this.show.bind(this)),this._target.addEventListener("mouseleave",this.hide.bind(this)),this._target.addEventListener("blur",this.hide.bind(this)),this._target.addEventListener("tap",this.hide.bind(this)))}_findTarget(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()}_manualModeChanged(){this.manualMode?this._removeListeners():this._addListeners()}_cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add("hidden")}_onAnimationFinish(){this._showing&&(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("exit")))}_onAnimationEnd(){this._animationPlaying=!1,this._showing||(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.add("hidden"))}_getAnimationType(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var i=this.animationConfig[t][0].timing.delay;"entry"===t?document.documentElement.style.setProperty("--simple-tooltip-delay-in",i+"ms"):"exit"===t&&document.documentElement.style.setProperty("--simple-tooltip-delay-out",i+"ms")}return this.animationConfig[t][0].name}}_removeListeners(){this._target&&(this._target.removeEventListener("mouseover",this.show.bind(this)),this._target.removeEventListener("focusin",this.show.bind(this)),this._target.removeEventListener("mouseout",this.hide.bind(this)),this._target.removeEventListener("focusout",this.hide.bind(this)),this._target.removeEventListener("click",this.hide.bind(this)))}firstUpdated(t){this.setAttribute("role","tooltip"),this.setAttribute("tabindex",-1),this._findTarget()}updated(t){t.forEach(((t,i)=>{"for"==i&&this._findTarget(this[i],t),"manualMode"==i&&this._manualModeChanged(this[i],t),"animationDelay"==i&&this._delayChange(this[i],t)}))}_delayChange(t){500!==t&&document.documentElement.style.setProperty("--simple-tooltip-delay-in",t+"ms")}}customElements.define(o.tag,o)},93217:(t,i,e)=>{e.d(i,{Ud:()=>c});const n=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),s=Symbol("Comlink.finalizer"),r=Symbol("Comlink.thrown"),l=t=>"object"==typeof t&&null!==t||"function"==typeof t,m=new Map([["proxy",{canHandle:t=>l(t)&&t[n],serialize(t){const{port1:i,port2:e}=new MessageChannel;return h(t,i),[e,[e]]},deserialize:t=>(t.start(),c(t))}],["throw",{canHandle:t=>l(t)&&r in t,serialize({value:t}){let i;return i=t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[i,[]]},deserialize(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function h(t,i=globalThis,e=["*"]){i.addEventListener("message",(function o(a){if(!a||!a.data)return;if(!function(t,i){for(const e of t){if(i===e||"*"===e)return!0;if(e instanceof RegExp&&e.test(i))return!0}return!1}(e,a.origin))return void console.warn(`Invalid origin '${a.origin}' for comlink proxy`);const{id:l,type:m,path:c}=Object.assign({path:[]},a.data),p=(a.data.argumentList||[]).map(_);let u;try{const i=c.slice(0,-1).reduce(((t,i)=>t[i]),t),e=c.reduce(((t,i)=>t[i]),t);switch(m){case"GET":u=e;break;case"SET":i[c.slice(-1)[0]]=_(a.data.value),u=!0;break;case"APPLY":u=e.apply(i,p);break;case"CONSTRUCT":u=function(t){return Object.assign(t,{[n]:!0})}(new e(...p));break;case"ENDPOINT":{const{port1:i,port2:e}=new MessageChannel;h(t,e),u=function(t,i){return b.set(t,i),t}(i,[i])}break;case"RELEASE":u=void 0;break;default:return}}catch(t){u={value:t,[r]:0}}Promise.resolve(u).catch((t=>({value:t,[r]:0}))).then((e=>{const[n,a]=w(e);i.postMessage(Object.assign(Object.assign({},n),{id:l}),a),"RELEASE"===m&&(i.removeEventListener("message",o),d(i),s in t&&"function"==typeof t[s]&&t[s]())})).catch((t=>{const[e,n]=w({value:new TypeError("Unserializable return value"),[r]:0});i.postMessage(Object.assign(Object.assign({},e),{id:l}),n)}))})),i.start&&i.start()}function d(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function c(t,i){return g(t,[],i)}function p(t){if(t)throw new Error("Proxy has been released and is not useable")}function u(t){return E(t,{type:"RELEASE"}).then((()=>{d(t)}))}const y=new WeakMap,f="FinalizationRegistry"in globalThis&&new FinalizationRegistry((t=>{const i=(y.get(t)||0)-1;y.set(t,i),0===i&&u(t)}));function g(t,i=[],e=function(){}){let n=!1;const s=new Proxy(e,{get(e,o){if(p(n),o===a)return()=>{!function(t){f&&f.unregister(t)}(s),u(t),n=!0};if("then"===o){if(0===i.length)return{then:()=>s};const e=E(t,{type:"GET",path:i.map((t=>t.toString()))}).then(_);return e.then.bind(e)}return g(t,[...i,o])},set(e,o,a){p(n);const[s,r]=w(a);return E(t,{type:"SET",path:[...i,o].map((t=>t.toString())),value:s},r).then(_)},apply(e,a,s){p(n);const r=i[i.length-1];if(r===o)return E(t,{type:"ENDPOINT"}).then(_);if("bind"===r)return g(t,i.slice(0,-1));const[l,m]=v(s);return E(t,{type:"APPLY",path:i.map((t=>t.toString())),argumentList:l},m).then(_)},construct(e,o){p(n);const[a,s]=v(o);return E(t,{type:"CONSTRUCT",path:i.map((t=>t.toString())),argumentList:a},s).then(_)}});return function(t,i){const e=(y.get(i)||0)+1;y.set(i,e),f&&f.register(t,i,t)}(s,t),s}function v(t){const i=t.map(w);return[i.map((t=>t[0])),(e=i.map((t=>t[1])),Array.prototype.concat.apply([],e))];var e}const b=new WeakMap;function w(t){for(const[i,e]of m)if(e.canHandle(t)){const[n,o]=e.serialize(t);return[{type:"HANDLER",name:i,value:n},o]}return[{type:"RAW",value:t},b.get(t)||[]]}function _(t){switch(t.type){case"HANDLER":return m.get(t.name).deserialize(t.value);case"RAW":return t.value}}function E(t,i,e){return new Promise((n=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");t.addEventListener("message",(function i(e){e.data&&e.data.id&&e.data.id===o&&(t.removeEventListener("message",i),n(e.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:o},i),e)}))}}};
//# sourceMappingURL=7210-4r0mI7AoRZ8.js.map