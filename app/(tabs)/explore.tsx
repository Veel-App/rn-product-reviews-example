import { StyleSheet, View } from 'react-native';
import { VeelReviewsList } from '@veel/rn-product-reviews'

export default function ReviewListScreen() {
  return (
    <View
      style={styles.root}
    >
      <VeelReviewsList apiKey={process.env.EXPO_PUBLIC_API_KEY ?? ""} brandKey={process.env.EXPO_PUBLIC_BRAND_KEY ?? ""} />
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
