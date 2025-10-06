import ProductList from "@/components/ProductList";
import AddProductButton from "@/components/AddProductButton";
import { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import styled from "styled-components";

export default function HomePage({ bookmark, onToggleBookmark }) {
  const [selectCategory, setSelectCategory] = useState(null);
  return (
    <PageWrapper>
      <AddProductButton />
      <CategoryFilter onSelectCategory={setSelectCategory} />
      <ProductList
        bookmark={bookmark}
        onToggleBookmark={onToggleBookmark}
        selectCategory={selectCategory}
      />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 20px;
`;
