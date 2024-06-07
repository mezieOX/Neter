import React, {useContext, useEffect} from 'react';
import {Image, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {DarkScheme, LightScheme} from '..';
import {ThemeContext} from '../../../App';

export const WaitScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      return navigation.navigate('BottomStack', {screen: 'HomeScreen'});
    }, 4000);
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View
      style={[
        tw`flex-1 flex justify-center items-center`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={{width: '90%', height: '90%'}}
      />
    </View>
  );
};
