import useSWR from "swr";
import ProductCard from "./ProductCard";
import styled from "styled-components";

export default function ProductList({
  bookmark = [],
  onToggleBookmark,
  selectCategory,
}) {
  const { data, isLoading } = useSWR("/api/shoppinglist");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Oops..we could not find any products</p>;
  }
  let shoppingItems = data.filter((item) => !bookmark.includes(item._id));

  if (selectCategory) {
    shoppingItems = shoppingItems.filter(
      (item) => item.category === selectCategory
    );
  }

  return (
    <PageWrapper>
      <h1>Here is your shopping list</h1>
      <h2>You have {shoppingItems.length} products to buy.</h2>
      {data.length === 0 ? (
        <p>Your shoopping list is empty, please add new products.</p>
      ) : (
        <List>
          {shoppingItems.map((item) => (
            <ProductCard
              key={item._id}
              _id={item._id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              bookmark={bookmark}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </List>
      )}
    </PageWrapper>
  );
}
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 70px;
  max-width: 80%;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  color: #1e1d6d;
`;
const List = styled.ul`
  list-style: none;
`;
