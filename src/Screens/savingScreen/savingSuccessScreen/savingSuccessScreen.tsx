import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {ThemeContext} from '../../../../App';
import {DarkScheme, LightScheme} from '../..';
import {Button, TopSection} from '../../../components';
import {INavigationSetting} from '../../../navigation/type';
import {useNavigation} from '@react-navigation/native';

export const SavingSuccessScreen = () => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View
      style={[
        tw`flex-1 pr-2`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection settingsIcon={false} title="Saving" searchIcon={false} />

      <View
        style={tw`flex-column items-center justify-center min-h-screen flex-1`}>
        <Image
          resizeMode="contain"
          style={tw`w-full h-60`}
          source={require('../../../../assets/images/success.png')}
        />
        <Text
          style={[
            tw`text-2xl mt-20 font-bold capitalize text-center`,
            {
              color: theme === 'light' ? LightScheme.title : DarkScheme.title,
            },
          ]}>
          Success
        </Text>

        <View style={tw`px-4 mt-8`}>
          <View style={tw`mt-20`}>
            <Button
              onPress={() =>
                navigation.navigate('BottomStack', {screen: 'HomeScreen'})
              }
              title={'Done'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
