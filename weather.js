import React, { Component } from 'react';
import { Text,StyleSheet,Image, PermissionsAndroid, RefreshControlBase } from 'react-native';
import Geolocation from 'react-native-geolocation-service';



export class Weather extends Component {

    state ={
        lat:null,
        lon:null,
    };

    componentDidMount(){
        this.getLocation();
    }

    getLocation = async () =>{
        const granted =await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,);
        if (granted== PermissionsAndroid.RESULTS.GRANTED){
            Geolocation.getCurrentPosition ( 
                (position)=> {
                   // console.log(position);
                    this.setState({
                        lat:position.coords.latitude,
                        lon:position.coords.longitude,
                    })
                    this.getWeather();
                },
                (error) => {
               //     console.log(error.code,error.message);
                },
                {enableHighAccuracy: true, timeout:15000, maximumAGE:10000},
            );
        }
    }

    getWeather = async () => {
        if (this.state.lat!=null){
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7222ca83015c255ee7767369262fc10f`)
            const data = await response.json();
           // console.log (data.name)
        }
    };
      
  render() {
    return (
        <><Image style={styles.image} source={this.props.img} />
        <><Text style={styles.day}>{this.props.day}</Text>
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