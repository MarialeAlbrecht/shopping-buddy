import ProductCard from "@/components/ProductCard";
import useSWR from "swr";
import styled from "styled-components";

export default function Purchased({ bookmark = [], onToggleBookmark }) {
  const { data: products, isLoading } = useSWR("/api/shoppinglist");

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!products || products.length === 0) {
    return <p>We didn´t found any product purchased...</p>;
  }

  const purchasedItems = products.filter((product) =>
    bookmark.includes(product._id)
  );

  return (
    <Main>
      <PageWrapper>
        <h1>Here are your purchased items:</h1>
        <h2>You have purchased {purchasedItems.length} products.</h2>
        {purchasedItems.length === 0 && (
          <p>You can add purchased products from your shoppinglist.</p>
        )}
        <ProductList>
          {purchasedItems.map((product) => (
            <ProductCard
              key={product._id}
              {...product}
              bookmark={bookmark}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </ProductList>
      </PageWrapper>
    </Main>
  );
}
const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 70px;
  max-width: 80%;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  color: #1e1d6d;
`;

const PageWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 70px;
  max-width: 80%;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  color: #1e1d6d;
`;
const ProductList = styled.ul`
  list-style: none;
`;
