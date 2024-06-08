import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {TopSection} from '../../components';
import {DarkScheme, LightScheme} from '..';
import React, {useContext, useState} from 'react';
import {s as tw} from 'react-native-wind';
import {ThemeContext} from '../../../App';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';

const TabValues = [
  {
    id: 1,
    title: 'Collectibles',
  },
  {
    id: 2,
    title: 'Photography',
  },
  {
    id: 3,
    title: 'Video Games',
  },
];

const ListItems = [
  {
    id: 1,
    image: require('../../../assets/images/nft-1.png'),
    icon: require('../../../assets/images/nft-1-1.png'),
  },
  {
    id: 2,
    image: require('../../../assets/images/nfc-2.png'),
    icon: require('../../../assets/images/nfc-2-2.png'),
  },
  {
    id: 3,
    image: require('../../../assets/images/nfc-3.png'),
    icon: require('../../../assets/images/nfc-3-3.png'),
  },
  {
    id: 4,
    image: require('../../../assets/images/nfc-4.png'),
    icon: require('../../../assets/images/nfc-4-4.png'),
  },
  {
    id: 5,
    image: require('../../../assets/images/nfc-5.png'),
    icon: require('../../../assets/images/nfc-5-5.png'),
  },
  {
    id: 6,
    image: require('../../../assets/images/nfc-6.png'),
    icon: require('../../../assets/images/nfc-6-6.png'),
  },
];

export const NftScreen = () => {
  const {theme} = useContext(ThemeContext);
  const [active, setActive] = useState<number>(1);
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
      <TopSection title="Collections" />
      <View
        style={[
          tw`rounded-full flex-row justify-between px-1 mx-4 items-center`,
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
                  tw`w-1/3 my-1 text-center py-2 shadow-xl px-1 font-bold rounded-full`,
                  {
                    color: id === active ? DarkScheme.title : LightScheme.title,
                    backgroundColor:
                      id === active ? LightScheme.primary : DarkScheme.tabColor,
                  },
                ]}>
                {title}
              </Text>
            ) : (
              <Text
                key={id}
                onPress={() => setActive(id)}
                style={[
                  tw`w-1/3 my-1 text-center py-2 shadow-xl px-1 font-bold rounded-full`,
                  {
                    color:
                      theme === 'light' ? LightScheme.title : DarkScheme.title,
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
      <ScrollView style={tw`px-4 my-6`}>
        <View style={tw`flex-row flex-wrap justify-between w-full`}>
          {ListItems.map(({id, image, icon}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('CollectionScreen')}
              key={id}
              style={[
                tw` rounded-xl my-2 relative`,
                tw`text-base`,
                {
                  width: '49%',
                  backgroundColor:
                    theme === 'light'
                      ? LightScheme.tabColor
                      : DarkScheme.tabBackgroundColor,
                },
              ]}>
              <Image
                style={tw`w-full h-28`}
                resizeMode="contain"
                source={image}
              />
              <Image
                style={tw`w-full h-20 top-16 absolute`}
                resizeMode="contain"
                source={icon}
              />
              <View style={tw``}>
                <View
                  style={[
                    tw`text-center flex-column  px-2 pb-4 pt-9 items-center justify-center`,
                  ]}>
                  <Text
                    style={[
                      tw`font-bold text-sm`,
                      {
                        color:
                          theme === 'light'
                            ? LightScheme.title
                            : DarkScheme.title,
                      },
                    ]}>
                    Merkulove Collection
                  </Text>
                  <Text
                    style={[
                      tw`text-center text-xs py-1 px-4 flex-column items-center justify-center`,
                      {
                        color:
                          theme === 'light'
                            ? LightScheme.secondary
                            : DarkScheme.secondary,
                      },
                    ]}>
                    A Collection of 50 Unique NFTs
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
