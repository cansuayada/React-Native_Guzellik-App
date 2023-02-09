import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { StackNavigation } from "./src/navigate/Stack";
import { TabNavigation } from "./src/navigate/Tab";
import { h, w } from "./src/utils/ui/dimensions";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <StackNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // bu ayar iosda tam oturuyor
    height: Platform.OS === "android" ? 0 : 100,
    marginTop: Platform.OS === "ios" ? 35 : 0,
    ...Platform.select({
      ios: { backgroundColor: "transparent" },
      //android: { backgroundColor: "#00f" },
    }),
    //width: w,
    //height: h,
    flex: 1,
  },
});
