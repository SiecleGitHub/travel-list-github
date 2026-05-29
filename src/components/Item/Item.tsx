import { ItemModel } from '../../types/item-model';

export interface ItemProps {
  item: ItemModel;
  onDeleteItem?: (id: number) => void;
  onToggleItem?: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          onToggleItem && onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      {onDeleteItem && <button onClick={() => onDeleteItem(item.id)}>❌</button>}
    </li>
  );
};

export default Item;
