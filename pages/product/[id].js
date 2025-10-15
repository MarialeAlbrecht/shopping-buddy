import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import exit from "@/assets/exit.png";

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
        <Link href={"/"}>
          <Icon src={exit} alt="Go Back" width={30} height={30} />
        </Link>
        <Title>{product.name}</Title>
        {product.imageUrl && (
          <ProductImage
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={200}
          />
        )}
        <p>
          <strong>Quantity:</strong> {product.quantity}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        {product.comment && (
          <p>
            <strong>Comment: </strong>
            {product.comment}
          </p>
        )}
      </main>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 120px;
  padding-left: 30px;
  padding-bottom: 70px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  color: #1e1d6d;
`;
const Icon = styled(Image)`
  position: absolute;
  top: -0 2rem;
  right: 9%;
  z-index: 20;
  top: 16%;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const ProductImage = styled(Image)`
  border-radius: 20px;
`;
