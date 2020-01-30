import React, { useState,  useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import {ThemeContext} from "../context/ThemeContext";
import Header from "../components/Header";

const Discover = props => {
  const [name] = useState("Discover");
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


export default Discover;
