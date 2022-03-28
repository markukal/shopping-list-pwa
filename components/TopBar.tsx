import { AppBar, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";

const CartIcon = styled(ShoppingCartIcon)`
  margin: 1rem 1rem 0 1rem;
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

const CustomCartIcon = styled(CartIcon)`
  margin-top: auto;
  margin-bottom: auto;
  color: #f5f5f5;
`;

const CustomHeader = styled.h3`
  color: #f5f5f5;
`;

export const TopBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ height: "4rem", background: (p) => p.palette.primary.main }}
    >
      <Stack direction="row" alignItems="center">
        <CustomCartIcon sx={{ color: "#f5f5f5" }} />
        <CustomHeader>Super simple shopping list app</CustomHeader>
      </Stack>
    </AppBar>
  );
};
