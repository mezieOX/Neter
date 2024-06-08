import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const ArrowFillDownIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 9L12 15L18 9"
        stroke={theme === 'light' ? LightScheme.title : DarkScheme.title}
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
