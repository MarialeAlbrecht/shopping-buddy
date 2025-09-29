import styled, { css } from "styled-components";
import MoreButton from "./MoreButton";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { useRouter } from "next/router";

export default function ProductCard({ name, quantity, category, _id }) {
  const router = useRouter();
  async function handleDelete() {
    const response = await fetch(`/api/shoppinglist/${_id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return;
    }
  }

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
    <>
      <Card $categoryColor={color}>
        <p>Name: {name}</p>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
        <Link href={`/product/${_id}`}>
          <MoreButton>More</MoreButton>
        </Link>
        <DeleteButton onClick={handleDelete}>❌</DeleteButton>
      </Card>
    </>
  );
}

const Card = styled.li`
  ${({ $categoryColor }) =>
    $categoryColor &&
    css`
      background-color: ${$categoryColor};
    `}
`;
