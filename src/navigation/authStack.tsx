import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  VerificationScreen,
  VerificationConfirmScreen,
  RegisterScreen,
  TwoFactorAuth,
} from '../Screens';

export type AuthStackParams = {
  LoginScreen: undefined;
  VerificationScreen: undefined;
  VerificationConfirmScreen: undefined;
  RegisterScreen: undefined;
  TwoFactorAuth: undefined;
};

const AuthStacks = createNativeStackNavigator<AuthStackParams>();
export const AuthStack = () => {
  return (
    <AuthStacks.Navigator screenOptions={{headerShown: false}}>
      <AuthStacks.Screen name="RegisterScreen" component={RegisterScreen} />
      <AuthStacks.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStacks.Screen
        name="VerificationScreen"
        component={VerificationScreen}
      />
      <AuthStacks.Screen
        name="VerificationConfirmScreen"
        component={VerificationConfirmScreen}
      />
      <AuthStacks.Screen name="TwoFactorAuth" component={TwoFactorAuth} />
    </AuthStacks.Navigator>
  );
};
