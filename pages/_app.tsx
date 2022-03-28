import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const [themeColor, setThemeColor] = useLocalStorage<string>(
    "themeColor",
    "#eb4034"
  );

  const [themeMode, setThemeMode] = useLocalStorage<string>(
    "themeMode",
    "light"
  );
  const [theme, setTheme] = useState<Theme>();

  const createCorrectTheme = (themeColor: string, themeMode: string) => {
    if (themeMode === "light") {
      const newTheme = createTheme({
        palette: {
          primary: { main: themeColor },
          mode: "light",
        },
        typography: {
          fontFamily: "Arial, GochiHand, sans-serif",
        },
      });
      setTheme(newTheme);
    } else {
      const newTheme = createTheme({
        palette: {
          primary: { main: themeColor },
          mode: "dark",
        },
        typography: {
          fontFamily: "Arial, GochiHand, sans-serif",
        },
      });
      setTheme(newTheme);
    }
  };

  useEffect(() => {
    createCorrectTheme(themeColor, themeMode);
  }, [themeColor, themeMode]);

  return theme ? (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component
        {...pageProps}
        setThemeColor={setThemeColor}
        setThemeMode={setThemeMode}
      />
    </ThemeProvider>
  ) : null;
}

export default MyApp;
