import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          'nunito-200': require('../assets/fonts/Nunito-ExtraLight.ttf'),
          'nunito-300': require('../assets/fonts/Nunito-Light.ttf'),
          'nunito-400': require('../assets/fonts/Nunito-Regular.ttf'),
          'nunito-600': require('../assets/fonts/Nunito-SemiBold.ttf'),
          'nunito-700': require('../assets/fonts/Nunito-Bold.ttf'),
          'nunito-800': require('../assets/fonts/Nunito-ExtraBold.ttf'),
          'nunito-900': require('../assets/fonts/Nunito-Black.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
