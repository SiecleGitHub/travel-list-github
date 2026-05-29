import './PackingList.css';
import { ItemModel } from '../../types/item-model';
import Item from '../Item/Item';

export interface PackingListProps {
  items: ItemModel[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

const PackingList: React.FC<PackingListProps> = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item: ItemModel) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
