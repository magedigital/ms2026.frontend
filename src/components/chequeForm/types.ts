import { ChangeEvent } from 'react';

import DefaultI from '@components/default/types';

import { chequeFormSteps } from './static/steps';

type PropsT = {};

type StateT = {
    currentStep: keyof typeof chequeFormSteps;
    mode?: ChequeFormModesT;
    updateListRenderKey?: number;
};

type ChequeFormModesT = 'typing' | 'qr-photo' | 'qr-scan';
type ChequeScanDataT = {
    date: string;
    time: string;
    amount: string;
    fn: string;
    fd: string;
    fp: string;
};

interface ChequeFormI extends DefaultI<PropsT, StateT> {
    scanData?: ChequeScanDataT;

    setStep(s: keyof typeof chequeFormSteps, m?: ChequeFormModesT): Promise<void>;
    uploadQRCode(data: { target: ChangeEvent<HTMLInputElement>['target'] }): Promise<void>;
    setQRCode(data: { data: string; mode: ChequeFormModesT }): Promise<void>;

    renderSteps(this: ChequeFormI): React.ReactNode;
    renderStep(this: ChequeFormI, id: keyof typeof chequeFormSteps): React.ReactNode;
}

export default ChequeFormI;
export type { ChequeFormModesT, ChequeScanDataT };
