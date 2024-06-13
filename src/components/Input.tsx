import React, {useContext, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {s as tw} from 'react-native-wind';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../theme';

export const TextInputComp = ({
  icon,
  placeholder,
  support = false,
  fill = false,
}: {
  icon?: ImageSourcePropType;
  placeholder: string;
  support?: boolean;
  fill?: boolean;
}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={[
        tw`my-2 ${
          support ? 'border rounded-lg' : 'border-b '
        }  flex-row items-center`,
        {
          borderColor:
            theme === 'light' && !fill ? LightScheme.border : DarkScheme.border,
        },
      ]}>
      {icon ? <Image style={tw`h-5 w-5`} source={icon} /> : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={
          theme === 'light' ? LightScheme.border : DarkScheme.border
        }
        style={[
          tw`h-14 px-4 rounded-lg placeholder:text-red-500 outline-0  min-w-full`,
          {
            backgroundColor: fill ? LightScheme.gray500 : DarkScheme.title,
            color:
              theme === 'light' ? LightScheme.inputText : DarkScheme.inputText,
          },
        ]}
      />
    </View>
  );
};

export const PasswordInputComp = ({
  label,
  placeholder,
}: {
  label?: string;
  placeholder: string;
}) => {
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  return (
    <View style={tw`my-2`}>
      {label ? (
        <Text style={[tw`py-2 text-xs uppercase text-black`, styles.label]}>
          {label}
        </Text>
      ) : null}
      <View
        style={[
          tw`bg-gray-100 h-16 px-4 w-full flex-row items-center justify-between py-1 rounded-lg outline-0 border-0 min-w-full`,
          styles.input,
        ]}>
        <TextInput placeholder={placeholder} />
        {isEyeOpen ? (
          <TouchableWithoutFeedback onPress={() => setIsEyeOpen(prev => !prev)}>
            <Image
              source={require('../../assets/images/eye.png')}
              style={tw`h-5 w-5 mx-2`}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback onPress={() => setIsEyeOpen(prev => !prev)}>
            <Image
              source={require('../../assets/images/eye-close.png')}
              style={tw`h-5 w-5 mx-2`}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
};

export const TwoFactorInputComp = ({
  label,
  placeholder,
  onChange,
  wallet = false,
}: {
  label?: string;
  placeholder: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  wallet?: boolean;
}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={tw`my-2`}>
      {label ? (
        <Text
          style={[
            tw`py-2 text-xs uppercase text-white`,
            styles.label,
            {
              color:
                theme === 'light' && wallet
                  ? LightScheme.title
                  : DarkScheme.title,
            },
          ]}>
          {label}
        </Text>
      ) : null}
      <View
        style={[
          tw`h-14 pl-4 flex-row items-center justify-between py-1 border min-w-full`,
          styles.searchInput,
          {
            borderColor:
              wallet && theme === 'light'
                ? LightScheme.iconColor
                : DarkScheme.iconColor,
          },
        ]}>
        <TextInput
          onChange={onChange}
          style={tw`flex-1 mx-2 h-14 text-sm text-white py-4`}
          placeholderTextColor={theme === 'light' && wallet ? '#000' : '#fff'}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export const SearchInputComp = ({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={tw`my-2`}>
      <View
        style={[
          tw`h-10 pl-4 flex-row items-center justify-between py-1 border min-w-full`,
          styles.searchInput,
          {
            borderColor:
              theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor,
          },
        ]}>
        <Image
          style={tw`h-4 w-4`}
          source={require('../../assets/images/search.png')}
        />
        <TextInput
          onChange={onChange}
          style={tw`flex-1 mx-2 text-sm text-black h-10`}
          placeholderTextColor={
            theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor
          }
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export const TextAreaInputComp = ({
  label,
  placeholder,
  support,
}: {
  label?: string;
  placeholder: string;
  support?: boolean;
}) => {
  return (
    <View style={tw`my-2`}>
      {label ? (
        <Text
          style={[tw`py-2 text-xs mb-3 uppercase text-black`, styles.label]}>
          {label}
        </Text>
      ) : null}
      <TextInput
        multiline={true}
        numberOfLines={10}
        placeholder={placeholder}
        style={[
          tw`bg-gray-100 h-16 px-4 py-4 rounded-lg border-2 min-w-full`,
          styles.input,
          {
            height: support ? 150 : 250,
            textAlignVertical: 'top',
            backgroundColor: 'transparent',
            borderColor: 'rgba(0, 0, 0, 0.11)',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#fff',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#F0F5FA',
  },
  searchInput: {
    borderColor: '#fff',
    borderRadius: 5.38,
    borderWidth: 1,
  },
});
