import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const TradingIconIndicator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="6" height="11" viewBox="0 0 6 11" fill="none">
      <Path
        d="M5.91384 4.5H0.30249L2.89234 0.5L5.91384 4.5Z"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
      />
      <Path
        d="M0.302469 7L5.91382 7L3.32397 11L0.302469 7Z"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
      />
    </Svg>
  );
};
