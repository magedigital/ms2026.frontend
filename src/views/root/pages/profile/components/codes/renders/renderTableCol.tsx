import React from 'react';

import I from '../types.ts';

const renderTableCol: I['renderTableCol'] = function ({ row, name }) {
    if (name === 'buyDate') {
        return <>{row.registeredAt}</>;
    }

    if (name === 'product') {
        return <>{row.productName}</>;
    }

    if (name === 'status') {
        return <>{row.statusTitle}</>;
    }
};

export default renderTableCol;
