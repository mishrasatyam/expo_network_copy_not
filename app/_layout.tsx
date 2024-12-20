import { Button, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Button
        title="Click me"
        onPress={() =>
          fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => console.log(json))
        }
      />
    </View>
  );
}
