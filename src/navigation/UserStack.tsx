import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UsersStackParamList } from '../types/navigation';

import UsersScreen from '../screens/UsersScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import NewUserScreen from '../screens/NewUserScreen';

const Stack = createNativeStackNavigator<UsersStackParamList>();

export default function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UsersList"
        component={UsersScreen}
        options={{ title: 'Users' }}
      />

      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{ title: 'User Details' }}
      />

      <Stack.Screen
        name="NewUser"
        component={NewUserScreen}
        options={{ title: 'Register New User' }}
      />
    </Stack.Navigator>
  );
}