import Link from "next/link";
import styled from "styled-components";

export default function AddProductButton() {
  return (
    <StyledAddButton>
      <Link href={`product/addproduct/newproduct/`}> + </Link>
    </StyledAddButton>
  );
}

const StyledAddButton = styled.button`
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
