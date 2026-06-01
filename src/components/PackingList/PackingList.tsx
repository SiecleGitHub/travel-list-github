import './PackingList.css';
import { ItemModel } from '../../types/item-model';
import Item from '../Item/Item';
import { useState } from 'react';

export interface PackingListProps {
  items: ItemModel[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearList: () => void;
}

const PackingList: React.FC<PackingListProps> = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems = items;

  if (sortBy === 'input') {
    sortedItems = items;
  } else if (sortBy === 'description') {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === 'packed') {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item: ItemModel) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
