import styled from "styled-components";
import Link from "next/link";

export default function EditButton({ _id }) {
  return (
    <StyledEditButton href={`/product/edit/${_id}`}> Edit</StyledEditButton>
  );
}

const StyledEditButton = styled(Link)`
  background-color: #6aca10ff;
  border-radius: 6px;
  font-size: small;
`;
