import PopupI from '@components/popup/types';
import { StoreT } from '@store/store';

import { regSteps } from './static/steps';

type PropsT = {
    regPopup: StoreT['regPopup'];
    device: StoreT['device'];
};

type StateT = {
    currentStep: keyof typeof regSteps;
    updateListRenderKey?: number;
};

interface RegPopupI extends PopupI<PropsT, StateT> {
    login?: string;

    setStep(this: RegPopupI, s: keyof typeof regSteps): Promise<void>;

    renderStep(this: RegPopupI, s: keyof typeof regSteps): React.ReactNode;
}

export default RegPopupI;
