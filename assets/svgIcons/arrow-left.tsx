import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const ArrowLeftIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="45" height="44" viewBox="0 0 45 44" fill="none">
      <Path
        d="M16.0645 22.4492C16.0742 22.0488 16.2109 21.7168 16.5332 21.4043L24.0527 14.0508C24.2969 13.7969 24.5996 13.6797 24.9707 13.6797C25.7031 13.6797 26.2891 14.2559 26.2891 14.9883C26.2891 15.3496 26.1426 15.6816 25.8789 15.9453L19.1992 22.4395L25.8789 28.9531C26.1426 29.2168 26.2891 29.5391 26.2891 29.9102C26.2891 30.6426 25.7031 31.2285 24.9707 31.2285C24.6094 31.2285 24.2969 31.1016 24.0527 30.8477L16.5332 23.4941C16.2109 23.1816 16.0645 22.8496 16.0645 22.4492Z"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
      />
    </Svg>
  );
};
