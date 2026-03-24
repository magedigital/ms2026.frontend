import React from 'react';

import Default from '@components/default/Default.tsx';

import logout from './methods/logout.ts';

import HeaderI from './types.ts';

import renderGame from './renders/renderGame.tsx';
import renderInfo from './renders/renderInfo.tsx';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    logout = logout;

    renderInfo = renderInfo;
    renderGame = renderGame;

    render() {
        return (
            <div ref={this.parent} className="profileHeader _SECTION">
                <div className="profileHeader__inner _INNER _inner">
                    <h1 className="profileHeader__title _TITLE">ЛИЧНЫЙ КАБИНЕТ</h1>
                    {this.renderInfo()}
                    {this.renderGame()}
                </div>
            </div>
        );
    }
}

export default Header;
