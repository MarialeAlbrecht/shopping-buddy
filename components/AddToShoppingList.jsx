import { mutate } from "swr";
import styled from "styled-components";

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
      mutate();
    } else {
      console.error("Failed to add new ingredient");
    }
  }
  return <Button onClick={handleAdd}>add</Button>;
}

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 8px;
`;
