import styled from "styled-components";
import Link from "next/link";
import pencil from "@/assets/pencil.png";
import Image from "next/image";

export default function EditButton({ _id }) {
  return (
    <StyledEditButton href={`/product/edit/${_id}`}>
      <Icon src={pencil} alt="Edit button" width={24} height={24} />{" "}
      <strong>Edit</strong>
    </StyledEditButton>
  );
}

const StyledEditButton = styled(Link)`
  background-color: #ed9c00;
  border-radius: 6px;
  font-size: small;
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  gap: 0.5rem;
  font-family: Helvetica, Arial, sans-serif;
  color: white;
  font-size: 0.8rem;
  text-decoration: none;
`;
const Icon = styled(Image)`
  width: 24px;
  height: 24px;
`;
