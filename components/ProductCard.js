import styled, { css } from "styled-components";

export default function ProductCard({ name, quantity, category }) {
  const categoryColors = {
    Dairy: "pink",
    Bakery: "wheat",
    Fruits: "lightgreen",
    Vegetables: "darkgreen",
    Meat: "salmon",
    Beverages: "lightgray",
    Snacks: "skyblue",
    Household: "lightyellow",
    "Personal Care": "purple",
    Other: "red",
  };

  const color = categoryColors[category];

  return (
    <Card $categoryColor={color}>
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </Card>
  );
}

const Card = styled.li`
  ${({ $categoryColor }) =>
    $categoryColor &&
    css`
      background-color: ${$categoryColor};
    `}
`;
