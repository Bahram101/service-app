import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native'
import React, { useEffect, useState } from 'react'

import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'

import { useAuth } from '@/hooks/useAuth'

import PrivateNavigator from './PrivateNavigator'

const Navigation = () => {
  const { user } = useAuth()
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(
    undefined
  )
  const navRef = useNavigationContainerRef()
  console.log('navRef', navRef)

  useEffect(() => {
    // setCurrentRoute(navRef.getCurrentRoute()?.name)

    const listener = navRef.addListener('state', () =>
      setCurrentRoute(navRef.getCurrentRoute()?.name)
    )

    return () => {
      navRef.removeListener('state', listener)
    }
  }, [])

  console.log('currentRoute', currentRoute)

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
