import React from 'react';
import {s as tw} from 'react-native-wind';
import {Pressable, StyleSheet, Text} from 'react-native';

export const Button = ({
  roundedFull = false,
  onPress,
  title,
  icon,
}: {
  onPress: (value: any) => void;
  title: string;
  icon?: React.ReactNode;
  roundedFull?: boolean;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, {borderRadius: roundedFull ? 50 : 12}]}>
      <Text style={[styles.text, icon ? styles.height : null]}>
        {title}
        {icon ? (
          <Text style={tw`mx-10 min-h-80`}> &nbsp; &nbsp; {icon}</Text>
        ) : null}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    minWidth: '100%',
    height: 58,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    backgroundColor: '#F7A701',
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: '700',
    letterSpacing: 0.25,
    color: 'white',
  },
  height: {
    minHeight: 25,
  },
});
