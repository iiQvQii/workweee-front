import{aI as S,u as ea,U as la,s as ta,r as b,T as U,j as Q,w as sa,b0 as oa,k as c,W as p,p as l,b1 as na,n as a,b2 as ra,x as u,b3 as ia,t as e,av as ua,a$ as h,ay as x,aP as k,X as t,$ as r,m as $,aL as q,F as C,Y as da,b4 as ca,aM as ma,b5 as M,b6 as fa,aR as _a,aN as D,aO as va,aH as T,a_ as pa,az as V,ax as y,z as ga,b7 as ba,b8 as ha,aK as ka,a4 as R,A as B,R as N,b9 as E,ba as ya}from"./index.3e86a9d0.js";import{Q as wa}from"./QFile.8976ad6c.js";import"./QChip.d5ecf9c3.js";const Qa=e("img",{src:M,style:{width:"300px"}},null,-1),$a={class:"btn q-gutter-sm q-px-md"},qa={class:"row justify-center"},Ca={class:"col-3 q-pr-lg"},Va={href:"#"},La={class:"q-py-md"},Aa={class:"col-2 q-pr-lg"},Fa={class:"q-my-md"},ja={class:"col-2 q-pr-lg"},za={class:"q-my-md"},Ha={class:"col-2 q-pr-lg"},Ia={class:"q-my-md"},Sa={class:"col-2 q-pr-lg"},Ua={class:"q-my-md"},xa={class:"col-12 text-center text-grey q-pt-md"},Da=e("div",null,null,-1),Ta={id:"avatar"},Ra=["src"],Ba={class:"text-weight-bold"},Ka={__name:"AdminLayout",setup(Na){const L=S(),A=ea();la();const{logout:F,getUser:P}=A,{name:W,account:Y,isLogin:K,isAdmin:Ea,isHost:X,isHelper:Ma,avatar:G,lang:i}=ta(A),j=b(null),{t:z}=U(),{locale:d}=U({useScope:"global"}),m=Q([{value:"en-US",label:"English"},{value:"zh-TW",label:"\u7E41\u9AD4\u4E2D\u6587"}]);d.value=i.value||S().lang.getLocale(),i.value=d.value;const w=Q({avatar:[]});let H=b("");H=new Date().getFullYear();const J=Q([{title:"my_info",icon:"mdi-face-man",to:"/admin",isHost:!0},{title:"application_status",icon:"mdi-list-status",to:"/admin/application_status",isHost:!0},{title:"manage_jobs",icon:"mdi-note-plus",to:"/admin/jobs",isHost:X.value}]),g=b(!0),Z=b(J),I=()=>{g.value=!g.value};sa(()=>d.value,()=>{i.value=d.value});const O=()=>{j.value.pickFiles()},aa=async s=>{L.loading.show({delay:400});try{w.avatar=s;const o=new FormData;for(const f in w)f==="avatar"&&o.append(f,w[f]);console.log("ok"),await ka.patch("/users/avatar",o),R.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"}),P()}catch(o){console.log(o),R.fire({icon:"error",title:"\u5931\u6557",text:o.isAxiosError&&o.response.data?o.response.data.message:"\u767C\u751F\u932F\u8AA4"})}L.loading.hide()};return(s,o)=>{const f=oa("router-view");return c(),p(na,{view:"hHh Lpr lff",id:"admin_layout"},{default:l(()=>[a(ca,{elevated:"",class:"bg-white text-white"},{default:l(()=>[a(ra,null,{default:l(()=>[a(u,{class:"lt-lg",flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",color:"dark",onClick:I}),a(ia,null,{default:l(()=>[a(u,{to:"/",flat:"",style:{width:"200px"}},{default:l(()=>[Qa]),_:1})]),_:1}),e("div",$a,[a(u,{class:"gt-md",icon:"translate",flat:"",color:"dark",style:{"min-width":"30px"}},{default:l(()=>[a(ua,{anchor:"bottom middle",self:"top middle"},{default:l(()=>[a(h,{style:{"min-width":"100px"}},{default:l(()=>[a(x,{header:""},{default:l(()=>[k(t(r(z)("translate")),1)]),_:1}),(c(!0),$(C,null,q(m,(n,_)=>B((c(),p(V,{clickable:"",key:n.value,value:n.value,modelValue:r(i),"onUpdate:modelValue":o[0]||(o[0]=v=>E(i)?i.value=v:null),onClick:v=>d.value=m[_].value,active:r(d)===m[_].value},{default:l(()=>[a(y,null,{default:l(()=>[k(t(n.label),1)]),_:2},1024)]),_:2},1032,["value","modelValue","onClick","active"])),[[N]])),128))]),_:1})]),_:1})]),_:1}),r(K)?(c(),p(u,{key:0,class:"gt-md",icon:"fa-solid fa-right-from-bracket",flat:"",color:"dark",onClick:r(F)},null,8,["onClick"])):da("",!0)])]),_:1})]),_:1}),a(fa,{class:"footer bg-white text-dark container q-mx-auto",bordered:""},{default:l(()=>[e("div",qa,[e("div",Ca,[e("a",Va,[a(ma,{class:"footer_logo",src:M,"spinner-color":"white"})]),e("div",La,[a(u,{flat:"",round:"",color:"dark",icon:"fa-brands fa-facebook-f",size:".7rem"}),a(u,{flat:"",round:"",color:"dark",icon:"fa-brands fa-twitter",size:".7rem"}),a(u,{flat:"",round:"",color:"dark",icon:"fa-brands fa-instagram",size:".7rem"})])]),e("div",Aa,[e("h6",Fa,t(s.$t("find_jobs")),1),e("p",null,t(s.$t("find_jobs")),1),e("p",null,t(s.$t("hot_jobs")),1),e("p",null,t(s.$t("latest_jobs")),1)]),e("div",ja,[e("h6",za,t(s.$t("about_work_exchange")),1),e("p",null,t(s.$t("about_us")),1),e("p",null,t(s.$t("faqs")),1)]),e("div",Ha,[e("h6",Ia,t(s.$t("member")),1),e("p",null,t(s.$t("manage_profile")),1),e("p",null,t(s.$t("check_application_status")),1),e("p",null,t(s.$t("post_jobs")),1)]),e("div",Sa,[e("h6",Ua,t(s.$t("support")),1),e("p",null,t(s.$t("terms_of_service")),1),e("p",null,t(s.$t("privacy_policy")),1),e("p",null,t(s.$t("contact_us")),1)]),e("div",xa,t(s.$t("copyright")+" \xA9"+r(H)+" Workweee\u6211\u8036. All rights reserved."),1)]),Da]),_:1}),a(ba,{modelValue:g.value,"onUpdate:modelValue":o[3]||(o[3]=n=>g.value=n)},{default:l(()=>[a(u,{class:"lt-lg",flat:"",icon:"fa-solid fa-xmark","aria-label":"Menu",color:"dark",onClick:I}),a(_a,{flat:"",class:"text-center q-py-lg"},{default:l(()=>[a(D,null,{default:l(()=>[e("div",Ta,[a(wa,{modelValue:s.myAvatar,"onUpdate:modelValue":[o[1]||(o[1]=n=>s.myAvatar=n),aa],label:"Pick one file",filled:"",ref_key:"avatarFile",ref:j},null,8,["modelValue"])]),a(va,{size:"5rem"},{default:l(()=>[e("img",{src:r(G)},null,8,Ra),a(u,{id:"camera",round:"",icon:"fa-solid fa-camera",color:"dark",size:".6rem",onClick:O})]),_:1})]),_:1}),a(T,{inset:""}),a(D,null,{default:l(()=>[e("div",Ba,t(r(W)),1),e("div",null,t(r(Y)),1)]),_:1})]),_:1}),a(h,null,{default:l(()=>[(c(!0),$(C,null,q(Z.value,n=>(c(),p(ya,{key:n.title,link:n},null,8,["link"]))),128))]),_:1}),a(T,{inset:""}),a(h,null,{default:l(()=>[a(pa,{class:"lt-lg","expand-separator":"",icon:"translate",label:r(z)("translate")},{default:l(()=>[a(h,{style:{"min-width":"100px"}},{default:l(()=>[(c(!0),$(C,null,q(m,(n,_)=>B((c(),p(V,{clickable:"",key:n.value,value:n.value,modelValue:r(i),"onUpdate:modelValue":o[2]||(o[2]=v=>E(i)?i.value=v:null),onClick:v=>d.value=m[_].value,active:r(d)===m[_].value},{default:l(()=>[a(y,null,{default:l(()=>[k(t(n.label),1)]),_:2},1024)]),_:2},1032,["value","modelValue","onClick","active"])),[[N]])),128))]),_:1})]),_:1},8,["label"]),a(V,{class:"lt-lg",clickable:"",tag:"a",onClick:r(F)},{default:l(()=>[a(y,{avatar:""},{default:l(()=>[a(ga,{name:"fa-solid fa-right-from-bracket"})]),_:1}),a(y,null,{default:l(()=>[a(x,null,{default:l(()=>[k(t(s.$t("logout")),1)]),_:1})]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue"]),a(ha,null,{default:l(()=>[a(f)]),_:1})]),_:1})}}};export{Ka as default};