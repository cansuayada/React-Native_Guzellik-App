import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HairSoft = (props) => {
  const navigate = useNavigation();
  const back = () => {
    navigate.navigate("Hair");
  };
  return (
    <View>
      <Text>hairSoft</Text>

      <TouchableOpacity>
        <MaterialCommunityIcons name="heart-outline" size={30} />
        <MaterialCommunityIcons name="heart" size={30} />
      </TouchableOpacity>

      <TouchableOpacity onPress={back}>
        <Text>Geri</Text>
      </TouchableOpacity>
    </View>
  );
};

export { HairSoft };
