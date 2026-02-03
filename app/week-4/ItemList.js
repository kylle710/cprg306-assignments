// item-list.js
import Item from "./Item";
import items from "./Item";

export default function ItemList() {
  return (
    <ul>
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
