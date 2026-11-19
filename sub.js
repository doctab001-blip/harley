/* Modules as sections: overview of headings, one section per page, image slideshow per section */
(function(){
var VK="arh_seen",V={};try{V=JSON.parse(localStorage.getItem(VK)||"{}");}catch(e){}
function sv(){try{localStorage.setItem(VK,JSON.stringify(V));}catch(e){}}
function find(id){for(var i=0;i<MODULES.length;i++)if(MODULES[i].id===id)return MODULES[i];return null;}
function nfig(n){return n.figs?n.figs.length:0;}
function title(h){return h.replace(/^\d+(?:\.\d+)?\s+/,"");}
function numOf(h,i){var m=h.match(/^(\d+(?:\.\d+)?)\s/);return m?m[1]:String(i+1);}

function overview(m){
 var seen=0,h='<div class="stack-s"><div><a href="#/modules">&larr; All modules</a><div class="eyebrow" style="margin-top:22px">Module '+m.id+' of 6</div><h1 style="margin-top:18px">'+m.title+'</h1><p class="lead">'+m.short+'</p></div>';
 var cards='';
 for(var i=0;i<m.notes.length;i++){var n=m.notes[i],k=m.id+"_"+i,s=V[k];if(s)seen++;
  cards+='<a class="card sec-card'+(s?' seen':'')+'" href="#/module/'+m.id+'/'+(i+1)+'"><span class="sn">'+numOf(n.h,i)+'</span><span class="st"><b>'+esc(title(n.h))+'</b><small>'+n.items.length+' points'+(nfig(n)?' · '+nfig(n)+' image'+(nfig(n)>1?'s':''):'')+'</small></span><span class="sk">'+(s?'&#10003;':'&rsaquo;')+'</span></a>';}
 h+='<div class="sec-head2"><h2>Sections</h2><span class="chip sage">'+seen+' of '+m.notes.length+' opened</span></div><div class="sec-grid">'+cards+'</div>';
 h+='<div class="card"><div class="callout" style="margin-top:0">'+esc(m.callout)+'</div></div>';
 h+='<div class="card"><div class="check"><input type="checkbox" id="mods'+m.id+'" data-g="mods" data-k="'+m.id+'"'+(S.mods[m.id]?' checked':'')+'><label for="mods'+m.id+'">I have reviewed this module</label></div><div class="btn-row"><a class="btn" href="#/module/'+m.id+'/1">Start section 1</a><a class="btn ghost" href="#/cards/'+m.id+'">Revise with flashcards</a>';
 if(m.id>1)h+='<a class="btn ghost" href="#/module/'+(m.id-1)+'">Previous module</a>';
 if(m.id<6)h+='<a class="btn ghost" href="#/module/'+(m.id+1)+'">Next module</a>';
 return h+'</div></div><p class="disc">Revision summary only. Check doses and protocols against your Harley materials, product SmPCs and national guidance. Images are from Wikimedia Commons or are drawn for this hub, with credits under each one.</p></div>';
}

function slideshow(figs,uid){
 var h='<div class="ss" data-ss="'+uid+'" tabindex="0" aria-roledescription="carousel" aria-label="Image slideshow"><div class="ss-top"><b class="ss-count">1 / '+figs.length+'</b><span>Use the arrows, swipe, or press &larr; &rarr;</span></div><div class="ss-stage">';
 for(var i=0;i<figs.length;i++)h+='<div class="ss-slide'+(i?'':' on')+'" data-i="'+i+'">'+figHtml(figs[i])+'</div>';
 h+='<button type="button" class="ss-nav prev" data-ssgo="-1" aria-label="Previous image">&lsaquo;</button><button type="button" class="ss-nav next" data-ssgo="1" aria-label="Next image">&rsaquo;</button></div>';
 if(figs.length>1){h+='<div class="ss-dots">';for(var j=0;j<figs.length;j++)h+='<button type="button" class="'+(j?'':'on')+'" data-ssto="'+j+'" aria-label="Image '+(j+1)+'"></button>';h+='</div>';}
 return h+'</div>';
}

function section(m,idx){
 var n=m.notes[idx],t=m.notes.length;V[m.id+"_"+idx]=1;sv();
 var h='<div class="stack-s"><div><a href="#/module/'+m.id+'">&larr; Module '+m.id+': '+esc(m.title)+'</a><div class="eyebrow" style="margin-top:22px">Section '+(idx+1)+' of '+t+'</div></div>';
 h+='<div class="secbar"><span class="bar"><i style="width:'+Math.round((idx+1)*100/t)+'%"></i></span></div>';
 h+='<div class="card notes"><h3 data-i="'+idx+'">'+n.h+'</h3><ul>';
 for(var j=0;j<n.items.length;j++)h+='<li>'+esc(n.items[j])+'</li>';
 h+='</ul>';
 if(nfig(n))h+='<h4 class="ss-h">Images</h4>'+slideshow(n.figs,m.id+"_"+idx);
 h+='</div><div class="btn-row sec-nav">';
 h+=idx>0?'<a class="btn ghost" href="#/module/'+m.id+'/'+idx+'">&larr; '+esc(title(m.notes[idx-1].h))+'</a>':'<a class="btn ghost" href="#/module/'+m.id+'">&larr; Section list</a>';
 h+=idx<t-1?'<a class="btn" href="#/module/'+m.id+'/'+(idx+2)+'">'+esc(title(m.notes[idx+1].h))+' &rarr;</a>':'<a class="btn" href="#/module/'+m.id+'">Finish: back to module &rarr;</a>';
 h+='</div><details class="jump"><summary>Jump to another section</summary><div class="jump-list">';
 for(var i=0;i<t;i++)h+='<a href="#/module/'+m.id+'/'+(i+1)+'"'+(i===idx?' class="cur"':'')+'>'+numOf(m.notes[i].h,i)+' '+esc(title(m.notes[i].h))+'</a>';
 return h+'</div></details></div>';
}

window.viewModule=function(id){
 var m=find(id);if(!m)return '<p>Module not found. <a href="#/modules">Back to modules</a></p>';
 var s=parseInt(location.hash.replace(/^#\/?/,"").split("/")[2],10);
 if(s>=1&&s<=m.notes.length)return section(m,s-1);
 return overview(m);
};

/* slideshow controls */
function go(ss,to){var sl=ss.querySelectorAll(".ss-slide"),n=sl.length;to=(to+n)%n;
 for(var i=0;i<n;i++)sl[i].classList.toggle("on",i===to);
 var d=ss.querySelectorAll(".ss-dots button");for(var j=0;j<d.length;j++)d[j].classList.toggle("on",j===to);
 ss.querySelector(".ss-count").textContent=(to+1)+" / "+n;ss.dataset.cur=to;
 if(n<2){var b=ss.querySelectorAll(".ss-nav");for(var k=0;k<b.length;k++)b[k].style.display="none";}}
function cur(ss){return parseInt(ss.dataset.cur||"0",10);}
document.addEventListener("click",function(e){var b=e.target.closest("[data-ssgo],[data-ssto]");if(!b)return;var ss=b.closest(".ss");
 if(b.hasAttribute("data-ssgo"))go(ss,cur(ss)+parseInt(b.getAttribute("data-ssgo"),10));else go(ss,parseInt(b.getAttribute("data-ssto"),10));});
document.addEventListener("keydown",function(e){if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return;var t=e.target;if(t&&/INPUT|TEXTAREA|SELECT/.test(t.tagName))return;
 var ss=document.querySelector(".ss");if(!ss)return;go(ss,cur(ss)+(e.key==="ArrowRight"?1:-1));});
var x0=null;document.addEventListener("touchstart",function(e){if(e.target.closest(".ss"))x0=e.touches[0].clientX;else x0=null;},{passive:true});
document.addEventListener("touchend",function(e){if(x0===null)return;var ss=e.target.closest(".ss");if(!ss)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50)go(ss,cur(ss)+(dx<0?1:-1));x0=null;},{passive:true});
function init(){var a=document.getElementById("app");if(!a)return;var s=a.querySelectorAll(".ss");for(var i=0;i<s.length;i++)if(s[i].dataset.cur===undefined)go(s[i],0);}
var app=document.getElementById("app");if(app)new MutationObserver(init).observe(app,{childList:true});
})();
