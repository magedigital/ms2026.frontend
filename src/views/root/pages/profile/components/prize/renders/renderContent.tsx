import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { prize } = this.props;

    return (
        <div className="profilePrize__content _COL">
            <p className="profilePrize__name">{prize.title}</p>
            <div className="profilePrize__status">{prize.actStatus}</div>
        </div>
    );
};

export default renderContent;
