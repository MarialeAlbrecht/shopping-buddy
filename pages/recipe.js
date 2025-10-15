import { mutate } from "swr";
import Image from "next/image";
import styled from "styled-components";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function RandomRecipe() {
  const router = useRouter();
  const { data: IDMeals } = useSWR("/api/recipes");
  const savedID = IDMeals?.map((recipe) => recipe.idMeal);

  const { data, error, isLoading, mutate } = useSWR(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  if (error) {
    return <p>We couldn´t load the recipe...</p>;
  }
  if (isLoading) {
    return <p>Loading ... </p>;
  }

  const recipe = data?.meals?.[0];

  if (recipe && savedID.includes(recipe.idMeal)) {
    mutate();
    return <p>Getting a new recipe...</p>;
  }

  if (!recipe) {
    return <p>We couldn´t load the recipe...</p>;
  }
  const ingredients = [];
  for (let i = 0; i < 100; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measure: measure || "" });
    }
  }
  async function addRecipe() {
    const newRecipe = {
      idMeal: recipe.idMeal,
      name: recipe.strMeal,
      image: recipe.strMealThumb,
      instructions: recipe.strInstructions,
      ingredients: ingredients,
    };

    console.log("newrecipe", newRecipe);

    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
    if (response.ok) {
      router.push("/savedrecipes");
    }
  }

  return (
    <PageWrapper>
      <Main>
        <h1>{recipe.strMeal}</h1>
        <ProductImage
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          width={350}
          height={350}
          loading="eager"
        />
        <TextSection>
          <h3>Ingredients:</h3>
          <List>
            {ingredients.map((item, index) => (
              <li key={index}>
                {item.measure}
                {item.ingredient}
              </li>
            ))}
          </List>
        </TextSection>
        <TextSection>
          <h3>Instructions</h3>
          <Paragraph>{recipe.strInstructions}</Paragraph>
        </TextSection>
        <StyleButton
          type="button"
          onClick={() => {
            mutate();
            window.scrollTo(0, 0);
          }}
        >
          <p>Get another recipe</p>
        </StyleButton>
        <StyleButton type="button" onClick={addRecipe}>
          <p>Save recipe</p>
        </StyleButton>
      </Main>
    </PageWrapper>
  );
}
const PageWrapper = styled.section`
  display: flex;
  flex-direction: center;
  align-items:center:
  padding-top: 120px;
  padding-bottom: 70px;
  max-width: 80%;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  color: #1e1d6d;
`;

const StyleButton = styled.button`
  background-color: #04c6a3;
  color: #1e1d6d;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  white-space: nowrap;
  margin-top: 0.5rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 70px;
  max-width: 80%;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  color: #1e1d6d;
`;

const TextSection = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 1rem;
`;

const ProductImage = styled(Image)`
  border-radius: 20px;
  margin-top: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  line-height: 1.2;
`;

const Paragraph = styled.p`
  text-align: justify;
  line-height: 1.2;
`;
