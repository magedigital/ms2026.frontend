import React from 'react';

import Button from '@components/button/Button.tsx';
import { appStore } from '@store/store.tsx';

import I from '../types.ts';

const renderGames: I['renderGames'] = function () {
    return (
        <div className="indexGame__games _COL">
            <h3 className="indexGame__gamesTitle">
                ИГРАЙ И <span>СОК</span>РАЩАЙ
            </h3>
            <div className="indexGame__gamesContent _COL">
                <div className="indexGame__gamesCard _game">
                    <div className="indexGame__gamesCardInner _COL">
                        <h5 className="indexGame__gamesCardTitle">ИПОТЕЧНОЕ БИНГО</h5>
                        <p className="indexGame__gamesCardText">
                            Удвой шансы на участие в розыгрыше 3&nbsp;миллионов рублей!
                        </p>
                        <div className="indexGame__gamesCardButton">
                            <Button className="_backColor">УЧАСТВОВАТЬ</Button>
                        </div>
                    </div>
                </div>
                <div className="indexGame__gamesCard _calc">
                    <div className="indexGame__gamesCardInner _COL">
                        <h5 className="indexGame__gamesCardTitle">ипотечный Калькулятор</h5>
                        <p className="indexGame__gamesCardText">
                            Переведи сумму своей ипотеки в... количество упаковок «Моя Семья»!
                            Узнай, сколько упаковок «Моя Семья» соответствует сумме твоей ипотеки.
                        </p>
                        <div className="indexGame__gamesCardButton">
                            <Button
                                className="_backColor"
                                onClick={() => {
                                    appStore.getState().setPopup({ name: 'calcPopup' });
                                }}
                            >
                                УЧАСТВОВАТЬ
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderGames;
