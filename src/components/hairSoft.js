import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HairSoft = (props) => {
  const navigate = useNavigation();
  const back = () => {
    navigate.navigate("Hair");
  };
  return (
    <View>
      <Text>hairSoft</Text>
      <TouchableOpacity onPress={back}>
        <Text>Geri</Text>
      </TouchableOpacity>
    </View>
  );
};

export { HairSoft };
