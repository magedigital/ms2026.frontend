import React from 'react';

import I from '../types.ts';

const renderNav: I['renderNav'] = function () {
    const nav = this.getNav();

    return (
        <div className="topBar__nav">
            {nav.map((i) => (
                <div
                    className="topBar__navItem _CLICK"
                    key={i.name}
                    onClick={this.navItemHandler.bind(this, i)}
                >
                    {i.text}
                </div>
            ))}
        </div>
    );
};

export default renderNav;
