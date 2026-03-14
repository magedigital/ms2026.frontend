import DefaultI from '@components/default/types';
import { inputRegs } from '@components/input/static/regs';

type PropsT = {
    value: string;
    name: string;
    setValue: (d: { value: string | number | boolean; name: string }) => Promise<void>;
    uploadFile?: (d: { file: File; name: string }) => Promise<void>;
} & FieldT;

type StateT = {
    addressesList?: string[];
};

type FieldT = {
    type: 'select' | 'input' | 'checkbox' | 'file';
    support?: string;
    input?: Partial<{
        reg: keyof typeof inputRegs;
        support: string;
        regExp: RegExp;
        isAmount: boolean;
        isArea: boolean;
        isPassword: boolean;
        isAddress: boolean;
    }>;
    select?: Partial<{
        list: { id: string; title: string }[];
    }>;
    checkbox?: Partial<{
        content: React.ReactNode;
    }>;
};

interface FieldI extends DefaultI<PropsT, StateT> {
    getAddressesInc: () => void;
    getAddresses(this: FieldI): Promise<void>;

    renderField(this: FieldI): React.ReactNode;
}

export default FieldI;
export type { FieldT };
