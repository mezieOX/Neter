import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {ThemeContext} from '../../../App';
import {s as tw} from 'react-native-wind';
import {DarkScheme, LightScheme} from '..';
import {Button, TopSection} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {DangerIcon} from '../../../assets/svgIcons';

export const CollectionScreen = () => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View
      style={[
        tw`flex-1 `,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection title="Collections" searchIcon={false} />
      <View style={tw`px-4`}>
        <Text
          style={[
            tw`text-center font-bold text-3xl`,
            {
              color: theme === 'light' ? LightScheme.title : DarkScheme.title,
            },
          ]}>
          Make a Collections
        </Text>
        <View
          style={[
            tw`px-4 rounded-2xl my-14 py-20`,
            {
              backgroundColor:
                theme === 'light'
                  ? LightScheme.gray300
                  : LightScheme.background,
            },
          ]}>
          <View
            style={[
              tw`flex-row py-8 rounded-xl px-2`,
              {
                backgroundColor:
                  theme === 'light' ? DarkScheme.blue100 : LightScheme.blue100,
              },
            ]}>
            <DangerIcon />
            <Text
              style={[
                tw`px-2.5`,
                {
                  color:
                    theme === 'light' ? DarkScheme.title : LightScheme.title,
                },
              ]}>
              Your balance is not enough to this Collections on this plan,
              please go to deposit and come back again.
            </Text>
          </View>
          <View style={tw`pt-10`}>
            <Button
              onPress={() =>
                navigation.navigate('BottomStack', {screen: 'HomeScreen'})
              }
              roundedFull
              title={'Transfer'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
