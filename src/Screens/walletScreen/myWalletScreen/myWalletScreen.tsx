import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {DarkScheme, LightScheme} from '../..';
import {ArrowDownIcon2, MyWalletWalletIcon} from '../../../../assets/svgIcons';
import {ThemeContext} from '../../../../App';
import {s as tw} from 'react-native-wind';

const ListItems = [
  {id: 1, title: 'Withdrawal', value: 'Confirmed'},
  {id: 2, title: 'Amount', value: '#3,000'},
  {id: 3, title: 'Date', value: '06-10-2023 09:58 PM'},
  {id: 4, title: 'Action', value: 'Paid'},
  {id: 5, title: 'Bitcoin', value: 'usuw-2903879nkewknf-3903'},
];

export const MyWalletScreen = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          tw`flex-row justify-center px-4 py-5  border-4 my-4 mx-4 rounded-3xl`,
          {
            borderColor:
              theme === 'light' ? LightScheme.primary : DarkScheme.primary,
            shadowOpacity: 0.9,
            shadowRadius: 10,
            shadowColor: LightScheme.primary,
            backgroundColor:
              theme === 'light'
                ? LightScheme.background
                : LightScheme.background,
            elevation: 3,
            shadowOffset: {height: 10, width: -10},
          },
        ]}>
        <View>
          <View style={tw`flex-row items-center`}>
            <Text
              style={[
                tw`text-base font-bold text-lg`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.iconColor
                      : DarkScheme.background,
                },
              ]}>
              Total Assets
            </Text>
            <Image
              resizeMode="contain"
              style={tw`w-8 h-8 ml-2`}
              source={
                theme === 'light'
                  ? require('../../../../assets/images/eye-fill.png')
                  : require('../../../../assets/images/eye-fill.png')
              }
            />
          </View>
          <View style={tw`flex-row items-center`}>
            <Text
              style={[
                tw`pt-4 text-4xl font-bold pr-2`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.iconColor
                      : DarkScheme.background,
                },
              ]}>
              205.34
            </Text>
            <Text
              style={[
                tw`px-1 pt-1 font-semibold text-xl`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.iconColor
                      : DarkScheme.background,
                },
              ]}>
              USD
            </Text>
            <ArrowDownIcon2 />
          </View>
          <Text
            style={[
              tw`py-2 text-lg font-semibold`,
              {
                color:
                  theme === 'light'
                    ? LightScheme.iconColor
                    : DarkScheme.background,
              },
            ]}>
            = 0.00034536 BTC
          </Text>
        </View>
      </View>
      <View style={tw`px-4 flex-row justify-between items-center`}>
        <Text
          style={[
            tw`text-xl text-center font-semibold border-2 py-4 rounded-xl`,
            {
              width: '45%',
              backgroundColor:
                theme === 'light'
                  ? LightScheme.background
                  : LightScheme.background,
              borderColor: LightScheme.primary,
              color:
                theme === 'light'
                  ? LightScheme.iconColor
                  : DarkScheme.background,
            },
          ]}>
          Withdraw
        </Text>
        <Text
          style={[
            tw`text-xl font-semibold  text-center border-2 py-4 rounded-xl`,
            {
              backgroundColor:
                theme === 'light'
                  ? LightScheme.background
                  : LightScheme.background,
              width: '45%',
              borderColor: LightScheme.primary,
              color:
                theme === 'light'
                  ? LightScheme.iconColor
                  : DarkScheme.background,
            },
          ]}>
          Swap
        </Text>
      </View>
      <View>
        <View
          style={[
            tw`text-xl font-semibold my-6 mx-4  px-4  text-center border-2 py-4 rounded-xl`,
            {
              borderColor: LightScheme.primary,
              color: theme === 'light' ? LightScheme.title : DarkScheme.title,
            },
          ]}>
          <View style={tw`flex-row justify-between`}>
            <View style={tw`flex-row items-center`}>
              <MyWalletWalletIcon />
              <Text
                style={[
                  tw`font-bold text-xl px-4`,
                  {
                    color:
                      theme === 'light' ? LightScheme.title : DarkScheme.title,
                  },
                ]}>
                Add Coin
              </Text>
            </View>
            <Image
              style={tw`w-11 h-11`}
              source={require('../../../../assets/images/add-icon.png')}
            />
          </View>
        </View>
        <View
          style={[
            tw`rounded-3xl mb-4 py-4`,
            {
              backgroundColor:
                theme === 'light' ? LightScheme.background : DarkScheme.dark100,
              marginLeft: theme === 'light' ? 0 : 20,
              marginRight: theme === 'light' ? 0 : 20,
            },
          ]}>
          <View style={tw`mx-4 flex-row items-center justify-between`}>
            <Text
              style={[
                tw`font-bold text-xl`,
                {
                  color:
                    theme === 'light' ? LightScheme.title : DarkScheme.title,
                },
              ]}>
              Transaction History
            </Text>
            <View>
              <Text
                style={[
                  tw`font-bold text-sm px-5 py-3 rounded-xl text-white`,
                  {
                    backgroundColor:
                      theme === 'light'
                        ? LightScheme.title
                        : DarkScheme.dark300,
                  },
                ]}>
                See all
              </Text>
            </View>
          </View>
          <View style={[tw`mx-4 flex-row py-5  items-center justify-between`]}>
            <Text
              style={[
                tw`text-sm uppercase`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.iconColor
                      : DarkScheme.iconColor,
                },
              ]}>
              Type
            </Text>
            <View>
              <Text
                style={[
                  tw`text-sm uppercase`,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.iconColor
                        : DarkScheme.iconColor,
                  },
                ]}>
                Status
              </Text>
            </View>
          </View>
          {ListItems.map(({id, title, value}) => (
            <View
              key={id}
              style={[tw`px-4 flex-row py-2  items-center justify-between`]}>
              <Text
                style={[
                  tw`text-sm uppercase`,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.iconColor
                        : DarkScheme.iconColor,
                  },
                ]}>
                {title}
              </Text>
              <View>
                <Text
                  style={[
                    tw`text-sm uppercase`,
                    {
                      color:
                        theme === 'light'
                          ? LightScheme.iconColor
                          : DarkScheme.iconColor,
                    },
                  ]}>
                  {value}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
