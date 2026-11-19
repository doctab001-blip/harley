(function(){
function C(f,cap,lic,key){return {f:f,c:cap,a:lic+", via Wikimedia Commons",k:key};}
var OS=" OpenStax Anatomy and Physiology, CC BY 4.0";
var BL="Blausen Medical Communications, CC BY 3.0";
var R={
mus:C("1106 Front and Side Views of the Muscles of Facial Expressions.jpg","Muscles of facial expression, front and side views (coloured illustration).","OpenStax Anatomy and Physiology, CC BY 4.0","English labels on the image. Includes frontalis, orbicularis oculi, zygomaticus major and minor, levator labii superioris, orbicularis oris, risorius, buccinator, depressor anguli oris, mentalis, masseter and platysma. Use it to link each muscle to the toxin sites in the text."),
skin:C("Blausen 0810 SkinAnatomy 01.png","Skin in cross-section, 3D rendered and labelled.",BL,"English labels: epidermis, dermis, hypodermis, sebaceous gland, hair follicle and shaft, sweat gland, arrector pili muscle, cutaneous plexus, nerve fibres, tactile corpuscle and lamellated corpuscle."),
art:C("Gray508.png","Arteries of the face and scalp, coloured and labelled.","Gray's Anatomy (1918), public domain","English labels on the image: angular, lateral nasal, septal, superior and inferior labial arteries; frontal and parietal branches of the superficial temporal; middle temporal; orbital; occipital. Learn where these lie before choosing a plane."),
glab:C("Glabellar lines.jpg","Clinical photograph: frown (glabellar) lines between the brows.","CC BY 4.0","Vertical frown lines between the brows are made by the corrugators and procerus. Photograph shows the pattern you assess before marking points."),
nlf:C("Nasolabial fold.jpg","Clinical photograph: nasolabial fold (ringed).","Public domain","Ringed area marks the nasolabial fold running from the nasal ala to the mouth corner. The angular artery lies at the alar base, so treat the mid-face first and place filler deep and lateral to the fold."),
dark:C("Dark circles.jpg","Clinical photograph: infra-orbital hollow and dark circle (tear trough region).","Public domain","Shows the hollow and shadow below the lower eyelid. Assess volume loss, skin thickness and pigment before treating; use a very soft product in tiny volumes."),
inj:C("Intradermal injection.jpg","Photograph: intradermal injection technique, needle bevel up at a shallow angle.","CC BY 4.0","Needle held almost parallel to the skin, bevel up, raising a small bleb. This is the principle behind skin-booster microdroplets."),
liv:C("Livedo reticularis.jpg","Clinical photograph: livedo reticularis (mottled, net-like discolouration).","CC0","Net-like purple mottling is the skin pattern seen when blood supply is compromised. After filler, mottling or dusky blanching with pain is treated as vascular occlusion. Limb shown for pattern recognition."),
crao:C("Cherry red spot in patient with central retinal artery occlusion (CRAO).jpg","Retina in central retinal artery occlusion: pale retina with a cherry-red spot.","CC BY-SA 4.0","Pale, swollen retina with a red macular spot is the classic appearance when the central retinal artery is blocked. This is what filler embolism to the eye can cause, and why any visual symptom is an emergency."),
ana:C("Blausen 0018 Anaphylaxis.png","Anaphylaxis: facial flushing, swelling and rash with the allergic reaction shown inset.",BL,"Facial flushing, urticaria and swelling of the lips and face with neck rash. Inset shows allergen-IgE-mast cell activation releasing histamine."),
ima:C("Intramuscular site of adrenaline.jpg","Site for intramuscular adrenaline: outer middle third of the thigh over vastus lateralis.","CC0","Thigh divided into thirds. Inject into the outer middle third, over vastus lateralis (shown in purple), through clothing if needed."),
ang:C("Angioedema.jpg","Clinical photograph: facial angioedema (swelling around the eyes and face).","CC BY-SA 3.0","Soft-tissue swelling of the periorbital area and face. With lip, tongue or throat swelling or breathing difficulty, treat as anaphylaxis."),
urt:C("Urticaria arm.jpg","Clinical photograph: urticaria (raised red itchy wheals) on the arm.","Public domain","Raised, red, itchy wheals that come and go. A skin sign of allergy; look for associated swelling or breathing problems."),
pores:C("Blausen 0811 SkinPores.png","Acne lesions: normal pore, whitehead and blackhead.",BL,"Left to right: normal pore; closed comedone (whitehead) with a plugged follicle under the skin; open comedone (blackhead) where the plug is exposed and oxidised."),
acne:C("Acne vulgaris 2.jpg","Clinical photograph: acne vulgaris with papules and scarring on the cheek.","Public domain","Inflamed papules and pustules with post-acne scars on the cheek. Scar type (ice-pick, rolling, boxcar) guides treatment."),
ros:C("Rosacea 01.jpg","Clinical photograph: rosacea with erythema, papules and nasal thickening.","CC BY 2.0","Central facial redness with papules, and early thickening of the nose (phymatous change). Avoid abrasive exfoliation."),
pso:C("Psoriasis on back.jpg","Clinical photograph: plaque psoriasis on the back and arms.","CC BY-SA 3.0","Well-demarcated red plaques with scale on the back. Rapid keratinocyte turnover (3 to 7 days) builds the plaques."),
ecz:C("Eczema (14100950936).jpg","Clinical photograph: eczema behind the knees (flexural distribution).","CC BY 2.0","Dry, red, scaly skin in the flexures, typical of atopic eczema. The barrier is impaired and the skin is itchy."),
vit:C("Vitiligo on hand.jpg","Clinical photograph: vitiligo on the hand and fingers.","CC BY-SA 4.0","Sharply demarcated depigmented patches from loss of melanocytes. Needs sun protection."),
mel:C("Melasmablemish.jpg","Clinical photograph: melasma patches on the cheek (circled).","CC BY-SA 3.0","Circled brown patches on the cheek. Melasma is driven by hormones and sun; protect from UV and treat gently."),
m1:C("Melanoma Asymmetry.jpg","Melanoma: A for Asymmetry.","Public domain","Two halves do not match. Scale shown below the lesion."),
m2:C("Melanoma Border.jpg","Melanoma: B for Border.","Public domain","Irregular, notched or ragged edge."),
m3:C("Melanoma Color.jpg","Melanoma: C for Colour.","Public domain","More than one colour: brown, black, blue-grey, red or white."),
m4:C("Melanoma Diameter.jpg","Melanoma: D for Diameter.","Public domain","Larger than about 6 mm. Evolution (E), any change in size, shape or colour, is also a warning sign.")
};
var REMOVE={"toxin_sites.svg":1,"occlusion.svg":1,"anaphylaxis.svg":1};
var MAP=[
[3,/^3\.3\b/,["mus"]],[3,/^3\.8\b/,["glab"]],[3,/^3\.9\b/,["mus"]],
[4,/^4\.3\b/,["art"]],[4,/^4\.8\b/,["nlf","dark"]],[4,/^4\.12\b/,["art"]],[4,/^4\.13\b/,["nlf","dark"]],
[5,/^5\.1\b/,["skin"]],[5,/^5\.2\b/,["m1","m2","m3","m4"]],[5,/^5\.3\b/,["ros","pso","ecz","vit","mel"]],[5,/^5\.6\b/,["inj"]],[5,/^5\.7\b/,["skin"]],[5,/^5\.8\b/,["pores","acne","ros","pso","ecz","vit","mel"]],
[6,/^6\.2\b/,["liv","crao"]],[6,/^6\.3\b/,["ana","ima"]],[6,/^6\.7\b/,["liv","crao"]],[6,/^6\.8\b/,["ana","ang","urt","ima"]]
];
for(var m=0;m<MODULES.length;m++){var notes=MODULES[m].notes;
 for(var i=0;i<notes.length;i++){var n=notes[i];
  var kept=[];if(n.figs)for(var k=0;k<n.figs.length;k++){var f=n.figs[k];if(f.local&&(REMOVE[f.local.replace("img/","")]||(m===4&&f.local==="img/layers.svg")))continue;kept.push(f);}
  for(var j=0;j<MAP.length;j++){if(MAP[j][0]===m+1&&MAP[j][1].test(n.h)){for(var a=0;a<MAP[j][2].length;a++)kept.unshift(R[MAP[j][2][a]]);}}
  var seen={},out=[];for(var q=0;q<kept.length;q++){var key=kept[q].f||kept[q].local;if(seen[key])continue;seen[key]=1;out.push(kept[q]);}
  if(out.length)n.figs=out;else delete n.figs;
 }}
})();
