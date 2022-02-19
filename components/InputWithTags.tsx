import styled from "@emotion/styled";
import { Button, Chip, TextField } from "@mui/material";
import { FC, useState } from "react";
import { IItems } from "../pages";

interface IInputWithTagsProps {
  addItems: (x: IItems[]) => void;
}

const CustomTextField = styled(TextField)`
  width: 80%;
`;

export const InputWithTags: FC<IInputWithTagsProps> = ({ addItems }) => {
  const [itemsToAdd, setItemsToAdd] = useState<IItems[]>([]);
  const [fieldValue, setFieldValue] = useState<string>("");

  const handleChange = (e: any) => {
    setFieldValue(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.keyCode === 188) {
      if (fieldValue) {
        var itemArr = itemsToAdd;
        itemArr.push({ item: fieldValue.replace(",", ""), checked: false });
        setItemsToAdd(itemArr);
        setFieldValue("");
      }
    }
  };

  return (
    <>
      <CustomTextField
        value={fieldValue}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
      />
      {itemsToAdd.map((item, index) => (
        <Chip key={index} label={item.item} />
      ))}

      <Button onClick={() => addItems(itemsToAdd)}>Tallenna</Button>
    </>
  );
};
