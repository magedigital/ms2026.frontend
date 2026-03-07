import React from 'react';

import Button from '@components/button/Button';
import ChequeFormI from '@components/chequeForm/types';
import DashedBorder from '@components/dashedBorder/DashedBorder';
import Icon from '@components/icon/Icon';

type PropsT = {
    setStep: ChequeFormI['setStep'];
    uploadQRCode: ChequeFormI['uploadQRCode'];
};

export default function Start({ setStep, uploadQRCode }: PropsT): React.ReactNode {
    return (
        <>
            <div className="chequeForm__start _COL _COL_H_CENTER">
                <p className="chequeForm__startTitle">Регистрируй чеки из сети Пятерочка</p>
                <div
                    className="chequeForm__startArea _FULL_W _COL _COL_H_CENTER _CLICK"
                    onClick={() => {
                        setStep('scan');
                    }}
                >
                    <div className="chequeForm__startAreaBorder">
                        <DashedBorder />
                    </div>
                    <i className="chequeForm__startAreaIcon">
                        <Icon name="scan" />
                    </i>
                    <p className="chequeForm__startAreaText">
                        Нажми, чтобы
                        <br />
                        отсканировать QR-код с чека
                    </p>
                </div>
            </div>
            <div className="chequeForm__buttons _ROW">
                <div className="chequeForm__button _big">
                    <Button
                        onClick={() => {
                            setStep('form', 'typing');
                        }}
                        className="_backColor _mediumSize"
                    >
                        Ввести данные <br className="_DESKTOP" />
                        вручную
                    </Button>
                </div>
                <div className="chequeForm__button _big">
                    <Button
                        isLabel={true}
                        onClick={() => undefined}
                        className="_backColor _mediumSize"
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
