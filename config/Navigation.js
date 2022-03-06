import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from '../screen/Todo';
import Login from '../screen/Login';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen name="Todo App" component={Todo} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;