import { IUser } from './user.interface'

// export interface IAuthFormData extends Omit<Pick<IUser, 'password'>, never> {
//   login: string
// }

// export type IAuthFormData = Pick<IUser, 'password'> & {
//   email: string
// }
export type IAuthFormData = {
  email: string
  password: string
}

export enum EnumSecureStore {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token'
}

export enum EnumAsyncStorage {
  USER = 'user'
}

export interface ITokens {
  access_token: string
  refresh_token: string
}

export type IAuthResponse = ITokens & IUser