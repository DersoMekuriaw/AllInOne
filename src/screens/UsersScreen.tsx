import React from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { UsersStackParamList } from '../types/navigation';
import { User } from '../types/user';

type Props = NativeStackScreenProps<
  UsersStackParamList,
  'UsersList'
>;

const users: User[] = [
  { id: 1, name: 'Abebe Kebede', email: 'abebe@gmail.com' },
  { id: 2, name: 'Mekdes Alemu', email: 'mekdes@gmail.com' },
  { id: 3, name: 'Dawit Tadesse', email: 'dawit@gmail.com' },
  { id: 4, name: 'Hana Bekele', email: 'hana@gmail.com' },
];

export default function UsersScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>

      {/* New User Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NewUser')}
      >
        <Text style={styles.buttonText}>+ New User</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>
        Registered Users
      </Text>

      {/* Users List */}
      <ScrollView>
        {users.map((user) => (
          <TouchableOpacity
            key={user.id}
            style={styles.userRow}
            onPress={() =>
              navigation.navigate('UserDetails', { user })
            }
          >
            <View>
              <Text style={styles.name}>
                {user.name}
              </Text>

              <Text style={styles.email}>
                {user.email}
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8fafc',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  userRow: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    color: '#64748b',
    marginTop: 5,
  },
  arrow: {
    fontSize: 25,
    color: '#2563eb',
  },
});