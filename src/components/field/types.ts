import DefaultI from '@components/default/types';
import { inputRegs } from '@components/input/static/regs';

type PropsT = {
    value: string;
    name: string;
    setValue: (d: { value: string; name: string }) => Promise<void>;
} & FieldT;

type StateT = {};

type FieldT = {
    type: 'select' | 'input';
    support: string;
    input?: Partial<{
        reg: keyof typeof inputRegs;
        support: string;
        regExp: RegExp;
        isAmount: boolean;
    }>;
    select?: Partial<{
        list: { id: string; title: string }[];
    }>;
};

interface FieldI extends DefaultI<PropsT, StateT> {
    renderField(this: FieldI): React.ReactNode;
}

export default FieldI;
export type { FieldT };
