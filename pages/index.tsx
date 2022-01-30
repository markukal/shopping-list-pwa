import { AppBar, Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import { AddButton } from "../components/AddButton";
import { BottomNav } from "../components/BottomNav";
import { TopBar } from "../components/TopBar";

const Home: NextPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <TopBar />
      <AddButton />
      <BottomNav />
    </Box>
  );
};

export default Home;
