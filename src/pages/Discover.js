import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import Header from "../components/Header";

const Discover = props => {
  const [name] = useState("Discover");
  return (
    <>
      <SafeAreaView>
        <Header navigation={props.navigation} />
      </SafeAreaView>
      <Text>Selam: {name}</Text>
    </>
  );
};

export default Discover;
