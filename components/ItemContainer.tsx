import { FC } from "react";
import { IItems } from "../pages";

interface IItemContainerProps {
  items: IItems[];
}

export const ItemContainer: FC<IItemContainerProps> = ({ items }) => {
  return (
    items && (
      <div>
        {items.map((item, index) => (
          <p key={index}>{item.item}</p>
        ))}
      </div>
    )
  );
};
