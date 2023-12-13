import { SafeAreaView, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
export default function App() {
  return (
    <SafeAreaView>
      <Card>Carta</Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
