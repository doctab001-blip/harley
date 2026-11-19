(function(){
var AI="Realistic illustration generated with AI from your brief; labels redrawn and checked against standard facial anatomy. Illustrative, not to scale.";
function I(f,c,k){return {local:"img/"+f,c:c,k:k,a:AI};}
var A={
fat:I("fat_labelled.jpg","Facial fat compartments, realistic view.","Pale yellow pads are the superficial compartments and darker orange pads the deeper ones in this drawing. Labelled: central forehead, lateral forehead, lateral temporal-cheek, infraorbital, nasolabial, middle cheek, jowl, deep temporal and deep medial cheek fat. Compartment borders vary between people."),
lig:I("ligaments_labelled.jpg","Facial retaining ligaments, realistic view with skin removed.","Labelled: temporal ligamentous adhesion (TLA), zygomatic ligament (McGregor's patch), masseteric-cutaneous ligaments, mandibular ligament and platysma-auricular ligament. These tether skin to bone and shape where filler spreads and where folds form."),
art:I("arteries_labelled.jpg","Arteries of the face and scalp, side view.","Labelled: frontal, parietal and superficial temporal artery, zygomatico-orbital and middle temporal branches, angular, lateral nasal, septal, superior and inferior labial, facial, occipital arteries and the external carotid trunk."),
dz:I("danger_zones.jpg","Vascular danger-zone map with the artery behind each zone.","Glabella (supratrochlear), forehead (supraorbital), temple (superficial temporal), tear trough (angular), nose (dorsal and lateral nasal), nasolabial fold (facial) and lips (labial arteries)."),
lay:I("layers_depths.jpg","Layers of the face and the depth each product type is placed.","Epidermis, dermis, superficial fat, SMAS and muscle, deep fat with retaining ligaments, periosteum and bone. Skin boosters go intradermal, contour filler into shallow subcutaneous fat, volume filler deep, and a structural bolus on the periosteum."),
t1:I("tech_linear.jpg","Linear threading (retrograde).","Fill as the needle withdraws. Folds, lines, lips and jawline."),
t2:I("tech_fanning.jpg","Fanning.","Larger areas from one entry point. Cheeks, temple and hand rejuvenation."),
t3:I("tech_serial.jpg","Serial puncture.","Small aliquots, intradermal or deep dermal. Fine lines, lip border and skin boosters."),
t4:I("tech_bolus.jpg","Deep supraperiosteal bolus.","Structural support at chin, malar area and jaw. Product is placed on the periosteum, deep to the muscle.")
};
A.peel=I("peel_real.jpg","Chemical peel depth and the skin layers reached.","Epidermis, papillary dermis, upper reticular dermis and mid to deep reticular dermis. Superficial peels (glycolic, salicylic, mandelic acids) reach the epidermis and papillary dermis, medium peels (TCA) the upper reticular dermis, and deep peels (phenol, specialist only) the mid to deep reticular dermis. Risk rises with depth: PIH, scarring, infection and cold sore reactivation.");
A.moa=I("moa_real.jpg","How botulinum toxin A blocks the neuromuscular junction.","Top: the nerve signal arrives, SNARE proteins (including SNAP-25) let vesicles fuse, acetylcholine crosses the synaptic cleft to the muscle end-plate and the muscle contracts. Bottom: toxin A enters the nerve terminal and cleaves SNAP-25, vesicles cannot fuse, no acetylcholine is released and the muscle relaxes. The effect is reversible as the terminal recovers.");
A.cons=I("consult_flow.jpg","Consultation flow for injectable treatments.","Eight steps from welcome and aims to aftercare. Step 6 (consent) is highlighted. Red box: pause, decline or delay. Amber box: refer or seek advice.");
A.tl=I("timeline_real.jpg","Typical time course of cosmetic botulinum toxin.","Onset 3 to 5 days, peak and review at about 2 weeks, wearing off over about 3 to 4 months. Typical course only; individual response, product and dose vary.");
A.nm=I("nerves_muscles.jpg","Nerves and muscles of the scalp, face and neck (side view).","Labelled: supra-orbital nerve; supratrochlear, infratrochlear and nasociliary terminations; zygomatic, buccal and mandibular branches of the facial nerve; posterior auricular nerve; sternocleidomastoid, trapezius and platysma muscles. Yellow lines are nerves.");
A.ns=I("nerves_surface.jpg","Surface projection of nerves, vessels and the parotid gland.","Supra-orbital, infra-orbital and mental nerves lie on one vertical line through the pupil. Also shown: superficial temporal artery with frontal and parietal branches, parotid gland and duct (Stensen's duct) and the facial (external maxillary) artery crossing the mandible.");
A.sal=I("salivary.jpg","Salivary glands and surrounding anatomy.","Parotid gland and duct (Stensen's duct) with its opening in the cheek, masseter, zygomatic arch, submandibular gland and duct (Wharton's duct), sublingual gland, anterior facial vein, digastric and sternocleidomastoid muscles, tongue.");
A.epi=I("epidermis_layers.jpg","Layers of the epidermis and dermis in section.","Stratum corneum (dead keratinised cells), stratum lucidum, stratum granulosum (lamellar granules), stratum spinosum (keratinocytes), stratum basale (with melanocytes), basement membrane, then the dermis with sensory neurons and receptors.");
A.bm=I("buccal_pad_muscles.jpg","Buccal fat pad in the cheek, with the surrounding muscles.","Buccal fat pad, temporalis, masseter, buccinator, parotid gland and parotid duct. The deep cheek fat sits between the muscles of mastication and the buccinator.");
A.ec=I("external_carotid.jpg","External carotid artery and its branches in the neck and face.","Common carotid artery dividing into internal and external carotid; occipital, facial, lingual, ascending pharyngeal and superior thyroid arteries labelled.");
A.dz2=I("danger_zones2.jpg","Vascular danger-zone map with the artery behind each zone.","Glabella (supratrochlear), forehead (supraorbital), temple (superficial temporal, frontal branch), tear trough (angular), nose (dorsal and lateral nasal), nasolabial fold (facial) and lips (superior and inferior labial arteries).");
A.fb=I("buccal_structure.jpg","Structure of the buccal fat pad on the skull.","Body with temporal, pterygoid and buccal extensions, shown on the skull in lateral-oblique view.");
A.ff=I("fat_frontal.jpg","Facial fat compartments, front view.","Central forehead, lateral forehead, lateral temporal-cheek, sub-orbicularis oculi fat (SOOF), middle cheek, nasolabial, deep medial cheek and jowl compartments.");
A.fl=I("ligaments_frontal.jpg","Facial retaining ligaments, front view.","Temporal ligamentous adhesion, orbicularis retaining ligament (lid-cheek junction, tear trough), zygomatic ligament, masseteric-cutaneous ligaments and mandibular ligament. They tether skin to bone and limit filler spread.");
var ADD={"fat.svg":["ff","fat","fb","bm"],"ligaments.svg":["fl","lig"],"vessels.svg":["art","ec","dz2"],"layers.svg":["lay"],"techniques.svg":["t1","t2","t3","t4"],"moa.svg":["moa"],"timeline.svg":["tl"],"consult.svg":["cons"],"peel_depth.svg":["peel"]};
var DROP={"Location of Buccal Fat Pad.jpg":1,"Buccal Fat Diagram.jpg":1,"External maxillary artery branches.png":1,"502 Layers of epidermis.jpg":1,"Botulinum Toxin Mechanism.png":1,"Trig innervation.svg":1,"Signs and symptoms of anaphylaxis.svg":1};
var EXTRA=[[5,/^5\.1\b/,["epi"]],[3,/^3\.3\b/,["nm","ns"]],[4,/^4\.12\b/,["ns","sal"]],[4,/^4\.3\b/,["sal"]]];
for(var m=0;m<MODULES.length;m++){var notes=MODULES[m].notes;
 for(var i=0;i<notes.length;i++){var n=notes[i];if(!n.figs)n.figs=[];
  var out=[],seen={};
  n.figs.forEach(function(f){var key=f.local&&f.local.replace("img/","");
   if(f.f&&DROP[f.f])return;
   if(key&&ADD[key]){ADD[key].forEach(function(a){if(!seen[a]){seen[a]=1;out.push(A[a]);}});return;}
   out.push(f);});
  EXTRA.forEach(function(e){if(e[0]===m+1&&e[1].test(n.h))e[2].forEach(function(a){if(!seen[a]){seen[a]=1;out.push(A[a]);}});});
  if(out.length)n.figs=out;else delete n.figs;}}
})();
