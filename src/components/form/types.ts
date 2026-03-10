import EditorI from '@components/editor/types';
import { FieldT } from '@components/field/types';

type PropsT = {
    fields: Record<string, FieldT>;
    button: {
        text: string;
        className: string;
    };
    request: (d: Partial<Record<string, string>>) => Promise<void>;
};

type StateT = {
    form?: Partial<Record<string, string>>;
};

interface FormI extends EditorI<PropsT, StateT> {
    sendForm(this: FormI): Promise<void>;
}

export default FormI;
