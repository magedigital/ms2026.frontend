import React from 'react';

import I from '../types.ts';

const renderTableCol: I['renderTableCol'] = function ({ row, name }) {
    if (name === 'date') {
        return <>{row.date}</>;
    }
};

export default renderTableCol;
