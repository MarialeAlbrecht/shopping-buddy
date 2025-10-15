import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
import RecipeButton from "./RecipeDetailButton";
import DeleteRecipeButton from "./DeleteRecipeButton";
import trash from "@/assets/trash.png";
import { mutate } from "swr";

export default function RecipeCard({ name, image, _id }) {
  const { data, isLoading, error } = useSWR("/api/recipes");
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Error loading the recipes...</p>;
  }
  async function handleDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete the recipe "${name}"?`
    );
    if (!confirmed) return;

    const response = await fetch(`/api/recipes/${_id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate("/api/recipe");
    } else {
    }
  }

  return (
    <Card>
      <CardImage src={image} alt={name} width={140} height={140} />
      <h2>{name}</h2>
      <StyledRecipeButton>
        <RecipeButton _id={_id} />
        <DeleteRecipeButton onClick={handleDelete}>
          <Icon src={trash} alt="Remove button" width={24} height={24} />
        </DeleteRecipeButton>{" "}
      </StyledRecipeButton>
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
const StyledRecipeButton = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
const Icon = styled(Image)`
  width: 24px;
  height: 24px;
`;
