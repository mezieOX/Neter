import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  TextAreaInputComp,
  TextInputComp,
  TopSection,
} from '../../components';
import {ThemeContext} from '../../../App';
import {INavigationSetting} from '../../navigation/type';
import {DarkScheme, LightScheme} from '..';

export const SupportScreen = () => {
  const {theme} = useContext(ThemeContext);

  const navigation = useNavigation<INavigationSetting>();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        tw`flex-1 px-4`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection
        settingsIcon={false}
        title="Change Password"
        searchIcon={false}
      />
      <View style={tw`text-center flex items-center`}>
        <Text style={tw`text-lg font-semibold text-black`}>
          Contact us Today
        </Text>
        <Text style={tw`text-base pt-4 font-semibold text-black`}>Address</Text>
        <Text style={tw`text-black pt-3 mb-4`}>
          House# 72, Road# 21, Banani, Dhaka-1213 (near Banani Bidyaniketon
          School & College, beside University of South Asia)
        </Text>
        <Text style={tw`text-black pt-3 mb-4`}>
          {' '}
          <Image
            source={require('../../../assets/images/support-call.png')}
            style={tw`h-4 mr-2 w-4`}
            resizeMode="contain"
          />{' '}
          &nbsp; Call : 07056584464 (24/7)
        </Text>
        <Text style={tw`text-black pt-3 mb-4`}>
          <Image
            source={require('../../../assets/images/support-email.png')}
            style={tw`h-4 mr-2 w-4`}
            resizeMode="contain"
          />{' '}
          &nbsp; Email : support@bozsupermarket.com
        </Text>
      </View>

      <Text style={tw`text-base pt-4 font-semibold text-center text-black`}>
        Send Message
      </Text>
      <View style={tw`self-start align-start  my-4`}>
        <TextInputComp support placeholder="Name" />
        <TextInputComp support placeholder="Email" />
        <TextAreaInputComp placeholder="Write your text" support={true} />
      </View>
      <View style={tw`self-start align-start  mb-10`}>
        <Button onPress={() => {}} title="Send" />
      </View>
    </ScrollView>
  );
};
