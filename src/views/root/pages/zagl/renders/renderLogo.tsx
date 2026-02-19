import React from 'react';

import I from '../types.ts';

const renderLogo: I['renderLogo'] = function () {
    return <img className="zagl__logo" src={require('@media/zagl/logo-ms.svg').default} alt="" />;
};

export default renderLogo;
