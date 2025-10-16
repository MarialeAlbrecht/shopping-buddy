import { mutate } from "swr";
import styled from "styled-components";
import tobepurchased from "@/assets/tobepurchased.png";
import Image from "next/image";

export default function AddToShoppingList({ ingredientName, quantity }) {
  async function handleAdd() {
    const newIngredient = {
      name: ingredientName,
      quantity: quantity,
      category: "Other",
    };

    const response = await fetch("/api/shoppinglist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newIngredient),
    });

    if (response.ok) {
      mutate("/api/shoppinglist");
    } else {
      console.error("Failed to add new ingredient");
    }
  }
  return (
    <Button onClick={handleAdd}>
      <Icon src={tobepurchased} alt="Add to Shopping List" />
    </Button>
  );
}

const Button = styled.button`
  background-color: white;
  border-radius: 6px;
  font-size: small;
  border: 2px solid #1e1d6d;
  right: 100px;
`;
const Icon = styled(Image)`
  width: 18px;
  height: 18px;
`;
