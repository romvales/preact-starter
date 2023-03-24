import './CVTemplate.pcss'
import { FunctionComponent } from 'preact'
import { CCIcon, CCImage, CCSkeleton } from '@/components/chunks'
import { UserResumeProp } from '@/types/props/user'
import phFlag from '~Image/philippines.png'
import { useAppLocale } from '@/contents'
import {

  CountryEnum,
  RelationshipEnum,
  CollegeDegreeEnum,

} from '@/helpers/constants/user-related-enums'


export type CVTemplateProps = {
  uprops: UserResumeProp<{
    // employment gaps
    egaps: {
      egaps: string
      from: number
      to: number
    }[],
  }>,
}

export const CVTemplate: FunctionComponent<CVTemplateProps> = props => {
  const { appLocale } = useAppLocale()

  document.querySelector('html').classList.remove('dark')

  return (
    <div>
      <article className='cvTemplate a4'>
        <aside>
          <div className='cvTemplateUpperMargin'></div>
          <div className='cvTemplateUpperLowerMargin'></div>
          <picture className='cvTemplateProfilePicture'>
            {
              props.uprops.profileUrl?.length ?
                <>
                  <CCImage src={props.uprops.profileUrl} className='profile' />
                </>
                :
                <>
                  <CCSkeleton className='profile'></CCSkeleton>
                </>
            }
          </picture>

          <ul className='cvTemplateAsideMainContent page1'>
            <li>
              <div className='cvTemplateContentTitle'>
                Basic Info
              </div>

              <div className='basicInfo1'>
                {
                  props.uprops.rstatus !== -1 ?
                    <>
                      {RelationshipEnum[props.uprops.rstatus]},
                    </>
                    :
                    <>
                      <CCSkeleton height='1.5rem' width='4rem' className='inline-block' rounded='sm' />
                    </>
                }
                {
                  props.uprops.children !== -1 ?
                    <>
                      {props.uprops.children} Children,
                    </>
                    :
                    <>
                      <CCSkeleton height='1.5rem' width='4rem' className='inline-block' rounded='sm' />
                    </>
                }
                {
                  props.uprops.religion ?
                    <>
                      {props.uprops.religion}
                    </>
                    :
                    <>
                      <CCSkeleton height='1.5rem' width='4rem' className='inline-block' rounded='sm' />
                    </>

                }
              </div>
              <span className='basicInfo2'>
                <div className='icon'>
                  <CCIcon
                    icon='calendar-days'
                    iconSet='heroicons/outline'
                    iconSize='sm'></CCIcon>
                </div>
                {
                  props.uprops.bdate !== -1 ?
                    <>
                      {new Date(props.uprops.bdate).toLocaleDateString(appLocale, { month: 'long', day: 'numeric', year: 'numeric' })}
                    </>
                    :
                    <>
                      <CCSkeleton height='1.5rem' width='9rem' className='inline-block' rounded='sm' />
                    </>
                }
              </span>
              <span className='basicInfo3'>
                <div className='icon'>
                  <CCIcon
                    icon='map-pin'
                    iconSet='heroicons/solid'
                    iconSize='sm'></CCIcon>
                </div>
                {
                  props.uprops.addrs?.length ?
                    <>
                      {props.uprops.addrs[0].street}, {props.uprops.addrs[0].city}, {CountryEnum[props.uprops.addrs[0].country]}
                    </>
                    :
                    <div className='flex flex-col'>
                      <CCSkeleton height='1.5rem' width='10rem' className='inline-block pb-1' rounded='sm' />
                      <br />
                      <CCSkeleton height='1.5rem' width='10rem' className='inline-block' rounded='sm' />
                    </div>
                }
              </span>

              <div className='divider'>
                <div className='dividerCircle'></div>
                <div className='dividerLine'></div>
              </div>
            </li>

            <li>
              <div className='cvTemplateContentTitle'>
                Education
              </div>

              <ol className='cvTemplateAsideEducation'>
                {
                  props.uprops.edu?.length ?
                    <>
                      {props.uprops.edu.map((edu, i) => (
                        <li key={i} className='cvTemplateEduItem'>
                          <h4>
                            {
                              !(edu.level === 'college') ?
                              <>{edu.level} Education</>
                              :
                              <>
                                {CollegeDegreeEnum[edu.mprops.degree].split('\'')[0]} of {edu.mprops.fstudy} 
                              </>
                            }
                          </h4>
                          
                          <span>{edu.name}</span>
                          <div>
                            <time className='from'>{new Date(edu.rng[0]).getFullYear()}</time> - <time className='to'>{edu.rng[1] === -1 ? 'Present' : new Date(edu.rng[1]).getFullYear()}</time>
                          </div>
                        </li>

                      )).reverse()}
                    </>
                    :
                    <>
                      {
                        Array.from(new Array(3)).map(() => (
                          <li className='cvTemplateEduItem'>
                            <h4>
                              <CCSkeleton height='1.7rem' width='9rem' className='pb-2' />
                            </h4>
                            <span><CCSkeleton height='1.5rem' width='10rem' className='pb-1' /></span>
                            <div >
                              <CCSkeleton height='1.4rem' width='10rem' />
                            </div>
                          </li>
                        ))
                      }
                    </>
                }
              </ol>

              <div className='divider'>
                <div className='dividerCircle'></div>
                <div className='dividerLine'></div>
              </div>
            </li>

            <li>
              <div className='cvTemplateContentTitle'>
                Skills
              </div>

              <ul className='cvTemplateAsideSkills'>
                {
                  props.uprops.mprops?.skills?.length ?
                  <>
                  {
                    props.uprops.mprops.skills.map(skill => (
                      <li className='capitalize'>{skill.skill}</li>
                    ))
                  }
                  </>
                    :
                  <>
                  {
                    Array.from(new Array(6)).map(() => (
                      <li className='mb-2'>
                        <CCSkeleton width='8rem' height='1.5rem' />
                      </li>
                    ))
                  }
                  </>
                }
              </ul>

              <div className='divider'>
                <div className='dividerCircle'></div>
                <div className='dividerLine'></div>
              </div>
            </li>
          </ul>
        </aside>
        <section>
          <CCImage src={phFlag} className='flag' />

          <h2 className='fname'>
            {
              props.uprops.fname?.length ?
                <>
                  {props.uprops.fname.split(' ')[0]}
                  <span className='lname'>{props.uprops.fname.split(' ').slice(1).join(' ')}</span>
                </>
                :
                <>
                  <CCSkeleton height='4rem' width='10rem' />
                  <span ></span>
                </>
            }
          </h2>

          <h3 className='main-title'>
            {
              props.uprops.mprops?.exps?.length ?
                <>
                  {props.uprops.mprops.exps[0].title}
                </>
                :
                <>
                  <CCSkeleton height='2.5rem' width='18rem' />
                </>
            }
          </h3>

          <hr />

          <div className='cvTemplateContentTitle'>
            Experience
          </div>

          <ul className='cvTemplateExperience'>
            {
              props.uprops.mprops?.exps?.slice(0, 2)?.length ?
                <>
                  {
                    props.uprops.mprops.exps.slice(0, 2).map(exp => (
                      <li>
                        <h4 className='title'>{exp.title} </h4>
                        <div className='company'>{exp.company}</div>
                        <div className='location'>{exp.addrln}</div>
                        <div className='time'>
                          <time className='from'>{new Date(exp.rng[0]).getFullYear()}</time> - <time className='to'>Present</time>
                        </div>

                        <ul className='resp'>
                          {
                            exp.mprops.resp.map(resp => (
                              <li>{resp}</li>
                            ))
                          }
                        </ul>

                        <h4>Handled Cases</h4>

                        <ul className='cases'>
                          {
                            exp.mprops.hcases.map(hcase => (
                              <li>{hcase}</li>
                            ))
                          }
                        </ul>

                        <div className='divider'>
                          <div className='dividerCircle'></div>
                          <div className='dividerLine'></div>
                        </div>
                      </li>
                    ))
                  }
                </>
                :
                <>
                  {
                    Array.from(new Array(2)).map(() => (
                      <li>
                        <h4 className='title'>
                          <CCSkeleton width='10rem' height='2.3rem' />
                        </h4>
                        <div className='company'>
                          <CCSkeleton width='9rem' height='1.5rem' className='mb-1' />
                        </div>
                        <div className='location'>
                          <CCSkeleton width='15rem' height='1.5rem' className='mb-1' />
                        </div>
                        <div className='time'>
                          <CCSkeleton width='10rem' height='1.5rem' className='mb-1' />
                        </div>

                        <ul className='resp'>
                          {
                            Array.from(new Array(3)).map(() => (
                              <li>
                                <CCSkeleton width='28rem' height='1rem' className='mb-1' />
                                <CCSkeleton width='28rem' height='1rem' className='mb-1' />
                              </li>
                            ))
                          }
                        </ul>

                        <h4>Handled Cases</h4>

                        <ul className='cases'>
                          {
                            Array.from(new Array(4)).map(() => (
                              <li>
                                <CCSkeleton width='15rem' height='1rem' className='mb-1' />

                              </li>
                            ))
                          }
                        </ul>

                        <div className='divider'>
                          <div className='dividerCircle'></div>
                          <div className='dividerLine'></div>
                        </div>
                      </li>
                    ))
                  }
                </>
            }
          </ul>
        </section>
      </article>

      <article className='cvTemplate a4'>
        <aside>
          <ul className='cvTemplateAsideMainContent page2'>
            <li>
              <div className='cvTemplateContentTitle'>
                Seminars
              </div>

              {
                props.uprops.mprops?.seminars?.length ?
                <ul className='cvTemplateAsideSeminars cvTemplateAsideItemList'>
                  {
                    props.uprops.mprops?.seminars.map(seminar => (
                      <li>{seminar.seminar} ({seminar.year})</li>
                    ))
                  }
                </ul>
                :
                <>
                </>
              }

              <div className='divider'>
                <div className='dividerCircle'></div>
                <div className='dividerLine'></div>
              </div>
            </li>

            <li >
              <div className='cvTemplateContentTitle'>
                Certificates
              </div>

              {
                props.uprops.mprops?.certs?.length ?
                <ul className='cvTemplateAsideItemList'>
                  {
                    props.uprops.mprops?.certs.map(cert => (
                      <li>{cert.cert} ({ cert.year })</li>
                    ))
                  }
                </ul>
                :
                <>
                
                </>
              }

              <div className='divider'>
                <div className='dividerCircle'></div>
                <div className='dividerLine'></div>
              </div>
            </li>

            <li>
              <div className='cvTemplateContentTitle'>
                Employment Gap
              </div>

              {
                props.uprops.mprops?.mprops?.egaps?.length ?
                <ul>
                  {
                    props.uprops.mprops.mprops.egaps.map(egap => (
                      <li>({new Date(egap.from).getFullYear()} - {egap.to === -1 ? 'Present' : new Date(egap.to).getFullYear()}) {egap.egaps}</li>
                    ))
                  }
                </ul>
                :
                <>
                
                </>
              }
            </li>
          </ul>
        </aside>

        {
          props.uprops.mprops?.exps?.slice(2)?.length ?
          <section className='page2'>
            <div className='cvTemplateContentTitle'>
              Experience
            </div>

            <ul className='cvTemplateExperience'>
              {
                props.uprops.mprops.exps.slice(2).map(exp => (
                  <li>
                    <h4 className='title'>{exp.title}</h4>
                    <div className='company'>{exp.company}</div>
                    <div className='location'>{exp.addrln}</div>
                    <div className='time'>
                      <time className='from'>{new Date(exp.rng[0]).getFullYear()}</time> - <time className='to'>{exp.rng[0] !== -1 ? new Date(exp.rng[1]).getFullYear() : 'Present'}</time>
                    </div>

                    <ul className='resp'>
                      {
                        exp.mprops.resp.map(resp => (
                          <li>{resp}</li>
                        ))
                      }
                    </ul>

                    <h4>Handled Cases</h4>

                    <ul className='cases'>
                      {
                        exp.mprops.hcases.map(hcase => (
                          <li>{hcase}</li>
                        ))
                      }
                    </ul>

                    <div className='divider'>
                      <div className='dividerCircle'></div>
                      <div className='dividerLine'></div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
          :
          <></>
        }
      </article>
    </div>
  )
}