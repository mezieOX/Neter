import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {DarkScheme, LightScheme} from '..';
import {ThemeContext} from '../../../App';
import {TopSection} from '../../components';
import {TradingIconIndicator} from '../../../assets/svgIcons';

const ListItems = [
  {
    id: 1,
    type: 'USDT',
    num: '10X',
    vol: '675.02M',
    loss: '47.804.73',
    gain: '₦47.804.73',
    profit: true,
    percent: 4.12,
  },
  {
    id: 2,
    type: 'LTC',
    num: '10X',
    vol: '675.02M',
    loss: '4.145.72',
    gain: '₦47.804.73',
    profit: false,
    percent: 3.12,
  },
  {
    id: 9,
    type: 'ETH',
    num: '10X',
    vol: '675.02M',
    loss: '47.804.73',
    gain: '₦47.804.73',
    profit: false,
    percent: 2.12,
  },
  {
    id: 3,
    type: 'XRP',
    num: '10X',
    vol: '675.02M',
    loss: '4.145.72',
    gain: '₦47.804.73',
    profit: true,
    percent: 3.12,
  },
  {
    id: 4,
    type: 'BCH',
    num: '10X',
    vol: '675.02M',
    loss: '47.804.73',
    gain: '₦4.145.72',
    profit: true,
    percent: 0.12,
  },
  {
    id: 5,
    type: 'XRP',
    num: '10X',
    vol: '675.02M',
    loss: '0.00003522',
    gain: '₦1.862300',
    profit: false,
    percent: 345.12,
  },
  {
    id: 6,
    type: 'BCH',
    num: '10X',
    vol: '675.02M',
    loss: '47.804.73',
    gain: '₦11.247',
    profit: true,
    percent: 23.12,
  },
  {
    id: 7,
    type: 'COIN',
    num: '10X',
    vol: '675.02M',
    loss: '154.4',
    gain: '₦455.70',
    profit: true,
    percent: 67.12,
  },
  {
    id: 8,
    type: 'USDT',
    num: '10X',
    vol: '675.02M',
    loss: '47.804.73',
    gain: '₦47.804.73',
    profit: false,
    percent: 3.12,
  },
];

export const MarketsScreen = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={[
        tw`flex-1 `,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection title="Markets" />
      <View style={tw`flex-row px-4 items-center`}>
        <Text
          style={[
            tw`uppercase text-white py-1 px-4 text-lg`,
            {backgroundColor: '#0A352C'},
          ]}>
          Spot
        </Text>
        <Text
          style={[
            tw`text-lg px-8`,
            {
              color:
                theme === 'light'
                  ? LightScheme.iconColor
                  : DarkScheme.iconColor,
            },
          ]}>
          Futures
        </Text>
      </View>
      <View style={tw`px-4 pt-8 pb-4 flex-row items-center justify-between`}>
        <Text
          style={[
            tw``,
            {
              color:
                theme === 'light'
                  ? LightScheme.iconColor
                  : DarkScheme.iconColor,
            },
          ]}>
          Name &nbsp;
          <TradingIconIndicator /> / Vol &nbsp;
          <TradingIconIndicator />
        </Text>
        <Text
          style={[
            tw``,
            {
              color:
                theme === 'light'
                  ? LightScheme.iconColor
                  : DarkScheme.iconColor,
            },
          ]}>
          Last Price &nbsp;
          <TradingIconIndicator />
        </Text>
        <Text
          style={[
            tw``,
            {
              color:
                theme === 'light'
                  ? LightScheme.iconColor
                  : DarkScheme.iconColor,
            },
          ]}>
          24h Change{' '}
        </Text>
      </View>

      <ScrollView style={tw`px-4 py-6`} showsVerticalScrollIndicator={false}>
        {ListItems.map(({id, gain, loss, num, profit, type, vol, percent}) => (
          <View key={id} style={tw`flex-row justify-between items-center mb-8`}>
            <View style={tw`flex-column items-start`}>
              <Text
                style={[
                  tw``,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.iconColor
                        : DarkScheme.iconColor,
                  },
                ]}>
                {type} &nbsp; /{' '}
                <Text style={[tw``, {color: LightScheme.primary}]}>{num}</Text>{' '}
                &nbsp;
              </Text>
              <Text
                style={[
                  tw``,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.iconColor
                        : DarkScheme.iconColor,
                  },
                ]}>
                Vol &nbsp;{vol}
              </Text>
            </View>
            <View>
              <View style={tw`flex-column items-start`}>
                <Text
                  style={[
                    tw`font-bold`,
                    {
                      color:
                        theme === 'light' ? LightScheme.red : DarkScheme.red,
                    },
                  ]}>
                  {loss}
                </Text>
                <Text
                  style={[
                    tw``,
                    {
                      color:
                        theme === 'light'
                          ? LightScheme.iconColor
                          : DarkScheme.iconColor,
                    },
                  ]}>
                  {gain}
                </Text>
              </View>
            </View>
            <View
              style={[
                tw`w-1/3 flex-row items-center justify-center rounded-sm`,
                {
                  backgroundColor: profit
                    ? LightScheme.red
                    : LightScheme.boldGreen,
                },
              ]}>
              <Text style={tw`text-white font-bold text-lg py-2.5`}>
                -{percent}%
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
