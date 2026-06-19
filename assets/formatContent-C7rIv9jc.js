function y(r,e){let t=r;if(h(t)&&(t=m(t)),t.trim().startsWith("[")||t.includes('"type":"output_text"'))try{const n=JSON.parse(t),a=[];if(Array.isArray(n)){for(const o of n)if(o.role!=="user"){if(o.content&&Array.isArray(o.content))for(const i of o.content)i.type==="output_text"&&i.text&&a.push(i.text);typeof o.text=="string"&&a.push(o.text)}}a.length>0&&(t=a.join(`

`))}catch{}if(t=$(t),t=t.replace(/^#{1,6}\s+/gm,""),t=t.replace(/(^|\s)#{1,6}\s+/g,"$1"),t=t.replace(/\*\*([^*]+)\*\*/g,"$1"),t=t.replace(new RegExp("(?<!\\*)\\*([^*\\n]+)\\*(?!\\*)","g"),"$1"),t=t.replace(/^\s*\*\s+/gm,"- "),t=t.replace(/\s*\(\s*\[[^\]]+\]\([^)]*\)\s*\)/g,""),t=t.replace(/\[([^\]]+)\]\([^)]*\)/g,"$1"),t=t.replace(/\(?\s*https?:\/\/\S+\s*\)?/g,""),t=g(t),t=t.replace(/([a-zA-Z"')\]][.!?])\s*([A-Z][^:\n]{2,50}:)\s*/g,`$1

$2
`),t=t.replace(new RegExp(`(?<=[a-zA-Z"')\\]][.!?])\\s*([A-Z][a-zA-Z \\t()]+:)\\s+(?="|\\w)`,"g"),`

$1
`),t=t.replace(/([^\n])\n([A-Z][A-Z\s]{3,}:?)\s*\n/g,`$1

$2
`),t=t.replace(/([^\n])\n([A-Z][^:\n]*:)\s*\n/g,`$1

$2
`),t=t.replace(/^(\d+[.)])[ \t]*\n+[ \t]*(?=\S)/gm,"$1 "),t=t.replace(/(\d+\.)\s*\n(\d+\.)/g,`$1

$2`),e){const n=e.isMobile?1:e.maxSentencesPerLine??2;t=C(t,n)}return t=t.replace(/\n{4,}/g,`


`),t}function h(r){const e=r.trim();return e.includes('"scriptNumber"')||e.includes('"bodyCopy"')||e.includes('"emailNumber"')||e.includes('"hooks":')||e.includes('"cta":')||e.includes('"subject":')||e.includes('"preheader":')||e.startsWith("[{")&&e.endsWith("}]")||e.startsWith("{")&&e.includes('"body"')}function m(r){var e,t,n,a;try{let o=r.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim();const i=JSON.parse(o);return Array.isArray(i)&&((e=i[0])==null?void 0:e.scriptNumber)!==void 0?A(i):Array.isArray(i)&&((t=i[0])==null?void 0:t.bodyCopy)!==void 0?b(i):Array.isArray(i)&&(((n=i[0])==null?void 0:n.emailNumber)!==void 0||((a=i[0])==null?void 0:a.subject)!==void 0)?S(i):i.subject!==void 0||i.body!==void 0?d(i,1):f(i)}catch{return $(r)}}function A(r){return r.map((e,t)=>{const n=e.scriptNumber||t+1,a=e.title||`Script ${n}`;let o=`Script ${n}: ${a}

`;return e.hook&&(o+=`Hook
${c(e.hook)}

`),e.problem&&(o+=`Problem
${c(e.problem)}

`),e.solution&&(o+=`Solution
${c(e.solution)}

`),e.benefits&&(o+=`Benefits
${c(e.benefits)}

`),e.cta&&(o+=`Call to Action
${c(e.cta)}

`),e.fullScript&&(o+=`Full Script
${c(e.fullScript)}
`),o.trim()}).join(`


`)}function b(r){return r.map((e,t)=>{var o;let n=`Ad Variation ${t+1}

`;e.hooks&&Array.isArray(e.hooks)&&(n+=`Hooks
`,e.hooks.forEach(i=>{n+=`- ${c(i)}
`}),n+=`
`),e.bodyCopy&&(n+=`Body Copy
${c(e.bodyCopy)}

`),e.cta&&(n+=`Call to Action
${c(e.cta)}

`),n+=`Copy-Ready Version
`;const a=((o=e.hooks)==null?void 0:o.map(i=>c(i)).join(" | "))||"";return n+=`${a}

${c(e.bodyCopy)||""}

${c(e.cta)||""}`,n.trim()}).join(`


`)}function S(r){return r.map((e,t)=>{const n=e.emailNumber||t+1;return d(e,n)}).join(`


`)}function d(r,e){const t=r.subject||"Untitled Email";let n=`Email ${e}: ${t}

`;return r.preheader&&(n+=`Preheader
${c(r.preheader)}

`),r.body&&(n+=`Body
${c(r.body)}

`),r.cta&&(n+=`Call to Action
${c(r.cta)}

`),r.ps&&(n+=`P.S.
${c(r.ps)}
`),n.trim()}function f(r,e=0){if(typeof r=="string")return c(r);if(typeof r!="object"||r===null)return String(r);if(Array.isArray(r))return r.map((n,a)=>{const o=f(n,e+1);return typeof n=="object"?`${a+1}. ${o}`:`- ${o}`}).join(`
`);const t=[];for(const[n,a]of Object.entries(r)){if(n.match(/Number$|^id$|^_/i))continue;const o=n.replace(/([A-Z])/g," $1").replace(/_/g," ").replace(/^\s/,"").split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()).join(" "),i=f(a,e+1);i&&t.push(`${o}
${i}`)}return t.join(`

`)}function c(r){if(!r)return"";if(typeof r!="string")return String(r);const e=r.replace(/\\n\\n/g,`

`).replace(/\\n/g,`
`).replace(/\\"/g,'"').replace(/^["']|["']$/g,"").replace(/\*\*/g,"").replace(new RegExp("(?<!\\*)\\*(?!\\*)","g"),"").replace(/\[([^\]]+)\]/g,"$1").replace(/^\d+\.\s*$/gm,"").replace(/\n{4,}/g,`


`).trim();return g(e).trim()}function g(r){return r?r.replace(/^[ \t]*([-=_*][ \t]*){3,}$/gm,"").replace(/\s*[—–]\s*/g,", ").replace(/\s+-{2,}\s+/g,", ").replace(/-{2,}/g," ").replace(/([.!?,;:])\s*,\s*/g,"$1 ").replace(/[ \t]+,/g,",").replace(/,\s*,/g,",").replace(/[ \t]{2,}/g," "):""}function k(r){if(!r)return"";let e=String(r);return e=e.replace(/\*\*([^*]+)\*\*/g,"$1"),e=e.replace(new RegExp("(?<!\\*)\\*([^*\\n]+)\\*(?!\\*)","g"),"$1"),e=e.replace(/^#{1,6}\s+/gm,""),e=e.replace(/\[([^\]]+)\]\([^)]*\)/g,"$1"),e=g(e),e.trim()}function $(r){return r.replace(/"(\w+)":\s*"([^"]+)"/g,`$1
$2
`).replace(/"(\w+)":\s*/g,`
$1
`).replace(/^"(.*)"$/gm,"$1").replace(/",\s*$/gm,"").replace(/^\s*[{}]\s*$/gm,"").replace(/^\s*[{}],?\s*$/gm,"").replace(/^\s*[\[\]]\s*$/gm,"").replace(/^\s*[\[\]],?\s*$/gm,"").replace(/\\n\\n/g,`

`).replace(/\\n/g,`
`).replace(/\n{4,}/g,`


`).trim()}function C(r,e){return r.split(/\n{2,}/).map(n=>{if(/^[-•\d]/.test(n.trim())||n.length<100)return n;const a=n.split(new RegExp("(?<=[.!?])\\s+(?=[A-Z])")),o=[];for(let i=0;i<a.length;i+=e){const s=a.slice(i,i+e);o.push(s.join(" "))}return o.join(`
`)}).join(`

`)}function x(r,e){const n=y(r,e).split(`
`),a=[];let o=0;for(let i=0;i<n.length;i++){const s=n[i].trim();if(!s)continue;if(/^\d+[\.\)]\s+/.test(s)){const u=s.match(/^(\d+[\.\)])\s+(.*)$/);if(u){o++,a.push({type:"numbered",content:u[2].trim(),index:o,originalNumber:u[1]});continue}}else o=0;if(/^[-•]\s+/.test(s)){a.push({type:"bullet",content:s.replace(/^[-•]\s+/,"")});continue}if(s.endsWith(":")&&s.length<80&&!s.includes(".")||s===s.toUpperCase()&&s.length<60&&s.length>4&&/[A-Z]{2,}/.test(s)||/^[A-Z][a-zA-Z\s]+:$/.test(s)||/^[A-Z][a-zA-Z\s()]+:\s*$/.test(s)||/^(Section|Part|Category|Type|Group|Phase)\s*\d*[:.]?\s*$/i.test(s)||/^(Motivators?|Fears?|Goals?|Desires?|Beliefs?|Objections?|Challenges?|Frustrations?|Pain\s*Points?|Benefits?|Demographics?|Psychographics?|Behaviors?|Preferences?|Values?|Needs?|Wants?|Concerns?|Barriers?|Triggers?|Keywords?|Interests?|Hobbies?|Lifestyle|Income|Education|Occupation|Location|Gender|Age)$/i.test(s)){a.push({type:"heading",content:s.replace(/:$/,"")});continue}const p=i+1<n.length?n[i+1].trim():"";if(s.length>=4&&s.length<80&&!s.endsWith(".")&&!s.endsWith(",")&&!s.endsWith("!")&&!s.endsWith("?")&&/^[A-Z]/.test(s)&&!/\b(is|are|was|were|has|have|had|can|will|would|could|should|offers?|provides?|includes?|features?|delivers?|ensures?|creates?|makes?|gives?|helps?|allows?|enables?)\b/i.test(s)&&(/^[A-Z][a-z]+$/.test(s)&&/^[-•]\s+/.test(p)||/^[-•]\s+/.test(p)||/^\d+[\.\)]\s+/.test(p)||/^(Hooks?|Headlines?|Ideas?|Tips?|Examples?|Scripts?|Copy|Ads?|Benefits?|Features?|Reasons?|Ways?)\s+(Addressing|For|About|Featuring|Highlighting|Using|Based|Targeting|That|To|With)/i.test(s)||/^([A-Z][a-z]+\s+){1,4}[A-Z][a-z]+$/.test(s)||p.length>s.length&&p.length>20)&&p){a.push({type:"subheading",content:s});continue}if(/^\|.*\|$/.test(s)){if(/^\|[\s-:]+\|$/.test(s))continue;const u=s.split("|").filter(l=>l.trim()).map(l=>l.trim());if(u.length>0){const l=a[a.length-1];(l==null?void 0:l.type)==="table"&&l.tableRows?l.tableRows.push(u):a.push({type:"table",content:"",tableRows:[u]});continue}}a.push({type:"text",content:s})}return a}function N(r){if(!r)return"No content available";if(typeof r=="string")return r;if(Array.isArray(r))return r.map((e,t)=>{if(typeof e=="string")return`--- Item ${t+1} ---
${e}`;if(e&&typeof e=="object"){const n=e;return n.title&&n.content?`--- ${n.title} ---
${n.content}`:n.hook||n.text?String(n.hook??n.text):JSON.stringify(e,null,2)}return String(e)}).join(`

`);if(typeof r=="object"){const e=r;return Array.isArray(e.scripts)?e.scripts.map((t,n)=>typeof t=="string"?`--- Script ${n+1} ---
${t}`:t!=null&&t.title&&(t!=null&&t.content)?`--- ${t.title} ---
${t.content}`:JSON.stringify(t,null,2)).join(`

`):Array.isArray(e.emails)?e.emails.map((t,n)=>typeof t=="string"?`--- Email ${n+1} ---
${t}`:t!=null&&t.subject&&(t!=null&&t.body)?`--- ${t.subject} ---
${t.body}`:JSON.stringify(t,null,2)).join(`

`):Array.isArray(e.hooks)?e.hooks.map((t,n)=>typeof t=="string"?`${n+1}. ${t}`:`${n+1}. ${JSON.stringify(t)}`).join(`

`):e.content?typeof e.content=="string"?e.content:JSON.stringify(e.content,null,2):JSON.stringify(r,null,2)}return String(r)}export{N as a,k as c,y as f,x as p};
