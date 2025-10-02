import styled from "styled-components";
import Link from "next/link";

export default function MoreButton({ _id }) {
  return <StyledMoreButton href={`/product/${_id}`}> More </StyledMoreButton>;
}

const StyledMoreButton = styled(Link)`
  background-color: #808080;
  border-radius: 6px;
  font-size: small;
  text-alig: left;
`;
