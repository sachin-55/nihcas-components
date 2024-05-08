import { screenSizes } from "./screen";
export const devices = {
  min: {
    mobileXS: `(min-width: ${screenSizes.xs})`,
    mobileSM: `(min-width: ${screenSizes.sm})`,
    tablet: `(min-width: ${screenSizes.md})`,
    laptop: `(min-width: ${screenSizes.lg})`,
    laptopXL: `(min-width: ${screenSizes.xl})`,
    Desktop: `(min-width: ${screenSizes.xxl})`,
  },
  max: {
    mobileXS: `(max-width: ${screenSizes.xs})`,
    mobileSM: `(max-width: ${screenSizes.sm})`,
    tablet: `(max-width: ${screenSizes.md})`,
    laptop: `(max-width: ${screenSizes.lg})`,
    laptopXL: `(max-width: ${screenSizes.xl})`,
    Desktop: `(max-width: ${screenSizes.xxl})`,
  },
};
export type deviceType = typeof devices;
