import { Box, Fade } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
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
  const [groceries, setGroceries] = useLocalStorage<IItems[]>("groceries", []);

  const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  const addItems = (items: IItems[]) => {
    const arrA = groceries;
    const arrB = items;
    const arrC = [...arrA, ...arrB];

    setGroceries(arrC);
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <TopBar />
      <Fade in timeout={800}>
        <div>
          <ItemContainer items={groceries} setGroceries={setGroceries} />
          {/* actually a button to open a modal */}
          <AddModal
            addItems={addItems}
            setKeyboardVisible={setKeyboardVisible}
          />
        </div>
      </Fade>
      <BottomNav keyboardVisible={keyboardVisible} />
    </Box>
  );
};

export default Home;
