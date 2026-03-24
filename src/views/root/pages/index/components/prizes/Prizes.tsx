import React from 'react';

import Default from '@components/default/Default.tsx';

import PrizesI from './types.ts';

import renderMainPrize from './renders/renderMainPrize.tsx';
import renderPrizes from './renders/renderPrizes.tsx';

class Prizes extends Default<PrizesI['props'], PrizesI['state']> implements PrizesI {
    parent: PrizesI['parent'];

    constructor(props: PrizesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderMainPrize = renderMainPrize;
    renderPrizes = renderPrizes;

    render() {
        return (
            <div ref={this.parent} className="indexPrizes _SECTION" data-ancor="prizes">
                <div className="indexPrizes__inner _INNER">
                    {this.renderMainPrize()}
                    {this.renderPrizes()}
                </div>
            </div>
        );
    }
}

export default Prizes;
