import styled from "styled-components";

export default function BookmarkItems({ id, isBookmarked, onToggle }) {
  return (
    <StyledBookmarked onClick={() => onToggle(id)}>
      {isBookmarked ? "❤️" : "🤍"}
    </StyledBookmarked>
  );
}

const StyledBookmarked = styled.button`
  background-color: #dbebefff;
  border-radius: 6px;
  font-size: small;
`;
