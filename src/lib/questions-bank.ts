// NMCN Exam Questions Bank - 208 Questions
// Categories: Anatomy & Physiology, Pharmacology, Medical-Surgical Nursing, 
// Maternal & Child Health, Community Health Nursing, Mental Health Nursing,
// Nursing Fundamentals, Professional Nursing

export interface Question {
  id: string
  category: string
  question: string
  options: string[]
  correctAnswer: number // 0-indexed
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  reference?: string
}

export const categories = [
  { id: 'anatomy', name: 'Anatomy & Physiology', icon: '🫀', color: 'bg-red-500' },
  { id: 'pharmacology', name: 'Pharmacology', icon: '💊', color: 'bg-purple-500' },
  { id: 'medsurg', name: 'Medical-Surgical Nursing', icon: '🏥', color: 'bg-blue-500' },
  { id: 'maternal', name: 'Maternal & Child Health', icon: '👶', color: 'bg-pink-500' },
  { id: 'community', name: 'Community Health Nursing', icon: '🌍', color: 'bg-green-500' },
  { id: 'mental', name: 'Mental Health Nursing', icon: '🧠', color: 'bg-teal-500' },
  { id: 'fundamentals', name: 'Nursing Fundamentals', icon: '📋', color: 'bg-orange-500' },
  { id: 'professional', name: 'Professional Nursing', icon: '⚖️', color: 'bg-indigo-500' },
]

