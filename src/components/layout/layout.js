import React from "react"
import { Link } from "gatsby";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { FaVideo, FaImages, FaMusic } from "react-icons/fa"
import Logo from "../logo/logo";
import "./layout.scss";

function Layout({ children }) {
  return (
    <main>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="main-nav" >
        <Nav.Item className="main-nav__item">
          <Link to="/"><Logo/></Link>
        </Nav.Item>
        <Nav.Item className="main-nav__item main-nav__search">
          <Form.Control type="text" placeholder={'Search'}/>
        </Nav.Item>
        <Nav.Item className="main-nav__item">
          <Link className="main-nav__link" to="/"><FaImages size={24}/></Link>
          <Link className="main-nav__link" to="/videos"><FaVideo size={24}/></Link>
          <Link className="main-nav__link" to="/music"><FaMusic size={24}/></Link>
        </Nav.Item>
      </Nav>
    {children}
  </main>
  )
}

export default Layout

