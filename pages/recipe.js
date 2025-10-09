import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function RandomRecipe() {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      if (!response.ok) {
        throw new Error("An error ocurred");
      }
      const data = await response.json();
      setRecipe(data.meals[0]);
    }
    fetchRecipe();
  }, []);

  if (!recipe) {
    return <p>We couldn´t load the recipe...</p>;
  }

  const ingredients = [];
  for (let i = 0; i < 100; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${measure || ""} ${ingredient}`);
    }
  }

  return (
    <PageWrapper>
      <h1>{recipe.strMeal}</h1>
      <Image
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width={300}
        height={300}
      />
      <h2>Ingredients:</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
    </PageWrapper>
  );
}
const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  padding-bottom: 70px;
  max-width: 100%;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  color: #1e1d6d;
`;
