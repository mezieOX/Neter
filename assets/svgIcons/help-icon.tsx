import React, {useContext} from 'react';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';
import {Path, Svg} from 'react-native-svg';

export const HelpIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="21" height="18" viewBox="0 0 21 18" fill="none">
      <Path
        d="M16.1612 12.6225L16.5025 14.9925C16.59 15.615 15.8112 16.05 15.19 15.7275L11.5237 13.86C11.1212 13.86 10.7275 13.8375 10.3425 13.7925C10.99 13.14 11.375 12.315 11.375 11.4225C11.375 9.29249 9.22249 7.56752 6.56249 7.56752C5.54749 7.56752 4.61124 7.815 3.83249 8.25C3.80624 8.0625 3.79749 7.87499 3.79749 7.67999C3.79749 4.26749 7.25374 1.5 11.5237 1.5C15.7937 1.5 19.25 4.26749 19.25 7.67999C19.25 9.70499 18.0337 11.4975 16.1612 12.6225Z"
        stroke={
          theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor
        }
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.375 11.4225C11.375 12.315 10.99 13.14 10.3425 13.7925C9.47626 14.6925 8.1025 15.27 6.5625 15.27L4.27875 16.4325C3.89375 16.635 3.40375 16.3575 3.45625 15.975L3.675 14.4975C2.5025 13.8 1.75 12.6825 1.75 11.4225C1.75 10.1025 2.5725 8.93998 3.8325 8.24998C4.61125 7.81498 5.5475 7.5675 6.5625 7.5675C9.2225 7.5675 11.375 9.29247 11.375 11.4225Z"
        stroke={
          theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor
        }
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
