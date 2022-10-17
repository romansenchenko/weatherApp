import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import React from 'react';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = 'f7fc8474aad1cf0d185cbbc3141725b6';

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data: {main: {temp}, weather, name}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading: false, 
      temp: temp, 
      condition: weather[0].main,
      city: name
    });
    console.log(name);
  }

  getLocation = async () => {
    try { 
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Очень грустно(")
    }

  }

  componentDidMount() {
    this.getLocation();
  }


  render() {
    const {isLoading, temp, condition, city} = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} city={city} />
    );
  }
}

