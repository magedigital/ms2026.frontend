import React from 'react';

import { appStore } from '@store/store.tsx';

import I from '../types.ts';

const renderActions: I['renderActions'] = function () {
    return (
        <div className="topBar__actions">
            <div className="topBar__action _calc _CLICK">Калькулятор ипотеки</div>
            <div
                className="topBar__action _reg _CLICK"
                onClick={() => {
                    appStore.getState().setPopup({ name: 'chequePopup' });
                }}
            >
                Регистрируй код
            </div>
            <div className="topBar__action _profile _CLICK">ЛИЧНЫЙ КАБИНЕТ</div>
        </div>
    );
};

export default renderActions;
