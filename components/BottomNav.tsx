import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import { useRouter } from "next/router";

export const BottomNav = () => {
  const router = useRouter();

  const onLink = (href: string) => {
    router.push(href);
  };

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, width: "100%" }}
      showLabels
    >
      <BottomNavigationAction
        label="List"
        icon={<FormatListBulletedIcon />}
        onClick={() => onLink("/")}
      />
      <BottomNavigationAction
        label="Settings"
        icon={<SettingsIcon />}
        onClick={() => onLink("/settings")}
      />
    </BottomNavigation>
  );
};
