import React from 'react';

import { appStore } from '@store/store.tsx';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';

const renderActions: I['renderActions'] = function () {
    const { mobMenuHandler } = this.props;

    return (
        <div className="topBar__actions">
            <div
                className="topBar__action _calc _CLICK"
                onClick={() => {
                    appStore.getState().setPopup({ name: 'calcPopup' });
                    mobMenuHandler(false);
                    sendGoal('headerCalculatorBtn');
                }}
            >
                Калькулятор ипотеки
            </div>
            <div
                className="topBar__action _reg _CLICK"
                onClick={() => {
                    appStore.getState().setPopup({ name: 'codePopup' });
                    mobMenuHandler(false);
                    sendGoal('headerRegCodeBtn');
                }}
            >
                Регистрируй код
            </div>
            <div
                className="topBar__action _profile _CLICK"
                onClick={() => {
                    AppRouter.changePage({ pageName: 'profile' });
                    mobMenuHandler(false);
                    sendGoal('regCodeBtn,profileRegCodeBtn');
                }}
            >
                ЛИЧНЫЙ КАБИНЕТ
            </div>
        </div>
    );
};

export default renderActions;
