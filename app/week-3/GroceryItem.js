export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 rounded bg-green-900 hover:bg-gray-800 text-white">
      <p className="font-[Poppins] font-semibold">Name: {name}</p>
      <p className="font-[Poppins]">Quantity: {quantity}</p>
      <p className="font-[Poppins] capitalize">Category: {category}</p>
    </li>
  );
}
