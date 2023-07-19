import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../Component/Dashboard';
import Profile from '../Component/Profile';
import Help from '../Component/Help';
import Profit from '../Component/Profit';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



const MainDrawer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
     
        <Stack.Screen name="MainDashboard" >
          {() => (
            
            <Drawer.Navigator >
              <Drawer.Screen name="Dashboard" component={Dashboard}  />
              <Drawer.Screen name="Profile" component={Profile} />
              <Drawer.Screen name="Help" component={Help} />
              <Drawer.Screen name="Profit" component={Profit} />
            </Drawer.Navigator>
          
          )}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default MainDrawer;
