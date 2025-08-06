import { useNavigationContainerRef } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState
} from 'react'

import { IUser } from '@/types/user.interface'

import { getAccessToken, getUserFromStorage } from '@/services/auth/auth.helper'

import { IContext, TypeUserState } from './auth-provider.interface'

export const AuthContext = createContext({} as IContext)
// export const AuthContext = createContext<IContext | null>(null)

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>({} as IUser)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const checkAccessToken = async () => {
      try {
        const accessToken = await getAccessToken()
        if (accessToken) {
          const user = await getUserFromStorage()
          if (isMounted) {
            setUser(user)
          }
        } else {
          setUser(null)
        }
      } catch (e) {
      } finally {
        setIsLoading(false)
        await SplashScreen.hideAsync()
      }
    }

    checkAccessToken()

    return () => {
      // вызывается при размонтировании компонента
      isMounted = false // предотвращает обновление состояния после размонтирования
    }
  }, [])

  if (isLoading) return null

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
