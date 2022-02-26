import { Box, Fade, Typography } from "@mui/material";
import type { NextPage } from "next";
import { BottomNav } from "../components/BottomNav";
import { TopBar } from "../components/TopBar";
import { ColorPalette } from "mui-color";

interface ISettingsProps {
  setThemeColor: (x: string) => void;
  themeColor: string;
}

const palette: Record<string, string> = {
  red: "rgb(235, 64, 52)",
  blue: "#4058e2",
  green: "#32d132",
  yellow: "#fcf80f",
  // cyan: "cyan",
  // lime: "lime",
  // gray: "gray",
  orange: "#eb6308",
  purple: "#af1fe7",
  black: "#363434",
  // white: "white",
  pink: "#e01c95",
  // darkblue: "darkblue",
};

const Settings: NextPage<ISettingsProps> = ({ setThemeColor, themeColor }) => {
  // const [themeColor, setThemeColor] = useLocalStorage<string>(
  //   "themeColor",
  //   theme.palette.primary.main
  // );

  const handleChange = (newValue: string) => {
    setThemeColor(palette[newValue]);
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <TopBar />
      <Fade in={true}>
        <div>
          <Typography>Hello</Typography>
          {/* <CustomButtonGroup>
            {colorList.map((color, index) => (
              <Button
                key={index}
                onClick={() => setThemeColor(color)}
                sx={{ background: `${color}` }}
              />
            ))}
          </CustomButtonGroup> */}
          <div>
            <ColorPalette palette={palette} onSelect={(e) => handleChange(e)} />
          </div>
        </div>
      </Fade>
      <BottomNav />
    </Box>
  );
};

export default Settings;
