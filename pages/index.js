import ProductList from "@/components/ProductList";
import AddProductButton from "@/components/AddProductButton";
import Link from "next/link";

export default function HomePage({ bookmark, onToggleBookmark }) {
  return (
    <div>
      <AddProductButton />
      <ProductList bookmark={bookmark} onToggleBookmark={onToggleBookmark} />
      <Link href="/purchaseditems"> Purchsed Products</Link>
    </div>
  );
}
