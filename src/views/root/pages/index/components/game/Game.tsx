import React from 'react';

import Default from '@components/default/Default.tsx';

import getWinners from './methods/getWinners.ts';
import getWinnersList from './methods/getWinnersList.ts';
import init from './methods/init.ts';
import setPhone from './methods/setPhone.ts';
import setWeek from './methods/setWeek.ts';

import GameI from './types.ts';

import renderGames from './renders/renderGames.tsx';
import renderTableCol from './renders/renderTableCol.tsx';
import renderTableEmpty from './renders/renderTableEmpty.tsx';
import renderWinners from './renders/renderWinners.tsx';

class Game extends Default<GameI['props'], GameI['state']> implements GameI {
    parent: GameI['parent'];

    constructor(props: GameI['props']) {
        super(props);
        this.state = {
            limit: this.step,
        };

        this.parent = React.createRef();
    }

    step = 15;

    init = init;

    setWeek = setWeek;
    setPhone = setPhone;

    getWinners = getWinners;
    getWinnersList = getWinnersList;

    renderGames = renderGames;
    renderWinners = renderWinners;
    renderTableCol = renderTableCol;
    renderTableEmpty = renderTableEmpty;

    render() {
        return (
            <div ref={this.parent} className="indexGame _SECTION">
                <div className="indexGame__inner _INNER">
                    {this.renderGames()}
                    {this.renderWinners()}
                </div>
            </div>
        );
    }
}

export default Game;
