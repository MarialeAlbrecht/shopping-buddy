import ProductList from "@/components/ProductList";
import AddProductButton from "@/components/AddProductButton";

export default function HomePage({ bookmark, onToggleBookmark }) {
  return (
    <div>
      <AddProductButton />
      <ProductList bookmark={bookmark} onToggleBookmark={onToggleBookmark} />
    </div>
  );
}
