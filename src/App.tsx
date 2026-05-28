import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import PackingList from './components/PackingList/PackingList';
import Stats from './components/Stats/Stats';
import './App.css';
import { useState } from 'react';
import { ItemProps } from './types/ItemProps';

export default function App() {
  const [items, setItems] = useState<ItemProps[]>([]);

  const handleDeleteItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleAddItem = (item: Omit<ItemProps, 'onDeleteItem' | 'onToggleItem'>) => {
    setItems((items) => [...items, { ...item, onDeleteItem: handleDeleteItem, onToggleItem: handleToggleItem }]);
  };

  const handleToggleItem = (id: number) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}
