import React, {useContext, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {DarkScheme, LightScheme} from '../..';
import {WalletSelectCardIcon} from '../../../../assets/svgIcons';
import {ThemeContext} from '../../../../App';
import {s as tw} from 'react-native-wind';
import {Button, TwoFactorInputComp} from '../../../components';

interface IActive {
  setActive: {
    myWallet: boolean;
    fundMyWallet: boolean;
    payout: boolean;
    cardAddedSuccessfully: boolean;
    enterCardPin: boolean;
  };
}

export const WalletCardDetails: React.FC<IActive | any> = ({setActive}) => {
  const [checked, setChecked] = useState<boolean>(false);

  const {theme} = useContext(ThemeContext);

  return (
    <View>
      <View style={tw`px-4 flex-column justify-center pb-7 pt-12 items-center`}>
        <WalletSelectCardIcon width="40" height="40" />
        <Text
          style={[
            tw`font-bold text-base py-2`,
            {
              color:
                theme === 'light' ? LightScheme.bolderGray : DarkScheme.title,
            },
          ]}>
          Please enter your correct card details
        </Text>
        <TwoFactorInputComp
          placeholder="Enter Your 16 Digit Card Pin"
          wallet={true}
        />
        <View style={tw`flex-row justify-between w-full`}>
          <View style={tw`w-1/2`}>
            <TwoFactorInputComp placeholder="Expiry Date" wallet={true} />
          </View>
          <View style={tw`w-1/3`}>
            <TwoFactorInputComp placeholder="CVV" wallet={true} />
          </View>
        </View>
        <TwoFactorInputComp
          placeholder="Your 4 Digit Secure Pin"
          wallet={true}
        />
        <View style={tw`self-end flex-row items-center`}>
          <Text
            style={[
              tw``,
              {
                color: theme === 'light' ? LightScheme.title : DarkScheme.title,
              },
            ]}>
            Use as default card
          </Text>
          <TouchableOpacity
            onPress={() => setChecked(prev => !prev)}
            style={[
              tw`h-5 w-5 border flex items-center justify-center ml-4`,
              {
                borderColor:
                  theme === 'light' ? LightScheme.title : DarkScheme.title,
              },
            ]}>
            {checked ? (
              <Image
                style={tw`h-4 w-4`}
                source={require('../../../../assets/images/checked.png')}
              />
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={tw`pt-10`}>
          <Button
            onPress={() => {
              setActive({
                myWallet: false,
                fundMyWallet: false,
                payout: false,
                cardAddedSuccessfully: true,
                enterCardPin: false,
              });
            }}
            title={'Confirm'}
          />
        </View>
      </View>
    </View>
  );
};
