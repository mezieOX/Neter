import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const ArrowRightIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="18" height="14" viewBox="0 0 18 14" fill="none">
      <Path
        d="M6.6825 11.62L11.5725 7.81667C12.15 7.3675 12.15 6.6325 11.5725 6.18334L6.6825 2.38"
        stroke={
          theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor
        }
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
