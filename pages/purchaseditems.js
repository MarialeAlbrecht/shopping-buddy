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
    <PageWrapper>
      <main>
        <h1>Here are your purchased items:</h1>
        <h2>You have purchased {purchasedItems.length} products.</h2>
        {purchasedItems.length === 0 && (
          <p>You can add purchased products from your shoppinglist.</p>
        )}
        <ul>
          {purchasedItems.map((product) => (
            <ProductCard
              key={product._id}
              {...product}
              bookmark={bookmark}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </ul>
      </main>
    </PageWrapper>
  );
}
const PageWrapper = styled.div`
  display: flex;
  padding-top: 120px;
  padding-bottom: 70px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  color: #1e1d6d;
`;
