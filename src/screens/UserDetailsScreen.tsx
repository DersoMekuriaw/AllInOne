import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { UsersStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<
  UsersStackParamList,
  'UserDetails'
>;

export default function UserDetailsScreen({ route }: Props) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        User Information
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          ID: {user.id}
        </Text>

        <Text style={styles.label}>
          Name: {user.name}
        </Text>

        <Text style={styles.label}>
          Email: {user.email}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 17,
    marginBottom: 15,
  },
});