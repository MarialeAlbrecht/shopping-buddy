import useSWR from "swr";
import SaveRecipeCard from "@/components/SaveRecipeCard";
import styled from "styled-components";

export default function RecipeList() {
  const { data, isLoading } = useSWR("/api/recipes");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Oops..we could not find any products</p>;
  }

  return (
    <PageWrapper>
      <h1>Here are your saved recipes!</h1>
      {data.length === 0 ? (
        <p>You haven´t saved any recipe.</p>
      ) : (
        <List>
          {data.map((recipe) => (
            <SaveRecipeCard
              key={recipe._id}
              _id={recipe._idMeal}
              name={recipe.name}
              image={recipe.image}
            />
          ))}
        </List>
      )}
    </PageWrapper>
  );
}
const PageWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 70px;
  max-width: 80%;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  color: #1e1d6d;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
