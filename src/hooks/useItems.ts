import { useState } from 'react';
import { ItemModel } from '../types/item-model';

const useItems = () => {
  const [items, setItems] = useState<ItemModel[]>([]);

  const handleAddItem = (item: ItemModel) => {
    setItems([...items, item]);
  };
  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const handleToggleItem = (id: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  };

  // Return the State and all Methods as an object
  return {
    items,
    handleAddItem,
    handleDeleteItem,
    handleToggleItem,
  };
};

export default useItems;
