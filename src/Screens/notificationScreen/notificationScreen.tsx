import React, {useContext} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
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

export const NotificationScreen = () => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation<INavigationSetting>();

  const ListItems = [
    {
      id: 1,
      text: 'Augur (REP) went above the price of &100 ......',
    },
    {
      id: 2,
      text: 'Tezos (XTZ) was just listed on Gemini.',
    },
    {
      id: 3,
      text: 'Your Golem (GNT) balance changed by +4900Z.',
    },
    {
      id: 4,
      text: 'Maker (MKR) was just listed on Rigzo.',
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
        settingsIcon={true}
        title="Notifications"
        searchIcon={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[tw`py-6 px-4`]}>
          {ListItems.map(({id, text}) => (
            <View
              style={[
                tw`my-6 min-w-full rounded-xl flex-column items-start justify-center`,
                styles.shadowBox,
                {
                  backgroundColor:
                    theme === 'light'
                      ? LightScheme.background
                      : DarkScheme.title,
                  borderColor:
                    theme === 'light'
                      ? LightScheme.borderColor
                      : DarkScheme.borderColor,
                },
              ]}
              key={id}>
              <Text
                style={[
                  tw`text-base px-4`,
                  {
                    color:
                      theme === 'light'
                        ? 'rgba(10, 53, 44, 1)'
                        : 'rgba(10, 53, 44, 1)',
                  },
                ]}>
                Cryptocurrency Alerting
              </Text>
              <View style={tw`flex-row items-start justify-start`}>
                <Text
                  style={[
                    tw`text-base px-4`,
                    {
                      color:
                        theme === 'light'
                          ? LightScheme.title
                          : DarkScheme.background,
                    },
                  ]}>
                  {text}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowBox: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
});
