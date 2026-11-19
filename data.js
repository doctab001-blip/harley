var CM="https://commons.wikimedia.org/wiki/";
var KEYS={"Anatomy The Skin - NCI Visuals Online.jpg": "Labelled in English on the image: epidermis, dermis, fatty tissue, blood vessels, follicle, oil gland, sweat gland and melanocytes.", "1106 Front and Side Views of the Muscles of Facial Expressions numbered.jpg": "Key: 1 epicranial aponeurosis; 2 occipitofrontalis (frontal belly); 3 corrugator supercilii; 4 orbicularis oculi; 5 occipitofrontalis (occipital belly); 6 orbicularis oris; 7 buccinator. Procerus, depressor anguli oris, mentalis and masseter are not marked on this figure.", "Facial artery.PNG": "Colours in this engraving: red are arteries, blue are veins, yellow are nerves. The one call-out is 'Facial' (the facial artery). It is a neck dissection, so use it to see where the artery arises from the external carotid, not for facial detail.", "Head facial nerve branches TZBMC.jpg": "Key: T temporal, Z zygomatic, B buccal, M marginal mandibular, C cervical (the five terminal branches). P marks the posterior auricular branch.", "Influence of pigmentation on skin cancer risk.png": "Labelled in English: Fitzpatrick phototypes I to VI; epidermal melanin rises from I to VI; UV phenotype runs from 'UV sensitive, burn rather than tan' to 'UV resistant, tan, never burn'; cancer risk falls from I to VI.", "Neuro Muscular Junction.png": "Labelled in English on the image, including myelin sheath, neurilemma, axoplasm and Schwann cell.", "Botulinum toxin 3BTA.png": "Unlabelled 3D model. In this rendering red coils are alpha-helices, cyan arrows are beta-strands and grey lines are loops.", "Doctor performing Botox injection.jpg": "Photograph, no labels: a clinician injecting near the eye of a reclined patient.", "Intradermal injection.jpg": "Photograph, no labels: the needle enters almost flat to the skin surface, which is the angle for an intradermal injection.", "Epinephrine 1-1000 (1).JPG": "Photograph. The label reads 'Epinephrine Injection, USP 1-1000, 1 mL'. Epinephrine is the US name for adrenaline, and 1 in 1000 means 1 mg/mL.", "Signs and symptoms of anaphylaxis.svg": "Labelled in English by body system: central nervous system, respiratory, heart and vasculature, skin and gastrointestinal, plus conjunctiva, nose, lips, tongue and throat, and pelvic pain.", "Intramuscular site of adrenaline.jpg": "Labelled in English on the image: outer middle third of the thigh (green) and vastus lateralis (purple)."};
var CAPS={"1106 Front and Side Views of the Muscles of Facial Expressions numbered.jpg": "Muscles of facial expression, front and side views, numbered. The key is below the image.", "Doctor performing Botox injection.jpg": "Cosmetic botulinum toxin injection near the eye.", "Facial artery.PNG": "Superficial dissection of the neck and face showing the external carotid artery and the facial artery."};
function F(file,cap,credit){return {f:file,c:CAPS[file]||cap,a:credit,k:KEYS[file]||""};}
function figHtml(f){
 var n=f.f.replace(/ /g,"_");var src=CM+"Special:FilePath/"+encodeURIComponent(n)+"?width=900";var page=CM+"File:"+encodeURIComponent(n);
 return '<figure class="fig"><img loading="lazy" src="'+src+'" alt="'+esc(f.c)+'" onerror="this.style.display=\'none\';this.nextElementSibling.insertAdjacentHTML(\'afterbegin\',\'Image could not load. \')"><figcaption>'+esc(f.c)+' <span>Image: '+esc(f.a)+'. <a href="'+page+'" target="_blank" rel="noopener">Source and licence</a></span></figcaption></figure>';
}
var MODULES = [
{id:1,title:"Facial anatomy",short:"Layers, muscles, vessels, nerves and danger zones",
 notes:[
 {h:"Layers of the face",figs:[F("Anatomy The Skin - NCI Visuals Online.jpg","Skin layers with glands and vessels: reference for dermal versus subcutaneous placement.","National Cancer Institute, public domain")],items:[
  "Skin, subcutaneous fat (superficial and deep compartments), muscle and SMAS, deep fat and retaining ligaments, then periosteum and bone.",
  "Depth decides the product and the technique: intradermal for skin quality, subcutaneous for contour, deep supraperiosteal bolus for structural support.",
  "Ageing combines bone resorption, deep fat-pad volume loss, ligament laxity, skin thinning and repeated muscle movement. Dynamic lines appear with movement; static lines remain at rest."]},
 {h:"Muscles relevant to toxin",figs:[F("1106 Front and Side Views of the Muscles of Facial Expressions numbered.jpg","Muscles of facial expression, front and side views, numbered. Match each muscle to its toxin site.","OpenStax Anatomy and Physiology, CC BY")],items:[
  "Frontalis: the only brow elevator. Over-treating it drops the brows, so treat the frown muscles that pull the brow down before the elevators.",
  "Corrugator supercilii and procerus: glabellar frown lines. Corrugators draw the brows medially and down; procerus draws the medial brow down.",
  "Orbicularis oculi: lateral canthal lines (crow's feet).",
  "Lower face: depressor anguli oris, mentalis and masseter. Masseter and several lower-face uses are outside many products' licensed indications, so they need extra training, informed consent and a documented rationale."]},
 {h:"Blood supply and danger zones",figs:[F("Facial artery.PNG","Superficial dissection of the neck and face showing the external carotid and facial artery.","Gray's Anatomy (1918), public domain")],items:[
  "The facial artery arises from the external carotid, crosses the mandible at the anterior border of masseter, runs alongside the nasolabial fold and ends as the angular artery near the nose. The labial arteries branch off near the oral commissure.",
  "The supratrochlear, supraorbital and dorsal nasal arteries come from the ophthalmic (internal carotid) system. They anastomose with the angular artery, which is why filler pushed into them can travel retrograde to the eye.",
  "Highest-risk zones: glabella, nose, nasolabial fold, temple, tear trough and forehead. Lips and nasolabial folds are also a common site of vascular occlusion.",
  "Cannula use lowers but does not remove intravascular risk. Aspiration is unreliable. Slow, low-pressure, low-volume injection and constant movement matter more."]},
 {h:"Nerves",figs:[F("Head facial nerve branches TZBMC.jpg","Facial nerve branches: temporal, zygomatic, buccal, marginal mandibular and cervical.","Patrick J. Lynch, CC BY 2.5")],items:[
  "Facial nerve (VII) motor branches: temporal, zygomatic, buccal, marginal mandibular, cervical.",
  "Trigeminal sensory branches exit through the supraorbital, infraorbital and mental foramina, which lie roughly in one vertical line through the mid-pupil.",
  "Temporal and marginal mandibular branches are the most exposed to injury and to over-diffusion of toxin."]}
 ],
 callout:"Revision tip: draw the facial artery from memory, mark every danger zone, then compare with your Harley anatomy materials."},

{id:2,title:"Assessment and consultation",short:"History, psychology, consent, records and GMC duties",
 notes:[
 {h:"History to take every time",items:[
  "Medical history, medicines (anticoagulants, antiplatelets, isotretinoin, immunosuppressants, aminoglycosides), allergies including lidocaine and product components, pregnancy and breastfeeding plans.",
  "Autoimmune and neuromuscular disease, keloid or scarring tendency, cold sores (important for lips and peels), previous filler of any kind including permanent filler, and any previous complications.",
  "Some toxin products contain human albumin, so check this against the patient's beliefs and allergies."]},
 {h:"Psychology and suitability",items:[
  "Explore motivation and expectations. Look for body dysmorphic disorder, unrealistic goals, pressure from a partner or social media, and recent life crises.",
  "It is appropriate to decline or delay treatment. Do not use time-limited offers or sales pressure.",
  "Patients must be 18 or over for cosmetic toxin and filler in England. Check ID if age is uncertain."]},
 {h:"Facial assessment",figs:[F("Influence of pigmentation on skin cancer risk.png","Fitzpatrick scale: skin types I to VI by burning and tanning behaviour. Use it before every peel, microneedling or energy treatment.","Wikimedia Commons")],items:[
  "Assess the whole face at rest and in animation: symmetry, proportions, volume loss, skin quality, dynamic and static lines, skin type (Fitzpatrick I to VI).",
  "Take standardised photographs with separate photo consent. Use the same angles, lighting and background each time.",
  "Treat the cause, not the line: a staged, conservative plan usually beats one large session."]},
 {h:"Consent and records",items:[
  "You obtain consent personally, in a way the patient can consider. Cover benefits, realistic outcomes, specific risks (including vascular occlusion and blindness for filler), alternatives and costs.",
  "Record the product, batch number, expiry, dose or volume, sites, technique, consent, photographs and aftercare advice.",
  "GMC guidance: you must examine the patient yourself before prescribing injectable cosmetic medicines. Do not prescribe remotely for patients you have not examined.",
  "Work within your competence, have adequate indemnity, arrange proper follow-up and emergency cover, and market responsibly. Prescription-only medicines such as toxin must not be advertised to the public."]}
 ],
 callout:"Practice task: write your own one-page consultation checklist and compare it with the Harley consent form."},

{id:3,title:"Botulinum toxin",short:"Pharmacology, sites, contraindications and complications",
 notes:[
 {h:"Pharmacology",figs:[F("Neuro Muscular Junction.png","Neuromuscular junction: nerve terminal, acetylcholine release and muscle receptors. Botulinum toxin blocks acetylcholine release here.","Wikimedia Commons"),F("Botulinum toxin 3BTA.png","3D ribbon model of botulinum neurotoxin type A (PDB 3BTA).","Wikimedia Commons, structure from PDB")],items:[
  "Botulinum toxin type A cleaves SNAP-25 and blocks acetylcholine release at the neuromuscular junction, causing reversible chemodenervation.",
  "Onset in about 3 to 5 days (up to a week), peak effect at about 2 weeks, duration roughly 3 to 4 months, sometimes longer.",
  "It is a prescription-only medicine. Units are not interchangeable between brands (for example onabotulinumtoxinA, abobotulinumtoxinA and incobotulinumtoxinA). Always use the dosing and dilution in the product's SmPC and your training tables."]},
 {h:"Common cosmetic sites and principles",figs:[F("1106 Front and Side Views of the Muscles of Facial Expressions numbered.jpg","Muscles of facial expression, front and side views, numbered. Match each muscle to its toxin site.","OpenStax Anatomy and Physiology, CC BY"),F("Doctor performing Botox injection.jpg","Cosmetic botulinum toxin injection into the upper face.","D. Schwarzburg, free use")],items:[
  "Glabella (corrugators and procerus), forehead (frontalis) and lateral canthal lines are the standard licensed upper-face areas for several products. Check each product's licence.",
  "Treat the depressors before the elevators and leave enough frontalis activity to avoid brow ptosis.",
  "Stay well above the orbital rim in the glabella and keep forehead injections away from the brow. Diffusion to the levator palpebrae causes eyelid ptosis.",
  "Dilution changes volume, not dose. Reconstitute exactly as the manufacturer states and note the time and storage conditions."]},
 {h:"Contraindications and cautions",items:[
  "Contraindicated: myasthenia gravis, Lambert-Eaton syndrome and other neuromuscular junction disorders, pregnancy and breastfeeding, infection at the injection site, hypersensitivity to the product.",
  "Caution: aminoglycosides and other drugs that affect neuromuscular transmission, anticoagulants (bruising), previous poor response or suspected antibody-mediated resistance."]},
 {h:"Complications",items:[
  "Common: bruising, headache, injection-site pain, asymmetry.",
  "Eyelid ptosis: appears days after treatment, resolves over weeks. Apraclonidine drops can give a temporary lift of a few millimetres.",
  "Brow ptosis or an over-arched lateral brow ('Spock brow') follows over-treating the medial frontalis or under-treating the lateral fibres.",
  "Rarer: diplopia, dry eye, distant spread (swallowing or breathing difficulty needs urgent care).",
  "Typical aftercare: stay upright for several hours, avoid rubbing or pressing the area, avoid strenuous exercise and heat for 24 hours. Review at about 2 weeks. Avoid retreating sooner than about 3 months without good reason."]}
 ],
 callout:"Dosing is deliberately not listed here. Use your Harley dosing tables and the product SmPC."},

{id:4,title:"Dermal fillers",short:"Rheology, technique, contraindications and complications",
 notes:[
 {h:"Hyaluronic acid filler properties",items:[
  "Cross-linked HA (commonly BDDE) is hydrophilic and reversible with hyaluronidase. Most contain lidocaine.",
  "Key rheology: G-prime (firmness and lift), cohesivity (how well the gel holds together), HA concentration and particle or gel size.",
  "General rule: firmer, more cohesive products for deep structural support (chin, jaw, deep cheek); softer products for superficial or mobile areas such as lips."]},
 {h:"Technique principles",figs:[],items:[
  "Needle or cannula, always with a clear plan for depth. Use slow, low-pressure injection, small aliquots and constant movement. Never inject against resistance.",
  "Techniques include retrograde linear threading, fanning, serial puncture and deep supraperiosteal bolus.",
  "Stop immediately if the skin blanches or the patient reports severe or disproportionate pain.",
  "Sensible progression for a returning injector: nasolabial folds and marionette lines, cheeks, chin, jawline and lips with supervision. Nose, glabella, temple and tear trough need advanced training."]},
 {h:"Contraindications",items:[
  "Pregnancy and breastfeeding, active infection or inflammation at the site, uncontrolled autoimmune disease, allergy to lidocaine or the product, history of anaphylaxis, bleeding disorders or anticoagulation (relative), previous permanent filler in the area (relative), active cold sore for lips."]},
 {h:"Complications",figs:[],items:[
  "Early: bruising, swelling, redness, tenderness, asymmetry and visible lumps.",
  "Vascular occlusion: the most important emergency (see the complications module). It can cause skin necrosis and blindness.",
  "Late: non-inflammatory nodules (placement or volume), inflammatory nodules and delayed-onset reactions (often after dental work, viral illness or vaccination), infection and biofilm, granuloma, Tyndall effect (blue-grey tint from too-superficial placement), migration.",
  "Record product, batch number and expiry for traceability. Report device incidents through the MHRA Yellow Card scheme."]}
 ],
 callout:"Safety rule: if you cannot name the vessels at risk in an area and what you would do if you blocked one, you are not ready to inject there."},

{id:5,title:"Skin treatments",short:"Skin boosters, peels, microneedling and PRP (if covered)",
 notes:[
 {h:"First, scope",items:[
  "Your course covered skin boosters or peels. Treat the rest of this module as revision and only offer what you were signed off on in practice."]},
 {h:"Skin assessment",figs:[F("Influence of pigmentation on skin cancer risk.png","Fitzpatrick scale: skin types I to VI by burning and tanning behaviour. Use it before every peel, microneedling or energy treatment.","Wikimedia Commons")],items:[
  "Fitzpatrick type I to VI guides risk, especially post-inflammatory hyperpigmentation (PIH) in types IV to VI.",
  "Look for active acne, infection, eczema or dermatitis, recent sun exposure or tan, keloid tendency, isotretinoin use, pregnancy and cold sores."]},
 {h:"Skin boosters",figs:[F("Intradermal injection.jpg","An intradermal injection. Skin boosters are placed at this dermal depth in small aliquots.","Wikimedia Commons, CC BY 4.0"),F("Anatomy The Skin - NCI Visuals Online.jpg","Skin layers with glands and vessels: reference for dermal versus subcutaneous placement.","National Cancer Institute, public domain")],items:[
  "Low-viscosity or minimally cross-linked HA placed in the dermis to improve hydration, elasticity and skin quality. Results are gradual and usually need a course of sessions.",
  "Risks: bruising, small papules or lumps, nodules, infection, rarely vascular compromise. Contraindications are similar to filler."]},
 {h:"Chemical peels",items:[
  "Depth ranges from superficial (AHA or BHA such as glycolic, salicylic, mandelic) to medium (for example trichloroacetic acid) to deep (phenol, specialist only).",
  "Risks increase with depth: PIH, scarring, infection, cold sore reactivation, prolonged redness.",
  "Cautions: pregnancy, recent isotretinoin (wait several months before medium or deep peels), active infection, sunburn, keloid history, darker skin types for aggressive peels.",
  "Prepare skin with sun protection and avoid retinoids for several days before. Aftercare: moisturiser, strict SPF, no picking."]},
 {h:"Microneedling and PRP",items:[
  "Microneedling induces collagen through controlled micro-injury with needle depth matched to the area. Avoid over active acne, infection, cold sores, keloid tendency and isotretinoin.",
  "PRP uses the patient's own platelets. Evidence is limited and mixed, it needs blood handling and strict hygiene, and clinics must state claims honestly."]}
 ],
 callout:"Always patch-test or start conservatively on darker skin types, and document skin type before every energy or peel treatment."},

{id:6,title:"Complications and emergencies",short:"Vascular occlusion, anaphylaxis, infection and what to do",
 notes:[
 {h:"Be ready before you inject",figs:[F("Epinephrine 1-1000 (1).JPG","Adrenaline 1:1000 (1 mg/mL) single-dose ampoule: the strength to keep in your emergency kit.","Intropin, Wikimedia Commons")],items:[
  "Know your protocol and keep it in the treatment room. Follow the one you were trained on and national guidance such as the ACE group complications guidance.",
  "Have hyaluronidase in date and immediately available (more than one vial), adrenaline 1 mg/mL ampoules, resuscitation and airway equipment appropriate to the setting, and current basic life support training.",
  "Know the nearest emergency eye service and have a named colleague for cover when you are unavailable."]},
 {h:"Recognising vascular occlusion",figs:[],items:[
  "Immediate or early pain disproportionate to the procedure, blanching, livedo or mottled skin, delayed capillary refill, later dusky or violaceous colour, pustules, ulceration and necrosis.",
  "Visual red flags: sudden visual loss or blurring, eye pain, double vision, ophthalmoplegia, headache or any neurological symptom. This is an emergency."]},
 {h:"Managing vascular occlusion",items:[
  "Stop injecting at once. Act without delay.",
  "Give high-dose hyaluronidase early across the whole affected territory and repeat as your protocol states until perfusion returns. Use warmth and gentle massage and reassess capillary refill.",
  "Escalate to hospital if there is no clear improvement. Any visual symptom means immediate emergency transfer for urgent ophthalmology assessment. Do not wait.",
  "Document timings, doses, clinical signs and photos. Tell your indemnifier promptly."]},
 {h:"Anaphylaxis",figs:[F("Signs and symptoms of anaphylaxis.svg","Signs and symptoms of anaphylaxis by body system.","Mikael Häggström, Wikimedia Commons"),F("Intramuscular site of adrenaline.jpg","Intramuscular site for adrenaline: outer middle third of the thigh over vastus lateralis.","Mikael Häggström, Wikimedia Commons")],items:[
  "Call 999. Give adrenaline intramuscularly: for an adult, 500 micrograms (0.5 mL of 1 mg/mL) into the anterolateral thigh, repeated after 5 minutes if no improvement.",
  "Lie the patient flat with legs raised if hypotensive, give oxygen and follow your resuscitation training. Antihistamine and steroid do not replace adrenaline."]},
 {h:"Infection, nodules and other problems",items:[
  "Suspected infection or abscess: assess, take cultures if possible, treat promptly, hyaluronidase if filler is involved, and refer early if it does not settle.",
  "Non-inflammatory lumps from placement: reassure, massage and hyaluronidase. Inflammatory or delayed nodules: look for triggers and refer or seek advice if they persist.",
  "Eyelid ptosis after toxin: reassure, consider apraclonidine and follow up.",
  "Always give the patient a number to call and see them promptly when they report a problem. Practise duty of candour and report adverse events (MHRA Yellow Card)."]}
 ],
 callout:"Run a mock vascular occlusion drill out loud once a month until the steps and doses are automatic."}
];

