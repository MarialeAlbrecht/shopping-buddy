import styled from "styled-components";
import Link from "next/link";
import add from "@/assets/add.png";
import Image from "next/image";

export default function AddProductButton() {
  return (
    <StyledAddButton href={`/createproduct`}>
      <Icon src={add} alt="Add new Product" width={30} height={30} />
    </StyledAddButton>
  );
}

const StyledAddButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #04c6a3;
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
  z-index: 2;
`;
const Icon = styled(Image)`
  position: absolute;
  top: -0, 2rem;
  right: 29%;
  bottom: 29.5%;
`;
