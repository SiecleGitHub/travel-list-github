import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import PackingList from './components/PackingList/PackingList';
import Stats from './components/Stats/Stats';
import './App.css';
import useItems from './hooks/useItems';

export default function App() {
  const { items, handleAddItem, handleDeleteItem, handleToggleItem } = useItems();

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats items={items} />
    </div>
  );
}
