import { NavigatorScreenParams } from '@react-navigation/native';
import { User } from './user';

// Users Stack Navigation
export type UsersStackParamList = {
  UsersList: undefined;
  UserDetails: {
    user: User;
  };
  NewUser: undefined;
};

// Drawer Navigation
export type HomeDrawerParamList = {
  Dashboard: undefined;
  Profile: undefined;
  Settings: undefined;
  About: undefined;
};

// Bottom Tab Navigation
export type TabParamList = {
  Home: undefined;
  Users: NavigatorScreenParams<UsersStackParamList>;
  More: NavigatorScreenParams<HomeDrawerParamList>;
};