import React, { useState, useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Header from "../components/Header";
import {ThemeContext} from "../context/ThemeContext";
const HomePage = props => {
  const [name] = useState("Home");
  const themeContext = useContext(ThemeContext)
  return (
    <>
      <SafeAreaView>
        <Header navigation={props.navigation} />
      </SafeAreaView>
      <View style={{flex:1, backgroundColor: themeContext.theme }}>
        <Text>Selam: {name}</Text>
      </View>
    </>
  );
};

export default HomePage;
