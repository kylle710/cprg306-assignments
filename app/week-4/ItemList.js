import Item from "./Item";
import items from "./Items.json";

export default function ItemList() {
  return (
    <ul className="pt-1">
      {items.map(item => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
