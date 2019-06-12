import { css } from 'styled-components';
import Color from 'color';

export const colors = {
  primary: '#0C0368',
  blackRussianDark: '#101116',
  blackRussianLight: '#14151d'
};

export const theme = {
  colors: Object.keys(colors).reduce((acc, key) => {
    const value = colors[key];
    const color = Color(value);

    acc[key] = {
      value,
      color
    };

    return acc;
  }, {})
};

export const sizes = {
  phone: 575.98,
  tablet: 767.98,
  desktop: 991.98,
  largeDesktop: 1199.98,
  wideScreen: 1439.98,
  hugeDesktop: 1599.98
};

export const devices = {
  tabletOnly: { min: sizes.tablet, max: sizes.desktop }
};

export const mediaMax = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const mediaMin = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const mediaDevices = Object.keys(devices).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${devices[label].min}px) and (max-width: ${devices[label]
        .max}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const container = css`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
  z-index: 2;
  ${mediaDevices.tabletOnly`
		padding-right: 16px;
		padding-left: 16px;
	`}
`;

export const row = css`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  ${mediaDevices.tabletOnly`
		margin-right: -20px;
		margin-left: -20px;
	`}
`;

export const col = css`
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  ${mediaDevices.tabletOnly`
		padding-right: 20px;
		padding-left: 20px;
	`}
`;

export const page = css`
  margin-top: 121px;
  min-height: calc(100vh - 272px);
  height: 100%;
  ${mediaMax.desktop`margin-top: 61px;`}
`;

export const roundedButton = css`
  border-radius: 24px;
`;

export const disabledButton = css`
  background: ${props => props.theme.colors.lightGrey.value};
  cursor: not-allowed;
`;

export const button = css`
  ${roundedButton};
  padding: 0px;
  margin: 0px;
  font-size: 16px;
  outline: none;
  border: 0;
  cursor: pointer;
  background-color: ${props => props.theme.colors.white.value};
  &:disabled {
    ${disabledButton}
  }
`;
