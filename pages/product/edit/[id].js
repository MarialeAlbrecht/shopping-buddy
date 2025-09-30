import { useRouter } from "next/router";
import useSWR from "swr";
import ProductForm from "@/components/ProductForm";
import Link from "next/link";

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, isLoading, error } = useSWR(`/api/shoppinglist/${id}`);

  if (error) {
    return <p>We couldn`t edit the item...</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  async function EditItem(updatedProduct) {
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
      <main>
        <Link href="/">Go back</Link>
        <h1>Edit your item here</h1>
        <ProductForm onSubmit={EditItem} defaultData={product} />
      </main>
    </>
  );
}
