import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar, TouchableHighlight, Image } from 'react-native';

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    return hour;
}

export default function FutureWeather({ temp, icon, date, timezone }) {

    return (<View style={styles.container}>
        <Image source={{
            width: 60,
            height: 60,
            uri: `https://openweathermap.org/img/wn/${icon}@2x.png`
        }} />
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.time}>{timeConverter(date)}:00</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        borderColor: '#ddd'
    },
    temp: {
        fontSize: 24,
        color: "white",
        textAlign: 'center',
    },
    time: {
        fontSize: 12,
        color: "white",
        textAlign: 'center',
    },
})