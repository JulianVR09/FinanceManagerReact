import React from 'react'
import { Text, View } from 'react-native'
import { useAuth } from '../../contexts/auth.context'

const Home = () => {
  const { name } = useAuth()

  return (
    <View>
      <View>
        <Text>Welcome {name}</Text>
      </View>
      <View>

      </View>
      <View>

      </View>
    </View>
  )
}

export default Home