var CARDS = [
[1,"What are the five layers of the face from surface inwards?","Skin, subcutaneous fat, muscle and SMAS, deep fat and ligaments, periosteum and bone."],
[1,"Which muscle is the only brow elevator?","Frontalis."],
[1,"Which muscles cause glabellar frown lines?","Corrugator supercilii (medial and downward pull) and procerus (downward pull)."],
[1,"Which muscle causes crow's feet?","The lateral fibres of orbicularis oculi."],
[1,"Why is the nasolabial fold a risk area for filler?","The facial artery runs beside it and becomes the angular artery, which anastomoses with the ophthalmic system."],
[1,"Why can filler in the glabella cause blindness?","Retrograde flow through branches of the ophthalmic artery (supratrochlear, supraorbital, dorsal nasal) can embolise the retinal circulation."],
[1,"Name the motor branches of the facial nerve.","Temporal, zygomatic, buccal, marginal mandibular, cervical."],
[1,"Where are the supraorbital, infraorbital and mental foramina in relation to the pupil?","Roughly in a vertical line through the mid-pupil."],
[1,"Which zones are the highest risk for filler?","Glabella, nose, nasolabial fold, temple, tear trough and forehead."],
[2,"Which drugs and conditions need particular attention before treatment?","Anticoagulants, antiplatelets, isotretinoin, immunosuppressants, aminoglycosides, neuromuscular disease, pregnancy and breastfeeding, autoimmune disease, keloid tendency, cold sores."],
[2,"What must you do before prescribing an injectable cosmetic medicine, according to GMC guidance?","Examine the patient yourself, face to face. No remote prescribing for patients you have not examined."],
[2,"What age restriction applies to cosmetic toxin and filler in England?","They must not be given to anyone under 18."],
[2,"Name three red flags for unsuitability.","Body dysmorphic disorder features, unrealistic expectations, pressure from others, a recent crisis or requests that change repeatedly."],
[2,"What should be recorded for every injectable treatment?","Product, batch number, expiry, dose or volume, sites, technique, consent, photographs and aftercare advice."],
[2,"Why is advertising toxin by name to the public a problem?","It is a prescription-only medicine, and prescription-only medicines cannot be advertised to the public."],
[3,"How does botulinum toxin A work?","It cleaves SNAP-25, blocking acetylcholine release at the neuromuscular junction and causing reversible chemodenervation."],
[3,"What are typical onset, peak and duration for toxin?","Onset about 3 to 5 days, peak about 2 weeks, duration about 3 to 4 months."],
[3,"Are toxin units interchangeable between brands?","No. Always follow the SmPC and your dosing tables for the specific product."],
[3,"Name two absolute contraindications to toxin.","Neuromuscular junction disorders (such as myasthenia gravis or Lambert-Eaton) and pregnancy or breastfeeding."],
[3,"What causes eyelid ptosis after glabellar toxin and how is it managed?","Diffusion to levator palpebrae superioris. Reassure and consider apraclonidine drops for a temporary lift."],
[3,"What causes a 'Spock brow'?","Over-treating the medial frontalis or leaving the lateral frontalis untreated."],
[3,"Why treat depressors before elevators?","To avoid brow ptosis from over-weakening frontalis and to balance brow position."],
[3,"What is the usual review time after toxin?","About 2 weeks, to check effect and offer a top-up if needed."],
[4,"What does G-prime describe in a filler?","Its firmness or elasticity, which relates to lift capacity."],
[4,"Which type of HA filler suits deep structural support, and which suits lips?","Firmer, higher G-prime, cohesive gels for deep structure; softer gels for lips and mobile areas."],
[4,"How is HA filler reversed?","With hyaluronidase."],
[4,"Name filler injection principles that reduce intravascular risk.","Slow low-pressure injection, small aliquots, constant movement, appropriate depth and a good anatomical plan. Aspiration is unreliable."],
[4,"What is the Tyndall effect?","Blue-grey tint from filler placed too superficially."],
[4,"When do delayed-onset inflammatory reactions often occur?","After triggers such as dental work, viral illness or vaccination."],
[4,"Which filler areas need advanced training?","Nose, glabella, temple and tear trough."],
[4,"How should adverse events involving fillers be reported?","Record batch numbers and report through the MHRA Yellow Card scheme."],
[5,"Which Fitzpatrick types carry higher PIH risk after peels or microneedling?","Types IV to VI."],
[5,"What are skin boosters?","Low-viscosity or minimally cross-linked HA placed in the dermis to improve hydration and skin quality."],
[5,"List the depth categories for chemical peels.","Superficial (AHA or BHA), medium (for example TCA), deep (phenol, specialist only)."],
[5,"Which drug history matters before medium or deep peels?","Recent isotretinoin use. Wait several months before the procedure."],
[5,"What aftercare follows a peel?","Moisturiser, strict daily SPF and no picking or peeling."],
[5,"What is the evidence status of PRP for skin?","Limited and mixed, so claims should be honest and conservative."],
[6,"What are the early signs of vascular occlusion?","Disproportionate pain, blanching, mottled or livedo skin and delayed capillary refill."],
[6,"What are the immediate steps for suspected vascular occlusion?","Stop injecting, give high-dose hyaluronidase across the affected area, repeat per protocol, warmth and massage, reassess and escalate."],
[6,"What visual symptoms mean emergency transfer?","Sudden visual loss or blurring, eye pain, double vision, ophthalmoplegia, headache or neurological symptoms."],
[6,"What is the adult dose of IM adrenaline for anaphylaxis?","500 micrograms (0.5 mL of 1 mg/mL) into the anterolateral thigh, repeated after 5 minutes if needed."],
[6,"What should be on hand before every filler session?","Date-checked hyaluronidase (several vials), adrenaline, resuscitation equipment, protocols and an emergency escalation route."],
[6,"What should you do after any complication?","Document fully, review the patient promptly, inform your indemnifier, and report adverse events (MHRA Yellow Card)."]
];

