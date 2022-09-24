import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Report from '../screens/Report';
import AppLoader from '../screens/Loader';
import Home from '../screens/Home';
import ForgotPswd from '../screens/ForgotPassword';
import {useLogin} from './authpro';
import Leave from '../screens/Leave';
import ProfileEdit from '../screens/ProfileEdit';

const Stack = createNativeStackNavigator();

function AppNav() {
  const {loginPending} = useLogin();

  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Forgot" component={ForgotPswd} />
          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Leave" component={Leave} />
          <Stack.Screen name="Profile" component={ProfileEdit} />
        </Stack.Navigator>
      </NavigationContainer>
      {loginPending ? <AppLoader /> : null}
    </>
  );
}

export default AppNav;
