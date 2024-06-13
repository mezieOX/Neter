import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {ThemeContext} from '../../../App';
import {DarkScheme, LightScheme} from '..';
import {TopSection} from '../../components';

const ListItems = [
  {id: 1, title: 'English', image: require('../../../assets/images/usa.png')},
  {id: 2, title: 'Hindi', image: require('../../../assets/images/hindi.png')},
  {id: 3, title: 'Arabic', image: require('../../../assets/images/arabic.png')},
  {id: 4, title: 'French', image: require('../../../assets/images/french.png')},
  {id: 5, title: 'German', image: require('../../../assets/images/german.png')},
  {
    id: 5,
    title: 'Portuguese',
    image: require('../../../assets/images/portuguese.png'),
  },
  {
    id: 5,
    title: 'Turkish',
    image: require('../../../assets/images/turkish.png'),
  },
];

export const ChangeLanguageScreen = () => {
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
      <TopSection
        settingsIcon={false}
        title="Change Language"
        searchIcon={false}
      />
      <ScrollView style={tw`mx-2`} showsVerticalScrollIndicator={false}>
        <View
          style={[
            tw`rounded-3xl mb-4 py-4`,
            {
              backgroundColor:
                theme === 'light'
                  ? LightScheme.background
                  : DarkScheme.background,
              marginLeft: theme === 'light' ? 0 : 20,
              marginRight: theme === 'light' ? 0 : 20,
            },
          ]}>
          {ListItems.map(({id, title, image}) => (
            <View
              key={id}
              style={[
                tw`px-4 flex-row py-4 rounded-lg border my-4  items-center justify-between`,
                {
                  borderColor:
                    theme === 'light'
                      ? LightScheme.border
                      : DarkScheme.borderColor,
                },
              ]}>
              <View style={tw`flex-row items-center`}>
                <Image
                  style={tw`w-10 h-10`}
                  resizeMode="contain"
                  source={image}
                />
                <View style={tw`flex-column mx-2`}>
                  <Text
                    style={[
                      tw`text-sm capitalize`,
                      {
                        color:
                          theme === 'light'
                            ? LightScheme.iconColor
                            : DarkScheme.iconColor,
                      },
                    ]}>
                    {title}
                  </Text>
                  <Text
                    style={[
                      tw`text-xs capitalize`,
                      {
                        color:
                          theme === 'light'
                            ? LightScheme.iconColor
                            : DarkScheme.iconColor,
                      },
                    ]}>
                    {title}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
