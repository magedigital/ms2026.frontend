import React from 'react';

import Default from '@components/default/Default.tsx';

import PrizeI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';

class Prize extends Default<PrizeI['props'], PrizeI['state']> implements PrizeI {
    parent: PrizeI['parent'];

    constructor(props: PrizeI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderHead = renderHead;
    renderContent = renderContent;

    render() {
        return (
            <div ref={this.parent} className="profilePrize _FULL _COL">
                {this.renderHead()}
                {this.renderContent()}
            </div>
        );
    }
}

export default Prize;
