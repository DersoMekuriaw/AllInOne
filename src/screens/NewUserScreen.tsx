import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { UsersStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<
  UsersStackParamList,
  'NewUser'
>;

export default function NewUserScreen({ navigation }: Props) {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSave = () => {

    if (!name.trim() || !email.trim()) {
      Alert.alert(
        'Validation Error',
        'Please fill in all fields.'
      );

      return;
    }

    Alert.alert(
      'Success',
      'User registered successfully!'
    );

    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Full Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter full name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email Address</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Button
        title="Save User"
        onPress={handleSave}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 6,
  },
});