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
    <>
      {categories.map((category) => (
        <Button
          type="button"
          key={category._id}
          onClick={() => handleSelectedCategory(category)}
          $color={category.color}
          $selected={selectedCategory === category._id}
        >
          <span>{category.emoji}</span>
          <span>{category.category}</span>
        </Button>
      ))}
    </>
  );
}

const Button = styled.button`
  background-color: ${({ $selected, $color }) =>
    $selected ? $color : "transparent"};
`;
