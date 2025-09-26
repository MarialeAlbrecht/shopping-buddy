import useSWR from "swr";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/shoppinglist");
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Oops..we could not find any products</p>;
  }

  return (
    <>
      <h1>Here is your shopping list</h1>
      <h2>You have {data.length} products in total.</h2>
      {data.length === 0 ? (
        <h1>Your shoopping list is empty, please add new products.</h1>
      ) : (
        <ul>
          {data.map((item) => (
            <ProductCard
              key={item._id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </>
  );
}
