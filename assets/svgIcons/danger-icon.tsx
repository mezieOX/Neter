import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const DangerIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
      <Path
        d="M10.5 18.3333C15.1023 18.3333 18.8333 14.6024 18.8333 9.99999C18.8333 5.39762 15.1023 1.66666 10.5 1.66666C5.89759 1.66666 2.16663 5.39762 2.16663 9.99999C2.16663 14.6024 5.89759 18.3333 10.5 18.3333Z"
        stroke={theme === 'light' ? DarkScheme.title : LightScheme.title}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.5 6.66666V9.99999"
        stroke={theme === 'light' ? DarkScheme.title : LightScheme.title}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.5 13.3333H10.5083"
        stroke={theme === 'light' ? DarkScheme.title : LightScheme.title}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
