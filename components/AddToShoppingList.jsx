import { mutate } from "swr";
import styled from "styled-components";
import tobepurchased from "@/assets/tobepurchased.png";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

export default function AddToShoppingList({ ingredientName, quantity }) {
  const [isAdding, setIsAdding] = useState(false);

  async function handleAdd() {
    setIsAdding(true);
    const newIngredient = {
      name: ingredientName,
      quantity: quantity,
      category: "Other",
    };
    try {
      const response = await fetch("/api/shoppinglist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newIngredient),
      });

      if (!response.ok) {
        throw new Error("Failed to add new ingredient");
      }

      mutate("/api/shoppinglist");
    } catch (err) {
      console.error(err);
    } finally {
      setIsAdding(false);
    }
  }

  return (
    <Button onClick={handleAdd} disabled={isAdding}>
      {isAdding ? (
        <ClipLoader size={18} color="#1e1d6d" />
      ) : (
        <Icon src={tobepurchased} alt="Add to Shopping List" />
      )}
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
