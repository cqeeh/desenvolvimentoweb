import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button,ButtonDark } from '../../globalStyles';
import logo from './logo.png';
import moondark from './moondark.webp';
import moonlight from './moonlight.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavIcon,
  NavMenu,
  NavDark,
  NavLogoDark,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavLinksDark,
  NavBtnLink
} from './Navbar.elements';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const DarkMode = () => setClick(global.darkMode=!global.darkMode);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
if(global.darkMode)
{
  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
             <NavIcon>
             <img width ='50px' height= '50px'src ={logo} />
             </NavIcon>
            
            </NavLogo>
            
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
              
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <ButtonDark primary>SIGN UP</ButtonDark>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              <NavItem>
              <NavLinks id ="Darkmode"onClick={DarkMode}>
              <img width ='30px' height= '30px'src ={moondark} />
                </NavLinks>
                </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
 }else{
  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <NavDark>
          <NavbarContainer>
            <NavLogoDark to='/' onClick={closeMobileMenu}>
             <NavIcon>
             <img width ='50px' height= '50px'src ={logo} />
             </NavIcon>
            </NavLogoDark>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinksDark to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinksDark>
              </NavItem>
             
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              <NavLinksDark onClick={DarkMode}>
              <NavIcon>
             <img width ='30px' height= '30px'src ={moonlight} />
             </NavIcon>
                </NavLinksDark>
            </NavMenu>
          </NavbarContainer>
        </NavDark>
      </IconContext.Provider>
    </>
  );
 }
}

export default Navbar;
