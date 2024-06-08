import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const WalletSelectCardIcon = ({
  width = '24',
  height = '24',
}: {
  width?: string;
  height?: string;
}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width={width} height={height} viewBox="0 0 21 15" fill="none">
      <Path
        d="M19.6875 0H1.3125C0.585938 0 0.0046875 0.585938 0 1.3125V1.32656V13.6734V13.6875C0.009375 14.4141 0.585938 15 1.3125 15H19.6875C20.4188 15 21 14.4047 21 13.6734V1.32656C21 0.595313 20.4188 0 19.6875 0ZM2.11406 1.5H18.8812C19.2047 1.5 19.4484 1.73906 19.4953 2.0625V3H1.5V2.04844C1.54688 1.72969 1.79531 1.5 2.11406 1.5ZM18.8859 13.5H2.11406C1.79062 13.5 1.54688 13.2703 1.5 12.9516V7.5H19.5V12.9375C19.4531 13.2609 19.2047 13.5 18.8859 13.5Z"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
      />
      <Path
        d="M12 9.75H3V10.5H12V9.75Z"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
      />
      <Path
        d="M7.5 11.25H3V12H7.5V11.25Z"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
      />
      <Path
        d="M18 9.75H15V12H18V9.75Z"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
      />
    </Svg>
  );
};
