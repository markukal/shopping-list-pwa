import { Box } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import { AddModal } from "../components/AddButton";
import { BottomNav } from "../components/BottomNav";
import { ItemContainer } from "../components/ItemContainer";
import { TopBar } from "../components/TopBar";

export interface IItems {
  item: string;
  checked: boolean;
}

const Home: NextPage = () => {
  const [groceries, setGroceries] = useState<IItems[]>([
    { item: "hammasharja", checked: true },
    { item: "jogurttia", checked: true },
  ]);

  const addItems = (items: IItems[]) => {
    const arrA = groceries;
    const arrB = items;
    const arrC = [...arrA, ...arrB];

    setGroceries(arrC);
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <TopBar />
      <ItemContainer items={groceries} />
      {/* actually a button to open a modal */}
      <AddModal addItems={addItems} />
      <BottomNav />
    </Box>
  );
};

export default Home;
