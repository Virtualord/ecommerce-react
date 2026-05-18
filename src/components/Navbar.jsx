import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const{user, logout} = useAuth();
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
        VirtualKart
        </Link>
        <div className="navbar-links">
          <Link to="/" className='home-nav'>Home</Link>
          <Link to="/checkout" className='cart-nav'>Cart</Link>
        </div>
        <div className="navbar-auth">
          {!user ? <div className='navbar-auth-links'>
            <Link to="/auth" className='btn btn-login'>
            Login
            </Link>
            <Link to="/auth" className='btn btn-primary'>
            Signup
            </Link>
          </div> : (
            <div className="navbar-user">
              <span>Hello, {user.email}</span>
              <button className="btn btn-seconday" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar