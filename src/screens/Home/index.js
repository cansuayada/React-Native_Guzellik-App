import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Lottie from "lottie-react-native";

/*

        android:screenOrientation="portrait"
        android:configChanges="orientation|screenSize"
        
        ekranı döndürmeyi engellemek için*/

const Home = (props) => {
  //      <Lottie source={require("../../theme/homelottie.json")} autoPlay={false} loop />

  const navigation = useNavigation();
  const git = () => {
    navigation.navigate("Favorite");
  };

  const warn = () => {
    navigation.navigate("Warn");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={warn} style={styles.warn}>
        <Text style={styles.warnText}>UYARI</Text>
      </TouchableOpacity>

      <Lottie source={require("../../theme/hello.json")} autoPlay loop style={styles.lottie} />
      <View style={styles.desc}>
        <Text style={styles.descText}>
          Bu uygulama, doğal bakım malzemelerini ihtiyaçlarınız doğrultusunda nasıl kullanmanız gerektiği konusunda yol göstermek amaçlı yapılmıştır.
          Lütfen Uyarıyı okuyun.
        </Text>
      </View>
    </View>
  );
};

export { Home };
