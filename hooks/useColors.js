import { useColorMode } from "@chakra-ui/core";

const bgColor = {
  light: "#fefefe",
  dark: "#100d1f",
};

const primarytextColor = {
  light: "black",
  dark: "white",
};

const secondaryTextColor = {
  light: "gray.700",
  dark: "gray.300",
};

const borderColor = {
  light: "gray.200",
  dark: "gray.600",
};

const iconColor = {
  light: "gray.1000",
  dark: "white",
};

const useColors = () => {
  const { colorMode } = useColorMode();

  return {
    bgColor: bgColor[colorMode],
    primarytextColor: primarytextColor[colorMode],
    secondaryTextColor: secondaryTextColor[colorMode],
    borderColor: borderColor[colorMode],
    iconColor: iconColor[colorMode],
  };
};

export default useColors;
