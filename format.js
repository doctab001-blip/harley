(function(){
var KEY="arh_ticks",T={};try{T=JSON.parse(localStorage.getItem(KEY)||"{}");}catch(e){}
function sv(){try{localStorage.setItem(KEY,JSON.stringify(T));}catch(e){}}
var TICK=/checklist|history to take|preparedness|premises|emergency kit|pre-treatment|day of treatment|contraindications and red flags/i;
var NUM=/(\b\d+(?:\.\d+)?\s?(?:mg\/kg|mg|mL|ml|U|units|micrograms|mm|cm|%|minutes|hours|weeks|days|G)\b)/g;
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function body(s){return esc(s).replace(NUM,"<b>$1</b>");}
function fmt(){
 var n=document.querySelector(".notes");if(!n)return;
 var mod=(location.hash.match(/module\/(\d+)/)||[])[1];
 var h3=n.querySelectorAll("h3");
 for(var i=0;i<h3.length;i++){var ul=h3[i].nextElementSibling;if(!ul||ul.tagName!=="UL"||ul.dataset.fmt)continue;
  ul.dataset.fmt="1";ul.className="fmt";
  var tick=TICK.test(h3[i].textContent);if(tick)ul.className+=" tick";
  var lis=ul.querySelectorAll("li");
  for(var j=0;j<lis.length;j++){var li=lis[j],t=li.textContent,m=t.match(/^([^:]{2,70}):\s([\s\S]*)$/);
   var pt=m?m[1]:"",pb=m?m[2]:t;
   var inner=(pt?'<span class="pt">'+esc(pt)+'</span>':'')+'<span class="pb">'+body(pb)+'</span>';
   if(tick){var id="t"+mod+"_"+(h3[i].dataset.i!==undefined?h3[i].dataset.i:i)+"_"+j;li.innerHTML='<label><input type="checkbox" data-t="'+id+'"'+(T[id]?" checked":"")+'><span>'+inner+'</span></label>';if(T[id])li.className="done";}
   else li.innerHTML=inner;}
  if(tick){var bar=document.createElement("div");bar.className="tickbar";bar.innerHTML='<span><b class="c">0</b> of '+lis.length+' ticked</span><span class="bar"><i></i></span><button type="button">Reset ticks</button>';ul.parentNode.insertBefore(bar,ul.nextSibling);upd(ul,bar);}
 }
}
function upd(ul,bar){var cs=ul.querySelectorAll("input[type=checkbox]"),c=0;for(var i=0;i<cs.length;i++)if(cs[i].checked)c++;bar.querySelector(".c").textContent=c;bar.querySelector("i").style.width=(cs.length?c*100/cs.length:0)+"%";}
document.addEventListener("change",function(e){var el=e.target;if(!el.dataset||!el.dataset.t)return;
 T[el.dataset.t]=el.checked?1:0;if(!el.checked)delete T[el.dataset.t];sv();
 var li=el.closest("li");li.className=el.checked?"done":"";var ul=li.parentNode;upd(ul,ul.nextElementSibling);});
document.addEventListener("click",function(e){var b=e.target;if(b.tagName!=="BUTTON"||!b.parentNode.classList.contains("tickbar"))return;
 var ul=b.parentNode.previousElementSibling,cs=ul.querySelectorAll("input[type=checkbox]");
 for(var i=0;i<cs.length;i++){cs[i].checked=false;delete T[cs[i].dataset.t];cs[i].closest("li").className="";}sv();upd(ul,b.parentNode);});
var app=document.getElementById("app");if(app)new MutationObserver(function(){fmt();}).observe(app,{childList:true,subtree:true});
fmt();
})();
