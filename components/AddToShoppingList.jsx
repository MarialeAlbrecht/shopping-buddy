import { mutate } from "swr";
import styled from "styled-components";
import tobepurchased from "@/assets/tobepurchased.png";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import useSWR from "swr";

export default function AddToShoppingList({ ingredientName, quantity }) {
  const [isAdding, setIsAdding] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [added, setAdded] = useState(false);

  const { data: categorylist, isLoading, error } = useSWR("/api/categories");
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error loading the categories...</p>;

  async function handleAdd(category) {
    if (!category) return;
    setIsAdding(true);

    const newItem = {
      name: ingredientName,
      quantity: quantity,
      category: category,
      imageUrl: "",
      comment: "",
    };

    try {
      const response = await fetch("/api/shoppinglist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) throw new Error("Failed to add new ingredient");

      mutate("/api/shoppinglist");
      setAdded(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsAdding(false);
    }
  }

  if (added) return null;

  return (
    <Wrapper>
      {showSelect ? (
        <Dropdown
          value={selectedCategory}
          onChange={(event) => {
            const category = event.target.value;
            setSelectedCategory(category);
            handleAdd(category);
          }}
          disabled={isAdding}
        >
          <option value="" disabled>
            Select category
          </option>
          {categorylist.map((category) => (
            <option key={category._id} value={category.category}>
              {category.category}
            </option>
          ))}
        </Dropdown>
      ) : (
        <Button onClick={() => setShowSelect(true)} disabled={isAdding}>
          {isAdding ? (
            <ClipLoader size={18} color="#1e1d6d" />
          ) : (
            <Icon src={tobepurchased} alt="Add to Shopping List" />
          )}
        </Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

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
const Dropdown = styled.select`
  margin-top: 4px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;
`;
