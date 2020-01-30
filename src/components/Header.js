import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { View } from "native-base";

const { width } = Dimensions.get("window");

const Header = props => {
  return (
    <View style={cs.header}>
      <StatusBar backgroundColor="#E8E8E8" barStyle="light-content" />
      <TouchableOpacity
        style={cs.headerSol}
        onPress={() => props.navigation.openDrawer()}
      >
        <Image
          source={require("../images/menu/settings.png")}
          style={{ width: 24 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={cs.headerOrta} />
      <TouchableOpacity style={cs.headerSag}/>
    </View>
  );
};
const cs = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#BBC6CE",
    backgroundColor:"white"
  },
  menu: {
    width: 20,
    height: 20
  },
  headerSol: {
    width: 40,
    justifyContent: "center",
    paddingLeft: 20
  },
  headerOrta: {
    width: width - 80,
    justifyContent: "center",
    alignItems: "center"
  },
  headerSag: {
    width: 40,
    justifyContent: "center",
    paddingRight: 20,
    alignItems: "flex-end"
  },
  logo: {
    width: width / 2
  }
});

export default Header;
