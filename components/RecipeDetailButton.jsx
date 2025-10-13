import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import plus from "@/assets/plus.png";

export default function RecipeButton({ _id }) {
  return (
    <StyledMoreButton href={`/recipe/${_id}`}>
      <Icon src={plus} alt="Recipe detail button" width={24} height={24} />
      <strong>More </strong>
    </StyledMoreButton>
  );
}

const StyledMoreButton = styled(Link)`
  background-color: #ed9c00;
  border-radius: 6px;
  font-size: small;
  display: inline-flex;
  align-items: center;
  padding: 0.7rem 1.5rem;
  gap: 0.5rem;
  font-family: Helvetica, Arial, sans-serif;
  color: white;
  font-size: 0.8rem;
  text-decoration: none;
  cursor: pointer;
`;
const Icon = styled(Image)`
  width: 24px;
  height: 24px;
`;
