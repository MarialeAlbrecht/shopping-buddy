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
  left: 20px;
  bottom: 40px;
  appearance: none;
  border: none;
  background: #ff7dcb;
  padding: 10px;
  border-radius: 10px;
`;
