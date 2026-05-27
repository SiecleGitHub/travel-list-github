import './Item.css';

import { ItemProps } from '../../types/ItemProps';

interface ItemComponentProps extends ItemProps {
  onDeleteItem: (id: number) => void;
}

const Item: React.FC<ItemComponentProps> = ({ id, description, quantity, packed, onDeleteItem }) => {
  return (
    <li key={id}>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
};

export default Item;
