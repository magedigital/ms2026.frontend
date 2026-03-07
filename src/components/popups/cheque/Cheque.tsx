import React from 'react';

import Popup from '@components/popup/Popup.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import ChequePopupI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class ChequePopup
    extends Popup<ChequePopupI['props'], ChequePopupI['state']>
    implements ChequePopupI
{
    parent: ChequePopupI['parent'];

    constructor(props: ChequePopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'chequePopup' as const;

    renderContent = renderContent;

    render() {
        // const { chequePopup } = this.props;

        return this.renderPopup({
            render: this.renderContent.bind(this),
        });
    }
}

const mapStore = (s: StoreT) => ({
    chequePopup: s.chequePopup,
});

export default WithStore(ChequePopup, mapStore);
