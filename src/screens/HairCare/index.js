import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";

const HairCare = (props) => {
  const navigate = useNavigation();

  const hairSoft = () => {
    navigate.navigate("HairSoft");
  };

  const dandruff = () => {
    navigate.navigate("Dandruff");
  };

  const worn = () => {
    navigate.navigate("Worn");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={hairSoft}>
          <Text style={styles.buttonText}>Yumuşaklık Maskesi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={dandruff}>
          <Text style={styles.buttonText}>Kepek Maskesi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={worn}>
          <Text style={styles.buttonText}>Yıpranan Saçlar için Maske</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Koparak Dökülme için Maske</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kuru, Cansız Saçlar için Maske</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Dökülme için Maske</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Dökülme Azaltma için Maske</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Gürleştirme için Maske</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Koparak Dökülme için Maske</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export { HairCare };
