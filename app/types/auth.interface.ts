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
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken'
}

export enum EnumAsyncStorage {
  USER = 'user'
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}

export interface IAuthResponse extends ITokens {
  user: IUser
}
