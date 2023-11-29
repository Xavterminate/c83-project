import React, { Component } from "react";
import {
    View,
    Text,
    SafeAreaView,
    
} from "react-native";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <Text>Profile Screen</Text>
                </View>
        );
    }
}