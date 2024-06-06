import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WaitScreen} from '../Screens';
import GetStartedScreen from '../Screens/getStartedScreen/getStartedScreen';
import {GetStaredPhraseTwo} from '../Screens/getStartedScreen/getStartedPharseTwo/getStartedPharseTwo';

export type SplashStackParams = {
  WaitScreen: undefined;
  GetStartedScreen: undefined;
  GetStaredPhraseTwo: undefined;
};

const SplashStacks = createNativeStackNavigator<SplashStackParams>();
export const SplashStack = () => {
  return (
    <SplashStacks.Navigator screenOptions={{headerShown: false}}>
      <SplashStacks.Screen name="WaitScreen" component={WaitScreen} />
      <SplashStacks.Screen
        name="GetStartedScreen"
        component={GetStartedScreen}
      />
      <SplashStacks.Screen
        name="GetStaredPhraseTwo"
        component={GetStaredPhraseTwo}
      />
    </SplashStacks.Navigator>
  );
};
