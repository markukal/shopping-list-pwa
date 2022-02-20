import { Box, useTheme } from "@mui/material";
import type { NextPage } from "next";
import { AddModal } from "../components/AddModal";
import { BottomNav } from "../components/BottomNav";
import { ItemContainer } from "../components/ItemContainer";
import { TopBar } from "../components/TopBar";
import useLocalStorage from "../hooks/UseLocalStorage";

export interface IItems {
  item: string;
  checked: boolean;
}

const Home: NextPage = () => {
  const theme = useTheme();
  const [groceries, setGroceries] = useLocalStorage<IItems[]>("groceries", []);
  // const [themeColor, setThemeColor] = useLocalStorage<string>(
  //   "themeColor",
  //   theme.palette.primary.main
  // );

  const addItems = (items: IItems[]) => {
    const arrA = groceries;
    const arrB = items;
    const arrC = [...arrA, ...arrB];

    setGroceries(arrC);
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <TopBar />
      <ItemContainer items={groceries} setGroceries={setGroceries} />
      {/* actually a button to open a modal */}
      <AddModal addItems={addItems} />
      <BottomNav />
    </Box>
  );
};

export default Home;
