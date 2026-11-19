(function(){
var ORIG="Original schematic drawn for this site. Simplified and approximate, not to scale.";
window.LH={
L:function(f,c,k){return {local:"img/"+f,c:c,k:k,a:ORIG};},
sec:function(m,h,pages,figs){var it=[];for(var i=0;i<pages.length;i++)it.push(pages[i][0]+": "+pages[i][1]);var o={h:h,items:it};if(figs)o.figs=figs;MODULES[m-1].notes.push(o);},
q:function(m,q,o,a,e){QBANK.push({m:m,q:q,o:o,a:a,e:e});},
tf:function(m,q,t,e){QBANK.push({m:m,q:q+" (True or false?)",o:["True","False","Only sometimes","Depends on the brand","Not stated"],a:t?0:1,e:e});CARDS.push([m,q+" True or false?",(t?"True. ":"False. ")+e]);},
c:function(m,q,a){CARDS.push([m,q,a]);}
};
var H=LH;
// ===== MODULE 2: ASSESSMENT, PSYCHOLOGY, LAW AND ETHICS =====
H.sec(2,"2.1 The aesthetics industry and the practitioner",[
["Background","Aesthetic medicine spans light beauty treatments, non-surgical injectables, dermatology and surgery. Rapid growth has brought in practitioners with very different training, which is why professional standards matter."],
["History","Hyaluronic acid filler (Restylane) gained US FDA approval in 2003 and botulinum toxin for cosmetic glabellar lines in 2002. Demand for less invasive treatment has risen steeply since, as treatments are lower risk, cheaper, quicker to recover from and more socially accepted than surgery."],
["The five Rs","Redraping (surgical lifting), Resurfacing (peels, lasers, needling), Retaining (skincare and cosmeceuticals), Relaxing (toxin for dynamic lines) and Refilling (restoring volume with filler or biostimulators)."],
["Non-surgical versus surgical","Non-surgical: light, laser, radiofrequency and ultrasound devices, injectables, peels, microneedling, mesotherapy. Surgical: facelift, blepharoplasty, rhinoplasty, breast surgery, liposuction, abdominoplasty and hair transplantation."],
["What the practitioner must do","More than inject. You assess the patient, take a history, plan treatment, obtain valid consent, treat safely, document, give aftercare, manage complications and review outcomes."],
["Attributes","An ethical approach, a drive for excellence, protection of vulnerable patients, clear professional boundaries, a person-centred approach and regular reflection on practice."],
["Do no harm","Primum non nocere. Know the evidence for risks and benefits, do not overstate what treatment can achieve, and accept that declining to treat can be the right decision."]]);
H.sec(2,"2.2 Psychology: why patients seek treatment",[
["Why psychology matters","A growing share of aesthetic patients are not ill but are vulnerable to unrealistic expectations. In the UK, about 93% of women report negative thoughts about appearance weekly. Understanding motivation protects both patient and practitioner."],
["Drivers","Body image, social media, cultural norms and psychological factors such as self-esteem, recurrent negative thoughts, and satisfaction with family and friends."],
["Body image and ageing","Adults can struggle when the face in the mirror no longer matches a youthful ideal. Explore what the person actually sees and what they hope will change."],
["Social media","Filtered images and before-and-after posts normalise cosmetic procedures and set ideals that are often unattainable. Treat requests based on a filter or a celebrity with extra care."],
["Cultural factors","Attitudes to changing appearance vary by culture and are shifting towards acceptance. Do not assume what is normal for the patient."],
["Expectation gap","Patient and practitioner goals can differ. Unrealistic expectations are linked to poor psychological outcomes even when the technical result is good."],
["Official reviews","The 2005 Donaldson review found a lack of balanced risk information. The Keogh review stressed that people considering cosmetic intervention need proper psychological consideration, information, and cooling-off time."]]);
H.sec(2,"2.3 Vulnerable groups and body dysmorphic disorder",[
["At-risk groups","Everyone presenting is potentially vulnerable, but take particular care with young people, those with mental health conditions, people in a crisis or bereavement, those with unrealistic expectations, and anyone who has been pressured by a partner."],
["Young people","Many teenagers already feel unable to leave home without make-up. JCCP advice is that treatment under 16 is not advised, and 16 to 18 only with capacity and consent, in their best interest."],
["BDD facts","Body dysmorphic disorder affects around 1 to 2% of people, is a serious psychiatric condition separate from eating disorders, is classified with OCD, and is far more common in aesthetic clinics than in the general population."],
["Myths","BDD is not rare, not new, not only young people, and these patients are not 'difficult people'. They are high risk because treatment rarely helps."],
["Clues","Preoccupation with a minor or unseen flaw, repeated checking or camouflage, dissatisfaction with past treatment, requests for unusual outcomes, belief that a procedure will fix their life, and describing features as disgusting or ugly."],
["Questions to ask","NICE suggests asking: do you worry a lot about your appearance, what do you dislike, how much time does it take up, and does it affect work, social life or relationships?"],
["Suicide risk","BDD carries a high risk of suicidal thoughts. If you suspect it, take it seriously and use a clear pathway rather than simply refusing."],
["What to do","Offer a further appointment, use a short screen (COPS or BDDQ), explain the recommendation kindly, liaise with the GP, and do not treat while you suspect BDD. NICE advises screening these patients out of aesthetic clinics and pointing them to CBT or SSRI-based care."],
["If they refuse help","Insight is often limited. Do not feel pressure because a competitor would treat them. Declining is ethical and protects the patient."],
["Do not treat if","The patient lacks capacity, expectations are unrealistic or unclear, you suspect BDD or a significant mental health problem, or consent is not voluntary."]]);
H.sec(2,"2.4 The consultation and clinical pathway",[
["GMC guidance","Doctors providing cosmetic procedures must be trained and experienced, work with each patient to understand their goals, give honest balanced information and not pressure or promote in a misleading way."],
["Marketing and assessment","Market the physical change, not psychosocial benefits. Do not promise confidence, happiness or a new relationship, because you cannot control those outcomes."],
["Screening tools","Brief questionnaires help routine practice: COPS (Cosmetic Procedure Screening Questionnaire) and BDDQ. They support, but never replace, your judgement."],
["Support pathway","Agree beforehand who you will refer to (a psychologist, psychiatrist or GP), keep a log of referrals and audit outcomes."],
["Cooling off","Give time and written information before a decision. Consider a gap between consultation and treatment, and liaise with the GP where appropriate."],
["Boundaries","Do not let financial or commercial interests affect advice. No treatment of friends or family where judgement could be compromised."]],
[LH.L("consult.svg","Consultation flow for injectable treatments, with the points where you stop or seek advice.","Eight steps from welcome and aims to aftercare. Step 6 (consent) is highlighted. Side boxes show when to pause, decline or delay, and when to refer or seek advice.")]);
H.sec(2,"2.5 Consent and capacity",[
["Consent","Consent is the patient's permission for a treatment. It can be verbal, written or implied, but for injectables always obtain and record written consent."],
["Three conditions","Valid consent must be informed, voluntary and given by a person with capacity. If any one is missing the consent is not valid."],
["Montgomery 2015","The Supreme Court held that doctors must disclose material risks and reasonable alternatives that a reasonable patient, or this particular patient, would want to know. It replaced the doctor-knows-best approach."],
["Informed","Tell the patient the benefits, risks (including rare serious ones such as blindness and necrosis), alternatives including doing nothing, costs, expected recovery and what happens if it goes wrong."],
["Voluntary","Free from pressure from partners, family, or sales techniques such as time-limited discounts."],
["Capacity","Start by assuming capacity. The Mental Capacity Act uses a two-stage test: is there an impairment of mind or brain, and if so does it stop the person understanding, retaining, weighing or communicating the decision?"],
["Ongoing consent","Consent can be withdrawn at any time. Re-consent for repeat treatments, even minor ones, and confirm any changes to the plan before you inject."],
["Children","16 to 18 only with capacity or parental consent and clear best interests. Below 16 treatment is not advised."]]);
H.sec(2,"2.6 Confidentiality, data and records",[
["Confidentiality","The duty of confidentiality encourages honest disclosure. It rests on common law, the Human Rights Act (Article 8) and data protection law."],
["Breaking it","Only when the patient consents, when required by law, or in the public interest: public protection, child protection, or serious risk of harm to the patient. A partner or family member asking is not a reason."],
["Data protection","The Data Protection Act 2018 and UK GDPR: lawful basis, secure storage, patient access, accuracy and no longer than necessary. Medical data is special category data."],
["Information governance","Define scope, roles, policies, procedures, third-party arrangements, business continuity, and audit and review."],
["Primary and secondary use","Primary use is care, such as knowing the history and previous treatments. Secondary use is audit and service planning."],
["Records","Record the history, assessment, consent, product name, batch number and expiry, sites, volumes or units, adverse events and aftercare. Keep as long as local guidance says (commonly many years, and longer for minors)."],
["Photographs","Take standard views before and after, store securely, and obtain separate written consent for any use in marketing or teaching."]]);
H.sec(2,"2.7 Professional standards, regulation and legislation",[
["JCCP and CPSA","The Joint Council for Cosmetic Practitioners maintains a register, sets practitioner and premises standards and oversees training providers. The Cosmetic Practice Standards Authority writes clinical guidelines and a code of conduct covering the whole patient and practitioner journey."],
["Prescribing","Botulinum toxin is prescription-only. It can be prescribed by doctors, dentists and independent prescribers (including nurses with V300 and pharmacists with training) after a face-to-face consultation. Beauty therapists cannot."],
["Off-licence","Hyaluronidase for filler complications is off-licence. Toxin is licensed from 18 to 65 years. Brands differ in licensed areas and doses. Document your reasoning when practising off-licence."],
["Controlled drugs","Misuse of Drugs Regulations 2001 apply to controlled drugs. Aesthetic practice rarely uses them, but you must know storage and record-keeping rules."],
["Advertising","The ASA and CAP codes apply. Prescription-only medicines such as toxin must not be advertised to the public. Promote consultation, not discounts, prizes or celebrity endorsements, and do not target children."],
["Equality Act 2010","Nine protected characteristics: age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, sexual orientation. Know direct and indirect discrimination, harassment and victimisation."],
["Premises","Safe, clean, suitable premises, correct storage of medicines in locked areas, clinical waste and sharps disposal, and fridge temperature logs."],
["Insurance","Hold professional indemnity that covers every treatment you provide. Doctors have a legal duty to hold adequate indemnity."]]);
H.sec(2,"2.8 When things go wrong: candour, complaints, incidents",[
["Complaints","Respond promptly, listen, apologise sincerely (saying sorry is not an admission of guilt), follow a written policy and involve your indemnifier early."],
["Duty of candour","GMC and NMC require you to be open when something goes wrong: tell the patient, apologise, offer remedy and explain what happens next."],
["Whistle blowing","Raise concerns about unsafe or unethical practice. The JCCP places a duty on practitioners to do so."],
["Incident reporting","Report to the manufacturer, MHRA Yellow Card, your indemnifier and any register. Collect data to learn from."],
["Conscientious objection","You may decline a treatment on personal moral or religious grounds, but must not discriminate and must not leave the patient without access to care."],
["After treatment","CPSA and JCCP: give written aftercare, an emergency contact, and arrange review."]]);
// quizzes (Harley-style)
H.tf(2,"The first FDA-approved hyaluronic acid filler was Restylane in the UK in 2013.",false,"It was approved in the US in 2003.");
H.tf(2,"The market for non-surgical treatments is stagnating.",false,"It is growing quickly because treatments are cheaper, lower risk and more accepted.");
H.tf(2,"Setting realistic expectations is a core part of an aesthetic practitioner's role.",true,"It improves shared decisions, outcomes and satisfaction.");
H.tf(2,"Continuing professional development is unnecessary once basic skills are learned.",false,"Ongoing learning and reflection are essential.");
H.tf(2,"The CPSA oversees training organisations and the JCCP writes clinical guidelines.",false,"It is the other way round: the JCCP oversees training, register and premises standards, while the CPSA sets clinical and practice standards and writes guidance.");
H.tf(2,"BDD affects only a small number of people and is rare in aesthetic clinics.",false,"It affects about 1 to 2% of the population and is much more common among cosmetic patients.");
H.tf(2,"If you suspect BDD you should treat anyway so the patient does not go elsewhere.",false,"Do not treat; screen, explain kindly and refer.");
H.tf(2,"Consent for a repeat treatment is not needed if the patient had the same treatment before.",false,"Re-consent every time, even for minor treatments.");
H.tf(2,"A partner may be told what treatment a patient had if he asks.",false,"Confidentiality applies unless the patient consents or another lawful exception applies.");
H.tf(2,"Beauty therapists may prescribe botulinum toxin.",false,"Only doctors, dentists and qualified independent prescribers may prescribe it.");
H.tf(2,"A patient aged 15 may be treated if her mother agrees.",false,"Treatment under 16 is not advised.");
H.tf(2,"Advertising botulinum toxin directly to the public is permitted if it is discounted.",false,"Prescription-only medicines must not be advertised to the public.");
H.tf(2,"Saying sorry to an upset patient is an admission of guilt.",false,"An apology is good practice and not an admission of liability.");
H.q(2,"Which of the following is a feature of valid consent?",["Informed, voluntary and with capacity","Signed on arrival","Given by a relative","Verbal only","Obtained by the receptionist"],0,"All three: informed, voluntary, with capacity.");
H.q(2,"Which case changed the law on disclosure of risks?",["Bolam","Montgomery v Lanarkshire","Donoghue v Stevenson","Bolitho","Caparo"],1,"Montgomery (2015) requires disclosure of material risks and alternatives.");
H.q(2,"When may confidentiality be breached?",["A relative is curious","The patient is at serious risk of harm","A colleague wants a story","The patient prefers GP not told","Staff are interested"],1,"Public protection, child protection or serious risk of harm, or consent or legal requirement.");
H.q(2,"Which test is used for capacity?",["Two-stage test of the Mental Capacity Act","Glasgow scale","Mini-mental score only","Age","Income"],0,"Impairment of brain function, then inability to understand, retain, weigh or communicate.");
H.q(2,"Which groups are protected by the Equality Act?",["Nine characteristics including age, sex and race","Only race","Only disability","Income groups","Patients only"],0,"Nine protected characteristics.");
H.q(2,"Which is an acceptable form of marketing?",["Free consultation promotion","Famous doctor endorsement","Adverts naming toxin","Treatments as prizes","Marketing to children"],0,"Promote consultation, not prescription-only medicines or inducements.");
H.q(2,"What is the best response to suspected BDD?",["Treat modestly","Decline, explain compassionately, screen and refer via GP","Ignore","Treat after discount","Tell them they are imagining it"],1,"Do not treat; screen and refer kindly.");
H.q(2,"Which of these suggests the patient lacks capacity?",["Cannot understand information relevant to the decision","Can retain information","Understands risk and benefit","Can communicate","Can weigh the information"],0,"Inability to understand, retain, weigh or communicate suggests lack of capacity.");
H.q(2,"A patient is pressured by her partner to have fuller lips. What is wrong with consent?",["Not informed","Not voluntary","No capacity","Nothing","Not written"],1,"Consent must be free from pressure.");
H.q(2,"Hyaluronidase for filler complications is:",["Licensed","Off-licence","Controlled drug","Banned","Over the counter"],1,"It is used off-licence, so document your reasoning.");
H.c(2,"List the three conditions for valid consent.","Informed, voluntary, and given by someone with capacity.");
H.c(2,"What does the Mental Capacity Act two-stage test ask?","1. Is there an impairment of brain or mind? 2. Does it stop the person understanding, retaining, weighing or communicating the decision?");
H.c(2,"What is the Montgomery principle?","Disclose material risks and reasonable alternatives a reasonable patient would want to know, tailored to the individual.");
H.c(2,"BDD: key facts for aesthetics.","About 1 to 2% of people, common in cosmetic patients, high suicide risk, rarely improved by procedures. Screen, do not treat, refer.");
H.c(2,"Which screening tools can you use?","COPS and BDDQ (and BDDE-SR) as brief aids; they do not replace judgement.");
H.c(2,"The five Rs of aesthetic treatment.","Redraping, Resurfacing, Retaining, Relaxing, Refilling.");
H.c(2,"Who may prescribe botulinum toxin?","Doctors, dentists and independent prescribers (nurses with V300, pharmacists) after a face-to-face consultation.");
H.c(2,"What must be recorded for each injectable?","Product, batch, expiry, sites, volume or units, consent, adverse events, aftercare and who treated.");
H.c(2,"Duty of candour in one line.","Be open and honest when something goes wrong: tell, apologise, offer remedy and explain.");
H.c(2,"Which professional bodies set standards?","JCCP (register, training oversight, premises) and CPSA (clinical standards and code of conduct).");
H.c(2,"What age can young people be treated?","JCCP: not under 16; 16 to 18 only with capacity or parental consent and clear best interests.");
H.c(2,"What makes a good cooling-off arrangement?","Give written information and time between consultation and treatment, and consider GP liaison.");
})();
