/* Practice quiz, scenarios and planning space. Uses S, save(), esc() from app.js */
(function(){
var DAYS=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var LAUNCH=[
["Legal and permissions",["Written advice on whether private aesthetic work is allowed under my work-permission conditions","NHS employer secondary-work declaration or approval","Check whether sole trader or limited company is allowed","Check current England licensing position and local council rules"]],
["Indemnity and regulation",["Indemnity quotes naming toxin, filler and skin boosters","Indemnity confirmed in writing before first patient","Check CQC scope for what I will offer","Register with the ICO and plan data protection for records"]],
["Clinical governance",["Mentor or supervisor agreed near Hastings","Emergency protocol, hyaluronidase and adrenaline plan written","Consent, photo consent, aftercare and records templates ready","Prescribing and supply arrangements for toxin agreed and compliant","Clinical waste, sharps and infection control arrangements agreed"]],
["Premises",["Enquire at the Wellington Health and Wellbeing Centre about injectable procedures","Enquire at other Hastings rooms","Visit rooms and check handwashing, storage and emergency access","Written room-hire terms agreed"]],
["Money",["Training and supervision costs quoted","Booking and records system chosen","Budget tracked against the 1,800 pound plan","Tax and accounting arrangements checked with an adviser"]],
["Marketing",["Consultation-led wording that avoids naming toxin to the public","Photo consent and public-use consent wording ready","Simple profile or website only when ready to treat"]]
];
var TYPES=["Observation","Supervised treatment","Mentor session","Solo treatment","Reflection","Study or CPD"];
var TREAT=["Botulinum toxin","Dermal filler","Skin booster","Peel","Microneedling","Consultation only","Other"];
var COMP=["Consultation and consent","Facial assessment","Toxin technique","Filler technique","Skin booster technique","Complication recognition","Hyaluronidase and emergency response","Record keeping"];
if(!S.plan)S.plan={};if(!S.log)S.log=[];if(!S.launch)S.launch={};if(!S.quiz)S.quiz={};if(!S.dates)S.dates={};if(!S.ptab)S.ptab="week";
var Q={mod:0,weak:false,order:[],pos:0,ans:null,tab:"quiz"};
function qid(i){return "q"+i;}
function buildQ(){var idx=[];for(var i=0;i<QBANK.length;i++){var s=S.quiz[qid(i)];if(Q.mod&&QBANK[i].m!==Q.mod)continue;if(Q.weak&&!(s&&s.w>0&&!s.l))continue;idx.push(i);}
 for(var j=idx.length-1;j>0;j--){var k=Math.floor(Math.random()*(j+1));var t=idx[j];idx[j]=idx[k];idx[k]=t;}Q.order=idx;Q.pos=0;Q.ans=null;}
function qstats(){var a=0,r=0;for(var i=0;i<QBANK.length;i++){var s=S.quiz[qid(i)];if(s){a++;if(s.l)r++;}}return {a:a,r:r,t:QBANK.length};}
window.viewQuiz=function(){
 if(!Q.order.length&&!Q.built){buildQ();Q.built=true;}
 var st=qstats();
 var h='<div class="stack-s"><div><div class="eyebrow">Practice</div><h1 style="margin-top:20px">Exam-style <em class="it">questions</em></h1><p class="lead">Single-best-answer questions and clinical scenarios in my own words. They test the same ideas as the course, not its wording.</p></div>';
 h+='<div class="filters" role="group" aria-label="Section"><button type="button" data-q="tab:quiz" aria-pressed="'+(Q.tab==="quiz")+'">Questions</button><button type="button" data-q="tab:scen" aria-pressed="'+(Q.tab==="scen")+'">Scenarios</button></div>';
 if(Q.tab==="scen"){
  h+='<p class="disc">Think through your own answer first, then open the model response. Doses are deliberately left to your protocol and the product information.</p><div class="grid g2">';
  for(var i=0;i<SCEN.length;i++){var c=SCEN[i];h+='<div class="card"><h3>'+esc(c.t)+'</h3><p>'+esc(c.stem)+'</p><details style="margin-top:14px"><summary style="cursor:pointer;color:var(--rose);font-weight:600;min-height:44px">Show model response</summary><ol>';for(var s=0;s<c.steps.length;s++)h+='<li>'+esc(c.steps[s])+'</li>';h+='</ol><p class="warn">'+esc(c.watch)+'</p></details></div>';}
  return h+'</div></div>';
 }
 h+='<div class="filters" role="group" aria-label="Module"><button type="button" data-q="mod:0" aria-pressed="'+(Q.mod===0)+'">All</button>';
 for(var m=0;m<MODULES.length;m++)h+='<button type="button" data-q="mod:'+MODULES[m].id+'" aria-pressed="'+(Q.mod===MODULES[m].id)+'">'+MODULES[m].id+'. '+esc(MODULES[m].title)+'</button>';
 h+='<button type="button" data-q="weak" aria-pressed="'+Q.weak+'">Missed ones only</button></div>';
 h+='<div style="color:var(--muted);font-size:14px">Answered '+st.a+' of '+st.t+' · currently correct '+st.r+'</div>';
 if(!Q.order.length)return h+'<div class="card"><p>No questions in this selection yet.</p></div></div>';
 if(Q.pos>=Q.order.length)return h+'<div class="card"><h2>Set complete</h2><p>Currently correct: '+st.r+' of '+st.t+' answered overall.</p><div class="btn-row"><button type="button" class="btn" data-q="again">Go again</button></div></div></div>';
 var qi=Q.order[Q.pos],q=QBANK[qi];
 h+='<div class="card"><span class="chip">'+esc(MODULES[q.m-1].title)+'</span><div class="fc-q" style="margin-top:14px;font-size:30px">'+esc(q.q)+'</div><div class="stack-s" style="gap:10px;margin-top:20px">';
 for(var o=0;o<q.o.length;o++){var sel=Q.ans!==null,right=o===q.a,pick=Q.ans===o;
  var sty=sel?(right?'background:var(--sagebg);border-color:var(--sage)':(pick?'background:var(--rosebg);border-color:var(--rose)':'')):'';
  h+='<button type="button" class="btn ghost" style="justify-content:flex-start;text-align:left;border-radius:14px;'+sty+'" data-q="ans:'+o+'"'+(sel?' disabled':'')+'>'+String.fromCharCode(65+o)+'. '+esc(q.o[o])+'</button>';}
 h+='</div>';
 if(Q.ans!==null)h+='<p class="callout" role="status"><strong>'+(Q.ans===q.a?'Correct. ':'Not quite. ')+'</strong>'+esc(q.e)+'</p><div class="btn-row"><button type="button" class="btn" data-q="next">Next question</button></div>';
 h+='<div style="color:var(--muted);font-size:14px;margin-top:14px">Question '+(Q.pos+1)+' of '+Q.order.length+'</div></div></div>';
 return h;
};
function ds(iso){return iso?new Date(iso+"T00:00:00"):null;}
function daysTo(iso){var d=ds(iso);if(!d)return null;var n=new Date();n.setHours(0,0,0,0);return Math.round((d-n)/86400000);}
function fmt(iso){var d=ds(iso);return d?d.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}):"";}
function weekNow(){var start=new Date("2026-11-23T00:00:00"),n=new Date();var w=Math.floor((n-start)/(7*86400000))+1;return w;}
window.viewPlanner=function(){
 var t=S.ptab;
 var h='<div class="stack-s"><div><div class="eyebrow">Planning space</div><h1 style="margin-top:20px">Plan, <em class="it">log</em>, launch</h1><p class="lead">Saved only in this browser. Do not put patient names or identifiers anywhere on this site.</p></div><div class="filters" role="group" aria-label="Planner sections">';
 var tabs=[["week","Study week"],["log","Practice log"],["launch","Launch tasks"],["dates","Dates"]];
 for(var i=0;i<tabs.length;i++)h+='<button type="button" data-p="tab:'+tabs[i][0]+'" aria-pressed="'+(t===tabs[i][0])+'">'+tabs[i][1]+'</button>';
 h+='</div>';
 if(t==="week"){
  var w=weekNow(),prog=WEEKS[Math.min(Math.max(w,1),WEEKS.length)-1];
  h+='<div class="card blush"><span class="chip gold">'+(w<1?'Programme starts Monday 23 November':(w>WEEKS.length?'Refresher complete: keep revising weekly':'Programme week '+w))+'</span><h3 style="margin-top:12px">'+esc(prog.t)+'</h3><ul>';
  for(var s=0;s<prog.s.length;s++)h+='<li>'+esc(prog.s[s])+'</li>';
  h+='</ul></div><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">';
  for(var d=0;d<7;d++){var list=S.plan[d]||[];
   h+='<div class="card plain"><h4>'+DAYS[d]+'</h4>';
   for(var k=0;k<list.length;k++)h+='<div class="check"><input type="checkbox" id="pl'+d+'_'+k+'" data-p="tick:'+d+':'+k+'"'+(list[k].d?' checked':'')+'><label for="pl'+d+'_'+k+'">'+esc(list[k].t)+'</label><button type="button" class="btn ghost" style="min-height:32px;padding:0 10px;font-size:13px;margin-left:auto" data-p="del:'+d+':'+k+'" aria-label="Remove task">x</button></div>';
   h+='<div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap"><input type="text" id="pin'+d+'" placeholder="Add a block" style="flex:1 1 140px;min-width:0;min-height:44px;border:1px solid var(--line);border-radius:12px;padding:0 12px;font:inherit"><button type="button" class="btn" style="min-height:44px;padding:0 16px" data-p="add:'+d+'">Add</button></div></div>';}
  h+='</div><p class="disc">Aim for three study blocks and one revision quiz a week. Move blocks when GIM, on-call or the boys need you: a missed block is moved, not failed.</p>';
 }
 if(t==="log"){
  var cnt={};for(var l=0;l<S.log.length;l++)cnt[S.log[l].type]=(cnt[S.log[l].type]||0)+1;
  h+='<div class="grid g4">';for(var y=0;y<TYPES.length;y++)h+='<div class="card plain stat"><div class="v">'+(cnt[TYPES[y]]||0)+'</div><div class="t">'+TYPES[y]+'</div></div>';
  h+='</div><div class="card"><h3>Add an entry</h3><p class="disc">No patient names, dates of birth or identifiers. Use case numbers.</p><div class="grid" style="margin-top:14px">';
  h+='<label>Date<br><input type="date" id="lg-date" style="min-height:44px;width:100%;border:1px solid var(--line);border-radius:12px;padding:0 10px;font:inherit"></label>';
  h+='<label>Type<br><select id="lg-type" style="min-height:44px;width:100%;border:1px solid var(--line);border-radius:12px;padding:0 10px;font:inherit">'+TYPES.map(function(x){return '<option>'+x+'</option>';}).join('')+'</select></label>';
  h+='<label>Treatment<br><select id="lg-treat" style="min-height:44px;width:100%;border:1px solid var(--line);border-radius:12px;padding:0 10px;font:inherit">'+TREAT.map(function(x){return '<option>'+x+'</option>';}).join('')+'</select></label>';
  h+='<label>Competency practised<br><select id="lg-comp" style="min-height:44px;width:100%;border:1px solid var(--line);border-radius:12px;padding:0 10px;font:inherit">'+COMP.map(function(x){return '<option>'+x+'</option>';}).join('')+'</select></label></div>';
  h+='<label style="display:block;margin-top:14px">What went well, what I would change, mentor feedback<br><textarea id="lg-note" rows="4" style="width:100%;border:1px solid var(--line);border-radius:12px;padding:12px;font:inherit"></textarea></label><div class="btn-row"><button type="button" class="btn" data-p="addlog">Save entry</button></div></div>';
  h+='<div class="stack-s">';
  if(!S.log.length)h+='<p class="disc">No entries yet.</p>';
  for(var e=S.log.length-1;e>=0;e--){var en=S.log[e];h+='<div class="card plain"><span class="chip gold">'+esc(en.type)+'</span> <span class="chip">'+esc(en.treat)+'</span> <span class="chip sage">'+esc(en.comp)+'</span><p style="margin-top:10px"><strong>'+esc(en.date?fmt(en.date):"No date")+'</strong></p><p>'+esc(en.note||"")+'</p><button type="button" class="btn ghost" style="min-height:40px" data-p="dellog:'+e+'">Delete</button></div>';}
  h+='</div>';
 }
 if(t==="launch"){
  var tot=0,dn=0;
  for(var g=0;g<LAUNCH.length;g++)for(var q=0;q<LAUNCH[g][1].length;q++){tot++;if(S.launch["l"+g+"_"+q])dn++;}
  h+='<div class="card"><div class="big">'+dn+'<span style="font-size:26px;color:var(--muted)"> / '+tot+'</span></div><p>Launch tasks done</p>'+bar(pct(dn,tot),"Launch tasks")+'</div><div class="grid g2">';
  for(var g2=0;g2<LAUNCH.length;g2++){h+='<div class="card"><h3>'+LAUNCH[g2][0]+'</h3>';for(var q2=0;q2<LAUNCH[g2][1].length;q2++){var key="l"+g2+"_"+q2;h+='<div class="check"><input type="checkbox" id="'+key+'" data-p="lt:'+key+'"'+(S.launch[key]?' checked':'')+'><label for="'+key+'">'+esc(LAUNCH[g2][1][q2])+'</label></div>';}h+='</div>';}
  h+='</div><p class="disc">Resolve permissions, indemnity and governance before any spending or patient booking. Check each item with the relevant regulator, indemnifier or adviser.</p>';
 }
 if(t==="dates"){
  var ev=[["Refresher programme starts","2026-11-23",true],["Move to Hastings","relo",false],["GIM training starts","gim",false]];
  h+='<div class="grid g2"><div class="card"><h3>Key dates</h3><p class="disc">Set the two dates you know. Everything else counts down from today.</p>';
  h+='<label style="display:block;margin-top:14px">Moving to Hastings<br><input type="date" id="dt-relo" value="'+(S.dates.relo||"")+'" data-p="date:relo" style="min-height:44px;width:100%;border:1px solid var(--line);border-radius:12px;padding:0 10px;font:inherit"></label>';
  h+='<label style="display:block;margin-top:14px">GIM training starts<br><input type="date" id="dt-gim" value="'+(S.dates.gim||"")+'" data-p="date:gim" style="min-height:44px;width:100%;border:1px solid var(--line);border-radius:12px;padding:0 10px;font:inherit"></label>';
  h+='<label style="display:block;margin-top:14px">Own milestone (for example mentor meeting)<br><input type="text" id="dt-lab" placeholder="Label" style="min-height:44px;width:100%;border:1px solid var(--line);border-radius:12px;padding:0 10px;font:inherit"><input type="date" id="dt-ms" style="min-height:44px;width:100%;margin-top:8px;border:1px solid var(--line);border-radius:12px;padding:0 10px;font:inherit"></label><div class="btn-row"><button type="button" class="btn" data-p="addms">Add milestone</button></div></div>';
  var items=[{l:"Refresher programme starts",d:"2026-11-23"}];
  if(S.dates.relo)items.push({l:"Moving to Hastings",d:S.dates.relo});
  if(S.dates.gim)items.push({l:"GIM training starts",d:S.dates.gim});
  var ms=S.dates.ms||[];for(var a=0;a<ms.length;a++)items.push({l:ms[a].l,d:ms[a].d,i:a});
  items.sort(function(x,y){return x.d<y.d?-1:1;});
  h+='<div class="card"><h3>Countdown</h3>';
  for(var b=0;b<items.length;b++){var n=daysTo(items[b].d);h+='<div class="check" style="justify-content:space-between"><div><strong>'+esc(items[b].l)+'</strong><br><span style="color:var(--muted);font-size:14px">'+fmt(items[b].d)+'</span></div><div style="text-align:right"><span class="chip '+(n<0?'sage':'gold')+'">'+(n<0?Math.abs(n)+' days ago':(n===0?'Today':n+' days'))+'</span>'+(items[b].i!==undefined?'<br><button type="button" class="btn ghost" style="min-height:32px;padding:0 10px;font-size:13px;margin-top:6px" data-p="delms:'+items[b].i+'">Remove</button>':'')+'</div></div>';}
  h+='</div></div>';
 }
 return h+'</div>';
};
function paint(){var y=window.scrollY,v=location.hash.replace(/^#\/?/,"").split("/")[0],app=document.getElementById("app");
 if(v==="planner")app.innerHTML=viewPlanner();else if(v==="practice")app.innerHTML=viewQuiz();else return;window.scrollTo(0,y);}
document.addEventListener("click",function(e){
 var el=e.target.closest("[data-q],[data-p]");if(!el)return;
 var q=el.getAttribute("data-q"),p=el.getAttribute("data-p");
 if(q!==null){var x=q.split(":");
  if(x[0]==="tab")Q.tab=x[1];
  else if(x[0]==="mod"){Q.mod=parseInt(x[1],10);buildQ();}
  else if(x[0]==="weak"){Q.weak=!Q.weak;buildQ();}
  else if(x[0]==="again"){buildQ();}
  else if(x[0]==="next"){Q.pos++;Q.ans=null;}
  else if(x[0]==="ans"&&Q.ans===null){var i=Q.order[Q.pos],o=parseInt(x[1],10),ok=o===QBANK[i].a;Q.ans=o;var s=S.quiz[qid(i)]||{r:0,w:0,l:false};if(ok)s.r++;else s.w++;s.l=ok;S.quiz[qid(i)]=s;save();}
  paint();return;}
 if(p!==null){var z=p.split(":");
  if(z[0]==="tab"){S.ptab=z[1];save();}
  else if(z[0]==="add"){var inp=document.getElementById("pin"+z[1]);if(inp&&inp.value.trim()){(S.plan[z[1]]=S.plan[z[1]]||[]).push({t:inp.value.trim(),d:false});save();}}
  else if(z[0]==="del"){S.plan[z[1]].splice(parseInt(z[2],10),1);save();}
  else if(z[0]==="addlog"){var g=function(id){return document.getElementById(id).value;};S.log.push({date:g("lg-date"),type:g("lg-type"),treat:g("lg-treat"),comp:g("lg-comp"),note:g("lg-note")});save();}
  else if(z[0]==="dellog"){S.log.splice(parseInt(z[1],10),1);save();}
  else if(z[0]==="addms"){var lb=document.getElementById("dt-lab").value.trim(),dd=document.getElementById("dt-ms").value;if(lb&&dd){(S.dates.ms=S.dates.ms||[]).push({l:lb,d:dd});save();}}
  else if(z[0]==="delms"){S.dates.ms.splice(parseInt(z[1],10),1);save();}
  else return;
  paint();}
});
document.addEventListener("change",function(e){var t=e.target,p=t.getAttribute&&t.getAttribute("data-p");if(!p)return;var z=p.split(":");
 if(z[0]==="tick"){S.plan[z[1]][parseInt(z[2],10)].d=t.checked;save();}
 else if(z[0]==="lt"){if(t.checked)S.launch[z[1]]=true;else delete S.launch[z[1]];save();paint();}
 else if(z[0]==="date"){S.dates[z[1]]=t.value;save();paint();}
});
})();
route();
