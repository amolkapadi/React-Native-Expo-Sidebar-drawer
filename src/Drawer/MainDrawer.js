import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../Component/Dashboard';
import Profile from '../Component/Profile';
import Help from '../Component/Help';
import Profit from '../Component/Profit';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native'; 
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const DashboardIcon =({focused, color, size})=><Ionicons name='md-speedometer' size={size} color={color} />
const ProfileIcon =({focused, color, size})=><Ionicons name='md-person' size={size} color={color} />
const HelpdIcon =({focused, color, size})=><Ionicons name='md-refresh-circle' size={size} color={color} />
const ProfitIcon =({focused, color, size})=><Ionicons name='md-cart' size={size} color={color} />


const MainDrawer = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainDashboard">
        {() => (
          <Drawer.Navigator 
          screenOptions={{
            drawerStyle:{
              backgroundColor:'yellow',   //change bg color
              width:230    //change width of sidebar 
            }
          }}
          >
            <Drawer.Screen name="Dashboard" component={Dashboard} options={{ drawerIcon: DashboardIcon }} />
            <Drawer.Screen name="Profile" component={Profile} options={{ drawerIcon: ProfileIcon }} />
            <Drawer.Screen name="Help" component={Help} options={{ drawerIcon: HelpdIcon }} />
            <Drawer.Screen name="Profit" component={Profit} options={{ drawerIcon: ProfitIcon }} />
          </Drawer.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>

  );
};

export default MainDrawer;
