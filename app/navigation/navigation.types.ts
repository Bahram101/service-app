import { ComponentType } from 'react'

export type TypeRootStackParamList = {
  Auth: undefined
  Home: undefined
  Requests: undefined
  RequestDetail: {
    id: string
  }
  Equipment: undefined
  Reports: undefined
  Profile: undefined
  SetPin: undefined
  EnterPin: undefined
}

export interface IRoute {
  name: keyof TypeRootStackParamList
  component: ComponentType
}
