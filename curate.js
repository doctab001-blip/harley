/* Curated sections: groups notes by topic, assigns each image to the topic it illustrates, drops old Gray's-engraving plates */
(function(){
function key(f){return (f.local||f.f||"").replace(/^img\//,"").replace(/ /g,"_").toLowerCase();}
var DROP=/^gray\d|^facial_artery\.png|^nasalis|^platysma|_numbered\.jpg$/;
var ALL=[];MODULES.forEach(function(m){m.notes.forEach(function(n){(n.figs||[]).forEach(function(f){if(!DROP.test(key(f)))ALL.push(f);});});});
function C(f,cap,lic,k){return {f:f,c:cap,a:lic+", via Wikimedia Commons",k:k};}
var X={
 bones:C("Blausen 0393 FacialBones 01.png","Bones of the face, coloured and labelled (front view).","CC BY 3.0, BruceBlaus","Labelled in English: nasal bone, zygomatic bone, maxilla and mandible, each in its own colour. Filler on bone is placed against these structures, and they set the face's framework as bone is lost with age."),
 skin:C("501 Structure of the skin.jpg","Structure of the skin in section: epidermis, dermis and hypodermis (coloured, labelled).","CC BY 3.0 (OpenStax)","Labelled: hair shaft, pore of sweat gland duct, epidermis, dermis, hypodermis, arrector pili muscle, hair follicle, sebaceous gland, eccrine sweat gland, Pacinian corpuscle, sensory nerve fibre, adipose tissue and cutaneous vascular plexus."),
 lay:C("Layers of the skin.jpg","Layers of the skin with a close-up of the epidermis (National Cancer Institute).","Public domain","Labelled: epidermis, dermis, squamous cells, basal cells and melanocyte. Basal cells divide and move upward; melanocytes at the base make the pigment that peels and brighteners target."),
 ak:{f:"Actinic keratosis on the lip.JPEG",c:"Actinic keratosis on the lip: a rough, scaly sun-damaged lesion.",a:"CC BY, Copcu, Sivrioglu and Culhaci, via Wikimedia Commons",k:"A sun-damaged, pre-malignant lesion that is thickened and scaly. Any persistent, bleeding or fast-growing lesion needs dermatology review before aesthetic treatment."},
 mus:{local:"img/muscles_head_face_neck.jpg",c:"Muscles of the head, face and neck, coloured and labelled (side view).",a:"AI-generated illustration supplied by Dr Akhtar for this hub. Labels checked against standard anatomy.",k:"Labelled in English: galea aponeurotica (epicranium), frontalis, corrugator supercilii, procerus, nasalis, dilator naris, depressor septi, orbicularis oculi, orbicularis oris, quadratus labii superioris, zygomaticus major and minor, risorius, buccinator, triangularis (depressor anguli oris), quadratus labii inferioris (depressor labii inferioris), mentalis, platysma, temporal fascia, occipitalis, auricularis, masseter, sternocleidomastoid and trapezius."}
};
var G={
1:[["Layers of the face, skin and ageing",[1,5],["layers_depths","skin","anatomy_the_skin"]],
   ["Skeleton, fat compartments and ligaments",[6,7,8],["bones","fat_labelled","ligaments_labelled","buccal_pad_muscles"]],
   ["Muscles of facial expression",[2,9,10,11],["mus","1106_front"]],
   ["Blood supply, veins and danger zones",[3,12,13,14],["arteries_labelled","external_carotid","danger_zones2"]],
   ["Nerves and the parotid region",[4,15,16],["head_facial_nerve","nerves_surface","salivary"]],
   ["Treatment areas and draw-from-memory practice",[17,18],[]]],
2:[["Why patients come: psychology and suitability",[2,6,7],[]],
   ["History and facial assessment",[1,13,3],["influence_of_pigmentation"]],
   ["The consultation pathway",[8],["consult_flow"]],
   ["Consent, capacity and records",[4,9,10,14],[]],
   ["Industry, standards, regulation and premises",[5,11,16],[]],
   ["Candour, complaints and equality",[12,15],[]]],
3:[["How botulinum toxin works",[1,5],["neuro_muscular","moa_real","botulinum_toxin_3bta"]],
   ["Facial muscles and where to inject",[7,2,12,13],["mus","1106_front","nerves_muscles","glabellar"]],
   ["Technique and dosing by area",[9],["doctor_performing","nerves_surface"]],
   ["Preparation, reconstitution and storage",[6,14],[]],
   ["Assessment, contraindications and pre-treatment",[8,3,15],[]],
   ["After treatment, review and repeat",[10],["timeline_real"]],
   ["Complications and troubleshooting",[4,11,16],[]]],
4:[["Filler types, HA science and non-HA products",[1,5,6,13],[]],
   ["Facial anatomy and ageing for fillers",[7,8,15],["layers_depths","fat_frontal","ligaments_frontal","buccal_structure","bones"]],
   ["Vascular anatomy and danger zones",[16],["danger_zones2","arteries_labelled","salivary","nerves_surface"]],
   ["Consultation, consent and preparation",[9,10,3],[]],
   ["Injection techniques and planning",[2,11],["tech_linear","tech_fanning","tech_serial","tech_bolus"]],
   ["Clinical indications, area by area",[12,17],["dark_circles","nasolabial_fold"]],
   ["Complications and hyaluronidase",[4,18,19],[]],
   ["Follow-up and future trends",[14],[]]],
5:[["Scope and skin assessment",[1,2],["influence_of_pigmentation"]],
   ["Skin anatomy and physiology",[6,12],["blausen_0810","lay","epidermis_layers"]],
   ["Skin ageing and pathology",[7,8,13],["melanoma","ak","melasma","vitiligo","eczema","psoriasis","rosacea","acne","blausen_0811"]],
   ["Topical therapy and cosmeceuticals",[9,14],[]],
   ["Chemical peels",[4,10],["peel_real"]],
   ["Skin boosters, microneedling and PRP",[3,5,11,15],["intradermal","anatomy_the_skin"]]],
6:[["Prevention and preparedness",[1,6],["epinephrine"]],
   ["Vascular occlusion",[2,3,7,12],["cherry_red","livedo"]],
   ["Anaphylaxis and allergic reactions",[4,8,13],["blausen_0018","intramuscular","urticaria","angioedema"]],
   ["Infection, nodules and other filler problems",[5,9],[]],
   ["Systemic emergencies, toxin and procedural",[10,14],[]],
   ["Skin treatment complications",[15],[]],
   ["Reporting, candour and learning",[11],[]]]
};
for(var m=0;m<MODULES.length;m++){var M=MODULES[m],notes=M.notes,pool=[],origin={};
 notes.forEach(function(n,i){(n.figs||[]).forEach(function(f){var k=key(f);if(DROP.test(k)||origin[k]!==undefined)return;origin[k]=i+1;pool.push(f);});});
 var groups=G[M.id]||[],used={},out=[];
 function take(spec){var hit=null;
  if(X[spec]){return X[spec];}
  for(var i=0;i<pool.length;i++){var k=key(pool[i]);if(!used[k]&&k.indexOf(spec)===0){return pool[i];}}
  for(var j=0;j<ALL.length;j++){var k2=key(ALL[j]);if(!used[k2]&&k2.indexOf(spec)===0)return ALL[j];}
  return null;}
 groups.forEach(function(g){var figs=[],seen={};
  g[2].forEach(function(spec){var f=take(spec);if(!f)return;var k=key(f);if(seen[k])return;seen[k]=1;used[k]=1;figs.push(f);});
  out.push({t:g[0],n:g[1],figs:figs});});
 /* make sure every note belongs to a group */
 var inG={};out.forEach(function(g){g.n.forEach(function(x){inG[x]=1;});});
 notes.forEach(function(n,i){if(!inG[i+1])out.push({t:n.h,n:[i+1],figs:[]});});
 M.groups=out;
 notes.forEach(function(n){delete n.figs;});
 out.forEach(function(g){if(g.figs.length)notes[g.n[0]-1].figs=g.figs;});
}
})();
