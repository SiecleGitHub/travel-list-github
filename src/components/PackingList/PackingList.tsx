import './PackingList.css';
import { ItemProps } from '../../types/ItemProps';
import Item from '../Item/Item';

const PackingList: React.FC = () => {
  const initalItems: ItemProps[] = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: true },
    { id: 3, description: 'Chargers', quantity: 3, packed: false },
  ];
  return (
    <div className="list">
      <ul>
        {initalItems.map((item: ItemProps) => (
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
