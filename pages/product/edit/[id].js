import { useRouter } from "next/router";
import useSWR from "swr";
import ProductForm from "@/components/ProductForm";
import styled from "styled-components";

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, isLoading, error } = useSWR(`/api/shoppinglist/${id}`);

  if (error) {
    return <p>An error occured...</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  async function handleEditItem(updatedProduct) {
    const reponse = await fetch(`/api/shoppinglist/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    if (reponse.ok) {
      return router.push("/");
    }
  }
  return (
    <>
      <PageWrapper>
        <main>
          <h1>Edit your item here:</h1>
          <ProductForm
            key={product._id}
            onSubmit={handleEditItem}
            defaultData={product}
            submitLabel="Save"
            onCancel={() => router.push("/")}
          />
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
