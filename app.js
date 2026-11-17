/* ---------- helpers ---------- */
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function gbp(n){var neg=n<0;var v=Math.round(Math.abs(n)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return (neg?"-":"")+"£"+v;}
function pct(a,b){return b?Math.round(a/b*100):0;}
function bar(p,label){return '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+p+'" aria-label="'+esc(label)+'"><span style="width:'+p+'%"></span></div>';}
function figHtml(f){
 var n=f.f.replace(/ /g,"_");
 var src=CM+"Special:FilePath/"+encodeURIComponent(n)+"?width=1000";
 var full=CM+"Special:FilePath/"+encodeURIComponent(n);
 var page=CM+"File:"+encodeURIComponent(n);
 return '<figure class="fig"><a class="imgl" href="'+full+'" target="_blank" rel="noopener" aria-label="Open full-size image"><img loading="lazy" src="'+src+'" alt="'+esc(f.c)+'" onerror="this.style.display=\'none\';this.parentNode.insertAdjacentHTML(\'afterend\',\'<p class=&quot;noimg&quot;>This image could not load. Use the source link below.</p>\')"></a><figcaption>'+esc(f.c)+'<br><span>Image: '+esc(f.a)+' · <a href="'+page+'" target="_blank" rel="noopener">Source and licence</a></span></figcaption></figure>';
}

/* ---------- state ---------- */
var KEY="arh_v2";
var S={mods:{},weeks:{},harley:{},ready:{},cards:{},biz:{},calc:null};
try{var raw=localStorage.getItem(KEY);if(raw){var p0=JSON.parse(raw);for(var k0 in S){if(p0[k0]!==undefined)S[k0]=p0[k0];}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}

/* ---------- extra data ---------- */
var BIZTASKS=[
 "Ask Harley Academy about an alumni refresher and supervised re-entry",
 "Ask the Wellington Health & Wellbeing Centre whether injectable procedures are allowed in a rented room",
 "Approach established Hastings clinics about mentorship or sessional work",
 "Obtain written advice on my work-permission conditions for paid aesthetic work",
 "Obtain NHS secondary-employment approval",
 "Get real indemnity quotes that name toxin, filler and skin boosters"
];
var PRESETS=[
 {k:"Early practice",sessions:2,pps:2,spend:190,product:60,room:100,pay:2.5,fixed:150},
 {k:"Established part-time",sessions:2,pps:3,spend:200,product:60,room:100,pay:2.5,fixed:150},
 {k:"One day weekly",sessions:4,pps:3,spend:210,product:70,room:100,pay:3,fixed:150},
 {k:"Later stage",sessions:4,pps:4,spend:210,product:65,room:100,pay:3,fixed:150}
];
function calc(p){
 var pts=p.sessions*p.pps,rev=pts*p.spend,prod=pts*p.product,room=p.sessions*p.room,pay=rev*p.pay/100;
 var sur=rev-prod-room-pay-p.fixed;
 var contrib=p.spend*(1-p.pay/100)-p.product;
 var be=contrib>0?Math.ceil((p.sessions*p.room+p.fixed)/contrib):null;
 return {pts:pts,rev:rev,prod:prod,room:room,pay:pay,fixed:p.fixed,sur:sur,be:be};
}
var CAL=S.calc||{sessions:4,pps:3,spend:210,product:70,room:100,pay:3,fixed:150};
var SLIDERS=[
 ["sessions","Clinic sessions per month",1,8,1,""],
 ["pps","Patients per session",1,6,1,""],
 ["spend","Average spend per patient (£)",100,400,5,"£"],
 ["product","Product cost per patient (£)",30,120,5,"£"],
 ["room","Room hire per session (£)",50,250,10,"£"],
 ["pay","Card and payment costs (%)",0,5,0.5,"%"],
 ["fixed","Software, insurance and admin per month (£)",0,400,10,"£"]
];

/* ---------- flashcards ---------- */
var FC={filter:0,order:[],pos:0,shown:false};
function ck(i){return "c"+i;}
function box(i){return S.cards[ck(i)]||1;}
function buildOrder(){var idx=[];for(var i=0;i<CARDS.length;i++){if(FC.filter===0||CARDS[i][0]===FC.filter)idx.push(i);}
 idx.sort(function(a,b){var d=box(a)-box(b);return d!==0?d:Math.random()-0.5;});FC.order=idx;FC.pos=0;FC.shown=false;}
function mastered(mod){var t=0,m=0;for(var i=0;i<CARDS.length;i++){if(!mod||CARDS[i][0]===mod){t++;if(box(i)>=3)m++;}}return {t:t,m:m};}
function checkRow(g,id,label){return '<div class="check"><input type="checkbox" id="'+g+id+'" data-g="'+g+'" data-k="'+id+'"'+(S[g][id]?' checked':'')+'><label for="'+g+id+'">'+label+'</label></div>';}

/* ---------- views ---------- */
function viewHome(){
 var h='<div class="stack">';
 h+='<section class="hero"><div><div class="eyebrow">Doctor-led · Hastings · East Sussex</div><h1 style="margin-top:22px">Refresh. <em class="it">Re-enter.</em> Build.</h1><p class="lead">Your private hub for rebuilding Level 7 injectables knowledge, returning to supervised practice, and growing a small, premium, doctor-led aesthetics practice around GIM training and family life.</p><div class="btn-row"><a class="btn" href="#/modules">Start revising</a><a class="btn ghost" href="#/business">Business plan</a></div></div>';
 h+='<aside class="hero-panel" aria-label="At a glance"><div class="row"><div class="k">£1,800</div><div class="l">Launch budget, £200 reserve</div></div><div class="row"><div class="k">12 months</div><div class="l">To a working small practice</div></div><div class="row"><div class="k">1 to 2</div><div class="l">Sessions a month to begin</div></div></aside></section>';
 h+='<section class="stack-s"><div class="sec-head"><div class="eyebrow">Your guiding principles</div><h2>Three rules that protect everything else</h2></div><div class="grid">';
 h+='<div class="card dark"><h3>Training comes first</h3><p>GIM progress and ARCP evidence are protected. Aesthetics fits into small, fixed slots.</p></div>';
 h+='<div class="card dark"><h3>Supervised before solo</h3><p>Independent treatment starts only after documented competency sign-off, never a case count.</p></div>';
 h+='<div class="card dark"><h3>Only treat when reachable</h3><p>Book a patient only if you or a named colleague can be reached for the next two weeks.</p></div></div></section>';
 h+='<section class="stack-s"><div class="sec-head"><div class="eyebrow">Inside the hub</div><h2>Everything in one place</h2></div><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(190px,1fr))">';
 var tiles=[["#/plan","The plan","Clinical roadmap, eight-week refresher, readiness checklists."],["#/modules","Revision modules","Six illustrated modules with anatomy and technique images."],["#/cards","Flashcards","Cards with spaced repetition by module."],["#/business","Business plan","Hastings market, budget, live financial model, 12-month plan."],["#/progress","Progress","Everything you have ticked off, saved on this device."]];
 for(var i=0;i<tiles.length;i++)h+='<a class="card mod-card" href="'+tiles[i][0]+'"><h3>'+tiles[i][1]+'</h3><div style="color:var(--muted)">'+tiles[i][2]+'</div></a>';
 h+='</div></section>';
 h+='<p class="disc">This hub is a revision and planning aid, not clinical, legal, financial or regulatory advice. Check doses against product SmPCs, protocols against your Harley materials and national guidance, and rules against current GMC, MHRA, ASA, indemnity and local council requirements.</p></div>';
 return h;
}

function viewPlan(){
 var h='<div class="stack">';
 h+='<div><div class="eyebrow">The plan</div><h1 style="margin-top:20px">A paced return</h1><p class="lead">Clinical milestones decide when you launch, not the calendar. If GIM or family life gets heavy, move the aesthetic milestones back.</p></div>';
 var ph=[["Now to December","Rebuild the knowledge","About three hours a week. Use the eight-week programme below, recover your Harley records and list exactly what you were signed off on."],
 ["January","Set the foundations","Separate indemnity, employer declaration, GMC cosmetic guidance and a doctor-led mentor near Hastings. Check your work-permission conditions in writing."],
 ["February to April","Settle in, then supervised hands-on","February and March: no clinical aesthetics. From April, one mentored session a month: toxin first, then skin boosters, then filler."],
 ["May to September","First patients of your own","A rented room one half-day a fortnight, small low-risk sessions, monthly case review and a six-month go or no-go."],
 ["2028","Consider your own clinic","Only with recurring patients, predictable income and working capital."]];
 h+='<section class="tl">';
 for(var i=0;i<ph.length;i++)h+='<div class="tl-item card"><span class="chip">'+ph[i][0]+'</span><h3 style="margin-top:12px">'+ph[i][1]+'</h3><p>'+ph[i][2]+'</p></div>';
 h+='</section>';
 h+='<section class="stack-s"><div class="sec-head"><div class="eyebrow">Phase 1</div><h2>Eight-week refresher programme</h2><p class="lead" style="font-size:18px">Three sessions of 45 to 60 minutes a week. Suggested start Monday 23 November, finishing by mid-January.</p></div><div class="grid g4">';
 for(var w=0;w<WEEKS.length;w++){h+='<div class="card plain"><span class="chip gold">Week '+WEEKS[w].w+'</span><h4 style="margin-top:12px">'+WEEKS[w].t+'</h4>';for(var s=0;s<3;s++)h+=checkRow("weeks","w"+WEEKS[w].w+"s"+s,WEEKS[w].s[s]);h+='</div>';}
 h+='</div></section>';
 h+='<section class="grid g2"><div class="card"><h3>Recover your Harley records</h3><p>Ask Harley Academy for:</p>';
 for(var a=0;a<HARLEY.length;a++)h+=checkRow("harley","h"+a,HARLEY[a]);
 h+='</div><div class="card"><h3>Before your first solo patient</h3>';
 for(var b=0;b<READY.length;b++)h+=checkRow("ready","r"+b,READY[b]);
 h+='</div></section>';
 h+='<section class="stack-s"><div class="sec-head"><div class="eyebrow">Weekly rhythm</div><h2>How it fits at 80%</h2></div><div class="grid g4">';
 var wr=[["4 days","GIM training","Rota and on-call come first. Nothing aesthetic is booked around them."],["2 × 90 min","Study blocks","After bedtime, at fixed times. Short and regular beats occasional long sessions."],["1 in 2 weeks","Clinic half-day","Non-working day or Saturday morning, only when childcare is already covered."],["1 evening","Admin and case review","Monthly: update the log, review photos, send anything uncertain to your mentor."]];
 for(var c=0;c<wr.length;c++)h+='<div class="card plain stat"><div class="v">'+wr[c][0]+'</div><div class="t">'+wr[c][1]+'</div><p>'+wr[c][2]+'</p></div>';
 h+='</div><p class="warn" style="max-width:780px">No aesthetic appointments after a night shift or during GIM induction. Arrange childcare that still works when an NHS rota changes at short notice.</p></section></div>';
 return h;
}

function viewModules(){
 var h='<div class="stack-s"><div><div class="eyebrow">Revision</div><h1 style="margin-top:20px">Six <em class="it">modules</em></h1><p class="lead">Illustrated notes for each topic. Read, tick the module as reviewed, then test yourself with the flashcards.</p></div><div class="grid">';
 for(var i=0;i<MODULES.length;i++){var m=MODULES[i],mm=mastered(m.id),nf=0;for(var j=0;j<m.notes.length;j++)nf+=(m.notes[j].figs||[]).length;
  h+='<a class="card mod-card" href="#/module/'+m.id+'"><div class="num">'+m.id+'</div><h3>'+m.title+'</h3><div style="color:var(--muted)">'+m.short+'</div><div>'+(S.mods[m.id]?'<span class="chip sage">Reviewed</span> ':'')+'<span class="chip">'+nf+' images</span> <span class="chip gold">'+mm.m+' of '+mm.t+' cards</span></div></a>';}
 h+='</div></div>';return h;
}

function viewModule(id){
 var m=null;for(var i=0;i<MODULES.length;i++){if(MODULES[i].id===id)m=MODULES[i];}
 if(!m)return '<p>Module not found. <a href="#/modules">Back to modules</a></p>';
 var h='<div class="stack-s"><div><a href="#/modules">&larr; All modules</a><div class="eyebrow" style="margin-top:22px">Module '+m.id+' of 6</div><h1 style="margin-top:18px">'+m.title+'</h1><p class="lead">'+m.short+'</p></div><div class="card notes">';
 var gaps=[];
 for(var i2=0;i2<m.notes.length;i2++){var n=m.notes[i2];h+='<h3>'+n.h+'</h3><ul>';for(var j2=0;j2<n.items.length;j2++)h+='<li>'+esc(n.items[j2])+'</li>';h+='</ul>';
  if(n.figs&&n.figs.length){h+='<div class="figs">';for(var f=0;f<n.figs.length;f++)h+=figHtml(n.figs[f]);h+='</div>';}else gaps.push(n.h);}
 h+='<div class="callout">'+esc(m.callout)+'</div>';
 if(gaps.length)h+='<p class="noimg">Sections without an open-licence image yet: '+esc(gaps.join(", "))+'. Add pictures from your Harley materials for these.</p>';
 h+='</div><div class="card"><div class="check"><input type="checkbox" id="mods'+m.id+'" data-g="mods" data-k="'+m.id+'"'+(S.mods[m.id]?' checked':'')+'><label for="mods'+m.id+'">I have reviewed this module</label></div><div class="btn-row"><a class="btn" href="#/cards/'+m.id+'">Revise with flashcards</a>';
 if(m.id>1)h+='<a class="btn ghost" href="#/module/'+(m.id-1)+'">Previous</a>';
 if(m.id<6)h+='<a class="btn ghost" href="#/module/'+(m.id+1)+'">Next module</a>';
 h+='</div></div><p class="disc">Revision summary only. Check doses and protocols against your Harley materials, product SmPCs and national guidance. Images are from Wikimedia Commons, credited under each one.</p></div>';
 return h;
}

function viewCards(){
 if(!FC.order.length)buildOrder();
 var mm=mastered(FC.filter);
 var h='<div class="stack-s"><div><div class="eyebrow">Flashcards</div><h1 style="margin-top:20px">Test <em class="it">yourself</em></h1><p class="lead">Tap the card to reveal the answer, then mark it. Cards you miss come back sooner.</p></div><div class="filters" role="group" aria-label="Deck"><button type="button" data-filter="0" aria-pressed="'+(FC.filter===0)+'">All modules</button>';
 for(var i=0;i<MODULES.length;i++)h+='<button type="button" data-filter="'+MODULES[i].id+'" aria-pressed="'+(FC.filter===MODULES[i].id)+'">'+MODULES[i].id+'. '+MODULES[i].title+'</button>';
 h+='</div>';
 if(!FC.order.length){return h+'<p>No cards in this deck.</p></div>';}
 if(FC.pos>=FC.order.length){return h+'<div class="card"><h2>Deck complete</h2><p>Mastered '+mm.m+' of '+mm.t+' cards in this deck.</p><div class="btn-row"><button type="button" class="btn" data-act="restart">Go again</button><a class="btn ghost" href="#/progress">See progress</a></div></div></div>';}
 var c=CARDS[FC.order[FC.pos]];
 h+='<div style="color:var(--muted);font-size:14px" aria-live="polite">Card '+(FC.pos+1)+' of '+FC.order.length+' · Mastered '+mm.m+' of '+mm.t+'</div>';
 h+='<button type="button" class="fc-card" data-act="flip" aria-expanded="'+FC.shown+'"><span class="chip" style="align-self:flex-start">'+MODULES[c[0]-1].title+'</span><span class="fc-q">'+esc(c[1])+'</span>'+(FC.shown?'<span class="fc-a">'+esc(c[2])+'</span>':'<span class="fc-hint">Tap to reveal</span>')+'</button>';
 h+=FC.shown?'<div class="btn-row"><button type="button" class="btn rose" data-act="again">Again</button><button type="button" class="btn" data-act="got">Got it</button></div>':'<div class="btn-row"><button type="button" class="btn ghost" data-act="flip">Show answer</button><button type="button" class="btn ghost" data-act="skip">Skip</button></div>';
 return h+'</div>';
}

function calcOut(){
 var r=calc(CAL);var o='';
 o+='<table class="tbl"><tbody><tr><td>Patients per month</td><td class="n">'+r.pts+'</td></tr><tr><td>Revenue</td><td class="n">'+gbp(r.rev)+'</td></tr><tr><td>Product costs</td><td class="n">'+gbp(-r.prod)+'</td></tr><tr><td>Room hire</td><td class="n">'+gbp(-r.room)+'</td></tr><tr><td>Payment costs</td><td class="n">'+gbp(-r.pay)+'</td></tr><tr><td>Software, insurance, admin</td><td class="n">'+gbp(-r.fixed)+'</td></tr><tr class="tot"><td>Monthly operating surplus</td><td class="n">'+gbp(r.sur)+'</td></tr></tbody></table>';
 o+='<div class="grid" style="margin-top:20px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))"><div class="stat"><div class="v">'+gbp(r.sur*12)+'</div><div class="t">Annual surplus</div></div><div class="stat"><div class="v">'+(r.be===null?"n/a":r.be)+'</div><div class="t">Break-even patients a month</div></div></div>';
 return o;
}
function viewBusiness(){
 var h='<div class="stack">';
 h+='<div><div class="eyebrow">Business plan</div><h1 style="margin-top:20px">A lean launch in <em class="it">Hastings</em></h1><p class="lead">Independent doctor-led aesthetics on a sessional room-rental model, under £2,000 of starting capital, with Eastbourne considered only once Hastings works reliably.</p><div class="subnav" style="margin-top:28px" role="group" aria-label="Jump to section"><button type="button" data-scroll="b-market">Market</button><button type="button" data-scroll="b-model">Model</button><button type="button" data-scroll="b-budget">Budget</button><button type="button" data-scroll="b-finance">Finance</button><button type="button" data-scroll="b-menu">Menu</button><button type="button" data-scroll="b-patients">Patients</button><button type="button" data-scroll="b-year">12 months</button><button type="button" data-scroll="b-legal">Legal</button><button type="button" data-scroll="b-first">First steps</button></div></div>';
 h+='<section class="grid g4"><div class="card plain stat"><div class="v">£2,000</div><div class="t">Maximum capital</div></div><div class="card plain stat"><div class="v">12 months</div><div class="t">Development horizon</div></div><div class="card plain stat"><div class="v">1 to 2</div><div class="t">Sessions a month at first</div></div><div class="card plain stat"><div class="v">£0</div><div class="t">Premises or leases</div></div></section>';
 h+='<section class="grid"><div class="card dark"><h3>Spend on competence</h3><p>Training and supervision before appearances, branding or marketing.</p></div><div class="card dark"><h3>Rent, do not own</h3><p>A room in an established clinic keeps fixed costs close to zero.</p></div><div class="card dark"><h3>Patients before days</h3><p>Grow patient numbers before adding clinic days.</p></div></section>';
 h+='<p class="warn" style="max-width:820px"><strong>Gating issue:</strong> confirm your work-permission conditions and obtain any NHS secondary-employment approval in writing before any paid aesthetic activity. Resolve this before investing, not after launching.</p>';

 h+='<section id="b-market" class="stack-s"><div class="sec-head"><div class="eyebrow">1 · Market</div><h2>An established, competitive market</h2><p class="lead" style="font-size:18px">Existing practitioners already offer injectables, skin boosters and advanced skin treatments. That means demand exists, but you need a clear reason for patients to choose you.</p></div>';
 h+='<div class="card tbl-wrap"><h4>Advertised price benchmarks</h4><table class="tbl" style="margin-top:10px"><thead><tr><th>Treatment</th><th class="n">Hastings examples</th><th class="n">Eastbourne examples</th></tr></thead><tbody><tr><td>Anti-wrinkle, 1 area</td><td class="n">£130 to £190</td><td class="n">£150 to £210</td></tr><tr><td>Anti-wrinkle, 3 areas</td><td class="n">£190 to £280</td><td class="n">£195 to £320</td></tr><tr><td>Dermal filler, 1 ml</td><td class="n">£130 to £320</td><td class="n">£200 to £350</td></tr><tr><td>Skin boosters</td><td class="n">£125 to £300</td><td class="n">£150 to £300</td></tr></tbody></table><p class="disc" style="margin-top:14px">Advertised prices from the research you gave me, not recommended prices and not verified by me. Do not compete on price: compete on medical credibility, patient selection, conservative planning and continuity of care.</p></div>';
 h+='<div class="grid g4">';
 var comp=[["HSC Clinic","Hastings","Established skin and aesthetics clinic. Study its menu and patient experience.","https://www.hastingsskinclinic.co.uk/"],["La Cara Aesthetics","Hastings","Injectables and skin rejuvenation, closest to your treatment categories.","https://lacaraaesthetics.co.uk/price-list/"],["Skinworks Aesthetics","Hastings","Skin-focused aesthetics. Study its positioning and skin services.","https://www.skinworks-aesthetics.co.uk/"],["Arlington Aesthetic Clinic","Eastbourne","Doctor and nurse-led setting, an example of an established medical model.","https://injectablesbooking.co.uk/clinic/arlington-aesthetic-clinic"]];
 for(var i=0;i<comp.length;i++)h+='<div class="card plain"><span class="chip gold">'+comp[i][1]+'</span><h4 style="margin-top:12px">'+comp[i][0]+'</h4><p style="font-size:15.5px">'+comp[i][2]+'</p><p><a href="'+comp[i][3]+'" target="_blank" rel="noopener">Website</a></p></div>';
 h+='</div><p class="disc">Competitor details come from your pasted research and are unverified. Do not try to displace them: build a smaller practice with a distinctly medical identity.</p></section>';

 h+='<section id="b-model" class="stack-s"><div class="sec-head"><div class="eyebrow">2 · Model</div><h2>Start without premises</h2></div><div class="grid">';
 h+='<div class="card"><span class="chip">Stage 1 · Starting model</span><h3 style="margin-top:12px">Sessional practitioner</h3><p>One or two days a month in an established clinic. Ideal agreement: transparent room hire or revenue share, a compliant treatment room, clinical waste, handwashing and infection control, secure storage and emergency arrangements, and clear responsibility for records, prescriptions, stock and follow-up.</p></div>';
 h+='<div class="card"><span class="chip">Stage 2 · After demand</span><h3 style="margin-top:12px">Your own regular clinic day</h3><p>Rent a room every fortnight, then weekly if bookings justify it. You manage bookings, patient relationships, pricing, marketing, clinical documentation and accounts.</p></div>';
 h+='<div class="card"><span class="chip">Stage 3 · Long term</span><h3 style="margin-top:12px">Independent clinic</h3><p>Consider your own premises only with recurring patients, predictable income and enough working capital.</p></div></div>';
 h+='<div class="card blush"><h4>Where to approach first</h4><p class="disc" style="margin-top:6px">Prospective contacts from your research. None is a confirmed offer. Ask whether they permit medical injectable procedures, inspect the room, and get written confirmation that premises, facilities and insurance support what you will do.</p><div class="grid" style="margin-top:16px"><div><strong>The Wellington Health & Wellbeing Centre</strong><br>44 Wellington Square, Hastings<br>01424 442520<br><span style="color:var(--muted)">Multidisciplinary centre advertising practitioner rooms and room hire. First enquiry.</span></div><div><strong>Treatment Rooms at The Old Rectory</strong><br>Harold Road, Hastings<br><span style="color:var(--muted)">Check facilities and suitability for injectable procedures.</span></div><div><strong>Satin Healthcare</strong><br>62 George Street, Hastings<br><span style="color:var(--muted)">Explore a sessional doctor or mentorship arrangement, not only room hire.</span></div></div></div></section>';

 h+='<section id="b-budget" class="stack-s"><div class="sec-head"><div class="eyebrow">3 · Budget</div><h2>£1,800 planned, £200 in reserve</h2></div><div class="grid g2"><div class="card tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th class="n">Allowance</th></tr></thead><tbody><tr><td>Refresher and supervised training</td><td class="n">£650</td></tr><tr><td>Professional indemnity provision</td><td class="n">£400</td></tr><tr><td>Initial room hire and deposit</td><td class="n">£250</td></tr><tr><td>Booking and clinical record systems</td><td class="n">£100</td></tr><tr><td>Clinical governance and consumables</td><td class="n">£150</td></tr><tr><td>Professional advice and contingency</td><td class="n">£250</td></tr><tr class="tot"><td>Total planned allocation</td><td class="n">£1,800</td></tr><tr><td>Unallocated reserve</td><td class="n">£200</td></tr></tbody></table><p class="disc" style="margin-top:12px">Planning allowances, not quotations. Obtain real indemnity and training quotes first. If training costs more, cut marketing and equipment, never training.</p></div>';
 h+='<div class="card gold"><h4>Avoid spending on</h4><ul><li>A designed public website at launch</li><li>Logo and branding packages</li><li>Monthly premises contracts</li><li>Large injectable stock</li><li>Expensive aesthetic devices</li><li>Paid social media campaigns</li></ul><p class="warn" style="margin-top:18px">Do not buy botulinum toxin in advance. It is prescription-only and needs prescribing, procurement, storage and governance arrangements first.</p></div></div></section>';

 h+='<section id="b-finance" class="stack-s"><div class="sec-head"><div class="eyebrow">4 · Finance</div><h2>What could you realistically earn?</h2><p class="lead" style="font-size:18px">Conservative, illustrative figures once you are clinically and legally authorised to practise. Move the sliders to test your own assumptions.</p></div>';
 var pr=PRESETS.map(function(p){var r=calc(p);return {k:p.k,r:r};});var mx=Math.max.apply(null,pr.map(function(x){return x.r.rev;}));
 h+='<div class="grid g2"><div class="card"><h4>Scenarios</h4><div class="bars" style="margin-top:18px">';
 for(var i2=0;i2<pr.length;i2++)h+='<div class="br"><div>'+pr[i2].k+'</div><div class="tr"><div class="b rev" style="width:'+pct(pr[i2].r.rev,mx)+'%" title="Revenue"></div><div class="b sur" style="width:'+Math.max(2,pct(Math.max(pr[i2].r.sur,0),mx))+'%" title="Surplus"></div><div style="color:var(--muted);font-size:13px">'+gbp(pr[i2].r.rev)+' revenue · '+gbp(pr[i2].r.sur)+' surplus a month</div></div></div>';
 h+='</div><p class="disc" style="margin-top:20px">Beige bar: monthly revenue. Plum bar: monthly operating surplus, before tax, pension, student loan, financing and your own pay. Excludes one-off training and set-up costs. Room hire and product costs are modelling assumptions, not quotations.</p></div>';
 h+='<div class="card" id="calcbox"><h4>Your model</h4><div class="btn-row" style="margin-top:12px">';
 for(var q=0;q<PRESETS.length;q++)h+='<button type="button" class="btn ghost" style="min-height:40px;padding:6px 16px;font-size:14px" data-preset="'+q+'">'+PRESETS[q].k+'</button>';
 h+='</div>';
 for(var s=0;s<SLIDERS.length;s++){var sl=SLIDERS[s];h+='<div class="slider"><div class="top"><label for="sl-'+sl[0]+'">'+sl[1]+'</label><b id="v-'+sl[0]+'">'+CAL[sl[0]]+'</b></div><input type="range" id="sl-'+sl[0]+'" data-slider="'+sl[0]+'" min="'+sl[2]+'" max="'+sl[3]+'" step="'+sl[4]+'" value="'+CAL[sl[0]]+'"></div>';}
 h+='<div id="calcout" style="margin-top:14px">'+calcOut()+'</div></div></div>';
 h+='<p class="disc">I recomputed the later-stage scenario (four sessions, four patients, £210, £65 product cost, £100 room hire, 3% payments, £150 overheads): it gives about £1,669 a month, not the £1,280 in the research you gave me. Treat all figures as planning aids, not forecasts or guaranteed income, and do not make aesthetics income essential to household finances in year one.</p></section>';

 h+='<section id="b-menu" class="stack-s"><div class="sec-head"><div class="eyebrow">5 · Menu and pricing</div><h2>Three categories, medical quality</h2></div><div class="card tbl-wrap"><table class="tbl"><thead><tr><th>Category</th><th>Business approach</th></tr></thead><tbody><tr><td>Botulinum toxin</td><td>Consultation-led, subject to prescribing and advertising rules</td></tr><tr><td>Dermal fillers</td><td>Limited, carefully selected indications after supervised competency sign-off</td></tr><tr><td>Skin boosters</td><td>Selected products once product-specific training is refreshed</td></tr></tbody></table></div><div class="grid g2"><div class="card blush"><h4>Pricing</h4><p>Reflect product cost, clinical time, insurance, room hire, follow-up and local competition. Do not chase £130 filler offers or heavy discounting. Your proposition is medical quality, not cheap injectables.</p></div><div class="card blush"><h4>Advertising rules</h4><ul><li>You cannot advertise botulinum toxin medicines to the public, including indirectly through phrases such as "wrinkle-relaxing injections".</li><li>You can promote consultations for concerns such as wrinkles, subject to the advertising rules.</li><li>Filler marketing must be responsible and must not trivialise risks.</li></ul><p class="disc">See the ASA and CAP guidance on advertising botulinum toxin and aesthetic procedures.</p></div></div></section>';

 h+='<section id="b-patients" class="stack-s"><div class="sec-head"><div class="eyebrow">6 · Patients</div><h2>Your first 30 patients</h2></div><div class="grid"><div class="card"><span class="chip">Patients 1 to 10</span><h3 style="margin-top:12px">Network and referrals</h3><ul><li>Introduce your practice to appropriate local networks.</li><li>Build relationships with other healthcare and skin professionals.</li><li>Give proper consultations and follow-up.</li><li>Ask for genuine feedback, with consent.</li></ul></div><div class="card"><span class="chip">Patients 11 to 20</span><h3 style="margin-top:12px">Local visibility</h3><ul><li>Create a professional website.</li><li>Set up a Google Business Profile once you have a genuine eligible location.</li><li>Publish educational material on skin health and treatment safety.</li></ul></div><div class="card"><span class="chip">Patients 21 to 30</span><h3 style="margin-top:12px">Retention</h3><ul><li>Structured review appointments.</li><li>Secure clinical records for every patient.</li><li>Encourage referrals without inappropriate inducements.</li></ul></div></div><p class="disc">Do not buy patient lists or paid followers. Get specific consent for clinical photography and separate permission before any public use.</p></section>';

 h+='<section id="b-year" class="stack-s"><div class="sec-head"><div class="eyebrow">7 · Twelve months</div><h2>Commercial development plan</h2></div><div class="grid g4">';
 var yr=[["Months 1 to 3","Set up",["Refresher training","Clinical indemnity","Work-permission and NHS approval","Secure a mentor","Negotiate a sessional room"],"Keep spending within £2,000"],["Months 4 to 6","Clinical re-entry",["Supervised cases","Clinical documentation","Competency assessments","Independent practice only when signed off and authorised"],"Avoid fixed overheads"],["Months 7 to 9","Hastings launch",["Regular sessional clinic","First group of patients","Referral relationships","Monthly profitability review"],"Cover recurring operating costs"],["Months 10 to 12","Consolidation",["Move towards one session weekly if demand supports it","Evaluate Eastbourne","Review treatment profitability","Consider a dedicated room"],"A predictable monthly surplus"]];
 for(var y=0;y<yr.length;y++){h+='<div class="card"><span class="chip">'+yr[y][0]+'</span><h3 style="margin-top:12px">'+yr[y][1]+'</h3><ul>';for(var z=0;z<yr[y][2].length;z++)h+='<li>'+yr[y][2][z]+'</li>';h+='</ul><p style="margin-top:14px"><strong style="color:var(--rose)">Financial aim:</strong> '+yr[y][3]+'</p></div>';}
 h+='</div><p class="disc">Clinical milestones decide when you launch, not the calendar. If supervised re-entry takes longer, that is appropriate.</p></section>';

 h+='<section id="b-legal" class="stack-s"><div class="sec-head"><div class="eyebrow">8 · Legal</div><h2>Resolve this before you invest</h2></div><div class="grid g2"><div class="card gold"><h4>Get written advice on</h4><ul><li>Whether your proposed aesthetic clinical duties count as permitted additional work under your work-permission conditions.</li><li>Whether running a sole-trader or limited-company business is allowed under those conditions.</li><li>How your LTFT hours and non-working days interact with any hours limit on additional work, including business administration.</li><li>Whether your NHS employer requires advance approval.</li></ul><p class="disc" style="margin-top:12px">Being a registered doctor does not automatically make every business activity eligible.</p></div><div class="card blush"><h4>Prescribing and regulation</h4><ul><li>You must examine the patient yourself before prescribing injectable cosmetic medicines (GMC).</li><li>Follow the GMC cosmetic interventions guidance on competence, consent, follow-up and marketing.</li><li>Check the current England licensing position, CQC scope and local council rules before launching.</li><li>Confirm in writing that your indemnity covers private aesthetic procedures and complications.</li></ul></div></div></section>';

 h+='<section id="b-first" class="stack-s"><div class="sec-head"><div class="eyebrow">9 · First steps</div><h2>Three enquiries before any spending</h2></div><div class="grid"><div class="card"><span class="chip">Enquiry 1</span><h3 style="margin-top:12px">Harley Academy</h3><p>Ask for an alumni refresher programme and supervised clinical re-entry options.</p><p><a href="https://www.harleyacademy.com/" target="_blank" rel="noopener">harleyacademy.com</a></p></div><div class="card"><span class="chip">Enquiry 2</span><h3 style="margin-top:12px">Wellington Health & Wellbeing Centre</h3><p>Ask whether they offer sessional room rental suitable for doctor-led injectables.</p><p>01424 442520</p></div><div class="card"><span class="chip">Enquiry 3</span><h3 style="margin-top:12px">Established Hastings clinics</h3><p>Approach Satin Healthcare, HSC Clinic and others about mentorship, observation or sessional work.</p><p><a href="https://satinhealthcare.co.uk/aesthetic-treatments/" target="_blank" rel="noopener">Satin Healthcare</a> · <a href="https://www.hastingsskinclinic.co.uk/" target="_blank" rel="noopener">HSC Clinic</a></p></div></div><div class="card plain"><h4>Your action tracker</h4>';
 for(var t=0;t<BIZTASKS.length;t++)h+=checkRow("biz","t"+t,BIZTASKS[t]);
 h+='</div></section>';

 h+='<section class="stack-s"><div class="sec-head"><div class="eyebrow">10 · Brand</div><h2>A quiet, credible identity</h2></div><div class="brand-card"><div class="s">DOCTOR-LED · HASTINGS · EAST SUSSEX</div><div class="t">Medical Aesthetics</div><div class="u">Natural. Balanced. Individual.</div><p style="max-width:560px;margin:22px auto 0;color:#E3D3CF">Physician-led consultations, evidence-based aesthetic care and individualised treatment planning.</p></div><p class="disc">Communicate clinical credibility, discretion and natural results rather than a high-volume beauty business. Do not describe yourself as a consultant or specialist in aesthetic medicine unless that status is justified. Your immediate next step: secure the Harley refresher and a Hastings mentor.</p></section>';
 return h+'</div>';
}

function viewProgress(){
 var mr=0;for(var i=1;i<=6;i++)if(S.mods[i])mr++;
 var wd=0,wt=0;for(var w=0;w<WEEKS.length;w++)for(var s=0;s<3;s++){wt++;if(S.weeks["w"+WEEKS[w].w+"s"+s])wd++;}
 var all=mastered(0),hd=0,rd=0,bd=0;
 for(var a=0;a<HARLEY.length;a++)if(S.harley["h"+a])hd++;
 for(var b=0;b<READY.length;b++)if(S.ready["r"+b])rd++;
 for(var t=0;t<BIZTASKS.length;t++)if(S.biz["t"+t])bd++;
 var items=[["Modules reviewed",mr,6],["Study sessions",wd,wt],["Flashcards mastered",all.m,all.t],["Harley records requested",hd,HARLEY.length],["Ready for first solo patient",rd,READY.length],["Business actions done",bd,BIZTASKS.length]];
 var h='<div class="stack-s"><div><div class="eyebrow">Progress</div><h1 style="margin-top:20px">Where you <em class="it">are</em></h1><p class="lead">Saved in this browser only. Nothing is uploaded.</p></div><div class="grid">';
 for(var k=0;k<items.length;k++)h+='<div class="card"><div class="big">'+items[k][1]+'<span style="font-size:26px;color:var(--muted)"> / '+items[k][2]+'</span></div><p style="margin-top:6px">'+items[k][0]+'</p>'+bar(pct(items[k][1],items[k][2]),items[k][0])+'</div>';
 h+='</div><div class="card"><h3>Cards mastered by module</h3>';
 for(var m=0;m<MODULES.length;m++){var x=mastered(MODULES[m].id);h+='<div style="margin-top:16px"><div>'+MODULES[m].id+'. '+MODULES[m].title+' · '+x.m+' of '+x.t+'</div>'+bar(pct(x.m,x.t),MODULES[m].title)+'</div>';}
 h+='</div><div><button type="button" class="btn ghost" data-act="reset">Reset all progress</button></div></div>';
 return h;
}

/* ---------- router and events ---------- */
function route(){
 var parts=location.hash.replace(/^#\/?/,"").split("/");var v=parts[0]||"home";var nav="home",html="";
 if(v==="plan"){nav="plan";html=viewPlan();}
 else if(v==="modules"){nav="modules";html=viewModules();}
 else if(v==="module"){nav="modules";html=viewModule(parseInt(parts[1],10));}
 else if(v==="cards"){nav="cards";var f=parts[1]?parseInt(parts[1],10):FC.filter;if((!isNaN(f)&&f!==FC.filter)||!FC.order.length){FC.filter=isNaN(f)?0:f;buildOrder();}html=viewCards();}
 else if(v==="business"){nav="business";html=viewBusiness();}
 else if(v==="progress"){nav="progress";html=viewProgress();}
 else html=viewHome();
 document.getElementById("app").innerHTML=html;
 var links=document.querySelectorAll("nav a");
 for(var i=0;i<links.length;i++){if(links[i].getAttribute("data-nav")===nav)links[i].setAttribute("aria-current","page");else links[i].removeAttribute("aria-current");}
 window.scrollTo(0,0);
}
function rerenderKeep(){var y=window.scrollY,v=location.hash.replace(/^#\/?/,"").split("/")[0],app=document.getElementById("app");
 if(v==="cards")app.innerHTML=viewCards();else if(v==="progress")app.innerHTML=viewProgress();else return;window.scrollTo(0,y);}

document.addEventListener("change",function(e){var t=e.target;if(t.type!=="checkbox"||!t.getAttribute("data-g"))return;
 var g=t.getAttribute("data-g"),k=t.getAttribute("data-k");if(t.checked)S[g][k]=true;else delete S[g][k];save();});
document.addEventListener("input",function(e){var t=e.target;var sl=t.getAttribute&&t.getAttribute("data-slider");if(!sl)return;
 CAL[sl]=parseFloat(t.value);S.calc=CAL;save();document.getElementById("v-"+sl).textContent=CAL[sl];document.getElementById("calcout").innerHTML=calcOut();});
document.addEventListener("click",function(e){
 var sc=e.target.closest("[data-scroll]");if(sc){var el=document.getElementById(sc.getAttribute("data-scroll"));if(el)el.scrollIntoView({behavior:"smooth",block:"start"});return;}
 var ps=e.target.closest("[data-preset]");if(ps){var p=PRESETS[parseInt(ps.getAttribute("data-preset"),10)];for(var k in p){if(k!=="k")CAL[k]=p[k];}S.calc=CAL;save();
  for(var i=0;i<SLIDERS.length;i++){var id=SLIDERS[i][0];document.getElementById("sl-"+id).value=CAL[id];document.getElementById("v-"+id).textContent=CAL[id];}
  document.getElementById("calcout").innerHTML=calcOut();return;}
 var el2=e.target.closest("[data-act],[data-filter]");if(!el2)return;
 var f=el2.getAttribute("data-filter");if(f!==null){FC.filter=parseInt(f,10);buildOrder();rerenderKeep();return;}
 var a=el2.getAttribute("data-act");
 if(a==="flip"){FC.shown=!FC.shown;rerenderKeep();}
 else if(a==="again"||a==="got"){var ix=FC.order[FC.pos];S.cards[ck(ix)]=a==="got"?Math.min(3,box(ix)+1):1;save();FC.pos++;FC.shown=false;rerenderKeep();}
 else if(a==="skip"){FC.pos++;FC.shown=false;rerenderKeep();}
 else if(a==="restart"){buildOrder();rerenderKeep();}
 else if(a==="reset"){if(window.confirm("Reset all saved progress on this device?")){S={mods:{},weeks:{},harley:{},ready:{},cards:{},biz:{},calc:null};CAL={sessions:4,pps:3,spend:210,product:70,room:100,pay:3,fixed:150};save();FC.order=[];rerenderKeep();}}
});
window.addEventListener("hashchange",route);
route();
