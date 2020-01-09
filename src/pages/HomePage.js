import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import Header from "../components/Header";

const HomePage = props => {
  const [name] = useState("Home");
  return (
    <>
      <SafeAreaView>
        <Header navigation={props.navigation} />
      </SafeAreaView>
      <Text>Selam: {name}</Text>
    </>
  );
};

export default HomePage;
