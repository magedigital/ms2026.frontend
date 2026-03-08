import React from 'react';

import Button from '@components/button/Button';
import Error from '@components/error/Error';

import ChequePopupI from '../../types';

type PropsT = {
    setStep: ChequePopupI['setStep'];
    uploadQRCode: ChequePopupI['uploadQRCode'];
    updateListRender: () => Promise<void>;
};

export default function ScanError({
    uploadQRCode,
    setStep,
    updateListRender,
}: PropsT): React.ReactNode {
    return (
        <>
            <div className="popup__scanError _FULL_W _COL _COL_H_CENTER">
                <p className="popup__scanErrorText">Ошибка</p>
                <Error
                    className="popup__scanErrorValue"
                    error="Неверный QR-код"
                    callback={updateListRender}
                />
                <div className="popup__scanErrorButton">
                    <Button
                        onClick={() => {
                            setStep('scan');
                        }}
                        className="_backColor"
                    >
                        Попробовать другой чек
                    </Button>
                </div>
            </div>
            <div className="popup__buttons _ROW">
                <div className="popup__button _big">
                    <Button
                        onClick={() => {
                            setStep('form', 'typing');
                        }}
                        className="_backColor"
                    >
                        Ввести данные <br className="_DESKTOP" />
                        вручную
                    </Button>
                </div>
                <div className="popup__button _big">
                    <Button isLabel={true} className="_backColor">
                        <input
                            type="file"
                            accept="jpg,jpeg,png"
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
