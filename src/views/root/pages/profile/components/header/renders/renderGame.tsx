import React from 'react';

import Button from '@components/button/Button.tsx';
import StringService from '@services/string/String.service.ts';
import { appStore } from '@store/store.tsx';

import I from '../types.ts';

const renderGame: I['renderGame'] = function () {
    const { data } = this.props;

    return (
        <div className="profileHeader__game _COL">
            <h3 className="profileHeader__gameTitle">ИПОТЕЧНОЕ БИНГО</h3>
            <p className="profileHeader__gameInfo">
                У тебя {data.game.attempts}{' '}
                {new StringService().getEndText(data.game.attempts, [
                    'попытка',
                    'попытки',
                    'попыток',
                ])}
            </p>
            <div className="profileHeader__gameButton">
                <Button
                    className="_whiteColor"
                    onClick={() => {
                        appStore.getState().setPopup({ name: 'gamePopup' });
                    }}
                >
                    ИГРАТЬ
                </Button>
            </div>
        </div>
    );
};

export default renderGame;
