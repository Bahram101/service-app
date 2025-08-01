import * as SplashScreen from 'expo-splash-screen'
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState
} from 'react'

import { IContext, TypeUserState } from './auth-provider.interface'

// export const AuthContext = createContext({} as IContext)
export const AuthContext = createContext<IContext | null>(null)

let ignore = SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null)

  useEffect(() => {
    let mounted = true
    const checkAccessToken = async () => {
      try {
      } catch (e) {
      } finally {
        await SplashScreen.hideAsync()
      }
    }
    let ignore = checkAccessToken()
    return () => {
      // вызывается при размонтировании компонента
      mounted = false // предотвращает обновление состояния после размонтирования
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
