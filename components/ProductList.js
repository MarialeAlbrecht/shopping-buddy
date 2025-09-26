import useSWR from "swr";
import ProductCard from "./ProductCard";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/shoppinglist", fetcher);
  console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Oops..we could not find any products</h1>;
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
