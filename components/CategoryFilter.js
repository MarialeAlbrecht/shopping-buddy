import useSWR from "swr";

export default function CategoryFilter({ onSelectCategory }) {
  const { data: categories, isLoading, error } = useSWR("api/categories");

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>We could not load the categories...</p>;
  }

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category._id}
          onClick={() => onSelectCategory(category.category)}
        >
          <span>{category.emoji}</span>
          <span>{category.category}</span>
        </button>
      ))}
    </div>
  );
}
