(function(){
function C(f,cap,lic,key){return {f:f,c:cap,a:lic+", via Wikimedia Commons",k:key};}
var A={
bf:C("Location of Buccal Fat Pad.jpg","Buccal fat pad in the cheek, lateral view with the skull and muscles (illustration).","CC BY-SA 3.0","English labels: buccal fat pad, temporalis, masseter, buccinator and parotid duct. Shows how the deep cheek fat sits between the muscles of mastication and the buccinator."),
bd:C("Buccal Fat Diagram.jpg","Buccal fat pad: body with temporal, pterygoid and buccal extensions (illustration).","CC BY-SA 3.0","English labels: body, buccal extension, temporal extension and pterygoid extension. A deep fat pad, separate from the superficial compartments in the diagram beside it."),
ema:C("External maxillary artery branches.png","External carotid and its branches: occipital, facial, lingual, ascending pharyngeal and superior thyroid (illustration).","Public domain","English labels on the image. The facial (external maxillary) artery crosses the mandible and runs up the face to become the angular artery. This is the source of the vessels in the danger-zone map beside it."),
sk:C("502 Layers of epidermis.jpg","Layers of the epidermis and dermis in section (coloured, labelled).","CC BY 3.0","Labelled epidermal layers (stratum corneum, lucidum, granulosum, spinosum, basale) over the dermis. Use with the cheek-layer drawing to link peel and booster depth to real skin layers."),
bt:C("Botulinum Toxin Mechanism.png","Botulinum toxin at the synapse: normal release (top) and with toxin (bottom).","Public domain","Top: vesicles of acetylcholine fuse and release across the synapse. Bottom: toxin enters the nerve terminal and cleaves SNARE proteins so vesicles cannot fuse and the muscle is not stimulated. Text on the image is small; enlarge it.")
};
var ADD={"fat.svg":["bf","bd"],"vessels.svg":["ema"],"layers.svg":["sk"],"moa.svg":["bt"]};
for(var m=0;m<MODULES.length;m++){var notes=MODULES[m].notes;
 for(var i=0;i<notes.length;i++){var n=notes[i];if(!n.figs)continue;
  var out=[],seen={};
  n.figs.forEach(function(f){if(f.f)seen[f.f]=1;});
  n.figs.forEach(function(f){
   var key=f.local&&f.local.replace("img/","");
   if(key&&ADD[key]){ADD[key].forEach(function(a){var r=A[a];if(!seen[r.f]){seen[r.f]=1;out.push(r);}});}
   out.push(f);
  });
  n.figs=out;}}
})();
