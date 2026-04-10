import React from 'react';

import StringService from '@services/string/String.service.ts';

import I from '../types.ts';

const renderSteps: I['renderSteps'] = function () {
    return (
        <div className="indexHeader__steps _COL">
            <div className="indexHeader__step">
                <img
                    src={require('@media/step-icon-1.svg').default}
                    alt=""
                    className="indexHeader__stepThumb"
                />
                <div className="indexHeader__stepContent">
                    <b>
                        ПРОСТО <br />
                        ПОКУПАЙ И ПЕЙ
                    </b>
                    <br />
                    НАПИТКИ
                    <br />
                    «МОЯ СЕМЬЯ»
                </div>
            </div>
            <div className="indexHeader__step">
                <img
                    src={require('@media/step-icon-2.svg').default}
                    alt=""
                    className="indexHeader__stepThumb"
                />
                <div className="indexHeader__stepContent">
                    <b>РЕГИСТРИРУЙ</b>
                    <br />
                    КОД С КРЫШКИ
                    <br />
                    НАПИТКА
                </div>
            </div>
            <div className="indexHeader__step">
                <img
                    src={require('@media/step-icon-3.svg').default}
                    alt=""
                    className="indexHeader__stepThumb"
                />
                <div className="indexHeader__stepContent">
                    <b>ПОЛУЧАЙ</b>
                    <br />
                    <b className="_large">
                        КЕШБЭК
                        <i className="indexHeader__stepContentInfo _CLICK">
                            i
                            <div
                                className="indexHeader__stepContentAlert"
                                dangerouslySetInnerHTML={{
                                    __html: new StringService().setSpaces(
                                        'Гарантированные призы перечисляются через СБП на банковскую карту победителя, привязанную к номеру мобильного телефона, указанного при регистрации на Сайте Акции.',
                                    ),
                                }}
                            ></div>
                        </i>
                    </b>
                    <br />
                    <span>
                        ЗА ПОКУПКУ<span className="_degree">3</span>
                    </span>
                </div>
            </div>
            <div className="indexHeader__step">
                <img
                    src={require('@media/step-icon-4.svg').default}
                    alt=""
                    className="indexHeader__stepThumb"
                />
                <div className="indexHeader__stepContent">
                    <b>УЧАСТВУЙ</b>
                    <br />
                    В РОЗЫГРЫШАХ
                    <br />
                    ЕЖЕНЕДЕЛЬНОГО
                    <br />И ГЛАВНОГО ПРИЗА
                </div>
            </div>
        </div>
    );
};

export default renderSteps;
