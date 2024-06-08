import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {ThemeContext} from '../../../../App';
import {s as tw} from 'react-native-wind';
import {INavigationSetting} from '../../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {DarkScheme, LightScheme} from '../..';
import {Button, TextInputComp} from '../../../components';

export const LoginScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const {theme} = useContext(ThemeContext);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        tw`flex-1`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <View style={[tw`flex-column items-center`, {paddingTop: 60}]}>
        <Image
          style={tw`h-40 w-96`}
          resizeMode="cover"
          source={require('../../../../assets/images/sign-up-logo.png')}
        />
      </View>
      <Text
        style={[
          tw`text-3xl font-semibold text-center`,
          {
            color: theme === 'light' ? LightScheme.title : DarkScheme.title,
          },
        ]}>
        Login
      </Text>
      <View style={tw`px-4`}>
        <TextInputComp
          placeholder="Email Address"
          icon={
            theme === 'light'
              ? require('../../../../assets/images/dark-user.png')
              : require('../../../../assets/images/user.png')
          }
        />
        <TextInputComp
          placeholder="Password"
          icon={
            theme === 'light'
              ? require('../../../../assets/images/dark-lock.png')
              : require('../../../../assets/images/lock.png')
          }
        />
        <Text
          onPress={() => {
            navigation.navigate('AuthStack', {screen: 'TwoFactorAuth'});
          }}
          style={[
            tw`text-sm pt-8`,

            [
              {
                color:
                  theme === 'light' ? LightScheme.primary : DarkScheme.primary,
              },
            ],
          ]}>
          Forgot Password?
        </Text>
        <View style={tw`pt-10`}>
          <Button
            onPress={() =>
              navigation.navigate('BottomStack', {screen: 'HomeScreen'})
            }
            title={'Login'}
          />
          <Text
            style={[
              tw`text-sm pt-8 text-center`,
              [
                {
                  color:
                    theme === 'light' ? LightScheme.title : DarkScheme.title,
                },
              ],
            ]}>
            Don't have an Account?
          </Text>
          <Text
            onPress={() =>
              navigation.navigate('AuthStack', {screen: 'RegisterScreen'})
            }
            style={[
              tw`text-sm pt-1 pb-10 text-center`,
              [
                {
                  color:
                    theme === 'light'
                      ? LightScheme.primary
                      : DarkScheme.primary,
                },
              ],
            ]}>
            Click here to Sign up
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
