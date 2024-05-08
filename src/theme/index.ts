import breakpoints, { BreakPointType } from "./breakPoints";
import { colors, ColorsType } from "./colors";
import { devices, deviceType } from "./device";
import { fontFamily, FontFamilyType } from "./fontFamily";
import { fontWeights, FontWeightType } from "./fontWeights";
import { FontSizesType, fontSizes } from "./fontSizes";
import { spaces, SpacesType } from "./spaces";
import { zIndices, ZIndicesType } from "./zIndices";

const theme: ThemeType = {
  colors,
  fontSizes,
  breakpoints,
  spaces,
  zIndices,
  fontWeights,
  devices,
  fontFamily,
};

export default theme;

export interface ThemeType {
  colors: ColorsType;
  fontSizes: FontSizesType;
  breakpoints: BreakPointType;
  spaces: SpacesType;
  zIndices: ZIndicesType;
  fontWeights: FontWeightType;
  devices: deviceType;
  fontFamily: FontFamilyType;
}
