/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '@/globals.css';
import 'react-native-reanimated';

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const RootLayout = (): JSX.Element | null => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    Roboto: require('@/assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('@/assets/fonts/Roboto-Bold.ttf'),
    RobotoItalic: require('@/assets/fonts/Roboto-Italic.ttf'),
    RobotoLight: require('@/assets/fonts/Roboto-Light.ttf'),
    RobotoMedium: require('@/assets/fonts/Roboto-Medium.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <Slot />
        </SafeAreaProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
