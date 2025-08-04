import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'

import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'

import { useAuth } from '@/hooks/useAuth'

import { AuthService } from '@/services/auth/auth.service'

import PrivateNavigator from './PrivateNavigator'

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

  const handleNavigate = useCallback(
    (targetRoute: string) => {
      if (navRef.isReady() && currentRoute !== targetRoute) {
        navRef.navigate(targetRoute)
      }
    },
    [navRef, currentRoute]
  )

  // console.log('currentRoute', currentRoute)
  // console.log('user', user)
  // console.log('navRef', navRef)

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
        <BottomMenu nav={handleNavigate} currentRoute={currentRoute} />
      )}
    </>
  )
}

export default Navigation
