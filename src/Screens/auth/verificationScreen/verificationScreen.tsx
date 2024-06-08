import React, {useContext} from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {INavigationSetting} from '../../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../../../App';
import {DarkScheme, LightScheme} from '../..';
import {Button} from '../../../components';

export const VerificationScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const {theme} = useContext(ThemeContext);

  return (
    <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
      <View
        style={[
          tw`flex-column items-center py-20 flex-1`,
          {
            backgroundColor:
              theme === 'light'
                ? LightScheme.background
                : DarkScheme.background,
          },
        ]}>
        <View style={tw`flex-col items-center`}>
          <Image
            source={require('../../../../assets/images/otp.png')}
            style={tw`h-56 w-56`}
            resizeMode="contain"
          />
          <View style={tw`flex-column items-center text-center px-4`}>
            <Text
              style={[
                tw`text-3xl pb-4 pt-14 font-semibold`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.lightGray
                      : DarkScheme.lightGray,
                },
              ]}>
              OTP Verification
            </Text>
            <Text
              style={[
                tw`text-center text-base`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.lightGray
                      : DarkScheme.lightGray,
                },
              ]}>
              we will send you a one time mobile password to this number
            </Text>
            <View>
              <Text
                style={[
                  tw`text-center text-base pt-10`,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.lighterGray
                        : DarkScheme.lighterGray,
                  },
                ]}>
                Enter Mobile Number
              </Text>
              <View style={tw`pb-20`}>
                <TextInput
                  keyboardType="numeric"
                  placeholder={'+234701 2 333'}
                  placeholderTextColor={
                    theme === 'light' ? LightScheme.title : DarkScheme.title
                  }
                  style={[
                    tw`pb-3 pt-6  px-4 rounded-lg font-bold text-center border-b-2 text-xl outline-0  min-w-full`,
                    {
                      borderColor: LightScheme.primary,
                      color:
                        theme === 'light'
                          ? LightScheme.title
                          : DarkScheme.title,
                    },
                  ]}
                />
              </View>
            </View>
            <Button
              onPress={() => {
                navigation.navigate('AuthStack', {
                  screen: 'VerificationConfirmScreen',
                });
              }}
              title={'Get OTP'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
