import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Home = () => {

    return <Text style = {style.home}> PHARMA HOME</Text>;
};

const style = StyleSheet.create({
    home:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft: 100,
        marginTop: 200
    }
});

export default Home;