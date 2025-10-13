import useSWR from "swr";

export default function RecipeCard({ name, image }) {
  const { data: categories, isLoading, error } = useSWR("/api/recipes");
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Error loading the categories...</p>;
  }

  return (
    <>
      {name}
      {image}
    </>
  );
}
