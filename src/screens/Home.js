import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Home = () => {
    const {isLoading,} = useContext(AuthContext);
  return (
    <View>
      <Text>{isLoading}</Text>
    </View>
  )
}

export default Home