import useSWR from "swr";
import { useRouter } from "next/router";
import exit from "@/assets/exit.png";
import Link from "next/link";
import styled from "styled-components";

export default function RecipeDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: recipe, error, isLoading } = useSWR(`/api/recipes/${id}`);

  if (error) return <p>Error loading recipe</p>;
  if (!id || isLoading) return <p>Loading recipe...</p>;
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <PageWrapper>
      <Link href={"/savedrecipes"}>
        <Icon src={exit} alt="Go Back" width={30} height={30} />
      </Link>

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
          <List key={index}>
            {ingredients.map((item, index) => (
              <li key={index}>
                {item.measure} {item.ingredient}
              </li>
            ))}
          </List>
        </TextSection>
        <TextSection>
          <h3>Instructions</h3>
          <Paragraph>{recipe.strInstructions}</Paragraph>
        </TextSection>
      </Main>
    </PageWrapper>
  );
}

const Icon = styled(Image)`
  position: absolute;
  top: -0, 2rem;
  right: 33%;
  bottom: 79.5%;
`;
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
