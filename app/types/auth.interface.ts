import { IUser } from './user.interface'

// export interface IAuthFormData extends Omit<Pick<IUser, 'password'>, never> {
//   login: string
// }

export type IAuthFormData = Pick<IUser, 'password'> & {
  login: string
}
