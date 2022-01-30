import { Fab } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const AddButton = () => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: "absolute", bottom: 70, right: 16 }}
    >
      <AddShoppingCartIcon />
    </Fab>
  );
};
