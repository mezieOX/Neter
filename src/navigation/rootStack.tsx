import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashStack, SplashStackParams} from './splashStack';
import {AuthStack, AuthStackParams} from './authStack';
import BottomTabStack, {BottomStackParams} from './bottomStack';

export type RootStackParams = {
  SplashStack: NavigatorScreenParams<SplashStackParams>;
  AuthStack: NavigatorScreenParams<AuthStackParams>;
  BottomStack: NavigatorScreenParams<BottomStackParams>;
};

const RootStack = createNativeStackNavigator<RootStackParams>();
export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="SplashStack" component={SplashStack} />
      <RootStack.Screen name="AuthStack" component={AuthStack} />
      <RootStack.Screen name="BottomStack" component={BottomTabStack} />
    </RootStack.Navigator>
  );
};
