import{Z as h,aN as x,r as p,j as v,B as Q,k as c,a1 as f,p as s,Q as q,aO as $,aa as S,t as a,x as l,n as o,y as _,aL as g,aS as w,m as k,aP as B,F as D,v as y,aU as L,aQ as u,a5 as T}from"./index.63dc8aea.js";import{Q as m,a as N,b as C,c as I,d as J}from"./QTable.0e14afbf.js";import"./QSelect.514869a9.js";const P={class:"q-pa-xl q-mx-auto",style:{"max-width":"1200px"}},V={class:"row"},A={class:"col-12"},E={class:"text-center q-mb-none"},F={class:"row justify-end"},M={class:"col-12 q-pb-sm text-right"},O={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},R=["href"],U={style:{height:"160px"}},Z={class:"q-pb-md"},z=["href"],G={class:"q-pb-xs"},H={class:"text-h6 text-primary"},K={class:"q-pb-xs"},W={class:"text-h6 text-primary"},oe={__name:"JobPage",setup(X){h({useScope:"global"});const{t:i}=h();x(),p("isShown");const n=p(!1),d=v([]),j=Q(()=>[{name:"photos",label:"",align:"center",field:e=>e.photos[0]},{name:"title",required:!0,label:i("job_title"),align:"center",field:e=>e.title,format:e=>`${e}`,sortable:!0},{name:"job_time",align:"center",label:i("job_time"),field:e=>e.date_from+"~"+e.date_to,sortable:!0},{name:"place",align:"center",label:i("job_location"),field:e=>e.city+e.district},{name:"edit",align:"center",label:i("edit")}]);return(async()=>{n.value=!0;try{const{data:e}=await $.get("/jobs/my_job");d.push(...e.result),d.map(r=>(r.date_from=new Date(r.date_from).toLocaleDateString(),r.date_to=new Date(r.date_to).toLocaleDateString(),r))}catch(e){console.log(e),S.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError&&e.response.data?e.response.data.message:"\u767C\u751F\u932F\u8AA4!"})}n.value=!1})(),(e,r)=>(c(),f(q,null,{default:s(()=>[a("div",P,[a("div",V,[a("div",A,[a("h2",E,l(e.$t("manage_jobs")),1)])]),a("div",F,[a("div",M,[o(_,{id:"plus",flat:"",color:"primary",icon:"mdi-plus-circle-outline",label:e.$t("post_jobs"),to:"/admin/jobs_post"},null,8,["label"])])]),o(g,{class:"q-mb-lg"}),o(I,{id:"job_table",rows:d,columns:T(j),"row-key":"name",loading:n.value,grid:e.$q.screen.lt.lg,"hide-bottom":e.$q.screen.lt.lg,filter:e.filter,"no-data-label":e.$t("no_data_label"),"no-results-label":e.$t("no_results_label")},{"body-cell":s(t=>[o(m,{props:t},{default:s(()=>[w(l(t.value),1)]),_:2},1032,["props"])]),header:s(t=>[o(N,{props:t},{default:s(()=>[(c(!0),k(D,null,B(t.cols,b=>(c(),f(J,{key:b.name,props:t,class:"text-primary"},{default:s(()=>[w(l(b.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"body-cell-photos":s(t=>[o(m,{props:t},{default:s(()=>[a("div",null,[o(y,{src:t.value,"spinner-color":"white",ratio:4/3,style:{"min-width":"150px"}},null,8,["src"])])]),_:2},1032,["props"])]),"body-cell-edit":s(t=>[o(m,{props:t},{default:s(()=>[o(_,{round:"",flat:"",color:"primary",icon:"edit",to:"/admin/jobs/"+t.row._id},null,8,["to"])]),_:2},1032,["props"])]),loading:s(()=>[o(C,{showing:"",color:"primary"})]),item:s(t=>[a("div",O,[o(L,null,{default:s(()=>[o(u,{class:"text-center"},{default:s(()=>[a("a",{href:"#/jobs/"+t.row._id},[o(y,{src:t.row.photos[0],"spinner-color":"white",ratio:4/3,style:{"min-width":"150px"}},null,8,["src"])],8,R)]),_:2},1024),o(g,{inset:""}),o(u,{class:"q-pb-none"},{default:s(()=>[a("div",U,[a("div",Z,[a("a",{class:"text-h5",href:"#/jobs/"+t.row._id},l(t.row.title),9,z)]),a("div",G,[a("p",H,l(e.$t("job_time")),1),a("p",null,l(t.row.date_from+"~"+t.row.date_to),1)]),a("div",K,[a("p",W,l(e.$t("job_location")),1),a("p",null,l(t.row.city+t.row.district),1)])])]),_:2},1024),o(u,null,{default:s(()=>[o(_,{class:"full-width",outline:"",color:"primary",label:e.$t("edit"),icon:"edit",to:"/admin/jobs/"+t.row._id},null,8,["label","to"])]),_:2},1024)]),_:2},1024)])]),_:1},8,["rows","columns","loading","grid","hide-bottom","filter","no-data-label","no-results-label"])])]),_:1}))}};export{oe as default};