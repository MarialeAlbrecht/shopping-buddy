import styled from "styled-components";

export default function Header() {
  return <Title>Shopping Buddy</Title>;
}

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  background-color: #097969;
  color: white;
  margin: 0;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;
