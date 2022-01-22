// In App.js in a new project

import React, {useImperativeHandle, useState} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer,DefaultTheme, DarkThem } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weather from './weather'
import { NativeModules } from 'react-native';
import CalendarModule from './CalendarModule';




// const onSubmit = async () => {
//   try {
//     const eventId = await CalendarModule.createCalendarEvent(
//       'Party',
//       'My House');
//     console.log(`Created a new event with id ${eventId}`);
//   } 
//   catch (e) {
//     console.error(e);
//   }
// };

// onSubmit()


// const { DEFAULT_EVENT_NAME } = CalendarModule.getConstants();





// Custome theme
const DayTheme = {
  //custom prop
  id: 1,
  img: {uri : 'https://cdn.icon-icons.com/icons2/756/PNG/512/night_icon-icons.com_64083.png'  },
  //original theme prop
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'grey',
    card: 'black',
    text: 'white',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const NightTheme = {
  id:2,
  img: {uri :'https://cdn.icon-icons.com/icons2/2505/PNG/512/sunny_weather_icon_150663.png'},
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Stack = createNativeStackNavigator();

let weatherdata= null;
let weatherdata2= null;


const getWeather = async () => {
  try {
    const response = await fetch(
      'https://reactnative.dev/movies.json'
    );
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};


asyncfun = async ()=> {
  console.log("async")
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7222ca83015c255ee7767369262fc10f`)
  console.log("data got !")
  const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Beijing,china&APPID=7222ca83015c255ee7767369262fc10f`)
  weatherdata = await response.json();
  weatherdata2 = await response2.json();
  console.log(weatherdata)
  console.log("--------------------------------------------------------------------")
  
  const element = <Text index={0} color="yellow" >This is a a Text element with 2 props</Text>
  console.log("Prop1: "+ element.props.index)
  console.log("ProP2: "+ element.props.color)
  console.log("text: "+ element.props.children)
  console.log(DEFAULT_EVENT_NAME);
  console.log(element.type)

}

asyncfun(); 

//LUCY : 11101050019




function App() {  
  

  //Home page 
  function HomeScreen({ navigation }) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Weather Page"
          onPress={() => {
            navigation.navigate('Weather', {itemId: 86, otherParam: 'anything you want here'});
          }} 
        />
      </View>
    );
  }

  
  function WeatherScreen({ route, navigationn, data}) {

    if (weatherdata!=null&& weatherdata2!=null){
        return (
          <><Button
          title="Change Theme"
          onPress={() => {changetheme();} } />

          <View style={{ flex: 2, flexDirection: "column" }}>
            <Weather day={weatherdata.name} high={Math.round(weatherdata.main.temp_max-272.15)} low={Math.round(weatherdata.main.temp_min-272.15)} img={usetheme.img}></Weather>
            <Weather day={weatherdata2.name} high={Math.round(weatherdata2.main.temp_max-272.15)} low={Math.round(weatherdata2.main.temp_min-272.15)} img={usetheme.img}></Weather>
          </View></>
      );
      }
      else{
        return(
          <><Button
            title="Change Theme"
            onPress={() => { changetheme(); } } /><Weather day={"Tuesday"} high={"22"} low={"14"} img={usetheme.img}></Weather></>
        );

      }
    
  }

  

  const [usetheme, settheme] = useState( NightTheme);
  
  function changetheme(){
    
    if (usetheme.id==1){
      settheme(NightTheme)
    }
    else{
      settheme(DayTheme)
    }
  }

  return (
    <NavigationContainer  theme={usetheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
