import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from '../../../components';
import {s as tw} from 'react-native-wind';

interface IActive {
  setActive: {
    myWallet: boolean;
    fundMyWallet: boolean;
    payout: boolean;
    cardAddedSuccessfully: boolean;
    enterCardPin: boolean;
  };
}

export const CardAddedSuccessfully: React.FC<IActive | any> = ({setActive}) => {
  return (
    <View
      style={[
        tw`mx-4 my-20 flex-column items-center justify-center px-6 rounded-3xl py-20`,
        {
          shadowOpacity: 10,
          shadowRadius: 8,
          shadowColor: '#000',
          elevation: 5, // This is for Android
          shadowOffset: {height: 0, width: 0},
          backgroundColor: '#fff',
        },
      ]}>
      <Image
        resizeMode="contain"
        style={tw`w-40 h-40 mb-5`}
        source={require('../../../../assets/images/check.png')}
      />
      <Text style={tw`text-center text-xl`}>
        Your Card Details Has Been Added Successfully
      </Text>
      <View style={tw`py-10`}>
        <Button
          onPress={() => {
            setActive({
              myWallet: false,
              fundMyWallet: true,
              payout: false,
              cardAddedSuccessfully: false,
              enterCardPin: false,
            });
          }}
          title={'Proceed'}
        />
      </View>
    </View>
  );
};
