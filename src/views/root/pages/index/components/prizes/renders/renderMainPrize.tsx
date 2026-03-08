import React from 'react';

import I from '../types.ts';

const renderMainPrize: I['renderMainPrize'] = function () {
    return (
        <div className="indexPrizes__mainprize _COL">
            <div className="indexPrizes__mainprizeInner _COL">
                <img
                    src={require('@media/slogan-main-3.svg').default}
                    alt=""
                    className="indexPrizes__mainprizeSlogan"
                />
                <div className="indexPrizes__mainprizeTitle">
                    <p className="indexPrizes__mainprizeTitleCount">3</p>
                    <p className="indexPrizes__mainprizeTitleText">ГЛАВНЫЙ ПРИЗ</p>
                    <p className="indexPrizes__mainprizeTitleText _large">МЛН РУБЛЕЙ</p>
                </div>
                <p className="indexPrizes__mainprizeText">
                    на сокращение ипотеки!
                    <span>1</span>
                </p>
            </div>
        </div>
    );
};

export default renderMainPrize;
