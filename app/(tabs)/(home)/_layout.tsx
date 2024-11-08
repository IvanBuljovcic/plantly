import { theme } from "@/theme";
import { AntDesign } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

const LayoutHome = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={20}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
          ),
        }}
      />

      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {},
});

export default LayoutHome;
