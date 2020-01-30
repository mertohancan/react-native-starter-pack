import React, {useContext}  from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ThemeContext } from '../context/ThemeContext';

const LeftMenu = () => {
  const themeContext = useContext(ThemeContext);

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
        <Text style={{textAlign:"center"}}>Uygulamanın temasını değiştirebilirsiniz.</Text>
        <TouchableOpacity onPress={()=>themeContext.setTheme('#565656')} style={{ marginTop: 17, flexDirection:"row" }}>
          <Text style={{ fontSize: 18 }}>Karanlık</Text>
          <View style={{width:24, height:24, borderRadius: 5, backgroundColor:"#565656", marginLeft:8}} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>themeContext.setTheme('#F0F0F0')} style={{ marginTop: 17, flexDirection:"row" }}>
          <Text style={{ fontSize: 18 }}>Aydınlık</Text>
          <View style={{width:24, height:24, borderRadius: 5, backgroundColor:"#F0F0F0", marginLeft:8}} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>themeContext.setTheme('#ABEEFF')} style={{ marginTop: 17, flexDirection:"row" }}>
          <Text style={{ fontSize: 18 }}>Fantastik</Text>
          <View style={{width:24, height:24, borderRadius: 5, backgroundColor:"#ABEEFF", marginLeft:8}} />
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
