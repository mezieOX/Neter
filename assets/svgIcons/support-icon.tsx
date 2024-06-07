import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const SupportIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="24" height="24" viewBox="0 0 20 21" fill="none">
      <Path
        d="M17.5001 16.1728V17.0062H2.50009V16.1728L4.16676 14.5062V9.50618C4.16676 6.92285 5.85842 4.64785 8.33342 3.91451V3.67285C8.33342 3.23082 8.50902 2.8069 8.82158 2.49434C9.13414 2.18177 9.55806 2.00618 10.0001 2.00618C10.4421 2.00618 10.866 2.18177 11.1786 2.49434C11.4912 2.8069 11.6668 3.23082 11.6668 3.67285V3.91451C14.1418 4.64785 15.8334 6.92285 15.8334 9.50618V14.5062L17.5001 16.1728ZM11.6668 17.8395C11.6668 18.2815 11.4912 18.7055 11.1786 19.018C10.866 19.3306 10.4421 19.5062 10.0001 19.5062C9.55806 19.5062 9.13414 19.3306 8.82158 19.018C8.50902 18.7055 8.33342 18.2815 8.33342 17.8395"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
      />
    </Svg>
  );
};
