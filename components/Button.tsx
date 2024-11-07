import type { PropsWithChildren } from 'react';
import React from 'react';
import { Pressable } from 'react-native';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  variant?: ButtonVariant;
  align?: 'left' | 'center' | 'right';
  className?: string;
};

const alignStyles = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

const variantStyles = {
  primary: 'primary-button',
  secondary: 'secondary-button',
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = (
  props
): JSX.Element => {
  const {
    children,
    onPress,
    variant = 'primary',
    align = 'center',
    className = '',
  } = props;

  const alignStyle = alignStyles[align];
  const variantStyle = variantStyles[variant];

  return (
    <Pressable
      onPress={onPress}
      className={`${variantStyle} ${alignStyle} rounded-lg  ${className}`}
    >
      {children}
    </Pressable>
  );
};
