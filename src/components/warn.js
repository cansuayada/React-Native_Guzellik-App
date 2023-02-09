import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../theme/color";
import Lottie from "lottie-react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const Warn = (props) => {
  const navigation = useNavigation();

  const geri = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.backMain}>
        <TouchableOpacity onPress={geri} style={styles.back}>
          <MaterialCommunityIcons name="arrow-left" size={30} color={"#B1AFFF"} />
        </TouchableOpacity>
      </View>
      <Lottie source={require("../theme/warning.json")} autoPlay loop />
      <View style={styles.main}>
        <Text style={styles.title}>Uyarı</Text>
        <Text style={styles.desc}>Bu uygulamadaki tarifleri uygulamadan önce alerji olma ihtimalinize karşı öncesinde test etmenizi öneririz.</Text>
      </View>
    </View>
  );
};

export { Warn };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.powder,
    justifyContent: "center",
  },
  lottie: {
    flex: 1,
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 90,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    color: color.purple,
  },
  desc: {
    fontSize: 18,
    fontWeight: "400",
    color: color.iconDark,
    textAlign: "center",
    marginTop: 10,
  },
  back: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: color.iconDark,
  },
  backMain: {
    zIndex: 2,
    position: "absolute",
    top: 10,
    left: 10,
  },
});
