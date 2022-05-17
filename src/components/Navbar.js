import React from 'react'
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { logoutAsync } from '../actions/actionLogin';
import Search from './Search';

const Logo = styled.img`
  max-width: 100%;
  height: 64px;  
`

const Menu = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 48px;
  font-weight: bold;
  color: #fff;
`

const MenuItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
  }
`

const StyledHeader = styled.header`
    background-color: black;    
`

const Navbar = () => {
  const dispatch = useDispatch();

  return (

    <StyledHeader>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to='/'>
            <Logo
              src={'https://res.cloudinary.com/dmaviub4l/image/upload/v1652359622/block-master/gnf1yvvxhz1wfh2vjrkc.png'}
              title='Logo Block Master'
              alt='Logo Block Master'
            />
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Menu>
              <MenuItem>
                <NavLink className="navbar-brand"
                  style={{
                    color: 'white'
                  }}
                  to='/list'
                >
                  Todas
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  style={{
                    color: 'white'
                  }}
                  to='/mas-valoradas'
                >
                  Más valoradas
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  style={{
                    color: 'white'
                  }}
                  to='/menos-valoradas'
                >
                  Menos valoradas
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  style={{
                    color: 'white'
                  }}
                  to='/add'
                >
                  Agregar Película
                </NavLink>
              </MenuItem>
            </Menu>
          </div>
          <Search />
          <Nav.Link className="m-2" style={{
            color: 'gray', background: 'yellow', fontWeight: 'bold', borderRadius: '10px'
          }}
            to='/add' onClick={() => dispatch(logoutAsync())}>Cerrar Sesión</Nav.Link>
        </div>
      </nav>
    </StyledHeader>

  )
}

export default Navbar