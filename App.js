
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import MessageScreen from './app/screens/MessageScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <MessageScreen />
    </GestureHandlerRootView>
  );
}
