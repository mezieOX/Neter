import React, {useContext, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from '../../../App';
import {s as tw} from 'react-native-wind';
import {DarkScheme, LightScheme} from '..';
import {Button, TopSection, TwoFactorInputComp} from '../../components';
import {
  WalletFundIcon,
  WalletFundMyAccountIcon,
  WalletSelectCardIcon,
} from '../../../assets/svgIcons';
import {PayoutIcon} from '../../../assets/svgIcons/payout-icon';
import {WalletCardDetails} from './walletCardDetails/walletCardDetails';
import {INavigationSetting} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {CardAddedSuccessfully} from './cardAddedSuccessfully/cardAddedSuccessfully';
import {MyWalletScreen} from './myWalletScreen/myWalletScreen';

export const WalletScreen = () => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation<INavigationSetting>();

  const [active, setActive] = useState({
    myWallet: true,
    fundMyWallet: false,
    payout: false,
    enterCardPin: false,
    cardAddedSuccessfully: false,
  });

  const ListItems = [
    {
      id: 1,
      icon: WalletFundIcon,
      text: 'My Wallet',
      setActiveState: {
        myWallet: true,
        value: active.myWallet,
      },
    },
    {
      id: 2,
      icon: WalletFundMyAccountIcon,
      text: 'Fund My Account',
      setActiveState: {
        fundMyWallet: true,
        value: active.fundMyWallet,
      },
    },
    {
      id: 3,
      icon: PayoutIcon,
      text: 'Payout',
      setActiveState: {
        payout: true,
        value: active.payout,
      },
    },
  ];

  return (
    <View
      style={[
        tw`flex-1 `,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection title="Wallet" searchIcon={false} />
      <View style={tw`flex-row justify-between items-center px-4`}>
        {ListItems.map(({id, icon: Icon, text, setActiveState}) => (
          <TouchableOpacity
            onPress={() => setActive(setActiveState as any)}
            key={id}
            style={tw`flex-column items-center`}>
            <Icon isActive={setActiveState.value} />
            <Text
              style={[
                tw`font-bold py-4`,
                {
                  color:
                    theme === 'light' ? LightScheme.title : DarkScheme.title,
                },
                {
                  color: setActiveState.value && LightScheme.primary,
                },
              ]}>
              {text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {active.myWallet ? <MyWalletScreen /> : null}

        {active.fundMyWallet ? (
          <>
            <View
              style={tw`px-4 flex-row justify-center pb-7 pt-10 items-center`}>
              <Text
                style={[
                  tw`font-bold text-3xl pr-4`,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.bolderGray
                        : DarkScheme.title,
                  },
                ]}>
                Select Card
              </Text>
              <WalletSelectCardIcon />
            </View>
            <TouchableOpacity
              onPress={() =>
                setActive({
                  myWallet: false,
                  fundMyWallet: false,
                  payout: false,
                  cardAddedSuccessfully: false,
                  enterCardPin: true,
                })
              }
              style={tw`px-4`}>
              <Image
                style={tw`h-52 w-full`}
                resizeMode="contain"
                source={require('../../../assets/images/visa-card-wallet.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setActive({
                  myWallet: false,
                  cardAddedSuccessfully: false,
                  fundMyWallet: false,
                  payout: false,
                  enterCardPin: true,
                })
              }
              style={tw`px-4`}>
              <Image
                style={tw`h-48 w-full`}
                resizeMode="contain"
                source={require('../../../assets/images/master-card-wallet.png')}
              />
            </TouchableOpacity>
          </>
        ) : null}
        {active.enterCardPin ? (
          <WalletCardDetails setActive={setActive} />
        ) : null}
        {active.payout ? (
          <View
            style={[
              tw`rounded-3xl mb-4 py-4`,
              {
                backgroundColor:
                  theme === 'light'
                    ? LightScheme.background
                    : DarkScheme.dark100,
                marginLeft: theme === 'light' ? 0 : 20,
                marginRight: theme === 'light' ? 0 : 20,
              },
            ]}>
            <View
              style={[
                tw`flex-row justify-center mt-12 rounded-xl mb-6 py-8 mx-4`,
                {
                  backgroundColor:
                    theme === 'light'
                      ? LightScheme.blackGray
                      : DarkScheme.blackGray,
                },
              ]}>
              <Text
                style={[
                  tw`font-bold text-3xl`,
                  {
                    backgroundColor:
                      theme === 'light'
                        ? LightScheme.dark400
                        : DarkScheme.dark400,
                    color:
                      theme === 'light' ? LightScheme.title : DarkScheme.title,
                  },
                ]}>
                205.34 USTD
              </Text>
            </View>
            <View style={tw`mx-4`}>
              <TwoFactorInputComp
                placeholder="Enter an amount"
                wallet={true}
                label="Amount"
              />
              <TwoFactorInputComp
                label="Choose wallet"
                wallet={true}
                placeholder="Bitcoin"
              />
              <TwoFactorInputComp
                label="Wallet ID"
                wallet={true}
                placeholder="xxxxxxxx"
              />

              <View style={tw`py-10`}>
                <Button
                  onPress={() => navigation.navigate('CryptoSellAndSwap')}
                  title={'Submit'}
                  roundedFull
                />
              </View>
            </View>
          </View>
        ) : null}
        {active.cardAddedSuccessfully ? (
          <CardAddedSuccessfully setActive={setActive} />
        ) : null}
      </ScrollView>
    </View>
  );
};
