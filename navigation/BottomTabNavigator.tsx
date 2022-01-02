import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import ClassesScreen from '../screens/ClassesScreen';
import MoreScreen from '../screens/MoreScreen';
import TTScreen from '../screens/TimetableScreen'
import AssignmentScreen from '../screens/AssignmentScreen'
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  ClassesParamList,
  MoreParamList
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, showLabel: false }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
      <BottomTab.Screen
        name="Classes"
        component={ClassesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="airplay" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreNavigator}
        options={({ route }) => {
          let show = false
          if (!getFocusedRouteNameFromRoute(route) || (getFocusedRouteNameFromRoute(route) === 'MoreScreen'))
            show = true
          else show = false
          return ({
            tabBarIcon: ({ color }) => <TabBarIcon name="grid" color={color} />,
            tabBarVisible: show
          })
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Feather>['name']; color: string }) {
  return <Feather size={25} style={{ marginBottom: -2 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={TabOneScreen}
        options={{ headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="NotificationsScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Notifications', headerTitleAlign: 'center' }}
      />
    </TabTwoStack.Navigator>
  );
}

const ClassesStack = createStackNavigator<ClassesParamList>();

const ClassesNavigator = () => (
  <ClassesStack.Navigator>
    <ClassesStack.Screen
      name="ClassesScreen"
      component={ClassesScreen}
      options={{ headerTitle: 'Online Classes', headerTitleAlign: 'center' }}
    />
  </ClassesStack.Navigator>
)

const MoreStack = createStackNavigator<MoreParamList>();

const MoreNavigator = () => (
  <MoreStack.Navigator>
    <MoreStack.Screen
      name="MoreScreen"
      component={MoreScreen}
      options={{ headerTitle: 'More', headerTitleAlign: 'center' }}
    />
    <MoreStack.Screen
      name="TimetableScreen"
      component={TTScreen}
      options={{ headerTitle: 'Timetable', headerTitleAlign: 'center' }}
    />
    <MoreStack.Screen
      name="AssignmentScreen"
      component={AssignmentScreen}
      options={{ headerTitle: 'Assignments', headerTitleAlign: 'center' }}
    />
  </MoreStack.Navigator>
)