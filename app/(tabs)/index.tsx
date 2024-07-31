import { StyleSheet, View } from 'react-native';
import { VeelReviewButton } from '@veel/rn-product-reviews'

export default function UploadScreen() {
  return (
    <View
      style={styles.root}
    >
      <VeelReviewButton apiKey={process.env.EXPO_PUBLIC_API_KEY ?? ""} brandKey={process.env.EXPO_PUBLIC_BRAND_KEY ?? ""} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
