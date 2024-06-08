import React, {useContext} from 'react';
import {Text, View, Image} from 'react-native';
import {s as tw} from 'react-native-wind';
import {Button} from '../../components';
import {INavigationSetting} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../../App';
import {DarkScheme, LightScheme} from '..';

const GetStartedScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={[
        tw`bg-white py-40 flex-1`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <Image
        source={require('../../../assets/images/trade-with-neter.png')}
        resizeMode="contain"
        style={tw`h-80 w-80 mt-20`}
      />
      <View style={tw`flex-col items-center justify-center text-center px-4`}>
        <Text
          style={[
            tw`text-3xl text-center pb-4`,
            {
              color: theme === 'light' ? LightScheme.title : DarkScheme.title,
            },
          ]}>
          Start Your Trading with NETER
        </Text>
        <Text
          style={[
            tw`mb-6`,
            {
              color:
                theme === 'light'
                  ? LightScheme.secondary
                  : DarkScheme.secondary,
            },
          ]}>
          Easily Trade Crypto using Neter
        </Text>
        <Image
          source={require('../../../assets/images/swipe-line.png')}
          resizeMode="contain"
          style={tw`h-2 w-14 mb-10`}
        />
        <Button
          onPress={() => {
            navigation.navigate('SplashStack', {
              screen: 'GetStaredPhraseTwo',
            });
          }}
          title={'Continue'}
        />
      </View>
    </View>
  );
};

export default GetStartedScreen;
