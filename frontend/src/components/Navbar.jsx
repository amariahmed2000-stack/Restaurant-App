import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { state } = useAuth();
  return (
    <nav>
      <Link to="/">Home</Link>
      {state.user && <Link to="/admin">Admin</Link>}
      {state.user ? <Link to="/logout">Logout</Link> : <Link to="/signin">Signin</Link>}
    </nav>
  );
};

export default Navbar;