import { useContext, useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Collapse the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-brand' onClick={closeMenu}>
          Virtual<span className='navbar-brand-accent'>Kart</span>
        </Link>

        <button
          type='button'
          className='navbar-toggle'
          aria-expanded={menuOpen}
          aria-controls='navbar-menu'
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className='navbar-toggle-bar' />
          <span className='navbar-toggle-bar' />
          <span className='navbar-toggle-bar' />
        </button>

        <div
          id='navbar-menu'
          className={`navbar-menu${menuOpen ? ' is-open' : ''}`}
        >
          <div className='navbar-links'>
            <NavLink
              to='/'
              end
              className={({ isActive }) =>
                `navbar-link${isActive ? ' is-active' : ''}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to='/checkout'
              className={({ isActive }) =>
                `navbar-link navbar-link-cart${
                  isActive ? ' is-active' : ''
                }`
              }
            >
              Cart
              {cartCount > 0 && (
                <span className='navbar-badge' aria-label={`${cartCount} items in cart`}>
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>

          <div className='navbar-auth'>
            {!user ? (
              <div className='navbar-auth-links'>
                <Link to='/auth' className='btn btn-login'>
                  Login
                </Link>
                <Link to='/auth' className='btn btn-primary'>
                  Signup
                </Link>
              </div>
            ) : (
              <div className='navbar-user'>
                <span className='navbar-greeting' title={user.email}>
                  Hello, {user.email}
                </span>
                <button className='btn btn-secondary btn-small' onClick={logout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
