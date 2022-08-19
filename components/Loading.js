import React from "react";
import { StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import icon from '../assets/loadingicon.png';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading() {
	return (
		<LinearGradient colors={['#556270','#4ecdc4' ]} style={styles.container}>
			<View style={styles.icon}>
			<StatusBar barStyle="dark-content"/>
			<View style={styles.img}><Image source={icon}
				resizeMode ="cover"
			style={styles.image}></Image></View>
			</View>
			<View style={styles.copy}>
			<Text style={styles.text}>by Yanushkov</Text>
			</View>
		</LinearGradient>
		
	)
}

const styles=StyleSheet.create({
container: {
	flex: 1,
	
	},
icon: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	
},
text:{
	color: "black",
	fontSize: 15
},
image: {
	alignItems: 'center',
	width: 80,
	height: 80,
},
img: {
	backgroundColor: 'white',
	width: 90,
	height: 90,
	borderRadius: 20,
	paddingTop: 5,
	paddingLeft: 5
},
copy: {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	paddingBottom: 20
	
	
}
})




