import React from "react";
import ProductListItem from "./ProductListItem";
import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

export default { title: "ProductListItem", decorators: [withKnobs] };

export const Standard = () => (
  <ProductListItem
    name={text("Name", "Standard Coffee")}
    price={text("Price", "2.50")}
    imageUrl={text(
      "ImageUrl",
      "https://source.unsplash.com/tNALoIZhqVM/200x100/"
    )}
    onAddToCart={action("Add to card clicked!")}
  />
);
export const SouldOut = () => (
  <ProductListItem
    name={text("Name", "Standard Coffee")}
    price={text("Price", "2.50")}
    imageUrl={text(
      "ImageUrl",
      "https://source.unsplash.com/tNALoIZhqVM/200x100/"
    )}
    onAddToCart={action("Add to card clicked!")}
    isSoldOut
  />
);
export const OnSale = () => (
  <ProductListItem
    name={text("Name", "Standard Coffee")}
    price={text("Price", "2.50")}
    imageUrl={text(
      "ImageUrl",
      "https://source.unsplash.com/tNALoIZhqVM/200x100/"
    )}
    onAddToCart={action("Add to card clicked!")}
    isOnSale
  />
);
