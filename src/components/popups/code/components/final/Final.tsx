import React from 'react';

import Button from '@components/button/Button';
import DashedBorder from '@components/dashedBorder/DashedBorder';
import { appStore } from '@store/store';

import ChequePopupI from '../../types';

type PropsT = {
    setStep: ChequePopupI['setStep'];
};

export default function Final({ setStep }: PropsT): React.ReactNode {
    return (
        <>
            <div className="popup__title _bottom">РЕГИСТРАЦИЯ КОДА</div>
            <div className="popup__final _FULL_W _COL _COL_H_CENTER _bottom">
                <div className="popup__finalBorder">
                    <DashedBorder />
                </div>
                <div className="popup__finalTitle">Успешно</div>
                <div className="popup__finalText">Спасибо! Ваш код отсканирован.</div>
            </div>
            <div className="popup__buttons _ROW">
                <div className="popup__button _fix">
                    <Button
                        onClick={() => {
                            setStep('start');
                        }}
                        className="_subEmptyColor"
                    >
                        отсканировать ещё
                    </Button>
                </div>
                <div className="popup__button _fix">
                    <Button
                        onClick={() => {
                            appStore.getState().closePopup({ name: 'codePopup' });
                        }}
                        className="_subColor"
                    >
                        Закрыть окно
                    </Button>
                </div>
            </div>
        </>
    );
}
