import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeDrawerParamList } from '../types/navigation';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={HomeScreen}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
      />

      <Drawer.Screen
        name="About"
        component={AboutScreen}
      />
    </Drawer.Navigator>
  );
}