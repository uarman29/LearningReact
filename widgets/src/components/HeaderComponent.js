import React from 'react';
import LinkComponent from './LinkComponent';

const HeaderComponent = () =>{
    return(
        <div className = "ui secondary pointing menu">
            <LinkComponent href="/" className="item">Accordion</LinkComponent>
            <LinkComponent href="/list" className="item">Search</LinkComponent>
            <LinkComponent href="/dropdown" className="item">Dropdown</LinkComponent>
            <LinkComponent href="/translate" className="item">Translate</LinkComponent>
        </div>
    );
};

export default HeaderComponent;