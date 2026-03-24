import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    return (
        <div className="indexHeader__content _COL _COL_H_CENTER">
            <img
                src={require('@media/slogan-main-1.svg').default}
                alt=""
                className="indexHeader__contentSlogan"
            />
            <img
                src={require('@media/slogan-main-2.svg').default}
                alt=""
                className="indexHeader__contentSubSlogan"
            />
            <p className="indexHeader__contentTitle">3 000 000 ₽</p>
            <p className="indexHeader__contentDescription _title">
                НА СОКРАЩЕНИЕ ИПОТЕКИ <span className="_degree">1</span>
            </p>
            <p className="indexHeader__contentDescription">
                А ЕЩЁ - <b>ДЕНЬГИ НА ИПОТЕЧНЫЙ ПЛАТЕЖ</b> КАЖДУЮ НЕДЕЛЮ{' '}
                <span className="_degree">2</span>
            </p>
        </div>
    );
};

export default renderContent;
