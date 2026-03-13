import React from 'react';

import Button from '@components/button/Button';
import DashedBorder from '@components/dashedBorder/DashedBorder';
import Icon from '@components/icon/Icon';
import { appStore } from '@store/store';

import ChequePopupI from '../../types';

type PropsT = {
    setStep: ChequePopupI['setStep'];
};

export default function Start({ setStep }: PropsT): React.ReactNode {
    return (
        <>
            <div className="popup__title">РЕГИСТРАЦИЯ КОДА</div>
            <div className="popup__start _COL _COL_H_CENTER">
                <div
                    className="popup__startArea _FULL_W _COL _COL_H_CENTER _CLICK"
                    onClick={() => {
                        setStep('error');
                    }}
                >
                    <div className="popup__startAreaBorder">
                        <DashedBorder />
                    </div>
                    <i className="popup__startAreaIcon">
                        <Icon name="scan" />
                    </i>
                    <p className="popup__startAreaText">
                        Нажми сюда для загрузки файла <br />
                        или перенеси его в это окно
                    </p>
                </div>
            </div>
            <div className="popup__buttons _ROW">
                <div className="popup__button _big">
                    <Button
                        onClick={() => {
                            appStore.getState().closePopup({ name: 'codePopup' });
                        }}
                        className="_subColor _mediumSize"
                    >
                        сканировать позже
                    </Button>
                </div>
            </div>
        </>
    );
}
