import './Item.css';

import { ItemProps } from '../../types/ItemProps';

const Item: React.FC<ItemProps> = ({ id, description, quantity, packed }) => {
  return (
    <li key={id}>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
