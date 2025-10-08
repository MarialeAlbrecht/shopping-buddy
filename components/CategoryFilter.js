import { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";

export default function CategoryFilter({ onSelectCategory }) {
  const { data: categories, isLoading, error } = useSWR("/api/categories");
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>We could not load the categories...</p>;
  }
  function handleSelectedCategory(category) {
    if (selectedCategory === category._id) {
      setSelectedCategory(null);
      onSelectCategory(null);
    } else {
      setSelectedCategory(category._id);
      onSelectCategory(category.category);
    }
  }

  return (
    <ButtonContainer>
      {categories.map((category) => (
        <Button
          type="button"
          key={category._id}
          onClick={() => handleSelectedCategory(category)}
          $color={category.color}
          $selected={selectedCategory === category._id}
        >
          <Emoji>{category.emoji}</Emoji>
          <span>{category.category}</span>
        </Button>
      ))}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: ${({ $selected, $color }) =>
    $selected ? $color : "transparent"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #1e1d6d;
  font-weight: bold;
  padding: 1rem;
  border: 2px solid ${({ $color }) => $color};
  border-radius: 1rem;
  font-family: Helvetica, Arial, sans-serif;
`;

const Emoji = styled.span`
  font-size: 1.5rem;
`;
