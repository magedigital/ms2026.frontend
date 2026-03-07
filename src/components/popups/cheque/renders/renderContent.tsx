import React from 'react';

import ChequeForm from '@components/chequeForm/ChequeForm.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    return (
        <>
            <ChequeForm />
        </>
    );
};

export default renderContent;
