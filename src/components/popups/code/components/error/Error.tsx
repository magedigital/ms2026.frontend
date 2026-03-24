import React from 'react';

import Button from '@components/button/Button';
import DashedBorder from '@components/dashedBorder/DashedBorder';
import ErrorC from '@components/error/Error';
import { appStore } from '@store/store';

import ChequePopupI from '../../types';

type PropsT = {
    setStep: ChequePopupI['setStep'];
    updateListRender: () => Promise<void>;
    error?: string;
};

export default function Error({ setStep, updateListRender, error }: PropsT): React.ReactNode {
    return (
        <>
            <div className="popup__title _bottom">РЕГИСТРАЦИЯ КОДА</div>
            <div className="popup__scanError _FULL_W _COL _COL_H_CENTER">
                <div className="popup__scanErrorBorder">
                    <DashedBorder />
                </div>
                <p className="popup__scanErrorText">{error}</p>
                <ErrorC
                    className="popup__scanErrorValue"
                    error="Неверный код"
                    callback={updateListRender}
                />
                <div className="popup__scanErrorButton">
                    <Button
                        onClick={() => {
                            setStep('start');
                        }}
                        className="_subColor"
                    >
                        попробовать другой код
                    </Button>
                </div>
            </div>
            <div className="popup__buttons _ROW">
                <div className="popup__button _big">
                    <Button
                        onClick={() => {
                            appStore.getState().closePopup({ name: 'codePopup' });
                        }}
                        className="_subEmptyColor"
                    >
                        сканировать позже
                    </Button>
                </div>
            </div>
        </>
    );
}
