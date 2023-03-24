import { 
  CitizenshipEnum,
  CountryEnum,
  RelationshipStatus,
} from '@/helpers/constants/user-related-enums'

/**
 * 
 */
type UserResumeProp<T> = {
  title?: string
  profileUrl?: string
  fname?: string
  bdate?: number
  bplace?: string
  children?: number
  cship?: CitizenshipEnum
  religion?: string
  rstatus?: RelationshipStatus
  addrs?: UserAddressProp[]
  edu?: UserResumeEduProp[]
  desc?: string
  mprops?: UserResumeMiscProp<T>
}

/**
 * 
 */
type UserAddressProp<T> = {
  type: 'permanent' | 'current',
  country: CountryEnum,
  city: string
  street: string  
  houseAptId: number
  addrProps?: T
}

/**
 * 
 */
type UserResumeEduProp<T> = {
  level: 'primary' | 'secondary' | 'college'
  name: string 
  addrln: string
  rng: [number, number]
  current?: boolean
  mprops?: T
}

/**
 * 
 */
type UserResumeMiscProp<T> = {
  skills?: UserResumeSkillsProp[]
  certs?: UserResumeCertsProp[]
  seminars?: UserResumeSeminarsProp[]
  exps?: UserJobExperienceProp[]
  mprops?: T
}

/**
 * 
 */
type UserJobExperienceProp<T> = {
  title: string
  company: string
  addrln: string
  rng: [Date, Date]
  current?: boolean
  desc: string[]
  mprops?: T
}

/**
 * 
 */
type UserResumeSkillsProp<T> = {
  skill: string
  rating?: number
  mprops?: T
}

/**
 * 
 */
type UserResumeCertsProp<T> = {
  cert: string
  year: number
  expiration?: number
  mprops?: T
}

/**
 * 
 */
type UserResumeSeminarsProp<T> = {
  seminar: string
  year: number
  mprops?: T
}