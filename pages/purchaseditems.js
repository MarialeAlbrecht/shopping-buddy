import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";

export default function Purchased({ data, bookmark, onToggleBookmark }) {
  const purchasedItems = data.filter((product) =>
    bookmark.includes(product._id)
  );

  return (
    <main>
      <h1>Here are your purchased items:</h1>
      <ProductList>
        {bookmark.length === 0 && (
          <h2>
            No products were purchased. You can add purchased products from your
            shoppinglist.
          </h2>
        )}
        {purchasedItems.map((product) => (
          <ProductCard
            key={product._id}
            {...product}
            bookmark={bookmark}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
        ;
      </ProductList>
    </main>
  );
}
