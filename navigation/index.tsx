/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
     return (
          <Stack.Navigator>
               <Stack.Screen
                    name="Root"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
               />
               <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="Modal" component={ModalScreen} />
               </Stack.Group>
          </Stack.Navigator>
     );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
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

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
     name: React.ComponentProps<typeof FontAwesome>['name'];
     color: string;
}) {
     return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
