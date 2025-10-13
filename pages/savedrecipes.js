import SaveRecipeList from "@/components/SaveRecipeList";
import styled from "styled-components";
import RandomRecipeButton from "@/components/RandomRecipeButton";

export default function SaveRecipesPage() {
  return (
    <PageWrapper>
      <RandomRecipeButton />
      <SaveRecipeList />
    </PageWrapper>
  );
}
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  padding-bottom: 70px;
  max-width: 80%;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  color: #1e1d6d;
`;
