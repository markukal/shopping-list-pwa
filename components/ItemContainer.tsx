import { IconButton } from "@mui/material";
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
`;

export const ItemContainer: FC<IItemContainerProps> = ({
  items,
  setGroceries,
}) => {
  const handleDelete = (index: number) => {
    items.splice(index, 1);
    setGroceries(items);
  };

  return (
    items && (
      <div>
        <NotebookContainer>
          <NotebookList>
            <ul style={{ padding: 0 }}>
              {items.map((item, index) => (
                <ListRow key={index}>
                  {item.item}
                  <IconButton onClick={() => handleDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListRow>
              ))}
            </ul>
          </NotebookList>
        </NotebookContainer>
      </div>
    )
  );
};
