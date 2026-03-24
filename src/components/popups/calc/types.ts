import PopupI from '@components/popup/types';
import { StoreT } from '@store/store';

import { MainContentT } from '../../../views/root/pages/index/types';

type PropsT = {
    calcPopup: StoreT['calcPopup'];
    mainContent: StoreT['mainContent'];
};

type StateT = {
    amount: string;
    step: 'start' | 'process' | 'result';
    currentProgressStep?: number;
    currentTab: string;
    products?: MainContentT['components']['header']['calculator']['products'];
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
