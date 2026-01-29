export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 rounded bg-green-900 hover:bg-gray">
      <p className="font-medium">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}
