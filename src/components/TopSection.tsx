import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {DarkScheme, LightScheme} from '../theme';
import {ThemeContext} from '../../App';
import {ArrowLeftIcon, SearchIcon} from '../../assets/svgIcons';
import {INavigationSetting} from '../navigation/type';
import {useNavigation} from '@react-navigation/native';

export const TopSection = ({
  title,
  searchIcon = true,
}: {
  title: string;
  searchIcon?: boolean;
}) => {
  const navigation = useNavigation<INavigationSetting>();

  const {theme} = useContext(ThemeContext);

  return (
    <View>
      <View style={tw`flex-row justify-between items-center py-8 px-2`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        <Text
          style={[
            tw`text-xl`,
            {
              color: theme === 'light' ? LightScheme.title : DarkScheme.title,
            },
          ]}>
          {title}
        </Text>
        <View>
          {searchIcon ? <SearchIcon /> : <View style={tw`hidden w-8`} />}
        </View>
      </View>
    </View>
  );
};
