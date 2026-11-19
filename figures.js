/* Module 1 diagrams: Gray's Anatomy plates (public domain, Wikimedia Commons) and original schematics drawn for this site. */
(function(){
var orig=figHtml;
var ORIG="Original schematic drawn for this site. Simplified and approximate, not to scale.";
window.figHtml=function(f){
 if(!f.local)return orig(f);
 return '<figure class="fig"><a class="imgl" href="'+f.local+'" target="_blank" rel="noopener" aria-label="Open full-size diagram"><img loading="lazy" src="'+f.local+'" alt="'+esc(f.c)+'" style="background:#fff"></a><figcaption>'+esc(f.c)+'<br><strong>Key.</strong> '+esc(f.k)+'<br><span>Diagram: '+esc(f.a)+'</span></figcaption></figure>';
};
function G(file,cap,key){return {f:file,c:cap,a:"Gray's Anatomy (1918), public domain, via Wikimedia Commons",k:key};}
function L(file,cap,key){return {local:"img/"+file,c:cap,k:key,a:ORIG};}
var SK=G("Gray190.png","Skull from the front, coloured: the bony framework that filler on bone is placed against.","Labelled in English on the image: frontal, parietal, temporal, sphenoid, nasal, lacrimal, zygomatic, maxilla and mandible bones; supraorbital, infraorbital, mental and zygomaticofacial foramina; nasal cavity, inferior nasal concha, and the superior and inferior orbital fissures.");
var MU=G("Gray378.png","Muscles of the head, face and neck, coloured and labelled (side view).","Labelled in English on the image: epicranius with galea aponeurotica and frontalis; corrugator; procerus; nasalis; dilatator naris; depressor septi; orbicularis oculi and oris; quadratus labii superioris and inferioris; zygomaticus; risorius; triangularis; mentalis; masseter; temporal fascia; auricularis superior, anterior and posterior; occipitalis; platysma; sternocleidomastoid; trapezius.");
var AR=G("Gray508.png","Arteries of the face and scalp, coloured and labelled.","Labelled in English on the image: angular, lateral nasal, septal, superior labial and inferior labial arteries; frontal and parietal branches of the superficial temporal; middle temporal; orbital; occipital; masseteric and zygomatic branches.");
var VE=G("Gray1024.png","Parotid gland, masseter and the glands under the jaw, with the anterior facial vein labelled in blue.","Labelled in English on the image: anterior facial vein, opening of the parotid duct and submaxillary duct, with the parotid, sublingual and submaxillary glands.");
var V1=G("Gray778.png","Branches of the trigeminal nerve (V1, V2, V3), numbered 1, 2, 3.","Labelled in English on the image: sensory root, motor root, semilunar ganglion; lacrimal, zygomatic, palpebral, nasal, labial, mental, inferior alveolar, lingual and auriculotemporal nerves; maxillary and mandibular divisions.");
var V2={f:"Trig innervation.svg",c:"Simple colour map of the skin areas supplied by V1, V2 and V3.",a:"Wikimedia Commons, see source link",k:"Labelled V1 (ophthalmic), V2 (maxillary) and V3 (mandibular) on the face. The file has a transparent background, so it may look dark in dark mode."};
var NV=G("Gray790.png","Nerves of the scalp, face and side of the neck.","Labelled in English on the image (small print, open it full size): supra-orbital; supratrochlear, infratrochlear and nasociliary terminations; zygomatic; buccal; mandibular; cervical; mental; great auricular; posterior auricular; great occipital; sternocleidomastoid; platysma; trapezius.");
var PR=G("Gray1200.png","Surface projection of the face: where nerves, vessels and the parotid sit under the skin.","Labelled in English on the image: supra-orbital, infra-orbital and mental nerves (on one vertical line through the foramina); parotid gland and duct; external maxillary (facial) artery; superficial temporal artery with its frontal and parietal branches.");
var LAY=L("layers.svg","Cross-section through the cheek showing the layers and the depth each product type is placed.","Epidermis, dermis, superficial subcutaneous fat, muscle and SMAS, deep fat with retaining ligaments (dotted), periosteum, bone. Needles mark skin boosters (intradermal), contour filler (subcutaneous) and structural bolus (supraperiosteal).");
var FAT=L("fat.svg","Facial fat compartments, front view.","Solid pink: superficial compartments (central and lateral forehead, lateral temporal-cheek, middle cheek, medial cheek, nasolabial, jowl). Dashed gold: deep compartments (sub-orbicularis oculi fat, deep medial cheek).");
var LIG=L("ligaments.svg","Main retaining ligaments of the face.","Temporal ligamentous adhesion, orbicularis retaining ligament (lid-cheek junction), zygomatic ligament, masseteric-cutaneous ligaments and mandibular ligament, shown on one side.");
var VES=L("vessels.svg","Danger-zone map: arteries and high-risk areas.","Red: external carotid branches (superficial temporal frontal branch, facial artery ending as the angular artery, superior and inferior labial arteries). Blue: ophthalmic branches (supraorbital, supratrochlear, dorsal nasal). Foramina marked for infraorbital and mental nerves. Shaded gold: temple, glabella, tear trough, nose and nasolabial fold. Vessel paths vary between people.");
var PLAN={
 "Skin anatomy and why it matters":[LAY],
 "Facial skeleton and ageing":[SK],
 "Fat compartments":[FAT],
 "Retaining ligaments and the lid-cheek junction":[LIG],
 "Muscles of the upper face":[MU],
 "Muscles of the mid face and nose":[MU],
 "Arterial supply: external carotid system":[AR,VES],
 "Arterial supply: internal carotid (ophthalmic) system":[VES],
 "Venous drainage and lymph":[VE],
 "Sensory nerves (trigeminal)":[V1,V2],
 "Motor nerve (facial nerve, VII)":[NV,PR],
 "Anatomy by treatment area":[PR,VES],
 "Layers of the face":[LAY]
};
var N=MODULES[0].notes;
for(var i=0;i<N.length;i++){var add=PLAN[N[i].h];if(!add)continue;N[i].figs=(N[i].figs||[]).concat(add);}
})();
