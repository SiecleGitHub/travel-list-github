import { ItemProps } from '../../types/ItemProps';

const Item: React.FC<ItemProps> = ({ id, description, quantity, packed, onDeleteItem }) => {
  return (
    <li key={id}>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      {onDeleteItem && <button onClick={() => onDeleteItem(id)}>❌</button>}
    </li>
  );
};

export default Item;
