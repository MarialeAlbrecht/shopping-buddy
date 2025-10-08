import styled from "styled-components";
import tobepurchased from "@/assets/tobepurchased.png";
import purchasedlist from "@/assets/purchasedlist.png";
import Image from "next/image";

export default function BookmarkItems({ id, isBookmarked, onToggle }) {
  return (
    <StyledBookmarked isBookmarked={isBookmarked} onClick={() => onToggle(id)}>
      <Icon
        src={isBookmarked ? purchasedlist : tobepurchased}
        alt={isBookmarked ? "In Purchased list" : "In shopping list"}
      />
    </StyledBookmarked>
  );
}

const StyledBookmarked = styled.button`
  background-color: ${({ isBookmarked }) =>
    isBookmarked ? "#1e1d6d" : "white"};
  border-radius: 6px;
  font-size: small;
  border: 2px solid #1e1d6d;
`;
const Icon = styled(Image)`
  width: 44px;
  height: 44px;
`;
