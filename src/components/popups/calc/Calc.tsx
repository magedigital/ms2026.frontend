import React from 'react';

import Popup from '@components/popup/Popup.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import amountHandler from './methods/amountHandler.ts';
import changePropsCb from './methods/changePropsCb.ts';
import init from './methods/init.ts';
import setInputSize from './methods/setInputSize.ts';
import start from './methods/start.ts';

import CalcI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderProcess from './renders/renderProcess.tsx';
import renderResult from './renders/renderResult.tsx';
import renderStartButtons from './renders/renderStartButtons.tsx';
import renderStartForm from './renders/renderStartForm.tsx';
import renderStartHead from './renders/renderStartHead.tsx';

class Calc extends Popup<CalcI['props'], CalcI['state']> implements CalcI {
    parent: CalcI['parent'];

    constructor(props: CalcI['props']) {
        super(props);
        this.state = {
            amount: '0',
            step: 'start',
            currentTab: '0.2',
            // currentProgressStep: 2,
            isInit: false,
        };

        this.parent = React.createRef();
    }

    name = 'calcPopup' as const;
    changingProps = ['mainContent'];

    init = init;
    changePropsCb = changePropsCb;

    start = start;

    setInputSize = setInputSize;
    amountHandler = amountHandler;

    renderContent = renderContent;
    renderStartHead = renderStartHead;
    renderStartForm = renderStartForm;
    renderStartButtons = renderStartButtons;
    renderProcess = renderProcess;
    renderResult = renderResult;

    render() {
        return this.renderPopup({
            render: this.renderContent.bind(this),
        });
    }
}

const mapStore = (s: StoreT) => ({
    calcPopup: s.calcPopup,
    mainContent: s.mainContent,
});

export default WithStore(Calc, mapStore);
