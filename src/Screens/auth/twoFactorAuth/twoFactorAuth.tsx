import React, {useContext, useState} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {DarkScheme, LightScheme} from '../..';
import {Button, TwoFactorInputComp} from '../../../components/components';
import {ThemeContext} from '../../../../App';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../../navigation/type';

export const TwoFactorAuth = () => {
  const [active, setIsActive] = useState<boolean>(false);
  const navigation = useNavigation<INavigationSetting>();
  const {theme} = useContext(ThemeContext);
  return (
    <ScrollView
      style={[
        tw`py-40 flex-1`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}
      showsVerticalScrollIndicator={false}>
      <Image
        style={tw`h-40 w-96 mt-10`}
        resizeMode="contain"
        source={require('../../../../assets/images/two-factor-key.png')}
      />
      <ImageBackground
        style={[tw`mx-4 px-6 py-14 my-14`, {borderRadius: 30}]}
        source={require('../../../../assets/images/two-factor-auth-bg.png')}
        imageStyle={{borderRadius: 30}} // Apply borderRadius to the background image
      >
        <View>
          <Text style={tw`text-3xl font-bold text-white`}>
            {active ? 'Two-factor' : 'Reset your'}
            <Text style={{color: LightScheme.primary}}>
              {active ? ' authentication' : ' Password'}
            </Text>
          </Text>
          <Text style={tw`py-5 text-white`}>
            {active
              ? 'Kindly verify via email. Input authentication code promptly for secure access.'
              : ' Enter your Email address associated with your account to reset your password, you will receive an email with confirmation code'}
          </Text>
        </View>
        <TwoFactorInputComp
          label={active ? 'Authentication' : 'Email'}
          placeholder={active ? '*******' : 'meziepage@gmail.com'}
        />
        <View style={tw`pt-8`}>
          <Button
            roundedFull
            onPress={() => {
              setIsActive(true);
              if (active === true) {
                navigation.navigate('AuthStack', {
                  screen: 'VerificationScreen',
                });
              }
            }}
            title={'Confirm'}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
