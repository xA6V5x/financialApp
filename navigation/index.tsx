import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TransactionsScreen from '../screens/TransactionsScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import FriendsScreen from '../screens/FriendsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
     return (
          <NavigationContainer
               linking={LinkingConfiguration}
               theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
          >
               <RootNavigator />
          </NavigationContainer>
     );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
     return (
          <Stack.Navigator>
               <Stack.Screen
                    name="Root"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
               />
          </Stack.Navigator>
     );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
     const colorScheme = useColorScheme();

     return (
          <BottomTab.Navigator
               initialRouteName="Transactions"
               screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme].tint,
                    tabBarShowLabel: false,
               }}
          >
               <BottomTab.Screen
                    name="Friends"
                    component={FriendsScreen}
                    options={({ navigation }: RootTabScreenProps<'Friends'>) => ({
                         title: 'Friends',
                         tabBarIcon: ({ color }) => (
                              <FontAwesome5 name="users" size={30} color={color} />
                         ),
                    })}
               />
               <BottomTab.Screen
                    name="Transactions"
                    component={TransactionsScreen}
                    options={({ navigation }: RootTabScreenProps<'Transactions'>) => ({
                         title: 'Transactions',
                         tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons
                                   name="swap-vertical"
                                   size={45}
                                   color={color}
                              />
                         ),
                    })}
               />

               <BottomTab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                         title: 'Profile',
                         tabBarIcon: ({ color }) => (
                              <FontAwesome5 name="user-alt" size={25} color={color} />
                         ),
                    }}
               />
          </BottomTab.Navigator>
     );
}
