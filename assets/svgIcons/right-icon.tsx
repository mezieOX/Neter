import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const RightIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <Path
        d="M4.25 9.75H14.75"
        stroke={
          theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor
        }
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.5 4.5L14.75 9.75L9.5 15"
        stroke={
          theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor
        }
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
