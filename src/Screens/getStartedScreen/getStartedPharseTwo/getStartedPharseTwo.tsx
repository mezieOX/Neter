import React, {useContext} from 'react';
import {Text, View, Image} from 'react-native';
import {s as tw} from 'react-native-wind';
import {Button} from '../../../components';
import {DarkScheme, LightScheme} from '../..';
import {ThemeContext} from '../../../../App';
import {INavigationSetting} from '../../../navigation/type';
import {useNavigation} from '@react-navigation/native';

export const GetStaredPhraseTwo = () => {
  const navigation = useNavigation<INavigationSetting>();
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={[
        tw`py-40 flex-1`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <Image
        source={require('../../../../assets/images/trading-crypto.png')}
        resizeMode="contain"
        style={tw`h-80 w-80 mt-6`}
      />
      <View style={tw`flex-col items-center justify-center text-center px-4`}>
        <Text
          style={[
            tw`text-3xl text-center pb-4`,
            {
              color: theme === 'light' ? LightScheme.title : DarkScheme.title,
            },
          ]}>
          Trading, Cryptocurrency
        </Text>
        <Text
          style={[
            tw`mb-14`,
            {
              color:
                theme === 'light'
                  ? LightScheme.secondary
                  : DarkScheme.secondary,
            },
          ]}>
          Easily Trade Crypto using Neter
        </Text>
        <Button
          onPress={() => {
            navigation.navigate('AuthStack', {screen: 'LoginScreen'});
          }}
          title={'Continue'}
        />
        <View style={tw`pt-10`}>
          <Text style={tw`text-black text-base`}>
            {' '}
            <Image
              source={require('../../../../assets/images/line.png')}
              resizeMode="contain"
              style={tw`h-2 w-14`}
            />
            &nbsp; Connect With &nbsp;
            <Image
              source={require('../../../../assets/images/line.png')}
              resizeMode="contain"
              style={tw`h-2 w-14`}
            />
          </Text>
        </View>
        <View style={tw`flex-row mt-6 items-center justify-center`}>
          <Image
            source={require('../../../../assets/images/google.png')}
            style={tw`h-8 w-7 mx-5`}
            resizeMode="contain"
          />
          <Image
            source={require('../../../../assets/images/facebook.png')}
            style={tw`h-8 w-9 mx-5`}
            resizeMode="contain"
          />
          <Image
            source={
              theme === 'light'
                ? require('../../../../assets/images/apple.png')
                : require('../../../../assets/images/white-apple.png')
            }
            style={tw`h-9 w-10 mx-5`}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};
