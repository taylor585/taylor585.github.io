function m(n,e){let t=n;if($(t)&&(t=y(t)),t.trim().startsWith("[")||t.includes('"type":"output_text"'))try{const s=JSON.parse(t),c=[];if(Array.isArray(s)){for(const o of s)if(o.role!=="user"){if(o.content&&Array.isArray(o.content))for(const i of o.content)i.type==="output_text"&&i.text&&c.push(i.text);typeof o.text=="string"&&c.push(o.text)}}c.length>0&&(t=c.join(`

`))}catch{}if(t=h(t),t=t.replace(/^#{1,6}\s+/gm,""),t=t.replace(/(^|\s)#{1,6}\s+/g,"$1"),t=t.replace(/\*\*([^*]+)\*\*/g,"$1"),t=t.replace(new RegExp("(?<!\\*)\\*([^*\\n]+)\\*(?!\\*)","g"),"$1"),t=t.replace(/^\s*\*\s+/gm,"- "),t=t.replace(/\s*\(\s*\[[^\]]+\]\([^)]*\)\s*\)/g,""),t=t.replace(/\[([^\]]+)\]\([^)]*\)/g,"$1"),t=t.replace(/\(?\s*https?:\/\/\S+\s*\)?/g,""),t=g(t),t=t.replace(/([a-zA-Z"')\]][.!?])\s*([A-Z][^:\n]{2,50}:)\s*/g,`$1

$2
`),t=t.replace(new RegExp(`(?<=[a-zA-Z"')\\]][.!?])\\s*([A-Z][a-zA-Z \\t()]+:)\\s+(?="|\\w)`,"g"),`

$1
`),t=t.replace(/([^\n])\n([A-Z][A-Z\s]{3,}:?)\s*\n/g,`$1

$2
`),t=t.replace(/([^\n])\n([A-Z][^:\n]*:)\s*\n/g,`$1

$2
`),t=t.replace(/^(\d+[.)])[ \t]*\n+[ \t]*(?=\S)/gm,"$1 "),t=t.replace(/(\d+\.)\s*\n(\d+\.)/g,`$1

$2`),e){const s=e.isMobile?1:e.maxSentencesPerLine??2;t=S(t,s)}return t=t.replace(/\n{4,}/g,`


`),t}function $(n){const e=n.trim();return e.includes('"scriptNumber"')||e.includes('"bodyCopy"')||e.includes('"emailNumber"')||e.includes('"hooks":')||e.includes('"cta":')||e.includes('"subject":')||e.includes('"preheader":')||e.startsWith("[{")&&e.endsWith("}]")||e.startsWith("{")&&e.includes('"body"')}function y(n){var e,t,s,c;try{let o=n.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim();const i=JSON.parse(o);return Array.isArray(i)&&((e=i[0])==null?void 0:e.scriptNumber)!==void 0?A(i):Array.isArray(i)&&((t=i[0])==null?void 0:t.bodyCopy)!==void 0?b(i):Array.isArray(i)&&(((s=i[0])==null?void 0:s.emailNumber)!==void 0||((c=i[0])==null?void 0:c.subject)!==void 0)?C(i):i.subject!==void 0||i.body!==void 0?d(i,1):f(i)}catch{return h(n)}}function A(n){return n.map((e,t)=>{const s=e.scriptNumber||t+1,c=e.title||`Script ${s}`;let o=`Script ${s}: ${c}

`;return e.hook&&(o+=`Hook
${a(e.hook)}

`),e.problem&&(o+=`Problem
${a(e.problem)}

`),e.solution&&(o+=`Solution
${a(e.solution)}

`),e.benefits&&(o+=`Benefits
${a(e.benefits)}

`),e.cta&&(o+=`Call to Action
${a(e.cta)}

`),e.fullScript&&(o+=`Full Script
${a(e.fullScript)}
`),o.trim()}).join(`


`)}function b(n){return n.map((e,t)=>{var o;let s=`Ad Variation ${t+1}

`;e.hooks&&Array.isArray(e.hooks)&&(s+=`Hooks
`,e.hooks.forEach(i=>{s+=`- ${a(i)}
`}),s+=`
`),e.bodyCopy&&(s+=`Body Copy
${a(e.bodyCopy)}

`),e.cta&&(s+=`Call to Action
${a(e.cta)}

`),s+=`Copy-Ready Version
`;const c=((o=e.hooks)==null?void 0:o.map(i=>a(i)).join(" | "))||"";return s+=`${c}

${a(e.bodyCopy)||""}

${a(e.cta)||""}`,s.trim()}).join(`


`)}function C(n){return n.map((e,t)=>{const s=e.emailNumber||t+1;return d(e,s)}).join(`


`)}function d(n,e){const t=n.subject||"Untitled Email";let s=`Email ${e}: ${t}

`;return n.preheader&&(s+=`Preheader
${a(n.preheader)}

`),n.body&&(s+=`Body
${a(n.body)}

`),n.cta&&(s+=`Call to Action
${a(n.cta)}

`),n.ps&&(s+=`P.S.
${a(n.ps)}
`),s.trim()}function f(n,e=0){if(typeof n=="string")return a(n);if(typeof n!="object"||n===null)return String(n);if(Array.isArray(n))return n.map((s,c)=>{const o=f(s,e+1);return typeof s=="object"?`${c+1}. ${o}`:`- ${o}`}).join(`
`);const t=[];for(const[s,c]of Object.entries(n)){if(s.match(/Number$|^id$|^_/i))continue;const o=s.replace(/([A-Z])/g," $1").replace(/_/g," ").replace(/^\s/,"").split(" ").map(r=>r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()).join(" "),i=f(c,e+1);i&&t.push(`${o}
${i}`)}return t.join(`

`)}function a(n){if(!n)return"";if(typeof n!="string")return String(n);const e=n.replace(/\\n\\n/g,`

`).replace(/\\n/g,`
`).replace(/\\"/g,'"').replace(/^["']|["']$/g,"").replace(/\*\*/g,"").replace(new RegExp("(?<!\\*)\\*(?!\\*)","g"),"").replace(/\[([^\]]+)\]/g,"$1").replace(/^\d+\.\s*$/gm,"").replace(/\n{4,}/g,`


`).trim();return g(e).trim()}function g(n){return n?n.replace(/^[ \t]*([-=_*][ \t]*){3,}$/gm,"").replace(/\s*[—–]\s*/g,", ").replace(/\s+-{2,}\s+/g,", ").replace(/-{2,}/g," ").replace(/([.!?,;:])\s*,\s*/g,"$1 ").replace(/[ \t]+,/g,",").replace(/,\s*,/g,",").replace(/[ \t]{2,}/g," "):""}function j(n){if(!n)return"";let e=String(n);return e=e.replace(/\*\*([^*]+)\*\*/g,"$1"),e=e.replace(new RegExp("(?<!\\*)\\*([^*\\n]+)\\*(?!\\*)","g"),"$1"),e=e.replace(/^#{1,6}\s+/gm,""),e=e.replace(/\[([^\]]+)\]\([^)]*\)/g,"$1"),e=g(e),e.trim()}function h(n){return n.replace(/"(\w+)":\s*"([^"]+)"/g,`$1
$2
`).replace(/"(\w+)":\s*/g,`
$1
`).replace(/^"(.*)"$/gm,"$1").replace(/",\s*$/gm,"").replace(/^\s*[{}]\s*$/gm,"").replace(/^\s*[{}],?\s*$/gm,"").replace(/^\s*[\[\]]\s*$/gm,"").replace(/^\s*[\[\]],?\s*$/gm,"").replace(/\\n\\n/g,`

`).replace(/\\n/g,`
`).replace(/\n{4,}/g,`


`).trim()}function S(n,e){return n.split(/\n{2,}/).map(s=>{if(/^[-•\d]/.test(s.trim())||s.length<100)return s;const c=s.split(new RegExp("(?<=[.!?])\\s+(?=[A-Z])")),o=[];for(let i=0;i<c.length;i+=e){const r=c.slice(i,i+e);o.push(r.join(" "))}return o.join(`
`)}).join(`

`)}function k(n,e){const s=m(n,e).split(`
`),c=[];let o=0;for(let i=0;i<s.length;i++){const r=s[i].trim();if(!r)continue;if(/^\d+[\.\)]\s+/.test(r)){const p=r.match(/^(\d+[\.\)])\s+(.*)$/);if(p){o++,c.push({type:"numbered",content:p[2].trim(),index:o,originalNumber:p[1]});continue}}else o=0;if(/^[-•]\s+/.test(r)){c.push({type:"bullet",content:r.replace(/^[-•]\s+/,"")});continue}if(r.endsWith(":")&&r.length<80&&!r.includes(".")||r===r.toUpperCase()&&r.length<60&&r.length>4&&/[A-Z]{2,}/.test(r)||/^[A-Z][a-zA-Z\s]+:$/.test(r)||/^[A-Z][a-zA-Z\s()]+:\s*$/.test(r)||/^(Section|Part|Category|Type|Group|Phase)\s*\d*[:.]?\s*$/i.test(r)||/^(Motivators?|Fears?|Goals?|Desires?|Beliefs?|Objections?|Challenges?|Frustrations?|Pain\s*Points?|Benefits?|Demographics?|Psychographics?|Behaviors?|Preferences?|Values?|Needs?|Wants?|Concerns?|Barriers?|Triggers?|Keywords?|Interests?|Hobbies?|Lifestyle|Income|Education|Occupation|Location|Gender|Age)$/i.test(r)){c.push({type:"heading",content:r.replace(/:$/,"")});continue}const u=i+1<s.length?s[i+1].trim():"";if(r.length>=4&&r.length<80&&!r.endsWith(".")&&!r.endsWith(",")&&!r.endsWith("!")&&!r.endsWith("?")&&/^[A-Z]/.test(r)&&!/\b(is|are|was|were|has|have|had|can|will|would|could|should|offers?|provides?|includes?|features?|delivers?|ensures?|creates?|makes?|gives?|helps?|allows?|enables?)\b/i.test(r)&&(/^[A-Z][a-z]+$/.test(r)&&/^[-•]\s+/.test(u)||/^[-•]\s+/.test(u)||/^\d+[\.\)]\s+/.test(u)||/^(Hooks?|Headlines?|Ideas?|Tips?|Examples?|Scripts?|Copy|Ads?|Benefits?|Features?|Reasons?|Ways?)\s+(Addressing|For|About|Featuring|Highlighting|Using|Based|Targeting|That|To|With)/i.test(r)||/^([A-Z][a-z]+\s+){1,4}[A-Z][a-z]+$/.test(r)||u.length>r.length&&u.length>20)&&u){c.push({type:"subheading",content:r});continue}if(/^\|.*\|$/.test(r)){if(/^\|[\s-:]+\|$/.test(r))continue;const p=r.split("|").filter(l=>l.trim()).map(l=>l.trim());if(p.length>0){const l=c[c.length-1];(l==null?void 0:l.type)==="table"&&l.tableRows?l.tableRows.push(p):c.push({type:"table",content:"",tableRows:[p]});continue}}c.push({type:"text",content:r})}return c}export{j as c,m as f,k as p};
