import React from 'react';

import Button from '@components/button/Button';
import DashedBorder from '@components/dashedBorder/DashedBorder';
import Icon from '@components/icon/Icon';

import ChequePopupI from '../../types';

type PropsT = {
    setStep: ChequePopupI['setStep'];
    uploadQRCode: ChequePopupI['uploadQRCode'];
};

export default function Start({ setStep, uploadQRCode }: PropsT): React.ReactNode {
    return (
        <>
            <div className="popup__title">Регистрация чека</div>
            <div className="popup__start _COL _COL_H_CENTER">
                <div
                    className="popup__startArea _FULL_W _COL _COL_H_CENTER _CLICK"
                    onClick={() => {
                        setStep('scan');
                    }}
                >
                    <div className="popup__startAreaBorder">
                        <DashedBorder />
                    </div>
                    <i className="popup__startAreaIcon">
                        <Icon name="scan" />
                    </i>
                    <p className="popup__startAreaText">
                        Нажми, чтобы
                        <br />
                        отсканировать QR-код с чека
                    </p>
                </div>
            </div>
            <div className="popup__buttons _ROW">
                <div className="popup__button _big">
                    <Button
                        onClick={() => {
                            setStep('form', 'typing');
                        }}
                        className="_subColor _mediumSize"
                    >
                        Ввести данные <br className="_DESKTOP" />
                        вручную
                    </Button>
                </div>
                <div className="popup__button _big">
                    <Button
                        isLabel={true}
                        onClick={() => undefined}
                        className="_subColor _mediumSize"
                    >
                        <input
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            onChange={uploadQRCode}
                            style={{ display: 'none' }}
                        />
                        Загрузить фото
                        <br className="_DESKTOP" /> QR-кода
                    </Button>
                </div>
            </div>
        </>
    );
}
