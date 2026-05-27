import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import PackingList from './components/PackingList/PackingList';
import Stats from './components/Stats/Stats';
import './App.css';
import { useState } from 'react';
import { ItemProps } from './types/ItemProps';

export default function App() {
  const [items, setItems] = useState<ItemProps[]>([]);

  const handleAddItem = (item: ItemProps) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}
