import React from 'react';
import { Alert} from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import Weather from './Weather';
import axios from 'axios';

const _API_KEY = '54ef3ab1d20919cb82d4d4ae70737964';


export default class extends React.Component {

	state = {
		isLoading: true
	}

	getWeather = async (latitude, longitude) => {
		const {data: {main: {temp, feels_like}, weather, name}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${_API_KEY}&units=metric`);
		
		this.setState({
			isLoading: false, 
			temp: temp,
			condition: weather[0].main,
			name: name,
			feelsLike: feels_like,
		});
		
	}


	getLocation = async () => {
		try{
	      await Location.requestForegroundPermissionsAsync();
			const {coords : {latitude, longitude}}= await Location.getCurrentPositionAsync();
			this.getWeather(latitude, longitude);
		} catch (error) {
			Alert.alert('Не можу визначити місце розташування', 'Попробуй знову :(')
		}
	}

	componentDidMount() {
	this.getLocation();
	}

  render(){

	const {isLoading, temp, condition, name, feelsLike} = this.state;
	return (
		isLoading ? <Loading/> : <Weather  temp={Math.round(temp)}
		 name={name} 
		 feelsLike={Math.round(feelsLike)}
		 condition={condition}/>
		);
  }
}

