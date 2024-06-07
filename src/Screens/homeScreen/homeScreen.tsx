import React, {useContext} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {DarkScheme, LightScheme} from '..';
import {ThemeContext} from '../../../App';
import {
  ArrowDownIcon,
  BotIcon,
  BybitIcon,
  CardIcon,
  InviteIcon,
  MoreIcon,
  NotificationIcon,
  P2PIcon,
  RewardIcon,
  RightIcon,
  SavingIcon,
  SupportIcon,
} from '../../../assets/svgIcons';
import {Button, SearchInputComp} from '../../components/components';

const ListItems = [
  {id: 1, title: 'Bybit Earn', icon: BybitIcon},
  {id: 2, title: 'Card', icon: CardIcon},
  {id: 3, title: 'Rewards Hub', icon: RewardIcon},
  {id: 4, title: 'Invite Friends', icon: InviteIcon},
  {id: 5, title: 'TradingBot', icon: BotIcon},
  {id: 6, title: 'Saving', icon: SavingIcon},
  {id: 7, title: 'P2P Trading', icon: P2PIcon},
  {id: 8, title: 'More', icon: MoreIcon},
];

export const HomeScreen = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        tw`flex-1 pt-10`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <View style={tw`flex-row justify-between px-4 items-center`}>
        <Image
          resizeMode="contain"
          style={tw`w-12 h-12 mr-4`}
          source={require('../../../assets/images/profile-img.png')}
        />
        <View
          style={tw`w-1/2 text-center flex-1 self-center justify-center flex-row`}>
          <SearchInputComp placeholder={'Referral'} />
        </View>
        <View style={tw`flex-row justify-between px-4 items-center`}>
          <SupportIcon />
          <View style={tw`ml-4`}>
            <NotificationIcon />
          </View>
        </View>
      </View>
      <View>
        <View style={tw`flex-row justify-between px-4 py-14`}>
          <View>
            <View style={tw`flex-row items-center`}>
              <Text
                style={[
                  tw`text-base`,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.iconColor
                        : DarkScheme.iconColor,
                  },
                ]}>
                Total Assets
              </Text>
              <Image
                resizeMode="contain"
                style={tw`w-8 h-8 ml-2`}
                source={
                  theme === 'light'
                    ? require('../../../assets/images/eye-fill.png')
                    : require('../../../assets/images/eye-white.png')
                }
              />
            </View>
            <View style={tw`flex-row items-center`}>
              <Text
                style={[
                  tw`pt-6 text-3xl font-bold pr-2`,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.iconColor
                        : DarkScheme.iconColor,
                  },
                ]}>
                205.34
              </Text>
              <Text
                style={[
                  tw`px-1`,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.iconColor
                        : DarkScheme.iconColor,
                  },
                ]}>
                USD
              </Text>
              <ArrowDownIcon />
            </View>
            <Text
              style={[
                tw`py-2`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.iconColor
                      : DarkScheme.iconColor,
                },
              ]}>
              = 0.00034536 BTC
            </Text>
          </View>
          <View style={tw`w-1/2`}>
            <Button onPress={() => {}} title={'Deposit'} />
          </View>
        </View>
        <View
          style={[
            tw`flex-row flex-wrap px-4 justify-between text-center items-center`,
            {marginTop: -40},
          ]}>
          {ListItems.map(({id, title, icon: Icon}) => (
            <View
              style={tw`text-center flex-column justify-center items-center py-6`}
              key={id}>
              <Icon />
              <Text
                style={[
                  tw`pt-1`,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.iconColor
                        : DarkScheme.iconColor,
                  },
                ]}>
                {' '}
                {title}
              </Text>
            </View>
          ))}
        </View>
        <View>
          <Image
            style={tw`h-28 w-full`}
            resizeMode="cover"
            source={
              theme === 'light'
                ? require('../../../assets/images/home-banner.png')
                : require('../../../assets/images/black-banner.png')
            }
          />
        </View>
        <View style={tw`flex-row py-6 justify-between px-4 items-center`}>
          <Text
            style={[
              tw`font-bold text-xl`,
              {
                color:
                  theme === 'light'
                    ? LightScheme.iconColor
                    : DarkScheme.iconColor,
              },
            ]}>
            Derivatives
          </Text>
          <View style={tw`flex-row items-center`}>
            <Text
              style={[
                tw``,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.iconColor
                      : DarkScheme.iconColor,
                },
              ]}>
              More
            </Text>
            <RightIcon />
          </View>
        </View>
        <ImageBackground
          style={[tw`h-40 p-5 mx-4 mb-20`]}
          borderRadius={5}
          source={
            theme === 'light'
              ? require('../../../assets/images/trade-now-banner.png')
              : require('../../../assets/images/black-frame.png')
          }>
          <View style={tw`flex-row justify-between items-center`}>
            <View style={tw`flex-row items-center`}>
              <Image
                style={tw`h-10 w-10`}
                source={require('../../../assets/images/bitcoin.png')}
              />
              <Text
                style={[
                  tw`font-bold text-xl text-black px-4`,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.iconColor
                        : DarkScheme.iconColor,
                  },
                ]}>
                BTC
              </Text>
            </View>
            <View
              style={[
                tw`bg-black rounded-xl border-2 border-white  py-2 px-4`,
                {
                  borderColor:
                    theme === 'light'
                      ? LightScheme.borderColor
                      : DarkScheme.borderColor,
                },
              ]}>
              <Text style={[tw`text-white`]}>Trade Now</Text>
            </View>
          </View>
          <View style={tw`flex-row items-center justify-between pt-4`}>
            <Text
              style={[
                tw`font-bold text-base`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.iconColor
                      : DarkScheme.iconColor,
                },
              ]}>
              24H Change
            </Text>
            <Text
              style={[
                tw`font-bold text-base`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.iconColor
                      : DarkScheme.iconColor,
                },
              ]}>
              Price
            </Text>
            <Text
              style={[
                tw`font-bold text-base`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.iconColor
                      : DarkScheme.iconColor,
                },
              ]}>
              24H Volume
            </Text>
          </View>
          <View style={tw`flex-row items-center justify-between mt-2`}>
            <Text style={[tw`text-xl text-bold`, {color: '#44F107'}]}>
              +22.43%
            </Text>
            <Text
              style={[
                tw`font-bold text-base`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.iconColor
                      : DarkScheme.iconColor,
                },
              ]}>
              0
            </Text>
            <Text
              style={[
                tw`font-bold text-base`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.iconColor
                      : DarkScheme.iconColor,
                },
              ]}>
              3.156M
            </Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
