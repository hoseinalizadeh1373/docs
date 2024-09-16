"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[8460],{1937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>x});var l=n(4848),r=n(8453);const s={},i="VoiceMail",c={id:"developers/api/SimotelWebhooks/Events/voicemail",title:"VoiceMail",description:"\u0647\u0646\u06af\u0627\u0645\u06cc \u06a9\u0647 \u067e\u06cc\u0627\u0645 \u0635\u0648\u062a\u06cc \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644 \u0630\u062e\u06cc\u0631\u0647 \u0634\u0648\u062f(\u0635\u0646\u062f\u0648\u0642 \u0635\u0648\u062a\u06cc)\u060c \u0631\u0648\u06cc\u062f\u0627\u062f  VoiceMail \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u06af\u0631\u062f\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/1-api/3-SimotelWebhooks/2-Events/11-voicemail.md",sourceDirName:"developers/1-api/3-SimotelWebhooks/2-Events",slug:"/developers/api/SimotelWebhooks/Events/voicemail",permalink:"/docs/developers/api/SimotelWebhooks/Events/voicemail",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"docs",previous:{title:"CDR Queue",permalink:"/docs/developers/api/SimotelWebhooks/Events/cdr_queue"},next:{title:"VoiceMail Email",permalink:"/docs/developers/api/SimotelWebhooks/Events/voicemail_email"}},d={},x=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f VoiceMail",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-voicemail",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"voicemail",children:"VoiceMail"})}),"\n",(0,l.jsx)(t.p,{children:"\u0647\u0646\u06af\u0627\u0645\u06cc \u06a9\u0647 \u067e\u06cc\u0627\u0645 \u0635\u0648\u062a\u06cc \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644 \u0630\u062e\u06cc\u0631\u0647 \u0634\u0648\u062f(\u0635\u0646\u062f\u0648\u0642 \u0635\u0648\u062a\u06cc)\u060c \u0631\u0648\u06cc\u062f\u0627\u062f  VoiceMail \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u06af\u0631\u062f\u062f."}),"\n",(0,l.jsx)(t.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f"}),"\n",(0,l.jsx)("div",{class:"custom-table",children:(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u0631\u0648\u06cc\u062f\u0627\u062f"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"VoiceMail"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"event_name"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"5fedc34a1b05af9835bbcfdc"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"id"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0635\u0646\u062f\u0648\u0642 \u0635\u0648\u062a\u06cc"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"5555"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"number"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"FAILED"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"state"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc \u0638\u0628\u0637 \u0634\u062f\u0647"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:'"'}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"filename"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:'"'}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"message"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:'"'}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"duration"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Hangup call"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"message"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0628\u062f\u0627"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"992"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"caller"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:'"'}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"data"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u062a\u0627\u0631\u06cc\u062e \u0631\u0648\u06cc\u062f\u0627\u062f"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2020-12-31 12:25:46.417210"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"date"})})]})]})]})}),"\n",(0,l.jsx)(t.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-voicemail",children:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f VoiceMail"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:'{\r\n  "event_name": "VoiceMail",\r\n  "id": "5fedc34a1b05af9835bbcfdc",\r\n  "number": "5555",\r\n  "state": "FAILED",\r\n  "date": "2020-12-31 12:25:46.417210",\r\n  "message": "Hangup call",\r\n  "caller": "992"\r\n}\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:'{\r\n  "event_name": "VoiceMail",\r\n  "id": "5fedc3b31b05af9835bbcfdd",\r\n  "number": "5555",\r\n  "state": "SUCCESS",\r\n  "date": "2020-12-31 12:27:31.752195",\r\n  "filename": "5555_1609417639-vm-record-file-8766.wav",\r\n  "duration": "1",\r\n  "caller": "992"\r\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var l=n(6540);const r={},s=l.createContext(r);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);