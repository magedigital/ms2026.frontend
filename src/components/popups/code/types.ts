import PopupI from '@components/popup/types';
import { StoreT } from '@store/store';

import { codeSteps } from './static/steps';

type PropsT = {
    chequePopup: StoreT['chequePopup'];
};

type StateT = {
    currentStep: keyof typeof codeSteps;
    updateListRenderKey?: number;
};

interface CodePopupI extends PopupI<PropsT, StateT> {
    error?: string;

    setStep(s: keyof typeof codeSteps, error?: string): Promise<void>;

    renderStep(this: CodePopupI, id: keyof typeof codeSteps): React.ReactNode;
}

export default CodePopupI;
