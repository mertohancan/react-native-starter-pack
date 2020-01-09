import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import Header from "../components/Header";

const Profile = props => {
  const [name] = useState("Profile");
  return (
    <>
      <SafeAreaView>
        <Header navigation={props.navigation} />
      </SafeAreaView>
      <Text>Selam: {name}</Text>
    </>
  );
};

export default Profile;
