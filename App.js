import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';
import ExpenseTrackerScreen from './ExpenseTrackerScreen';
import DurationSelectionScreen from './DurationSelectionScreen';
import TrendAnalysisScreen from './TrendAnalysisScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="ExpenseTrackerScreen" component={ExpenseTrackerScreen} options={{ title: 'Expense Tracker' }} />
        <Stack.Screen name="DurationSelectionScreen" component={DurationSelectionScreen} options={{ title: 'Select Duration' }} />
        <Stack.Screen name="TrendAnalysisScreen" component={TrendAnalysisScreen} />
  </Stack.Navigator>
  </NavigationContainer>
);
};

export default App;
