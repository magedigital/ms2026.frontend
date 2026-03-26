import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    const { prize } = this.props;

    return (
        <div className="profilePrize__head">
            {prize.count > 1 && <div className="profilePrize__headCount">{prize.count} шт.</div>}
            <img src={prize.thumb} alt="" className="profilePrize__headThumb _FULL" />
        </div>
    );
};

export default renderHead;
