import React from 'react';

import Button from '@components/button/Button';
import ChequeFormI from '@components/chequeForm/types';
import Error from '@components/error/Error';

type PropsT = {
    setStep: ChequeFormI['setStep'];
    uploadQRCode: ChequeFormI['uploadQRCode'];
    updateListRender: () => Promise<void>;
};

export default function ScanError({
    uploadQRCode,
    setStep,
    updateListRender,
}: PropsT): React.ReactNode {
    return (
        <>
            <div className="chequeForm__scanError _FULL_W _COL _COL_H_CENTER">
                <p className="chequeForm__scanErrorText">Ошибка</p>
                <Error
                    className="chequeForm__scanErrorValue"
                    error="Неверный QR-код"
                    callback={updateListRender}
                />
                <div className="chequeForm__scanErrorButton">
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
            <div className="chequeForm__buttons _ROW">
                <div className="chequeForm__button _big">
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
                <div className="chequeForm__button _big">
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
