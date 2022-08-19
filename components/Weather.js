import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar,ImageBackground } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



const weatherOptions = {
	Rain: {
		iconName: 'weather-pouring',
		gradient: ['#2980b9', '#2b5876'],
		title: 'Дощить',
		subTitle: 'Не забудь парасольку',
		image: {uri : 'https://i.pinimg.com/originals/15/6e/b8/156eb84feb2feccf0c3a187906a556e4.gif'}
	},
	Snow: {
		iconName: 'snowflake',
		gradient: ['#c9d6ff', '#e2e2e2'],
		title: 'Сніг',
		subTitle: 'Вдягай шапку і рукавиці!',
		image: {uri : 'https://i.pinimg.com/originals/c4/13/31/c413317ac195aebd68575cde6b9cae54.gif'}
	},
	
	Clouds: {
		iconName: 'cloud',
		gradient: ['#ece9e6', '#ffffff'],
		title: 'Хмарно',
		subTitle: 'Сонцезахисні окуляри можеш залишити',
		image:   {uri : 'https://media3.giphy.com/media/5HK4TiiBeLSZq/giphy.gif?cid=ecf05e47l7mb666gemrs9mz8gnxaq2ukgqoeklbwgr6arxq0&rid=giphy.gif&ct=g'}
	},
	Clear: {
		iconName: 'weather-sunny',
		gradient: ['#2980b9', '#ffffff'],
		title: 'Чисте небо, без опадів',
		subTitle: 'Можеш чілити',
		image:   {uri : 'https://media2.giphy.com/media/BHWoX8f4EqKcPTALTK/giphy.gif?cid=790b7611aed5165549cc616bc14df95069d02281f2fc18f1&rid=giphy.gif&ct=g'}
	},
	Thunderstorm: {
		iconName: 'weather-lightning-rainy',
		gradient: ['#141e30', '#243b55'],
		title: 'Гроза',
		subTitle: 'Сиди вдома, бачиш що коїться?',
		image:   {uri : 'https://i.gifer.com/Gler.gif'}
	},
	Drizzle: {
		iconName: 'weather-rainy',
		gradient: ['#7474bf', '#348ac7'],
		title: 'Моросить дощ',
		subTitle: 'Капюшон не завадить',
		image: {uri : 'https://media3.giphy.com/media/7bsHJWS0V1F9C/giphy.gif?cid=ecf05e47mtr6a8dpo27yerk96i1pongienpk60z4fkvp95qm&rid=giphy.gif&ct=g'}
	},
	Mist: {
		iconName: 'weather-fog',
		gradient: ['#ada996', '#f2f2f2', '#dbdbdb', '#eaeaea'],
		title: 'Туман',
		subTitle: 'Дивись під ноги',
		image: {uri : 'https://media1.giphy.com/media/Yxf8YP0fL1pW8/giphy.gif?cid=790b7611aea7c09f58e5090ff33684c5c75598e56c4846c8&rid=giphy.gif&ct=g'}
	},
	Smoke: {
		iconName: 'smoke',
		gradient: ['#232526', '#414345'],
		title: 'Фу, дим',
		subTitle: 'Надягни маску',
		image: {uri : 'https://www.gannett-cdn.com/presto/2020/08/13/PVCS/4127461b-5801-4bc6-a4aa-7a64063fb864-Lake_Fire.jpg?crop=2047,1152,x0,y0&width=1600&height=800&format=pjpg&auto=webp'}
	},
	Haze: {
		iconName: 'weather-hazy',
		gradient: ['#2b5876', '#f2f2f2'],
		title: 'Легка туманність',
		subTitle: 'Все видно, можна газувати',
		image: {uri : 'https://i.gifer.com/b95.gif'}
	},
	Fog: {
		iconName: 'weather-fog',
		gradient: ['#ada996', '#f2f2f2', '#dbdbdb', '#eaeaea'],
		title: 'Туман',
		subTitle: 'Дивись під ноги',
		image: {uri : 'https://media1.giphy.com/media/Yxf8YP0fL1pW8/giphy.gif?cid=790b7611aea7c09f58e5090ff33684c5c75598e56c4846c8&rid=giphy.gif&ct=g'}
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
			<StatusBar barStyle="dark"/>
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
