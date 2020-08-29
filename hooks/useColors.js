import { useColorMode } from "@chakra-ui/core";

const bgColor = {
  light: "#fefefe",
  dark: "#10202C",
};

const primarytextColor = {
  light: "#242629",
  dark: "#EFF1F7",
};

const secondaryTextColor = {
  light: "gray.700",
  dark: "gray.300",
};

const tertiaryTextColor = {
  light: "gray.600",
  dark: "gray.400",
};

const borderColor = {
  light: "gray.200",
  dark: "gray.600",
};

const useColors = () => {
  const { colorMode } = useColorMode();

  return {
    bgColor: bgColor[colorMode],
    primarytextColor: primarytextColor[colorMode],
    secondaryTextColor: secondaryTextColor[colorMode],
    borderColor: borderColor[colorMode],
    tertiaryTextColor: tertiaryTextColor[colorMode],
  };
};

export default useColors;
