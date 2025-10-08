import styled, { css } from "styled-components";
import MoreButton from "./MoreButton";
import DeleteButton from "./DeleteButton";
import { mutate } from "swr";
import EditButton from "./EditButton";
import BookmarkItems from "./BookmarkedItems";
import useSWR from "swr";
import Image from "next/image";
import trash from "@/assets/trash.png";

export default function ProductCard({
  name,
  quantity,
  category,
  _id,
  bookmark,
  onToggleBookmark,
}) {
  const { data: categories, isLoading, error } = useSWR("/api/categories");
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Error loading the categories...</p>;
  }

  const color = categories?.find((cat) => cat.category === category)?.color;

  // const router = useRouter();
  async function handleDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );
    if (!confirmed) return;

    const response = await fetch(`/api/shoppinglist/${_id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate("/api/shoppinglist");
    } else {
    }
  }

  const isBookmarked = bookmark.includes(_id);

  return (
    <>
      <Card $categoryColor={color}>
        <h2>{name}</h2>
        <p>
          <strong>Quantity:</strong> {quantity}
        </p>
        <CategoryLabel $color={color}>{category}</CategoryLabel>
        <ButtonRow>
          <MoreButton _id={_id} />
          <EditButton _id={_id} />
          <DeleteButton onClick={handleDelete}>
            <Icon src={trash} alt="Remove button" width={24} height={24} />
            <strong>Remove</strong>
          </DeleteButton>
        </ButtonRow>
        <PurchasedButton>
          <BookmarkItems
            id={_id}
            isBookmarked={isBookmarked}
            onToggle={onToggleBookmark}
          />
        </PurchasedButton>
      </Card>
    </>
  );
}

const Card = styled.section`
  position: relative;
  background-color: white;
  border: 2px solid #1e1d6d;
  padding-top: 120px;
  padding-bottom: 70px;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  gap: 0.25rem;
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;

  color: #1e1d6d;
  width: 100%;
  min-width: 200px;
  margin-bottom: 1.5rem;
  h2 {
    margin: 0;
    line-height: 2;
  }
  p {
    margin: 0;
    line-height: 1.5;
  }
`;

const CategoryLabel = styled.label`
  background-color: ${({ $color }) => $color};
  color: #1e1d6d;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  align-self: flex-start;
`;
const Icon = styled(Image)`
  width: 24px;
  height: 24px;
`;

const ButtonRow = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  > * {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
    position: relative;
    color: white;
    text-decoration: none;
    border-radius: 6px;
  }

  > * + * {
    border-left: 1px solid white;
  }
`;
const PurchasedButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  border-radius: 50%;
  border: 2px solid #1e1d6d;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;
