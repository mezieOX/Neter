import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const InviteIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="36" height="35" viewBox="0 0 36 35" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.625 7.65625C13.625 6.78601 13.9707 5.95141 14.5861 5.33606C15.2014 4.7207 16.036 4.375 16.9062 4.375H19.0938C19.964 4.375 20.7986 4.7207 21.4139 5.33606C22.0293 5.95141 22.375 6.78601 22.375 7.65625V9.84375C22.375 10.714 22.0293 11.5486 21.4139 12.1639C20.7986 12.7793 19.964 13.125 19.0938 13.125V15.3125H24.5625C24.8526 15.3125 25.1308 15.4277 25.3359 15.6329C25.541 15.838 25.6562 16.1162 25.6562 16.4062V18.5938C25.6562 18.8838 25.541 19.162 25.3359 19.3671C25.1308 19.5723 24.8526 19.6875 24.5625 19.6875C24.2724 19.6875 23.9942 19.5723 23.7891 19.3671C23.584 19.162 23.4688 18.8838 23.4688 18.5938V17.5H12.5312V18.5938C12.5312 18.8838 12.416 19.162 12.2109 19.3671C12.0058 19.5723 11.7276 19.6875 11.4375 19.6875C11.1474 19.6875 10.8692 19.5723 10.6641 19.3671C10.459 19.162 10.3438 18.8838 10.3438 18.5938V16.4062C10.3438 16.1162 10.459 15.838 10.6641 15.6329C10.8692 15.4277 11.1474 15.3125 11.4375 15.3125H16.9062V13.125C16.036 13.125 15.2014 12.7793 14.5861 12.1639C13.9707 11.5486 13.625 10.714 13.625 9.84375V7.65625ZM7.0625 25.1562C7.0625 24.286 7.4082 23.4514 8.02356 22.8361C8.63891 22.2207 9.47351 21.875 10.3438 21.875H12.5312C13.4015 21.875 14.2361 22.2207 14.8514 22.8361C15.4668 23.4514 15.8125 24.286 15.8125 25.1562V27.3438C15.8125 28.214 15.4668 29.0486 14.8514 29.6639C14.2361 30.2793 13.4015 30.625 12.5312 30.625H10.3438C9.47351 30.625 8.63891 30.2793 8.02356 29.6639C7.4082 29.0486 7.0625 28.214 7.0625 27.3438V25.1562ZM20.1875 25.1562C20.1875 24.286 20.5332 23.4514 21.1486 22.8361C21.7639 22.2207 22.5985 21.875 23.4688 21.875H25.6562C26.5265 21.875 27.3611 22.2207 27.9764 22.8361C28.5918 23.4514 28.9375 24.286 28.9375 25.1562V27.3438C28.9375 28.214 28.5918 29.0486 27.9764 29.6639C27.3611 30.2793 26.5265 30.625 25.6562 30.625H23.4688C22.5985 30.625 21.7639 30.2793 21.1486 29.6639C20.5332 29.0486 20.1875 28.214 20.1875 27.3438V25.1562Z"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
      />
    </Svg>
  );
};
