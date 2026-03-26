import { useEffect, useState } from 'react';
import axios from '../services/api';
import TableForm from '../components/TableForm';

const Admin = () => {
  const [tables, setTables] = useState([]);
  const [editingTable, setEditingTable] = useState(null);

  useEffect(() => {
    axios.get('/tables').then(res => setTables(res.data));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/tables/${id}`).then(() => setTables(tables.filter(t => t.id !== id)));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={() => setEditingTable({})}>Create Table</button>
      {editingTable && <TableForm table={editingTable} onClose={() => setEditingTable(null)} />}
      <table>
        <thead>
          <tr>
            <th>Number</th><th>Seats</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tables.map(table => (
            <tr key={table.id}>
              <td>{table.number}</td>
              <td>{table.seats}</td>
              <td>{table.status}</td>
              <td>
                <button onClick={() => setEditingTable(table)}>Edit</button>
                <button onClick={() => handleDelete(table.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;