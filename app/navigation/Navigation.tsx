import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native'
import React, { useEffect, useState } from 'react'

import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'

import { useAuth } from '@/hooks/useAuth'

import PrivateNavigator from './PrivateNavigator' 
import { AuthService } from '@/services/auth/auth.service'

const Navigation = () => {
  const { user } = useAuth()
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(
    undefined
  )
  const navRef = useNavigationContainerRef()

  useEffect(() => {
    // setCurrentRoute(navRef.getCurrentRoute()?.name)
    // AuthService.logout()
    const listener = navRef.addListener('state', () =>
      setCurrentRoute(navRef.getCurrentRoute()?.name)
    )

    return () => {
      navRef.removeListener('state', listener)
    }
  }, [])

  console.log('currentRoute', currentRoute)
  console.log('user', user)

  return (
    <>
      <NavigationContainer
        ref={navRef}
        onReady={() => {
          setCurrentRoute(navRef.getCurrentRoute()?.name)
        }}
      >
        <PrivateNavigator />
      </NavigationContainer>
      {user && currentRoute && (
        <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
      )}
    </>
  )
}

export default Navigation
