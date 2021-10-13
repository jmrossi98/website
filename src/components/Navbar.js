import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to='/'>
         Jakob Rossi
        </NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to='/projects' activeStyle>
            Projects
          </NavLink>
          <NavLink to='/resume' activeStyle>
            Resume
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/' activeStyle>
          </NavLink>
            <SocialIcon url="https://github.com/jmrossi98" bgColor="#000000" style={{width:'35px', height:'35px'}}/>
            <SocialIcon url="https://linkedin.com/in/jakob-rossi" bgColor="#000000" style={{width:'35px', height:'35px'}}/>
            <SocialIcon url="https://www.facebook.com/jakob.rossi" bgColor="#000000" style={{width:'35px', height:'35px'}}/>
            <SocialIcon url="https://www.instagram.com/jay_crossin" bgColor="#000000" style={{width:'35px', height:'35px'}}/>
            <SocialIcon url="https://twitter.com/jay_crossin" bgColor="#000000" style={{width:'35px', height:'35px'}}/>
        </NavMenu>
      </Nav>
    </>
  );
};

export const Nav = styled.nav`
  background: #a5dcf4;
  display: flex;
  justify-content: space-between;
  padding: 20px 120px;
  z-index: 0;
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  font-size: 150%;
  font-family: "ＭＳ Ｐゴシック";
`;

export const NavLogo = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  font-size: 350%;
  font-weight: bold;
  font-smooth: never;
  font-family: "ＭＳ Ｐゴシック";
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-90%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: right;
  margin-right: 50px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export default Navbar;