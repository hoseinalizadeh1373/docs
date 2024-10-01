"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[3417],{4801:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var l=n(4848),r=n(8453),s=n(1470),i=n(9365);const c={title:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0635\u0641",sidebar_label:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0635\u0641"},d="Queue Edit",a={id:"developers/api/SimotelAPI/v4/queues/queues_edit",title:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0635\u0641",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0635\u0641\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/1-api/2-SimotelAPI/v4/6-queues/3-queues_edit.md",sourceDirName:"developers/1-api/2-SimotelAPI/v4/6-queues",slug:"/developers/api/SimotelAPI/v4/queues/queues_edit",permalink:"/docs/developers/api/SimotelAPI/v4/queues/queues_edit",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0635\u0641",sidebar_label:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0635\u0641"},sidebar:"docs",previous:{title:"\u062c\u0633\u062a\u062c\u0648\u06cc \u0635\u0641",permalink:"/docs/developers/api/SimotelAPI/v4/queues/queues_search"},next:{title:"\u062d\u0630\u0641 \u0635\u0641",permalink:"/docs/developers/api/SimotelAPI/v4/queues/queues_remove"}},u={},o=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function x(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"queue-edit",children:"Queue Edit"})}),"\n",(0,l.jsx)(e.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0635\u0641\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,l.jsx)(e.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,l.jsx)("div",{class:"custom-table",children:(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsxs)(e.td,{style:{textAlign:"center"},children:["\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u0635\u0641 \u06a9\u0647 \u0627\u0632 ",(0,l.jsx)(e.a,{href:"/docs/developers/api/SimotelAPI/v4/queues/queues_search",children:"\u062c\u0633\u062a\u062c\u0648"})," \u0628\u062f\u0633\u062a \u0645\u06cc\u200c\u0622\u06cc\u062f"]}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"603c8d9ffc909f2e766d40d3"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"_id"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u0635\u0641"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"nasimTelecom"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"name"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0635\u0641"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"9008"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"number"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0627\u0633\u062a\u0631\u0627\u062a\u0698\u06cc"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Ring All/Least Recent/Fewest Calls/Random/RR Memory/RR Ordered/Linear/W Random"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Ring All"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"strategy"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"ringinuse"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0636\u0628\u0637 \u0645\u06a9\u0627\u0644\u0645\u0627\u062a"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"call_record"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"setinterfacevar"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"autofill"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"setqueuevar"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"setqueueentryvar"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"persistentmembers"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"shared_lastcall"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"announce_holdtime"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"announce_position"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no/Strict"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"strict"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"joinempty"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"leavewhenempty"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"reportholdtime"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"maxlen"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"120"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"announce_frequency"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"60"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"min_announce_frequency"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"120"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"periodic_announce_frequency"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0645\u0648\u0632\u06cc\u06a9 \u0627\u0646\u062a\u0638\u0627\u0631"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"gole orkideh"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"music"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"queue-callswaiting"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"queue_callswaiting"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"queue-thankyou"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"queue_thankyou"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"queue-thereare"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"queue_thereare"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"queue-youarenext"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"queue_youarenext"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"5"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"retry"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"60"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"servicelevel"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"30"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"timeout"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"10"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"weight"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"wrapuptime"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"MixMonitor"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"monitor_type"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"wav"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"monitor_format"})]})]})]})}),"\n",(0,l.jsx)(e.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,l.jsxs)(s.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,l.jsx)(i.A,{value:"usageCode",children:(0,l.jsxs)(s.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,l.jsx)(i.A,{value:"PHP",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-php",children:'\t<?php\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\tCURLOPT_URL => \'http://192.168.51.20/api/v4/pbx/queues/update\',\n\tCURLOPT_RETURNTRANSFER => true,\n\tCURLOPT_ENCODING => \'\',\n\tCURLOPT_MAXREDIRS => 10,\n\tCURLOPT_TIMEOUT => 0,\n\tCURLOPT_FOLLOWLOCATION => true,\n\tCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\tCURLOPT_CUSTOMREQUEST => \'POST\',\n\tCURLOPT_POSTFIELDS =>\'{\n\t\t"_id":"603c8d9ffc909f2e766d40d3",\n\t\t"name":"nasimTelecom",\n\t\t"number":"9008",\n\t\t"strategy":"ringall",\n\t\t"ringinuse":"no",\n\t\t"call_record":"yes",\n\t\t"setinterfacevar":"yes",\n\t\t"autofill":"yes",\n\t\t"setqueuevar":"yes",\n\t\t"setqueueentryvar":"yes",\n\t\t"persistentmembers":"no",\n\t\t"shared_lastcall":"no",\n\t\t"announce_holdtime":"no",\n\t\t"announce_position":"yes",\n\t\t"joinempty":"strict",\n\t\t"leavewhenempty":"yes",\n\t\t"reportholdtime":"no",\n\t\t"maxlen":"0",\n\t\t"announce_frequency":"120",\n\t\t"min_announce_frequency":"60",\n\t\t"periodic_announce_frequency":"120",\n\t\t"music":"gole orkideh",\n\t\t"queue_callswaiting":"queue-callswaiting",\n\t\t"queue_thankyou":"queue-thankyou",\n\t\t"queue_thereare":"queue-thereare",\n\t\t"queue_youarenext":"queue-youarenext",\n\t\t"retry":"5",\n\t\t"servicelevel":"60",\n\t\t"timeout":"30",\n\t\t"weight":"10",\n\t\t"wrapuptime":"1",\n\t\t"monitor_type":"MixMonitor",\n\t\t"monitor_format":"wav",\n\t\t"more_options":""\n\t}\',\n\tCURLOPT_HTTPHEADER => array(\n\t\t\'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\',\n\t\t\'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\',\n\t\t\'Content-Type: application/json\'\n\t),\n\t));\n\n\t$response = curl_exec($curl);\n\n\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo \'response code:\'.$httpcode, \'<br/>\';\n\t}\n\n\tcurl_close($curl);\n\techo $response;\n?>\n'})})]})}),(0,l.jsx)(i.A,{value:"JS",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'\t<html>\n\t\t\t<head>\n\t\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">\n\t\t\t\t<\/script>\n\t\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\tvar settings = {\n\t\t\t\t"url": "http://192.168.51.20/api/v4/pbx/queues/update",\n\t\t\t\t"method": "POST",\n\t\t\t\t"timeout": 0,\n\t\t\t\t"headers": {\n\t\t\t\t\t"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t\t\t\t"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t},\n\t\t\t\t"data": JSON.stringify({\n\t\t\t\t\t"_id": "603c8d9ffc909f2e766d40d3",\n\t\t\t\t\t"name": "nasimTelecom",\n\t\t\t\t\t"number": "9008",\n\t\t\t\t\t"strategy": "ringall",\n\t\t\t\t\t"ringinuse": "no",\n\t\t\t\t\t"call_record": "yes",\n\t\t\t\t\t"setinterfacevar": "yes",\n\t\t\t\t\t"autofill": "yes",\n\t\t\t\t\t"setqueuevar": "yes",\n\t\t\t\t\t"setqueueentryvar": "yes",\n\t\t\t\t\t"persistentmembers": "no",\n\t\t\t\t\t"shared_lastcall": "no",\n\t\t\t\t\t"announce_holdtime": "no",\n\t\t\t\t\t"announce_position": "yes",\n\t\t\t\t\t"joinempty": "strict",\n\t\t\t\t\t"leavewhenempty": "yes",\n\t\t\t\t\t"reportholdtime": "no",\n\t\t\t\t\t"maxlen": "0",\n\t\t\t\t\t"announce_frequency": "120",\n\t\t\t\t\t"min_announce_frequency": "60",\n\t\t\t\t\t"periodic_announce_frequency": "120",\n\t\t\t\t\t"music": "gole orkideh",\n\t\t\t\t\t"queue_callswaiting": "queue-callswaiting",\n\t\t\t\t\t"queue_thankyou": "queue-thankyou",\n\t\t\t\t\t"queue_thereare": "queue-thereare",\n\t\t\t\t\t"queue_youarenext": "queue-youarenext",\n\t\t\t\t\t"retry": "5",\n\t\t\t\t\t"servicelevel": "60",\n\t\t\t\t\t"timeout": "30",\n\t\t\t\t\t"weight": "10",\n\t\t\t\t\t"wrapuptime": "1",\n\t\t\t\t\t"monitor_type": "MixMonitor",\n\t\t\t\t\t"monitor_format": "wav",\n\t\t\t\t\t"more_options": ""\n\t\t\t\t\t}),\n\t\t\t\t};\n\n\n\t\t\t\t\t$.ajax(settings).always(function (jqXHR) {\n\t\t\t\t\t\tconsole.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n\t\t\t\t\t\tconsole.log("response body: " + jqXHR.responseText);\n\t\t\t\t\t});\n\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,l.jsx)(i.A,{value:"Curl",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.20/api/v4/pbx/queues/update\' \\\n\t--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n\t--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"_id":"603c8d9ffc909f2e766d40d3",\n\t\t"name":"nasimTelecom",\n\t\t"number":"9008",\n\t\t"strategy":"ringall",\n\t\t"ringinuse":"no",\n\t\t"call_record":"yes",\n\t\t"setinterfacevar":"yes",\n\t\t"autofill":"yes",\n\t\t"setqueuevar":"yes",\n\t\t"setqueueentryvar":"yes",\n\t\t"persistentmembers":"no",\n\t\t"shared_lastcall":"no",\n\t\t"announce_holdtime":"no",\n\t\t"announce_position":"yes",\n\t\t"joinempty":"strict",\n\t\t"leavewhenempty":"yes",\n\t\t"reportholdtime":"no",\n\t\t"maxlen":"0",\n\t\t"announce_frequency":"120",\n\t\t"min_announce_frequency":"60",\n\t\t"periodic_announce_frequency":"120",\n\t\t"music":"gole orkideh",\n\t\t"queue_callswaiting":"queue-callswaiting",\n\t\t"queue_thankyou":"queue-thankyou",\n\t\t"queue_thereare":"queue-thereare",\n\t\t"queue_youarenext":"queue-youarenext",\n\t\t"retry":"5",\n\t\t"servicelevel":"60",\n\t\t"timeout":"30",\n\t\t"weight":"10",\n\t\t"wrapuptime":"1",\n\t\t"monitor_type":"MixMonitor",\n\t\t"monitor_format":"wav",\n\t\t"more_options":""\n\t}\'\n'})})]})})]})}),(0,l.jsx)(i.A,{value:"outputCode",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'{\n"success": 1,\n"message": "Requested operation is done successfully",\n"data": ""\n}\n'})})})]})]})}function h(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(x,{...t})}):x(t)}},9365:(t,e,n)=>{n.d(e,{A:()=>i});n(6540);var l=n(8215);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(t){let{children:e,hidden:n,className:i}=t;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:n,children:e})}},1470:(t,e,n)=>{n.d(e,{A:()=>_});var l=n(6540),r=n(8215),s=n(3104),i=n(6347),c=n(205),d=n(7485),a=n(1682),u=n(679);function o(t){return l.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,l.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(t){const{values:e,children:n}=t;return(0,l.useMemo)((()=>{const t=e??function(t){return o(t).map((t=>{let{props:{value:e,label:n,attributes:l,default:r}}=t;return{value:e,label:n,attributes:l,default:r}}))}(n);return function(t){const e=(0,a.XI)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function h(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function y(t){let{queryString:e=!1,groupId:n}=t;const r=(0,i.W6)(),s=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,d.aZ)(s),(0,l.useCallback)((t=>{if(!s)return;const e=new URLSearchParams(r.location.search);e.set(s,t),r.replace({...r.location,search:e.toString()})}),[s,r])]}function j(t){const{defaultValue:e,queryString:n=!1,groupId:r}=t,s=x(t),[i,d]=(0,l.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const l=n.find((t=>t.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:e,tabValues:s}))),[a,o]=y({queryString:n,groupId:r}),[j,g]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[r,s]=(0,u.Dv)(n);return[r,(0,l.useCallback)((t=>{n&&s.set(t)}),[n,s])]}({groupId:r}),A=(()=>{const t=a??j;return h({value:t,tabValues:s})?t:null})();(0,c.A)((()=>{A&&d(A)}),[A]);return{selectedValue:i,selectValue:(0,l.useCallback)((t=>{if(!h({value:t,tabValues:s}))throw new Error(`Can't select invalid tab value=${t}`);d(t),o(t),g(t)}),[o,g,s]),tabValues:s}}var g=n(2303);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=n(4848);function m(t){let{className:e,block:n,selectedValue:l,selectValue:i,tabValues:c}=t;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),u=t=>{const e=t.currentTarget,n=d.indexOf(e),r=c[n].value;r!==l&&(a(e),i(r))},o=t=>{let e=null;switch(t.key){case"Enter":u(t);break;case"ArrowRight":{const n=d.indexOf(t.currentTarget)+1;e=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(t.currentTarget)-1;e=d[n]??d[d.length-1];break}}e?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},e),children:c.map((t=>{let{value:e,label:n,attributes:s}=t;return(0,p.jsx)("li",{role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,ref:t=>d.push(t),onKeyDown:o,onClick:u,...s,className:(0,r.A)("tabs__item",A.tabItem,s?.className,{"tabs__item--active":l===e}),children:n??e},e)}))})}function f(t){let{lazy:e,children:n,selectedValue:s}=t;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=i.find((t=>t.props.value===s));return t?(0,l.cloneElement)(t,{className:(0,r.A)("margin-top--md",t.props.className)}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:i.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==s})))})}function v(t){const e=j(t);return(0,p.jsxs)("div",{className:(0,r.A)("tabs-container",A.tabList),children:[(0,p.jsx)(m,{...e,...t}),(0,p.jsx)(f,{...e,...t})]})}function _(t){const e=(0,g.A)();return(0,p.jsx)(v,{...t,children:o(t.children)},String(e))}},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>c});var l=n(6540);const r={},s=l.createContext(r);function i(t){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),l.createElement(s.Provider,{value:e},t.children)}}}]);