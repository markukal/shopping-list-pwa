import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";

export const BottomNav = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{ position: "absolute", bottom: 0, width: "100%" }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="List" icon={<FormatListBulletedIcon />} />
      <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
};
