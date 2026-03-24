import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { prize } = this.props;

    return (
        <div className="profilePrize__content _COL">
            <p className="profilePrize__name">{prize.title}</p>
            <div className={this.getClass('profilePrize__status', this.setClass(prize.status))}>
                {prize.statusTitle}
            </div>
        </div>
    );
};

export default renderContent;
