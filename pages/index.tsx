import { AppBar, Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Box>
      <AppBar position="static">
        <Typography>Navbar</Typography>
      </AppBar>
      <Typography>
        Here will be a super cool and super simple shopping list pwa.
      </Typography>
    </Box>
  );
};

export default Home;
