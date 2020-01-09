import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const LeftMenu = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#f85a40",
          flex: 3,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 15
        }}
      >
        <Image
          source={{
            uri:
              "https://media.licdn.com/dms/image/C4D03AQHddjd6351dRw/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=DRBDsKso3Nl8qRkVvrXZS1GGFhNxmKNO-PM9wwAzteY"
          }}
          style={{ width: 120, height: 120, borderRadius: 60 }}
        />
        <Text style={{ fontSize: 18, color: "white", marginTop: 12 }}>
          Hoşgeldin, Mert Ohancan
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 5,
          paddingTop: 30,
          paddingLeft: 25
        }}
      >
        <TouchableOpacity style={{ marginTop: 17 }}>
          <Text style={{ fontSize: 18 }}>Anasayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 17 }}>
          <Text style={{ fontSize: 18 }}>Anasayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 17 }}>
          <Text style={{ fontSize: 18 }}>Anasayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 17 }}>
          <Text style={{ fontSize: 18 }}>Anasayfa</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#E1DBDB",
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TouchableOpacity>
          <Text style={{ fontSize: 18, color: "#939393" }}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LeftMenu;
