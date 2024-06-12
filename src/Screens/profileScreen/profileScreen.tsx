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
import {
  AboutIcon,
  ArrowCircleDownIcon,
  ArrowRightIcon,
  GlobalEditIcon,
  HelpIcon,
  WalletProfileIcon,
} from '../../../assets/svgIcons';

export const ProfileScreen = () => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation<INavigationSetting>();

  const ListItems = [
    {
      id: 1,
      text: 'Transaction history',
      icon: ArrowCircleDownIcon,
    },
    {
      id: 2,
      text: 'Terms Of Service',
      icon: GlobalEditIcon,
    },
    {
      id: 3,
      text: 'Help Center',
      icon: HelpIcon,
      link: 'SupportScreen',
    },
    {
      id: 4,
      text: 'Show Balance',
      icon: WalletProfileIcon,
    },
    {
      id: 5,
      text: 'About',
      icon: AboutIcon,
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
      <TopSection settingsIcon={true} title="Profile" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row items-center px-4`}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Image
              resizeMode="contain"
              style={tw`w-12 h-12 mr-4`}
              source={require('../../../assets/images/profile-img.png')}
            />
          </TouchableOpacity>
          <Text
            style={[
              tw`text-black text-xl font-bold`,
              {
                color: theme === 'light' ? LightScheme.title : DarkScheme.ttile,
              },
            ]}>
            Hi, Amalia
          </Text>
        </View>
        <View style={tw`py-6 px-4`}>
          {ListItems.map(({id, text, icon: Icon, link}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(link)}
              style={[
                tw`border-b py-6 flex-row items-center justify-between`,
                {
                  borderColor:
                    theme === 'light'
                      ? LightScheme.borderColor
                      : DarkScheme.borderColor,
                },
              ]}
              key={id}>
              <View style={tw`flex-row items-center`}>
                <Icon />

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
              {text === 'Show Balance' ? (
                <Switch
                  trackColor={{false: 'rgba(229, 229, 229, 1)'}}
                  thumbColor={'rgba(247, 167, 1, 1)'}
                />
              ) : (
                <ArrowRightIcon />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
