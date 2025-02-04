import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const SearchIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <Path
        d="M12.2832 20.7207C12.2832 16.2578 15.8965 12.6445 20.3496 12.6445C24.8027 12.6445 28.416 16.2578 28.416 20.7207C28.416 22.3809 27.9082 23.9141 27.0293 25.1738L31.2383 29.4023C31.5508 29.7148 31.7168 30.1348 31.7168 30.584C31.7168 31.5215 31.0137 32.2539 30.0566 32.2539C29.6074 32.2539 29.1777 32.0977 28.8555 31.7754L24.6074 27.5273C23.3867 28.3184 21.9316 28.7871 20.3496 28.7871C15.8965 28.7871 12.2832 25.1738 12.2832 20.7207ZM14.666 20.7207C14.666 23.8555 17.2051 26.4043 20.3496 26.4043C23.4941 26.4043 26.043 23.8555 26.043 20.7207C26.043 17.5762 23.4941 15.0273 20.3496 15.0273C17.2051 15.0273 14.666 17.5762 14.666 20.7207Z"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
      />
    </Svg>
  );
};
