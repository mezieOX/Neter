import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const MarkIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="30" height="30" viewBox="0 0 12 12" fill="none">
      <Path
        d="M10 3L4.5 8.5L2 6"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
