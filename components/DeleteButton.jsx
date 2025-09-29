import styled from "styled-components";

export default function DeleteButton({ children, onClick }) {
  return <StyledDeleteButton onClick={onClick}>{children}</StyledDeleteButton>;
}

const StyledDeleteButton = styled.button`
  background-color: #6a0f9fff;
  border-radius: 6px;
  font-size: small;
`;
