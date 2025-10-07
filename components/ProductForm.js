import useSWR from "swr";
import styled from "styled-components";

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
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="name">Product name:</StyledLabel>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue={defaultData.name}
        required
      />
      <StyledLabel htmlFor="quantity">Quantity:</StyledLabel>
      <input
        type="number"
        id="quantity"
        name="quantity"
        defaultValue={defaultData.quantity}
        min={1}
        required
      />
      <StyledLabel htmlFor="category">Select a category:</StyledLabel>
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
      <StyledLabel htmlFor="imageUrl">Image URL:</StyledLabel>
      <input
        type="url"
        id="imageUrl"
        name="imageUrl"
        defaultValue={defaultData.imgUrl}
      />
      <StyledLabel htmlFor="comment">Additional comments:</StyledLabel>
      <input
        type="text"
        id="comment"
        name="comment"
        defaultValue={defaultData.comment}
      />
      <SubmitButton type="submit">{submitLabel}</SubmitButton>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 400px;
  font-family: Helvetica, Arial, sans-serif;
  color: #1e1d6d;
`;

const SubmitButton = styled.button`
  background-color: #04c6a3;
  color: #1e1d6d;
  border: none;
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-weight: bold;
  font-size: medium;
  width: auto;
  white-space: nowrap;
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;
