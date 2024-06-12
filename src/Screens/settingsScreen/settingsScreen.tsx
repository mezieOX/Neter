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
import {ArrowRightIcon, TranslatorIcon} from '../../../assets/svgIcons';

export const SettingsScreen = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const navigation = useNavigation<INavigationSetting>();

  const ListItems = [
    {
      id: 1,
      text: 'Switch to Dark mood',
    },
    {
      id: 2,
      text: 'Sounds',
    },
    {
      id: 3,
      text: 'Change login password',
      link: 'ChangePasswordScreen',
    },
    {
      id: 4,
      text: 'Edit Personal info',
      link: 'ProfileInfoScreen',
    },
    {
      id: 5,
      text: 'Language',
      icon: TranslatorIcon,
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
      <TopSection settingsIcon={true} title="Setting" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`py-6 px-2`}>
          {ListItems.map(({id, text, icon: Icon, link}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(link as string)}
              style={[
                tw`py-6 flex-row items-center justify-between`,
                {
                  borderColor:
                    theme === 'light'
                      ? LightScheme.borderColor
                      : DarkScheme.borderColor,
                },
              ]}
              key={id}>
              <View style={tw`flex-row items-center`}>
                {Icon ? <Icon /> : null}

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
              {text === 'Sounds' ||
              text === 'Switch to Dark mood' ||
              text === 'Language' ? (
                text === 'Language' ? (
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
                    English
                  </Text>
                ) : (
                  <Switch
                    value={
                      text === 'Switch to Dark mood'
                        ? theme === 'light'
                          ? false
                          : true
                        : false
                    }
                    onChange={() => toggleTheme(prev => !prev)}
                    trackColor={{false: 'rgba(229, 229, 229, 1)'}}
                    thumbColor={'rgba(247, 167, 1, 1)'}
                  />
                )
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
