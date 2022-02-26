import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";
import { CssBaseline } from "@mui/material";

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
          mode: "dark",
        },
      }),
    [themeColor]
  );

  console.log(themeColor);

  return (
    themeColor && (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component
          {...pageProps}
          setThemeColor={setThemeColor}
          themeColor={themeColor}
        />
      </ThemeProvider>
    )
  );
}

export default MyApp;
