import * as SplashScreen from 'expo-splash-screen'
import { get } from 'node_modules/axios/index.cjs'
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState
} from 'react'
import { useNavigation, useNavigationContainerRef } from '@react-navigation/native'

import { IUser } from '@/types/user.interface'

import { getAccessToken, getUserFromStorage } from '@/services/auth/auth.helper'

import { IContext, TypeUserState } from './auth-provider.interface' 

export const AuthContext = createContext({} as IContext)
// export const AuthContext = createContext<IContext | null>(null)

let ignore = SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>({} as IUser)
  const navRef = useNavigationContainerRef()
  useEffect(() => {
    let isMounted = true

    const checkAccessToken = async () => {
      try {
        const accessToken = await getAccessToken()
        console.log('accessToken', accessToken)
        if (accessToken) {
          const user = await getUserFromStorage()
          if (isMounted) {
            setUser(user)
          }
        }else{
          setUser(null)
        }
      } catch (e) {
      } finally {
        await SplashScreen.hideAsync()
      }
    }
    let ignore = checkAccessToken()
    return () => {
      // вызывается при размонтировании компонента
      isMounted = false // предотвращает обновление состояния после размонтирования
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
