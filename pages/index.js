import ProductList from "@/components/ProductList";
import AddProductButton from "@/components/AddProductButton";
import { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import styled from "styled-components";

export default function HomePage({ bookmark, onToggleBookmark }) {
  const [selectCategory, setSelectCategory] = useState(null);

  function handleSelectCategory(category) {
    if (selectCategory === category) {
      setSelectCategory(null);
    } else {
      setSelectCategory(category);
    }
  }
  return (
    <PageWrapper>
      <AddProductButton />
      <CategoryFilter onSelectCategory={handleSelectCategory} />
      <ProductList
        bookmark={bookmark}
        onToggleBookmark={onToggleBookmark}
        selectCategory={selectCategory}
      />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 70px;
`;
