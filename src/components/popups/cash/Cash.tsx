import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import GameI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class Cash extends Popup<GameI['props'], GameI['state']> implements GameI {
    parent: GameI['parent'];

    constructor(props: GameI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'cashPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: this.renderContent.bind(this),
        });
    }
}

export default Cash;
