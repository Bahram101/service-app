import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'

import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'

import { useAuth } from '@/hooks/useAuth'

import PrivateNavigator from './PrivateNavigator'

const Navigation = () => {
  const { user } = useAuth()
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(
    undefined
  )
  const navRef = useNavigationContainerRef()

  useEffect(() => {
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
  // console.log('userAuth', user)
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
      {user?.user_id && currentRoute && (
        <BottomMenu nav={handleNavigate} currentRoute={currentRoute} />
      )}
    </>
  )
}

export default Navigation
