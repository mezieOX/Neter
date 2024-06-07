import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const ArrowDownIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="16" height="15" viewBox="0 0 16 15" fill="none">
      <Path
        d="M7.29404 10.4438L2.79779 5.30438C2.26717 4.69969 2.69842 3.75 3.50373 3.75H12.4962C12.6765 3.74985 12.8529 3.80164 13.0045 3.89919C13.156 3.99674 13.2762 4.13591 13.3507 4.30002C13.4252 4.46414 13.4508 4.64625 13.4245 4.82454C13.3981 5.00283 13.3209 5.16975 13.2022 5.30531L8.70592 10.4428C8.61792 10.5435 8.5094 10.6242 8.38764 10.6795C8.26589 10.7348 8.13371 10.7634 7.99998 10.7634C7.86625 10.7634 7.73407 10.7348 7.61231 10.6795C7.49056 10.6242 7.38204 10.5435 7.29404 10.4428V10.4438Z"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
      />
    </Svg>
  );
};
