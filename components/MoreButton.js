import styled from "styled-components";

export default function MoreButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: #808080;
  border-radius: 6px;
  font-size: small;
`;
