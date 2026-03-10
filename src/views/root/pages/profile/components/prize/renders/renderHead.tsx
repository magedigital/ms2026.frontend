import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="profilePrize__head">
            <img src={''} alt="" className="profilePrize__headThumb _FULL" />
        </div>
    );
};

export default renderHead;
