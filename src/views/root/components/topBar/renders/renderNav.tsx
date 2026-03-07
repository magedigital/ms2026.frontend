import React from 'react';

import I from '../types.ts';

const renderNav: I['renderNav'] = function () {
    const { mobMenuHandler } = this.props;
    const nav = this.getNav();

    return (
        <div className="topBar__nav">
            {nav.map((i) => (
                <div
                    className="topBar__navItem _CLICK"
                    key={i.name}
                    onClick={() => {
                        mobMenuHandler(false);
                    }}
                >
                    {i.text}
                </div>
            ))}
        </div>
    );
};

export default renderNav;
