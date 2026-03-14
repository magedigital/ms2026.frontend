import React from 'react';

import Fade from '@components/fade/Fade.tsx';
import Loader from '@components/loader/Loader.tsx';

import I from '../types.ts';

const renderLoading: I['renderLoading'] = function () {
    const { loadingKey } = this.state;

    return (
        <Fade className="upload__loading _FULL _COL _COL_CENTER" isShow={loadingKey === 'upload'}>
            <div className="upload__loadingIcon">
                <Loader />
            </div>
            <p className="upload__loadingText">Загрузка...</p>
        </Fade>
    );
};

export default renderLoading;
