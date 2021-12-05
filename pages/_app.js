import "../styles/globals.css";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const theme = extendTheme({ config });
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.useSystemColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
