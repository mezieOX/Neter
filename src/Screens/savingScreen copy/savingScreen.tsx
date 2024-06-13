import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {ThemeContext} from '../../../../App';
import {DarkScheme, LightScheme} from '../..';
import {Button, TextInputComp, TopSection} from '../../../components';
import {INavigationSetting} from '../../../navigation/type';
import {useNavigation} from '@react-navigation/native';

export const SavingScreen = () => {
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
      <TopSection settingsIcon={true} title="Saving" searchIcon={false} />

      <View>
        <Text
          style={[
            tw`text-lg text-center`,
            {
              color: theme === 'light' ? LightScheme.title : DarkScheme.title,
            },
          ]}>
          Reach your finance goals with ease
        </Text>
        <View style={tw`px-4 my-8`}>
          <Text
            style={[
              tw`text-sm text-start`,
              {
                color: theme === 'light' ? LightScheme.title : DarkScheme.title,
              },
            ]}>
            What’s your overall target amount for this plan?
          </Text>
          <TextInputComp fill support placeholder="" />
        </View>
        <View style={tw`px-4 my-2`}>
          <Text
            style={[
              tw`text-sm text-start`,
              {
                color: theme === 'light' ? LightScheme.title : DarkScheme.title,
              },
            ]}>
            Add Reason for this Saving? (option)
          </Text>
          <TextInputComp fill support placeholder="" />
        </View>
        <View style={tw`px-4 mt-8`}>
          <Text
            style={[
              tw`text-sm text-start`,
              {
                color: theme === 'light' ? LightScheme.title : DarkScheme.title,
              },
            ]}>
            Start Date
          </Text>
          <TextInputComp fill support placeholder="" />
          <View style={tw`mt-20`}>
            <Button
              onPress={() =>
                navigation.navigate('BottomStack', {screen: 'HomeScreen'})
              }
              title={'Login'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
