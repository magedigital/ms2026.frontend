import PopupI from '@components/popup/types';
import { StoreT } from '@store/store';

import { calcValues } from './static/values';

type PropsT = {
    calcPopup: StoreT['calcPopup'];
};

type StateT = {
    amount: string;
    step: 'start' | 'process' | 'result';
    currentProgressStep?: number;
    currentTab: keyof typeof calcValues;
};

interface CalcI extends PopupI<PropsT, StateT> {
    lineAnimateId?: number;

    setInputSize(this: CalcI): void;
    amountHandler(this: CalcI, d: { value: string }): Promise<void>;

    start(this: CalcI): Promise<void>;

    renderStartHead(this: CalcI): React.ReactNode;
    renderStartForm(this: CalcI): React.ReactNode;
    renderStartButtons(this: CalcI): React.ReactNode;
    renderProcess(this: CalcI): React.ReactNode;
    renderResult(this: CalcI): React.ReactNode;
}

export default CalcI;
