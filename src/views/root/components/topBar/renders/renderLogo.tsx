import React from 'react';

import I from '../types.ts';

const renderLogo: I['renderLogo'] = function () {
    return <img src={require('@media/logo-ms.svg').default} alt="" className="topBar__logo" />;
};

export default renderLogo;
