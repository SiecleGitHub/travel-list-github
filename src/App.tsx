import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import PackingList from './components/PackingList/PackingList';
import Stats from './components/Stats/Stats';
import './App.css';
import { useState } from 'react';
import { ItemModel } from './types/item-model';

export default function App() {
  const [items, setItems] = useState<ItemModel[]>([]);

  const handleDeleteItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleAddItem = (item: ItemModel) => {
    setItems((items) => [...items, item]);
  };

  const handleToggleItem = (id: number) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats />
    </div>
  );
}
