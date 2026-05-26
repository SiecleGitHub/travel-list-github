import './PackingList.css';

const PackingList = () => {
  const initalItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: true },
    { id: 3, description: 'Chargers', quantity: 3, packed: false },
  ];
  return (
    <div className="list">
      <ul>
        {initalItems.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
