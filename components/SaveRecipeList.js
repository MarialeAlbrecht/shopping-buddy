import useSWR from "swr";
import SaveRecipeCard from "@/components/SaveRecipeCard";

export default function RecipeList() {
  const { data, isLoading } = useSWR("/api/recipes");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Oops..we could not find any products</p>;
  }

  return (
    <>
      <h1>Here are your saved recipes!</h1>
      {data.length === 0 ? (
        <p>You haven´t saved any recipe.</p>
      ) : (
        <li>
          {data.map((recipe) => (
            <SaveRecipeCard
              key={recipe._id}
              _id={recipe._idMeal}
              name={recipe.name}
              image={recipe.image}
            />
          ))}
        </li>
      )}
    </>
  );
}
