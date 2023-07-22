import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    blue: {
      default: "#364D9D",
      light: "#647AC7",
    },
    gray: {
      1: "#1A181B",
      2: "#3E3A40",
      3: "#5F5B62",
      4: "#9F9BA1",
      5: "#D9D8DA",
      6: "#EDECEE",
      7: "#F7F7F8",
    },
    red: {
      default: "#EE7979",
    },
  },
  fonts: {
    heading: "Karla_700Bold",
    body: "Karla_400Regular",
  },
  fontSizes: {
    sm: 14,
    lg: 20,
    xl: 24,
  },
});
