import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
//import Lottie from "lottie-react-native";

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
    </View>
  );
};

export { Home };
