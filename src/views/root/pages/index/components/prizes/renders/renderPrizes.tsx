import React from 'react';

import I from '../types.ts';

const renderPrizes: I['renderPrizes'] = function () {
    return (
        <div className="indexPrizes__prizes">
            <div className="indexPrizes__prizesCard _garant _COL">
                <p className="indexPrizes__prizesCardTitle">ГАРАНТИРОВАННЫЙ ПРИЗ</p>
                <p className="indexPrizes__prizesCardContent">
                    <b>КЭШБЭК</b>
                    <br />
                    <span>
                        НА КАРТУ<span className="_degree">3</span>
                    </span>
                </p>
            </div>
            <div className="indexPrizes__prizesCard _week _COL">
                <p className="indexPrizes__prizesCardTitle">ЕЖЕНЕДЕЛЬНЫЙ ПРИЗ</p>
                <p className="indexPrizes__prizesCardContent">
                    <b>35 тыс. рублей</b>
                    <br />
                    <span>
                        на ипотечный платеж<span className="_degree">2</span>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default renderPrizes;
