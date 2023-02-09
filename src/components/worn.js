import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Worn = (props) => {
  const navigate = useNavigation();
  const back = () => {
    navigate.navigate("Hair");
  };
  return (
    <View>
      <Text>Worn</Text>
      <TouchableOpacity onPress={back}>
        <Text>Geri</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Worn };
