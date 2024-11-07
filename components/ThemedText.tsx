import type { TextProps } from 'react-native';
import { Text } from 'react-native';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  className?: string;
};

export const ThemedText = ({
  style,
  type = 'default',
  className = '',
  ...rest
}: ThemedTextProps): JSX.Element => {
  const fontFamily =
    {
      default: 'Roboto',
      title: 'RobotoBold',
      defaultSemiBold: 'RobotoMedium',
      subtitle: 'RobotoBold',
      link: 'Roboto',
    }[type] || 'Roboto';

  const typeClassName =
    {
      default: 'text-base',
      title: 'text-3xl font-bold',
      defaultSemiBold: 'text-base font-semibold',
      subtitle: 'text-lg font-semibold',
      link: 'text-base text-blue-600',
    }[type] || '';

  return (
    <Text
      style={[style, { fontFamily }]}
      className={`${typeClassName} ${className}`}
      {...rest}
    />
  );
};
