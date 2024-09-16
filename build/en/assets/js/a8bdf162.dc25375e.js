"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[3089],{8687:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(4848),l=n(8453),s=n(1470),i=n(9365);const a={},c="Inbox Search",o={id:"developers/api/SimotelAPI/v4/voicemail/inbox_search",title:"Inbox Search",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0635\u0646\u062f\u0648\u0642\u200c\u0647\u0627\u06cc \u0635\u0648\u062a\u06cc \u0645\u0648\u062c\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/1-api/2-SimotelAPI/v4/9-voicemail/5-inbox_search.md",sourceDirName:"developers/1-api/2-SimotelAPI/v4/9-voicemail",slug:"/developers/api/SimotelAPI/v4/voicemail/inbox_search",permalink:"/en/docs/developers/api/SimotelAPI/v4/voicemail/inbox_search",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"docs",previous:{title:"Voicemail Remove",permalink:"/en/docs/developers/api/SimotelAPI/v4/voicemail/voicemail_remove"},next:{title:"Inbox Download",permalink:"/en/docs/developers/api/SimotelAPI/v4/voicemail/inbox_download"}},d={},u=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function h(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"inbox-search",children:"Inbox Search"})}),"\n",(0,r.jsx)(e.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0635\u0646\u062f\u0648\u0642\u200c\u0647\u0627\u06cc \u0635\u0648\u062a\u06cc \u0645\u0648\u062c\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,r.jsx)(e.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,r.jsx)("div",{class:"custom-table",children:(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u062c\u0633\u062a\u062c\u0648 \u0645\u0648\u0627\u0631\u062f \u0645\u0634\u0627\u0628\u0647"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"true/false"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"true"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"alike"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"pagination->start"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"pagination->count"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"pagination->sorting"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u062c\u0633\u062a\u062c\u0648 \u0627\u0632 \u062a\u0627\u0631\u06cc\u062e"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"2020-12-25 13:53"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"date_range->from"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u062c\u0633\u062a\u062c\u0648 \u062a\u0627 \u062a\u0627\u0631\u06cc\u062e"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"2022-12-27 13:53"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"date_range->to"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"conditions->src"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0635\u0646\u062f\u0648\u0642\u200c\u0635\u0648\u062a\u06cc"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"400"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"condition->number"})]})]})]})}),"\n",(0,r.jsx)(e.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,r.jsxs)(s.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,r.jsx)(i.A,{value:"usageCode",children:(0,r.jsxs)(s.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,r.jsx)(i.A,{value:"PHP",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'\t<?php\r\n\r\n\t$curl = curl_init();\r\n\r\n\tcurl_setopt_array($curl, array(\r\n\t  CURLOPT_URL => \'http://192.168.51.20/api/v4/voicemails/inbox/search\',\r\n\t  CURLOPT_RETURNTRANSFER => true,\r\n\t  CURLOPT_ENCODING => \'\',\r\n\t  CURLOPT_MAXREDIRS => 10,\r\n\t  CURLOPT_TIMEOUT => 0,\r\n\t  CURLOPT_FOLLOWLOCATION => true,\r\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\r\n\t  CURLOPT_CUSTOMREQUEST => \'POST\',\r\n\t  CURLOPT_POSTFIELDS =>\'{\r\n\t\t"alike":"true",\r\n\t\t"pagination":{\r\n\t\t\t"start":0,\r\n\t\t\t"count":20,\r\n\t\t\t"sorting":{}\r\n\t\t},\r\n\t\t"date_range":{\r\n\t\t\t"from":"2020-12-25 13:53",\r\n\t\t\t"to":"2022-12-27 13:53"\r\n\t\t},\r\n\t\t"conditions":{\r\n\t\t\t"src":"",\r\n\t\t\t"number":"400"\r\n\t\t}\r\n\t}\',\r\n\t  CURLOPT_HTTPHEADER => array(\r\n\t\t\'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\',\r\n\t\t\'Authorization: Basic c2FkcjpTYWRyQDEyMw==\',\r\n\t\t\'Content-Type: application/json\'\r\n\t  ),\r\n\t));\r\n\r\n\t$response = curl_exec($curl);\r\n\r\n\tcurl_close($curl);\r\n\techo $response;\r\n?>\n'})})]})}),(0,r.jsx)(i.A,{value:"JS",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'\t<html>\r\n\t\t<head>\r\n\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\r\n\t\t</head>\r\n\t\t<body>\r\n\t\t\t<script>\r\n\t\t\t\tvar settings = {\r\n\t\t\t\t  "url": "http://192.168.51.20/api/v4/voicemails/inbox/search",\r\n\t\t\t\t  "method": "POST",\r\n\t\t\t\t  "timeout": 0,\r\n\t\t\t\t  "headers": {\r\n\t\t\t\t\t"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",\r\n\t\t\t\t\t"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",\r\n\t\t\t\t\t"Content-Type": "application/json"\r\n\t\t\t\t  },\r\n\t\t\t\t  "data": JSON.stringify({\r\n\t\t\t\t\t"alike": "true",\r\n\t\t\t\t\t"pagination": {\r\n\t\t\t\t\t  "start": 0,\r\n\t\t\t\t\t  "count": 20,\r\n\t\t\t\t\t  "sorting": {}\r\n\t\t\t\t\t},\r\n\t\t\t\t\t"date_range": {\r\n\t\t\t\t\t  "from": "2020-12-25 13:53",\r\n\t\t\t\t\t  "to": "2022-12-27 13:53"\r\n\t\t\t\t\t},\r\n\t\t\t\t\t"conditions": {\r\n\t\t\t\t\t  "src": "",\r\n\t\t\t\t\t  "number": "400"\r\n\t\t\t\t\t}\r\n\t\t\t\t  }),\r\n\t\t\t\t};\r\n\r\n\t\t\t\t$.ajax(settings).done(function (response) {\r\n\t\t\t\t  console.log(response);\r\n\t\t\t\t});\r\n\t\t\t<\/script>\r\n\t\t</body>\r\n\t</html>\n'})})]})}),(0,r.jsx)(i.A,{value:"Curl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.20/api/v4/voicemails/inbox/search\' \\\r\n\t--header \'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\' \\\r\n\t--header \'Authorization: Basic c2FkcjpTYWRyQDEyMw==\' \\\r\n\t--header \'Content-Type: application/json\' \\\r\n\t--data-raw \'{\r\n\t\t"alike":"true",\r\n\t\t"pagination":{\r\n\t\t\t"start":0,\r\n\t\t\t"count":20,\r\n\t\t\t"sorting":{}\r\n\t\t},\r\n\t\t"date_range":{\r\n\t\t\t"from":"2020-12-25 13:53",\r\n\t\t\t"to":"2022-12-27 13:53"\r\n\t\t},\r\n\t\t"conditions":{\r\n\t\t\t"src":"",\r\n\t\t\t"number":"400"\r\n\t\t}\r\n\t}\'\n'})})]})})]})}),(0,r.jsx)(i.A,{value:"outputCode",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:'{\r\n    "success": 1,\r\n    "message": "",\r\n    "data": {\r\n        "pagination": {\r\n            "start": 0,\r\n            "count": 20,\r\n            "sorting": {\r\n                "date": -1\r\n            },\r\n            "total": 11\r\n        },\r\n        "data": [\r\n            {\r\n                "_id": "60c856c88b2427f7c61c55b6",\r\n                "number": "400",\r\n                "caller_id": "570",\r\n                "filename": "400_1623742139-vm-record-file-9758.wav",\r\n                "voice_mail_id": {\r\n                    "$oid": "5c2dd8f5fbdbe25519496c09"\r\n                },\r\n                "duration": 2,\r\n                "read": false,\r\n                "v": 2,\r\n                "date": "1400-03-25 11:59:12"\r\n            },\r\n            {\r\n                "_id": "60740c3ef303ef9ff3d87970",\r\n                "number": "400",\r\n                "caller_id": "570",\r\n                "error": "This file has not been saved properly",\r\n                "voice_mail_id": {\r\n                    "$oid": "5c2dd8f5fbdbe25519496c09"\r\n                },\r\n                "read": true,\r\n                "v": 2,\r\n                "date": "1400-01-23 13:30:46"\r\n            },\r\n            {\r\n                "_id": "60740c27f303ef9ff3d8796e",\r\n                "number": "400",\r\n                "caller_id": "570",\r\n                "error": "This file has not been saved properly",\r\n                "voice_mail_id": {\r\n                    "$oid": "5c2dd8f5fbdbe25519496c09"\r\n                },\r\n                "read": true,\r\n                "v": 2,\r\n                "date": "1400-01-23 13:30:23"\r\n            },\r\n        ]\r\n    }\r\n}\n'})})})]})]})}function x(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},9365:(t,e,n)=>{n.d(e,{A:()=>i});n(6540);var r=n(8215);const l={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(t){let{children:e,hidden:n,className:i}=t;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:n,children:e})}},1470:(t,e,n)=>{n.d(e,{A:()=>A});var r=n(6540),l=n(8215),s=n(3104),i=n(6347),a=n(205),c=n(7485),o=n(1682),d=n(679);function u(t){return r.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??function(t){return u(t).map((t=>{let{props:{value:e,label:n,attributes:r,default:l}}=t;return{value:e,label:n,attributes:r,default:l}}))}(n);return function(t){const e=(0,o.XI)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function x(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function p(t){let{queryString:e=!1,groupId:n}=t;const l=(0,i.W6)(),s=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((t=>{if(!s)return;const e=new URLSearchParams(l.location.search);e.set(s,t),l.replace({...l.location,search:e.toString()})}),[s,l])]}function m(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,s=h(t),[i,c]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=n.find((t=>t.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:s}))),[o,u]=p({queryString:n,groupId:l}),[m,j]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[l,s]=(0,d.Dv)(n);return[l,(0,r.useCallback)((t=>{n&&s.set(t)}),[n,s])]}({groupId:l}),b=(()=>{const t=o??m;return x({value:t,tabValues:s})?t:null})();(0,a.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!x({value:t,tabValues:s}))throw new Error(`Can't select invalid tab value=${t}`);c(t),u(t),j(t)}),[u,j,s]),tabValues:s}}var j=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function v(t){let{className:e,block:n,selectedValue:r,selectValue:i,tabValues:a}=t;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=t=>{const e=t.currentTarget,n=c.indexOf(e),l=a[n].value;l!==r&&(o(e),i(l))},u=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:a.map((t=>{let{value:e,label:n,attributes:s}=t;return(0,g.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:t=>c.push(t),onKeyDown:u,onClick:d,...s,className:(0,l.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===e}),children:n??e},e)}))})}function f(t){let{lazy:e,children:n,selectedValue:s}=t;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=i.find((t=>t.props.value===s));return t?(0,r.cloneElement)(t,{className:(0,l.A)("margin-top--md",t.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==s})))})}function y(t){const e=m(t);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(f,{...e,...t})]})}function A(t){const e=(0,j.A)();return(0,g.jsx)(y,{...t,children:u(t.children)},String(e))}},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>a});var r=n(6540);const l={},s=r.createContext(l);function i(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:i(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);