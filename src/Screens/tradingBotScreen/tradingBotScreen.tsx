import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {ThemeContext} from '../../../App';
import {DarkScheme, LightScheme} from '..';
import {TextInputComp, TopSection} from '../../components';
import {INavigationSetting} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';

export const TradingBotScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={[
        tw`flex-1 pr-2`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection settingsIcon={true} title="TradingBot" searchIcon={false} />

      <View style={tw`px-4`}>
        <Image
          resizeMode="contain"
          style={tw`w-full h-32`}
          source={require('../../../assets/images/bot-greeting-message.png')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row justify-end`}>
          <Text
            style={[
              tw`bg-gray-100 rounded-lg text-black px-4 py-2 text-center ml-auto my-4 w-52`,
              {maxWidth: 'fit-content'},
            ]}>
            I want to start Trading bot
          </Text>
        </View>
      </ScrollView>
      <View style={tw`px-4`}>
        <TextInputComp fill support placeholder="Message" />
      </View>
    </View>
  );
};
