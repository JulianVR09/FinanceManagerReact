import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useAuth } from '../contexts/auth.context'
import PublicStack from './public/navigationPublic.stack'
import PrivateStack from './private/navigationPrivate.stack'

const AppNavigation = () => {
  const Navigation = useAuth()
  const isAuth = Navigation.auth

  return (
    <NavigationContainer>
        {isAuth ? <PrivateStack/> : <PublicStack/>}
    </NavigationContainer>
  )
}

export default AppNavigation