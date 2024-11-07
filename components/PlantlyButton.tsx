import { theme } from "@/theme";
import { Text, View, StyleSheet, Pressable, Platform } from "react-native";
import * as Haptics from "expo-haptics";

type PlantlyButtonProps = {
  title: string;
  onPress: () => void;
};

const PlantlyButton = ({ title, onPress }: PlantlyButtonProps) => {
  const handlePress = () => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => {
        if (pressed) {
          return [styles.button, styles.buttonPressed];
        }

        return styles.button;
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colorGreen,
  },
  text: {
    color: theme.colorWhite,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonPressed: {
    backgroundColor: theme.colorLeafyGreen,
  },
});

export default PlantlyButton;
