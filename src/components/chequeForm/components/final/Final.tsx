import React from 'react';

import Button from '@components/button/Button';
import ChequeFormI from '@components/chequeForm/types';
import { appStore } from '@store/store';

import { AppRouter } from '../../../..';

type PropsT = {
    setStep: ChequeFormI['setStep'];
};

export default function Final({ setStep }: PropsT): React.ReactNode {
    return (
        <>
            <div className="chequeForm__final _FULL_W _COL _COL_H_CENTER _bottom">
                <div className="chequeForm__finalTitle">Спасибо!</div>
                <div className="chequeForm__finalText">
                    Твой чек отправлен на проверку. <br className="_DESKTOP" />
                    Ты получишь ответ на E-mail в течение <br className="_DESKTOP" />
                    3-х дней.
                </div>
            </div>
            <div className="chequeForm__buttons _ROW">
                <div className="chequeForm__button _fix">
                    <Button
                        onClick={() => {
                            setStep('start', undefined);
                        }}
                        className="_backColor"
                    >
                        Ещё чек
                    </Button>
                </div>
                <div className="chequeForm__button _fix">
                    <Button
                        onClick={() => {
                            appStore
                                .getState()
                                .closePopup({ name: 'chequePopup', pushHistory: false });
                            AppRouter.changePage({ pageName: 'profile' });

                            // if (window.Telegram) {
                            //     window.Telegram.WebApp?.close();
                            // }
                        }}
                        className="_backColor"
                    >
                        Закрыть окно
                    </Button>
                </div>
            </div>
        </>
    );
}
