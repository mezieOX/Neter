import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Button, TopSection} from '../../components';
import {s as tw} from 'react-native-wind';
import {DarkScheme, LightScheme} from '..';
import {ThemeContext} from '../../../App';
import {ArrowFillDownIcon} from '../../../assets/svgIcons';
import {INavigationSetting} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';

export const CryptoSellAndSwap = () => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View
      style={[
        tw`flex-1 `,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection title="Swap Crypto" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={[
            tw`font-bold text-3xl px-4`,
            {
              color: theme === 'light' ? LightScheme.title : DarkScheme.title,
            },
          ]}>
          Choose your crypto
        </Text>
        <View
          style={[
            tw`flex-row justify-between items-center py-6 m-4 pr-5`,
            {
              backgroundColor:
                theme === 'light' ? LightScheme.gray100 : DarkScheme.gray100,
            },
          ]}>
          <View style={tw`flex-row justify-between items-center`}>
            <Image
              resizeMode="contain"
              style={tw`h-10 w-10 mx-4`}
              source={require('../../../assets/images/crypto-swap-eth.png')}
            />
            <Text
              style={[
                tw`font-bold text-2xl`,
                {
                  color:
                    theme === 'light' ? LightScheme.title : DarkScheme.title,
                },
              ]}>
              ETH
            </Text>
          </View>
          <ArrowFillDownIcon />
        </View>
        <Text
          style={[
            tw`font-bold text-xl px-4`,
            {
              color: theme === 'light' ? LightScheme.title : DarkScheme.title,
            },
          ]}>
          Amount
        </Text>
        <View
          style={[
            tw`flex-row justify-between items-center py-6 m-4 pr-5`,
            {
              backgroundColor:
                theme === 'light' ? LightScheme.gray100 : DarkScheme.gray100,
            },
          ]}>
          <View style={tw`flex-row justify-between items-center`}>
            <Image
              resizeMode="contain"
              style={tw`h-10 w-10 mx-4`}
              source={require('../../../assets/images/crypto-swap-eth.png')}
            />
            <Text
              style={[
                tw`font-bold text-2xl`,
                {
                  color:
                    theme === 'light' ? LightScheme.title : DarkScheme.title,
                },
              ]}>
              ETH
            </Text>
          </View>
          <Text
            style={[
              tw`font-semibold text-lg`,
              {
                color: theme === 'light' ? LightScheme.title : DarkScheme.title,
              },
            ]}>
            0.0000
            <Text
              style={[
                tw`font-bold text-lg`,
                {
                  color:
                    theme === 'light' ? LightScheme.title : DarkScheme.title,
                },
              ]}>
              32.157
            </Text>
          </Text>
        </View>
        <Text
          style={[
            tw`font-semibold text-lg px-4`,
            {
              color: theme === 'light' ? LightScheme.title : DarkScheme.title,
            },
          ]}>
          Available Balance:{' '}
          <Text
            style={[
              tw`font-bold text-lg`,
              {
                color: theme === 'light' ? LightScheme.title : DarkScheme.title,
              },
            ]}>
            1,247.30 USDT
          </Text>
        </Text>
        <View style={tw`flex-row justify-center my-5`}>
          <Image
            resizeMode="contain"
            style={tw`h-16 w-16 mx-4`}
            source={require('../../../assets/images/transact.png')}
          />
        </View>
        <View
          style={[
            tw`flex-row justify-between items-center py-6 m-4 pr-4`,
            {
              backgroundColor:
                theme === 'light' ? LightScheme.gray100 : DarkScheme.gray100,
            },
          ]}>
          <View style={tw`flex-row justify-between items-center`}>
            <Image
              resizeMode="contain"
              style={tw`h-10 w-10 mx-4`}
              source={require('../../../assets/images/transact-btc.png')}
            />
            <Text
              style={[
                tw`font-bold text-2xl`,
                {
                  color:
                    theme === 'light' ? LightScheme.title : DarkScheme.title,
                },
              ]}>
              BTC
            </Text>
          </View>
          <ArrowFillDownIcon />
        </View>
        <Text
          style={[
            tw`font-bold text-xl px-4`,
            {
              color: theme === 'light' ? LightScheme.title : DarkScheme.title,
            },
          ]}>
          Amount
        </Text>
        <View
          style={[
            tw`flex-row justify-between items-center py-6 m-4 pr-5`,
            {
              backgroundColor:
                theme === 'light' ? LightScheme.gray100 : DarkScheme.gray100,
            },
          ]}>
          <View style={tw`flex-row justify-between items-center`}>
            <Image
              resizeMode="contain"
              style={tw`h-10 w-10 mx-4`}
              source={require('../../../assets/images/transact-btc.png')}
            />
            <Text
              style={[
                tw`font-bold text-2xl`,
                {
                  color:
                    theme === 'light' ? LightScheme.title : DarkScheme.title,
                },
              ]}>
              BTC
            </Text>
          </View>
          <Text
            style={[
              tw`font-semibold text-lg`,
              {
                color: theme === 'light' ? LightScheme.title : DarkScheme.title,
              },
            ]}>
            0.0000
            <Text
              style={[
                tw`font-bold text-lg`,
                {
                  color:
                    theme === 'light' ? LightScheme.title : DarkScheme.title,
                },
              ]}>
              32.157
            </Text>
          </Text>
        </View>
        <View style={tw`py-10 px-4`}>
          <Button
            onPress={() =>
              navigation.navigate('BottomStack', {screen: 'HomeScreen'})
            }
            title={'Confirm'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
