const darkColors = {
  coolBlack: "#002e63",
  gray: "#666666",
  dimGray: "#696969",
  ebony: "#555d50",
  davysGrey: "#555555",
  charcoal: "#36454f",
  charcoal2: "#444444",
  darkCharcoal: "#333333",
  outerSpace: "#414a4c",
  raisinBlack: "#242124",
  eerieBlack: "#1b1b1b",
  licorice: "#1a1110",
  black: "#000000",
};
const lightColors = {
  white: "#ffffff",
  gainsboro: "#dbdbdb",
  light: "#d7d0f2",
  snow: "#fffafa",
  seashell: "#FFF5EE",
  ivory: "#FFFFF0",
  whiteSmoke: "#f5f5f5",
  boneWhite: "#f9f6ee",
};

const neutralColors = {
  hex_00: "#000000",
  hex_08: "#080808",
  hex_11: "#111111",
  hex_1A: "#1A1A1A",
  hex_23: "#232323",
  hex_2C: "#2C2C2C",
  hex_33: "#333333",
  hex_3C: "#3C3C3C",
  hex_44: "#444444",
  hex_4D: "#4D4D4D",
  hex_55: "#555555",
  hex_5E: "#5E5E5E",
  hex_66: "#666666",
  hex_6F: "#6F6F6F",
  hex_77: "#777777",
  hex_80: "#808080",
  hex_88: "#888888",
  hex_91: "#919191",
  hex_99: "#999999",
  hex_A2: "#A2A2A2",
  hex_AA: "#AAAAAA",
  hex_B3: "#B3B3B3",
  hex_BB: "#BBBBBB",
  hex_C4: "#C4C4C4",
  hex_CC: "#CCCCCC",
  hex_D5: "#D5D5D5",
  hex_DD: "#DDDDDD",
  hex_E6: "#E6E6E6",
  hex_EE: "#EEEEEE",
  hex_F5: "#F5F5F5",
  hex_FC: "#fcfcfc",
  hex_FF: "#FFFFFF",
};

const agriculturalColors = {
  soilBrown: "#8B4513", // A rich, deep brown reminiscent of fertile soil
  fieldGreen: "#228B22", // A lush, vibrant green representing healthy crops
  wheatYellow: "#FFD700", // A golden yellow representing ripe wheat fields
  skyBlue: "#87CEEB", // A clear sky blue for open horizons
  leafGreen: "#32CD32", // A bright, fresh green for leaves and vegetation
  waterBlue: "#4682B4", // A deep blue for water sources in agriculture
  sunYellow: "#FFA500", // A bright, warm yellow for the sun
  earthBrown: "#A52A2A", // A reddish-brown earth tone
  cornYellow: "#F4A460", // A soft, warm yellow representing corn
  harvestGold: "#DAA520", // A deep gold for harvested crops
  barnRed: "#8B0000", // A deep, rich red for barns and farm structures
  hayYellow: "#FAF0E6", // A light, soft yellow for hay
  mossGreen: "#556B2F", // A deep, earthy green for moss and vegetation
  orchardOrange: "#FF8C00", // A bright orange representing orchards
  farmGray: "#708090", // A neutral gray for farm structures and equipment
  grassGreen: "#6B8E23", // A natural, deep green for grasses
  oliveGreen: "#808000", // An earthy, muted green for olive trees
  cloudWhite: "#F0F8FF", // A soft, light white for clouds
  clayRed: "#A52A2A", // A deep red representing clay soil
  grapePurple: "#6A0DAD", // A rich purple for vineyards and grapes
  lavenderPurple: "#E6E6FA", // A light purple representing lavender fields
  pumpkinOrange: "#FF7514", // A deep orange for pumpkins and squash
  duskBlue: "#2F4F4F", // A dark blue for evening sky and shadows
  forestGreen: "#0B6623", // A deep, dark green for forests and trees
  riverBlue: "#4682B4", // A blue for rivers and water sources
  carrotOrange: "#FFA500", // A bright orange for carrots
  cedarBrown: "#5E3A22", // A dark brown for cedar trees
  stoneGray: "#708090", // A neutral gray for stones and farm structures
  sunrisePink: "#FF69B4", // A soft pink for sunrises and sunsets
};

export const colors = {
  ...darkColors,
  ...lightColors,
  ...neutralColors,
  ...agriculturalColors,
  primary: "#9280D9",
  secondary: "#F1D56F",
  tertiary: "#198754",
  canceled: "#6c757d",
  paused: "#343a40",
  accent: "#F687B1",
  highlight: "#345B9F",
  warning: "#D8882E",
  caution: "#FED440",
  danger: "#D64960",
  success: "#37B75A",
  info: "#17a2b8",
  textColor: "#333333",
  caption: "#666666",
  borderColor: "#dbdbdb",
  background: "#fdfdfd",
  transparent: "transparent",
};

export type ColorsType = typeof colors;
