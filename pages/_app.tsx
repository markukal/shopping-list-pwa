import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";

function MyApp({ Component, pageProps }: AppProps) {
  const [themeColor, setThemeColor] = useLocalStorage<string>(
    "themeColor",
    "#d31a1a"
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: themeColor },
        },
      }),
    [themeColor]
  );

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} setThemeColor={setThemeColor} />
    </ThemeProvider>
  );
}

export default MyApp;
