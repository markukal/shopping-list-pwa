import styled from "@emotion/styled";
import { Box, Button, ButtonGroup, Typography, useTheme } from "@mui/material";
import type { NextPage } from "next";
import { BottomNav } from "../components/BottomNav";
import { TopBar } from "../components/TopBar";
import useLocalStorage from "../hooks/UseLocalStorage";

interface ISettingsProps {
  setThemeColor: (x: string) => void;
}

const CustomButtonGroup = styled(ButtonGroup)`
  height: 20px;
  margin: 10px;
  min-width: 90vw;
`;

const Settings: NextPage<ISettingsProps> = ({ setThemeColor }) => {
  const theme = useTheme();
  // const [themeColor, setThemeColor] = useLocalStorage<string>(
  //   "themeColor",
  //   theme.palette.primary.main
  // );

  const colorList = ["#6131af", "#1ad323", "#d31a1a", "#3c1ad3"];

  return (
    <Box sx={{ height: "100vh" }}>
      <TopBar />
      <Typography>Hello</Typography>
      <CustomButtonGroup>
        {colorList.map((color, index) => (
          <Button
            key={index}
            onClick={() => setThemeColor(color)}
            sx={{ background: `${color}` }}
          />
        ))}
      </CustomButtonGroup>
      <BottomNav />
    </Box>
  );
};

export default Settings;
