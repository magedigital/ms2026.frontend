import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    return (
        <div className="zagl__content _COL _COL_CENTER">
            <p className="zagl__contentSupport">СКОРО</p>
            <img
                src={require('@media/zagl/ms-slogan.svg').default}
                alt=""
                className="zagl__contentSlogan"
            />
            <img
                src={require('@media/zagl/ms-slogan-2.svg').default}
                alt=""
                className="zagl__contentTitle"
            />
            <div className="zagl__contentOffer _COL _COL_CENTER">
                <p className="zagl__contentOfferTitle">3 000 000 ₽</p>
                <p className="zagl__contentOfferText _main">
                    НА СОКРАЩЕНИЕ ИПОТЕКИ<span>1</span>
                </p>
                <p className="zagl__contentOfferText">
                    А ЕЩЁ - ДЕНЬГИ НА ИПОТЕЧНЫЙ ПЛАТЕЖ КАЖДУЮ НЕДЕЛЮ<span>2</span>
                </p>
            </div>
            <div className="zagl__contentButton _CLICK _ROW _ROW_CENTER">правила акции</div>
        </div>
    );
};

export default renderContent;
