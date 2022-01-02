import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './Root';

import * as React from 'react'

import useStore from './data/useStore'

import hooks from './hooks/index';

export default function App() {

  const isLoadingComplete = hooks.useCachedResources()
  const { StoreProvider } = useStore()

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StoreProvider>
          <Root />
          <StatusBar />
        </StoreProvider>
      </SafeAreaProvider>
    );
  }
}