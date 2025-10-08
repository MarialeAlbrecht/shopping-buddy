import styled, { css } from "styled-components";
import MoreButton from "./MoreButton";
import DeleteButton from "./DeleteButton";
import { mutate } from "swr";
import EditButton from "./EditButton";
import BookmarkItems from "./BookmarkedItems";
import useSWR from "swr";

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
        <MoreButton _id={_id} />
        <DeleteButton onClick={handleDelete}>❌</DeleteButton>
        <EditButton _id={_id} />
        <BookmarkItems
          id={_id}
          isBookmarked={isBookmarked}
          onToggle={onToggleBookmark}
        />
      </Card>
    </>
  );
}

const Card = styled.section`
  background-color: white;
  border: 2px solid #1e1d6d;
  padding-top: 120px;
  padding-bottom: 70px;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  gap: 0.25rem;
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;

  color: #1e1d6d;
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
