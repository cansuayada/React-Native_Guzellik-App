import { StyleSheet } from "react-native";
import { color } from "../../theme/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.ligthYellow,
    // justifyContent: "center",
    alignItems: "center",
  },
  warn: {
    position: "absolute",
    top: 20,
    borderWidth: 1.5,
    borderColor: color.purple,
    borderRadius: 10,
    padding: 30,
    width: "80%",
    alignItems: "center",
    shadowOffset: {
      width: 3,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  warnText: {
    fontSize: 25,
    color: color.purple,
    fontWeight: "600",
  },
});
