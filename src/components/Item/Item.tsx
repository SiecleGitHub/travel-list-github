import './Item.css';

import { ItemProps } from '../../types/ItemProps';

const Item: React.FC<ItemProps> = ({ id, description, quantity, packed }) => {
  return (
    <li key={id}>
      {description}, Quantity: {quantity}, Packed: {packed ? 'Yes' : 'No'}
    </li>
  );
};

export default Item;
