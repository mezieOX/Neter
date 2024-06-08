import React, {useContext, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {ThemeContext} from '../../../App';
import {DarkScheme, LightScheme} from '..';
import {Button, TopSection} from '../../components';

const ListItems = [
  {
    id: 1,
    value: require('../../../assets/images/trade-btc.png'),
    darkBackgroundImage: require('../../../assets/images/trade-btc.png'),
  },
  {
    id: 2,
    value: require('../../../assets/images/trade-ada.png'),
    darkBackgroundImage: require('../../../assets/images/black-ada.png'),
  },
  {
    id: 3,
    value: require('../../../assets/images/trade-eth.png'),
    darkBackgroundImage: require('../../../assets/images/black-eth.png'),
  },
  {
    id: 5,
    value: require('../../../assets/images/trade-busd.png'),
    darkBackgroundImage: require('../../../assets/images/black-busd.png'),
  },
];

const TabValues = [
  {
    id: 1,
    title: '15m',
  },
  {
    id: 2,
    title: '1h',
  },
  {
    id: 3,
    title: '4h',
  },
  {
    id: 4,
    title: '12h',
  },
  {
    id: 5,
    title: '1d',
  },
];

export const TradeScreen = () => {
  const {theme} = useContext(ThemeContext);
  const [active, setActive] = useState<number>(1);

  return (
    <View
      style={[
        tw`flex-1 `,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection title="Trade" />
      <ScrollView>
        <ScrollView
          style={tw`px-2`}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {ListItems.map(({id, value, darkBackgroundImage}) => (
            <Image
              style={tw`h-24 w-20 mx-2`}
              key={id}
              source={theme === 'light' ? value : darkBackgroundImage}
            />
          ))}
        </ScrollView>
        <View style={tw`px-4 pt-8 flex-row justify-between`}>
          <Text
            style={[
              tw`text-xl`,
              {
                color: theme === 'light' ? LightScheme.title : DarkScheme.title,
              },
            ]}>
            BTCUSDT
          </Text>
          <Text
            style={[
              tw`rounded-full py-2 px-3 text-black font-bold`,
              {
                backgroundColor: LightScheme.lightGreen,
              },
            ]}>
            1.76%
          </Text>
        </View>
        <View style={tw`px-4 py-2 flex-row justify-between items-center`}>
          <Text
            style={[
              tw`text-4xl`,
              {
                color: theme === 'light' ? LightScheme.title : DarkScheme.title,
              },
            ]}>
            61,228.00
          </Text>
          <View>
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
              24 High
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
              24 Low
            </Text>
          </View>
        </View>
        <View
          style={[
            tw`rounded-full my-2 flex-row justify-between px-1 mx-4 items-center`,
            {
              backgroundColor:
                theme === 'light'
                  ? LightScheme.tabBackgroundColor
                  : DarkScheme.tabBackgroundColor,
            },
          ]}>
          {TabValues.map(({id, title}) => (
            <>
              {theme === 'light' ? (
                <Text
                  key={id}
                  onPress={() => setActive(id)}
                  style={[
                    tw`w-1/6 my-1 text-center py-2 shadow-xl px-1 font-bold rounded-full`,
                    {
                      color:
                        theme === 'light'
                          ? LightScheme.title
                          : DarkScheme.title,
                      backgroundColor:
                        id === active
                          ? LightScheme.background
                          : DarkScheme.tabColor,
                    },
                  ]}>
                  {title}
                </Text>
              ) : (
                <Text
                  key={id}
                  onPress={() => setActive(id)}
                  style={[
                    tw`w-1/6 my-1 text-center py-2 shadow-xl px-1 font-bold rounded-full`,
                    {
                      color:
                        theme === 'light'
                          ? LightScheme.title
                          : DarkScheme.title,
                      backgroundColor:
                        id === active
                          ? DarkScheme.background
                          : DarkScheme.tabBackgroundColor,
                    },
                  ]}>
                  {title}
                </Text>
              )}
            </>
          ))}
        </View>
        <View style={tw`px-4 py-6`}>
          <Image
            resizeMode="contain"
            style={tw`w-full h-60`}
            source={require('../../../assets/images/chart.png')}
          />
        </View>
        <View
          style={tw`px-4 pt-20 pb-6 w-full justify-between items-center flex-row`}>
          <View style={[tw``, {width: '45%'}]}>
            <Button onPress={() => {}} title={'Buy'} />
          </View>
          <View style={[tw``, {width: '45%'}]}>
            <Button onPress={() => {}} title={'Sell'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
