const TableCard = ({ table }) => (
  <div className="card">
    <h3>Table {table.number}</h3>
    <p>Seats: {table.seats}</p>
    <p>Status: {table.status}</p>
  </div>
);

export default TableCard;