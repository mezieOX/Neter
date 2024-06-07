import React, {useContext} from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const MoreIcon = () => {
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
        d="M11.625 19.2273C11.0758 19.2273 10.6046 19.0355 10.2116 18.652C9.82339 18.2637 9.63163 17.7926 9.63636 17.2386C9.63163 16.6989 9.82339 16.2372 10.2116 15.8537C10.6046 15.4702 11.0758 15.2784 11.625 15.2784C12.1458 15.2784 12.6051 15.4702 13.0028 15.8537C13.4053 16.2372 13.6089 16.6989 13.6136 17.2386C13.6089 17.608 13.5118 17.9441 13.3224 18.2472C13.1378 18.5455 12.8963 18.7846 12.598 18.9645C12.2997 19.1397 11.9754 19.2273 11.625 19.2273ZM17.875 19.2273C17.3258 19.2273 16.8546 19.0355 16.4616 18.652C16.0734 18.2637 15.8816 17.7926 15.8864 17.2386C15.8816 16.6989 16.0734 16.2372 16.4616 15.8537C16.8546 15.4702 17.3258 15.2784 17.875 15.2784C18.3958 15.2784 18.8551 15.4702 19.2528 15.8537C19.6553 16.2372 19.8589 16.6989 19.8636 17.2386C19.8589 17.608 19.7618 17.9441 19.5724 18.2472C19.3878 18.5455 19.1463 18.7846 18.848 18.9645C18.5497 19.1397 18.2254 19.2273 17.875 19.2273ZM24.125 19.2273C23.5758 19.2273 23.1046 19.0355 22.7116 18.652C22.3234 18.2637 22.1316 17.7926 22.1364 17.2386C22.1316 16.6989 22.3234 16.2372 22.7116 15.8537C23.1046 15.4702 23.5758 15.2784 24.125 15.2784C24.6458 15.2784 25.1051 15.4702 25.5028 15.8537C25.9053 16.2372 26.1089 16.6989 26.1136 17.2386C26.1089 17.608 26.0118 17.9441 25.8224 18.2472C25.6378 18.5455 25.3963 18.7846 25.098 18.9645C24.7997 19.1397 24.4754 19.2273 24.125 19.2273Z"
        fill="#F7A701"
      />
    </Svg>
  );
};