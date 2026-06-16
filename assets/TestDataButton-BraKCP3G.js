import{a as T,j as p,B as b,g as $}from"./index-Ln3Lf11T.js";import{F as k}from"./flask-conical-CnPDKjOC.js";const i=["Summit Performance Studio","Evergreen Wellness Center","Pacific Coast Coaching","Mountain View Med Spa","Harmony Physical Therapy","Elite Body Transformation","Rejuvenate Aesthetics","Apex Sports Medicine","Serenity Mental Health","Precision Dermatology"],l=["Austin","Denver","Phoenix","San Diego","Seattle","Miami","Nashville","Portland","Charlotte","Tampa"],r=[{name:"fitness",services:["12-Week Body Transformation Program","1-on-1 Personal Training Package","Online Coaching Membership","Group Performance Training"]},{name:"medspa",services:["Botox & Fillers Package","Laser Skin Rejuvenation","CoolSculpting Body Contouring","PRP Facial Treatment"]},{name:"chiropractic",services:["Spinal Decompression Therapy","Sports Injury Rehabilitation","Chronic Pain Management Program","Corrective Care Package"]},{name:"wellness",services:["Hormone Optimization Program","Weight Management System","IV Vitamin Therapy","Functional Medicine Consultation"]}],f=["Professional yet warm and reassuring","Confident and authoritative","Friendly and conversational","Educational and empowering"],m=["100% satisfaction guarantee with full refund within 30 days","Lifetime warranty on all work performed","Results guaranteed or your money back","Free touch-ups for 12 months post-treatment"],d=["Proprietary 3D-guided technology for precision results","Exclusive multi-phase treatment protocol developed over 15 years","AI-powered assessment system for personalized care plans","Patent-pending technique combining multiple modalities"];function e(t){return t[Math.floor(Math.random()*t.length)]}function g(t,o,n){const a=Math.floor(Math.random()*(n-o+1))+o;return[...t].sort(()=>.5-Math.random()).slice(0,a)}function h(t,o,n,a){const s=Math.floor(Math.random()*20)+3,c=e(["Johnson","Martinez","Williams","Chen","Patel","Thompson"]),u=`Business Name: ${t}
Location: ${o}
Years in Business: ${s}
Target Audience: Adults 35-65 seeking ${n.name==="medspa"?"aesthetic treatments":n.name==="chiropractic"?"pain relief solutions":n.name==="fitness"?"body transformation":"wellness services"}

Main Services: ${n.services.join(", ")}
Flagship Offer: ${a}

Biggest Challenge: Standing out from ${Math.floor(Math.random()*15)+5}+ competitors in the area
Goals: Increase ${a.toLowerCase()} cases by 40% in next 6 months`,v=`[Discovery Call Transcript - ${t}]
[Call with ${c}]

INTERVIEWER: What would you say sets you apart from competitors?

${c.toUpperCase()}: Great question. I think it's our attention to detail and follow-up care. We've invested heavily in the latest tools and systems.

INTERVIEWER: Tell me about your ideal patient.

${c.toUpperCase()}: Our sweet spot is the 40-60 age range, professionals who have the means and motivation to invest in themselves.

INTERVIEWER: What's your flagship offer right now?

${c.toUpperCase()}: Definitely our ${a}. It's been a game-changer for clients.`,w=`Sales Handoff Form - ${t}
Lead Source: Google Ads
First Contact Date: ${new Date().toLocaleDateString()}
Qualification Notes: High-intent prospect interested in ${a}
Budget Confirmed: Yes
Decision Timeline: Within 30 days
Key Objections Addressed: Pricing concerns resolved with financing options`;return{onboardingForm:u,onboardingTranscript:v,salesHandoffForm:w}}function C(){e(i);const t=e(l),o=e(r),n=e(o.services);return{productName:n,keyMessage:`Transform your life with ${n} - the permanent solution you've been searching for`,callToAction:"Book your free consultation today",price:`$${(Math.floor(Math.random()*15)+5)*1e3}`,testimonials:`"${n} completely changed my results in under 90 days." - Sarah M., ${t}`,guarantee:e(m),toneStyle:e(f),painPoints:`Not seeing the results despite putting in the work
Wasting money on solutions that don't work
Feeling stuck while competitors grow
Struggling to stand out in a crowded market`,differentiators:e(d)}}function S(){const t=e(i);e(l);const o=e(r),n=e(o.services);return{website:`https://${t.toLowerCase().replace(/\s+/g,"").replace(/[^a-z0-9]/g,"")}.com`,offer:n,socialProof:`"Best decision I ever made!" - John D.
"Life-changing results!" - Maria S.
Over 500+ successful patients`,keyBenefits:`Permanent solution
Natural-looking results
Minimal downtime
Expert care`,targetAudience:"Adults 40-65 seeking quality healthcare solutions",commonQuestions:[{id:crypto.randomUUID(),question:"How long does the treatment take?",answer:"Most treatments are completed in 1-2 sessions over 2-4 weeks."},{id:crypto.randomUUID(),question:"Is financing available?",answer:"Yes! We offer 0% APR financing for qualified patients."},{id:crypto.randomUUID(),question:"What's the recovery time?",answer:"Most patients return to normal activities within 24-48 hours."}]}}function M(){e(i);const t=e(l),o=e(r);return{service:e(o.services),targetAudience:`Adults 45-65 in ${t} area seeking ${o.name} solutions`,tone:e(["professional","friendly","urgent","educational"]),customPrompt:`Focus on transformation and results. Emphasize our ${e(d)}. Include social proof and urgency.`}}function D(){const t=e(i),o=e(r);return{prompt:`Generate hooks for promoting ${e(o.services)} at ${t}.

Target audience: Adults 40-60 with disposable income who value quality.

Focus on pain points like:
- Embarrassment about appearance
- Fear of aging
- Desire for confidence
- Previous failed solutions

Address questions such as: "Is it worth the investment?", "How long do results last?"

Client website for reference: https://${t.toLowerCase().replace(/\s+/g,"")}.com`}}function P(){const t=e(i),o=e(l),n=e(r),a=e(n.services),s=h(t,o,n,a);return{prompt:`Create static image ad concepts for ${a} at ${t}.

Target audience: Adults 40-60 seeking ${n.name} solutions.

Key pain points to address visually: embarrassment, discomfort, aging concerns.

Style: Clean, professional, trustworthy. Use before/after imagery concepts.

Platform: Instagram and Facebook feed ads.`,...s}}function A(){const t=e(i),o=e(r),n=e(o.services);return{prompt:`Create a professional ad image for ${t}.
Show a happy, confident person after ${n} treatment.
Modern, clean aesthetic with soft natural lighting.
Professional medical environment in the background.
Trustworthy and aspirational mood.`,size:"1024x1024",quality:"standard"}}function I(){const t=e(i),o=e(l),n=e(r),a=e(n.services),s=h(t,o,n,a);return{serviceName:a,industry:n.name==="medspa"||n.name==="chiropractic"?"healthcare":n.name==="fitness"?"fitness":"other",disclaimerType:e(["general","medical","results"]),additionalContext:`Target audience: Adults 40-65 in ${o}
Claims made: Transformation results, improved quality of life
Platforms: Meta Ads, Google Ads, Email marketing`,...s}}function N(){e(i);const t=e(l),o=e(r),n=e(o.services),a=(Math.floor(Math.random()*15)+5)*1e3,s=["perfect-webinar","lifestyle-authority","kbb-breakthrough","problem-agitate-solution","star-story-solution"];return{productDescription:`${n} is our flagship program designed to transform your life. Combining cutting-edge technology with personalized care, we deliver results that last.`,productName:n,productDetails:`A comprehensive ${o.name} solution that addresses the root cause, not just symptoms. Includes assessment, treatment, and ongoing support.`,targetAudience:"Adults 40-60 who have tried other solutions without success and are ready to invest in a permanent fix",uniqueMechanism:e(d),credibilityHook:`After treating over 1,000 patients in ${t}, we've discovered the real reason why most ${o.name} solutions fail...`,authoritySource:"Dr. Anderson, with 20+ years experience and featured in local news",relatabilityStatement:"If you've ever felt embarrassed or held back because of this issue, you're not alone...",storyPainPoints:["Feeling self-conscious in social situations","Avoiding activities you used to love","Spending money on solutions that didn't work","Worried it's only getting worse with time"],rockBottomMoment:"The moment I knew I had to find a better way was when a patient told me they hadn't smiled in a photo for 10 years...",accidentalDiscovery:"That's when I discovered an approach that combined the latest technology with personalized care protocols...",earlyStruggle:"At first, the results were inconsistent. We had to refine our process over hundreds of cases...",progressiveResults:["First, patients noticed improvement within the first week","By month two, the transformation was visible to everyone","At six months, patients reported life-changing confidence"],lifestyleChange:"Patients started doing things they hadn't done in years - smiling in photos, going out with friends, feeling confident at work",finalResult:"Today, we've helped over 1,000 patients achieve lasting results with our proven system",mainOfferName:`The ${n} Transformation System`,mainOfferDescription:"Everything you need for a complete transformation: assessment, treatment, and 12-month support",bonuses:["Free initial consultation ($500 value)","VIP support line for 12 months","Exclusive member pricing on future treatments"],valueAnchorPrice:`$${a*2}`,actualPrice:`$${a}`,guaranteeDetails:e(m),selectedFramework:e(s)}}function E(){const t=e(i),o=e(l);return{clientName:`${t} - ${o}`,website:`https://${t.toLowerCase().replace(/\s+/g,"").replace(/[^a-z0-9]/g,"")}.com`}}function F(){const t=e(i),o=e(l),n=e(r),a=e(n.services),s=h(t,o,n,a),c=`${t} - ${o}`,u=t.toLowerCase().replace(/\s+/g,"").replace(/[^a-z0-9]/g,"");return{clientName:c,website:`https://${u}.com`,productServiceName:a,pricingInfo:`Starting at $${(Math.floor(Math.random()*15)+5)*1e3}, financing available`,guaranteeRiskReversal:e(m),uniqueMechanism:e(d),bonusesInclusions:g(["Free initial consultation","VIP concierge service","Take-home care kit","Priority scheduling","Referral rewards"],2,4).join(", "),targetPlatforms:g(["Meta Ads","Google Ads","YouTube","TikTok","Email Marketing"],2,4),voiceTone:e(f),complianceNotes:'Must include "individual results may vary" disclaimer. Follow FTC guidelines for testimonials.',...s}}const y={"video-script-creator":C,"email-creator":S,"ad-copy-generator":M,"90-hooks":D,"static-image-copy":P,"static-image-creator":A,disclaimers:I,"high-converting-vsl":N,"reddit-icp-research":E,"content-pipeline":F};function R(t){const o=y[t];return o?o():(console.warn(`[TestData] No generator found for tool: ${t}. Add one to toolTestDataGenerators.ts`),null)}function x(t){return t in y}function q({toolId:t,onFillData:o,disabled:n=!1,className:a}){const{toast:s}=T(),c=()=>{const u=R(t);if(!u){s({title:"Test Data Unavailable",description:`No test data generator found for this tool (${t}). Please report this issue.`,variant:"destructive"});return}o(u),s({title:"Test data loaded",description:"Form filled with sample data for testing"})};return x(t)?p.jsxs(b,{type:"button",variant:"outline",size:"sm",onClick:c,disabled:n,className:$("gap-2 bg-background/50 backdrop-blur-sm border-border/30 hover:bg-accent/20 hover:border-primary/30 transition-colors",a),children:[p.jsx(k,{className:"h-4 w-4"}),"Fill Test Data"]}):null}export{q as T};
