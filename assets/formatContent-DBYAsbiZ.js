function h(s,e){let t=s;if(m(t)&&(t=$(t)),t.trim().startsWith("[")||t.includes('"type":"output_text"'))try{const n=JSON.parse(t),c=[];if(Array.isArray(n)){for(const o of n)if(o.role!=="user"){if(o.content&&Array.isArray(o.content))for(const i of o.content)i.type==="output_text"&&i.text&&c.push(i.text);typeof o.text=="string"&&c.push(o.text)}}c.length>0&&(t=c.join(`

`))}catch{}if(t=g(t),t=t.replace(/^#{1,6}\s+/gm,""),t=t.replace(/\*\*([^*]+)\*\*/g,"$1"),t=t.replace(new RegExp("(?<!\\*)\\*([^*\\n]+)\\*(?!\\*)","g"),"$1"),t=t.replace(/^\s*\*\s+/gm,"- "),t=t.replace(/\s*\(\s*\[[^\]]+\]\([^)]*\)\s*\)/g,""),t=t.replace(/\[([^\]]+)\]\([^)]*\)/g,"$1"),t=t.replace(/\(?\s*https?:\/\/\S+\s*\)?/g,""),t=t.replace(/([a-zA-Z"')\]][.!?])\s*([A-Z][^:\n]{2,50}:)\s*/g,`$1

$2
`),t=t.replace(new RegExp(`(?<=[a-zA-Z"')\\]][.!?])\\s*([A-Z][a-zA-Z \\t()]+:)\\s+(?="|\\w)`,"g"),`

$1
`),t=t.replace(/([^\n])\n([A-Z][A-Z\s]{3,}:?)\s*\n/g,`$1

$2
`),t=t.replace(/([^\n])\n([A-Z][^:\n]*:)\s*\n/g,`$1

$2
`),t=t.replace(/^(\d+[.)])[ \t]*\n+[ \t]*(?=\S)/gm,"$1 "),t=t.replace(/(\d+\.)\s*\n(\d+\.)/g,`$1

$2`),e){const n=e.isMobile?1:e.maxSentencesPerLine??2;t=C(t,n)}return t=t.replace(/\n{4,}/g,`


`),t}function m(s){const e=s.trim();return e.includes('"scriptNumber"')||e.includes('"bodyCopy"')||e.includes('"emailNumber"')||e.includes('"hooks":')||e.includes('"cta":')||e.includes('"subject":')||e.includes('"preheader":')||e.startsWith("[{")&&e.endsWith("}]")||e.startsWith("{")&&e.includes('"body"')}function $(s){var e,t,n,c;try{let o=s.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim();const i=JSON.parse(o);return Array.isArray(i)&&((e=i[0])==null?void 0:e.scriptNumber)!==void 0?y(i):Array.isArray(i)&&((t=i[0])==null?void 0:t.bodyCopy)!==void 0?A(i):Array.isArray(i)&&(((n=i[0])==null?void 0:n.emailNumber)!==void 0||((c=i[0])==null?void 0:c.subject)!==void 0)?b(i):i.subject!==void 0||i.body!==void 0?d(i,1):f(i)}catch{return g(s)}}function y(s){return s.map((e,t)=>{const n=e.scriptNumber||t+1,c=e.title||`Script ${n}`;let o=`Script ${n}: ${c}

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


`)}function A(s){return s.map((e,t)=>{var o;let n=`Ad Variation ${t+1}

`;e.hooks&&Array.isArray(e.hooks)&&(n+=`Hooks
`,e.hooks.forEach(i=>{n+=`- ${a(i)}
`}),n+=`
`),e.bodyCopy&&(n+=`Body Copy
${a(e.bodyCopy)}

`),e.cta&&(n+=`Call to Action
${a(e.cta)}

`),n+=`Copy-Ready Version
`;const c=((o=e.hooks)==null?void 0:o.map(i=>a(i)).join(" | "))||"";return n+=`${c}

${a(e.bodyCopy)||""}

${a(e.cta)||""}`,n.trim()}).join(`


`)}function b(s){return s.map((e,t)=>{const n=e.emailNumber||t+1;return d(e,n)}).join(`


`)}function d(s,e){const t=s.subject||"Untitled Email";let n=`Email ${e}: ${t}

`;return s.preheader&&(n+=`Preheader
${a(s.preheader)}

`),s.body&&(n+=`Body
${a(s.body)}

`),s.cta&&(n+=`Call to Action
${a(s.cta)}

`),s.ps&&(n+=`P.S.
${a(s.ps)}
`),n.trim()}function f(s,e=0){if(typeof s=="string")return a(s);if(typeof s!="object"||s===null)return String(s);if(Array.isArray(s))return s.map((n,c)=>{const o=f(n,e+1);return typeof n=="object"?`${c+1}. ${o}`:`- ${o}`}).join(`
`);const t=[];for(const[n,c]of Object.entries(s)){if(n.match(/Number$|^id$|^_/i))continue;const o=n.replace(/([A-Z])/g," $1").replace(/_/g," ").replace(/^\s/,"").split(" ").map(r=>r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()).join(" "),i=f(c,e+1);i&&t.push(`${o}
${i}`)}return t.join(`

`)}function a(s){return s?typeof s!="string"?String(s):s.replace(/\\n\\n/g,`

`).replace(/\\n/g,`
`).replace(/\\"/g,'"').replace(/^["']|["']$/g,"").replace(/\*\*/g,"").replace(new RegExp("(?<!\\*)\\*(?!\\*)","g"),"").replace(/\[([^\]]+)\]/g,"$1").replace(/^\d+\.\s*$/gm,"").replace(/\n{4,}/g,`


`).trim():""}function g(s){return s.replace(/"(\w+)":\s*"([^"]+)"/g,`$1
$2
`).replace(/"(\w+)":\s*/g,`
$1
`).replace(/^"(.*)"$/gm,"$1").replace(/",\s*$/gm,"").replace(/^\s*[{}]\s*$/gm,"").replace(/^\s*[{}],?\s*$/gm,"").replace(/^\s*[\[\]]\s*$/gm,"").replace(/^\s*[\[\]],?\s*$/gm,"").replace(/\\n\\n/g,`

`).replace(/\\n/g,`
`).replace(/\n{4,}/g,`


`).trim()}function C(s,e){return s.split(/\n{2,}/).map(n=>{if(/^[-•\d]/.test(n.trim())||n.length<100)return n;const c=n.split(new RegExp("(?<=[.!?])\\s+(?=[A-Z])")),o=[];for(let i=0;i<c.length;i+=e){const r=c.slice(i,i+e);o.push(r.join(" "))}return o.join(`
`)}).join(`

`)}function x(s,e){const n=h(s,e).split(`
`),c=[];let o=0;for(let i=0;i<n.length;i++){const r=n[i].trim();if(!r)continue;if(/^\d+[\.\)]\s+/.test(r)){const u=r.match(/^(\d+[\.\)])\s+(.*)$/);if(u){o++,c.push({type:"numbered",content:u[2].trim(),index:o,originalNumber:u[1]});continue}}else o=0;if(/^[-•]\s+/.test(r)){c.push({type:"bullet",content:r.replace(/^[-•]\s+/,"")});continue}if(r.endsWith(":")&&r.length<80&&!r.includes(".")||r===r.toUpperCase()&&r.length<60&&r.length>4&&/[A-Z]{2,}/.test(r)||/^[A-Z][a-zA-Z\s]+:$/.test(r)||/^[A-Z][a-zA-Z\s()]+:\s*$/.test(r)||/^(Section|Part|Category|Type|Group|Phase)\s*\d*[:.]?\s*$/i.test(r)||/^(Motivators?|Fears?|Goals?|Desires?|Beliefs?|Objections?|Challenges?|Frustrations?|Pain\s*Points?|Benefits?|Demographics?|Psychographics?|Behaviors?|Preferences?|Values?|Needs?|Wants?|Concerns?|Barriers?|Triggers?|Keywords?|Interests?|Hobbies?|Lifestyle|Income|Education|Occupation|Location|Gender|Age)$/i.test(r)){c.push({type:"heading",content:r.replace(/:$/,"")});continue}const p=i+1<n.length?n[i+1].trim():"";if(r.length>=4&&r.length<80&&!r.endsWith(".")&&!r.endsWith(",")&&!r.endsWith("!")&&!r.endsWith("?")&&/^[A-Z]/.test(r)&&!/\b(is|are|was|were|has|have|had|can|will|would|could|should|offers?|provides?|includes?|features?|delivers?|ensures?|creates?|makes?|gives?|helps?|allows?|enables?)\b/i.test(r)&&(/^[A-Z][a-z]+$/.test(r)&&/^[-•]\s+/.test(p)||/^[-•]\s+/.test(p)||/^\d+[\.\)]\s+/.test(p)||/^(Hooks?|Headlines?|Ideas?|Tips?|Examples?|Scripts?|Copy|Ads?|Benefits?|Features?|Reasons?|Ways?)\s+(Addressing|For|About|Featuring|Highlighting|Using|Based|Targeting|That|To|With)/i.test(r)||/^([A-Z][a-z]+\s+){1,4}[A-Z][a-z]+$/.test(r)||p.length>r.length&&p.length>20)&&p){c.push({type:"subheading",content:r});continue}if(/^\|.*\|$/.test(r)){if(/^\|[\s-:]+\|$/.test(r))continue;const u=r.split("|").filter(l=>l.trim()).map(l=>l.trim());if(u.length>0){const l=c[c.length-1];(l==null?void 0:l.type)==="table"&&l.tableRows?l.tableRows.push(u):c.push({type:"table",content:"",tableRows:[u]});continue}}c.push({type:"text",content:r})}return c}export{h as f,x as p};
