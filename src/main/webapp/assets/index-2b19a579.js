(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function l(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=l(o);fetch(o.href,a)}})();const z=(e,t,l,n)=>`
<table id="${e}" class="display compact" style="width:100%">
    <thead>
        <tr>
            ${t.map(o=>`
                <th>${o}</th>
            `).join("")}
        </tr>
    </thead>
    <tbody>
        ${l.map(o=>`
        <tr>
            ${n.map(a=>`
                <td>${o[a]}</td>
            `).join("")}
        </tr>
        `).join("")}
    </tbody>
</table>
`,I=(e,t,l)=>{fetch(t).then(n=>n.text()).then(n=>{document.getElementById(e).innerHTML=n,l.call()})},D=(e,t,l,n,o,a,m)=>{let v=document.getElementById(e);v.innerHTML=z(t,l,n,o),a==null&&(a={paging:!1,ordering:!0,info:!1,filter:!1});let q=$("#"+t).DataTable(a);$("#"+t).on("dblclick",m),$("#"+t+" tbody").on("click","tr",function(){q.$("tr.selected").removeClass("selected"),$(this).addClass("selected")})},r=e=>{document.getElementById("toastmsg").innerText=e,$("#liveToast").toast("show")},Q=["작업명","작업경로","파라미터","등록자","설명","생성일시","수정일시"],X=["JOB_NAME","JOB_CLASS","JOB_PARAMS","OWNER_ID","JOB_DESCRIPTION","CREATE_TIME","MODIFY_TIME"],Z=["스케줄명","작업명","사용여부","유효시작일자","유효종료일자","크론식타입","크론식","등록자","생성일자","수정일시"],ee=["SCHEDULE_NAME","SCHEDULE_JOB_NAME","USE_YN","VAILD_START_DATE","VAILD_END_DATE","CONDITION_TYPE","SCHEDULE_CONDITION","OWNER_ID","CREATE_TIME","MODIFY_TIME"],te=["스케줄명","작업명","작업ID","설명","요청시간","소요시간","등록자","상태","후처리"],le=["SCHEDULE_NAME","SCHEDULE_JOB_NAME","JOB_ID","MESSAGE","START_TIME","TAKE_TIME","OWNER_ID","STATUS","OPERATOR"],de=["작업명","작업경로","등록자","설명"],ne=["JOB_NAME","JOB_CLASS","OWNER_ID","JOB_DESCRIPTION"],L={header:Q,keys:X},H={header:Z,keys:ee},R={header:te,keys:le},U={header:de,keys:ne};let W="";const oe=e=>{W=e},ae=()=>W;let x="";const ce=e=>{x=e},A=()=>x,se=()=>{let e=new URLSearchParams;return e.append("DOMAIN","SCHEDULER_DB"),e.append("FILE_TYPE","exec"),e.append("CALL","DISP_SCHEDULER"),e.append("LOAD_TYPE","div"),e.append("LOGIN_ID",A()),e},_=(e,t,l)=>{_e(e).then(n=>n.text()).then(n=>{if(n=="")return;let o=JSON.parse(n),a=base64.decode(o.MSG);if(o.RESULT=="SUCCESS")if(t=="list"){let m=JSON.parse(a);l.call(null,m)}else l.call(null,a);else alert(a)}).catch(n=>{alert(n)})},_e=async e=>{let t=se();for(const o in e)e[o]!=null&&(t.has(o)&&t.delete(o),t.append(o,e[o]));const l={method:"POST",body:t};return fetch(ae(),l)};let S=[],i=null,u=null,s=null,p="000";const k=()=>{let e=document.getElementById("search_workmanagement_name_ti").value,t={METHOD_NAME:"selectJobList",LOGIN_ID:A(),JOB_NAME:e};_(t,"list",l=>{S=l;let n={columns:[{width:"10%"},{width:"16%"},{width:"16%"},{width:"7%"},{width:"21%"},{width:"15%"},{width:"15%"}]};D("tab1_div","example",L.header,S,L.keys,n,re)})},ue=()=>{document.getElementById("add_work_btn").onclick=ie,document.getElementById("search_workmanagement_btn").onclick=()=>{k()},document.getElementById("search_workmanagement_name_ti").onkeyup=e=>{e.keyCode==13&&k()}},re=e=>{let t=$(e.target).closest("tr")[0]._DT_RowIndex;i=[],u=null,s=S[t],me()},me=()=>{$("#addwork_modal").modal("show"),p="002",document.getElementById("popup_addwork_workname").value=s.JOB_NAME,document.getElementById("popup_addwork_workname").setAttribute("readonly",!0),document.getElementById("popupAddWorkTitle").innerHTML="작업수정",document.getElementById("popup_addwork_workparam_btn").innerHTML="수정",document.getElementById("popup_addwork_workdesc").value=s.JOB_DESCRIPTION,document.getElementById("popup_addwork_workpath").value=s.JOB_CLASS,document.getElementById("popup_addwork_workparam").value=s.JOB_PARAMS,u=s.JOB_PARAMS==""?null:JSON.parse(s.JOB_PARAMS)},ie=()=>{$("#addwork_modal").modal("show"),p="001",document.getElementById("popup_addwork_workname").value="",document.getElementById("popup_addwork_workdesc").value="",document.getElementById("popup_addwork_workpath").value="org.scheduler.test.MyJob01",document.getElementById("popup_addwork_workparam").value="",document.getElementById("popupAddWorkTitle").innerHTML="작업추가",document.getElementById("popup_addwork_workname").removeAttribute("readonly"),document.getElementById("popup_addwork_workparam_btn").innerHTML="추가",s={},i=[],u=null},Ee=()=>{I("addwork_contents","./view/addwork.html",()=>{document.getElementById("popup_addwork_workparam_btn").onclick=he,I("addworkparam_contents","./view/addworkparam.html",()=>{document.getElementById("add_work_param_save_btn").onclick=ye,document.getElementById("add_work_param_close_btn").onclick=Ie,document.getElementById("add_work_param_add_btn").onclick=pe}),document.getElementById("add_work_save_btn").onclick=ke})},he=e=>{$("#addwork_modal").modal("hide"),p=="001"?J({}):p=="002"&&J(u)},ye=()=>{$("#addwork_modal").modal("show"),u={},i.forEach(e=>{u[e.key]=e.value}),i==null||i.length==0?(document.getElementById("popup_addwork_workparam").value="",u=null):document.getElementById("popup_addwork_workparam").value=JSON.stringify(u),$("#addywork_param_modal").modal("hide")},Ie=()=>{$("#addwork_modal").modal("show"),$("#addywork_param_modal").modal("hide")},pe=()=>{let e=document.getElementById("add_work_param_add_key_input").value,t=document.getElementById("add_work_param_add_value_input").value;i.push({key:e,value:t}),f(),document.getElementById("add_work_param_add_key_input").value="",document.getElementById("add_work_param_add_value_input").value=""},ke=e=>{ge()&&(p=="001"?Oe():p=="002"&&we())},ge=()=>document.getElementById("popup_addwork_workname").value==""?(alert("작업명이 없습니다."),!1):document.getElementById("popup_addwork_workpath").value==""?(alert("작업경로가 없습니다."),!1):!0,Oe=()=>{let e=document.getElementById("popup_addwork_workname").value,t=document.getElementById("popup_addwork_workdesc").value,l=document.getElementById("popup_addwork_workpath").value,n=u==null?"":encodeURIComponent(JSON.stringify(u));s={JOB_GROUP:"DEFAULT",JOB_NAME:e,JOB_DESCRIPTION:t,JOB_CLASS:l,JOB_PARAMS:n,METHOD_NAME:"addJob",JOB_OWNER_ID:""},Be(s),$("#addwork_modal").modal("hide")},we=()=>{document.getElementById("popup_addwork_workname").value;let e=document.getElementById("popup_addwork_workdesc").value,t=document.getElementById("popup_addwork_workpath").value,l=u==null?"":encodeURIComponent(JSON.stringify(u));s.JOB_DESCRIPTION=e,s.JOB_CLASS=t,s.JOB_PARAMS=l,s.METHOD_NAME="updateJob",s.JOB_OWNER_ID="",De(s),$("#addwork_modal").modal("hide")},f=()=>{D("add_work_param_table","workparamtable",["Key","Value","Operator"],i,["key","value","operator"],{columns:[{data:"Key"},{data:"Value"},{data:"Operator",render:function(n,o){return o==="display"?'<input type="button" value="Remove" onclick="workRemoveHandler(event)">':n}}],paging:!1,ordering:!1,info:!1,filter:!1})},Be=e=>{_(e,"",t=>{k(),r(t)})},De=e=>{_(e,"",t=>{k(),r(t)})},Ne=e=>{let t=$(e.target).closest("tr")[0]._DT_RowIndex;ve(t)};window.workRemoveHandler=Ne;const ve=e=>{i.splice(e,1),f()},J=e=>{$("#addywork_param_modal").modal("show");for(const t in e)i.push({key:t,value:e[t],oper:""});f()},Te=()=>{I("login_contents","./view/login.html",()=>{$("#login_contents").on("show.bs.modal",function(e){}),be()?j():($("#login_contents").modal({keyboard:!1,backdrop:!1}),document.getElementById("BTN").onclick=function(e){e.preventDefault();let t=document.getElementById("floatingInput").value,l=document.getElementById("floatingPassword").value;return Se(t,l),!1})})},Se=(e,t)=>{_({METHOD_NAME:"logIn",LOGIN_ID:e,LOGIN_PASSWD:t},"",n=>{r("로그인 되었습니다."),ce(e),j()})},j=()=>{$("#login_contents").modal("hide"),$("#main_container").show(),document.body.style.backgroundColor="#ffffff",k()},be=()=>!1;let F=[],N=null,w="001",d={},C=[],y=null;const Ae=()=>{I("addschedule_contents","./view/addSchedule.html",()=>{document.getElementById("scheduleCondition_type").onchange=M,document.getElementById("popup_search_work_list_btn").onclick=Re,fe(),document.getElementById("popup_schedule_del_btn").onclick=()=>{Ce()},document.getElementById("add_schedule_save_btn").onclick=()=>{Le()},O("schedule_month_select",12,1),O("schedule_day_select",31,1),O("schedule_hour_select",24,0),O("schedule_min_select",60,0),O("schedule_sec_select",60,0),He(),c(E,"block")})},fe=()=>{I("search_work_list_contents","./view/searchworkList.html",()=>{document.getElementById("search_work_list_close_btn").onclick=()=>{$("#search_work_list_modal").modal("hide"),$("#addschedule_modal").modal("show")},document.getElementById("search_work_list_btn").onclick=()=>{b()},document.getElementById("search_work_list_type_input").onkeyup=e=>{e.keyCode==13&&b()}})},Ce=()=>{let e={METHOD_NAME:"deleteSchedule",SCHEDULE_GROUP:d.SCHEDULE_GROUP,SCHEDULE_NAME:d.SCHEDULE_NAME};_(e,"",t=>{$("#addschedule_modal").modal("hide"),h(),r(t)})},Me=()=>document.getElementById("add_schedule_name").value==""?(alert("스케줄명이 없습니다."),!1):document.getElementById("popup__work_name_input").value==""?(alert("작업명이 없습니다."),!1):!0,Le=()=>{if(!Me())return;w=="001"&&(d={});let e=document.getElementById("scheduleCondition_type").value;switch(d.CONDITION_TYPE=e,e){case"user":d.SCHEDULE_CONDITION=document.getElementById("schedule_custom").value;break;case"dayly":d.CONDITION_HH=document.getElementById("schedule_hour_select").value,d.CONDITION_MM=document.getElementById("schedule_min_select").value,d.CONDITION_SS=document.getElementById("schedule_sec_select").value;break;case"weekly":d.CONDITION_WEEKLY_DAYS=B.filter(n=>document.getElementById(n).checked).map(n=>document.getElementById(n).value).join(","),d.CONDITION_HH=document.getElementById("schedule_hour_select").value,d.CONDITION_MM=document.getElementById("schedule_min_select").value,d.CONDITION_SS=document.getElementById("schedule_sec_select").value;break;case"monthly":d.CONDITION_MONTHLY_DAY=document.getElementById("schedule_month_select").value,d.CONDITION_HH=document.getElementById("schedule_hour_select").value,d.CONDITION_MM=document.getElementById("schedule_min_select").value,d.CONDITION_SS=document.getElementById("schedule_sec_select").value;break;case"yearly":d.CONDITION_YEARLY_MONTH=document.getElementById("schedule_month_select").value,d.CONDITION_YEARLY_DAY=document.getElementById("schedule_day_select").value,d.CONDITION_HH=document.getElementById("schedule_hour_select").value,d.CONDITION_MM=document.getElementById("schedule_min_select").value,d.CONDITION_SS=document.getElementById("schedule_sec_select").value;break;case"one":d.CONDITION_ONE_DATE=document.getElementById("schedule_calendar_select").value.split("-").join(""),d.CONDITION_HH=document.getElementById("schedule_hour_select").value,d.CONDITION_MM=document.getElementById("schedule_min_select").value,d.CONDITION_SS=document.getElementById("schedule_sec_select").value;break}let t=document.getElementsByName("use_radio"),l="";t.forEach(n=>{n.checked&&(l=n.value)}),d.USE_YN=l,d.VAILD_START_DATE=document.getElementById("valid_s_date").value.split("-").join(""),d.VAILD_END_DATE=document.getElementById("valid_e_date").value.split("-").join(""),d.SCHEDULE_NAME=document.getElementById("add_schedule_name").value,d.SCHEDULE_DESCRIPTION=document.getElementById("add_schedule_desc").value,y==null?(d.JOB_GROUP=N.SCHEDULE_JOB_GROUP,d.JOB_NAME=N.SCHEDULE_JOB_NAME):(d.JOB_GROUP=y.JOB_GROUP,d.JOB_NAME=y.JOB_NAME),w=="001"?(d.SCHEDULE_GROUP="DEFAULT",d.METHOD_NAME="addSchedule",_(d,"",n=>{$("#addschedule_modal").modal("hide"),h(),r(n)})):w=="002"&&(d.METHOD_NAME="updateSchedule",_(d,"",n=>{$("#addschedule_modal").modal("hide"),h(),r(n)}))},O=(e,t,l)=>{let n="";for(let a=l;a<t;a++)n+=`<option value="${a}">${a<10?"0"+a:a}</option>`;let o=document.getElementById(e);o.innerHTML=n},He=()=>{let e=["weekly_Monday","weekly_Tuesday","weekly_Wednesday","weekly_Thursday","weekly_Friday","weekly_Saturday","weekly_Sunday"];e.forEach(t=>{$("#"+t).bootstrapToggle()}),c(e,"none","weekly")},Re=e=>{y=null,C=[],$("#addschedule_modal").modal("hide"),document.getElementById("search_work_list_type_input").value="",b()},b=()=>{let e=document.getElementById("search_work_list_type_input").value;$("#search_work_list_modal").modal("show");let t={METHOD_NAME:"selectJobList",LOGIN_ID:A(),JOB_NAME:e};_(t,"list",l=>{C=l,D("search_work_list_table","search_work_list_datatable",U.header,l,U.keys,null,Ue)})},Ue=e=>{let t=$(e.target).closest("tr")[0]._DT_RowIndex;y=C[t],document.getElementById("popup__work_name_input").value=y.JOB_NAME,$("#search_work_list_modal").modal("hide"),$("#addschedule_modal").modal("show")},h=()=>{let e=document.getElementById("search_schedule_schedulename_ti").value,t=document.getElementById("search_schedule_workname_ti").value;_({METHOD_NAME:"selectScheduleList",SCHEDULE_NAME:e,JOB_NAME:t},"list",n=>{F=n;let o={columns:[{width:"11%"},{width:"11%"},{width:"7%"},{width:"9%"},{width:"9%"},{width:"8%"},{width:"10%"},{width:"7%"},{width:"13%"},{width:"13%"}]};D("tab2_div","example2",H.header,n,H.keys,o,Je)})},Je=e=>{let t=$(e.target).closest("tr")[0]._DT_RowIndex;N=F[t],Ye(N)},Pe=()=>{document.getElementById("add_schedule_btn").onclick=$e,document.getElementById("search_schedule_btn").onclick=()=>{h()},document.getElementById("search_schedule_schedulename_ti").onkeyup=e=>{e.keyCode==13&&h()},document.getElementById("search_schedule_workname_ti").onkeyup=e=>{e.keyCode==13&&h()}},$e=()=>{V(),$("#addschedule_modal").modal("show"),w="001",d={},document.getElementById("popupAddScheduleTitle").innerHTML="스케줄 추가",document.getElementById("add_schedule_name").removeAttribute("readonly"),document.getElementById("popup_schedule_del_btn").style.display="none"},Ye=e=>{w="002",d=e,V(),$("#addschedule_modal").modal("show"),document.getElementById("popupAddScheduleTitle").innerHTML="스케줄 수정",document.getElementById("add_schedule_name").setAttribute("readonly",!0),document.getElementById("popup_schedule_del_btn").style.display="",document.getElementById("add_schedule_name").value=d.SCHEDULE_NAME,document.getElementById("add_schedule_desc").value=d.SCHEDULE_DESCRIPTION,document.getElementById("scheduleCondition_type").value=d.CONDITION_TYPE,M(),document.getElementById("schedule_custom").value=d.SCHEDULE_CONDITION,d.CONDITION_TYPE=="yearly"?(document.getElementById("schedule_month_select").value=d.CONDITION_YEARLY_MONTH,document.getElementById("schedule_day_select").value=d.CONDITION_YEARLY_DAY):d.CONDITION_TYPE=="monthly"&&(document.getElementById("schedule_day_select").value=d.CONDITION_MONTHLY_DAY),document.getElementById("schedule_hour_select").value=d.CONDITION_HH,document.getElementById("schedule_min_select").value=d.CONDITION_MM,document.getElementById("schedule_sec_select").value=d.CONDITION_SS;let t=d.CONDITION_ONE_DATE;t==null?document.getElementById("schedule_calendar_select").value="":document.getElementById("schedule_calendar_select").value=t.substring(0,4)+"-"+t.substring(4,6)+"-"+t.substring(6,8),d.CONDITION_WEEKLY_DAYS.split(",").forEach(m=>{let v=B[parseInt(m)-1];$("#"+v).bootstrapToggle("on")});let n=d.VAILD_START_DATE;document.getElementById("valid_s_date").value=n.substring(0,4)+"-"+n.substring(4,6)+"-"+n.substring(6,8);let o=d.VAILD_END_DATE;document.getElementById("valid_e_date").value=o.substring(0,4)+"-"+o.substring(4,6)+"-"+o.substring(6,8),document.getElementById("popup__work_name_input").value=d.SCHEDULE_JOB_NAME;let a=document.getElementsByName("use_radio");a[0].checked=d.USE_YN=="Y",a[1].checked=d.USE_YN=="N"},V=()=>{let e=Ge();document.getElementById("add_schedule_name").value="",document.getElementById("add_schedule_desc").value="",document.getElementById("scheduleCondition_type").value="dayly",M(),document.getElementById("schedule_month_select").value="1",document.getElementById("schedule_day_select").value="1",document.getElementById("schedule_hour_select").value="0",document.getElementById("schedule_min_select").value="0",document.getElementById("schedule_sec_select").value="0",document.getElementById("schedule_calendar_select").value=e,document.getElementById("schedule_custom").value="",B.forEach(l=>{$("#"+l).bootstrapToggle("off")}),document.getElementById("valid_s_date").value=e,document.getElementById("valid_e_date").value="",document.getElementById("valid_e_date").setAttribute("min",e),document.getElementById("popup__work_name_input").value="";let t=document.getElementsByName("use_radio");t[0].checked=!0,t[1].checked=!1};let P=["schedule_custom"],E=["schedule_hour_select","schedule_min_select","schedule_sec_select","schedule_hour_select_label","schedule_min_select_label","schedule_sec_select_label"],B=["weekly_Monday","weekly_Tuesday","weekly_Wednesday","weekly_Thursday","weekly_Friday","weekly_Saturday","weekly_Sunday"],T=["schedule_day_select","schedule_day_select_label"],Y=["schedule_month_select","schedule_month_select_label"],G=["schedule_calendar_select"];const M=()=>{switch(c(P,"none"),c(E,"none"),c(B,"none","weekly"),c(T,"none"),c(Y,"none"),c(G,"none"),document.getElementById("scheduleCondition_type").value){case"user":c(P,"block"),document.getElementById("schedule_custom").value="0 0/1 * * * ?";break;case"dayly":c(E,"block");break;case"weekly":c(E,"block"),c(B,"block","weekly");break;case"monthly":c(E,"block"),c(T,"block");break;case"yearly":c(E,"block"),c(T,"block"),c(Y,"block");break;case"one":c(E,"block"),c(G,"block");break}},c=(e,t,l)=>{e.forEach(n=>{let o=document.getElementById(n);l=="weekly"&&(o=document.getElementById(n).parentNode),o.style.display=t})},Ge=()=>{let e=new Date,t=e.getFullYear(),l=("0"+(e.getMonth()+1)).slice(-2),n=("0"+e.getDate()).slice(-2);return t+"-"+l+"-"+n},We=()=>{document.getElementById("search_schedulehistory_btn").onclick=()=>{g()},document.getElementById("search_schedule_schedulehistory_ti").onkeyup=e=>{e.keyCode==13&&g()}};let K=[];const g=()=>{let e=document.getElementById("search_schedule_history_s_date").value.split("-").join(""),t=document.getElementById("search_schedule_history_e_date").value.split("-").join(""),l=document.getElementById("search_schedule_type").value,n=document.getElementById("search_schedule_schedulehistory_ti").value;_({METHOD_NAME:"selectScheduleHistory",VAILD_START_DATE:e,VAILD_END_DATE:t,SCHEDULE_CONDITION:l,JOB_NAME:n},"list",a=>{K=a,xe(a)})},xe=e=>{const t={paging:!1,ordering:!0,info:!1,filter:!1,columns:[{data:"스케줄명",width:"10%"},{data:"작업명",width:"10%"},{data:"작업ID",width:"15%"},{data:"설명",width:"20%"},{data:"요청시간",width:"15%"},{data:"소요시간",width:"9%"},{data:"요청자",width:"7%"},{data:"상태",width:"6%",render:function(l,n){if(n==="display"){let o="green";return l=="실행중"?o="blue":l=="일시중지"?o="orange":l=="실패"&&(o="red"),'<span style="color:'+o+'">'+l+"</span>"}return l}},{data:"OPERATOR",width:"8%",render:function(l,n){if(n==="display"){let o="";return l==="RUNNING"?(o="일시중지",`<a href="#" role="button" class="btn btn-sm btn-warning" onclick="opertationClickHandler(event)">${o}</a>`):l==="PAUSE"?(o="중지해제",`<a href="#" role="button" class="btn btn-sm btn-danger" onclick="opertationClickHandler(event)">${o}</a>`):l==="FAILED"?(o="즉시실행",`<a href="#" role="button" class="btn btn-sm btn-success" onclick="opertationClickHandler(event)">${o}</a>`):""}return l}}]};D("tab3_div","example3",R.header,e,R.keys,t)},je=e=>{let t={METHOD_NAME:"pauseScheduler",SCHEDULE_GROUP:e.SCHEDULE_GROUP,SCHEDULE_NAME:e.SCHEDULE_NAME,JOB_GROUP:e.SCHEDULE_JOB_GROUP,JOB_NAME:e.SCHEDULE_JOB_NAME,JOB_ID:e.JOB_ID};_(t,"",l=>{r(l),g()})},Fe=e=>{let t={METHOD_NAME:"simpleScheduler",SCHEDULE_GROUP:e.SCHEDULE_GROUP,SCHEDULE_NAME:e.SCHEDULE_NAME,JOB_GROUP:e.SCHEDULE_JOB_GROUP,JOB_NAME:e.SCHEDULE_JOB_NAME,JOB_ID:e.JOB_ID};_(t,"",l=>{r(l),g()})},Ve=e=>{let t={METHOD_NAME:"resumeScheduler",SCHEDULE_GROUP:e.SCHEDULE_GROUP,SCHEDULE_NAME:e.SCHEDULE_NAME,JOB_GROUP:e.SCHEDULE_JOB_GROUP,JOB_NAME:e.SCHEDULE_JOB_NAME,JOB_ID:e.JOB_ID};_(t,"",l=>{r(l),g()})};function Ke(e){let t=$(e.target).closest("tr")[0]._DT_RowIndex,l=K[t];l.OPERATOR=="RUNNING"?je(l):l.OPERATOR=="PAUSE"?Ve(l):l.OPERATOR=="FAILED"&&Fe(l)}window.opertationClickHandler=Ke;window.onload=function(){qe(),ze(),Qe(),Te(),Ee(),Ae(),setTimeout(()=>{r("Welcome MYSUIT Scheduler")},800)};const qe=()=>{$("#main_container").hide(),console.log("%cUBISTORM MYSUIT SCHEDULER","text-shadow: 1px 1px 2px blue, 0 0 1em black, 0 0 0.2em red; font-size: 40px;")},ze=()=>{const e="/"+window.location.pathname.split("/")[1]+"/",l=window.location.origin+e;oe(l+"ubscheduler.do")};let Qe=()=>{I("main_container","./view/main.html",()=>{document.getElementById("main_navi").onclick=e=>{const l=[...e.currentTarget.children].indexOf(e.target.parentElement);setTimeout(()=>{Xe(l)},500)},ue(),Pe(),We()})},Xe=e=>{switch(e){case 0:k();break;case 1:h();break;case 2:g();break}};
