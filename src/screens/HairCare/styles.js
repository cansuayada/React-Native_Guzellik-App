import { StyleSheet } from "react-native";
import { color } from "../../theme/color";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.ligthYellow,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderWidth: 2,
    width: "80%",
    padding: 30,
    borderRadius: 10,
    borderColor: color.purple,
    margin: 20,
    shadowOffset: {
      width: 3,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  buttonText: {
    color: color.purple,
    fontSize: 25,
    textAlign: "center",
  },
});
