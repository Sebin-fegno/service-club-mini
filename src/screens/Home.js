import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Home = () => {
    const val = useContext(AuthContext)
  return (
    <View>
      <Text>{val}</Text>
    </View>
  )
}

export default Home