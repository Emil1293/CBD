import { Stack } from "expo-router";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#1e1e1e" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Startside" }} />
        <Stack.Screen name="Admin" options={{ title: "" }} />
        <Stack.Screen name="Programs" options={{ title: "" }} />
        <Stack.Screen
          name="createprogram"
          options={{ title: "Lav træningsprogram" }}
        />
        <Stack.Screen
          name="trainingprograms"
          options={{ title: "Træningsprogrammer" }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
