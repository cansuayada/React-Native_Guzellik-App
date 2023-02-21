import { StyleSheet } from "react-native";
import { color } from "../../theme/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.ligthYellow,
    justifyContent: "center",
    alignItems: "center",
  },
  warn: {
    position: "absolute",
    top: 30,
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
    zIndex: 100,
  },
  warnText: {
    fontSize: 27,
    color: color.purple,
    fontWeight: "600",
  },
  desc: {
    position: "absolute",
    bottom: 25,
    width: "85%",
  },
  descText: {
    fontSize: 17,
    color: color.iconDark,
    textAlign: "center",
    lineHeight: 23,
  },
  lottie: {
    height: "70%",
    flex: 1 / 2,
    position: "absolute",
    top: 70,
    zIndex: -100,
  },
});
