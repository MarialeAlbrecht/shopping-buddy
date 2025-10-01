import useSWR from "swr";

export default function ProductForm({
  onSubmit,
  defaultData = {},
  submitLabel = "Add new product",
  onCancel,
}) {
  const { data: categories, isLoading, error } = useSWR("/api/categories");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (onSubmit) {
      onSubmit(data);
    }
  }

  if (isLoading) {
    return <p>Loading form...</p>;
  }
  if (error) {
    return <p>Failed to load categories...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Add item name:</label>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue={defaultData.name}
        required
      />
      <label htmlFor="quantity">Select the quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        defaultValue={defaultData.quantity}
        required
      />
      <label htmlFor="category">Select a category:</label>
      <select
        id="category"
        name="category"
        required
        defaultValue={defaultData.category || ""}
      >
        <option value="" disabled>
          Categories{" "}
        </option>
        {categories.map((category) => (
          <option key={category._id} value={category.category}>
            {category.category}
          </option>
        ))}
      </select>
      <label htmlFor="imageUrl">Add Image URL:</label>
      <input
        type="url"
        id="imageUrl"
        name="imageUrl"
        defaultValue={defaultData.imgUrl}
      />
      <label htmlFor="comment">Add a comment:</label>
      <input
        type="text"
        id="comment"
        name="comment"
        defaultValue={defaultData.comment}
      />
      <button type="submit">{submitLabel}</button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}
