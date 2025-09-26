import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from "swr";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, isLoading, error } = useSWR(`/api/shoppinglist/${id}`);

  if (error) {
    return <p>Error loading product.</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={300} height={200} />
      <p>Quantity: {product.quantity}</p>
      <p>Category: {product.category}</p>
      <p>Comment: {product.comment}</p>
    </main>
  );
}
