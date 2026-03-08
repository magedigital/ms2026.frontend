import EditorI from '@components/editor/types';
import { StoreT } from '@store/store';

import RegPopupI from '../../types';

type PropsT = {
    isConfirm?: boolean;
    device: StoreT['device'];
    setStep: RegPopupI['setStep'];
    updateListRender: () => Promise<void>;
};

type StateT = {
    form?: Partial<{ login: string }>;
};

interface FormI extends EditorI<PropsT, StateT> {
    sendForm(this: FormI): Promise<void>;

    renderHead(this: FormI): React.ReactNode;
    renderForm(this: FormI): React.ReactNode;
    renderFoot(this: FormI): React.ReactNode;
}

export default FormI;
