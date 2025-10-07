import { useRouter } from "next/router";
import Link from "next/link";
import ProductForm from "@/components/ProductForm";
import styled from "styled-components";
import exit from "@/assets/exit.png";
import Image from "next/image";

export default function CreateProduct() {
  const router = useRouter();

  async function addProduct(product) {
    console.log("newproduct", product);
    const response = await fetch("/api/shoppinglist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (response.ok) {
      router.push("/");
    }
  }
  return (
    <>
      <PageWrapper>
        <main>
          <Link href="/">
            <Icon src={exit} alt="Go Back" width={30} height={30} />
          </Link>
          <h1>Add a new product:</h1>
          <ProductForm onSubmit={addProduct} />
        </main>
      </PageWrapper>
    </>
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
  top: -0, 2rem;
  right: 33%;
  bottom: 79.5%;
`;
