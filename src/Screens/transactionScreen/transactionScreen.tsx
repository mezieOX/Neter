import React, {useContext, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {ThemeContext} from '../../../App';
import {DarkScheme, LightScheme} from '..';
import {TopSection} from '../../components';

const ListItems = [
  {id: 1, title: 'Withdrawal', value: 'Confirmed'},
  {id: 2, title: 'Amount', value: '#3,000'},
  {id: 3, title: 'Date', value: '06-10-2023 09:58 PM'},
  {id: 4, title: 'Action', value: 'Paid'},
  {id: 5, title: 'Bitcoin', value: 'usuw-2903879nkewknf-3903'},
];

const TabListItems = [
  {id: 1, text: 'Transaction History'},
  {id: 2, text: 'Transfers History'},
  {id: 3, text: 'Profits history'},
];

export const TransactionScreen = () => {
  const {theme} = useContext(ThemeContext);
  const [active, setActive] = useState<number>(1);

  return (
    <View
      style={[
        tw`flex-1 pr-2`,
        {
          backgroundColor:
            theme === 'light' ? LightScheme.background : DarkScheme.background,
        },
      ]}>
      <TopSection settingsIcon={true} title="Transactions" searchIcon={false} />
      <View style={tw`flex-row justify-between my-6 px-4`}>
        {TabListItems.map(({id, text}) => (
          <Text
            onPress={() => setActive(id)}
            style={[
              tw`bg-red-300 py-4 rounded-full text-xs px-2 text-white`,
              {
                backgroundColor:
                  id === active ? LightScheme.primary : DarkScheme.gray200,
                color: id === active ? LightScheme.title : DarkScheme.title,
              },
            ]}
            key={id}>
            {text}
          </Text>
        ))}
      </View>
      <ScrollView style={tw`mx-4`} showsVerticalScrollIndicator={false}>
        <View
          style={[
            tw`rounded-3xl mb-4 py-4 border-2`,
            {
              backgroundColor:
                theme === 'light' ? LightScheme.background : DarkScheme.dark100,
              marginLeft: theme === 'light' ? 0 : 20,
              marginRight: theme === 'light' ? 0 : 20,
            },
          ]}>
          <View style={tw`mx-4 flex-row items-center justify-between`}>
            <Text
              style={[
                tw`font-bold text-xl`,
                {
                  color:
                    theme === 'light' ? LightScheme.title : DarkScheme.title,
                },
              ]}>
              Transaction History
            </Text>
            <View>
              <Text
                style={[
                  tw`font-bold text-sm px-5 py-3 rounded-xl text-white`,
                  {
                    backgroundColor:
                      theme === 'light'
                        ? LightScheme.title
                        : DarkScheme.dark300,
                  },
                ]}>
                Filter
              </Text>
            </View>
          </View>
          <View style={[tw`mx-4 flex-row py-5  items-center justify-between`]}>
            <Text
              style={[
                tw`text-sm uppercase`,
                {
                  color:
                    theme === 'light'
                      ? LightScheme.iconColor
                      : DarkScheme.iconColor,
                },
              ]}>
              Type
            </Text>
            <View>
              <Text
                style={[
                  tw`text-sm uppercase`,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.iconColor
                        : DarkScheme.iconColor,
                  },
                ]}>
                Status
              </Text>
            </View>
          </View>
          {ListItems.map(({id, title, value}) => (
            <View
              key={id}
              style={[tw`px-4 flex-row py-2  items-center justify-between`]}>
              <Text
                style={[
                  tw`text-sm uppercase`,
                  {
                    color:
                      theme === 'light'
                        ? LightScheme.iconColor
                        : DarkScheme.iconColor,
                  },
                ]}>
                {title}
              </Text>
              <View>
                <Text
                  style={[
                    tw`text-sm uppercase`,
                    {
                      color:
                        theme === 'light'
                          ? LightScheme.iconColor
                          : DarkScheme.iconColor,
                    },
                  ]}>
                  {value}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
