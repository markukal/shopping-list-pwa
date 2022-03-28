import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import { useRouter } from "next/router";
import { FC } from "react";
import { useTheme } from "@mui/system";

interface IBottomNavProps {
  keyboardVisible?: boolean;
}

export const BottomNav: FC<IBottomNavProps> = ({ keyboardVisible }) => {
  const router = useRouter();
  const theme = useTheme();
  const onLink = (href: string) => {
    router.push(href);
  };

  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: `${theme.palette.primary.main}`,
        visibility: keyboardVisible ? "hidden" : "visible",
      }}
      showLabels
    >
      <BottomNavigationAction
        sx={{ color: "#f5f5f5" }}
        label="List"
        icon={<FormatListBulletedIcon />}
        onClick={() => onLink("/")}
      />
      <BottomNavigationAction
        sx={{ color: "#f5f5f5" }}
        label="Settings"
        icon={<SettingsIcon />}
        onClick={() => onLink("/settings")}
      />
    </BottomNavigation>
  );
};
