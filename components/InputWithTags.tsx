import styled from "@emotion/styled";
import { Button, Chip, TextField } from "@mui/material";
import { FC, useState } from "react";
import { IItems } from "../pages";

interface IInputWithTagsProps {
  // eslint-disable-next-line unused-imports/no-unused-vars
  addItems: (x: IItems[]) => void;
  handleClose: () => void;
}

const CustomTextField = styled(TextField)`
  width: 80%;
`;

export const InputWithTags: FC<IInputWithTagsProps> = ({
  addItems,
  handleClose,
}) => {
  const [itemsToAdd, setItemsToAdd] = useState<IItems[]>([]);
  const [fieldValue, setFieldValue] = useState<string>("");

  const handleChange = (e: any) => {
    setFieldValue(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.keyCode === 188) {
      if (fieldValue !== ",") {
        var itemArr = itemsToAdd;
        itemArr.push({ item: fieldValue.replace(",", ""), checked: false });
        setItemsToAdd(itemArr);
        setFieldValue("");
      } else {
        setFieldValue("");
      }
    }
  };

  const handleSubmit = () => {
    // save also the value from the textfield
    if (fieldValue) {
      var itemArr = itemsToAdd;
      itemArr.push({ item: fieldValue.replace(",", ""), checked: false });
      setItemsToAdd(itemArr);
      setFieldValue("");
    }
    addItems(itemsToAdd);
    handleClose();
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

      <Button onClick={handleSubmit}>Tallenna</Button>
    </>
  );
};
