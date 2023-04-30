import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import IconText from '../components/IconText'
import moment from 'moment'

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>UK</Text>
        <View style={styles.populationWrapper}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={`Population:8000`}
            bodyTextStyles={styles.populationText}
          />
        </View>
        <View style={styles.riseSetWrapper}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment("20111031").format('h:mm:ss a')}
            bodyTextStyles={styles.riseSetText} />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment().format('h:mm:ss a')}
            bodyTextStyles={styles.riseSetText} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})

export default City

