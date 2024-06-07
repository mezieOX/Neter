import React, {useContext} from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const BybitIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="36" height="35" viewBox="0 0 36 35" fill="none">
      <Circle
        cx="18"
        cy="17.5"
        r="16.5"
        stroke={
          theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor
        }
        stroke-width="2"
      />
      <Path
        d="M11.5398 13.1364V9.95455H24.1818V13.1364H19.8068V24.5H15.9148V13.1364H11.5398Z"
        fill="#F7A701"
      />
      <Path
        d="M24.5 17.5C24.5 17.5838 24.4469 17.7501 24.1474 17.9777C23.8557 18.1994 23.4021 18.4204 22.7967 18.615C21.5917 19.0023 19.8957 19.25 18 19.25C16.1043 19.25 14.4083 19.0023 13.2033 18.615C12.5979 18.4204 12.1443 18.1994 11.8526 17.9777C11.5531 17.7501 11.5 17.5838 11.5 17.5C11.5 17.4162 11.5531 17.2499 11.8526 17.0223C12.1443 16.8006 12.5979 16.5796 13.2033 16.385C14.4083 15.9977 16.1043 15.75 18 15.75C19.8957 15.75 21.5917 15.9977 22.7967 16.385C23.4021 16.5796 23.8557 16.8006 24.1474 17.0223C24.4469 17.2499 24.5 17.4162 24.5 17.5Z"
        stroke="#F7A701"
      />
    </Svg>
  );
};
