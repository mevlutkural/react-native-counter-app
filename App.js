import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>

      <View style={styles.counterContainer}>
        <Text style={{ fontSize: 40, textAlign: "center" }}>{counter}</Text>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Button title="+" onPress={increment}  titleStyle={{marginHorizontal: 5}} />
          <Button title="-" onPress={decrement} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
  },
  counterContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 300
  },
});
