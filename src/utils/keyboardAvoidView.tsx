import styled from '@emotion/native';
import {useHeaderHeight} from '@react-navigation/elements';
import React, {ReactElement} from 'react';
import {Platform} from 'react-native';
import {heightPixel} from './pxToDpConvert';

const KeyboardAvoidingView = styled.KeyboardAvoidingView({
  flex: 1,
});

const View = styled.ScrollView({
  flex: 1,
  height: '100%',
  width: '100%',
});
type ICustomKeyboardAvoidingView = {
  children: ReactElement | ReactElement[];
};
export const CustomKeyboardAvoidingView: React.FC<
  ICustomKeyboardAvoidingView
> = ({children}) => {
  const height = useHeaderHeight();
  const flex = {flex: 1};
  return (
    <KeyboardAvoidingView
      contentContainerStyle={flex}
      behavior={Platform.select({ios: 'padding', android: undefined})}
      keyboardVerticalOffset={Platform.select({
        ios: 0,
        android: height + heightPixel(100),
      })}
      enabled={true}>
      <View showsVerticalScrollIndicator={false}>{children}</View>
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardAvoidingView;
