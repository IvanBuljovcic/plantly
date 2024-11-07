import { StyleSheet, Image, useWindowDimensions } from "react-native";

type PlantlyImageProps = {
  size?: number;
  imageUri?: string;
};

const PlantlyImage = ({ size, imageUri }: PlantlyImageProps) => {
  const { width, height } = useWindowDimensions();

  const imageSize = size || Math.min(width / 1.5, 400);

  console.log("imageUri: ", imageUri);

  const imageSource = imageUri
    ? { uri: imageUri }
    : require("@/assets/plantly.png");

  return (
    <Image
      source={imageSource}
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
