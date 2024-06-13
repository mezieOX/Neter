import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {ThemeContext} from '../../../App';
import {DarkScheme, LightScheme} from '..';
import {TopSection} from '../../components';

const ListItems = [
  {id: 1, image: require('../../../assets/images/d-btc.png')},
  {id: 2, image: require('../../../assets/images/d-ada.png')},
  {id: 3, image: require('../../../assets/images/d-eth.png')},
  {id: 4, image: require('../../../assets/images/d-usdt.png')},
];

export const DerivativesScreen = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={[
        tw`flex-1 pr-2`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection settingsIcon={true} title="Derivatives" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {ListItems.map(({id, image}) => (
          <View key={id} style={tw`px-4`}>
            <View style={tw`flex-row justify-between items-center`}>
              <View style={[tw`flex-row items-center  flex-1`]}>
                <Image
                  style={tw`w-20 h-24 mr-4`}
                  resizeMode="contain"
                  source={image}
                />
                <View>
                  <Text
                    style={[
                      tw`text-black text-base font-semibold`,
                      {
                        color:
                          theme === 'light'
                            ? LightScheme.title
                            : DarkScheme.title,
                      },
                    ]}>
                    24H Change
                  </Text>
                  <Text
                    style={[
                      tw`font-bold text-base`,
                      {color: 'rgba(68, 241, 7, 1)'},
                    ]}>
                    +22.43%
                  </Text>
                </View>
              </View>
              <Text
                style={[
                  tw`font-semibold py-3 px-2 rounded-lg border`,
                  {
                    backgroundColor:
                      theme === 'light' ? LightScheme.title : DarkScheme.title,

                    color:
                      theme === 'light'
                        ? LightScheme.background
                        : DarkScheme.background,
                  },
                ]}>
                Trade Now
              </Text>
            </View>
            <View style={tw`flex-row py-2  justify-between`}>
              <View style={tw`flex-row items-center`}>
                <Text
                  style={[
                    tw`text-black text-base font-bold`,
                    {
                      color:
                        theme === 'light'
                          ? LightScheme.title
                          : DarkScheme.title,
                    },
                  ]}>
                  Price
                </Text>
                <Text
                  style={[
                    tw`text-black text-2xl mx-4 font-bold`,
                    {
                      color:
                        theme === 'light'
                          ? LightScheme.title
                          : DarkScheme.title,
                    },
                  ]}>
                  0
                </Text>
              </View>
              <View style={tw`flex-column items-end justify-start`}>
                <Text
                  style={[
                    tw`text-black text-base font-bold`,
                    {
                      color:
                        theme === 'light'
                          ? LightScheme.title
                          : DarkScheme.title,
                    },
                  ]}>
                  24H Volume
                </Text>
                <Text
                  style={[
                    tw`text-black text-lg self-start justify-start mx-4 font-bold`,
                    {
                      color:
                        theme === 'light'
                          ? LightScheme.title
                          : DarkScheme.title,
                    },
                  ]}>
                  3.156M
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
