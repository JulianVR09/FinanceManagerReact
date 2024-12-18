import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useAuth } from '../../contexts/auth.context'
import Category from '../../components/category/hook/category.component'
import Signout from '../../components/signOut/SignOut.component'

const Home = () => {
  const { name } = useAuth()

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.headerWelcome}>
          <Text style={styles.welcomeText}>Welcome, {name}</Text>
        </View>
        <Signout />
      </View>

      {/* Contenedor gráfico */}
      <View style={styles.graphicContainer}>
        {/* <Image 
          source={require('../../assets/graphic.png')} 
          style={styles.graphic} 
        /> */}
        {/* <Text style={styles.amount}>200.000.000.00</Text> */}
      </View>

      {/* Categorías */}
      <View style={styles.categoryContainer}>
        {/* <Category 
          name="Food" 
          icon={require('../../assets/food.png')} 
        />
        <Category 
          name="Building" 
          icon={require('../../assets/building.png')} 
        /> */}
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5E9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerWelcome: {
    backgroundColor: '#4F759B',
    padding: 15,
    borderBottomRightRadius: 25,
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  graphicContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  graphic: {
    width: 200,
    height: 200,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
})
