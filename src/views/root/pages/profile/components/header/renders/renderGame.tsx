import React from 'react';

import Button from '@components/button/Button.tsx';

import I from '../types.ts';

const renderGame: I['renderGame'] = function () {
    return (
        <div className="profileHeader__game _COL">
            <h3 className="profileHeader__gameTitle">ИПОТЕЧНОЕ БИНГО</h3>
            <p className="profileHeader__gameInfo">У тебя 3 попытки</p>
            <div className="profileHeader__gameButton">
                <Button className="_whiteColor">ИГРАТЬ</Button>
            </div>
        </div>
    );
};

export default renderGame;
