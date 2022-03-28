import { Fab, Modal, Paper, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { FC, useState } from "react";
import styled from "@emotion/styled";
import { InputWithTags } from "./InputWithTags";
import { IItems } from "../pages";

const ModalContainer = styled(Paper)`
  width: 90vw;
  margin: auto;
  margin-top: 20vh;
  height: 50vh;
  text-align: center;
`;

interface IAddModalProps {
  // eslint-disable-next-line unused-imports/no-unused-vars
  addItems: (x: IItems[]) => void;
  setKeyboardVisible: (x: boolean) => void;
}

export const AddModal: FC<IAddModalProps> = ({
  addItems,
  setKeyboardVisible,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Fab
        onClick={handleOpen}
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 70, right: 16 }}
      >
        <AddShoppingCartIcon />
      </Fab>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2, pt: 2 }}
          >
            Add groceries
          </Typography>
          <InputWithTags
            addItems={addItems}
            handleClose={handleClose}
            setKeyboardVisible={setKeyboardVisible}
          />
        </ModalContainer>
      </Modal>
    </>
  );
};
