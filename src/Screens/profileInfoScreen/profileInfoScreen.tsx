import React, {useContext} from 'react';
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {s as tw} from 'react-native-wind';
import {ThemeContext} from '../../../App';
import {DarkScheme, LightScheme} from '..';
import {TopSection} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {ArrowRightIcon} from '../../../assets/svgIcons';

export const ProfileInfoScreen = () => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation<INavigationSetting>();

  const ListItems = [
    {
      id: 1,
      title: 'full name',
      text: 'Amaila okeke',
    },
    {
      id: 2,
      title: 'phone number',
      text: '+234 7058 544 797',
    },
    {
      id: 3,
      title: 'Email',
      text: 'abigofada@gmail.com',
    },
    {
      id: 4,
      title: 'Address',
      text: 'Germany',
    },
  ];

  return (
    <View
      style={[
        tw`flex-1 pr-2 pl-1`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection
        settingsIcon={false}
        title="Profile Info"
        searchIcon={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-column justify-center items-center px-4`}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Image
              resizeMode="contain"
              style={tw`w-12 h-12`}
              source={require('../../../assets/images/profile-img.png')}
            />
          </TouchableOpacity>
          <Text
            style={[
              tw`text-black text-xl text-center py-4 font-bold`,
              {
                color: theme === 'light' ? LightScheme.title : DarkScheme.title,
              },
            ]}>
            Amalia
          </Text>
        </View>
        <View style={tw`py-6 pr-4`}>
          {ListItems.map(({id, text, title}) => (
            <View
              style={[
                tw`py-4 flex-row items-center justify-between`,
                {
                  borderColor:
                    theme === 'light'
                      ? LightScheme.borderColor
                      : DarkScheme.borderColor,
                },
              ]}
              key={id}>
              <View>
                <Text
                  style={[
                    tw`text-base px-4 capitalize font-bold`,
                    {
                      color:
                        theme === 'light'
                          ? LightScheme.title
                          : DarkScheme.title,
                    },
                  ]}>
                  {title}
                </Text>
                <View style={tw`flex-row items-center`}>
                  <Text
                    style={[
                      tw`text-base px-4`,
                      {
                        color:
                          theme === 'light'
                            ? LightScheme.title
                            : DarkScheme.title,
                      },
                    ]}>
                    {text}
                  </Text>
                </View>
              </View>
              <ArrowRightIcon />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
