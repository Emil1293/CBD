import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/baggrund.png")}
        style={styles.topSection}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.topRow}>
            <View style={styles.logoWrapper}>
              <Text style={styles.logoMain}>COACHING BY DREIER</Text>

              <Text style={styles.tagline}>
                Struktur. Performance. Resultater.
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.board}>
        <Link href="/trainingprograms" asChild>
          <Pressable style={styles.card}>
            <View style={styles.cardLeft}>
              <Ionicons name="clipboard-outline" size={28} color="#444" />
              <View style={styles.textWrapper}>
                <Text style={styles.cardTitle}>Træningsprogrammer</Text>
                <Text style={styles.cardSubtitle}>
                  Færdige træningsprogrammer
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#777" />
          </Pressable>
        </Link>
        <Link href="/createprogram" asChild>
          <Pressable style={styles.card}>
            <View style={styles.cardLeft}>
              <Ionicons name="add-circle" size={28} color="#444" />
              <View style={styles.textWrapper}>
                <Text style={styles.cardTitle}>Lav et nyt træningsprogram</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#777" />
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e9eb",
  },

  topSection: {
    height: 180,
    width: "100%",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  logoWrapper: {
    flex: 1,
    alignItems: "center",
  },

  logoMain: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  logoSub: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 4,
  },

  tagline: {
    color: "#e5e5e5",
    fontSize: 14,
    marginTop: 10,
  },

  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginTop: 5,
    marginLeft: 10,
  },
  logo: {
    width: 200,
    height: 150,
    borderRadius: 50,
    marginTop: 5,
    marginLeft: 10,
  },

  board: {
    flex: 1,
    backgroundColor: "#e9e9eb",
    padding: 20,
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#111",
  },

  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  textWrapper: {
    marginLeft: 14,
    flex: 1,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
  },

  cardSubtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
});
