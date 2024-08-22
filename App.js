
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';

export default function App() {
  return (
    <Screen>
      <GestureHandlerRootView>
        <ListingScreen />
      </GestureHandlerRootView>
    </Screen>
  );
}
