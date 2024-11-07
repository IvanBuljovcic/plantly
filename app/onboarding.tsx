import PlantlyButton from "@/components/PlantlyButton";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme";
import { StatusBar } from "expo-status-bar";
import PlantlyImage from "@/components/PlantlyImage";

const Onboarding = () => {
  const router = useRouter();

  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/");
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}
    >
      <StatusBar style="light" />

      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>
          Keep your plants healthy and hydrated
        </Text>
      </View>

      <PlantlyImage />

      <PlantlyButton title="Finish onboarding" onPress={handlePress} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: theme.colorWhite,
  },
  heading: {
    marginBottom: 12,
    color: theme.colorWhite,
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  tagline: {
    color: theme.colorWhite,
    fontSize: 24,
  },
});

export default Onboarding;
