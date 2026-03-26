import { useEffect, useState } from 'react';
import TableCard from '../components/TableCard';
import axios from '../services/api';

const Home = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    axios.get('/tables').then(res => setTables(res.data));
  }, []);

  return (
    <div>
      <h1>Restaurant Tables</h1>
      <div className="cards-container">
        {tables.map(table => <TableCard key={table.id} table={table} />)}
      </div>
    </div>
  );
};

export default Home;