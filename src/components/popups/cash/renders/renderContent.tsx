import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <>
            <div className="popup__innerBox _FULL _empty">
                <div className="popup__cash _COL _COL_H_CENTER">
                    <p className="popup__cashSubTitle">Больше кешбэка за участие в акции</p>
                    <p className="popup__cashTitle">
                        <span>СОК</span>рати ипотеку
                    </p>
                    <div className="popup__cashList">
                        <div className="popup__cashListItem">
                            Только <b>с 16 по 31 июля</b> покупайте продукцию <br />
                            «Моя Семья» объемом 0,95 л и/или 1,93 л
                        </div>
                        <div className="popup__cashListItem">
                            Сканируйте код маркировки <br className="_DESKTOP" />
                            Продукции на крышке на сайте
                        </div>
                        <div className="popup__cashListItem">
                            Получайте гарантированный{' '}
                            <b>
                                двойной <br className="_DESKTOP" />
                                кешбэк
                            </b>{' '}
                            за каждый отсканированный код
                            <p>
                                Подробную информацию см. <br className="_MOBILE" />в{' '}
                                <a href="/upload/docs/rules.pdf" target="_blank">
                                    Правилах Акции
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default renderContent;
