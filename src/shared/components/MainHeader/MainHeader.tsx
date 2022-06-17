import React from 'react';
import './MainHeader.css'
export const MainHeader = () => {
    return (
        <div className="menu-list__container">
            <ul className="menu-list__ul">
                <li className="menu-list__li">Random Album</li>
                <li className="menu-list__li">Main Page</li>
                <li className="menu-list__li">Random Song</li>
            </ul>
        </div>
    );
};
