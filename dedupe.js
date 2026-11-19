(function(){
function key(f){var k=(f.local||f.f||"").replace(/^img\//,"").replace(/_numbered/,"").replace(/ /g,"_");return k.toLowerCase();}
/* [module, image regex, regex of the note that owns it] - owner keeps it, other notes drop it */
var OWN=[
 [1,/layers_depths/,/^Layers of the face/],
 [1,/1106_front/,/^Muscles relevant to toxin/],
 [1,/head_facial_nerve/,/^Nerves$/],
 [1,/gray378/,/^Muscles of the upper face/],
 [1,/arteries_labelled|external_carotid|danger_zones2/,/^Arterial supply: external carotid/],
 [1,/gray1200/,/^Motor nerve/],
 [4,/arteries_labelled|external_carotid|danger_zones2|gray508|salivary/,/^4\.12/],
 [4,/fat_|buccal_|ligaments_/,/^4\.11/],
 [4,/dark_circles|nasolabial_fold/,/^4\.13/],
 [5,/intradermal_injection/,/^5\.6/],
 [5,/blausen_0810/,/^5\.1\b/],
 [5,/melasma|vitiligo|eczema|psoriasis|rosacea/,/^5\.8/],
 [6,/intramuscular_site/,/^6\.3/],
 [6,/cherry_red|livedo/,/^6\.2/],
 [6,/blausen_0018/,/^6\.3/]
];
for(var m=0;m<MODULES.length;m++){var notes=MODULES[m].notes,seen={},orig=[];
 /* pass 1: explicit owners */
 notes.forEach(function(n){orig.push(n.figs?n.figs.slice():[]);});
 notes.forEach(function(n){if(!n.figs)return;
  n.figs=n.figs.filter(function(f){var k=key(f);
   for(var i=0;i<OWN.length;i++){var o=OWN[i];if(o[0]===m+1&&o[1].test(k)){if(!o[2].test(n.h))return false;}}
   return true;});});
 /* pass 2: anything still repeated within the module - first occurrence wins */
 notes.forEach(function(n){if(!n.figs)return;
  n.figs=n.figs.filter(function(f){var k=key(f);if(seen[k])return false;seen[k]=1;return true;});});
 notes.forEach(function(n,i){if(n.figs&&!n.figs.length){delete n.figs;}});
}

/* ---------- distinct replacements for notes that lost a repeated image ---------- */
function C(f,cap,lic,key){return {f:f,c:cap,a:lic+", via Wikimedia Commons",k:key};}
var N={
 skin:C("501 Structure of the skin.jpg","Structure of the skin in section: epidermis, dermis and hypodermis (coloured, labelled).","CC BY 3.0 (OpenStax)","Labelled: hair shaft, pore of sweat gland duct, epidermis, dermis, hypodermis, arrector pili muscle, hair follicle, sebaceous gland, eccrine sweat gland, Pacinian corpuscle, sensory nerve fibre, adipose tissue and cutaneous vascular plexus. Superficial fillers and boosters sit in the dermis; deeper filler sits below it."),
 nas:C("Nasalis.png","Nasalis muscle (red) on the side of the nose, with the surrounding facial muscles.","Public domain","Nasalis highlighted in red over the nose, with the muscles of the scalp, forehead, eye, cheek and mouth around it. Nasalis causes bunny lines and flares the nostril. Small Latin labels: epicranius, galea aponeurotica, temporal fascia."),
 plat:C("Platysma.png","Platysma (red) spreading from the lower face over the neck.","Public domain","Platysma highlighted in red from the mandible and corner of the mouth down over the neck. Vertical platysmal bands and the lower-face downturn are treated by splitting the dose across the bands, with caution around the depressor anguli oris and neck flexors."),
 per:C("Gray381.png","Muscles around the mouth, diagram of the perioral sphincter and its insertions.","Public domain","Labelled: buccinator, naso-labialis, incisivus labii superioris and inferioris, caninus, triangularis. Shows the crossing fibres that make up the orbicularis oris. Lip lines (smoker's lines) come from this muscle."),
 cheek:C("Gray380.png","Muscles of the cheek, mouth and pharynx, lateral view.","Public domain","Labelled: maxilla, buccinator, orbicularis oris, mandible, hyoid, thyroid cartilage and the pharyngeal constrictors. The buccinator is deep to the cheek fat pad and masseter."),
 oph:C("Gray514.png","Ophthalmic artery and its branches (internal carotid system).","Public domain","Labelled: internal carotid, ophthalmic, lacrimal, supra-orbital, frontal, dorsal nasal, medial palpebral, anterior and posterior ethmoidal and zygomatic branches. Branches anastomose with the facial artery system, which is why filler near the glabella and nose can reach the eye."),
 lay:C("Layers of the skin.jpg","Layers of the skin with a close-up of the epidermis (National Cancer Institute).","Public domain","Labelled: epidermis, dermis, squamous cells, basal cells and melanocyte. Basal cells divide and move upward; melanocytes at the base make the pigment that peels and brighteners target."),
 ak:{f:"Actinic keratosis on the lip.JPEG",c:"Actinic keratosis on the lip: a rough, scaly sun-damaged lesion.",a:"CC BY, Copcu, Sivrioglu and Culhaci, via Wikimedia Commons",k:"A sun-damaged, pre-malignant lesion that is thickened and scaly. Any persistent, bleeding or fast-growing lesion needs dermatology review before aesthetic treatment."}
};
var FILL=[[1,/^Skin anatomy and why/,["skin"]],[1,/^Muscles of the mid face/,["nas"]],[1,/^Muscles of the lower face/,["plat","per"]],[1,/^Arterial supply: internal carotid/,["oph"]],
 [3,/^3\.9\b/,["cheek","plat"]],[5,/^5\.7\b/,["lay"]],[5,/^5\.3\b/,["ak"]],[6,/^6\.7\b/,["oph"]]];
FILL.forEach(function(e){var notes=MODULES[e[0]-1].notes;notes.forEach(function(n){if(e[1].test(n.h)){n.figs=(n.figs||[]).concat(e[2].map(function(k){return N[k];}));}});});
})();
