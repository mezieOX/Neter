import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {ThemeContext} from '../../../App';
import {DarkScheme, LightScheme} from '..';
import {Button, TopSection} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';

export const InviteFriendsScreen = () => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View
      style={[
        tw`flex-1`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection
        settingsIcon={true}
        title="Refer and Earn"
        searchIcon={false}
      />
      <View
        style={[
          tw`flex-1 px-4 flex-column items-center justify-center pt-10`,
          {
            backgroundColor:
              theme === 'light'
                ? LightScheme.background
                : DarkScheme.background,
          },
        ]}>
        <Text
          style={[
            tw`font-bold text-xl text-center`,
            {color: 'rgba(247, 167, 1, 1)'},
          ]}>
          Share with Friends
        </Text>
        <Image
          style={tw`w-full h-96`}
          source={require('../../../assets/images/share.png')}
          resizeMode="contain"
        />
        <View>
          <Button
            onPress={() =>
              navigation.navigate('BottomStack', {screen: 'HomeScreen'})
            }
            title={'Share'}
          />
        </View>
      </View>
    </View>
  );
};
