import './PackingList.css';
import { ItemProps } from '../../types/ItemProps';
import Item from '../Item/Item';

const PackingList: React.FC<{ items: ItemProps[] }> = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item: ItemProps) => (
          <Item
            key={item.id}
            id={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
