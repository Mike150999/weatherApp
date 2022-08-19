import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Spinner from "./Spinner";

export default function Loading() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="dark-content"/>
			<Spinner/>
		<Text style={styles.text}>Отримання погоди...</Text>
	</View>
	)
}

const styles=StyleSheet.create({
container: {
	flex: 1,
	justifyContent: 'flex-end',
	paddingHorizontal: 30,
	paddingVertical: 100,
	backgroundColor: 'black',
},
text:{
color: "white",
fontSize: 30
}
})




