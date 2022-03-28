import styled from "@emotion/styled";
import {
  Button,
  Chip,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, useState } from "react";
import { IItems } from "../pages";

interface IInputWithTagsProps {
  // eslint-disable-next-line unused-imports/no-unused-vars
  addItems: (x: IItems[]) => void;
  handleClose: () => void;
  setKeyboardVisible: (x: boolean) => void;
}

const InputContentContainer = styled.div`
  height: 80%;
  width: 100%;
  position: relative;
`;

const CustomTextField = styled(TextField)`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const CenteredButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InputWithTags: FC<IInputWithTagsProps> = ({
  addItems,
  handleClose,
  setKeyboardVisible,
}) => {
  const [itemsToAdd, setItemsToAdd] = useState<IItems[]>([]);
  const [fieldValue, setFieldValue] = useState<string>("");

  const handleChange = (e: any) => {
    setFieldValue(e.target.value);
    if (e.target.value.includes(",")) {
      handleKeyPress(e.target.value);
    }
  };

  // the bottom nav needs to be hidden when using on mobile
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const handleKeyPress = (input: string) => {
    if (input !== ",") {
      var itemArr = itemsToAdd;
      itemArr.push({ item: input.replace(",", ""), checked: false });
      setItemsToAdd(itemArr);
      setFieldValue("");
    } else {
      setFieldValue("");
    }
  };

  const handleSubmit = () => {
    // save also the value from the textfield
    var itemArr = itemsToAdd;
    if (fieldValue) {
      itemArr.push({ item: fieldValue.replace(",", ""), checked: false });
      setItemsToAdd(itemArr);
      setFieldValue("");
    }
    addItems(itemArr);
    setItemsToAdd([]);
    handleClose();
  };

  return (
    <InputContentContainer>
      <CustomTextField
        placeholder="Separate with comma"
        value={fieldValue}
        onChange={handleChange}
        onFocus={() => (matches ? setKeyboardVisible(true) : null)}
        onBlur={() => (matches ? setKeyboardVisible(false) : null)}
      />
      <div>
        {itemsToAdd.map((item, index) => (
          <Chip sx={{ margin: "3px" }} key={index} label={item.item} />
        ))}
      </div>

      <CenteredButton variant="contained" onClick={handleSubmit}>
        Add
      </CenteredButton>
    </InputContentContainer>
  );
};
