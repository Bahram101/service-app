import { ComponentType } from 'react'

export type TypeRootStackParamList = {
  Auth: undefined
  Home: undefined
  Requests: undefined
  RequestDetail: {
    id: number
  }
  Equipment: undefined
  Messages: undefined
  MessageDetail:{
    id: string,
    name: string
  }
  Profile: undefined
  SetPin: undefined
  EnterPin: undefined
}

export interface IRoute {
  name: keyof TypeRootStackParamList
  component: ComponentType
}
