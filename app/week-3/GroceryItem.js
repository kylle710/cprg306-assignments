export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 rounded bg-green-900 hover:bg-gray">
      <span className="uppercase text-sm text-gray-500"></span>: {name}
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}
