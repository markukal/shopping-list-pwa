import { Fab, Modal, Paper, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { FC, useState } from "react";
import styled from "@emotion/styled";
import { InputWithTags } from "./InputWithTags";
import { IItems } from "../pages";

const ModalContainer = styled(Paper)`
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100vw;
  height: 50vh;
  margin-left: 1rem;
  margin-right: 1rem;
`;

interface IAddModalProps {
  // eslint-disable-next-line unused-imports/no-unused-vars
  addItems: (x: IItems[]) => void;
}

export const AddModal: FC<IAddModalProps> = ({ addItems }) => {
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Lisää tuotteita
          </Typography>
          <InputWithTags addItems={addItems} handleClose={handleClose} />
        </ModalContainer>
      </Modal>
    </>
  );
};
