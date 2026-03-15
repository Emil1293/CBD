import { Link } from "expo-router";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/baggrund.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>Coaching By Dreier</Text>

      <TextInput
        placeholder="Brugernavn"
        placeholderTextColor="#666"
        style={styles.input}
      />

      <TextInput
        placeholder="Adgangskode"
        placeholderTextColor="#666"
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.buttonRow}>
        <Link href="../Admin/dashboard" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.cardText}>Log-in</Text>
          </Pressable>
        </Link>

        <Link href="../Admin/dashboard" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.cardText}>Sign-in</Text>
          </Pressable>
        </Link>
      </View>

      <Image source={require("../assets/images/sune.jpg")} style={styles.img} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ededed",
    marginBottom: 40,
  },

  input: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    width: "80%",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#519a3b",
    padding: 16,
    borderColor: "#ffffff",
    borderWidth: 3,
    borderRadius: 30,
    width: 150,
    alignItems: "center",
    marginTop: 10,
  },

  cardText: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  img: {
    marginTop: 60,
    width: 180,
    height: 180,
    borderRadius: 90,
  },
});
