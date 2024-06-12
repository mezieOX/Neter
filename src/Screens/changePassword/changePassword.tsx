import React, {useContext, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {OTPInputComp, TopSection} from '../../components';
import {ThemeContext} from '../../../App';
import {DarkScheme, LightScheme} from '..';

export const ChangePasswordScreen = () => {
  const [, setValue] = useState<string>('');

  const {theme} = useContext(ThemeContext);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        tw`flex-1 pt-10`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection
        settingsIcon={false}
        title="Change Password"
        searchIcon={false}
      />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={tw`flex-column p-4 h-screen  overflow-hidden`}>
        <View>
          <Text
            style={[
              tw`font-bold text-lg text-black`,
              {
                color:
                  theme === 'light'
                    ? LightScheme.iconColor
                    : DarkScheme.iconColor,
              },
            ]}>
            Old Password
          </Text>
          <View style={tw`self-start align-start ml-10 mt-12 mb-10`}>
            <OTPInputComp onChangeText={digit => setValue(digit)} digits={4} />
            <Text
              style={[
                tw`text-right my-4 text-bold text-base`,
                {color: 'rgba(247, 167, 1, 1)'},
              ]}>
              Forgot password?
            </Text>
          </View>
        </View>
      </ScrollView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={[
          tw`flex-column px-4 h-screen  overflow-hidden`,
          {marginTop: -40},
        ]}>
        <View>
          <Text
            style={[
              tw`font-bold text-lg text-black`,
              {
                color:
                  theme === 'light'
                    ? LightScheme.iconColor
                    : DarkScheme.iconColor,
              },
            ]}>
            New Password
          </Text>
          <View style={tw`self-start align-start ml-10 mt-12 mb-10`}>
            <OTPInputComp onChangeText={digit => setValue(digit)} digits={4} />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};
