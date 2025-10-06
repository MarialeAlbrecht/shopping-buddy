import useSWR from "swr";
import ProductCard from "./ProductCard";

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
    <>
      <h1>Here is your shopping list</h1>
      <h2>You have {shoppingItems.length} products to buy.</h2>
      {data.length === 0 ? (
        <h1>Your shoopping list is empty, please add new products.</h1>
      ) : (
        <ul>
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
        </ul>
      )}
    </>
  );
}
