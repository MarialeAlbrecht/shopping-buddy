export default function ProductCard({ name, quantity, category }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </>
  );
}
