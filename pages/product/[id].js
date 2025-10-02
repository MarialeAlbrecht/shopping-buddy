import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, error, isLoading } = useSWR(`/api/shoppinglist/${id}`);

  if (error) return <p>Error loading product</p>;
  if (!id || isLoading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <PageWrapper>
      <main>
        <Link href={"/"}>Go Back</Link>
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
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 70px;
  max-width: 800px;
  margin: 0 auto;
`;
