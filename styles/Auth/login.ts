import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background1: {
    backgroundColor: "#F0D1FF",
    height: 100,
    width: 100,
    borderRadius: 50,
    position: "absolute",
    left: "10%",
    top: "20%",
    zIndex: 1,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#ededed",
  },
  container2: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    paddingVertical: 25,
    paddingHorizontal: 25,
    paddingBottom: 15,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.33)",
    zIndex: 5,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 45,
    width: "100%",
    borderColor: "#rgba(208, 208, 208, 1)",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  buttonContainer: {
    height: 45,
    width: "100%",
    borderRadius: 5,
    overflow: "hidden", // Ensures border radius is applied
  },
  authBtnText: {
    backgroundColor: "#007AEB",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
    fontSize: 15,
  },
  toggleButton: {
    marginTop: 20,
    color: "grey",
  },
  authMethodContainer: {
    marginTop: 20,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  authMethod: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
});
