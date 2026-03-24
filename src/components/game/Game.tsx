import React from 'react';

import Default from '@components/default/Default.tsx';

import init from './methods/init.ts';
import initGame from './methods/initGame.ts';

import GameI from './types.ts';

class Game extends Default<GameI['props'], GameI['state']> implements GameI {
    parent: GameI['parent'];

    constructor(props: GameI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;
    initGame = initGame;

    render() {
        return <div ref={this.parent} className="game _FULL"></div>;
    }
}

export default Game;
