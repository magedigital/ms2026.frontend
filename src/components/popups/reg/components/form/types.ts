import EditorI from '@components/editor/types';
import { StoreT } from '@store/store';

type PropsT = {
    isConfirm?: boolean;
    device: StoreT['device'];
    updateListRender: () => Promise<void>;
};

type StateT = {
    form?: Partial<{ login: string }>;
};

interface FormI extends EditorI<PropsT, StateT> {
    renderHead(this: FormI): React.ReactNode;
    renderForm(this: FormI): React.ReactNode;
    renderFoot(this: FormI): React.ReactNode;
}

export default FormI;
