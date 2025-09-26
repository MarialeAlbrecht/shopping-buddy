import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, error, isLoading } = useSWR(`/api/shoppinglist/${id}`);

  if (!id || isLoading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <main>
      <h1>{product.name}</h1>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={300}
        height={200}
      />
      <p>Quantity: {product.quantity}</p>
      <p>Category: {product.category}</p>
      <p>Comment: {product.comment}</p>
    </main>
  );
}
