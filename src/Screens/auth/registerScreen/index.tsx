import React, {useContext, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {ThemeContext} from '../../../../App';
import {s as tw} from 'react-native-wind';
import {INavigationSetting} from '../../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {DarkScheme, LightScheme} from '../..';
import {Button, TextInputComp} from '../../../components';

export const RegisterScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const {theme} = useContext(ThemeContext);
  const [toogle, setToggle] = useState<boolean>(false);
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
        Sign up
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
          placeholder="Full name"
          icon={
            theme === 'light'
              ? require('../../../../assets/images/dark-message.png')
              : require('../../../../assets/images/message.png')
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
        <TextInputComp
          placeholder="Confirm Password"
          icon={
            theme === 'light'
              ? require('../../../../assets/images/dark-lock.png')
              : require('../../../../assets/images/lock.png')
          }
        />
        <View style={tw`pt-20`}>
          <Button
            onPress={() => {
              navigation.navigate('AuthStack', {screen: 'VerificationScreen'});
            }}
            title={'Sign up'}
          />
          <View style={tw`flex-row items-center`}>
            <Text
              onPress={() => setToggle(prev => !prev)}
              style={[
                tw`h-4 w-4 border mr-3`,
                {
                  backgroundColor: toogle ? LightScheme.primary : null,
                  borderColor:
                    theme === 'light' ? LightScheme.title : DarkScheme.title,
                },
              ]}
            />
            <Text
              style={[
                tw`text-sm py-6`,
                [
                  {
                    color:
                      theme === 'light' ? LightScheme.title : DarkScheme.title,
                  },
                ],
              ]}>
              I have read and agree{' '}
              <Text style={tw`underline`}>Terms & Conditions</Text> and{' '}
              <Text style={tw`underline`}>Privacy Policy</Text>
            </Text>
          </View>
          <Text
            style={[
              tw`text-sm py-1 text-center`,
              [
                {
                  color:
                    theme === 'light' ? LightScheme.title : DarkScheme.title,
                },
              ],
            ]}>
            Already have an Account?
          </Text>
          <Text
            onPress={() =>
              navigation.navigate('AuthStack', {screen: 'LoginScreen'})
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
            Click here to Log in
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
