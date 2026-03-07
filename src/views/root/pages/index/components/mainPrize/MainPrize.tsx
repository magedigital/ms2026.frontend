import React from 'react';

import Default from '@components/default/Default.tsx';

import MainPrizeI from './types.ts';

import renderMainPrize from './renders/renderMainPrize.tsx';
import renderPrizes from './renders/renderPrizes.tsx';

class MainPrize extends Default<MainPrizeI['props'], MainPrizeI['state']> implements MainPrizeI {
    parent: MainPrizeI['parent'];

    constructor(props: MainPrizeI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderMainPrize = renderMainPrize;
    renderPrizes = renderPrizes;

    render() {
        return (
            <div ref={this.parent} className="indexPrizes _SECTION">
                <div className="indexPrizes__inner _INNER">
                    {this.renderMainPrize()}
                    {this.renderPrizes()}
                </div>
            </div>
        );
    }
}

export default MainPrize;
