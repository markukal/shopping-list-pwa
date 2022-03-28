import { IconButton, useTheme } from "@mui/material";
import { FC } from "react";
import { IItems } from "../pages";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";

interface IItemContainerProps {
  items: IItems[];
  // eslint-disable-next-line unused-imports/no-unused-vars
  setGroceries: (x: IItems[]) => void;
}

const NotebookContainer = styled.div`
  width: "95vw";
  margin: 0 auto;
  padding: 0;
`;

const NotebookList = styled.div`
  color: #555;
  font-size: 25px;
  padding: 0 !important;
  width: "90vw";
  font-family: GochiHand;
`;

const ListRow = styled.li`
  list-style: none;
  position: relative;
  border-bottom: 1px dotted #8f98e9;
  text-indent: 5px;
  height: auto;
  text-transform: capitalize;
  min-height: 41px;
`;

export const ItemContainer: FC<IItemContainerProps> = ({
  items,
  setGroceries,
}) => {
  const theme = useTheme();

  const handleDelete = (index: number) => {
    var newItemArr = items.filter((_, ind) => ind !== index);
    setGroceries(newItemArr);
  };

  const handleChecked = (index: number) => {
    if (items[index]) {
      let newItemArr = items;
      newItemArr[index].checked = !newItemArr[index].checked;
      setGroceries(newItemArr);
    }
  };

  const renderEmptyRows = () => {
    const rows: JSX.Element[] = [];

    for (var i = items.length; i < 17; i++) {
      rows.push(<ListRow key={items.length + i} />);
    }
    return rows;
  };

  return (
    items && (
      <div>
        <NotebookContainer>
          <NotebookList>
            <ul style={{ padding: 0, paddingBottom: "4rem" }}>
              {items.map((item, index) => (
                <ListRow key={index}>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      textDecoration: item.checked ? "line-through" : "none",
                      color:
                        theme.palette.mode === "dark" ? "#f5f5f5" : "#000000",
                    }}
                    onClick={() => handleChecked(index)}
                  >
                    {item.item}
                  </span>
                  <IconButton
                    sx={{
                      float: "right",
                      p: 0,
                      position: "absolute",
                      bottom: 5,
                      right: 8,
                    }}
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListRow>
              ))}
              {renderEmptyRows()}
            </ul>
          </NotebookList>
        </NotebookContainer>
      </div>
    )
  );
};
