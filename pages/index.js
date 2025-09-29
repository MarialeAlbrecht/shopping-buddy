import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import ProductForm from "@/components/ProductForm";

export default function HomePage() {
  return (
    <div>
      <ProductForm />
      <ProductList />
    </div>
  );
}
