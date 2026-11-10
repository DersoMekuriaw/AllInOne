
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabParamList } from '../types/navigation';

import HomeScreen from '../screens/HomeScreen';
import UserStack from './UserStack';
import HomeDrawer from './HomeDrawer';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarStyle: {
            height: 65 + insets.bottom,
            paddingTop: 8,
            paddingBottom: Math.max(insets.bottom, 8),

            backgroundColor: '#ffffff',
            borderTopWidth: 0,

            elevation: 10,
            shadowColor: '#000',
            shadowOpacity: 0.08,
            shadowOffset: {
              width: 0,
              height: -3,
            },
            shadowRadius: 8,
          },

          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '600',
            marginTop: 3,
          },

          tabBarActiveTintColor: '#2563eb',
          tabBarInactiveTintColor: '#94a3b8',

          tabBarIcon: ({ focused, color }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Users') {
              iconName = focused ? 'people' : 'people-outline';
            } else {
              iconName = focused ? 'menu' : 'menu-outline';
            }

            return (
              <Ionicons
                name={iconName}
                size={27}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />

        <Tab.Screen
          name="Users"
          component={UserStack}
        />

        <Tab.Screen
          name="More"
          component={HomeDrawer}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
