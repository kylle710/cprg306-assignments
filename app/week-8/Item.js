export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 rounded bg-green-900 hover:bg-gray-800 text-white">
      <p className="font-[Poppins] font-semibold">Name: {name}</p>
      <p className="font-[Poppins]">Quantity: {quantity}</p>
      <p className="font-[Poppins] capitalize">Category: {category}</p>
    </li>
  );
}











export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li 
      onClick={() => onSelect(name)}
      className="border p-2 rounded bg-green-900 hover:bg-gray-700 text-white cursor-pointer transition-colors"
    >
      <p className="font-semibold">Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize text-sm text-green-300">Category: {category}</p>
    </li>
  );
}