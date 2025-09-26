import useSWR from "swr";
import ProductCard from "./ProductCard";

const fetcher = (url) => fetch.url.then((response) => response.json());

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/shoppingItem", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Oops..we could not find any products</h1>;
  }
}
