import React from 'react';

import I from '../types.ts';

const shops = [
    { title: 'Ашан', href: '' },
    { title: 'Лента', href: '' },
    { title: 'Магнит', href: '' },
    { title: 'Окей', href: '' },
    { title: 'Метро', href: '' },
    { title: 'Абсолют', href: '' },
    { title: 'спар', href: '' },
    { title: 'Красный Яр', href: '' },
    { title: 'Макси', href: '' },
    { title: 'Разгуляйка', href: '' },
    { title: 'Семь шагов', href: '' },
    { title: 'озон', href: '' },
    { title: 'Гиперглобус', href: '' },
    { title: 'Метрополис', href: '' },
];

const renderShops: I['renderShops'] = function () {
    return (
        <div className="indexGame__shops _COL">
            <h4 className="indexGame__shopsTitle">ГДЕ КУПИТЬ ПРОДУКТ</h4>
            <div className="indexGame__shopsCards">
                {shops.map((s, i) => (
                    <div className="indexGame__shopsCard" key={i}>
                        <div
                            className="indexGame__shop"
                            // href={s.href}
                            // target="_blank"
                            // rel="noreferrer"
                        >
                            <p className="indexGame__shopTitle">{s.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default renderShops;
