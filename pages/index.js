import ProductList from "@/components/ProductList";
import AddProductButton from "@/components/AddProductButton";
import { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";

export default function HomePage({ bookmark, onToggleBookmark }) {
  const [selectCategory, setSelectCategory] = useState(null);
  return (
    <div>
      <AddProductButton />
      <CategoryFilter onSelectCategory={setSelectCategory} />
      <ProductList
        bookmark={bookmark}
        onToggleBookmark={onToggleBookmark}
        selectCategory={selectCategory}
      />
    </div>
  );
}
