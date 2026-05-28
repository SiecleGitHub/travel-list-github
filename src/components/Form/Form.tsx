import { useState } from 'react';
import './Form.css';
import { ItemProps } from '../../types/ItemProps';

const Form: React.FC<{ onAddItem: (item: Omit<ItemProps, 'onDeleteItem'>) => void }> = ({ onAddItem }) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleEvent = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description.trim()) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem);

    setDescription('');
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleEvent}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  );
};

export default Form;
