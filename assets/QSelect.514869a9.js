import{a as it,ae as $e,af as rt,ag as st,ah as ct,ai as Ot,r as O,B as w,w as ge,aj as G,ak as qt,al as _t,am as Et,an as Bt,d as dt,ao as De,h as V,J as ft,ab as Ht,ap as Lt,aq as ut,ar as Ae,as as Rt,at as Tt,au as Te,C as Pt,av as Dt,aw as me,ax as nt,ay as $t,az as Nt,aA as Se,aB as Kt,aC as jt,aD as Ut,aE as Qt,aF as Wt,aG as Xt,D as Yt}from"./index.63dc8aea.js";var Gt=it({name:"QField",inheritAttrs:!1,props:$e,emits:rt,setup(){return st(ct())}});const N=1e3,Jt=["start","center","end","start-force","center-force","end-force"],vt=Array.prototype.filter,Zt=window.getComputedStyle(document.body).overflowAnchor===void 0?Ot:function(t,d){t!==null&&(cancelAnimationFrame(t._qOverflowAnimationFrame),t._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(t===null)return;const r=t.children||[];vt.call(r,F=>F.dataset&&F.dataset.qVsAnchor!==void 0).forEach(F=>{delete F.dataset.qVsAnchor});const C=r[d];C&&C.dataset&&(C.dataset.qVsAnchor="")}))};function he(t,d){return t+d}function Pe(t,d,r,C,F,o,q,S){const h=t===window?document.scrollingElement||document.documentElement:t,_=F===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-q-S,scrollMaxSize:0,offsetStart:-q,offsetEnd:-S};if(F===!0?(t===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=h.scrollLeft,s.scrollViewSize+=h.clientWidth),s.scrollMaxSize=h.scrollWidth,o===!0&&(s.scrollStart=(De===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(t===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=h.scrollTop,s.scrollViewSize+=h.clientHeight),s.scrollMaxSize=h.scrollHeight),r!==null)for(let x=r.previousElementSibling;x!==null;x=x.previousElementSibling)x.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=x[_]);if(C!==null)for(let x=C.nextElementSibling;x!==null;x=x.nextElementSibling)x.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=x[_]);if(d!==t){const x=h.getBoundingClientRect(),z=d.getBoundingClientRect();F===!0?(s.offsetStart+=z.left-x.left,s.offsetEnd-=z.width):(s.offsetStart+=z.top-x.top,s.offsetEnd-=z.height),t!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function at(t,d,r,C){d==="end"&&(d=(t===window?document.body:t)[r===!0?"scrollWidth":"scrollHeight"]),t===window?r===!0?(C===!0&&(d=(De===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-d),window.scrollTo(d,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,d):r===!0?(C===!0&&(d=(De===!0?t.scrollWidth-t.offsetWidth:0)-d),t.scrollLeft=d):t.scrollTop=d}function ze(t,d,r,C){if(r>=C)return 0;const F=d.length,o=Math.floor(r/N),q=Math.floor((C-1)/N)+1;let S=t.slice(o,q).reduce(he,0);return r%N!==0&&(S-=d.slice(o*N,r).reduce(he,0)),C%N!==0&&C!==F&&(S-=d.slice(C,q*N).reduce(he,0)),S}const mt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},al=Object.keys(mt),el={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...mt};function tl({virtualScrollLength:t,getVirtualScrollTarget:d,getVirtualScrollEl:r,virtualScrollItemSizeComputed:C}){const F=ft(),{props:o,emit:q,proxy:S}=F,{$q:h}=S;let _,s,x,z=[],y;const P=O(0),L=O(0),U=O({}),X=O(null),T=O(null),Q=O(null),M=O({from:0,to:0}),I=w(()=>o.tableColspan!==void 0?o.tableColspan:100);C===void 0&&(C=w(()=>o.virtualScrollItemSize));const W=w(()=>C.value+";"+o.virtualScrollHorizontal),ye=w(()=>W.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);ge(ye,()=>{Y()}),ge(W,ue);function ue(){Z(s,!0)}function we(n){Z(n===void 0?s:n)}function J(n,i){const f=d();if(f==null||f.nodeType===8)return;const k=Pe(f,r(),X.value,T.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);x!==k.scrollViewSize&&Y(k.scrollViewSize),ne(f,k,Math.min(t.value-1,Math.max(0,parseInt(n,10)||0)),0,Jt.indexOf(i)>-1?i:s>-1&&n>s?"end":"start")}function K(){const n=d();if(n==null||n.nodeType===8)return;const i=Pe(n,r(),X.value,T.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),f=t.value-1,k=i.scrollMaxSize-i.offsetStart-i.offsetEnd-L.value;if(_===i.scrollStart)return;if(i.scrollMaxSize<=0){ne(n,i,0,0);return}x!==i.scrollViewSize&&Y(i.scrollViewSize),be(M.value.from);const E=Math.floor(i.scrollMaxSize-Math.max(i.scrollViewSize,i.offsetEnd)-Math.min(y[f],i.scrollViewSize/2));if(E>0&&Math.ceil(i.scrollStart)>=E){ne(n,i,f,i.scrollMaxSize-i.offsetEnd-z.reduce(he,0));return}let g=0,v=i.scrollStart-i.offsetStart,H=v;if(v<=k&&v+i.scrollViewSize>=P.value)v-=P.value,g=M.value.from,H=v;else for(let m=0;v>=z[m]&&g<f;m++)v-=z[m],g+=N;for(;v>0&&g<f;)v-=y[g],v>-i.scrollViewSize?(g++,H=v):H=y[g]+v;ne(n,i,g,H)}function ne(n,i,f,k,E){const g=typeof E=="string"&&E.indexOf("-force")>-1,v=g===!0?E.replace("-force",""):E,H=v!==void 0?v:"start";let m=Math.max(0,f-U.value[H]),D=m+U.value.total;D>t.value&&(D=t.value,m=Math.max(0,D-U.value.total)),_=i.scrollStart;const ee=m!==M.value.from||D!==M.value.to;if(ee===!1&&v===void 0){Ce(f);return}const{activeElement:pe}=document,j=Q.value;ee===!0&&j!==null&&j!==pe&&j.contains(pe)===!0&&(j.addEventListener("focusout",Ve),setTimeout(()=>{j!==null&&j.removeEventListener("focusout",Ve)})),Zt(j,f-m);const Me=v!==void 0?y.slice(m,f).reduce(he,0):0;if(ee===!0){const oe=D>=M.value.from&&m<=M.value.to?M.value.to:D;M.value={from:m,to:oe},P.value=ze(z,y,0,m),L.value=ze(z,y,D,t.value),requestAnimationFrame(()=>{M.value.to!==D&&_===i.scrollStart&&(M.value={from:M.value.from,to:D},L.value=ze(z,y,D,t.value))})}requestAnimationFrame(()=>{if(_!==i.scrollStart)return;ee===!0&&be(m);const oe=y.slice(m,f).reduce(he,0),ie=oe+i.offsetStart+P.value,Fe=ie+y[f];let ke=ie+k;if(v!==void 0){const $=oe-Me,B=i.scrollStart+$;ke=g!==!0&&B<ie&&Fe<B+i.scrollViewSize?B:v==="end"?Fe-i.scrollViewSize:ie-(v==="start"?0:Math.round((i.scrollViewSize-y[f])/2))}_=ke,at(n,ke,o.virtualScrollHorizontal,h.lang.rtl),Ce(f)})}function be(n){const i=Q.value;if(i){const f=vt.call(i.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),k=f.length,E=o.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let g=n,v,H;for(let m=0;m<k;){for(v=E(f[m]),m++;m<k&&f[m].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=E(f[m]),m++;H=v-y[g],H!==0&&(y[g]+=H,z[Math.floor(g/N)]+=H),g++}}}function Ve(){Q.value!==null&&Q.value!==void 0&&Q.value.focus()}function Z(n,i){const f=1*C.value;(i===!0||Array.isArray(y)===!1)&&(y=[]);const k=y.length;y.length=t.value;for(let g=t.value-1;g>=k;g--)y[g]=f;const E=Math.floor((t.value-1)/N);z=[];for(let g=0;g<=E;g++){let v=0;const H=Math.min((g+1)*N,t.value);for(let m=g*N;m<H;m++)v+=y[m];z.push(v)}s=-1,_=void 0,P.value=ze(z,y,0,M.value.from),L.value=ze(z,y,M.value.to,t.value),n>=0?(be(M.value.from),G(()=>{J(n)})):ae()}function Y(n){if(n===void 0&&typeof window!="undefined"){const v=d();v!=null&&v.nodeType!==8&&(n=Pe(v,r(),X.value,T.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}x=n;const i=parseFloat(o.virtualScrollSliceRatioBefore)||0,f=parseFloat(o.virtualScrollSliceRatioAfter)||0,k=1+i+f,E=n===void 0||n<=0?1:Math.ceil(n/C.value),g=Math.max(1,E,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/k));U.value={total:Math.ceil(g*k),start:Math.ceil(g*i),center:Math.ceil(g*(.5+i)),end:Math.ceil(g*(1+i)),view:E}}function Ie(n,i){const f=o.virtualScrollHorizontal===!0?"width":"height",k={["--q-virtual-scroll-item-"+f]:C.value+"px"};return[n==="tbody"?V(n,{class:"q-virtual-scroll__padding",key:"before",ref:X},[V("tr",[V("td",{style:{[f]:`${P.value}px`,...k},colspan:I.value})])]):V(n,{class:"q-virtual-scroll__padding",key:"before",ref:X,style:{[f]:`${P.value}px`,...k}}),V(n,{class:"q-virtual-scroll__content",key:"content",ref:Q,tabindex:-1},i.flat()),n==="tbody"?V(n,{class:"q-virtual-scroll__padding",key:"after",ref:T},[V("tr",[V("td",{style:{[f]:`${L.value}px`,...k},colspan:I.value})])]):V(n,{class:"q-virtual-scroll__padding",key:"after",ref:T,style:{[f]:`${L.value}px`,...k}})]}function Ce(n){s!==n&&(o.onVirtualScroll!==void 0&&q("virtual-scroll",{index:n,from:M.value.from,to:M.value.to-1,direction:n<s?"decrease":"increase",ref:S}),s=n)}Y();const ae=qt(K,h.platform.is.ios===!0?120:35);_t(()=>{Y()});let a=!1;return Et(()=>{a=!0}),Bt(()=>{if(a!==!0)return;const n=d();_!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?at(n,_,o.virtualScrollHorizontal,h.lang.rtl):J(s)}),dt(()=>{ae.cancel()}),Object.assign(S,{scrollTo:J,reset:ue,refresh:we}),{virtualScrollSliceRange:M,virtualScrollSliceSizeComputed:U,setVirtualScrollSize:Y,onVirtualScrollEvt:ae,localResetVirtualScroll:Z,padVirtualScroll:Ie,scrollTo:J,reset:ue,refresh:we}}const ot=t=>["add","add-unique","toggle"].includes(t),ll=".*+?^${}()|[]\\",ul=Object.keys($e);var ol=it({name:"QSelect",inheritAttrs:!1,props:{...el,...Ht,...$e,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ot},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:t=>["default","menu","dialog"].includes(t),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...rt,"add","remove","input-value","new-value","keyup","keypress","keydown","filter-abort"],setup(t,{slots:d,emit:r}){const{proxy:C}=ft(),{$q:F}=C,o=O(!1),q=O(!1),S=O(-1),h=O(""),_=O(!1),s=O(!1);let x,z,y,P,L,U,X,T,Q;const M=O(null),I=O(null),W=O(null),ye=O(null),ue=O(null),we=Lt(t),J=Dt(Je),K=w(()=>Array.isArray(t.options)?t.options.length:0),ne=w(()=>t.virtualScrollItemSize===void 0?t.optionsDense===!0?24:48:t.virtualScrollItemSize),{virtualScrollSliceRange:be,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:Z,padVirtualScroll:Y,onVirtualScrollEvt:Ie,scrollTo:Ce,setVirtualScrollSize:ae}=tl({virtualScrollLength:K,getVirtualScrollTarget:yt,getVirtualScrollEl:Ye,virtualScrollItemSizeComputed:ne}),a=ct(),n=w(()=>{const e=t.mapOptions===!0&&t.multiple!==!0,u=t.modelValue!==void 0&&(t.modelValue!==null||e===!0)?t.multiple===!0&&Array.isArray(t.modelValue)?t.modelValue:[t.modelValue]:[];if(t.mapOptions===!0&&Array.isArray(t.options)===!0){const l=t.mapOptions===!0&&z!==void 0?z:[],c=u.map(p=>ht(p,l));return t.modelValue===null&&e===!0?c.filter(p=>p!==null):c}return u}),i=w(()=>{const e={};return ul.forEach(u=>{const l=t[u];l!==void 0&&(e[u]=l)}),e}),f=w(()=>t.optionsDark===null?a.isDark.value:t.optionsDark),k=w(()=>ut(n.value)),E=w(()=>{let e="q-field__input q-placeholder col";return t.hideSelected===!0||n.value.length===0?[e,t.inputClass]:(e+=" q-field__input--padding",t.inputClass===void 0?e:[e,t.inputClass])}),g=w(()=>(t.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(t.popupContentClass?" "+t.popupContentClass:"")),v=w(()=>K.value===0),H=w(()=>n.value.map(e=>B.value(e)).join(", ")),m=w(()=>t.optionsHtml===!0?()=>!0:e=>e!=null&&e.html===!0),D=w(()=>t.displayValueHtml===!0||t.displayValue===void 0&&(t.optionsHtml===!0||n.value.some(m.value))),ee=w(()=>a.focused.value===!0?t.tabindex:-1),pe=w(()=>{const e={tabindex:t.tabindex,role:"combobox","aria-label":t.label,"aria-autocomplete":t.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-owns":`${a.targetUid.value}_lb`,"aria-controls":`${a.targetUid.value}_lb`};return S.value>=0&&(e["aria-activedescendant"]=`${a.targetUid.value}_${S.value}`),e}),j=w(()=>{const e={id:`${a.targetUid.value}_lb`,role:"listbox","aria-multiselectable":t.multiple===!0?"true":"false"};return S.value>=0&&(e["aria-activedescendant"]=`${a.targetUid.value}_${S.value}`),e}),Me=w(()=>n.value.map((e,u)=>({index:u,opt:e,html:m.value(e),selected:!0,removeAtIndex:gt,toggleOption:te,tabindex:ee.value}))),oe=w(()=>{if(K.value===0)return[];const{from:e,to:u}=be.value;return t.options.slice(e,u).map((l,c)=>{const p=re.value(l)===!0,b=e+c,A={clickable:!0,active:!1,activeClass:ke.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:t.optionsDense,dark:f.value,role:"option",id:`${a.targetUid.value}_${b}`,onClick:()=>{te(l)}};return p!==!0&&(He(l)===!0&&(A.active=!0),S.value===b&&(A.focused=!0),A["aria-selected"]=A.active===!0?"true":"false",F.platform.is.desktop===!0&&(A.onMousemove=()=>{o.value===!0&&se(b)})),{index:b,opt:l,html:m.value(l),label:B.value(l),selected:A.active,focused:A.focused,toggleOption:te,setOptionIndex:se,itemProps:A}})}),ie=w(()=>t.dropdownIcon!==void 0?t.dropdownIcon:F.iconSet.arrow.dropdown),Fe=w(()=>t.optionsCover===!1&&t.outlined!==!0&&t.standout!==!0&&t.borderless!==!0&&t.rounded!==!0),ke=w(()=>t.optionsSelectedClass!==void 0?t.optionsSelectedClass:t.color!==void 0?`text-${t.color}`:""),$=w(()=>Be(t.optionValue,"value")),B=w(()=>Be(t.optionLabel,"label")),re=w(()=>Be(t.optionDisable,"disable")),Oe=w(()=>n.value.map(e=>$.value(e))),St=w(()=>{const e={onInput:Je,onChange:J,onKeydown:Xe,onKeyup:Qe,onKeypress:We,onFocus:je,onClick(u){y===!0&&me(u)}};return e.onCompositionstart=e.onCompositionupdate=e.onCompositionend=J,e});ge(n,e=>{z=e,t.useInput===!0&&t.fillInput===!0&&t.multiple!==!0&&a.innerLoading.value!==!0&&(q.value!==!0&&o.value!==!0||k.value!==!0)&&(P!==!0&&ve(),(q.value===!0||o.value===!0)&&ce(""))},{immediate:!0}),ge(()=>t.fillInput,ve),ge(o,Le),ge(K,Ft);function Ne(e){return t.emitValue===!0?$.value(e):e}function Ee(e){if(e>-1&&e<n.value.length)if(t.multiple===!0){const u=t.modelValue.slice();r("remove",{index:e,value:u.splice(e,1)[0]}),r("update:modelValue",u)}else r("update:modelValue",null)}function gt(e){Ee(e),a.focus()}function Ke(e,u){const l=Ne(e);if(t.multiple!==!0){t.fillInput===!0&&xe(B.value(e),!0,!0),r("update:modelValue",l);return}if(n.value.length===0){r("add",{index:0,value:l}),r("update:modelValue",t.multiple===!0?[l]:l);return}if(u===!0&&He(e)===!0||t.maxValues!==void 0&&t.modelValue.length>=t.maxValues)return;const c=t.modelValue.slice();r("add",{index:c.length,value:l}),c.push(l),r("update:modelValue",c)}function te(e,u){if(a.editable.value!==!0||e===void 0||re.value(e)===!0)return;const l=$.value(e);if(t.multiple!==!0){u!==!0&&(xe(t.fillInput===!0?B.value(e):"",!0,!0),le()),I.value!==null&&I.value.focus(),(n.value.length===0||Ae($.value(n.value[0]),l)!==!0)&&r("update:modelValue",t.emitValue===!0?l:e);return}if((y!==!0||_.value===!0)&&a.focus(),je(),n.value.length===0){const b=t.emitValue===!0?l:e;r("add",{index:0,value:b}),r("update:modelValue",t.multiple===!0?[b]:b);return}const c=t.modelValue.slice(),p=Oe.value.findIndex(b=>Ae(b,l));if(p>-1)r("remove",{index:p,value:c.splice(p,1)[0]});else{if(t.maxValues!==void 0&&c.length>=t.maxValues)return;const b=t.emitValue===!0?l:e;r("add",{index:c.length,value:b}),c.push(b)}r("update:modelValue",c)}function se(e){if(F.platform.is.desktop!==!0)return;const u=e>-1&&e<K.value?e:-1;S.value!==u&&(S.value=u)}function qe(e=1,u){if(o.value===!0){let l=S.value;do l=nt(l+e,-1,K.value-1);while(l!==-1&&l!==S.value&&re.value(t.options[l])===!0);S.value!==l&&(se(l),Ce(l),u!==!0&&t.useInput===!0&&t.fillInput===!0&&_e(l>=0?B.value(t.options[l]):U))}}function ht(e,u){const l=c=>Ae($.value(c),e);return t.options.find(l)||u.find(l)||e}function Be(e,u){const l=e!==void 0?e:u;return typeof l=="function"?l:c=>c!==null&&typeof c=="object"&&l in c?c[l]:c}function He(e){const u=$.value(e);return Oe.value.find(l=>Ae(l,u))!==void 0}function je(e){t.useInput===!0&&I.value!==null&&(e===void 0||I.value===e.target&&e.target.value===H.value)&&I.value.select()}function Ue(e){$t(e,27)===!0&&o.value===!0&&(me(e),le(),ve()),r("keyup",e)}function Qe(e){const{value:u}=e.target;if(e.keyCode!==void 0){Ue(e);return}if(e.target.value="",clearTimeout(x),ve(),typeof u=="string"&&u.length>0){const l=u.toLocaleLowerCase(),c=b=>{const A=t.options.find(R=>b.value(R).toLocaleLowerCase()===l);return A===void 0?!1:(n.value.indexOf(A)===-1?te(A):le(),!0)},p=b=>{c($)!==!0&&(c(B)===!0||b===!0||ce(u,!0,()=>p(!0)))};p()}else a.clearValue(e)}function We(e){r("keypress",e)}function Xe(e){if(r("keydown",e),Nt(e)===!0)return;const u=h.value.length>0&&(t.newValueMode!==void 0||t.onNewValue!==void 0),l=e.shiftKey!==!0&&t.multiple!==!0&&(S.value>-1||u===!0);if(e.keyCode===27){Te(e);return}if(e.keyCode===9&&l===!1){de();return}if(e.target===void 0||e.target.id!==a.targetUid.value)return;if(e.keyCode===40&&a.innerLoading.value!==!0&&o.value===!1){Se(e),fe();return}if(e.keyCode===8&&t.hideSelected!==!0&&h.value.length===0){t.multiple===!0&&Array.isArray(t.modelValue)===!0?Ee(t.modelValue.length-1):t.multiple!==!0&&t.modelValue!==null&&r("update:modelValue",null);return}(e.keyCode===35||e.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(Se(e),S.value=-1,qe(e.keyCode===36?1:-1,t.multiple)),(e.keyCode===33||e.keyCode===34)&&Ve.value!==void 0&&(Se(e),S.value=Math.max(-1,Math.min(K.value,S.value+(e.keyCode===33?-1:1)*Ve.value.view)),qe(e.keyCode===33?1:-1,t.multiple)),(e.keyCode===38||e.keyCode===40)&&(Se(e),qe(e.keyCode===38?-1:1,t.multiple));const c=K.value;if((T===void 0||Q<Date.now())&&(T=""),c>0&&t.useInput!==!0&&e.key!==void 0&&e.key.length===1&&e.altKey===e.ctrlKey&&(e.keyCode!==32||T.length>0)){o.value!==!0&&fe(e);const p=e.key.toLocaleLowerCase(),b=T.length===1&&T[0]===p;Q=Date.now()+1500,b===!1&&(Se(e),T+=p);const A=new RegExp("^"+T.split("").map(Re=>ll.indexOf(Re)>-1?"\\"+Re:Re).join(".*"),"i");let R=S.value;if(b===!0||R<0||A.test(B.value(t.options[R]))!==!0)do R=nt(R+1,-1,c-1);while(R!==S.value&&(re.value(t.options[R])===!0||A.test(B.value(t.options[R]))!==!0));S.value!==R&&G(()=>{se(R),Ce(R),R>=0&&t.useInput===!0&&t.fillInput===!0&&_e(B.value(t.options[R]))});return}if(!(e.keyCode!==13&&(e.keyCode!==32||t.useInput===!0||T!=="")&&(e.keyCode!==9||l===!1))){if(e.keyCode!==9&&Se(e),S.value>-1&&S.value<c){te(t.options[S.value]);return}if(u===!0){const p=(b,A)=>{if(A){if(ot(A)!==!0)return}else A=t.newValueMode;if(b==null)return;xe("",t.multiple!==!0,!0),(A==="toggle"?te:Ke)(b,A==="add-unique"),t.multiple!==!0&&(I.value!==null&&I.value.focus(),le())};if(t.onNewValue!==void 0?r("new-value",h.value,p):p(h.value),t.multiple!==!0)return}o.value===!0?de():a.innerLoading.value!==!0&&fe()}}function Ye(){return y===!0?ue.value:W.value!==null&&W.value.__qPortalInnerRef.value!==null?W.value.__qPortalInnerRef.value:void 0}function yt(){return Ye()}function wt(){return t.hideSelected===!0?[]:d["selected-item"]!==void 0?Me.value.map(e=>d["selected-item"](e)).slice():d.selected!==void 0?[].concat(d.selected()):t.useChips===!0?Me.value.map((e,u)=>V(Kt,{key:"option-"+u,removable:a.editable.value===!0&&re.value(e.opt)!==!0,dense:!0,textColor:t.color,tabindex:ee.value,onRemove(){e.removeAtIndex(u)}},()=>V("span",{class:"ellipsis",[e.html===!0?"innerHTML":"textContent"]:B.value(e.opt)}))):[V("span",{[D.value===!0?"innerHTML":"textContent"]:t.displayValue!==void 0?t.displayValue:H.value})]}function Ge(){if(v.value===!0)return d["no-option"]!==void 0?d["no-option"]({inputValue:h.value}):void 0;const e=d.option!==void 0?d.option:l=>V(Xt,{key:l.index,...l.itemProps},()=>V(Qt,()=>V(Wt,()=>V("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",oe.value.map(e));return d["before-options"]!==void 0&&(u=d["before-options"]().concat(u)),Yt(d["after-options"],u)}function bt(e,u){const l=u===!0?{...pe.value,...a.splitAttrs.attributes.value}:void 0,c={ref:u===!0?I:void 0,key:"i_t",class:E.value,style:t.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...l,id:u===!0?a.targetUid.value:void 0,maxlength:t.maxlength,autocomplete:t.autocomplete,"data-autofocus":e!==!0&&t.autofocus===!0||void 0,disabled:t.disable===!0,readonly:t.readonly===!0,...St.value};return e!==!0&&y===!0&&(Array.isArray(c.class)===!0?c.class=[...c.class,"no-pointer-events"]:c.class+=" no-pointer-events"),V("input",c)}function Je(e){clearTimeout(x),!(e&&e.target&&e.target.qComposing===!0)&&(_e(e.target.value||""),P=!0,U=h.value,a.focused.value!==!0&&(y!==!0||_.value===!0)&&a.focus(),t.onFilter!==void 0&&(x=setTimeout(()=>{ce(h.value)},t.inputDebounce)))}function _e(e){h.value!==e&&(h.value=e,r("input-value",e))}function xe(e,u,l){P=l!==!0,t.useInput===!0&&(_e(e),(u===!0||l!==!0)&&(U=e),u!==!0&&ce(e))}function ce(e,u,l){if(t.onFilter===void 0||u!==!0&&a.focused.value!==!0)return;a.innerLoading.value===!0?r("filter-abort"):(a.innerLoading.value=!0,s.value=!0),e!==""&&t.multiple!==!0&&n.value.length>0&&P!==!0&&e===B.value(n.value[0])&&(e="");const c=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);clearTimeout(L),L=c,r("filter",e,(p,b)=>{(u===!0||a.focused.value===!0)&&L===c&&(clearTimeout(L),typeof p=="function"&&p(),s.value=!1,G(()=>{a.innerLoading.value=!1,a.editable.value===!0&&(u===!0?o.value===!0&&le():o.value===!0?Le(!0):o.value=!0),typeof b=="function"&&G(()=>{b(C)}),typeof l=="function"&&G(()=>{l(C)})}))},()=>{a.focused.value===!0&&L===c&&(clearTimeout(L),a.innerLoading.value=!1,s.value=!1),o.value===!0&&(o.value=!1)})}function Vt(){return V(jt,{ref:W,class:g.value,style:t.popupContentStyle,modelValue:o.value,fit:t.menuShrink!==!0,cover:t.optionsCover===!0&&v.value!==!0&&t.useInput!==!0,anchor:t.menuAnchor,self:t.menuSelf,offset:t.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Fe.value,transitionShow:t.transitionShow,transitionHide:t.transitionHide,transitionDuration:t.transitionDuration,separateClosePopup:!0,...j.value,onScrollPassive:Ie,onBeforeShow:et,onBeforeHide:Ct,onShow:pt},Ge)}function Ct(e){tt(e),de()}function pt(){ae()}function kt(e){me(e),I.value!==null&&I.value.focus(),_.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function xt(e){me(e),G(()=>{_.value=!1})}function At(){const e=[V(Gt,{class:`col-auto ${a.fieldClass.value}`,...i.value,for:a.targetUid.value,dark:f.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:h.value.length>0,...a.splitAttrs.listeners.value,onFocus:kt,onBlur:xt},{...d,rawControl:()=>a.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&e.push(V("div",{ref:ue,class:g.value+" scroll",style:t.popupContentStyle,...j.value,onClick:Te,onScrollPassive:Ie},Ge())),V(Ut,{ref:ye,modelValue:q.value,position:t.useInput===!0?"top":void 0,transitionShow:X,transitionHide:t.transitionHide,transitionDuration:t.transitionDuration,onBeforeShow:et,onBeforeHide:zt,onHide:It,onShow:Mt},()=>V("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(_.value===!0?" q-select__dialog--focused":"")},e))}function zt(e){tt(e),ye.value!==null&&ye.value.__updateRefocusTarget(a.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),a.focused.value=!1}function It(e){le(),a.focused.value===!1&&r("blur",e),ve()}function Mt(){const e=document.activeElement;(e===null||e.id!==a.targetUid.value)&&I.value!==null&&I.value!==e&&I.value.focus(),ae()}function de(){q.value!==!0&&(S.value=-1,o.value===!0&&(o.value=!1),a.focused.value===!1&&(clearTimeout(L),L=void 0,a.innerLoading.value===!0&&(r("filter-abort"),a.innerLoading.value=!1,s.value=!1)))}function fe(e){a.editable.value===!0&&(y===!0?(a.onControlFocusin(e),q.value=!0,G(()=>{a.focus()})):a.focus(),t.onFilter!==void 0?ce(h.value):(v.value!==!0||d["no-option"]!==void 0)&&(o.value=!0))}function le(){q.value=!1,de()}function ve(){t.useInput===!0&&xe(t.multiple!==!0&&t.fillInput===!0&&n.value.length>0&&B.value(n.value[0])||"",!0,!0)}function Le(e){let u=-1;if(e===!0){if(n.value.length>0){const l=$.value(n.value[0]);u=t.options.findIndex(c=>Ae($.value(c),l))}Z(u)}se(u)}function Ft(e,u){o.value===!0&&a.innerLoading.value===!1&&(Z(-1,!0),G(()=>{o.value===!0&&a.innerLoading.value===!1&&(e>u?Z():Le(!0))}))}function Ze(){q.value===!1&&W.value!==null&&W.value.updatePosition()}function et(e){e!==void 0&&me(e),r("popup-show",e),a.hasPopupOpen=!0,a.onControlFocusin(e)}function tt(e){e!==void 0&&me(e),r("popup-hide",e),a.hasPopupOpen=!1,a.onControlFocusout(e)}function lt(){y=F.platform.is.mobile!==!0&&t.behavior!=="dialog"?!1:t.behavior!=="menu"&&(t.useInput===!0?d["no-option"]!==void 0||t.onFilter!==void 0||v.value===!1:!0),X=F.platform.is.ios===!0&&y===!0&&t.useInput===!0?"fade":t.transitionShow}return Rt(lt),Tt(Ze),lt(),dt(()=>{clearTimeout(x)}),Object.assign(C,{showPopup:fe,hidePopup:le,removeAtIndex:Ee,add:Ke,toggleOption:te,getOptionIndex:()=>S.value,setOptionIndex:se,moveOptionSelection:qe,filter:ce,updateMenuPosition:Ze,updateInputValue:xe,isOptionSelected:He,getEmittingOptionValue:Ne,isOptionDisabled:(...e)=>re.value.apply(null,e)===!0,getOptionValue:(...e)=>$.value.apply(null,e),getOptionLabel:(...e)=>B.value.apply(null,e)}),Object.assign(a,{innerValue:n,fieldClass:w(()=>`q-select q-field--auto-height q-select--with${t.useInput!==!0?"out":""}-input q-select--with${t.useChips!==!0?"out":""}-chips q-select--${t.multiple===!0?"multiple":"single"}`),inputRef:M,targetRef:I,hasValue:k,showPopup:fe,floatingLabel:w(()=>t.hideSelected!==!0&&k.value===!0||typeof h.value=="number"||h.value.length>0||ut(t.displayValue)),getControlChild:()=>{if(a.editable.value!==!1&&(q.value===!0||v.value!==!0||d["no-option"]!==void 0))return y===!0?At():Vt();a.hasPopupOpen===!0&&(a.hasPopupOpen=!1)},controlEvents:{onFocusin(e){a.onControlFocusin(e)},onFocusout(e){a.onControlFocusout(e,()=>{ve(),de()})},onClick(e){if(Te(e),y!==!0&&o.value===!0){de(),I.value!==null&&I.value.focus();return}fe(e)}},getControl:e=>{const u=wt(),l=e===!0||q.value!==!0||y!==!0;if(t.useInput===!0)u.push(bt(e,l));else if(a.editable.value===!0){const p=l===!0?pe.value:void 0;u.push(V("input",{ref:l===!0?I:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?a.targetUid.value:void 0,readonly:!0,"data-autofocus":e!==!0&&t.autofocus===!0||void 0,...p,onKeydown:Xe,onKeyup:Ue,onKeypress:We})),l===!0&&typeof t.autocomplete=="string"&&t.autocomplete.length>0&&u.push(V("input",{class:"q-select__autocomplete-input",autocomplete:t.autocomplete,onKeyup:Qe}))}if(we.value!==void 0&&t.disable!==!0&&Oe.value.length>0){const p=Oe.value.map(b=>V("option",{value:b,selected:!0}));u.push(V("select",{class:"hidden",name:we.value,multiple:t.multiple},p))}const c=t.useInput===!0||l!==!0?void 0:a.splitAttrs.attributes.value;return V("div",{class:"q-field__native row items-center",...c},u)},getInnerAppend:()=>t.loading!==!0&&s.value!==!0&&t.hideDropdownIcon!==!0?[V(Pt,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:ie.value})]:null}),st(a)}});export{ol as Q,tl as a,al as c,el as u};