import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { type, values } = await request.json()
    
    if (!type || !values) {
      return NextResponse.json({ error: 'Calculation type and values are required' }, { status: 400 })
    }

    let result: { value: number | string; unit: string; interpretation: string; formula: string } = {
      value: 0,
      unit: '',
      interpretation: '',
      formula: ''
    }

    switch (type) {
      case 'bmi':
        const weight = parseFloat(values.weight)
        const height = parseFloat(values.height) / 100
        const bmi = weight / (height * height)
        result = {
          value: Math.round(bmi * 10) / 10,
          unit: 'kg/m²',
          formula: 'BMI = Weight (kg) / Height (m)²',
          interpretation: bmi < 18.5 ? 'Underweight - Nutritional support may be needed' : 
                         bmi < 25 ? 'Normal weight - Maintain healthy lifestyle' : 
                         bmi < 30 ? 'Overweight - Consider diet and exercise modifications' : 
                         'Obese - Comprehensive weight management recommended'
        }
        break

      case 'iv_drip':
        const volume = parseFloat(values.volume)
        const time = parseFloat(values.time)
        const dropFactor = parseFloat(values.dropFactor) || 20
        const dropsPerMin = (volume * dropFactor) / time
        const mlPerHr = (volume / time) * 60
        result = {
          value: `${Math.round(dropsPerMin)} drops/min (${Math.round(mlPerHr)} mL/hr)`,
          unit: '',
          formula: 'Drops/min = (Volume × Drop Factor) / Time (minutes)',
          interpretation: `Set IV to ${Math.round(dropsPerMin)} drops per minute or ${Math.round(mlPerHr)} mL per hour`
        }
        break

      case 'drug_dose':
        const patientWeight = parseFloat(values.patientWeight)
        const dosePerKg = parseFloat(values.dosePerKg)
        const dose = patientWeight * dosePerKg
        result = {
          value: Math.round(dose * 100) / 100,
          unit: values.unit || 'mg',
          formula: 'Dose = Weight (kg) × Dose per kg',
          interpretation: `Administer ${Math.round(dose * 100) / 100} ${values.unit || 'mg'}`
        }
        break

      case 'fluid_deficit':
        const fluidWeight = parseFloat(values.fluidWeight)
        const deficitPercent = parseFloat(values.deficitPercent) || 5
        const deficit = fluidWeight * deficitPercent * 10
        result = {
          value: Math.round(deficit),
          unit: 'mL',
          formula: 'Fluid Deficit = Weight (kg) × % Dehydration × 10',
          interpretation: `Estimated fluid deficit: ${Math.round(deficit)} mL (${deficitPercent}% dehydration)`
        }
        break

      case 'map':
        const sbp = parseFloat(values.sbp)
        const dbp = parseFloat(values.dbp)
        const map = ((sbp - dbp) / 3) + dbp
        result = {
          value: Math.round(map),
          unit: 'mmHg',
          formula: 'MAP = ((SBP - DBP) / 3) + DBP',
          interpretation: map < 60 ? 'Low - May indicate poor tissue perfusion. Consider intervention.' : 
                         map < 100 ? 'Normal - Adequate tissue perfusion' : 
                         'Elevated - Monitor for hypertensive complications'
        }
        break

      case 'anion_gap':
        const na = parseFloat(values.na)
        const cl = parseFloat(values.cl)
        const hco3 = parseFloat(values.hco3)
        const anionGap = na - (cl + hco3)
        result = {
          value: Math.round(anionGap),
          unit: 'mEq/L',
          formula: 'Anion Gap = Na+ - (Cl- + HCO3-)',
          interpretation: anionGap < 8 ? 'Low - Consider hypoalbuminemia, multiple myeloma' : 
                         anionGap <= 16 ? 'Normal (Reference: 8-16 mEq/L)' : 
                         'Elevated - Consider metabolic acidosis (DKA, lactic acidosis, renal failure)'
        }
        break

      case 'creatinine_clearance':
        const crAge = parseFloat(values.age)
        const crWeight = parseFloat(values.crWeight)
        const scr = parseFloat(values.scr)
        const isFemale = values.gender === 'female'
        let crCl = ((140 - crAge) * crWeight) / (72 * scr)
        if (isFemale) crCl *= 0.85
        result = {
          value: Math.round(crCl),
          unit: 'mL/min',
          formula: 'CrCl = ((140 - Age) × Weight) / (72 × SCr) × 0.85 (if female)',
          interpretation: crCl > 90 ? 'Normal kidney function (Stage 0)' : 
                         crCl > 60 ? 'Mild decrease (Stage 2 CKD)' : 
                         crCl > 30 ? 'Moderate decrease (Stage 3 CKD)' : 
                         crCl > 15 ? 'Severe decrease (Stage 4 CKD)' : 
                         'Kidney failure (Stage 5 CKD) - Dialysis may be needed'
        }
        break

      case 'corrected_calcium':
        const totalCa = parseFloat(values.totalCa)
        const albumin = parseFloat(values.albumin)
        const correctedCa = totalCa + 0.8 * (4 - albumin)
        result = {
          value: Math.round(correctedCa * 10) / 10,
          unit: 'mg/dL',
          formula: 'Corrected Ca = Total Ca + 0.8 × (4 - Albumin)',
          interpretation: correctedCa < 8.5 ? 'Hypocalcemia - Consider Vitamin D deficiency, hypoparathyroidism' : 
                         correctedCa > 10.5 ? 'Hypercalcemia - Consider hyperparathyroidism, malignancy' : 
                         'Normal calcium level'
        }
        break

      case 'expected_due_date':
        const lmpDay = parseInt(values.lmpDay)
        const lmpMonth = parseInt(values.lmpMonth)
        const lmpYear = parseInt(values.lmpYear)
        const lmpDate = new Date(lmpYear, lmpMonth - 1, lmpDay)
        const edd = new Date(lmpDate)
        edd.setFullYear(edd.getFullYear() + 1)
        edd.setMonth(edd.getMonth() - 3)
        edd.setDate(edd.getDate() + 7)
        const gestationalAge = Math.floor((new Date().getTime() - lmpDate.getTime()) / (1000 * 60 * 60 * 24 * 7))
        result = {
          value: edd.getTime(),
          unit: '',
          formula: "Naegele's Rule: Add 7 days, subtract 3 months, add 1 year to LMP",
          interpretation: `EDD: ${edd.toLocaleDateString('en-NG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}. Current gestational age: ~${gestationalAge} weeks`
        }
        break

      case 'apgar':
        const apgarAppearance = parseInt(values.appearance)
        const apgarPulse = parseInt(values.pulse)
        const apgarGrimace = parseInt(values.grimace)
        const apgarActivity = parseInt(values.activity)
        const apgarRespiration = parseInt(values.respiration)
        const apgarScore = apgarAppearance + apgarPulse + apgarGrimace + apgarActivity + apgarRespiration
        result = {
          value: apgarScore,
          unit: '/10',
          formula: 'APGAR = Appearance + Pulse + Grimace + Activity + Respiration',
          interpretation: apgarScore >= 7 ? 'Normal - Routine newborn care' : 
                         apgarScore >= 4 ? 'Moderately depressed - May need assisted ventilation' : 
                         'Severely depressed - Immediate resuscitation required'
        }
        break

      case 'qtc':
        const qt = parseFloat(values.qt)
        const hr = parseFloat(values.hr)
        const rr = 60 / hr
        const qtc = qt / Math.sqrt(rr)
        result = {
          value: Math.round(qtc),
          unit: 'ms',
          formula: 'QTc = QT / √(RR interval)',
          interpretation: qtc > 450 ? 'Prolonged QTc - Risk of arrhythmias. Avoid QT-prolonging drugs.' : 
                         'Normal QTc interval'
        }
        break

      case 'mean_corpuscular':
        const hct = parseFloat(values.hct)
        const rbc = parseFloat(values.rbc)
        const mcv = (hct / rbc) * 10
        result = {
          value: Math.round(mcv),
          unit: 'fL',
          formula: 'MCV = (Hematocrit / RBC count) × 10',
          interpretation: mcv < 80 ? 'Microcytic - Consider iron deficiency, thalassemia' : 
                         mcv > 100 ? 'Macrocytic - Consider B12/folate deficiency' : 
                         'Normocytic - Normal RBC size'
        }
        break

      default:
        return NextResponse.json({ error: 'Unknown calculation type' }, { status: 400 })
    }

    return NextResponse.json({ 
      success: true, 
      type,
      result,
      timestamp: new Date().toISOString()
    })
    
  } catch (error: any) {
    console.error('Calculator Error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Calculation failed.'
    }, { status: 500 })
  }
}
