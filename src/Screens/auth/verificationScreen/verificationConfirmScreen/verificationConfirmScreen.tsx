import React, {useContext, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {INavigationSetting} from '../../../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../../../../App';
import {DarkScheme, LightScheme} from '../../..';
import {Button, OTPInputComp} from '../../../../components/components';

export const VerificationConfirmScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [, setValue] = useState('');
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
            source={require('../../../../../assets/images/otp.png')}
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
              Enter The OTP Sent To You{' '}
              <Text style={tw`font-bold`}>+49 111 222 333</Text>
            </Text>
            <View style={tw`pb-10`}>
              <View style={tw`pb-14 pt-14`}>
                <OTPInputComp
                  onChangeText={digit => setValue(digit)}
                  digits={4}
                />
              </View>
              <Text
                style={[
                  tw`text-center text-base pb-10`,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.lighterGray
                        : DarkScheme.lighterGray,
                  },
                ]}>
                Didn’t receive the OTP?{' '}
                <Text style={{color: LightScheme.primary}}> Resend OTP</Text>
              </Text>
            </View>
            <Button
              onPress={() => {
                navigation.navigate('AuthStack', {screen: 'TwoFactorAuth'});
              }}
              title={'Verify'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
