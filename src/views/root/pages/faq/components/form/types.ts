import DefaultI from '@components/default/types';

type PropsT = {};

type StateT = {};

interface FormI extends DefaultI<PropsT, StateT> {
    sendForm(this: FormI, d: Partial<Record<string, string>>): Promise<void>;
}

export default FormI;
