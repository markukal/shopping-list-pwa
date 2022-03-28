import { IconButton, List, useTheme } from "@mui/material";
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
  background-color: #f5f5f5;
  width: "95vw";
  margin: 0 auto;
  padding: 0;
`;

const NotebookList = styled.div`
  color: #555;
  font-size: 22px;
  padding: 0 !important;
  width: "90vw";
  font-family: courier, monospace;
  border: 1px solid #dedede;
`;

const ListRow = styled.li`
  list-style: none;
  border-bottom: 1px dotted #8f98e9;
  text-indent: 10px;
  height: auto;
  text-transform: capitalize;
  min-height: 41px;
`;

export const ItemContainer: FC<IItemContainerProps> = ({
  items,
  setGroceries,
}) => {
  const handleDelete = (index: number) => {
    items.splice(index, 1);
    setGroceries(items);
  };

  const handleChecked = (index: number) => {
    if (items[index]) {
      items[index].checked = !items[index].checked;
      setGroceries(items);
    }
  };

  const renderEmptyRows = () => {
    const rows: JSX.Element[] = [];

    for (var i = items.length; i < 15; i++) {
      rows.push(<ListRow key={items.length + i} />);
    }
    return rows;
  };

  return (
    items && (
      <div>
        <NotebookContainer>
          <NotebookList>
            <ul style={{ padding: 0 }}>
              {items.map((item, index) => (
                <ListRow
                  key={index}
                  style={{
                    textDecoration: item.checked ? "line-through" : "none",
                  }}
                >
                  <span onClick={() => handleChecked(index)}>{item.item}</span>
                  <IconButton onClick={() => handleDelete(index)}>
                    <DeleteIcon sx={{ color: "#575757" }} />
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
