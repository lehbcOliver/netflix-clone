import React from 'react';
import {HeaderContainer} from './style';

const Header = ({black}) => {
    return(
        <HeaderContainer id={black ? 'black': ''}>
            <div className="logo">
                <a href="#">
                    <img src="assets/logo.png" alt="Logo" />
                </a>
            </div>
            <div className="perfil">
                <a href="#">
                    <img src="assets/perfil.png" alt="Perfil" />
                </a>
            </div>
        </HeaderContainer>
    );
}

export default Header;