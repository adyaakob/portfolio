(()=>{var e={};e.id=349,e.ids=[349],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5807:e=>{"use strict";e.exports=require("module")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},6097:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>o,pages:()=>x,routeModule:()=>h,tree:()=>d}),t(6163),t(1469),t(5866);var a=t(3191),l=t(8716),c=t(7922),i=t.n(c),r=t(5231),n={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>r[e]);t.d(s,n);let d=["",{children:["cv",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,6163)),"/home/runner/work/portfolio/portfolio/src/app/cv/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,2889))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1469)),"/home/runner/work/portfolio/portfolio/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,2889))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],x=["/home/runner/work/portfolio/portfolio/src/app/cv/page.tsx"],o="/cv/page",m={require:t,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/cv/page",pathname:"/cv",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6849:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},8347:(e,s,t)=>{Promise.resolve().then(t.bind(t,9877))},4410:(e,s,t)=>{Promise.resolve().then(t.bind(t,393))},8472:()=>{},1596:(e,s,t)=>{"use strict";t(8472);var a=t(7577),l=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(a),c="undefined"!=typeof process&&process.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},r=function(){function e(e){var s=void 0===e?{}:e,t=s.name,a=void 0===t?"stylesheet":t,l=s.optimizeForSpeed,r=void 0===l?c:l;n(i(a),"`name` must be a string"),this._name=a,this._deletedRulePlaceholder="#"+a+"-deleted-rule____{}",n("boolean"==typeof r,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=r,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0,this._nonce=null}var s=e.prototype;return s.setOptimizeForSpeed=function(e){n("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),n(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},s.isOptimizeForSpeed=function(){return this._optimizeForSpeed},s.inject=function(){var e=this;n(!this._injected,"sheet already injected"),this._injected=!0,this._serverSheet={cssRules:[],insertRule:function(s,t){return"number"==typeof t?e._serverSheet.cssRules[t]={cssText:s}:e._serverSheet.cssRules.push({cssText:s}),t},deleteRule:function(s){e._serverSheet.cssRules[s]=null}}},s.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var s=0;s<document.styleSheets.length;s++)if(document.styleSheets[s].ownerNode===e)return document.styleSheets[s]},s.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},s.insertRule=function(e,s){return n(i(e),"`insertRule` accepts only strings"),"number"!=typeof s&&(s=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,s),this._rulesCount++},s.replaceRule=function(e,s){this._optimizeForSpeed;var t=this._serverSheet;if(s.trim()||(s=this._deletedRulePlaceholder),!t.cssRules[e])return e;t.deleteRule(e);try{t.insertRule(s,e)}catch(a){c||console.warn("StyleSheet: illegal rule: \n\n"+s+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),t.insertRule(this._deletedRulePlaceholder,e)}return e},s.deleteRule=function(e){this._serverSheet.deleteRule(e)},s.flush=function(){this._injected=!1,this._rulesCount=0,this._serverSheet.cssRules=[]},s.cssRules=function(){return this._serverSheet.cssRules},s.makeStyleTag=function(e,s,t){s&&n(i(s),"makeStyleTag accepts only strings as second parameter");var a=document.createElement("style");this._nonce&&a.setAttribute("nonce",this._nonce),a.type="text/css",a.setAttribute("data-"+e,""),s&&a.appendChild(document.createTextNode(s));var l=document.head||document.getElementsByTagName("head")[0];return t?l.insertBefore(a,t):l.appendChild(a),a},function(e,s){for(var t=0;t<s.length;t++){var a=s[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function n(e,s){if(!e)throw Error("StyleSheet: "+s+".")}var d=function(e){for(var s=5381,t=e.length;t;)s=33*s^e.charCodeAt(--t);return s>>>0},x={};function o(e,s){if(!s)return"jsx-"+e;var t=String(s),a=e+t;return x[a]||(x[a]="jsx-"+d(e+"-"+t)),x[a]}function m(e,s){var t=e+(s=s.replace(/\/style/gi,"\\/style"));return x[t]||(x[t]=s.replace(/__jsx-style-dynamic-selector/g,e)),x[t]}var h=a.createContext(null);h.displayName="StyleSheetContext",l.default.useInsertionEffect||l.default.useLayoutEffect;var f=void 0;function j(e){var s=f||a.useContext(h);return s&&s.add(e),null}j.dynamic=function(e){return e.map(function(e){return o(e[0],e[1])}).join(" ")},s.style=j},7626:(e,s,t)=>{"use strict";e.exports=t(1596).style},9877:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>h});var a=t(326),l=t(7626),c=t.n(l),i=t(434),r=t(6226),n=t(1223),d=t(622),x=t(3265),o=t(7577);let m=(0,x.default)(async()=>{},{loadableGenerated:{modules:["app/cv/page.tsx -> @/components/sections/CVCareerTimeline"]},ssr:!1});function h(){let e=(0,n.b)(),s=(0,o.useRef)(null);return(0,a.jsxs)("main",{className:"jsx-1770c2e6fe84423 min-h-screen bg-gray-100 p-8",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 fixed top-4 left-4 z-50 flex gap-4",children:[a.jsx(i.default,{href:"/",className:"px-4 py-2 bg-white text-black border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors",children:"← Back"}),(0,a.jsxs)("a",{href:"/cv/cv-ahmad-dahalan-yaakob.pdf",download:!0,className:"jsx-1770c2e6fe84423 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors flex items-center gap-2",children:[a.jsx(d.aBF,{className:"text-sm"}),"Download CV"]})]}),a.jsx("div",{ref:s,style:{width:"210mm",height:"297mm"},className:"jsx-1770c2e6fe84423 relative mx-auto mt-16 bg-white shadow-lg",children:(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 absolute inset-0 flex",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 w-[60%] p-[5mm] pr-[5mm]",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex items-start gap-4 mb-12",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-[80px] h-[80px] rounded-full overflow-hidden",children:a.jsx(r.default,{src:`${e}/profile.jpg`,alt:"Ahmad Dahalan",width:80,height:80,className:"object-cover"})}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex-1",children:[a.jsx("h1",{className:"jsx-1770c2e6fe84423 text-[20px] font-medium text-[#2E5077] mb-2",children:"Ahmad Dahalan Bin Yaakob"}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex flex-wrap gap-1",children:[a.jsx("span",{className:"jsx-1770c2e6fe84423 px-2 py-0.5 text-[10px] bg-[#4A89DC] text-white rounded",children:"Military Communications"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 px-2 py-0.5 text-[10px] bg-[#37BC9B] text-white rounded",children:"Systems Integration"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 px-2 py-0.5 text-[10px] bg-[#967ADC] text-white rounded",children:"R&D Strategic Leader"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 px-2 py-0.5 text-[10px] bg-[#F6BB42] text-white rounded",children:"Product Design"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 px-2 py-0.5 text-[10px] bg-[#4B89DC] text-white rounded",children:"AI Technology"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 px-2 py-0.5 text-[10px] bg-[#D770AD] text-white rounded",children:"Platform Integration"})]})]})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 mb-8",children:[a.jsx("h2",{className:"jsx-1770c2e6fe84423 text-[14px] font-medium text-[#2E5077] uppercase mb-2",children:"Professional Summary"}),a.jsx("p",{className:"jsx-1770c2e6fe84423 text-[11px] leading-relaxed text-gray-700 dark:text-gray-700",children:"An experienced defense technology leader with 20+ years of expertise in military communications and systems integration. Proven track record in driving complete product lifecycles from concept to deployment, specializing in tactical radio systems and military-grade communications infrastructure. Demonstrates mastery in Integration, Verification, Validation & Qualification (IVVQ) processes, while leading strategic R&D initiatives. Currently expanding capabilities in software development and artificial intelligence applications."})]}),a.jsx("div",{className:"jsx-1770c2e6fe84423 mb-2",children:a.jsx(m,{})}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 mb-2",children:[a.jsx("h2",{className:"jsx-1770c2e6fe84423 text-[14px] font-medium text-[#2E5077] uppercase mb-2",children:"Experience"}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 space-y-2",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[a.jsx("h3",{className:"jsx-1770c2e6fe84423 text-[12px] font-medium text-[#2E5077] mb-0.5",children:"Technical Project Manager"}),a.jsx("p",{className:"jsx-1770c2e6fe84423 text-[11px] text-gray-700 dark:text-gray-700 mb-0.5",children:"R&D and Business Development"}),(0,a.jsxs)("ul",{className:"jsx-1770c2e6fe84423 text-[11px] space-y-0.5 text-black dark:text-black list-disc pl-4",children:[a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Spearheaded R&D initiatives as R&D Manager, driving technological innovation and product development"}),a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Led integration of military communication systems"}),a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Managed complex technical projects and IVVQ processes"}),a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Developed strategic business solutions"}),a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Supervised cross-functional engineering teams"}),a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Successfully managed multiple concurrent projects with budgets exceeding $5M"})]})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[a.jsx("h3",{className:"jsx-1770c2e6fe84423 text-[12px] font-medium text-[#2E5077] mb-0.5",children:"Systems Engineering Lead"}),a.jsx("p",{className:"jsx-1770c2e6fe84423 text-[11px] text-gray-700 dark:text-gray-700 mb-0.5",children:"Defense Systems Integration"}),(0,a.jsxs)("ul",{className:"jsx-1770c2e6fe84423 text-[11px] space-y-0.5 text-black dark:text-black list-disc pl-4",children:[a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Directed R&D initiatives and coordinated cross-functional teams"}),a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Managed tender submissions and led proposal development"}),a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Developed technical solutions for defense projects"}),a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Led system integration and validation processes"})]})]})]})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[a.jsx("h2",{className:"jsx-1770c2e6fe84423 text-[14px] font-medium text-[#2E5077] uppercase mb-2",children:"KEY PROJECTS"}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 grid grid-cols-2 gap-3",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex items-center gap-2 mb-2",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-10 h-10 relative",children:a.jsx(r.default,{src:`${e}/images/cv/walkie-talkies.png`,alt:"Walkie Talkie icon",width:40,height:40,className:"object-contain"})}),a.jsx("h4",{className:"jsx-1770c2e6fe84423 text-blue-700 font-medium text-xs",children:"TRC5200 Development"})]}),a.jsx("p",{className:"jsx-1770c2e6fe84423 text-xs text-gray-600",children:"First locally engineered tactical radio, reducing dependency on foreign technology by 60%"})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg border border-green-200",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex items-center gap-2 mb-2",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-10 h-10 relative",children:a.jsx(r.default,{src:`${e}/images/cv/soldier.png`,alt:"Soldier icon",width:40,height:40,className:"object-contain"})}),a.jsx("h4",{className:"jsx-1770c2e6fe84423 text-green-700 font-medium text-xs",children:"Future Soldier System"})]}),a.jsx("p",{className:"jsx-1770c2e6fe84423 text-xs text-gray-600",children:"Led development of FSS for Malaysian Army's Network Centric Operations, enhancing battlefield coordination through soldier-as-sensor capability"})]})]})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 mt-2",children:[a.jsx("h2",{className:"jsx-1770c2e6fe84423 text-[14px] font-medium text-[#2E5077] uppercase mb-2",children:"Professional Development"}),(0,a.jsxs)("ul",{className:"jsx-1770c2e6fe84423 text-[11px] space-y-1 text-black dark:text-black list-disc pl-4",children:[a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Currently expanding expertise in AI and software development"}),a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Actively developing web development skills"}),a.jsx("li",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Pursuing creative design capabilities"})]}),a.jsx("p",{className:"jsx-1770c2e6fe84423 text-[11px] leading-tight text-black dark:text-black bg-yellow-100 px-2 py-1 rounded",children:"Visit my portfolio page for more details."})]})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 w-[40%] bg-gray-50 p-[5mm] pl-[5mm]",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 text-right mb-6",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex items-center justify-end gap-1 mb-1",children:[a.jsx("span",{className:"jsx-1770c2e6fe84423 text-[11px] text-gray-700 dark:text-gray-700",children:"+60 102369037"}),a.jsx(d.I7T,{className:"text-[#2E5077] text-[12px]"})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex items-center justify-end gap-1 mb-1",children:[a.jsx("span",{className:"jsx-1770c2e6fe84423 text-[11px] text-gray-700 dark:text-gray-700",children:"adyaakob@gmail.com"}),a.jsx(d.SRX,{className:"text-[#2E5077] text-[12px]"})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex items-center justify-end gap-1 mb-1",children:[a.jsx("span",{className:"jsx-1770c2e6fe84423 text-[11px] text-gray-700 dark:text-gray-700",children:"linkedin.com/in/ahmaddahalan"}),a.jsx(d.ltd,{className:"text-[#2E5077] text-[12px]"})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex items-center justify-end gap-1 mb-1",children:[a.jsx("span",{className:"jsx-1770c2e6fe84423 text-[11px] text-gray-700 dark:text-gray-700",children:"github.com/adyaakob"}),a.jsx(d.hJX,{className:"text-[#2E5077] text-[12px]"})]}),a.jsx("div",{className:"jsx-1770c2e6fe84423 flex items-center justify-end gap-1",children:(0,a.jsxs)(i.default,{href:"adyaakob.github.io/portfolio",target:"_blank",className:"text-[11px] text-blue-600 hover:text-blue-800 font-medium bg-blue-50 px-2 py-1 rounded-full flex items-center gap-1 transition-colors",children:[a.jsx(d.ssk,{className:"text-[12px]"}),"adyaakob.github.io/portfolio"]})})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 mb-4",children:[a.jsx("h2",{className:"jsx-1770c2e6fe84423 text-[14px] font-medium text-[#2E5077] uppercase mb-2",children:"Education"}),(0,a.jsxs)("ul",{className:"jsx-1770c2e6fe84423 space-y-2",children:[(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-start gap-2",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-8 h-8 relative flex-shrink-0",children:a.jsx(r.default,{src:`${e}/images/education/plymouth-logo.jpg`,alt:"University of Plymouth",width:32,height:32,className:"object-contain"})}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[a.jsx("h3",{className:"jsx-1770c2e6fe84423 text-[11px] font-medium text-[#2E5077]",children:"Bachelor of Engineering (Electronics)"}),a.jsx("p",{className:"jsx-1770c2e6fe84423 text-[10px] text-gray-700 dark:text-gray-700",children:"University of Plymouth"}),a.jsx("p",{className:"jsx-1770c2e6fe84423 text-[10px] text-gray-700 dark:text-gray-700",children:"1995 - 1997"})]})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-start gap-2",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-8 h-8 relative flex-shrink-0",children:a.jsx(r.default,{src:`${e}/images/education/utm-logo.jpg`,alt:"Universiti Teknologi Malaysia",width:32,height:32,className:"object-contain"})}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[a.jsx("h3",{className:"jsx-1770c2e6fe84423 text-[11px] font-medium text-[#2E5077]",children:"Diploma in Electrical Engineering (Communications)"}),a.jsx("p",{className:"jsx-1770c2e6fe84423 text-[10px] text-gray-700 dark:text-gray-700",children:"Universiti Teknologi Malaysia"}),a.jsx("p",{className:"jsx-1770c2e6fe84423 text-[10px] text-gray-700 dark:text-gray-700",children:"1991 - 1994"})]})]})]})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 mb-2",children:[a.jsx("h3",{className:"jsx-1770c2e6fe84423 text-[14px] font-medium text-[#2E5077] uppercase mb-3",children:"Professional Skills"}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 space-y-2",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex justify-between text-[11px] mb-1",children:[a.jsx("span",{className:"jsx-1770c2e6fe84423 text-gray-700 dark:text-gray-700",children:"Technical Leadership"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-[#2E5077]",children:"90%"})]}),a.jsx("div",{className:"jsx-1770c2e6fe84423 h-1.5 bg-gray-100 rounded-full overflow-hidden",children:a.jsx("div",{style:{width:"90%"},className:"jsx-1770c2e6fe84423 h-full bg-[#4A89DC] rounded-full"})})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex justify-between text-[11px] mb-1",children:[a.jsx("span",{className:"jsx-1770c2e6fe84423 text-gray-700 dark:text-gray-700",children:"Project Management"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-[#2E5077]",children:"90%"})]}),a.jsx("div",{className:"jsx-1770c2e6fe84423 h-1.5 bg-gray-100 rounded-full overflow-hidden",children:a.jsx("div",{style:{width:"90%"},className:"jsx-1770c2e6fe84423 h-full bg-[#4A89DC] rounded-full"})})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex justify-between text-[11px] mb-1",children:[a.jsx("span",{className:"jsx-1770c2e6fe84423 text-gray-700 dark:text-gray-700",children:"Technical Expertise"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-[#2E5077]",children:"90%"})]}),a.jsx("div",{className:"jsx-1770c2e6fe84423 h-1.5 bg-gray-100 rounded-full overflow-hidden",children:a.jsx("div",{style:{width:"90%"},className:"jsx-1770c2e6fe84423 h-full bg-[#4A89DC] rounded-full"})})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 flex justify-between text-[11px] mb-1",children:[a.jsx("span",{className:"jsx-1770c2e6fe84423 text-gray-700 dark:text-gray-700",children:"Business Development"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-[#2E5077]",children:"60%"})]}),a.jsx("div",{className:"jsx-1770c2e6fe84423 h-1.5 bg-gray-100 rounded-full overflow-hidden",children:a.jsx("div",{style:{width:"60%"},className:"jsx-1770c2e6fe84423 h-full bg-[#4A89DC] rounded-full"})})]})]})]}),a.jsx("hr",{className:"jsx-1770c2e6fe84423 my-4 border-gray-200"}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[a.jsx("h3",{className:"jsx-1770c2e6fe84423 text-[14px] font-medium text-[#2E5077] uppercase mb-2",children:"Core Competencies"}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 space-y-4",children:[(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[a.jsx("h4",{className:"jsx-1770c2e6fe84423 text-[12px] font-medium text-[#2E5077] mb-2",children:"Management & Leadership"}),(0,a.jsxs)("ul",{className:"jsx-1770c2e6fe84423 text-[11px] space-y-1 text-black dark:text-black",children:[(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#4A89DC] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Project Management"})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#4A89DC] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Strategic Planning"})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#4A89DC] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Business Development"})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#4A89DC] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Tender Management"})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#4A89DC] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Proposal Writing"})]})]})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[a.jsx("h4",{className:"jsx-1770c2e6fe84423 text-[12px] font-medium text-[#2E5077] mb-2",children:"Defense & Military Technology"}),(0,a.jsxs)("ul",{className:"jsx-1770c2e6fe84423 text-[11px] space-y-1 text-black dark:text-black",children:[(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#37BC9B] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Military Communications Systems"})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#37BC9B] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Radio Systems Development"})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#37BC9B] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Tactical Systems Implementation"})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#37BC9B] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Integration, Verification, Validation & Qualification (IVVQ)"})]})]})]}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423",children:[a.jsx("h4",{className:"jsx-1770c2e6fe84423 text-[12px] font-medium text-[#2E5077] mb-2",children:"Technical Expertise"}),(0,a.jsxs)("ul",{className:"jsx-1770c2e6fe84423 text-[11px] space-y-1 text-black dark:text-black",children:[(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#967ADC] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Systems Integration"})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#967ADC] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Electronics Engineering"})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#967ADC] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Systems Engineering"})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#967ADC] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Research & Development"})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#967ADC] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Software Development"})]}),(0,a.jsxs)("li",{className:"jsx-1770c2e6fe84423 flex items-center gap-1.5",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-1.5 h-1.5 bg-[#967ADC] rounded-full"}),a.jsx("span",{className:"jsx-1770c2e6fe84423 text-black dark:text-black",children:"Web Development"})]})]})]})]})]}),a.jsx("hr",{className:"jsx-1770c2e6fe84423 my-4 border-gray-200"}),(0,a.jsxs)("div",{className:"jsx-1770c2e6fe84423 grid grid-cols-5 gap-2 mt-2",children:[a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/vscode.png`,alt:"Visual Studio Code",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/github.png`,alt:"GitHub",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/gpt4.png`,alt:"GPT-4",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/cursor.png`,alt:"Cursor",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/gamma.png`,alt:"Gamma",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/github-copilot.png`,alt:"GitHub Copilot",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/chatgpt.png`,alt:"ChatGPT",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/copilot.png`,alt:"Microsoft Copilot",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/claude.png`,alt:"Claude",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/perplexity.png`,alt:"Perplexity",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/gemini.png`,alt:"Gemini",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/office365.png`,alt:"Office 365",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/canva.png`,alt:"Canva",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/wordpress.png`,alt:"WordPress",width:24,height:24,className:"object-cover"})}),a.jsx("div",{className:"jsx-1770c2e6fe84423 w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform",children:a.jsx(r.default,{src:`${e}/images/tools/ollama.png`,alt:"Ollama",width:24,height:24,className:"object-cover"})})]})]})]})}),a.jsx(c(),{id:"1770c2e6fe84423",children:"@page{size:A4;margin:0}@media print{body{margin:0;padding:0}.print-hidden{display:none}}"})]})}},393:(e,s,t)=>{"use strict";t.d(s,{ThemeProvider:()=>c});var a=t(326),l=t(4831);function c({children:e}){return a.jsx(l.f,{attribute:"class",defaultTheme:"dark",enableSystem:!0,disableTransitionOnChange:!0,themes:["light","dark"],children:e})}},1223:(e,s,t)=>{"use strict";function a(){return"/portfolio"}t.d(s,{b:()=>a})},6163:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});let a=(0,t(8570).createProxy)(String.raw`/home/runner/work/portfolio/portfolio/src/app/cv/page.tsx#default`)},1469:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i,metadata:()=>c});var a=t(9510);let l=(0,t(8570).createProxy)(String.raw`/home/runner/work/portfolio/portfolio/src/components/providers/ThemeProvider.tsx#ThemeProvider`);t(5023),t(5752);let c={title:"Ahmad Dahalan Yaakob",description:"Professional Portfolio of Ahmad Dahalan Yaakob"};function i({children:e}){return a.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:a.jsx("body",{className:"dark:bg-gray-900 dark:text-gray-100",children:a.jsx(l,{children:e})})})}},2889:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var a=t(6621);let l=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)("/portfolio",e.params,"favicon.ico")+""}]},5023:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[948,122,131,265],()=>t(6097));module.exports=a})();