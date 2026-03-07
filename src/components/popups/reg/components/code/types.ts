import EditorI from '@components/editor/types';
import { StoreT } from '@store/store';

type PropsT = {
    isConfirm?: boolean;
    login: string;
    mailService?: string;
    device: StoreT['device'];
    updateListRender: () => Promise<void>;
};

type StateT = {
    code?: string;
};

interface FormI extends EditorI<PropsT, StateT> {
    renderHead(this: FormI): React.ReactNode;
    renderForm(this: FormI): React.ReactNode;
    renderFoot(this: FormI): React.ReactNode;
}

export default FormI;
