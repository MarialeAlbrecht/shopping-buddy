import useSWR from "swr";

export default function ProductForm({}) {
  const { data, isLoading, error } = useSWR("/api/categories");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("NewProdutc", data);
  }

  if (isLoading) {
    return <p>Loading form...</p>;
  }
  if (error) {
    return <p>Failed to load categories...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a new product:</h1>
      <label htmlFor="name">Add item name:</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="quantity">Select the quantity:</label>
      <input type="number" id="quantity" name="quantity" required />
      <label htmlFor="category">Select a category:</label>
      <select id="category" name="category" required>
        <option>Categories </option>
        {data.map((category) => (
          <option key={category._id} value={category.category}>
            {category.category}
          </option>
        ))}
      </select>
      <label htmlFor="comment">Add a comment:</label>
      <input type="text" id="comment" name="comment" />
      <button type="submit">Add Product</button>
    </form>
  );
}
