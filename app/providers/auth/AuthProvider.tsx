import * as SplashScreen from 'expo-splash-screen'
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState
} from 'react'

import { IUser } from '@/types/user.interface'

import { errorCatch } from '@/services/api/error.api'
import {
  getAccessToken,
  getNewTokens,
  getUserFromStorage
} from '@/services/auth/auth.helper'
import { registerSetUser } from '@/services/auth/auth.helper-context'
import { AuthService } from '@/services/auth/auth.service'

import { IContext, TypeUserState } from './auth-provider.interface'

export const AuthContext = createContext({} as IContext)

SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null)

  useEffect(() => {
    let isMounted = true

    const initAuth = async () => {
      try {
        const accessToken = await getAccessToken()
        console.log('accessToken', accessToken ? 'TRUE' : 'FALSE')
        if (accessToken) {
          try {
            const storedUser = await getUserFromStorage()
            if (isMounted) setUser(storedUser)
          } catch (e) {
            console.log('Error getting new tokens AUTH-PROVIDER', e)
            // if (errorCatch(e) === 'jwt expired') {
            //   await AuthService.logout()
            //   if (isMounted) setUser(null)
            // }
          }
        } else {
          setUser(null)
        }
      } finally {
        await SplashScreen.hideAsync()
      }
    }

    initAuth()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    registerSetUser(setUser)
  }, [])

  console.log('user', user)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
