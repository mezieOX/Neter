import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashStack, SplashStackParams} from './splashStack';
import {AuthStack, AuthStackParams} from './authStack';
import BottomTabStack, {BottomStackParams} from './bottomStack';
import {CryptoSellAndSwap} from '../Screens';
import {CollectionScreen} from '../Screens/collectionScreen/collectionScreen';
import {InviteFriendsScreen} from '../Screens/inviteFriends/InviteFriends';
import {ProfileScreen} from '../Screens/profileScreen/profileScreen';
import {NotificationScreen} from '../Screens/notificationScreen/notificationScreen';
import {SettingsScreen} from '../Screens/settingsScreen/settingsScreen';
import {ProfileInfoScreen} from '../Screens/profileInfoScreen/profileInfoScreen';
import {ChangePasswordScreen} from '../Screens/changePassword/changePassword';
import {SupportScreen} from '../Screens/supportScreen/supportScreen';
import {DerivativesScreen} from '../Screens/derivativesScreen/derivativesScreen';
import {TransactionScreen} from '../Screens/transactionScreen/transactionScreen';
import {ChangeLanguageScreen} from '../Screens/changeLanguageScreen/changeLanguageScreen';
import {TradingBotScreen} from '../Screens/tradingBotScreen/tradingBotScreen';
import {SavingScreen} from '../Screens/savingScreen/savingScreen';
import {SavingSuccessScreen} from '../Screens/savingScreen/savingSuccessScreen/savingSuccessScreen';

export type RootStackParams = {
  SplashStack: NavigatorScreenParams<SplashStackParams>;
  AuthStack: NavigatorScreenParams<AuthStackParams>;
  BottomStack: NavigatorScreenParams<BottomStackParams>;
  CryptoSellAndSwap: undefined;
  CollectionScreen: undefined;
  InviteFriendsScreen: undefined;
  ProfileScreen: undefined;
  SettingsScreen: undefined;
  NotificationScreen: undefined;
  ProfileInfoScreen: undefined;
  ChangePasswordScreen: undefined;
  SupportScreen: undefined;
  DerivativesScreen: undefined;
  TransactionScreen: undefined;
  ChangeLanguageScreen: undefined;
  TradingBotScreen: undefined;
  SavingScreen: undefined;
  SavingSuccessScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();
export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="SplashStack" component={SplashStack} />
      <RootStack.Screen name="AuthStack" component={AuthStack} />
      <RootStack.Screen name="BottomStack" component={BottomTabStack} />
      <RootStack.Screen
        name="CryptoSellAndSwap"
        component={CryptoSellAndSwap}
      />
      <RootStack.Screen name="CollectionScreen" component={CollectionScreen} />
      <RootStack.Screen
        name="InviteFriendsScreen"
        component={InviteFriendsScreen}
      />
      <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <RootStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <RootStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <RootStack.Screen
        name="ProfileInfoScreen"
        component={ProfileInfoScreen}
      />
      <RootStack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <RootStack.Screen name="SupportScreen" component={SupportScreen} />
      <RootStack.Screen
        name="DerivativesScreen"
        component={DerivativesScreen}
      />
      <RootStack.Screen
        name="TransactionScreen"
        component={TransactionScreen}
      />
      <RootStack.Screen
        name="ChangeLanguageScreen"
        component={ChangeLanguageScreen}
      />
      <RootStack.Screen name="TradingBotScreen" component={TradingBotScreen} />
      <RootStack.Screen name="SavingScreen" component={SavingScreen} />
      <RootStack.Screen
        name="SavingSuccessScreen"
        component={SavingSuccessScreen}
      />
    </RootStack.Navigator>
  );
};
