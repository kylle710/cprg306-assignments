export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 rounded bg-white hover:bg-gray-100">
      <p className="font-medium">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}
