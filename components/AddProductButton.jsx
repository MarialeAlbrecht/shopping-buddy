import styled from "styled-components";
import Link from "next/link";

export default function AddProductButton() {
  return <StyledAddButton href={`/createproduct`}> + </StyledAddButton>;
}

const StyledAddButton = styled(Link)`
  background-color: #1cd0b8ff;
  position: fixed;
  font-size: medium;
  right: 20px;
  bottom: 40px;
  width: 70px;
  height: 70px;
  appearance: none;
  border: none;
  padding: 10px;
  border-radius: 50%;
  outline: none;
`;
