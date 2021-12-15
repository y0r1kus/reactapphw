import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

const Menu = ({header, items, active, setActive }) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
                  <div className="menu__content" onClick={e => e.stopPropagation()}>
                <div className="menu__header">{header}</div>
                <ul>
                    {items.map(item =>
                        <li>
                            <span className="material-icons">{item.icon} </span>
                            <Link to={item.href}>{item.value}</Link>
                        </li>
                    )}
                </ul>
                </div>
        </div>
    );
};

export default Menu;