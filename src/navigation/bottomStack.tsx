import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeIcon} from '../../assets/svgIcons/home-icon';
import {DarkScheme, HomeScreen, LightScheme, TradeScreen} from '../Screens';
import {ThemeContext} from '../../App';
import {
  MarketsIcon,
  NftIcon,
  TradeIcon,
  WalletIcon,
} from '../../assets/svgIcons';
import {MarketsScreen} from '../Screens/marketsScreen/marketsScreen';
import {WalletScreen} from '../Screens/walletScreen/walletScreen';
import {NftScreen} from '../Screens/nftScreen/nftScreen';

export type BottomStackParams = {
  HomeScreen: undefined;
  TradeScreen: undefined;
  MarketsScreen: undefined;
  WalletScreen: undefined;
  NFTScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomStackParams>();

const BottomTabStack = () => {
  const {theme} = React.useContext(ThemeContext);

  const homeIcon = (focused: boolean) => <HomeIcon isActive={focused} />;
  const tradeIcon = (focused: boolean) => <TradeIcon isActive={focused} />;
  const marketsIcon = (focused: boolean) => <MarketsIcon isActive={focused} />;
  const walletIcon = (focused: boolean) => <WalletIcon isActive={focused} />;
  const NFTIcon = (focused: boolean) => <NftIcon isActive={focused} />;

  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) => {
            const {options} = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({focused, color, size: 24});
            }

            return null;
          }}
          getLabelText={({route}) => {
            const {options} = descriptors[route.key];
            const label = options.tabBarLabel;
            return label as string;
          }}
          activeColor={'#F7A701'}
          inactiveColor={'#898A8D'}
          activeIndicatorStyle={{
            width: 0,
            height: 4,
          }}
          style={{
            backgroundColor:
              theme === 'light'
                ? LightScheme.background
                : DarkScheme.background,
            shadowOpacity: 0.9,
            shadowRadius: 4,
            shadowColor: '#c3c3c3',
            elevation: 20,
            shadowOffset: {height: 6, width: 6},
            borderTopWidth: 1,
            borderTopColor: '#B1B2B5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      )}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => homeIcon(focused),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="MarketsScreen"
        component={MarketsScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => marketsIcon(focused),
          tabBarLabel: 'Markets',
        }}
      />
      <Tab.Screen
        name="TradeScreen"
        component={TradeScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => tradeIcon(focused),
          tabBarLabel: 'Trade',
        }}
      />
      <Tab.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => walletIcon(focused),
          tabBarLabel: 'Wallet',
        }}
      />
      <Tab.Screen
        name="NFTScreen"
        component={NftScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => NFTIcon(focused),
          tabBarLabel: 'NFT',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
