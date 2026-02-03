// item-list.js
import Item from "./Itemtem";
import items from "./items.json";

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
