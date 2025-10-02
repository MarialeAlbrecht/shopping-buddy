import styled from "styled-components";
import Link from "next/link";

export default function AddProductButton() {
  return <StyledAddButton href={`/createproduct`}> + </StyledAddButton>;
}

const StyledAddButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1cd0b8ff;
  position: fixed;
  font-size: medium;
  right: 20px;
  bottom: 80px;
  width: 70px;
  height: 70px;
  padding: 10px;
  border-radius: 50%;
  outline: none;
  text-decoration: none;
`;
