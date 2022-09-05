import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import { NativeBaseProvider } from 'native-base';

import Matches from './pages/matches/Matches.connector';
import CreateMatch from './pages/createMatch/CreateMatch.connector';

const NavKit = {
  NavigationContainer,
  Drawer: createDrawerNavigator()
};
const UIKit = {
  PaperProvider,
  NativeBaseProvider
};

const App = () => {
  const screens = {
    matches: 'Partidas',
    createMatch: 'Criar Partida'
  };

  return (
    <UIKit.PaperProvider>
      <UIKit.NativeBaseProvider>
        <NavKit.NavigationContainer>
          <NavKit.Drawer.Navigator
            initialRouteName={screens.matches}
            screenOptions={{
              drawerPosition: 'left',
              drawerType: 'slide',
              swipeEdgeWidth: 200
            }}
          >
            <NavKit.Drawer.Screen name={screens.matches} component={Matches} />
            <NavKit.Drawer.Screen name={screens.createMatch} component={CreateMatch} />
          </NavKit.Drawer.Navigator>
        </NavKit.NavigationContainer>
      </UIKit.NativeBaseProvider>
    </UIKit.PaperProvider>
  );
};

export default App;
