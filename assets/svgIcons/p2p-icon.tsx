import React, {useContext} from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const P2PIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
      <G clip-path="url(#clip0_404_3764)">
        <Path
          d="M0 1.09375C0 0.803669 0.115234 0.52547 0.320352 0.320352C0.52547 0.115234 0.803669 0 1.09375 0L12.0312 0C12.3213 0 12.5995 0.115234 12.8046 0.320352C13.0098 0.52547 13.125 0.803669 13.125 1.09375V12.6372L22.1966 3.60063C22.4017 3.39558 22.6798 3.28039 22.9698 3.28039C23.2599 3.28039 23.538 3.39558 23.7431 3.60063L31.4759 11.3356C31.5778 11.4372 31.6586 11.5579 31.7137 11.6908C31.7689 11.8237 31.7973 11.9661 31.7973 12.11C31.7973 12.2539 31.7689 12.3963 31.7137 12.5292C31.6586 12.6621 31.5778 12.7828 31.4759 12.8844L22.4459 21.875H33.9062C34.1963 21.875 34.4745 21.9902 34.6796 22.1954C34.8848 22.4005 35 22.6787 35 22.9688V33.9062C35 34.1963 34.8848 34.4745 34.6796 34.6796C34.4745 34.8848 34.1963 35 33.9062 35H6.5625C4.82216 34.9996 3.15323 34.308 1.92281 33.0772C0.715324 31.8704 0.025594 30.2407 0 28.5337M13.125 28.0744L29.155 12.1056L22.9666 5.91938L13.125 15.7238V28.0744ZM9.84375 28.4375C9.84375 27.5673 9.49805 26.7327 8.88269 26.1173C8.26734 25.502 7.43274 25.1562 6.5625 25.1562C5.69226 25.1562 4.85766 25.502 4.24231 26.1173C3.62695 26.7327 3.28125 27.5673 3.28125 28.4375C3.28125 29.3077 3.62695 30.1423 4.24231 30.7577C4.85766 31.373 5.69226 31.7188 6.5625 31.7188C7.43274 31.7188 8.26734 31.373 8.88269 30.7577C9.49805 30.1423 9.84375 29.3077 9.84375 28.4375ZM32.8125 32.8125V24.0625H20.2519L11.4691 32.8125H32.8125Z"
          fill={
            theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor
          }
        />
      </G>
      <Defs>
        <ClipPath id="clip0_404_3764">
          <Rect width="35" height="35" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
