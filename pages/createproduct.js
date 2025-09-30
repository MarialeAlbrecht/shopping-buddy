import { useRouter } from "next/router";
import Link from "next/link";
import ProductForm from "@/components/ProductForm";

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
      <main>
        <Link href="/">Go back</Link>
        <h1>Add a new product:</h1>
        <ProductForm onSubmit={addProduct} />
      </main>
    </>
  );
}
