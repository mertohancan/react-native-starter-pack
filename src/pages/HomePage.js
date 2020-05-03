import React, { useState, useContext } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { Container, Content, Item, Input, Icon } from "native-base";
import Header from "../components/Header";
import { ThemeContext } from "../context/ThemeContext";

const HomePage = props => {
  const [name] = useState("Home");
  const [number, setNumber] = useState(0);
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <SafeAreaView>
        <Header navigation={props.navigation} />
      </SafeAreaView>
    </>
  );
};

export default HomePage;
