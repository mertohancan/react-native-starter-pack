import React, { useContext } from "react";
import { View, Dimensions, Image } from "react-native";
import { createAppContainer, ThemeContext } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import Profile from "./pages/Profile";
import Home from "./pages/HomePage";
import Discover from "./pages/Discover";
import LeftMenu from "./pages/LeftMenu";



const dw = Dimensions.get("window").width;
const TabScreens = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <View
            style={{
              width: dw / 3,
              justifyContent: "center",
              alignItems: "center",
              height: 50
            }}
          >
            <Image
              source={require("./images/menu/home.png")}
              style={{ width: 28, height: 28 }}
              resizeMode="stretch"
            />
          </View>
        )
      })
    },

    Discover: {
      screen: Discover,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <View
            style={{
              width: dw / 3,
              justifyContent: "center",
              alignItems: "center",
              height: 50
            }}
          >
            <Image
              source={require("./images/menu/worldwide.png")}
              style={{ width: 28, height: 28 }}
              resizeMode="stretch"
            />
          </View>
        )
      })
    },

    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <View
            style={{
              width: dw / 3,
              justifyContent: "center",
              alignItems: "center",
              height: 50
            }}
          >
            <Image
              source={require("./images/menu/user.png")}
              style={{ width: 28, height: 28 }}
              resizeMode="stretch"
            />
          </View>
        )
      })
    }
  },
  {
    tabBarOptions: {
      tabBarVisible: true,
      showLabel: false,
      activeTintColor: "#323232",
      inactiveTintColor: "#C4C4C4",
      style: {
        backgroundColor: "white",
        height: 66
      }
    }
  }
);

const Drawer = createDrawerNavigator(
  {
    TabScreens
  },
  {
    overlayColor: "#fff",
    drawerBackgroundColor: "#263238",
    drawerType: "slide",
    drawerWidth: dw * 0.72,
    drawerPosition: "left",
    edgeWidth: 20,
    drawerLockMode: "locked-closed",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <LeftMenu props={props} />
  }
);


const AppNavigator = createStackNavigator(
    {
      Drawer: { screen: Drawer },
      Home,
      Profile
    },
    {
      initialRouteName: "Drawer",
      headerMode: "none",
      cardStyle: ({backgroundColor:"white"}),  
    }
  );


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;