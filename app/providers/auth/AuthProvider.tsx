import * as SplashScreen from 'expo-splash-screen'
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState
} from 'react'

import {
  getAccessToken, 
  getUserFromStorage
} from '@/services/auth/auth.helper'
import { registerSetUser } from '@/services/auth/auth.helper-context'

import { IContext, TypeUserState } from './auth-provider.interface'
import { removePinCode } from '@/utils/pinStore'

export const AuthContext = createContext({} as IContext)

SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null)

  useEffect(() => {
    let isMounted = true

    const initAuth = async () => {
      try {
        const accessToken = await getAccessToken()
        if (accessToken) {
          try {
            const storedUser = await getUserFromStorage()
            if (isMounted) setUser(storedUser)
          } catch (e) {}
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
