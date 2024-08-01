![icon](https://www.veelapp.com/_next/static/media/appLogoDark.ac29fc81.svg)

# @veel/rn-product-reviews
Example App for Veel Product Reviews built using @veel/rn-product-reviews

## Get started

1. Clone Project

   ```bash
   git clone https://github.com/rajsawhoney/rn-product-reviews-example.git
   ```

2. Install dependencies

   ```bash
   npm install
   yarn install
   ```

3. Pre-build app

   ```bash
   npx expo prebuild
   ```

4. Start the app

   ```bash
   npx expo run:android
   npx expo run:ios
   ```

## Package Link
https://www.npmjs.com/package/@veel/rn-product-reviews

## Example App

```js
import { StyleSheet, View } from 'react-native';
import { VeelReviewButton, VeelReviewsList } from '@veel/rn-product-reviews';

export default function App() {
  return (
    <View style={styles.container}>
      <VeelReviewButton brandKey={process.env.BRAND_KEY} apiKey={process.env.API_KEY}/>
      <VeelReviewsList brandKey={process.env.BRAND_KEY} apiKey={process.env.API_KEY} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

## What is BRAND_KEY & API_KEY & Where to get one?
https://www.veelapp.com/docs/product-reviews#generate-keys


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
