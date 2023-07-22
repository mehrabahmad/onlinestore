import React from 'react';
import { Nav, Container, Item, Logo } from '../styles/components/NavStyle';
import { CgProfile } from 'react-icons/cg';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navigation() {
  const cart = useSelector(state => state.cart.cart);

  
  const { items } = useSelector(state => state.products);
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      
      const results = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      history.push('/search');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Nav>
      <Link to="/">
        <Logo>OnlineStore</Logo>
      </Link>
      
      <form onSubmit={handleSearch}>
        <input
          type="text"
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter product name..."
        />
        <button type="submit">Search</button>
      </form>

      <Container>
        <Item>
          <Link to="profile">
            <CgProfile size={25} />
            <h4>Profile</h4>
          </Link>
        </Item>

        <Item>
          <Link to="cart">
            <p>{cart ? cart.items.length : '0'}</p>
            <FiShoppingBag size={25} />
            <h4>Cart</h4>
          </Link>
        </Item>
      </Container>
    </Nav>
  );
}

export default Navigation;
