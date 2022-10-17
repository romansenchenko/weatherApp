import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046','#1cb5e0'],
        title: 'На улице дождь',
        subtitle: 'А значит скоро будет радуга!'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#2f80ed','#56ccf2'],
        title: 'Погода супер :)',
        subtitle: 'Иди гулять, хватит сидеть дома!'
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30','#243b55'],
        title: 'Сиди дома',
        subtitle: 'Ты видишь что на улице?'
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5','#3a6073'],
        title: 'Возьми зонтик',
        subtitle: 'Возможно скоро дождь усилится'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4','#b6fbff'],
        title: 'На улице снежок!',
        subtitle: 'Одевайтесь потеплее, лепите снеговиков'
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88','#3f4c6b'],
        title: 'Ни черта не видно в тумане',
        subtitle: 'Зато как в Сайлент-Хилле! :)'
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56ccf2','#2f80ed'],
        title: 'На улице смог :(',
        subtitle: 'Не советую выходить без необходимости'
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3e5151','#decba4'],
        title: 'На улице туман',
        subtitle: 'Двигайтесь осторожно'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#b79891','#94716b'],
        title: 'Пыльно',
        subtitle: 'Лучше закройте окна'
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#B993D6','#8CA6DB'],
        title: 'Ни черта не видно в тумане',
        subtitle: 'Зато как в Сайлент-Хилле! :)'
    },
    Sand: {
        iconName: 'weather-sunny',
        gradient: ['#56ccf2','#2f80ed'],
        title: 'Песок',
        subtitle: 'Зыкрывай глаза!'
    },
    Ash: {
        iconName: 'weather-sunny',
        gradient: ['#56ccf2','#2f80ed'],
        title: 'Пепел',
        subtitle: 'И часто ли у вас пепел???'
    },
    Squall: {
        iconName: 'weather-sunny',
        gradient: ['#56ccf2','#2f80ed'],
        title: 'Шквал',
        subtitle: 'Лучше переждать дома'
    },
    Tornado: {
        iconName: 'weather-sunny',
        gradient: ['#56ccf2','#2f80ed'],
        title: 'Торнадо',
        subtitle: 'Большая редкость, но лучше спасаться'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757f9a','#d7dde8'],
        title: 'Облака',
        subtitle: 'Белогривые лошадки'
    }
}

export default function Weather({ temp, condition, city }) {
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
                <Text style={styles.temp}>{city}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
    city: propTypes.string.isRequired
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
        textAlign: 'left'
    },
    textContainer: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})