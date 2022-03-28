import { Box, Fade, Stack, Switch, Typography, useTheme } from "@mui/material";
import type { NextPage } from "next";
import { BottomNav } from "../components/BottomNav";
import { TopBar } from "../components/TopBar";
import { ColorPalette } from "mui-color";
import styled from "@emotion/styled";

const ColorPaletteWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ColorPickerWrapper = styled.div`
  margin-top: 3rem;
`;

const CustomStack = styled(Stack)`
  place-content: center;
`;

const ThemeSelectWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

interface ISettingsProps {
  setThemeColor: (x: string) => void;
  setThemeMode: (x: string) => void;
}

const palette: Record<string, string> = {
  red: "#eb4034",
  blue: "#4b60d6",
  orange: "#eb6308",
  purple: "#8a3da8",
  black: "#363434",
  pink: "#b82a82",
};

const Settings: NextPage<ISettingsProps> = ({
  setThemeColor,
  setThemeMode,
}) => {
  const theme = useTheme();

  const handleColorChange = (newValue: string) => {
    setThemeColor(palette[newValue]);
  };

  const handleThemeChange = () => {
    if (theme.palette.mode === "dark") {
      setThemeMode("light");
    } else {
      setThemeMode("dark");
    }
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <TopBar />
      <Fade in timeout={800}>
        <div style={{ marginTop: "30vh" }}>
          <ColorPickerWrapper>
            <Typography sx={{ textAlignLast: "center", fontWeight: 600 }}>
              Theme color
            </Typography>
            <ColorPaletteWrapper>
              <ColorPalette
                palette={palette}
                onSelect={(e) => handleColorChange(e)}
              />
            </ColorPaletteWrapper>
          </ColorPickerWrapper>

          <ThemeSelectWrapper>
            <Typography sx={{ fontWeight: 600 }}>Dark theme</Typography>
            <CustomStack direction="row" spacing={1} alignItems="center">
              <Typography sx={{ fontWeight: 600 }}>Off</Typography>
              <Switch
                checked={theme.palette.mode === "dark" ? true : false}
                onChange={handleThemeChange}
              />
              <Typography sx={{ fontWeight: 600 }}>On</Typography>
            </CustomStack>
          </ThemeSelectWrapper>
        </div>
      </Fade>
      <BottomNav />
    </Box>
  );
};

export default Settings;
