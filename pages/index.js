import ProductList from "@/components/ProductList";
import AddProductButton from "@/components/AddProductButton";

export default function HomePage() {
  return (
    <div>
      <AddProductButton />
      <ProductList />
    </div>
  );
}
