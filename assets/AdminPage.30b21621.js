import{X as k,u as X,s as G,r as J,a as U,D as $,p as z,o as n,Z as y,w as p,l as K,f as h,t as x,e as s,j as b,a0 as a,_ as f,k as C,E as Y,i as D,bd as ee,d as I,aP as te,F as le,a1 as ie,a2 as se,aQ as oe}from"./index.c53e1e06.js";import{Q as q}from"./QSelect.827642bc.js";import{d as o,a as u,Q as ae,b as re}from"./data-zh.0cb8ff3e.js";import{Q as de}from"./QFile.bcfdc53f.js";import{Q as ne}from"./QForm.e28fb361.js";import{v as ue}from"./index.f0f819c8.js";import"./QChip.8a9934e9.js";const me={class:"q-pa-md",id:"admin_page"},ce={class:"row items-center justify-end"},pe={key:5},fe={key:6},ye={class:"q-pa-md flex row"},Ue={__name:"AdminPage",setup(be){const{locale:m}=k({useScope:"global"}),{t:r}=k(),w=X(),{name:S,gender:E,birth:P,tel:T,mobile:_,email:Z,city:B,district:L,address:W,zipcode:F,description:j,photos:A,role:N,isHost:V,isHelper:g,lang:ve}=G(w),Q=J(!1),d=U({city:"",district:""}),t=U({name:S.value,avatar:"",gender:E.value,birth:P.value,tel:T.value,mobile:_.value,email:Z.value,city:B.value,district:L.value,address:W.value,zipcode:F.value,role:N.value,description:j.value,photo_1:"",photo_2:"",photo_3:"",photos:[]}),O=$(()=>[{label:r("male"),value:"male"},{label:r("female"),value:"female"},{label:r("rahter_not_say"),value:"rahter_not_say"}]);$(()=>[{label:r("role_host"),value:"role_host"},{label:r("role_helper"),value:"role_helper"}]);const c=U({email:[e=>!!e||r("required"),e=>ue.exports.isEmail(e)||"\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4"],account:[e=>!!e||r("required"),e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[e=>!!e||r("required"),e=>e.length>=4&&e.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],confirmPassword:[e=>!!e||"\u8ACB\u8F38\u5165\u78BA\u8A8D\u5BC6\u78BC",e=>e===t.password||"\u5BC6\u78BC\u4E0D\u4E00\u81F4"],name:[e=>!!e||r("required"),e=>e.length>=2&&e.length<=15||"\u540D\u7A31\u9577\u5EA6\u70BA 2 \u5230 15 \u500B\u5B57"],tel:[e=>e.length<=10||"\u542B\u5340\u78BC\u9577\u5EA6\u70BA 9 \u6216 10 \u500B\u5B57\uFF0Cex:02-1234-5678 \u6216 03-1234-567"],mobile:[e=>!!e||r("required"),e=>e.length===10||"\u8ACB\u8F38\u516510\u4F4D\u624B\u6A5F"],address:[e=>!!e||r("required"),e=>e.length>=5||"\u8ACB\u586B\u5BEB\u6B63\u78BA\u8A73\u7D30\u5730\u5740\u8CC7\u8A0A"],required:[e=>!!e||r("required")]}),H=$(()=>m.value==="zh-TW"?o.counties:u.counties),M=$(()=>{if(m.value==="zh-TW"&&t.city){const e=o.counties.findIndex(l=>l===t.city);return o.districts[e][0]}else if(m.value==="en-US"&&t.city){console.log(t.city);const e=u.counties.findIndex(l=>l===t.city);if(e===-1){const l=o.counties.findIndex(i=>i===t.city);return u.districts[l][0]}return u.districts[e][0]}else return null});z(()=>m.value,()=>{if(m.value==="zh-TW"){const e=u.counties.findIndex(l=>l===t.city);if(e>-1){t.city=o.counties[e];const i=u.districts[e][0].findIndex(v=>v===t.district);t.district=o.districts[e][0][i]}}else{const e=o.counties.findIndex(l=>l===t.city);if(e>-1){t.city=u.counties[e];const i=o.districts[e][0].findIndex(v=>v===t.district);t.district=u.districts[e][0][i]}}}),z(()=>t.city,()=>{if(t.district="",m.value==="zh-TW"){const e=o.counties.findIndex(l=>l===t.city);e>-1&&(d.city=e)}else{const e=u.counties.findIndex(l=>l===t.city);e>-1&&(d.city=e)}}),z(()=>t.district,()=>{if(m.value==="zh-TW"){const e=o.districts[d.city][0].findIndex(l=>l===t.district);e>-1&&(d.district=e,t.zipcode=o.districts[d.city][1][e])}else{const e=u.districts[d.city][0].findIndex(l=>l===t.district);e>-1&&(d.district=e,t.zipcode=o.districts[d.city][1][e])}});const R=()=>{Q.value=!0,console.log(t.photos),m.value==="en-US"&&(t.city=o.counties[d.city],t.district=o.districts[d.city][0][d.district]),w.editUserInfo(t),Q.value=!1};return(e,l)=>(n(),y(K,{class:"flex flex-center column"},{default:p(()=>[h("h4",null,x(e.$t("")),1),h("div",me,[s(ne,{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",onSubmit:ie(R,["prevent"])},{default:p(()=>[s(b,{outlined:"",modelValue:t.name,"onUpdate:modelValue":l[0]||(l[0]=i=>t.name=i),label:a(g)?e.$t("name")+"*":e.$t("host_name")+"*",rules:c.name},null,8,["modelValue","label","rules"]),a(g)?(n(),y(q,{key:0,outlined:"",modelValue:t.gender,"onUpdate:modelValue":l[1]||(l[1]=i=>t.gender=i),options:a(O),label:e.$t("gender")+"*","emit-value":"","display-value":e.$t(t.gender),"lazy-rules":"",rules:c.required},null,8,["modelValue","options","label","display-value","rules"])):f("",!0),a(g)?(n(),y(b,{key:1,outlined:"",modelValue:t.birth,"onUpdate:modelValue":l[3]||(l[3]=i=>t.birth=i),rules:["date"],label:e.$t("birthday")},{append:p(()=>[s(C,{name:"event",class:"cursor-pointer"},{default:p(()=>[s(ae,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:p(()=>[s(re,{modelValue:t.birth,"onUpdate:modelValue":l[2]||(l[2]=i=>t.birth=i)},{default:p(()=>[h("div",ce,[Y(s(D,{label:"Close",color:"primary",flat:""},null,512),[[se]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","label"])):f("",!0),s(b,{outlined:"",modelValue:t.tel,"onUpdate:modelValue":l[4]||(l[4]=i=>t.tel=i),label:e.$t("tel"),rules:c.tel},null,8,["modelValue","label","rules"]),s(b,{outlined:"",modelValue:t.mobile,"onUpdate:modelValue":l[5]||(l[5]=i=>t.mobile=i),label:e.$t("mobile")+"*",rules:c.mobile},null,8,["modelValue","label","rules"]),s(b,{outlined:"",modelValue:t.email,"onUpdate:modelValue":l[6]||(l[6]=i=>t.email=i),label:e.$t("email")+"*",rules:c.email},null,8,["modelValue","label","rules"]),a(V)?(n(),y(q,{key:2,outlined:"",modelValue:t.city,"onUpdate:modelValue":l[7]||(l[7]=i=>t.city=i),options:a(H),label:e.$t("city")+"*","emit-value":"","lazy-rules":"",rules:c.required},null,8,["modelValue","options","label","rules"])):f("",!0),a(V)?(n(),y(q,{key:3,outlined:"",modelValue:t.district,"onUpdate:modelValue":l[8]||(l[8]=i=>t.district=i),options:a(M),label:e.$t("district")+"*","emit-value":"",rules:c.required},null,8,["modelValue","options","label","rules"])):f("",!0),a(V)?(n(),y(b,{key:4,outlined:"",type:"text",modelValue:t.address,"onUpdate:modelValue":l[9]||(l[9]=i=>t.address=i),label:e.$t("address")+"*","lazy-rules":"",rules:c.address},null,8,["modelValue","label","rules"])):f("",!0),h("h5",null,x(e.$t("story_of_my_life")),1),s(a(ee),{content:t.description,"onUpdate:content":l[10]||(l[10]=i=>t.description=i),contentType:"html",theme:"snow",toolbar:"minimal",placeholder:e.$t("tell_me_someting_about_you")},null,8,["content","placeholder"]),a(g)?(n(),I("h5",pe,x(e.$t("photos")),1)):f("",!0),a(V)?(n(),I("h5",fe,x(e.$t("photos_host")),1)):f("",!0),s(de,{color:"primary",accept:".jpg, image/*","max-files":3,filled:"",multiple:"",modelValue:t.photos,"onUpdate:modelValue":l[11]||(l[11]=i=>t.photos=i),label:e.$t("upload_file"),hint:"\u6700\u591A\u4E0A\u50B33\u5F35"},{prepend:p(()=>[s(C,{name:"cloud_upload"})]),_:1},8,["modelValue","label"]),h("div",ye,[(n(!0),I(le,null,te(a(A),(i,v)=>(n(),I("div",{class:"col-6 q-pa-xs",key:v},[s(oe,{src:i,ratio:4/3,"spinner-color":"white"},null,8,["src"])]))),128))]),s(D,{class:"full-width",color:"primary",label:e.$t("submit"),type:"submit",loading:Q.value},null,8,["label","loading"])]),_:1},8,["onSubmit"])])]),_:1}))}};export{Ue as default};