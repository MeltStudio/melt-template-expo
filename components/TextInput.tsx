import React from 'react';
import type { TextInputProps } from 'react-native';
import { TextInput as RNTextInput, View } from 'react-native';

type Props = TextInputProps & {
  iconPosition?: 'left' | 'right';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const TextInput = ({
  leftIcon,
  rightIcon,
  ...props
}: Props): JSX.Element => {
  return (
    <View
      className="flex-row items-center justify-between rounded-lg"
      style={{
        borderColor: '#CCCDCE',
        borderWidth: 1,
        paddingHorizontal: 10,
      }}
    >
      {leftIcon && <View>{leftIcon}</View>}
      <RNTextInput {...props} className="flex-1 " style={{ padding: 10 }} />
      {rightIcon && <View>{rightIcon}</View>}
    </View>
  );
};
