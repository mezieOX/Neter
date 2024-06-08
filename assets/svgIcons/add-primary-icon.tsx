import React, {useContext} from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {ThemeContext} from '../../App';

export const AddPrimaryIconIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="41" height="40" viewBox="0 0 41 40" fill="none">
      <Circle
        cx="20.5"
        cy="20"
        r="20"
        fill={theme === 'light' ? '#F7A701' : '#393737'}
      />
      <Path
        d="M20 12.2083V26.7916"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.7084 19.5H27.2917"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
