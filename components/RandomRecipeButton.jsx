import styled from "styled-components";
import Link from "next/link";

export default function AddRecipeButton() {
  return (
    <StyledAddButton href={`/recipe`}>
      <strong>Get a random recipe!</strong>
    </StyledAddButton>
  );
}

const StyledAddButton = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #04c6a3;
  color: #1e1d6d;
  position: fixed;
  bottom: 15%;
  left: 43%;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  width: auto;
  white-space: nowrap;
  margin-top: 0.5rem;
  outline: none;
  text-decoration: none;
  z-index: 2;
`;
