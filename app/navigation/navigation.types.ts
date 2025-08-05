import { ComponentType } from 'react'

export type TypeRootStackParamList = {
  Auth: undefined
  Home: undefined
  Requests: undefined
  Equipment: undefined
  Reports: undefined 
  Profile: undefined 
}

export interface IRoute {
  name: keyof TypeRootStackParamList
  component: ComponentType
}
