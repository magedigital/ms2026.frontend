import React from 'react';

import Default from '@components/default/Default.tsx';

import setPhone from './methods/setPhone.ts';
import setWeek from './methods/setWeek.ts';

import GameI from './types.ts';

import renderGames from './renders/renderGames.tsx';
import renderTableCol from './renders/renderTableCol.tsx';
import renderWinners from './renders/renderWinners.tsx';

class Game extends Default<GameI['props'], GameI['state']> implements GameI {
    parent: GameI['parent'];

    constructor(props: GameI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    setWeek = setWeek;
    setPhone = setPhone;

    renderGames = renderGames;
    renderWinners = renderWinners;
    renderTableCol = renderTableCol;

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
