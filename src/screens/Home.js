import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import CommunityCard from '../components/CommunityCard';
import Vehicles from './Vehicles';

const Home = ({navigation}) => {
    const {isLoading,} = useContext(AuthContext);
  return (
    <View style={styles.home}>
      <CommunityCard navigation={navigation}/>
      {/* <Vehicles /> */}
    </View>
  )
}
const styles = StyleSheet.create({
home:{
}
})

export default Home