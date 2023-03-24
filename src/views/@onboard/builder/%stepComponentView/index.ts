export { Initial as BuilderInitialPage } from './Initial'
export { BasicInfoStep1 as BuilderStep1 } from './BasicInfoStep1'
export { BasicInfoStep2 as BuilderStep2 } from './BasicInfoStep2'
export { BasicInfoStep3 as BuilderStep3 } from './BasicInfoStep3'
export { AddressStep4 as BuilderStep4 } from './AddressStep4'
export { EducationStep5 as BuilderStep5 } from './EducationStep5'
export { EducationStep6 as BuilderStep6 } from './EducationStep6'
export { EducationStep7 as BuilderStep7 } from './EducationStep7'
export { SeminarsStep8 as BuilderStep8 } from './SeminarsStep8'
export { ExperienceStep9 as BuilderStep9 } from './ExperienceStep9'
export { SkillsStep10 as BuilderStep10 } from './SkillsStep10'
export { CertificatesStep11 as BuilderStep11 } from './CertificatesStep11'
export { EmploymentGapStep12 as BuilderStep12 } from './EmploymentGapStep12'
export { SummaryStep13 as BuilderStep13 } from './SummaryStep13'

export async function gatherNamedFormfields(form: HTMLFormControlsCollection, fields: { [key: string]: any }) {
  const fset: { [key: string]: HTMLInputElement } = {}

  for (const [, fieldattr] of Object.entries(fields)) {
    const fieldName = fieldattr.name
    if (fieldName) fset[fieldName] = form.namedItem(fieldName) as HTMLInputElement
  }

  return fset
}