import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../../App';
import {DarkScheme, LightScheme} from '../../src/theme';

export const SettingsIcon = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <Path
        d="M20.638 14.636L20.539 13.641L20.506 13.644L20.474 13.65L20.638 14.636ZM20.638 14.636L20.738 15.631L20.771 15.628L20.803 15.623L20.638 14.636ZM16.598 20.118L17.231 19.344L17.223 19.338L16.598 20.118ZM16.598 20.118L15.965 20.892L15.973 20.899L16.598 20.118ZM7.40202 20.118L6.76902 19.345L6.75302 19.358L6.73802 19.371L7.40202 20.118ZM7.40202 20.118L8.03502 20.893L8.05102 20.88L8.06602 20.866L7.40202 20.118ZM3.36102 10.364V9.36402H3.31102L3.26202 9.36902L3.36102 10.364ZM3.36102 10.364V11.364H3.41102L3.46102 11.359L3.36102 10.364ZM15.131 3.76102C15.1143 3.5687 15.0906 3.37694 15.062 3.18602C15.0308 2.97595 14.9667 2.77211 14.872 2.58202L13.095 3.50002C13.072 3.45502 13.077 3.43902 13.09 3.51802C13.105 3.60702 13.118 3.73102 13.141 3.96102L15.131 3.76102ZM15.226 4.71102C15.289 4.79302 15.268 4.83002 15.233 4.63502C15.2 4.44902 15.174 4.18802 15.131 3.76102L13.14 3.96002C13.18 4.35402 13.214 4.70802 13.265 4.99002C13.314 5.26002 13.4 5.61502 13.635 5.92302L15.226 4.71102ZM15.226 4.71102L13.635 5.92302C13.849 6.20387 14.1336 6.42305 14.4597 6.55829C14.7859 6.69354 15.1421 6.74002 15.492 6.69302L15.226 4.71102ZM15.964 4.10602C15.7399 4.29543 15.5094 4.4772 15.273 4.65102C15.11 4.76402 15.123 4.72402 15.226 4.71102L15.492 6.69302C15.876 6.64102 16.188 6.45102 16.414 6.29302C16.649 6.13102 16.924 5.90502 17.23 5.65402L15.964 4.10602ZM16.98 3.45602C16.7788 3.52329 16.5895 3.62184 16.419 3.74802C16.279 3.84802 16.122 3.97702 15.964 4.10602L17.23 5.65402C17.409 5.50802 17.506 5.42902 17.58 5.37702C17.645 5.33002 17.636 5.34602 17.589 5.36102L16.98 3.45602ZM18.384 3.52602C17.9399 3.33357 17.4411 3.30869 16.98 3.45602L17.589 5.36102L18.384 3.52602ZM19.33 4.27402C19.1954 4.13551 19.0564 4.00144 18.913 3.87202C18.7556 3.72955 18.5768 3.61279 18.383 3.52602L17.589 5.36102C17.543 5.34102 17.536 5.32502 17.596 5.37802C17.664 5.43802 17.753 5.52502 17.916 5.68802L19.33 4.27402ZM20.224 5.16802L19.33 4.27402L17.916 5.68802L18.81 6.58202L20.224 5.16802ZM20.972 6.11402C20.8853 5.92027 20.7685 5.74141 20.626 5.58402C20.4963 5.44126 20.3623 5.30252 20.224 5.16802L18.81 6.58302C18.973 6.74602 19.06 6.83502 19.12 6.90302C19.173 6.96302 19.157 6.95602 19.137 6.91002L20.972 6.11402ZM21.042 7.51802C21.1893 7.05697 21.1645 6.55813 20.972 6.11402L19.137 6.91002L21.042 7.51802ZM20.392 8.53402C20.5165 8.38644 20.6359 8.23469 20.75 8.07902C20.856 7.93102 20.97 7.74702 21.042 7.51802L19.137 6.91002C19.152 6.86302 19.167 6.85302 19.121 6.91902C19.069 6.99202 18.991 7.08902 18.844 7.26802L20.392 8.53402ZM19.787 9.27302C19.774 9.37602 19.734 9.38802 19.847 9.22502C19.954 9.07002 20.12 8.86602 20.392 8.53402L18.844 7.26802C18.594 7.57402 18.367 7.84902 18.204 8.08402C18.047 8.31002 17.857 8.62202 17.805 9.00602L19.787 9.27302ZM19.787 9.27302L17.805 9.00602C17.758 9.35597 17.8045 9.71213 17.9397 10.0383C18.075 10.3645 18.2942 10.649 18.575 10.863L19.787 9.27302ZM20.737 9.36802C20.4446 9.34355 20.1531 9.30919 19.863 9.26502C19.668 9.23002 19.705 9.21002 19.787 9.27302L18.575 10.863C18.883 11.098 19.237 11.184 19.509 11.233C19.79 11.283 20.144 11.318 20.538 11.358L20.737 9.36802ZM21.916 9.62602C21.7259 9.53133 21.5221 9.46721 21.312 9.43602C21.1211 9.40742 20.9293 9.38474 20.737 9.36802L20.538 11.358C20.6861 11.3711 20.8338 11.3877 20.981 11.408C21.061 11.422 21.044 11.427 20.999 11.404L21.916 9.62602ZM22.859 10.669C22.6813 10.2187 22.3462 9.84809 21.916 9.62602L21 11.406L22.859 10.669ZM22.999 11.867C22.999 11.663 22.999 11.46 22.988 11.288C22.9776 11.0758 22.9337 10.8665 22.858 10.668L21 11.406C20.982 11.359 20.988 11.343 20.994 11.423C21 11.513 21 11.638 21 11.869L22.999 11.867ZM22.999 13.131V11.867H20.999V13.131H22.999ZM22.859 14.329C22.947 14.106 22.976 13.892 22.988 13.709C22.999 13.538 22.999 13.335 22.999 13.131H20.999C20.999 13.362 20.999 13.487 20.993 13.577C20.987 13.657 20.981 13.641 20.999 13.594L22.859 14.329ZM21.916 15.372C22.3462 15.15 22.6813 14.7794 22.859 14.329L21 13.595L21.916 15.372ZM20.737 15.63C20.941 15.61 21.142 15.59 21.312 15.562C21.492 15.532 21.702 15.482 21.916 15.372L21 13.595C21.044 13.572 21.061 13.577 20.982 13.59C20.8349 13.6113 20.6872 13.6283 20.539 13.641L20.737 15.63ZM19.788 15.725C19.705 15.788 19.668 15.768 19.863 15.733C20.049 15.7 20.31 15.673 20.737 15.63L20.538 13.64C20.145 13.68 19.79 13.714 19.509 13.765C19.238 13.814 18.883 13.9 18.575 14.135L19.788 15.725ZM19.788 15.725L18.575 14.135C18.2942 14.349 18.075 14.6336 17.9397 14.9597C17.8045 15.2859 17.758 15.6421 17.805 15.992L19.788 15.725ZM20.392 16.463C20.2027 16.2392 20.0209 16.0091 19.847 15.773C19.734 15.61 19.775 15.622 19.788 15.725L17.805 15.992C17.857 16.376 18.047 16.688 18.205 16.914C18.368 17.149 18.594 17.424 18.844 17.73L20.392 16.463ZM21.042 17.479C20.9747 17.2782 20.8761 17.0892 20.75 16.919C20.65 16.778 20.521 16.622 20.392 16.463L18.844 17.73C18.99 17.909 19.069 18.005 19.121 18.079C19.168 18.144 19.153 18.136 19.137 18.089L21.042 17.479ZM20.972 18.884C21.1647 18.4396 21.1896 17.9404 21.042 17.479L19.137 18.089L20.972 18.884ZM20.224 19.83C20.369 19.685 20.512 19.543 20.626 19.413C20.746 19.275 20.876 19.104 20.972 18.883L19.137 18.088C19.157 18.042 19.173 18.036 19.12 18.096C19.06 18.164 18.973 18.252 18.81 18.416L20.224 19.83ZM19.33 20.723L20.224 19.83L18.81 18.416L17.916 19.309L19.33 20.723ZM18.384 21.472C18.5778 21.3849 18.7567 21.2678 18.914 21.125C19.043 21.012 19.186 20.868 19.33 20.723L17.916 19.309C17.8123 19.4153 17.7056 19.5187 17.596 19.619C17.536 19.673 17.543 19.657 17.589 19.637L18.384 21.472ZM16.98 21.542C17.4411 21.6893 17.9399 21.6645 18.384 21.472L17.589 19.637L16.98 21.542ZM15.964 20.892C16.122 21.021 16.278 21.15 16.419 21.25C16.567 21.355 16.751 21.469 16.98 21.542L17.589 19.637C17.636 19.652 17.645 19.667 17.579 19.621C17.4601 19.5321 17.3437 19.4397 17.23 19.344L15.964 20.892ZM15.226 20.288C15.123 20.273 15.11 20.233 15.273 20.346C15.428 20.454 15.631 20.619 15.963 20.891L17.23 19.344C16.924 19.093 16.649 18.867 16.414 18.704C16.188 18.546 15.876 18.357 15.492 18.305L15.226 20.288ZM15.226 20.288L15.492 18.305C15.1421 18.258 14.7859 18.3045 14.4597 18.4397C14.1336 18.575 13.849 18.7942 13.635 19.075L15.226 20.288ZM15.13 21.237C15.173 20.81 15.2 20.548 15.233 20.363C15.268 20.168 15.288 20.204 15.225 20.287L13.635 19.074C13.4 19.382 13.314 19.737 13.265 20.008C13.215 20.29 13.181 20.644 13.141 21.038L15.13 21.237ZM14.871 22.416C14.981 22.202 15.031 21.992 15.061 21.812C15.091 21.642 15.109 21.441 15.13 21.237L13.141 21.038C13.1277 21.1865 13.1103 21.3335 13.089 21.481C13.076 21.561 13.071 21.544 13.094 21.499L14.871 22.416ZM13.83 23.359C14.2796 23.1809 14.6494 22.8459 14.871 22.416L13.095 21.5L13.83 23.359ZM12.63 23.499C12.835 23.499 13.038 23.499 13.21 23.488C13.392 23.476 13.606 23.449 13.83 23.359L13.095 21.5C13.142 21.482 13.158 21.488 13.078 21.494C12.9294 21.5003 12.7807 21.5023 12.632 21.5L12.63 23.499ZM11.367 23.499H12.63L12.631 21.499H11.367V23.499ZM10.169 23.359C10.392 23.447 10.606 23.476 10.789 23.488C10.96 23.499 11.163 23.499 11.367 23.499V21.499C11.136 21.499 11.011 21.499 10.921 21.493C10.841 21.487 10.857 21.481 10.904 21.499L10.169 23.359ZM9.12602 22.416C9.34809 22.8462 9.71868 23.1813 10.169 23.359L10.904 21.499L9.12602 22.416ZM8.86802 21.237C8.88802 21.441 8.90802 21.642 8.93602 21.812C8.96602 21.992 9.01602 22.202 9.12602 22.416L10.906 21.5C10.929 21.544 10.924 21.561 10.911 21.482C10.8897 21.3349 10.8727 21.1872 10.86 21.039L8.86802 21.237ZM8.77302 20.287C8.71002 20.205 8.73002 20.167 8.76502 20.363C8.79802 20.548 8.82502 20.81 8.86802 21.237L10.858 21.038C10.818 20.644 10.784 20.29 10.733 20.008C10.684 19.738 10.598 19.383 10.363 19.075L8.77302 20.287ZM8.77302 20.287L10.363 19.075C10.149 18.7942 9.86446 18.575 9.5383 18.4397C9.21213 18.3045 8.85597 18.258 8.50602 18.305L8.77302 20.287ZM8.03402 20.892C8.36702 20.62 8.57002 20.454 8.72502 20.347C8.88802 20.234 8.87602 20.274 8.77302 20.287L8.50602 18.305C8.12202 18.357 7.81002 18.547 7.58402 18.705C7.34902 18.867 7.07402 19.093 6.76802 19.344L8.03402 20.892ZM7.01802 21.542C7.21919 21.4747 7.40851 21.3762 7.57902 21.25C7.71902 21.15 7.87602 21.021 8.03402 20.892L6.76902 19.345C6.65503 19.4407 6.53932 19.5331 6.42002 19.622C6.35502 19.669 6.36402 19.654 6.41102 19.638L7.01802 21.542ZM5.61402 21.472C6.05813 21.6645 6.55697 21.6893 7.01802 21.542L6.40902 19.637L5.61402 21.472ZM4.66702 20.724C4.81202 20.869 4.95502 21.012 5.08502 21.126C5.22202 21.246 5.39302 21.377 5.61502 21.473L6.40902 19.637C6.45502 19.657 6.46202 19.673 6.40202 19.62C6.29238 19.5198 6.18567 19.4164 6.08202 19.31L4.66702 20.724ZM3.77402 19.83L4.66802 20.724L6.08202 19.31L5.18802 18.416L3.77402 19.83ZM3.02602 18.884C3.12102 19.104 3.25202 19.276 3.37202 19.414C3.48602 19.543 3.62902 19.686 3.77402 19.83L5.18802 18.416C5.08164 18.3124 4.97826 18.2056 4.87802 18.096C4.82502 18.036 4.84102 18.043 4.86102 18.089L3.02602 18.884ZM2.95602 17.48C2.80869 17.9411 2.83357 18.4399 3.02602 18.884L4.86102 18.089L2.95602 17.48ZM3.60602 16.464C3.48158 16.6116 3.36218 16.7634 3.24802 16.919C3.12184 17.0895 3.02329 17.2788 2.95602 17.48L4.86102 18.089C4.84502 18.136 4.83102 18.145 4.87702 18.079C4.92902 18.006 5.00702 17.909 5.15402 17.73L3.60602 16.464ZM4.21002 15.725C4.22402 15.622 4.26402 15.61 4.15102 15.773C4.04402 15.928 3.87802 16.132 3.60602 16.464L5.15402 17.73C5.40402 17.424 5.63102 17.149 5.79402 16.914C5.95102 16.688 6.14102 16.376 6.19302 15.992L4.21002 15.725ZM4.21002 15.725L6.19302 15.992C6.24002 15.6421 6.19354 15.2859 6.05829 14.9597C5.92305 14.6336 5.70387 14.349 5.42302 14.135L4.21002 15.725ZM3.26002 15.63C3.68802 15.673 3.95002 15.7 4.13502 15.733C4.33002 15.768 4.29302 15.788 4.21002 15.725L5.42302 14.135C5.11502 13.9 4.76102 13.814 4.48902 13.765C4.20802 13.715 3.85402 13.68 3.45902 13.64L3.26002 15.63ZM2.08202 15.372C2.29602 15.482 2.50602 15.532 2.68602 15.562C2.85602 15.59 3.05702 15.611 3.26102 15.631L3.45902 13.64C3.3109 13.6276 3.16417 13.611 3.01702 13.59C2.93702 13.576 2.95402 13.571 2.99902 13.594L2.08202 15.372ZM1.14002 14.33C1.31775 14.7804 1.65281 15.151 2.08302 15.373L3.00002 13.595L1.14002 14.33ZM1.00002 13.132C1.00002 13.336 1.00002 13.539 1.01102 13.711C1.02302 13.893 1.05102 14.107 1.14102 14.331L3.00002 13.594C3.01802 13.641 3.01202 13.657 3.00702 13.577C3.00042 13.4288 2.99809 13.2804 3.00002 13.132H1.00002ZM1.00002 11.868V13.132H3.00002V11.868H1.00002ZM1.14002 10.669C1.06469 10.8676 1.02116 11.0769 1.01102 11.289C0.99902 11.461 1.00002 11.664 1.00002 11.869H3.00002C3.00002 11.637 3.00002 11.512 3.00702 11.422C3.01202 11.342 3.01802 11.358 3.00002 11.405L1.14002 10.669ZM2.08302 9.62802C1.65317 9.8496 1.31816 10.2194 1.14002 10.669L3.00002 11.405L2.08302 9.62802ZM3.26202 9.36802C3.05802 9.38902 2.85702 9.40802 2.68702 9.43802C2.50702 9.46802 2.29702 9.51802 2.08302 9.62802L3.00002 11.405C2.95502 11.428 2.93902 11.423 3.01802 11.41C3.16516 11.3887 3.31289 11.3717 3.46102 11.359L3.26202 9.36802ZM4.21202 9.27402C4.29502 9.21102 4.33202 9.23102 4.13602 9.26602C3.95102 9.29902 3.68902 9.32602 3.26202 9.36902L3.46102 11.359C3.85402 11.319 4.20902 11.285 4.49102 11.234C4.76202 11.185 5.11702 11.099 5.42502 10.864L4.21202 9.27402ZM4.21202 9.27402L5.42502 10.864C5.70569 10.6499 5.92467 10.3653 6.05974 10.0391C6.1948 9.71298 6.24113 9.35688 6.19402 9.00702L4.21202 9.27402ZM3.60702 8.53502C3.87902 8.86702 4.04502 9.07102 4.15302 9.22602C4.26602 9.38902 4.22602 9.37702 4.21202 9.27402L6.19402 9.00702C6.14202 8.62302 5.95302 8.31202 5.79502 8.08502C5.63202 7.85002 5.40502 7.57502 5.15502 7.26902L3.60702 8.53502ZM2.95702 7.51802C3.03002 7.74802 3.14302 7.93102 3.24902 8.08002C3.34902 8.22002 3.47802 8.37702 3.60702 8.53502L5.15502 7.26902C5.05934 7.15504 4.96697 7.03933 4.87802 6.92002C4.83102 6.85502 4.84702 6.86302 4.86202 6.91002L2.95702 7.51802ZM3.02702 6.11502C2.83481 6.55884 2.80995 7.05727 2.95702 7.51802L4.86202 6.91002L3.02702 6.11502ZM3.77502 5.16802C3.63002 5.31302 3.48702 5.45502 3.37302 5.58502C3.23055 5.74241 3.11379 5.92127 3.02702 6.11502L4.86202 6.91002C4.84202 6.95602 4.82602 6.96302 4.87902 6.90202C4.93902 6.83402 5.02602 6.74602 5.18902 6.58202L3.77502 5.16802ZM4.66902 4.27502L3.77502 5.16802L5.18902 6.58202L6.08402 5.68902L4.66902 4.27502ZM5.61502 3.52602C5.4212 3.61309 5.24234 3.7302 5.08502 3.87302C4.94226 4.00271 4.80352 4.13678 4.66902 4.27502L6.08402 5.68902C6.24702 5.52502 6.33502 5.43802 6.40302 5.37902C6.46302 5.32502 6.45602 5.34102 6.41002 5.36102L5.61502 3.52602ZM7.01902 3.45602C6.55797 3.30869 6.05913 3.33357 5.61502 3.52602L6.41002 5.36102L7.01902 3.45602ZM8.03402 4.10602C7.87602 3.97702 7.72102 3.84902 7.58002 3.74902C7.40958 3.62248 7.22025 3.5236 7.01902 3.45602L6.41002 5.36102C6.36302 5.34602 6.35402 5.33102 6.42002 5.37702C6.49302 5.43002 6.59002 5.50802 6.76902 5.65502L8.03402 4.10602ZM8.77402 4.71102C8.87702 4.72502 8.88902 4.76502 8.72602 4.65202C8.48995 4.47817 8.25982 4.2964 8.03602 4.10702L6.76902 5.65502C7.07502 5.90502 7.34902 6.13102 7.58402 6.29502C7.81002 6.45202 8.12202 6.64102 8.50602 6.69302L8.77402 4.71102ZM8.77402 4.71102L8.50702 6.69302C8.85697 6.74002 9.21313 6.69354 9.5393 6.55829C9.86546 6.42305 10.15 6.20387 10.364 5.92302L8.77402 4.71102ZM8.86902 3.76102C8.82602 4.18902 8.79902 4.45102 8.76602 4.63602C8.73102 4.83102 8.71102 4.79402 8.77402 4.71102L10.364 5.92302C10.599 5.61502 10.685 5.26102 10.734 4.99002C10.784 4.70902 10.82 4.35402 10.859 3.96002L8.86902 3.76102ZM9.12702 2.58302C9.03233 2.77311 8.96821 2.97695 8.93702 3.18702C8.90902 3.35702 8.88902 3.55802 8.86902 3.76202L10.859 3.96002C10.8721 3.81197 10.8887 3.66526 10.909 3.51802C10.923 3.43802 10.928 3.45602 10.905 3.50002L9.12702 2.58302ZM10.17 1.64002C9.71968 1.81775 9.34909 2.15281 9.12702 2.58302L10.905 3.50002L10.17 1.64002ZM11.368 1.50002C11.164 1.50002 10.961 1.50002 10.789 1.51102C10.5769 1.52116 10.3676 1.56469 10.169 1.64002L10.906 3.50002C10.859 3.51802 10.843 3.51202 10.923 3.50702C11.013 3.50102 11.138 3.50002 11.369 3.50002L11.368 1.50002ZM12.632 1.50002H11.368V3.50002H12.632V1.50002ZM13.83 1.64002C13.6314 1.56469 13.4222 1.52116 13.21 1.51102C13.04 1.49902 12.837 1.50002 12.633 1.50002V3.50002C12.864 3.50002 12.989 3.50002 13.079 3.50702C13.159 3.51202 13.142 3.51802 13.095 3.50002L13.83 1.64002ZM14.873 2.58302C14.651 2.15281 14.2804 1.81775 13.83 1.64002L13.095 3.50002L14.873 2.58302ZM15 12.5C15 13.2957 14.6839 14.0587 14.1213 14.6213C13.5587 15.1839 12.7957 15.5 12 15.5V17.5C13.3261 17.5 14.5979 16.9732 15.5356 16.0356C16.4732 15.0979 17 13.8261 17 12.5H15ZM12 9.50002C12.7957 9.50002 13.5587 9.81609 14.1213 10.3787C14.6839 10.9413 15 11.7044 15 12.5H17C17 11.1739 16.4732 9.90217 15.5356 8.96449C14.5979 8.0268 13.3261 7.50002 12 7.50002V9.50002ZM9.00002 12.5C9.00002 11.7044 9.31609 10.9413 9.8787 10.3787C10.4413 9.81609 11.2044 9.50002 12 9.50002V7.50002C10.6739 7.50002 9.40217 8.0268 8.46449 8.96449C7.5268 9.90217 7.00002 11.1739 7.00002 12.5H9.00002ZM12 15.5C11.2044 15.5 10.4413 15.1839 9.8787 14.6213C9.31609 14.0587 9.00002 13.2957 9.00002 12.5H7.00002C7.00002 13.8261 7.5268 15.0979 8.46449 16.0356C9.40217 16.9732 10.6739 17.5 12 17.5V15.5Z"
        fill={theme === 'light' ? LightScheme.iconColor : DarkScheme.iconColor}
      />
    </Svg>
  );
};