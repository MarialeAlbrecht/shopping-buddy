import { mutate } from "swr";
import Image from "next/image";
import styled from "styled-components";
import useSWR from "swr";

export default function RandomRecipe() {
  const { data, error, isloading, mutate } = useSWR(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  if (error) {
    return <p>We couldn´t load the recipe...</p>;
  }
  if (isloading) {
    return <p>Loading ... </p>;
  }

  const recipe = data?.meals?.[0];

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
        loading="eager"
      />
      <h2>Ingredients:</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
      <button
        type="button"
        onClick={() => {
          mutate();
          window.scrollTo(0, 0);
        }}
      >
        <h2>Get another recipe</h2>
      </button>
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
