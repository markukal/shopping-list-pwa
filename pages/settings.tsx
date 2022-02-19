import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import { BottomNav } from "../components/BottomNav";
import { TopBar } from "../components/TopBar";

const Settings: NextPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <TopBar />
      <Typography>Hello</Typography>
      <BottomNav />
    </Box>
  );
};

export default Settings;
