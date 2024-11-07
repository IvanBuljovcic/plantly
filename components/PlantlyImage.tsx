import { StyleSheet, Image, useWindowDimensions } from "react-native";

type PlantlyImageProps = {
  size?: number;
};

const PlantlyImage = ({ size }: PlantlyImageProps) => {
  const { width, height } = useWindowDimensions();

  const imageSize = size || Math.min(width / 1.5, 400);

  return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{
        width: imageSize,
        height: imageSize,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {},
});

export default PlantlyImage;
