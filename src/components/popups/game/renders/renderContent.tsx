import React from 'react';

import Game from '@components/game/Game.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <>
            <div className="popup__innerBox _FULL _empty">
                <div className="popup__game">
                    <Game
                        callback={async () => {
                            await this.asyncSetState({ isInit: true });
                        }}
                        close={this.close.bind(this)}
                    />
                </div>
            </div>
        </>
    );
};

export default renderContent;
