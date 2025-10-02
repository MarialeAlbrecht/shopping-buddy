import ProductCard from "@/components/ProductCard";
import useSWR from "swr";
import Link from "next/link";

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
    <main>
      <h1>Here are your purchased items:</h1>
      <h2>You have purchased {purchasedItems.length} products.</h2>
      {purchasedItems.length === 0 && (
        <h2>
          No products were purchased. You can add purchased products from your
          shoppinglist.
        </h2>
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
  );
}
