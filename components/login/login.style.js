import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.red,
  },

  firstChild: {
    flex: 1,
    paddingTop: 70,
  },

  logoContainer: {
    marginBottom: 30,
  },

  logo: {
    borderRadius: 8,
  },

  loginBtn: {
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginBtnText: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },

  inputContainer: {
    backgroundColor: COLORS.white2,
    borderRadius: 25,
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },

  input: {
    height: 60,
  },

  btnContainer: {
    flex: 1,
    marginHorizontal: 28,
    marginTop: SIZES.large,
  },
});

export default styles;
