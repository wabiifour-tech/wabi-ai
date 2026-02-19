// Study Notes Database - Quick Reference for NMCN Exam
export interface StudyNote {
  id: string
  category: string
  title: string
  summary: string
  keyPoints: string[]
  mnemonics?: string
  nigerianContext?: string
}

export const studyNotes: StudyNote[] = [
  // ANATOMY & PHYSIOLOGY
  {
    id: 'anat-1',
    category: 'anatomy',
    title: 'Normal Vital Signs by Age',
    summary: 'Reference values for vital signs across different age groups',
    keyPoints: [
      'Adult HR: 60-100 bpm',
      'Adult RR: 12-20 breaths/min',
      'Adult BP: <120/80 mmHg',
      'Adult Temp: 36.0-37.5°C',
      'Neonate HR: 120-160 bpm',
      'Neonate RR: 30-60 breaths/min'
    ],
    mnemonics: 'Remember: "Temp, Pulse, RR, BP, Pain" - Always assess in order'
  },
  {
    id: 'anat-2',
    category: 'anatomy',
    title: 'Blood pH and Electrolytes',
    summary: 'Normal laboratory values for acid-base and electrolyte balance',
    keyPoints: [
      'Blood pH: 7.35-7.45',
      'Sodium (Na+): 136-145 mEq/L',
      'Potassium (K+): 3.5-5.0 mEq/L',
      'Calcium (Ca2+): 8.5-10.5 mg/dL',
      'Magnesium (Mg2+): 1.5-2.5 mEq/L',
      'Chloride (Cl-): 98-106 mEq/L'
    ],
    mnemonics: '"Na-K-Cl-Ca-Mg" = Never Kill Cats Can Meow'
  },
  {
    id: 'anat-3',
    category: 'anatomy',
    title: 'Complete Blood Count (CBC)',
    summary: 'Normal values for complete blood count parameters',
    keyPoints: [
      'Hemoglobin: M 14-18 g/dL, F 12-16 g/dL',
      'Hematocrit: M 40-54%, F 36-48%',
      'WBC: 5,000-10,000/μL',
      'Platelets: 150,000-400,000/μL',
      'RBC: M 4.5-6.0 million/μL, F 4.0-5.5 million/μL'
    ],
    nigerianContext: 'Note: Lower hemoglobin may be common due to malaria and sickle cell disease prevalence'
  },
  {
    id: 'anat-4',
    category: 'anatomy',
    title: 'Renal Function Tests',
    summary: 'Normal values for kidney function assessment',
    keyPoints: [
      'Creatinine: 0.6-1.2 mg/dL',
      'BUN: 7-20 mg/dL',
      'GFR: >90 mL/min (normal)',
      'Urine output: >0.5 mL/kg/hr',
      'Specific gravity: 1.005-1.030'
    ],
    nigerianContext: 'CKD is common in Nigeria due to hypertension and herbal medication use'
  },
  {
    id: 'anat-5',
    category: 'anatomy',
    title: 'Cardiovascular Assessment',
    summary: 'Key cardiac parameters and assessments',
    keyPoints: [
      'Cardiac output: 4-8 L/min',
      'Stroke volume: 60-100 mL/beat',
      'Central venous pressure: 2-8 mmHg',
      'Pulmonary artery pressure: 15-30/4-12 mmHg',
      'Normal S1 and S2 heart sounds'
    ]
  },
  {
    id: 'anat-6',
    category: 'anatomy',
    title: 'Liver Function Tests',
    summary: 'Normal values for hepatic function',
    keyPoints: [
      'ALT: 7-56 U/L',
      'AST: 10-40 U/L',
      'Bilirubin (total): 0.3-1.2 mg/dL',
      'Albumin: 3.5-5.0 g/dL',
      'PT: 11-13.5 seconds',
      'Alkaline phosphatase: 44-147 IU/L'
    ],
    nigerianContext: 'Hepatitis B is endemic in Nigeria - always consider in abnormal LFTs'
  },

  // PHARMACOLOGY
  {
    id: 'pharm-1',
    category: 'pharmacology',
    title: 'The Five Rights of Drug Administration',
    summary: 'Essential safety checks before giving any medication',
    keyPoints: [
      'Right PATIENT - Verify identity',
      'Right DRUG - Check name, expiry',
      'Right DOSE - Calculate correctly',
      'Right ROUTE - PO, IV, IM, SC',
      'Right TIME - Check frequency',
      'Right DOCUMENTATION - Record immediately'
    ],
    mnemonics: '"P-D-D-R-T" = Please Do Drugs Right Today'
  },
  {
    id: 'pharm-2',
    category: 'pharmacology',
    title: 'Common Drug Antidotes',
    summary: 'Emergency antidotes for drug toxicity',
    keyPoints: [
      'Opioids → Naloxone (Narcan)',
      'Benzodiazepines → Flumazenil',
      'Heparin → Protamine Sulfate',
      'Warfarin → Vitamin K',
      'Paracetamol → N-Acetylcysteine',
      'Iron → Deferoxamine',
      'Digoxin → Digoxin-specific antibody'
    ],
    mnemonics: '"O-B-H-W-P-I-D" = Our Best Helpers Will Prevent Immediate Death'
  },
  {
    id: 'pharm-3',
    category: 'pharmacology',
    title: 'Insulin Types and Onset',
    summary: 'Classification of insulin preparations',
    keyPoints: [
      'Rapid-acting (Lispro): Onset 15min, Peak 1hr',
      'Short-acting (Regular): Onset 30min, Peak 2-3hr',
      'Intermediate (NPH): Onset 2hr, Peak 4-12hr',
      'Long-acting (Glargine): Onset 2-4hr, Peakless 24hr',
      'Never shake insulin - roll gently',
      'Rotate injection sites'
    ],
    mnemonics: '"R-S-I-L" = Rapid Short Intermediate Long'
  },
  {
    id: 'pharm-4',
    category: 'pharmacology',
    title: 'Drug Calculations',
    summary: 'Essential formulas for dosage calculations',
    keyPoints: [
      'Dose = (Desired/Available) × Quantity',
      'IV rate (mL/hr) = Volume/Time (hr)',
      'Drops/min = (Volume × Drop factor)/Time (min)',
      'Pediatric dose = (Child weight × Adult dose)/70',
      'Always double-check calculations'
    ]
  },
  {
    id: 'pharm-5',
    category: 'pharmacology',
    title: 'Drugs in Pregnancy Categories',
    summary: 'FDA pregnancy risk categories',
    keyPoints: [
      'Category A: Safe (rare)',
      'Category B: No evidence of risk',
      'Category C: Risk cannot be ruled out',
      'Category D: Positive evidence of risk',
      'Category X: Contraindicated',
      'Always consult before prescribing in pregnancy'
    ]
  },
  {
    id: 'pharm-6',
    category: 'pharmacology',
    title: 'Antibiotic Classification',
    summary: 'Common antibiotics and their uses in Nigeria',
    keyPoints: [
      'Penicillins: Amoxicillin, Augmentin',
      'Cephalosporins: Ceftriaxone, Cefuroxime',
      'Macrolides: Erythromycin, Azithromycin',
      'Fluoroquinolones: Ciprofloxacin',
      'Aminoglycosides: Gentamicin',
      'Antimalarials: Artemether-Lumefantrine'
    ],
    nigerianContext: 'Malaria and typhoid are common - know antimalarial dosing well'
  },

  // MEDICAL-SURGICAL NURSING
  {
    id: 'medsurg-1',
    category: 'medsurg',
    title: 'Glasgow Coma Scale (GCS)',
    summary: 'Assessment of level of consciousness',
    keyPoints: [
      'Eye Opening: 1-4 points',
      'Verbal Response: 1-5 points',
      'Motor Response: 1-6 points',
      'Maximum score: 15 (fully alert)',
      'Score ≤8: Severe injury, protect airway',
      'Score 9-12: Moderate injury',
      'Score 13-15: Minor injury'
    ],
    mnemonics: '"E-V-M" = Eyes Verbal Motor - 4-5-6'
  },
  {
    id: 'medsurg-2',
    category: 'medsurg',
    title: 'Pressure Ulcer Staging',
    summary: 'Classification of pressure injuries',
    keyPoints: [
      'Stage 1: Non-blanchable erythema, intact skin',
      'Stage 2: Partial thickness, dermis exposed',
      'Stage 3: Full thickness, subcutaneous visible',
      'Stage 4: Full thickness, muscle/bone exposed',
      'Unstageable: Slough/eschar obscures wound',
      'Deep tissue injury: Purple/maroon discoloration'
    ]
  },
  {
    id: 'medsurg-3',
    category: 'medsurg',
    title: 'Blood Transfusion Reactions',
    summary: 'Types and management of transfusion reactions',
    keyPoints: [
      'STOP transfusion immediately',
      'Maintain IV with normal saline',
      'Check vital signs',
      'Notify physician and blood bank',
      'Hemolytic: Fever, chills, back pain',
      'Allergic: Urticaria, itching',
      'Febrile: Fever >1°C rise',
      'Circulatory overload: Dyspnea, crackles'
    ],
    mnemonics: '"STOP" = Stop Transfusion, Observe Patient'
  },
  {
    id: 'medsurg-4',
    category: 'medsurg',
    title: 'Heart Failure Classifications',
    summary: 'NYHA functional classification',
    keyPoints: [
      'Class I: No symptoms with ordinary activity',
      'Class II: Slight limitation, comfortable at rest',
      'Class III: Marked limitation, less than ordinary activity',
      'Class IV: Symptoms at rest, unable to activity',
      'Left-sided: Pulmonary congestion, dyspnea',
      'Right-sided: JVD, peripheral edema, hepatomegaly'
    ]
  },
  {
    id: 'medsurg-5',
    category: 'medsurg',
    title: 'Diabetic Emergencies',
    summary: 'DKA vs HHS comparison',
    keyPoints: [
      'DKA: Kussmaul breathing, ketones present',
      'DKA: Glucose 300-800 mg/dL',
      'HHS: No Kussmaul, no ketones',
      'HHS: Glucose >600 mg/dL, more dehydrated',
      'Both: IV fluids + insulin + potassium',
      'Monitor for hypoglycemia during treatment'
    ],
    mnemonics: '"DKA = Ketones Always present"'
  },
  {
    id: 'medsurg-6',
    category: 'medsurg',
    title: 'Stroke Assessment - FAST',
    summary: 'Rapid stroke identification',
    keyPoints: [
      'F - Face drooping',
      'A - Arm weakness',
      'S - Speech difficulty',
      'T - Time to call for help',
      'Ischemic stroke: Most common (85%)',
      'Time window for thrombolytics: 4.5 hours'
    ],
    nigerianContext: 'Stroke is common due to uncontrolled hypertension in Nigeria'
  },

  // MATERNAL & CHILD HEALTH
  {
    id: 'mch-1',
    category: 'maternal',
    title: 'APGAR Scoring',
    summary: 'Newborn assessment at 1 and 5 minutes',
    keyPoints: [
      'Appearance (color): 0-2 points',
      'Pulse (heart rate): 0-2 points',
      'Grimace (reflex irritability): 0-2 points',
      'Activity (muscle tone): 0-2 points',
      'Respiration: 0-2 points',
      'Normal: 7-10, Moderate: 4-6, Severe: 0-3'
    ],
    mnemonics: '"APGAR" = Appearance Pulse Grimace Activity Respiration'
  },
  {
    id: 'mch-2',
    category: 'maternal',
    title: 'Stages of Labor',
    summary: 'Duration and characteristics of each stage',
    keyPoints: [
      'First stage: Onset to full dilation (12-16h primip)',
      'Latent phase: 0-6 cm dilation',
      'Active phase: 6-10 cm dilation',
      'Second stage: Full dilation to delivery (1-2h)',
      'Third stage: Delivery of placenta (5-30 min)',
      'Fourth stage: First 2 hours postpartum'
    ]
  },
  {
    id: 'mch-3',
    category: 'maternal',
    title: 'Preeclampsia Warning Signs',
    summary: 'Critical signs of worsening preeclampsia',
    keyPoints: [
      'BP ≥140/90 after 20 weeks',
      'Proteinuria >300mg/24hr',
      'Severe headache',
      'Visual disturbances',
      'Epigastric pain',
      'Hyperreflexia, clonus',
      'Treatment: Magnesium sulfate, delivery'
    ],
    nigerianContext: 'Preeclampsia is a leading cause of maternal mortality in Nigeria'
  },
  {
    id: 'mch-4',
    category: 'maternal',
    title: 'Immunization Schedule (Nigeria)',
    summary: 'National Programme on Immunization schedule',
    keyPoints: [
      'Birth: BCG, OPV0, Hep B',
      '6 weeks: OPV1, Penta1, PCV1, Rotavirus1',
      '10 weeks: OPV2, Penta2, PCV2, Rotavirus2',
      '14 weeks: OPV3, Penta3, PCV3',
      '9 months: Measles, Yellow fever',
      '18 months: DPT booster'
    ],
    nigerianContext: 'Essential for community health nursing questions'
  },
  {
    id: 'mch-5',
    category: 'maternal',
    title: 'Lochia Stages',
    summary: 'Normal postpartum vaginal discharge',
    keyPoints: [
      'Lochia rubra: Days 1-3, bright red',
      'Lochia serosa: Days 4-10, pink/brown',
      'Lochia alba: Days 11-21+, white/yellow',
      'Foul odor indicates infection',
      'Large clots (>1 inch) are abnormal',
      'Total duration: 2-6 weeks'
    ]
  },
  {
    id: 'mch-6',
    category: 'maternal',
    title: 'Neonatal Resuscitation',
    summary: 'Steps for newborn resuscitation',
    keyPoints: [
      'Dry, warm, stimulate immediately',
      'Clear airway if needed',
      'Assess breathing, heart rate, color',
      'HR <100: Positive pressure ventilation',
      'HR <60: Start chest compressions',
      'Ratio: 3 compressions : 1 breath',
      'Epinephrine if HR remains <60'
    ],
    mnemonics: '"DRABC" = Dry, Respirations, Airway, Breathing, Circulation'
  },

  // COMMUNITY HEALTH
  {
    id: 'ch-1',
    category: 'community',
    title: 'Primary Health Care Pillars',
    summary: 'The 8 essential elements of PHC',
    keyPoints: [
      '1. Health education',
      '2. Proper nutrition',
      '3. Safe water & sanitation',
      '4. Maternal & child health',
      '5. Immunization',
      '6. Prevention of endemic diseases',
      '7. Treatment of common diseases',
      '8. Provision of essential drugs'
    ],
    mnemonics: '"HEALTH is Primary" - remember all 8 pillars'
  },
  {
    id: 'ch-2',
    category: 'community',
    title: 'Levels of Disease Prevention',
    summary: 'Prevention strategies by level',
    keyPoints: [
      'Primordial: Prevent risk factors (policy)',
      'Primary: Prevent onset (vaccination)',
      'Secondary: Early detection (screening)',
      'Tertiary: Reduce complications (rehabilitation)',
      'Quaternary: Prevent over-medicalization'
    ]
  },
  {
    id: 'ch-3',
    category: 'community',
    title: 'Epidemiological Triad',
    summary: 'Model of disease causation',
    keyPoints: [
      'Agent: The cause of disease',
      'Host: The organism that gets sick',
      'Environment: External factors',
      'Break any link to prevent disease',
      'Applies to infectious diseases'
    ]
  },
  {
    id: 'ch-4',
    category: 'community',
    title: 'Malaria in Nigeria',
    summary: 'Key facts about malaria management',
    keyPoints: [
      'Transmitted by female Anopheles mosquito',
      'First-line treatment: ACT (Artemether-Lumefantrine)',
      'Severe malaria: IV Artesunate',
      'Prevention: LLIN, IRS, chemoprophylaxis',
      'Nigeria accounts for 25% of global cases',
      'Test before treating (RDT or microscopy)'
    ],
    nigerianContext: 'Malaria is the most common cause of fever in Nigeria'
  },
  {
    id: 'ch-5',
    category: 'community',
    title: 'HIV/AIDS in Nigeria',
    summary: 'Key statistics and management',
    keyPoints: [
      'Prevalence: ~1.4% (15-49 years)',
      'Second largest epidemic globally',
      'PMTCT: Option B+ (lifelong ART)',
      'Treatment: Tenofovir + Lamivudine + Dolutegravir',
      'Target: 95-95-95 by 2030',
      'Prevention: ABC (Abstinence, Be faithful, Condoms)'
    ],
    nigerianContext: 'Know the current treatment guidelines for NMCN exam'
  },
  {
    id: 'ch-6',
    category: 'community',
    title: 'ORS Preparation',
    summary: 'Oral Rehydration Solution for diarrhea',
    keyPoints: [
      'WHO ORS: 1 packet in 1 liter clean water',
      'NaCl 2.6g, KCl 1.5g, NaCitrate 2.9g, Glucose 13.5g',
      'Give after each loose stool',
      'Continue breastfeeding',
      'Homemade: 6 tsp sugar + 0.5 tsp salt in 1L water',
      'Monitor for signs of dehydration'
    ],
    nigerianContext: 'Diarrhea is a major cause of under-5 mortality in Nigeria'
  },

  // MENTAL HEALTH
  {
    id: 'mh-1',
    category: 'mental',
    title: 'Defense Mechanisms',
    summary: 'Common psychological defense mechanisms',
    keyPoints: [
      'Denial: Refusing to accept reality',
      'Projection: Attributing own feelings to others',
      'Displacement: Redirecting emotions to safer target',
      'Rationalization: Making excuses',
      'Regression: Returning to earlier behavior',
      'Repression: Unconscious forgetting',
      'Sublimation: Channeling to acceptable activity'
    ],
    mnemonics: '"DDPRRRS" = Don\'t Deny Problems, Recognize Reality Seriously'
  },
  {
    id: 'mh-2',
    category: 'mental',
    title: 'Therapeutic Communication',
    summary: 'Techniques for effective nurse-patient communication',
    keyPoints: [
      'Active listening',
      'Open-ended questions',
      'Reflection and restating',
      'Clarification',
      'Summarizing',
      'Silence (therapeutic use)',
      'Avoid: Why questions, giving advice, false reassurance'
    ]
  },
  {
    id: 'mh-3',
    category: 'mental',
    title: 'Suicide Risk Assessment',
    summary: 'Key indicators and interventions',
    keyPoints: [
      'SAD PERSONS: Sex, Age, Depression, Previous attempt, Ethanol, Rational thinking loss, Social support lacking, Organized plan, No spouse, Sickness',
      'Priority: Ensure safety first',
      'Remove harmful objects',
      'Constant observation',
      'Do not leave alone'
    ]
  },
  {
    id: 'mh-4',
    category: 'mental',
    title: 'Bipolar Disorder Features',
    summary: 'Manic vs depressive episodes',
    keyPoints: [
      'Mania: Elevated mood, grandiosity, decreased sleep',
      'Mania: Pressured speech, flight of ideas',
      'Mania: Risky behaviors, hyperactivity',
      'Depression: Low mood, anhedonia, fatigue',
      'Depression: Sleep changes, appetite changes',
      'Treatment: Mood stabilizers, antipsychotics'
    ]
  },

  // NURSING FUNDAMENTALS
  {
    id: 'nf-1',
    category: 'fundamentals',
    title: 'Nursing Process (ADPIE)',
    summary: 'The scientific method in nursing',
    keyPoints: [
      'A - Assessment: Data collection',
      'D - Diagnosis: Identify problems',
      'P - Planning: Set goals and interventions',
      'I - Implementation: Carry out care',
      'E - Evaluation: Measure outcomes',
      'Ongoing and cyclic process'
    ],
    mnemonics: '"ADPIE" = A Delicious Pie Is Eaten'
  },
  {
    id: 'nf-2',
    category: 'fundamentals',
    title: 'Injection Sites and Angles',
    summary: 'Routes and techniques for injectable medications',
    keyPoints: [
      'Intradermal: 5-15° (TB test)',
      'Subcutaneous: 45-90° (insulin)',
      'Intramuscular: 90° (vaccines)',
      'Sites: Deltoid, Vastus lateralis, Ventrogluteal',
      'Aspirate for IM (except vaccines)',
      'Rotate sites for frequent injections'
    ]
  },
  {
    id: 'nf-3',
    category: 'fundamentals',
    title: 'PPE Donning and Doffing',
    summary: 'Correct sequence for personal protective equipment',
    keyPoints: [
      'Don (put on): Gown → Mask → Goggles → Gloves',
      'Doff (remove): Gloves → Goggles → Gown → Mask',
      'Hand hygiene before and after',
      'Mask removed outside patient room',
      'Never touch front of PPE'
    ],
    mnemonics: '"GMGG" for donning, "GGGM" for doffing'
  },
  {
    id: 'nf-4',
    category: 'fundamentals',
    title: 'Positioning Patients',
    summary: 'Common patient positions and their uses',
    keyPoints: [
      'Fowler\'s: Respiratory distress, cardiac',
      'Semi-Fowler\'s: NG tube, feeding',
      'Trendelenburg: Shock, hypotension',
      'Sim\'s: Enema, rectal exam',
      'Lithotomy: Childbirth, pelvic exam',
      'Prone: Prevent hip flexion contractures'
    ]
  },
  {
    id: 'nf-5',
    category: 'fundamentals',
    title: 'Abdominal Assessment Order',
    summary: 'Sequence for abdominal examination',
    keyPoints: [
      'I - Inspection: Observe contour, movements',
      'A - Auscultation: BEFORE palpation',
      'P - Percussion: Tympany, dullness',
      'P - Palpation: Light to deep',
      'Different from other body systems',
      'Auscultate first to avoid altering bowel sounds'
    ],
    mnemonics: '"IAPP" = Inspect Auscultate Percuss Palpate'
  },

  // PROFESSIONAL NURSING
  {
    id: 'pn-1',
    category: 'professional',
    title: 'Ethical Principles',
    summary: 'Core ethical principles in nursing',
    keyPoints: [
      'Autonomy: Respect patient choices',
      'Beneficence: Do good',
      'Non-maleficence: Do no harm',
      'Justice: Fair and equal treatment',
      'Veracity: Truthfulness',
      'Fidelity: Keeping promises'
    ],
    mnemonics: '"ABNJVF" = Always Be Nice, Just Value Fairness'
  },
  {
    id: 'pn-2',
    category: 'professional',
    title: 'Patient Rights',
    summary: 'Fundamental rights of patients',
    keyPoints: [
      'Right to informed consent',
      'Right to refuse treatment',
      'Right to privacy and confidentiality',
      'Right to access medical records',
      'Right to dignified care',
      'Right to be informed of diagnosis'
    ]
  },
  {
    id: 'pn-3',
    category: 'professional',
    title: 'Five Rights of Delegation',
    summary: 'Safe delegation to unlicensed personnel',
    keyPoints: [
      'Right Task: Can be safely delegated',
      'Right Circumstance: Appropriate setting',
      'Right Person: Qualified person',
      'Right Direction: Clear instructions',
      'Right Supervision: Monitor and evaluate',
      'Nurse remains accountable'
    ]
  },
  {
    id: 'pn-4',
    category: 'professional',
    title: 'NMCN Requirements',
    summary: 'Nursing and Midwifery Council of Nigeria regulations',
    keyPoints: [
      'License renewal every 3 years',
      'CPD points required for renewal',
      'Practice with current license only',
      'Report misconduct by colleagues',
      'Maintain professional standards',
      'NMCN Act Cap N143 LFN 2004'
    ],
    nigerianContext: 'Essential knowledge for Professional Nursing section'
  }
]

