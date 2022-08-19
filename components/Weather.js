import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar,ImageBackground } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



const weatherOptions = {
	Rain: {
		iconName: 'weather-pouring',
		gradient: ['#2980b9', '#2b5876'],
		title: 'Дощ',
		subTitle: 'Не забудь зонтик'
	},
	Snow: {
		iconName: 'snowflake',
		gradient: ['#c9d6ff', '#e2e2e2'],
		title: 'Сніг',
		subTitle: 'Вдягай шапку і рукавиці!'
	},
	
	Clouds: {
		iconName: 'cloud',
		gradient: ['#ece9e6', '#ffffff'],
		title: 'Хмарно',
		subTitle: 'Бери світер',
		image:  "https://i.gifer.com/Gler.gif" 
	},
	Clear: {
		iconName: 'weather-sunny',
		gradient: ['#2980b9', '#ffffff'],
		title: 'Чисте небо, без опадів',
		subTitle: 'Можеш чілити',
		image: 'https://img1.akspic.ru/crops/9/9/0/6/6/166099/166099-dozhd-zelenyj-rastitelnost-list-rastenie-1080x1920.jpg'
	},
	Thunderstorm: {
		iconName: 'weather-lightning-rainy',
		gradient: ['#141e30', '#243b55'],
		title: 'Гроза',
		subTitle: 'Сиди вдома, бачиш що коїться?'
	},
	Drizzle: {
		iconName: 'weather-rainy',
		gradient: ['#7474bf', '#348ac7'],
		title: 'Моросить дощ',
		subTitle: 'Капюшон не завадить'
	},
	Mist: {
		iconName: 'weather-fog',
		gradient: ['#ada996', '#f2f2f2', '#dbdbdb', '#eaeaea'],
		title: 'Туман',
		subTitle: 'Не видно нічого за 5 метрів'
	},
	Smoke: {
		iconName: 'smoke',
		gradient: ['#232526', '#414345'],
		title: 'Фу, дим',
		subTitle: 'Надягни маску'
	},
	Haze: {
		iconName: 'weather-hazy',
		gradient: ['#2b5876', '#f2f2f2'],
		title: 'Легка туманність',
		subTitle: 'Все видно, можна газувати'
	},
	Fog: {
		iconName: 'weather-fog',
		gradient: ['#ada996', '#f2f2f2', '#dbdbdb', '#eaeaea'],
		title: 'Туман',
		subTitle: 'Не видно нічого за 5 метрів'
	},

}




export default function Weather({temp, name, condition, feelsLike}) {
	return (
		
		 <ImageBackground
      //   colors={weatherOptions[condition].gradient} style={styles.container}
		source={weatherOptions[condition].image}
		resizeMode ="cover"
		style={styles.image}
		  >
			<StatusBar barStyle="light-content"/>
			<View style={styles.halfContainer}>
			<Text style ={styles.name}>{name}</Text>
				<MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="black" />
				<Text style={styles.temp}>{temp}°</Text>
				<Text style={{'fontSize': 10}}>Відчувається як <Text style={{'fontSize': 12}}>{feelsLike}°</Text></Text>
			</View>
			<View style={{...styles.halfContainer, ...styles.textContainer}}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
			</View>
		</ImageBackground>
	);
}

Weather.propTypes = {
   temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf(["Thunderstorm" , "Drizzle", "Rain" , "Snow", "Mist", "Smoke", "Haze", "Dust", "Fog", "Clear", "Clouds"]).isRequired

}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	temp: {
		fontSize: 42,
		color: 'black',
		paddingLeft: 10
	},
	title: {
		color: "black",
		fontSize: 44,
		fontWeight: '300',
		marginBottom: 10
	},
	subTitle: {
		color: "black",
		fontWeight: '600',
		fontSize: 24
	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: 'flex-start'
	},
	name:{
		color: "black",
		fontSize: 40,
		marginBottom: 20
	},
	feelsLike: {
		fontSize: 10
	},
	image: {
		flex: 1,
    justifyContent: "center"
	}
})
