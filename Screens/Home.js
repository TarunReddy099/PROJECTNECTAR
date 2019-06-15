import React, {Component} from 'react';
import {Text, View,Button,StyleSheet} from 'react-native';


type Props = {};
export default class Home extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> HI TARUN REDDY</Text>
                <Text style={styles.instructions}>choose an option to save the mother earth</Text>
                <Button
                    onPress = {handlePress}
                    title = "BUY"
                    color = "red"
                />
                <Button
                    onPress = {handlePress}
                    title = "DONATE"
                    color = "red"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        fontSize: 20,
        color: '#333333',
        marginBottom: 5,
    },
});