export const studyTopics = [
  { id: 'vital-signs', title: 'Vital Signs Assessment', category: 'anatomy' },
  { id: 'electrolytes', title: 'Electrolyte Imbalances', category: 'anatomy' },
  { id: 'blood-transfusion', title: 'Blood Transfusion', category: 'medsurg' },
  { id: 'diabetes', title: 'Diabetes Mellitus', category: 'medsurg' },
  { id: 'hypertension', title: 'Hypertension Management', category: 'medsurg' },
  { id: 'malaria', title: 'Malaria Treatment', category: 'community' },
  { id: 'hiv-aids', title: 'HIV/AIDS Care', category: 'community' },
  { id: 'labor-delivery', title: 'Labor & Delivery', category: 'maternal' },
  { id: 'preeclampsia', title: 'Preeclampsia/Eclampsia', category: 'maternal' },
  { id: 'newborn-care', title: 'Newborn Care', category: 'maternal' },
  { id: 'mental-assessment', title: 'Mental Status Assessment', category: 'mental' },
  { id: 'drug-calculation', title: 'Drug Calculations', category: 'pharmacology' },
  { id: 'antibiotics', title: 'Antibiotic Therapy', category: 'pharmacology' },
  { id: 'infection-control', title: 'Infection Control', category: 'fundamentals' },
  { id: 'documentation', title: 'Nursing Documentation', category: 'professional' },
]
