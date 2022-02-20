import { AppBar, Typography } from "@mui/material";
import { FC } from "react";

interface ITopBarProps {}

export const TopBar: FC<ITopBarProps> = ({}) => {
  return (
    <AppBar position="static" sx={{ height: "50px" }}>
      <Typography>Navbar</Typography>
    </AppBar>
  );
};
