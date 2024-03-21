import React from 'react';
import './header.css';
import amazon_logo from '../images/amazon_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './stateProvider';

function Header() {
  const [{ cart }] = useStateValue();

  return (
    <div className='header'>
      {/* logo */}
      <Link to='/' >
        <img className='header_logo' src={amazon_logo} alt='logo' />
      </Link>
      {/* search-bar */}
      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>
      {/* children */}
      <div className='header_children'>
        <Link to='/login' className='link'>
          <div className='header_options'>
            <span className='header_optionLineOne'>Hello</span>
            <span className='header_optionLineTwo'>Sign in</span>
          </div>
        </Link>
        <Link to='/checkout' className='link'>

          <div className='header_options'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <Link to='/checkout' className='link'>

          <div className='header_options'>
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span>
          </div>
        </Link>
        <Link to='/checkout' className='link'>
          <div className='header_cart'>
            <ShoppingCartIcon />
            <span className='header_optionLineTwo header_cartCount'>{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
