import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import FutureWeather from "./FutureWeather";

const API_KEY = 'f7fc8474aad1cf0d185cbbc3141725b6';

const weatherOptions = {
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046', '#1cb5e0'],
        title: 'На улице дождь',
        subtitle: 'А значит скоро будет радуга!'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#2f80ed', '#56ccf2'],
        title: 'Погода супер :)',
        subtitle: 'Иди гулять, хватит сидеть дома!'
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243b55'],
        title: 'Сиди дома',
        subtitle: 'Ты видишь что на улице?'
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
        title: 'Возьми зонтик',
        subtitle: 'Возможно скоро дождь усилится'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'На улице снежок!',
        subtitle: 'Одевайтесь потеплее, лепите снеговиков'
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: 'Ни черта не видно в тумане',
        subtitle: 'Зато как в Сайлент-Хилле! :)'
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56ccf2', '#2f80ed'],
        title: 'На улице смог :(',
        subtitle: 'Не советую выходить без необходимости'
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3e5151', '#decba4'],
        title: 'На улице туман',
        subtitle: 'Двигайтесь осторожно'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#b79891', '#94716b'],
        title: 'Пыльно',
        subtitle: 'Лучше закройте окна'
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#B993D6', '#8CA6DB'],
        title: 'Ни черта не видно в тумане',
        subtitle: 'Зато как в Сайлент-Хилле! :)'
    },
    Sand: {
        iconName: 'weather-sunny',
        gradient: ['#56ccf2', '#2f80ed'],
        title: 'Песок',
        subtitle: 'Зыкрывай глаза!'
    },
    Ash: {
        iconName: 'weather-sunny',
        gradient: ['#56ccf2', '#2f80ed'],
        title: 'Пепел',
        subtitle: 'И часто ли у вас пепел???'
    },
    Squall: {
        iconName: 'weather-sunny',
        gradient: ['#56ccf2', '#2f80ed'],
        title: 'Шквал',
        subtitle: 'Лучше переждать дома'
    },
    Tornado: {
        iconName: 'weather-sunny',
        gradient: ['#56ccf2', '#2f80ed'],
        title: 'Торнадо',
        subtitle: 'Большая редкость, но лучше спасаться'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757f9a', '#d7dde8'],
        title: 'Облака',
        subtitle: 'Белогривые лошадки'
    }
}

export default function Weather({ temp, condition, city, sync, threeDaysWeather, getWeather }) {
    const partOfWeather = threeDaysWeather.list.slice(0, 4);
    let currentDate = new Date();

    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle={"light-content"} />

            <View style={{...styles.inline, ...styles.cities}}>
                <TouchableHighlight onPress={sync}>
                    <Text style={styles.city}>Текущее местоположение</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {getWeather(25.0657, 55.1713)}}>
                    <Text style={styles.city}>Дубай</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {getWeather(51.5085, -0.12574)}}>
                    <Text style={styles.city}>Лондон</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {getWeather(40.7143, -74.006)}}>
                    <Text style={styles.city}>Нью-Йорк</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {getWeather(41.0138, 28.9497)}}>
                    <Text style={styles.city}>Стабмул</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {getWeather(35.6895, 139.692)}}>
                    <Text style={styles.city}>Токио</Text>
                </TouchableHighlight>
            </View>

            <View style={{...styles.halfContainer, ...styles.main}}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
                <Text style={styles.temp}>{city}</Text>
            </View>

            <View style={{ ...styles.halfContainer, ...styles.inline }}>
                {
                    partOfWeather.map(w =>
                        <FutureWeather temp={Math.round(w.main.temp)}
                            icon={w.weather[0].icon}
                            date={w.dt}
                            timezone={threeDaysWeather.city.timezone}
                            key={w.dt} />
                    )
                }
            </View>

            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                <View style={styles.inline}>    
                    <TouchableHighlight onPress={sync}>
                        <MaterialCommunityIcons name="sync" size={36} color="white" />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={sync}>
                        <Text style={styles.sync}>{ currentDate.toString().slice(16,24) }</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle",
        "Rain", "Snow", "Mist", "Smoke", "Haze", "Dust",
        "Fog", "Sand", "Ash", "Squall", "Tornado",
        "Clear", "Clouds"]).isRequired,
    city: propTypes.string.isRequired,
    sync: propTypes.func.isRequired,
    threeDaysWeather: propTypes.object.isRequired,
    getWeather: propTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        marginBottom: 50
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: 'left'
    },
    subtitle: {
        color: "white",
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'left',
        paddingBottom: 10
    },
    textContainer: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingBottom: 15
    },
    inline: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    sync: {
        color: 'white',
        fontSize: 24
    },
    city: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        padding: 5,
        borderWidth: 1,
        margin: 5,
        borderColor: '#ddd'
    },
    cities: {
        flex: 1,
        justifyContent: 'center',
    }

})