import React, { Component } from 'react';
import { Text,StyleSheet,Image, PermissionsAndroid, RefreshControlBase } from 'react-native';
import Geolocation from 'react-native-geolocation-service';



export class Weather extends Component {
      
  render() {
    return (
        <><Image style={styles.image} source={this.props.img} />
        <><Text style={styles.day}>{this.props.cityname}</Text>
        <Text style={styles.temp}>{this.props.high}</Text>
        <Text style={styles.temp}>{this.props.low}</Text></></>
    );
  }
}

const styles = StyleSheet.create({
    scrollView: {
        flex:0.4,
        backgroundColor: '#18181bcc',
        padding:30
    },
    image: {
        width: 150,
        height: 150,
        alignContent:"center"
        
    },
    currentTempContainer: {
        flexDirection: 'row',
        backgroundColor: '#00000033',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 10,
        borderColor:'#eee',
        borderWidth:1,
        padding: 15
    },
    day: {
        fontSize: 20,
        color:"orange",
        backgroundColor: "#3c3c44",
        padding: 5,
        textAlign:"center",
        borderRadius: 200,
        fontWeight: "bold",
        marginBottom: 15
    },
    temp: {
        fontSize: 20,
        color:"orange",
        backgroundColor: "#3c3c44",
        padding: 5,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "bold",
        marginBottom: 15
    },
    otherContainer: {
        paddingRight: 40
    }
})

export default Weather;