import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
import RecipeButton from "./RecipeDetailButton";

export default function RecipeCard({ name, image, _id }) {
  const { data: categories, isLoading, error } = useSWR("/api/recipes");
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Error loading the categories...</p>;
  }

  return (
    <Card>
      <CardImage src={image} alt={name} width={140} height={140} />
      <h2>{name}</h2>
      <RecipeButton _id={_id} />
    </Card>
  );
}
const Card = styled.section`
  position: relative;
  background-color: white;
  border: 2px solid #1e1d6d;
  padding-top: 120px;
  padding-bottom: 70px;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  gap: 1.15rem;
  display: flex;
  flex-direction: row;
  font-family: Helvetica, Arial, sans-serif;

  color: #1e1d6d;
  width: 100%;
  min-width: 200px;
  margin-bottom: 1.5rem;
  h2 {
    margin: 0;
    line-height: 2;
  }
  p {
    margin: 0;
    line-height: 1.5;
  }
`;

const CardImage = styled(Image)`
  flex-shrink: 0;
  border-radius: 1rem;
`;
