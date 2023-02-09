import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Dandruff = (props) => {
  const navigate = useNavigation();
  const back = () => {
    navigate.navigate("Hair");
  };
  return (
    <View>
      <Text>dandruff</Text>
      <TouchableOpacity onPress={back}>
        <Text>Geri</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Dandruff };
