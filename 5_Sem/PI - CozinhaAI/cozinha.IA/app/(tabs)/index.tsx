import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        // source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>
        O app que salva sua rotina, saúde e tempo!
      </Text>

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Entrar no App</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => router.push("/register")}
      >
        <Text style={styles.buttonText}>Fazer cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 },
  logo: { width: 200, height: 200, marginBottom: 20 },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 40 },
  buttonPrimary: { backgroundColor: "#f97316", padding: 15, borderRadius: 8, width: "80%", marginBottom: 15, alignItems: "center" },
  buttonSecondary: { backgroundColor: "#22c55e", padding: 15, borderRadius: 8, width: "80%", alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
