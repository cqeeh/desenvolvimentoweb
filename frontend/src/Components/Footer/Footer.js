import React from 'react';

import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  FooterContainerLight,
  SocialIcons,
  SocialIconLinkDark,
  WebsiteRightsLDark,
  SocialIconLink
} from './Footer.elements';



function Footer() {
  
 
  if(global.darkMode)
  {
    return (
      <FooterContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>Like Like Samurai © 2020</WebsiteRights>
            
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    );
  }else{
    return (
      <FooterContainerLight>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRightsLDark>Like Like Samurai © 2020</WebsiteRightsLDark>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainerLight>
    );
  }
 
}

export default Footer;
