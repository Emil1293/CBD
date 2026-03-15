import { StyleSheet, View } from "react-native";

export default function Push1() {
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fefefe",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  Img: {
    marginVertical: 20,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  footer: {
    flex: 1,
  },
});
