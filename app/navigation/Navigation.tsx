import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'

import BottomMenu from '@/components/layout/bottom-menu/BottomMenu'
import { useAuth } from '@/hooks/useAuth'
import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'
import PinNavigator from './PinNavigator'
import { getPinCode } from '@/utils/pinStore'

const Navigation = () => {
  const { user } = useAuth()
  const [hasPin, setHasPin] = useState<boolean | null>(null)
  const [currentRoute, setCurrentRoute] = useState<string>()
  const navRef = useNavigationContainerRef()

  useEffect(() => {
    if (user?.user_id) {
      getPinCode().then(pin => {
        console.log('PIN from store:', pin)
        setHasPin(!!pin)
      })
    } else {
      setHasPin(null)
    }
  }, [user])

  const handleNavigate = useCallback(
    (targetRoute: string) => {
      if (navRef.isReady() && currentRoute !== targetRoute) {
        navRef.navigate(targetRoute)
      }
    },
    [navRef, currentRoute]
  )

  if (user?.user_id && hasPin === null) {
    return null // SplashScreen или loader
  }

  return (
    <>
      <NavigationContainer
        ref={navRef}
        onReady={() => setCurrentRoute(navRef.getCurrentRoute()?.name)}
        onStateChange={() => setCurrentRoute(navRef.getCurrentRoute()?.name)}
      >
        {user?.user_id ? (
          hasPin ? (
            <PinNavigator onPinSuccess={() => setHasPin(false)} />
          ) : (
            <MainNavigator />
          )
        ) : (
          <AuthNavigator />
        )}
      </NavigationContainer>

      {user?.user_id && !hasPin && currentRoute && (
        <BottomMenu nav={handleNavigate} currentRoute={currentRoute} />
      )}
    </>
  )
}

export default Navigation
