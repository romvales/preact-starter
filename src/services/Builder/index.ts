
import { environment, useAppContentByLocale } from '@/helpers'
import { UserResumeProp } from '@/types/props/user'
import { createContext, Context } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { useStore } from '@preact-hooks/unistore'
import { route } from 'preact-router'
import { initApiAxios } from '@/helpers/axios'

import os from 'os'
import fs from 'fs'
import path from 'path'
import { Request } from 'express'

// contentProps
export type contentProps = {
  headline?: string,
  builderHeaderContent?: {
    current: string
    desc: string
  }
  forms?: {
    submitText: string
    fields: {
      [key: string]: {
        validate?: boolean
        name?: string
        label: string
        placeholder: string
      }
    }
  }
}

// onboardBuilderContentProps
export type onboardBuilderContentProps = contentProps[]

// OnboardBuilder
export enum OnboardBuilder {
  Step1 = 0, Step2, Step3, Step4, Step5, 
  Step6, Step7, Step8, Step9, Step10, Step11, 
  Step12, Step13
}

// OnboardBuilderUrl
export enum OnboardBuilderUrl {
  Step1 = '/builder/progress/basic-info-step1',
  Step2 = '/builder/progress/basic-info-step2',
  Step3 = '/builder/progress/basic-info-step3',
  Step4 = '/builder/progress/address-step4',
  Step5 = '/builder/progress/education-step5',
  Step6 = '/builder/progress/education-step6',
  Step7 = '/builder/progress/education-step7',
  Step8 = '/builder/progress/seminars-step8',
  Step9 = '/builder/progress/experience-step9',
  Step10 = '/builder/progress/skills-step10',
  Step11 = '/builder/progress/certificates-step11',
  Step12 = '/builder/progress/employment-gaps-step12',
  Step13 = '/builder/progress/summary',
}

// StepState
export type StepState<T> = {
  uuid?: string
  prevState?: StepState<T>[]
  started?: boolean
  current?: OnboardBuilder
  data?: UserResumeProp<T>
}

// BuilderService
export class BuilderService<T = any> {
  private _contents: onboardBuilderContentProps
  private _state = useStore<any>()

  constructor() {
    this._contents = useAppContentByLocale('@onboard/builder/%stepComponentView/contents.json', [])

    if (!this.state)
      this.setState({
        prevState: [],
        started: false
      })

    /** server render the form */
    if (environment.isServer) {
      Object.entries(OnboardBuilderUrl).map(([ key, url ]) => {
        if (window.location.pathname == url) this.setState({ ...this.state, started: true, current: OnboardBuilder[key] })
      })
    }
  }

  get state(): StepState<T> {
    return this._state.getState().builderState
  }

  setState(update: StepState<T>, overwrite?: boolean) { this._state.setState({ builderState: update }, overwrite) }

  useContent(): contentProps {
    const [content, setContent] = useState<contentProps>({})
    let _content = this._contents[this.state.current]

    if (environment.isServer) {
      setContent(_content)
    } else {
      useEffect(() => {
        setContent(_content)
        _content = undefined
        return () => setContent(undefined)
      }, [this._contents, this.state.current])
    }

    return content
  }
  
  // start
  start<T>(initialData?: T) {
    const apiEndpoint = initApiAxios()
    const newState = { 
      ...this.state, 
      started: true, 
      current: OnboardBuilder.Step1, 
      uuid: crypto.randomUUID(),
      data: initialData ?? {}
    }

    apiEndpoint.post('/@onboard_builder/create', { __uuid: newState.uuid, data: newState.data })
      .then(() => {
        this.redirect(OnboardBuilderUrl.Step1, newState, true)
      })
      .catch(() => this.start(initialData))
  }

  setDataForm(data: UserResumeProp<T>) {
    this.setState({ ...this.state, data: { ...this.state.data, ...data } })
  }

  next() {
    const apiEndpoint = initApiAxios()

    if (!this.state.started) {
      // error handling
    } else {
      const newState = { ...this.state, current: OnboardBuilder[`Step${this.state.current+1}`]+1 }
      
      apiEndpoint.put(`/@onboard_builder/update/${newState.uuid}`, { data: newState.data })
        .then(() => {
          this.redirect(OnboardBuilderUrl[`Step${newState.current+1}`], newState)
        })
    }
  }

  private redirect(url: string, newState: StepState<T>, replace?: boolean) {
    this.state.prevState.push(newState)
    this.setState(newState)

    setTimeout(() => {
      route({ url, replace })
    })
  }

  /* server-side functions */


  // create
  static create(req: Request) {
    const crypto = require('crypto')
    const data = req.body.data
    const uuid: string = req.body.__uuid ?? crypto.randomUUID()
    const {
      file,
      tmpdoc,
      docpath: createDir,
    } = BuilderService.getCreatedPath(uuid)

    if (!fs.existsSync(tmpdoc))
      fs.mkdirSync(tmpdoc)

    if (!fs.existsSync(createDir))
      fs.mkdirSync(createDir)

    if (!fs.existsSync(file))
      BuilderService.writeDocJSON(uuid, data)

    return { uuid }
  }

  static render(req: Request) {

  }

  static getCreatedPath(uuid: string) {
    const __homedir = os.homedir()
    const tmpdoc = path.resolve(__homedir, '.tmpdoc')
    const createDir = path.resolve(tmpdoc, `.${uuid.replaceAll(/-/g, '')}-doc`)
    const file = path.resolve(createDir, 'data.json')

    return { 
      file,
      __homedir, 
      tmpdoc, 
      docpath: createDir }
  }

  static readDocJSON<T>(uuid: string): T {
    const { file: fPath } = BuilderService.getCreatedPath(uuid)
    const fraw = fs.readFileSync(fPath, 'utf-8')
    return JSON.parse(fraw)
  }

  static writeDocJSON(uuid: string, data: any) {
    const { file: fPath } = BuilderService.getCreatedPath(uuid)
    fs.writeFileSync(fPath, data ? JSON.stringify(data) : '{}')
  }
}

export const BuilderContext: Context<BuilderService> = createContext(null)