export const questions: Question[] = [
  // ==================== ANATOMY & PHYSIOLOGY (26 Questions) ====================
  {
    id: 'a1',
    category: 'anatomy',
    question: 'The normal range of blood pH in a healthy adult is:',
    options: ['7.0 - 7.2', '7.35 - 7.45', '7.5 - 7.6', '6.8 - 7.0'],
    correctAnswer: 1,
    explanation: 'Normal blood pH is tightly regulated between 7.35 and 7.45. Values below 7.35 indicate acidosis, while values above 7.45 indicate alkalosis. This narrow range is essential for proper cellular function and enzyme activity.',
    difficulty: 'easy',
    reference: 'Guyton & Hall Textbook of Medical Physiology'
  },
  {
    id: 'a2',
    category: 'anatomy',
    question: 'The primary function of the mitochondria in a cell is:',
    options: ['Protein synthesis', 'Energy production (ATP)', 'Cell division', 'Waste removal'],
    correctAnswer: 1,
    explanation: 'Mitochondria are known as the "powerhouse of the cell" because they produce adenosine triphosphate (ATP) through oxidative phosphorylation. ATP is the primary energy currency used by cells for all metabolic processes.',
    difficulty: 'easy',
    reference: 'Ross & Wilson Anatomy and Physiology'
  },
  {
    id: 'a3',
    category: 'anatomy',
    question: 'Which of the following is NOT a component of the nephron?',
    options: ['Glomerulus', "Bowman's capsule", 'Loop of Henle', 'Hepatic vein'],
    correctAnswer: 3,
    explanation: 'The nephron is the functional unit of the kidney and consists of the glomerulus, Bowmans capsule, proximal convoluted tubule, Loop of Henle, distal convoluted tubule, and collecting duct. The hepatic vein is part of the liver blood supply.',
    difficulty: 'medium',
    reference: 'Tortora Principles of Anatomy and Physiology'
  },
  {
    id: 'a4',
    category: 'anatomy',
    question: 'The heart valve located between the left atrium and left ventricle is the:',
    options: ['Tricuspid valve', 'Mitral valve', 'Pulmonary valve', 'Aortic valve'],
    correctAnswer: 1,
    explanation: 'The mitral valve (also called bicuspid valve) is located between the left atrium and left ventricle. It has two cusps and prevents backflow of blood into the left atrium during ventricular contraction.',
    difficulty: 'easy',
    reference: 'Guyton & Hall Textbook of Medical Physiology'
  },
  {
    id: 'a5',
    category: 'anatomy',
    question: 'The normal platelet count in adults ranges from:',
    options: ['50,000 - 100,000/μL', '150,000 - 400,000/μL', '500,000 - 700,000/μL', '1,000 - 5,000/μL'],
    correctAnswer: 1,
    explanation: 'Normal platelet count is 150,000 to 400,000 per microliter of blood. Platelets are essential for blood clotting. Counts below 150,000 indicate thrombocytopenia, while counts above 400,000 indicate thrombocytosis.',
    difficulty: 'medium',
    reference: 'Essential Haematology'
  },
  {
    id: 'a6',
    category: 'anatomy',
    question: 'Which cranial nerve controls the movement of the eyeball?',
    options: ['Olfactory nerve (I)', 'Optic nerve (II)', 'Oculomotor nerve (III)', 'Vagus nerve (X)'],
    correctAnswer: 2,
    explanation: 'The oculomotor nerve (CN III) controls most eye movements including the superior, inferior, and medial rectus muscles, as well as the inferior oblique muscle. It also controls the pupillary sphincter and ciliary muscle.',
    difficulty: 'medium',
    reference: 'Snell Clinical Anatomy'
  },
  {
    id: 'a7',
    category: 'anatomy',
    question: 'The primary site of gas exchange in the lungs is the:',
    options: ['Bronchi', 'Bronchioles', 'Alveoli', 'Trachea'],
    correctAnswer: 2,
    explanation: 'The alveoli are the primary site of gas exchange in the lungs. They are thin-walled sacs surrounded by capillaries where oxygen diffuses into the blood and carbon dioxide diffuses out. There are approximately 300 million alveoli in the lungs.',
    difficulty: 'easy',
    reference: 'Guyton & Hall Textbook of Medical Physiology'
  },
  {
    id: 'a8',
    category: 'anatomy',
    question: 'The hormone produced by the beta cells of the pancreas is:',
    options: ['Glucagon', 'Insulin', 'Somatostatin', 'Cortisol'],
    correctAnswer: 1,
    explanation: 'Insulin is produced by the beta cells of the pancreatic islets (islets of Langerhans). It lowers blood glucose levels by promoting glucose uptake by cells and glycogen synthesis in the liver. Glucagon is produced by alpha cells.',
    difficulty: 'easy',
    reference: 'Guyton & Hall Textbook of Medical Physiology'
  },
  {
    id: 'a9',
    category: 'anatomy',
    question: 'The normal glomerular filtration rate (GFR) in adults is approximately:',
    options: ['25 mL/min', '125 mL/min', '500 mL/min', '1000 mL/min'],
    correctAnswer: 1,
    explanation: 'The normal GFR is approximately 125 mL/min (about 180 L/day). GFR is a key indicator of kidney function. Values below 60 mL/min for 3 months or more indicate chronic kidney disease.',
    difficulty: 'medium',
    reference: 'Brenner & Rector The Kidney'
  },
  {
    id: 'a10',
    category: 'anatomy',
    question: 'Which of the following is the longest bone in the human body?',
    options: ['Tibia', 'Femur', 'Humerus', 'Fibula'],
    correctAnswer: 1,
    explanation: 'The femur (thigh bone) is the longest and strongest bone in the human body. It supports the weight of the body and enables locomotion. The average adult femur is about 48 cm long.',
    difficulty: 'easy',
    reference: 'Gray\'s Anatomy'
  },
  {
    id: 'a11',
    category: 'anatomy',
    question: 'The spinal cord terminates at which vertebral level in adults?',
    options: ['T12', 'L1-L2', 'L4-L5', 'S1'],
    correctAnswer: 1,
    explanation: 'In adults, the spinal cord typically terminates at the lower border of L1 or upper border of L2 vertebra. This is important to know for lumbar puncture procedures to avoid damaging the spinal cord.',
    difficulty: 'medium',
    reference: 'Snell Clinical Anatomy'
  },
  {
    id: 'a12',
    category: 'anatomy',
    question: 'The liver receives its blood supply from:',
    options: ['Hepatic artery only', 'Portal vein only', 'Hepatic artery and portal vein', 'Hepatic vein'],
    correctAnswer: 2,
    explanation: 'The liver has a dual blood supply: the hepatic artery (25-30% of blood flow, oxygen-rich) and the portal vein (70-75% of blood flow, nutrient-rich from the GI tract). The hepatic vein drains blood from the liver.',
    difficulty: 'medium',
    reference: 'Guyton & Hall Textbook of Medical Physiology'
  },
  {
    id: 'a13',
    category: 'anatomy',
    question: 'The normal intracranial pressure (ICP) ranges from:',
    options: ['0-5 mmHg', '5-15 mmHg', '20-30 mmHg', '35-45 mmHg'],
    correctAnswer: 1,
    explanation: 'Normal ICP is 5-15 mmHg in adults. Sustained ICP above 20 mmHg requires treatment. Increased ICP can lead to brain herniation and death if not managed promptly.',
    difficulty: 'medium',
    reference: 'Hickey Neurological and Neurosurgical Nursing'
  },
  {
    id: 'a14',
    category: 'anatomy',
    question: 'Which part of the brain regulates body temperature?',
    options: ['Cerebrum', 'Cerebellum', 'Hypothalamus', 'Medulla oblongata'],
    correctAnswer: 2,
    explanation: 'The hypothalamus is the bodys thermostat and regulates body temperature. It also controls hunger, thirst, sleep-wake cycles, and releases hormones that regulate the pituitary gland.',
    difficulty: 'easy',
    reference: 'Guyton & Hall Textbook of Medical Physiology'
  },
  {
    id: 'a15',
    category: 'anatomy',
    question: 'The normal serum sodium level is:',
    options: ['100-110 mEq/L', '136-145 mEq/L', '155-165 mEq/L', '170-180 mEq/L'],
    correctAnswer: 1,
    explanation: 'Normal serum sodium is 136-145 mEq/L. Hyponatremia (<135 mEq/L) can cause confusion and seizures. Hypernatremia (>145 mEq/L) can cause thirst, confusion, and coma. Sodium is essential for fluid balance and nerve function.',
    difficulty: 'easy',
    reference: 'Med-Surg Nursing'
  },
  {
    id: 'a16',
    category: 'anatomy',
    question: 'The pacemaker of the heart is located in the:',
    options: ['AV node', 'SA node', 'Bundle of His', 'Purkinje fibers'],
    correctAnswer: 1,
    explanation: 'The sinoatrial (SA) node, located in the right atrium near the superior vena cava, is the natural pacemaker of the heart. It initiates electrical impulses at 60-100 times per minute in a normal adult.',
    difficulty: 'easy',
    reference: 'Guyton & Hall Textbook of Medical Physiology'
  },
  {
    id: 'a17',
    category: 'anatomy',
    question: 'Which type of white blood cell is most abundant in the blood?',
    options: ['Eosinophil', 'Basophil', 'Neutrophil', 'Lymphocyte'],
    correctAnswer: 2,
    explanation: 'Neutrophils are the most abundant WBCs (50-70% of total WBCs). They are the first responders to infection and are particularly effective against bacteria. Neutrophilia is seen in acute bacterial infections.',
    difficulty: 'medium',
    reference: 'Essential Haematology'
  },
  {
    id: 'a18',
    category: 'anatomy',
    question: 'The main function of the large intestine is:',
    options: ['Digestion of proteins', 'Absorption of nutrients', 'Water absorption and feces formation', 'Production of digestive enzymes'],
    correctAnswer: 2,
    explanation: 'The large intestine primarily absorbs water and electrolytes from indigestible food matter and forms feces. It also houses beneficial bacteria that produce vitamins K and B complex.',
    difficulty: 'easy',
    reference: 'Guyton & Hall Textbook of Medical Physiology'
  },
  {
    id: 'a19',
    category: 'anatomy',
    question: 'The tympanic membrane is located in the:',
    options: ['Nose', 'Eye', 'Ear', 'Throat'],
    correctAnswer: 2,
    explanation: 'The tympanic membrane (eardrum) is a thin membrane that separates the external ear from the middle ear. It vibrates in response to sound waves and transmits these vibrations to the ossicles.',
    difficulty: 'easy',
    reference: 'Snell Clinical Anatomy'
  },
  {
    id: 'a20',
    category: 'anatomy',
    question: 'Normal cerebrospinal fluid (CSF) glucose level is approximately:',
    options: ['20-30 mg/dL', '40-70 mg/dL (2/3 of blood glucose)', '100-120 mg/dL', '150-200 mg/dL'],
    correctAnswer: 1,
    explanation: 'CSF glucose is normally about 2/3 of blood glucose levels (40-70 mg/dL). Low CSF glucose (hypoglycorrhachia) is seen in bacterial meningitis, tuberculosis meningitis, and fungal meningitis.',
    difficulty: 'hard',
    reference: 'Hickey Neurological and Neurosurgical Nursing'
  },
  {
    id: 'a21',
    category: 'anatomy',
    question: 'The primary muscle of respiration is the:',
    options: ['Intercostal muscles', 'Diaphragm', 'Sternocleidomastoid', 'Abdominal muscles'],
    correctAnswer: 1,
    explanation: 'The diaphragm is the primary muscle of respiration. During inspiration, it contracts and flattens, creating negative pressure in the thoracic cavity. It accounts for about 75% of inspiratory effort during quiet breathing.',
    difficulty: 'easy',
    reference: 'Guyton & Hall Textbook of Medical Physiology'
  },
  {
    id: 'a22',
    category: 'anatomy',
    question: 'Which hormone is responsible for milk let-down during breastfeeding?',
    options: ['Prolactin', 'Oxytocin', 'Estrogen', 'Progesterone'],
    correctAnswer: 1,
    explanation: 'Oxytocin is responsible for the milk ejection reflex (let-down). Prolactin stimulates milk production. Oxytocin causes contraction of myoepithelial cells around the alveoli, pushing milk into the ducts.',
    difficulty: 'medium',
    reference: 'Guyton & Hall Textbook of Medical Physiology'
  },
  {
    id: 'a23',
    category: 'anatomy',
    question: 'The normal serum potassium level is:',
    options: ['1.5-2.5 mEq/L', '3.5-5.0 mEq/L', '6.0-7.5 mEq/L', '8.0-10.0 mEq/L'],
    correctAnswer: 1,
    explanation: 'Normal serum potassium is 3.5-5.0 mEq/L. Both hypokalemia and hyperkalemia can be life-threatening due to effects on cardiac rhythm. Potassium is essential for nerve conduction and muscle contraction.',
    difficulty: 'easy',
    reference: 'Med-Surg Nursing'
  },
  {
    id: 'a24',
    category: 'anatomy',
    question: 'The function of the epiglottis is to:',
    options: ['Produce sound', 'Prevent food from entering the airway', 'Filter inhaled air', 'Warm inhaled air'],
    correctAnswer: 1,
    explanation: 'The epiglottis is a flap of cartilage that covers the trachea during swallowing to prevent food and liquids from entering the airway. It opens during breathing to allow air passage to the lungs.',
    difficulty: 'easy',
    reference: 'Guyton & Hall Textbook of Medical Physiology'
  },
  {
    id: 'a25',
    category: 'anatomy',
    question: 'The normal hematocrit value for an adult male is:',
    options: ['25-30%', '40-54%', '60-70%', '75-85%'],
    correctAnswer: 1,
    explanation: 'Normal hematocrit for adult males is 40-54% and for adult females is 36-48%. Hematocrit measures the percentage of red blood cells in blood. Low values indicate anemia; high values may indicate polycythemia or dehydration.',
    difficulty: 'medium',
    reference: 'Essential Haematology'
  },
  {
    id: 'a26',
    category: 'anatomy',
    question: 'Which structure connects the middle ear to the nasopharynx?',
    options: ['Eustachian tube', 'External auditory canal', 'Oval window', 'Round window'],
    correctAnswer: 0,
    explanation: 'The Eustachian tube (pharyngotympanic tube) connects the middle ear to the nasopharynx. It equalizes pressure on both sides of the tympanic membrane and drains secretions from the middle ear. Dysfunction can lead to otitis media.',
    difficulty: 'medium',
    reference: 'Snell Clinical Anatomy'
  },

  // ==================== PHARMACOLOGY (26 Questions) ====================
  {
    id: 'p1',
    category: 'pharmacology',
    question: 'The "five rights" of medication administration include all EXCEPT:',
    options: ['Right patient', 'Right time', 'Right diagnosis', 'Right dose'],
    correctAnswer: 2,
    explanation: 'The five rights of medication administration are: Right patient, Right drug, Right dose, Right route, and Right time. "Right diagnosis" is not part of the traditional five rights, though some institutions add "right documentation" and "right reason".',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'p2',
    category: 'pharmacology',
    question: 'The antidote for opioid overdose is:',
    options: ['Atropine', 'Naloxone', 'Flumazenil', 'Vitamin K'],
    correctAnswer: 1,
    explanation: 'Naloxone (Narcan) is the antidote for opioid overdose. It is an opioid antagonist that rapidly reverses opioid effects including respiratory depression. The onset of action is 1-2 minutes when given IV.',
    difficulty: 'easy',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p3',
    category: 'pharmacology',
    question: 'Which of the following drugs should NOT be taken with grapefruit juice?',
    options: ['Paracetamol', 'Statins', 'Vitamin C', 'Iron supplements'],
    correctAnswer: 1,
    explanation: 'Grapefruit juice inhibits CYP3A4 enzymes in the intestine, which can significantly increase blood levels of many drugs including statins, calcium channel blockers, and some immunosuppressants. This can lead to toxicity.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p4',
    category: 'pharmacology',
    question: 'Therapeutic drug monitoring is essential for which of the following medications?',
    options: ['Paracetamol', 'Phenytoin', 'Ibuprofen', 'Omeprazole'],
    correctAnswer: 1,
    explanation: 'Phenytoin has a narrow therapeutic index (10-20 mcg/mL) and exhibits non-linear pharmacokinetics, making therapeutic drug monitoring essential. Toxicity can occur at levels only slightly above the therapeutic range.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p5',
    category: 'pharmacology',
    question: 'The most common side effect of opioid analgesics is:',
    options: ['Diarrhea', 'Constipation', 'Hypertension', 'Insomnia'],
    correctAnswer: 1,
    explanation: 'Constipation is the most common side effect of opioid analgesics, affecting up to 90% of patients. Unlike other side effects, tolerance to constipation does not develop. Prophylactic laxatives are often recommended.',
    difficulty: 'easy',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p6',
    category: 'pharmacology',
    question: 'Which of the following antibiotics can cause teeth discoloration in children?',
    options: ['Penicillin', 'Tetracycline', 'Ciprofloxacin', 'Metronidazole'],
    correctAnswer: 1,
    explanation: 'Tetracyclines can cause permanent teeth discoloration (yellow-gray-brown) when given to children under 8 years or to pregnant women. They also inhibit bone growth in premature infants. Contraindicated in pregnancy and children.',
    difficulty: 'easy',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p7',
    category: 'pharmacology',
    question: 'Before administering furosemide (Lasix), the nurse should check the patient\'s:',
    options: ['Blood glucose', 'Potassium level', 'Hemoglobin', 'Platelet count'],
    correctAnswer: 1,
    explanation: 'Furosemide is a loop diuretic that can cause significant potassium loss (hypokalemia). Potassium levels should be checked before and during therapy. Hypokalemia can lead to cardiac arrhythmias.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p8',
    category: 'pharmacology',
    question: 'The recommended site for intramuscular injection in infants is the:',
    options: ['Deltoid muscle', 'Dorsogluteal site', 'Ventrogluteal site', 'Vastus lateralis'],
    correctAnswer: 3,
    explanation: 'The vastus lateralis muscle is the preferred site for IM injections in infants and young children. It is well-developed, free of major nerves and blood vessels, and can accommodate up to 1 mL of medication.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'p9',
    category: 'pharmacology',
    question: 'Which of the following is NOT a sign of digoxin toxicity?',
    options: ['Nausea and vomiting', 'Visual disturbances (yellow halos)', 'Bradycardia', 'Hypertension'],
    correctAnswer: 3,
    explanation: 'Digoxin toxicity causes nausea/vomiting, visual disturbances (yellow/green halos, blurred vision), bradycardia, and cardiac arrhythmias. Hypertension is NOT associated with digoxin toxicity. Therapeutic range is 0.5-2.0 ng/mL.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p10',
    category: 'pharmacology',
    question: 'Insulin should be stored:',
    options: ['In the freezer', 'At room temperature only', 'In the refrigerator (unopened vials)', 'In direct sunlight'],
    correctAnswer: 2,
    explanation: 'Unopened insulin vials should be stored in the refrigerator (2-8°C). Opened vials can be kept at room temperature for up to 28 days. Insulin should never be frozen or exposed to direct sunlight or heat.',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'p11',
    category: 'pharmacology',
    question: 'The antidote for heparin overdose is:',
    options: ['Vitamin K', 'Protamine sulfate', 'Fresh frozen plasma', 'Platelets'],
    correctAnswer: 1,
    explanation: 'Protamine sulfate is the antidote for heparin overdose. It neutralizes heparin by forming a stable complex. The dose is 1 mg protamine per 100 units of heparin. For warfarin overdose, Vitamin K is the antidote.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p12',
    category: 'pharmacology',
    question: 'Which drug is contraindicated in patients with asthma?',
    options: ['Albuterol', 'Propranolol', 'Aminophylline', 'Montelukast'],
    correctAnswer: 1,
    explanation: 'Propranolol is a non-selective beta-blocker that can cause bronchoconstriction by blocking beta-2 receptors in the bronchi. It is contraindicated in asthma. Selective beta-1 blockers may be used with caution.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p13',
    category: 'pharmacology',
    question: 'The maximum dose of paracetamol (acetaminophen) for adults in 24 hours is:',
    options: ['2 grams', '4 grams', '6 grams', '8 grams'],
    correctAnswer: 1,
    explanation: 'The maximum daily dose of paracetamol for healthy adults is 4 grams. For chronic alcohol users or those with liver disease, the maximum should be reduced to 2 grams. Overdose causes hepatotoxicity due to formation of toxic metabolites.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p14',
    category: 'pharmacology',
    question: 'Which of the following medications requires monitoring of blood levels?',
    options: ['Metformin', 'Lithium', 'Paracetamol', 'Aspirin'],
    correctAnswer: 1,
    explanation: 'Lithium has a very narrow therapeutic index (0.6-1.2 mEq/L). Levels above 1.5 mEq/L can cause toxicity. Regular monitoring of lithium levels, thyroid function, and renal function is essential during therapy.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p15',
    category: 'pharmacology',
    question: 'Administration of which medication requires the nurse to wear gloves?',
    options: ['Oral tablets', 'Chemotherapeutic drugs', 'Intravenous fluids', 'Sublingual medications'],
    correctAnswer: 1,
    explanation: 'Chemotherapeutic drugs are hazardous and require special handling precautions including double gloving, gowns, and eye protection. They can be absorbed through skin and mucous membranes and pose risks to healthcare workers.',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'p16',
    category: 'pharmacology',
    question: 'The half-life of a drug is defined as:',
    options: ['Time for the drug to reach peak concentration', 'Time for plasma concentration to decrease by half', 'Time for drug to be completely eliminated', 'Time for drug to be absorbed'],
    correctAnswer: 1,
    explanation: 'Half-life (t½) is the time required for plasma concentration of a drug to decrease by 50%. It takes approximately 4-5 half-lives for a drug to be eliminated from the body and to reach steady state during continuous dosing.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p17',
    category: 'pharmacology',
    question: 'Which of the following drugs can cause "red man syndrome"?',
    options: ['Penicillin', 'Vancomycin', 'Gentamicin', 'Metronidazole'],
    correctAnswer: 1,
    explanation: 'Red man syndrome is a histamine-mediated reaction to rapid IV infusion of vancomycin, characterized by flushing, rash, and hypotension. It can be prevented by slow infusion (over 60 minutes) and antihistamine premedication.',
    difficulty: 'hard',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p18',
    category: 'pharmacology',
    question: 'The recommended route of administration for atropine in organophosphate poisoning is:',
    options: ['Oral', 'Subcutaneous', 'Intravenous', 'Intramuscular'],
    correctAnswer: 2,
    explanation: 'In organophosphate poisoning, IV atropine is preferred for rapid effect. Large doses may be needed (2-5 mg initially, repeated every 5-10 minutes until atropinization is achieved). IV ensures quick absorption and effect.',
    difficulty: 'hard',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p19',
    category: 'pharmacology',
    question: 'A patient on warfarin should avoid foods rich in:',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin K', 'Vitamin D'],
    correctAnswer: 2,
    explanation: 'Warfarin works by inhibiting vitamin K-dependent clotting factors. Foods high in vitamin K (green leafy vegetables like spinach, kale) can reduce warfarins effectiveness. Patients should maintain consistent vitamin K intake.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p20',
    category: 'pharmacology',
    question: 'Which of the following is a side effect of corticosteroid therapy?',
    options: ['Weight loss', 'Hypoglycemia', 'Moon face and buffalo hump', 'Hypotension'],
    correctAnswer: 2,
    explanation: 'Long-term corticosteroid therapy causes Cushingoid features including moon face, buffalo hump, central obesity, and thin extremities. Other side effects include hyperglycemia, hypertension, osteoporosis, and increased infection risk.',
    difficulty: 'easy',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p21',
    category: 'pharmacology',
    question: 'When administering intravenous potassium, the nurse should:',
    options: ['Administer as a bolus push', 'Dilute in IV fluids and administer slowly', 'Give undiluted through a small vein', 'Administer rapidly to correct hypokalemia'],
    correctAnswer: 1,
    explanation: 'IV potassium must always be diluted and given slowly (not more than 10-20 mEq/hour). Rapid infusion can cause fatal arrhythmias. Potassium should never be given as IV push. Cardiac monitoring is recommended.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'p22',
    category: 'pharmacology',
    question: 'Angiotensin-converting enzyme (ACE) inhibitors commonly cause which side effect?',
    options: ['Dry cough', 'Constipation', 'Blurred vision', 'Weight gain'],
    correctAnswer: 0,
    explanation: 'ACE inhibitors (e.g., lisinopril, enalapril) commonly cause a persistent dry cough (up to 20% of patients) due to accumulation of bradykinin. ARBs (angiotensin receptor blockers) are alternatives that rarely cause cough.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p23',
    category: 'pharmacology',
    question: 'The drug of choice for treatment of severe malaria in Nigeria is:',
    options: ['Chloroquine', 'Artemisinin-based combination therapy (ACT)', 'Quinine alone', 'Primaquine'],
    correctAnswer: 1,
    explanation: 'Artemisinin-based combination therapy (ACT) is the recommended first-line treatment for uncomplicated malaria in Nigeria. For severe malaria, injectable artesunate is preferred. Chloroquine is no longer effective due to resistance.',
    difficulty: 'medium',
    reference: 'Nigeria National Malaria Treatment Guidelines'
  },
  {
    id: 'p24',
    category: 'pharmacology',
    question: 'A patient taking isoniazid (INH) for tuberculosis should also take:',
    options: ['Vitamin A', 'Vitamin B6 (Pyridoxine)', 'Vitamin C', 'Vitamin D'],
    correctAnswer: 1,
    explanation: 'Isoniazid can cause peripheral neuropathy due to pyridoxine (Vitamin B6) deficiency. Pyridoxine supplementation (25-50 mg daily) is recommended to prevent this side effect, especially in high-risk patients.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p25',
    category: 'pharmacology',
    question: 'Which medication can cause gray baby syndrome in neonates?',
    options: ['Penicillin', 'Chloramphenicol', 'Gentamicin', 'Ceftriaxone'],
    correctAnswer: 1,
    explanation: 'Chloramphenicol can cause gray baby syndrome in neonates due to their immature liver enzymes and inability to metabolize the drug. Symptoms include cyanosis, hypotension, and death. Avoid in newborns.',
    difficulty: 'hard',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },
  {
    id: 'p26',
    category: 'pharmacology',
    question: 'The antidote for paracetamol (acetaminophen) overdose is:',
    options: ['Naloxone', 'N-acetylcysteine', 'Flumazenil', 'Atropine'],
    correctAnswer: 1,
    explanation: 'N-acetylcysteine (NAC) is the antidote for paracetamol overdose. It replenishes glutathione stores and prevents formation of the toxic metabolite NAPQI. It is most effective when given within 8-10 hours of overdose.',
    difficulty: 'medium',
    reference: 'Katzung Basic & Clinical Pharmacology'
  },

  // ==================== MEDICAL-SURGICAL NURSING (26 Questions) ====================
  {
    id: 'm1',
    category: 'medsurg',
    question: 'A patient with left-sided heart failure would most likely present with:',
    options: ['Peripheral edema', 'Pulmonary congestion', 'Jugular vein distension', 'Hepatomegaly'],
    correctAnswer: 1,
    explanation: 'Left-sided heart failure causes blood to back up into the lungs, leading to pulmonary congestion, dyspnea, orthopnea, and pulmonary crackles. Right-sided heart failure causes systemic venous congestion (peripheral edema, JVD, hepatomegaly).',
    difficulty: 'medium',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm2',
    category: 'medsurg',
    question: 'The most accurate method to confirm endotracheal tube placement is:',
    options: ['Chest X-ray', 'Auscultation of breath sounds', 'Observation of chest rise', 'Capnography'],
    correctAnswer: 3,
    explanation: 'Capnography (end-tidal CO2 monitoring) is the most accurate method for confirming ET tube placement. Chest X-ray confirms proper depth and position. Auscultation and chest rise observation are initial assessments but less reliable.',
    difficulty: 'hard',
    reference: 'Critical Care Nursing'
  },
  {
    id: 'm3',
    category: 'medsurg',
    question: 'The Glasgow Coma Scale (GCS) assesses:',
    options: ['Motor function only', 'Eye opening, verbal response, motor response', 'Pupil reactivity', 'Respiratory rate'],
    correctAnswer: 1,
    explanation: 'The GCS assesses three parameters: Eye opening (1-4), Verbal response (1-5), and Motor response (1-6). Total score ranges from 3 (deep coma) to 15 (fully alert). A score of 8 or less indicates severe brain injury.',
    difficulty: 'easy',
    reference: 'Hickey Neurological and Neurosurgical Nursing'
  },
  {
    id: 'm4',
    category: 'medsurg',
    question: 'A patient with suspected tension pneumothorax should be positioned:',
    options: ['Supine with legs elevated', 'On the affected side', 'On the unaffected side', 'In high Fowler\'s position'],
    correctAnswer: 2,
    explanation: 'A patient with tension pneumothorax should be positioned on the unaffected side to allow the unaffected lung to expand better. However, immediate needle decompression is the priority treatment.',
    difficulty: 'medium',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm5',
    category: 'medsurg',
    question: 'The most common complication of myocardial infarction is:',
    options: ['Cardiogenic shock', 'Arrhythmias', 'Heart failure', 'Ventricular rupture'],
    correctAnswer: 1,
    explanation: 'Arrhythmias are the most common complication of MI, occurring in over 90% of patients. Ventricular fibrillation is the most common cause of sudden death in the first hours after MI. Continuous cardiac monitoring is essential.',
    difficulty: 'medium',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm6',
    category: 'medsurg',
    question: 'In a patient with increased intracranial pressure, the nurse should:',
    options: ['Encourage coughing and deep breathing', 'Position flat in bed', 'Avoid activities that increase ICP', 'Administer large amounts of IV fluids'],
    correctAnswer: 2,
    explanation: 'Activities that increase ICP (coughing, straining, suctioning) should be avoided. The head should be elevated 30°. Fluids may be restricted. Sedation and osmotic diuretics (mannitol) may be used to reduce ICP.',
    difficulty: 'medium',
    reference: 'Hickey Neurological and Neurosurgical Nursing'
  },
  {
    id: 'm7',
    category: 'medsurg',
    question: 'Which laboratory value is most important to monitor in a patient receiving total parenteral nutrition (TPN)?',
    options: ['Complete blood count', 'Blood glucose', 'Liver function tests', 'Urinalysis'],
    correctAnswer: 1,
    explanation: 'Blood glucose must be closely monitored in patients receiving TPN due to the high dextrose content. Hyperglycemia is common and may require insulin therapy. Glucose should be checked every 6 hours initially.',
    difficulty: 'medium',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm8',
    category: 'medsurg',
    question: 'The earliest sign of hypoxia is:',
    options: ['Cyanosis', 'Restlessness and confusion', 'Bradycardia', 'Hypotension'],
    correctAnswer: 1,
    explanation: 'Restlessness, confusion, and agitation are early signs of hypoxia. Cyanosis is a late sign. Other early signs include tachycardia, tachypnea, and hypertension. Late signs include bradycardia, hypotension, and cardiac arrest.',
    difficulty: 'easy',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm9',
    category: 'medsurg',
    question: 'The most appropriate position for a patient with a nasogastric tube attached to suction is:',
    options: ['Supine', 'Prone', 'Semi-Fowler\'s position', 'Trendelenburg'],
    correctAnswer: 2,
    explanation: 'Semi-Fowlers position (30-45°) is recommended for patients with NG tubes to prevent aspiration and promote drainage. It also reduces pressure on the diaphragm and improves respiratory function.',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'm10',
    category: 'medsurg',
    question: 'A patient with acute pancreatitis should be:',
    options: ['Given a high-fat diet', 'Made NPO (nothing by mouth)', 'Encouraged to drink plenty of fluids', 'Given frequent small meals'],
    correctAnswer: 1,
    explanation: 'Patients with acute pancreatitis should be made NPO to rest the pancreas and reduce pancreatic enzyme secretion. NG suction may be used. IV fluids and TPN provide nutrition. Gradual refeeding begins when symptoms subside.',
    difficulty: 'medium',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm11',
    category: 'medsurg',
    question: 'The nurse should assess for Trousseau\'s sign in a patient with suspected:',
    options: ['Hypokalemia', 'Hypocalcemia', 'Hyponatremia', 'Hypomagnesemia'],
    correctAnswer: 1,
    explanation: 'Trousseaus sign (carpal spasm when blood pressure cuff is inflated above systolic pressure for 3 minutes) indicates hypocalcemia. Chvosteks sign (facial muscle twitching when facial nerve is tapped) is another sign of hypocalcemia.',
    difficulty: 'medium',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm12',
    category: 'medsurg',
    question: 'The most common site of peptic ulcer disease is the:',
    options: ['Esophagus', 'Fundus of the stomach', 'Duodenum', 'Jejunum'],
    correctAnswer: 2,
    explanation: 'The duodenum is the most common site of peptic ulcer disease. Duodenal ulcers are more common than gastric ulcers. They are associated with H. pylori infection, NSAID use, and increased gastric acid secretion.',
    difficulty: 'medium',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm13',
    category: 'medsurg',
    question: 'A patient with chronic renal failure should be on a diet that is:',
    options: ['High protein, low potassium', 'Low protein, low potassium', 'High protein, high potassium', 'Low protein, high potassium'],
    correctAnswer: 1,
    explanation: 'Patients with chronic renal failure need a low-protein diet to reduce urea production and a low-potassium diet to prevent hyperkalemia. Sodium and phosphorus may also be restricted. Fluid restriction may be needed.',
    difficulty: 'medium',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm14',
    category: 'medsurg',
    question: 'The first action the nurse should take when a patient develops a blood transfusion reaction is:',
    options: ['Notify the physician', 'Stop the transfusion', 'Administer epinephrine', 'Check vital signs'],
    correctAnswer: 1,
    explanation: 'The first action is to STOP the transfusion immediately and maintain IV access with normal saline. Then check vital signs, notify the physician, and monitor the patient. The blood bag and tubing should be returned to the lab.',
    difficulty: 'easy',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm15',
    category: 'medsurg',
    question: 'A patient with a chest tube should be positioned:',
    options: ['On the affected side', 'On the unaffected side', 'In semi-Fowler\'s position', 'Flat in bed'],
    correctAnswer: 2,
    explanation: 'Semi-Fowlers position promotes lung expansion and drainage. The drainage system should be kept below chest level. The chest tube should never be clamped unless specifically ordered (e.g., for changing the drainage system).',
    difficulty: 'easy',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm16',
    category: 'medsurg',
    question: 'The most common cause of chronic kidney disease in Nigeria is:',
    options: ['Diabetes mellitus', 'Hypertension', 'Chronic glomerulonephritis', 'Polycystic kidney disease'],
    correctAnswer: 1,
    explanation: 'Hypertension is the leading cause of chronic kidney disease in Nigeria, followed by diabetes mellitus and chronic glomerulonephritis. The high prevalence is attributed to poor blood pressure control and late presentation.',
    difficulty: 'medium',
    reference: 'Nigerian Journal of Nephrology'
  },
  {
    id: 'm17',
    category: 'medsurg',
    question: 'Paracentesis is performed to:',
    options: ['Remove fluid from the pleural space', 'Remove fluid from the peritoneal cavity', 'Remove fluid from the pericardial space', 'Remove fluid from joint spaces'],
    correctAnswer: 1,
    explanation: 'Paracentesis is the removal of fluid from the peritoneal cavity (ascites). Thoracentesis removes fluid from the pleural space. Pericardiocentesis removes fluid from the pericardial space. Arthrocentesis removes fluid from joints.',
    difficulty: 'easy',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm18',
    category: 'medsurg',
    question: 'A patient with suspected appendicitis should NOT be given:',
    options: ['IV fluids', 'Antibiotics', 'Laxatives or enemas', 'Pain medication'],
    correctAnswer: 2,
    explanation: 'Laxatives or enemas should NOT be given to patients with suspected appendicitis as they may cause perforation. The patient should be NPO. Pain medication may mask symptoms but is sometimes given after diagnosis.',
    difficulty: 'medium',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm19',
    category: 'medsurg',
    question: 'The nurse recognizes that a patient with a spinal cord injury at T6 or above is at risk for:',
    options: ['Hypotension', 'Autonomic dysreflexia', 'Increased intracranial pressure', 'Pulmonary embolism'],
    correctAnswer: 1,
    explanation: 'Patients with spinal cord injuries at T6 or above are at risk for autonomic dysreflexia, a life-threatening condition characterized by severe hypertension, headache, and bradycardia. Common triggers include bladder distension and constipation.',
    difficulty: 'medium',
    reference: 'Hickey Neurological and Neurosurgical Nursing'
  },
  {
    id: 'm20',
    category: 'medsurg',
    question: 'Which of the following is a late sign of increased intracranial pressure?',
    options: ['Headache', 'Vomiting', 'Widened pulse pressure', 'Restlessness'],
    correctAnswer: 2,
    explanation: 'Widened pulse pressure (increased systolic, decreased diastolic) with bradycardia and irregular respirations (Cushing triad) is a late sign of increased ICP. Early signs include headache, vomiting, and altered level of consciousness.',
    difficulty: 'hard',
    reference: 'Hickey Neurological and Neurosurgical Nursing'
  },
  {
    id: 'm21',
    category: 'medsurg',
    question: 'The most common type of anemia worldwide is:',
    options: ['Sickle cell anemia', 'Iron deficiency anemia', 'Megaloblastic anemia', 'Aplastic anemia'],
    correctAnswer: 1,
    explanation: 'Iron deficiency anemia is the most common type worldwide, affecting about 25% of the global population. It is caused by inadequate iron intake, blood loss, or poor iron absorption. Common in women of childbearing age and children.',
    difficulty: 'easy',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm22',
    category: 'medsurg',
    question: 'A patient with sickle cell crisis should receive:',
    options: ['Cold compresses to affected areas', 'IV fluids and oxygen', 'Dehydration therapy', 'Strict bed rest'],
    correctAnswer: 1,
    explanation: 'Treatment for sickle cell crisis includes IV hydration, oxygen therapy, analgesics, and warm compresses (NOT cold). Cold can precipitate vaso-occlusion. Hydration reduces blood viscosity and improves blood flow.',
    difficulty: 'medium',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm23',
    category: 'medsurg',
    question: 'The nurse should teach a patient with gastroesophageal reflux disease (GERD) to:',
    options: ['Eat large meals before bedtime', 'Lie flat immediately after meals', 'Elevate the head of the bed', 'Drink alcohol to aid digestion'],
    correctAnswer: 2,
    explanation: 'Patients with GERD should elevate the head of the bed 6-8 inches, avoid eating 2-3 hours before bedtime, eat small frequent meals, and avoid trigger foods (spicy, fatty, acidic). Weight loss and avoiding tight clothing also help.',
    difficulty: 'easy',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm24',
    category: 'medsurg',
    question: 'The most common type of stroke in Nigeria is:',
    options: ['Hemorrhagic stroke', 'Ischemic stroke', 'Subarachnoid hemorrhage', 'Transient ischemic attack'],
    correctAnswer: 1,
    explanation: 'Ischemic stroke (thrombotic or embolic) accounts for about 80-85% of all strokes and is the most common type in Nigeria. Risk factors include hypertension, diabetes, and sickle cell disease. Hemorrhagic stroke is less common but more fatal.',
    difficulty: 'medium',
    reference: 'Nigerian Journal of Neurology'
  },
  {
    id: 'm25',
    category: 'medsurg',
    question: 'A patient with diabetic ketoacidosis (DKA) should receive:',
    options: ['IV saline and regular insulin', 'IV dextrose and NPH insulin', 'Oral hypoglycemics', 'Glucagon injection'],
    correctAnswer: 0,
    explanation: 'DKA treatment includes IV normal saline for rehydration and regular insulin (IV or IM) to correct hyperglycemia and ketosis. Potassium replacement is usually needed. Dextrose is added to IV fluids when glucose drops to 250 mg/dL.',
    difficulty: 'medium',
    reference: 'Lewis Medical-Surgical Nursing'
  },
  {
    id: 'm26',
    category: 'medsurg',
    question: 'The priority nursing diagnosis for a patient with a fractured femur is:',
    options: ['Acute pain', 'Impaired mobility', 'Risk for fat embolism', 'Risk for infection'],
    correctAnswer: 2,
    explanation: 'Fat embolism syndrome is a serious complication of long bone fractures, occurring 24-72 hours after injury. It can cause respiratory distress, neurological symptoms, and petechial rash. Monitoring for this complication is a priority.',
    difficulty: 'hard',
    reference: 'Lewis Medical-Surgical Nursing'
  },

  // ==================== MATERNAL & CHILD HEALTH (26 Questions) ====================
  {
    id: 'mc1',
    category: 'maternal',
    question: 'The normal duration of the first stage of labor in a primigravida is:',
    options: ['2-4 hours', '6-8 hours', '12-16 hours', '24-36 hours'],
    correctAnswer: 2,
    explanation: 'The first stage of labor (onset of true labor to full cervical dilation) lasts 12-16 hours in primigravidas and 6-10 hours in multigravidas. It is divided into latent, active, and transition phases.',
    difficulty: 'medium',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc2',
    category: 'maternal',
    question: 'The APGAR score is assessed at:',
    options: ['Immediately after birth only', '1 and 5 minutes after birth', '10 and 15 minutes after birth', 'Before delivery'],
    correctAnswer: 1,
    explanation: 'APGAR score is assessed at 1 and 5 minutes after birth. If the 5-minute score is less than 7, additional scores are taken every 5 minutes up to 20 minutes. Each of 5 parameters is scored 0-2, with a maximum score of 10.',
    difficulty: 'easy',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc3',
    category: 'maternal',
    question: 'The most reliable indicator of true labor is:',
    options: ['Regular contractions', 'Cervical dilation and effacement', 'Rupture of membranes', 'Bloody show'],
    correctAnswer: 1,
    explanation: 'Cervical dilation and effacement are the most reliable indicators of true labor. In false labor (Braxton Hicks contractions), the cervix does not change. True labor contractions are regular, increase in intensity, and cause cervical change.',
    difficulty: 'medium',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc4',
    category: 'maternal',
    question: 'The recommended dietary iron intake during pregnancy is:',
    options: ['10 mg/day', '27 mg/day', '50 mg/day', '100 mg/day'],
    correctAnswer: 1,
    explanation: 'Pregnant women need 27 mg of elemental iron daily, compared to 18 mg for non-pregnant women. Iron supplementation is often recommended because it is difficult to obtain this amount from diet alone. Iron deficiency anemia is common in pregnancy.',
    difficulty: 'medium',
    reference: 'WHO Pregnancy Care Guidelines'
  },
  {
    id: 'mc5',
    category: 'maternal',
    question: 'A pregnant woman at 28 weeks gestation presents with headache, visual disturbances, and blood pressure of 160/110 mmHg. The most likely diagnosis is:',
    options: ['Gestational hypertension', 'Severe preeclampsia', 'Chronic hypertension', 'Eclampsia'],
    correctAnswer: 1,
    explanation: 'Severe preeclampsia is characterized by BP ≥160/110 mmHg after 20 weeks with proteinuria and/or severe features (headache, visual changes, epigastric pain). Eclampsia includes seizures. Delivery is the definitive treatment.',
    difficulty: 'medium',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc6',
    category: 'maternal',
    question: 'The normal weight gain during pregnancy for a woman with normal pre-pregnancy BMI is:',
    options: ['5-10 kg', '11-16 kg', '18-23 kg', '25-30 kg'],
    correctAnswer: 1,
    explanation: 'Women with normal pre-pregnancy BMI (18.5-24.9) should gain 11.5-16 kg during pregnancy. Underweight women should gain 12.5-18 kg. Overweight women should gain 7-11.5 kg. Obese women should gain 5-9 kg.',
    difficulty: 'medium',
    reference: 'WHO Pregnancy Care Guidelines'
  },
  {
    id: 'mc7',
    category: 'maternal',
    question: 'The first immunization a newborn should receive is:',
    options: ['MMR', 'BCG and Hepatitis B', 'DPT', 'Polio'],
    correctAnswer: 1,
    explanation: 'According to the Nigerian National Immunization Schedule, newborns should receive BCG (at birth or as soon as possible) and Hepatitis B (within 24 hours of birth). OPV0 is also given at birth in Nigeria.',
    difficulty: 'easy',
    reference: 'Nigeria NPI Schedule'
  },
  {
    id: 'mc8',
    category: 'maternal',
    question: 'The best method to assess fetal well-being in the third trimester is:',
    options: ['Ultrasound', 'Fetal movement counting', 'Non-stress test', 'Amniocentesis'],
    correctAnswer: 2,
    explanation: 'Fetal movement counting (kick counts) by the mother is a simple, cost-effective method to assess fetal well-being. The mother should feel at least 10 movements within 2 hours. Non-stress test is used for high-risk pregnancies.',
    difficulty: 'medium',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc9',
    category: 'maternal',
    question: 'The most common cause of postpartum hemorrhage is:',
    options: ['Uterine atony', 'Retained placenta', 'Lacerations', 'Coagulation disorders'],
    correctAnswer: 0,
    explanation: 'Uterine atony (failure of the uterus to contract) is the most common cause of postpartum hemorrhage, accounting for 70-80% of cases. Management includes uterine massage, oxytocin, and bimanual compression.',
    difficulty: 'easy',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc10',
    category: 'maternal',
    question: 'The expected date of delivery (EDD) is calculated from the last menstrual period by:',
    options: ['Adding 9 months and 7 days', 'Adding 10 months', 'Adding 40 weeks from conception', 'Subtracting 3 months'],
    correctAnswer: 0,
    explanation: 'Naegeles rule: Add 7 days to the first day of LMP, then add 9 months (or subtract 3 months and add 1 year). This assumes a 28-day cycle with ovulation on day 14. Ultrasound dating may be more accurate if LMP is uncertain.',
    difficulty: 'easy',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc11',
    category: 'maternal',
    question: 'Exclusive breastfeeding is recommended for the first:',
    options: ['2 months of life', '4 months of life', '6 months of life', '12 months of life'],
    correctAnswer: 2,
    explanation: 'WHO recommends exclusive breastfeeding for the first 6 months of life. After 6 months, complementary foods should be introduced while breastfeeding continues for up to 2 years or beyond. Exclusive breastfeeding means no other foods or drinks.',
    difficulty: 'easy',
    reference: 'WHO Infant Feeding Guidelines'
  },
  {
    id: 'mc12',
    category: 'maternal',
    question: 'The normal fetal heart rate ranges from:',
    options: ['80-100 bpm', '110-160 bpm', '170-190 bpm', '200-220 bpm'],
    correctAnswer: 1,
    explanation: 'Normal fetal heart rate is 110-160 beats per minute. Rates below 110 (bradycardia) or above 160 (tachycardia) for more than 10 minutes require evaluation. Variability and accelerations are also important indicators of fetal well-being.',
    difficulty: 'easy',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc13',
    category: 'maternal',
    question: 'A newborn with Apgar score of 3 at 1 minute requires:',
    options: ['Routine care', 'Observation only', 'Immediate resuscitation', 'Delayed cord clamping'],
    correctAnswer: 2,
    explanation: 'Apgar score 0-3 indicates severe distress requiring immediate resuscitation. Score 4-6 requires assistance with breathing. Score 7-10 is normal. The five parameters are: Appearance, Pulse, Grimace, Activity, and Respiration.',
    difficulty: 'medium',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc14',
    category: 'maternal',
    question: 'The most common presentation in labor is:',
    options: ['Breech presentation', 'Cephalic presentation', 'Transverse lie', 'Face presentation'],
    correctAnswer: 1,
    explanation: 'Cephalic presentation (head first) is the most common, occurring in about 96% of term deliveries. Breech presentation occurs in 3-4% and transverse lie in less than 1%. Vertex is the most favorable cephalic presentation.',
    difficulty: 'easy',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc15',
    category: 'maternal',
    question: 'The normal lochia rubra lasts for:',
    options: ['1-2 days', '3-4 days', '7-10 days', '2 weeks'],
    correctAnswer: 1,
    explanation: 'Lochia rubra (red, bloody) lasts 3-4 days postpartum, followed by lochia serosa (pink/brown) for 3-10 days, then lochia alba (white/yellow) for 10-14 days. Total lochial discharge lasts 2-4 weeks but can continue up to 6 weeks.',
    difficulty: 'medium',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc16',
    category: 'maternal',
    question: 'The drug of choice for prevention of mother-to-child transmission of HIV is:',
    options: ['Zidovudine alone', 'Highly active antiretroviral therapy (HAART)', 'Nevirapine alone', 'No medication needed'],
    correctAnswer: 1,
    explanation: 'All HIV-positive pregnant women should receive lifelong ART (HAART) regardless of CD4 count. This reduces mother-to-child transmission to less than 2%. In Nigeria, Option B+ is implemented - lifelong ART for all HIV-positive pregnant women.',
    difficulty: 'medium',
    reference: 'Nigeria PMTCT Guidelines'
  },
  {
    id: 'mc17',
    category: 'maternal',
    question: 'The most common cause of maternal mortality in Nigeria is:',
    options: ['Hypertensive disorders', 'Hemorrhage', 'Sepsis', 'Obstructed labor'],
    correctAnswer: 1,
    explanation: 'Obstetric hemorrhage is the leading cause of maternal mortality in Nigeria, accounting for about 23% of maternal deaths. Other major causes are hypertensive disorders, sepsis, and obstructed labor. Nigeria has one of the highest MMR globally.',
    difficulty: 'medium',
    reference: 'Nigeria Demographic Health Survey'
  },
  {
    id: 'mc18',
    category: 'maternal',
    question: 'Kangaroo mother care is recommended for:',
    options: ['All newborns', 'Preterm and low birth weight babies', 'Babies with birth asphyxia', 'Babies with jaundice'],
    correctAnswer: 1,
    explanation: 'Kangaroo Mother Care (KMC) involves continuous skin-to-skin contact between mother and preterm/low birth weight infant. It provides warmth, promotes breastfeeding, reduces infection risk, and improves survival of stable preterm babies.',
    difficulty: 'medium',
    reference: 'WHO KMC Guidelines'
  },
  {
    id: 'mc19',
    category: 'maternal',
    question: 'The gestational age at which a fetus is considered viable is approximately:',
    options: ['20 weeks', '24 weeks', '28 weeks', '32 weeks'],
    correctAnswer: 1,
    explanation: 'Fetal viability is generally considered to be around 24 weeks gestation, though outcomes improve significantly with each additional week. Survival rates at 24 weeks are about 50-70% with intensive care, compared to >90% at 28 weeks.',
    difficulty: 'medium',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc20',
    category: 'maternal',
    question: 'Neonatal jaundice appearing within the first 24 hours of life is usually:',
    options: ['Physiological', 'Pathological', 'Breast milk jaundice', 'Normal finding'],
    correctAnswer: 1,
    explanation: 'Jaundice within 24 hours is always pathological and requires investigation. Causes include hemolytic disease (ABO or Rh incompatibility), G6PD deficiency, or infection. Physiological jaundice appears after 24 hours (usually day 2-3).',
    difficulty: 'medium',
    reference: 'Neonatology Essentials'
  },
  {
    id: 'mc21',
    category: 'maternal',
    question: 'The most common complication of diabetes in pregnancy is:',
    options: ['Fetal macrosomia', 'Congenital anomalies', 'Polyhydramnios', 'Preeclampsia'],
    correctAnswer: 0,
    explanation: 'Fetal macrosomia (birth weight >4kg or >90th percentile) is the most common complication of diabetes in pregnancy, occurring in 15-45% of cases. Good glycemic control reduces risk. Other complications include congenital anomalies, preeclampsia, and stillbirth.',
    difficulty: 'medium',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc22',
    category: 'maternal',
    question: 'The normal hemoglobin level in a pregnant woman is:',
    options: ['8-10 g/dL', '11-13 g/dL', '14-16 g/dL', '16-18 g/dL'],
    correctAnswer: 1,
    explanation: 'Normal hemoglobin in pregnancy is 11-13 g/dL due to hemodilution. Anemia in pregnancy is defined as Hb <11 g/dL in first and third trimesters, or <10.5 g/dL in second trimester. Severe anemia is Hb <7 g/dL.',
    difficulty: 'medium',
    reference: 'WHO Pregnancy Care Guidelines'
  },
  {
    id: 'mc23',
    category: 'maternal',
    question: 'The umbilical cord normally contains:',
    options: ['One artery and one vein', 'Two arteries and one vein', 'One artery and two veins', 'Two arteries and two veins'],
    correctAnswer: 1,
    explanation: 'The umbilical cord normally contains two arteries (carrying deoxygenated blood from fetus to placenta) and one vein (carrying oxygenated blood to fetus). Single umbilical artery occurs in 0.5-1% of pregnancies and may be associated with anomalies.',
    difficulty: 'easy',
    reference: 'Mayes Midwifery'
  },
  {
    id: 'mc24',
    category: 'maternal',
    question: 'The first sign of puberty in girls is usually:',
    options: ['Menarche', 'Breast development (thelarche)', 'Pubic hair growth', 'Growth spurt'],
    correctAnswer: 1,
    explanation: 'Breast development (thelarche) is typically the first sign of puberty in girls, usually beginning between ages 8-13 years. This is followed by pubic hair growth, growth spurt, and finally menarche (average age 12-13 years).',
    difficulty: 'medium',
    reference: 'Pediatric Nursing'
  },
  {
    id: 'mc25',
    category: 'maternal',
    question: 'The recommended time for a pregnant woman to start antenatal care is:',
    options: ['After 20 weeks', 'As soon as pregnancy is confirmed', 'At 28 weeks', 'Only if complications arise'],
    correctAnswer: 1,
    explanation: 'Antenatal care should begin as soon as pregnancy is confirmed, ideally in the first trimester. This allows for early detection of complications, confirmation of gestational age, and initiation of preventive measures like folic acid supplementation.',
    difficulty: 'easy',
    reference: 'WHO ANC Guidelines'
  },
  {
    id: 'mc26',
    category: 'maternal',
    question: 'Oral contraceptive pills are contraindicated in:',
    options: ['Women over 35 who smoke', 'Women with dysmenorrhea', 'Women with acne', 'Nulliparous women'],
    correctAnswer: 0,
    explanation: 'Combined oral contraceptives are contraindicated in women over 35 who smoke due to increased risk of cardiovascular events (DVT, stroke, MI). Other contraindications include history of thromboembolism, liver disease, and undiagnosed vaginal bleeding.',
    difficulty: 'medium',
    reference: 'Family Planning Guidelines'
  },

  // ==================== COMMUNITY HEALTH NURSING (26 Questions) ====================
  {
    id: 'c1',
    category: 'community',
    question: 'The primary goal of primary health care is:',
    options: ['Treatment of diseases in hospitals', 'Health for all through essential health care', 'Advanced medical technology', 'Specialist medical care'],
    correctAnswer: 1,
    explanation: 'The goal of PHC is "Health for All" through provision of essential health care that is accessible, acceptable, affordable, and culturally appropriate. It emphasizes prevention, health promotion, and community participation.',
    difficulty: 'easy',
    reference: 'WHO Alma-Ata Declaration'
  },
  {
    id: 'c2',
    category: 'community',
    question: 'The number of pillars of primary health care is:',
    options: ['4', '6', '8', '10'],
    correctAnswer: 2,
    explanation: 'There are 8 pillars of PHC: Education, Proper nutrition, Safe water and sanitation, Maternal and child health, Immunization, Prevention and control of endemic diseases, Treatment of common diseases, and Provision of essential drugs.',
    difficulty: 'easy',
    reference: 'WHO Alma-Ata Declaration'
  },
  {
    id: 'c3',
    category: 'community',
    question: 'The most common mode of transmission of malaria is:',
    options: ['Contaminated water', 'Female Anopheles mosquito bite', 'Direct contact', 'Airborne droplets'],
    correctAnswer: 1,
    explanation: 'Malaria is transmitted through the bite of an infected female Anopheles mosquito. Other less common modes include blood transfusion, mother-to-child (congenital), and needle stick injuries. Malaria is endemic in Nigeria.',
    difficulty: 'easy',
    reference: 'Nigeria National Malaria Strategic Plan'
  },
  {
    id: 'c4',
    category: 'community',
    question: 'The target for Sustainable Development Goal 3 related to under-5 mortality is:',
    options: ['Reduce by half', 'Reduce to 25 per 1,000 live births', 'Reduce to 12 per 1,000 live births', 'Eliminate completely'],
    correctAnswer: 2,
    explanation: 'SDG 3 target 3.2 aims to reduce under-5 mortality to at least 25 per 1,000 live births and neonatal mortality to at least 12 per 1,000 live births by 2030. Current Nigerian under-5 mortality is about 132 per 1,000.',
    difficulty: 'hard',
    reference: 'UN SDG Goals'
  },
  {
    id: 'c5',
    category: 'community',
    question: 'The minimum number of antenatal visits recommended by WHO is:',
    options: ['2 visits', '4 visits', '8 visits', '12 visits'],
    correctAnswer: 2,
    explanation: 'WHO recommends a minimum of 8 antenatal contacts for a positive pregnancy experience. The previous recommendation was 4 visits. Contacts should be at 12, 20, 26, 30, 34, 36, 38, and 40 weeks.',
    difficulty: 'medium',
    reference: 'WHO ANC Guidelines 2016'
  },
  {
    id: 'c6',
    category: 'community',
    question: 'The most effective method of preventing vaccine-preventable diseases is:',
    options: ['Health education', 'Immunization', 'Quarantine', 'Antibiotic prophylaxis'],
    correctAnswer: 1,
    explanation: 'Immunization is one of the most cost-effective public health interventions. It provides individual protection and contributes to herd immunity. Vaccine-preventable diseases include measles, polio, tetanus, diphtheria, and whooping cough.',
    difficulty: 'easy',
    reference: 'WHO Immunization Guidelines'
  },
  {
    id: 'c7',
    category: 'community',
    question: 'The type of immunity acquired through vaccination is:',
    options: ['Natural active immunity', 'Artificial active immunity', 'Natural passive immunity', 'Artificial passive immunity'],
    correctAnswer: 1,
    explanation: 'Vaccination provides artificial active immunity - the body produces its own antibodies in response to the vaccine. Natural active immunity comes from infection. Passive immunity is from transferred antibodies (e.g., from mother to baby, or immunoglobulin therapy).',
    difficulty: 'medium',
    reference: 'Epidemiology & Community Health'
  },
  {
    id: 'c8',
    category: 'community',
    question: 'The "Iceberg phenomenon" in epidemiology refers to:',
    options: ['Only visible cases of disease', 'Hidden/subclinical cases exceeding visible cases', 'Seasonal variation in disease', 'Geographic distribution of disease'],
    correctAnswer: 1,
    explanation: 'The iceberg phenomenon describes how the visible (clinical) cases of disease represent only a small portion of total cases, with many more hidden (subclinical, undiagnosed) cases beneath the surface, like an iceberg.',
    difficulty: 'medium',
    reference: 'Epidemiology & Community Health'
  },
  {
    id: 'c9',
    category: 'community',
    question: 'The first line anti-TB drugs according to Nigerian guidelines include all EXCEPT:',
    options: ['Isoniazid', 'Rifampicin', 'Pyrazinamide', 'Ciprofloxacin'],
    correctAnswer: 3,
    explanation: 'First-line anti-TB drugs are Isoniazid, Rifampicin, Pyrazinamide, and Ethambutol. Ciprofloxacin is a fluoroquinolone and is used as a second-line drug for drug-resistant TB. DOTS is the strategy for TB control.',
    difficulty: 'medium',
    reference: 'Nigeria NTBLCP Guidelines'
  },
  {
    id: 'c10',
    category: 'community',
    question: 'The most effective method for family planning that also protects against HIV is:',
    options: ['Oral contraceptive pills', 'Intrauterine device (IUD)', 'Male condom', 'Injectable contraceptives'],
    correctAnswer: 2,
    explanation: 'Male condoms are the only family planning method that provides dual protection - against unintended pregnancy AND STIs including HIV. Other methods only prevent pregnancy. Female condoms also provide dual protection.',
    difficulty: 'easy',
    reference: 'Family Planning Guidelines'
  },
  {
    id: 'c11',
    category: 'community',
    question: 'The incubation period of measles is approximately:',
    options: ['3-5 days', '7-10 days', '10-14 days', '21-28 days'],
    correctAnswer: 2,
    explanation: 'The incubation period of measles is about 10-14 days from exposure to onset of fever, and about 14 days until rash appears. The patient is contagious from 4 days before to 4 days after rash onset.',
    difficulty: 'medium',
    reference: 'Epidemiology & Community Health'
  },
  {
    id: 'c12',
    category: 'community',
    question: 'The best indicator for monitoring the spread of HIV in a community is:',
    options: ['AIDS cases', 'HIV prevalence in pregnant women', 'Number on treatment', 'AIDS-related deaths'],
    correctAnswer: 1,
    explanation: 'HIV prevalence among pregnant women attending antenatal clinics is a good sentinel surveillance indicator for general population HIV prevalence. It represents sexually active adults and is routinely collected during ANC.',
    difficulty: 'medium',
    reference: 'HIV/AIDS Surveillance Guidelines'
  },
  {
    id: 'c13',
    category: 'community',
    question: 'The recommended chlorine concentration for disinfecting water for drinking is:',
    options: ['0.1 mg/L', '0.5 mg/L', '5.0 mg/L', '10.0 mg/L'],
    correctAnswer: 1,
    explanation: 'The WHO guideline for free chlorine residual in drinking water is 0.2-0.5 mg/L (ppm) at point of delivery. For household water treatment, 0.5 mg/L after 30 minutes contact time is recommended. Higher concentrations affect taste.',
    difficulty: 'hard',
    reference: 'WHO Water Quality Guidelines'
  },
  {
    id: 'c14',
    category: 'community',
    question: 'The most common cause of acute respiratory infection in children under 5 in Nigeria is:',
    options: ['Bacteria', 'Virus', 'Fungi', 'Parasites'],
    correctAnswer: 1,
    explanation: 'Viruses (especially Respiratory Syncytial Virus, influenza, parainfluenza) are the most common cause of ARI in children under 5. Bacterial causes include Streptococcus pneumoniae and Haemophilus influenzae.',
    difficulty: 'medium',
    reference: 'Nigeria ARI Guidelines'
  },
  {
    id: 'c15',
    category: 'community',
    question: 'In the WHO clinical staging of HIV/AIDS, pulmonary tuberculosis is classified as:',
    options: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'],
    correctAnswer: 2,
    explanation: 'Pulmonary TB is WHO Clinical Stage 3. Stage 4 (AIDS) includes extrapulmonary TB, Pneumocystis pneumonia, Kaposi sarcoma, cryptococcal meningitis, and other severe conditions. Staging guides treatment decisions.',
    difficulty: 'medium',
    reference: 'WHO HIV Staging'
  },
  {
    id: 'c16',
    category: 'community',
    question: 'The " rule of three" in family planning refers to:',
    options: ['Three children per family', 'Three-year spacing between pregnancies', 'Three months of observation', 'Three types of contraceptives'],
    correctAnswer: 1,
    explanation: 'The rule of three in family planning recommends at least 3 years (36 months) spacing between pregnancies. This reduces maternal and child health risks including preterm birth, low birth weight, and maternal mortality.',
    difficulty: 'medium',
    reference: 'Family Planning Guidelines'
  },
  {
    id: 'c17',
    category: 'community',
    question: 'The Epidemiological Triad includes:',
    options: ['Host, Agent, Environment', 'Time, Place, Person', 'Agent, Host, Vector', 'Source, Mode, Susceptibility'],
    correctAnswer: 0,
    explanation: 'The Epidemiological Triad consists of Agent (cause of disease), Host (organism that harbors the disease), and Environment (external factors that affect the agent and host). Interaction of these three determines disease occurrence.',
    difficulty: 'easy',
    reference: 'Epidemiology & Community Health'
  },
  {
    id: 'c18',
    category: 'community',
    question: 'The most effective strategy for controlling Ebola outbreak is:',
    options: ['Vaccination', 'Contact tracing and isolation', 'Mass treatment', 'Prophylactic antibiotics'],
    correctAnswer: 1,
    explanation: 'Contact tracing, isolation of cases, safe burial practices, and infection prevention are key to Ebola control. The rVSV-ZEBOV vaccine is used for ring vaccination of contacts but is not yet widely available. No specific treatment exists.',
    difficulty: 'medium',
    reference: 'WHO Ebola Guidelines'
  },
  {
    id: 'c19',
    category: 'community',
    question: 'ORS (Oral Rehydration Solution) contains:',
    options: ['Only water and sugar', 'Water, glucose, sodium, potassium, chloride, and citrate', 'Water and salt only', 'Antibiotics and water'],
    correctAnswer: 1,
    explanation: 'ORS contains water, glucose, sodium chloride, potassium chloride, and trisodium citrate. Glucose enhances sodium and water absorption. WHO ORS formula: NaCl 2.6g, KCl 1.5g, NaCitrate 2.9g, Glucose 13.5g per liter.',
    difficulty: 'medium',
    reference: 'WHO Diarrhea Treatment Guidelines'
  },
  {
    id: 'c20',
    category: 'community',
    question: 'The goal of health education is to:',
    options: ['Treat diseases', 'Change behavior for better health', 'Provide medications', 'Replace medical care'],
    correctAnswer: 1,
    explanation: 'Health education aims to change behavior and promote health through increased knowledge, attitude change, and skill development. It is a key component of health promotion and disease prevention strategies.',
    difficulty: 'easy',
    reference: 'Community Health Nursing'
  },
  {
    id: 'c21',
    category: 'community',
    question: 'The normal source of Vitamin A for the body is:',
    options: ['Sunlight', 'Green leafy vegetables and liver', 'Synthesized by the body', 'Dairy products only'],
    correctAnswer: 1,
    explanation: 'Vitamin A sources include animal sources (liver, fish liver oils, egg yolk, dairy) containing retinol, and plant sources (dark green leafy vegetables, yellow/orange fruits) containing beta-carotene which is converted to vitamin A.',
    difficulty: 'easy',
    reference: 'Nutrition in Public Health'
  },
  {
    id: 'c22',
    category: 'community',
    question: 'In Nigeria, the treatment of uncomplicated malaria in adults is:',
    options: ['Chloroquine', 'Artemisinin-based Combination Therapy (ACT)', 'Quinine', 'Fansidar'],
    correctAnswer: 1,
    explanation: 'Artemisinin-based Combination Therapy (ACT) is the first-line treatment for uncomplicated malaria in Nigeria. Artemether-lumefantrine (Coartem) is commonly used. Chloroquine is no longer effective due to resistance.',
    difficulty: 'easy',
    reference: 'Nigeria National Malaria Treatment Guidelines'
  },
  {
    id: 'c23',
    category: 'community',
    question: 'The most effective prevention strategy for Lassa fever is:',
    options: ['Vaccination', 'Avoiding contact with rodents', 'Prophylactic antivirals', 'Antibiotics'],
    correctAnswer: 1,
    explanation: 'Lassa fever prevention focuses on avoiding contact with rodents (Mastomys rats), proper food storage, and maintaining clean environments. No vaccine is currently available. Ribavirin is used for treatment if given early.',
    difficulty: 'medium',
    reference: 'NCDC Lassa Fever Guidelines'
  },
  {
    id: 'c24',
    category: 'community',
    question: 'The term "herd immunity" refers to:',
    options: ['Immunity in animals', 'Population immunity that protects unvaccinated individuals', 'Immunity from natural infection', 'Immunity from breastfeeding'],
    correctAnswer: 1,
    explanation: 'Herd immunity occurs when a sufficient proportion of the population is immune to an infectious disease, making spread unlikely. This protects unvaccinated individuals. The threshold varies by disease (e.g., 95% for measles).',
    difficulty: 'medium',
    reference: 'Epidemiology & Community Health'
  },
  {
    id: 'c25',
    category: 'community',
    question: 'The screening test used for cervical cancer is:',
    options: ['Mammography', 'Pap smear', 'Chest X-ray', 'Blood test'],
    correctAnswer: 1,
    explanation: 'Pap smear (Papanicolaou test) screens for cervical cancer by detecting precancerous and cancerous cells. HPV DNA testing is also used. Screening should start at age 21-25 or within 3 years of sexual activity onset.',
    difficulty: 'easy',
    reference: 'Cancer Screening Guidelines'
  },
  {
    id: 'c26',
    category: 'community',
    question: 'The most important measure in preventing hospital-acquired infections is:',
    options: ['Antibiotic prophylaxis', 'Hand hygiene', 'Isolation of all patients', 'Routine cultures'],
    correctAnswer: 1,
    explanation: 'Hand hygiene is the single most effective measure for preventing healthcare-associated infections (HAIs). Proper handwashing or use of alcohol-based hand rubs significantly reduces transmission of pathogens between patients and staff.',
    difficulty: 'easy',
    reference: 'WHO IPC Guidelines'
  },

  // ==================== MENTAL HEALTH NURSING (26 Questions) ====================
  {
    id: 'mh1',
    category: 'mental',
    question: 'The most common mental health disorder globally is:',
    options: ['Schizophrenia', 'Depression', 'Bipolar disorder', 'Anxiety disorders'],
    correctAnswer: 1,
    explanation: 'Depression is the most common mental health disorder globally, affecting over 280 million people. It is a leading cause of disability worldwide. Anxiety disorders are also very common but depression has the highest prevalence.',
    difficulty: 'medium',
    reference: 'WHO Mental Health Atlas'
  },
  {
    id: 'mh2',
    category: 'mental',
    question: 'A patient who believes others are plotting against them is experiencing:',
    options: ['Visual hallucinations', 'Delusions of persecution', 'Disorganized thought', 'Catatonia'],
    correctAnswer: 1,
    explanation: 'Delusions of persecution (paranoid delusions) involve beliefs that others are trying to harm, spy on, or plot against the person. This is common in schizophrenia, delusional disorder, and sometimes in depression or mania.',
    difficulty: 'easy',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh3',
    category: 'mental',
    question: 'The therapeutic communication technique that involves repeating the main idea of what the patient said is:',
    options: ['Reflection', 'Restating', 'Clarifying', 'Summarizing'],
    correctAnswer: 1,
    explanation: 'Restating involves repeating the main idea of what the patient said in similar words. It shows you are listening and helps clarify meaning. Reflection focuses on feelings. Clarifying seeks understanding. Summarizing reviews key points.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh4',
    category: 'mental',
    question: 'A patient with mania would typically present with all EXCEPT:',
    options: ['Pressured speech', 'Decreased need for sleep', 'Social withdrawal', 'Grandiosity'],
    correctAnswer: 2,
    explanation: 'Mania symptoms include elevated/irritable mood, grandiosity, decreased need for sleep, pressured speech, flight of ideas, increased goal-directed activity, and excessive pleasure-seeking. Social withdrawal is seen in depression, not mania.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh5',
    category: 'mental',
    question: 'The priority nursing intervention for a suicidal patient is:',
    options: ['Encouraging expression of feelings', 'Ensuring safety and constant observation', 'Administering antidepressants', 'Family counseling'],
    correctAnswer: 1,
    explanation: 'The first priority is ensuring patient safety through constant observation, removing harmful objects, and providing a safe environment. Suicide risk assessment should be ongoing. Once safety is ensured, therapeutic interventions can begin.',
    difficulty: 'easy',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh6',
    category: 'mental',
    question: 'Which medication requires monitoring for agranulocytosis?',
    options: ['Fluoxetine', 'Clozapine', 'Lithium', 'Diazepam'],
    correctAnswer: 1,
    explanation: 'Clozapine can cause agranulocytosis (severe neutropenia) in 0.5-1% of patients. Weekly WBC monitoring is required for the first 6 months, then every 2 weeks. It is used for treatment-resistant schizophrenia.',
    difficulty: 'hard',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh7',
    category: 'mental',
    question: 'The defense mechanism where a person attributes their own unacceptable feelings to another is:',
    options: ['Denial', 'Projection', 'Displacement', 'Rationalization'],
    correctAnswer: 1,
    explanation: 'Projection involves attributing ones own unacceptable thoughts, feelings, or impulses to another person. Example: A person who is angry accuses others of being angry with them. This is common in paranoid thinking.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh8',
    category: 'mental',
    question: 'A patient with anorexia nervosa would have a BMI typically:',
    options: ['Below 18.5 kg/m²', 'Between 18.5-24.9 kg/m²', 'Between 25-29.9 kg/m²', 'Above 30 kg/m²'],
    correctAnswer: 0,
    explanation: 'Anorexia nervosa is characterized by BMI below 18.5 kg/m² (or below expected for age in children). Diagnostic criteria include restriction of intake, fear of weight gain, and disturbed body image. Severe anorexia is BMI <15 kg/m².',
    difficulty: 'easy',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh9',
    category: 'mental',
    question: 'Electroconvulsive therapy (ECT) is most effective for:',
    options: ['Schizophrenia', 'Severe depression with psychotic features', 'Anxiety disorders', 'Personality disorders'],
    correctAnswer: 1,
    explanation: 'ECT is most effective for severe depression, especially with psychotic features or when medications have failed. It is also used for acute mania and catatonia. Modern ECT is performed under anesthesia with muscle relaxants.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh10',
    category: 'mental',
    question: 'A patient who is unable to recall personal identity after a traumatic event is experiencing:',
    options: ['Dissociative amnesia', 'Dissociative identity disorder', 'Depersonalization', 'Schizophrenia'],
    correctAnswer: 0,
    explanation: 'Dissociative amnesia involves inability to recall important personal information, usually of a traumatic nature. It may be localized (specific time), selective (some aspects), or generalized (entire life). It is reversible.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh11',
    category: 'mental',
    question: 'The nurse should avoid asking "why" questions in mental health nursing because:',
    options: ['They are too difficult to understand', 'They may cause defensiveness and imply blame', 'Patients never know the answer', 'They are illegal'],
    correctAnswer: 1,
    explanation: 'Why questions can make patients feel defensive, judged, or blamed for their condition. Instead, use open-ended questions, focus on current feelings and behaviors, and explore problems collaboratively with the patient.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh12',
    category: 'mental',
    question: 'Lithium toxicity is most likely when serum level exceeds:',
    options: ['0.6 mEq/L', '1.0 mEq/L', '1.5 mEq/L', '2.0 mEq/L'],
    correctAnswer: 2,
    explanation: 'Lithium toxicity typically occurs at levels above 1.5 mEq/L. Therapeutic range is 0.6-1.2 mEq/L. Mild toxicity (1.5-2.0) causes tremor, nausea, diarrhea. Severe toxicity (>2.0) causes seizures, coma, and can be fatal.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh13',
    category: 'mental',
    question: 'The most common side effect of selective serotonin reuptake inhibitors (SSRIs) is:',
    options: ['Weight gain', 'Sexual dysfunction', 'Sedation', 'Hypertension'],
    correctAnswer: 1,
    explanation: 'Sexual dysfunction (decreased libido, erectile dysfunction, anorgasmia) affects 30-70% of patients on SSRIs. Other common side effects include nausea, headache, insomnia, and weight changes. Most improve with time except sexual dysfunction.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh14',
    category: 'mental',
    question: 'A patient experiencing flight of ideas would display:',
    options: ['Slow, deliberate speech', 'Rapid shifting from one topic to another', 'Complete silence', 'Repetition of the same words'],
    correctAnswer: 1,
    explanation: 'Flight of ideas is rapid, continuous speech with abrupt topic shifts. Connections between topics may be based on chance associations. It is characteristic of mania. It differs from loosening of associations (no logical connection).',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh15',
    category: 'mental',
    question: 'The most appropriate nursing intervention for a patient in the acute phase of mania is:',
    options: ['Encourage participation in group activities', 'Provide a quiet, low-stimulation environment', 'Allow unlimited visitors', 'Encourage decision-making'],
    correctAnswer: 1,
    explanation: 'During acute mania, patients need a quiet, low-stimulation environment to reduce agitation. High stimulation can worsen symptoms. Group activities and decision-making are appropriate during stabilization phase, not acute phase.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh16',
    category: 'mental',
    question: 'The disorder characterized by episodes of binge eating followed by compensatory behaviors is:',
    options: ['Anorexia nervosa', 'Bulimia nervosa', 'Binge eating disorder', 'Pica'],
    correctAnswer: 1,
    explanation: 'Bulimia nervosa involves recurrent episodes of binge eating followed by compensatory behaviors (vomiting, laxatives, fasting, excessive exercise). Unlike anorexia, patients may have normal weight. Medical complications include electrolyte imbalances.',
    difficulty: 'easy',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh17',
    category: 'mental',
    question: 'A patient who is immobile and does not respond to external stimuli is exhibiting:',
    options: ['Stupor', 'Catatonia', 'Coma', 'Akinetic mutism'],
    correctAnswer: 1,
    explanation: 'Catatonia is characterized by marked changes in motor activity, ranging from immobility (catatonic stupor) to excessive movement. Other features include waxy flexibility, posturing, negativism, and echolalia. It can occur in various psychiatric and medical conditions.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh18',
    category: 'mental',
    question: 'Serotonin syndrome is characterized by:',
    options: ['Hypothermia and bradycardia', 'Hyperthermia, agitation, and muscle rigidity', 'Hypotension and sedation', 'Weight gain and depression'],
    correctAnswer: 1,
    explanation: 'Serotonin syndrome is a life-threatening condition from excessive serotonergic activity. Classic triad: neuromuscular hyperactivity (tremor, rigidity), autonomic instability (hyperthermia, tachycardia), and altered mental status (agitation, confusion).',
    difficulty: 'hard',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh19',
    category: 'mental',
    question: 'The most common type of schizophrenia is:',
    options: ['Paranoid schizophrenia', 'Disorganized schizophrenia', 'Catatonic schizophrenia', 'Undifferentiated schizophrenia'],
    correctAnswer: 0,
    explanation: 'Paranoid schizophrenia is the most common type, characterized by prominent delusions and auditory hallucinations with relatively preserved cognitive function and affect. Disorganized speech/behavior and negative symptoms are less prominent.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh20',
    category: 'mental',
    question: 'Neuroleptic malignant syndrome (NMS) is characterized by all EXCEPT:',
    options: ['Hyperthermia', 'Muscle rigidity', 'Hypotension', 'Altered mental status'],
    correctAnswer: 2,
    explanation: 'NMS is characterized by hyperthermia, muscle rigidity, altered mental status, and autonomic instability (tachycardia, HYPERTENSION, diaphoresis). It is a medical emergency caused by antipsychotic medications. Treatment includes dantrolene and bromocriptine.',
    difficulty: 'hard',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh21',
    category: 'mental',
    question: 'The nurse should position themselves when interviewing a potentially aggressive patient:',
    options: ['Directly in front of the patient', 'At an angle, between the patient and the door', 'Behind the patient', 'Sitting on the floor'],
    correctAnswer: 1,
    explanation: 'The nurse should sit at an angle to the patient, between the patient and the exit, ensuring an escape route. Never block the exit or sit directly facing the patient, which may feel confrontational. Maintain safe distance.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh22',
    category: 'mental',
    question: 'The defense mechanism where a person returns to an earlier developmental stage under stress is:',
    options: ['Repression', 'Regression', 'Undoing', 'Sublimation'],
    correctAnswer: 1,
    explanation: 'Regression involves returning to an earlier, less mature pattern of behavior under stress. Examples include bedwetting in a previously toilet-trained child, or an adult becoming dependent and childlike during illness.',
    difficulty: 'easy',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh23',
    category: 'mental',
    question: 'A patient with antisocial personality disorder would typically display:',
    options: ['Excessive guilt and remorse', 'Disregard for rights of others', 'Excessive need for admiration', 'Fear of abandonment'],
    correctAnswer: 1,
    explanation: 'Antisocial personality disorder is characterized by pervasive disregard for and violation of the rights of others, including deceitfulness, impulsivity, irritability, lack of remorse, and failure to conform to social norms.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh24',
    category: 'mental',
    question: 'The primary goal of crisis intervention is:',
    options: ['Long-term personality change', 'Return to pre-crisis level of functioning', 'Complete problem resolution', 'Pharmacological treatment'],
    correctAnswer: 1,
    explanation: 'Crisis intervention aims to help the individual return to their pre-crisis level of functioning. It is short-term, focused on the immediate problem, and helps the person develop coping strategies. Long-term therapy addresses deeper issues.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh25',
    category: 'mental',
    question: 'A patient who believes their thoughts are being inserted into their mind by others is experiencing:',
    options: ['Thought broadcasting', 'Thought insertion', 'Thought withdrawal', 'Thought blocking'],
    correctAnswer: 1,
    explanation: 'Thought insertion is the delusion that thoughts are being placed into ones mind by external forces. Thought broadcasting is belief that thoughts are being transmitted to others. Thought withdrawal is belief that thoughts are being removed.',
    difficulty: 'medium',
    reference: 'Psychiatric Mental Health Nursing'
  },
  {
    id: 'mh26',
    category: 'mental',
    question: 'The therapeutic nurse-patient relationship is characterized by all EXCEPT:',
    options: ['Trust', 'Genuine caring', 'Meeting the nurse\'s personal needs', 'Clear boundaries'],
    correctAnswer: 2,
    explanation: 'The therapeutic relationship focuses on meeting the patients needs, not the nurses. It includes trust, genuine caring, clear boundaries, empathy, and acceptance. The nurse should not share personal problems or develop social relationships.',
    difficulty: 'easy',
    reference: 'Psychiatric Mental Health Nursing'
  },

  // ==================== NURSING FUNDAMENTALS (26 Questions) ====================
  {
    id: 'n1',
    category: 'fundamentals',
    question: 'The correct order of the nursing process is:',
    options: ['Diagnosis, Assessment, Planning, Implementation, Evaluation', 'Assessment, Diagnosis, Planning, Implementation, Evaluation', 'Assessment, Planning, Diagnosis, Implementation, Evaluation', 'Planning, Assessment, Diagnosis, Implementation, Evaluation'],
    correctAnswer: 1,
    explanation: 'The nursing process follows ADPIE: Assessment (data collection), Diagnosis (identifying problems), Planning (setting goals and interventions), Implementation (carrying out interventions), and Evaluation (measuring outcomes).',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n2',
    category: 'fundamentals',
    question: 'The most accurate method to verify correct placement of a nasogastric tube is:',
    options: ['Auscultation of air injection', 'Aspiration of gastric contents for pH testing', 'X-ray confirmation', 'Observation of aspirate appearance'],
    correctAnswer: 2,
    explanation: 'X-ray is the gold standard for confirming NG tube placement. pH testing of aspirate (pH <5.5 suggests gastric placement) is an acceptable bedside method. Auscultation alone is NOT reliable and should not be used as the sole method.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n3',
    category: 'fundamentals',
    question: 'When performing hand hygiene, hands should be rubbed together for at least:',
    options: ['5 seconds', '15-20 seconds', '1 minute', '2 minutes'],
    correctAnswer: 1,
    explanation: 'Hand hygiene with alcohol-based hand rub requires rubbing hands together for 15-20 seconds until dry. Handwashing with soap and water should take 40-60 seconds. Proper technique covers all surfaces of hands and fingers.',
    difficulty: 'easy',
    reference: 'WHO IPC Guidelines'
  },
  {
    id: 'n4',
    category: 'fundamentals',
    question: 'The normal range for adult blood pressure is:',
    options: ['90/60 mmHg', 'Less than 120/80 mmHg', '140/90 mmHg', '160/100 mmHg'],
    correctAnswer: 1,
    explanation: 'Normal adult blood pressure is less than 120/80 mmHg. Elevated BP is 120-129/<80 mmHg. Stage 1 hypertension is 130-139/80-89 mmHg. Stage 2 hypertension is ≥140/90 mmHg. Hypotension is generally <90/60 mmHg.',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n5',
    category: 'fundamentals',
    question: 'The best site for assessing the radial pulse is:',
    options: ['On the thumb side of the wrist', 'On the little finger side of the wrist', 'In the antecubital fossa', 'On the back of the hand'],
    correctAnswer: 0,
    explanation: 'The radial pulse is assessed on the thumb side of the wrist, over the radial artery. It is the most commonly used site for routine pulse assessment. The pulse should be counted for 60 seconds if irregular, 15-30 seconds if regular.',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n6',
    category: 'fundamentals',
    question: 'The correct needle gauge for intramuscular injection in an adult is:',
    options: ['18-20 gauge', '21-23 gauge', '25-27 gauge', '28-30 gauge'],
    correctAnswer: 1,
    explanation: 'IM injections in adults typically use 21-23 gauge needles (22G is common). The needle should be 1-1.5 inches long for adults. Smaller gauge (larger number) needles are for subcutaneous or intradermal injections.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n7',
    category: 'fundamentals',
    question: 'The nurse should position a patient with dyspnea in:',
    options: ['Supine position', 'Prone position', 'High Fowler\'s position', 'Trendelenburg position'],
    correctAnswer: 2,
    explanation: 'High Fowlers position (sitting upright at 90°) maximizes lung expansion and is used for patients with dyspnea. Semi-Fowlers (30-45°) is used for cardiac and respiratory patients. Trendelenburg is contraindicated in dyspnea.',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n8',
    category: 'fundamentals',
    question: 'A patient who is NPO should receive oral care:',
    options: ['Once daily', 'Every 2-4 hours', 'Only when requested', 'Twice daily'],
    correctAnswer: 1,
    explanation: 'Patients who are NPO should receive oral care every 2-4 hours to prevent dry mucous membranes, maintain oral hygiene, and provide comfort. Regular oral care also helps prevent hospital-acquired pneumonia.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n9',
    category: 'fundamentals',
    question: 'The normal respiratory rate for an adult at rest is:',
    options: ['8-12 breaths/minute', '12-20 breaths/minute', '20-30 breaths/minute', '30-40 breaths/minute'],
    correctAnswer: 1,
    explanation: 'Normal adult respiratory rate is 12-20 breaths per minute. Below 12 is bradypnea, above 20 is tachypnea. Respirations should be counted for 60 seconds, ideally without the patient being aware.',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n10',
    category: 'fundamentals',
    question: 'The correct angle for subcutaneous injection is:',
    options: ['15 degrees', '45-90 degrees', '90 degrees', '120 degrees'],
    correctAnswer: 1,
    explanation: 'Subcutaneous injections are given at 45-90 degree angle, depending on the amount of subcutaneous tissue. A 45° angle is used for thin patients or short needles, while 90° can be used for those with more subcutaneous tissue.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n11',
    category: 'fundamentals',
    question: 'Before administering any medication, the nurse must assess for:',
    options: ['Patient\'s age only', 'Allergies and contraindications', 'Cost of medication', 'Patient\'s occupation'],
    correctAnswer: 1,
    explanation: 'Before administering any medication, the nurse must assess for allergies, contraindications, potential drug interactions, and relevant vital signs/laboratory values. This is part of the assessment phase of medication administration.',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n12',
    category: 'fundamentals',
    question: 'A Stage 2 pressure ulcer is characterized by:',
    options: ['Intact skin with non-blanchable redness', 'Partial thickness skin loss with exposed dermis', 'Full thickness skin loss', 'Full thickness tissue loss with exposed bone'],
    correctAnswer: 1,
    explanation: 'Stage 2 pressure ulcer: partial thickness skin loss with exposed dermis, appearing as a shallow open wound with red-pink wound bed. Stage 1 is non-blanchable erythema on intact skin. Stage 3 is full thickness skin loss. Stage 4 involves bone/muscle.',
    difficulty: 'medium',
    reference: 'NPUAP Pressure Injury Staging'
  },
  {
    id: 'n13',
    category: 'fundamentals',
    question: 'The correct technique for donning personal protective equipment (PPE) is:',
    options: ['Gown, mask, goggles, gloves', 'Gloves, gown, mask, goggles', 'Mask, gown, gloves, goggles', 'Goggles, mask, gown, gloves'],
    correctAnswer: 0,
    explanation: 'The correct order for donning PPE is: 1) Gown, 2) Mask, 3) Goggles/face shield, 4) Gloves. For removing PPE: 1) Gloves, 2) Goggles, 3) Gown, 4) Mask. Hand hygiene is performed before and after PPE use.',
    difficulty: 'medium',
    reference: 'WHO IPC Guidelines'
  },
  {
    id: 'n14',
    category: 'fundamentals',
    question: 'The nurse should collect a urine specimen from an indwelling catheter by:',
    options: ['Disconnecting the catheter from the bag', 'Aspirating from the sampling port', 'Emptying urine from the drainage bag', 'Removing the catheter'],
    correctAnswer: 1,
    explanation: 'Urine specimens from indwelling catheters should be aspirated from the sampling port using a sterile syringe. The port should be cleaned with alcohol before collection. Never collect from the drainage bag as this may be contaminated.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n15',
    category: 'fundamentals',
    question: 'The normal body temperature range for an adult is:',
    options: ['35.0-36.0°C', '36.0-37.5°C', '37.5-38.5°C', '38.5-39.5°C'],
    correctAnswer: 1,
    explanation: 'Normal adult body temperature is 36.0-37.5°C (96.8-99.5°F). Temperature varies with time of day, activity, and measurement site. Rectal temperature is 0.5-1°C higher than oral. Axillary is 0.5°C lower than oral.',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n16',
    category: 'fundamentals',
    question: 'A patient on strict bed rest is at risk for all EXCEPT:',
    options: ['Deep vein thrombosis', 'Pressure ulcers', 'Increased bone density', 'Urinary stasis'],
    correctAnswer: 2,
    explanation: 'Bed rest causes bone demineralization and DECREASED bone density (not increased). Other complications include DVT, pressure ulcers, urinary stasis, constipation, pneumonia, muscle atrophy, and orthostatic hypotension.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n17',
    category: 'fundamentals',
    question: 'The most reliable indicator of fluid status is:',
    options: ['Blood pressure', 'Daily weight', 'Intake and output', 'Skin turgor'],
    correctAnswer: 1,
    explanation: 'Daily weight is the most reliable indicator of fluid status. A 1 kg change in body weight equals approximately 1 liter of fluid. Weights should be taken at the same time each day, with the same scale and similar clothing.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n18',
    category: 'fundamentals',
    question: 'When transferring a patient from bed to wheelchair, the nurse should:',
    options: ['Lift the patient by the arms', 'Position the wheelchair on the patient\'s weak side', 'Lock the wheelchair brakes', 'Stand behind the patient'],
    correctAnswer: 2,
    explanation: 'Always lock wheelchair brakes before transferring a patient. Position the wheelchair on the patients stronger side. Use a gait belt and proper body mechanics. The patient should wear nonskid footwear.',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n19',
    category: 'fundamentals',
    question: 'The correct procedure for cleaning a wound is:',
    options: ['From the outer edge toward the wound', 'From the wound outward to surrounding skin', 'In a circular motion around the wound', 'From top to bottom without pattern'],
    correctAnswer: 1,
    explanation: 'Wound cleaning should be done from the cleanest area (the wound) outward toward surrounding skin. This prevents introducing microorganisms from contaminated skin into the wound. Use separate gauze for each stroke.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n20',
    category: 'fundamentals',
    question: 'The nurse documents that a patient has +2 pitting edema. This means:',
    options: ['No visible indentation', '2 mm indentation that disappears rapidly', '4 mm indentation that lasts 15 seconds', '8 mm indentation that lasts >2 minutes'],
    correctAnswer: 1,
    explanation: '+2 pitting edema: 4 mm indentation that disappears in 10-15 seconds. Scale: +1 (2mm, disappears rapidly), +2 (4mm, 15 sec), +3 (6mm, 1 min), +4 (8mm, >2 min). Assessment is done by pressing thumb over bony prominence.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n21',
    category: 'fundamentals',
    question: 'A patient\'s position during lumbar puncture should be:',
    options: ['Supine with legs extended', 'Side-lying with knees drawn to chest', 'Prone with head turned', 'Sitting upright'],
    correctAnswer: 1,
    explanation: 'For lumbar puncture, the patient is positioned in lateral recumbent position with knees drawn to chest and chin tucked in (fetal position), or sitting and leaning forward. This flexes the spine and opens intervertebral spaces.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n22',
    category: 'fundamentals',
    question: 'The nurse is preparing to administer an intradermal injection. The correct angle is:',
    options: ['5-15 degrees', '45 degrees', '90 degrees', '30 degrees'],
    correctAnswer: 0,
    explanation: 'Intradermal injections are administered at a 5-15 degree angle, needle bevel up, into the dermis. This produces a small wheal or bleb. Common sites are the inner forearm and upper back. Used for TB testing and allergy testing.',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n23',
    category: 'fundamentals',
    question: 'A patient with a fever should be encouraged to:',
    options: ['Reduce fluid intake', 'Increase fluid intake', 'Exercise vigorously', 'Stay under heavy blankets'],
    correctAnswer: 1,
    explanation: 'Patients with fever should increase fluid intake to prevent dehydration from increased insensible losses. Other interventions include cool environment, light clothing, antipyretics, and tepid sponging. Rest is encouraged.',
    difficulty: 'easy',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n24',
    category: 'fundamentals',
    question: 'The nurse should not take blood pressure on an arm that:',
    options: ['Has an IV line', 'Is the non-dominant arm', 'Is hairy', 'Has been exercised'],
    correctAnswer: 0,
    explanation: 'Blood pressure should not be taken on an arm with an IV line, fistula, recent surgery, or injury. It can affect the IV infusion and readings. Also avoid arms with lymphedema (e.g., after mastectomy), paralysis, or trauma.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n25',
    category: 'fundamentals',
    question: 'The correct order of assessment for the abdomen is:',
    options: ['Inspection, auscultation, percussion, palpation', 'Auscultation, inspection, percussion, palpation', 'Percussion, palpation, inspection, auscultation', 'Palpation, percussion, auscultation, inspection'],
    correctAnswer: 0,
    explanation: 'Abdominal assessment follows the sequence: Inspection, Auscultation, Percussion, Palpation. Auscultation is done before percussion/palpation to avoid altering bowel sounds. This differs from other body systems where auscultation is last.',
    difficulty: 'medium',
    reference: 'Kozier & Erb Fundamentals of Nursing'
  },
  {
    id: 'n26',
    category: 'fundamentals',
    question: 'A nurse is caring for a patient with a contagious disease. The correct order of removing PPE is:',
    options: ['Mask, gloves, gown, goggles', 'Gloves, goggles, gown, mask', 'Gown, gloves, mask, goggles', 'Goggles, mask, gloves, gown'],
    correctAnswer: 1,
    explanation: 'Remove PPE in this order: 1) Gloves (most contaminated), 2) Goggles/face shield, 3) Gown, 4) Mask (at doorway). Perform hand hygiene immediately after removing all PPE. This sequence minimizes contamination of self and environment.',
    difficulty: 'medium',
    reference: 'WHO IPC Guidelines'
  },

  // ==================== PROFESSIONAL NURSING (26 Questions) ====================
  {
    id: 'pr1',
    category: 'professional',
    question: 'The Nursing and Midwifery Council of Nigeria (NMCN) was established by:',
    options: ['Decree 54 of 1988', 'Act Cap N143 Laws of Nigeria 2004', 'Decree 89 of 1979', 'Act of Parliament 1960'],
    correctAnswer: 1,
    explanation: 'The NMCN was established by the Nurses Act Cap N143 Laws of the Federation of Nigeria 2004 (formerly Decree 54 of 1988). It regulates nursing education and practice in Nigeria, including registration and licensure.',
    difficulty: 'medium',
    reference: 'NMCN Act'
  },
  {
    id: 'pr2',
    category: 'professional',
    question: 'The primary purpose of nursing documentation is to:',
    options: ['Protect the nurse from lawsuits', 'Communicate patient care information', 'Meet hospital requirements', 'Provide data for research'],
    correctAnswer: 1,
    explanation: 'The primary purpose of nursing documentation is to communicate patient care information among healthcare team members. It also provides legal protection, supports quality improvement, and serves as evidence of care provided.',
    difficulty: 'easy',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr3',
    category: 'professional',
    question: 'Informed consent must be obtained by:',
    options: ['The nurse', 'The physician or provider performing the procedure', 'Any healthcare worker', 'The hospital administrator'],
    correctAnswer: 1,
    explanation: 'Informed consent must be obtained by the physician or provider who will perform the procedure. The nurse may witness the signature but cannot obtain consent. The provider must explain risks, benefits, and alternatives.',
    difficulty: 'medium',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr4',
    category: 'professional',
    question: 'The nurse\'s best defense against malpractice is:',
    options: ['Having insurance', 'Following standards of care and documenting properly', 'Having good relationships with patients', 'Working in a large hospital'],
    correctAnswer: 1,
    explanation: 'The best defense against malpractice is providing care that meets professional standards and documenting it accurately and completely. Documentation should reflect assessment findings, interventions, patient responses, and communication.',
    difficulty: 'medium',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr5',
    category: 'professional',
    question: 'A nurse who delegates tasks to unlicensed assistive personnel is:',
    options: ['Transferring responsibility for the task', 'Transferring authority but remaining accountable', 'Relieved of all liability', 'Violating nursing regulations'],
    correctAnswer: 1,
    explanation: 'Delegation transfers authority to perform a task, but the nurse remains accountable for the outcome. The Five Rights of Delegation are: Right task, Right circumstance, Right person, Right direction, Right supervision.',
    difficulty: 'medium',
    reference: 'NMCN Code of Conduct'
  },
  {
    id: 'pr6',
    category: 'professional',
    question: 'The ethical principle of beneficence means:',
    options: ['Doing no harm', 'Doing good and promoting welfare', 'Respecting autonomy', 'Being fair and just'],
    correctAnswer: 1,
    explanation: 'Beneficence is the duty to do good and promote the welfare of patients. Non-maleficence is "do no harm." Autonomy is respecting patients rights to make decisions. Justice is fair and equal treatment for all.',
    difficulty: 'easy',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr7',
    category: 'professional',
    question: 'Breach of confidentiality occurs when a nurse:',
    options: ['Discusses patient information with the healthcare team', 'Shares patient information with unauthorized persons', 'Documents patient information in the chart', 'Reports abuse to authorities'],
    correctAnswer: 1,
    explanation: 'Breach of confidentiality occurs when patient information is shared with unauthorized persons. Sharing with the healthcare team for treatment purposes, required documentation, and mandatory reporting (abuse, communicable diseases) are exceptions.',
    difficulty: 'easy',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr8',
    category: 'professional',
    question: 'The nurse has a duty to report all EXCEPT:',
    options: ['Child abuse', 'Communicable diseases', 'A colleague\'s personal relationship issues', 'Impaired practice by a colleague'],
    correctAnswer: 2,
    explanation: 'Nurses have a legal duty to report child/elder abuse, communicable diseases, gunshot wounds, and impaired practice. Personal relationship issues of colleagues are private matters that do not affect patient safety and need not be reported.',
    difficulty: 'easy',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr9',
    category: 'professional',
    question: 'The legal term for failure to act as a reasonably prudent nurse would in similar circumstances is:',
    options: ['Malpractice', 'Negligence', 'Assault', 'Battery'],
    correctAnswer: 1,
    explanation: 'Negligence is failure to act as a reasonably prudent person would in similar circumstances. Malpractice is professional negligence - when a professional fails to meet the standard of care, causing harm. Assault is threat of harm; battery is unauthorized touching.',
    difficulty: 'medium',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr10',
    category: 'professional',
    question: 'A nurse who violates the NMCN Code of Conduct may face:',
    options: ['Criminal charges only', 'Disciplinary action including license suspension', 'Verbal warning only', 'No consequences'],
    correctAnswer: 1,
    explanation: 'Violations of the NMCN Code of Conduct can result in disciplinary actions including warning, suspension, or revocation of license. Serious violations may also result in civil liability (malpractice) or criminal charges.',
    difficulty: 'easy',
    reference: 'NMCN Code of Conduct'
  },
  {
    id: 'pr11',
    category: 'professional',
    question: 'The primary role of a nurse as a patient advocate is to:',
    options: ['Make decisions for the patient', 'Protect and support patient rights', 'Follow doctor\'s orders without question', 'Avoid conflicts with other healthcare providers'],
    correctAnswer: 1,
    explanation: 'Patient advocacy involves protecting and supporting patient rights, including the right to informed consent, privacy, and self-determination. The nurse speaks up for patients who cannot speak for themselves and ensures their wishes are respected.',
    difficulty: 'easy',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr12',
    category: 'professional',
    question: 'When a patient refuses treatment, the nurse should:',
    options: ['Force the treatment', 'Document the refusal and inform the physician', 'Ignore the patient\'s decision', 'Discharge the patient immediately'],
    correctAnswer: 1,
    explanation: 'When a competent patient refuses treatment, the nurse should document the refusal, inform the physician, ensure the patient understands the consequences, and respect the patients autonomy. Informed refusal should be documented.',
    difficulty: 'easy',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr13',
    category: 'professional',
    question: 'The purpose of continuing professional development (CPD) for nurses is to:',
    options: ['Generate income for regulatory bodies', 'Maintain and enhance professional competence', 'Punish nurses who are not up to date', 'Reduce nursing employment'],
    correctAnswer: 1,
    explanation: 'CPD ensures nurses maintain and enhance their knowledge, skills, and professional competence throughout their careers. It is required for license renewal in Nigeria. CPD activities include courses, workshops, conferences, and self-directed learning.',
    difficulty: 'easy',
    reference: 'NMCN CPD Guidelines'
  },
  {
    id: 'pr14',
    category: 'professional',
    question: 'The scope of nursing practice is defined by:',
    options: ['Individual hospitals', 'Nursing and Midwifery Council', 'Physicians', 'Patient preferences'],
    correctAnswer: 1,
    explanation: 'The NMCN defines the scope of nursing practice in Nigeria, specifying what nurses are educated and authorized to perform. Individual facilities may further limit scope but cannot expand it beyond regulatory definitions.',
    difficulty: 'easy',
    reference: 'NMCN Act'
  },
  {
    id: 'pr15',
    category: 'professional',
    question: 'A nurse witness a colleague make a medication error. The appropriate action is to:',
    options: ['Ignore it to maintain friendship', 'Report to the nurse manager', 'Tell the patient only', 'Confront the colleague publicly'],
    correctAnswer: 1,
    explanation: 'Medication errors must be reported through appropriate channels (nurse manager, incident reporting system). Patient safety takes priority. The nurse should also ensure the patient is assessed and the physician notified. Documentation is essential.',
    difficulty: 'easy',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr16',
    category: 'professional',
    question: 'The minimum educational requirement for registration as a nurse in Nigeria is:',
    options: ['Certificate in Nursing', 'Diploma in Nursing', 'Bachelor of Nursing Science', 'Master\'s degree'],
    correctAnswer: 1,
    explanation: 'The minimum requirement is a Diploma in Nursing from an NMCN-approved school (3 years). Bachelor of Nursing Science (5 years) is also accepted. Both pathways lead to RN qualification. BNSc graduates also receive RN, RM, and BNSc.',
    difficulty: 'medium',
    reference: 'NMCN Act'
  },
  {
    id: 'pr17',
    category: 'professional',
    question: 'The purpose of the Nurse\'s Pledge is to:',
    options: ['Replace legal requirements', 'Provide ethical guidelines for professional conduct', 'Increase hospital profits', 'Reduce nursing workload'],
    correctAnswer: 1,
    explanation: 'The Nurses Pledge is a commitment to ethical professional conduct, patient care, and dedication to the nursing profession. Taken at graduation, it reflects nursing values and the nurses commitment to professional responsibilities.',
    difficulty: 'easy',
    reference: 'NMCN Code of Conduct'
  },
  {
    id: 'pr18',
    category: 'professional',
    question: 'A nurse can be held liable for:',
    options: ['Only actions personally performed', 'Actions personally performed and those delegated', 'Only actions documented', 'Only medication errors'],
    correctAnswer: 1,
    explanation: 'A nurse is liable for their own actions and for tasks they delegate (vicarious liability). When delegating, the nurse must ensure proper supervision and that the delegatee is competent. Delegation does not transfer accountability.',
    difficulty: 'medium',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr19',
    category: 'professional',
    question: 'The nurse\'s responsibility in research includes:',
    options: ['Protecting participant rights and safety', 'Recruiting as many participants as possible', 'Avoiding involvement in research', 'Publishing results before completion'],
    correctAnswer: 0,
    explanation: 'Nurses involved in research must protect participant rights, ensure informed consent, maintain confidentiality, and report adverse events. Nurses should advocate for patients who may be vulnerable to coercion in research settings.',
    difficulty: 'medium',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr20',
    category: 'professional',
    question: 'According to the NMCN Code, professional misconduct includes:',
    options: ['Working overtime', 'Falsifying patient records', 'Reporting to work late occasionally', 'Taking approved leave'],
    correctAnswer: 1,
    explanation: 'Professional misconduct includes falsifying records, practicing under influence of drugs/alcohol, neglecting patient care, unauthorized disclosure of information, incompetence, and any conduct that brings the profession into disrepute.',
    difficulty: 'easy',
    reference: 'NMCN Code of Conduct'
  },
  {
    id: 'pr21',
    category: 'professional',
    question: 'The nurse\'s legal obligation to protect patient information is based on:',
    options: ['Hospital policy only', 'Ethical and legal principles', 'Physician orders', 'Patient request only'],
    correctAnswer: 1,
    explanation: 'Confidentiality is both an ethical duty (professional codes) and legal requirement (HIPAA, Nigerian laws). Patients have a right to privacy, and nurses must protect health information unless disclosure is authorized or legally mandated.',
    difficulty: 'medium',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr22',
    category: 'professional',
    question: 'A nurse who is asked to perform a task outside their scope of practice should:',
    options: ['Perform it anyway to please the doctor', 'Refuse and explain the limitation', 'Delegate it to another nurse', 'Perform it without documentation'],
    correctAnswer: 1,
    explanation: 'A nurse should refuse tasks outside their scope of practice and explain why they cannot perform them. Performing unauthorized tasks puts patients at risk and exposes the nurse to liability. The nurse should suggest appropriate alternatives.',
    difficulty: 'easy',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr23',
    category: 'professional',
    question: 'The ethical principle that supports treating all patients equally regardless of social status is:',
    options: ['Beneficence', 'Autonomy', 'Justice', 'Veracity'],
    correctAnswer: 2,
    explanation: 'Justice is the ethical principle of fairness and equal treatment. It requires that patients be treated equally regardless of social status, wealth, race, religion, or other factors. Veracity is truthfulness; autonomy is self-determination.',
    difficulty: 'easy',
    reference: 'Nursing Ethics & Law'
  },
  {
    id: 'pr24',
    category: 'professional',
    question: 'In Nigeria, nursing license renewal is required:',
    options: ['Every year', 'Every 3 years', 'Every 5 years', 'Only once after initial registration'],
    correctAnswer: 1,
    explanation: 'Nurses in Nigeria must renew their license every 3 years. Requirements include payment of fees and evidence of continuing professional development (CPD) points. Practicing with an expired license is illegal.',
    difficulty: 'medium',
    reference: 'NMCN License Renewal Guidelines'
  },
  {
    id: 'pr25',
    category: 'professional',
    question: 'The nurse\'s primary commitment is to:',
    options: ['The physician', 'The hospital', 'The patient', 'The nursing profession'],
    correctAnswer: 2,
    explanation: 'The nurses primary commitment is to the patient. This is fundamental to nursing ethics. While nurses have obligations to employers, colleagues, and the profession, patient welfare and advocacy come first.',
    difficulty: 'easy',
    reference: 'NMCN Code of Conduct'
  },
  {
    id: 'pr26',
    category: 'professional',
    question: 'The term "standard of care" refers to:',
    options: ['Minimum acceptable level of care', 'Ideal level of care', 'What the physician orders', 'What the patient requests'],
    correctAnswer: 0,
    explanation: 'Standard of care is the minimum level of care that a reasonably prudent nurse with similar education and experience would provide in similar circumstances. It is the benchmark against which nursing actions are measured in malpractice cases.',
    difficulty: 'medium',
    reference: 'Nursing Ethics & Law'
  },
]

// Helper functions
export function getQuestionsByCategory(categoryId: string): Question[] {
  return questions.filter(q => q.category === categoryId)
}

export function getRandomQuestions(count: number, category?: string): Question[] {
  const pool = category ? getQuestionsByCategory(category) : questions
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function getQuestionCount(): { total: number; byCategory: Record<string, number> } {
  const byCategory: Record<string, number> = {}
  categories.forEach(cat => {
    byCategory[cat.id] = getQuestionsByCategory(cat.id).length
  })
  return {
    total: questions.length,
    byCategory
  }
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find(q => q.id === id)
}

// Local storage helpers for progress tracking
export function saveProgress(progress: QuizProgress) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('wabi_quiz_progress', JSON.stringify(progress))
  }
}

export function loadProgress(): QuizProgress | null {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('wabi_quiz_progress')
    return saved ? JSON.parse(saved) : null
  }
  return null
}

export interface QuizProgress {
  totalAnswered: number
  correctAnswers: number
  categoryStats: Record<string, { answered: number; correct: number }>
  lastPracticeDate: string
  streak: number
  bookmarkedQuestions: string[]
}