var WEEKS = [
{w:1,t:"Anatomy: layers, muscles",s:["Layers and ageing","Muscles for toxin","Flashcards and drawing"]},
{w:2,t:"Anatomy: vessels, nerves, danger zones",s:["Facial artery and branches","Nerves and foramina","Danger zones and flashcards"]},
{w:3,t:"Assessment: history and suitability",s:["History and contraindications","Psychology and screening","Mock consultation"]},
{w:4,t:"Assessment: consent, records, GMC",s:["Consent and records","GMC cosmetic guidance","Facial assessment and photos"]},
{w:5,t:"Botulinum toxin",s:["Pharmacology and products","Sites and technique","Complications and flashcards"]},
{w:6,t:"Dermal fillers",s:["Rheology and products","Technique and areas","Complications and flashcards"]},
{w:7,t:"Skin treatments and emergencies start",s:["Skin boosters and peels","Microneedling and PRP","Vascular occlusion"]},
{w:8,t:"Emergencies and case review",s:["Anaphylaxis and infection","Mock emergency drill","Full flashcard pass and gaps list"]}
];

var HARLEY = [
"Syllabus and learning outcomes","Theory modules and study materials","Practical logbook and number of supervised treatments","Competency assessments and sign-offs","Awarding organisation and qualification accreditation details","Any outstanding assessments or CPD requirements"
];
var READY = [
"Separate indemnity in place that names the treatments I will offer",
"Employer or training programme director informed of private work, contract checked",
"Mentor agreed and first supervised session booked",
"Emergency protocol, hyaluronidase and adrenaline arrangements written down",
"Consent, photo consent, aftercare and records templates ready",
"Childcare plan that survives short-notice rota changes",
"Latest England licensing position and local council rules checked",
"If my work status limits extra work or self-employment, checked with an adviser"
];

