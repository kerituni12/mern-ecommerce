_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"8uts":function(e,n,t){"use strict";t.r(n);var i=t("ODXe"),a=t("q1tI"),o=t.n(a),r=t("Jr98"),c=o.a.createElement,d=[{id:"title",numeric:!1,disablePadding:!0,label:"Category"},{id:"slug",numeric:!0,disablePadding:!1,label:"Slug"},{id:"description",numeric:!0,disablePadding:!1,label:"Description"}];var u=function(){var e=o.a.useState([]),n=Object(i.a)(e,2),t=n[0],a=n[1];return o.a.useEffect((function(){fetch("http://localhost:3001/api/category",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){console.error("Error:",e)}))}),[]),c(r.a,{data:t,orderByDefault:{order:"desc",orderBy:"slug"},cellConfigs:d,checkbox:!0})};n.default=u},vNdq:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/categories",function(){return t("8uts")}])}},[["vNdq",0,1,2,3,7,11]]]);